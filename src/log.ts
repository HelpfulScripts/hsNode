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
const COLOR = {
    clear:      '\x1b[0m',

    bold:       '\x1b[1m',
    dim:        '\x1b[2m',
    underscore: '\x1b[4m',
    blink:      '\x1b[5m',
    reverse:    '\x1b[7m',
    hidden:     '\x1b[8m',

    black:      '\x1b[30m',
    red:        '\x1b[31m',
    green:      '\x1b[32m',
    yellow:     '\x1b[33m',    
    blue:       '\x1b[34m',
    magenta:    '\x1b[35m',
    cyan:       '\x1b[36m',
    white:      '\x1b[37m',
    
    darkred:    '\x1b[31m',
    darkgreen:  '\x1b[32m',
    darkyellow: '\x1b[33m',    
    darkblue:   '\x1b[34m',
    darkmagenta:'\x1b[35m',
    darkcyan:   '\x1b[36m',
    gray:       '\x1b[37m',
    
    bgBlack:    '\x1b[40m',
    bgRed:      '\x1b[41m',
    bgGreen:    '\x1b[42m',
    bgYellow:   '\x1b[43m',
    bgBlue:     '\x1b[44m',
    bgMagenta:  '\x1b[45m',
    bgCyan:     '\x1b[46m',
    bgWhite:    '\x1b[47m'
};


/** boolean determining if log will be printed in color */
// let gColors = true;


export class LogServer extends LogUtil {
    public static log = new LogServer('');

    /** name of the current log file, or undefined */
    protected LogFile: string;	// initially disabled

    /** temporary color setting, defined in call to `inspect()` and used in `getPrePostfix` */
    // protected inspectColors: string[];

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
        return this.out(LogUtil.INFO, { color: 'green', msg:msg+' \r' }); 
    }

    /** 
     */
    protected output(color:string, header:string, line:string) {
        const msg = `${COLOR[color]}${header}${COLOR['clear']} ${line}`;
        if (line.slice(-1)==='\r') { process.stdout.write(msg); }
        else { console.log(msg); }
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
            return this.LogFile===undefined? undefined : date(this.LogFile);
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
    // public inspect(msg:any, depth=3, indent='   ', colors=LogUtil.INDENT_COLORS):string {
    //     this.inspectColors = colors;
    //     if (colors) { indent = indent.replace(/ /g, '&nbsp;'); }
    //     return super.inspect(msg, depth, indent, colors);
    // }

    protected getPrePostfix(indent:string, level:number, currIndent:string, colors:string[]):[string,string,string,string] {
        // let [prefix, postfix] = super.getPrePostfix(indent, level, currIndent, colors);
        const color  = colors? COLOR[colors[level % colors.length]] : '';
        // if (colors) {
        //     prefix = `${color}'>${prefix}`;
        //     postfix = `${postfix}</span></b>`;
        // }
        return [`${currIndent}${indent}${color}`, colors? COLOR.clear : '', '\n', currIndent];
    }
}

const colors = { 
    [LogServer.ERROR]: COLOR.red+COLOR.bold, 
    [LogServer.WARN]: COLOR.yellow+COLOR.bold, 
    [LogServer.DEBUG]: COLOR.blue, 
    [LogServer.INFO]: COLOR.green 
};
