const cp    = require('child_process');
//import { Log } from './'; const log = Log('cpUtil');

/**
 * @ngdoc object
 * @name hsNode.cpUtil
 * @description Convenience functions for child process access, wrapped in Promises.
 * - &nbsp; {@link hsNode.cpUtil#methods_exec exec}
 */

//===============================================================================
//  Low level Promise wrappers
 
/**
 * @ngdoc object
 * @name exec
 * @methodOf hsNode.cpUtil
 * @description executes `command` in a child process and promises to return the stdout and stderr streams.
 <pre>
        let utils = require('./cpUtils');
        utils.exec(cmd)
            .then((stdout, stderr) => {...})
            .catch(err => {...});
</pre>
 * @param command the shell command to execute
 * @param options the options to pass along to the shell
 * @return promise to provide the stdout and stderr streams form the child process.
 */
function exec(command:string, options?:any) {
    return new Promise((resolve:(result:{stdout:string, stderr:string})=>void, reject:(e:string)=>void) => {
        cp.exec(command, options, (error:string, stdout:string, stderr:string) => {
            error? reject(error) : resolve({stdout:stdout, stderr:stderr});
        });
    });
}

export { exec };