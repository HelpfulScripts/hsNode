export declare class Log {
    private gLevel;
    private gPrefix;
    DEBUG: symbol;
    INFO: symbol;
    WARN: symbol;
    ERROR: symbol;
    constructor(prefix?: string);
    level(newLevelSym?: symbol, setGlobalLevel?: boolean): symbol;
    debug(msg: string, log?: boolean): Promise<string>;
    info(msg: any, log?: boolean): Promise<string>;
    warn(msg: any, log?: boolean): Promise<string>;
    error(msg: any, log?: boolean): Promise<string>;
    entryFormat(fmtStr?: string): string;
    prefix(prf?: string): string;
    logFile(file?: string): Promise<string>;
    out(lvl: symbol, msg: any, log?: boolean): Promise<string>;
    inspect(msg: any, depth?: number): string;
    config(cfg: {
        colors?: boolean;
        logFile?: string;
        entryFormat?: string;
        level?: symbol;
    }): void;
}
