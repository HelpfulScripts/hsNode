/**
 * Logging convenience functions.
 * ## Usage
 * <pre>
 * import { Log } from 'hsnode'; const log = new Log();
 * log.info('by the way:'); // -> 20160817 09:59:08.032 info by the way:
 * log.error('oh dear!');   // -> 20160817 09:59:08.045 error *** oh dear!
 * </pre>
 * 
 * ### Using the `entryFormat` template:
 * <pre>
 * log.entryFormat('%MMM %DD %hh%mm%ss');
 * log.info('by the way:');  // -> Aug 17 095908 info by the way:
 * log.error('oh dear!');    // -> Aug 17 095908 error *** oh dear!
 * </pre>
 * 
 * ### With module prefix:
 * <pre>
 * import { Log } from 'hsnode'; const log = new Log('Main');
 * log.entryFormat('%hh%mm%ss');
 * log.info('by the way:');  // -> 09:59:08.032 Main info by the way:
 * log.error('oh dear!');    // -> 09:59:08.045 Main error *** oh dear!
 * </pre>
 * 
 * ### Using a log file
 * <pre>
 * log.entryFormat('%MM%DD');
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
 * ```
 * log.level(log.WARN, true);
 * log.info('this will not be reported');
 * ``` 
 * 
 * ## Reporting Levels:
 * - &nbsp; {@link log.DEBUG log.DEBUG}
 * - &nbsp; {@link log.INFO  log.INFO}
 * - &nbsp; {@link log.WARN  log.WARN}
 * - &nbsp; {@link log.ERROR log.ERROR}
 * 
 * ## Reporting methods
 * - &nbsp; {@link log.Log.debug log.debug()}
 * - &nbsp; {@link log.Log.info  log.info()}
 * - &nbsp; {@link log.Log.warn  log.warn()}
 * - &nbsp; {@link log.Log.error log.error()}
 * 
 * ## Configurations:
 * - &nbsp; {@link log.Log.level   log.level()}
 * - &nbsp; {@link log.Log.format  log.format()}
 * - &nbsp; {@link log.Log.prefix  log.prefix()}
 * - &nbsp; {@link log.Log.logFile log.logFile()}
 */

/** importing nodejs file system function; needed to create logfiles */
import { inspect }  from 'util';
import * as fsUtil  from './fsUtil';
import { date }     from 'hsutil';
import * as path    from 'path';



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

export class Log {
    private gLevel:LevelDesc;
    private gPrefix = '';
    DEBUG   = DEBUG;
    INFO    = INFO;
    WARN    = WARN;
    ERROR   = ERROR;

    constructor(prefix='') {
        this.prefix(prefix);
    }

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
    level(newLevelSym?:symbol, setGlobalLevel=false):symbol {
        let newLevel = gLevels[newLevelSym] || gGlobalLevel;    // new level is newLevelSym unless undefined
        let oldLevel = this.gLevel || gGlobalLevel;             // old level is this.level unless undefined
        if (newLevelSym === undefined) {                        // do nothing, return current level
            newLevel = oldLevel;
        } else if (newLevelSym === null) {
            this.gLevel = undefined;                            // deactivate local level
        } else if (gLevels[newLevelSym]) { 
            if (setGlobalLevel) { gGlobalLevel = newLevel; }    // set new global level
                           else { this.gLevel = newLevel; }     // set new local level
            const msg = `new ${setGlobalLevel? 'global' : this.gPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            this.out((newLevel.sym === oldLevel.sym)?DEBUG : INFO, msg);
        } else { 
            this.out(ERROR, `unkown level ${newLevelSym.toString()}; log level remains ${oldLevel.sym.toString()}`);
        }
        return newLevel.sym;
    }

    /**
     * reports an debug message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is DEBUG or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @return promise to return the file written to, or undefined
     */
    debug(msg:string, log=true):Promise<string> { return this.out(DEBUG, msg, log); }

    /**
     * reports an informational message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is INFO or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @return promise to return the file written to, or undefined
     */
    info(msg:any, log=true):Promise<string> { return this.out(INFO, msg, log); }

    /**
     * reports an warning message to the log. 
     * The message will actually be reported to the log only if the current 
     * reporting level is WARN or lower.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @return promise to return the file written to, or undefined
     */
    warn(msg:any, log=true):Promise<string> { return this.out(WARN, msg, log); }

    /**
     * reports an error message to the log. 
     * The message will always be reported to the log.
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @return promise to return the file written to, or undefined
     */
    error(msg:any, log=true):Promise<string> { return this.out(ERROR, msg, log); }

    /**
     * sets the format string to use for logging. If no parameter is specified,
     * the function returns the currently set format string. The preset is '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
     * For supported formats see {@link date date}.
     * @param fmtStr optional format string to use; 
     * - `entryFormat(null)` sets the format to `defDateFormat` 
     * - `entryFormat()` returns the current format without changing it.
     * @return the currently set format string
     */
    entryFormat(fmtStr?:string):string { 
        if (fmtStr === null) { gDateFormat = defDateFormat; }
        else if (fmtStr)     { gDateFormat = fmtStr; }
        return gDateFormat;
    }

    /**
     * defines a prefix to be printed for each call to a log function. 
     * The return object contains all functions defined for export. 
     * @param prf the prefix to prepend. Defaults to '';
     * @return 
     */
    prefix(prf?:string):string {
        if (prf) { this.gPrefix = prf; }
        return this.gPrefix;
    }

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * @param file a template to use for log file names. Options for calling:
     * - `logFile()`: return current logfile template without changing the template
     * - `logFile(null)`: diasble log file
     * - `logFile('')`: set default log file template `log-%YYYY-%MM-%DD.txt`
     * - `logFile('log%D/%M/%Y.log')`: set new log file template
     * @return promise to return the current logfile, or `undefined`
     */
    logFile(file?:string):Promise<string> {
        if (file === null) {                    // disable logging in file
            gLogFile = undefined; 
            return this.info("disabling logfile");
        } else if (file === undefined) {        // leave gLogFile unchanged, return promise for logfile name
            return Promise.resolve(date(gLogFile));
        } else if (file.indexOf('/')>=0) { 
            const dir = path.dirname(path.normalize(file));
            return fsUtil.pathExists(dir)
                .then(exists => { 
                    if (!exists) {
                        gLogFile = undefined;
                        return this.warn(`path '${dir}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return this.info("now logging to file " + date(file));
                })
                .catch(() => { 
                    gLogFile = undefined; 
                    return this.error(`checking path ${dir}; logfile disabled`);
                });
        } else if (file === '') {
            file = 'log-%YYYY-%MM-%DD.txt';
        } else {
        }
        gLogFile=file;
        return this.info(gLogFile? `now logging to file ${date(gLogFile)}` : 'logfile disbaled');
    }

    /**
     * reports an error message to the log. 
     * The message will be reported to the log if `lvl` meets or exceeds the current reporting level.
     * @param lvl the reporting level of `msg`
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @return promise to return the file written to, or undefined
     */
    out(lvl:symbol, msg:any, log=true): Promise<string> {	
        const colors = { [ERROR]: color.red+color.bold, [WARN]: color.yellow, [DEBUG]: color.blue, [INFO]: color.green };
        let desc = gLevels[lvl];
        const filterLevel = this.gLevel || gGlobalLevel;
        if (desc.importance >= filterLevel.importance) {
            const dateStr = date(gDateFormat);
            let line = (typeof msg === 'string')? msg : this.inspect(msg, 0);
            const logLine = (dateStr + ' ' + this.gPrefix + desc.desc + ' ' + line);
            const colorLine = `${colors[lvl]||''} ${dateStr} ${this.gPrefix} ${desc.desc} ${color.clear} ${line}`;
            console.log(gColors? colorLine : logLine);
            if (msg && msg.stack) { console.log(msg.stack); }
            if (gLogFile && log) {
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

    /**
     * Simplifies node `util.inspect` call.
     * Usage: `log.info(log.inspect(struct, 1))`
     * @param msg the object literal to inspect
     * @param depth depth of recursion. Use `null` for infinite depth
     */
    inspect(msg:any, depth=1) { return inspect(msg, {depth:depth, colors:gColors}); }

    /**
     * configures the log facility.
     * - cfg.colors: boolean, determines if output is colored
     * - cfg.logfile: sets the naming template for the logfile. Set logFile=null to disable.
     * - cfg.entryFormat: sets the format for the timestamp for each log entry
     * - cfg.level: sets the reporting level (same as calling log.level())
     * @param cfg 
     */
    config(cfg:{colors?:boolean, logFile?:string, entryFormat?:string, level?:symbol }) {
        let colors = true;
        if (cfg.colors!==undefined)      { gColors = colors = cfg.colors; }     // true / false
        if (cfg.logFile!==undefined)     { this.logFile(cfg.logFile); }         // {logFile:null} => diable
        if (cfg.entryFormat!==undefined) { this.entryFormat(cfg.entryFormat); } // e.g. '%YYYY%MM%DD %hh:%mm:%ss.%jjj'
        if (cfg.level!==undefined)       { this.level(cfg.level); }             // e.g. INFO
    }
}
    
