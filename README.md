hsNode 
========
[![npm version](https://badge.fury.io/js/hsnode.svg)](https://badge.fury.io/js/hsnode)
[![GitHub](https://img.shields.io/badge/GitHub-hsNode-blue.svg)](https://github.com/helpfulscripts/hsnode)
[![docs](https://img.shields.io/badge/hsDocs-hsNode-blue.svg)](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/0)
[![Build Status](https://travis-ci.org/HelpfulScripts/hsNode.svg?branch=master)](https://travis-ci.org/HelpfulScripts/hsNode)
[![Dependencies Status](https://david-dm.org/helpfulscripts/hsnode.svg)](https://david-dm.org/helpfulscripts/hsnode)
[![codecov](https://codecov.io/gh/HelpfulScripts/hsNode/branch/master/graph/badge.svg)](https://codecov.io/gh/HelpfulScripts/hsNode)
[![Known Vulnerabilities](https://snyk.io/test/github/HelpfulScripts/hsNode/badge.svg?targetFile=package.json)](https://snyk.io/test/github/HelpfulScripts/hsNode?targetFile=package.json)
[![NPM License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://www.npmjs.com/package/hsnode)

Helpful Scripts functions that wrap some nodejs calls in Promise wrappers.

## Installation
Install `hsNode` from `npm` the standard way:
> `npm i hsnode`

## [Logging](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/hsNode.log.Log) functions (extends on [hsUtil](https://github.com/HelpfulScripts/hsUtil) logging), adding support for
- log files
-  using `transient` logging

## [Request REST-API](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/hsNode.Request) with support for
- pacing requests - max request rate, max number of unresolved requests; see [hsUtil](https://github.com/HelpfulScripts/hsUtil)
- content decoding - e.g. `str2json` of `html2json`
- simple authentication 
- cached requests - allowing for targeted reloads for cached responses

## Promise wrappers for nodejs functions:
- `child_processs` execution
- `file system` functions


See [docs](https://helpfulscripts.github.io/hsNode/#!/api/hsNode/0) for details