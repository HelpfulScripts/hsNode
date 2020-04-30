
import * as fsUtil      from './fsUtil';
import { Log }          from './index';  const log = new Log('log.jest');

describe('log', () => {
    let gLog: any;
    let gMsg: string;
    

    function myLog(msg:string) {
        gMsg = msg;
    }
    
    // avoid logging of level change
    function setLevel(level:string) {
        log.level(level);
        gMsg = undefined;
    }

    beforeAll(() => {
        gLog = console.log;
        console.log = myLog;
        return Promise.resolve();
    });

    beforeEach(() => {
        log.level(Log.INFO);
        log.prefix('log.jest');
        log.logFile('');    // set default 
        gMsg = undefined;
        return Promise.resolve();
    });
    
    afterEach(() => {
        return log.logFile('');
    });

    afterAll(async () => { try {
        const file = await log.logFile();
        const exists = await fsUtil.isFile(file);
        if (exists) {
            await fsUtil.remove(file); 
        }} catch(err) {
            console.log(`afterAll: ${err}`);
        }
        console.log = gLog;
    });
    
    describe('reporting functions', () => {
        it('should print default info', () => {
            Log.log.info("global");
            expect(Log.log.level()).toBe(Log.INFO);
            expect(gMsg).toMatch(/INFO.*global/); 
        });
        
        it('should print info', () => {
            log.info("yes");
            expect(log.level()).toBe(Log.INFO);
            expect(gMsg).toMatch(/INFO.*yes/); 
        });
        
        it('should print warning', () => {
            log.warn("alert");
            expect(log.level()).toBe(Log.INFO);
            expect(gMsg).toMatch(/WARN.*alert/);  
        });
        
        it('should not print debug at INFO level', () => {
            setLevel(Log.INFO);
            log.debug('yes');
            expect(gMsg).toBe(undefined);
        });
        
        it('should set DEBUG level', () => {
            expect(log.level()).toBe(Log.INFO);
            log.level(Log.DEBUG);
            expect(log.level()).toBe(Log.DEBUG);
            return expect(gMsg).toMatch(/new .*? log level DEBUG \(was INFO\)/);
        });
        
        it('should print info at DEBUG level', () => {
            setLevel(Log.DEBUG);
            log.info('yes');
            expect(log.level()).toBe(Log.DEBUG);
            return expect(gMsg).toMatch(/INFO.*yes/);  
        });
        
        it('should print debug at DEBUG level', () => {
            log.level(Log.DEBUG);
            expect(log.level()).toBe(Log.DEBUG);
            expect(gMsg.match(/new .*? log level DEBUG \(was INFO\)/)).not.toBe(null);
            log.debug('yes');
            return expect(gMsg).toMatch(/DEBUG.*yes/);  
        });
        
        it('should print error for invalid level', () => {
            log.level('BOGUS');
            expect(log.level()).toBe(Log.INFO);
            return expect(gMsg).toMatch(/ unkown level BOGUS; log level remains INFO/);
        });
        
        it('should print error', () => {
            log.error('yes');
            return expect(gMsg).toMatch(/ERROR.*yes/);
        });
    });

    describe('global levels', () => {
        beforeEach(() =>{
            log.level(Log.WARN, true);  // set global level
            log.level(null);            // unset local level
        });
        it('should set a global level', ()=>{
            expect(log.level()).toBe(Log.WARN);
            return expect(gMsg).toMatch(/new global log level WARN \(was INFO\)/);  
        });
        it('should print WARN', ()=>{
            gMsg = undefined;
            log.warn('yes');
            return expect(gMsg).toMatch(/WARN.*yes/);  
        });
        it('should not print INFO', ()=>{
            gMsg = undefined;
            log.info('yes');
            return expect(gMsg).toEqual(undefined);  
        });
        test('local should override global', ()=>{
            log.level(Log.INFO);            // unset local level
            gMsg = undefined;
            log.info('yes');
            return expect(gMsg).toMatch(/INFO.*yes/);  
        });
    });
    
    describe('formatting', () => {
        afterEach(() => log.format(null));   // reset the date format

        it(`should return prefix 'log.jest'`, ()=>
            expect(log.prefix()).toEqual('log.jest')
        );

        it('should print prefix "test"', () => {
            log.prefix('test');
            log.info('yes');
            return expect(gMsg).toMatch(/test INFO.*yes/);
        });
        
        it('should print date', () => {
            log.config({format:'%M/%DD/%YY'});
            log.info('yes');
            return expect(gMsg).toMatch(/\d+\/\d+\/\d+ log.jest INFO.*yes/);
        });
        
        it('should return format string', () => 
            expect(log.format()).toBe('%YYYY%MM%DD %hh:%mm:%ss.%jjj')
        );

        it('should return format string', () => 
            expect(log.format('%M/%DD/%YY')).toBe('%M/%DD/%YY')
        );
    });                    
    
    describe('color', () => {
        beforeEach(() => {
            log.config({colors: true});
            return log.info('colors');
        });
        afterEach(() => log.config({colors: false}));   // reset the date format

        it('should print prefix "test"', () => expect(gMsg).toMatch(/colors/));
    });                    

    describe('log file', () => { 
        it('should be created next to Gruntfile for default path', async () => {
            try {
                expect.assertions(4);
                const file = await log.logFile('');
                gLog(`...setting log file ${file}`);
                expect(file).toBeDefined();
                expect(file).toMatch(/log-%YYYY-%MM-%DD.txt/);
                gLog(`...msg match '${gMsg}'`);
                expect(gMsg).toMatch(/log.jest INFO.*now logging to file/g);
                const file2 = await log.logFile();
                const b = await fsUtil.isFile(file2);
                expect(b).toBe(true);
                await fsUtil.remove(file2); 
            } catch(e) {
                gLog(e);
            }
        });
        
        it('should be created with format template', async () => {
            try {
                expect.assertions(4);
                const file = await log.logFile('%YY%M%Dlog.log');
                gLog(`...setting log file template ${file}`);
                expect(file).toBeDefined();
                expect(file).toMatch(/%YY%M%Dlog.log/);
                gLog(`...msg match '${gMsg}'`);
                expect(gMsg).toMatch(/log.jest INFO.*now logging to file/g);
                const file2 = await log.logFile();
                const b = await fsUtil.isFile(file2);
                expect(b).toBe(true);
                await fsUtil.remove(file2); 
            } catch(e) {
                gLog(e);
            }
        });
        
        it('should be stopped for missing paths', () =>
            log.logFile('/missing/log.txt').then((file:any) => 
                expect(file).toBe(undefined)
            )
        );
        
        it('should be disabled', () =>
            log.logFile(null)
                .then((file:string)=> {
                    expect(file).toBe(undefined);
                    expect(gMsg).toMatch(/disabling logfile/);
                    return log.info('unlogged entry');
                })
                .then(() => {
                    return expect(gMsg).toMatch(/log.jest INFO.*unlogged entry/);
                })
        );
    });
});
