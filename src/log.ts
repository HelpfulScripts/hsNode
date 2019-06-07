/**
 * Logging convenience functions.
 * ## Usage
 * This module extends the [hsUtil.log](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/hsUtil.log) logging module
 * by adding a log file hook.
 * 
 * ### Using a log file
 * ```
 * import { log as gLog } from 'hsnode';
 * const log = gLog('mymodule');  // optional, to use a module specific log; otherwise uses the global instance
 * log.format('%MM%DD');
 * log.info('by the way:'); // -> 0817 info by the way:
 * log.logFile('l%YY%MM');  // -> 0817 info now logging to file l1608.txt
 * log.logFile(null);       // -> 0817 disabling logfile
 * log.error('oh dear!');   // -> 0817 error *** oh dear!
 * ```
 * 
 */

 /** */

export { LogType }              from 'hsutil';
import { log as uLog, LogType } from 'hsutil';
import { dirname, normalize}    from 'path';
import { pathExists }           from './fsUtil';
import { appendFile }           from './fsUtil';

export const log:LogType = uLog('', node_logToFile, node_pathExists);
log.config({colors:true});

async function node_pathExists(file:string):Promise<boolean> {
    const dir = dirname(normalize(file));
    return await pathExists(dir);
}

async function node_logToFile(filename:string, msg:string):Promise<string> {
    return await appendFile(filename, msg+'\n');
}
