const fs = require('fs');
import * as path        from 'path';
import { promiseChain } from 'hsutil';
import { log as gLog}   from 'hsutil';  const log = gLog('fsUtil'); // avoid circular reference to ./log

/**
 * Convenience functions for file system access, wrapped in Promises.
 * - &nbsp;{@link hsNode.fsUtil.realPath realPath}
 * - &nbsp;{@link hsNode.fsUtil.pathExists pathExists}
 * - &nbsp;{@link hsNode.fsUtil.isFile isFile}
 * - &nbsp;{@link hsNode.fsUtil.isDirectory isDirectory}
 * - &nbsp;{@link hsNode.fsUtil.isLink isLink}
 * - &nbsp;{@link hsNode.fsUtil.mkdirs mkdirs}
 * - &nbsp;{@link hsNode.fsUtil.readDir readDir}
 * - &nbsp;{@link hsNode.fsUtil.readFile readFile}
 * - &nbsp;{@link hsNode.fsUtil.readTextFile readTextFile}
 * - &nbsp;{@link hsNode.fsUtil.readJsonFile readJsonFile}
 * - &nbsp;{@link hsNode.fsUtil.writeFile writeFile}
 * - &nbsp;{@link hsNode.fsUtil.writeTextFile writeTextFile}
 * - &nbsp;{@link hsNode.fsUtil.writeJsonFile writeJsonFile}
 * - &nbsp;{@link hsNode.fsUtil.appendFile appendFile}
 * - &nbsp;{@link hsNode.fsUtil.remove remove}
 */

 export interface Stats {
    path:       string;     // path to the file
    device:     any;        // ID of device containing file
    iNode:      number;     // Inode number 
    type:       number;     // File type and mode 
    numLinks:   number;     // Number of hard links 
    userID:     string;     // User ID of owner 
    groupID:    string;     // Group ID of owner 
    deviceID:   string;     // Device ID (if special file) 
    totalSize:  number;     // Total size, in bytes 
    blockSize:  number;     // Block size for filesystem I/O 
    numBlocks:  number;     // Number of 512B blocks allocated 
    accessTime:       any;  // Time of last access
    modifyTime:       any;  // Time of last modification
    statusChangeTime: any;  // Time of last status change     
 }

//===============================================================================
//  Low level Promise wrappers

function stat(thePath:string):Promise<Stats> {
	return Promise.resolve(thePath)
        .then(realPath)
		.then(thePath => new Promise((resolve:(value:Stats)=>void, reject) => {
			fs.stat(thePath, (err:any, stats:Stats) => {
				if(err) { reject(err); } // reject is hard to test: realpath throws an error before stat can.
				else { 
					stats.path = thePath;
					resolve(stats); 
				}
			});
		}));
}

function lstat(thePath:string) {
	return Promise.resolve(thePath)
		.then(path.normalize)
		.then(thePath => new Promise((resolve, reject) => {
			fs.lstat(thePath, (err:any, stats:any) => {
				if(err) { reject(err); }
				else    { 
					stats.path = thePath;
					resolve(stats); 
				}
			});
		}));
}

function error(err:any):any {
    const msg = `*** error in fsUtil: ${err}, stack:\n${err.stack}`;
    throw new Error(msg);
}

//===============================================================================
//   Exported functions

/**
 * determines the canonical path for `thePath`, resolving all symbolic links and '../'in the path.
 * @param thePath the path to check
 * @return promise to provide the real canonical system path.
 */
export function realPath(thePath:string):Promise<string> {
	return new Promise((resolve:(path:string)=>void, reject:(err:any)=>void) => {
		fs.realpath(thePath, (err:any, resolvedPath:string) => err? reject(err) : resolve(resolvedPath) );
    })
    .catch(error);
}

/**
 * determines if `thePath` exists and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export function pathExists(thePath:string):Promise<boolean> {
	return new Promise((resolve) => {
        stat(thePath).then((stats:any) => resolve(true)).catch(() => resolve(false));
    });
}

/**
 * determines if `thePath` is a file and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export function isFile(thePath:string):Promise<boolean> {
	return new Promise((resolve) => {
        stat(thePath).then((stats:any) => resolve(stats.isFile())).catch(() => resolve(false));
    });
}

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export function isDirectory(thePath:string):Promise<boolean> {
	return new Promise((resolve) => {
        stat(thePath).then((stats:any) => resolve(stats.isDirectory())).catch(() => resolve(false));
    });
}

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */ 
export function isLink(thePath:string):Promise<boolean> {
	return new Promise((resolve) => {
        lstat(thePath).then((stats:any) => resolve(stats.isSymbolicLink())).catch(() => resolve(false));
    });
}

/**
 * creates any missing directories in `thePath` and promises to return the path name.
 * Characters after the last `/` in `thePath` will be interpreted as a filename, hence no directory willbe created form them.
 * Terminate `thePath` with a final `/` to indicate that all parts should be created.
 * FInally, for precaution `mkdirs` only creates directories within the current working directory.
 * @param thePath the path to check
 * @return promise to provide the path name
 */ 
export function mkdirs(thePath:string):Promise<string> {    
    const p = path.normalize(path.resolve(process.cwd(),thePath));
    if (p.indexOf(process.cwd())===0) { // --> thePath is local to current working directory
        const r = path.dirname(p.substr(process.cwd().length+1));
        let dirs = r.split('/');
        // create complete successive subdirs from the split
        dirs = dirs.map((dir, i) => './'+dirs.slice(0,i+1).join('/'));
        // setup the execution calls for each dir:
        const tasks = dirs.map(dir => () => isDirectory(dir)
            .then((exists) => {
                if (exists) { 
                    log.debug(`dir exists: '${dir}'`);
                    return true; 
                } else { 
                    log.debug(`creating dir: '${dir}'`);
                    return new Promise((resolve:(dir:boolean)=>void, reject) => {
                        fs.mkdir(dir, (err:any) => err? reject(err) : resolve(true));
                    })
                    .catch(err => {
                        return log.error(`mkdirs '${thePath}': ${err}`);
                    });
                }
            })
        );
        // serialize the directory creation: 
        return promiseChain(tasks).then((res:boolean[]) => {
            res.map((r, i) => {
                if (r) { return true; }
                throw `mkdir failed for ${dirs[i]}`;
            });
            return dirs[dirs.length-1];
        });
    } else {
        return Promise.reject(`target '${p}' not inside working directory '${process.cwd()}'`);
    }
}

/**
 * lists all files in a directory and promises to provide the list.
 * @param thePath the path to check
 * @return promise to provide a list of directory entries.
 */
export function readDir(thePath:string):Promise<string[]> {
	return Promise.resolve(thePath)
		.then(realPath)
		.then(thePath => new Promise((resolve:(files:any)=>void, reject:(err:any)=>void) => {
			fs.readdir(thePath, (err:any, files:any) =>  {
				if(err) { reject(err); }
				else { 
					files.path = thePath;
					resolve(files); 
				}
			});
		}))
        .catch(error);
}


/**
 * reads a file either as binary or text and promises to provide the content.
 * @param thePath the path to read
 * @param isText [default=true] `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide file content.
 */
export function readFile(thePath:string, isText=true):Promise<any> {
	return new Promise((resolve:(data:any)=>void, reject:(err:any)=>void) => {
		let encoding = isText? 'utf8' : {};
		fs.readFile(thePath, encoding, (err:any, data:any) => {
            if (err) { reject(err); }
            else { resolve(data); }
		});
	})
    .catch(error);
}

/**
 * reads a text file and promises to provide the content.
 * @param thePath the path to read
 * @return promise to provide file content.
 */
export function readTextFile(thePath:string):Promise<string> { 
	return readFile(thePath, true)
    .catch(error);
}

/**
 * reads a text file and promises to provide the content.
 * @param thePath the path to read
 * @return promise to provide file content.
 */
export function readJsonFile(thePath:string):Promise<any> {
    return readFile(thePath, true)
	.then((data:any) => (typeof data === 'string')? JSON.parse(data) : data)
    .catch(error);
}

/**
 * writes a file either as binary or text and promises to return the file name.
 * @param thePath the path to write to
 * @param content the content to write
 * @param isText `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide the file name if successful.
 */
export function writeFile(thePath:string, content:string, isText:boolean=true):Promise<string> {
	return new Promise((resolve, reject) => {
        var encoding:any = isText? 'utf8' : {encoding: null};
        mkdirs(thePath)
        .then(() => fs.writeFile(thePath, content, encoding, (err:any) => 
            err? reject(err) : resolve(thePath))
        );
	})
    .catch(error);
};

/**
 * writes content to a file as a stream and promises to return the file name.
 * @param thePath the path to write to
 * @param content the content to write
 * @return promise to provide the file name if successful.
 */
export function writeStream(thePath:string, content:string):Promise<string> {
	return new Promise((resolve, reject) => {
        let s = fs.createWriteStream(thePath, {flags:'w', mode:0o666});
        s.on('error', (src:any) => reject(src));
        s.write(content, 'binary', () => resolve(thePath));
        s.end();
	})
    .catch(error);
}

/**
 * writes a text file and promises to return the file name.
 * @param thePath the path to write
 * @return promise to provide the file name if successful.
 */
export function writeTextFile(thePath:string, content:string):Promise<string> { 
	return writeFile(thePath, content, true)
    .catch(error);
};

/**
 * writes a text file and promises to return the file name.
 * @param thePath the path to write
 * @param obj the object to write
 * @return promise to provide the file name if successful.
 */
export function writeJsonFile(thePath:string, obj:any):Promise<string> {
    return Promise.resolve(obj)
	.then(JSON.stringify)
	.then(data => writeTextFile(thePath, data))
    .catch(error);
}

/**
 * appends to a file either as binary or text and promises to return the file name.
 * @param thePath the path to write to
 * @param content the content to write
 * @param isText `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide the realPath of the file written to.
 */
export function appendFile(thePath:string, content:string, isText:boolean=true):Promise<string> {
	return new Promise((resolve, reject) => {
		var encoding:any = isText? 'utf8' : {encoding: null};
        fs.appendFile(thePath, content, encoding, (err:any) => err? reject(err) : resolve(thePath));
    })
    .then(realPath)
    .catch(error);
}

/**
 * promises to delete a file or folder and return the file or folder name.
 * @param thePath the path to write
 * @return promise to provide the name of the removed file.
 */
export function remove(thePath:string):Promise<string> {
	return new Promise((resolve:(path:string)=>void, reject:(err:any)=>void) => {
        isDirectory(thePath).then((dir:boolean) => {
            dir? fs.rmdir(thePath, (e:any) => (e? reject(e) : resolve(thePath)))
               : fs.unlink(thePath, (e:any) => (e? reject(e) : resolve(thePath)));
        });
	})
    .catch(error);
}
