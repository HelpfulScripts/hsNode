import { exec } from './cpUtil';

describe('cpUtil', () => {

    describe('valid command', () => {
        it('should execute "pwd" in a shell without error', () => 
            exec('pwd').then((result:{stdout:string, stderr:string}) => {
                expect(typeof result.stdout).toBe('string');
                expect(result.stdout.trim()).toMatch(/\/hsNode$/); // macthes '.../hsNode' at the end of a string
                expect(result.stderr).toBe('');  
            })
        );
    });

    describe('invalid command', () => {
        it('should execute "abcd" in a shell *with* error', () => 
            exec('abcd').catch((err) => {
                expect(err.toString().trim()).toMatch(/abcd: .*? not found/);
            })
        );
        it('should o x', () => {
            expect(exec).toBeDefined();
        });
    });
});
