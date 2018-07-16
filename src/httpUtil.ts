/**
 * Convenience functions for http access, wrapped in Promises.
 * - {@link hsNode.httpUtil#methods_request request}
 */

/** */
const  http =  require('http');
import { URL }        from 'url';
import { createHash } from 'crypto';
import { Log }        from './log'; 
const log = new Log('httpUtil');

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
export interface HttpResponse {
    response:  any;
    data:      string;
    body?:     any;
}

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

    testDigestAuth(options:any, data:string, response:IncomingMessage): Promise<HttpResponse|string> {
        if (!response.headers['www-authenticate']) { return Promise.resolve({response:response, data:data}); } 
        log.info(`received ${response.statusCode} www-authenticate request for ${options.host}`);

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
        return request(options);
    }
}

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

//===============================================================================
//  Low level Promise wrappers
 
/**
 * sends a http request and promises to return the result.
 * @param options the options to pass along to the request
 * @param postData optional data to post
 * @return promise to provide the result of the request.
 */
function request(options:any, postData?:any):Promise<HttpResponse|string> {
    let auth = false;
    if (options.headers && options.headers.Authorization) { auth = true; }
    return new Promise((resolve:(out:HttpResponse)=>void, reject:(e:string)=>void) => {
        let data = ''; 
        log.debug(`sending request ${auth? 'with authorization ':''}for ${options.protocol}//${options.host}:${options.port}${options.path}`); 
        const req = http.request(options, (res:any) => {
            res.setEncoding('utf8');
            res.on('data', (chunk:string) => { data += chunk; });
            res.on('end', () => { resolve({data:data, response:res}); });
        });
        req.on('error', (e:any) => reject(e));

        // write data to request body
        if (postData !== undefined) { req.write(postData); }
        req.end();
    })
    .then((res:HttpResponse) => 
        options.myDigest? options.myDigest.testDigestAuth(options, res.data, res.response) : res)
    ;
}


/**
 * sends a http get request and promises to return the result.
 * @param url the url to pass along to the get request
 * @return promise to provide the result of the request.
 */
export function get(url:string):Promise<HttpResponse|string> {
    const Url:any = new URL(url);
    const options = {
        host:       Url.host,
        hostname:   Url.hostname,
        port:       Url.port,
        method:     'GET',
        path:       Url.pathname+Url.search,
        protocol:   Url.protocol,
        headers:    { 
            'User-Agent': 'helpful scripts'
        },
        myDigest: (Url.username && Url.password)? new Digest(Url.username, Url.password) : undefined
    };
    return request(options);
}

function getAttributes(tag:string, result:any) {
    let fields = tag.split(/(?=([^"]*"[^"]*")*[^"]*$)\s+/g);
    tag = fields[0].trim();
    result[tag] = {};
    if (fields.length>0) {
        for (let i=1; i<fields.length; i++) {
            let attrs = fields[i].split('=');
            result[tag].attrs = result[tag].attrs || {};
            result[tag].attrs[attrs[0].trim()] = attrs[1].split('"')[1].trim();
        }
    }
    return tag;
}

export function decodeXmlResult(xml:string):any {
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
                let content = xml.substring(start+tag.length+2, end).trim();   // remove opening and closing tag
                result[tag] = this.decodeXmlResult(content);
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