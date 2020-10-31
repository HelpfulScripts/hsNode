this["hsNode"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Array.js":
/*!****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Array.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function uniquefy(array, key) {
    const unique = {};
    return key ? array.filter(t => unique[t['' + key]] ? false : (unique[t['' + key]] = true))
        : array.filter(t => unique['' + t] ? false : (unique['' + t] = true));
}
exports.uniquefy = uniquefy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnQ0EsU0FBZ0IsUUFBUSxDQUFJLEtBQVMsRUFBRSxHQUFrQjtJQUNyRCxNQUFNLE1BQU0sR0FBNEIsRUFBRSxDQUFDO0lBQzNDLE9BQU8sR0FBRyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFKRCw0QkFJQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Auth.js":
/*!***************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Auth.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
exports.Auth = Auth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBc0IsSUFBSTtJQUl0QixZQUFZLFFBQWUsRUFBRSxRQUFlO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FHSjtBQVZELG9CQVVDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/AuthBasic.js":
/*!********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/AuthBasic.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js");
const log = new log_1.Log('RequestBasic');
const Auth_1 = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Auth.js");
class AuthBasic extends Auth_1.Auth {
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
exports.AuthBasic = AuthBasic;
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
function _atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUF5QztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLGlDQUEwQztBQUcxQyxNQUFhLFNBQVUsU0FBUSxXQUFJO0lBQy9CLFFBQVEsQ0FBQyxPQUFlLEVBQUUsSUFBVyxFQUFFLFFBQXdCO1FBQzNELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRSxFQUFFLENBQUEseUNBQXlDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQU5ELDhCQU1DO0FBRUQsU0FBUyxLQUFLLENBQUMsR0FBaUI7SUFDNUIsTUFBTSxNQUFNLEdBQUcsR0FBRyxZQUFZLE1BQU0sQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEdBQVU7SUFDckIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekQsQ0FBQyJ9
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/node_modules/buffer/index.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/AuthDigest.js":
/*!*********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/AuthDigest.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js");
const log = new log_1.Log('RequestDigest');
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const Auth_1 = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Auth.js");
class AuthDigest extends Auth_1.Auth {
    constructor() {
        super(...arguments);
        this.nc = 0;
    }
    updateNC() {
        let max = 99999999;
        let padding = new Array(8).join('0') + '';
        this.nc = (this.nc > max ? 1 : this.nc + 1);
        let nc = this.nc + '';
        return padding.substr(0, 8 - nc.length) + nc;
    }
    generateCNONCE(qop) {
        let cnonce;
        let nc;
        if (typeof qop === 'string') {
            let cnonceHash = crypto_1.createHash('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = crypto_1.createHash('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = crypto_1.createHash('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = crypto_1.createHash('md5');
        _str = `${ha1.digest('hex')}:${challenge.nonce}:${nc}:${cnonce}:${challenge.qop}:${ha2.digest('hex')}`;
        hash.update(_str);
        let authParams = {
            realm: challenge.realm,
            username: this.username,
            uri: options.path,
            qop: challenge.qop,
            nonce: challenge.nonce,
            algorithm: "MD5",
            response: hash.digest('hex')
        };
        authParams = omitNull(authParams);
        if (cnonce) {
            authParams.nc = nc;
            authParams.cnonce = cnonce;
        }
        options.headers.Authorization = compileParams(authParams);
        return options;
    }
}
exports.AuthDigest = AuthDigest;
function omitNull(data) {
    let newObject = {};
    Object.keys(data).forEach((k) => {
        if (data[k] !== null && data[k] !== undefined) {
            newObject[k] = data[k];
        }
    });
    return newObject;
}
function compileParams(params) {
    let parts = [];
    for (let i in params) {
        if (typeof params[i] !== 'function') {
            let param = i + '=' + (putDoubleQuotes(i) ? `"${params[i]}"` : params[i]);
            parts.push(param);
        }
    }
    return 'Digest ' + parts.join(',');
}
function putDoubleQuotes(entry) {
    return ['qop', 'nc'].indexOf(entry) < 0;
}
function parseDigestResponse(digestHeader) {
    digestHeader = digestHeader.split('Digest ')[1];
    const params = {};
    digestHeader.replace(/(([^"]|"[^"]*")*?)(,)/g, (...rest) => {
        const part = rest[1];
        const kv = part.split('=').map((v) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
        return '';
    });
    return params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQXlDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakYsbUNBQTBDO0FBRzFDLGlDQUEwQztBQU0xQyxNQUFhLFVBQVcsU0FBUSxXQUFJO0lBQXBDOztRQUNJLE9BQUUsR0FBRyxDQUFDLENBQUM7SUF5RVgsQ0FBQztJQXBFRyxRQUFRO1FBQ0osSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDdEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBTUQsY0FBYyxDQUFDLEdBQVU7UUFDckIsSUFBSSxNQUFVLENBQUM7UUFDZixJQUFJLEVBQVMsQ0FBQztRQUVkLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3pCLElBQUksVUFBVSxHQUFHLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQ3BDLENBQUM7SUFRRCxRQUFRLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxRQUF3QjtRQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLHlDQUF5QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV2RSxJQUFJLFNBQVMsR0FBTyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLEdBQUcsR0FBRyxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksR0FBRyxHQUFHLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQixJQUFJLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxHQUFHLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxNQUFNLElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDdkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdsQixJQUFJLFVBQVUsR0FBTztZQUNqQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNqQixHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7WUFDbEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMvQixDQUFDO1FBRUYsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQyxJQUFJLE1BQU0sRUFBRTtZQUNSLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzlCO1FBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQTFFRCxnQ0EwRUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxJQUFRO0lBQ3RCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFO1FBQ25DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUFFO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQztBQU1ELFNBQVMsYUFBYSxDQUFDLE1BQVU7SUFDN0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7UUFDbEIsSUFBSSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtLQUNKO0lBQ0QsT0FBTyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBTUQsU0FBUyxlQUFlLENBQUMsS0FBWTtJQUNqQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsWUFBbUI7SUFDNUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFlBQVksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxHQUFHLElBQWEsRUFBRSxFQUFFO1FBQ2hFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function shortCheckSum(s) {
    let chk = 0x12345678;
    for (let i = 0; i < s.length; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
exports.shortCheckSum = shortCheckSum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQyxTQUFnQixhQUFhLENBQUMsQ0FBUTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDckIsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQU5ELHNDQU1DIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js":
/*!***************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monthStr = [
    ['Jan', 'January'], ['Feb', 'February'], ['Mar', 'March'], ['Apr', 'April'], ['May', 'May'], ['Jun', 'June'],
    ['Jul', 'July'], ['Aug', 'August'], ['Sep', 'September'], ['Oct', 'October'], ['Nov', 'November'], ['Dec', 'December']
];
const dayStr = [
    ['Sun', 'Sunday'], ['Mon', 'Monday'], ['Tue', 'Tuesday'], ['Wed', 'Wednesday'], ['Thu', 'Thursday'], ['Fri', 'Friday'], ['Sat', 'Saturday']
];
function formatNumber(number, digits) {
    let r = '' + number;
    while (r.length < digits) {
        r = "0" + r;
    }
    return r;
}
function date(formatString, date = new Date()) {
    return (typeof formatString !== 'string' || isNaN(date.getTime())) ?
        'invalid' :
        formatString
            .replace(/%YYYY/g, '' + date.getFullYear())
            .replace(/%YY/g, '' + (date.getFullYear() % 100))
            .replace(/%MMMM/g, monthStr[date.getMonth()][1])
            .replace(/%MMM/g, monthStr[date.getMonth()][0])
            .replace(/%MM/g, formatNumber(date.getMonth() + 1, 2))
            .replace(/%M/g, '' + (date.getMonth() + 1))
            .replace(/%DDDD/g, dayStr[date.getDay()][1])
            .replace(/%DDD/g, dayStr[date.getDay()][0])
            .replace(/%DD/g, formatNumber(date.getDate(), 2))
            .replace(/%D/g, '' + date.getDate())
            .replace(/%hh/g, formatNumber(date.getHours(), 2))
            .replace(/%h/g, '' + date.getHours())
            .replace(/%mm/g, formatNumber(date.getMinutes(), 2))
            .replace(/%m/g, '' + date.getMinutes())
            .replace(/%ss/g, formatNumber(date.getSeconds(), 2))
            .replace(/%jjj/g, formatNumber(date.getMilliseconds(), 3))
            .replace(/%jj/g, formatNumber(date.getMilliseconds() / 10, 2))
            .replace(/%j/g, formatNumber(date.getMilliseconds() / 100, 1));
}
exports.date = date;
exports.ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBZUEsTUFBTSxRQUFRLEdBQUc7SUFDYixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDNUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO0NBQUMsQ0FBQztBQUc1SCxNQUFNLE1BQU0sR0FBRztJQUNYLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHM0ksU0FBUyxZQUFZLENBQUMsTUFBYSxFQUFFLE1BQWE7SUFDOUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLE1BQU0sQ0FBQztJQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1FBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FBRTtJQUMxQyxPQUFP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QUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxDQUFDO0lBQy9DLFNBQVMsRUFBTyxDQUFDLENBQVEsRUFBSSxFQUFFLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDO0lBQ2pELFNBQVMsRUFBTyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQztJQUM1QyxPQUFPLEVBQVMsQ0FBQyxFQUFTLEVBQUcsRUFBRSxDQUFDLEVBQUUsR0FBQyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQy9DLE1BQU0sRUFBVSxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQ2xELE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztDQUN2RCxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Pacing.js":
/*!*****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Pacing.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js");
const log = new log_1.Log('Pacing');
function timeout(ms, ...rest) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); });
}
exports.timeout = timeout;
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
exports.delay = delay;
class Pace {
    constructor({ pace = 100, maxConcurrent = -1, collectionPeriod = 0 }) {
        this.maxConcurrent = -1;
        this.pace = 0;
        this.waitUntil = 0;
        this.waiting = 0;
        this.started = 0;
        this.queue = {};
        this.collectionPeriod = 0;
        this.pace = pace;
        this.maxConcurrent = maxConcurrent;
        this.collectionPeriod = collectionPeriod;
    }
    isAllowed() { return this.maxConcurrent < 0 || this.started < this.maxConcurrent; }
    setPace(ms) { this.pace = ms; }
    setMaxConcurrent(maxConcurrent) { this.maxConcurrent = maxConcurrent; }
    inQueue() { return this.waiting; }
    inProgress() { return this.started; }
    add(fn, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date().getTime();
            const callTime = now + Math.max(this.collectionPeriod, this.waitUntil);
            this.waitUntil += this.pace;
            let item;
            if (key && this.queue[key]) {
                item = this.queue[key];
                clearTimeout(item.timer);
                item.fn = fn;
                item.added = now;
            }
            else {
                key = key || `${now}-${Math.floor(Math.random() * 100000)}`;
                item = { fn: fn, added: now, pace: this, key: key };
                this.queue[key] = item;
                this.waiting++;
            }
            return this.resolveItem(item, callTime - now);
        });
    }
    resolveItem(item, waitTime) {
        return new Promise((resolve, reject) => {
            const execute = (_item) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const key = _item.key;
                    delete _item.pace.queue[key];
                    _item.pace.waiting--;
                    yield belowConcurrentLimit(_item.pace);
                    _item.pace.started++;
                    const actualDelay = Date.now() - _item.added;
                    const ret = yield _item.fn(actualDelay);
                    _item.pace.started--;
                    resolve(ret);
                }
                catch (e) {
                    _item.pace.started--;
                    reject(e);
                }
            });
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}
exports.Pace = Pace;
function belowConcurrentLimit(pace) {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed() ? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BhY2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLCtCQUE2QjtBQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBUzVELFNBQWdCLE9BQU8sQ0FBQyxFQUFTLEVBQUUsR0FBRyxJQUFVO0lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUZELDBCQUVDO0FBZ0NELFNBQWdCLEtBQUssQ0FBQyxFQUFTO0lBQzNCLE9BQU8sQ0FBSSxJQUFPLEVBQWEsRUFBRTtRQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBc0IsRUFBRSxFQUFFO1lBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBTkQsc0JBTUM7QUFtQkQsTUFBYSxJQUFJO0lBaUNiLFlBQVksRUFBQyxJQUFJLEdBQUMsR0FBRyxFQUFFLGFBQWEsR0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsR0FBQyxDQUFDLEVBQUM7UUEvQnBELGtCQUFhLEdBQUssQ0FBQyxDQUFDLENBQUM7UUFFckIsU0FBSSxHQUFjLENBQUMsQ0FBQztRQUVwQixjQUFTLEdBQVMsQ0FBQyxDQUFDO1FBRXBCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFFcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixVQUFLLEdBQXdCLEVBQUUsQ0FBQztRQWNqQyxxQkFBZ0IsR0FBRyxD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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Request.js":
/*!******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Request.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js");
const log = new log_1.Log('Request');
const Pacing_1 = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Pacing.js");
const AuthDigest_1 = __webpack_require__(/*! ./AuthDigest */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/AuthDigest.js");
const AuthBasic_1 = __webpack_require__(/*! ./AuthBasic */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/AuthBasic.js");
log.messageLength = 120;
class Request {
    constructor() {
        this.log = log;
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: undefined }) => {
            this.pace = pace === undefined ? undefined : new Pacing_1.Pace({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.decode = undefined;
        this.cacheName = (options) => this.cache === undefined ? undefined :
            `${this.cache}/${options.path.replace(/q=(.*?)\//g, 'q=$1-').replace(/\?/g, '')}`;
    }
    get(url, { useCached = true, headers = {} } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getOptions(url, 'GET');
            return this.decodedRequest(options, useCached, headers);
        });
    }
    put(url, postData, { useCached = false, headers = {} } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getOptions(url, 'PUT');
            return this.decodedRequest(options, useCached, headers, postData);
        });
    }
    post(url, postData, { useCached = false, headers = {} } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.getOptions(url, 'POST');
            return this.decodedRequest(options, useCached, headers, postData);
        });
    }
    getURL(url) {
        return (typeof url === 'string') ? new URL(url, document.URL) : url;
    }
    getOptions(url, method) {
        url = this.getURL(url);
        const prefix = '';
        const options = {
            rejectUnauthorized: false,
            method: method,
            protocol: url.protocol,
            host: url.host,
            hostname: url.hostname,
            port: url.port,
            pathname: prefix + url.pathname,
            path: prefix + url.pathname + (url.search || ''),
            headers: {},
            url: `${url.protocol}//${url.host}${url.port ? ':' + url.port : ''}${prefix + url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    decodedRequest(options, useCached, headers, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.requestOptions(options, useCached, postData);
            if (this.decode && result.response.txt && options.method === 'GET') {
                result.data = this.decode(result.data, options);
            }
            return result;
        });
    }
    readCached(fname) {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    writeCached(fname, response) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    requestOptions(options, useCached, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            const fname = this.cache ? this.cacheName(options) : undefined;
            if (fname && useCached && options.method === 'GET') {
                const result = yield this.readCached(fname);
                if (result !== undefined) {
                    return result;
                }
            }
            let request;
            if (this.pace) {
                this.log.info(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`);
                request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
            }
            else {
                request = this.request(options, postData);
            }
            this.log.debug(() => `${options.method}-ing ${options.url}`);
            const response = yield request;
            if (this.pace) {
                this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `);
            }
            this.log.debug(() => `received ${options.method} ${response.response.statusMessage} ${options.method} ${options.url}`);
            const code = response.response.statusCode || response.response.status;
            if (code >= 200 && code < 300) {
                if (fname && options.method === 'GET') {
                    yield this.writeCached(fname, response);
                }
            }
            return response;
        });
    }
    request(options, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.issueRequest(options, postData);
                let authenticate = response.response.headers['www-authenticate'];
                if (!authenticate) {
                    return response;
                }
                else if (this.credentials) {
                    authenticate = authenticate.trim();
                    let auth;
                    if (authenticate.indexOf('Digest') === 0) {
                        auth = new AuthDigest_1.AuthDigest(this.credentials.user, this.credentials.password);
                    }
                    else if (authenticate.indexOf('Basic') === 0) {
                        auth = new AuthBasic_1.AuthBasic(this.credentials.user, this.credentials.password);
                    }
                    else {
                        throw `unimplemented authentication request ${authenticate} for '${options.url}'`;
                    }
                    auth.testAuth(options, response.data, response.response);
                    return this.request(options);
                }
                else {
                    throw `authentication missing; call 'setCredentials' before calling 'get'`;
                }
            }
            catch (e) {
                throw `error requesting ${options.url}: ${e}`;
            }
        });
    }
    issueRequest(options, postData) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = this;
            return new Promise((resolve, reject) => {
                try {
                    function confirmRequest(e) {
                        if (e) {
                            log.info('');
                        }
                        const headersText = xhr.getAllResponseHeaders();
                        const headers = { 'content-type': '' };
                        headersText.split('\r\n').map(h => {
                            const kv = h.split(':').map(p => p.trim());
                            if (kv[0].length) {
                                headers[kv[0]] = kv[1];
                            }
                        });
                        const contentType = this.responseType;
                        const txt = request.isTextualContent(contentType);
                        const data = this.response;
                        const response = {
                            data: data,
                            response: {
                                txt: txt,
                                headers: headers,
                                method: options.method,
                                status: this.status,
                                statusCode: this.status,
                                statusMessage: `${this.status} ${this.statusText}`,
                                url: this.responseURL,
                            }
                        };
                        resolve(response);
                    }
                    const xhr = new XMLHttpRequest();
                    const txt = request.isTextualRequest(options.pathname);
                    this.log.debug(() => `requesting ${options.method} ${this.log.inspect(options, { depth: 4 })}`);
                    xhr.open(options.method, options.url, true);
                    Object.keys(options.headers).forEach(h => xhr.setRequestHeader(h, options.headers[h]));
                    xhr.responseType = txt ? 'text' : 'arraybuffer';
                    xhr.onload = confirmRequest;
                    xhr.send(postData ? JSON.stringify(postData) : undefined);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    isTextualContent(contentType) {
        let txt = false;
        if (contentType === undefined) {
            contentType = 'text/html';
        }
        else {
            contentType = contentType.split(';')[0];
        }
        const subTypes = contentType.split('/');
        switch (subTypes[0]) {
            case '':
            case 'text':
                txt = true;
                break;
            case 'image':
            case 'audio':
            case 'font': break;
            case 'application':
                switch (subTypes[1]) {
                    case 'json':
                        txt = true;
                        break;
                    case 'pdf': break;
                    case 'vnd.openxmlformats-officedocument.presentationml.presentation': break;
                    case 'vnd.openxmlformats-officedocument.spreadsheetml.sheet': break;
                    case 'vnd.ms-powerpoint': break;
                    case 'vnd.ms-excel': break;
                    case 'octet-stream': break;
                    case 'vnd.ms-excel.sheet.macroenabled.12': break;
                    default: this.log.info(`caching ${contentType} as binary`);
                }
                break;
            default: this.log.warn(`caching '${contentType}' as binary`);
        }
        return txt;
    }
    isTextualRequest(pathName) {
        return ['json', 'txt', 'html'].some(ext => pathName.indexOf(ext) >= 0);
    }
}
exports.Request = Request;
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: undefined
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBd0NBLCtCQUFxQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZFLHFDQUF3QztBQUN4Qyw2Q0FBNEM7QUFDNUMsMkNBQTJDO0FBRzNDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBMkR4QixNQUFhLE9BQU87SUFBcEI7UUFPYyxRQUFHLEdBQVEsR0FBRyxDQUFDO1FBdUJsQixtQkFBYyxHQUFHLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksS0FBRyxTQUFTLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN4RixDQUFDLENBQUE7UUFHTSxpQkFBWSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFRbkIsWUFBTyxHQUFHLENBQUMsRUFBQyxJQUFJLEdBQUMsRUFBRSxFQUFFLEdBQUcsR0FBQyxFQUFFLEVBQUUsZ0JBQWdCLEdBQUMsR0FBRyxLQUFFLEVBQUMsSUFBSSxFQUFNLFNBQVMsRUFBQyxFQUFFLEVBQUU7WUFDL0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztRQUMxSCxDQUFDLENBQUE7UUFRTSxXQUFNLEdBQVksU0FBUyxDQUFDO1FB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js":
/*!****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Pacing.js"));
__export(__webpack_require__(/*! ./Request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Request.js"));
__export(__webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js"));
__export(__webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js"));
__export(__webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js"));
__export(__webpack_require__(/*! ./Array */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Array.js"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4QkFBNEI7QUFDNUIsK0JBQTZCO0FBQzdCLGdDQUE4QjtBQUM5Qiw0QkFBMEI7QUFDMUIsMkJBQXlCO0FBQ3pCLDZCQUEyQiJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js":
/*!**************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Date_1 = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js");
const COLOR = {
    clear: 'color:#000; background-color:inherit; font-weight:normal;',
    bold: 'font-weight:bold;',
    dim: '',
    underscore: '',
    blink: '',
    reverse: '',
    hidden: '',
    black: 'color:#000;',
    red: 'color:#f00;',
    green: 'color:#0f0;',
    yellow: 'color:#ff0;',
    blue: 'color:#00f;',
    magenta: 'color:#f0f;',
    cyan: 'color:#0ff;',
    white: 'color:#fff;',
    darkred: 'color:#800;',
    darkgreen: 'color:#080;',
    darkyellow: 'color:#880;',
    darkblue: 'color:#008;',
    darkmagenta: 'color:#808;',
    darkcyan: 'color:#088;',
    gray: 'color:#888;',
    bgBlack: 'background-color:#000;',
    bgRed: 'background-color:#f00;',
    bgGreen: 'background-color:#0f0;',
    bgYellow: 'background-color:#ff0;',
    bgBlue: 'background-color:#00f;',
    bgMagenta: 'background-color:#f0f;',
    bgCyan: 'background-color:#0ff;',
    bgWhite: 'background-color:#fff;'
};
class Log {
    constructor(prefix) {
        this.reportLevel = undefined;
        this.reportPrefix = '';
        this.maxLength = -1;
        this.colors = true;
        this.reportPrefix = prefix;
    }
    set messageLength(max) { this.maxLength = max; }
    get messageLength() { return this.maxLength; }
    level(newLevelSym, setGlobalLevel) {
        let newLevel = Log.levels[newLevelSym] || Log.globalLevel;
        let oldLevel = this.reportLevel || Log.globalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            this.reportLevel = undefined;
        }
        else if (Log.levels[newLevelSym]) {
            if (setGlobalLevel) {
                Log.globalLevel = newLevel;
            }
            else {
                this.reportLevel = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : this.reportPrefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            (newLevel.sym === oldLevel.sym) ? this.debug(msg) : this.info(msg);
        }
        else {
            this.error(`unkown level ${newLevelSym}; log level remains ${oldLevel.sym}`);
        }
        return newLevel.sym;
    }
    debug(msg) { return this.out(Log.DEBUG, msg, { color: ['gray'] }); }
    transient(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'], lf: '\r' }); }
    progress(msg) { return this.out(Log.INFO, msg, { color: ['darkblue'] }); }
    info(msg) { return this.out(Log.INFO, msg, { color: ['darkgreen'] }); }
    warn(msg) { return this.out(Log.WARN, msg, { color: ['darkyellow', 'bold'] }); }
    error(msg) {
        const color = ['darkred', 'bold'];
        if (msg.message) {
            this.out(Log.ERROR, msg.message, { color: color });
            this.out(Log.ERROR, msg.stack, { color: color });
            return msg.message;
        }
        else {
            return this.out(Log.ERROR, msg, { color: color });
        }
    }
    out(lvl, msg, options) {
        let desc = Log.levels[lvl];
        const filterLevel = this.reportLevel || Log.globalLevel;
        if (desc.importance >= filterLevel.importance) {
            let line;
            switch (typeof msg) {
                case 'function':
                    line = msg();
                    break;
                case 'string':
                    line = msg;
                    break;
                case 'object':
                default: line = this.inspect(msg);
            }
            const dateStr = Date_1.date(Log.dateFormat);
            if (line.length > this.maxLength && this.maxLength > 0) {
                line = `${line.slice(0, this.maxLength / 2 - 2)}...${line.slice(-this.maxLength / 2 + 2)}`;
            }
            if (msg.stack) {
                line = `${line}\n${msg.stack}`;
            }
            const header = `${dateStr} ${this.reportPrefix} ${desc.desc}`;
            this.output(options.color, header, line);
            return line + (options.lf || '');
        }
        return undefined;
    }
    output(color, header, line) {
        console.log(`%c${header}%c ${line}`, color.map(c => COLOR[c]).join(' '), COLOR['clear']);
    }
    format(fmtStr) {
        if (fmtStr === null) {
            Log.dateFormat = Log.defDateFormat;
        }
        else if (fmtStr) {
            Log.dateFormat = fmtStr;
        }
        return Log.dateFormat;
    }
    prefix(prf) {
        if (prf) {
            this.reportPrefix = prf;
        }
        return this.reportPrefix;
    }
    config(cfg) {
        if (cfg.format !== undefined) {
            this.format(cfg.format);
        }
        if (cfg.level !== undefined) {
            this.level(cfg.level);
        }
        if (cfg.colors !== undefined) {
            this.colors = cfg.colors;
        }
    }
    inspect(msg, { depth = -1, indent = '   ', colors = Log.INDENT_COLORS } = { depth: 0, indent: '   ', colors: Log.INDENT_COLORS }) {
        function _inspect(msg, depth, level, currIndent) {
            if (msg === null) {
                return 'null';
            }
            if (msg === undefined) {
                return 'undefined';
            }
            if (typeof msg === 'function') {
                return 'function';
            }
            if (typeof msg === 'string') {
                return `'${msg}'`;
            }
            if (typeof msg === 'object') {
                if (depth < 0) {
                    return (msg.length === undefined) ? '{...}' : '[...]';
                }
                if (msg.map !== undefined) {
                    return `[${msg.map((e) => (e === undefined) ? '' : _inspect(e, depth - 1, level + 1, currIndent)).join(', ')}]`;
                }
                const [prefix, postfix, lf, postIndent] = log.getPrePostfix(indent, level, currIndent, colors);
                return `{${lf}` + Object.keys(msg).map(k => `${prefix}${k}${postfix}: ${_inspect(msg[k], depth - 1, level + 1, currIndent + indent)}`).join(`,${lf}`) + `${lf}${postIndent}}`;
            }
            return msg.toString();
        }
        const log = this;
        return _inspect(msg, (depth !== undefined && depth !== null && depth >= 0) ? depth : 999, 0, '');
    }
    getPrePostfix(indent, level, currIndent, colors) {
        let cstart = '', cstop = '', lf = '\n';
        if (colors) {
            indent = indent.replace(/ /g, '&nbsp;');
            currIndent = currIndent.replace(/ /g, '&nbsp;');
            const color = COLOR[colors[level % colors.length]] || colors[level % colors.length];
            cstart = `<b><span style='${color}'>`;
            cstop = `</span></b>`;
            lf = '<br>';
        }
        return [`${currIndent}${indent}${cstart}`, `${cstop}`, colors ? '<br>' : '\n', currIndent];
    }
}
exports.Log = Log;
Log.INDENT_COLORS = ['darkblue', 'darkgreen', 'darkred', 'darkcyan', 'darkyellow', 'darkmagenta'];
Log.defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
Log.dateFormat = Log.defDateFormat;
Log.DEBUG = 'DEBUG';
Log.INFO = 'INFO';
Log.WARN = 'WARN';
Log.ERROR = 'ERROR';
Log.levels = {
    [Log.DEBUG]: { importance: 0, sym: Log.DEBUG, desc: 'DEBUG' },
    [Log.INFO]: { importance: 1, sym: Log.INFO, desc: 'INFO' },
    [Log.WARN]: { importance: 2, sym: Log.WARN, desc: 'WARN' },
    [Log.ERROR]: { importance: 3, sym: Log.ERROR, desc: 'ERROR' }
};
Log.log = new Log('');
Log.globalLevel = Log.levels[Log.INFO];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQW9GQSxpQ0FBOEI7QUFJOUIsTUFBTSxLQUFLLEdBQUc7SUFDVixLQUFLLEVBQU8sMkRBQTJEO0lBRXZFLElBQUksRUFBUSxtQkFBbUI7SUFDL0IsR0FBRyxFQUFTLEVBQUU7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLEtBQUssRUFBTyxFQUFFO0lBQ2QsT0FBTyxFQUFLLEVBQUU7SUFDZCxNQUFNLEVBQU0sRUFBRTtJQUVkLEtBQUssRUFBTyxhQUFhO0lBQ3pCLEdBQUcsRUFBUyxhQUFhO0lBQ3pCLEtBQUssRUFBTyxhQUFhO0lBQ3pCLE1BQU0sRUFBTSxhQUFhO0lBQ3pCLElBQUksRUFBUSxhQUFhO0lBQ3pCLE9BQU8sRUFBSyxhQUFhO0lBQ3pCLElBQUksRUFBUSxhQUFhO0lBQ3pCLEtBQUssRUFBTyxhQUFhO0lBRXpCLE9BQU8sRUFBSyxhQUFhO0lBQ3pCLFNBQVMsRUFBRyxhQUFhO0lBQ3pCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFFBQVEsRUFBSSxhQUFhO0lBQ3pCLFdBQVcsRUFBQyxhQUFhO0lBQ3pCLFFBQVEsRUFBSSxhQUFhO0lBQ3pCLElBQUksRUFBUSxhQUFhO0lBRXpCLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsS0FBSyxFQUFPLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0lBQ3BDLFFBQVEsRUFBSSx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxTQUFTLEVBQUcsd0JBQXdCO0lBQ3BDLE1BQU0sRUFBTSx3QkFBd0I7SUFDcEMsT0FBTyxFQUFLLHdCQUF3QjtDQUN2QyxDQUFDO0FBZUYsTUFBYSxHQUFHO0lBcUNaLFlBQVksTUFBYTtRQUxmLGdCQUFXLEdBQWdCLFNBQVMsQ0FBQztRQUNyQyxpQkFBWSxHQUFJLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQU8sQ0FBQyxDQUFDLENB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/index.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/html2json/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/html2json */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/src/html2json.js");


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * HTML5 Parser By Sam Blowes
 *
 * Designed for HTML5 documents
 *
 * Original code by John Resig (ejohn.org)
 * http://ejohn.org/blog/pure-javascript-html-parser/
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * ----------------------------------------------------------------------------
 * License
 * ----------------------------------------------------------------------------
 *
 * This code is triple licensed using Apache Software License 2.0,
 * Mozilla Public License or GNU Public License
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 * 
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 * 
 * The Original Code is Simple HTML Parser.
 * 
 * The Initial Developer of the Original Code is Erik Arvidsson.
 * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
 * Reserved.
 * 
 * ////////////////////////////////////////////////////////////////////////////
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * ----------------------------------------------------------------------------
 * Usage
 * ----------------------------------------------------------------------------
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

(function () {

	// Regular Expressions for parsing tags and attributes
	var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
		attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

	// Empty Elements - HTML 5
	var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

	// Block Elements - HTML 5
	var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

	// Inline Elements - HTML 5
	var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

	// Special Elements (can contain anything)
	var special = makeMap("script,style");

	var HTMLParser = this.HTMLParser = function (html, handler) {
		var index, chars, match, stack = [], last = html;
		stack.last = function () {
			return this[this.length - 1];
		};

		while (html) {
			chars = true;

			// Make sure we're not in a script or style element
			if (!stack.last() || !special[stack.last()]) {

				// Comment
				if (html.indexOf("<!--") == 0) {
					index = html.indexOf("-->");

					if (index >= 0) {
						if (handler.comment)
							handler.comment(html.substring(4, index));
						html = html.substring(index + 3);
						chars = false;
					}

					// end tag
				} else if (html.indexOf("</") == 0) {
					match = html.match(endTag);

					if (match) {
						html = html.substring(match[0].length);
						match[0].replace(endTag, parseEndTag);
						chars = false;
					}

					// start tag
				} else if (html.indexOf("<") == 0) {
					match = html.match(startTag);

					if (match) {
						html = html.substring(match[0].length);
						match[0].replace(startTag, parseStartTag);
						chars = false;
					}
				}

				if (chars) {
					index = html.indexOf("<");

					var text = index < 0 ? html : html.substring(0, index);
					html = index < 0 ? "" : html.substring(index);

					if (handler.chars)
						handler.chars(text);
				}

			} else {
				html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
					text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
					if (handler.chars)
						handler.chars(text);

					return "";
				});

				parseEndTag("", stack.last());
			}

			if (html == last)
				throw "Parse Error: " + html;
			last = html;
		}

		// Clean up any remaining tags
		parseEndTag();

		function parseStartTag(tag, tagName, rest, unary) {
			tagName = tagName.toLowerCase();

			if (block[tagName]) {
				while (stack.last() && inline[stack.last()]) {
					parseEndTag("", stack.last());
				}
			}

			if (closeSelf[tagName] && stack.last() == tagName) {
				parseEndTag("", tagName);
			}

			unary = empty[tagName] || !!unary;

			if (!unary)
				stack.push(tagName);

			if (handler.start) {
				var attrs = [];

				rest.replace(attr, function (match, name) {
					var value = arguments[2] ? arguments[2] :
						arguments[3] ? arguments[3] :
						arguments[4] ? arguments[4] :
						fillAttrs[name] ? name : "";

					attrs.push({
						name: name,
						value: value,
						escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
					});
				});

				if (handler.start)
					handler.start(tagName, attrs, unary);
			}
		}

		function parseEndTag(tag, tagName) {
			// If no tag name is provided, clean shop
			if (!tagName)
				var pos = 0;

				// Find the closest opened tag of the same type
			else
				for (var pos = stack.length - 1; pos >= 0; pos--)
					if (stack[pos] == tagName)
						break;

			if (pos >= 0) {
				// Close all the open elements, up the stack
				for (var i = stack.length - 1; i >= pos; i--)
					if (handler.end)
						handler.end(stack[i]);

				// Remove the open elements from the stack
				stack.length = pos;
			}
		}
	};

	this.HTMLtoXML = function (html) {
		var results = "";

		HTMLParser(html, {
			start: function (tag, attrs, unary) {
				results += "<" + tag;

				for (var i = 0; i < attrs.length; i++)
					results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
				results += ">";
			},
			end: function (tag) {
				results += "</" + tag + ">";
			},
			chars: function (text) {
				results += text;
			},
			comment: function (text) {
				results += "<!--" + text + "-->";
			}
		});

		return results;
	};

	this.HTMLtoDOM = function (html, doc) {
		// There can be only one of these elements
		var one = makeMap("html,head,body,title");

		// Enforce a structure for the document
		var structure = {
			link: "head",
			base: "head"
		};

		if (!doc) {
			if (typeof DOMDocument != "undefined")
				doc = new DOMDocument();
			else if (typeof document != "undefined" && document.implementation && document.implementation.createDocument)
				doc = document.implementation.createDocument("", "", null);
			else if (typeof ActiveX != "undefined")
				doc = new ActiveXObject("Msxml.DOMDocument");

		} else
			doc = doc.ownerDocument ||
				doc.getOwnerDocument && doc.getOwnerDocument() ||
				doc;

		var elems = [],
			documentElement = doc.documentElement ||
				doc.getDocumentElement && doc.getDocumentElement();

		// If we're dealing with an empty document then we
		// need to pre-populate it with the HTML document structure
		if (!documentElement && doc.createElement) (function () {
			var html = doc.createElement("html");
			var head = doc.createElement("head");
			head.appendChild(doc.createElement("title"));
			html.appendChild(head);
			html.appendChild(doc.createElement("body"));
			doc.appendChild(html);
		})();

		// Find all the unique elements
		if (doc.getElementsByTagName)
			for (var i in one)
				one[i] = doc.getElementsByTagName(i)[0];

		// If we're working with a document, inject contents into
		// the body element
		var curParentNode = one.body;

		HTMLParser(html, {
			start: function (tagName, attrs, unary) {
				// If it's a pre-built element, then we can ignore
				// its construction
				if (one[tagName]) {
					curParentNode = one[tagName];
					if (!unary) {
						elems.push(curParentNode);
					}
					return;
				}

				var elem = doc.createElement(tagName);

				for (var attr in attrs)
					elem.setAttribute(attrs[attr].name, attrs[attr].value);

				if (structure[tagName] && typeof one[structure[tagName]] != "boolean")
					one[structure[tagName]].appendChild(elem);

				else if (curParentNode && curParentNode.appendChild)
					curParentNode.appendChild(elem);

				if (!unary) {
					elems.push(elem);
					curParentNode = elem;
				}
			},
			end: function (tag) {
				elems.length -= 1;

				// Init the new parentNode
				curParentNode = elems[elems.length - 1];
			},
			chars: function (text) {
				curParentNode.appendChild(doc.createTextNode(text));
			},
			comment: function (text) {
				// create comment node
			}
		});

		return doc;
	};

	function makeMap(str) {
		var obj = {}, items = str.split(",");
		for (var i = 0; i < items.length; i++)
			obj[items[i]] = true;
		return obj;
	}
})();


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/src/html2json.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/html2json/src/html2json.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(global) {
  DEBUG = false;
  var debug = DEBUG ? console.log.bind(console) : function(){};

  if ( true && typeof module.exports === 'object') {
    __webpack_require__(/*! ../lib/Pure-JavaScript-HTML5-Parser/htmlparser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js");
  }

  function q(v) {
    return '"' + v + '"';
  }

  function removeDOCTYPE(html) {
    return html
      .replace(/<\?xml.*\?>\n/, '')
      .replace(/<!doctype.*\>\n/, '')
      .replace(/<!DOCTYPE.*\>\n/, '');
  }

  global.html2json = function html2json(html) {
    html = removeDOCTYPE(html);
    var bufArray = [];
    var results = {
      node: 'root',
      child: [],
    };
    HTMLParser(html, {
      start: function(tag, attrs, unary) {
        debug(tag, attrs, unary);
        // node for this element
        var node = {
          node: 'element',
          tag: tag,
        };
        if (attrs.length !== 0) {
          node.attr = attrs.reduce(function(pre, attr) {
            var name = attr.name;
            var value = attr.value;

            // has multi attibutes
            // make it array of attribute
            if (value.match(/ /)) {
              value = value.split(' ');
            }

            // if attr already exists
            // merge it
            if (pre[name]) {
              if (Array.isArray(pre[name])) {
                // already array, push to last
                pre[name].push(value);
              } else {
                // single value, make it array
                pre[name] = [pre[name], value];
              }
            } else {
              // not exist, put it
              pre[name] = value;
            }

            return pre;
          }, {});
        }
        if (unary) {
          // if this tag dosen't have end tag
          // like <img src="hoge.png"/>
          // add to parents
          var parent = bufArray[0] || results;
          if (parent.child === undefined) {
            parent.child = [];
          }
          parent.child.push(node);
        } else {
          bufArray.unshift(node);
        }
      },
      end: function(tag) {
        debug(tag);
        // merge into parent tag
        var node = bufArray.shift();
        if (node.tag !== tag) console.error('invalid state: mismatch end tag');

        if (bufArray.length === 0) {
          results.child.push(node);
        } else {
          var parent = bufArray[0];
          if (parent.child === undefined) {
            parent.child = [];
          }
          parent.child.push(node);
        }
      },
      chars: function(text) {
        debug(text);
        var node = {
          node: 'text',
          text: text,
        };
        if (bufArray.length === 0) {
          results.child.push(node);
        } else {
          var parent = bufArray[0];
          if (parent.child === undefined) {
            parent.child = [];
          }
          parent.child.push(node);
        }
      },
      comment: function(text) {
        debug(text);
        var node = {
          node: 'comment',
          text: text,
        };
        var parent = bufArray[0];
        if (parent.child === undefined) {
          parent.child = [];
        }
        parent.child.push(node);
      },
    });
    return results;
  };

  global.json2html = function json2html(json) {
    // Empty Elements - HTML 4.01
    var empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];

    var child = '';
    if (json.child) {
      child = json.child.map(function(c) {
        return json2html(c);
      }).join('');
    }

    var attr = '';
    if (json.attr) {
      attr = Object.keys(json.attr).map(function(key) {
        var value = json.attr[key];
        if (Array.isArray(value)) value = value.join(' ');
        return key + '=' + q(value);
      }).join(' ');
      if (attr !== '') attr = ' ' + attr;
    }

    if (json.node === 'element') {
      var tag = json.tag;
      if (empty.indexOf(tag) > -1) {
        // empty element
        return '<' + json.tag + attr + '/>';
      }

      // non empty element
      var open = '<' + json.tag + attr + '>';
      var close = '</' + json.tag + '>';
      return open + child + close;
    }

    if (json.node === 'text') {
      return json.text;
    }

    if (json.node === 'comment') {
      return '<!--' + json.text + '-->';
    }

    if (json.node === 'root') {
      return child;
    }
  };
})(this);


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/base64-js/index.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/base64-js/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js":
/*!**********************************************!*\
  !*** (webpack)/node_modules/buffer/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buildin/global.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/https-browserify/index.js":
/*!********************************************************!*\
  !*** (webpack)/node_modules/https-browserify/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(/*! http */ "http")
var url = __webpack_require__(/*! url */ "url")

var https = module.exports

for (var key in http) {
  if (http.hasOwnProperty(key)) https[key] = http[key]
}

https.request = function (params, cb) {
  params = validateParams(params)
  return http.request.call(this, params, cb)
}

https.get = function (params, cb) {
  params = validateParams(params)
  return http.get.call(this, params, cb)
}

function validateParams (params) {
  if (typeof params === 'string') {
    params = url.parse(params)
  }
  if (!params.protocol) {
    params.protocol = 'https:'
  }
  if (params.protocol !== 'https:') {
    throw new Error('Protocol "' + params.protocol + '" not supported. Expected "https:"')
  }
  return params
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/ieee754/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/ieee754/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/isarray/index.js":
/*!***********************************************!*\
  !*** (webpack)/node_modules/isarray/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./bin/esm/Request.js":
/*!****************************!*\
  !*** ./bin/esm/Request.js ***!
  \****************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./bin/esm/log.js");
/* harmony import */ var _fsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fsUtil */ "./bin/esm/fsUtil.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! https */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/https-browserify/index.js");
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js");
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hsutil__WEBPACK_IMPORTED_MODULE_5__);


const log = new _log__WEBPACK_IMPORTED_MODULE_1__["Log"]('NodeRequest');




const html2json = __webpack_require__(/*! html2json */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/html2json/index.js").html2json;
log.messageLength = 120;
const protocol = { "http:": http__WEBPACK_IMPORTED_MODULE_3___default.a, "https:": https__WEBPACK_IMPORTED_MODULE_4___default.a };
class Request extends hsutil__WEBPACK_IMPORTED_MODULE_5__["Request"] {
    constructor() {
        super(...arguments);
        this.log = log;
    }
    getURL(url) {
        return (typeof url === 'string') ? new url__WEBPACK_IMPORTED_MODULE_0__["URL"](url) : url;
    }
    async readCached(fname) {
        try {
            const meta = JSON.parse(await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["readTextFile"](`${fname}-meta.json`));
            const data = await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["readFile"](fname + '.bin', false);
            if (this.pace) {
                this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) found cache for ${fname} `);
            }
            else {
                this.log.transient(`found cache for ${fname} `);
            }
            return { response: meta, data: data };
        }
        catch (e) {
            return undefined;
        }
    }
    async writeCached(fname, response) {
        try {
            const type = response.response.headers["content-type"];
            const meta = {
                headers: { ...response.response.headers },
                statusCode: response.response.statusCode,
                statusMessage: response.response.statusMessage,
                txt: response.response.txt
            };
            await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["writeTextFile"](`${fname}-meta.json`, JSON.stringify(meta));
            await _fsUtil__WEBPACK_IMPORTED_MODULE_2__["writeFile"](`${fname}.bin`, response.data, false);
        }
        catch (e) {
            this.log.warn(`error writing cache for content ${response.response.headers["content-type"]} and file ${fname}: ${e}`);
        }
    }
    async issueRequest(options, postData) {
        const request = this;
        const prot = protocol[options.protocol];
        return new Promise((resolve, reject) => {
            let data = '';
            this.log.debug(() => `requesting ${this.log.inspect(options, { depth: 4 })}`);
            const req = prot.request(options, (res) => {
                const encoding = request.isTextualContent(res.headers['content-type']) ? 'utf8' : 'binary';
                res.setEncoding(encoding);
                res.txt = encoding === 'utf8';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => {
                    resolve({ data: data, response: res });
                });
            });
            req.on('error', (e) => {
                reject({ data: '', error: e });
            });
            if (postData !== undefined) {
                req.write(postData);
            }
            req.end();
        });
    }
}
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: (data) => { try {
        return html2json(data);
    }
    catch (e) {
        return {};
    } }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsS0FBSyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBZSxPQUFPLENBQUM7QUFBRyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzRSxPQUFPLEtBQUssRUFBRSxNQUFlLFVBQVUsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBa0IsTUFBTSxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxNQUFpQixPQUFPLENBQUM7QUFDckMsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBUSxRQUFRLENBQUM7QUFLbEQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUVqRCxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUV4QixNQUFNLFFBQVEsR0FBRyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBQyxDQUFDO0FBR2hELE1BQU0sT0FBTyxPQUFRLFNBQVEsV0FBVztJQUF4Qzs7UUFPYyxRQUFHLEdBQVEsR0FBRyxDQUFDO0lBb0U3QixDQUFDO0lBbEVhLE1BQU0sQ0FBQyxHQUFjO1FBQzNCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBVVMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFZO1FBQ25DLElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FB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

/***/ }),

/***/ "./bin/esm/cpUtil.js":
/*!***************************!*\
  !*** ./bin/esm/cpUtil.js ***!
  \***************************/
/*! exports provided: child_process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "child_process", function() { return child_process; });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);

const child_process = {
    exec: (command, options) => new Promise((resolve, reject) => child_process__WEBPACK_IMPORTED_MODULE_0__["exec"](command, options, (error, stdout, stderr) => {
        error ? reject(error) : resolve({ stdout: stdout, stderr: stderr });
    }))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NwVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxLQUFLLEVBQUUsTUFBTyxlQUFlLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBYXpCLElBQUksRUFBRSxDQUFDLE9BQWMsRUFBRSxPQUFZLEVBQW9DLEVBQUUsQ0FDckUsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFxRCxFQUFFLE1BQXVCLEVBQUUsRUFBRSxDQUMzRixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFTLEVBQUUsTUFBYSxFQUFFLE1BQWEsRUFBRSxFQUFFO1FBQ2xFLEtBQUssQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQyxDQUNMO0NBQ1IsQ0FBQyJ9

/***/ }),

/***/ "./bin/esm/fsUtil.js":
/*!***************************!*\
  !*** ./bin/esm/fsUtil.js ***!
  \***************************/
/*! exports provided: realPath, pathExists, fileSize, isFile, isDirectory, isLink, mkdirs, readDir, readFile, readTextFile, readJsonFile, writeFile, writeStream, writeTextFile, writeJsonFile, appendFile, appendFileSync, remove, removeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realPath", function() { return realPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathExists", function() { return pathExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirectory", function() { return isDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLink", function() { return isLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mkdirs", function() { return mkdirs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDir", function() { return readDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTextFile", function() { return readTextFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readJsonFile", function() { return readJsonFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeFile", function() { return writeFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeStream", function() { return writeStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTextFile", function() { return writeTextFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeJsonFile", function() { return writeJsonFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFile", function() { return appendFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFileSync", function() { return appendFileSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAll", function() { return removeAll; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


async function stat(thePath) {
    const p = await realPath(thePath);
    return await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["stat"](p, (err, stats) => {
            if (err) {
                console.log(`error getting stats for ${thePath}: ${err}`);
                reject(err);
            }
            else {
                resolve(stats);
            }
        });
    });
}
async function lstat(thePath) {
    const p = path__WEBPACK_IMPORTED_MODULE_1__["normalize"](thePath);
    return new Promise((resolve, reject) => fs__WEBPACK_IMPORTED_MODULE_0__["lstat"](p, (err, stats) => err ? reject(err) : resolve(stats)));
}
function error(err) {
    const msg = `*** error in fsUtil: ${err}, stack:\n${err.stack}`;
    throw new Error(msg);
}
function realPath(thePath) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["realpath"](thePath, (err, resolvedPath) => err ? reject(err) : resolve(resolvedPath));
    })
        .catch(error);
}
async function pathExists(thePath) {
    try {
        await stat(thePath);
        return true;
    }
    catch (e) {
        return false;
    }
}
async function fileSize(thePath) {
    try {
        return (await stat(thePath)).size;
    }
    catch (e) {
        return -1;
    }
}
async function isFile(thePath) {
    try {
        return (await stat(thePath)).isFile();
    }
    catch (e) {
        return false;
    }
}
async function isDirectory(thePath) {
    try {
        return (await stat(thePath)).isDirectory();
    }
    catch (e) {
        return false;
    }
}
async function isLink(thePath) {
    try {
        return (await lstat(thePath)).isSymbolicLink();
    }
    catch (e) {
        return false;
    }
}
async function mkdirs(thePath) {
    const p = path__WEBPACK_IMPORTED_MODULE_1__["normalize"](path__WEBPACK_IMPORTED_MODULE_1__["resolve"](process.cwd(), thePath));
    let dirs = p.split('/');
    dirs = dirs.map((dir, i) => dirs.slice(0, i + 1).join('/'));
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        const exists = await isDirectory(dir);
        if (!exists) {
            try {
                await fs__WEBPACK_IMPORTED_MODULE_0__["promises"].mkdir(dir);
            }
            catch (e) {
                if (e.code !== 'EEXIST') {
                    console.error(`error in mkdirs: ${e.code}`);
                    console.error(e);
                    throw `mkdir failed for ${dir}: ${p}\n${e}`;
                }
            }
        }
    }
    return p;
}
async function readDir(thePath) {
    const p = await realPath(thePath);
    return await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["readdir"](p, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                files.path = p;
                resolve(files);
            }
        });
    })
        .catch(error);
}
function readFile(thePath, isText = true) {
    return new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["readFile"](thePath, isText ? 'utf8' : 'binary', (err, data) => err ? reject(err) : resolve(data));
    })
        .catch(error);
}
async function readTextFile(thePath) {
    try {
        return await readFile(thePath, true);
    }
    catch (err) {
        error(err);
    }
}
async function readJsonFile(thePath) {
    try {
        const data = await readFile(thePath, true);
        return (typeof data === 'string') ? JSON.parse(data) : data;
    }
    catch (err) {
        error(err);
    }
}
async function writeFile(thePath, content, isText = true) {
    var encoding = isText ? 'utf8' : 'binary';
    await mkdirs(path__WEBPACK_IMPORTED_MODULE_1__["dirname"](thePath));
    return await new Promise((resolve, reject) => {
        fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"](thePath, content, encoding, (err) => err ? reject(`mkdirs failed in writeFile for '${thePath}': ${err}`) : resolve(thePath));
    });
}
async function writeStream(thePath, content) {
    return await new Promise((resolve, reject) => {
        const s = fs__WEBPACK_IMPORTED_MODULE_0__["createWriteStream"](thePath, { flags: 'w', mode: 0o666 });
        s.on('error', (src) => reject(`writeStream error '${src}' for path '${thePath}'`));
        s.write(content, 'binary', () => resolve(thePath));
        s.end();
    });
}
async function writeTextFile(thePath, content) {
    return await writeFile(thePath, content, true)
        .catch(error);
}
async function writeJsonFile(thePath, obj) {
    return await Promise.resolve(obj)
        .then(JSON.stringify)
        .then(async (data) => await writeTextFile(thePath, data))
        .catch(error);
}
async function appendFile(thePath, content, isText = true) {
    var encoding = isText ? 'utf8' : { encoding: null };
    try {
        return await new Promise((resolve, reject) => {
            fs__WEBPACK_IMPORTED_MODULE_0__["appendFile"](thePath, content, encoding, (err) => err ? reject(err) : resolve(thePath));
        });
    }
    catch (e) {
        error(e);
    }
    ;
}
function appendFileSync(thePath, content, isText = true) {
    var encoding = isText ? 'utf8' : { encoding: null };
    try {
        fs__WEBPACK_IMPORTED_MODULE_0__["appendFileSync"](thePath, content, encoding);
        return thePath;
    }
    catch (e) {
        error(e);
    }
    ;
}
async function remove(thePath) {
    const dir = await isDirectory(thePath);
    return await new Promise((resolve, reject) => {
        dir ? fs__WEBPACK_IMPORTED_MODULE_0__["rmdir"](thePath, (e) => (e ? reject(e) : resolve(thePath)))
            : fs__WEBPACK_IMPORTED_MODULE_0__["unlink"](thePath, (e) => (e ? reject(e) : resolve(thePath)));
    });
}
async function removeAll(thePath) {
    const removed = [];
    const dir = await isDirectory(thePath);
    if (dir) {
        const list = await readDir(thePath);
        await Promise.all(list.map(async (i) => removed.push(...await removeAll(`${thePath}/${i}`))));
    }
    removed.push(await remove(thePath));
    return removed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnNVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxLQUFLLEVBQUUsTUFBZSxJQUFJLENBQUM7QUFDbEMsT0FBTyxLQUFLLElBQUksTUFBYSxNQUFNLENBQUM7QUE4QnBDLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBYztJQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFPLEVBQUUsS0FBYyxFQUFFLEVBQUU7WUFDbkMsSUFBRyxHQUFHLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUNJO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBT0QsS0FBSyxVQUFVLEtBQUssQ0FBQyxPQUFjO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQU8sRUFBRSxLQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDNUUsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFPO0lBQ2xCLE1BQU0sR0FBRyxHQUFHLHdCQUF3QixHQUFHLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hFLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQVVELE1BQU0sVUFBVSxRQUFRLENBQUMsT0FBYztJQUN0QyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBMkIsRUFBRSxNQUFzQixFQUFFLEVBQUU7UUFDMUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFPLEVBQUUsWUFBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBRSxDQUFDO0lBQ2hHLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBT0QsTUFBTSxDQUFDLEtBQUssVUFBVSxVQUFVLENBQUMsT0FBYztJQUMzQyxJQUFJO1FBQ0EsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUFDLE9BQU0sQ0FBQyxFQUFFO1FBQ1AsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDTCxDQUFDO0FBT0QsTUFBTSxDQUFDLEtBQUssVUFBVSxRQUFRLENBQUMsT0FBYztJQUN6QyxJQUFJO1FBQ0EsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3JDO0lBQUMsT0FBTSxDQUFDLEVBQUU7UUFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ2I7QUFDTCxDQUFDO0FBT0QsTUFBTSxDQUFDLEtBQUssVUFBVSxNQUFNLENBQUMsT0FBYztJQUN2QyxJQUFJO1FBQ0EsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDekM7SUFBQyxPQUFNLENBQUMsRUFBRTtRQUNQLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0wsQ0FBQztBQU9ELE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVyxDQUFDLE9BQWM7SUFDNUMsSUFBSTtRQUNBLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlDO0lBQUMsT0FBTSxDQUFDLEVBQUU7UUFDUCxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNMLENBQUM7QUFPRCxNQUFNLENBQUMsS0FBSyxVQUFVLE1BQU0sQ0FBQyxPQUFjO0lBQ3ZDLElBQUk7UUFDQSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUNsRDtJQUFDLE9BQU0sQ0FBQyxFQUFFO1FBQ1AsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDTCxDQUFDO0FBVUQsTUFBTSxDQUFDLEtBQUssVUFBVSxNQUFNLENBQUMsT0FBYztJQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFOUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4QixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6RCxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLElBQUk7Z0JBQ2YsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztZQUFDLE9BQU0sQ0FBQyxFQUFFO2dCQUNQLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixNQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2lCQUMvQzthQUNKO1NBQUM7S0FDTDtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQU9ELE1BQU0sQ0FBQyxLQUFLLFVBQVUsT0FBTyxDQUFDLE9BQWM7SUFDeEMsTUFBTSxDQUFDLEdBQUcsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsT0FBTyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBeUIsRUFBRSxNQUFzQixFQUFFLEVBQUU7UUFDM0UsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFPLEVBQUUsS0FBUyxFQUFFLEVBQUU7WUFDakMsSUFBRyxHQUFHLEVBQUU7Z0JBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQUU7aUJBQ25CO2dCQUNELEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFTRCxNQUFNLFVBQVUsUUFBUSxDQUFDLE9BQWMsRUFBRSxNQUFNLEdBQUMsSUFBSTtJQUNuRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBd0IsRUFBRSxNQUFzQixFQUFFLEVBQUU7UUFDdkUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQU8sRUFBRSxJQUFRLEVBQUUsRUFBRSxDQUM1RCxHQUFHLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFDO1NBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFPRCxNQUFNLENBQUMsS0FBSyxVQUFVLFlBQVksQ0FBQyxPQUFjO0lBQ2hELElBQUk7UUFBRSxPQUFPLE1BQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUFFO0lBQzFDLE9BQU0sR0FBRyxFQUFFO1FBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUU7QUFDOUIsQ0FBQztBQU9ELE1BQU0sQ0FBQyxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWM7SUFDN0MsSUFBSTtRQUNBLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUM5RDtJQUNELE9BQU0sR0FBRyxFQUFFO1FBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUU7QUFDOUIsQ0FBQztBQVNELE1BQU0sQ0FBQyxLQUFLLFVBQVUsU0FBUyxDQUFDLE9BQWMsRUFBRSxPQUFjLEVBQUUsU0FBZSxJQUFJO0lBQy9FLElBQUksUUFBUSxHQUFPLE1BQU0sQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDN0MsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN6QyxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUUsQ0FDakQsR0FBRyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsbUNBQW1DLE9BQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFRRCxNQUFNLENBQUMsS0FBSyxVQUFVLFdBQVcsQ0FBQyxPQUFjLEVBQUUsT0FBYztJQUM1RCxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxlQUFlLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBT0QsTUFBTSxDQUFDLEtBQUssVUFBVSxhQUFhLENBQUMsT0FBYyxFQUFFLE9BQWM7SUFDakUsT0FBTyxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztTQUMxQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQVFELE1BQU0sQ0FBQyxLQUFLLFVBQVUsYUFBYSxDQUFDLE9BQWMsRUFBRSxHQUFPO0lBQ3ZELE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNwQixJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTSxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25ELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBU0QsTUFBTSxDQUFDLEtBQUssVUFBVSxVQUFVLENBQUMsT0FBYyxFQUFFLE9BQWMsRUFBRSxTQUFlLElBQUk7SUFDaEYsSUFBSSxRQUFRLEdBQU8sTUFBTSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ3JELElBQUk7UUFBRSxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDL0MsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUMsQ0FBQyxDQUFBO0tBQUM7SUFBQyxPQUFNLENBQUMsRUFBRTtRQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUFFO0lBQUEsQ0FBQztBQUMvQixDQUFDO0FBU0QsTUFBTSxVQUFVLGNBQWMsQ0FBQyxPQUFjLEVBQUUsT0FBYyxFQUFFLFNBQWUsSUFBSTtJQUM5RSxJQUFJLFFBQVEsR0FBTyxNQUFNLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDckQsSUFBSTtRQUNBLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxPQUFPLE9BQU8sQ0FBQztLQUNsQjtJQUFDLE9BQU0sQ0FBQyxFQUFFO1FBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFBQSxDQUFDO0FBQzdCLENBQUM7QUFPRCxNQUFNLENBQUMsS0FBSyxVQUFVLE1BQU0sQ0FBQyxPQUFjO0lBQ3ZDLE1BQU0sR0FBRyxHQUFXLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN0QyxHQUFHLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBT0QsTUFBTSxDQUFDLEtBQUssVUFBVSxTQUFTLENBQUMsT0FBYztJQUMxQyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDbkIsTUFBTSxHQUFHLEdBQVcsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsSUFBSSxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxTQUFTLENBQUMsR0FBRyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRjtJQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "./bin/esm/index.js":
/*!**************************!*\
  !*** ./bin/esm/index.js ***!
  \**************************/
/*! exports provided: cp, Log, Request, fs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cpUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpUtil.js */ "./bin/esm/cpUtil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cp", function() { return _cpUtil_js__WEBPACK_IMPORTED_MODULE_0__["child_process"]; });

/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./bin/esm/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log_js__WEBPACK_IMPORTED_MODULE_1__["Log"]; });

/* harmony import */ var _Request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request.js */ "./bin/esm/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _Request_js__WEBPACK_IMPORTED_MODULE_2__["Request"]; });

/* harmony import */ var _fsUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fsUtil.js */ "./bin/esm/fsUtil.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "fs", function() { return _fsUtil_js__WEBPACK_IMPORTED_MODULE_3__; });





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsSUFBSSxFQUFFLEVBQUUsTUFBTyxhQUFhLENBQUM7QUFDbkQsY0FBcUMsVUFBVSxDQUFDO0FBQ2hELGNBQXFDLGNBQWMsQ0FBQztBQUVwRCxPQUFPLEtBQUssRUFBRSxNQUF1QixhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDIn0=

/***/ }),

/***/ "./bin/esm/log.js":
/*!************************!*\
  !*** ./bin/esm/log.js ***!
  \************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js");
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hsutil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fsUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fsUtil */ "./bin/esm/fsUtil.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);





const COLOR = {
    clear: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    darkred: '\x1b[31m',
    darkgreen: '\x1b[32m',
    darkyellow: '\x1b[33m',
    darkblue: '\x1b[34m',
    darkmagenta: '\x1b[35m',
    darkcyan: '\x1b[36m',
    gray: '\x1b[37m',
    bgBlack: '\x1b[40m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgBlue: '\x1b[44m',
    bgMagenta: '\x1b[45m',
    bgCyan: '\x1b[46m',
    bgWhite: '\x1b[47m'
};
class Log extends hsutil__WEBPACK_IMPORTED_MODULE_0__["Log"] {
    constructor(prefix) { super(prefix); }
    transient(msg) {
        return this.out(hsutil__WEBPACK_IMPORTED_MODULE_0__["Log"].INFO, msg.padEnd(this.messageLength || 80, ' ') + ' \r', { color: ['green'] });
    }
    output(color, header, line) {
        const c = color.map(c => COLOR[c]).join('');
        const msg = `${c}${header}${COLOR['clear']} ${line}`;
        if (this.LogFile) {
            Object(_fsUtil__WEBPACK_IMPORTED_MODULE_1__["appendFileSync"])(Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(this.LogFile), `${header} ${line}\n`);
        }
        if (line.slice(-1) === '\r') {
            process.stdout.write(msg);
        }
        else {
            console.log(msg);
        }
    }
    async logFile(filePattern) {
        if (filePattern === null) {
            this.LogFile = undefined;
            this.info("disabling logfile");
            return this.LogFile;
        }
        else if (filePattern === undefined) {
            return this.LogFile === undefined ? undefined : Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(this.LogFile);
        }
        else if (filePattern.indexOf('/') >= 0) {
            const parts = path__WEBPACK_IMPORTED_MODULE_2___default.a.parse(filePattern);
            try {
                const exists = await Object(_fsUtil__WEBPACK_IMPORTED_MODULE_1__["pathExists"])(parts.dir);
                if (!exists) {
                    this.LogFile = undefined;
                    this.warn(`path '${parts.dir}' doesn't exists; logfile disabled`);
                }
                else {
                    this.LogFile = filePattern;
                    this.info("now logging to file " + Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(filePattern));
                }
                return this.LogFile;
            }
            catch (e) {
                this.LogFile = undefined;
                this.error(`checking path ${parts.dir}; logfile disabled`);
                return this.LogFile;
            }
        }
        else if (filePattern === '') {
            this.LogFile = 'log-%YYYY-%MM-%DD.txt';
        }
        else {
            this.LogFile = filePattern;
        }
        this.info(this.LogFile ? `now logging to file ${Object(hsutil__WEBPACK_IMPORTED_MODULE_0__["date"])(this.LogFile)}` : 'logfile disbaled');
        return this.LogFile;
    }
    getPrePostfix(indent, level, currIndent, colors) {
        const color = colors ? COLOR[colors[level % colors.length]] : '';
        return [`${currIndent}${indent}${color}`, colors ? COLOR.clear : '', '\n', currIndent];
    }
}
Log.log = new Log('');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxPQUFPLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxNQUFRLFFBQVEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVksVUFBVSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBUSxVQUFVLENBQUM7QUFDNUMsT0FBUSxJQUFJLE1BQXFCLE1BQU0sQ0FBQztBQUt4QyxNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTyxTQUFTO0lBRXJCLElBQUksRUFBUSxTQUFTO0lBQ3JCLEdBQUcsRUFBUyxTQUFTO0lBQ3JCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLEtBQUssRUFBTyxTQUFTO0lBQ3JCLE9BQU8sRUFBSyxTQUFTO0lBQ3JCLE1BQU0sRUFBTSxTQUFTO0lBRXJCLEtBQUssRUFBTyxVQUFVO0lBQ3RCLEdBQUcsRUFBUyxVQUFVO0lBQ3RCLEtBQUssRUFBTyxVQUFVO0lBQ3RCLE1BQU0sRUFBTSxVQUFVO0lBQ3RCLElBQUksRUFBUSxVQUFVO0lBQ3RCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLElBQUksRUFBUSxVQUFVO0lBQ3RCLEtBQUssRUFBTyxVQUFVO0lBRXRCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLFNBQVMsRUFBRyxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFFBQVEsRUFBSSxVQUFVO0lBQ3RCLFdBQVcsRUFBQyxVQUFVO0lBQ3RCLFFBQVEsRUFBSSxVQUFVO0lBQ3RCLElBQUksRUFBUSxVQUFVO0lBRXRCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLEtBQUssRUFBTyxVQUFVO0lBQ3RCLE9BQU8sRUFBSyxVQUFVO0lBQ3RCLFFBQVEsRUFBSSxVQUFVO0lBQ3RCLE1BQU0sRUFBTSxVQUFVO0lBQ3RCLFNB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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["child_process"]; }());

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["crypto"]; }());

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["fs"]; }());

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["http"]; }());

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["path"]; }());

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["url"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc05vZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL0FycmF5LmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9BdXRoLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9BdXRoQmFzaWMuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL0F1dGhEaWdlc3QuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9EYXRlLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9QYWNpbmcuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHRtbDJqc29uL2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2h0bWwyanNvbi9saWIvUHVyZS1KYXZhU2NyaXB0LUhUTUw1LVBhcnNlci9odG1scGFyc2VyLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2h0bWwyanNvbi9zcmMvaHRtbDJqc29uLmpzIiwid2VicGFjazovL2hzTm9kZS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8od2VicGFjaykvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvKHdlYnBhY2spL25vZGVfbW9kdWxlcy9odHRwcy1icm93c2VyaWZ5L2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8od2VicGFjaykvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvKHdlYnBhY2spL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2VzbS9SZXF1ZXN0LmpzIiwid2VicGFjazovL2hzTm9kZS8uL2Jpbi9lc20vY3BVdGlsLmpzIiwid2VicGFjazovL2hzTm9kZS8uL2Jpbi9lc20vZnNVdGlsLmpzIiwid2VicGFjazovL2hzTm9kZS8uL2Jpbi9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2VzbS9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovL2hzTm9kZS9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL2hzTm9kZS9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovL2hzTm9kZS9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9oc05vZGUvZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxteUI7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzFLRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQlk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsc0lBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLGtJQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyxrSUFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNFO0FBQzVCLGdCQUFnQix3Q0FBRztBQUNZO0FB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Ozs7Ozs7O0FDQTVDLGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLDhCQUE4QixFQUFFLEkiLCJmaWxlIjoiaHNOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iaW4vZXNtL2luZGV4LmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB1bmlxdWVmeShhcnJheSwga2V5KSB7XG4gICAgY29uc3QgdW5pcXVlID0ge307XG4gICAgcmV0dXJuIGtleSA/IGFycmF5LmZpbHRlcih0ID0+IHVuaXF1ZVt0WycnICsga2V5XV0gPyBmYWxzZSA6ICh1bmlxdWVbdFsnJyArIGtleV1dID0gdHJ1ZSkpXG4gICAgICAgIDogYXJyYXkuZmlsdGVyKHQgPT4gdW5pcXVlWycnICsgdF0gPyBmYWxzZSA6ICh1bmlxdWVbJycgKyB0XSA9IHRydWUpKTtcbn1cbmV4cG9ydHMudW5pcXVlZnkgPSB1bmlxdWVmeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYSnlZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlFYSnlZWGt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRm5RMEVzVTBGQlowSXNVVUZCVVN4RFFVRkpMRXRCUVZNc1JVRkJSU3hIUVVGclFqdEpRVU55UkN4TlFVRk5MRTFCUVUwc1IwRkJORUlzUlVGQlJTeERRVUZETzBsQlF6TkRMRTlCUVU4c1IwRkJSeXhEUVVGQkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZUVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRExFTkJRVU1zUjBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpkRkxFTkJRVU03UVVGS1JDdzBRa0ZKUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQXV0aCB7XG4gICAgY29uc3RydWN0b3IodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIH1cbn1cbmV4cG9ydHMuQXV0aCA9IEF1dGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OUJkWFJvTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJSMEVzVFVGQmMwSXNTVUZCU1R0SlFVbDBRaXhaUVVGWkxGRkJRV1VzUlVGQlJTeFJRVUZsTzFGQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1EwRkhTanRCUVZaRUxHOUNRVlZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbG9nXzEgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5jb25zdCBsb2cgPSBuZXcgbG9nXzEuTG9nKCdSZXF1ZXN0QmFzaWMnKTtcbmNvbnN0IEF1dGhfMSA9IHJlcXVpcmUoXCIuL0F1dGhcIik7XG5jbGFzcyBBdXRoQmFzaWMgZXh0ZW5kcyBBdXRoXzEuQXV0aCB7XG4gICAgdGVzdEF1dGgob3B0aW9ucywgZGF0YSwgcmVzcG9uc2UpIHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+IGByZWNlaXZlZCB3d3ctYXV0aGVudGljYXRlIHJlcXVlc3QgZm9yICR7b3B0aW9ucy5ob3N0fWApO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgX2J0b2EoYCR7dGhpcy51c2VybmFtZX06JHt0aGlzLnBhc3N3b3JkfWApO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5leHBvcnRzLkF1dGhCYXNpYyA9IEF1dGhCYXNpYztcbmZ1bmN0aW9uIF9idG9hKHN0cikge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHN0ciBpbnN0YW5jZW9mIEJ1ZmZlciA/IHN0ciA6IEJ1ZmZlci5mcm9tKHN0ci50b1N0cmluZygpLCAnYmluYXJ5Jyk7XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG59XG5mdW5jdGlvbiBfYXRvYihzdHIpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFFSmhjMmxqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwwRjFkR2hDWVhOcFl5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxDdENRVUY1UXp0QlFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzVTBGQlJ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUjJoR0xHbERRVUV3UXp0QlFVY3hReXhOUVVGaExGTkJRVlVzVTBGQlVTeFhRVUZKTzBsQlF5OUNMRkZCUVZFc1EwRkJReXhQUVVGbExFVkJRVVVzU1VGQlZ5eEZRVUZGTEZGQlFYZENPMUZCUXpORUxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRU5CUVVFc2VVTkJRWGxETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1pGTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNSR0xFOUJRVThzVDBGQlR5eERRVUZETzBsQlEyNUNMRU5CUVVNN1EwRkRTanRCUVU1RUxEaENRVTFETzBGQlJVUXNVMEZCVXl4TFFVRkxMRU5CUVVNc1IwRkJhVUk3U1VGRE5VSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1IwRkJSeXhaUVVGWkxFMUJRVTBzUTBGQlFTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU5zUml4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEY2tNc1EwRkJRenRCUVVWRUxGTkJRVk1zUzBGQlN5eERRVUZETEVkQlFWVTdTVUZEY2tJc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdRVUZEZWtRc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2dfMSA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmNvbnN0IGxvZyA9IG5ldyBsb2dfMS5Mb2coJ1JlcXVlc3REaWdlc3QnKTtcbmNvbnN0IGNyeXB0b18xID0gcmVxdWlyZShcImNyeXB0b1wiKTtcbmNvbnN0IEF1dGhfMSA9IHJlcXVpcmUoXCIuL0F1dGhcIik7XG5jbGFzcyBBdXRoRGlnZXN0IGV4dGVuZHMgQXV0aF8xLkF1dGgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5jID0gMDtcbiAgICB9XG4gICAgdXBkYXRlTkMoKSB7XG4gICAgICAgIGxldCBtYXggPSA5OTk5OTk5OTtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSBuZXcgQXJyYXkoOCkuam9pbignMCcpICsgJyc7XG4gICAgICAgIHRoaXMubmMgPSAodGhpcy5uYyA+IG1heCA/IDEgOiB0aGlzLm5jICsgMSk7XG4gICAgICAgIGxldCBuYyA9IHRoaXMubmMgKyAnJztcbiAgICAgICAgcmV0dXJuIHBhZGRpbmcuc3Vic3RyKDAsIDggLSBuYy5sZW5ndGgpICsgbmM7XG4gICAgfVxuICAgIGdlbmVyYXRlQ05PTkNFKHFvcCkge1xuICAgICAgICBsZXQgY25vbmNlO1xuICAgICAgICBsZXQgbmM7XG4gICAgICAgIGlmICh0eXBlb2YgcW9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGV0IGNub25jZUhhc2ggPSBjcnlwdG9fMS5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgICAgIGNub25jZUhhc2gudXBkYXRlKE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpKTtcbiAgICAgICAgICAgIGNub25jZSA9IGNub25jZUhhc2guZGlnZXN0KCdoZXgnKS5zdWJzdHIoMCwgMTYpO1xuICAgICAgICAgICAgbmMgPSB0aGlzLnVwZGF0ZU5DKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY25vbmNlOiBjbm9uY2UsIG5jOiBuYyB9O1xuICAgIH1cbiAgICB0ZXN0QXV0aChvcHRpb25zLCBkYXRhLCByZXNwb25zZSkge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gYHJlY2VpdmVkIHd3dy1hdXRoZW50aWNhdGUgcmVxdWVzdCBmb3IgJHtvcHRpb25zLmhvc3R9YCk7XG4gICAgICAgIGxldCBjaGFsbGVuZ2UgPSBwYXJzZURpZ2VzdFJlc3BvbnNlKHJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXSk7XG4gICAgICAgIGxldCBoYTEgPSBjcnlwdG9fMS5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgbGV0IF9zdHIgPSBgJHt0aGlzLnVzZXJuYW1lfToke2NoYWxsZW5nZS5yZWFsbX06JHt0aGlzLnBhc3N3b3JkfWA7XG4gICAgICAgIGhhMS51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCBoYTIgPSBjcnlwdG9fMS5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgX3N0ciA9IGAke29wdGlvbnMubWV0aG9kfToke29wdGlvbnMucGF0aH1gO1xuICAgICAgICBoYTIudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgeyBuYywgY25vbmNlIH0gPSB0aGlzLmdlbmVyYXRlQ05PTkNFKGNoYWxsZW5nZS5xb3ApO1xuICAgICAgICBsZXQgaGFzaCA9IGNyeXB0b18xLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBfc3RyID0gYCR7aGExLmRpZ2VzdCgnaGV4Jyl9OiR7Y2hhbGxlbmdlLm5vbmNlfToke25jfToke2Nub25jZX06JHtjaGFsbGVuZ2UucW9wfToke2hhMi5kaWdlc3QoJ2hleCcpfWA7XG4gICAgICAgIGhhc2gudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgYXV0aFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJlYWxtOiBjaGFsbGVuZ2UucmVhbG0sXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHVyaTogb3B0aW9ucy5wYXRoLFxuICAgICAgICAgICAgcW9wOiBjaGFsbGVuZ2UucW9wLFxuICAgICAgICAgICAgbm9uY2U6IGNoYWxsZW5nZS5ub25jZSxcbiAgICAgICAgICAgIGFsZ29yaXRobTogXCJNRDVcIixcbiAgICAgICAgICAgIHJlc3BvbnNlOiBoYXNoLmRpZ2VzdCgnaGV4JylcbiAgICAgICAgfTtcbiAgICAgICAgYXV0aFBhcmFtcyA9IG9taXROdWxsKGF1dGhQYXJhbXMpO1xuICAgICAgICBpZiAoY25vbmNlKSB7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLm5jID0gbmM7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLmNub25jZSA9IGNub25jZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGNvbXBpbGVQYXJhbXMoYXV0aFBhcmFtcyk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbmV4cG9ydHMuQXV0aERpZ2VzdCA9IEF1dGhEaWdlc3Q7XG5mdW5jdGlvbiBvbWl0TnVsbChkYXRhKSB7XG4gICAgbGV0IG5ld09iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKGRhdGFba10gIT09IG51bGwgJiYgZGF0YVtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdPYmplY3Rba10gPSBkYXRhW2tdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld09iamVjdDtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVQYXJhbXMocGFyYW1zKSB7XG4gICAgbGV0IHBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IGkgKyAnPScgKyAocHV0RG91YmxlUXVvdGVzKGkpID8gYFwiJHtwYXJhbXNbaV19XCJgIDogcGFyYW1zW2ldKTtcbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnRGlnZXN0ICcgKyBwYXJ0cy5qb2luKCcsJyk7XG59XG5mdW5jdGlvbiBwdXREb3VibGVRdW90ZXMoZW50cnkpIHtcbiAgICByZXR1cm4gWydxb3AnLCAnbmMnXS5pbmRleE9mKGVudHJ5KSA8IDA7XG59XG5mdW5jdGlvbiBwYXJzZURpZ2VzdFJlc3BvbnNlKGRpZ2VzdEhlYWRlcikge1xuICAgIGRpZ2VzdEhlYWRlciA9IGRpZ2VzdEhlYWRlci5zcGxpdCgnRGlnZXN0ICcpWzFdO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGRpZ2VzdEhlYWRlci5yZXBsYWNlKC8oKFteXCJdfFwiW15cIl0qXCIpKj8pKCwpL2csICguLi5yZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSByZXN0WzFdO1xuICAgICAgICBjb25zdCBrdiA9IHBhcnQuc3BsaXQoJz0nKS5tYXAoKHYpID0+IHYudHJpbSgpKTtcbiAgICAgICAgcGFyYW1zW2t2WzBdXSA9IGt2WzFdLnJlcGxhY2UoL1xcXCIvZywgJycpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVFYVjBhRVJwWjJWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlCZFhSb1JHbG5aWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzSzBKQlFYbERPMEZCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeFRRVUZITEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1FVRkRha1lzYlVOQlFUQkRPMEZCUnpGRExHbERRVUV3UXp0QlFVMHhReXhOUVVGaExGVkJRVmNzVTBGQlVTeFhRVUZKTzBsQlFYQkRPenRSUVVOSkxFOUJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUY1UlZnc1EwRkJRenRKUVhCRlJ5eFJRVUZSTzFGQlEwb3NTVUZCU1N4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRE8xRkJRMjVDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE5VTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEZEVJc1QwRkJUeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJUVVFzWTBGQll5eERRVUZETEVkQlFWVTdVVUZEY2tJc1NVRkJTU3hOUVVGVkxFTkJRVU03VVVGRFppeEpRVUZKTEVWQlFWTXNRMEZCUXp0UlFVVmtMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1ZVRkJWU3hIUVVGSExHMUNRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkRia01zVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRPVU1zVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOb1JDeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8xTkJRM2hDTzFGQlEwUXNUMEZCVHl4RlFVRkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUXl4RFFVRkRPMGxCUTNCRExFTkJRVU03U1VGUlJDeFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRWxCUVZjc1JVRkJSU3hSUVVGM1FqdFJRVU16UkN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVVVzUlVGQlJTeERRVUZCTEhsRFFVRjVReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVVjJSU3hKUVVGSkxGTkJRVk1zUjBGQlR5eHRRa0ZCYlVJc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU01UlN4SlFVRkpMRWRCUVVjc1IwRkJSeXh0UWtGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1NVRkJTU3hUUVVGVExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVOc1JTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRzFDUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETlVJc1NVRkJTU3hIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGRE0wTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVVZxUWl4SlFVRkpMRVZCUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzUkVMRWxCUVVrc1NVRkJTU3hIUVVGSExHMUNRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkROMElzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVc1NVRkJTU3hOUVVGTkxFbEJRVWtzVTBGQlV5eERRVUZETEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZEZGtjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVZHNRaXhKUVVGSkxGVkJRVlVzUjBGQlR6dFpRVU5xUWl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFdEJRVXM3V1VGRGRFSXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUk8xbEJRM1pDTEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTVHRaUVVOcVFpeEhRVUZITEVWQlFVVXNVMEZCVXl4RFFVRkRMRWRCUVVjN1dVRkRiRUlzUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TFFVRkxPMWxCUTNSQ0xGTkJRVk1zUlVGQlJTeExRVUZMTzFsQlEyaENMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTXZRaXhEUVVGRE8xRkJSVVlzVlVGQlZTeEhRVUZITEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVWc1F5eEpRVUZKTEUxQlFVMHNSVUZCUlR0WlFVTlNMRlZCUVZVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEyNUNMRlZCUVZVc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETzFOQlF6bENPMUZCUlVRc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRekZFTEU5QlFVOHNUMEZCVHl4RFFVRkRPMGxCUTI1Q0xFTkJRVU03UTBGRFNqdEJRVEZGUkN4blEwRXdSVU03UVVGRlJDeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRlJPMGxCUTNSQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTnVRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVkVzUlVGQlJTeEZRVUZGTzFGQlEyNURMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVRkZPMGxCUXpsRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1FVRkRja0lzUTBGQlF6dEJRVTFFTEZOQlFWTXNZVUZCWVN4RFFVRkRMRTFCUVZVN1NVRkROMElzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJZc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVWQlFVVTdVVUZEYkVJc1NVRkJTU3hQUVVGUExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VlFVRlZMRVZCUVVVN1dVRkRha01zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnlRanRMUVVOS08wbEJRMFFzVDBGQlR5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4RFFVRkRPMEZCVFVRc1UwRkJVeXhsUVVGbExFTkJRVU1zUzBGQldUdEpRVU5xUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU03UVVGRE1VTXNRMEZCUXp0QlFVVkVMRk5CUVZNc2JVSkJRVzFDTEVOQlFVTXNXVUZCYlVJN1NVRkROVU1zV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlEyeENMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRV0VzUlVGQlJTeEZRVUZGTzFGQlEyaEZMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlRaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEZGtRc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM3BETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUTJRc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFNDeFBRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTnNRaXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHNob3J0Q2hlY2tTdW0ocykge1xuICAgIGxldCBjaGsgPSAweDEyMzQ1Njc4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGsgKz0gKHMuY2hhckNvZGVBdChpKSAqIChpICsgMSkpO1xuICAgIH1cbiAgICByZXR1cm4gKGNoayAmIDB4ZmZmZmZmZmYpLnRvU3RyaW5nKDE2KTtcbn1cbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IHNob3J0Q2hlY2tTdW07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRMmhsWTJ0emRXMHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12UTJobFkydHpkVzB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRlJReXhUUVVGblFpeGhRVUZoTEVOQlFVTXNRMEZCVVR0SlFVTnVReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZEY2tJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZETTBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTNSRE8wbEJRMFFzVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETVVNc1EwRkJRenRCUVU1RUxITkRRVTFESW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9udGhTdHIgPSBbXG4gICAgWydKYW4nLCAnSmFudWFyeSddLCBbJ0ZlYicsICdGZWJydWFyeSddLCBbJ01hcicsICdNYXJjaCddLCBbJ0FwcicsICdBcHJpbCddLCBbJ01heScsICdNYXknXSwgWydKdW4nLCAnSnVuZSddLFxuICAgIFsnSnVsJywgJ0p1bHknXSwgWydBdWcnLCAnQXVndXN0J10sIFsnU2VwJywgJ1NlcHRlbWJlciddLCBbJ09jdCcsICdPY3RvYmVyJ10sIFsnTm92JywgJ05vdmVtYmVyJ10sIFsnRGVjJywgJ0RlY2VtYmVyJ11cbl07XG5jb25zdCBkYXlTdHIgPSBbXG4gICAgWydTdW4nLCAnU3VuZGF5J10sIFsnTW9uJywgJ01vbmRheSddLCBbJ1R1ZScsICdUdWVzZGF5J10sIFsnV2VkJywgJ1dlZG5lc2RheSddLCBbJ1RodScsICdUaHVyc2RheSddLCBbJ0ZyaScsICdGcmlkYXknXSwgWydTYXQnLCAnU2F0dXJkYXknXVxuXTtcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW1iZXIsIGRpZ2l0cykge1xuICAgIGxldCByID0gJycgKyBudW1iZXI7XG4gICAgd2hpbGUgKHIubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICAgIHIgPSBcIjBcIiArIHI7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuZnVuY3Rpb24gZGF0ZShmb3JtYXRTdHJpbmcsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgZm9ybWF0U3RyaW5nICE9PSAnc3RyaW5nJyB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpID9cbiAgICAgICAgJ2ludmFsaWQnIDpcbiAgICAgICAgZm9ybWF0U3RyaW5nXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZWVkvZywgJycgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJVlZL2csICcnICsgKGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NL2csIG1vbnRoU3RyW2RhdGUuZ2V0TW9udGgoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1vbnRoKCkgKyAxLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRERERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMV0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJURERC9nLCBkYXlTdHJbZGF0ZS5nZXREYXkoKV1bMF0pXG4gICAgICAgICAgICAucmVwbGFjZSgvJUREL2csIGZvcm1hdE51bWJlcihkYXRlLmdldERhdGUoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJUQvZywgJycgKyBkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laGgvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWgvZywgJycgKyBkYXRlLmdldEhvdXJzKCkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW1tL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJW0vZywgJycgKyBkYXRlLmdldE1pbnV0ZXMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lc3MvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lampqL2csIGZvcm1hdE51bWJlcihkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCwgMikpXG4gICAgICAgICAgICAucmVwbGFjZSgvJWovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAsIDEpKTtcbn1cbmV4cG9ydHMuZGF0ZSA9IGRhdGU7XG5leHBvcnRzLm1zID0ge1xuICAgIGZyb21NaW51dGVzOiAobWluKSA9PiAxMDAwICogNjAgKiBtaW4sXG4gICAgZnJvbUhvdXJzOiAoaCkgPT4gMTAwMCAqIDYwICogNjAgKiBoLFxuICAgIGZyb21EYXlzOiAoZCkgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIGQsXG4gICAgZnJvbVdlZWtzOiAodykgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiB3LFxuICAgIHRvTWludXRlczogKG1zKSA9PiBtcyAvICgxMDAwICogNjApLFxuICAgIHRvSG91cnM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjApLFxuICAgIHRvRGF5czogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICB0b1dlZWtzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5RVlYUmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlpVRXNUVUZCVFN4UlFVRlJMRWRCUVVjN1NVRkRZaXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNN1NVRkROVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRE8wTkJRVU1zUTBGQlF6dEJRVWMxU0N4TlFVRk5MRTFCUVUwc1IwRkJSenRKUVVOWUxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXp0RFFVRkRMRU5CUVVNN1FVRkhNMGtzVTBGQlV5eFpRVUZaTEVOQlFVTXNUVUZCWVN4RlFVRkZMRTFCUVdFN1NVRkRPVU1zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkRMRTFCUVUwc1EwRkJRenRKUVVOc1FpeFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hGUVVGRk8xRkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJSVHRKUVVNeFF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTmlMRU5CUVVNN1FVRmpSQ3hUUVVGblFpeEpRVUZKTEVOQlFVTXNXVUZCYlVJc1JVRkJSU3hKUVVGSkxFZEJRVU1zU1VGQlNTeEpRVUZKTEVWQlFVVTdTVUZEY2tRc1QwRkJUeXhEUVVGRExFOUJRVThzV1VGQldTeExRVUZMTEZGQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxGTkJRVk1zUTBGQlFTeERRVUZETzFGQlExWXNXVUZCV1R0aFFVTlFMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRoUVVONFF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRVZCUVVVc1IwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNNVF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1JDeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkpMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOb1JDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM0JFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVrc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRM2hETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRelZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOcVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkpMRVZCUVVVc1IwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdZVUZEYmtNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyeEVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWNzUlVGQlJTeEhRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRoUVVOdVF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkpMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVFzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCU1N4RlFVRkZMRWRCUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzJGQlEzUkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53UkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE1VUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4SFFVRkRMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU0xUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVNc1IwRkJSeXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZWtVc1EwRkJRenRCUVhSQ1JDeHZRa0Z6UWtNN1FVRkhXU3hSUVVGQkxFVkJRVVVzUjBGQlJ6dEpRVU5rTEZkQlFWY3NSVUZCU3l4RFFVRkRMRWRCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4SFFVRkhPMGxCUXpORExGTkJRVk1zUlVGQlR5eERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNRMEZCUXp0SlFVTTFReXhSUVVGUkxFVkJRVkVzUTBGQlF5eERRVUZSTEVWQlFVa3NSVUZCUlN4RFFVRkRMRWxCUVVrc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRPMGxCUXk5RExGTkJRVk1zUlVGQlR5eERRVUZETEVOQlFWRXNSVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRE8wbEJRMnBFTEZOQlFWTXNSVUZCVHl4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNMVF5eFBRVUZQTEVWQlFWTXNRMEZCUXl4RlFVRlRMRVZCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlF5eERRVUZETEVsQlFVa3NSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hEUVVGRE8wbEJReTlETEUxQlFVMHNSVUZCVlN4RFFVRkRMRVZCUVZNc1JVRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlEyeEVMRTlCUVU4c1JVRkJVeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJRenREUVVOMlJDeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsb2dfMSA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmNvbnN0IGxvZyA9IG5ldyBsb2dfMS5Mb2coJ1BhY2luZycpO1xuZnVuY3Rpb24gdGltZW91dChtcywgLi4ucmVzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7IHNldFRpbWVvdXQocmVqZWN0LCBtcywgLi4ucmVzdCk7IH0pO1xufVxuZXhwb3J0cy50aW1lb3V0ID0gdGltZW91dDtcbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIChhcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHJlc29sdmUoYXJncyk7IH0sIG1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVsYXkgPSBkZWxheTtcbmNsYXNzIFBhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHsgcGFjZSA9IDEwMCwgbWF4Q29uY3VycmVudCA9IC0xLCBjb2xsZWN0aW9uUGVyaW9kID0gMCB9KSB7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IC0xO1xuICAgICAgICB0aGlzLnBhY2UgPSAwO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCA9IDA7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IDA7XG4gICAgICAgIHRoaXMucXVldWUgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uUGVyaW9kID0gMDtcbiAgICAgICAgdGhpcy5wYWNlID0gcGFjZTtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uUGVyaW9kID0gY29sbGVjdGlvblBlcmlvZDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKCkgeyByZXR1cm4gdGhpcy5tYXhDb25jdXJyZW50IDwgMCB8fCB0aGlzLnN0YXJ0ZWQgPCB0aGlzLm1heENvbmN1cnJlbnQ7IH1cbiAgICBzZXRQYWNlKG1zKSB7IHRoaXMucGFjZSA9IG1zOyB9XG4gICAgc2V0TWF4Q29uY3VycmVudChtYXhDb25jdXJyZW50KSB7IHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7IH1cbiAgICBpblF1ZXVlKCkgeyByZXR1cm4gdGhpcy53YWl0aW5nOyB9XG4gICAgaW5Qcm9ncmVzcygpIHsgcmV0dXJuIHRoaXMuc3RhcnRlZDsgfVxuICAgIGFkZChmbiwga2V5KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxUaW1lID0gbm93ICsgTWF0aC5tYXgodGhpcy5jb2xsZWN0aW9uUGVyaW9kLCB0aGlzLndhaXRVbnRpbCk7XG4gICAgICAgICAgICB0aGlzLndhaXRVbnRpbCArPSB0aGlzLnBhY2U7XG4gICAgICAgICAgICBsZXQgaXRlbTtcbiAgICAgICAgICAgIGlmIChrZXkgJiYgdGhpcy5xdWV1ZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMucXVldWVba2V5XTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbS50aW1lcik7XG4gICAgICAgICAgICAgICAgaXRlbS5mbiA9IGZuO1xuICAgICAgICAgICAgICAgIGl0ZW0uYWRkZWQgPSBub3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkgfHwgYCR7bm93fS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCl9YDtcbiAgICAgICAgICAgICAgICBpdGVtID0geyBmbjogZm4sIGFkZGVkOiBub3csIHBhY2U6IHRoaXMsIGtleToga2V5IH07XG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZVtrZXldID0gaXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLndhaXRpbmcrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVJdGVtKGl0ZW0sIGNhbGxUaW1lIC0gbm93KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc29sdmVJdGVtKGl0ZW0sIHdhaXRUaW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlID0gKF9pdGVtKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gX2l0ZW0ua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX2l0ZW0ucGFjZS5xdWV1ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLndhaXRpbmctLTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgYmVsb3dDb25jdXJyZW50TGltaXQoX2l0ZW0ucGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWxEZWxheSA9IERhdGUubm93KCkgLSBfaXRlbS5hZGRlZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0geWllbGQgX2l0ZW0uZm4oYWN0dWFsRGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXRlbS50aW1lciA9IHNldFRpbWVvdXQoZXhlY3V0ZSwgd2FpdFRpbWUsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlBhY2UgPSBQYWNlO1xuZnVuY3Rpb24gYmVsb3dDb25jdXJyZW50TGltaXQocGFjZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZWxlYXNlID0+IHtcbiAgICAgICAgY29uc3Qgd2FpdExvb3AgPSAoKSA9PiBwYWNlLmlzQWxsb3dlZCgpID8gcmVsZWFzZSgpIDogc2V0VGltZW91dCh3YWl0TG9vcCwgMTApO1xuICAgICAgICB3YWl0TG9vcCgpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVUdGamFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDFCaFkybHVaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3p0QlFVbEJMQ3RDUVVFMlFqdEJRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1UwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBGQlV6VkVMRk5CUVdkQ0xFOUJRVThzUTBGQlF5eEZRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRlZPMGxCUXpWRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRiRVlzUTBGQlF6dEJRVVpFTERCQ1FVVkRPMEZCWjBORUxGTkJRV2RDTEV0QlFVc3NRMEZCUXl4RlFVRlRPMGxCUXpOQ0xFOUJRVThzUTBGQlNTeEpRVUZQTEVWQlFXRXNSVUZCUlR0UlFVTTNRaXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCYzBJc1JVRkJSU3hGUVVGRk8xbEJRekZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU03UVVGRFRpeERRVUZETzBGQlRrUXNjMEpCVFVNN1FVRnRRa1FzVFVGQllTeEpRVUZKTzBsQmFVTmlMRmxCUVZrc1JVRkJReXhKUVVGSkxFZEJRVU1zUjBGQlJ5eEZRVUZGTEdGQlFXRXNSMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3huUWtGQlowSXNSMEZCUXl4RFFVRkRMRVZCUVVNN1VVRXZRbkJFTEd0Q1FVRmhMRWRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmNrSXNVMEZCU1N4SFFVRmpMRU5CUVVNc1EwRkJRenRSUVVWd1FpeGpRVUZUTEVkQlFWTXNRMEZCUXl4RFFVRkRPMUZCUlhCQ0xGbEJRVThzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGY0VJc1dVRkJUeXhIUVVGWExFTkJRVU1zUTBGQlF6dFJRVVZ3UWl4VlFVRkxMRWRCUVhkQ0xFVkJRVVVzUTBGQlF6dFJRV05xUXl4eFFrRkJaMElzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZSZUVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eGhRVUZoTEVOQlFVTTdVVUZEYmtNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMR2RDUVVGblFpeERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRnVRazBzVTBGQlV5eExRVUZoTEU5QlFVOHNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRWE5DTTBZc1QwRkJUeXhEUVVGRExFVkJRVk1zU1VGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRk0wTXNaMEpCUVdkQ0xFTkJRVU1zWVVGQmIwSXNTVUZCVXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGYmtZc1QwRkJUeXhMUVVGbExFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZOVU1zVlVGQlZTeExRVUZaTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03U1VGUk4wTXNSMEZCUnl4RFFVRkRMRVZCUVdkQ0xFVkJRVVVzUjBGQlZ6czdXVUZEYmtNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVOcVF5eE5RVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMWxCUTNaRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRaUVVVMVFpeEpRVUZKTEVsQlFWTXNRMEZCUXp0WlFVTmtMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRM2hDTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTjJRaXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVONlFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRFlpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJRenRoUVVOd1FqdHBRa0ZCVFR0blFrRkRTQ3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03WjBKQlF6RkVMRWxCUVVrc1IwRkJSeXhGUVVGRExFVkJRVVVzUlVGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVY3NSVUZCUXl4SFFVRkhMRVZCUVVNc1EwRkJRenRuUWtGRE9VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdaMEpCUTNaQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTnNRanRaUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzFGQlEycEVMRU5CUVVNN1MwRkJRVHRKUVVWUExGZEJRVmNzUTBGQlF5eEpRVUZUTEVWQlFVVXNVVUZCWlR0UlFVTXhReXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRMjVETEUxQlFVMHNUMEZCVHl4SFFVRkhMRU5CUVU4c1MwRkJWU3hGUVVGRkxFVkJRVVU3WjBKQlFVY3NTVUZCU1R0dlFrRkRlRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJRenR2UWtGRGRFSXNUMEZCVHl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkROMElzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenR2UWtGRGNrSXNUVUZCVFN4dlFrRkJiMElzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRM1pETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03YjBKQlEzSkNMRTFCUVUwc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE8yOUNRVU16UXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN2IwSkJRM2hETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03YjBKQlEzSkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEYUVJN1owSkJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdiMEpCUTFBc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0dlFrRkRja0lzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVOaU8xbEJRVUVzUTBGQlF5eERRVUZCTEVOQlFVRTdXVUZIUml4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenREUVVOS08wRkJhRWRFTEc5Q1FXZEhRenRCUVVkRUxGTkJRVk1zYjBKQlFXOUNMRU5CUVVNc1NVRkJVenRKUVVOdVF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xRkJRM3BDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUVN4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE9VVXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkRaaXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5RTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuY29uc3QgbG9nID0gbmV3IGxvZ18xLkxvZygnUmVxdWVzdCcpO1xuY29uc3QgUGFjaW5nXzEgPSByZXF1aXJlKFwiLi9QYWNpbmdcIik7XG5jb25zdCBBdXRoRGlnZXN0XzEgPSByZXF1aXJlKFwiLi9BdXRoRGlnZXN0XCIpO1xuY29uc3QgQXV0aEJhc2ljXzEgPSByZXF1aXJlKFwiLi9BdXRoQmFzaWNcIik7XG5sb2cubWVzc2FnZUxlbmd0aCA9IDEyMDtcbmNsYXNzIFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZyA9IGxvZztcbiAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscyA9ICh1c2VyLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHVzZXIgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHsgdXNlcjogdXNlciwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB0aGlzLmF1dGhUb2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNldFBhY2UgPSAoeyBwYWNlID0gNTAsIG1heCA9IDEwLCBjb2xsZWN0aW9uUGVyaW9kID0gMTAwIH0gPSB7IHBhY2U6IHVuZGVmaW5lZCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhY2UgPSBwYWNlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBuZXcgUGFjaW5nXzEuUGFjZSh7IHBhY2U6IHBhY2UsIG1heENvbmN1cnJlbnQ6IG1heCwgY29sbGVjdGlvblBlcmlvZDogY29sbGVjdGlvblBlcmlvZCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWNvZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2FjaGVOYW1lID0gKG9wdGlvbnMpID0+IHRoaXMuY2FjaGUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBgJHt0aGlzLmNhY2hlfS8ke29wdGlvbnMucGF0aC5yZXBsYWNlKC9xPSguKj8pXFwvL2csICdxPSQxLScpLnJlcGxhY2UoL1xcPy9nLCAnJyl9YDtcbiAgICB9XG4gICAgZ2V0KHVybCwgeyB1c2VDYWNoZWQgPSB0cnVlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ0dFVCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1dCh1cmwsIHBvc3REYXRhLCB7IHVzZUNhY2hlZCA9IGZhbHNlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKHVybCwgJ1BVVCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzLCBwb3N0RGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwb3N0KHVybCwgcG9zdERhdGEsIHsgdXNlQ2FjaGVkID0gZmFsc2UsIGhlYWRlcnMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUE9TVCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlZFJlcXVlc3Qob3B0aW9ucywgdXNlQ2FjaGVkLCBoZWFkZXJzLCBwb3N0RGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwsIGRvY3VtZW50LlVSTCkgOiB1cmw7XG4gICAgfVxuICAgIGdldE9wdGlvbnModXJsLCBtZXRob2QpIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRVUkwodXJsKTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gJyc7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBwcm90b2NvbDogdXJsLnByb3RvY29sLFxuICAgICAgICAgICAgaG9zdDogdXJsLmhvc3QsXG4gICAgICAgICAgICBob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogdXJsLnBvcnQsXG4gICAgICAgICAgICBwYXRobmFtZTogcHJlZml4ICsgdXJsLnBhdGhuYW1lLFxuICAgICAgICAgICAgcGF0aDogcHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICB1cmw6IGAke3VybC5wcm90b2NvbH0vLyR7dXJsLmhvc3R9JHt1cmwucG9ydCA/ICc6JyArIHVybC5wb3J0IDogJyd9JHtwcmVmaXggKyB1cmwucGF0aG5hbWUgKyAodXJsLnNlYXJjaCB8fCAnJyl9YCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aFRva2VuID0gdGhpcy5hdXRoVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHRoaXMucmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlQ2FjaGVkLCBwb3N0RGF0YSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kZWNvZGUgJiYgcmVzdWx0LnJlc3BvbnNlLnR4dCAmJiBvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IHRoaXMuZGVjb2RlKHJlc3VsdC5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWFkQ2FjaGVkKGZuYW1lKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgd3JpdGVDYWNoZWQoZm5hbWUsIHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBmbmFtZSA9IHRoaXMuY2FjaGUgPyB0aGlzLmNhY2hlTmFtZShvcHRpb25zKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChmbmFtZSAmJiB1c2VDYWNoZWQgJiYgb3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgdGhpcy5yZWFkQ2FjaGVkKGZuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVxdWVzdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy5pbmZvKGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pICR7b3B0aW9ucy5tZXRob2R9LWluZyAke29wdGlvbnMudXJsfWApO1xuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSB0aGlzLnBhY2UuYWRkKCgpID0+IHRoaXMucmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSksIGAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZygoKSA9PiBgJHtvcHRpb25zLm1ldGhvZH0taW5nICR7b3B0aW9ucy51cmx9YCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHJlcXVlc3Q7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGAoJHt0aGlzLnBhY2UuaW5RdWV1ZSgpfSB8ICR7dGhpcy5wYWNlLmluUHJvZ3Jlc3MoKX0pIHJlY2VpdmVkICR7b3B0aW9ucy5tZXRob2R9ICR7b3B0aW9ucy51cmx9IGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoKCkgPT4gYHJlY2VpdmVkICR7b3B0aW9ucy5tZXRob2R9ICR7cmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzTWVzc2FnZX0gJHtvcHRpb25zLm1ldGhvZH0gJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZXNwb25zZS5yZXNwb25zZS5zdGF0dXNDb2RlIHx8IHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgICAgIGlmIChjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuYW1lICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLndyaXRlQ2FjaGVkKGZuYW1lLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHRoaXMuaXNzdWVSZXF1ZXN0KG9wdGlvbnMsIHBvc3REYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgYXV0aGVudGljYXRlID0gcmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1snd3d3LWF1dGhlbnRpY2F0ZSddO1xuICAgICAgICAgICAgICAgIGlmICghYXV0aGVudGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGUgPSBhdXRoZW50aWNhdGUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhlbnRpY2F0ZS5pbmRleE9mKCdEaWdlc3QnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aCA9IG5ldyBBdXRoRGlnZXN0XzEuQXV0aERpZ2VzdCh0aGlzLmNyZWRlbnRpYWxzLnVzZXIsIHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGF1dGhlbnRpY2F0ZS5pbmRleE9mKCdCYXNpYycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoID0gbmV3IEF1dGhCYXNpY18xLkF1dGhCYXNpYyh0aGlzLmNyZWRlbnRpYWxzLnVzZXIsIHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgYHVuaW1wbGVtZW50ZWQgYXV0aGVudGljYXRpb24gcmVxdWVzdCAke2F1dGhlbnRpY2F0ZX0gZm9yICcke29wdGlvbnMudXJsfSdgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF1dGgudGVzdEF1dGgob3B0aW9ucywgcmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYGF1dGhlbnRpY2F0aW9uIG1pc3Npbmc7IGNhbGwgJ3NldENyZWRlbnRpYWxzJyBiZWZvcmUgY2FsbGluZyAnZ2V0J2A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgZXJyb3IgcmVxdWVzdGluZyAke29wdGlvbnMudXJsfTogJHtlfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb25maXJtUmVxdWVzdChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnNUZXh0ID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ2NvbnRlbnQtdHlwZSc6ICcnIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzVGV4dC5zcGxpdCgnXFxyXFxuJykubWFwKGggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGt2ID0gaC5zcGxpdCgnOicpLm1hcChwID0+IHAudHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa3ZbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba3ZbMF1dID0ga3ZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHh0ID0gcmVxdWVzdC5pc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6IHR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IGAke3RoaXMuc3RhdHVzfSAke3RoaXMuc3RhdHVzVGV4dH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucmVzcG9uc2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSByZXF1ZXN0LmlzVGV4dHVhbFJlcXVlc3Qob3B0aW9ucy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKCgpID0+IGByZXF1ZXN0aW5nICR7b3B0aW9ucy5tZXRob2R9ICR7dGhpcy5sb2cuaW5zcGVjdChvcHRpb25zLCB7IGRlcHRoOiA0IH0pfWApO1xuICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy51cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goaCA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihoLCBvcHRpb25zLmhlYWRlcnNbaF0pKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IHR4dCA/ICd0ZXh0JyA6ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmxvYWQgPSBjb25maXJtUmVxdWVzdDtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQocG9zdERhdGEgPyBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGxldCB0eHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQvaHRtbCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ViVHlwZXMgPSBjb250ZW50VHlwZS5zcGxpdCgnLycpO1xuICAgICAgICBzd2l0Y2ggKHN1YlR5cGVzWzBdKSB7XG4gICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgdHh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzpcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnQnOiBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uJzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN1YlR5cGVzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwZGYnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbic6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQubXMtcG93ZXJwb2ludCc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQubXMtZXhjZWwnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2N0ZXQtc3RyZWFtJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5tcy1leGNlbC5zaGVldC5tYWNyb2VuYWJsZWQuMTInOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdGhpcy5sb2cuaW5mbyhgY2FjaGluZyAke2NvbnRlbnRUeXBlfSBhcyBiaW5hcnlgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aGlzLmxvZy53YXJuKGBjYWNoaW5nICcke2NvbnRlbnRUeXBlfScgYXMgYmluYXJ5YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR4dDtcbiAgICB9XG4gICAgaXNUZXh0dWFsUmVxdWVzdChwYXRoTmFtZSkge1xuICAgICAgICByZXR1cm4gWydqc29uJywgJ3R4dCcsICdodG1sJ10uc29tZShleHQgPT4gcGF0aE5hbWUuaW5kZXhPZihleHQpID49IDApO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5SZXF1ZXN0LmRlY29kZXJzID0ge1xuICAgIHN0cjJqc29uOiAoZGF0YSkgPT4geyB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfSxcbiAgICBodG1sMmpzb246IHVuZGVmaW5lZFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVNaWEYxWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPMEZCZDBOQkxDdENRVUZ4UXp0QlFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzVTBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCUTNaRkxIRkRRVUYzUXp0QlFVTjRReXcyUTBGQk5FTTdRVUZETlVNc01rTkJRVEpETzBGQlJ6TkRMRWRCUVVjc1EwRkJReXhoUVVGaExFZEJRVWNzUjBGQlJ5eERRVUZETzBGQk1rUjRRaXhOUVVGaExFOUJRVTg3U1VGQmNFSTdVVUZQWXl4UlFVRkhMRWRCUVZFc1IwRkJSeXhEUVVGRE8xRkJkVUpzUWl4dFFrRkJZeXhIUVVGSExFTkJRVU1zU1VGQldTeEZRVUZGTEZGQlFXZENMRVZCUVVVc1JVRkJSVHRaUVVOMlJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1MwRkJSeXhUUVVGVExFTkJRVUVzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVONFJpeERRVUZETEVOQlFVRTdVVUZIVFN4cFFrRkJXU3hIUVVGSExFTkJRVU1zUzBGQllTeEZRVUZGTEVWQlFVVXNRMEZEY0VNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZSYmtJc1dVRkJUeXhIUVVGSExFTkJRVU1zUlVGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1IwRkJReXhGUVVGRkxFVkJRVVVzWjBKQlFXZENMRWRCUVVNc1IwRkJSeXhMUVVGRkxFVkJRVU1zU1VGQlNTeEZRVUZOTEZOQlFWTXNSVUZCUXl4RlFVRkZMRVZCUVVVN1dVRkRMMFVzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRXRCUVVjc1UwRkJVeXhEUVVGQkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1lVRkJTU3hEUVVGRExFVkJRVU1zU1VGQlNTeEZRVUZETEVsQlFVa3NSVUZCUlN4aFFVRmhMRVZCUVVNc1IwRkJSeXhGUVVGRkxHZENRVUZuUWl4RlFVRkRMR2RDUVVGblFpeEZRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhTQ3hEUVVGRExFTkJRVUU3VVVGUlRTeFhRVUZOTEVkQlFWa3NVMEZCVXl4RFFVRkRPMUZCVXpWQ0xHTkJRVk1zUjBGQlJ5eERRVUZETEU5QlFXVXNSVUZCVXl4RlFVRkZMRU5CUXpGRExFbEJRVWtzUTBGQlF5eExRVUZMTEV0QlFVY3NVMEZCVXl4RFFVRkJMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFpRVU12UWl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlFUdEpRV2xQTTBZc1EwRkJRenRKUVhaT1owSXNSMEZCUnl4RFFVRkRMRWRCUVdNc1JVRkJSU3hGUVVGRExGTkJRVk1zUjBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4SFFVRkRMRVZCUVVVc1JVRkJReXhIUVVGRExFVkJRVVU3TzFsQlF6VkVMRTFCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8xbEJRelZETEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUXpWRUxFTkJRVU03UzBGQlFUdEpRVk5aTEVkQlFVY3NRMEZCUXl4SFFVRmpMRVZCUVVVc1VVRkJXU3hGUVVGRkxFVkJRVU1zVTBGQlV5eEhRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRWRCUVVNc1JVRkJSU3hGUVVGRExFZEJRVU1zUlVGQlJUczdXVUZETTBVc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRE5VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM1JGTEVOQlFVTTdTMEZCUVR0SlFWTlpMRWxCUVVrc1EwRkJReXhIUVVGakxFVkJRVVVzVVVGQldTeEZRVUZGTEVWQlFVTXNVMEZCVXl4SFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFZEJRVU1zUlVGQlJTeEZRVUZETEVkQlFVTXNSVUZCUlRzN1dVRkROVVVzVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZETjBNc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzUkZMRU5CUVVNN1MwRkJRVHRKUVVWVExFMUJRVTBzUTBGQlF5eEhRVUZqTzFGQlF6TkNMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlEzWkZMRU5CUVVNN1NVRkZVeXhWUVVGVkxFTkJRVU1zUjBGQll5eEZRVUZGTEUxQlFXRTdVVUZET1VNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRka0lzVFVGQlRTeE5RVUZOTEVkQlFUUkRMRVZCUVVVc1EwRkJRenRSUVVNelJDeE5RVUZOTEU5QlFVOHNSMEZCUnp0WlFVTmFMR3RDUVVGclFpeEZRVUZGTEV0QlFVczdXVUZEZWtJc1RVRkJUU3hGUVVGTkxFMUJRVTA3V1VGRGJFSXNVVUZCVVN4RlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUk8xbEJRM2hDTEVsQlFVa3NSVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTVHRaUVVOd1FpeFJRVUZSTEVWQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFN1dVRkRlRUlzU1VGQlNTeEZRVUZSTEVkQlFVY3NRMEZCUXl4SlFVRkpPMWxCUTNCQ0xGRkJRVkVzUlVGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFN1dVRkRha01zU1VGQlNTeEZRVUZSTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRkRVFzVDBGQlR5eEZRVUZWTEVWQlFVVTdXVUZEYmtJc1IwRkJSeXhGUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNTMEZCU3l4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVRXNRMEZCUXl4RFFVRkJMRWRCUVVjc1IwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTzFOQlEzWklMRU5CUVVNN1VVRkRSaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMU5CUVVVN1VVRkRia1VzVDBGQlR5eFBRVUZQTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVdGbExHTkJRV01zUTBGQlF5eFBRVUZsTEVWQlFVVXNVMEZCYVVJc1JVRkJSU3hQUVVGWExFVkJRVVVzVVVGQllUczdXVUZEZWtZc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdXVUZEZGtVc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVY3NTMEZCU3l4RlFVRkZPMmRDUVVNNVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVk1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRoUVVNelJEdFpRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMUZCUTJ4Q0xFTkJRVU03UzBGQlFUdEpRVlZsTEZWQlFWVXNRMEZCUXl4TFFVRlpPenRaUVVOdVF5eFBRVUZQTEZOQlFWTXNRMEZCUXp0UlFVTnlRaXhEUVVGRE8wdEJRVUU3U1VGRlpTeFhRVUZYTEVOQlFVTXNTMEZCV1N4RlFVRkZMRkZCUVdsQ096dFJRVU16UkN4RFFVRkRPMHRCUVVFN1NVRkZaU3hqUVVGakxFTkJRVU1zVDBGQlpTeEZRVUZGTEZOQlFXbENMRVZCUVVVc1VVRkJZVHM3V1VGRE5VVXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlFTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUXpsRUxFbEJRVWtzUzBGQlN5eEpRVUZKTEZOQlFWTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hMUVVGTExFdEJRVXNzUlVGQlJUdG5Ra0ZEYUVRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU0xUXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN2FVSkJRVVU3WVVGREwwTTdXVUZGUkN4SlFVRkpMRTlCUVRCQ0xFTkJRVU03V1VGREwwSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8yZENRVU5ZTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4TFFVRkxMRTlCUVU4c1EwRkJReXhOUVVGTkxGRkJRVkVzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJRek5ITEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRkRWM3YVVKQlFVMDdaMEpCUTBnc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8yRkJRemRETzFsQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJTeEZRVUZGTEVOQlFVRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hSUVVGUkxFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpORUxFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNUMEZCVHl4RFFVRkRPMWxCUXk5Q0xFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0blFrRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzWTBGQll5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlFVVTdXVUZEZWtrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRU5CUVVFc1dVRkJXU3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRmNrZ3NUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVsQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU03V1VGRGNFVXNTVUZCUnl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEhRVUZITEVWQlFVVTdaMEpCUXpGQ0xFbEJRVWtzUzBGQlN5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRXRCUVVzc1MwRkJTeXhGUVVGRk8yOUNRVU51UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMmxDUVVNelF6dGhRVU5LTzFsQlEwUXNUMEZCVHl4UlFVRlJMRU5CUVVNN1VVRkRjRUlzUTBGQlF6dExRVUZCTzBsQlJXVXNUMEZCVHl4RFFVRkRMRTlCUVdVc1JVRkJSU3hSUVVGaE96dFpRVU5zUkN4SlFVRkpPMmRDUVVOQkxFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdaMEpCUXpWRUxFbEJRVWtzV1VGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1owSkJRMnBGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN2IwSkJRMllzVDBGQlR5eFJRVUZSTEVOQlFVTTdhVUpCUTI1Q08zRkNRVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHR2UWtGRGNrSXNXVUZCV1N4SFFVRkhMRmxCUVZrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dHZRa0ZEYmtNc1NVRkJTU3hKUVVGVkxFTkJRVU03YjBKQlEyWXNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0M1FrRkRkRU1zU1VGQlNTeEhRVUZITEVsQlFVa3NkVUpCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGQ1FVTXpSVHQ1UWtGQlRTeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzNkQ1FVTTFReXhKUVVGSkxFZEJRVWNzU1VGQlNTeHhRa0ZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03Y1VKQlF6RkZPM2xDUVVGTk8zZENRVU5JTEUxQlFVMHNkME5CUVhkRExGbEJRVmtzVTBGQlV5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2NVSkJRM0pHTzI5Q1FVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzI5Q1FVTjZSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM0JETzNGQ1FVRk5PMjlDUVVOSUxFMUJRVTBzYjBWQlFXOUZMRU5CUVVNN2FVSkJRemxGTzJGQlEwbzdXVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRuUWtGRFVDeE5RVUZOTEc5Q1FVRnZRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRPMkZCUTJwRU8xRkJRMHdzUTBGQlF6dExRVUZCTzBsQlJXVXNXVUZCV1N4RFFVRkRMRTlCUVdVc1JVRkJSU3hSUVVGaE96dFpRVU4yUkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGNrSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVFJDTEVWQlFVVXNUVUZCZVVJc1JVRkJSU3hGUVVGRk8yZENRVUZITEVsQlFVazdiMEpCUTJ4R0xGTkJRVk1zWTBGQll5eERRVUZETEVOQlFVczdkMEpCUTNwQ0xFbEJRVWtzUTBGQlF5eEZRVUZGT3pSQ1FVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdlVUpCUVVVN2QwSkJRM2hDTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWRCUVVjc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRPM2RDUVVOb1JDeE5RVUZOTEU5QlFVOHNSMEZCUnl4RlFVRkRMR05CUVdNc1JVRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF6dDNRa0ZEY0VNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3TkVKQlF6bENMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03TkVKQlF6TkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlR0blEwRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3paQ1FVRkZPM2RDUVVOcVJDeERRVUZETEVOQlFVTXNRMEZCUVR0M1FrRkZSaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRPM2RDUVVOMFF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN2QwSkJSMnhFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU03ZDBKQlF6TkNMRTFCUVUwc1VVRkJVU3hIUVVGWk96UkNRVU4wUWl4SlFVRkpMRVZCUVdkQ0xFbEJRVWs3TkVKQlEzaENMRkZCUVZFc1JVRkJSVHRuUTBGRFRpeEhRVUZITEVWQlFXRXNSMEZCUnp0blEwRkRia0lzVDBGQlR5eEZRVUZUTEU5QlFVODdaME5CUTNaQ0xFMUJRVTBzUlVGQlZTeFBRVUZQTEVOQlFVTXNUVUZCVFR0blEwRkRPVUlzVFVGQlRTeEZRVUZWTEVsQlFVa3NRMEZCUXl4TlFVRk5PMmREUVVNelFpeFZRVUZWTEVWQlFVMHNTVUZCU1N4RFFVRkRMRTFCUVUwN1owTkJRek5DTEdGQlFXRXNSVUZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0blEwRkRia1FzUjBGQlJ5eEZRVUZoTEVsQlFVa3NRMEZCUXl4WFFVRlhPelpDUVVOdVF6dDVRa0ZEU2l4RFFVRkRPM2RDUVVOR0xFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkRkRUlzUTBGQlF6dHZRa0ZEUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxHTkJRV01zUlVGQlJTeERRVUZETzI5Q1FVTnFReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMjlDUVVOMlJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeGpRVUZqTEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVNc1MwRkJTeXhGUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMjlDUVVNelJpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRE5VTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZEZGtZc1IwRkJSeXhEUVVGRExGbEJRVmtzUjBGQlJ5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETzI5Q1FVTXZReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEdOQlFXTXNRMEZCUXp0dlFrRkROVUlzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVFc1EwRkJReXhEUVVGQkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGQkxGTkJRVk1zUTBGQlF5eERRVUZETzJsQ1FVTjZSRHRuUWtGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0dlFrRkRVQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTJJN1dVRkJRU3hEUVVGRExFTkJRVU1zUTBGQlFUdFJRVU5RTEVOQlFVTTdTMEZCUVR0SlFVVlRMR2RDUVVGblFpeERRVUZETEZkQlFXdENPMUZCUTNwRExFbEJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXp0UlFVTm9RaXhKUVVGSkxGZEJRVmNzUzBGQlJ5eFRRVUZUTEVWQlFVVTdXVUZCUlN4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRE8xTkJRVVU3WVVGRGRFUTdXVUZCUlN4WFFVRlhMRWRCUVVjc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVGRk8xRkJRMnBFTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZUVNc1VVRkJVU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdXVUZEYWtJc1MwRkJTeXhGUVVGRkxFTkJRVU03V1VGRFVpeExRVUZMTEUxQlFVMDdaMEpCUVZNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZCUXl4TlFVRk5PMWxCUTNSRExFdEJRVXNzVDBGQlR5eERRVUZETzFsQlEySXNTMEZCU3l4UFFVRlBMRU5CUVVNN1dVRkRZaXhMUVVGTExFMUJRVTBzUTBGQlF5eERRVUZSTEUxQlFVMDdXVUZETVVJc1MwRkJTeXhoUVVGaE8yZENRVUZGTEZGQlFVOHNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8yOUNRVU53UXl4TFFVRkxMRTFCUVUwN2QwSkJRVXNzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXp0M1FrRkJReXhOUVVGTk8yOUNRVU5zUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGTExFMUJRVTA3YjBKQlEzUkNMRXRCUVVzc0swUkJRU3RFTEVOQlFVTXNRMEZCUXl4TlFVRk5PMjlDUVVNMVJTeExRVUZMTEhWRVFVRjFSQ3hEUVVGRExFTkJRVU1zVFVGQlRUdHZRa0ZEY0VVc1MwRkJTeXh0UWtGQmJVSXNRMEZCUXl4RFFVRkRMRTFCUVUwN2IwSkJRMmhETEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNc1RVRkJUVHR2UWtGRE0wSXNTMEZCU3l4alFVRmpMRU5CUVVNc1EwRkJReXhOUVVGTk8yOUNRVU16UWl4TFFVRkxMRzlEUVVGdlF5eERRVUZETEVOQlFVTXNUVUZCVFR0dlFrRkRha1FzVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eFhRVUZYTEZsQlFWa3NRMEZCUXl4RFFVRkRPMmxDUVVNNVJEdG5Ra0ZEUkN4TlFVRk5PMWxCUTA0c1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hYUVVGWExHRkJRV0VzUTBGQlF5eERRVUZETzFOQlEyaEZPMUZCUTBRc1QwRkJUeXhIUVVGSExFTkJRVU03U1VGRFppeERRVUZETzBsQlJWTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlpUdFJRVU4wUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6TkZMRU5CUVVNN08wRkJhbE5NTERCQ1FXdFRRenRCUVdwVGFVSXNaMEpCUVZFc1IwRkJSenRKUVVOeVFpeFJRVUZSTEVWQlFVY3NRMEZCUXl4SlFVRlhMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWs3VVVGQlF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3UzBGQlF6dEpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMUZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVUU3UzBGQlF5eERRVUZCTEVOQlFVTTdTVUZEYkVZc1UwRkJVeXhGUVVGM1FpeFRRVUZUTzBOQlF6ZERMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9QYWNpbmdcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vUmVxdWVzdFwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9DaGVja3N1bVwiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9EYXRlXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2xvZ1wiKSk7XG5fX2V4cG9ydChyZXF1aXJlKFwiLi9BcnJheVwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTdzRRa0ZCTkVJN1FVRkROVUlzSzBKQlFUWkNPMEZCUXpkQ0xHZERRVUU0UWp0QlFVTTVRaXcwUWtGQk1FSTdRVUZETVVJc01rSkJRWGxDTzBGQlEzcENMRFpDUVVFeVFpSjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IERhdGVfMSA9IHJlcXVpcmUoXCIuL0RhdGVcIik7XG5jb25zdCBDT0xPUiA9IHtcbiAgICBjbGVhcjogJ2NvbG9yOiMwMDA7IGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDsgZm9udC13ZWlnaHQ6bm9ybWFsOycsXG4gICAgYm9sZDogJ2ZvbnQtd2VpZ2h0OmJvbGQ7JyxcbiAgICBkaW06ICcnLFxuICAgIHVuZGVyc2NvcmU6ICcnLFxuICAgIGJsaW5rOiAnJyxcbiAgICByZXZlcnNlOiAnJyxcbiAgICBoaWRkZW46ICcnLFxuICAgIGJsYWNrOiAnY29sb3I6IzAwMDsnLFxuICAgIHJlZDogJ2NvbG9yOiNmMDA7JyxcbiAgICBncmVlbjogJ2NvbG9yOiMwZjA7JyxcbiAgICB5ZWxsb3c6ICdjb2xvcjojZmYwOycsXG4gICAgYmx1ZTogJ2NvbG9yOiMwMGY7JyxcbiAgICBtYWdlbnRhOiAnY29sb3I6I2YwZjsnLFxuICAgIGN5YW46ICdjb2xvcjojMGZmOycsXG4gICAgd2hpdGU6ICdjb2xvcjojZmZmOycsXG4gICAgZGFya3JlZDogJ2NvbG9yOiM4MDA7JyxcbiAgICBkYXJrZ3JlZW46ICdjb2xvcjojMDgwOycsXG4gICAgZGFya3llbGxvdzogJ2NvbG9yOiM4ODA7JyxcbiAgICBkYXJrYmx1ZTogJ2NvbG9yOiMwMDg7JyxcbiAgICBkYXJrbWFnZW50YTogJ2NvbG9yOiM4MDg7JyxcbiAgICBkYXJrY3lhbjogJ2NvbG9yOiMwODg7JyxcbiAgICBncmF5OiAnY29sb3I6Izg4ODsnLFxuICAgIGJnQmxhY2s6ICdiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7JyxcbiAgICBiZ1JlZDogJ2JhY2tncm91bmQtY29sb3I6I2YwMDsnLFxuICAgIGJnR3JlZW46ICdiYWNrZ3JvdW5kLWNvbG9yOiMwZjA7JyxcbiAgICBiZ1llbGxvdzogJ2JhY2tncm91bmQtY29sb3I6I2ZmMDsnLFxuICAgIGJnQmx1ZTogJ2JhY2tncm91bmQtY29sb3I6IzAwZjsnLFxuICAgIGJnTWFnZW50YTogJ2JhY2tncm91bmQtY29sb3I6I2YwZjsnLFxuICAgIGJnQ3lhbjogJ2JhY2tncm91bmQtY29sb3I6IzBmZjsnLFxuICAgIGJnV2hpdGU6ICdiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7J1xufTtcbmNsYXNzIExvZyB7XG4gICAgY29uc3RydWN0b3IocHJlZml4KSB7XG4gICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gJyc7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoID0gLTE7XG4gICAgICAgIHRoaXMuY29sb3JzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIHNldCBtZXNzYWdlTGVuZ3RoKG1heCkgeyB0aGlzLm1heExlbmd0aCA9IG1heDsgfVxuICAgIGdldCBtZXNzYWdlTGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5tYXhMZW5ndGg7IH1cbiAgICBsZXZlbChuZXdMZXZlbFN5bSwgc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgbGV0IG5ld0xldmVsID0gTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0gfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBsZXQgb2xkTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKG5ld0xldmVsU3ltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0xldmVsID0gb2xkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3TGV2ZWxTeW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0pIHtcbiAgICAgICAgICAgIGlmIChzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgIExvZy5nbG9iYWxMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbXNnID0gYG5ldyAke3NldEdsb2JhbExldmVsID8gJ2dsb2JhbCcgOiB0aGlzLnJlcG9ydFByZWZpeH0gbG9nIGxldmVsICR7bmV3TGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSAod2FzICR7b2xkTGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSlgO1xuICAgICAgICAgICAgKG5ld0xldmVsLnN5bSA9PT0gb2xkTGV2ZWwuc3ltKSA/IHRoaXMuZGVidWcobXNnKSA6IHRoaXMuaW5mbyhtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgdW5rb3duIGxldmVsICR7bmV3TGV2ZWxTeW19OyBsb2cgbGV2ZWwgcmVtYWlucyAke29sZExldmVsLnN5bX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGV2ZWwuc3ltO1xuICAgIH1cbiAgICBkZWJ1Zyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5ERUJVRywgbXNnLCB7IGNvbG9yOiBbJ2dyYXknXSB9KTsgfVxuICAgIHRyYW5zaWVudChtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10sIGxmOiAnXFxyJyB9KTsgfVxuICAgIHByb2dyZXNzKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrYmx1ZSddIH0pOyB9XG4gICAgaW5mbyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10gfSk7IH1cbiAgICB3YXJuKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLldBUk4sIG1zZywgeyBjb2xvcjogWydkYXJreWVsbG93JywgJ2JvbGQnXSB9KTsgfVxuICAgIGVycm9yKG1zZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IFsnZGFya3JlZCcsICdib2xkJ107XG4gICAgICAgIGlmIChtc2cubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cubWVzc2FnZSwgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIG1zZy5zdGFjaywgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICByZXR1cm4gbXNnLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2csIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG91dChsdmwsIG1zZywgb3B0aW9ucykge1xuICAgICAgICBsZXQgZGVzYyA9IExvZy5sZXZlbHNbbHZsXTtcbiAgICAgICAgY29uc3QgZmlsdGVyTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKGRlc2MuaW1wb3J0YW5jZSA+PSBmaWx0ZXJMZXZlbC5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICBsZXQgbGluZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIG1zZykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGxpbmUgPSB0aGlzLmluc3BlY3QobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBEYXRlXzEuZGF0ZShMb2cuZGF0ZUZvcm1hdCk7XG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiB0aGlzLm1heExlbmd0aCAmJiB0aGlzLm1heExlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gYCR7bGluZS5zbGljZSgwLCB0aGlzLm1heExlbmd0aCAvIDIgLSAyKX0uLi4ke2xpbmUuc2xpY2UoLXRoaXMubWF4TGVuZ3RoIC8gMiArIDIpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLnN0YWNrKSB7XG4gICAgICAgICAgICAgICAgbGluZSA9IGAke2xpbmV9XFxuJHttc2cuc3RhY2t9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGAke2RhdGVTdHJ9ICR7dGhpcy5yZXBvcnRQcmVmaXh9ICR7ZGVzYy5kZXNjfWA7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChvcHRpb25zLmNvbG9yLCBoZWFkZXIsIGxpbmUpO1xuICAgICAgICAgICAgcmV0dXJuIGxpbmUgKyAob3B0aW9ucy5sZiB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgb3V0cHV0KGNvbG9yLCBoZWFkZXIsIGxpbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjJHtoZWFkZXJ9JWMgJHtsaW5lfWAsIGNvbG9yLm1hcChjID0+IENPTE9SW2NdKS5qb2luKCcgJyksIENPTE9SWydjbGVhciddKTtcbiAgICB9XG4gICAgZm9ybWF0KGZtdFN0cikge1xuICAgICAgICBpZiAoZm10U3RyID09PSBudWxsKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IExvZy5kZWZEYXRlRm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZtdFN0cikge1xuICAgICAgICAgICAgTG9nLmRhdGVGb3JtYXQgPSBmbXRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExvZy5kYXRlRm9ybWF0O1xuICAgIH1cbiAgICBwcmVmaXgocHJmKSB7XG4gICAgICAgIGlmIChwcmYpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gcHJmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydFByZWZpeDtcbiAgICB9XG4gICAgY29uZmlnKGNmZykge1xuICAgICAgICBpZiAoY2ZnLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdChjZmcuZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwoY2ZnLmxldmVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ZnLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9ycyA9IGNmZy5jb2xvcnM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5zcGVjdChtc2csIHsgZGVwdGggPSAtMSwgaW5kZW50ID0gJyAgICcsIGNvbG9ycyA9IExvZy5JTkRFTlRfQ09MT1JTIH0gPSB7IGRlcHRoOiAwLCBpbmRlbnQ6ICcgICAnLCBjb2xvcnM6IExvZy5JTkRFTlRfQ09MT1JTIH0pIHtcbiAgICAgICAgZnVuY3Rpb24gX2luc3BlY3QobXNnLCBkZXB0aCwgbGV2ZWwsIGN1cnJJbmRlbnQpIHtcbiAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJyR7bXNnfSdgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG1zZy5sZW5ndGggPT09IHVuZGVmaW5lZCkgPyAney4uLn0nIDogJ1suLi5dJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFske21zZy5tYXAoKGUpID0+IChlID09PSB1bmRlZmluZWQpID8gJycgOiBfaW5zcGVjdChlLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFtwcmVmaXgsIHBvc3RmaXgsIGxmLCBwb3N0SW5kZW50XSA9IGxvZy5nZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQsIGNvbG9ycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGB7JHtsZn1gICsgT2JqZWN0LmtleXMobXNnKS5tYXAoayA9PiBgJHtwcmVmaXh9JHtrfSR7cG9zdGZpeH06ICR7X2luc3BlY3QobXNnW2tdLCBkZXB0aCAtIDEsIGxldmVsICsgMSwgY3VyckluZGVudCArIGluZGVudCl9YCkuam9pbihgLCR7bGZ9YCkgKyBgJHtsZn0ke3Bvc3RJbmRlbnR9fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXNnLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9nID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF9pbnNwZWN0KG1zZywgKGRlcHRoICE9PSB1bmRlZmluZWQgJiYgZGVwdGggIT09IG51bGwgJiYgZGVwdGggPj0gMCkgPyBkZXB0aCA6IDk5OSwgMCwgJycpO1xuICAgIH1cbiAgICBnZXRQcmVQb3N0Zml4KGluZGVudCwgbGV2ZWwsIGN1cnJJbmRlbnQsIGNvbG9ycykge1xuICAgICAgICBsZXQgY3N0YXJ0ID0gJycsIGNzdG9wID0gJycsIGxmID0gJ1xcbic7XG4gICAgICAgIGlmIChjb2xvcnMpIHtcbiAgICAgICAgICAgIGluZGVudCA9IGluZGVudC5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcbiAgICAgICAgICAgIGN1cnJJbmRlbnQgPSBjdXJySW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUltjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXV0gfHwgY29sb3JzW2xldmVsICUgY29sb3JzLmxlbmd0aF07XG4gICAgICAgICAgICBjc3RhcnQgPSBgPGI+PHNwYW4gc3R5bGU9JyR7Y29sb3J9Jz5gO1xuICAgICAgICAgICAgY3N0b3AgPSBgPC9zcGFuPjwvYj5gO1xuICAgICAgICAgICAgbGYgPSAnPGJyPic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtgJHtjdXJySW5kZW50fSR7aW5kZW50fSR7Y3N0YXJ0fWAsIGAke2NzdG9wfWAsIGNvbG9ycyA/ICc8YnI+JyA6ICdcXG4nLCBjdXJySW5kZW50XTtcbiAgICB9XG59XG5leHBvcnRzLkxvZyA9IExvZztcbkxvZy5JTkRFTlRfQ09MT1JTID0gWydkYXJrYmx1ZScsICdkYXJrZ3JlZW4nLCAnZGFya3JlZCcsICdkYXJrY3lhbicsICdkYXJreWVsbG93JywgJ2RhcmttYWdlbnRhJ107XG5Mb2cuZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbkxvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG5Mb2cuREVCVUcgPSAnREVCVUcnO1xuTG9nLklORk8gPSAnSU5GTyc7XG5Mb2cuV0FSTiA9ICdXQVJOJztcbkxvZy5FUlJPUiA9ICdFUlJPUic7XG5Mb2cubGV2ZWxzID0ge1xuICAgIFtMb2cuREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogTG9nLkRFQlVHLCBkZXNjOiAnREVCVUcnIH0sXG4gICAgW0xvZy5JTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IExvZy5JTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbTG9nLldBUk5dOiB7IGltcG9ydGFuY2U6IDIsIHN5bTogTG9nLldBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtMb2cuRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogTG9nLkVSUk9SLCBkZXNjOiAnRVJST1InIH1cbn07XG5Mb2cubG9nID0gbmV3IExvZygnJyk7XG5Mb2cuZ2xvYmFsTGV2ZWwgPSBMb2cubGV2ZWxzW0xvZy5JTkZPXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJ4dlp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVc5R1FTeHBRMEZCT0VJN1FVRkpPVUlzVFVGQlRTeExRVUZMTEVkQlFVYzdTVUZEVml4TFFVRkxMRVZCUVU4c01rUkJRVEpFTzBsQlJYWkZMRWxCUVVrc1JVRkJVU3h0UWtGQmJVSTdTVUZETDBJc1IwRkJSeXhGUVVGVExFVkJRVVU3U1VGRFpDeFZRVUZWTEVWQlFVVXNSVUZCUlR0SlFVTmtMRXRCUVVzc1JVRkJUeXhGUVVGRk8wbEJRMlFzVDBGQlR5eEZRVUZMTEVWQlFVVTdTVUZEWkN4TlFVRk5MRVZCUVUwc1JVRkJSVHRKUVVWa0xFdEJRVXNzUlVGQlR5eGhRVUZoTzBsQlEzcENMRWRCUVVjc1JVRkJVeXhoUVVGaE8wbEJRM3BDTEV0QlFVc3NSVUZCVHl4aFFVRmhPMGxCUTNwQ0xFMUJRVTBzUlVGQlRTeGhRVUZoTzBsQlEzcENMRWxCUVVrc1JVRkJVU3hoUVVGaE8wbEJRM3BDTEU5QlFVOHNSVUZCU3l4aFFVRmhPMGxCUTNwQ0xFbEJRVWtzUlVGQlVTeGhRVUZoTzBsQlEzcENMRXRCUVVzc1JVRkJUeXhoUVVGaE8wbEJSWHBDTEU5QlFVOHNSVUZCU3l4aFFVRmhPMGxCUTNwQ0xGTkJRVk1zUlVGQlJ5eGhRVUZoTzBsQlEzcENMRlZCUVZVc1JVRkJSU3hoUVVGaE8wbEJRM3BDTEZGQlFWRXNSVUZCU1N4aFFVRmhPMGxCUTNwQ0xGZEJRVmNzUlVGQlF5eGhRVUZoTzBsQlEzcENMRkZCUVZFc1JVRkJTU3hoUVVGaE8wbEJRM3BDTEVsQlFVa3NSVUZCVVN4aFFVRmhPMGxCUlhwQ0xFOUJRVThzUlVGQlN5eDNRa0ZCZDBJN1NVRkRjRU1zUzBGQlN5eEZRVUZQTEhkQ1FVRjNRanRKUVVOd1F5eFBRVUZQTEVWQlFVc3NkMEpCUVhkQ08wbEJRM0JETEZGQlFWRXNSVUZCU1N4M1FrRkJkMEk3U1VGRGNFTXNUVUZCVFN4RlFVRk5MSGRDUVVGM1FqdEpRVU53UXl4VFFVRlRMRVZCUVVjc2QwSkJRWGRDTzBsQlEzQkRMRTFCUVUwc1JVRkJUU3gzUWtGQmQwSTdTVUZEY0VNc1QwRkJUeXhGUVVGTExIZENRVUYzUWp0RFFVTjJReXhEUVVGRE8wRkJaVVlzVFVGQllTeEhRVUZITzBsQmNVTmFMRmxCUVZrc1RVRkJZVHRSUVV4bUxHZENRVUZYTEVkQlFXZENMRk5CUVZNc1EwRkJRenRSUVVOeVF5eHBRa0ZCV1N4SFFVRkpMRVZCUVVVc1EwRkJRenRSUVVOdVFpeGpRVUZUTEVkQlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRia0lzVjBGQlRTeEhRVUZWTEVsQlFVa3NRMEZCUXp0UlFVVkdMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETzBsQlFVTXNRMEZCUXp0SlFWRXhSQ3hKUVVGWExHRkJRV0VzUTBGQlF5eEhRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJ6bEVMRWxCUVZjc1lVRkJZU3hMUVVGTExFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRnRRamxETEV0QlFVc3NRMEZCUXl4WFFVRnRRaXhGUVVGRkxHTkJRWFZDTzFGQlEzSkVMRWxCUVVrc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU14UkN4SlFVRkpMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRia1FzU1VGQlNTeFhRVUZYTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUXpOQ0xGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdVMEZEZGtJN1lVRkJUU3hKUVVGSkxGZEJRVmNzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdVMEZEYUVNN1lVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVN1dVRkRhRU1zU1VGQlNTeGpRVUZqTEVWQlFVVTdaMEpCUVVVc1IwRkJSeXhEUVVGRExGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdZVUZCUlR0cFFrRkRMMEk3WjBKQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGQlJUdFpRVU53UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExHTkJRV01zUTBGQlFTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeGpRVUZqTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxGTkJRVk1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRMmhLTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEY2tVN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xGZEJRVmNzZFVKQlFYVkNMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEyaEdPMUZCUTBRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlEzaENMRU5CUVVNN1NVRlRUU3hMUVVGTExFTkJRVU1zUjBGQlR5eEpRVUZYTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRlRMMFVzVTBGQlV5eERRVUZETEVkQlFVOHNTVUZCVnl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZUYUVjc1VVRkJVU3hEUVVGRExFZEJRVThzU1VGQlZ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCWVhKR0xFbEJRVWtzUTBGQlF5eEhRVUZQTEVsQlFWY3NUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZOc1JpeEpRVUZKTEVOQlFVTXNSMEZCVHl4SlFVRlhMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlZUTkdMRXRCUVVzc1EwRkJReXhIUVVGUE8xRkJRMmhDTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlEyeERMRWxCUVVrc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5pTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYmtRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOcVJDeFBRVUZQTEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1UwRkRkRUk3WVVGQlRUdFpRVU5JTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzSkVPMGxCUTB3c1EwRkJRenRKUVdGVExFZEJRVWNzUTBGQlF5eEhRVUZWTEVWQlFVVXNSMEZCVHl4RlFVRkZMRTlCUVZjN1VVRkRNVU1zU1VGQlNTeEpRVUZKTEVkQlFXRXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU55UXl4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRlRVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRmRCUVZjc1EwRkJReXhWUVVGVkxFVkJRVVU3V1VGRE0wTXNTVUZCU1N4SlFVRkpMRU5CUVVNN1dVRkRWQ3hSUVVGUExFOUJRVThzUjBGQlJ5eEZRVUZGTzJkQ1FVTm1MRXRCUVVzc1ZVRkJWVHR2UWtGQlJTeEpRVUZKTEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJRVU1zVFVGQlRUdG5Ra0ZEY2tNc1MwRkJTeXhSUVVGUk8yOUNRVUZKTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNN2IwSkJRVU1zVFVGQlRUdG5Ra0ZEYmtNc1MwRkJTeXhSUVVGUkxFTkJRVU03WjBKQlEyUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRja003V1VGRFJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4WFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFsQlEzSkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVU1zUTBGQlF5eEZRVUZGTzJkQ1FVTnNSQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUVR0aFFVTnlSanRaUVVORUxFbEJRVWtzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkJSU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yRkJRVVU3V1VGRGJFUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExFbEJRVWtzU1VGQlNTeERRVUZETEZsQlFWa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRE9VUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONlF5eFBRVUZQTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFbEJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdVMEZEYkVNN1VVRkRSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dEpRVU55UWl4RFFVRkRPMGxCU1ZNc1RVRkJUU3hEUVVGRExFdEJRV01zUlVGQlJTeE5RVUZoTEVWQlFVVXNTVUZCVnp0UlFVTjJSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NUVUZCVFN4TlFVRk5MRWxCUVVrc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROVVlzUTBGQlF6dEpRVmxOTEUxQlFVMHNRMEZCUXl4TlFVRmpPMUZCUTNoQ0xFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVRkZMRWRCUVVjc1EwRkJReXhWUVVGVkxFZEJRVWNzUjBGQlJ5eERRVUZETEdGQlFXRXNRMEZCUXp0VFFVRkZPMkZCUTNaRUxFbEJRVWtzVFVGQlRTeEZRVUZOTzFsQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU03VTBGQlJUdFJRVU5xUkN4UFFVRlBMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU03U1VGRE1VSXNRMEZCUXp0SlFVOU5MRTFCUVUwc1EwRkJReXhIUVVGWE8xRkJRM0pDTEVsQlFVa3NSMEZCUnl4RlFVRkZPMWxCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEhRVUZITEVOQlFVTTdVMEZCUlR0UlFVTnlReXhQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTTdTVUZETjBJc1EwRkJRenRKUVZWTkxFMUJRVTBzUTBGQlF5eEhRVUZ4UkR0UlFVTXZSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEV0QlFVY3NVMEZCVXl4RlFVRkZPMWxCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1UwRkJSVHRSUVVONFJDeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRXRCUVVjc1UwRkJVeXhGUVVGSE8xbEJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGQlJUdFJRVU4wUkN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFdEJRVWNzVTBGQlV5eEZRVUZGTzFsQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETzFOQlFVVTdTVUZETjBRc1EwRkJRenRKUVdsQ1RTeFBRVUZQTEVOQlFVTXNSMEZCVHl4RlFVRkZMRVZCUVVNc1MwRkJTeXhIUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNSMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hIUVVGRExFZEJRVWNzUTBGQlF5eGhRVUZoTEVWQlFVTXNSMEZCUXl4RlFVRkRMRXRCUVVzc1JVRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVNc1IwRkJSeXhEUVVGRExHRkJRV0VzUlVGQlF6dFJRVU40U0N4VFFVRlRMRkZCUVZFc1EwRkJReXhIUVVGUExFVkJRVVVzUzBGQldTeEZRVUZGTEV0QlFWa3NSVUZCUlN4VlFVRnBRanRaUVVOd1JTeEpRVUZKTEVkQlFVY3NTMEZCU3l4SlFVRkpMRVZCUVdkQ08yZENRVUZGTEU5QlFVOHNUVUZCVFN4RFFVRkRPMkZCUVVVN1dVRkRiRVFzU1VGQlNTeEhRVUZITEV0QlFVc3NVMEZCVXl4RlFVRlhPMmRDUVVGRkxFOUJRVThzVjBGQlZ5eERRVUZETzJGQlFVVTdXVUZEZGtRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFZRVUZWTEVWQlFVYzdaMEpCUVVVc1QwRkJUeXhWUVVGVkxFTkJRVU03WVVGQlJUdFpRVU4wUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlN6dG5Ra0ZCUlN4UFFVRlBMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU03WVVGQlJUdFpRVU4wUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlN6dG5Ra0ZETlVJc1NVRkJTU3hMUVVGTExFZEJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTlVMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeExRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0cFFrRkRkRVE3WjBKQlEwUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZEZGtJc1QwRkJUeXhKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkxMRVZCUVVNc1JVRkJSU3hEUVVGQkxFTkJRVU1zUTBGQlF5eExRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJRU3hGUVVGRkxFTkJRVUVzUTBGQlF5eERRVUZCTEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN2FVSkJRek5ITzJkQ1FVTkVMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4VlFVRlZMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTXZSaXhQUVVGUExFbEJRVWtzUlVGQlJTeEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVY3NUMEZCVHl4TFFVTXZSQ3hSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4VlFVRlZMRWRCUVVNc1RVRkJUU3hEUVVONFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRE8yRkJRemxETzFsQlEwUXNUMEZCVHl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03VVVGRE1VSXNRMEZCUXp0UlFVTkVMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVVZxUWl4UFFVRlBMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eExRVUZMTEV0QlFVY3NVMEZCVXl4SlFVRkpMRXRCUVVzc1MwRkJSeXhKUVVGSkxFbEJRVWtzUzBGQlN5eEpRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGREwwWXNRMEZCUXp0SlFVVlRMR0ZCUVdFc1EwRkJReXhOUVVGaExFVkJRVVVzUzBGQldTeEZRVUZGTEZWQlFXbENMRVZCUVVVc1RVRkJaVHRSUVVOdVJpeEpRVUZKTEUxQlFVMHNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhIUVVGSExFVkJRVVVzUlVGQlJTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNaRExFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlExSXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUTNoRExGVkJRVlVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVVZvUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU53Uml4TlFVRk5MRWRCUVVrc2JVSkJRVzFDTEV0QlFVc3NTVUZCU1N4RFFVRkRPMWxCUTNaRExFdEJRVXNzUjBGQlN5eGhRVUZoTEVOQlFVTTdXVUZEZUVJc1JVRkJSU3hIUVVGUkxFMUJRVTBzUTBGQlF6dFRRVU53UWp0UlFVTkVMRTlCUVU4c1EwRkJReXhIUVVGSExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RlFVRkZMRVZCUVVVc1IwRkJSeXhMUVVGTExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMGxCUXpsR0xFTkJRVU03TzBGQk4xSk1MR3RDUVRoU1F6dEJRVGRTYjBJc2FVSkJRV0VzUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4WFFVRlhMRVZCUVVVc1UwRkJVeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFpRVUZaTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkZPVVlzYVVKQlFXRXNSMEZCUnl3NFFrRkJPRUlzUTBGQlF6dEJRVU12UXl4alFVRlZMRWRCUVUwc1IwRkJSeXhEUVVGRExHRkJRV0VzUTBGQlF6dEJRVWR5UXl4VFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJSMmhDTEZGQlFVa3NSMEZCU3l4TlFVRk5MRU5CUVVNN1FVRkhhRUlzVVVGQlNTeEhRVUZMTEUxQlFVMHNRMEZCUXp0QlFVZG9RaXhUUVVGTExFZEJRVWtzVDBGQlR5eERRVUZETzBGQlIyUXNWVUZCVFN4SFFVRkhPMGxCUTNSQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkxMRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBsQlF6bEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZOTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUnl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRE8wbEJRemRFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJ5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkRPMGxCUXpkRUxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkxMRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBOQlEycEZMRU5CUVVNN1FVRkhXU3hQUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkhaaXhsUVVGWExFZEJRV0VzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zcmMvaHRtbDJqc29uJyk7XG4iLCIvKlxyXG4gKiBIVE1MNSBQYXJzZXIgQnkgU2FtIEJsb3dlc1xyXG4gKlxyXG4gKiBEZXNpZ25lZCBmb3IgSFRNTDUgZG9jdW1lbnRzXHJcbiAqXHJcbiAqIE9yaWdpbmFsIGNvZGUgYnkgSm9obiBSZXNpZyAoZWpvaG4ub3JnKVxyXG4gKiBodHRwOi8vZWpvaG4ub3JnL2Jsb2cvcHVyZS1qYXZhc2NyaXB0LWh0bWwtcGFyc2VyL1xyXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEVyaWsgQXJ2aWRzc29uLCBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGh0dHA6Ly9lcmlrLmVhZS5uZXQvc2ltcGxlaHRtbHBhcnNlci9zaW1wbGVodG1scGFyc2VyLmpzXHJcbiAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogTGljZW5zZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqXHJcbiAqIFRoaXMgY29kZSBpcyB0cmlwbGUgbGljZW5zZWQgdXNpbmcgQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wLFxyXG4gKiBNb3ppbGxhIFB1YmxpYyBMaWNlbnNlIG9yIEdOVSBQdWJsaWMgTGljZW5zZVxyXG4gKiBcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKiBcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcclxuICogdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5XHJcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKiBcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKiBcclxuICogVGhlIGNvbnRlbnRzIG9mIHRoaXMgZmlsZSBhcmUgc3ViamVjdCB0byB0aGUgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxyXG4gKiBWZXJzaW9uIDEuMSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW5cclxuICogY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICogaHR0cDovL3d3dy5tb3ppbGxhLm9yZy9NUEwvXHJcbiAqIFxyXG4gKiBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCJcclxuICogYmFzaXMsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGVcclxuICogTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zXHJcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKiBcclxuICogVGhlIE9yaWdpbmFsIENvZGUgaXMgU2ltcGxlIEhUTUwgUGFyc2VyLlxyXG4gKiBcclxuICogVGhlIEluaXRpYWwgRGV2ZWxvcGVyIG9mIHRoZSBPcmlnaW5hbCBDb2RlIGlzIEVyaWsgQXJ2aWRzc29uLlxyXG4gKiBQb3J0aW9ucyBjcmVhdGVkIGJ5IEVyaWsgQXJ2aWRzc3NvbiBhcmUgQ29weXJpZ2h0IChDKSAyMDA0LiBBbGwgUmlnaHRzXHJcbiAqIFJlc2VydmVkLlxyXG4gKiBcclxuICogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gKiBcclxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxyXG4gKiBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMlxyXG4gKiBvZiB0aGUgTGljZW5zZSwgb3IgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICogXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqIFxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxyXG4gKiBGb3VuZGF0aW9uLCBJbmMuLCA1MSBGcmFua2xpbiBTdHJlZXQsIEZpZnRoIEZsb29yLCBCb3N0b24sIE1BICAwMjExMC0xMzAxLCBVU0EuXHJcbiAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogVXNhZ2VcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKlxyXG4gKiAvLyBVc2UgbGlrZSBzbzpcclxuICogSFRNTFBhcnNlcihodG1sU3RyaW5nLCB7XHJcbiAqICAgICBzdGFydDogZnVuY3Rpb24odGFnLCBhdHRycywgdW5hcnkpIHt9LFxyXG4gKiAgICAgZW5kOiBmdW5jdGlvbih0YWcpIHt9LFxyXG4gKiAgICAgY2hhcnM6IGZ1bmN0aW9uKHRleHQpIHt9LFxyXG4gKiAgICAgY29tbWVudDogZnVuY3Rpb24odGV4dCkge31cclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgc3RyaW5nOlxyXG4gKiBIVE1MdG9YTUwoaHRtbFN0cmluZyk7XHJcbiAqXHJcbiAqIC8vIG9yIHRvIGdldCBhbiBYTUwgRE9NIERvY3VtZW50XHJcbiAqIEhUTUx0b0RPTShodG1sU3RyaW5nKTtcclxuICpcclxuICogLy8gb3IgdG8gaW5qZWN0IGludG8gYW4gZXhpc3RpbmcgZG9jdW1lbnQvRE9NIG5vZGVcclxuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcsIGRvY3VtZW50KTtcclxuICogSFRNTHRvRE9NKGh0bWxTdHJpbmcsIGRvY3VtZW50LmJvZHkpO1xyXG4gKlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8vIFJlZ3VsYXIgRXhwcmVzc2lvbnMgZm9yIHBhcnNpbmcgdGFncyBhbmQgYXR0cmlidXRlc1xyXG5cdHZhciBzdGFydFRhZyA9IC9ePChbLUEtWmEtejAtOV9dKykoKD86XFxzK1thLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKD86XFxzKj1cXHMqKD86KD86XCJbXlwiXSpcIil8KD86J1teJ10qJyl8W14+XFxzXSspKT8pKilcXHMqKFxcLz8pPi8sXHJcblx0XHRlbmRUYWcgPSAvXjxcXC8oWy1BLVphLXowLTlfXSspW14+XSo+LyxcclxuXHRcdGF0dHIgPSAvKFthLXpBLVpfOl1bLWEtekEtWjAtOV86Ll0qKSg/Olxccyo9XFxzKig/Oig/OlwiKCg/OlxcXFwufFteXCJdKSopXCIpfCg/OicoKD86XFxcXC58W14nXSkqKScpfChbXj5cXHNdKykpKT8vZztcclxuXHJcblx0Ly8gRW1wdHkgRWxlbWVudHMgLSBIVE1MIDVcclxuXHR2YXIgZW1wdHkgPSBtYWtlTWFwKFwiYXJlYSxiYXNlLGJhc2Vmb250LGJyLGNvbCxmcmFtZSxocixpbWcsaW5wdXQsbGluayxtZXRhLHBhcmFtLGVtYmVkLGNvbW1hbmQsa2V5Z2VuLHNvdXJjZSx0cmFjayx3YnJcIik7XHJcblxyXG5cdC8vIEJsb2NrIEVsZW1lbnRzIC0gSFRNTCA1XHJcblx0dmFyIGJsb2NrID0gbWFrZU1hcChcImEsYWRkcmVzcyxhcnRpY2xlLGFwcGxldCxhc2lkZSxhdWRpbyxibG9ja3F1b3RlLGJ1dHRvbixjYW52YXMsY2VudGVyLGRkLGRlbCxkaXIsZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGZyYW1lc2V0LGgxLGgyLGgzLGg0LGg1LGg2LGhlYWRlcixoZ3JvdXAsaHIsaWZyYW1lLGlucyxpc2luZGV4LGxpLG1hcCxtZW51LG5vZnJhbWVzLG5vc2NyaXB0LG9iamVjdCxvbCxvdXRwdXQscCxwcmUsc2VjdGlvbixzY3JpcHQsdGFibGUsdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdHIsdWwsdmlkZW9cIik7XHJcblxyXG5cdC8vIElubGluZSBFbGVtZW50cyAtIEhUTUwgNVxyXG5cdHZhciBpbmxpbmUgPSBtYWtlTWFwKFwiYWJicixhY3JvbnltLGFwcGxldCxiLGJhc2Vmb250LGJkbyxiaWcsYnIsYnV0dG9uLGNpdGUsY29kZSxkZWwsZGZuLGVtLGZvbnQsaSxpZnJhbWUsaW1nLGlucHV0LGlucyxrYmQsbGFiZWwsbWFwLG9iamVjdCxxLHMsc2FtcCxzY3JpcHQsc2VsZWN0LHNtYWxsLHNwYW4sc3RyaWtlLHN0cm9uZyxzdWIsc3VwLHRleHRhcmVhLHR0LHUsdmFyXCIpO1xyXG5cclxuXHQvLyBFbGVtZW50cyB0aGF0IHlvdSBjYW4sIGludGVudGlvbmFsbHksIGxlYXZlIG9wZW5cclxuXHQvLyAoYW5kIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMpXHJcblx0dmFyIGNsb3NlU2VsZiA9IG1ha2VNYXAoXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHJcIik7XHJcblxyXG5cdC8vIEF0dHJpYnV0ZXMgdGhhdCBoYXZlIHRoZWlyIHZhbHVlcyBmaWxsZWQgaW4gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcblx0dmFyIGZpbGxBdHRycyA9IG1ha2VNYXAoXCJjaGVja2VkLGNvbXBhY3QsZGVjbGFyZSxkZWZlcixkaXNhYmxlZCxpc21hcCxtdWx0aXBsZSxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3dyYXAscmVhZG9ubHksc2VsZWN0ZWRcIik7XHJcblxyXG5cdC8vIFNwZWNpYWwgRWxlbWVudHMgKGNhbiBjb250YWluIGFueXRoaW5nKVxyXG5cdHZhciBzcGVjaWFsID0gbWFrZU1hcChcInNjcmlwdCxzdHlsZVwiKTtcclxuXHJcblx0dmFyIEhUTUxQYXJzZXIgPSB0aGlzLkhUTUxQYXJzZXIgPSBmdW5jdGlvbiAoaHRtbCwgaGFuZGxlcikge1xyXG5cdFx0dmFyIGluZGV4LCBjaGFycywgbWF0Y2gsIHN0YWNrID0gW10sIGxhc3QgPSBodG1sO1xyXG5cdFx0c3RhY2subGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHRcdH07XHJcblxyXG5cdFx0d2hpbGUgKGh0bWwpIHtcclxuXHRcdFx0Y2hhcnMgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBpbiBhIHNjcmlwdCBvciBzdHlsZSBlbGVtZW50XHJcblx0XHRcdGlmICghc3RhY2subGFzdCgpIHx8ICFzcGVjaWFsW3N0YWNrLmxhc3QoKV0pIHtcclxuXHJcblx0XHRcdFx0Ly8gQ29tbWVudFxyXG5cdFx0XHRcdGlmIChodG1sLmluZGV4T2YoXCI8IS0tXCIpID09IDApIHtcclxuXHRcdFx0XHRcdGluZGV4ID0gaHRtbC5pbmRleE9mKFwiLS0+XCIpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChoYW5kbGVyLmNvbW1lbnQpXHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlci5jb21tZW50KGh0bWwuc3Vic3RyaW5nKDQsIGluZGV4KSk7XHJcblx0XHRcdFx0XHRcdGh0bWwgPSBodG1sLnN1YnN0cmluZyhpbmRleCArIDMpO1xyXG5cdFx0XHRcdFx0XHRjaGFycyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIGVuZCB0YWdcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZihcIjwvXCIpID09IDApIHtcclxuXHRcdFx0XHRcdG1hdGNoID0gaHRtbC5tYXRjaChlbmRUYWcpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChtYXRjaCkge1xyXG5cdFx0XHRcdFx0XHRodG1sID0gaHRtbC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcclxuXHRcdFx0XHRcdFx0bWF0Y2hbMF0ucmVwbGFjZShlbmRUYWcsIHBhcnNlRW5kVGFnKTtcclxuXHRcdFx0XHRcdFx0Y2hhcnMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBzdGFydCB0YWdcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGh0bWwuaW5kZXhPZihcIjxcIikgPT0gMCkge1xyXG5cdFx0XHRcdFx0bWF0Y2ggPSBodG1sLm1hdGNoKHN0YXJ0VGFnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAobWF0Y2gpIHtcclxuXHRcdFx0XHRcdFx0aHRtbCA9IGh0bWwuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRcdG1hdGNoWzBdLnJlcGxhY2Uoc3RhcnRUYWcsIHBhcnNlU3RhcnRUYWcpO1xyXG5cdFx0XHRcdFx0XHRjaGFycyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGNoYXJzKSB7XHJcblx0XHRcdFx0XHRpbmRleCA9IGh0bWwuaW5kZXhPZihcIjxcIik7XHJcblxyXG5cdFx0XHRcdFx0dmFyIHRleHQgPSBpbmRleCA8IDAgPyBodG1sIDogaHRtbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGluZGV4IDwgMCA/IFwiXCIgOiBodG1sLnN1YnN0cmluZyhpbmRleCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXIuY2hhcnMpXHJcblx0XHRcdFx0XHRcdGhhbmRsZXIuY2hhcnModGV4dCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoW1xcXFxzXFxcXFNdKj8pPFxcL1wiICsgc3RhY2subGFzdCgpICsgXCJbXj5dKj5cIiksIGZ1bmN0aW9uIChhbGwsIHRleHQpIHtcclxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT58PCFcXFtDREFUQVxcWyhbXFxzXFxTXSo/KV1dPi9nLCBcIiQxJDJcIik7XHJcblx0XHRcdFx0XHRpZiAoaGFuZGxlci5jaGFycylcclxuXHRcdFx0XHRcdFx0aGFuZGxlci5jaGFycyh0ZXh0KTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cGFyc2VFbmRUYWcoXCJcIiwgc3RhY2subGFzdCgpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGh0bWwgPT0gbGFzdClcclxuXHRcdFx0XHR0aHJvdyBcIlBhcnNlIEVycm9yOiBcIiArIGh0bWw7XHJcblx0XHRcdGxhc3QgPSBodG1sO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENsZWFuIHVwIGFueSByZW1haW5pbmcgdGFnc1xyXG5cdFx0cGFyc2VFbmRUYWcoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBwYXJzZVN0YXJ0VGFnKHRhZywgdGFnTmFtZSwgcmVzdCwgdW5hcnkpIHtcclxuXHRcdFx0dGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdGlmIChibG9ja1t0YWdOYW1lXSkge1xyXG5cdFx0XHRcdHdoaWxlIChzdGFjay5sYXN0KCkgJiYgaW5saW5lW3N0YWNrLmxhc3QoKV0pIHtcclxuXHRcdFx0XHRcdHBhcnNlRW5kVGFnKFwiXCIsIHN0YWNrLmxhc3QoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoY2xvc2VTZWxmW3RhZ05hbWVdICYmIHN0YWNrLmxhc3QoKSA9PSB0YWdOYW1lKSB7XHJcblx0XHRcdFx0cGFyc2VFbmRUYWcoXCJcIiwgdGFnTmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVuYXJ5ID0gZW1wdHlbdGFnTmFtZV0gfHwgISF1bmFyeTtcclxuXHJcblx0XHRcdGlmICghdW5hcnkpXHJcblx0XHRcdFx0c3RhY2sucHVzaCh0YWdOYW1lKTtcclxuXHJcblx0XHRcdGlmIChoYW5kbGVyLnN0YXJ0KSB7XHJcblx0XHRcdFx0dmFyIGF0dHJzID0gW107XHJcblxyXG5cdFx0XHRcdHJlc3QucmVwbGFjZShhdHRyLCBmdW5jdGlvbiAobWF0Y2gsIG5hbWUpIHtcclxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6XHJcblx0XHRcdFx0XHRcdGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6XHJcblx0XHRcdFx0XHRcdGFyZ3VtZW50c1s0XSA/IGFyZ3VtZW50c1s0XSA6XHJcblx0XHRcdFx0XHRcdGZpbGxBdHRyc1tuYW1lXSA/IG5hbWUgOiBcIlwiO1xyXG5cclxuXHRcdFx0XHRcdGF0dHJzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXHJcblx0XHRcdFx0XHRcdGVzY2FwZWQ6IHZhbHVlLnJlcGxhY2UoLyhefFteXFxcXF0pXCIvZywgJyQxXFxcXFxcXCInKSAvL1wiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKGhhbmRsZXIuc3RhcnQpXHJcblx0XHRcdFx0XHRoYW5kbGVyLnN0YXJ0KHRhZ05hbWUsIGF0dHJzLCB1bmFyeSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBwYXJzZUVuZFRhZyh0YWcsIHRhZ05hbWUpIHtcclxuXHRcdFx0Ly8gSWYgbm8gdGFnIG5hbWUgaXMgcHJvdmlkZWQsIGNsZWFuIHNob3BcclxuXHRcdFx0aWYgKCF0YWdOYW1lKVxyXG5cdFx0XHRcdHZhciBwb3MgPSAwO1xyXG5cclxuXHRcdFx0XHQvLyBGaW5kIHRoZSBjbG9zZXN0IG9wZW5lZCB0YWcgb2YgdGhlIHNhbWUgdHlwZVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Zm9yICh2YXIgcG9zID0gc3RhY2subGVuZ3RoIC0gMTsgcG9zID49IDA7IHBvcy0tKVxyXG5cdFx0XHRcdFx0aWYgKHN0YWNrW3Bvc10gPT0gdGFnTmFtZSlcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRpZiAocG9zID49IDApIHtcclxuXHRcdFx0XHQvLyBDbG9zZSBhbGwgdGhlIG9wZW4gZWxlbWVudHMsIHVwIHRoZSBzdGFja1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IHBvczsgaS0tKVxyXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXIuZW5kKVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVyLmVuZChzdGFja1tpXSk7XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSB0aGUgb3BlbiBlbGVtZW50cyBmcm9tIHRoZSBzdGFja1xyXG5cdFx0XHRcdHN0YWNrLmxlbmd0aCA9IHBvcztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuSFRNTHRvWE1MID0gZnVuY3Rpb24gKGh0bWwpIHtcclxuXHRcdHZhciByZXN1bHRzID0gXCJcIjtcclxuXHJcblx0XHRIVE1MUGFyc2VyKGh0bWwsIHtcclxuXHRcdFx0c3RhcnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCB1bmFyeSkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gXCI8XCIgKyB0YWc7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRyZXN1bHRzICs9IFwiIFwiICsgYXR0cnNbaV0ubmFtZSArICc9XCInICsgYXR0cnNbaV0uZXNjYXBlZCArICdcIic7XHJcblx0XHRcdFx0cmVzdWx0cyArPSBcIj5cIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW5kOiBmdW5jdGlvbiAodGFnKSB7XHJcblx0XHRcdFx0cmVzdWx0cyArPSBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhcnM6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcblx0XHRcdFx0cmVzdWx0cyArPSB0ZXh0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb21tZW50OiBmdW5jdGlvbiAodGV4dCkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gXCI8IS0tXCIgKyB0ZXh0ICsgXCItLT5cIjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcblx0fTtcclxuXHJcblx0dGhpcy5IVE1MdG9ET00gPSBmdW5jdGlvbiAoaHRtbCwgZG9jKSB7XHJcblx0XHQvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgb2YgdGhlc2UgZWxlbWVudHNcclxuXHRcdHZhciBvbmUgPSBtYWtlTWFwKFwiaHRtbCxoZWFkLGJvZHksdGl0bGVcIik7XHJcblxyXG5cdFx0Ly8gRW5mb3JjZSBhIHN0cnVjdHVyZSBmb3IgdGhlIGRvY3VtZW50XHJcblx0XHR2YXIgc3RydWN0dXJlID0ge1xyXG5cdFx0XHRsaW5rOiBcImhlYWRcIixcclxuXHRcdFx0YmFzZTogXCJoZWFkXCJcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKCFkb2MpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBET01Eb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdGRvYyA9IG5ldyBET01Eb2N1bWVudCgpO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbiAmJiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudClcclxuXHRcdFx0XHRkb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChcIlwiLCBcIlwiLCBudWxsKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIEFjdGl2ZVggIT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRkb2MgPSBuZXcgQWN0aXZlWE9iamVjdChcIk1zeG1sLkRPTURvY3VtZW50XCIpO1xyXG5cclxuXHRcdH0gZWxzZVxyXG5cdFx0XHRkb2MgPSBkb2Mub3duZXJEb2N1bWVudCB8fFxyXG5cdFx0XHRcdGRvYy5nZXRPd25lckRvY3VtZW50ICYmIGRvYy5nZXRPd25lckRvY3VtZW50KCkgfHxcclxuXHRcdFx0XHRkb2M7XHJcblxyXG5cdFx0dmFyIGVsZW1zID0gW10sXHJcblx0XHRcdGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHxcclxuXHRcdFx0XHRkb2MuZ2V0RG9jdW1lbnRFbGVtZW50ICYmIGRvYy5nZXREb2N1bWVudEVsZW1lbnQoKTtcclxuXHJcblx0XHQvLyBJZiB3ZSdyZSBkZWFsaW5nIHdpdGggYW4gZW1wdHkgZG9jdW1lbnQgdGhlbiB3ZVxyXG5cdFx0Ly8gbmVlZCB0byBwcmUtcG9wdWxhdGUgaXQgd2l0aCB0aGUgSFRNTCBkb2N1bWVudCBzdHJ1Y3R1cmVcclxuXHRcdGlmICghZG9jdW1lbnRFbGVtZW50ICYmIGRvYy5jcmVhdGVFbGVtZW50KSAoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgaHRtbCA9IGRvYy5jcmVhdGVFbGVtZW50KFwiaHRtbFwiKTtcclxuXHRcdFx0dmFyIGhlYWQgPSBkb2MuY3JlYXRlRWxlbWVudChcImhlYWRcIik7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiKSk7XHJcblx0XHRcdGh0bWwuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcblx0XHRcdGh0bWwuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIpKTtcclxuXHRcdFx0ZG9jLmFwcGVuZENoaWxkKGh0bWwpO1xyXG5cdFx0fSkoKTtcclxuXHJcblx0XHQvLyBGaW5kIGFsbCB0aGUgdW5pcXVlIGVsZW1lbnRzXHJcblx0XHRpZiAoZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKVxyXG5cdFx0XHRmb3IgKHZhciBpIGluIG9uZSlcclxuXHRcdFx0XHRvbmVbaV0gPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoaSlbMF07XHJcblxyXG5cdFx0Ly8gSWYgd2UncmUgd29ya2luZyB3aXRoIGEgZG9jdW1lbnQsIGluamVjdCBjb250ZW50cyBpbnRvXHJcblx0XHQvLyB0aGUgYm9keSBlbGVtZW50XHJcblx0XHR2YXIgY3VyUGFyZW50Tm9kZSA9IG9uZS5ib2R5O1xyXG5cclxuXHRcdEhUTUxQYXJzZXIoaHRtbCwge1xyXG5cdFx0XHRzdGFydDogZnVuY3Rpb24gKHRhZ05hbWUsIGF0dHJzLCB1bmFyeSkge1xyXG5cdFx0XHRcdC8vIElmIGl0J3MgYSBwcmUtYnVpbHQgZWxlbWVudCwgdGhlbiB3ZSBjYW4gaWdub3JlXHJcblx0XHRcdFx0Ly8gaXRzIGNvbnN0cnVjdGlvblxyXG5cdFx0XHRcdGlmIChvbmVbdGFnTmFtZV0pIHtcclxuXHRcdFx0XHRcdGN1clBhcmVudE5vZGUgPSBvbmVbdGFnTmFtZV07XHJcblx0XHRcdFx0XHRpZiAoIXVuYXJ5KSB7XHJcblx0XHRcdFx0XHRcdGVsZW1zLnB1c2goY3VyUGFyZW50Tm9kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgZWxlbSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBhdHRyIGluIGF0dHJzKVxyXG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoYXR0cnNbYXR0cl0ubmFtZSwgYXR0cnNbYXR0cl0udmFsdWUpO1xyXG5cclxuXHRcdFx0XHRpZiAoc3RydWN0dXJlW3RhZ05hbWVdICYmIHR5cGVvZiBvbmVbc3RydWN0dXJlW3RhZ05hbWVdXSAhPSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRcdG9uZVtzdHJ1Y3R1cmVbdGFnTmFtZV1dLmFwcGVuZENoaWxkKGVsZW0pO1xyXG5cclxuXHRcdFx0XHRlbHNlIGlmIChjdXJQYXJlbnROb2RlICYmIGN1clBhcmVudE5vZGUuYXBwZW5kQ2hpbGQpXHJcblx0XHRcdFx0XHRjdXJQYXJlbnROb2RlLmFwcGVuZENoaWxkKGVsZW0pO1xyXG5cclxuXHRcdFx0XHRpZiAoIXVuYXJ5KSB7XHJcblx0XHRcdFx0XHRlbGVtcy5wdXNoKGVsZW0pO1xyXG5cdFx0XHRcdFx0Y3VyUGFyZW50Tm9kZSA9IGVsZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbmQ6IGZ1bmN0aW9uICh0YWcpIHtcclxuXHRcdFx0XHRlbGVtcy5sZW5ndGggLT0gMTtcclxuXHJcblx0XHRcdFx0Ly8gSW5pdCB0aGUgbmV3IHBhcmVudE5vZGVcclxuXHRcdFx0XHRjdXJQYXJlbnROb2RlID0gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV07XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYXJzOiBmdW5jdGlvbiAodGV4dCkge1xyXG5cdFx0XHRcdGN1clBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKHRleHQpKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tbWVudDogZnVuY3Rpb24gKHRleHQpIHtcclxuXHRcdFx0XHQvLyBjcmVhdGUgY29tbWVudCBub2RlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkb2M7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcclxuXHRcdHZhciBvYmogPSB7fSwgaXRlbXMgPSBzdHIuc3BsaXQoXCIsXCIpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0b2JqW2l0ZW1zW2ldXSA9IHRydWU7XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBERUJVRyA9IGZhbHNlO1xuICB2YXIgZGVidWcgPSBERUJVRyA/IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSkgOiBmdW5jdGlvbigpe307XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICByZXF1aXJlKCcuLi9saWIvUHVyZS1KYXZhU2NyaXB0LUhUTUw1LVBhcnNlci9odG1scGFyc2VyLmpzJyk7XG4gIH1cblxuICBmdW5jdGlvbiBxKHYpIHtcbiAgICByZXR1cm4gJ1wiJyArIHYgKyAnXCInO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRE9DVFlQRShodG1sKSB7XG4gICAgcmV0dXJuIGh0bWxcbiAgICAgIC5yZXBsYWNlKC88XFw/eG1sLipcXD8+XFxuLywgJycpXG4gICAgICAucmVwbGFjZSgvPCFkb2N0eXBlLipcXD5cXG4vLCAnJylcbiAgICAgIC5yZXBsYWNlKC88IURPQ1RZUEUuKlxcPlxcbi8sICcnKTtcbiAgfVxuXG4gIGdsb2JhbC5odG1sMmpzb24gPSBmdW5jdGlvbiBodG1sMmpzb24oaHRtbCkge1xuICAgIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xuICAgIHZhciBidWZBcnJheSA9IFtdO1xuICAgIHZhciByZXN1bHRzID0ge1xuICAgICAgbm9kZTogJ3Jvb3QnLFxuICAgICAgY2hpbGQ6IFtdLFxuICAgIH07XG4gICAgSFRNTFBhcnNlcihodG1sLCB7XG4gICAgICBzdGFydDogZnVuY3Rpb24odGFnLCBhdHRycywgdW5hcnkpIHtcbiAgICAgICAgZGVidWcodGFnLCBhdHRycywgdW5hcnkpO1xuICAgICAgICAvLyBub2RlIGZvciB0aGlzIGVsZW1lbnRcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgbm9kZTogJ2VsZW1lbnQnLFxuICAgICAgICAgIHRhZzogdGFnLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoYXR0cnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgbm9kZS5hdHRyID0gYXR0cnMucmVkdWNlKGZ1bmN0aW9uKHByZSwgYXR0cikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBhdHRyLm5hbWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBoYXMgbXVsdGkgYXR0aWJ1dGVzXG4gICAgICAgICAgICAvLyBtYWtlIGl0IGFycmF5IG9mIGF0dHJpYnV0ZVxuICAgICAgICAgICAgaWYgKHZhbHVlLm1hdGNoKC8gLykpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBhdHRyIGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAvLyBtZXJnZSBpdFxuICAgICAgICAgICAgaWYgKHByZVtuYW1lXSkge1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcmVbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBhcnJheSwgcHVzaCB0byBsYXN0XG4gICAgICAgICAgICAgICAgcHJlW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSB2YWx1ZSwgbWFrZSBpdCBhcnJheVxuICAgICAgICAgICAgICAgIHByZVtuYW1lXSA9IFtwcmVbbmFtZV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbm90IGV4aXN0LCBwdXQgaXRcbiAgICAgICAgICAgICAgcHJlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcmU7XG4gICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmFyeSkge1xuICAgICAgICAgIC8vIGlmIHRoaXMgdGFnIGRvc2VuJ3QgaGF2ZSBlbmQgdGFnXG4gICAgICAgICAgLy8gbGlrZSA8aW1nIHNyYz1cImhvZ2UucG5nXCIvPlxuICAgICAgICAgIC8vIGFkZCB0byBwYXJlbnRzXG4gICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdIHx8IHJlc3VsdHM7XG4gICAgICAgICAgaWYgKHBhcmVudC5jaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2hpbGQgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50LmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmQXJyYXkudW5zaGlmdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZDogZnVuY3Rpb24odGFnKSB7XG4gICAgICAgIGRlYnVnKHRhZyk7XG4gICAgICAgIC8vIG1lcmdlIGludG8gcGFyZW50IHRhZ1xuICAgICAgICB2YXIgbm9kZSA9IGJ1ZkFycmF5LnNoaWZ0KCk7XG4gICAgICAgIGlmIChub2RlLnRhZyAhPT0gdGFnKSBjb25zb2xlLmVycm9yKCdpbnZhbGlkIHN0YXRlOiBtaXNtYXRjaCBlbmQgdGFnJyk7XG5cbiAgICAgICAgaWYgKGJ1ZkFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlc3VsdHMuY2hpbGQucHVzaChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gYnVmQXJyYXlbMF07XG4gICAgICAgICAgaWYgKHBhcmVudC5jaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2hpbGQgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50LmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjaGFyczogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICBkZWJ1Zyh0ZXh0KTtcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgbm9kZTogJ3RleHQnLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChidWZBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXN1bHRzLmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xuICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudC5jaGlsZC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29tbWVudDogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICBkZWJ1Zyh0ZXh0KTtcbiAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgbm9kZTogJ2NvbW1lbnQnLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcbiAgICAgICAgaWYgKHBhcmVudC5jaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50LmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIGdsb2JhbC5qc29uMmh0bWwgPSBmdW5jdGlvbiBqc29uMmh0bWwoanNvbikge1xuICAgIC8vIEVtcHR5IEVsZW1lbnRzIC0gSFRNTCA0LjAxXG4gICAgdmFyIGVtcHR5ID0gWydhcmVhJywgJ2Jhc2UnLCAnYmFzZWZvbnQnLCAnYnInLCAnY29sJywgJ2ZyYW1lJywgJ2hyJywgJ2ltZycsICdpbnB1dCcsICdpc2luZGV4JywgJ2xpbmsnLCAnbWV0YScsICdwYXJhbScsICdlbWJlZCddO1xuXG4gICAgdmFyIGNoaWxkID0gJyc7XG4gICAgaWYgKGpzb24uY2hpbGQpIHtcbiAgICAgIGNoaWxkID0ganNvbi5jaGlsZC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4ganNvbjJodG1sKGMpO1xuICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgdmFyIGF0dHIgPSAnJztcbiAgICBpZiAoanNvbi5hdHRyKSB7XG4gICAgICBhdHRyID0gT2JqZWN0LmtleXMoanNvbi5hdHRyKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGpzb24uYXR0cltrZXldO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignICcpO1xuICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcSh2YWx1ZSk7XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgICBpZiAoYXR0ciAhPT0gJycpIGF0dHIgPSAnICcgKyBhdHRyO1xuICAgIH1cblxuICAgIGlmIChqc29uLm5vZGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgdmFyIHRhZyA9IGpzb24udGFnO1xuICAgICAgaWYgKGVtcHR5LmluZGV4T2YodGFnKSA+IC0xKSB7XG4gICAgICAgIC8vIGVtcHR5IGVsZW1lbnRcbiAgICAgICAgcmV0dXJuICc8JyArIGpzb24udGFnICsgYXR0ciArICcvPic7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vbiBlbXB0eSBlbGVtZW50XG4gICAgICB2YXIgb3BlbiA9ICc8JyArIGpzb24udGFnICsgYXR0ciArICc+JztcbiAgICAgIHZhciBjbG9zZSA9ICc8LycgKyBqc29uLnRhZyArICc+JztcbiAgICAgIHJldHVybiBvcGVuICsgY2hpbGQgKyBjbG9zZTtcbiAgICB9XG5cbiAgICBpZiAoanNvbi5ub2RlID09PSAndGV4dCcpIHtcbiAgICAgIHJldHVybiBqc29uLnRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGpzb24ubm9kZSA9PT0gJ2NvbW1lbnQnKSB7XG4gICAgICByZXR1cm4gJzwhLS0nICsganNvbi50ZXh0ICsgJy0tPic7XG4gICAgfVxuXG4gICAgaWYgKGpzb24ubm9kZSA9PT0gJ3Jvb3QnKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9O1xufSkodGhpcyk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsInZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpXG52YXIgdXJsID0gcmVxdWlyZSgndXJsJylcblxudmFyIGh0dHBzID0gbW9kdWxlLmV4cG9ydHNcblxuZm9yICh2YXIga2V5IGluIGh0dHApIHtcbiAgaWYgKGh0dHAuaGFzT3duUHJvcGVydHkoa2V5KSkgaHR0cHNba2V5XSA9IGh0dHBba2V5XVxufVxuXG5odHRwcy5yZXF1ZXN0ID0gZnVuY3Rpb24gKHBhcmFtcywgY2IpIHtcbiAgcGFyYW1zID0gdmFsaWRhdGVQYXJhbXMocGFyYW1zKVxuICByZXR1cm4gaHR0cC5yZXF1ZXN0LmNhbGwodGhpcywgcGFyYW1zLCBjYilcbn1cblxuaHR0cHMuZ2V0ID0gZnVuY3Rpb24gKHBhcmFtcywgY2IpIHtcbiAgcGFyYW1zID0gdmFsaWRhdGVQYXJhbXMocGFyYW1zKVxuICByZXR1cm4gaHR0cC5nZXQuY2FsbCh0aGlzLCBwYXJhbXMsIGNiKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhcmFtcyAocGFyYW1zKSB7XG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xuICAgIHBhcmFtcyA9IHVybC5wYXJzZShwYXJhbXMpXG4gIH1cbiAgaWYgKCFwYXJhbXMucHJvdG9jb2wpIHtcbiAgICBwYXJhbXMucHJvdG9jb2wgPSAnaHR0cHM6J1xuICB9XG4gIGlmIChwYXJhbXMucHJvdG9jb2wgIT09ICdodHRwczonKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQcm90b2NvbCBcIicgKyBwYXJhbXMucHJvdG9jb2wgKyAnXCIgbm90IHN1cHBvcnRlZC4gRXhwZWN0ZWQgXCJodHRwczpcIicpXG4gIH1cbiAgcmV0dXJuIHBhcmFtc1xufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgVVJMIH0gZnJvbSAndXJsJztcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ05vZGVSZXF1ZXN0Jyk7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiLi9mc1V0aWxcIjtcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJztcbmltcG9ydCB7IFJlcXVlc3QgYXMgUmVxdWVzdFV0aWwgfSBmcm9tICdoc3V0aWwnO1xuY29uc3QgaHRtbDJqc29uID0gcmVxdWlyZSgnaHRtbDJqc29uJykuaHRtbDJqc29uO1xubG9nLm1lc3NhZ2VMZW5ndGggPSAxMjA7XG5jb25zdCBwcm90b2NvbCA9IHsgXCJodHRwOlwiOiBodHRwLCBcImh0dHBzOlwiOiBodHRwcyB9O1xuZXhwb3J0IGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0VXRpbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubG9nID0gbG9nO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwpIDogdXJsO1xuICAgIH1cbiAgICBhc3luYyByZWFkQ2FjaGVkKGZuYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhID0gSlNPTi5wYXJzZShhd2FpdCBmcy5yZWFkVGV4dEZpbGUoYCR7Zm5hbWV9LW1ldGEuanNvbmApKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmbmFtZSArICcuYmluJywgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSBmb3VuZCBjYWNoZSBmb3IgJHtmbmFtZX0gYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy50cmFuc2llbnQoYGZvdW5kIGNhY2hlIGZvciAke2ZuYW1lfSBgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHJlc3BvbnNlOiBtZXRhLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgd3JpdGVDYWNoZWQoZm5hbWUsIHJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAuLi5yZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzIH0sXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiByZXNwb25zZS5yZXNwb25zZS5zdGF0dXNNZXNzYWdlLFxuICAgICAgICAgICAgICAgIHR4dDogcmVzcG9uc2UucmVzcG9uc2UudHh0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYXdhaXQgZnMud3JpdGVUZXh0RmlsZShgJHtmbmFtZX0tbWV0YS5qc29uYCwgSlNPTi5zdHJpbmdpZnkobWV0YSkpO1xuICAgICAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKGAke2ZuYW1lfS5iaW5gLCByZXNwb25zZS5kYXRhLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLndhcm4oYGVycm9yIHdyaXRpbmcgY2FjaGUgZm9yIGNvbnRlbnQgJHtyZXNwb25zZS5yZXNwb25zZS5oZWFkZXJzW1wiY29udGVudC10eXBlXCJdfSBhbmQgZmlsZSAke2ZuYW1lfTogJHtlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGlzc3VlUmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgY29uc3QgcHJvdCA9IHByb3RvY29sW29wdGlvbnMucHJvdG9jb2xdO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9nLmRlYnVnKCgpID0+IGByZXF1ZXN0aW5nICR7dGhpcy5sb2cuaW5zcGVjdChvcHRpb25zLCB7IGRlcHRoOiA0IH0pfWApO1xuICAgICAgICAgICAgY29uc3QgcmVxID0gcHJvdC5yZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmNvZGluZyA9IHJlcXVlc3QuaXNUZXh0dWFsQ29udGVudChyZXMuaGVhZGVyc1snY29udGVudC10eXBlJ10pID8gJ3V0ZjgnIDogJ2JpbmFyeSc7XG4gICAgICAgICAgICAgICAgcmVzLnNldEVuY29kaW5nKGVuY29kaW5nKTtcbiAgICAgICAgICAgICAgICByZXMudHh0ID0gZW5jb2RpbmcgPT09ICd1dGY4JztcbiAgICAgICAgICAgICAgICByZXMub24oJ2RhdGEnLCAoY2h1bmspID0+IGRhdGEgKz0gY2h1bmspO1xuICAgICAgICAgICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZGF0YSwgcmVzcG9uc2U6IHJlcyB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxLm9uKCdlcnJvcicsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgZGF0YTogJycsIGVycm9yOiBlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocG9zdERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlcS53cml0ZShwb3N0RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXEuZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblJlcXVlc3QuZGVjb2RlcnMgPSB7XG4gICAgc3RyMmpzb246IChkYXRhKSA9PiB7IHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSB9LFxuICAgIGh0bWwyanNvbjogKGRhdGEpID0+IHsgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGh0bWwyanNvbihkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVnhkV1Z6ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlTWlhGMVpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVhORVFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTFCUVdVc1MwRkJTeXhEUVVGRE8wRkJRMjVETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1RVRkJaU3hQUVVGUExFTkJRVU03UVVGQlJ5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEJRVU16UlN4UFFVRlBMRXRCUVVzc1JVRkJSU3hOUVVGbExGVkJRVlVzUTBGQlF6dEJRVU40UXl4UFFVRlBMRWxCUVVrc1RVRkJhMElzVFVGQlRTeERRVUZETzBGQlEzQkRMRTlCUVU4c1MwRkJTeXhOUVVGcFFpeFBRVUZQTEVOQlFVTTdRVUZEY2tNc1QwRkJUeXhGUVVGRkxFOUJRVThzU1VGQlNTeFhRVUZYTEVWQlFVVXNUVUZCVVN4UlFVRlJMRU5CUVVNN1FVRkxiRVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEJRVVZxUkN4SFFVRkhMRU5CUVVNc1lVRkJZU3hIUVVGSExFZEJRVWNzUTBGQlF6dEJRVVY0UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhGUVVGRExFOUJRVThzUlVGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RlFVRkRMRXRCUVVzc1JVRkJReXhEUVVGRE8wRkJSMmhFTEUxQlFVMHNUMEZCVHl4UFFVRlJMRk5CUVZFc1YwRkJWenRKUVVGNFF6czdVVUZQWXl4UlFVRkhMRWRCUVZFc1IwRkJSeXhEUVVGRE8wbEJiMFUzUWl4RFFVRkRPMGxCYkVWaExFMUJRVTBzUTBGQlF5eEhRVUZqTzFGQlF6TkNMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONlJDeERRVUZETzBsQlZWTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGWk8xRkJRMjVETEVsQlFVazdXVUZEUVN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSU3hOUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0WlFVTndSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVYzdaMEpCUTFvc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxIRkNRVUZ4UWl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM2hITzJsQ1FVRk5PMmRDUVVOSUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRzFDUVVGdFFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTI1RU8xbEJRMFFzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlF5eERRVUZETzFOQlEzUkRPMUZCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3V1VGRFVDeFBRVUZQTEZOQlFWTXNRMEZCUXp0VFFVTndRanRKUVVOTUxFTkJRVU03U1VGRlV5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVZrc1JVRkJSU3hSUVVGcFFqdFJRVU4yUkN4SlFVRkpPMWxCUlVFc1RVRkJUU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03V1VGRGRrUXNUVUZCVFN4SlFVRkpMRWRCUVVjN1owSkJRMVFzVDBGQlR5eEZRVUZGTEVWQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlF6dG5Ra0ZEZGtNc1ZVRkJWU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlR0blFrRkRlRU1zWVVGQllTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZVHRuUWtGRE9VTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ6dGhRVU0zUWl4RFFVRkJPMWxCUTBRc1RVRkJUU3hGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NTMEZCU3l4WlFVRlpMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTI1RkxFMUJRVTBzUlVGQlJTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1RVRkJUU3hGUVVGVkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRja1U3VVVGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0WlFVRkZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEcxRFFVRnRReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1lVRkJZU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0VFFVRkZPMGxCUTNoSkxFTkJRVU03U1VGRlV5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVdVc1JVRkJSU3hSUVVGaE8xRkJRM1pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOeVFpeE5RVUZOTEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlEzaERMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUUwUWl4RlFVRkZMRTFCUVhsRExFVkJRVVVzUlVGQlJUdFpRVU16Uml4SlFVRkpMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03V1VGRFpDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeGpRVUZqTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZETEV0QlFVc3NSVUZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFpRVU42UlN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVU4c1JVRkJSU3hGUVVGRk8yZENRVU14UXl4TlFVRk5MRkZCUVZFc1IwRkJSeXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXp0blFrRkRNVVlzUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRE1VSXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhSUVVGUkxFdEJRVXNzVFVGQlRTeERRVUZETzJkQ1FVTTVRaXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRXRCUVZrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOb1JDeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVU3YjBKQlEyWXNUMEZCVHl4RFFVRkRMRVZCUVVNc1NVRkJTU3hGUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVWQlFVTXNSMEZCUnl4RlFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRrTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRVQ3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlN5eEZRVUZGTEVWQlFVVTdaMEpCUTNSQ0xFMUJRVTBzUTBGQlF5eEZRVUZETEVsQlFVa3NSVUZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVOQlFVTTdXVUZETDBJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGSFNDeEpRVUZKTEZGQlFWRXNTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVGRk8xbEJRM0JFTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOa0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXpzN1FVRjZSV0VzWjBKQlFWRXNSMEZCUnp0SlFVTnlRaXhSUVVGUkxFVkJRVWNzUTBGQlF5eEpRVUZYTEVWQlFVVXNSVUZCUlN4SFFVRkhMRWxCUVVrN1VVRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN1MwRkJRenRKUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFGQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVFN1MwRkJReXhEUVVGQkxFTkJRVU03U1VGRGJFWXNVMEZCVXl4RlFVRkZMRU5CUVVNc1NVRkJWeXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTzFGQlFVVXNUMEZCVHl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGQlJUdEpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMUZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU03UzBGQlJTeERRVUZCTEVOQlFVTTdRMEZEZWtZc1EwRkJReUo5IiwiaW1wb3J0ICogYXMgY3AgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5leHBvcnQgY29uc3QgY2hpbGRfcHJvY2VzcyA9IHtcbiAgICBleGVjOiAoY29tbWFuZCwgb3B0aW9ucykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gY3AuZXhlYyhjb21tYW5kLCBvcHRpb25zLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgIGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoeyBzdGRvdXQ6IHN0ZG91dCwgc3RkZXJyOiBzdGRlcnIgfSk7XG4gICAgfSkpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNCVmRHbHNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyTndWWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRm5Ra0VzVDBGQlR5eExRVUZMTEVWQlFVVXNUVUZCVHl4bFFVRmxMRU5CUVVNN1FVRkZja01zVFVGQlRTeERRVUZETEUxQlFVMHNZVUZCWVN4SFFVRkhPMGxCWVhwQ0xFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFXTXNSVUZCUlN4UFFVRlpMRVZCUVc5RExFVkJRVVVzUTBGRGNrVXNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGeFJDeEZRVUZGTEUxQlFYVkNMRVZCUVVVc1JVRkJSU3hEUVVNelJpeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eExRVUZUTEVWQlFVVXNUVUZCWVN4RlFVRkZMRTFCUVdFc1JVRkJSU3hGUVVGRk8xRkJRMnhGTEV0QlFVc3NRMEZCUVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJReXhOUVVGTkxFVkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNSVUZCUXl4TlFVRk5MRVZCUVVNc1EwRkJReXhEUVVGRE8wbEJRMjVGTEVOQlFVTXNRMEZCUXl4RFFVTk1PME5CUTFJc1EwRkJReUo5IiwiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmFzeW5jIGZ1bmN0aW9uIHN0YXQodGhlUGF0aCkge1xuICAgIGNvbnN0IHAgPSBhd2FpdCByZWFsUGF0aCh0aGVQYXRoKTtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5zdGF0KHAsIChlcnIsIHN0YXRzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yIGdldHRpbmcgc3RhdHMgZm9yICR7dGhlUGF0aH06ICR7ZXJyfWApO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzdGF0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gbHN0YXQodGhlUGF0aCkge1xuICAgIGNvbnN0IHAgPSBwYXRoLm5vcm1hbGl6ZSh0aGVQYXRoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gZnMubHN0YXQocCwgKGVyciwgc3RhdHMpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShzdGF0cykpKTtcbn1cbmZ1bmN0aW9uIGVycm9yKGVycikge1xuICAgIGNvbnN0IG1zZyA9IGAqKiogZXJyb3IgaW4gZnNVdGlsOiAke2Vycn0sIHN0YWNrOlxcbiR7ZXJyLnN0YWNrfWA7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVhbFBhdGgodGhlUGF0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLnJlYWxwYXRoKHRoZVBhdGgsIChlcnIsIHJlc29sdmVkUGF0aCkgPT4gZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHJlc29sdmVkUGF0aCkpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0aEV4aXN0cyh0aGVQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc3RhdCh0aGVQYXRoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmlsZVNpemUodGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgc3RhdCh0aGVQYXRoKSkuc2l6ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0ZpbGUodGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgc3RhdCh0aGVQYXRoKSkuaXNGaWxlKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNEaXJlY3RvcnkodGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgc3RhdCh0aGVQYXRoKSkuaXNEaXJlY3RvcnkoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0xpbmsodGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgbHN0YXQodGhlUGF0aCkpLmlzU3ltYm9saWNMaW5rKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWtkaXJzKHRoZVBhdGgpIHtcbiAgICBjb25zdCBwID0gcGF0aC5ub3JtYWxpemUocGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHRoZVBhdGgpKTtcbiAgICBsZXQgZGlycyA9IHAuc3BsaXQoJy8nKTtcbiAgICBkaXJzID0gZGlycy5tYXAoKGRpciwgaSkgPT4gZGlycy5zbGljZSgwLCBpICsgMSkuam9pbignLycpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGlyID0gZGlyc1tpXTtcbiAgICAgICAgY29uc3QgZXhpc3RzID0gYXdhaXQgaXNEaXJlY3RvcnkoZGlyKTtcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZnMucHJvbWlzZXMubWtkaXIoZGlyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSAhPT0gJ0VFWElTVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgaW4gbWtkaXJzOiAke2UuY29kZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYG1rZGlyIGZhaWxlZCBmb3IgJHtkaXJ9OiAke3B9XFxuJHtlfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWREaXIodGhlUGF0aCkge1xuICAgIGNvbnN0IHAgPSBhd2FpdCByZWFsUGF0aCh0aGVQYXRoKTtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5yZWFkZGlyKHAsIChlcnIsIGZpbGVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWxlcy5wYXRoID0gcDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZWFkRmlsZSh0aGVQYXRoLCBpc1RleHQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMucmVhZEZpbGUodGhlUGF0aCwgaXNUZXh0ID8gJ3V0ZjgnIDogJ2JpbmFyeScsIChlcnIsIGRhdGEpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShkYXRhKSk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkVGV4dEZpbGUodGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZWFkRmlsZSh0aGVQYXRoLCB0cnVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWFkSnNvbkZpbGUodGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZWFkRmlsZSh0aGVQYXRoLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgZXJyb3IoZXJyKTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVGaWxlKHRoZVBhdGgsIGNvbnRlbnQsIGlzVGV4dCA9IHRydWUpIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBpc1RleHQgPyAndXRmOCcgOiAnYmluYXJ5JztcbiAgICBhd2FpdCBta2RpcnMocGF0aC5kaXJuYW1lKHRoZVBhdGgpKTtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy53cml0ZUZpbGUodGhlUGF0aCwgY29udGVudCwgZW5jb2RpbmcsIChlcnIpID0+IGVyciA/IHJlamVjdChgbWtkaXJzIGZhaWxlZCBpbiB3cml0ZUZpbGUgZm9yICcke3RoZVBhdGh9JzogJHtlcnJ9YCkgOiByZXNvbHZlKHRoZVBhdGgpKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3cml0ZVN0cmVhbSh0aGVQYXRoLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcyA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKHRoZVBhdGgsIHsgZmxhZ3M6ICd3JywgbW9kZTogMG82NjYgfSk7XG4gICAgICAgIHMub24oJ2Vycm9yJywgKHNyYykgPT4gcmVqZWN0KGB3cml0ZVN0cmVhbSBlcnJvciAnJHtzcmN9JyBmb3IgcGF0aCAnJHt0aGVQYXRofSdgKSk7XG4gICAgICAgIHMud3JpdGUoY29udGVudCwgJ2JpbmFyeScsICgpID0+IHJlc29sdmUodGhlUGF0aCkpO1xuICAgICAgICBzLmVuZCgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlVGV4dEZpbGUodGhlUGF0aCwgY29udGVudCkge1xuICAgIHJldHVybiBhd2FpdCB3cml0ZUZpbGUodGhlUGF0aCwgY29udGVudCwgdHJ1ZSlcbiAgICAgICAgLmNhdGNoKGVycm9yKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3cml0ZUpzb25GaWxlKHRoZVBhdGgsIG9iaikge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUob2JqKVxuICAgICAgICAudGhlbihKU09OLnN0cmluZ2lmeSlcbiAgICAgICAgLnRoZW4oYXN5bmMgKGRhdGEpID0+IGF3YWl0IHdyaXRlVGV4dEZpbGUodGhlUGF0aCwgZGF0YSkpXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwZW5kRmlsZSh0aGVQYXRoLCBjb250ZW50LCBpc1RleHQgPSB0cnVlKSB7XG4gICAgdmFyIGVuY29kaW5nID0gaXNUZXh0ID8gJ3V0ZjgnIDogeyBlbmNvZGluZzogbnVsbCB9O1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmcy5hcHBlbmRGaWxlKHRoZVBhdGgsIGNvbnRlbnQsIGVuY29kaW5nLCAoZXJyKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUodGhlUGF0aCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3IoZSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRGaWxlU3luYyh0aGVQYXRoLCBjb250ZW50LCBpc1RleHQgPSB0cnVlKSB7XG4gICAgdmFyIGVuY29kaW5nID0gaXNUZXh0ID8gJ3V0ZjgnIDogeyBlbmNvZGluZzogbnVsbCB9O1xuICAgIHRyeSB7XG4gICAgICAgIGZzLmFwcGVuZEZpbGVTeW5jKHRoZVBhdGgsIGNvbnRlbnQsIGVuY29kaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoZVBhdGg7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yKGUpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKHRoZVBhdGgpIHtcbiAgICBjb25zdCBkaXIgPSBhd2FpdCBpc0RpcmVjdG9yeSh0aGVQYXRoKTtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBkaXIgPyBmcy5ybWRpcih0aGVQYXRoLCAoZSkgPT4gKGUgPyByZWplY3QoZSkgOiByZXNvbHZlKHRoZVBhdGgpKSlcbiAgICAgICAgICAgIDogZnMudW5saW5rKHRoZVBhdGgsIChlKSA9PiAoZSA/IHJlamVjdChlKSA6IHJlc29sdmUodGhlUGF0aCkpKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVBbGwodGhlUGF0aCkge1xuICAgIGNvbnN0IHJlbW92ZWQgPSBbXTtcbiAgICBjb25zdCBkaXIgPSBhd2FpdCBpc0RpcmVjdG9yeSh0aGVQYXRoKTtcbiAgICBpZiAoZGlyKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCByZWFkRGlyKHRoZVBhdGgpO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChsaXN0Lm1hcChhc3luYyAoaSkgPT4gcmVtb3ZlZC5wdXNoKC4uLmF3YWl0IHJlbW92ZUFsbChgJHt0aGVQYXRofS8ke2l9YCkpKSk7XG4gICAgfVxuICAgIHJlbW92ZWQucHVzaChhd2FpdCByZW1vdmUodGhlUGF0aCkpO1xuICAgIHJldHVybiByZW1vdmVkO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5OVmRHbHNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyWnpWWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRm5Ra0VzVDBGQlR5eExRVUZMTEVWQlFVVXNUVUZCWlN4SlFVRkpMRU5CUVVNN1FVRkRiRU1zVDBGQlR5eExRVUZMTEVsQlFVa3NUVUZCWVN4TlFVRk5MRU5CUVVNN1FVRTRRbkJETEV0QlFVc3NWVUZCVlN4SlFVRkpMRU5CUVVNc1QwRkJZenRKUVVNNVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU5zUXl4UFFVRlBMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRVZCUVVVN1VVRkRla01zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGUExFVkJRVVVzUzBGQll5eEZRVUZGTEVWQlFVVTdXVUZEYmtNc1NVRkJSeXhIUVVGSExFVkJRVVU3WjBKQlEwb3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXd5UWtGQk1rSXNUMEZCVHl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlF6RkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU5tTzJsQ1FVTkpPMmRDUVVGRkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0aFFVRkZPMUZCUXpWQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRVQ3hEUVVGRE8wRkJUMFFzUzBGQlN5eFZRVUZWTEV0QlFVc3NRMEZCUXl4UFFVRmpPMGxCUXk5Q0xFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNrTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVTm9ReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVU4c1JVRkJSU3hMUVVGVExFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGRE5VVXNRMEZCUXp0QlFVTklMRU5CUVVNN1FVRkZSQ3hUUVVGVExFdEJRVXNzUTBGQlF5eEhRVUZQTzBsQlEyeENMRTFCUVUwc1IwRkJSeXhIUVVGSExIZENRVUYzUWl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEyaEZMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZWtJc1EwRkJRenRCUVZWRUxFMUJRVTBzVlVGQlZTeFJRVUZSTEVOQlFVTXNUMEZCWXp0SlFVTjBReXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCTWtJc1JVRkJSU3hOUVVGelFpeEZRVUZGTEVWQlFVVTdVVUZETVVVc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRlBMRVZCUVVVc1dVRkJiVUlzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlJTeERRVUZETzBsQlEyaEhMRU5CUVVNc1EwRkJRenRUUVVORUxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTnNRaXhEUVVGRE8wRkJUMFFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4VlFVRlZMRU5CUVVNc1QwRkJZenRKUVVNelF5eEpRVUZKTzFGQlEwRXNUVUZCVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanRKUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFGQlExQXNUMEZCVHl4TFFVRkxMRU5CUVVNN1MwRkRhRUk3UVVGRFRDeERRVUZETzBGQlQwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hSUVVGUkxFTkJRVU1zVDBGQll6dEpRVU42UXl4SlFVRkpPMUZCUTBFc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wdEJRM0pETzBsQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVN1VVRkRVQ3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEySTdRVUZEVEN4RFFVRkRPMEZCVDBRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeE5RVUZOTEVOQlFVTXNUMEZCWXp0SlFVTjJReXhKUVVGSk8xRkJRMEVzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTMEZEZWtNN1NVRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdFJRVU5RTEU5QlFVOHNTMEZCU3l4RFFVRkRPMHRCUTJoQ08wRkJRMHdzUTBGQlF6dEJRVTlFTEUxQlFVMHNRMEZCUXl4TFFVRkxMRlZCUVZVc1YwRkJWeXhEUVVGRExFOUJRV003U1VGRE5VTXNTVUZCU1R0UlFVTkJMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wdEJRemxETzBsQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVN1VVRkRVQ3hQUVVGUExFdEJRVXNzUTBGQlF6dExRVU5vUWp0QlFVTk1MRU5CUVVNN1FVRlBSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eFZRVUZWTEUxQlFVMHNRMEZCUXl4UFFVRmpPMGxCUTNaRExFbEJRVWs3VVVGRFFTeFBRVUZQTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0TFFVTnNSRHRKUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFGQlExQXNUMEZCVHl4TFFVRkxMRU5CUVVNN1MwRkRhRUk3UVVGRFRDeERRVUZETzBGQlZVUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hOUVVGTkxFTkJRVU1zVDBGQll6dEpRVU4yUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZPVVFzU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVVY0UWl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVONlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVNNVFpeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGNFSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVUZGTEVsQlFVazdaMEpCUTJZc1RVRkJUU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOb1F6dFpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVOUUxFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJMRVZCUVVVN2IwSkJRM0pDTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU0xUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnFRaXhOUVVGTkxHOUNRVUZ2UWl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETzJsQ1FVTXZRenRoUVVOS08xTkJRVU03UzBGRFREdEpRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTJJc1EwRkJRenRCUVU5RUxFMUJRVTBzUTBGQlF5eExRVUZMTEZWQlFWVXNUMEZCVHl4RFFVRkRMRTlCUVdNN1NVRkRlRU1zVFVGQlRTeERRVUZETEVkQlFVY3NUVUZCVFN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGJFTXNUMEZCVHl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQmVVSXNSVUZCUlN4TlFVRnpRaXhGUVVGRkxFVkJRVVU3VVVGRE0wVXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZQTEVWQlFVVXNTMEZCVXl4RlFVRkZMRVZCUVVVN1dVRkRha01zU1VGQlJ5eEhRVUZITEVWQlFVVTdaMEpCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlFVVTdhVUpCUTI1Q08yZENRVU5FTEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU5tTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVOc1FqdFJRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRE8xTkJRMFFzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTJ4Q0xFTkJRVU03UVVGVFJDeE5RVUZOTEZWQlFWVXNVVUZCVVN4RFFVRkRMRTlCUVdNc1JVRkJSU3hOUVVGTkxFZEJRVU1zU1VGQlNUdEpRVU51UkN4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQmQwSXNSVUZCUlN4TlFVRnpRaXhGUVVGRkxFVkJRVVU3VVVGRGRrVXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVOHNSVUZCUlN4SlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVNMVJDeEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE4wTXNRMEZCUXl4RFFVRkRPMU5CUTBVc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeENMRU5CUVVNN1FVRlBSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eFZRVUZWTEZsQlFWa3NRMEZCUXl4UFFVRmpPMGxCUTJoRUxFbEJRVWs3VVVGQlJTeFBRVUZQTEUxQlFVMHNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dExRVUZGTzBsQlF6RkRMRTlCUVUwc1IwRkJSeXhGUVVGRk8xRkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVVN1FVRkRPVUlzUTBGQlF6dEJRVTlFTEUxQlFVMHNRMEZCUXl4TFFVRkxMRlZCUVZVc1dVRkJXU3hEUVVGRExFOUJRV003U1VGRE4wTXNTVUZCU1R0UlFVTkJMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVNelF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0TFFVTTVSRHRKUVVORUxFOUJRVTBzUjBGQlJ5eEZRVUZGTzFGQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRVVU3UVVGRE9VSXNRMEZCUXp0QlFWTkVMRTFCUVUwc1EwRkJReXhMUVVGTExGVkJRVlVzVTBGQlV5eERRVUZETEU5QlFXTXNSVUZCUlN4UFFVRmpMRVZCUVVVc1UwRkJaU3hKUVVGSk8wbEJReTlGTEVsQlFVa3NVVUZCVVN4SFFVRlBMRTFCUVUwc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1NVRkROME1zVFVGQlRTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzQkRMRTlCUVU4c1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRSUVVONlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTXNSMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkRha1FzUjBGQlJ5eERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc2JVTkJRVzFETEU5QlFVOHNUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNdlJpeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTlFMRU5CUVVNN1FVRlJSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eFZRVUZWTEZkQlFWY3NRMEZCUXl4UFFVRmpMRVZCUVVVc1QwRkJZenRKUVVNMVJDeFBRVUZQTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZETEV0QlFVc3NSVUZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRExFdEJRVXNzUlVGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhsUVVGbExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTjJSaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRia1FzUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFVDeERRVUZETzBGQlQwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hoUVVGaExFTkJRVU1zVDBGQll5eEZRVUZGTEU5QlFXTTdTVUZEYWtVc1QwRkJUeXhOUVVGTkxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJRenRUUVVNeFF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRiRUlzUTBGQlF6dEJRVkZFTEUxQlFVMHNRMEZCUXl4TFFVRkxMRlZCUVZVc1lVRkJZU3hEUVVGRExFOUJRV01zUlVGQlJTeEhRVUZQTzBsQlEzWkVMRTlCUVU4c1RVRkJUU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXp0VFFVTnVReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0VFFVTndRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZETEVsQlFVa3NSVUZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hoUVVGaExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTI1RUxFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTnNRaXhEUVVGRE8wRkJVMFFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4VlFVRlZMRU5CUVVNc1QwRkJZeXhGUVVGRkxFOUJRV01zUlVGQlJTeFRRVUZsTEVsQlFVazdTVUZEYUVZc1NVRkJTU3hSUVVGUkxFZEJRVThzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUXl4RFFVRkRPMGxCUTNKRUxFbEJRVWs3VVVGQlJTeFBRVUZQTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdXVUZETDBNc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVThzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEhMRU5CUVVNc1EwRkJReXhEUVVGQk8wdEJRVU03U1VGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0UlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVUZGTzBsQlFVRXNRMEZCUXp0QlFVTXZRaXhEUVVGRE8wRkJVMFFzVFVGQlRTeFZRVUZWTEdOQlFXTXNRMEZCUXl4UFFVRmpMRVZCUVVVc1QwRkJZeXhGUVVGRkxGTkJRV1VzU1VGQlNUdEpRVU01UlN4SlFVRkpMRkZCUVZFc1IwRkJUeXhOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZETEVOQlFVTTdTVUZEY2tRc1NVRkJTVHRSUVVOQkxFVkJRVVVzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU01UXl4UFFVRlBMRTlCUVU4c1EwRkJRenRMUVVOc1FqdEpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMUZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlFVVTdTVUZCUVN4RFFVRkRPMEZCUXpkQ0xFTkJRVU03UVVGUFJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4VlFVRlZMRTFCUVUwc1EwRkJReXhQUVVGak8wbEJRM1pETEUxQlFVMHNSMEZCUnl4SFFVRlhMRTFCUVUwc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlEyeEVMRTlCUVU4c1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSVHRSUVVOMFF5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVJTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROMFVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEU2l4RFFVRkRPMEZCVDBRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeFRRVUZUTEVOQlFVTXNUMEZCWXp0SlFVTXhReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYmtJc1RVRkJUU3hIUVVGSExFZEJRVmNzVFVGQlRTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRMME1zU1VGQlNTeEhRVUZITEVWQlFVVTdVVUZEVEN4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTndReXhOUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVU1zUTBGQlF5eEZRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeFRRVUZUTEVOQlFVTXNSMEZCUnl4UFFVRlBMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTXZSanRKUVVORUxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU53UXl4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOdVFpeERRVUZESW4wPSIsImV4cG9ydCB7IGNoaWxkX3Byb2Nlc3MgYXMgY3AgfSBmcm9tIFwiLi9jcFV0aWwuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xvZy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vUmVxdWVzdC5qc1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcIi4vZnNVdGlsLmpzXCI7XG5leHBvcnQgeyBmcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4RlFVRkZMR0ZCUVdFc1NVRkJTU3hGUVVGRkxFVkJRVVVzVFVGQlR5eGhRVUZoTEVOQlFVTTdRVUZEYmtRc1kwRkJjVU1zVlVGQlZTeERRVUZETzBGQlEyaEVMR05CUVhGRExHTkJRV01zUTBGQlF6dEJRVVZ3UkN4UFFVRlBMRXRCUVVzc1JVRkJSU3hOUVVGMVFpeGhRVUZoTEVOQlFVTTdRVUZEYmtRc1QwRkJUeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZESW4wPSIsImltcG9ydCB7IExvZyBhcyBMb2dVdGlsIH0gZnJvbSAnaHN1dGlsJztcbmltcG9ydCB7IGRhdGUgfSBmcm9tICdoc3V0aWwnO1xuaW1wb3J0IHsgcGF0aEV4aXN0cyB9IGZyb20gJy4vZnNVdGlsJztcbmltcG9ydCB7IGFwcGVuZEZpbGVTeW5jIH0gZnJvbSAnLi9mc1V0aWwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5jb25zdCBDT0xPUiA9IHtcbiAgICBjbGVhcjogJ1xceDFiWzBtJyxcbiAgICBib2xkOiAnXFx4MWJbMW0nLFxuICAgIGRpbTogJ1xceDFiWzJtJyxcbiAgICB1bmRlcnNjb3JlOiAnXFx4MWJbNG0nLFxuICAgIGJsaW5rOiAnXFx4MWJbNW0nLFxuICAgIHJldmVyc2U6ICdcXHgxYls3bScsXG4gICAgaGlkZGVuOiAnXFx4MWJbOG0nLFxuICAgIGJsYWNrOiAnXFx4MWJbMzBtJyxcbiAgICByZWQ6ICdcXHgxYlszMW0nLFxuICAgIGdyZWVuOiAnXFx4MWJbMzJtJyxcbiAgICB5ZWxsb3c6ICdcXHgxYlszM20nLFxuICAgIGJsdWU6ICdcXHgxYlszNG0nLFxuICAgIG1hZ2VudGE6ICdcXHgxYlszNW0nLFxuICAgIGN5YW46ICdcXHgxYlszNm0nLFxuICAgIHdoaXRlOiAnXFx4MWJbMzdtJyxcbiAgICBkYXJrcmVkOiAnXFx4MWJbMzFtJyxcbiAgICBkYXJrZ3JlZW46ICdcXHgxYlszMm0nLFxuICAgIGRhcmt5ZWxsb3c6ICdcXHgxYlszM20nLFxuICAgIGRhcmtibHVlOiAnXFx4MWJbMzRtJyxcbiAgICBkYXJrbWFnZW50YTogJ1xceDFiWzM1bScsXG4gICAgZGFya2N5YW46ICdcXHgxYlszNm0nLFxuICAgIGdyYXk6ICdcXHgxYlszN20nLFxuICAgIGJnQmxhY2s6ICdcXHgxYls0MG0nLFxuICAgIGJnUmVkOiAnXFx4MWJbNDFtJyxcbiAgICBiZ0dyZWVuOiAnXFx4MWJbNDJtJyxcbiAgICBiZ1llbGxvdzogJ1xceDFiWzQzbScsXG4gICAgYmdCbHVlOiAnXFx4MWJbNDRtJyxcbiAgICBiZ01hZ2VudGE6ICdcXHgxYls0NW0nLFxuICAgIGJnQ3lhbjogJ1xceDFiWzQ2bScsXG4gICAgYmdXaGl0ZTogJ1xceDFiWzQ3bSdcbn07XG5leHBvcnQgY2xhc3MgTG9nIGV4dGVuZHMgTG9nVXRpbCB7XG4gICAgY29uc3RydWN0b3IocHJlZml4KSB7IHN1cGVyKHByZWZpeCk7IH1cbiAgICB0cmFuc2llbnQobXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dChMb2dVdGlsLklORk8sIG1zZy5wYWRFbmQodGhpcy5tZXNzYWdlTGVuZ3RoIHx8IDgwLCAnICcpICsgJyBcXHInLCB7IGNvbG9yOiBbJ2dyZWVuJ10gfSk7XG4gICAgfVxuICAgIG91dHB1dChjb2xvciwgaGVhZGVyLCBsaW5lKSB7XG4gICAgICAgIGNvbnN0IGMgPSBjb2xvci5tYXAoYyA9PiBDT0xPUltjXSkuam9pbignJyk7XG4gICAgICAgIGNvbnN0IG1zZyA9IGAke2N9JHtoZWFkZXJ9JHtDT0xPUlsnY2xlYXInXX0gJHtsaW5lfWA7XG4gICAgICAgIGlmICh0aGlzLkxvZ0ZpbGUpIHtcbiAgICAgICAgICAgIGFwcGVuZEZpbGVTeW5jKGRhdGUodGhpcy5Mb2dGaWxlKSwgYCR7aGVhZGVyfSAke2xpbmV9XFxuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc2xpY2UoLTEpID09PSAnXFxyJykge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUobXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgbG9nRmlsZShmaWxlUGF0dGVybikge1xuICAgICAgICBpZiAoZmlsZVBhdHRlcm4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuaW5mbyhcImRpc2FibGluZyBsb2dmaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9nRmlsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWxlUGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2dGaWxlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBkYXRlKHRoaXMuTG9nRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVBhdHRlcm4uaW5kZXhPZignLycpID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5wYXJzZShmaWxlUGF0dGVybik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IHBhdGhFeGlzdHMocGFydHMuZGlyKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybihgcGF0aCAnJHtwYXJ0cy5kaXJ9JyBkb2Vzbid0IGV4aXN0czsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dGaWxlID0gZmlsZVBhdHRlcm47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mbyhcIm5vdyBsb2dnaW5nIHRvIGZpbGUgXCIgKyBkYXRlKGZpbGVQYXR0ZXJuKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvZ0ZpbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBjaGVja2luZyBwYXRoICR7cGFydHMuZGlyfTsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvZ0ZpbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVBhdHRlcm4gPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSAnbG9nLSVZWVlZLSVNTS0lREQudHh0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IGZpbGVQYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5mbyh0aGlzLkxvZ0ZpbGUgPyBgbm93IGxvZ2dpbmcgdG8gZmlsZSAke2RhdGUodGhpcy5Mb2dGaWxlKX1gIDogJ2xvZ2ZpbGUgZGlzYmFsZWQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuTG9nRmlsZTtcbiAgICB9XG4gICAgZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMgPyBDT0xPUltjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXV0gOiAnJztcbiAgICAgICAgcmV0dXJuIFtgJHtjdXJySW5kZW50fSR7aW5kZW50fSR7Y29sb3J9YCwgY29sb3JzID8gQ09MT1IuY2xlYXIgOiAnJywgJ1xcbicsIGN1cnJJbmRlbnRdO1xuICAgIH1cbn1cbkxvZy5sb2cgPSBuZXcgTG9nKCcnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGVFFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4SlFVRkpMRTlCUVU4c1JVRkJSU3hOUVVGUkxGRkJRVkVzUTBGQlF6dEJRVU14UXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRV3RDTEZGQlFWRXNRMEZCUXp0QlFVTXhReXhQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFWa3NWVUZCVlN4RFFVRkRPMEZCUXpWRExFOUJRVThzUlVGQlJTeGpRVUZqTEVWQlFVVXNUVUZCVVN4VlFVRlZMRU5CUVVNN1FVRkROVU1zVDBGQlVTeEpRVUZKTEUxQlFYRkNMRTFCUVUwc1EwRkJRenRCUVV0NFF5eE5RVUZOTEV0QlFVc3NSMEZCUnp0SlFVTldMRXRCUVVzc1JVRkJUeXhUUVVGVE8wbEJSWEpDTEVsQlFVa3NSVUZCVVN4VFFVRlRPMGxCUTNKQ0xFZEJRVWNzUlVGQlV5eFRRVUZUTzBsQlEzSkNMRlZCUVZVc1JVRkJSU3hUUVVGVE8wbEJRM0pDTEV0QlFVc3NSVUZCVHl4VFFVRlRPMGxCUTNKQ0xFOUJRVThzUlVGQlN5eFRRVUZUTzBsQlEzSkNMRTFCUVUwc1JVRkJUU3hUUVVGVE8wbEJSWEpDTEV0QlFVc3NSVUZCVHl4VlFVRlZPMGxCUTNSQ0xFZEJRVWNzUlVGQlV5eFZRVUZWTzBsQlEzUkNMRXRCUVVzc1JVRkJUeXhWUVVGVk8wbEJRM1JDTEUxQlFVMHNSVUZCVFN4VlFVRlZPMGxCUTNSQ0xFbEJRVWtzUlVGQlVTeFZRVUZWTzBsQlEzUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wbEJRM1JDTEVsQlFVa3NSVUZCVVN4VlFVRlZPMGxCUTNSQ0xFdEJRVXNzUlVGQlR5eFZRVUZWTzBsQlJYUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wbEJRM1JDTEZOQlFWTXNSVUZCUnl4VlFVRlZPMGxCUTNSQ0xGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlEzUkNMRkZCUVZFc1JVRkJTU3hWUVVGVk8wbEJRM1JDTEZkQlFWY3NSVUZCUXl4VlFVRlZPMGxCUTNSQ0xGRkJRVkVzUlVGQlNTeFZRVUZWTzBsQlEzUkNMRWxCUVVrc1JVRkJVU3hWUVVGVk8wbEJSWFJDTEU5QlFVOHNSVUZCU3l4VlFVRlZPMGxCUTNSQ0xFdEJRVXNzUlVGQlR5eFZRVUZWTzBsQlEzUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wbEJRM1JDTEZGQlFWRXNSVUZCU1N4VlFVRlZPMGxCUTNSQ0xFMUJRVTBzUlVGQlRTeFZRVUZWTzBsQlEzUkNMRk5CUVZNc1JVRkJSeXhWUVVGVk8wbEJRM1JDTEUxQlFVMHNSVUZCVFN4VlFVRlZPMGxCUTNSQ0xFOUJRVThzUlVGQlN5eFZRVUZWTzBOQlEzcENMRU5CUVVNN1FVRlJSaXhOUVVGTkxFOUJRVThzUjBGQlNTeFRRVUZSTEU5QlFVODdTVUZOTlVJc1dVRkJXU3hOUVVGaExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZWMFF5eFRRVUZUTEVOQlFVTXNSMEZCVHp0UlFVTndRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRSeXhEUVVGRE8wbEJTMU1zVFVGQlRTeERRVUZETEV0QlFXTXNSVUZCUlN4TlFVRmhMRVZCUVVVc1NVRkJWenRSUVVOMlJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRja1FzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUVVVc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVRkZPMUZCUTJoR0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExFbEJRVWtzUlVGQlJUdFpRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlFVVTdZVUZEY0VRN1dVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUVVVN1NVRkRPVUlzUTBGQlF6dEpRV05OTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJiVUk3VVVGRGNFTXNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRM1JDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdVMEZEZGtJN1lVRkJUU3hKUVVGSkxGZEJRVmNzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEYkVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZITEZOQlFWTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRMjVGTzJGQlFVMHNTVUZCU1N4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZGTEVOQlFVTXNSVUZCUlR0WlFVTndReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRM1JETEVsQlFVazdaMEpCUTBFc1RVRkJUU3hOUVVGTkxFZEJRVmNzVFVGQlRTeFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU5VTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRE8yOUNRVU42UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUzBGQlN5eERRVUZETEVkQlFVY3NiME5CUVc5RExFTkJRVU1zUTBGQlF6dHBRa0ZEY2tVN2NVSkJRVTA3YjBKQlEwZ3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExFTkJRVU03YjBKQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNwRU8yZENRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRoUVVOMlFqdFpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVOUUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRPMmRDUVVONlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF5eERRVUZETzJkQ1FVTXpSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRoUVVGTkxFbEJRVWtzVjBGQlZ5eExRVUZMTEVWQlFVVXNSVUZCUlR0WlFVTXpRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xTkJRekZETzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGRExGZEJRVmNzUTBGQlF6dFRRVU0xUWp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUVN4RFFVRkRMRU5CUVVNc2RVSkJRWFZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU14Uml4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVlRMR0ZCUVdFc1EwRkJReXhOUVVGaExFVkJRVVVzUzBGQldTeEZRVUZGTEZWQlFXbENMRVZCUVVVc1RVRkJaVHRSUVVOdVJpeE5RVUZOTEV0QlFVc3NSMEZCU1N4TlFVRk5MRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRha1VzVDBGQlR5eERRVUZETEVkQlFVY3NWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRE1VWXNRMEZCUXpzN1FVRTVSV0VzVDBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGREluMD0iLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImNoaWxkX3Byb2Nlc3NcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJjcnlwdG9cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmc1wiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImh0dHBcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYXRoXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1widXJsXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=