/**
 * ## log module
 */

/** */
import { Log as LogUtil }   from 'hsutil';
import { date }             from 'hsutil';
import { pathExists }       from './fsUtil';
import { appendFile }       from './fsUtil';
import  path                from 'path';



/** shell color escape codes */
const color = {
    red:    '\x1b[31m',
    yellow: '\x1b[33m',
    blue:   '\x1b[36m',
    green:  '\x1b[32m',
    bold:   '\x1b[1m',
    clear:  '\x1b[0m'
};

/** boolean determining if log will be printed in color */
let gColors = true;


export class LogServer extends LogUtil {
    public static log = new LogServer('');

    /** name of the current log file, or undefined */
    protected LogFile: string;	// initially disabled

    /** temporary color setting, defined in call to `inspect()` and used in `getPrePostfix` */
    protected inspectColors: string[];

    constructor(prefix:string) { super(prefix); }

    /**
     * reports a transient message to the log. This is an `INFO` level message that omits the
     * `line feed` character (i.e. `carriage return` only) so that it will be overwritten 
     * by the next logging output. Internally 
     * @param msg the message to report. If msg is an object literal, a deep inspection will be printed.
     * @param log optional flag to enable/suppress logging to file. Defaults to `true`
     * @return promise to return the file written to, or undefined
     */
    public transient(msg:any):string { 
        return this.out(LogUtil.INFO, msg+'\r'); 
    }

    /**
     * configures the log facility.
     * - cfg.colors: boolean, determines if output is colored
     * - cfg.logfile: sets the naming template for the logfile. Set logFile=null to disable.
     * - cfg.format: sets the format for the timestamp for each log entry
     * - cfg.level: sets the reporting level (same as calling log.level())
     * @param cfg 
     */
    public config(cfg:{colors?:boolean, format?:string, level?:string }) {
        super.config(cfg);
        if (cfg.colors!==undefined) { gColors = cfg.colors; }   // true / false
    }

    /** 
     * Creates the core format of the reported message. This method is 
     * called within `out` to allow for 
     * - format extensions using color codes.
     * - logging messages to a file.
     */
    protected makeMessage(line:string, lvl:string, dateStr:string, desc:string):string {
        const colors = { [LogServer.ERROR]: color.red+color.bold, [LogServer.WARN]: color.yellow+color.bold, [LogServer.DEBUG]: color.blue, [LogServer.INFO]: color.green };
        const logLine = super.makeMessage(line, lvl, dateStr, desc);
        if (this.LogFile) {
            appendFile(date(this.LogFile), logLine+'\n');
        }
        const colorLine = `${colors[lvl]||''} ${dateStr} ${this.reportPrefix} ${desc} ${color.clear} ${line}`;
        return gColors? colorLine : logLine;
    }

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * This is a global setting that affects reporting in all modules.
     * Usage:
     * - `logFile()`: return the current logfile name
     * - `logFile(null)`: disable log file
     * - `logFile('')`: set default log file template `log-%YYYY-%MM-%DD.txt`
     * - `logFile('log%D/%M/%Y.log')`: set new log file template
     * @param file a template to use for log file names. Options for calling:
     * @return promise to return the current logfile name, or `undefined` if loggimng is disabled.
     */
    public async logFile(file?:string):Promise<string> {
        if (file === null) {                    // disable logging in file
            this.LogFile = undefined; 
            this.info("disabling logfile");
            return this.LogFile;
        } else if (file === undefined) {        // leave this.LogFile unchanged, return promise for logfile name
            return date(this.LogFile);
        } else if (file.indexOf('/')>=0) { 
            const parts = path.parse(file);
            try {
                const exists:boolean = await pathExists(parts.dir);
                if (!exists) {
                    this.LogFile = undefined;
                    this.warn(`path '${parts.dir}' doesn't exists; logfile disabled`);
                } else {
                    this.LogFile = file;
                    this.info("now logging to file " + date(file));
                }
                return this.LogFile;
            } catch(e) {
                this.LogFile = undefined; 
                this.error(`checking path ${parts.dir}; logfile disabled`);
                return this.LogFile;
            }
        } else if (file === '') {
            this.LogFile = 'log-%YYYY-%MM-%DD.txt';
        } else {
            this.LogFile=file;
        }
        this.info(this.LogFile? `now logging to file ${date(this.LogFile)}` : 'logfile disbaled');
        return this.LogFile;
    }

    /**
     * returns a string representation of an object literal, similar to the Node `util.inspect` call.
     * 
     * Usage: `log.info(log.inspect(struct, 1))`
     * 
     * The call returns a raw formatted text string, or a HTM formatted string if `colors` is defined.
     * @param struct the object literal to inspect
     * @param depth depth of recursion, defaults to 1. Use `null` for infinite depth
     * @param indent the indent string to use, will accumulate for each level of indentation, defaults to ''
     * @param colors an array of css color values to apply to keywords in the inspected structure;
     * if present, `inspect` will generate HTML content instead of raw text, substituting any `space` characters
     * (' ') with `&nbsp;`. The color applied to each keyword cycles through the array with each increasing level, 
     * and restarts at index 0 when the level exceeds the length of the array.
     */
    public inspect(msg:any, depth=3, indent='   ', colors:string[]=null):string {
        this.inspectColors = colors;
        if (colors) { indent = indent.replace(/ /g, '&nbsp;'); }
        return super.inspect(msg, depth, indent, colors);
    }

    protected getPrePostfix(indent:string, level:number, currIndent:string):[string,string] {
        let [prefix, postfix] = super.getPrePostfix(indent, level, currIndent);
        if (this.inspectColors) {
            const color  = this.inspectColors[level % this.inspectColors.length];
            prefix = `<b><span style='color:${color};'>${prefix}`;
            postfix = `${postfix}</span></b>`;
        }
        return [prefix, postfix];
    }
}

