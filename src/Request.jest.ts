// const  http =  require('http'); 

import { URL }          from 'url';
import { Log }          from './index';  const log = new Log('Request.jest');
import { Request }      from "./Request";
import * as fsUtil      from "./fsUtil";

jest.mock('http');
const http = require('http');

const payloads = [
    { path: '/myPath?query=value', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myPath?query=json', code:200, content: '{"first":"one", "second":"two"}' },
    { path: '/myCached', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myAuth', code:403, authenticate: 'Basic', content: '<html><body><h1>403 - Forbidden</h1></body></html>' },
    { path: '/myDigest', code:401, authenticate: 'Digest', content: '<html><body><h1>Show me the goods</h1></body></html>' },
];

http.__setPayLoads(payloads);

const request = new Request();

describe('Request', ()=>{
    beforeEach(() => {
        request.decode = undefined;
        request.setPace();
        request.setCredentials();
        request.setAuthToken();
    });

    test(`myPath?query=value should have h1`, (done) => {
        expect.assertions(6);
        const test = async () => {
            const url = 'http://my.space.com/myPath?query=value';
            let json = <any>{};
            request.decode = Request.decoders.html2json;
            try { json = await request.get(url); }
            catch(e) { log.warn(`myPath?query=value should have h1: ${e.toString()}`); }
            expect(json).toHaveProperty('child');
            expect(json.child[0].tag).toBe('html');
            expect(json.child[0]).toHaveProperty('child');
            expect(json.child[0].child[0].tag).toBe('body');
            expect(json.child[0].child[0]).toHaveProperty('child');
            expect(json.child[0].child[0].child[0].tag).toBe('h1');
            done();
        };
        try { test(); }
        catch(e) { log.error(e); }
    });

    test(`myPath?query=json should have one`, (done) => {
        expect.assertions(2);
        const test = async () => {
            const url = 'http://my.space.com/myPath?query=json';
            let json = <any>{};
            request.decode = Request.decoders.str2json;
            try { json = await request.get(url); }
            catch(e) { log.warn(`myPath?query=value should have h1: ${e.toString()}`); }
            expect(json).toHaveProperty('first');
            expect(json.first).toBe('one');
            done();
        };
        try { test(); }
        catch(e) { log.error(e); }
    });

    it('should ask for Basic authentication', async (done)=>{
        try {
            expect.assertions(1);
            const url = 'http://my.space.com/myAuth';  
            request.setCredentials('me', 'mysecret');
            request.decode = undefined;
            try {
                const r = await request.get(url);
                expect(r).toBe('<html><body><h1>403 - Forbidden</h1></body></html>');
                done();
            } catch(e) { log.warn(`should ask for authentication: ${e.toString()}`); }
        }
        catch(e) { log.error(e); }
    });

    it('should ask for Digest authentication', async (done)=>{
        try {
            const url = 'http://my.space.com/myDigest';
            request.setCredentials('admin', 'littleSecret');
            try {
                const r = await request.get(url);
                expect(r).toBe('<html><body><h1>Show me the goods</h1></body></html>');
                done();
            } catch(e) { log.warn(`should authenticate: ${e.toString()}`); }
        }
        catch(e) { log.error(e); }
    });

    describe('caching', () => {
        const dir = __dirname + '/../bin/cache';
        beforeAll(() => {
            request.cache = dir;
        });
        afterAll(async () => {
            log.info('removing...');
            try { await fsUtil.removeAll(__dirname + '/../bin/cache/'); }
            catch(e) { log.warn(`cleaning up: ${e}`); }
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