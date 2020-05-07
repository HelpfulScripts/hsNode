/**
 * Utility functions for HTTP and HTTPS GET and POST. The module wraps the respective `Node` calls in async/await patterns
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
 * `request.get(url, false)` behaves as if `cache` is undefined
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
import { createHash }   from 'crypto';
import { Log }          from './index';   const log = new Log('Request');
import * as fs          from "./fsUtil";
import http             from 'http';
import https            from 'https';
import { Pace }         from 'hsutil';
var html2json = require('html2json').html2json;

log.messageLength = 120;

const protocol = {http:http, https:https};

// log.level(log.DEBUG);

export interface Config {
    user?:      Digest;
    referer?:   string;
}

export interface Options {
    url:        string;
    method:     'GET'|'POST';
    protocol:   string;
    host:       string;
    hostname:   string;
    port:       string;
    pathname:   string;
    path:       string;
    headers:    any;
    rejectUnauthorized: boolean;
}

/**
 * general HTTP response structure
 */
export interface Response {
    response: IncomingMessage;
    data:       string;
    body?:      any;
    error?:     any;
}

/**
 * Describes an incoming message; used in `Digest.testDigestAuth`
 */
interface IncomingMessage { 
    headers:        {'content-type': string; };
    httpVersion:    string;
    method:         string;
    rawHeaders:     string[];    
    rawTrailers:    string[];
    status:         number;
    statusCode:     number;
    statusMessage:  string;
    url:            string;
    setEncoding:    (enc:string) => void;
    on:             (event:string, callback: any) => void;
    caseless:       any;
    _headers:       any;
}



/** 
 * decoder function interface. For the given `Options` and data a function implementation  
 * shoul;d return a decoded version of `data`.
 */
export interface Decoder {
    /**
     * decoder function, returns a decoded version of `data`
     * @param options the `Options` structure used to place the request
     * @param data the data to decode
     * @return a decoded version of `data`
     */
    (data:string, options:Options):any;
}


export class Request {
    public static decoders = {
        str2json:  (data:string) => JSON.parse(data),
        html2json: (data:string) => html2json(data)
    };

    /** the pacing queue used to manage request flow */
    private pace:Pace;

    /** the credentials to use for authentication, or `undefined` */
    private credentials: {user:string; password:string};
    
    /** the `AuthToken` to set in the header */
    private authToken: string;

    /** the location to use for caching */
    public cache:string;

    /**
     * sets the credentials for `Basic` and `Digest` authentications.
     * @param user the username to use; if `undefined`, then authentication will be disabled.
     * @param password the password to use
     */
    public setCredentials = (user?:string, password?:string) => {
        this.credentials = user===undefined? undefined : { user: user, password: password };
    }
    
    /** sets an authentication token that is passed on to the server via a header field `AuthToken` */
    public setAuthToken = (token?:string) =>
        this.authToken = token
    
    /**
     * sets a `Pace` for the requests: 
     * @param pace number of ms between requests
     * @param max upper limit of concurrent outstanding requests
     */
    public setPace = (pace?:number, max=10) => {
        this.pace = pace===undefined? undefined : new Pace(pace, max);
    }
    
    /** 
     * sets an optional decode function for retrieved content. The function will be 
     * applied to content retrieved either from the cache or from the server response.
     * Convenience function are available via the static list `Request.decoders`.
     * For example, `request.decode = Request.decoders.str2json
     */
    public decode = <Decoder>undefined;

    /**
     * constructs the cache name to use. The function call can be overwritten with 
     * a custom function to modify cache locations. 
     * This default implementation uses the `path` element in `Options` to create 
     * required subdirectories underneath the `cache` location.
     * @param options the request options
     */
    public cacheName = (options:Options):string => //     'q=.../' --> 'q=...-'    remove ?
        `${this.cache}/${options.path.replace(/q=(.*?)\//g,'q=$1-').replace(/\?/g,'')}`

    /**
     * gets the content for the addressed `url`. `HTTP` and `HTTPS` are supported.
     * @param url the address to fetch from
     * @param useCached optional, defaults to `true`. Set to `false` to avoid using 
     * the cache for this call in case caching is enabled.
     */
    public get = async (url:string|URL, useCached=true) => 
        this.decodedRequest(url, 'GET', useCached)

    /**
     * posts the content in `postData` to the server at the address specified by `url`.
     * @param url the address to post to
     * @param postData the data to post
     */
    public post = async (url:string|URL, postData:any) => 
        this.decodedRequest(url, 'POST', false, postData)




    protected getOptions(url:string|URL, method:'GET'|'POST'):Options {
        if (typeof url === 'string') { url = new URL(url); }
        const options = {
            rejectUnauthorized: false,
            url:        url.toString(),
            method:     method,
            protocol:   url.protocol,
            host:       url.host,
            hostname:   url.hostname,
            port:       url.port,
            pathname:   url.pathname,
            path:       url.pathname + (url.search || ''),
            headers:    <any>{},
        };  
        if (this.authToken) { options.headers.AuthToken = this.authToken; }
        return options;  
    }

    /**
     * issues a `GET` or `POST` call and returns the `url` response. 
     * If `usedCache` is `true`, the cached version will be returned if available. 
     * Otherwise an `http` or `https` request is initiated, the result cached and returned.
     * If `decode` is defined it is called with the retrieved data before returning the result. 
     * @param url the url to retrieve
     * @param method 'GET' or 'POST'
     * @param useCached if `true`, attempt to return a cahced version. If `false`, or no cached version
     * exists, a remote call will be attempted.
     * @param postData data to submit for a `POST` call
     */
    protected async decodedRequest(url:string|URL, method:'GET'|'POST', useCached:boolean, postData?:any):Promise<any> {
        const options = this.getOptions(url, method);
        try { 
            const result = await this.requestOptions(options, useCached, postData); 
            return this.decode? this.decode(result, options) : result;
        }
        catch(e) { return undefined; }
    }

    /**
     * attempts to read a cached file and returns `undefined` if none is found.
     * The attempt consists of two steps:
     * - return a file named `<fname>.txt` as a text file, if available
     * - return a file names `<fname>.bin` as a binary file, if available
     * @param fname the path and name of the file, without extension
     * 
     */
    protected async readCached(fname:string) {
        let result;
        try {
            if (await fs.isFile(fname+'.txt')) {
                result = await fs.readTextFile(`${fname}.txt`); 
            } else if (await fs.isFile(fname+'.bin')) {
                result = await fs.readFile(`${fname}.bin`, false); 
            }
        } catch(e) {}
        if (result) { log.transient(`found cache for ${fname} `); }
        return result;   // no cache found
    }

    protected async writeCached(fname:string, data:any, contentType:string) {
        try {
            let txt = false;
            if (contentType===undefined) { contentType = 'text/html'; }
            else { contentType = contentType.split(';')[0]; }
            const subTypes = contentType.split('/');
            switch (subTypes[0]) {
                case 'text':        txt = true; break;
                case 'image':       
                case 'audio':
                case 'font':        break;
                case 'application': switch(subTypes[1]) {
                    case 'json':    txt = true; break;
                    case 'pdf':     break;
                    default: log.debug(`caching ${contentType} as binary for ${fname}`);    
                }
                break;
                default: log.warn(`caching ${contentType} as binary for ${fname}`);    
            }
            return await (txt? fs.writeTextFile(`${fname}.txt`, data) : fs.writeFile(`${fname}.bin`, data, false));
        } catch(e) { log.warn(`error writing cache for content ${contentType} and file ${fname}: ${e}`); }
    }

    protected async requestOptions(options:Options, useCached:boolean, postData?:any):Promise<string> {
        const fname = this.cache? this.cacheName(options) : undefined;
        if (fname && useCached && options.method === 'GET') { 
            const result = await this.readCached(fname); 
            if (result !== undefined) { return result; }
        }

        let response: Response;
        const err = <{statusCode:string|number, statusMessage:string, url:string}>{};
        try { 
            if (this.pace) { 
                log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) requesting ${options.url}`); 
                response = await this.pace.add(() => this.request(options, postData));
                log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()})             `);
            }
            else { 
                log.info(`requesting ${options.url}`); 
                response = await this.request(options, postData);
            }
            if((response.response.statusCode||response.response.status) === 200) {
                if (fname && options.method === 'GET') {
                    await this.writeCached(fname, response.data, response.response.headers["content-type"]);
                }
                return response.data;
            }
            log.warn(`${response.response.statusCode||response.response.status} requesting ${options.url}: ${response.response.statusMessage}`);
            err.statusCode = response.response.statusCode || response.response.status|| 'no code';
            err.statusMessage = response.response.statusMessage || 'no message';
        }
        catch(e) {
            log.warn(`error requesting ${options.url}: ${e.error.code}\n${log.inspect(e, 2)}`);
            err.statusCode = response.response.statusCode || response.response.status|| 'no code';
            err.statusMessage = JSON.stringify(e);
        }
        err.url = options.url;  
        fs.writeTextFile(fname + '.error.txt', JSON.stringify(err)); 
        throw(`response code ${err.statusCode} for ${options.url}`);
    }

    protected async request(options:Options, postData?:any):Promise<Response> {
        const httpProt:string = options.protocol.slice(0,-1);
        const http = protocol[httpProt];
        let auth = (options.headers && options.headers.Authorization);
        const response = await new Promise((resolve:(out:Response)=>void, reject:(e:{data:string, error:any})=>void) => {
            let data = ''; 
            log.debug(`requesting ${log.inspect(options, 4)}`);
            const req = http.request(options, (res:any) => {
                const encoding = isBinary(res.headers['content-type'])? 'binary' : 'utf8';
                log.debug(`receiving...${res.headers['content-type']} => ${encoding}`);
                res.setEncoding(encoding);
                res.on('data', (chunk:string) => data += chunk);
                res.on('end', () => resolve({data:data, response:res}));
            });
            req.on('error', (e:any) => reject({data:'', error:e}));
    
            // write data to request body
            if (postData !== undefined) { req.write(postData); }
            req.end();
        });
        const prot = response.response.headers['www-authenticate'];
        if (this.credentials && prot) { 
            if (prot.trim().indexOf('Digest') === 0) {
                const digest = new Digest(this.credentials.user, this.credentials.password);
                digest.testDigestAuth(options, response.data, response.response);
                return this.request(options);
            }
            if (prot.trim().indexOf('Basic') === 0) {
                options.headers.Authorization = 'Basic ' + _btoa(`${this.credentials.user}:${this.credentials.password}`);
                return this.request(options);
            }
        } else {
            return response; 
        } 
    }
}

function _btoa(str:string|Buffer):string {
    const buffer = str instanceof Buffer? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}

function _atob(str:string):string {
    return Buffer.from(str, 'base64').toString('binary');
}
  
  



/**
 * Implements a Digest authentication, used in {@link request `request`} call.
 */
class Digest {
    nc = 0;
    username:string;
    password:string;

    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }

    /**
     * Update and zero pad nc
     */
    updateNC():string {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }

    /**
     * Parse challenge digest
     * @param qop 
     */
    generateCNONCE(qop:string) {
        let cnonce:any;
        let nc:string;

        if (typeof qop === 'string') {
            let cnonceHash = createHash('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return {cnonce: cnonce, nc: nc};
    }

    /**
     * 
     * @param options 
     * @param data 
     * @param response 
     */
    testDigestAuth(options:Options, data:string, response:IncomingMessage): Options {
        log.debug(`received www-authenticate request for ${options.host}`);

        let challenge:any = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = createHash('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = createHash('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
    
        let {nc, cnonce} = this.generateCNONCE(challenge.qop);
        let hash = createHash('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
    
        // Setup response parameters
        let authParams:any = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
    
        authParams = omitNull(authParams);
    
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
        }
    
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}

//----------- Local functions ------------------------------

function omitNull(data:any) {
    let newObject = {};
    Object.keys(data).forEach((k:string) => {
        if (data[k] !== null && data[k] !== undefined) { newObject[k] = data[k]; }
    });
    return newObject;
}

/**
 * Compose authorization header
 * @param params 
 */
function compileParams(params:any) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}

/**
 * return `true` if double quotes are needed for `entry`
 * @param entry
 */
function putDoubleQuotes(entry:string) {
    return ['qop', 'nc'].indexOf(entry)<0;
}

function parseDigestResponse(digestHeader:string) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.split(',').forEach((part:string) => { 
        const kv = part.split('=').map((v:string) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
    });
    return params;
}

function isBinary(contentType:string) {
    const binary = {
        'text/html':    false,
        'text/plain':   false,
        'image/jpeg':   true,
        'image/png':    true
    };
    const result = binary[contentType];
    return (result === undefined)? false : result;
}

