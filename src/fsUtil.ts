const fs 	= require('fs');
import * as path from 'path';


/**
 * Convenience functions for file system access, wrapped in Promises.
 * - &nbsp;{@link hsNode.fsUtil#methods_realPath realPath}
 * - &nbsp;{@link hsNode.fsUtil#methods_pathExists pathExists}
 * - &nbsp;{@link hsNode.fsUtil#methods_isfile isFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_isdirectory isDirectory}
 * - &nbsp;{@link hsNode.fsUtil#methods_readDir readDir}
 * - &nbsp;{@link hsNode.fsUtil#methods_readFile readFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_readTextFile readTextFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_readJsonFile readJsonFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_writeFile writeFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_writeTextFile writeTextFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_writeJsonFile writeJsonFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_appendFile appendFile}
 * - &nbsp;{@link hsNode.fsUtil#methods_remove remove}
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
    const msg = `*** error in fsUtil: ${err}`;
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
	return stat(thePath).then((stats:any) => stats.path).catch(() => false);
}

/**
 * determines if `thePath` is a file and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export function isFile(thePath:string):Promise<boolean> {
	return stat(thePath).then((stats:any) => stats.isFile()).catch(() => false);
}

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export function isDirectory(thePath:string):Promise<boolean> {
	return stat(thePath).then((stats:any) => stats.isDirectory()).catch(() => false);;
}

/**
 * determines if `thePath` is a directory and promises to provide `true` or `false`.
 * @param thePath the path to check
 * @return promise to provide `true` or `false`
 */
export function isLink(thePath:string):Promise<boolean> {
	return lstat(thePath).then((stats:any) => stats.isSymbolicLink()).catch(() => false);
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
 * writes a file either as binary or text and promises no return.
 * @param thePath the path to write to
 * @param content the content to write
 * @param isText `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide nothing.
 */
export function writeFile(thePath:string, content:string, isText:boolean=true):Promise<void> {
	return new Promise((resolve, reject) => {
		var encoding = isText? 'utf8' : undefined;
	    fs.writeFile(thePath, content, encoding, (err:any) => err? reject(err) : resolve());
	})
    .catch(error);
};

/**
 * writes content to a file either as a stream and promises no return.
 * @param thePath the path to write to
 * @param content the content to write
 * @return promise to provide nothing.
 */
export function writeStream(thePath:string, content:string):Promise<void> {
	return new Promise((resolve, reject) => {
        let s = fs.createWriteStream(thePath, {flags:'w', mode:0o666});
        s.on('error', (src:any) => reject(src));
        s.write(content, 'binary', () => resolve());
        s.end();
	})
    .catch(error);
}

/**
 * writes a text file and promises no return.
 * @param thePath the path to write
 * @return promise to provide nothing.
 */
export function writeTextFile(thePath:string, content:string):Promise<void> { 
	return writeFile(thePath, content, true)
    .catch(error);
};

/**
 * writes a text file and promises no return.
 * @param thePath the path to write
 * @param obj the object to write
 * @return promise to provide nothing.
 */
export function writeJsonFile(thePath:string, obj:any):Promise<void> {
    return Promise.resolve(obj)
	.then(JSON.stringify)
	.then(data => writeTextFile(thePath, data))
    .catch(error);
}

/**
 * appends to a file either as binary or text and promises no return.
 * @param thePath the path to write to
 * @param content the content to write
 * @param isText `true`|`false` if file should be read as `utf8`|binary 
 * @return promise to provide nothing.
 */
export function appendFile(thePath:string, content:string, isText:boolean=true):Promise<void> {
	return new Promise((resolve, reject) => {
		var encoding = isText? 'utf8' : undefined;
	    fs.appendFile(thePath, content, encoding, (err:any) => err? reject(err) : resolve());
	})
    .catch(error);
}

/**
 * promises to delete a file or folder.
 * @param thePath the path to write
 * @return promise to provide nothing.
 */
export function remove(thePath:string):Promise<void> {
	return new Promise((resolve:()=>void, reject:(err:any)=>void) => {
        fs.unlink(thePath, (e:any) => (e? reject(e) : resolve()));
	})
    .catch(error);
}
