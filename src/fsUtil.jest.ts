import * as fsUtil from './fsUtil';
import * as cpUtil from './cpUtil';

const dir = __dirname+'/'; 
const TEST_DIR = dir+'example/';

describe('hsFSutil', () => {
    describe('pathExists', () => {
        it(`should exist ${process.cwd()}` , () => 
            expect(fsUtil.pathExists(process.cwd())).resolves.toBe(true)
        );
            
        test('/does-not-exists/ should not exist', () => 
            expect(fsUtil.pathExists('/does-not-exists/')).resolves.toBe(false)
        );
    });
	
	describe('isFile', () => {
		it(`${dir} should be a file`, () => 
			expect(fsUtil.isFile(dir)).resolves.toBe(false)    // dir is a directory
		);
		it(`'./Gruntfile.js' should be a file`, () => 
			expect(fsUtil.isFile('./Gruntfile.js')).resolves.toBe(true)
		);
		it(`'./Gruntfile2.js' should be a file`, () => 
			expect(fsUtil.isFile('./Gruntfile2.js')).resolves.toBe(false)
		);		
	});

	describe('isDirectory' , () => {
        it(`${process.cwd()} should be a directory`, () => 
            expect(fsUtil.isDirectory(process.cwd())).resolves.toBe(true)		
        );
        it('./ should be a directory', () => 
            expect(fsUtil.isDirectory('./')).resolves.toBe(true)			
        );
        it('./Gruntfile.js should not be a directory', () => 
            expect(fsUtil.isDirectory('./Gruntfile.js')).resolves.toBe(false)			
        );
        it('./Gruntfile2.js should not be a directory', () => 
            expect(fsUtil.isDirectory('./Gruntfile2.js')).resolves.toBe(false)			
        );
	});
	
	describe('isLink', () => {
        beforeAll(() => 
            fsUtil.isLink(`./_testLnk`)
            .then(islink => islink? undefined : cpUtil.exec(`ln -s ./Gruntfile.js ./_testLnk`))
            .catch(console.log)
        );
        afterAll(() =>      // cleanup link
            fsUtil.remove(`./_testLnk`)
            .catch(console.log)
        );
        it(`${__dirname} should not be a link`, () => 
            expect(fsUtil.isLink(__dirname)).resolves.toBe(false)			
        );
        it(`${dir+'../_testLnk'} should be a link`, () => 
            expect(fsUtil.isLink(dir+'../_testLnk')).resolves.toBe(true)
        );
        it(`${'./_testLnk'} should be a link`, () => 
            expect(fsUtil.isLink('./_testLnk')).resolves.toBe(true)
        );
        it(`${__dirname+'/abc'} should resolve to false for invalid name`, () => 
            fsUtil.isLink(__dirname+'/abc')
            .then(result => expect(result).toBe(false))
            .catch(err => expect(err.toString()).toBe('should not occur 2'))
        );
    });

    describe('mkdirs', () => {
        it('should create subdirectory', ()=> {
            expect.assertions(3);
            return fsUtil.mkdirs('../hsNode/__jest_test/a/b/c')
            .then((path) => Promise.all([
                expect(path).toEqual('./__jest_test/a/b'),
                expect(fsUtil.isDirectory('./__jest_test/a/b')).resolves.toBe(true),
                expect(fsUtil.isDirectory('../hsNode/__jest_test/a/b/')).resolves.toBe(true)
            ]));
        });
        it('should not create subdirectory', ()=> 
            expect(fsUtil.mkdirs('/__jest_test/a/b/c')).rejects.toMatch(/target '\/__jest_test\/a\/b\/c' not inside working directory/)
        );
        it('should pass without creating subdirectory', ()=> 
            expect(fsUtil.mkdirs('./bin/')).resolves.toMatch(/.\/./)
        );
        it('should cleanup test directories', () => {
            expect.assertions(4);
            return Promise.resolve()
                .then(() => expect(fsUtil.remove('./__jest_test/a/b/')).resolves.toEqual('./__jest_test/a/b/'))
                .then(() => expect(fsUtil.remove('./__jest_test/a/')).resolves.toEqual('./__jest_test/a/'))
                .then(() => expect(fsUtil.remove('./__jest_test/')).resolves.toEqual('./__jest_test/'))
                .then(() => expect(fsUtil.isDirectory('./__jest_test/')).resolves.toBe(false));
        });
    });
			
	describe('readDir' , () => {
        it('should return list of spec files', () => 
            expect(fsUtil.readDir(__dirname+'/')).resolves.toContain('fsUtil.jest.ts')        
        );
        it('should reject', () => 
            fsUtil.readDir(__dirname+'/abcde')
                .catch(err => expect(err.toString()).toMatch(/ENOENT: no such file or directory/))
        );
    });
			
	describe('readFile' , () => {
        const file1 = TEST_DIR+'test.xlsx';
        const file2 = TEST_DIR+'test.xlsx2';
        it(`should read binary file ${file1}`, () => 
            fsUtil.readFile(file1, false)
            .then(result => { 
                expect(result).toBeDefined(); 
                expect(result.toString().length).toBeGreaterThan(1000); 
            })
        );
        it(`should reject ${file2}`, () => 
            fsUtil.readFile(file2, false)
            .catch(err   => expect(err.toString()).toMatch(/Error: ENOENT: no such file or directory/))
        );
    });
			
	describe('readTextFile' , () => {
        it(`should read text file ${__dirname+'/fsUtil.ts'}`, () => 
            fsUtil.readTextFile(__dirname+'/fsUtil.ts')
                .then(result => expect(result.length).toBeGreaterThan(1000))
        );
    });		
	
	describe('readJsonFile' , () => {
        const file = __dirname+'/../package.json';
        it(`should read json file ${file}`, () =>
            fsUtil.readJsonFile(file)
            .then(result => expect(JSON.stringify(result)).toMatch(/helpfulscripts@gmail.com/))
        );
	});
	
	describe('writeFile' , () => {
        const file = dir+'binFile';
        afterAll(() => fsUtil.remove(file));

        it(`should write bin file ${file}`, () => 
            expect(fsUtil.writeFile(file, 'test2', false)).resolves.toBe(file) 
        );	
		it(`should have created ${file}`, () =>
            expect(fsUtil.isFile(file)).resolves.toBe(true)   
        );
		it(`should now contain payload in ${file}`, () => 
            expect(fsUtil.readFile(file, false)).resolves.toEqual(Buffer.from('test2'))
        );
		it(`should not contain 'test3' in ${file}`, () => 
            expect(fsUtil.readFile(file, false)).resolves.not.toEqual(Buffer.from('test3'))
        );
	});
	
	
	describe('appendFile' , () => {
        const file = dir+'binFile';
        afterAll(() => fsUtil.remove(file));

        beforeAll(() => fsUtil.appendFile(file, 'test2', false)     
            .then(() => fsUtil.appendFile(file, 'test3', false))
        );
        expect.assertions(1);

        it('should add content at the end', () =>  
            expect(fsUtil.readFile(file, false)).resolves.toEqual(Buffer.from('test2test3'))
        );   
	});
	
	describe('writeTextFile' , () => {
        const file = dir+'txtFile';
        afterAll(() => fsUtil.remove(file));
        
        beforeAll(() => fsUtil.writeTextFile(file, 'test2')     
            .then(() => fsUtil.writeTextFile(file, 'test3'))
        );

        it('should add content at the end', () =>
            expect(fsUtil.readTextFile(file)).resolves.toBe('test3')
        );   
	});
	
	describe('writeJsonFile' , () => {
        const file = dir+'txtFile';
        const content = {name: 'test2'};
        afterAll(() => fsUtil.remove(file));
        beforeAll(() => fsUtil.writeJsonFile(file, content));    

        it(`should write to ${file}`, () => {
            expect.assertions(1);
            return expect(fsUtil.isFile(file)).resolves.toEqual(true);
        });   
        test(`file should contain field 'name'`, () => {
            expect.assertions(1);
            return fsUtil.readJsonFile(file).then((r)=> 
                expect(r.name).toEqual('test2')
            );
        });   
    });

    describe('remove' , () => {
        const file = dir+'jsnFile';
        beforeAll(() => fsUtil.writeJsonFile(file, {"name":"test2"}));
			
        it(`should have created jsnFile ${file}`, () =>
            expect(fsUtil.isFile(file)).resolves.toBe(true)                
        );

        it(`should remove jsnFile ${file}`, () =>
            expect(fsUtil.remove(file)).resolves.toBe(file)             
        );			

        it(`should no longer exist: ${file}`, () =>
            expect(fsUtil.isFile(file)).resolves.toBe(false)            
        );			
    });
});
