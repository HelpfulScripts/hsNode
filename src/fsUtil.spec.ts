import { fsUtil } from './fsUtil';
import { o }    from 'hslayout';



o.spec("hsFSutil", () => {
	let called:any;
    const dir = __dirname+'/'; // + '/testTmp/';
    const TEST_DIR = dir+'../../example/';
    
    let spyRes:any,  spyRej:any;

    function getCalled(done:()=>void) {
        let result:string, error:string;
        let called = { 
            resolved: (v:string) => { result=v; done(); },
            rejected: (v:string) => { error =v; done(); },
            getResult: () => result,
            getError:  () => error
        };
        spyRes = o.spy(called.resolved); 
        spyRej = o.spy(called.rejected); 
        return called;
    }

	o.spec('pathExists' , () => {
		o.spec(process.cwd() , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.pathExists(process.cwd()).then(spyRes).catch(spyRej);
			});
			
			o('should exist', (done:any) => {
                o(spyRes.callCount).notEquals(0);
				o(spyRes.args.indexOf(process.cwd())).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('./' , () => { 
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.pathExists('./').then(spyRes).catch(spyRej);
			});
			
			o('should exist', (done:any) => {
				o(spyRes.args.indexOf(process.cwd())).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('/does-not-exists/', () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.pathExists('/does-not-exists/').then(spyRes).catch(spyRej);
			});
			
			o('should not exist', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
	});
	
	o.spec('isFile' , () => {
		o.spec(dir, () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isFile(dir).then(spyRes).catch(spyRej);
			});
		
			o('should not be a file', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('Gruntfile.js' , () => {
            let rp:string;
			o.beforeEach((done:any) => {
                fsUtil.realPath(dir+'/../../../Gruntfile.js')
                .then((path:string) => {
    				called = getCalled(done);
                    rp = path;
    				fsUtil.isFile(rp).then(spyRes).catch(spyRej);
                });
			});
		
			o('should be a file', (done:any) => {
				o(spyRes.args.indexOf(rp)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('./Gruntfile.js' , () => { 
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isFile('./Gruntfile.js').then(spyRes).catch(spyRej);
			});
			
			o('should be a file', (done:any) => {
				o(spyRes.args.indexOf(process.cwd()+'/Gruntfile.js')).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('./Gruntfile.js2', () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isFile('./Gruntfile.js2').then(spyRes).catch(spyRej);
			});
			 
			o('should not be a file an not be rejected', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
	});

	o.spec('isDirectory' , () => {
		o.spec(process.cwd(), () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isDirectory(process.cwd()).then(spyRes).catch(spyRej);
			});
		
			o('should be a directory', (done:any) => {
				o(spyRes.args.indexOf(process.cwd())).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
	
		o.spec('./' , () => { 
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isDirectory('./').then(spyRes).catch(spyRej);
			});
			
			o('should be a directory', (done:any) => {
				o(spyRes.args.indexOf(process.cwd())).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('./Gruntfile.js', () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isDirectory('./Gruntfile.js').then(spyRes).catch(spyRej);
			});
			 
			o('valid file should not be a directory an not be rejected', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec('./Gruntfile.js2', () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isDirectory('./Gruntfile.js2').then(spyRes).catch(spyRej);
			});
			 
			o('invalid file should not be a directory an not be rejected', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
	});
	
	o.spec('isLink' , () => {
		o.spec(__dirname , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isLink(__dirname).then(spyRes).catch(spyRej);
			});
			
			o('should not be a link', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);
				o(spyRej.callCount).equals(0);
				done();
			});
		});
		
		o.spec(dir+'/../../node_Modules' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isLink(dir+'/../../../node_Modules').then(spyRes).catch(spyRej);
			});
			
			o('should be a link', (done:any) => {
				o(spyRes.callCount).notEquals(0);           // has been called
				o(spyRes.args.indexOf(false)).equals(-1);   // not called with false
				o(spyRej.callCount).equals(0);              // has not been called
				done();
			});
		});
		
		o.spec(__dirname+'/abc' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.isLink(__dirname+'/abc').then(spyRes).catch(spyRej);
			});
			
			o('should reject for invalid names', (done:any) => {
				o(spyRes.args.indexOf(false)).notEquals(-1);   
				o(spyRej.callCount).equals(0);              
				done();
			});
		});
		
	});
	
	o.spec('readDir' , () => {
		o.spec(__dirname , () => {
			o.beforeEach((done:any) => {
                called = getCalled(done);
				fsUtil.readDir(__dirname+'/').then(spyRes).catch(spyRej);
			});
			
			o('should return list of spec files', (done:any) => {
                const result = called.getResult();
				o(spyRes.callCount).notEquals(0);           // has been called
				o(spyRej.callCount).equals(0);              // has not been called
				o(result).notEquals(undefined);
                o(result.length>6).equals(true);
                done();
			});
		});
		
		o.spec(__dirname+'/abcde' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readDir(__dirname+'/abcde').then(spyRes).catch(spyRej);
			});
			
			o('should reject', (done:any) => {
				o(spyRes.callCount).equals(0);      
				o(spyRej.callCount).notEquals(0);   
				done();
			});
		});		
	});
	
	o.spec('readFile' , () => {
        const file1 = TEST_DIR+'test.xlsx';
        const file2 = TEST_DIR+'test.xlsx2';
		o.spec(file1 , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readFile(file1, false).then(spyRes).catch(spyRej);
			});
			
			o('should read binary file', (done:any) => {
                const result = called.getResult();
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
                o(typeof result).equals('object');
				done();
			});
		});
		
		o.spec(file2 , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readFile(file2, false).then(spyRes).catch(spyRej);
			});
			
			o('should reject', (done:any) => {
                const error = called.getError();
				o(spyRes.callCount).equals(0);     
                o(spyRej.callCount).notEquals(0);   
                o((error+'').match(/Error: ENOENT: no such file or directory/)).notEquals(null);
				done();
			});
		});
		
	});
	
	o.spec('readTextFile' , () => {
		o.spec(__dirname+'/fsUtil.spec.js' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readTextFile(__dirname+'/fsUtil.spec.js').then(spyRes).catch(spyRej);
			});
			
			o('should read text file', (done:any) => {
                const result = called.getResult();
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
				o(typeof result).equals('string');
				done();
			});
		});		
	});
	
	o.spec('readJsonFile' , () => {
        const file = __dirname+'/../../../package.json';
		o.spec(file , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readJsonFile(file).then(spyRes).catch(spyRej);
			});
			
			o('should read text file', (done:any) => {
                const result = called.getResult();
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
				o(typeof result).equals('object');
				o(result.name).equals('hsnode');
				done();
			});
		});
	});
	
	o.spec('writeFile' , () => {
		o.spec(dir+'binFile' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.writeFile(dir+'binFile', 'test2', false).then(spyRes).catch(spyRej);
			});
			
			o('should resolve', (done:any) => {
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
				done();
			});
			
			o.spec('check for bin file', () => {
				o.beforeEach((done:any) => {
					called = getCalled(done);
					fsUtil.readFile(dir+'binFile', false).then(spyRes).catch(spyRej);
				});
				
				o('should exist', (done:any) => {
					o(spyRes.callCount).notEquals(0);     
                    o(spyRej.callCount).equals(0);   
                    done();
				});
				
				o('should contain payload', (done:any) => {
                    const result = called.getResult();
					o(typeof result).equals('object');
					o(Buffer.from('test2').equals(result)).equals(true);
					done();
				});
			});
		});
		
		o.spec(dir+'binFile2' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readFile(dir+'binFile2', false).then(spyRes).catch(spyRej);
			});
			
			o('should reject', (done:any) => {
				o(spyRes.callCount).equals(0);     
                o(spyRej.callCount).notEquals(0);   
				done();
			});
		});
	});
	
	
	o.spec('appendFile' , () => {
		o.spec(dir+'binFile' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.appendFile(dir+'binFile', 'test2', false).then(spyRes).catch(spyRej);
			});

            o.after((done:any) => {
                fsUtil.remove(dir+'binFile');
                done();
            });
			
			o('should resolve', (done:any) => {
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
				done();
			});
			
			o.spec('check for bin file', () => {
				o.beforeEach((done:any) => {
					called = getCalled(done);
                    fsUtil.readFile(dir+'binFile', false).then(spyRes).catch(spyRej);
				});
				
				o('should exist', (done:any) => {
					o(spyRes.callCount).notEquals(0);     
                    o(spyRej.callCount).equals(0);   
                    done();
				});
				
				o('should contain payload', (done:any) => {
                    const result = called.getResult();
					o(typeof result).equals('object');
					o(result.toString()).equals('test2test2test2test2');
					done();
				});
			});
		});
		
		o.spec(dir+'binFile2' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.readFile(dir+'binFile2', false).then(spyRes).catch(spyRej);
			});
			
			o('should reject', (done:any) => {
				o(spyRes.callCount).equals(0);     
                o(spyRej.callCount).notEquals(0);   
                done();
			});
		});
	});
	
	o.spec('writeTextFile' , () => {
		o.spec(dir+'txtFile' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.writeTextFile(dir+'txtFile', 'test2').then(spyRes).catch(spyRej);
			});
			
			o('should resolve', (done:any) => {
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
                done();
			});
			
			o.spec('check for text file', () => {
				o.beforeEach((done:any) => {
					called = getCalled(done);
                    fsUtil.readTextFile(dir+'txtFile').then(spyRes).catch(spyRej);
				});
				
				o('should exist', (done:any) => {
					o(spyRes.callCount).notEquals(0);     
                    o(spyRej.callCount).equals(0);   
                    done();
				});
				
				o('should contain payload', (done:any) => {
                    const result = called.getResult();
					o(typeof result).equals('string');
					o(result).equals('test2');
					done();
				});
			});
		});
	});
	
	o.spec('writeJsonFile' , () => {
		o.spec(dir+'jsnFile' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.writeJsonFile(dir+'jsnFile', {"name":"test2"}).then(spyRes).catch(spyRej);
			});
			
			o('should resolve', (done:any) => {
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
            done();
			});
			
			o.spec('check for json file', () => {
				o.beforeEach((done:any) => {
					called = getCalled(done);
                    fsUtil.readJsonFile(dir+'jsnFile').then(spyRes).catch(spyRej);
				});
				
				o('should exist', (done:any) => {
					o(spyRes.callCount).notEquals(0);     
                    o(spyRej.callCount).equals(0);   
                    done();
				});
				
				o('should contain payload', (done:any) => {
                    const result = called.getResult();
					o(typeof result).equals('object');
					o(result.name).equals('test2');
					done();
				});
			});
		});

		o.spec(dir+'jsn2File' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.writeJsonFile(dir+'jsn2File', 'test2').then(spyRes).catch(spyRej);
			});
			
			o('should resolve', (done:any) => {
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
                done();
			});
			
			o.spec('check for json file', () => {
                o.beforeEach((done:any) => {
					called = getCalled(done);
                    fsUtil.readJsonFile(dir+'jsn2File').then(spyRes).catch(spyRej);
				});
				
				o('should exist', (done:any) => {
					o(spyRes.callCount).notEquals(0);     
                    o(spyRej.callCount).equals(0);   
                    done();
				});
			
				o('should contain payload', (done:any) => {
                    const result = called.getResult();
					o(typeof result).equals('string');
					o(result).equals('test2');
					done();
				});
			});
		});
	});

    o.spec('delete' , () => {
		o.spec(dir+'jsnFile' , () => {
			o.beforeEach((done:any) => {
				called = getCalled(done);
				fsUtil.writeJsonFile(dir+'jsnFile', {"name":"test2"}).then(spyRes).catch(spyRej);
			});
			
			o('should have created jsnFile', (done:any) => {
				o(spyRes.callCount).notEquals(0);     
                o(spyRej.callCount).equals(0);   
                done();
			});
			
            o.spec('check for deletion', () => {
                o.beforeEach((done:any) => {
                    called = getCalled(done);
                    fsUtil.remove(dir+'jsnFile').then(spyRes).catch(spyRej);
                });
                
                o('should have deleted file', (done:any) => {
                    o(spyRes.callCount).notEquals(0);     
                    o(spyRej.callCount).equals(0);   
                    fsUtil.isFile(dir+'jsnFile')
                    .then(exists => {
                        o(exists).equals(false);
                        done();
                    }).catch(() => {
                        fail('error deleting file');
                    });
                });
			});
		});
    });

});
