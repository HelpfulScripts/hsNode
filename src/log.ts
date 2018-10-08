/**
 * Logging convenience functions.
 * ## Usage
 * This module extends the [hsUtil.log](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/hsUtil.log) logging module
 * by adding a log file hook.
 * 
 * ### Using a log file
 * <pre>
 * log.format('%MM%DD');
 * log.info('by the way:'); // -> 0817 info by the way:
 * log.logFile('l%YY%MM');  // -> 0817 info now logging to file l1608.txt
 * log.logFile(null);       // -> 0817 disabling logfile
 * log.error('oh dear!');   // -> 0817 error *** oh dear!
 * </pre>
 * 
 */

export { LogType }              from 'hsutil';
import { log as uLog, LogType } from 'hsutil';
import { dirname, normalize}    from 'path';
import { pathExists }           from './fsUtil';
import { appendFile }           from './fsUtil';

export const log:LogType = uLog('', node_logToFile, node_pathExists);

function node_pathExists(file:string):Promise<boolean> {
    const dir = dirname(normalize(file));
    return pathExists(dir);
}

function node_logToFile(filename:string, msg:string):Promise<string> {
    return appendFile(filename, msg+'\n');
    // .catch(e => { 
    //     console.log(`error appending '${msg}' to file ${log.logFile()} | ${filename}: ${e}`); 
    //     return msg;
    // });
}
