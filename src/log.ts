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
import { fsUtil }   from "./";
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


class Log {
    private gPrefix = '';
    DEBUG   = DEBUG;
    INFO    = INFO;
    WARN    = WARN;
    ERROR   = ERROR;

    /**
     * sets the reporting level according to `newLevel`. 
     * Valid values are {@link hsNode.log.DEBUG DEBUG}, {@link hsNode.log.INFO INFO}, {@link hsNode.log.WARN WARN}, or {@link hsNode.log.ERROR ERROR}.
     * Subsequent reporting calls
     * will be filtered such that only calls with an importance at least the same as 
     * `newLevel` will be written to the log.
     * @param {String=} newLevel the new reporting level to set. 
     * If omitted, the method returns the currently set reporting level. 
     * @return {Symbol} the new reporting level (DEBUG, INFO, ERROR)
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
     * @param {string} msg the message to report.
     */
    debug(msg:string) { this.out(DEBUG, msg); }

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param {string} msg the message to report.
     */
    info(msg:string)  { this.out(INFO, msg); }

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param {string} msg the message to report.
     */
    warn(msg:string) { this.out(WARN, msg); }

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param {string} msg the message to report.
     */
    error(msg:string) { this.out(ERROR, msg); }

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
     * @param {String=} prf the prefix to prepend. 
     */
    prefix(prf=''):void {
        this.gPrefix = prf? prf + ' ' : '';
    }

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * @param {String} [fileNameTemplate='log-%YYYY-%MM-%DD.txt'] a template to use for log file names. 
     * To disable logging, use file=''.
     * @return {Promise} promise to return the current logfile name template
     */
    logFile(file='log-%YYYY-%MM-%DD.txt'):Promise<string> {
        return Promise.resolve(file)
            .then(file => {
                if (file !== gLogFile) {
                    gLogFile = (file==='')? undefined : file;
                }
                if (!gLogFile) { this.info("disabling logfile"); return gLogFile; }
                if (gLogFile.indexOf('/')>=0) { 
                    const dir = gLogFile.substring(0, gLogFile.lastIndexOf('/'));
                    return fsUtil.pathExists(dir).then(exists => {
                        if (!exists) { 
                            gLogFile = undefined; 
                            this.warn(`path ${dir} doesn't exists; logfile disabled`); 
                        }
                        else { this.info(gLogFile? "now logging to file " + date(gLogFile) : "disabling logfile"); }
                        return gLogFile;
                    });
                }
                this.info("now logging to file " + date(gLogFile));
                return gLogFile;
            });
    }

    out(sym:symbol, msg:any) {	
        const color = { ERROR: '\x1b[31m\x1b[1m', WARN: '\x1b[33m', DEBUG: '\x1b[36m', INFO: '\x1b[32m' };
        let desc = gLevels[sym];
        if (desc.importance >= gLevel.importance) {
            const dateStr = date(gDateFormat);
            let line = (typeof msg === 'string')? msg : inspect(msg, {depth:null, colors:gColors});
            line = gColors? ((color[sym]||"") + dateStr + ' ' + this.gPrefix + desc.desc + '\x1b[0m ' + line) :
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

    config(cfg:{colors?:boolean, logFile?:string, dateFormat?:string, level?:symbol }) {
        let colors = true;
        if (cfg.colors!==undefined)     { gColors = colors = cfg.colors; }     // true / false
        if (cfg.logFile!==undefined)    { this.logFile(cfg.logFile||undefined); }   // {logFile:null} => logFile(undefined)
        if (cfg.dateFormat!==undefined) { this.dateFormat(cfg.dateFormat); }        // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)      { this.level(cfg.level); }                  // e.g. INFO
    }
}
    
export let log = new Log();


