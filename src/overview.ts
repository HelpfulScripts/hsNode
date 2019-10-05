/**
# hsNode

Helpful Scripts functions that wrap some nodejs calls in Promise wrappers.
<a href="./data/src/hsNode/coverage/" target="_blank">[Coverage Info]</a>

[![npm version](https://badge.fury.io/js/hsnode.svg)](https://badge.fury.io/js/hsnode)
[![GitHub](https://img.shields.io/badge/GitHub-hsNode-blue.svg)](https://github.com/helpfulscripts/hsnode)
[![docs](https://img.shields.io/badge/hsDocs-hsNode-blue.svg)](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/0)
[![Build Status](https://travis-ci.org/HelpfulScripts/hsNode.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsNode)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hsnode.svg)](https://david-dm.org/helpfulscripts/hsnode)
[![Coverage Status](https://coveralls.io/repos/github/HelpfulScripts/hsNode/badge.svg?branch=master)](https://coveralls.io/github/HelpfulScripts/hsNode?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsNode/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsNode?targetFile=package.json)
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsnode)

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