/**
 * Convenience functions for http access, wrapped in Promises.
 * - {@link hsNode.httpUtil#methods_request request}
 */

/** */
const http  = require('http');


//===============================================================================
//  Low level Promise wrappers
 
/**
 * sends a http request and promises to return the result.
 * @param options the options to pass along to the request
 * @param postData optional data to post
 * @return promise to provide the result of the request.
 */
export function request(options:any, postData?:any):Promise<any> {
    return new Promise((resolve:(out:string)=>void, reject:(e:any)=>void) => {
        let data = ''; 
        const req = http.request(options, (res:any) => {
            res.setEncoding('utf8');
            res.on('data', (chunk:string) => { data += chunk; });
            res.on('end', () => resolve(data));
        });
        req.on('error', (e:any) => reject(e));

        // write data to request body
        if (postData !== undefined) { req.write(postData); }
        req.end();
    });
}

/**
 * sends a http get request and promises to return the result.
 * @param {object} options the options to pass along to the get request
 * @return {Promise} promise to provide the result of the request.
 */
export function get(url:string):Promise<any> {
    return new Promise((resolve:(out:string)=>void, reject:(e:string)=>void) => {
        let data = ''; 
        const req = http.get(url, (res:any) => {
            res.setEncoding('utf8');
            res.on('data', (chunk:string) => { data += chunk; });
            res.on('end', () => resolve(data));
        });

        req.on('error', (e:string) => reject(e));
    });
}
