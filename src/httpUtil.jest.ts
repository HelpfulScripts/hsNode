// const  http =  require('http'); 

import { URL }          from 'url';
import { Log }          from './index';  const log = new Log('httpUtil.jest');
import * as httpUtil    from "./httpUtil";
import * as fsUtil      from "./fsUtil";

jest.mock('http');
const http = require('http');

const payloads = [
    { path: '/myPath?query=value', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myCached', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myAuth', code:403, content: '<html><body><h1>403 - Forbidden</h1></body></html>' },
    { path: '/myDigest', code:401, content: '<html><body><h1>Show me the goods</h1></body></html>' },
];

http.__setPayLoads(payloads);

// http.request.mockImplementation((u:URL) => {
//     const load:any = payloads.filter(p => u.pathname === p.path);
//     return Promise.resolve(load.content);
// });

const request = new httpUtil.Request();

describe('httpUtil', ()=>{

    test(`myPath?query=value should have h1`, (done) => {
        expect.assertions(5);
        const test = async () => {
            const url = 'http://my.space.com/myPath?query=value';
            try {
                const r = await request.get(url);
                const json = httpUtil.xml2json(r);
                expect(r).toHaveLength(78);
                expect(json).toHaveProperty('html');
                expect(json.html).toHaveProperty('body');
                expect(json.html.body).toHaveProperty('h1');
                expect(json.html.body.h1).toEqual('The Content');
                done();
            } catch(e) { log.warn(`myPath?query=value should have h1: ${e.toString()}`); }
        };
        try { test(); }
        catch(e) { log.error(e); }
    });


    it('should ask for authentication', async (done)=>{
        try {
            expect.assertions(1);
            const url = 'http://my.space.com/myAuth';  
            request.setDigest('me', 'mysecret');
            try {
                const r = await request.get(url);
                expect(r).toBe('<html><body><h1>403 - Forbidden</h1></body></html>');
                done();
            } catch(e) { log.warn(`should ask for authentication: ${e.toString()}`); }
        }
        catch(e) { log.error(e); }
    });

    it('should authenticate', async (done)=>{
        try {
            const url = 'http://my.space.com/myDigest';
            request.setDigest('admin', 'littleSecret');
            try {
                const r = await request.get(url);
                expect(r).toBe('<html><body><h1>Show me the goods</h1></body></html>');
                done();
            } catch(e) { log.warn(`should authenticate: ${e.toString()}`); }
        }
        catch(e) { log.error(e); }
    });

    describe('caching', () => {
        beforeAll(() => {
            request.cacheBaseLocation = __dirname + '/../bin/cache';
        });
        afterAll(async () => {
            await fsUtil.remove(__dirname + '/../bin/cache/myCached');
            await fsUtil.remove(__dirname + '/../bin/cache/');
            await fsUtil.isDirectory(__dirname + '/../bin/cache/');
        });
        it('should request online', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            try {
                const pageText = await request.get('http://my.space.com/myCached');
                expect(pageText.length).toBe(78);
                expect(http.request.mock.calls.length).toBe(calls+1);
                done();
            } catch(e) { log.warn(`should request online: ${e.toString()}`); }
        });
        it('should request cached', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            let pageText='';
            try { pageText = await request.get('http://my.space.com/myCached'); }
            catch(e) { log.warn(`should request cached: ${e.toString()}`); }
            expect(pageText.length).toBe(78);
            expect(http.request.mock.calls.length).toBe(calls); // same as before
            done();
        }); 
    });
});