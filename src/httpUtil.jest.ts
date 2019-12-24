// const  http =  require('http'); 

import { URL }          from 'url';
import { Log }          from './log';  const log = new Log('httpUtil.jest');
import * as httpUtil    from "./httpUtil";

jest.mock('http');
const http = require('http');

const payloads = [
    { path: '/myPath?query=value', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myAuth', code:403, content: '<html><body><h1>403 - Forbidden</h1></body></html>' },
    { path: '/myDigest', code:401, content: '<html><body><h1>Show me the goods</h1></body></html>' },
];

http.__setPayLoads(payloads);

// http.request.mockImplementation((u:URL) => {
//     const load:any = payloads.filter(p => u.pathname === p.path);
//     return Promise.resolve(load.content);
// });


describe('httpUtil', ()=>{

    test(`myPath?query=value should have h1`, async () => {
        try {
            const Url = new URL('http://my.space.com/myPath?query=value');
            expect.assertions(5);
            const r = <httpUtil.HttpResponse>await httpUtil.request(Url).catch();
            const json = httpUtil.xml2json(r.data);
            await expect(r.response.headers['content-type']).toMatch(/text\//);
            await expect(json).toHaveProperty('html');
            await expect(json.html).toHaveProperty('body');
            await expect(json.html.body).toHaveProperty('h1');
            await expect(json.html.body.h1).toEqual('The Content');
            }
        catch(e) { log.error(e); }
    });

    it('should pass a referer', ()=>{
        const Url = new URL('http://my.space.com/myPath?query=value');
        const referer = 'http://referer.space.com';
        return httpUtil.request(Url, null, referer)
            .then((r:httpUtil.HttpResponse) => 
                expect(r.response.request.headers.referer).toEqual(referer)
            );
    });

    it('should ask for authentication', ()=>{
        const Url = new URL('http://my.space.com/myAuth');  
        return httpUtil.request(Url)
            .then((r:httpUtil.HttpResponse) => Promise.all([
                expect(r.response.status).toEqual(403), 
            expect(r.response.headers['www-authenticate']).toMatch(/Digest realm=.*?, nonce=.*?, qop=/)
            ])
            );
    });

    it('should authenticate', ()=>{
        const Url = new URL('http://my.space.com/myDigest');
        const user = new httpUtil.Digest('admin', 'littleSecret');
        let req;
        return req = httpUtil.request(Url, user)
            .then((r:httpUtil.HttpResponse) => {
                return Promise.all([
                    expect(r.response.status).toEqual(200), 
                    expect(r.response.request.headers.Authorization).toMatch(/Digest realm=.+IPCamera Login.+username.+admin.+uri.+myDigest.+qop=auth.+nonce.+cc6e4ead42917cb50548b4f94b4752fd.+algorithm.+MD5.+nc=00000001/)  
                ]);
            });
    });

    describe('caching', () => {
        it('should request online', async () => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            const cachedGet = new httpUtil.CachedHTTPRequest('./bin/cache/');
            const pageText = await cachedGet.request(new URL('http://my.space.com/myPath?query=value'));
            await expect(pageText.length).toBe(78);
            expect(http.request.mock.calls.length).toBe(calls+1);
        });
        it('should request cached', async () => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            const cachedGet = new httpUtil.CachedHTTPRequest('./bin/cache/');
            const pageText = await cachedGet.request(new URL('http://my.space.com/myPath?query=value'));
            await expect(pageText.length).toBe(78);
            expect(http.request.mock.calls.length).toBe(calls); // same as before
        }); 
    });
});