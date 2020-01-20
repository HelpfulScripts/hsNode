/**
 * Convenience functions for child process access, wrapped in Promises.
 * 
 * ### Usage:
 * ```
 * import { node } from 'hsnode';
 * node.child_process.exec('ls')
 *     .then((stdout, stderr) => {...})
 *     .catch(err => {...});
 * ```
 */

 /**
  * 
  */

import * as cp  from 'child_process';

export const child_process = { 
    /**
     * executes `command` in a child process and promises to return the stdout and stderr streams.
     <pre>
            let utils = require('./cpUtils');
            utils.exec(cmd)
                .then((stdout, stderr) => {...})
                .catch(err => {...});
    </pre>
    * @param command the shell command to execute
    * @param options the options to pass along to the shell
    * @return promise to provide the stdout and stderr streams from the child process.
    */
    exec: (command:string, options?:any):Promise<{stdout:any, stderr:any}> => 
        new Promise((resolve:(result:{stdout:string, stderr:string})=>void, reject:(e:string)=>void) =>
            cp.exec(command, options, (error:any, stdout:string, stderr:string) => {
                error? reject(error) : resolve({stdout:stdout, stderr:stderr});
            })
        )
};