hsNode 
========
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsnode)
[![npm version](https://badge.fury.io/js/hsnode.svg)](https://badge.fury.io/js/hsnode)
[![docs](https://img.shields.io/badge/hsDocs-hsNode-blue.svg)](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/0)
[![Build Status](https://github.com/HelpfulScripts/hsNode/workflows/CI/badge.svg)](https://github.com/HelpfulScripts/hsNode/) 
[![codecov](https://codecov.io/gh/HelpfulScripts/hsNode/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsNode)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsNode/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsNode?targetFile=package.json)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hsnode.svg)](https://david-dm.org/helpfulscripts/hsnode)

Helpful Scripts functions that wrap some nodejs calls in Promise wrappers.

### Installation
Install `hsNode` from `npm` the standard way:
> `npm i hsnode`

### [hsNode.log](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/hsNode.log.Log) functions (extends on [hsUtil](https://github.com/HelpfulScripts/hsUtil) logging), adding support for
- log recordings in configurable log files
-  using `transient` logging

### [hsNode.Request REST-API](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/hsNode.Request) with support for
- paced requests - configure limits on requests per second and max number of unresolved requests; see [hsUtil](https://github.com/HelpfulScripts/hsUtil)
- integrated, configuarble, content decoding - e.g. `str2json` or `html2json` or a a self defined decoder
- simple authentication, currently: Basic, Digest, and Token authentication
- cached requests - allowing for targeted reloads for cached responses

### Promise wrappers for nodejs functions:
- `child_processs` execution
- `file system` functions


See [docs](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/0) for details