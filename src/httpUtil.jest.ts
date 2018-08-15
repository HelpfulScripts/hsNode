// const  http =  require('http'); 

import { URL }          from 'url';
import * as httpUtil    from "./httpUtil";
import { Log }          from './log'; const log = Log('utilJest');

jest.mock('http');
require('http').__setPayLoads([
    { path: '/myPath?query=value', code:200, content: '<html><body><h1>The Content</h1></body></html>' },
    { path: '/myAuth', code:403, content: '<html><body><h1>403 - Forbidden</h1></body></html>' },
    { path: '/myDigest', code:401, content: '<html><body><h1>Show me the goods</h1></body></html>' },
]);

describe('httpUtil', ()=>{

    test(`myPath?query=value should have h1`, () => {
        const Url = new URL('http://my.space.com/myPath?query=value');
        expect.assertions(5);
        let req;
        return req = httpUtil.request(Url)   
            .then((r:httpUtil.HttpResponse) => {
                r.body = httpUtil.xml2json(r.data);
                return Promise.all[
                    expect(r.response.headers['content-type']).toMatch(/text\//),
                    expect(r.body).toHaveProperty('html'),
                    expect(r.body.html).toHaveProperty('body'),
                    expect(r.body.html.body).toHaveProperty('h1'),
                    expect(r.body.html.body.h1).toEqual('The Content')
                ];
            })
            .catch(log.error);
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
//                console.log(r.response.request.headers);
                return Promise.all([
                    expect(r.response.status).toEqual(200), 
                    expect(r.response.request.headers.Authorization).toMatch(/Digest realm=.+IPCamera Login.+username.+admin.+uri.+myDigest.+qop=auth.+nonce.+cc6e4ead42917cb50548b4f94b4752fd.+algorithm.+MD5.+nc=00000001/)  
        ]);
            });
    });
});