import { Log }      from './';  const log = new Log('log.spec');

import { o }        from 'hslayout';
//import { date }     from 'hsutil';
import * as fsUtil  from './fsUtil';

o.spec("log", () => {
    o.spec("message", () => {
        let gLog: any;
        let gMsg: string;
        
        function myLog(msg:string) {
            gMsg = msg;
    //		gLog('received: '+ msg + '<<');
        }
        
        // avoid logging of level change
        function setLevel(level:symbol) {
            log.level(level);
            gMsg = undefined;
        }

        o.beforeEach(() => {
            gLog = console.log;
            console.log = myLog;
            log.level(log.INFO);
            gMsg = undefined;
        });
        
        o.afterEach(() => {
            console.log = gLog;
        });
        
        o.spec('reporting functions', () => {
            o('should print info', () => {
                log.info("yes");
                o(log.level()).equals(log.INFO);
                o(gMsg.match(/INFO.*yes/)).notEquals(null);  
            });
            
            o('should print warning', () => {
                log.warn("alert");
                o(log.level()).equals(log.INFO);
                o(gMsg.match(/WARN.*alert/)).notEquals(null);  
            });
            
            o('should not print debug at INFO level', () => {
                setLevel(log.INFO);
                log.debug('yes');
                o(gMsg).equals(undefined)();
            });
            
            o('should set DEBUG level', () => {
                o(log.level()).equals(log.INFO);
                log.level(log.DEBUG);
                o(log.level()).equals(log.DEBUG);
                o(gMsg.match(/new log level 'DEBUG' \(was INFO\)/)).notEquals(null);
            });
            
            o('should print info at DEBUG level', () => {
                setLevel(log.DEBUG);
                log.info('yes');
                o(log.level()).equals(log.DEBUG);
                o(gMsg.match(/INFO.*yes/)).notEquals(null);  
            });
            
            o('should print debug at DEBUG level', () => {
                log.level(log.DEBUG);
                o(log.level()).equals(log.DEBUG);
                o(gMsg.match(/new log level 'DEBUG' \(was INFO\)/)).notEquals(null);
                log.debug('yes');
                o(gMsg.match(/DEBUG.*yes/)).notEquals(null);  
            });
            
            o('should print error for invalid level', () => {
                log.level(Symbol('BOGUS'));
                o(gMsg.match(/ unkown level Symbol\(BOGUS\); log level remains Symbol\(INFO\)/)).notEquals(null);
                o(log.level()).equals(log.INFO);
            });
            
            o('should print error', () => {
                log.error('yes');
                o(gMsg.match(/ERROR.*yes/)).notEquals(null);
            });
        });
        
        o.spec('formatting', () => {
            o('should print prefix "test"', () => {
                const log = new Log('test');
                log.info('yes');
                o(gMsg.match(/test INFO.*yes/)).notEquals(null);
            });
            
            o('should print date', () => {
                log.config({entryFormat:'%M/%DD/%YY'});
                log.info('yes');
                o(gMsg.match(/\d+\/\d+\/\d+ log.spec INFO.*yes/)).notEquals(null);
            });
            
            o('should return entryFormat string', () => {
                o(log.entryFormat()).equals('%M/%DD/%YY');
            });

            o.after(() => log.entryFormat(null));   // reset the date format
        });                    

        o.spec('log file', () => {
            o('should be created next to Gruntfile for default path', (done:any) => {
                log.logFile('').then(file => {
                    o(file.match(/log-\d{4}-\d{2}-\d{2}.txt/)).notEquals(null)('file name match');
                    o(gMsg.match(/log.spec INFO.*now logging to file/g)).notEquals(null)('log content match');
                    fsUtil.isFile(file).then((b) => {
                        o(b).equals(true)(`log ${file} should have been created`);
                        log.logFile(null); // disable log file and remove
                        fsUtil.remove(file)
                        .then(fsUtil.isFile).then((b) => {
                            o(b).equals(false)(`log ${file} should have been removed`);
                        });
                        done();
                    });
                })
                .catch(gLog);
            });
            
            o('should be disabled', (done:any) => {
                log.logFile(null).then(file => {
                    o(file).equals(undefined)('file name match');
                    o(gMsg.match(/log.spec INFO.*disabling logfile/)).notEquals(null)('log content match');
                    done();
                })
                .catch(gLog);
            });
            
            o('should be stopped for missing paths', (done:any) => {
                log.logFile('/missing/log.txt').then(file => {
                    o(file).equals(undefined);
                    o(gMsg.match(/log.spec WARN.*path \'\/missing\/\' doesn't exists; logfile disabled/)).notEquals(null);
                    done();
                })
                .catch(gLog);
            });
        });
    });
});
