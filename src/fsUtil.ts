/**
 * Convenience functions for node file system functions, wrapped in Promises.
 * 
 * ### Usage:
 * ```
 * import { node } from 'hsnode';
 * const files = node.fs.readDir('./');
 *     .then((stdout, stderr) => {...})
 *     .catch(err => {...});
 * ```
 */

 /**
  * 
  */

import * as fs from 'fs';
import * as path        from 'path';
import { promiseChain } from 'hsutil';
import { log as _log}   from 'hsnode';  const log = _log('fsUtil');

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

//  export interface Stats {
//     path:       string;     // path to the file
//     device:     any;        // ID of device containing file
//     iNode:      number;     // Inode number 
//     type:       number;     // File type and mode 
//     numLinks:   number;     // Number of hard links 
//     userID:     string;     // User ID of owner 
//     groupID:    string;     // Group ID of owner 
//     deviceID:   string;     // Device ID (if special file) 
//     totalSize:  number;     // Total size, in bytes 
//     blockSize:  number;     // Block size for filesystem I/O 
//     numBlocks:  number;     // Number of 512B blocks allocated 
//     accessTime:       any;  // Time of last access
//     modifyTime:       any;  // Time of last modification
//     statusChangeTime: any;  // Time of last status change     
//  }

//===============================================================================
//  Low level Promise wrappers

/**
 * returns a promise for the stats of the file addressed by `thePath`.
 * If `thePath` addresses a symbolic link, the stats of the linked file are returned.
 * @param thePath 
 */
async function stat(thePath:string):Promise<fs.Stats> {
    const p = await realPath(thePath);
    return await new Promise((resolve, reject) => {
        fs.stat(p, (err:any, stats:fs.Stats) => {
            if(err) { 
                log.error(`error getting stats for ${thePath}: ${err}`);
                reject(err); 
            } // reject is hard to test: realpath throws an error before stat can.
            else { resolve(stats); }
        });
    });
}

/**
 * returns a promise for the stats of the file addressed by `thePath`.
 * If `thePath` addresses a symbolic link, the stats of the link are returned.
 * @param thePath 
 */
async function lstat(thePath:string):Promise<fs.Stats> {
    const p = path.normalize(thePath);
	return new Promise((resolve, reject) => 
        fs.lstat(p, (err:any, stats:any) => err? reject(err) : resolve(stats))
	);
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
export async function pathExists(thePath:string):Promise<boolean> {
    try { 
        await stat(thePath);
        return true;
    } catch(e) {
        return false;
    }
}

/**
 * determines if `thePath` is a file and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export async function isFile(thePath:string):Promise<boolean> {
    try { 
        return (await stat(thePath)).isFile();
    } catch(e) {
        return false;
    }
}

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export async function isDirectory(thePath:string):Promise<boolean> {
    try { 
        return (await stat(thePath)).isDirectory();
    } catch(e) {
        return false;
    }
}

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */ 
export async function isLink(thePath:string):Promise<boolean> {
    try { 
        return (await lstat(thePath)).isSymbolicLink();
    } catch(e) {
        return false;
    }
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
        const r = p.substr(process.cwd().length+1);
        let dirs = r.split('/');
        // create complete successive subdirs from the split
        dirs = dirs.map((dir, i) => './'+dirs.slice(0,i+1).join('/'));
        // setup the execution calls for each dir:
        const tasks = dirs.map(dir => () => isDirectory(dir)
            .then((exists) => new Promise((resolve:(dir:boolean)=>void, reject) => {
                if (exists) { 
                    log.debug(`dir exists: '${dir}'`);
                    resolve(true);
                } else { 
                    log.debug(`creating dir: '${dir}'`);
                    fs.mkdir(dir, (err:any) => {
                        if(!err) { resolve(true); }
                        else if (err.toString().match(/Error: EEXIST: file already exists/)) {
                            log.debug(`mkdirs: directory already exists: ${dir}`);
                            resolve(true);
                        } else {
                            reject(err);
                        }
                    });
                }
            }))
        );
        // serialize the directory creation: 
        return promiseChain(tasks).then((res:boolean[]) => {
            res.map((r, i) => {
                if (r) { return true; }
                throw `mkdir failed for ${dirs[i]}: ${r}`;
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
export async function readDir(thePath:string):Promise<string[]> {
    const p = await realPath(thePath);
    return await new Promise((resolve:(files:any)=>void, reject:(err:any)=>void) => {
        fs.readdir(p, (err:any, files:any) =>  {
            if(err) { reject(err); }
            else { 
                files.path = p;
                resolve(files); 
            }
        });
    })
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
		fs.readFile(thePath, encoding, (err:any, data:any) => 
            err? reject(err) : resolve(data));
	})
    .catch(error);
}

/**
 * reads a text file and promises to provide the content.
 * @param thePath the path to read
 * @return promise to provide file content.
 */
export async function readTextFile(thePath:string):Promise<string> { 
	try { return await readFile(thePath, true); }
    catch(err) { error(err); }
}

/**
 * reads a text file and promises to provide the content.
 * @param thePath the path to read
 * @return promise to provide file content.
 */
export async function readJsonFile(thePath:string):Promise<any> {
    try {
        const data = await readFile(thePath, true);
        return (typeof data === 'string')? JSON.parse(data) : data;
    }
    catch(err) { error(err); }
}

/**
 * writes a file either as binary or text and promises to return the file name.
 * @param thePath the path to write to
 * @param content the content to write
 * @param isText `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide the file name if successful.
 */
export async function writeFile(thePath:string, content:string, isText:boolean=true):Promise<string> {
    var encoding:any = isText? 'utf8' : {encoding: null};
    await mkdirs(path.dirname(thePath));
    return await new Promise((resolve, reject) => {
        fs.writeFile(thePath, content, encoding, (err:any) =>
            err? reject(`mkdirs failed in writeFile for '${thePath}': ${err}`) : resolve(thePath));
    }); 
}

/**
 * writes content to a file as a stream and promises to return the file name.
 * @param thePath the path to write to
 * @param content the content to write
 * @return promise to provide the file name if successful.
 */
export async function writeStream(thePath:string, content:string):Promise<string> {
    return await new Promise((resolve, reject) => {
        const s = fs.createWriteStream(thePath, {flags:'w', mode:0o666});
        s.on('error', (src:any) => reject(`writeStream error '${src}' for path '${thePath}'`));
        s.write(content, 'binary', () => resolve(thePath));
        s.end();
    });
}

/**
 * writes a text file and promises to return the file name.
 * @param thePath the path to write
 * @return promise to provide the file name if successful.
 */
export async function writeTextFile(thePath:string, content:string):Promise<string> { 
	return await writeFile(thePath, content, true)
    .catch(error);
}

/**
 * writes a text file and promises to return the file name.
 * @param thePath the path to write
 * @param obj the object to write
 * @return promise to provide the file name if successful.
 */
export async function writeJsonFile(thePath:string, obj:any):Promise<string> {
    return await Promise.resolve(obj)
	.then(JSON.stringify)
	.then(async data => await writeTextFile(thePath, data))
    .catch(error);
}

/**
 * appends to a file either as binary or text and promises to return the file name.
 * @param thePath the path to write to
 * @param content the content to write
 * @param isText `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide the realPath of the file written to.
 */
export async function appendFile(thePath:string, content:string, isText:boolean=true):Promise<string> {
	return await new Promise((resolve, reject) => {
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
export async function remove(thePath:string):Promise<string> {
    const dir:boolean = await isDirectory(thePath);
	return await new Promise((resolve, reject) => {
        dir? fs.rmdir(thePath, (e:any) => (e? reject(e) : resolve(thePath)))
           : fs.unlink(thePath, (e:any) => (e? reject(e) : resolve(thePath)));
	});
}
