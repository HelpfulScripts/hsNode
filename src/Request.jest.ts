import { Log }          from './log';  const log = new Log('Request.jest');
import { Request }      from "./Request";
import * as fsUtil      from "./fsUtil";
import './AuthDigest'

jest.mock('http');
const http = require('http');


const HTMLpayload = `
<html>
<body id="theBody">
<h1 id=main>The Content</h1>
the Body<p>
<div>first level
    <div>second level</div>
</div>
</body></html>`;

const payloads = [
    { path: '/myPath?query=value', code:200, content: '<html><body id="theBody"><h1 id=main>The Content</h1>the Body<p></body></html>' },
    { path: '/myPath.json', code:200, content: '{"first":"one", "second":"two"}' },
    { path: '/myPath.html', code:200, content: HTMLpayload },
    { path: '/myCached', code:200, content: HTMLpayload },
    { path: '/myCached.txt', code:200, content: HTMLpayload },
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

    test(`myPath?query=value should decode html`, async () => {
        expect.assertions(6);
        const url = 'http://my.space.com/myPath?query=value';
        request.decode = Request.decoders.html2json;
        const response = await request.get(url);
        const json:any = response.data;
        return Promise.all([
            expect(json).toHaveProperty('child'),
            expect(json.child[0].tag).toBe('html'),
            expect(json.child[0]).toHaveProperty('child'),
            expect(json.child[0].child[0].tag).toBe('body'),
            expect(json.child[0].child[0]).toHaveProperty('child'),
            expect(json.child[0].child[0].child[0].tag).toBe('h1')
        ]);
    });

    test(`myPath.json should decode json`, async () => {
        expect.assertions(2);
        const url = 'http://my.space.com/myPath.json';
        request.decode = Request.decoders.str2json;
        const response = await request.get(url);
        const json:any = response.data;
        return Promise.all([
            expect(json).toHaveProperty('first'),
            expect(json.first).toBe('one')
        ]);
    });

    it('should ask for Basic authentication', async ()=>{
        expect.assertions(1);
        const url = 'http://my.space.com/myAuth';  
        request.setCredentials('me', 'mysecret');
        request.decode = undefined;
        const response = await request.get(url);
        const r = response.data;
        return expect(r).toBe('<html><body><h1>403 - Forbidden</h1></body></html>');
    });

    it('should ask for Digest authentication', async ()=>{
        const url = 'http://my.space.com/myDigest';
        request.setCredentials('admin', 'littleSecret');
        const response = await request.get(url);
        const r = response.data;
        return expect(r).toBe('<html><body><h1>Show me the goods</h1></body></html>');
    });

    describe('pacing', () => {
        beforeEach(() => {
            request.setPace({pace:50, max:10});
            request.setCredentials();
        });
        it('should request online', async () => {
            expect.assertions(2);
            const calls = http.request.mock.calls.length;
            const pageText = await request.get('http://my.space.com/myCached.txt');
            return Promise.all([
                expect((<string>pageText.data).length).toBe(135),
                expect(http.request.mock.calls.length).toBe(calls+1)
            ]);
        });
    });

    describe('caching', () => {
        const dir = __dirname + '/../bin/cache';
        beforeEach(() => {
            request.cache = dir;
        });
        afterAll(async () => {
            return await fsUtil.removeAll(__dirname + '/../bin/cache/'); 
        });
        it('should fail requesting cached', async (done) => {
            expect.assertions(3);
            const calls = http.request.mock.calls.length;
            const response = await request.get('http://my.space.com/myCached');
            const pageText = <string>response.data;
            console.log(pageText)
            expect(response.cached).toBeFalsy();
            expect(pageText.length).toBe(0);
            expect(http.request.mock.calls.length).toBe(calls);
            done();
        });
        it('should request online', async (done) => {
            expect.assertions(3);
            const calls = http.request.mock.calls.length;
            const response = await request.get('http://my.space.com/myCached',{useCached:false});
            const pageText = <string>response.data;
            expect(response.cached).toBeFalsy();
            expect(pageText.length).toBe(135);
            expect(http.request.mock.calls.length).toBe(calls+1);
            done();
        });
        it('should request cached', async (done) => {
            expect.assertions(3);
            const calls = http.request.mock.calls.length;
            const response = await request.get('http://my.space.com/myCached');
            const pageText = <string>response.data;
            expect(response.cached).toBe(true);
            expect(pageText.length).toBe(135);
            expect(http.request.mock.calls.length).toBe(calls); // same as before
            done();
        }); 
        it('should fail requesting cached binary', async (done) => {
            expect.assertions(3);
            const calls = http.request.mock.calls.length;
            const response = await request.get('http://my.space.com/myCached.jpg');
            const pageText = <string>response.data;
            expect(response.cached).toBeFalsy();
            expect(pageText.length).toBe(0);
            expect(http.request.mock.calls.length).toBe(calls);
            done();
        });
        it('should request online binary', async (done) => {
            expect.assertions(3);
            const calls = http.request.mock.calls.length;
            const response = await request.get('http://my.space.com/myCached.jpg',{useCached:false});
            const pageText = <string>response.data;
            expect(response.cached).toBeFalsy();
            expect(pageText.length).toBe(40);
            expect(http.request.mock.calls.length).toBe(calls+1);
            done();
        });
        it('should request cached binary', async (done) => {
            expect.assertions(3);
            const calls = http.request.mock.calls.length;
            const response = await request.get('http://my.space.com/myCached.jpg'); 
            const pageText = <string>response.data;
            expect(response.cached).toBe(true);
            expect(pageText.length).toBe(40);
            expect(http.request.mock.calls.length).toBe(calls); // same as before
            done();
        }); 
    });
});