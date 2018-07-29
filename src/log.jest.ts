import { Log }      from './';  const log = new Log('log.spec');

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

    beforeEach(() => {
        gLog = console.log;
        console.log = myLog;
        log.level(log.INFO);
        gMsg = undefined;
    });
    
    afterEach(() => {
        console.log = gLog;
    });

    afterAll(() =>
        log.logFile('').then(file => {
            if (file) { fsUtil.remove(file).catch(err=>{}); }
            console.log(`removed logfile ${file}`);
        })
        .catch(err => console.log(`afterAll: ${err}`))
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
            return expect(gMsg).toMatch(/new log level 'DEBUG' \(was INFO\)/);
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
            expect(gMsg.match(/new log level 'DEBUG' \(was INFO\)/)).not.toBe(null);
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
    
    describe('formatting', () => {
        afterEach(() => log.entryFormat(null));   // reset the date format

        it('should print prefix "test"', () => {
            const log = new Log('test');
            log.info('yes');
            return expect(gMsg).toMatch(/test INFO.*yes/);
        });
        
        it('should print date', () => {
            log.config({entryFormat:'%M/%DD/%YY'});
            log.info('yes');
            return expect(gMsg).toMatch(/\d+\/\d+\/\d+ log.spec INFO.*yes/);
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
                expect(gMsg).toMatch(/log.spec INFO.*now logging to file/g);
            })
            .then(() => log.info('test'))
            .then(fsUtil.isFile)
            .then((b) => expect(b).toBe(true))
            .catch(gLog)
        );
        
        it('should be disabled', () =>
            log.logFile(null).then(file => {
                expect(file).toBe(undefined);
                return expect(gMsg).toMatch(/log.spec INFO.*disabling logfile/);
            })
        );
        
        it('should be stopped for missing paths', () =>
            log.logFile('/missing/log.txt').then(file => 
                expect(file).toBe(undefined)
//                expect(gMsg.match(/log.spec WARN.*path \'\/missing\' doesn't exists; logfile disabled/)).not.toBe(null);
            )
        );
    });
});
