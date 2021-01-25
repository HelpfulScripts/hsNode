
import * as fsUtil      from './fsUtil';
import { Log }          from './log';  const log = new Log('log.jest');

describe('log', () => {
    let gLog: any;
    let gLogMsg: string;
    let gOut: any    // for process.stdout.write
    let gProcessMsg: string;

    function myLog(msg:string) {
        gLogMsg = msg;
        gLog(msg)
    }
    
    function myTransient(msg:string) {
        gProcessMsg = msg;
    }
    
    // avoid logging of level change
    function setLevel(level:string) {
        log.level(level);
        gLogMsg = undefined;
    }

    beforeAll(() => {
        gLog = console.log;
        console.log = myLog;
    });

    afterAll(() => { 
        console.log = gLog;
        try {
            const file = log.logFile();
            if (fsUtil.isFileSync(file)) fsUtil.removeSync(file); 
        } catch(err) { console.log(`afterAll: ${err}`); }
    });

    beforeEach(() => {
        log.level(Log.INFO);
        log.prefix('log.jest');
        log.logFile('');    // set default 
        gLogMsg = undefined;
    });
    
    afterEach(() => {
        return log.logFile('');
    });
    
    describe('reporting functions', () => {
        it('should print default info', () => {
            Log.log.info("global");
            expect(Log.log.level()).toBe(Log.INFO);
            expect(gLogMsg).toMatch(/^.*?\d\d\d\d\d\d\d\d \d\d:\d\d:\d\d.\d\d\d  INFO.*?global/); 
        });
        
        it('should print info', () => {
            log.info("yes");
            expect(log.level()).toBe(Log.INFO);
            expect(gLogMsg).toMatch(/INFO.*yes/); 
        });
        
        it('should print warning', () => {
            log.warn("alert");
            expect(log.level()).toBe(Log.INFO);
            expect(gLogMsg).toMatch(/WARN.*alert/);  
        });
        
        it('should not print debug at INFO level', () => {
            setLevel(Log.INFO);
            log.debug('yes');
            expect(gLogMsg).toBe(undefined);
        });
        
        it('should set DEBUG level', () => {
            expect(log.level()).toBe(Log.INFO);
            log.level(Log.DEBUG);
            expect(log.level()).toBe(Log.DEBUG);
            return expect(gLogMsg).toMatch(/new .*? log level DEBUG \(was INFO\)/);
        });
        
        it('should print info at DEBUG level', () => {
            setLevel(Log.DEBUG);
            log.info('yes');
            expect(log.level()).toBe(Log.DEBUG);
            return expect(gLogMsg).toMatch(/INFO.*yes/);  
        });
        
        it('should print debug at DEBUG level', () => {
            log.level(Log.DEBUG);
            expect(log.level()).toBe(Log.DEBUG);
            expect(gLogMsg.match(/new .*? log level DEBUG \(was INFO\)/)).not.toBe(null);
            log.debug('yes');
            return expect(gLogMsg).toMatch(/DEBUG.*yes/);  
        });
        
        it('should print error for invalid level', () => {
            log.level('BOGUS');
            expect(log.level()).toBe(Log.INFO);
            return expect(gLogMsg).toMatch(/ unkown level BOGUS; log level remains INFO/);
        });
        
        it('should print error', () => {
            log.error('yes');
            return expect(gLogMsg).toMatch(/ERROR.*yes/);
        });
    });

    describe('transient reporting', () => {
        beforeAll(() => {
            gLog('redirecting process.stdout.write...')
            gOut = process.stdout.write
            process.stdout.write = myTransient as any
        });
    
        afterAll(() => { 
            process.stdout.write = gOut
            gLog('...process.stdout.write restored')
            try {
                const file = log.logFile();
                if (fsUtil.isFileSync(file)) fsUtil.removeSync(file); 
            } catch(err) { gLog(`afterAll: ${err}`); }
        });
    
        it('should print transient', () => {
            log.transient("yes");
            log.transient("no           maybe");
            expect(log.level()).toBe(Log.INFO);
            const msg = gProcessMsg.slice(gProcessMsg.indexOf('no'))
            expect(msg.length).toBe(Log.transientLength+1)
            expect(gProcessMsg).toMatch(/^.*?\d\d\d\d\d\d\d\d \d\d:\d\d:\d\d.\d\d\d log.jest INFO.*?no           maybe *?\r/)
            log.info('never')
            expect(gProcessMsg.split('\n')[1]).toMatch(/^.*?\d\d\d\d\d\d\d\d \d\d:\d\d:\d\d.\d\d\d log.jest INFO.*?never$/)
        });
        
    })

    describe('global levels', () => {
        beforeEach(() =>{
            log.level(Log.WARN, true);  // set global level
            log.level(null);            // unset local level
        });
        it('should set a global level', ()=>{
            expect(log.level()).toBe(Log.WARN);
            return expect(gLogMsg).toMatch(/new global log level WARN \(was INFO\)/);  
        });
        it('should print WARN', ()=>{
            gLogMsg = undefined;
            log.warn('yes');
            return expect(gLogMsg).toMatch(/WARN.*yes/);  
        });
        it('should not print INFO', ()=>{
            gLogMsg = undefined;
            log.info('yes');
            return expect(gLogMsg).toEqual(undefined);  
        });
        test('local should override global', ()=>{
            log.level(Log.INFO);            // unset local level
            gLogMsg = undefined;
            log.info('yes');
            return expect(gLogMsg).toMatch(/INFO.*yes/);  
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
            return expect(gLogMsg).toMatch(/test INFO.*yes/);
        });
        
        it('should print date', () => {
            log.config({format:'%M/%DD/%YY'});
            log.info('yes');
            return expect(gLogMsg).toMatch(/\d+\/\d+\/\d+ log.jest INFO.*yes/);
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

        it('should print prefix "test"', () => expect(gLogMsg).toMatch(/colors/));
    });                    

    describe('inspection', () => {
        let result:string;
        beforeEach(() => {
            log.config({colors: true});
            result = log.inspect({a:{b:'c'}}, {depth:3});
        });
        afterEach(() => log.config({colors: false}));   // reset the date format

        it('should print colored inspection', () => {
            expect(result).toMatch(/a(.)*?: {/);
            expect(result).toMatch(/b(.)*?: 'c'/);
        });
    });                    

    describe('log file', () => { 
        it('should be created next to Gruntfile for default path', () => {
            expect.assertions(5);
            try {
                const file = log.logFile('');
                expect(file).toBeDefined();
                expect(file).toMatch(/log-%YYYY-%MM-%DD.txt/);
                expect(gLogMsg).toMatch(/log.jest INFO.*now logging to file log-\d\d\d\d-\d\d-\d\d.txt/g);
                const file2 = log.logFile();
                expect(file2).toMatch(/log-\d\d\d\d-\d\d-\d\d.txt/);
                expect(fsUtil.isFileSync(file2)).toBe(true);
                fsUtil.removeSync(file2); 
            } catch(e) {
                gLog(e);
            }
        });
        
        it('should be created at a specific path', () => {
            expect.assertions(4);
            try {
                const file = log.logFile('./bin/log-%YYYY-%MM-%DD.txt');
                // gLog(`...setting log file ${file}`);
                expect(file).toBeDefined();
                expect(file).toMatch(/bin\/log-%YYYY-%MM-%DD.txt/);
                // gLog(`...msg match '${gMsg}'`);
                expect(gLogMsg).toMatch(/log.jest INFO.*now logging to file/g);
                const file2 = log.logFile();
                const b = fsUtil.isFileSync(file2);
                expect(b).toBe(true);
                fsUtil.removeSync(file2); 
            } catch(e) {
                gLog(e);
            }
        });
        
        it('should be created with format template', () => {
            expect.assertions(4);
            try {
                const file = log.logFile('%YY%M%Dlog.log');
                gLog(`...setting log file template ${file}`);
                expect(file).toBeDefined();
                expect(file).toMatch(/%YY%M%Dlog.log/);
                gLog(`...msg match '${gLogMsg}'`);
                expect(gLogMsg).toMatch(/log.jest INFO.*now logging to file/g);
                const file2 = log.logFile();
                expect(fsUtil.isFileSync(file2)).toBe(true);
                fsUtil.removeSync(file2); 
            } catch(e) {
                gLog(e);
            }
        });
        
        it('should be stopped for missing paths', async () => {
            expect.assertions(1);
            const file = await log.logFile('/missing/log.txt');
            expect(file).toBe(undefined)
        });
        
        it('should be disabled', async () => {
            const file = await log.logFile(null);
            expect(file).toBe(undefined);
            expect(gLogMsg).toMatch(/disabling logfile/);
            await log.info('unlogged entry');
            return expect(gLogMsg).toMatch(/log.jest INFO.*unlogged entry/);
        });
    });
});
