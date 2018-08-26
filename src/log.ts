/**
 * Logging convenience functions.
 * ## Usage
 * 
 * ### Using the global log object 
 * Settings in `log` are shared across modules
 * <pre>
 * import { log } from 'hsnode'; 
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * </pre>
 * 
 * ### Using a local log object 
 * Settings in `log` remain local to the module 
 * <pre>
 * import { newLog } from 'hsnode'; const log = newLog('myModule')
 * log.info('by the way:'); // -> 20160817 09:59:08.032 myModule info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 myModule error *** oh dear!
 * </pre>
 * 
 * ### Using the `format` template:
 * <pre>
 * log.format('%MMM %DD %hh%mm%ss');
 * log.info('by the way:');  // -> Aug 17 095908 info by the way:
 * log.error('oh dear!');    // -> Aug 17 095908 error *** oh dear!
 * </pre>
 * 
 * ### Change the module prefix:
 * <pre>
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
 * log.logFile(null);       // -> 0817 disabling logfile
 * log.error('oh dear!');   // -> 0817 error *** oh dear!
 * </pre>
 * 
 * ### Setting the Log level locally for the module
 * ```
 * log.level(log.WARN);
 * log.info('this will not be reported');
 * ``` 
 * 
 * ### Setting the Log level globally
 * Will be used if no local level is set
 * ```
 * log.level(log.WARN, true);               // set global log level
 * log.info('this will be reported');       // because local level defaults to INFORM
 * log.level(null);                         // unset the local level
 * log.info('this will not be reported');   // because no local level is defined and global level is set to WARN
 * ``` 
 * 
 * ### log.inspect utility
 * provided as a shortcut to Node's [`util.inspect`](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_inspect_object_options) 
 * function.
 * ```
 * log.info(log.inspect(myObj, null));      // prints the structure to inifinite depth
 * ``` 
 * 
 * ## Reporting Levels:
 * - &nbsp; {@link log.DEBUG log.DEBUG}
 * - &nbsp; {@link log.INFO  log.INFO}
 * - &nbsp; {@link log.WARN  log.WARN}
 * - &nbsp; {@link log.ERROR log.ERROR}
 * 
 * ## Reporting methods
 * - &nbsp; {@link log.debug log.debug()}
 * - &nbsp; {@link log.info  log.info()}
 * - &nbsp; {@link log.warn  log.warn()}
 * - &nbsp; {@link log.error log.error()}
 * 
 * ## Configurations:
 * - &nbsp; {@link log.newLog.level   log.level()}
 * - &nbsp; {@link log.newLog.format  log.format()}
 * - &nbsp; {@link log.newLog.prefix  log.prefix()}
 * - &nbsp; {@link log.newLog.logFile log.logFile()}
 */

/** importing nodejs file system function; needed to create logfiles */
import { inspect as utilInspect }  from 'util';
import * as fsUtil  from './fsUtil';
import { date }     from 'hsutil';
import * as path    from 'path';

/** Debug reporting level with importance 0 */
const DEBUG = Symbol('DEBUG');

/** Info reporting level with importance 1 */
const INFO   = Symbol('INFO');

/** Info reporting level with importance 2 */
const WARN   = Symbol('WARN');

/** Warning reporting level with importance 3 */
const ERROR  = Symbol('ERROR');

/**
 * Type definition for level descriptors
 */
interface LevelDesc { importance:number; sym:symbol; desc:string; };

/** map of valid reporting levels */
const gLevels = {
    [DEBUG]:    {importance: 0, sym: DEBUG, desc: 'DEBUG'},
    [INFO]:     {importance: 1, sym: INFO,  desc: 'INFO'},
    [WARN]:     {importance: 2, sym: WARN,  desc: 'WARN'},
    [ERROR]:    {importance: 3, sym: ERROR, desc: 'ERROR'}
};

/** current reporting level, same across all modules */
let gGlobalLevel:LevelDesc = gLevels[INFO]; 

/** current date format string. See [date module]('_date_.html') */
const defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
let gDateFormat     = defDateFormat;

/** name of the current log file, or undefined */
let gLogFile: string;	// initially disabled

/** boolean determining if log will be printed in color */
let gColors = true;

/** shell color escape codes */
const color = {
    red:    '\x1b[31m',
    yellow: '\x1b[33m',
    blue:   '\x1b[36m',
    green:  '\x1b[32m',
    bold:   '\x1b[1m',
    clear:  '\x1b[0m'
};


export interface LogType {
    DEBUG:  symbol;
    INFO:   symbol;
    WARN:   symbol;
    ERROR:  symbol;

    /**
     * sets the reporting level according to `newLevel`. 
     * Valid values are {@link hsNode.log.DEBUG DEBUG}, {@link hsNode.log.INFO INFO}, 
     * {@link hsNode.log.WARN WARN}, {@link hsNode.log.ERROR ERROR}, or `null`.
     * Subsequent reporting calls will be filtered such that only calls with an importance 
     * at least the same as `newLevel` will be written to the log.
     * 
     * By default, `newLevel` sets the reporting level for the module only, and takes precedence over
     * any global level setting. Providing `null` as level value passes precedence back to the global setting.\
     * THis allows for simple per-module settings, for example in debugging scenarios.
     * @param newLevelSym the new reporting level to set. 
     * If omitted, the method returns the currently set reporting level. 
     * If set to `null`, the module's local reporting level defaults to the global reporting level; `setGlobalLevel` is ignored.
     * @param setGlobalLevel if true, sets the global reporting level for all modules. 
     * @return the new reporting level (DEBUG, INFO, ERROR)
     */
    level(newLevelSym?:symbol, setGlobalLevel?:boolean):symbol;

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param logToFile optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    debug(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param logToFile optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    info(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param logToFile optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    warn(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param logToFile optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    error(msg:string, log?:boolean):Promise<string>;

    /**
     * reports an error message to the log. 
     * The message will be reported to the log if `lvl` meets or exceeds the current reporting level.
     * @param lvl the reporting level of `msg`
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param logToFile optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    out(lvl:symbol, msg:any, log?:boolean): Promise<string>;	

    /**
     * sets the format string to use for logging. If no parameter is specified,
     * the function returns the currently set format string. The preset is '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
     * For supported formats see {@link date date}.
     * @param fmtStr optional format string to use; 
     * - `format(null)` sets the format to `defDateFormat` 
     * - `format()` returns the current format without changing it.
     * @return the currently set format string
     */
    format(fmtStr?:string):string;

    /**
     * defines a prefix to be printed for each call to a log function. 
     * @param prf the prefix to prepend. Defaults to '';
     * @return the new prefix
     */
    prefix(prf?:string):string;

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * This is a global setting that affects reporting in all modules.
     * @param file a template to use for log file names. Options for calling:
     * - `logFile()`: return current logfile template without changing the template
     * - `logFile(null)`: disable log file
     * - `logFile('')`: set default log file template `log-%YYYY-%MM-%DD.txt`
     * - `logFile('log%D/%M/%Y.log')`: set new log file template
     * @return promise to return the current logfile, or `undefined` if loggimng is disabled.
     */
    logFile(file?:string):Promise<string>;

    /**
     * configures the log facility.
     * - cfg.colors: boolean, determines if output is colored
     * - cfg.logfile: sets the naming template for the logfile. Set logFile=null to disable.
     * - cfg.format: sets the format for the timestamp for each log entry
     * - cfg.level: sets the reporting level (same as calling log.level())
     * @param cfg 
     */
    config(cfg:{colors?:boolean, logFile?:string, format?:string, level?:symbol }):void;

    /**
     * Simplifies node `util.inspect` call.
     * Usage: `log.info(log.inspect(struct, 1))`
     * @param msg the object literal to inspect
     * @param depth depth of recursion, defaults to 1. Use `null` for infinite depth
     */
    inspect(msg:any, depth?:number):string;
}


/** the global log object */
export const log:LogType = create('');

/** returns a local log object */
export const newLog = (prefix:string) => create(prefix);


function create(_prefix:string):LogType {
    let gLevel:LevelDesc;
    let gPrefix = _prefix;

    function level(newLevelSym?:symbol, setGlobalLevel=false):symbol {
        let newLevel = gLevels[newLevelSym] || gGlobalLevel;    // new level is newLevelSym unless undefined
        let oldLevel = gLevel || gGlobalLevel;               // old level is level unless undefined
        if (newLevelSym === undefined) {                        // do nothing, return current level
            newLevel = oldLevel;
        } else if (newLevelSym === null) {
            gLevel = undefined;                            // deactivate local level
        } else if (gLevels[newLevelSym]) { 
            if (setGlobalLevel) { gGlobalLevel = newLevel; }    // set new global level
                           else { gLevel = newLevel; }     // set new local level
            const msg = `new ${setGlobalLevel? 'global' : gPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            out((newLevel.sym === oldLevel.sym)?DEBUG : INFO, msg);
        } else { 
            out(ERROR, `unkown level ${newLevelSym.toString()}; log level remains ${oldLevel.sym.toString()}`);
        }
        return newLevel.sym;
    }

    function debug(msg:string, logToFile=true):Promise<string> { return out(DEBUG, msg, logToFile); }
    function info(msg:any, logToFile=true):Promise<string> { return out(INFO, msg, logToFile); }
    function warn(msg:any, logToFile=true):Promise<string> { return out(WARN, msg, logToFile); }
    function error(msg:any, logToFile=true):Promise<string> { return out(ERROR, msg, logToFile); }

    function format(fmtStr?:string):string { 
        if (fmtStr === null) { gDateFormat = defDateFormat; }
        else if (fmtStr)     { gDateFormat = fmtStr; }
        return gDateFormat;
    }

    function prefix(prf?:string):string {
        if (prf) { gPrefix = prf; }
        return gPrefix;
    }

    function logFile(file?:string):Promise<string> {
        if (file === null) {                    // disable logging in file
            gLogFile = undefined; 
            return info("disabling logfile");
        } else if (file === undefined) {        // leave gLogFile unchanged, return promise for logfile name
            return Promise.resolve(date(gLogFile));
        } else if (file.indexOf('/')>=0) { 
            const dir = path.dirname(path.normalize(file));
            return fsUtil.pathExists(dir)
                .then(exists => { 
                    if (!exists) {
                        gLogFile = undefined;
                        return warn(`path '${dir}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return info("now logging to file " + date(file));
                })
                .catch(() => { 
                    gLogFile = undefined; 
                    return error(`checking path ${dir}; logfile disabled`);
                });
        } else if (file === '') {
            file = 'log-%YYYY-%MM-%DD.txt';
        } else {
        }
        gLogFile=file;
        return info(gLogFile? `now logging to file ${date(gLogFile)}` : 'logfile disbaled');
    }

    function out(lvl:symbol, msg:any, logToFile=true): Promise<string> {	
        const colors = { [ERROR]: color.red+color.bold, [WARN]: color.yellow+color.bold, [DEBUG]: color.blue, [INFO]: color.green };
        let desc = gLevels[lvl];
        const filterLevel = gLevel || gGlobalLevel;
        if (desc.importance >= filterLevel.importance) {
            const dateStr = date(gDateFormat);
            let line = (typeof msg === 'string')? msg : inspect(msg, 0);
            const logLine = (dateStr + ' ' + gPrefix + desc.desc + ' ' + line);
            const colorLine = `${colors[lvl]||''} ${dateStr} ${gPrefix} ${desc.desc} ${color.clear} ${line}`;
            console.log(gColors? colorLine : logLine);
            if (msg && msg.stack) { console.log(msg.stack); }
            if (gLogFile && logToFile) {
                const filename = date(gLogFile);
                return fsUtil.appendFile(filename, logLine+'\n')
                .catch(e => { 
                    console.log(`error appending '${logLine}' to file ${gLogFile} | ${filename}: ${e}`); 
                    return logLine;
                });
            }
        }
        return Promise.resolve(undefined);
    }

    function config(cfg:{colors?:boolean, logFile?:string, format?:string, level?:symbol }) {
        let colors = true;
        if (cfg.colors!==undefined) { gColors = colors = cfg.colors; }  // true / false
        if (cfg.logFile!==undefined){ logFile(cfg.logFile); }           // {logFile:null} => diable
        if (cfg.format!==undefined) { format(cfg.format); }             // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)  { level(cfg.level); }               // e.g. INFO
    }


    /**
     * Simplifies node `util.inspect` call.
     * Usage: `log.info(log.inspect(struct, 1))`
     * @param msg the object literal to inspect
     * @param depth depth of recursion. Use `null` for infinite depth
     */
    function inspect(msg:any, depth=1):string {
        return utilInspect(msg, {depth:depth, colors:gColors});
    }

    return {
        DEBUG:      DEBUG,
        INFO:       INFO,
        WARN:       WARN,
        ERROR:      ERROR,
        level:      level,
        debug:      debug,
        info:       info,
        warn:       warn,
        error:      error,
        format:     format,
        prefix:     prefix,
        logFile:    logFile,
        out:        out,
        config:     config,
        inspect:    inspect
    };
}
