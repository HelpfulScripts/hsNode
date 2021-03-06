/**
# hsNode

Helpful Scripts functions that wrap some nodejs calls in Promise wrappers.
<a href="./data/src/hsNode/coverage/" target="_blank">[Coverage Info]</a>

[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsnode)
[![npm version](https://badge.fury.io/js/hsnode.svg)](https://badge.fury.io/js/hsnode)
[![docs](https://img.shields.io/badge/hsDocs-hsNode-blue.svg)](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/0)
[![Build Status](https://github.com/HelpfulScripts/hsNode/workflows/CI/badge.svg)](https://github.com/HelpfulScripts/hsNode/) 
[![codecov](https://codecov.io/gh/HelpfulScripts/hsNode/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsNode)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsNode/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsNode?targetFile=package.json)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hsnode.svg)](https://david-dm.org/helpfulscripts/hsnode)

___

## Provides {@link Log Logging} functions (extends on [hsUtil](https://helpfulscripts.github.io/hsUtil/#!/api/hsUtil/0) logging), adding support for
- log files
-  using {@link Log.Log.transient transient} logging

## REST {@link Request requests}, with support for
- pacing requests - max request rate, max number of unresolved requests; see [hsUtil](https://github.com/HelpfulScripts/hsUtil)
- content decoding - e.g. `str2json` of `html2json`
- simple authentication 
- cached requests - allowing for targeted reloads for cached responses

## Promise wrappers for nodejs functions:
- &nbsp; {@link cpUtil child_processs} execution
- &nbsp; {@link fsUtil file system} functions:


## Accessing the library functions:
```
import * as hsNode from 'hsnode';
const log = new hsNode.Log('myModule');
const fs = hsNode.fs;
const exec = hsNode.chid_process.exec;
```
or access submodules individually:
```
import { node } from 'hsnode';
const fs = node.fs

import { Log } from 'hsnode';
const log = new Log('myModule');
log.info('running');

import { Request } from 'hsnode';
const request = new Request();
request.cache = './cacheDir/';
request.get('http://mysite.com/');
```
*/

/** */