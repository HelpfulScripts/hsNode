import { Log }      from './log';  const log = new Log('log.jest');

// import { date }     from 'hsutil';
import * as fsUtil  from './fsUtil';

describe('log', () => {
    let gLog: any;
    let gMsg: string;
    

    function myLog(msg:string) {
        gMsg = msg;
    }
    
    // avoid logging of level change
    function setLevel(level:symbol) {
        log.level(level);
        gMsg = undefined;
    }

    beforeAll(() => {
        gLog = console.log;
        console.log = myLog;
        return Promise.resolve();
    });

    beforeEach(() => {
        log.level(log.INFO);
        log.prefix('log.jest');
        gMsg = undefined;
        return Promise.resolve();
    });
    
    afterEach(() => {
        return log.logFile('');
    });

    afterAll(() =>
        log.logFile().then(file => 
            fsUtil.isFile(file)
            .then(exists => exists? fsUtil.remove(file) : undefined)
        )
        .catch(err => console.log(`afterAll: ${err}`))
        .then(() => console.log = gLog)
    );
    
    describe('reporting functions', () => {
        it('should print info', () =>
            log.info("yes").then(() => { 
                expect(log.level()).toBe(log.INFO);
                expect(gMsg).toMatch(/INFO.*yes/); 
            }) 
        );
        
        it('should print warning', () => 
            log.warn("alert").then(() => { 
                expect(log.level()).toBe(log.INFO);
                expect(gMsg).toMatch(/WARN.*alert/);  
            })
        );
        
        it('should not print debug at INFO level', () => {
            setLevel(log.INFO);
            return log.debug('yes').then(() => 
                expect(gMsg).toBe(undefined)
            );
        });
        
        it('should set DEBUG level', () => {
            expect(log.level()).toBe(log.INFO);
            log.level(log.DEBUG);
            expect(log.level()).toBe(log.DEBUG);
            return expect(gMsg).toMatch(/new .*? log level DEBUG \(was INFO\)/);
        });
        
        it('should print info at DEBUG level', () => {
            setLevel(log.DEBUG);
            log.info('yes');
            expect(log.level()).toBe(log.DEBUG);
            return expect(gMsg).toMatch(/INFO.*yes/);  
        });
        
        it('should print debug at DEBUG level', () => {
            log.level(log.DEBUG);
            expect(log.level()).toBe(log.DEBUG);
            expect(gMsg.match(/new .*? log level DEBUG \(was INFO\)/)).not.toBe(null);
            log.debug('yes');
            return expect(gMsg).toMatch(/DEBUG.*yes/);  
        });
        
        it('should print error for invalid level', () => {
            log.level(Symbol('BOGUS'));
            expect(log.level()).toBe(log.INFO);
            return expect(gMsg).toMatch(/ unkown level Symbol\(BOGUS\); log level remains Symbol\(INFO\)/);
        });
        
        it('should print error', () => {
            log.error('yes');
            return expect(gMsg).toMatch(/ERROR.*yes/);
        });
    });

    describe('global levels', () => {
        beforeEach(() =>{
            log.level(log.WARN, true);  // set global level
            log.level(null);            // unset local level
        });
        it('should set a global level', ()=>{
            expect(log.level()).toBe(log.WARN);
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
            log.level(log.INFO);            // unset local level
            gMsg = undefined;
            log.info('yes');
            return expect(gMsg).toMatch(/INFO.*yes/);  
        });
    });
    
    describe('formatting', () => {
        afterEach(() => log.entryFormat(null));   // reset the date format

        it(`should return prefix 'log.jest'`, ()=>
            expect(log.prefix()).toEqual('log.jest')
        );

        it('should print prefix "test"', () => {
            log.prefix('test');
            log.info('yes');
            return expect(gMsg).toMatch(/test INFO.*yes/);
        });
        
        it('should print date', () => {
            log.config({entryFormat:'%M/%DD/%YY'});
            log.info('yes');
            return expect(gMsg).toMatch(/\d+\/\d+\/\d+ log.jest INFO.*yes/);
        });
        
        it('should return entryFormat string', () => 
            expect(log.entryFormat()).toBe('%YYYY%MM%DD %hh:%mm:%ss.%jjj')
        );

        it('should return entryFormat string', () => 
            expect(log.entryFormat('%M/%DD/%YY')).toBe('%M/%DD/%YY')
        );
    });                    

    describe('log file', () => {
        it('should be created next to Gruntfile for default path', () =>
            log.logFile('').then(file => {
                expect(file).toMatch(/log-\d{4}-\d{2}-\d{2}.txt/);
                expect(gMsg).toMatch(/log.jest INFO.*now logging to file/g);
            })
            .then(() => log.info('test'))
            .then(fsUtil.isFile)
            .then((b) => expect(b).toBe(true))
            .catch(gLog)
        );
        
        it('should be stopped for missing paths', () =>
            log.logFile('/missing/log.txt').then(file => 
                expect(file).toBe(undefined)
            )
        );
        
        it('should be disabled', () =>
            log.logFile(null).then(()=>log.info('unlogged entry')).then(file => {
                expect(file).toBe(undefined);
                return expect(gMsg).toMatch(/log.jest INFO.*unlogged entry/);
            })
        );
    });
});
