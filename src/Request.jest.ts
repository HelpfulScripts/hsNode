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
    { path: '/myCached.jpg', code:200, content: 'garykxxrgQWV ZHDOGILFTEFVXCFGADcstjukjcr' },
    { path: '/myAuth', code:403, authenticate: 'Basic', content: '<html><body><h1>403 - Forbidden</h1></body></html>' },
    { path: '/myDigest', code:401, authenticate: 'Digest', content: '<html><body><h1>Show me the goods</h1></body></html>' },
];

http.__setPayLoads(payloads);

const request = new Request();

describe('Request', ()=>{
    beforeEach(() => {
        request.decode = undefined;
        request.cache = undefined;
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
            json = await request.get(url);
            expect(json).toHaveProperty('child');
            expect(json.child[0].tag).toBe('html');
            expect(json.child[0]).toHaveProperty('child');
            expect(json.child[0].child[0].tag).toBe('body');
            expect(json.child[0].child[0]).toHaveProperty('child');
            expect(json.child[0].child[0].child[0].tag).toBe('h1');
            done();
        };
        test();
    });

    test(`myPath?query=json should have one`, (done) => {
        expect.assertions(2);
        const test = async () => {
            const url = 'http://my.space.com/myPath?query=json';
            let json = <any>{};
            request.decode = Request.decoders.str2json;
            json = await request.get(url);
            expect(json).toHaveProperty('first');
            expect(json.first).toBe('one');
            done();
        };
        test();
    });

    it('should ask for Basic authentication', async (done)=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuth';  
        request.setCredentials('me', 'mysecret');
        request.decode = undefined;
        const r = await request.get(url);
        expect(r).toBe('<html><body><h1>403 - Forbidden</h1></body></html>');
        done();
    });

    it('should ask for Digest authentication', async (done)=>{
        const url = 'http://my.space.com/myDigest';
        request.setCredentials('admin', 'littleSecret');
        const r = await request.get(url);
        expect(r).toBe('<html><body><h1>Show me the goods</h1></body></html>');
        done();
    });

    describe('pacing', () => {
        beforeEach(() => {
            request.cache = undefined;
            request.setPace(50, 10);
        });
        it('should request online', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            const pageText = await request.get('http://my.space.com/myCached');
            expect(pageText.length).toBe(78);
            expect(http.request.mock.calls.length).toBe(calls+1);
            done();
        });
    });

    describe('caching', () => {
        const dir = __dirname + '/../bin/cache';
        beforeEach(() => {
            request.cache = dir;
        });
        afterAll(async (done) => {
            await fsUtil.removeAll(__dirname + '/../bin/cache/'); 
            done();
        });
        it('should request online', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            const pageText = await request.get('http://my.space.com/myCached');
            expect(pageText.length).toBe(78);
            expect(http.request.mock.calls.length).toBe(calls+1);
            done();
        });
        it('should request cached', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            let pageText='';
            pageText = await request.get('http://my.space.com/myCached');
            expect(pageText.length).toBe(78);
            expect(http.request.mock.calls.length).toBe(calls); // same as before
            done();
        }); 
        it('should request online binary', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            const pageText = await request.get('http://my.space.com/myCached.jpg');
            expect(pageText.length).toBe(40);
            expect(http.request.mock.calls.length).toBe(calls+1);
            done();
        });
        it('should request cached binary', async (done) => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            let pageText='';
            pageText = await request.get('http://my.space.com/myCached.jpg'); 
            expect(pageText.length).toBe(40);
            expect(http.request.mock.calls.length).toBe(calls); // same as before
            done();
        }); 
    });
});