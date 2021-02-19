/**
 * ## log module
 * Exension of [hsUtil.Log](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/hsUtil.log), adding
 * - support for {@link log.Log.logFile logging to a file}
 * - support for {@link log.Log.transient transient } logging level
 * - adaptation of `color` codes for use in a terminal
 */

/** */
import { Log as LogUtil }   from 'hsutil';
import { date }             from 'hsutil';
import { Msg }              from 'hsutil';
import { appendFileSync, pathExistsSync, writeTextFileSync }   
                            from './fsUtil';
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

/**
* Exension of [hsUtil.Log](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/hsUtil.log), adding
* - support for {@link log.Log.logFile logging to a file}
* - support for {@link log.Log.transient transient } logging level
* - adaptation of `color` codes for use in a terminal
*/
export class Log extends LogUtil {
    public static Log:LogUtil = Log.globalLog(Log);

    /** name of the current log file, or undefined */
    protected static LogFile: string;	// initially disabled


    /** 
     * the actual logging; overrides `output` in `hsUtil.Log`
     */
    protected output(options:Msg, headerParts:string[], line:string) {
        const color = options.color
        const lines = this.limitLength(line, options.maxLen)
        const header = headerParts.join(' ')
        const c = color.map(_c => COLOR[_c]).join('');
        const msg = `${c}${header}${COLOR['clear']} ${lines.join('\n')}`;
        if (Log.LogFile) { appendFileSync(date(Log.LogFile), `${header} ${line}\n`); }
        if (options.lf==='\r') { process.stdout.write(msg+'\r'); }
        else { console.log(msg); }
    }

    /**
     * sets a new logfile name template. Logfiles are created using this template 
     * at the time of each log entry call. If the file exists, the log entry will be appended.
     * Any path information in `filePattern` is interpreted relative to the runtime base directory.
     * Usage:
     * - `logFile()`: return the current logfile name
     * - `logFile(null)`: disable log file
     * - `logFile('')`: set default log file template `log-%YYYY-%MM-%DD.txt`
     * - `logFile('log-%YYYY-%MM-%DD.txt')`: set new log file template
     * @param filePattern a template to use for log file names. Options for calling:
     * @param append (default: `true`) whether to append to or erase an existing file
     * @return promise to return the current logfile name, or `undefined` if loggimng is disabled.
     */
    public logFile(filePattern?:string, append=true):string {
        if (filePattern === null) {                    // disable logging in file
            Log.LogFile = undefined; 
            this.info("disabling logfile");
            // return Log.LogFile;
        } else if (filePattern === undefined) {        // leave Log.LogFile unchanged, return promise for logfile name
            return Log.LogFile===undefined? undefined : date(Log.LogFile);
        } else if (filePattern.indexOf('/')>=0) { 
            const parts = path.parse(filePattern);
            try {
                const exists:boolean = pathExistsSync(parts.dir);
                if (!exists) {
                    Log.LogFile = undefined;
                    this.warn(`path '${parts.dir}' doesn't exists; logfile disabled`);
                } else {
                    Log.LogFile = filePattern;
                    this.info("now logging to file " + date(filePattern));
                }
                // return Log.LogFile;
            } catch(e) {
                Log.LogFile = undefined; 
                this.error(`checking path ${parts.dir}; logfile disabled`);
                // return Log.LogFile;
            }
        } else if (filePattern === '') {
            Log.LogFile = 'log-%YYYY-%MM-%DD.txt';
        } else {
            Log.LogFile=filePattern;
        }
        if (Log.LogFile) {
            this.info(Log.LogFile? `now logging to file ${date(Log.LogFile)}` : 'logfile disbaled');
            if (!append) writeTextFileSync(date(Log.LogFile), '')
        }
        return Log.LogFile;
    }

    protected getPrePostfix(indent:string, level:number, currIndent:string, colors:string[]):[string,string,string,string] {
        const color  = colors? COLOR[colors[level % colors.length]] : '';
        return [`${currIndent}${indent}${color}`, colors? COLOR.clear : '', '\n', currIndent];
    }
}

// const colors = { 
//     [Log.ERROR]: COLOR.red+COLOR.bold, 
//     [Log.WARN]: COLOR.yellow+COLOR.bold, 
//     [Log.DEBUG]: COLOR.blue, 
//     [Log.INFO]: COLOR.green 
// };
