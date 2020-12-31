/**
 * Utility functions for HTTP and HTTPS GET and POST. The module builds upon 
 * [hsUtils.Request](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/hsUtil.Request)
 * and provides support for
 * - simple authentication methods, 
 * - local caching,  
 * - decoding of received comntent.
 * - request pacing
 * 
 * ### Authentication
 * Authentication is enabled by setting {@link Request.Request.setCredentials `request.setCredentials`} before any call to 
 * {@link Request.Request.get `request.get`} or {@link Request.Request.post `request.post`}.
 * The following authentication schemes are currently supported:
 * - Basic
 * - Digest
 * 
 * ### Caching
 * If caching is enabled, `GET` requests will attempt to return an available cached content
 * before issuing the request to the server.
 * Caching is disabled by default and can be enabled by setting a caching directory location before any `GET` call
 * `request.cache = './data'`.
 * Once set, individual `request.get(url)` requests will by default use caching. This can be 
 * disabled on a per call basis by providing `false` as a second parameter:
 * `request.get(url, false)` behaves as if `cache` is undefined.
 * Likewise, to disable all caching on future `GET` calls, set 
 * `request.cache = undefined`.
 * 
 * ### Decoding
 * Content received from a server or a cache can be decoded before returning the result. 
 * Decoding is disabled by default and can be enabled by setting a `Decoder` function:
 * `request.decode = Request.decoders.str2json`
 * 
 * For convenience, the following predefined decoder functions are provided as static members of `Request.decoders`:
 * - str2json applies JSON.parse to the content to return an object literal
 * - html2json applies (html2json)[https://github.com/jxck/html2json#readme] to the content
 * 
 * ### Pacing
 * Enable request pacing via `request.setPace(ms, max)`. When enabled, requests will be issued with a minimal 
 * amount of `ms` milliseconds between them, and there will never be more than `max` number of calls pending.
 * All additional calls will be placed in a queue until the `ms` abd `max` conditions allow calling them.
 * 
 * ### Usage:
 * ```
 * import { Request } from 'hsnode';
 * const request = new Request.Request();
 * request.cache = __dirname + '/../_data/cache';
 * request.decode = (options:http.Options) => options.path.indexOf('binData?id=') < 0;
 * request.setAuthToken(apptokens.token);
 * const content = await request.get('http://...');
 * ```
 */

/** */

import { URL }          from 'url';
import { Log }          from './log';   const log = new Log('NodeRequest');
import * as fs          from "./fsUtil";
import http             from 'http';
import https            from 'https';
import { Request as RequestUtil }   from 'hsutil';
import { Options }      from 'hsutil';
import { Response }     from 'hsutil';
export { Response }     from 'hsutil';

const html2json = require('html2json').html2json;

log.messageLength = 120;

const protocol = {"http:":http, "https:":https};


export class Request extends RequestUtil {
    public static decoders = { 
        str2json:  (data:string) => { try {return JSON.parse(data)} catch(e) { return {}}},
        html2json: (data:string) => { try { return html2json(data); } catch(e) { return {}; }}
    };

    /** the `log` facility to use */
    protected log: Log = log;

    public setLogFile(file:string) {
        this.log.logFile(file);
    }

    /** 
     * the location to use for caching. Set this property to the caching directory, e.g.:
     * `request.cache = './bin'`, ommitting a trailing `/`. 
     * To disable caching, set it to `undefined`.
     */
    public cache:string;

    protected getURL(url:string|URL):URL { 
        return (typeof url === 'string')? new URL(url) : url; 
    }

    /**
     * constructs the cache name to use for the request instance described in `options`. 
     * The function call can be overwritten with a custom function to modify cache locations. 
     * This default implementation uses `request.cache/` as a prefix and adds 
     * the `path` element in `Options` to create required subdirectories 
     * underneath the `cache` location.
     * @param options the request options
     */
    public cacheName = (options:Options):string =>
        this.cache===undefined? undefined :  //   'q=.../' --> 'q=...-'    remove ?
            `${this.cache}/${options.path.replace(/q=(.*?)\//g,'q=$1-').replace(/\?/g,'')}`

    /**
     * attempts to read a cached file and returns `undefined` if none is found.
     * The attempt consists of two steps:
     * - return a file named `<fname>.txt` as a text file, if available
     * - return a file names `<fname>.bin` as a binary file, if available
     * @param fname the path and name of the file, without extension
     * 
     */
    protected async readCached(fname:string):Promise<Response> {
        try {
            const meta = JSON.parse(await fs.readTextFile(`${fname}-meta.json`)); 
            const data = await fs.readFile(fname+'.bin', false);
            if (this.pace ) {
                this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) found cache for ${fname} `); 
            } else {
                this.log.transient(`found cache for ${fname} `); 
            }
            return {response:meta, data: data};   
        } catch(e) {
            return undefined; // no cache found
        }
    }

    protected async writeCached(fname:string, response:Response) {
        try {
            // this.log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${fname} `); 
            const type = response.response.headers["content-type"];
            const meta = {
                headers: {...response.response.headers},
                statusCode: response.response.statusCode,
                statusMessage: response.response.statusMessage,
                txt: response.response.txt
            }
            await fs.writeTextFile(`${fname}-meta.json`, JSON.stringify(meta));
            await fs.writeFile(`${fname}.bin`, <string>response.data, false);
       } catch(e) { this.log.warn(`error writing cache for content ${response.response.headers["content-type"]} and file ${fname}: ${e}`); }
    }

    protected async requestOptions(options:Options, useCached:boolean, postData?:any):Promise<Response> {
        const fname = this.cacheName(options);
        if (fname && useCached && options.method === 'GET') { 
            const result = await this.readCached(fname); 
            if (result !== undefined) { return result; }
        }

        const response = await super.requestOptions(options, useCached, postData);
        
        const code = response.response.statusCode||response.response.status;
        if(code >= 200 && code < 300) {
            if (fname && options.method === 'GET') {
                await this.writeCached(fname, response);
            }
        }
        return response;
    }



    protected async issueRequest(options:Options, postData?:any):Promise<Response> {
        const prot = protocol[options.protocol];
        return new Promise((resolve:(out:Response)=>void, reject:(e:any)=>void) => {
            let data = ''; 
            this.log.info(()=>`requesting ${options.url} with headers\n${this.log.inspect(options.headers)}`);
            const req = prot.request(options, (res:any) => {
                res.txt = Request.isTextualContent(res.headers['content-type'])
                res.setEncoding(res.txt?'utf8':'binary');    // returns data as Buffer if not set
                res.on('data', (chunk:string) => data += chunk);
                res.on('end', () => {
                    resolve({data:data, response:res});
                });
            });
            req.on('error', (e:any) => {
                reject(e);
            });
    
            // write data to request body
            if (postData !== undefined) { req.write(postData); }
            req.end();
        });
    }
}
