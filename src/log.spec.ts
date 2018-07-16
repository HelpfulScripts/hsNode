import { Log }      from './';
const log = new Log('log');

import { o }        from 'hslayout';
import { date }     from 'hsutil';
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
                log.prefix('test');
                log.info('yes');
                o(gMsg.match(/test INFO.*yes/)).notEquals(null);
            });
            
            o('should print date', () => {
                log.config({dateFormat:'%M/%DD/%YY'});
                log.info('yes');
                o(gMsg.match(/\d+\/\d+\/\d+ test INFO.*yes/)).notEquals(null);
            });
            
            o('should return dateFormat string', () => {
                o(log.dateFormat()).equals('%M/%DD/%YY');
            });
        });                    

        o.spec('log file', () => {
            o('should be created next to Gruntfile for default path', (done:any) => {
                let _file:string;
                log.logFile().then(file => {
                    _file = date(file);
                    o(file.match(/log-%YYYY-%MM-%DD.txt/)).notEquals(null)('file name match');
                    o(gMsg.match(/test INFO.*now logging to file/g)).notEquals(null)('log content match');
                })
                .then(() => fsUtil.isFile(_file))
                .then((b) => {
                    o(b).equals(true)('after creating');
                })
                .then(() => fsUtil.remove(_file))
                .then(() => fsUtil.isFile(_file))
                .then((b) => {
                    o(b).equals(false)('after removing');
                })
                .then(()=> done())
                .catch(console.log);
            });
            
            o('should be stopped for empty path', (done:any) => {
                log.logFile('').then(file => {
                    o(file).equals(undefined)('file name match');
                    o(gMsg.match(/test INFO.*disabling logfile/)).notEquals(null)('log content match');
                    done();
                })
                .catch(console.log);
            });
            
            o('should be stopped for missing paths', (done:any) => {
                log.logFile('/missing/log.txt').then(file => {
                    o(file).equals(undefined);
                    o(gMsg.match(/test WARN.*path \'\/missing\/\' doesn't exists; logfile disabled/)).notEquals(null);
                    done();
                })
                .catch(() => {});
            });
        });
    });
});
