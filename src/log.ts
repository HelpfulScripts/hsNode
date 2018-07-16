/**
 * Logging convenience functions.
 * ## Usage
 * <pre>
 * import log from './log';
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * </pre>
 * 
 * ### Using the format template:
 * <pre>
 * log.format('%MMM %DD %hh%mm%ss');
 * log.info('by the way:');  // -> Aug 17 095908 info by the way:
 * log.error('oh dear!');    // -> Aug 17 095908 error *** oh dear!
 * </pre>
 * 
 * ### With module prefix:
 * <pre>
 * import log from './log';
 * log.prefix('Main');
 * log.format('%hh%mm%ss');
 * log.info('by the way:');  // -> 09:59:08.032 Main info by the way:
 * log.error('oh dear!');    // -> 09:59:08.045 Main error *** oh dear!
 * </pre>
 * 
 * ### Using a log file
 * <pre>
 * log.format('%MM%DD');
 * log.info('by the way:'); // -> 0817 info by the way:
 * log.logFile('l%YY%MM');  // -> 0817 info now logging to file l1608.txt
 * log.error('oh dear!');   // -> 0817 error *** oh dear!
 * </pre>
 * 
 * ## Reporting Levels:
 * - [DEBUG](#debug)
 * - [INFO](#info)
 * - [WARN](#warn)
 * - [ERROR](#error)
 * 
 * ## Reporting methods
 * - &nbsp;{@link hsNode.log#methods_debug debug()}
 * - &nbsp;{@link hsNode.log#methods_info info()}
 * - &nbsp;{@link hsNode.log#methods_warn warn()}
 * - &nbsp;{@link hsNode.log#methods_error error()}
 * 
 * ## Configurations:
 * - &nbsp;{@link hsNode.log#methods_level level()}
 * - &nbsp;{@link hsNode.log#methods_format format()}
 * - &nbsp;{@link hsNode.log#methods_prefix prefix()}
 * - &nbsp;{@link hsNode.log#methods_logFile logFile()}
 */

/** importing nodejs file system function; needed to create logfiles */
import { inspect }  from 'util';
import * as fsUtil  from "./fsUtil";
import { date }     from 'hsutil';



/**
 * Type definition for level descriptors
 */
interface LevelDesc { importance:number; sym:symbol; desc:string; };

/** Debug reporting level with importance 0 */
const DEBUG         = Symbol('DEBUG');

/** Info reporting level with importance 1 */
const INFO          = Symbol('INFO');

/** Info reporting level with importance 2 */
const WARN          = Symbol('WARN');

/** Warning reporting level with importance 3 */
const ERROR         = Symbol('ERROR');


/** map of valid reporting levels */
const gLevels = {
    [DEBUG]:    {importance: 0, sym: DEBUG, desc: 'DEBUG'},
    [INFO]:     {importance: 1, sym: INFO,  desc: 'INFO'},
    [WARN]:     {importance: 2, sym: WARN,  desc: 'WARN'},
    [ERROR]:    {importance: 3, sym: ERROR, desc: 'ERROR'}
};

/** current reporting level, same across all modules */
let gLevel:LevelDesc = gLevels[INFO]; 
console.log('set log level to ' + gLevel.sym.toString());

/** current date format string. See [date module]('_date_.html') */
let gDateFormat   = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';

/** name of the current log file, or undefined */
let gLogFile: string;	// initially disabled

/** boolean determining if log will be printed in color */
let gColors = true;


export class Log {
    private gPrefix = '';
    DEBUG   = DEBUG;
    INFO    = INFO;
    WARN    = WARN;
    ERROR   = ERROR;

    constructor(prefix:string) {
        this.prefix(prefix);
    }

    /**
     * sets the reporting level according to `newLevel`. 
     * Valid values are {@link hsNode.log.DEBUG DEBUG}, {@link hsNode.log.INFO INFO}, {@link hsNode.log.WARN WARN}, or {@link hsNode.log.ERROR ERROR}.
     * Subsequent reporting calls
     * will be filtered such that only calls with an importance at least the same as 
     * `newLevel` will be written to the log.
     * @param newLevel the new reporting level to set. 
     * If omitted, the method returns the currently set reporting level. 
     * @return the new reporting level (DEBUG, INFO, ERROR)
     */
    level(newLevel?:symbol):symbol {
        if (newLevel) { 
            if (gLevels[newLevel]) { 
                let oldLevel = gLevel;
                gLevel = gLevels[newLevel];
                let msg = 'new log level \'' + gLevel.desc.toUpperCase() + '\' (was ' + oldLevel.desc.toUpperCase() + ')';
                this.out((gLevel.sym === oldLevel.sym)?DEBUG : INFO, msg);
            }
            else { this.out(ERROR, "unkown level " + newLevel.toString() + '; log level remains ' + gLevel.sym.toString()); }
        }
        return gLevel.sym;
    }

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     */
    debug(msg:string) { this.out(DEBUG, msg); }

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     */
    info(msg:any)  { this.out(INFO, msg); }

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     */
    warn(msg:any) { this.out(WARN, msg); }

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     */
    error(msg:any) { this.out(ERROR, msg); }

    /**
     * sets the format string to use for logging. If no parameter is specified,
     * the function returns the currently set format string. The preset is '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
     * For supported formats see {@link date date}.
     * @param {String=} fmtStr the format string to use. 
     * @return {String} the currently set format string
     */
    dateFormat(fmtStr?:string):string { 
        if (fmtStr) { gDateFormat = fmtStr; }
        return gDateFormat;
    }

    /**
     * defines a prefix to be printed for each call to a log function. 
     * The return object contains all functions defined for export. 
     * @param prf the prefix to prepend. Defaults to '';
     */
    prefix(prf=''):void {
        this.gPrefix = prf? prf + ' ' : '';
    }

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * @param file a template to use for log file names, defaults to [fileNameTemplate='log-%YYYY-%MM-%DD.txt']. 
     * To disable logging, set file=''.
     * @return promise to return the current logfile name template
     */
    logFile(file='log-%YYYY-%MM-%DD.txt'):Promise<string> {
        return Promise.resolve(file)
        .then((file:string) => {
            if (file.indexOf('/')>=0) { 
                const dir = file.substring(0, file.lastIndexOf('/')+1);
                return fsUtil.pathExists(dir)
                .then(exists => { 
                    if (!exists) {
                        this.warn(`path '${dir}' doesn't exists; logfile disabled`);
                        return undefined;
                    }
                    return file;
                })
                .catch(() => { 
                    this.error(`checking path ${dir}; logfile disabled`);
                    return undefined; 
                });
            } else if (file === '') {
                this.info("disabling logfile");
                return undefined;
            }
            this.info("now logging to file " + date(file));
            return file;
        })
        .then((file:string) => gLogFile = file);
    }

    /**
     * reports an error message to the log. 
     * The message will be reported to the log if `lvl` meets or exceeds the current reporting level.
     * @param lvl the reporting level of `msg`
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     */
    out(lvl:symbol, msg:any) {	
        const color = { [ERROR]: '\x1b[31m\x1b[1m', [WARN]: '\x1b[33m', [DEBUG]: '\x1b[36m', [INFO]: '\x1b[32m' };
        let desc = gLevels[lvl];
        if (desc.importance >= gLevel.importance) {
            const dateStr = date(gDateFormat);
            let line = (typeof msg === 'string')? msg : this.inspect(msg, 0);
            line = gColors? ((color[lvl]||'') + dateStr + ' ' + this.gPrefix + desc.desc + '\x1b[0m ' + line) :
                            (dateStr + ' ' + this.gPrefix + desc.desc + ' ' + line);
            console.log(line);
            if (msg.stack) { console.log(msg.stack); }
            if (gLogFile) {
                const filename = date(gLogFile);
                fsUtil.appendFile(filename, line+'\n').catch(e => { 
                    console.log(`error appending to file ${gLogFile}: ${e}`); 
                    throw new Error(e); });
            }
        }
    }

    /**
     * Simplifies node `util.inspect` call.
     * Usage: `log.info('' + log.inspect(struct, 1))
     * @param msg the object literal to inspect
     * @param depth depth of recursion. Use `null` for infinite depth
     */
    inspect(msg:any, depth=1) { return inspect(msg, {depth:depth, colors:gColors}); }

    /**
     * configures the log facility.
     * - cfg.colors: boolean, determines if output is colored
     * - cfg.logfile: sets the naming template for the logfile. Set logFile=null to disable.
     * - cfg.dateFormat: sets the format for the timestamp for each log entry
     * - cfg.level: sets the reporting level (same as calling log.level())
     * @param cfg 
     */
    config(cfg:{colors?:boolean, logFile?:string, dateFormat?:string, level?:symbol }) {
        let colors = true;
        if (cfg.colors!==undefined)     { gColors = colors = cfg.colors; }     // true / false
        if (cfg.logFile!==undefined)    { this.logFile(cfg.logFile||undefined); }   // {logFile:null} => logFile(undefined)
        if (cfg.dateFormat!==undefined) { this.dateFormat(cfg.dateFormat); }        // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)      { this.level(cfg.level); }                  // e.g. INFO
    }
}
    

