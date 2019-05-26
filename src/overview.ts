/**
# hsNode

Helpful Scripts functions that wrap some nodejs calls in Promise wrappers.
[`[Github page]`](https://github.com/HelpfulScripts/hsNode)
[`[Coverage Info]`](./data/src/hsNode/coverage/)
___

## Index of nodejs wrappers
- &nbsp; {@link cpUtil child_processs} child process execution
- &nbsp; {@link fsUtil file system} functions:
- &nbsp; {@link httpUtil http} web server functions

## Index of other node support functions
- &nbsp; {@link log log} logging support with per-module prefixes

## Accessing the library functions:
```
import * as hsNode from 'hsnode';
const log = hsNode.log('myModule');
const fs = hsNode.fs;
const exec = hsNode.chid_process.exec;
```
or access submodules individually:
```
import { node } from 'hsnode';
const fs = node.fs

import { log as gLog } from 'hsnode';
const log = gLog('myModule');
log.info('running');

import { http } from 'hsnode';
const cache = new CachedHTTPRequest('./cacheDir/');
const url = new URL('http://mysite.com/');
cache.request(url);
```
*/

/** */