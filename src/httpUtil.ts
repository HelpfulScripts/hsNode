/**
 * # Utility functions for HTTP and HTTPS calls
 * Convenience functions for http and https access, wrapped in Promises.
 * - &nbsp; {@link httpUtil.request request}: sends a http or https GET or POST request
 * - &nbsp; {@link httpUtil.CachedHTTPGet CachedHTTPGet}: used for cached requests
 * 
 * ### Usage:
 * ```
 * import { http } from 'hsnode';
 * const cache = new CachedHTTPRequest('./cacheDir/');
 * const url = new URL('http://mysite.com/');
 * cache.request(url);
 * ```
 */

/** */

import { URL }          from 'url';
import { createHash }   from 'crypto';
import { Log }          from './index';   const log = new Log('httpUtil');
import * as fs          from "./fsUtil";
import http             from 'http';
import https            from 'https';
import { Pace }         from 'hsutil';

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
    response?:   any;
    data:       string;
    body?:      any;
    error?:     any;
}



export class Request {
    private pending = 0;
    private pendingDigits = 3;
    private pace = new Pace();

    private user: Digest;
    
    private authToken: string;

    public cacheBaseLocation:string;

    public setDigest = (user:string, password:string) =>
        this.user = new Digest(user, password)
    
    public setAuthToken = (token:string) =>
        this.authToken = token
    
    /**
     * sets a `Pace` for the requests: 
     * @param pace number of ms between requests
     * @param max upper limit of concurrent outstanding requests
     */
    public setPace = (pace:number, max=10) => {
        this.pace.setPace(pace);
        this.pace.setMaxConcurrent(max);
    }
    
    public decodeJSON = (options:Options) => false;

    /**
     * constructs the cache name to use. The function call can be overwritten with 
     * a custom function to modify cache locations. 
     * @param options the request options
     */
    public cacheName = (options:Options):string => //     'q=.../' --> 'q=...-'    remove ?
        `${this.cacheBaseLocation}${options.path.replace(/q=(.*?)\//g,'q=$1-').replace(/\?/g,'')}`

    public get = async (url:string|URL, useCached=true) => 
        this.decodedRequest(url, 'GET', useCached)

    public post = async (url:string|URL, postData:any, useCached=true) => 
        this.decodedRequest(url, 'POST', useCached, postData)

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
     * If `decodeJSON` returns `true` for the given url, an attempt will be made to covert
     * the retrieved content to a JSON object. 
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
            return result;
        } catch(e) {
            return undefined;
        }
    }

    protected async readCached(fname:string, decodeJSON:boolean) {
        const content = decodeJSON? await fs.readJsonFile(fname+'.json') : await fs.readFile(fname+'.src', false); 
        log.transient(`cached ${fname.slice(this.cacheBaseLocation.length+1)}                     `);
        return content;
    }

    protected async writeCached(fname:string, decodeJSON:boolean, data:any) {
        if (decodeJSON) { 
            data = JSON.parse(data === ''? '{}' : data); 
        }
        if (fname) { try {
            if (decodeJSON) { 
                await fs.writeJsonFile(fname+'.json', data === ''? '{}' : data); 
            }
            else { await fs.writeFile(fname+'.src', data, false); }
        } catch(e) {
            log.error(e);
        }}
        return data;
    }

    protected async requestOptions(options:Options, useCached:boolean, postData?:any):Promise<string> {
        const decode = this.decodeJSON(options);
        const pending = () => `  ${this.pending}`.slice(-this.pendingDigits);
        const fname = this.cacheBaseLocation? this.cacheName(options) : undefined;
        if (fname && useCached) { try { 
            return await this.readCached(fname, decode); 
        } catch(e) {}}

        let response: Response;
        const err = <{statusCode:string, statusMessage:string, url:string}>{};
        try { 
            log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) requesting ${options.url}`);
            response = this.pace? await this.pace.add(() => this.request(options, postData)) : await this.request(options, postData);
            log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()})             `);
            if((response.response.statusCode||response.response.status) === 200) {
                return this.writeCached(fname, decode, response.data);
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
        log.debug(`requesting ${log.inspect(options, 4)}`);
        const response = await new Promise((resolve:(out:Response)=>void, reject:(e:Response)=>void) => {
            let data = ''; 
            log.debug(`sending request ${auth? 'with authorization ':''}for ${options.protocol}//${options.host}:${options.port}${options.path}`); 
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
        if (this.user && response.response.headers['www-authenticate']) { 
            const digestOptions = this.user.testDigestAuth(options, response.data, response.response);
            return this.request(digestOptions);
        } else {
            return response; 
        } 
    }
}

/**
 * Decodes an xm or html string into a JSON representation
 * @param xml 
 */
export function xml2json(xml:string):any {
    let result:any;
    while(xml.length>0) {
        let tag:any = xml.match(/<.*?>/);
        if (tag && tag.length > 0) {
            tag = tag[0].substring(1, tag[0].length-1);     // strip '<' and '>'
            result = result || {};
            tag = getAttributes(tag, result);
            let start = xml.indexOf(`<${tag}`);
            let end  = xml.indexOf(`</${tag}>`);
            if (end > 0) {
                const close = xml.indexOf('>', start);
                let content = xml.substring(close+1, end).trim();   // remove opening and closing tag
                result[tag] = this.xml2json(content);
                xml = xml.substring(end+tag.length+3).trim(); 
            } else {    // no closing tag
                //result[tag] = {};
                xml = xml.substring(xml.indexOf('>')+1).trim(); // remove tag
            }
        } else { // literal
            result = xml.slice(0);
            xml = '';
        }
    }
    return result;
}




/**
 * Describes an incoming message; used in `Digest.testDigestAuth`
 */
interface IncomingMessage { 
    headers:        any;
    httpVersion:    string;
    method:         string;
    rawHeaders:     string[];    
    rawTrailers:    string[];
    statusCode:     number;
    statusMessage:  string;
    url:            string;
    setEncoding:    (enc:string) => void;
    on:             (event:string, callback: any) => void;
    caseless:       any;
    _headers:       any;
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
    // _.omit(data, (elt) => {
    //   console.log('elt ' + elt + ' et condition : ' + elt === null);
    //   return elt == null;
    // });
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

function getAttributes(tag:string, result:any) {
    let fields = tag.split(/(?=([^"]*"[^"]*")*[^"]*$)\s+/g);
    tag = fields[0].trim();
    result[tag] = {};
    fields.map(f => {
        if (f) {
            let attrs = f.split('=');
            result[tag].attrs = result[tag].attrs || {};
            if (attrs.length>1) {
                result[tag].attrs[attrs[0].trim()] = attrs[1].replace(/\"/g, '').trim();
            }
        }
    });
    return tag;
}

