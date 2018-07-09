import { hsNode } from './';
import { o }    from 'hslayout';

o.spec("node", () => {
    let reject: any; 
    let resolve: any;
    o.spec("inspect", () => {
        o('should decompose {a:"yes", b:[1,2,3]}', () => {
            o(hsNode.inspect({a:"yes", b:[1,2,3]}, null, false)).equals("{ a: 'yes', b: [ 1, 2, 3 ] }");
        });
        o('should report in color', () => {
            o(hsNode.inspect({a:"yes", b:[1,2,3]}).match("{ a: 'yes', b: [ 1, 2, 3 ] }")).equals(null);
            o(hsNode.inspect({a:"yes", b:[1,2,3]}).match("'yes'")).notEquals(null);
            o(hsNode.inspect({a:"yes", b:[1,2,3]}).match("[ 1, 2, 3 ]")).notEquals(null);
        });
        o('should report first level only', () => {
            o(hsNode.inspect({a:"yes", b:[1,2,3]}, null, false)).equals("{ a: 'yes', b: [ 1, 2, 3 ] }");
            o(hsNode.inspect({a:"yes", b:[1,2,3]}, 0, false)).equals("{ a: 'yes', b: [Array] }");
            o(hsNode.inspect({a:"yes", b:[1,2,3]}, 1, false)).equals("{ a: 'yes', b: [ 1, 2, 3 ] }");
        });
    });

    o.spec("timeout", () => {
        o.beforeEach((done:any) => { 
            reject = o.spy();
            resolve = o.spy();
            hsNode.timeout(100)
                .then(resolve)
                .catch(reject);
            setTimeout(done, 101);
        });
        
        o('should fail after 100ms', (done:any) => {
            o(resolve.callCount).equals(0);
            o(reject.callCount).notEquals(0);
            done();
        });
    });

    o.spec("delay", () => {
        o.beforeEach((done:any) => { 
            reject = o.spy();
            resolve = o.spy();
                hsNode.delay(100)
                .then(resolve)
                .catch(reject);
            setTimeout(done, 101);
        });
        
        o('should resolve after 100ms', (done:any) => {
            o(resolve.callCount).notEquals(0);
            o(reject.callCount).equals(0);
            done();
        });
    });
});
