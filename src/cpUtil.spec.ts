import { exec } from './cpUtil';
import { o }    from 'hslayout';

o.spec('cpUtil', () => {
    let cpOut:string, cpErr:string, cpE:string;

    function call(cmd:string, done:any) {
        exec(cmd)
        .then((result:{stdout:string, stderr:string}) => { cpOut = result.stdout; cpErr = result.stderr; done(); })
        .catch((e:string) => { cpE = e; done(); });
}

    o.beforeEach(() => {
        cpE = cpErr = cpOut = '';
    });

    o.spec('valid command', () => {
        o.beforeEach((done:any) => call("pwd", done));

        o('should execute "pwd" in a shell without error', (done:any) => {
            o(typeof cpOut).equals('string')('stdout type');
            o(cpOut).notEquals('')('stdout result');
            o(cpErr).equals('')('stderr result');  
            done();
        });

        o('should result in path', () => {
            o(cpOut.trim().endsWith('/hsNode')).equals(true);
            o(cpE).equals('')('e result');
            o(cpErr).equals('')('err result');
        });  
    });

    o.spec('invalid command', () => {
        o.beforeEach((done:any) => call("abcd", done));

        o('should result in error', () => {
            o(cpOut).equals('')('out');
            o(cpErr).equals('')('err');
            o(cpE.toString().match(/abcd: command not found/)).notEquals(null)('e');
        });  
    });
});
