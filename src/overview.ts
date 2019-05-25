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
### Node.js wrappers: 
```
import { node } from 'hsnode';
const files = node.fs.readDir('./');
node.child_process.exec('ls')
    .then((stdout, stderr) => {...})
    .catch(err => {...});
```
### log functions: 
```
import { log as gLog } from 'hsnode';
const log = gLog('vba');
log.info('running');
```
### http functions: 
```
import { http } from 'hsnode';
const log = gLog('vba');
log.info('running');
*/

/** */