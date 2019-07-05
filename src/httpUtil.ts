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
import { log as gLog }  from './log';   const log = gLog('httpUtil');
import * as fs          from "./fsUtil";

// log.level(log.DEBUG);

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
 * sends a http or https GET or POST request and promises to return the result.
 * @param url the URL to pass along to the GET or POST request
 * @param user an optional user {@link Digest Digest}
 * @param postData optional data to post. If provided, a POST request will be sent instead of the default GET 
 * @return promise to provide the result of the request.
 */
export function request(url:URL, user?:Digest, referer?:string, postData?:any):Promise<HttpResponse|string> {
    let options = {
        method:     postData? 'POST': 'GET',
        protocol:   url.protocol,
        host:       url.host,
        hostname:   url.hostname,
        port:       url.port,
        pathname:   url.pathname,
        path:       url.pathname + (url.search || ''),
        headers:    <any>{ 'User-Agent': 'helpful scripts' },
    };
    if (referer) { options.headers.referer = referer; }
    return requestOptions(options, user, postData);
}


/**
 * Establishes a caching of retrieved sites. The class uses a cache location provided
 * during construction. Each `get` call will return a cache for the site, if available.
 * Otherwise, a call to the site is initiated and the result is cached at the specified location.
 * Any returned error codes, such as 404 messages, are treated as valid responses and cached 
 * to be returned future in future calls.
 * 
 * ### Usage
 * ```
 * const cachedGet = new CachedHTTPRequest('./data/cache/');
 * const pageText = await cachedGet.request(url, '');
 * ```
 */
export class CachedHTTPRequest {
    /**
     * Construct a cached get at a specified location int he file system.
     * @param cacheLocation the location for the cache
     * @param user an optional {@link Digest `Digest`} authentication information
     */
    constructor(public cacheLocation: string, public user?:Digest) {
    }

    //--------- private methods -------
    private async requestOnline(url:URL, fname:string) {
        const resp:any = await request(url, this.user);
        log.info(`requested ${url}`);
        await fs.writeTextFile(fname, resp.data);
        return resp.data;
    }
    
    private async requestOffline(fname:string) {
        log.info(`get cached '${fname}'`);
        return await fs.readTextFile(fname);
    }

    //--------- public methods -------

    /**
     * 
     * @param url the URL to request, supports GET and POST
     * @param useCached optional boolean: if `false`, a call to `request` will ignore 
     * any cached version of the response
     */
    public async request(url:URL, useCached=true) {
        const fname = `${this.cacheLocation}${url.host}/${url.pathname}${url.search}`;
        const exists = await fs.isFile(fname);
        return (exists && useCached)? 
            await this.requestOffline(fname) : await this.requestOnline(url, fname);
    }
}



/**
 * Describes an incoming message; used in `Digest.testDigestAuth`
 */
export interface IncomingMessage { 
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
 * general HTTP response structure
 */
export interface HttpResponse {
    response:  any;
    data:      string;
    body?:     any;
}


/**
 * Implements a Digest authentication, used in {@link request `request`} call.
 */
export class Digest {
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
    testDigestAuth(options:any, data:string, response:IncomingMessage): Promise<HttpResponse|string> {
        log.info(`received www-authenticate request for ${options.host}`);

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
        return requestOptions(options);
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

function requestOptions(options:any, user?:Digest, postData?:any):Promise<HttpResponse|string> {
    const prot:any = {
        'http:': require('http'),
        'https:': require('https')
    };
    let auth = (options.headers && options.headers.Authorization);
    log.debug(`requesting ${log.inspect(options, 4)}`);
    return new Promise((resolve:(out:HttpResponse)=>void, reject:(e:string)=>void) => {
        let data = ''; 
        log.debug(`sending request ${auth? 'with authorization ':''}for ${options.protocol}//${options.host}:${options.port}${options.path}`); 
        const req = prot[options.protocol].request(options, (res:any) => {
            const encoding = isBinary(res.headers['content-type'])? 'binary' : 'utf8';
            log.debug(`receiving...${res.headers['content-type']} => ${encoding}`);
            res.setEncoding(encoding);
            res.on('data', (chunk:string) => { data += chunk; });
            res.on('end', () => { log.debug(`received ${encoding}`); resolve({data:data, response:res}); });
        });
        req.on('error', (e:any) => reject(e));

        // write data to request body
        if (postData !== undefined) { req.write(postData); }
        req.end();
    })
    .then((res:HttpResponse) => {
        if (user && res.response.headers['www-authenticate']) { 
            return user.testDigestAuth(options, res.data, res.response);
        } else {
            return res; 
        } 
    });
}
