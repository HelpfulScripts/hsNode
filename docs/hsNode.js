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

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js ***!
  \************************************************************************************/
/*! exports provided: uniquefy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniquefy", function() { return uniquefy; });
function uniquefy(array, key) {
    const unique = {};
    return key ? array.filter(t => unique[t['' + key]] ? false : (unique[t['' + key]] = true))
        : array.filter(t => unique['' + t] ? false : (unique['' + t] = true));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBLE1BQU0sVUFBVSxRQUFRLENBQUksS0FBUyxFQUFFLEdBQWtCO0lBQ3JELE1BQU0sTUFBTSxHQUE0QixFQUFFLENBQUM7SUFDM0MsT0FBTyxHQUFHLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0UsQ0FBQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js ***!
  \***********************************************************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
class Auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBZ0IsSUFBSTtJQUl0QixZQUFZLFFBQWUsRUFBRSxRQUFlO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FHSiJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js":
/*!****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js ***!
  \****************************************************************************************/
/*! exports provided: AuthBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthBasic", function() { return AuthBasic; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('RequestBasic');

class AuthBasic extends _Auth__WEBPACK_IMPORTED_MODULE_1__["Auth"] {
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        options.headers.Authorization = 'Basic ' + _btoa(`${this.username}:${this.password}`);
        return options;
    }
}
function _btoa(str) {
    const buffer = str instanceof Buffer ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEJhc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0F1dGhCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQW1CLE9BQU8sQ0FBQztBQUFHLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBa0IsUUFBUSxDQUFDO0FBRzFDLE1BQU0sT0FBTyxTQUFVLFNBQVEsSUFBSTtJQUMvQixRQUFRLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxRQUF3QjtRQUMzRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFBLHlDQUF5QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxTQUFTLEtBQUssQ0FBQyxHQUFpQjtJQUM1QixNQUFNLE1BQU0sR0FBRyxHQUFHLFlBQVksTUFBTSxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDIn0=
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/node_modules/buffer/index.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/webpack/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js":
/*!*****************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js ***!
  \*****************************************************************************************/
/*! exports provided: AuthDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDigest", function() { return AuthDigest; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Auth.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('RequestDigest');


class AuthDigest extends _Auth__WEBPACK_IMPORTED_MODULE_2__["Auth"] {
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
            let cnonceHash = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
            cnonceHash.update(Math.random().toString(36));
            cnonce = cnonceHash.digest('hex').substr(0, 16);
            nc = this.updateNC();
        }
        return { cnonce: cnonce, nc: nc };
    }
    testAuth(options, data, response) {
        log.debug(() => `received www-authenticate request for ${options.host}`);
        let challenge = parseDigestResponse(response.headers['www-authenticate']);
        let ha1 = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        let _str = `${this.username}:${challenge.realm}:${this.password}`;
        ha1.update(_str);
        let ha2 = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
        _str = `${options.method}:${options.path}`;
        ha2.update(_str);
        let { nc, cnonce } = this.generateCNONCE(challenge.qop);
        let hash = Object(crypto__WEBPACK_IMPORTED_MODULE_1__["createHash"])('md5');
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
    digestHeader.replace(/([^,]*)/g, (...rest) => {
        const part = rest[1];
        if (part) {
            const kv = part.split('=').map((v) => v.trim());
            params[kv[0]] = kv[1].replace(/\"/g, '');
        }
        return '';
    });
    return params;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aERpZ2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoRGlnZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBbUIsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFZLFFBQVEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQWtCLFFBQVEsQ0FBQztBQU0xQyxNQUFNLE9BQU8sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0ksT0FBRSxHQUFHLENBQUMsQ0FBQztJQXlFWCxDQUFDO0lBcEVHLFFBQVE7UUFDSixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN0QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFNRCxjQUFjLENBQUMsR0FBVTtRQUNyQixJQUFJLE1BQVUsQ0FBQztRQUNmLElBQUksRUFBUyxDQUFDO1FBRWQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxD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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js":
/*!***************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js ***!
  \***************************************************************************************/
/*! exports provided: shortCheckSum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return shortCheckSum; });
function shortCheckSum(s) {
    let chk = 0x12345678;
    for (let i = 0; i < s.length; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxDQUFRO0lBQ25DLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUNyQixLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFDRCxPQUFPLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js":
/*!***********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js ***!
  \***********************************************************************************/
/*! exports provided: date, ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return ms; });
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
const ms = {
    fromMinutes: (min) => 1000 * 60 * min,
    fromHours: (h) => 1000 * 60 * 60 * h,
    fromDays: (d) => 1000 * 60 * 60 * 24 * d,
    fromWeeks: (w) => 1000 * 60 * 60 * 24 * 7 * w,
    toMinutes: (ms) => ms / (1000 * 60),
    toHours: (ms) => ms / (1000 * 60 * 60),
    toDays: (ms) => ms / (1000 * 60 * 60 * 24),
    toWeeks: (ms) => ms / (1000 * 60 * 60 * 24 * 7)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLE1BQU0sUUFBUSxHQUFHO0lBQ2IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0lBQzVHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztDQUFDLENBQUM7QUFHNUgsTUFBTSxNQUFNLEdBQUc7SUFDWCxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7Q0FBQyxDQUFDO0FBRzNJLFNBQVMsWUFBWSxDQUFDLE1BQWEsRUFBRSxNQUFhO0lBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBQyxNQUFNLENBQUM7SUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQUU7SUFDMUMsT0FB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SUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUM7SUFDL0MsU0FBUyxFQUFPLENBQUMsQ0FBUSxFQUFJLEVBQUUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUM7SUFDakQsU0FBUyxFQUFPLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO0lBQzVDLE9BQU8sRUFBUyxDQUFDLEVBQVMsRUFBRyxFQUFFLENBQUMsRUFBRSxHQUFDLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDL0MsTUFBTSxFQUFVLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDbEQsT0FBTyxFQUFTLENBQUMsRUFBUyxFQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0NBQ3ZELENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js":
/*!*************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js ***!
  \*************************************************************************************/
/*! exports provided: timeout, delay, Pace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return Pace; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('Pacing');
function timeout(ms, ...rest) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms, ...rest); });
}
function delay(ms) {
    return (args) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(args); }, ms);
        });
    };
}
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
    async add(fn, key) {
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
    }
    resolveItem(item, waitTime) {
        return new Promise((resolve, reject) => {
            const execute = async (_item) => {
                try {
                    const key = _item.key;
                    delete _item.pace.queue[key];
                    _item.pace.waiting--;
                    await belowConcurrentLimit(_item.pace);
                    _item.pace.started++;
                    const actualDelay = Date.now() - _item.added;
                    const ret = await _item.fn(actualDelay);
                    _item.pace.started--;
                    resolve(ret);
                }
                catch (e) {
                    _item.pace.started--;
                    reject(e);
                }
            };
            item.timer = setTimeout(execute, waitTime, item);
        });
    }
}
function belowConcurrentLimit(pace) {
    return new Promise(release => {
        const waitLoop = () => pace.isAllowed() ? release() : setTimeout(waitLoop, 10);
        waitLoop();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFjaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1BhY2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU8sT0FBTyxDQUFDO0FBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFTNUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxFQUFTLEVBQUUsR0FBRyxJQUFVO0lBQzVDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQWdDRCxNQUFNLFVBQVUsS0FBSyxDQUFDLEVBQVM7SUFDM0IsT0FBTyxDQUFJLElBQU8sRUFBYSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUU7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztBQUNOLENBQUM7QUFtQkQsTUFBTSxPQUFPLElBQUk7SUFpQ2IsWUFBWSxFQUFDLElBQUksR0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixHQUFDLENBQUMsRUFBQztRQS9CcEQsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixTQUFJLEdBQWMsQ0FBQyxDQUFDO1FBRXBCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFFcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFVBQUssR0FBd0IsRUFBRSxDQUFDO1FBY2pDLHFC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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js ***!
  \**************************************************************************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony import */ var _AuthDigest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthDigest */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthDigest.js");
/* harmony import */ var _AuthBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthBasic */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/AuthBasic.js");

const log = new _log__WEBPACK_IMPORTED_MODULE_0__["Log"]('Request');



log.messageLength = 120;
class Request {
    constructor() {
        this.log = log;
        this.setCredentials = (user, password) => {
            this.credentials = user === undefined ? undefined : { user: user, password: password };
        };
        this.setAuthToken = (token) => this.authToken = token;
        this.setPace = ({ pace = 50, max = 10, collectionPeriod = 100 } = { pace: undefined }) => {
            this.pace = pace === undefined ? undefined : new _Pacing__WEBPACK_IMPORTED_MODULE_1__["Pace"]({ pace: pace, maxConcurrent: max, collectionPeriod: collectionPeriod });
        };
        this.decode = undefined;
        this.cacheName = (options) => this.cache === undefined ? undefined :
            `${this.cache}/${options.path.replace(/q=(.*?)\//g, 'q=$1-').replace(/\?/g, '')}`;
    }
    async get(url, { useCached = true, headers = {} } = {}) {
        const options = this.getOptions(url, 'GET');
        return this.decodedRequest(options, useCached, headers);
    }
    async put(url, postData, { useCached = false, headers = {} } = {}) {
        const options = this.getOptions(url, 'PUT');
        return this.decodedRequest(options, useCached, headers, postData);
    }
    async post(url, postData, { useCached = false, headers = {} } = {}) {
        const options = this.getOptions(url, 'POST');
        return this.decodedRequest(options, useCached, headers, postData);
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
            url: `${url.protocol}//${url.host}${prefix + url.pathname + (url.search || '')}`,
        };
        if (this.authToken) {
            options.headers.AuthToken = this.authToken;
        }
        return options;
    }
    async decodedRequest(options, useCached, headers, postData) {
        const result = await this.requestOptions(options, useCached, postData);
        if (this.decode && result.response.txt && options.method === 'GET') {
            result.data = this.decode(result.data, options);
        }
        return result;
    }
    async readCached(fname) {
        return undefined;
    }
    async writeCached(fname, response) {
    }
    async requestOptions(options, useCached, postData) {
        const fname = this.cache ? this.cacheName(options) : undefined;
        if (fname && useCached && options.method === 'GET') {
            const result = await this.readCached(fname);
            if (result !== undefined) {
                return result;
            }
        }
        let request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) ${options.method}-ing ${options.url}`);
            request = this.pace.add(() => this.request(options, postData), `${options.method} ${options.url}`);
        }
        else {
            request = this.request(options, postData);
        }
        this.log.debug(() => `${options.method}-ing ${options.url}`);
        const response = await request;
        if (this.pace) {
            this.log.transient(`(${this.pace.inQueue()} | ${this.pace.inProgress()}) received ${options.method} ${options.url} `);
        }
        this.log.debug(() => `received ${options.method} ${response.response.statusMessage} ${options.method} ${options.url}`);
        const code = response.response.statusCode || response.response.status;
        if (code >= 200 && code < 300) {
            if (fname && options.method === 'GET') {
                await this.writeCached(fname, response);
            }
        }
        return response;
    }
    async request(options, postData) {
        try {
            const response = await this.issueRequest(options, postData);
            let authenticate = response.response.headers['www-authenticate'];
            if (!authenticate) {
                return response;
            }
            else if (this.credentials) {
                authenticate = authenticate.trim();
                let auth;
                if (authenticate.indexOf('Digest') === 0) {
                    auth = new _AuthDigest__WEBPACK_IMPORTED_MODULE_2__["AuthDigest"](this.credentials.user, this.credentials.password);
                }
                else if (authenticate.indexOf('Basic') === 0) {
                    auth = new _AuthBasic__WEBPACK_IMPORTED_MODULE_3__["AuthBasic"](this.credentials.user, this.credentials.password);
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
    }
    async issueRequest(options, postData) {
        const request = this;
        return new Promise((resolve, reject) => {
            try {
                function confirmRequest(e) {
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
Request.decoders = {
    str2json: (data) => { try {
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    } },
    html2json: undefined
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQWUsT0FBTyxDQUFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFjLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQVEsY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBUyxhQUFhLENBQUM7QUFHM0MsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7QUF3RHhCLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBT2MsUUFBRyxHQUFRLEdBQUcsQ0FBQztRQXVCbEIsbUJBQWMsR0FBRyxDQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUcsU0FBUyxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDeEYsQ0FBQyxDQUFBO1FBR00saUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBUW5CLFlBQU8sR0FBRyxDQUFDLEVBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFDLEdBQUcsS0FBRSxFQUFDLElBQUksRUFBTSxTQUFTLEVBQUMsRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFHLFNBQVMsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDLElBQUksRUFB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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js ***!
  \************************************************************************************/
/*! exports provided: timeout, delay, Pace, Request, shortCheckSum, date, ms, Log, uniquefy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pacing */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Pacing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pace", function() { return _Pacing__WEBPACK_IMPORTED_MODULE_0__["Pace"]; });

/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Request */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return _Request__WEBPACK_IMPORTED_MODULE_1__["Request"]; });

/* harmony import */ var _Checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Checksum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shortCheckSum", function() { return _Checksum__WEBPACK_IMPORTED_MODULE_2__["shortCheckSum"]; });

/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "date", function() { return _Date__WEBPACK_IMPORTED_MODULE_3__["date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return _Date__WEBPACK_IMPORTED_MODULE_3__["ms"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return _log__WEBPACK_IMPORTED_MODULE_4__["Log"]; });

/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniquefy", function() { return _Array__WEBPACK_IMPORTED_MODULE_5__["uniquefy"]; });







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBaUIsVUFBVSxDQUFDO0FBQzVCLGNBQWlCLFdBQVcsQ0FBQztBQUM3QixjQUFpQixZQUFZLENBQUM7QUFDOUIsY0FBaUIsUUFBUSxDQUFDO0FBQzFCLGNBQWlCLE9BQU8sQ0FBQztBQUN6QixjQUFpQixTQUFTLENBQUMifQ==

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js":
/*!**********************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/log.js ***!
  \**********************************************************************************/
/*! exports provided: Log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/Date.js");

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
            const dateStr = Object(_Date__WEBPACK_IMPORTED_MODULE_0__["date"])(Log.dateFormat);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRkEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QixNQUFNLEtBQUssR0FBRztJQUNWLEtBQUssRUFBTywyREFBMkQ7SUFFdkUsSUFBSSxFQUFRLG1CQUFtQjtJQUMvQixHQUFHLEVBQVMsRUFBRTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsS0FBSyxFQUFPLEVBQUU7SUFDZCxPQUFPLEVBQUssRUFBRTtJQUNkLE1BQU0sRUFBTSxFQUFFO0lBRWQsS0FBSyxFQUFPLGFBQWE7SUFDekIsR0FBRyxFQUFTLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFDekIsTUFBTSxFQUFNLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFDekIsS0FBSyxFQUFPLGFBQWE7SUFFekIsT0FBTyxFQUFLLGFBQWE7SUFDekIsU0FBUyxFQUFHLGFBQWE7SUFDekIsVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsV0FBVyxFQUFDLGFBQWE7SUFDekIsUUFBUSxFQUFJLGFBQWE7SUFDekIsSUFBSSxFQUFRLGFBQWE7SUFFekIsT0FBTyxFQUFLLHdCQUF3QjtJQUNwQyxLQUFLLEVBQU8sd0JBQXdCO0lBQ3BDLE9BQU8sRUFBSyx3QkFBd0I7SUFDcEMsUUFBUSxFQUFJLHdCQUF3QjtJQUNwQyxNQUFNLEVBQU0sd0JBQXdCO0lBQ3BDLFNBQVMsRUFBRyx3QkFBd0I7SUFDcEMsTUFBTSxFQUFNLHdCQUF3QjtJQUNwQyxPQUFPLEVBQUssd0JBQXdCO0NBQ3ZDLENBQUM7QUFlRixNQUFNLE9BQU8sR0FBRztJQXFDWixZQUFZLE1BQWE7UUFMZixnQkFBVyxHQUFnQixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBSSxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBVSxJQUFJLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUFDLENBQUM7SUFRMUQsSUFBVyxhQUFhLENBQUMsR0FBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUc5RCxJQUFXLGFBQWEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBbUI5QyxLQUFLLENBQUMsV0FBbUIsRUFBRSxjQUF1QjtRQUNyRCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ25ELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUMzQixRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hDLElBQUksY0FBYyxFQUFFO2dCQUFFLEdBQUcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQUU7aUJBQy9CO2dCQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQUU7WUFDcEQsTUFBTSxHQUFHLEdBQUcsT0FBTyxjQUFjLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksY0FBYyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQztZQUNoSixDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JFO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixXQUFXLHVCQUF1QixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBU00sS0FBSyxDQUFDLEdBQU8sSUFBVyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBUy9FLFNBQVMsQ0FBQyxHQUFPLElBQVcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBU2hHLFFBQVEsQ0FBQyxHQUFPLElBQVcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWFyRixJQUFJLENBQUMsR0FBTyxJQUFXLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFTbEYsSUFBSSxDQUFDLEdBQU8sSUFBVyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQVUzRixLQUFLLENBQUMsR0FBTztRQUNoQixNQUFNLEtBQUssR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDakQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFhUyxHQUFHLENBQUMsR0FBVSxFQUFFLEdBQU8sRUFBRSxPQUFXO1FBQzFDLElBQUksSUFBSSxHQUFhLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3hELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQzNDLElBQUksSUFBSSxDQUFDO1lBQ1QsUUFBTyxPQUFPLEdBQUcsRUFBRTtnQkFDZixLQUFLLFVBQVU7b0JBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUFDLE1BQU07Z0JBQ3JDLEtBQUssUUFBUTtvQkFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO29CQUFDLE1BQU07Z0JBQ25DLEtBQUssUUFBUSxDQUFDO2dCQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsRUFBRTtnQkFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7YUFDckY7WUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUFFO1lBQ2xELE1BQU0sTUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUlTLE1BQU0sQ0FBQyxLQUFjLEVBQUUsTUFBYSxFQUFFLElBQVc7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sTUFBTSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFZTSxNQUFNLENBQUMsTUFBYztRQUN4QixJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFBRSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7U0FBRTthQUN2RCxJQUFJLE1BQU0sRUFBTTtZQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQUU7UUFDakQsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQzFCLENBQUM7SUFPTSxNQUFNLENBQUMsR0FBVztRQUNyQixJQUFJLEdBQUcsRUFBRTtZQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQUU7UUFDckMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFVTSxNQUFNLENBQUMsR0FBcUQ7UUFDL0QsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFHLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFHLFNBQVMsRUFBRztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7UUFDdEQsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFHLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUFFO0lBQzdELENBQUM7SUFpQk0sT0FBTyxDQUFDLEdBQU8sRUFBRSxFQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUMsS0FBSyxFQUFFLE1BQU0sR0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLEdBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUM7UUFDeEgsU0FBUyxRQUFRLENBQUMsR0FBTyxFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsVUFBaUI7WUFDcEUsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFnQjtnQkFBRSxPQUFPLE1BQU0sQ0FBQzthQUFFO1lBQ2xELElBQUksR0FBRyxLQUFLLFNBQVMsRUFBVztnQkFBRSxPQUFPLFdBQVcsQ0FBQzthQUFFO1lBQ3ZELElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxFQUFHO2dCQUFFLE9BQU8sVUFBVSxDQUFDO2FBQUU7WUFDdEQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUs7Z0JBQUUsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDO2FBQUU7WUFDdEQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUs7Z0JBQzVCLElBQUksS0FBSyxHQUFDLENBQUMsRUFBRTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQ3REO2dCQUNELElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQ3ZCLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSyxFQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBRyxTQUFTLENBQUMsQ0FBQSxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUMzRztnQkFDRCxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDL0YsT0FBTyxJQUFJLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sS0FDL0QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUMsQ0FBQyxFQUFFLEtBQUssR0FBQyxDQUFDLEVBQUUsVUFBVSxHQUFDLE1BQU0sQ0FDeEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxVQUFVLEdBQUcsQ0FBQzthQUM5QztZQUNELE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxLQUFHLFNBQVMsSUFBSSxLQUFLLEtBQUcsSUFBSSxJQUFJLEtBQUssSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFUyxhQUFhLENBQUMsTUFBYSxFQUFFLEtBQVksRUFBRSxVQUFpQixFQUFFLE1BQWU7UUFDbkYsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN2QyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFaEQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEYsTUFBTSxHQUFJLG1CQUFtQixLQUFLLElBQUksQ0FBQztZQUN2QyxLQUFLLEdBQUssYUFBYSxDQUFDO1lBQ3hCLEVBQUUsR0FBUSxNQUFNLENBQUM7U0FDcEI7UUFDRCxPQUFPLENBQUMsR0FBRyxVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU0sRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDOztBQTVSZ0IsaUJBQWEsR0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFOUYsaUJBQWEsR0FBRyw4QkFBOEIsQ0FBQztBQUMvQyxjQUFVLEdBQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUdyQyxTQUFLLEdBQUcsT0FBTyxDQUFDO0FBR2hCLFFBQUksR0FBSyxNQUFNLENBQUM7QUFHaEIsUUFBSSxHQUFLLE1BQU0sQ0FBQztBQUdoQixTQUFLLEdBQUksT0FBTyxDQUFDO0FBR2QsVUFBTSxHQUFHO0lBQ3RCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFLLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0lBQzlELENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFNLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQzdELENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFNLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQzdELENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFLLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0NBQ2pFLENBQUM7QUFHWSxPQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFHZixlQUFXLEdBQWEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMifQ==

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
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");


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
                if ((e === null || e === void 0 ? void 0 : e.code) !== 'EEXIST') {
                    console.warn(`error in mkdirs: ${e === null || e === void 0 ? void 0 : e.code}`);
                    console.warn(e);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnNVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkEsT0FBTyxLQUFLLEVBQUUsTUFBZSxJQUFJLENBQUM7QUFDbEMsT0FBTyxLQUFLLElBQUksTUFBYSxNQUFNLENBQUM7QUE4QnBDLEtBQUssVUFBVSxJQUFJLENBQUMsT0FBYztJQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFPLEVBQUUsS0FBYyxFQUFFLEVBQUU7WUFDbkMsSUFBRyxHQUFHLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUNJO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUFFO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBT0QsS0FBSyxVQUFVLEtBQUssQ0FBQyxPQUFjO0lBQy9CLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQU8sRUFBRSxLQUFTLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDNUUs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
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
/* harmony import */ var hsutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/bin/esm/index.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc05vZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vQXJyYXkuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vQXV0aC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9BdXRoQmFzaWMuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2Jpbi9lc20vQXV0aERpZ2VzdC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9DaGVja3N1bS5qcyIsIndlYnBhY2s6Ly9oc05vZGUvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9EYXRlLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL1BhY2luZy5qcyIsIndlYnBhY2s6Ly9oc05vZGUvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9oc3V0aWwvYmluL2VzbS9SZXF1ZXN0LmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9iaW4vZXNtL2xvZy5qcyIsIndlYnBhY2s6Ly9oc05vZGUvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9odG1sMmpzb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHRtbDJqc29uL2xpYi9QdXJlLUphdmFTY3JpcHQtSFRNTDUtUGFyc2VyL2h0bWxwYXJzZXIuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHRtbDJqc29uL3NyYy9odG1sMmpzb24uanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvKHdlYnBhY2spL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8od2VicGFjaykvbm9kZV9tb2R1bGVzL2h0dHBzLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvKHdlYnBhY2spL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8od2VicGFjaykvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9oc05vZGUvLi9iaW4vZXNtL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2VzbS9jcFV0aWwuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2VzbS9mc1V0aWwuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvLi9iaW4vZXNtL2xvZy5qcyIsIndlYnBhY2s6Ly9oc05vZGUvZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9oc05vZGUvZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2hzTm9kZS9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7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Q0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qyw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzlXRDtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxLQUEwQjtBQUNoQyxJQUFJLG1CQUFPLENBQUMsK0xBQW1EO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsSUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDMUtEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxzSUFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsa0lBQVM7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLGtJQUFTOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1dkRBLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6QixVQUFVLG1CQUFPLENBQUMsZ0JBQUs7O0FBRXZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQSxRQUFRLFVBQVU7O0FBRWxCO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FB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QUNBLHdEQUF3RCxtREFBSSxlQUFlO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTTtBQUMvQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbTlJOzs7Ozs7Ozs7Ozs7QUNuRzNDLGFBQWEsd0NBQXdDLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBdkQsYUFBYSxpQ0FBaUMsRUFBRSxJOzs7Ozs7Ozs7OztBQ0FoRCxhQUFhLDZCQUE2QixFQUFFLEk7Ozs7Ozs7Ozs7O0FDQTVDLGFBQWEsK0JBQStCLEVBQUUsSTs7Ozs7Ozs7Ozs7QUNBOUMsYUFBYSwrQkFBK0IsRUFBRSxJOzs7Ozs7Ozs7OztBQ0E5QyxhQUFhLDhCQUE4QixFQUFFLEkiLCJmaWxlIjoiaHNOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iaW4vZXNtL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZWZ5KGFycmF5LCBrZXkpIHtcbiAgICBjb25zdCB1bmlxdWUgPSB7fTtcbiAgICByZXR1cm4ga2V5ID8gYXJyYXkuZmlsdGVyKHQgPT4gdW5pcXVlW3RbJycgKyBrZXldXSA/IGZhbHNlIDogKHVuaXF1ZVt0WycnICsga2V5XV0gPSB0cnVlKSlcbiAgICAgICAgOiBhcnJheS5maWx0ZXIodCA9PiB1bmlxdWVbJycgKyB0XSA/IGZhbHNlIDogKHVuaXF1ZVsnJyArIHRdID0gdHJ1ZSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhKeVlYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlFYSnlZWGt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlowTkJMRTFCUVUwc1ZVRkJWU3hSUVVGUkxFTkJRVWtzUzBGQlV5eEZRVUZGTEVkQlFXdENPMGxCUTNKRUxFMUJRVTBzVFVGQlRTeEhRVUUwUWl4RlFVRkZMRU5CUVVNN1NVRkRNME1zVDBGQlR5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUjBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVONFJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE4wVXNRMEZCUXlKOSIsImV4cG9ydCBjbGFzcyBBdXRoIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUVhWMGFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5QmRYUm9MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVkQkxFMUJRVTBzVDBGQlowSXNTVUZCU1R0SlFVbDBRaXhaUVVGWkxGRkJRV1VzUlVGQlJTeFJRVUZsTzFGQlEzaERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETzBsQlF6ZENMRU5CUVVNN1EwRkhTaUo5IiwiaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9sb2cnO1xuY29uc3QgbG9nID0gbmV3IExvZygnUmVxdWVzdEJhc2ljJyk7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9BdXRoJztcbmV4cG9ydCBjbGFzcyBBdXRoQmFzaWMgZXh0ZW5kcyBBdXRoIHtcbiAgICB0ZXN0QXV0aChvcHRpb25zLCBkYXRhLCByZXNwb25zZSkge1xuICAgICAgICBsb2cuZGVidWcoKCkgPT4gYHJlY2VpdmVkIHd3dy1hdXRoZW50aWNhdGUgcmVxdWVzdCBmb3IgJHtvcHRpb25zLmhvc3R9YCk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBfYnRvYShgJHt0aGlzLnVzZXJuYW1lfToke3RoaXMucGFzc3dvcmR9YCk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9idG9hKHN0cikge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHN0ciBpbnN0YW5jZW9mIEJ1ZmZlciA/IHN0ciA6IEJ1ZmZlci5mcm9tKHN0ci50b1N0cmluZygpLCAnYmluYXJ5Jyk7XG4gICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUVKaGMybGpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwwRjFkR2hDWVhOcFl5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVzFDTEU5QlFVOHNRMEZCUXp0QlFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUjJoR0xFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNUVUZCYTBJc1VVRkJVU3hEUVVGRE8wRkJSekZETEUxQlFVMHNUMEZCVHl4VFFVRlZMRk5CUVZFc1NVRkJTVHRKUVVNdlFpeFJRVUZSTEVOQlFVTXNUMEZCWlN4RlFVRkZMRWxCUVZjc1JVRkJSU3hSUVVGM1FqdFJRVU16UkN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVVVzUlVGQlJTeERRVUZCTEhsRFFVRjVReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTjJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNSMEZCUnl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU4wUml4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBOQlEwbzdRVUZGUkN4VFFVRlRMRXRCUVVzc1EwRkJReXhIUVVGcFFqdEpRVU0xUWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhIUVVGSExGbEJRVmtzVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEyeEdMRTlCUVU4c1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTnlReXhEUVVGREluMD0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdSZXF1ZXN0RGlnZXN0Jyk7XG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuL0F1dGgnO1xuZXhwb3J0IGNsYXNzIEF1dGhEaWdlc3QgZXh0ZW5kcyBBdXRoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYyA9IDA7XG4gICAgfVxuICAgIHVwZGF0ZU5DKCkge1xuICAgICAgICBsZXQgbWF4ID0gOTk5OTk5OTk7XG4gICAgICAgIGxldCBwYWRkaW5nID0gbmV3IEFycmF5KDgpLmpvaW4oJzAnKSArICcnO1xuICAgICAgICB0aGlzLm5jID0gKHRoaXMubmMgPiBtYXggPyAxIDogdGhpcy5uYyArIDEpO1xuICAgICAgICBsZXQgbmMgPSB0aGlzLm5jICsgJyc7XG4gICAgICAgIHJldHVybiBwYWRkaW5nLnN1YnN0cigwLCA4IC0gbmMubGVuZ3RoKSArIG5jO1xuICAgIH1cbiAgICBnZW5lcmF0ZUNOT05DRShxb3ApIHtcbiAgICAgICAgbGV0IGNub25jZTtcbiAgICAgICAgbGV0IG5jO1xuICAgICAgICBpZiAodHlwZW9mIHFvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCBjbm9uY2VIYXNoID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgICAgICBjbm9uY2VIYXNoLnVwZGF0ZShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KSk7XG4gICAgICAgICAgICBjbm9uY2UgPSBjbm9uY2VIYXNoLmRpZ2VzdCgnaGV4Jykuc3Vic3RyKDAsIDE2KTtcbiAgICAgICAgICAgIG5jID0gdGhpcy51cGRhdGVOQygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNub25jZTogY25vbmNlLCBuYzogbmMgfTtcbiAgICB9XG4gICAgdGVzdEF1dGgob3B0aW9ucywgZGF0YSwgcmVzcG9uc2UpIHtcbiAgICAgICAgbG9nLmRlYnVnKCgpID0+IGByZWNlaXZlZCB3d3ctYXV0aGVudGljYXRlIHJlcXVlc3QgZm9yICR7b3B0aW9ucy5ob3N0fWApO1xuICAgICAgICBsZXQgY2hhbGxlbmdlID0gcGFyc2VEaWdlc3RSZXNwb25zZShyZXNwb25zZS5oZWFkZXJzWyd3d3ctYXV0aGVudGljYXRlJ10pO1xuICAgICAgICBsZXQgaGExID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgIGxldCBfc3RyID0gYCR7dGhpcy51c2VybmFtZX06JHtjaGFsbGVuZ2UucmVhbG19OiR7dGhpcy5wYXNzd29yZH1gO1xuICAgICAgICBoYTEudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgaGEyID0gY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgIF9zdHIgPSBgJHtvcHRpb25zLm1ldGhvZH06JHtvcHRpb25zLnBhdGh9YDtcbiAgICAgICAgaGEyLnVwZGF0ZShfc3RyKTtcbiAgICAgICAgbGV0IHsgbmMsIGNub25jZSB9ID0gdGhpcy5nZW5lcmF0ZUNOT05DRShjaGFsbGVuZ2UucW9wKTtcbiAgICAgICAgbGV0IGhhc2ggPSBjcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgX3N0ciA9IGAke2hhMS5kaWdlc3QoJ2hleCcpfToke2NoYWxsZW5nZS5ub25jZX06JHtuY306JHtjbm9uY2V9OiR7Y2hhbGxlbmdlLnFvcH06JHtoYTIuZGlnZXN0KCdoZXgnKX1gO1xuICAgICAgICBoYXNoLnVwZGF0ZShfc3RyKTtcbiAgICAgICAgbGV0IGF1dGhQYXJhbXMgPSB7XG4gICAgICAgICAgICByZWFsbTogY2hhbGxlbmdlLnJlYWxtLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICB1cmk6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgICAgIHFvcDogY2hhbGxlbmdlLnFvcCxcbiAgICAgICAgICAgIG5vbmNlOiBjaGFsbGVuZ2Uubm9uY2UsXG4gICAgICAgICAgICBhbGdvcml0aG06IFwiTUQ1XCIsXG4gICAgICAgICAgICByZXNwb25zZTogaGFzaC5kaWdlc3QoJ2hleCcpXG4gICAgICAgIH07XG4gICAgICAgIGF1dGhQYXJhbXMgPSBvbWl0TnVsbChhdXRoUGFyYW1zKTtcbiAgICAgICAgaWYgKGNub25jZSkge1xuICAgICAgICAgICAgYXV0aFBhcmFtcy5uYyA9IG5jO1xuICAgICAgICAgICAgYXV0aFBhcmFtcy5jbm9uY2UgPSBjbm9uY2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBjb21waWxlUGFyYW1zKGF1dGhQYXJhbXMpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5mdW5jdGlvbiBvbWl0TnVsbChkYXRhKSB7XG4gICAgbGV0IG5ld09iamVjdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgaWYgKGRhdGFba10gIT09IG51bGwgJiYgZGF0YVtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdPYmplY3Rba10gPSBkYXRhW2tdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld09iamVjdDtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVQYXJhbXMocGFyYW1zKSB7XG4gICAgbGV0IHBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbaV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IGkgKyAnPScgKyAocHV0RG91YmxlUXVvdGVzKGkpID8gYFwiJHtwYXJhbXNbaV19XCJgIDogcGFyYW1zW2ldKTtcbiAgICAgICAgICAgIHBhcnRzLnB1c2gocGFyYW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnRGlnZXN0ICcgKyBwYXJ0cy5qb2luKCcsJyk7XG59XG5mdW5jdGlvbiBwdXREb3VibGVRdW90ZXMoZW50cnkpIHtcbiAgICByZXR1cm4gWydxb3AnLCAnbmMnXS5pbmRleE9mKGVudHJ5KSA8IDA7XG59XG5mdW5jdGlvbiBwYXJzZURpZ2VzdFJlc3BvbnNlKGRpZ2VzdEhlYWRlcikge1xuICAgIGRpZ2VzdEhlYWRlciA9IGRpZ2VzdEhlYWRlci5zcGxpdCgnRGlnZXN0ICcpWzFdO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGRpZ2VzdEhlYWRlci5yZXBsYWNlKC8oW14sXSopL2csICguLi5yZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSByZXN0WzFdO1xuICAgICAgICBpZiAocGFydCkge1xuICAgICAgICAgICAgY29uc3Qga3YgPSBwYXJ0LnNwbGl0KCc9JykubWFwKCh2KSA9PiB2LnRyaW0oKSk7XG4gICAgICAgICAgICBwYXJhbXNba3ZbMF1dID0ga3ZbMV0ucmVwbGFjZSgvXFxcIi9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lRWFYwYUVScFoyVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUJkWFJvUkdsblpYTjBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCYlVJc1QwRkJUeXhEUVVGRE8wRkJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UVVGRGFrWXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGWkxGRkJRVkVzUTBGQlF6dEJRVWN4UXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRV3RDTEZGQlFWRXNRMEZCUXp0QlFVMHhReXhOUVVGTkxFOUJRVThzVlVGQlZ5eFRRVUZSTEVsQlFVazdTVUZCY0VNN08xRkJRMGtzVDBGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFYbEZXQ3hEUVVGRE8wbEJjRVZITEZGQlFWRTdVVUZEU2l4SlFVRkpMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGRGJrSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTjBRaXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGTlJDeGpRVUZqTEVOQlFVTXNSMEZCVlR0UlFVTnlRaXhKUVVGSkxFMUJRVlVzUTBGQlF6dFJRVU5tTEVsQlFVa3NSVUZCVXl4RFFVRkRPMUZCUldRc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hWUVVGVkxFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTI1RExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRhRVFzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVONFFqdFJRVU5FTEU5QlFVOHNSVUZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wbEJVVVFzVVVGQlVTeERRVUZETEU5QlFXVXNSVUZCUlN4SlFVRlhMRVZCUVVVc1VVRkJkMEk3VVVGRE0wUXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFVkJRVVVzUTBGQlFTeDVRMEZCZVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGZGtVc1NVRkJTU3hUUVVGVExFZEJRVThzYlVKQlFXMUNMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkNMRWxCUVVrc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNTVUZCU1N4VFFVRlRMRU5CUVVNc1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0UlFVTnNSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTXpReXhIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUldwQ0xFbEJRVWtzUlVGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRkRVFzU1VGQlNTeEpRVUZKTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRemRDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hGUVVGRkxFbEJRVWtzVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUTNaSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkhiRUlzU1VGQlNTeFZRVUZWTEVkQlFVODdXVUZEYWtJc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eExRVUZMTzFsQlEzUkNMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVUdFpRVU4yUWl4SFFVRkhMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWs3V1VGRGFrSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1EwRkJReXhIUVVGSE8xbEJRMnhDTEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1MwRkJTenRaUVVOMFFpeFRRVUZUTEVWQlFVVXNTMEZCU3p0WlFVTm9RaXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRMMElzUTBGQlF6dFJRVVZHTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRmJFTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRVaXhWUVVGVkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXp0WlFVTnVRaXhWUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0VFFVTTVRanRSUVVWRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU14UkN4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBOQlEwbzdRVUZGUkN4VFFVRlRMRkZCUVZFc1EwRkJReXhKUVVGUk8wbEJRM1JDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOdVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFWRXNSVUZCUlN4RlFVRkZPMUZCUTI1RExFbEJRVWtzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVGRk8wbEJRemxGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTBnc1QwRkJUeXhUUVVGVExFTkJRVU03UVVGRGNrSXNRMEZCUXp0QlFVMUVMRk5CUVZNc1lVRkJZU3hEUVVGRExFMUJRVlU3U1VGRE4wSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMllzUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1VVRkRiRUlzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhWUVVGVkxFVkJRVVU3V1VGRGFrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRNVVVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOeVFqdExRVU5LTzBsQlEwUXNUMEZCVHl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjJReXhEUVVGRE8wRkJUVVFzVTBGQlV5eGxRVUZsTEVOQlFVTXNTMEZCV1R0SlFVTnFReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTTdRVUZETVVNc1EwRkJRenRCUVVWRUxGTkJRVk1zYlVKQlFXMUNMRU5CUVVNc1dVRkJiVUk3U1VGRE5VTXNXVUZCV1N4SFFVRkhMRmxCUVZrc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRhRVFzVFVGQlRTeE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUld4Q0xGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGaExFVkJRVVVzUlVGQlJUdFJRVU5zUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRFZpeE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRka1FzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlF6VkRPMUZCUTBRc1QwRkJUeXhGUVVGRkxFTkJRVU03U1VGRFpDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTklMRTlCUVU4c1RVRkJUU3hEUVVGRE8wRkJRMnhDTEVOQlFVTWlmUT09IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3J0Q2hlY2tTdW0ocykge1xuICAgIGxldCBjaGsgPSAweDEyMzQ1Njc4O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGsgKz0gKHMuY2hhckNvZGVBdChpKSAqIChpICsgMSkpO1xuICAgIH1cbiAgICByZXR1cm4gKGNoayAmIDB4ZmZmZmZmZmYpLnRvU3RyaW5nKDE2KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVEyaGxZMnR6ZFcwdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12UTJobFkydHpkVzB1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlVVTXNUVUZCVFN4VlFVRlZMR0ZCUVdFc1EwRkJReXhEUVVGUk8wbEJRMjVETEVsQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVVOeVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVNelFpeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGRFTTdTVUZEUkN4UFFVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVNeFF5eERRVUZESW4wPSIsImNvbnN0IG1vbnRoU3RyID0gW1xuICAgIFsnSmFuJywgJ0phbnVhcnknXSwgWydGZWInLCAnRmVicnVhcnknXSwgWydNYXInLCAnTWFyY2gnXSwgWydBcHInLCAnQXByaWwnXSwgWydNYXknLCAnTWF5J10sIFsnSnVuJywgJ0p1bmUnXSxcbiAgICBbJ0p1bCcsICdKdWx5J10sIFsnQXVnJywgJ0F1Z3VzdCddLCBbJ1NlcCcsICdTZXB0ZW1iZXInXSwgWydPY3QnLCAnT2N0b2JlciddLCBbJ05vdicsICdOb3ZlbWJlciddLCBbJ0RlYycsICdEZWNlbWJlciddXG5dO1xuY29uc3QgZGF5U3RyID0gW1xuICAgIFsnU3VuJywgJ1N1bmRheSddLCBbJ01vbicsICdNb25kYXknXSwgWydUdWUnLCAnVHVlc2RheSddLCBbJ1dlZCcsICdXZWRuZXNkYXknXSwgWydUaHUnLCAnVGh1cnNkYXknXSwgWydGcmknLCAnRnJpZGF5J10sIFsnU2F0JywgJ1NhdHVyZGF5J11cbl07XG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyLCBkaWdpdHMpIHtcbiAgICBsZXQgciA9ICcnICsgbnVtYmVyO1xuICAgIHdoaWxlIChyLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgICByID0gXCIwXCIgKyByO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkYXRlKGZvcm1hdFN0cmluZywgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmb3JtYXRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgP1xuICAgICAgICAnaW52YWxpZCcgOlxuICAgICAgICBmb3JtYXRTdHJpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVlZWS9nLCAnJyArIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVkvZywgJycgKyAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNL2csICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREQvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRC9nLCAnJyArIGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoaC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRIb3VycygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laC9nLCAnJyArIGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbW0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbS9nLCAnJyArIGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVzcy9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCwgMSkpO1xufVxuZXhwb3J0IGNvbnN0IG1zID0ge1xuICAgIGZyb21NaW51dGVzOiAobWluKSA9PiAxMDAwICogNjAgKiBtaW4sXG4gICAgZnJvbUhvdXJzOiAoaCkgPT4gMTAwMCAqIDYwICogNjAgKiBoLFxuICAgIGZyb21EYXlzOiAoZCkgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIGQsXG4gICAgZnJvbVdlZWtzOiAodykgPT4gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcgKiB3LFxuICAgIHRvTWludXRlczogKG1zKSA9PiBtcyAvICgxMDAwICogNjApLFxuICAgIHRvSG91cnM6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjApLFxuICAgIHRvRGF5czogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSxcbiAgICB0b1dlZWtzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiA3KVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVJHRjBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OUVZWFJsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFXVkJMRTFCUVUwc1VVRkJVU3hIUVVGSE8wbEJRMklzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRE8wbEJRelZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGZEJRVmNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF6dERRVUZETEVOQlFVTTdRVUZITlVnc1RVRkJUU3hOUVVGTkxFZEJRVWM3U1VGRFdDeERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4WFFVRlhMRU5CUVVNc1JVRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNN1EwRkJReXhEUVVGRE8wRkJSek5KTEZOQlFWTXNXVUZCV1N4RFFVRkRMRTFCUVdFc1JVRkJSU3hOUVVGaE8wbEJRemxETEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJReXhOUVVGTkxFTkJRVU03U1VGRGJFSXNUMEZCVHl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUlVGQlJUdFJRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRVVU3U1VGRE1VTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1FVRkRZaXhEUVVGRE8wRkJZMFFzVFVGQlRTeFZRVUZWTEVsQlFVa3NRMEZCUXl4WlFVRnRRaXhGUVVGRkxFbEJRVWtzUjBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlR0SlFVTnlSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eFpRVUZaTEV0QlFVc3NVVUZCVVN4SlFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRVVzVTBGQlV5eERRVUZCTEVOQlFVTTdVVUZEVml4WlFVRlpPMkZCUTFBc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8yRkJRM2hETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRemxETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMmhFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMmhFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGNFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJTU3hGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGVFTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE5VTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRE5VTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJTU3haUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVrc1JVRkJSU3hIUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTnVReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYkVRc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJ5eEZRVUZGTEVkQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRE8yRkJRMjVETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVrc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1JDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkpMRVZCUVVVc1IwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdZVUZEZEVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkVMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU14UkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRWRCUVVNc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1IwRkJReXhIUVVGSExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjZSU3hEUVVGRE8wRkJSMFFzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhPMGxCUTJRc1YwRkJWeXhGUVVGTExFTkJRVU1zUjBGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRWRCUVVNc1JVRkJSU3hIUVVGRExFZEJRVWM3U1VGRE0wTXNVMEZCVXl4RlFVRlBMRU5CUVVNc1EwRkJVU3hGUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRE8wbEJRelZETEZGQlFWRXNSVUZCVVN4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU03U1VGREwwTXNVMEZCVXl4RlFVRlBMRU5CUVVNc1EwRkJVU3hGUVVGSkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEhRVUZETEVOQlFVTTdTVUZEYWtRc1UwRkJVeXhGUVVGUExFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlF6VkRMRTlCUVU4c1JVRkJVeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVOQlFVTTdTVUZETDBNc1RVRkJUU3hGUVVGVkxFTkJRVU1zUlVGQlV5eEZRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJReXhKUVVGSkxFZEJRVU1zUlVGQlJTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkRiRVFzVDBGQlR5eEZRVUZUTEVOQlFVTXNSVUZCVXl4RlFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETzBOQlEzWkVMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdQYWNpbmcnKTtcbmV4cG9ydCBmdW5jdGlvbiB0aW1lb3V0KG1zLCAuLi5yZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHsgc2V0VGltZW91dChyZWplY3QsIG1zLCAuLi5yZXN0KTsgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gKGFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcmVzb2x2ZShhcmdzKTsgfSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZXhwb3J0IGNsYXNzIFBhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHsgcGFjZSA9IDEwMCwgbWF4Q29uY3VycmVudCA9IC0xLCBjb2xsZWN0aW9uUGVyaW9kID0gMCB9KSB7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IC0xO1xuICAgICAgICB0aGlzLnBhY2UgPSAwO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCA9IDA7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IDA7XG4gICAgICAgIHRoaXMucXVldWUgPSB7fTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uUGVyaW9kID0gMDtcbiAgICAgICAgdGhpcy5wYWNlID0gcGFjZTtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gbWF4Q29uY3VycmVudDtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uUGVyaW9kID0gY29sbGVjdGlvblBlcmlvZDtcbiAgICB9XG4gICAgaXNBbGxvd2VkKCkgeyByZXR1cm4gdGhpcy5tYXhDb25jdXJyZW50IDwgMCB8fCB0aGlzLnN0YXJ0ZWQgPCB0aGlzLm1heENvbmN1cnJlbnQ7IH1cbiAgICBzZXRQYWNlKG1zKSB7IHRoaXMucGFjZSA9IG1zOyB9XG4gICAgc2V0TWF4Q29uY3VycmVudChtYXhDb25jdXJyZW50KSB7IHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7IH1cbiAgICBpblF1ZXVlKCkgeyByZXR1cm4gdGhpcy53YWl0aW5nOyB9XG4gICAgaW5Qcm9ncmVzcygpIHsgcmV0dXJuIHRoaXMuc3RhcnRlZDsgfVxuICAgIGFzeW5jIGFkZChmbiwga2V5KSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCBjYWxsVGltZSA9IG5vdyArIE1hdGgubWF4KHRoaXMuY29sbGVjdGlvblBlcmlvZCwgdGhpcy53YWl0VW50aWwpO1xuICAgICAgICB0aGlzLndhaXRVbnRpbCArPSB0aGlzLnBhY2U7XG4gICAgICAgIGxldCBpdGVtO1xuICAgICAgICBpZiAoa2V5ICYmIHRoaXMucXVldWVba2V5XSkge1xuICAgICAgICAgICAgaXRlbSA9IHRoaXMucXVldWVba2V5XTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpdGVtLnRpbWVyKTtcbiAgICAgICAgICAgIGl0ZW0uZm4gPSBmbjtcbiAgICAgICAgICAgIGl0ZW0uYWRkZWQgPSBub3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkgfHwgYCR7bm93fS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCl9YDtcbiAgICAgICAgICAgIGl0ZW0gPSB7IGZuOiBmbiwgYWRkZWQ6IG5vdywgcGFjZTogdGhpcywga2V5OiBrZXkgfTtcbiAgICAgICAgICAgIHRoaXMucXVldWVba2V5XSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLndhaXRpbmcrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlSXRlbShpdGVtLCBjYWxsVGltZSAtIG5vdyk7XG4gICAgfVxuICAgIHJlc29sdmVJdGVtKGl0ZW0sIHdhaXRUaW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGVjdXRlID0gYXN5bmMgKF9pdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gX2l0ZW0ua2V5O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX2l0ZW0ucGFjZS5xdWV1ZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLndhaXRpbmctLTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYmVsb3dDb25jdXJyZW50TGltaXQoX2l0ZW0ucGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVtLnBhY2Uuc3RhcnRlZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWxEZWxheSA9IERhdGUubm93KCkgLSBfaXRlbS5hZGRlZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgX2l0ZW0uZm4oYWN0dWFsRGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfaXRlbS5wYWNlLnN0YXJ0ZWQtLTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpdGVtLnRpbWVyID0gc2V0VGltZW91dChleGVjdXRlLCB3YWl0VGltZSwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJlbG93Q29uY3VycmVudExpbWl0KHBhY2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVsZWFzZSA9PiB7XG4gICAgICAgIGNvbnN0IHdhaXRMb29wID0gKCkgPT4gcGFjZS5pc0FsbG93ZWQoKSA/IHJlbGVhc2UoKSA6IHNldFRpbWVvdXQod2FpdExvb3AsIDEwKTtcbiAgICAgICAgd2FpdExvb3AoKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVHRmphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMUJoWTJsdVp5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZKUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRVThzVDBGQlR5eERRVUZETzBGQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdRVUZUTlVRc1RVRkJUU3hWUVVGVkxFOUJRVThzUTBGQlF5eEZRVUZUTEVWQlFVVXNSMEZCUnl4SlFVRlZPMGxCUXpWRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRiRVlzUTBGQlF6dEJRV2REUkN4TlFVRk5MRlZCUVZVc1MwRkJTeXhEUVVGRExFVkJRVk03U1VGRE0wSXNUMEZCVHl4RFFVRkpMRWxCUVU4c1JVRkJZU3hGUVVGRk8xRkJRemRDTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGelFpeEZRVUZGTEVWQlFVVTdXVUZETVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTXNRMEZCUXp0QlFVTk9MRU5CUVVNN1FVRnRRa1FzVFVGQlRTeFBRVUZQTEVsQlFVazdTVUZwUTJJc1dVRkJXU3hGUVVGRExFbEJRVWtzUjBGQlF5eEhRVUZITEVWQlFVVXNZVUZCWVN4SFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxHZENRVUZuUWl4SFFVRkRMRU5CUVVNc1JVRkJRenRSUVM5Q2NFUXNhMEpCUVdFc1IwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVVZ5UWl4VFFVRkpMRWRCUVdNc1EwRkJReXhEUVVGRE8xRkJSWEJDTEdOQlFWTXNSMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkZjRUlzV1VGQlR5eEhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVVndRaXhaUVVGUExFZEJRVmNzUTBGQlF5eERRVUZETzFGQlJYQkNMRlZCUVVzc1IwRkJkMElzUlVGQlJTeERRVUZETzFGQlkycERMSEZDUVVGblFpeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFWRjRRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdTVUZETjBNc1EwRkJRenRKUVc1Q1RTeFRRVUZUTEV0QlFXRXNUMEZCVHl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETzBsQmMwSXpSaXhQUVVGUExFTkJRVU1zUlVGQlV5eEpRVUZUTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVV6UXl4blFrRkJaMElzUTBGQlF5eGhRVUZ2UWl4SlFVRlRMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVnVSaXhQUVVGUExFdEJRV1VzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVMVF5eFZRVUZWTEV0QlFWa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVkZ1UkN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRV2RDTEVWQlFVVXNSMEZCVnp0UlFVTnVReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJRMnBETEUxQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRka1VzU1VGQlNTeERRVUZETEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8xRkJSVFZDTEVsQlFVa3NTVUZCVXl4RFFVRkRPMUZCUTJRc1NVRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVONFFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU4yUWl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzcENMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFsQlEySXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU03VTBGRGNFSTdZVUZCVFR0WlFVTklMRWRCUVVjc1IwRkJSeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNeFJDeEpRVUZKTEVkQlFVY3NSVUZCUXl4RlFVRkZMRVZCUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFVkJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTTdXVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRka0lzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMU5CUTJ4Q08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdTVUZEYWtRc1EwRkJRenRKUVVWUExGZEJRVmNzUTBGQlF5eEpRVUZUTEVWQlFVVXNVVUZCWlR0UlFVTXhReXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRMjVETEUxQlFVMHNUMEZCVHl4SFFVRkhMRXRCUVVzc1JVRkJSU3hMUVVGVkxFVkJRVVVzUlVGQlJUdG5Ra0ZCUnl4SlFVRkpPMjlDUVVONFF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRE8yOUNRVU4wUWl4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVNM1FpeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yOUNRVU55UWl4TlFVRk5MRzlDUVVGdlFpeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenR2UWtGRGRrTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dHZRa0ZEY2tJc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU03YjBKQlF6TkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenR2UWtGRGVFTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dHZRa0ZEY2tJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTm9RanRuUWtGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0dlFrRkRVQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMjlDUVVOeVFpeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJRMkk3V1VGQlFTeERRVUZETEVOQlFVRTdXVUZIUml4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM0pFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenREUVVOS08wRkJSMFFzVTBGQlV5eHZRa0ZCYjBJc1EwRkJReXhKUVVGVE8wbEJRMjVETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVU3VVVGRGVrSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU01UlN4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVObUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXlKOSIsImltcG9ydCB7IExvZyB9IGZyb20gJy4vbG9nJztcbmNvbnN0IGxvZyA9IG5ldyBMb2coJ1JlcXVlc3QnKTtcbmltcG9ydCB7IFBhY2UgfSBmcm9tICcuL1BhY2luZyc7XG5pbXBvcnQgeyBBdXRoRGlnZXN0IH0gZnJvbSAnLi9BdXRoRGlnZXN0JztcbmltcG9ydCB7IEF1dGhCYXNpYyB9IGZyb20gJy4vQXV0aEJhc2ljJztcbmxvZy5tZXNzYWdlTGVuZ3RoID0gMTIwO1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZyA9IGxvZztcbiAgICAgICAgdGhpcy5zZXRDcmVkZW50aWFscyA9ICh1c2VyLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHVzZXIgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHsgdXNlcjogdXNlciwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QXV0aFRva2VuID0gKHRva2VuKSA9PiB0aGlzLmF1dGhUb2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNldFBhY2UgPSAoeyBwYWNlID0gNTAsIG1heCA9IDEwLCBjb2xsZWN0aW9uUGVyaW9kID0gMTAwIH0gPSB7IHBhY2U6IHVuZGVmaW5lZCB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhY2UgPSBwYWNlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBuZXcgUGFjZSh7IHBhY2U6IHBhY2UsIG1heENvbmN1cnJlbnQ6IG1heCwgY29sbGVjdGlvblBlcmlvZDogY29sbGVjdGlvblBlcmlvZCB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kZWNvZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2FjaGVOYW1lID0gKG9wdGlvbnMpID0+IHRoaXMuY2FjaGUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6XG4gICAgICAgICAgICBgJHt0aGlzLmNhY2hlfS8ke29wdGlvbnMucGF0aC5yZXBsYWNlKC9xPSguKj8pXFwvL2csICdxPSQxLScpLnJlcGxhY2UoL1xcPy9nLCAnJyl9YDtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KHVybCwgeyB1c2VDYWNoZWQgPSB0cnVlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnR0VUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycyk7XG4gICAgfVxuICAgIGFzeW5jIHB1dCh1cmwsIHBvc3REYXRhLCB7IHVzZUNhY2hlZCA9IGZhbHNlLCBoZWFkZXJzID0ge30gfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnModXJsLCAnUFVUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBhc3luYyBwb3N0KHVybCwgcG9zdERhdGEsIHsgdXNlQ2FjaGVkID0gZmFsc2UsIGhlYWRlcnMgPSB7fSB9ID0ge30pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucyh1cmwsICdQT1NUJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpO1xuICAgIH1cbiAgICBnZXRVUkwodXJsKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpID8gbmV3IFVSTCh1cmwsIGRvY3VtZW50LlVSTCkgOiB1cmw7XG4gICAgfVxuICAgIGdldE9wdGlvbnModXJsLCBtZXRob2QpIHtcbiAgICAgICAgdXJsID0gdGhpcy5nZXRVUkwodXJsKTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gJyc7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBwcm90b2NvbDogdXJsLnByb3RvY29sLFxuICAgICAgICAgICAgaG9zdDogdXJsLmhvc3QsXG4gICAgICAgICAgICBob3N0bmFtZTogdXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogdXJsLnBvcnQsXG4gICAgICAgICAgICBwYXRobmFtZTogcHJlZml4ICsgdXJsLnBhdGhuYW1lLFxuICAgICAgICAgICAgcGF0aDogcHJlZml4ICsgdXJsLnBhdGhuYW1lICsgKHVybC5zZWFyY2ggfHwgJycpLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICB1cmw6IGAke3VybC5wcm90b2NvbH0vLyR7dXJsLmhvc3R9JHtwcmVmaXggKyB1cmwucGF0aG5hbWUgKyAodXJsLnNlYXJjaCB8fCAnJyl9YCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFRva2VuKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aFRva2VuID0gdGhpcy5hdXRoVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGFzeW5jIGRlY29kZWRSZXF1ZXN0KG9wdGlvbnMsIHVzZUNhY2hlZCwgaGVhZGVycywgcG9zdERhdGEpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKTtcbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlICYmIHJlc3VsdC5yZXNwb25zZS50eHQgJiYgb3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IHRoaXMuZGVjb2RlKHJlc3VsdC5kYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyByZWFkQ2FjaGVkKGZuYW1lKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGFzeW5jIHdyaXRlQ2FjaGVkKGZuYW1lLCByZXNwb25zZSkge1xuICAgIH1cbiAgICBhc3luYyByZXF1ZXN0T3B0aW9ucyhvcHRpb25zLCB1c2VDYWNoZWQsIHBvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IGZuYW1lID0gdGhpcy5jYWNoZSA/IHRoaXMuY2FjaGVOYW1lKG9wdGlvbnMpIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZm5hbWUgJiYgdXNlQ2FjaGVkICYmIG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZWFkQ2FjaGVkKGZuYW1lKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSAke29wdGlvbnMubWV0aG9kfS1pbmcgJHtvcHRpb25zLnVybH1gKTtcbiAgICAgICAgICAgIHJlcXVlc3QgPSB0aGlzLnBhY2UuYWRkKCgpID0+IHRoaXMucmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSksIGAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdCA9IHRoaXMucmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2cuZGVidWcoKCkgPT4gYCR7b3B0aW9ucy5tZXRob2R9LWluZyAke29wdGlvbnMudXJsfWApO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Q7XG4gICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgIHRoaXMubG9nLnRyYW5zaWVudChgKCR7dGhpcy5wYWNlLmluUXVldWUoKX0gfCAke3RoaXMucGFjZS5pblByb2dyZXNzKCl9KSByZWNlaXZlZCAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfSBgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZy5kZWJ1ZygoKSA9PiBgcmVjZWl2ZWQgJHtvcHRpb25zLm1ldGhvZH0gJHtyZXNwb25zZS5yZXNwb25zZS5zdGF0dXNNZXNzYWdlfSAke29wdGlvbnMubWV0aG9kfSAke29wdGlvbnMudXJsfWApO1xuICAgICAgICBjb25zdCBjb2RlID0gcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzQ29kZSB8fCByZXNwb25zZS5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgIGlmIChjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwKSB7XG4gICAgICAgICAgICBpZiAoZm5hbWUgJiYgb3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZUNhY2hlZChmbmFtZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgcmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmlzc3VlUmVxdWVzdChvcHRpb25zLCBwb3N0RGF0YSk7XG4gICAgICAgICAgICBsZXQgYXV0aGVudGljYXRlID0gcmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1snd3d3LWF1dGhlbnRpY2F0ZSddO1xuICAgICAgICAgICAgaWYgKCFhdXRoZW50aWNhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlID0gYXV0aGVudGljYXRlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBsZXQgYXV0aDtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aGVudGljYXRlLmluZGV4T2YoJ0RpZ2VzdCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGggPSBuZXcgQXV0aERpZ2VzdCh0aGlzLmNyZWRlbnRpYWxzLnVzZXIsIHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhdXRoZW50aWNhdGUuaW5kZXhPZignQmFzaWMnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhdXRoID0gbmV3IEF1dGhCYXNpYyh0aGlzLmNyZWRlbnRpYWxzLnVzZXIsIHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgYHVuaW1wbGVtZW50ZWQgYXV0aGVudGljYXRpb24gcmVxdWVzdCAke2F1dGhlbnRpY2F0ZX0gZm9yICcke29wdGlvbnMudXJsfSdgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdXRoLnRlc3RBdXRoKG9wdGlvbnMsIHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYGF1dGhlbnRpY2F0aW9uIG1pc3Npbmc7IGNhbGwgJ3NldENyZWRlbnRpYWxzJyBiZWZvcmUgY2FsbGluZyAnZ2V0J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IGBlcnJvciByZXF1ZXN0aW5nICR7b3B0aW9ucy51cmx9OiAke2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBpc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbmZpcm1SZXF1ZXN0KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyc1RleHQgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7ICdjb250ZW50LXR5cGUnOiAnJyB9O1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzVGV4dC5zcGxpdCgnXFxyXFxuJykubWFwKGggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga3YgPSBoLnNwbGl0KCc6JykubWFwKHAgPT4gcC50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGt2WzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnNba3ZbMF1dID0ga3ZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSByZXF1ZXN0LmlzVGV4dHVhbENvbnRlbnQoY29udGVudFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6IHR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiBgJHt0aGlzLnN0YXR1c30gJHt0aGlzLnN0YXR1c1RleHR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMucmVzcG9uc2VVUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eHQgPSByZXF1ZXN0LmlzVGV4dHVhbFJlcXVlc3Qob3B0aW9ucy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cuZGVidWcoKCkgPT4gYHJlcXVlc3RpbmcgJHtvcHRpb25zLm1ldGhvZH0gJHt0aGlzLmxvZy5pbnNwZWN0KG9wdGlvbnMsIHsgZGVwdGg6IDQgfSl9YCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmhlYWRlcnMpLmZvckVhY2goaCA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihoLCBvcHRpb25zLmhlYWRlcnNbaF0pKTtcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gdHh0ID8gJ3RleHQnIDogJ2FycmF5YnVmZmVyJztcbiAgICAgICAgICAgICAgICB4aHIub25sb2FkID0gY29uZmlybVJlcXVlc3Q7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQocG9zdERhdGEgPyBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1RleHR1YWxDb250ZW50KGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGxldCB0eHQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQvaHRtbCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlLnNwbGl0KCc7JylbMF07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ViVHlwZXMgPSBjb250ZW50VHlwZS5zcGxpdCgnLycpO1xuICAgICAgICBzd2l0Y2ggKHN1YlR5cGVzWzBdKSB7XG4gICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgdHh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzpcbiAgICAgICAgICAgIGNhc2UgJ2ZvbnQnOiBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uJzpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHN1YlR5cGVzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdwZGYnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbic6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQubXMtcG93ZXJwb2ludCc6IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2bmQubXMtZXhjZWwnOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2N0ZXQtc3RyZWFtJzogYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZuZC5tcy1leGNlbC5zaGVldC5tYWNyb2VuYWJsZWQuMTInOiBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdGhpcy5sb2cuaW5mbyhgY2FjaGluZyAke2NvbnRlbnRUeXBlfSBhcyBiaW5hcnlgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aGlzLmxvZy53YXJuKGBjYWNoaW5nICcke2NvbnRlbnRUeXBlfScgYXMgYmluYXJ5YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR4dDtcbiAgICB9XG4gICAgaXNUZXh0dWFsUmVxdWVzdChwYXRoTmFtZSkge1xuICAgICAgICByZXR1cm4gWydqc29uJywgJ3R4dCcsICdodG1sJ10uc29tZShleHQgPT4gcGF0aE5hbWUuaW5kZXhPZihleHQpID49IDApO1xuICAgIH1cbn1cblJlcXVlc3QuZGVjb2RlcnMgPSB7XG4gICAgc3RyMmpzb246IChkYXRhKSA9PiB7IHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSB9LFxuICAgIGh0bWwyanNvbjogdW5kZWZpbmVkXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW1WeGRXVnpkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OVNaWEYxWlhOMExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRWGREUVN4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFMUJRV1VzVDBGQlR5eERRVUZETzBGQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdRVUZEZGtVc1QwRkJUeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZqTEZWQlFWVXNRMEZCUXp0QlFVTjRReXhQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFWRXNZMEZCWXl4RFFVRkRPMEZCUXpWRExFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNUVUZCVXl4aFFVRmhMRU5CUVVNN1FVRkhNME1zUjBGQlJ5eERRVUZETEdGQlFXRXNSMEZCUnl4SFFVRkhMRU5CUVVNN1FVRjNSSGhDTEUxQlFVMHNUMEZCVHl4UFFVRlBPMGxCUVhCQ08xRkJUMk1zVVVGQlJ5eEhRVUZSTEVkQlFVY3NRMEZCUXp0UlFYVkNiRUlzYlVKQlFXTXNSMEZCUnl4RFFVRkRMRWxCUVZrc1JVRkJSU3hSUVVGblFpeEZRVUZGTEVWQlFVVTdXVUZEZGtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEV0QlFVY3NVMEZCVXl4RFFVRkJMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEZUVZc1EwRkJReXhEUVVGQk8xRkJSMDBzYVVKQlFWa3NSMEZCUnl4RFFVRkRMRXRCUVdFc1JVRkJSU3hGUVVGRkxFTkJRM0JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGQk8xRkJVVzVDTEZsQlFVOHNSMEZCUnl4RFFVRkRMRVZCUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVkQlFVTXNSVUZCUlN4RlFVRkZMR2RDUVVGblFpeEhRVUZETEVkQlFVY3NTMEZCUlN4RlFVRkRMRWxCUVVrc1JVRkJUU3hUUVVGVExFVkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF5OUZMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZITEZOQlFWTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkRMRWxCUVVrc1JVRkJReXhKUVVGSkxFVkJRVVVzWVVGQllTeEZRVUZETEVkQlFVY3NSVUZCUlN4blFrRkJaMElzUlVGQlF5eG5Ra0ZCWjBJc1JVRkJReXhEUVVGRExFTkJRVU03VVVGRE1VZ3NRMEZCUXl4RFFVRkJPMUZCVVUwc1YwRkJUU3hIUVVGWkxGTkJRVk1zUTBGQlF6dFJRVk0xUWl4alFVRlRMRWRCUVVjc1EwRkJReXhQUVVGbExFVkJRVk1zUlVGQlJTeERRVU14UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhMUVVGSExGTkJRVk1zUTBGQlFTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRMMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NSVUZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVFN1NVRm5Uek5HTEVOQlFVTTdTVUYwVGxVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZqTEVWQlFVVXNSVUZCUXl4VFFVRlRMRWRCUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUjBGQlF5eEZRVUZGTEVWQlFVTXNSMEZCUXl4RlFVRkZPMUZCUXpWRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRelZFTEVOQlFVTTdTVUZUVFN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRV01zUlVGQlJTeFJRVUZaTEVWQlFVVXNSVUZCUXl4VFFVRlRMRWRCUVVNc1MwRkJTeXhGUVVGRkxFOUJRVThzUjBGQlF5eEZRVUZGTEVWQlFVTXNSMEZCUXl4RlFVRkZPMUZCUXpORkxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6VkRMRTlCUVU4c1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU4wUlN4RFFVRkRPMGxCVTAwc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZqTEVWQlFVVXNVVUZCV1N4RlFVRkZMRVZCUVVNc1UwRkJVeXhIUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVkQlFVTXNSVUZCUlN4RlFVRkRMRWRCUVVNc1JVRkJSVHRSUVVNMVJTeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTTNReXhQUVVGUExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEZEVVc1EwRkJRenRKUVVWVExFMUJRVTBzUTBGQlF5eEhRVUZqTzFGQlF6TkNMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzBsQlEzWkZMRU5CUVVNN1NVRkZVeXhWUVVGVkxFTkJRVU1zUjBGQll5eEZRVUZGTEUxQlFXRTdVVUZET1VNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRka0lzVFVGQlRTeE5RVUZOTEVkQlFUUkRMRVZCUVVVc1EwRkJRenRSUVVNelJDeE5RVUZOTEU5QlFVOHNSMEZCUnp0WlFVTmFMR3RDUVVGclFpeEZRVUZGTEV0QlFVczdXVUZEZWtJc1RVRkJUU3hGUVVGTkxFMUJRVTA3V1VGRGJFSXNVVUZCVVN4RlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUk8xbEJRM2hDTEVsQlFVa3NSVUZCVVN4SFFVRkhMRU5CUVVNc1NVRkJTVHRaUVVOd1FpeFJRVUZSTEVWQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFN1dVRkRlRUlzU1VGQlNTeEZRVUZSTEVkQlFVY3NRMEZCUXl4SlFVRkpPMWxCUTNCQ0xGRkJRVkVzUlVGQlNTeE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRkZCUVZFN1dVRkRha01zU1VGQlNTeEZRVUZSTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkRkRVFzVDBGQlR5eEZRVUZWTEVWQlFVVTdXVUZGYmtJc1IwRkJSeXhGUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEZGQlFWRXNTMEZCU3l4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzU1VGQlNTeEZRVUZGTEVOQlFVTXNSVUZCUlR0VFFVTXhSaXhEUVVGRE8xRkJRMFlzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUVVVc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRenRUUVVGRk8xRkJRMjVGTEU5QlFVOHNUMEZCVHl4RFFVRkRPMGxCUTI1Q0xFTkJRVU03U1VGaFV5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTlCUVdVc1JVRkJSU3hUUVVGcFFpeEZRVUZGTEU5QlFWY3NSVUZCUlN4UlFVRmhPMUZCUTNwR0xFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTNaRkxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTVUZCU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4TFFVRkhMRXRCUVVzc1JVRkJSVHRaUVVNNVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVk1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRUUVVNelJEdFJRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGxCUTJ4Q0xFTkJRVU03U1VGVlV5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVZrN1VVRkRia01zVDBGQlR5eFRRVUZUTEVOQlFVTTdTVUZEY2tJc1EwRkJRenRKUVVWVExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCV1N4RlFVRkZMRkZCUVdsQ08wbEJRek5FTEVOQlFVTTdTVUZGVXl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRV1VzUlVGQlJTeFRRVUZwUWl4RlFVRkZMRkZCUVdFN1VVRkROVVVzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETzFGQlF6bEVMRWxCUVVrc1MwRkJTeXhKUVVGSkxGTkJRVk1zU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4TFFVRkxMRXRCUVVzc1JVRkJSVHRaUVVOb1JDeE5RVUZOTEUxQlFVMHNSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZETlVNc1NVRkJTU3hOUVVGTkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVRkZMRTlCUVU4c1RVRkJUU3hEUVVGRE8yRkJRVVU3VTBGREwwTTdVVUZGUkN4SlFVRkpMRTlCUVRCQ0xFTkJRVU03VVVGREwwSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRMWdzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEV0QlFVc3NUMEZCVHl4RFFVRkRMRTFCUVUwc1VVRkJVU3hQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTm9TQ3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzUkhPMkZCUVUwN1dVRkRTQ3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03VTBGRE4wTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZGTEVWQlFVVXNRMEZCUVN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxGRkJRVkVzVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRNMFFzVFVGQlRTeFJRVUZSTEVkQlFVY3NUVUZCVFN4UFFVRlBMRU5CUVVNN1VVRkRMMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHTkJRV01zVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVUZGTzFGQlEzcEpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4RFFVRkJMRmxCUVZrc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJSWEpJTEUxQlFVMHNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEpRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM0JGTEVsQlFVY3NTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzFsQlF6RkNMRWxCUVVrc1MwRkJTeXhKUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEV0QlFVc3NTMEZCU3l4RlFVRkZPMmRDUVVOdVF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzJGQlF6TkRPMU5CUTBvN1VVRkRSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dEpRVU53UWl4RFFVRkRPMGxCUlZNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZsTEVWQlFVVXNVVUZCWVR0UlFVTnNSQ3hKUVVGSk8xbEJRMEVzVFVGQlRTeFJRVUZSTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVTTFSQ3hKUVVGSkxGbEJRVmtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMWxCUTJwRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVTdaMEpCUTJZc1QwRkJUeXhSUVVGUkxFTkJRVU03WVVGRGJrSTdhVUpCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzJkQ1FVTnlRaXhaUVVGWkxFZEJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMmRDUVVOdVF5eEpRVUZKTEVsQlFWVXNRMEZCUXp0blFrRkRaaXhKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yOUNRVU4wUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0cFFrRkRNMFU3Y1VKQlFVMHNTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0dlFrRkROVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03YVVKQlF6RkZPM0ZDUVVGTk8yOUNRVU5JTEUxQlFVMHNkME5CUVhkRExGbEJRVmtzVTBGQlV5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2FVSkJRM0pHTzJkQ1FVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTjZSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1lVRkRjRU03YVVKQlFVMDdaMEpCUTBnc1RVRkJUU3h2UlVGQmIwVXNRMEZCUXp0aFFVTTVSVHRUUVVOS08xRkJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdXVUZEVUN4TlFVRk5MRzlDUVVGdlFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8xTkJRMnBFTzBsQlEwd3NRMEZCUXp0SlFVVlRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlpTeEZRVUZGTEZGQlFXRTdVVUZEZGtRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzSkNMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUUwUWl4RlFVRkZMRTFCUVhsQ0xFVkJRVVVzUlVGQlJUdFpRVUZITEVsQlFVazdaMEpCUTJ4R0xGTkJRVk1zWTBGQll5eERRVUZETEVOQlFVczdiMEpCUTNwQ0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVkQlFVY3NRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeERRVUZETzI5Q1FVTm9SQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEZRVUZETEdOQlFXTXNSVUZCUXl4RlFVRkZMRVZCUVVNc1EwRkJRenR2UWtGRGNFTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN2QwSkJRemxDTEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN2QwSkJRek5ETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJUczBRa0ZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVUZGTzI5Q1FVTnFSQ3hEUVVGRExFTkJRVU1zUTBGQlFUdHZRa0ZEUml4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETzI5Q1FVTjBReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdiMEpCUjJ4RUxFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN2IwSkJRek5DTEUxQlFVMHNVVUZCVVN4SFFVRlpPM2RDUVVOMFFpeEpRVUZKTEVWQlFXZENMRWxCUVVrN2QwSkJRM2hDTEZGQlFWRXNSVUZCUlRzMFFrRkRUaXhIUVVGSExFVkJRV0VzUjBGQlJ6czBRa0ZEYmtJc1QwRkJUeXhGUVVGVExFOUJRVTg3TkVKQlEzWkNMRTFCUVUwc1JVRkJWU3hQUVVGUExFTkJRVU1zVFVGQlRUczBRa0ZET1VJc1RVRkJUU3hGUVVGVkxFbEJRVWtzUTBGQlF5eE5RVUZOT3pSQ1FVTXpRaXhWUVVGVkxFVkJRVTBzU1VGQlNTeERRVUZETEUxQlFVMDdORUpCUXpOQ0xHRkJRV0VzUlVGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJUczBRa0ZEYmtRc1IwRkJSeXhGUVVGaExFbEJRVWtzUTBGQlF5eFhRVUZYTzNsQ1FVTnVRenR4UWtGRFNpeERRVUZETzI5Q1FVTkdMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZEVJc1EwRkJRenRuUWtGRFJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMR05CUVdNc1JVRkJSU3hEUVVGRE8yZENRVU5xUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTjJSQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3hqUVVGakxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVTXNTMEZCU3l4RlFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVTXpSaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkROVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRrWXNSMEZCUnl4RFFVRkRMRmxCUVZrc1IwRkJSeXhIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRE8yZENRVU12UXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExHTkJRV01zUTBGQlF6dG5Ra0ZETlVJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVRXNRMEZCUXl4RFFVRkJMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkJMRk5CUVZNc1EwRkJReXhEUVVGRE8yRkJRM3BFTzFsQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVN1owSkJRMUFzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJJN1VVRkJRU3hEUVVGRExFTkJRVU1zUTBGQlFUdEpRVU5RTEVOQlFVTTdTVUZGVXl4blFrRkJaMElzUTBGQlF5eFhRVUZyUWp0UlFVTjZReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZEYUVJc1NVRkJTU3hYUVVGWExFdEJRVWNzVTBGQlV5eEZRVUZGTzFsQlFVVXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJRenRUUVVGRk8yRkJRM1JFTzFsQlFVVXNWMEZCVnl4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkJSVHRSUVVOcVJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEzaERMRkZCUVZFc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzFsQlEycENMRXRCUVVzc1JVRkJSU3hEUVVGRE8xbEJRMUlzUzBGQlN5eE5RVUZOTzJkQ1FVRlRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03WjBKQlFVTXNUVUZCVFR0WlFVTjBReXhMUVVGTExFOUJRVThzUTBGQlF6dFpRVU5pTEV0QlFVc3NUMEZCVHl4RFFVRkRPMWxCUTJJc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlVTeE5RVUZOTzFsQlF6RkNMRXRCUVVzc1lVRkJZVHRuUWtGQlJTeFJRVUZQTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRGNFTXNTMEZCU3l4TlFVRk5PM2RDUVVGTExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdkMEpCUVVNc1RVRkJUVHR2UWtGRGJFTXNTMEZCU3l4TFFVRkxMRU5CUVVNc1EwRkJTeXhOUVVGTk8yOUNRVU4wUWl4TFFVRkxMQ3RFUVVFclJDeERRVUZETEVOQlFVTXNUVUZCVFR0dlFrRkROVVVzUzBGQlN5eDFSRUZCZFVRc1EwRkJReXhEUVVGRExFMUJRVTA3YjBKQlEzQkZMRXRCUVVzc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4TlFVRk5PMjlDUVVOb1F5eExRVUZMTEdOQlFXTXNRMEZCUXl4RFFVRkRMRTFCUVUwN2IwSkJRek5DTEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNc1RVRkJUVHR2UWtGRE0wSXNTMEZCU3l4dlEwRkJiME1zUTBGQlF5eERRVUZETEUxQlFVMDdiMEpCUTJwRUxFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzVjBGQlZ5eFpRVUZaTEVOQlFVTXNRMEZCUXp0cFFrRkRPVVE3WjBKQlEwUXNUVUZCVFR0WlFVTk9MRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1YwRkJWeXhoUVVGaExFTkJRVU1zUTBGQlF6dFRRVU5vUlR0UlFVTkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dEpRVVZUTEdkQ1FVRm5RaXhEUVVGRExGRkJRV1U3VVVGRGRFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU16UlN4RFFVRkRPenRCUVM5U1lTeG5Ra0ZCVVN4SFFVRkhPMGxCUTNKQ0xGRkJRVkVzUlVGQlJ5eERRVUZETEVsQlFWY3NSVUZCUlN4RlFVRkZMRWRCUVVjc1NVRkJTVHRSUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHRMUVVGRE8wbEJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdVVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJRVHRMUVVGRExFTkJRVUVzUTBGQlF6dEpRVU5zUml4VFFVRlRMRVZCUVhkQ0xGTkJRVk03UTBGRE4wTXNRMEZCUXlKOSIsImV4cG9ydCAqIGZyb20gJy4vUGFjaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vUmVxdWVzdCc7XG5leHBvcnQgKiBmcm9tICcuL0NoZWNrc3VtJztcbmV4cG9ydCAqIGZyb20gJy4vRGF0ZSc7XG5leHBvcnQgKiBmcm9tIFwiLi9sb2dcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0FycmF5XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1kwRkJhVUlzVlVGQlZTeERRVUZETzBGQlF6VkNMR05CUVdsQ0xGZEJRVmNzUTBGQlF6dEJRVU0zUWl4alFVRnBRaXhaUVVGWkxFTkJRVU03UVVGRE9VSXNZMEZCYVVJc1VVRkJVU3hEUVVGRE8wRkJRekZDTEdOQlFXbENMRTlCUVU4c1EwRkJRenRCUVVONlFpeGpRVUZwUWl4VFFVRlRMRU5CUVVNaWZRPT0iLCJpbXBvcnQgeyBkYXRlIH0gZnJvbSAnLi9EYXRlJztcbmNvbnN0IENPTE9SID0ge1xuICAgIGNsZWFyOiAnY29sb3I6IzAwMDsgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0OyBmb250LXdlaWdodDpub3JtYWw7JyxcbiAgICBib2xkOiAnZm9udC13ZWlnaHQ6Ym9sZDsnLFxuICAgIGRpbTogJycsXG4gICAgdW5kZXJzY29yZTogJycsXG4gICAgYmxpbms6ICcnLFxuICAgIHJldmVyc2U6ICcnLFxuICAgIGhpZGRlbjogJycsXG4gICAgYmxhY2s6ICdjb2xvcjojMDAwOycsXG4gICAgcmVkOiAnY29sb3I6I2YwMDsnLFxuICAgIGdyZWVuOiAnY29sb3I6IzBmMDsnLFxuICAgIHllbGxvdzogJ2NvbG9yOiNmZjA7JyxcbiAgICBibHVlOiAnY29sb3I6IzAwZjsnLFxuICAgIG1hZ2VudGE6ICdjb2xvcjojZjBmOycsXG4gICAgY3lhbjogJ2NvbG9yOiMwZmY7JyxcbiAgICB3aGl0ZTogJ2NvbG9yOiNmZmY7JyxcbiAgICBkYXJrcmVkOiAnY29sb3I6IzgwMDsnLFxuICAgIGRhcmtncmVlbjogJ2NvbG9yOiMwODA7JyxcbiAgICBkYXJreWVsbG93OiAnY29sb3I6Izg4MDsnLFxuICAgIGRhcmtibHVlOiAnY29sb3I6IzAwODsnLFxuICAgIGRhcmttYWdlbnRhOiAnY29sb3I6IzgwODsnLFxuICAgIGRhcmtjeWFuOiAnY29sb3I6IzA4ODsnLFxuICAgIGdyYXk6ICdjb2xvcjojODg4OycsXG4gICAgYmdCbGFjazogJ2JhY2tncm91bmQtY29sb3I6IzAwMDsnLFxuICAgIGJnUmVkOiAnYmFja2dyb3VuZC1jb2xvcjojZjAwOycsXG4gICAgYmdHcmVlbjogJ2JhY2tncm91bmQtY29sb3I6IzBmMDsnLFxuICAgIGJnWWVsbG93OiAnYmFja2dyb3VuZC1jb2xvcjojZmYwOycsXG4gICAgYmdCbHVlOiAnYmFja2dyb3VuZC1jb2xvcjojMDBmOycsXG4gICAgYmdNYWdlbnRhOiAnYmFja2dyb3VuZC1jb2xvcjojZjBmOycsXG4gICAgYmdDeWFuOiAnYmFja2dyb3VuZC1jb2xvcjojMGZmOycsXG4gICAgYmdXaGl0ZTogJ2JhY2tncm91bmQtY29sb3I6I2ZmZjsnXG59O1xuZXhwb3J0IGNsYXNzIExvZyB7XG4gICAgY29uc3RydWN0b3IocHJlZml4KSB7XG4gICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVwb3J0UHJlZml4ID0gJyc7XG4gICAgICAgIHRoaXMubWF4TGVuZ3RoID0gLTE7XG4gICAgICAgIHRoaXMuY29sb3JzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIHNldCBtZXNzYWdlTGVuZ3RoKG1heCkgeyB0aGlzLm1heExlbmd0aCA9IG1heDsgfVxuICAgIGdldCBtZXNzYWdlTGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5tYXhMZW5ndGg7IH1cbiAgICBsZXZlbChuZXdMZXZlbFN5bSwgc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgbGV0IG5ld0xldmVsID0gTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0gfHwgTG9nLmdsb2JhbExldmVsO1xuICAgICAgICBsZXQgb2xkTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKG5ld0xldmVsU3ltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0xldmVsID0gb2xkTGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3TGV2ZWxTeW0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3J0TGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTG9nLmxldmVsc1tuZXdMZXZlbFN5bV0pIHtcbiAgICAgICAgICAgIGlmIChzZXRHbG9iYWxMZXZlbCkge1xuICAgICAgICAgICAgICAgIExvZy5nbG9iYWxMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRMZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbXNnID0gYG5ldyAke3NldEdsb2JhbExldmVsID8gJ2dsb2JhbCcgOiB0aGlzLnJlcG9ydFByZWZpeH0gbG9nIGxldmVsICR7bmV3TGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSAod2FzICR7b2xkTGV2ZWwuZGVzYy50b1VwcGVyQ2FzZSgpfSlgO1xuICAgICAgICAgICAgKG5ld0xldmVsLnN5bSA9PT0gb2xkTGV2ZWwuc3ltKSA/IHRoaXMuZGVidWcobXNnKSA6IHRoaXMuaW5mbyhtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihgdW5rb3duIGxldmVsICR7bmV3TGV2ZWxTeW19OyBsb2cgbGV2ZWwgcmVtYWlucyAke29sZExldmVsLnN5bX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGV2ZWwuc3ltO1xuICAgIH1cbiAgICBkZWJ1Zyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5ERUJVRywgbXNnLCB7IGNvbG9yOiBbJ2dyYXknXSB9KTsgfVxuICAgIHRyYW5zaWVudChtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10sIGxmOiAnXFxyJyB9KTsgfVxuICAgIHByb2dyZXNzKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLklORk8sIG1zZywgeyBjb2xvcjogWydkYXJrYmx1ZSddIH0pOyB9XG4gICAgaW5mbyhtc2cpIHsgcmV0dXJuIHRoaXMub3V0KExvZy5JTkZPLCBtc2csIHsgY29sb3I6IFsnZGFya2dyZWVuJ10gfSk7IH1cbiAgICB3YXJuKG1zZykgeyByZXR1cm4gdGhpcy5vdXQoTG9nLldBUk4sIG1zZywgeyBjb2xvcjogWydkYXJreWVsbG93JywgJ2JvbGQnXSB9KTsgfVxuICAgIGVycm9yKG1zZykge1xuICAgICAgICBjb25zdCBjb2xvciA9IFsnZGFya3JlZCcsICdib2xkJ107XG4gICAgICAgIGlmIChtc2cubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2cubWVzc2FnZSwgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICB0aGlzLm91dChMb2cuRVJST1IsIG1zZy5zdGFjaywgeyBjb2xvcjogY29sb3IgfSk7XG4gICAgICAgICAgICByZXR1cm4gbXNnLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdXQoTG9nLkVSUk9SLCBtc2csIHsgY29sb3I6IGNvbG9yIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG91dChsdmwsIG1zZywgb3B0aW9ucykge1xuICAgICAgICBsZXQgZGVzYyA9IExvZy5sZXZlbHNbbHZsXTtcbiAgICAgICAgY29uc3QgZmlsdGVyTGV2ZWwgPSB0aGlzLnJlcG9ydExldmVsIHx8IExvZy5nbG9iYWxMZXZlbDtcbiAgICAgICAgaWYgKGRlc2MuaW1wb3J0YW5jZSA+PSBmaWx0ZXJMZXZlbC5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICBsZXQgbGluZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIG1zZykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgbGluZSA9IG1zZygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICBsaW5lID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGxpbmUgPSB0aGlzLmluc3BlY3QobXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHIgPSBkYXRlKExvZy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoICYmIHRoaXMubWF4TGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBgJHtsaW5lLnNsaWNlKDAsIHRoaXMubWF4TGVuZ3RoIC8gMiAtIDIpfS4uLiR7bGluZS5zbGljZSgtdGhpcy5tYXhMZW5ndGggLyAyICsgMil9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtc2cuc3RhY2spIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gYCR7bGluZX1cXG4ke21zZy5zdGFja31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gYCR7ZGF0ZVN0cn0gJHt0aGlzLnJlcG9ydFByZWZpeH0gJHtkZXNjLmRlc2N9YDtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KG9wdGlvbnMuY29sb3IsIGhlYWRlciwgbGluZSk7XG4gICAgICAgICAgICByZXR1cm4gbGluZSArIChvcHRpb25zLmxmIHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBvdXRwdXQoY29sb3IsIGhlYWRlciwgbGluZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJWMke2hlYWRlcn0lYyAke2xpbmV9YCwgY29sb3IubWFwKGMgPT4gQ09MT1JbY10pLmpvaW4oJyAnKSwgQ09MT1JbJ2NsZWFyJ10pO1xuICAgIH1cbiAgICBmb3JtYXQoZm10U3RyKSB7XG4gICAgICAgIGlmIChmbXRTdHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIExvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm10U3RyKSB7XG4gICAgICAgICAgICBMb2cuZGF0ZUZvcm1hdCA9IGZtdFN0cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTG9nLmRhdGVGb3JtYXQ7XG4gICAgfVxuICAgIHByZWZpeChwcmYpIHtcbiAgICAgICAgaWYgKHByZikge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRQcmVmaXggPSBwcmY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3J0UHJlZml4O1xuICAgIH1cbiAgICBjb25maWcoY2ZnKSB7XG4gICAgICAgIGlmIChjZmcuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0KGNmZy5mb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcubGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbChjZmcubGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcuY29sb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sb3JzID0gY2ZnLmNvbG9ycztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnNwZWN0KG1zZywgeyBkZXB0aCA9IC0xLCBpbmRlbnQgPSAnICAgJywgY29sb3JzID0gTG9nLklOREVOVF9DT0xPUlMgfSA9IHsgZGVwdGg6IDAsIGluZGVudDogJyAgICcsIGNvbG9yczogTG9nLklOREVOVF9DT0xPUlMgfSkge1xuICAgICAgICBmdW5jdGlvbiBfaW5zcGVjdChtc2csIGRlcHRoLCBsZXZlbCwgY3VyckluZGVudCkge1xuICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobXNnLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSA/ICd7Li4ufScgOiAnWy4uLl0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobXNnLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgWyR7bXNnLm1hcCgoZSkgPT4gKGUgPT09IHVuZGVmaW5lZCkgPyAnJyA6IF9pbnNwZWN0KGUsIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50KSkuam9pbignLCAnKX1dYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgW3ByZWZpeCwgcG9zdGZpeCwgbGYsIHBvc3RJbmRlbnRdID0gbG9nLmdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHske2xmfWAgKyBPYmplY3Qua2V5cyhtc2cpLm1hcChrID0+IGAke3ByZWZpeH0ke2t9JHtwb3N0Zml4fTogJHtfaW5zcGVjdChtc2dba10sIGRlcHRoIC0gMSwgbGV2ZWwgKyAxLCBjdXJySW5kZW50ICsgaW5kZW50KX1gKS5qb2luKGAsJHtsZn1gKSArIGAke2xmfSR7cG9zdEluZGVudH19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtc2cudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2cgPSB0aGlzO1xuICAgICAgICByZXR1cm4gX2luc3BlY3QobXNnLCAoZGVwdGggIT09IHVuZGVmaW5lZCAmJiBkZXB0aCAhPT0gbnVsbCAmJiBkZXB0aCA+PSAwKSA/IGRlcHRoIDogOTk5LCAwLCAnJyk7XG4gICAgfVxuICAgIGdldFByZVBvc3RmaXgoaW5kZW50LCBsZXZlbCwgY3VyckluZGVudCwgY29sb3JzKSB7XG4gICAgICAgIGxldCBjc3RhcnQgPSAnJywgY3N0b3AgPSAnJywgbGYgPSAnXFxuJztcbiAgICAgICAgaWYgKGNvbG9ycykge1xuICAgICAgICAgICAgaW5kZW50ID0gaW5kZW50LnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuICAgICAgICAgICAgY3VyckluZGVudCA9IGN1cnJJbmRlbnQucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SW2NvbG9yc1tsZXZlbCAlIGNvbG9ycy5sZW5ndGhdXSB8fCBjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXTtcbiAgICAgICAgICAgIGNzdGFydCA9IGA8Yj48c3BhbiBzdHlsZT0nJHtjb2xvcn0nPmA7XG4gICAgICAgICAgICBjc3RvcCA9IGA8L3NwYW4+PC9iPmA7XG4gICAgICAgICAgICBsZiA9ICc8YnI+JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2Ake2N1cnJJbmRlbnR9JHtpbmRlbnR9JHtjc3RhcnR9YCwgYCR7Y3N0b3B9YCwgY29sb3JzID8gJzxicj4nIDogJ1xcbicsIGN1cnJJbmRlbnRdO1xuICAgIH1cbn1cbkxvZy5JTkRFTlRfQ09MT1JTID0gWydkYXJrYmx1ZScsICdkYXJrZ3JlZW4nLCAnZGFya3JlZCcsICdkYXJrY3lhbicsICdkYXJreWVsbG93JywgJ2RhcmttYWdlbnRhJ107XG5Mb2cuZGVmRGF0ZUZvcm1hdCA9ICclWVlZWSVNTSVERCAlaGg6JW1tOiVzcy4lampqJztcbkxvZy5kYXRlRm9ybWF0ID0gTG9nLmRlZkRhdGVGb3JtYXQ7XG5Mb2cuREVCVUcgPSAnREVCVUcnO1xuTG9nLklORk8gPSAnSU5GTyc7XG5Mb2cuV0FSTiA9ICdXQVJOJztcbkxvZy5FUlJPUiA9ICdFUlJPUic7XG5Mb2cubGV2ZWxzID0ge1xuICAgIFtMb2cuREVCVUddOiB7IGltcG9ydGFuY2U6IDAsIHN5bTogTG9nLkRFQlVHLCBkZXNjOiAnREVCVUcnIH0sXG4gICAgW0xvZy5JTkZPXTogeyBpbXBvcnRhbmNlOiAxLCBzeW06IExvZy5JTkZPLCBkZXNjOiAnSU5GTycgfSxcbiAgICBbTG9nLldBUk5dOiB7IGltcG9ydGFuY2U6IDIsIHN5bTogTG9nLldBUk4sIGRlc2M6ICdXQVJOJyB9LFxuICAgIFtMb2cuRVJST1JdOiB7IGltcG9ydGFuY2U6IDMsIHN5bTogTG9nLkVSUk9SLCBkZXNjOiAnRVJST1InIH1cbn07XG5Mb2cubG9nID0gbmV3IExvZygnJyk7XG5Mb2cuZ2xvYmFsTGV2ZWwgPSBMb2cubGV2ZWxzW0xvZy5JTkZPXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGdlJrRXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxGRkJRVkVzUTBGQlF6dEJRVWs1UWl4TlFVRk5MRXRCUVVzc1IwRkJSenRKUVVOV0xFdEJRVXNzUlVGQlR5d3lSRUZCTWtRN1NVRkZka1VzU1VGQlNTeEZRVUZSTEcxQ1FVRnRRanRKUVVNdlFpeEhRVUZITEVWQlFWTXNSVUZCUlR0SlFVTmtMRlZCUVZVc1JVRkJSU3hGUVVGRk8wbEJRMlFzUzBGQlN5eEZRVUZQTEVWQlFVVTdTVUZEWkN4UFFVRlBMRVZCUVVzc1JVRkJSVHRKUVVOa0xFMUJRVTBzUlVGQlRTeEZRVUZGTzBsQlJXUXNTMEZCU3l4RlFVRlBMR0ZCUVdFN1NVRkRla0lzUjBGQlJ5eEZRVUZUTEdGQlFXRTdTVUZEZWtJc1MwRkJTeXhGUVVGUExHRkJRV0U3U1VGRGVrSXNUVUZCVFN4RlFVRk5MR0ZCUVdFN1NVRkRla0lzU1VGQlNTeEZRVUZSTEdGQlFXRTdTVUZEZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNTVUZCU1N4RlFVRlJMR0ZCUVdFN1NVRkRla0lzUzBGQlN5eEZRVUZQTEdGQlFXRTdTVUZGZWtJc1QwRkJUeXhGUVVGTExHRkJRV0U3U1VGRGVrSXNVMEZCVXl4RlFVRkhMR0ZCUVdFN1NVRkRla0lzVlVGQlZTeEZRVUZGTEdGQlFXRTdTVUZEZWtJc1VVRkJVU3hGUVVGSkxHRkJRV0U3U1VGRGVrSXNWMEZCVnl4RlFVRkRMR0ZCUVdFN1NVRkRla0lzVVVGQlVTeEZRVUZKTEdGQlFXRTdTVUZEZWtJc1NVRkJTU3hGUVVGUkxHRkJRV0U3U1VGRmVrSXNUMEZCVHl4RlFVRkxMSGRDUVVGM1FqdEpRVU53UXl4TFFVRkxMRVZCUVU4c2QwSkJRWGRDTzBsQlEzQkRMRTlCUVU4c1JVRkJTeXgzUWtGQmQwSTdTVUZEY0VNc1VVRkJVU3hGUVVGSkxIZENRVUYzUWp0SlFVTndReXhOUVVGTkxFVkJRVTBzZDBKQlFYZENPMGxCUTNCRExGTkJRVk1zUlVGQlJ5eDNRa0ZCZDBJN1NVRkRjRU1zVFVGQlRTeEZRVUZOTEhkQ1FVRjNRanRKUVVOd1F5eFBRVUZQTEVWQlFVc3NkMEpCUVhkQ08wTkJRM1pETEVOQlFVTTdRVUZsUml4TlFVRk5MRTlCUVU4c1IwRkJSenRKUVhGRFdpeFpRVUZaTEUxQlFXRTdVVUZNWml4blFrRkJWeXhIUVVGblFpeFRRVUZUTEVOQlFVTTdVVUZEY2tNc2FVSkJRVmtzUjBGQlNTeEZRVUZGTEVOQlFVTTdVVUZEYmtJc1kwRkJVeXhIUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUNMRmRCUVUwc1IwRkJWU3hKUVVGSkxFTkJRVU03VVVGRlJpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVGRExFTkJRVU03U1VGUk1VUXNTVUZCVnl4aFFVRmhMRU5CUVVNc1IwRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVjNVJDeEpRVUZYTEdGQlFXRXNTMEZCU3l4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzBsQmJVSTVReXhMUVVGTExFTkJRVU1zVjBGQmJVSXNSVUZCUlN4alFVRjFRanRSUVVOeVJDeEpRVUZKTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVVFzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEyNUVMRWxCUVVrc1YwRkJWeXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVU16UWl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8xTkJRM1pDTzJGQlFVMHNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRMmhETzJGQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzFsQlEyaERMRWxCUVVrc1kwRkJZeXhGUVVGRk8yZENRVUZGTEVkQlFVY3NRMEZCUXl4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRVVU3YVVKQlF5OUNPMmRDUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUVVVN1dVRkRjRVFzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4alFVRmpMRU5CUVVFc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1kwRkJZeXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTm9TaXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEV0QlFVc3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRM0pGTzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4WFFVRlhMSFZDUVVGMVFpeFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOb1JqdFJRVU5FTEU5QlFVOHNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONFFpeERRVUZETzBsQlUwMHNTMEZCU3l4RFFVRkRMRWRCUVU4c1NVRkJWeXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlV5OUZMRk5CUVZNc1EwRkJReXhIUVVGUExFbEJRVmNzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJVMmhITEZGQlFWRXNRMEZCUXl4SFFVRlBMRWxCUVZjc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRV0Z5Uml4SlFVRkpMRU5CUVVNc1IwRkJUeXhKUVVGWExFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZUYkVZc1NVRkJTU3hEUVVGRExFZEJRVThzU1VGQlZ5eFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZVelJpeExRVUZMTEVOQlFVTXNSMEZCVHp0UlFVTm9RaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRZaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRMjVFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEYWtRc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETzFOQlEzUkNPMkZCUVUwN1dVRkRTQ3hQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenRUUVVOeVJEdEpRVU5NTEVOQlFVTTdTVUZoVXl4SFFVRkhMRU5CUVVNc1IwRkJWU3hGUVVGRkxFZEJRVThzUlVGQlJTeFBRVUZYTzFGQlF6RkRMRWxCUVVrc1NVRkJTU3hIUVVGaExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRja01zVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1NVRkJTU3hIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExGVkJRVlVzU1VGQlNTeFhRVUZYTEVOQlFVTXNWVUZCVlN4RlFVRkZPMWxCUXpORExFbEJRVWtzU1VGQlNTeERRVUZETzFsQlExUXNVVUZCVHl4UFFVRlBMRWRCUVVjc1JVRkJSVHRuUWtGRFppeExRVUZMTEZWQlFWVTdiMEpCUVVVc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzI5Q1FVRkRMRTFCUVUwN1owSkJRM0pETEV0QlFVc3NVVUZCVVR0dlFrRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzI5Q1FVRkRMRTFCUVUwN1owSkJRMjVETEV0QlFVc3NVVUZCVVN4RFFVRkRPMmRDUVVOa0xFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzSkRPMWxCUTBRc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkRMRU5CUVVNc1JVRkJSVHRuUWtGRGJFUXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVTXNRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVUU3WVVGRGNrWTdXVUZEUkN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3WjBKQlFVVXNTVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0aFFVRkZPMWxCUTJ4RUxFMUJRVTBzVFVGQlRTeEhRVUZITEVkQlFVY3NUMEZCVHl4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWxCUXpsRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZWtNc1QwRkJUeXhKUVVGSkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4SlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRMnhETzFGQlEwUXNUMEZCVHl4VFFVRlRMRU5CUVVNN1NVRkRja0lzUTBGQlF6dEpRVWxUTEUxQlFVMHNRMEZCUXl4TFFVRmpMRVZCUVVVc1RVRkJZU3hGUVVGRkxFbEJRVmM3VVVGRGRrUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFMUJRVTBzVFVGQlRTeEpRVUZKTEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkdMRU5CUVVNN1NVRlpUU3hOUVVGTkxFTkJRVU1zVFVGQll6dFJRVU40UWl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGQlJTeEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRWRCUVVjc1EwRkJReXhoUVVGaExFTkJRVU03VTBGQlJUdGhRVU4yUkN4SlFVRkpMRTFCUVUwc1JVRkJUVHRaUVVGRkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVkQlFVY3NUVUZCVFN4RFFVRkRPMU5CUVVVN1VVRkRha1FzVDBGQlR5eEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpGQ0xFTkJRVU03U1VGUFRTeE5RVUZOTEVOQlFVTXNSMEZCVnp0UlFVTnlRaXhKUVVGSkxFZEJRVWNzUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1IwRkJSeXhEUVVGRE8xTkJRVVU3VVVGRGNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRE8wbEJRemRDTEVOQlFVTTdTVUZWVFN4TlFVRk5MRU5CUVVNc1IwRkJjVVE3VVVGREwwUXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hMUVVGSExGTkJRVk1zUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZEZUVRc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eExRVUZITEZOQlFWTXNSVUZCUnp0WlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUVVVN1VVRkRkRVFzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4TFFVRkhMRk5CUVZNc1JVRkJSVHRaUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRUUVVGRk8wbEJRemRFTEVOQlFVTTdTVUZwUWswc1QwRkJUeXhEUVVGRExFZEJRVThzUlVGQlJTeEZRVUZETEV0QlFVc3NSMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hOUVVGTkxFZEJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSMEZCUXl4SFFVRkhMRU5CUVVNc1lVRkJZU3hGUVVGRExFZEJRVU1zUlVGQlF5eExRVUZMTEVWQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZETEVkQlFVY3NRMEZCUXl4aFFVRmhMRVZCUVVNN1VVRkRlRWdzVTBGQlV5eFJRVUZSTEVOQlFVTXNSMEZCVHl4RlFVRkZMRXRCUVZrc1JVRkJSU3hMUVVGWkxFVkJRVVVzVlVGQmFVSTdXVUZEY0VVc1NVRkJTU3hIUVVGSExFdEJRVXNzU1VGQlNTeEZRVUZuUWp0blFrRkJSU3hQUVVGUExFMUJRVTBzUTBGQlF6dGhRVUZGTzFsQlEyeEVMRWxCUVVrc1IwRkJSeXhMUVVGTExGTkJRVk1zUlVGQlZ6dG5Ra0ZCUlN4UFFVRlBMRmRCUVZjc1EwRkJRenRoUVVGRk8xbEJRM1pFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1ZVRkJWU3hGUVVGSE8yZENRVUZGTEU5QlFVOHNWVUZCVlN4RFFVRkRPMkZCUVVVN1dVRkRkRVFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVzN1owSkJRVVVzVDBGQlR5eEpRVUZKTEVkQlFVY3NSMEZCUnl4RFFVRkRPMkZCUVVVN1dVRkRkRVFzU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4UlFVRlJMRVZCUVVzN1owSkJRelZDTEVsQlFVa3NTMEZCU3l4SFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRFZDeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1MwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03YVVKQlEzUkVPMmRDUVVORUxFbEJRVWtzUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRM1pDTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlN5eEZRVUZETEVWQlFVVXNRMEZCUVN4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVRXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJRU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhIUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETzJsQ1FVTXpSenRuUWtGRFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzVlVGQlZTeERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRuUWtGREwwWXNUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhIUVVGSExFOUJRVThzUzBGREwwUXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeExRVUZMTEVkQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeEhRVUZETEUxQlFVMHNRMEZEZUVRc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NRMEZCUXp0aFFVTTVRenRaUVVORUxFOUJRVThzUjBGQlJ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMUZCUXpGQ0xFTkJRVU03VVVGRFJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkZha0lzVDBGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1MwRkJTeXhMUVVGSExGTkJRVk1zU1VGQlNTeExRVUZMTEV0QlFVY3NTVUZCU1N4SlFVRkpMRXRCUVVzc1NVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUXk5R0xFTkJRVU03U1VGRlV5eGhRVUZoTEVOQlFVTXNUVUZCWVN4RlFVRkZMRXRCUVZrc1JVRkJSU3hWUVVGcFFpeEZRVUZGTEUxQlFXVTdVVUZEYmtZc1NVRkJTU3hOUVVGTkxFZEJRVWNzUlVGQlJTeEZRVUZGTEV0QlFVc3NSMEZCUnl4RlFVRkZMRVZCUVVVc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU4yUXl4SlFVRkpMRTFCUVUwc1JVRkJSVHRaUVVOU0xFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dFpRVU40UXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1dVRkZhRVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRjRVlzVFVGQlRTeEhRVUZKTEcxQ1FVRnRRaXhMUVVGTExFbEJRVWtzUTBGQlF6dFpRVU4yUXl4TFFVRkxMRWRCUVVzc1lVRkJZU3hEUVVGRE8xbEJRM2hDTEVWQlFVVXNSMEZCVVN4TlFVRk5MRU5CUVVNN1UwRkRjRUk3VVVGRFJDeFBRVUZQTEVOQlFVTXNSMEZCUnl4VlFVRlZMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTBzUlVGQlJTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RlFVRkZMRVZCUVVVc1RVRkJUU3hEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU01Uml4RFFVRkRPenRCUVRWU1owSXNhVUpCUVdFc1IwRkJSeXhEUVVGRExGVkJRVlVzUlVGQlJTeFhRVUZYTEVWQlFVVXNVMEZCVXl4RlFVRkZMRlZCUVZVc1JVRkJSU3haUVVGWkxFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdRVUZGT1VZc2FVSkJRV0VzUjBGQlJ5dzRRa0ZCT0VJc1EwRkJRenRCUVVNdlF5eGpRVUZWTEVkQlFVMHNSMEZCUnl4RFFVRkRMR0ZCUVdFc1EwRkJRenRCUVVkeVF5eFRRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUjJoQ0xGRkJRVWtzUjBGQlN5eE5RVUZOTEVOQlFVTTdRVUZIYUVJc1VVRkJTU3hIUVVGTExFMUJRVTBzUTBGQlF6dEJRVWRvUWl4VFFVRkxMRWRCUVVrc1QwRkJUeXhEUVVGRE8wRkJSMlFzVlVGQlRTeEhRVUZITzBsQlEzUkNMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZMTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRE8wbEJRemxFTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGTkxFVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJ5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkRPMGxCUXpkRUxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRk5MRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSeXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZETzBsQlF6ZEVMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZMTEVWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRE8wTkJRMnBGTEVOQlFVTTdRVUZIV1N4UFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZIWml4bFFVRlhMRWRCUVdFc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjL2h0bWwyanNvbicpO1xuIiwiLypcclxuICogSFRNTDUgUGFyc2VyIEJ5IFNhbSBCbG93ZXNcclxuICpcclxuICogRGVzaWduZWQgZm9yIEhUTUw1IGRvY3VtZW50c1xyXG4gKlxyXG4gKiBPcmlnaW5hbCBjb2RlIGJ5IEpvaG4gUmVzaWcgKGVqb2huLm9yZylcclxuICogaHR0cDovL2Vqb2huLm9yZy9ibG9nL3B1cmUtamF2YXNjcmlwdC1odG1sLXBhcnNlci9cclxuICogT3JpZ2luYWwgY29kZSBieSBFcmlrIEFydmlkc3NvbiwgTW96aWxsYSBQdWJsaWMgTGljZW5zZVxyXG4gKiBodHRwOi8vZXJpay5lYWUubmV0L3NpbXBsZWh0bWxwYXJzZXIvc2ltcGxlaHRtbHBhcnNlci5qc1xyXG4gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIExpY2Vuc2VcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKlxyXG4gKiBUaGlzIGNvZGUgaXMgdHJpcGxlIGxpY2Vuc2VkIHVzaW5nIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMCxcclxuICogTW96aWxsYSBQdWJsaWMgTGljZW5zZSBvciBHTlUgUHVibGljIExpY2Vuc2VcclxuICogXHJcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICogXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90XHJcbiAqIHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weVxyXG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICogXHJcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICogXHJcbiAqIFRoZSBjb250ZW50cyBvZiB0aGlzIGZpbGUgYXJlIHN1YmplY3QgdG8gdGhlIE1vemlsbGEgUHVibGljIExpY2Vuc2VcclxuICogVmVyc2lvbiAxLjEgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluXHJcbiAqIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqIGh0dHA6Ly93d3cubW96aWxsYS5vcmcvTVBML1xyXG4gKiBcclxuICogU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiXHJcbiAqIGJhc2lzLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXHJcbiAqIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9uc1xyXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cclxuICogXHJcbiAqIFRoZSBPcmlnaW5hbCBDb2RlIGlzIFNpbXBsZSBIVE1MIFBhcnNlci5cclxuICogXHJcbiAqIFRoZSBJbml0aWFsIERldmVsb3BlciBvZiB0aGUgT3JpZ2luYWwgQ29kZSBpcyBFcmlrIEFydmlkc3Nvbi5cclxuICogUG9ydGlvbnMgY3JlYXRlZCBieSBFcmlrIEFydmlkc3Nzb24gYXJlIENvcHlyaWdodCAoQykgMjAwNC4gQWxsIFJpZ2h0c1xyXG4gKiBSZXNlcnZlZC5cclxuICogXHJcbiAqIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICogXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcclxuICogbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDJcclxuICogb2YgdGhlIExpY2Vuc2UsIG9yIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqIFxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKiBcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW07IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmVcclxuICogRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3RyZWV0LCBGaWZ0aCBGbG9vciwgQm9zdG9uLCBNQSAgMDIxMTAtMTMwMSwgVVNBLlxyXG4gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFVzYWdlXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICpcclxuICogLy8gVXNlIGxpa2Ugc286XHJcbiAqIEhUTUxQYXJzZXIoaHRtbFN0cmluZywge1xyXG4gKiAgICAgc3RhcnQ6IGZ1bmN0aW9uKHRhZywgYXR0cnMsIHVuYXJ5KSB7fSxcclxuICogICAgIGVuZDogZnVuY3Rpb24odGFnKSB7fSxcclxuICogICAgIGNoYXJzOiBmdW5jdGlvbih0ZXh0KSB7fSxcclxuICogICAgIGNvbW1lbnQ6IGZ1bmN0aW9uKHRleHQpIHt9XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBvciB0byBnZXQgYW4gWE1MIHN0cmluZzpcclxuICogSFRNTHRvWE1MKGh0bWxTdHJpbmcpO1xyXG4gKlxyXG4gKiAvLyBvciB0byBnZXQgYW4gWE1MIERPTSBEb2N1bWVudFxyXG4gKiBIVE1MdG9ET00oaHRtbFN0cmluZyk7XHJcbiAqXHJcbiAqIC8vIG9yIHRvIGluamVjdCBpbnRvIGFuIGV4aXN0aW5nIGRvY3VtZW50L0RPTSBub2RlXHJcbiAqIEhUTUx0b0RPTShodG1sU3RyaW5nLCBkb2N1bWVudCk7XHJcbiAqIEhUTUx0b0RPTShodG1sU3RyaW5nLCBkb2N1bWVudC5ib2R5KTtcclxuICpcclxuICovXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvLyBSZWd1bGFyIEV4cHJlc3Npb25zIGZvciBwYXJzaW5nIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcclxuXHR2YXIgc3RhcnRUYWcgPSAvXjwoWy1BLVphLXowLTlfXSspKCg/OlxccytbYS16QS1aXzpdWy1hLXpBLVowLTlfOi5dKig/Olxccyo9XFxzKig/Oig/OlwiW15cIl0qXCIpfCg/OidbXiddKicpfFtePlxcc10rKSk/KSopXFxzKihcXC8/KT4vLFxyXG5cdFx0ZW5kVGFnID0gL148XFwvKFstQS1aYS16MC05X10rKVtePl0qPi8sXHJcblx0XHRhdHRyID0gLyhbYS16QS1aXzpdWy1hLXpBLVowLTlfOi5dKikoPzpcXHMqPVxccyooPzooPzpcIigoPzpcXFxcLnxbXlwiXSkqKVwiKXwoPzonKCg/OlxcXFwufFteJ10pKiknKXwoW14+XFxzXSspKSk/L2c7XHJcblxyXG5cdC8vIEVtcHR5IEVsZW1lbnRzIC0gSFRNTCA1XHJcblx0dmFyIGVtcHR5ID0gbWFrZU1hcChcImFyZWEsYmFzZSxiYXNlZm9udCxicixjb2wsZnJhbWUsaHIsaW1nLGlucHV0LGxpbmssbWV0YSxwYXJhbSxlbWJlZCxjb21tYW5kLGtleWdlbixzb3VyY2UsdHJhY2ssd2JyXCIpO1xyXG5cclxuXHQvLyBCbG9jayBFbGVtZW50cyAtIEhUTUwgNVxyXG5cdHZhciBibG9jayA9IG1ha2VNYXAoXCJhLGFkZHJlc3MsYXJ0aWNsZSxhcHBsZXQsYXNpZGUsYXVkaW8sYmxvY2txdW90ZSxidXR0b24sY2FudmFzLGNlbnRlcixkZCxkZWwsZGlyLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxmcmFtZXNldCxoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGhyLGlmcmFtZSxpbnMsaXNpbmRleCxsaSxtYXAsbWVudSxub2ZyYW1lcyxub3NjcmlwdCxvYmplY3Qsb2wsb3V0cHV0LHAscHJlLHNlY3Rpb24sc2NyaXB0LHRhYmxlLHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRyLHVsLHZpZGVvXCIpO1xyXG5cclxuXHQvLyBJbmxpbmUgRWxlbWVudHMgLSBIVE1MIDVcclxuXHR2YXIgaW5saW5lID0gbWFrZU1hcChcImFiYnIsYWNyb255bSxhcHBsZXQsYixiYXNlZm9udCxiZG8sYmlnLGJyLGJ1dHRvbixjaXRlLGNvZGUsZGVsLGRmbixlbSxmb250LGksaWZyYW1lLGltZyxpbnB1dCxpbnMsa2JkLGxhYmVsLG1hcCxvYmplY3QscSxzLHNhbXAsc2NyaXB0LHNlbGVjdCxzbWFsbCxzcGFuLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0ZXh0YXJlYSx0dCx1LHZhclwiKTtcclxuXHJcblx0Ly8gRWxlbWVudHMgdGhhdCB5b3UgY2FuLCBpbnRlbnRpb25hbGx5LCBsZWF2ZSBvcGVuXHJcblx0Ly8gKGFuZCB3aGljaCBjbG9zZSB0aGVtc2VsdmVzKVxyXG5cdHZhciBjbG9zZVNlbGYgPSBtYWtlTWFwKFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyXCIpO1xyXG5cclxuXHQvLyBBdHRyaWJ1dGVzIHRoYXQgaGF2ZSB0aGVpciB2YWx1ZXMgZmlsbGVkIGluIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG5cdHZhciBmaWxsQXR0cnMgPSBtYWtlTWFwKFwiY2hlY2tlZCxjb21wYWN0LGRlY2xhcmUsZGVmZXIsZGlzYWJsZWQsaXNtYXAsbXVsdGlwbGUsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm93cmFwLHJlYWRvbmx5LHNlbGVjdGVkXCIpO1xyXG5cclxuXHQvLyBTcGVjaWFsIEVsZW1lbnRzIChjYW4gY29udGFpbiBhbnl0aGluZylcclxuXHR2YXIgc3BlY2lhbCA9IG1ha2VNYXAoXCJzY3JpcHQsc3R5bGVcIik7XHJcblxyXG5cdHZhciBIVE1MUGFyc2VyID0gdGhpcy5IVE1MUGFyc2VyID0gZnVuY3Rpb24gKGh0bWwsIGhhbmRsZXIpIHtcclxuXHRcdHZhciBpbmRleCwgY2hhcnMsIG1hdGNoLCBzdGFjayA9IFtdLCBsYXN0ID0gaHRtbDtcclxuXHRcdHN0YWNrLmxhc3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcblx0XHR9O1xyXG5cclxuXHRcdHdoaWxlIChodG1sKSB7XHJcblx0XHRcdGNoYXJzID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSdyZSBub3QgaW4gYSBzY3JpcHQgb3Igc3R5bGUgZWxlbWVudFxyXG5cdFx0XHRpZiAoIXN0YWNrLmxhc3QoKSB8fCAhc3BlY2lhbFtzdGFjay5sYXN0KCldKSB7XHJcblxyXG5cdFx0XHRcdC8vIENvbW1lbnRcclxuXHRcdFx0XHRpZiAoaHRtbC5pbmRleE9mKFwiPCEtLVwiKSA9PSAwKSB7XHJcblx0XHRcdFx0XHRpbmRleCA9IGh0bWwuaW5kZXhPZihcIi0tPlwiKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaGFuZGxlci5jb21tZW50KVxyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZXIuY29tbWVudChodG1sLnN1YnN0cmluZyg0LCBpbmRleCkpO1xyXG5cdFx0XHRcdFx0XHRodG1sID0gaHRtbC5zdWJzdHJpbmcoaW5kZXggKyAzKTtcclxuXHRcdFx0XHRcdFx0Y2hhcnMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBlbmQgdGFnXHJcblx0XHRcdFx0fSBlbHNlIGlmIChodG1sLmluZGV4T2YoXCI8L1wiKSA9PSAwKSB7XHJcblx0XHRcdFx0XHRtYXRjaCA9IGh0bWwubWF0Y2goZW5kVGFnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAobWF0Y2gpIHtcclxuXHRcdFx0XHRcdFx0aHRtbCA9IGh0bWwuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRcdG1hdGNoWzBdLnJlcGxhY2UoZW5kVGFnLCBwYXJzZUVuZFRhZyk7XHJcblx0XHRcdFx0XHRcdGNoYXJzID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gc3RhcnQgdGFnXHJcblx0XHRcdFx0fSBlbHNlIGlmIChodG1sLmluZGV4T2YoXCI8XCIpID09IDApIHtcclxuXHRcdFx0XHRcdG1hdGNoID0gaHRtbC5tYXRjaChzdGFydFRhZyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKG1hdGNoKSB7XHJcblx0XHRcdFx0XHRcdGh0bWwgPSBodG1sLnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRtYXRjaFswXS5yZXBsYWNlKHN0YXJ0VGFnLCBwYXJzZVN0YXJ0VGFnKTtcclxuXHRcdFx0XHRcdFx0Y2hhcnMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChjaGFycykge1xyXG5cdFx0XHRcdFx0aW5kZXggPSBodG1sLmluZGV4T2YoXCI8XCIpO1xyXG5cclxuXHRcdFx0XHRcdHZhciB0ZXh0ID0gaW5kZXggPCAwID8gaHRtbCA6IGh0bWwuc3Vic3RyaW5nKDAsIGluZGV4KTtcclxuXHRcdFx0XHRcdGh0bWwgPSBpbmRleCA8IDAgPyBcIlwiIDogaHRtbC5zdWJzdHJpbmcoaW5kZXgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChoYW5kbGVyLmNoYXJzKVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVyLmNoYXJzKHRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZShuZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KTxcXC9cIiArIHN0YWNrLmxhc3QoKSArIFwiW14+XSo+XCIpLCBmdW5jdGlvbiAoYWxsLCB0ZXh0KSB7XHJcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+fDwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZywgXCIkMSQyXCIpO1xyXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXIuY2hhcnMpXHJcblx0XHRcdFx0XHRcdGhhbmRsZXIuY2hhcnModGV4dCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHBhcnNlRW5kVGFnKFwiXCIsIHN0YWNrLmxhc3QoKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChodG1sID09IGxhc3QpXHJcblx0XHRcdFx0dGhyb3cgXCJQYXJzZSBFcnJvcjogXCIgKyBodG1sO1xyXG5cdFx0XHRsYXN0ID0gaHRtbDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDbGVhbiB1cCBhbnkgcmVtYWluaW5nIHRhZ3NcclxuXHRcdHBhcnNlRW5kVGFnKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFyc2VTdGFydFRhZyh0YWcsIHRhZ05hbWUsIHJlc3QsIHVuYXJ5KSB7XHJcblx0XHRcdHRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0XHRpZiAoYmxvY2tbdGFnTmFtZV0pIHtcclxuXHRcdFx0XHR3aGlsZSAoc3RhY2subGFzdCgpICYmIGlubGluZVtzdGFjay5sYXN0KCldKSB7XHJcblx0XHRcdFx0XHRwYXJzZUVuZFRhZyhcIlwiLCBzdGFjay5sYXN0KCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGNsb3NlU2VsZlt0YWdOYW1lXSAmJiBzdGFjay5sYXN0KCkgPT0gdGFnTmFtZSkge1xyXG5cdFx0XHRcdHBhcnNlRW5kVGFnKFwiXCIsIHRhZ05hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1bmFyeSA9IGVtcHR5W3RhZ05hbWVdIHx8ICEhdW5hcnk7XHJcblxyXG5cdFx0XHRpZiAoIXVuYXJ5KVxyXG5cdFx0XHRcdHN0YWNrLnB1c2godGFnTmFtZSk7XHJcblxyXG5cdFx0XHRpZiAoaGFuZGxlci5zdGFydCkge1xyXG5cdFx0XHRcdHZhciBhdHRycyA9IFtdO1xyXG5cclxuXHRcdFx0XHRyZXN0LnJlcGxhY2UoYXR0ciwgZnVuY3Rpb24gKG1hdGNoLCBuYW1lKSB7XHJcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOlxyXG5cdFx0XHRcdFx0XHRhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOlxyXG5cdFx0XHRcdFx0XHRhcmd1bWVudHNbNF0gPyBhcmd1bWVudHNbNF0gOlxyXG5cdFx0XHRcdFx0XHRmaWxsQXR0cnNbbmFtZV0gPyBuYW1lIDogXCJcIjtcclxuXHJcblx0XHRcdFx0XHRhdHRycy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRlc2NhcGVkOiB2YWx1ZS5yZXBsYWNlKC8oXnxbXlxcXFxdKVwiL2csICckMVxcXFxcXFwiJykgLy9cIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmIChoYW5kbGVyLnN0YXJ0KVxyXG5cdFx0XHRcdFx0aGFuZGxlci5zdGFydCh0YWdOYW1lLCBhdHRycywgdW5hcnkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcGFyc2VFbmRUYWcodGFnLCB0YWdOYW1lKSB7XHJcblx0XHRcdC8vIElmIG5vIHRhZyBuYW1lIGlzIHByb3ZpZGVkLCBjbGVhbiBzaG9wXHJcblx0XHRcdGlmICghdGFnTmFtZSlcclxuXHRcdFx0XHR2YXIgcG9zID0gMDtcclxuXHJcblx0XHRcdFx0Ly8gRmluZCB0aGUgY2xvc2VzdCBvcGVuZWQgdGFnIG9mIHRoZSBzYW1lIHR5cGVcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGZvciAodmFyIHBvcyA9IHN0YWNrLmxlbmd0aCAtIDE7IHBvcyA+PSAwOyBwb3MtLSlcclxuXHRcdFx0XHRcdGlmIChzdGFja1twb3NdID09IHRhZ05hbWUpXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0aWYgKHBvcyA+PSAwKSB7XHJcblx0XHRcdFx0Ly8gQ2xvc2UgYWxsIHRoZSBvcGVuIGVsZW1lbnRzLCB1cCB0aGUgc3RhY2tcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gc3RhY2subGVuZ3RoIC0gMTsgaSA+PSBwb3M7IGktLSlcclxuXHRcdFx0XHRcdGlmIChoYW5kbGVyLmVuZClcclxuXHRcdFx0XHRcdFx0aGFuZGxlci5lbmQoc3RhY2tbaV0pO1xyXG5cclxuXHRcdFx0XHQvLyBSZW1vdmUgdGhlIG9wZW4gZWxlbWVudHMgZnJvbSB0aGUgc3RhY2tcclxuXHRcdFx0XHRzdGFjay5sZW5ndGggPSBwb3M7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLkhUTUx0b1hNTCA9IGZ1bmN0aW9uIChodG1sKSB7XHJcblx0XHR2YXIgcmVzdWx0cyA9IFwiXCI7XHJcblxyXG5cdFx0SFRNTFBhcnNlcihodG1sLCB7XHJcblx0XHRcdHN0YXJ0OiBmdW5jdGlvbiAodGFnLCBhdHRycywgdW5hcnkpIHtcclxuXHRcdFx0XHRyZXN1bHRzICs9IFwiPFwiICsgdGFnO1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0cmVzdWx0cyArPSBcIiBcIiArIGF0dHJzW2ldLm5hbWUgKyAnPVwiJyArIGF0dHJzW2ldLmVzY2FwZWQgKyAnXCInO1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gXCI+XCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVuZDogZnVuY3Rpb24gKHRhZykge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gXCI8L1wiICsgdGFnICsgXCI+XCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNoYXJzOiBmdW5jdGlvbiAodGV4dCkge1xyXG5cdFx0XHRcdHJlc3VsdHMgKz0gdGV4dDtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29tbWVudDogZnVuY3Rpb24gKHRleHQpIHtcclxuXHRcdFx0XHRyZXN1bHRzICs9IFwiPCEtLVwiICsgdGV4dCArIFwiLS0+XCI7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiByZXN1bHRzO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuSFRNTHRvRE9NID0gZnVuY3Rpb24gKGh0bWwsIGRvYykge1xyXG5cdFx0Ly8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIG9mIHRoZXNlIGVsZW1lbnRzXHJcblx0XHR2YXIgb25lID0gbWFrZU1hcChcImh0bWwsaGVhZCxib2R5LHRpdGxlXCIpO1xyXG5cclxuXHRcdC8vIEVuZm9yY2UgYSBzdHJ1Y3R1cmUgZm9yIHRoZSBkb2N1bWVudFxyXG5cdFx0dmFyIHN0cnVjdHVyZSA9IHtcclxuXHRcdFx0bGluazogXCJoZWFkXCIsXHJcblx0XHRcdGJhc2U6IFwiaGVhZFwiXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICghZG9jKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgRE9NRG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0XHRkb2MgPSBuZXcgRE9NRG9jdW1lbnQoKTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24gJiYgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQpXHJcblx0XHRcdFx0ZG9jID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQoXCJcIiwgXCJcIiwgbnVsbCk7XHJcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBBY3RpdmVYICE9IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0ZG9jID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNc3htbC5ET01Eb2N1bWVudFwiKTtcclxuXHJcblx0XHR9IGVsc2VcclxuXHRcdFx0ZG9jID0gZG9jLm93bmVyRG9jdW1lbnQgfHxcclxuXHRcdFx0XHRkb2MuZ2V0T3duZXJEb2N1bWVudCAmJiBkb2MuZ2V0T3duZXJEb2N1bWVudCgpIHx8XHJcblx0XHRcdFx0ZG9jO1xyXG5cclxuXHRcdHZhciBlbGVtcyA9IFtdLFxyXG5cdFx0XHRkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8XHJcblx0XHRcdFx0ZG9jLmdldERvY3VtZW50RWxlbWVudCAmJiBkb2MuZ2V0RG9jdW1lbnRFbGVtZW50KCk7XHJcblxyXG5cdFx0Ly8gSWYgd2UncmUgZGVhbGluZyB3aXRoIGFuIGVtcHR5IGRvY3VtZW50IHRoZW4gd2VcclxuXHRcdC8vIG5lZWQgdG8gcHJlLXBvcHVsYXRlIGl0IHdpdGggdGhlIEhUTUwgZG9jdW1lbnQgc3RydWN0dXJlXHJcblx0XHRpZiAoIWRvY3VtZW50RWxlbWVudCAmJiBkb2MuY3JlYXRlRWxlbWVudCkgKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGh0bWwgPSBkb2MuY3JlYXRlRWxlbWVudChcImh0bWxcIik7XHJcblx0XHRcdHZhciBoZWFkID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIpO1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50KFwidGl0bGVcIikpO1xyXG5cdFx0XHRodG1sLmFwcGVuZENoaWxkKGhlYWQpO1xyXG5cdFx0XHRodG1sLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50KFwiYm9keVwiKSk7XHJcblx0XHRcdGRvYy5hcHBlbmRDaGlsZChodG1sKTtcclxuXHRcdH0pKCk7XHJcblxyXG5cdFx0Ly8gRmluZCBhbGwgdGhlIHVuaXF1ZSBlbGVtZW50c1xyXG5cdFx0aWYgKGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSlcclxuXHRcdFx0Zm9yICh2YXIgaSBpbiBvbmUpXHJcblx0XHRcdFx0b25lW2ldID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGkpWzBdO1xyXG5cclxuXHRcdC8vIElmIHdlJ3JlIHdvcmtpbmcgd2l0aCBhIGRvY3VtZW50LCBpbmplY3QgY29udGVudHMgaW50b1xyXG5cdFx0Ly8gdGhlIGJvZHkgZWxlbWVudFxyXG5cdFx0dmFyIGN1clBhcmVudE5vZGUgPSBvbmUuYm9keTtcclxuXHJcblx0XHRIVE1MUGFyc2VyKGh0bWwsIHtcclxuXHRcdFx0c3RhcnQ6IGZ1bmN0aW9uICh0YWdOYW1lLCBhdHRycywgdW5hcnkpIHtcclxuXHRcdFx0XHQvLyBJZiBpdCdzIGEgcHJlLWJ1aWx0IGVsZW1lbnQsIHRoZW4gd2UgY2FuIGlnbm9yZVxyXG5cdFx0XHRcdC8vIGl0cyBjb25zdHJ1Y3Rpb25cclxuXHRcdFx0XHRpZiAob25lW3RhZ05hbWVdKSB7XHJcblx0XHRcdFx0XHRjdXJQYXJlbnROb2RlID0gb25lW3RhZ05hbWVdO1xyXG5cdFx0XHRcdFx0aWYgKCF1bmFyeSkge1xyXG5cdFx0XHRcdFx0XHRlbGVtcy5wdXNoKGN1clBhcmVudE5vZGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGVsZW0gPSBkb2MuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgYXR0ciBpbiBhdHRycylcclxuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKGF0dHJzW2F0dHJdLm5hbWUsIGF0dHJzW2F0dHJdLnZhbHVlKTtcclxuXHJcblx0XHRcdFx0aWYgKHN0cnVjdHVyZVt0YWdOYW1lXSAmJiB0eXBlb2Ygb25lW3N0cnVjdHVyZVt0YWdOYW1lXV0gIT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0XHRvbmVbc3RydWN0dXJlW3RhZ05hbWVdXS5hcHBlbmRDaGlsZChlbGVtKTtcclxuXHJcblx0XHRcdFx0ZWxzZSBpZiAoY3VyUGFyZW50Tm9kZSAmJiBjdXJQYXJlbnROb2RlLmFwcGVuZENoaWxkKVxyXG5cdFx0XHRcdFx0Y3VyUGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlbGVtKTtcclxuXHJcblx0XHRcdFx0aWYgKCF1bmFyeSkge1xyXG5cdFx0XHRcdFx0ZWxlbXMucHVzaChlbGVtKTtcclxuXHRcdFx0XHRcdGN1clBhcmVudE5vZGUgPSBlbGVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZW5kOiBmdW5jdGlvbiAodGFnKSB7XHJcblx0XHRcdFx0ZWxlbXMubGVuZ3RoIC09IDE7XHJcblxyXG5cdFx0XHRcdC8vIEluaXQgdGhlIG5ldyBwYXJlbnROb2RlXHJcblx0XHRcdFx0Y3VyUGFyZW50Tm9kZSA9IGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFyczogZnVuY3Rpb24gKHRleHQpIHtcclxuXHRcdFx0XHRjdXJQYXJlbnROb2RlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbW1lbnQ6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIGNvbW1lbnQgbm9kZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZG9jO1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIG1ha2VNYXAoc3RyKSB7XHJcblx0XHR2YXIgb2JqID0ge30sIGl0ZW1zID0gc3RyLnNwbGl0KFwiLFwiKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdG9ialtpdGVtc1tpXV0gPSB0cnVlO1xyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9XHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgREVCVUcgPSBmYWxzZTtcbiAgdmFyIGRlYnVnID0gREVCVUcgPyBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpIDogZnVuY3Rpb24oKXt9O1xuXG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgcmVxdWlyZSgnLi4vbGliL1B1cmUtSmF2YVNjcmlwdC1IVE1MNS1QYXJzZXIvaHRtbHBhcnNlci5qcycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcSh2KSB7XG4gICAgcmV0dXJuICdcIicgKyB2ICsgJ1wiJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZURPQ1RZUEUoaHRtbCkge1xuICAgIHJldHVybiBodG1sXG4gICAgICAucmVwbGFjZSgvPFxcP3htbC4qXFw/Plxcbi8sICcnKVxuICAgICAgLnJlcGxhY2UoLzwhZG9jdHlwZS4qXFw+XFxuLywgJycpXG4gICAgICAucmVwbGFjZSgvPCFET0NUWVBFLipcXD5cXG4vLCAnJyk7XG4gIH1cblxuICBnbG9iYWwuaHRtbDJqc29uID0gZnVuY3Rpb24gaHRtbDJqc29uKGh0bWwpIHtcbiAgICBodG1sID0gcmVtb3ZlRE9DVFlQRShodG1sKTtcbiAgICB2YXIgYnVmQXJyYXkgPSBbXTtcbiAgICB2YXIgcmVzdWx0cyA9IHtcbiAgICAgIG5vZGU6ICdyb290JyxcbiAgICAgIGNoaWxkOiBbXSxcbiAgICB9O1xuICAgIEhUTUxQYXJzZXIoaHRtbCwge1xuICAgICAgc3RhcnQ6IGZ1bmN0aW9uKHRhZywgYXR0cnMsIHVuYXJ5KSB7XG4gICAgICAgIGRlYnVnKHRhZywgYXR0cnMsIHVuYXJ5KTtcbiAgICAgICAgLy8gbm9kZSBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgIHZhciBub2RlID0ge1xuICAgICAgICAgIG5vZGU6ICdlbGVtZW50JyxcbiAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGF0dHJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIG5vZGUuYXR0ciA9IGF0dHJzLnJlZHVjZShmdW5jdGlvbihwcmUsIGF0dHIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXR0ci52YWx1ZTtcblxuICAgICAgICAgICAgLy8gaGFzIG11bHRpIGF0dGlidXRlc1xuICAgICAgICAgICAgLy8gbWFrZSBpdCBhcnJheSBvZiBhdHRyaWJ1dGVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvIC8pKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgYXR0ciBhbHJlYWR5IGV4aXN0c1xuICAgICAgICAgICAgLy8gbWVyZ2UgaXRcbiAgICAgICAgICAgIGlmIChwcmVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJlW25hbWVdKSkge1xuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgYXJyYXksIHB1c2ggdG8gbGFzdFxuICAgICAgICAgICAgICAgIHByZVtuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgdmFsdWUsIG1ha2UgaXQgYXJyYXlcbiAgICAgICAgICAgICAgICBwcmVbbmFtZV0gPSBbcHJlW25hbWVdLCB2YWx1ZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIG5vdCBleGlzdCwgcHV0IGl0XG4gICAgICAgICAgICAgIHByZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJlO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5hcnkpIHtcbiAgICAgICAgICAvLyBpZiB0aGlzIHRhZyBkb3Nlbid0IGhhdmUgZW5kIHRhZ1xuICAgICAgICAgIC8vIGxpa2UgPGltZyBzcmM9XCJob2dlLnBuZ1wiLz5cbiAgICAgICAgICAvLyBhZGQgdG8gcGFyZW50c1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXSB8fCByZXN1bHRzO1xuICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudC5jaGlsZC5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZkFycmF5LnVuc2hpZnQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbmQ6IGZ1bmN0aW9uKHRhZykge1xuICAgICAgICBkZWJ1Zyh0YWcpO1xuICAgICAgICAvLyBtZXJnZSBpbnRvIHBhcmVudCB0YWdcbiAgICAgICAgdmFyIG5vZGUgPSBidWZBcnJheS5zaGlmdCgpO1xuICAgICAgICBpZiAobm9kZS50YWcgIT09IHRhZykgY29uc29sZS5lcnJvcignaW52YWxpZCBzdGF0ZTogbWlzbWF0Y2ggZW5kIHRhZycpO1xuXG4gICAgICAgIGlmIChidWZBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXN1bHRzLmNoaWxkLnB1c2gobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xuICAgICAgICAgIGlmIChwYXJlbnQuY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50LmNoaWxkID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudC5jaGlsZC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hhcnM6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgZGVidWcodGV4dCk7XG4gICAgICAgIHZhciBub2RlID0ge1xuICAgICAgICAgIG5vZGU6ICd0ZXh0JyxcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICB9O1xuICAgICAgICBpZiAoYnVmQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmVzdWx0cy5jaGlsZC5wdXNoKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcbiAgICAgICAgICBpZiAocGFyZW50LmNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZCA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnQuY2hpbGQucHVzaChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgZGVidWcodGV4dCk7XG4gICAgICAgIHZhciBub2RlID0ge1xuICAgICAgICAgIG5vZGU6ICdjb21tZW50JyxcbiAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcGFyZW50ID0gYnVmQXJyYXlbMF07XG4gICAgICAgIGlmIChwYXJlbnQuY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBhcmVudC5jaGlsZCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5jaGlsZC5wdXNoKG5vZGUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBnbG9iYWwuanNvbjJodG1sID0gZnVuY3Rpb24ganNvbjJodG1sKGpzb24pIHtcbiAgICAvLyBFbXB0eSBFbGVtZW50cyAtIEhUTUwgNC4wMVxuICAgIHZhciBlbXB0eSA9IFsnYXJlYScsICdiYXNlJywgJ2Jhc2Vmb250JywgJ2JyJywgJ2NvbCcsICdmcmFtZScsICdocicsICdpbWcnLCAnaW5wdXQnLCAnaXNpbmRleCcsICdsaW5rJywgJ21ldGEnLCAncGFyYW0nLCAnZW1iZWQnXTtcblxuICAgIHZhciBjaGlsZCA9ICcnO1xuICAgIGlmIChqc29uLmNoaWxkKSB7XG4gICAgICBjaGlsZCA9IGpzb24uY2hpbGQubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgcmV0dXJuIGpzb24yaHRtbChjKTtcbiAgICAgIH0pLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHZhciBhdHRyID0gJyc7XG4gICAgaWYgKGpzb24uYXR0cikge1xuICAgICAgYXR0ciA9IE9iamVjdC5rZXlzKGpzb24uYXR0cikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBqc29uLmF0dHJba2V5XTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHEodmFsdWUpO1xuICAgICAgfSkuam9pbignICcpO1xuICAgICAgaWYgKGF0dHIgIT09ICcnKSBhdHRyID0gJyAnICsgYXR0cjtcbiAgICB9XG5cbiAgICBpZiAoanNvbi5ub2RlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIHZhciB0YWcgPSBqc29uLnRhZztcbiAgICAgIGlmIChlbXB0eS5pbmRleE9mKHRhZykgPiAtMSkge1xuICAgICAgICAvLyBlbXB0eSBlbGVtZW50XG4gICAgICAgIHJldHVybiAnPCcgKyBqc29uLnRhZyArIGF0dHIgKyAnLz4nO1xuICAgICAgfVxuXG4gICAgICAvLyBub24gZW1wdHkgZWxlbWVudFxuICAgICAgdmFyIG9wZW4gPSAnPCcgKyBqc29uLnRhZyArIGF0dHIgKyAnPic7XG4gICAgICB2YXIgY2xvc2UgPSAnPC8nICsganNvbi50YWcgKyAnPic7XG4gICAgICByZXR1cm4gb3BlbiArIGNoaWxkICsgY2xvc2U7XG4gICAgfVxuXG4gICAgaWYgKGpzb24ubm9kZSA9PT0gJ3RleHQnKSB7XG4gICAgICByZXR1cm4ganNvbi50ZXh0O1xuICAgIH1cblxuICAgIGlmIChqc29uLm5vZGUgPT09ICdjb21tZW50Jykge1xuICAgICAgcmV0dXJuICc8IS0tJyArIGpzb24udGV4dCArICctLT4nO1xuICAgIH1cblxuICAgIGlmIChqc29uLm5vZGUgPT09ICdyb290Jykge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfTtcbn0pKHRoaXMpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJ2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpXG5cbnZhciBodHRwcyA9IG1vZHVsZS5leHBvcnRzXG5cbmZvciAodmFyIGtleSBpbiBodHRwKSB7XG4gIGlmIChodHRwLmhhc093blByb3BlcnR5KGtleSkpIGh0dHBzW2tleV0gPSBodHRwW2tleV1cbn1cblxuaHR0cHMucmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbXMsIGNiKSB7XG4gIHBhcmFtcyA9IHZhbGlkYXRlUGFyYW1zKHBhcmFtcylcbiAgcmV0dXJuIGh0dHAucmVxdWVzdC5jYWxsKHRoaXMsIHBhcmFtcywgY2IpXG59XG5cbmh0dHBzLmdldCA9IGZ1bmN0aW9uIChwYXJhbXMsIGNiKSB7XG4gIHBhcmFtcyA9IHZhbGlkYXRlUGFyYW1zKHBhcmFtcylcbiAgcmV0dXJuIGh0dHAuZ2V0LmNhbGwodGhpcywgcGFyYW1zLCBjYilcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXJhbXMgKHBhcmFtcykge1xuICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXJhbXMgPSB1cmwucGFyc2UocGFyYW1zKVxuICB9XG4gIGlmICghcGFyYW1zLnByb3RvY29sKSB7XG4gICAgcGFyYW1zLnByb3RvY29sID0gJ2h0dHBzOidcbiAgfVxuICBpZiAocGFyYW1zLnByb3RvY29sICE9PSAnaHR0cHM6Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvdG9jb2wgXCInICsgcGFyYW1zLnByb3RvY29sICsgJ1wiIG5vdCBzdXBwb3J0ZWQuIEV4cGVjdGVkIFwiaHR0cHM6XCInKVxuICB9XG4gIHJldHVybiBwYXJhbXNcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZyc7XG5jb25zdCBsb2cgPSBuZXcgTG9nKCdOb2RlUmVxdWVzdCcpO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcIi4vZnNVdGlsXCI7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgeyBSZXF1ZXN0IGFzIFJlcXVlc3RVdGlsIH0gZnJvbSAnaHN1dGlsJztcbmNvbnN0IGh0bWwyanNvbiA9IHJlcXVpcmUoJ2h0bWwyanNvbicpLmh0bWwyanNvbjtcbmxvZy5tZXNzYWdlTGVuZ3RoID0gMTIwO1xuY29uc3QgcHJvdG9jb2wgPSB7IFwiaHR0cDpcIjogaHR0cCwgXCJodHRwczpcIjogaHR0cHMgfTtcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdFV0aWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB9XG4gICAgZ2V0VVJMKHVybCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSA/IG5ldyBVUkwodXJsKSA6IHVybDtcbiAgICB9XG4gICAgYXN5bmMgcmVhZENhY2hlZChmbmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbWV0YSA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZFRleHRGaWxlKGAke2ZuYW1lfS1tZXRhLmpzb25gKSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZm5hbWUgKyAnLmJpbicsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZy50cmFuc2llbnQoYCgke3RoaXMucGFjZS5pblF1ZXVlKCl9IHwgJHt0aGlzLnBhY2UuaW5Qcm9ncmVzcygpfSkgZm91bmQgY2FjaGUgZm9yICR7Zm5hbWV9IGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2cudHJhbnNpZW50KGBmb3VuZCBjYWNoZSBmb3IgJHtmbmFtZX0gYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyByZXNwb25zZTogbWV0YSwgZGF0YTogZGF0YSB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHdyaXRlQ2FjaGVkKGZuYW1lLCByZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHJlc3BvbnNlLnJlc3BvbnNlLmhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl07XG4gICAgICAgICAgICBjb25zdCBtZXRhID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgLi4ucmVzcG9uc2UucmVzcG9uc2UuaGVhZGVycyB9LFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1c0NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogcmVzcG9uc2UucmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eHQ6IHJlc3BvbnNlLnJlc3BvbnNlLnR4dFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF3YWl0IGZzLndyaXRlVGV4dEZpbGUoYCR7Zm5hbWV9LW1ldGEuanNvbmAsIEpTT04uc3RyaW5naWZ5KG1ldGEpKTtcbiAgICAgICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShgJHtmbmFtZX0uYmluYCwgcmVzcG9uc2UuZGF0YSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmxvZy53YXJuKGBlcnJvciB3cml0aW5nIGNhY2hlIGZvciBjb250ZW50ICR7cmVzcG9uc2UucmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXX0gYW5kIGZpbGUgJHtmbmFtZX06ICR7ZX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBpc3N1ZVJlcXVlc3Qob3B0aW9ucywgcG9zdERhdGEpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHByb3QgPSBwcm90b2NvbFtvcHRpb25zLnByb3RvY29sXTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZy5kZWJ1ZygoKSA9PiBgcmVxdWVzdGluZyAke3RoaXMubG9nLmluc3BlY3Qob3B0aW9ucywgeyBkZXB0aDogNCB9KX1gKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHByb3QucmVxdWVzdChvcHRpb25zLCAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5jb2RpbmcgPSByZXF1ZXN0LmlzVGV4dHVhbENvbnRlbnQocmVzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddKSA/ICd1dGY4JyA6ICdiaW5hcnknO1xuICAgICAgICAgICAgICAgIHJlcy5zZXRFbmNvZGluZyhlbmNvZGluZyk7XG4gICAgICAgICAgICAgICAgcmVzLnR4dCA9IGVuY29kaW5nID09PSAndXRmOCc7XG4gICAgICAgICAgICAgICAgcmVzLm9uKCdkYXRhJywgKGNodW5rKSA9PiBkYXRhICs9IGNodW5rKTtcbiAgICAgICAgICAgICAgICByZXMub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGRhdGEsIHJlc3BvbnNlOiByZXMgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcS5vbignZXJyb3InLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7IGRhdGE6ICcnLCBlcnJvcjogZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBvc3REYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXEud3JpdGUocG9zdERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxLmVuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5SZXF1ZXN0LmRlY29kZXJzID0ge1xuICAgIHN0cjJqc29uOiAoZGF0YSkgPT4geyB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0gfSxcbiAgICBodG1sMmpzb246IChkYXRhKSA9PiB7IHRyeSB7XG4gICAgICAgIHJldHVybiBodG1sMmpzb24oZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9IH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVbVZ4ZFdWemRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5U1pYRjFaWE4wTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFYTkVRU3hQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEUxQlFXVXNTMEZCU3l4RFFVRkRPMEZCUTI1RExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNUVUZCWlN4UFFVRlBMRU5CUVVNN1FVRkJSeXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRCUVVNelJTeFBRVUZQTEV0QlFVc3NSVUZCUlN4TlFVRmxMRlZCUVZVc1EwRkJRenRCUVVONFF5eFBRVUZQTEVsQlFVa3NUVUZCYTBJc1RVRkJUU3hEUVVGRE8wRkJRM0JETEU5QlFVOHNTMEZCU3l4TlFVRnBRaXhQUVVGUExFTkJRVU03UVVGRGNrTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1NVRkJTU3hYUVVGWExFVkJRVVVzVFVGQlVTeFJRVUZSTEVOQlFVTTdRVUZMYkVRc1RVRkJUU3hUUVVGVExFZEJRVWNzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRCUVVWcVJDeEhRVUZITEVOQlFVTXNZVUZCWVN4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVWNFFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4RlFVRkRMRTlCUVU4c1JVRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeEZRVUZETEV0QlFVc3NSVUZCUXl4RFFVRkRPMEZCUjJoRUxFMUJRVTBzVDBGQlR5eFBRVUZSTEZOQlFWRXNWMEZCVnp0SlFVRjRRenM3VVVGUFl5eFJRVUZITEVkQlFWRXNSMEZCUnl4RFFVRkRPMGxCYjBVM1FpeERRVUZETzBsQmJFVmhMRTFCUVUwc1EwRkJReXhIUVVGak8xRkJRek5DTEU5QlFVOHNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTjZSQ3hEUVVGRE8wbEJWVk1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRlpPMUZCUTI1RExFbEJRVWs3V1VGRFFTeE5RVUZOTEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UlN4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4SFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU53UkN4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVWM3WjBKQlExb3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMSEZDUVVGeFFpeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNoSE8ybENRVUZOTzJkQ1FVTklMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEcxQ1FVRnRRaXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEyNUVPMWxCUTBRc1QwRkJUeXhGUVVGRExGRkJRVkVzUlVGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJReXhEUVVGRE8xTkJRM1JETzFGQlFVTXNUMEZCVFN4RFFVRkRMRVZCUVVVN1dVRkRVQ3hQUVVGUExGTkJRVk1zUTBGQlF6dFRRVU53UWp0SlFVTk1MRU5CUVVNN1NVRkZVeXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFWa3NSVUZCUlN4UlFVRnBRanRSUVVOMlJDeEpRVUZKTzFsQlJVRXNUVUZCVFN4SlFVRkpMRWRCUVVjc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1dVRkRka1FzVFVGQlRTeEpRVUZKTEVkQlFVYzdaMEpCUTFRc1QwRkJUeXhGUVVGRkxFVkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJRenRuUWtGRGRrTXNWVUZCVlN4RlFVRkZMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZUdG5Ra0ZEZUVNc1lVRkJZU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVR0blFrRkRPVU1zUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSenRoUVVNM1FpeERRVUZCTzFsQlEwUXNUVUZCVFN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUzBGQlN5eFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEyNUZMRTFCUVUwc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEV0QlFVc3NUVUZCVFN4RlFVRlZMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEY2tVN1VVRkJReXhQUVVGTkxFTkJRVU1zUlVGQlJUdFpRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHMURRVUZ0UXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNZVUZCWVN4TFFVRkxMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVUZGTzBsQlEzaEpMRU5CUVVNN1NVRkZVeXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEU5QlFXVXNSVUZCUlN4UlFVRmhPMUZCUTNaRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVTnlRaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRM2hETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVFMFFpeEZRVUZGTEUxQlFYbERMRVZCUVVVc1JVRkJSVHRaUVVNelJpeEpRVUZKTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkZMRVZCUVVVc1EwRkJRU3hqUVVGakxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRExFdEJRVXNzUlVGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONlJTeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVOHNSVUZCUlN4RlFVRkZPMmRDUVVNeFF5eE5RVUZOTEZGQlFWRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF6dG5Ra0ZETVVZc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRNVUlzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4UlFVRlJMRXRCUVVzc1RVRkJUU3hEUVVGRE8yZENRVU01UWl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEV0QlFWa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVTm9SQ3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVN2IwSkJRMllzVDBGQlR5eERRVUZETEVWQlFVTXNTVUZCU1N4RlFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFVkJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRka01zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVUN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJTeXhGUVVGRkxFVkJRVVU3WjBKQlEzUkNMRTFCUVUwc1EwRkJReXhGUVVGRExFbEJRVWtzUlVGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFTkJRVU03V1VGREwwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkhTQ3hKUVVGSkxGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUVVVc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVRkZPMWxCUTNCRUxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVTmtMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6czdRVUY2UldFc1owSkJRVkVzUjBGQlJ6dEpRVU55UWl4UlFVRlJMRVZCUVVjc1EwRkJReXhKUVVGWExFVkJRVVVzUlVGQlJTeEhRVUZITEVsQlFVazdVVUZCUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdTMEZCUXp0SlFVRkRMRTlCUVUwc1EwRkJReXhGUVVGRk8xRkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVRTdTMEZCUXl4RFFVRkJMRU5CUVVNN1NVRkRiRVlzVTBGQlV5eEZRVUZGTEVOQlFVTXNTVUZCVnl4RlFVRkZMRVZCUVVVc1IwRkJSeXhKUVVGSk8xRkJRVVVzVDBGQlR5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkJSVHRKUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFGQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNN1MwRkJSU3hEUVVGQkxFTkJRVU03UTBGRGVrWXNRMEZCUXlKOSIsImltcG9ydCAqIGFzIGNwIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuZXhwb3J0IGNvbnN0IGNoaWxkX3Byb2Nlc3MgPSB7XG4gICAgZXhlYzogKGNvbW1hbmQsIG9wdGlvbnMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGNwLmV4ZWMoY29tbWFuZCwgb3B0aW9ucywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKHsgc3Rkb3V0OiBzdGRvdXQsIHN0ZGVycjogc3RkZXJyIH0pO1xuICAgIH0pKVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzQlZkR2xzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMk53VlhScGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZuUWtFc1QwRkJUeXhMUVVGTExFVkJRVVVzVFVGQlR5eGxRVUZsTEVOQlFVTTdRVUZGY2tNc1RVRkJUU3hEUVVGRExFMUJRVTBzWVVGQllTeEhRVUZITzBsQllYcENMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRV01zUlVGQlJTeFBRVUZaTEVWQlFXOURMRVZCUVVVc1EwRkRja1VzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRnhSQ3hGUVVGRkxFMUJRWFZDTEVWQlFVVXNSVUZCUlN4RFFVTXpSaXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhMUVVGVExFVkJRVVVzVFVGQllTeEZRVUZGTEUxQlFXRXNSVUZCUlN4RlFVRkZPMUZCUTJ4RkxFdEJRVXNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUXl4TlFVRk5MRVZCUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlF5eE5RVUZOTEVWQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTI1RkxFTkJRVU1zUTBGQlF5eERRVU5NTzBOQlExSXNRMEZCUXlKOSIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5hc3luYyBmdW5jdGlvbiBzdGF0KHRoZVBhdGgpIHtcbiAgICBjb25zdCBwID0gYXdhaXQgcmVhbFBhdGgodGhlUGF0aCk7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnMuc3RhdChwLCAoZXJyLCBzdGF0cykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIHN0YXRzIGZvciAke3RoZVBhdGh9OiAke2Vycn1gKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoc3RhdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGxzdGF0KHRoZVBhdGgpIHtcbiAgICBjb25zdCBwID0gcGF0aC5ub3JtYWxpemUodGhlUGF0aCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGZzLmxzdGF0KHAsIChlcnIsIHN0YXRzKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoc3RhdHMpKSk7XG59XG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICBjb25zdCBtc2cgPSBgKioqIGVycm9yIGluIGZzVXRpbDogJHtlcnJ9LCBzdGFjazpcXG4ke2Vyci5zdGFja31gO1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlYWxQYXRoKHRoZVBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5yZWFscGF0aCh0aGVQYXRoLCAoZXJyLCByZXNvbHZlZFBhdGgpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZShyZXNvbHZlZFBhdGgpKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGhFeGlzdHModGhlUGF0aCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHN0YXQodGhlUGF0aCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbGVTaXplKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHN0YXQodGhlUGF0aCkpLnNpemU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNGaWxlKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHN0YXQodGhlUGF0aCkpLmlzRmlsZSgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzRGlyZWN0b3J5KHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHN0YXQodGhlUGF0aCkpLmlzRGlyZWN0b3J5KCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNMaW5rKHRoZVBhdGgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGxzdGF0KHRoZVBhdGgpKS5pc1N5bWJvbGljTGluaygpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1rZGlycyh0aGVQYXRoKSB7XG4gICAgY29uc3QgcCA9IHBhdGgubm9ybWFsaXplKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCB0aGVQYXRoKSk7XG4gICAgbGV0IGRpcnMgPSBwLnNwbGl0KCcvJyk7XG4gICAgZGlycyA9IGRpcnMubWFwKChkaXIsIGkpID0+IGRpcnMuc2xpY2UoMCwgaSArIDEpLmpvaW4oJy8nKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpciA9IGRpcnNbaV07XG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IGlzRGlyZWN0b3J5KGRpcik7XG4gICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGZzLnByb21pc2VzLm1rZGlyKGRpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICgoZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLmNvZGUpICE9PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYGVycm9yIGluIG1rZGlyczogJHtlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUuY29kZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBgbWtkaXIgZmFpbGVkIGZvciAke2Rpcn06ICR7cH1cXG4ke2V9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHA7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZERpcih0aGVQYXRoKSB7XG4gICAgY29uc3QgcCA9IGF3YWl0IHJlYWxQYXRoKHRoZVBhdGgpO1xuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLnJlYWRkaXIocCwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGVzLnBhdGggPSBwO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRGaWxlKHRoZVBhdGgsIGlzVGV4dCA9IHRydWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmcy5yZWFkRmlsZSh0aGVQYXRoLCBpc1RleHQgPyAndXRmOCcgOiAnYmluYXJ5JywgKGVyciwgZGF0YSkgPT4gZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKGRhdGEpKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRUZXh0RmlsZSh0aGVQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlYWRGaWxlKHRoZVBhdGgsIHRydWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRKc29uRmlsZSh0aGVQYXRoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlYWRGaWxlKHRoZVBhdGgsIHRydWUpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvcihlcnIpO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3cml0ZUZpbGUodGhlUGF0aCwgY29udGVudCwgaXNUZXh0ID0gdHJ1ZSkge1xuICAgIHZhciBlbmNvZGluZyA9IGlzVGV4dCA/ICd1dGY4JyA6ICdiaW5hcnknO1xuICAgIGF3YWl0IG1rZGlycyhwYXRoLmRpcm5hbWUodGhlUGF0aCkpO1xuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLndyaXRlRmlsZSh0aGVQYXRoLCBjb250ZW50LCBlbmNvZGluZywgKGVycikgPT4gZXJyID8gcmVqZWN0KGBta2RpcnMgZmFpbGVkIGluIHdyaXRlRmlsZSBmb3IgJyR7dGhlUGF0aH0nOiAke2Vycn1gKSA6IHJlc29sdmUodGhlUGF0aCkpO1xuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlU3RyZWFtKHRoZVBhdGgsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0odGhlUGF0aCwgeyBmbGFnczogJ3cnLCBtb2RlOiAwbzY2NiB9KTtcbiAgICAgICAgcy5vbignZXJyb3InLCAoc3JjKSA9PiByZWplY3QoYHdyaXRlU3RyZWFtIGVycm9yICcke3NyY30nIGZvciBwYXRoICcke3RoZVBhdGh9J2ApKTtcbiAgICAgICAgcy53cml0ZShjb250ZW50LCAnYmluYXJ5JywgKCkgPT4gcmVzb2x2ZSh0aGVQYXRoKSk7XG4gICAgICAgIHMuZW5kKCk7XG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd3JpdGVUZXh0RmlsZSh0aGVQYXRoLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIGF3YWl0IHdyaXRlRmlsZSh0aGVQYXRoLCBjb250ZW50LCB0cnVlKVxuICAgICAgICAuY2F0Y2goZXJyb3IpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlSnNvbkZpbGUodGhlUGF0aCwgb2JqKSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShvYmopXG4gICAgICAgIC50aGVuKEpTT04uc3RyaW5naWZ5KVxuICAgICAgICAudGhlbihhc3luYyAoZGF0YSkgPT4gYXdhaXQgd3JpdGVUZXh0RmlsZSh0aGVQYXRoLCBkYXRhKSlcbiAgICAgICAgLmNhdGNoKGVycm9yKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBlbmRGaWxlKHRoZVBhdGgsIGNvbnRlbnQsIGlzVGV4dCA9IHRydWUpIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBpc1RleHQgPyAndXRmOCcgOiB7IGVuY29kaW5nOiBudWxsIH07XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZzLmFwcGVuZEZpbGUodGhlUGF0aCwgY29udGVudCwgZW5jb2RpbmcsIChlcnIpID0+IGVyciA/IHJlamVjdChlcnIpIDogcmVzb2x2ZSh0aGVQYXRoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvcihlKTtcbiAgICB9XG4gICAgO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEZpbGVTeW5jKHRoZVBhdGgsIGNvbnRlbnQsIGlzVGV4dCA9IHRydWUpIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBpc1RleHQgPyAndXRmOCcgOiB7IGVuY29kaW5nOiBudWxsIH07XG4gICAgdHJ5IHtcbiAgICAgICAgZnMuYXBwZW5kRmlsZVN5bmModGhlUGF0aCwgY29udGVudCwgZW5jb2RpbmcpO1xuICAgICAgICByZXR1cm4gdGhlUGF0aDtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3IoZSk7XG4gICAgfVxuICAgIDtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmUodGhlUGF0aCkge1xuICAgIGNvbnN0IGRpciA9IGF3YWl0IGlzRGlyZWN0b3J5KHRoZVBhdGgpO1xuICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGRpciA/IGZzLnJtZGlyKHRoZVBhdGgsIChlKSA9PiAoZSA/IHJlamVjdChlKSA6IHJlc29sdmUodGhlUGF0aCkpKVxuICAgICAgICAgICAgOiBmcy51bmxpbmsodGhlUGF0aCwgKGUpID0+IChlID8gcmVqZWN0KGUpIDogcmVzb2x2ZSh0aGVQYXRoKSkpO1xuICAgIH0pO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUFsbCh0aGVQYXRoKSB7XG4gICAgY29uc3QgcmVtb3ZlZCA9IFtdO1xuICAgIGNvbnN0IGRpciA9IGF3YWl0IGlzRGlyZWN0b3J5KHRoZVBhdGgpO1xuICAgIGlmIChkaXIpIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IHJlYWREaXIodGhlUGF0aCk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGxpc3QubWFwKGFzeW5jIChpKSA9PiByZW1vdmVkLnB1c2goLi4uYXdhaXQgcmVtb3ZlQWxsKGAke3RoZVBhdGh9LyR7aX1gKSkpKTtcbiAgICB9XG4gICAgcmVtb3ZlZC5wdXNoKGF3YWl0IHJlbW92ZSh0aGVQYXRoKSk7XG4gICAgcmV0dXJuIHJlbW92ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labk5WZEdsc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJaelZYUnBiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGblFrRXNUMEZCVHl4TFFVRkxMRVZCUVVVc1RVRkJaU3hKUVVGSkxFTkJRVU03UVVGRGJFTXNUMEZCVHl4TFFVRkxMRWxCUVVrc1RVRkJZU3hOUVVGTkxFTkJRVU03UVVFNFFuQkRMRXRCUVVzc1ZVRkJWU3hKUVVGSkxFTkJRVU1zVDBGQll6dEpRVU01UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhQUVVGUExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVU3VVVGRGVrTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZQTEVWQlFVVXNTMEZCWXl4RlFVRkZMRVZCUVVVN1dVRkRia01zU1VGQlJ5eEhRVUZITEVWQlFVVTdaMEpCUTBvc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5d3lRa0ZCTWtJc1QwRkJUeXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdaMEpCUXpGRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTm1PMmxDUVVOSk8yZENRVUZGTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVGRk8xRkJRelZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFVDeERRVUZETzBGQlQwUXNTMEZCU3l4VlFVRlZMRXRCUVVzc1EwRkJReXhQUVVGak8wbEJReTlDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEY2tNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVOb1F5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVThzUlVGQlJTeExRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZETlVVc1EwRkJRenRCUVVOSUxFTkJRVU03UVVGRlJDeFRRVUZUTEV0QlFVc3NRMEZCUXl4SFFVRlBPMGxCUTJ4Q0xFMUJRVTBzUjBGQlJ5eEhRVUZITEhkQ1FVRjNRaXhIUVVGSExHRkJRV0VzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTJoRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRla0lzUTBGQlF6dEJRVlZFTEUxQlFVMHNWVUZCVlN4UlFVRlJMRU5CUVVNc1QwRkJZenRKUVVOMFF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJNa0lzUlVGQlJTeE5RVUZ6UWl4RlFVRkZMRVZCUVVVN1VVRkRNVVVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGUExFVkJRVVVzV1VGQmJVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUlN4RFFVRkRPMGxCUTJoSExFTkJRVU1zUTBGQlF6dFRRVU5FTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVOc1FpeERRVUZETzBGQlQwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hWUVVGVkxFTkJRVU1zVDBGQll6dEpRVU16UXl4SlFVRkpPMUZCUTBFc1RVRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqdEpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMUZCUTFBc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGFFSTdRVUZEVEN4RFFVRkRPMEZCVDBRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeFJRVUZSTEVOQlFVTXNUMEZCWXp0SlFVTjZReXhKUVVGSk8xRkJRMEVzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzB0QlEzSkRPMGxCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3VVVGRFVDeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTJJN1FVRkRUQ3hEUVVGRE8wRkJUMFFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4TlFVRk5MRU5CUVVNc1QwRkJZenRKUVVOMlF5eEpRVUZKTzFGQlEwRXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1MwRkRla003U1VGQlF5eFBRVUZOTEVOQlFVTXNSVUZCUlR0UlFVTlFMRTlCUVU4c1MwRkJTeXhEUVVGRE8wdEJRMmhDTzBGQlEwd3NRMEZCUXp0QlFVOUVMRTFCUVUwc1EwRkJReXhMUVVGTExGVkJRVlVzVjBGQlZ5eERRVUZETEU5QlFXTTdTVUZETlVNc1NVRkJTVHRSUVVOQkxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzB0QlF6bERPMGxCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3VVVGRFVDeFBRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RanRCUVVOTUxFTkJRVU03UVVGUFJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4VlFVRlZMRTFCUVUwc1EwRkJReXhQUVVGak8wbEJRM1pETEVsQlFVazdVVUZEUVN4UFFVRlBMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRMUVVOc1JEdEpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMUZCUTFBc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGFFSTdRVUZEVEN4RFFVRkRPMEZCVlVRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeE5RVUZOTEVOQlFVTXNUMEZCWXp0SlFVTjJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03U1VGRE9VUXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVVjRRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU42UkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU01UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VJc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRkRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0WlFVRkZMRWxCUVVrN1owSkJRMllzVFVGQlRTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU5vUXp0WlFVRkRMRTlCUVUwc1EwRkJReXhGUVVGRk8yZENRVU5RTEVsQlFVa3NRMEZCUVN4RFFVRkRMR0ZCUVVRc1EwRkJReXgxUWtGQlJDeERRVUZETEVOQlFVVXNTVUZCU1N4TlFVRkxMRkZCUVZFc1JVRkJSVHR2UWtGRGRFSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4aFFVRkVMRU5CUVVNc2RVSkJRVVFzUTBGQlF5eERRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN2IwSkJRelZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEyaENMRTFCUVUwc2IwSkJRVzlDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU03YVVKQlF5OURPMkZCUTBvN1UwRkJRenRMUVVOTU8wbEJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdRVUZEWWl4RFFVRkRPMEZCVDBRc1RVRkJUU3hEUVVGRExFdEJRVXNzVlVGQlZTeFBRVUZQTEVOQlFVTXNUMEZCWXp0SlFVTjRReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOc1F5eFBRVUZQTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGNVFpeEZRVUZGTEUxQlFYTkNMRVZCUVVVc1JVRkJSVHRSUVVNelJTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVThzUlVGQlJTeExRVUZUTEVWQlFVVXNSVUZCUlR0WlFVTnFReXhKUVVGSExFZEJRVWNzUlVGQlJUdG5Ra0ZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGQlJUdHBRa0ZEYmtJN1owSkJRMFFzUzBGQlN5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1owSkJRMllzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJ4Q08xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNN1UwRkRSQ3hMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEYkVJc1EwRkJRenRCUVZORUxFMUJRVTBzVlVGQlZTeFJRVUZSTEVOQlFVTXNUMEZCWXl4RlFVRkZMRTFCUVUwc1IwRkJReXhKUVVGSk8wbEJRMjVFTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGM1FpeEZRVUZGTEUxQlFYTkNMRVZCUVVVc1JVRkJSVHRSUVVOMlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUjBGQlR5eEZRVUZGTEVsQlFWRXNSVUZCUlN4RlFVRkZMRU5CUXpWRUxFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETEVOQlFVTTdVMEZEUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGJFSXNRMEZCUXp0QlFVOUVMRTFCUVUwc1EwRkJReXhMUVVGTExGVkJRVlVzV1VGQldTeERRVUZETEU5QlFXTTdTVUZEYUVRc1NVRkJTVHRSUVVGRkxFOUJRVThzVFVGQlRTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRVVU3U1VGRE1VTXNUMEZCVFN4SFFVRkhMRVZCUVVVN1VVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUlR0QlFVTTVRaXhEUVVGRE8wRkJUMFFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4WlFVRlpMRU5CUVVNc1QwRkJZenRKUVVNM1F5eEpRVUZKTzFGQlEwRXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUXpORExFOUJRVThzUTBGQlF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzB0QlF6bEVPMGxCUTBRc1QwRkJUU3hIUVVGSExFVkJRVVU3VVVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJSVHRCUVVNNVFpeERRVUZETzBGQlUwUXNUVUZCVFN4RFFVRkRMRXRCUVVzc1ZVRkJWU3hUUVVGVExFTkJRVU1zVDBGQll5eEZRVUZGTEU5QlFXTXNSVUZCUlN4VFFVRmxMRWxCUVVrN1NVRkRMMFVzU1VGQlNTeFJRVUZSTEVkQlFVOHNUVUZCVFN4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTTNReXhOUVVGTkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGNFTXNUMEZCVHl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMUZCUTNwRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzUTBGQlF5eEhRVUZQTEVWQlFVVXNSVUZCUlN4RFFVTnFSQ3hIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4dFEwRkJiVU1zVDBGQlR5eE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXk5R0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlExQXNRMEZCUXp0QlFWRkVMRTFCUVUwc1EwRkJReXhMUVVGTExGVkJRVlVzVjBGQlZ5eERRVUZETEU5QlFXTXNSVUZCUlN4UFFVRmpPMGxCUXpWRUxFOUJRVThzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFJRVU42UXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVU1zUzBGQlN5eEZRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVNc1MwRkJTeXhGUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVOHNSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExITkNRVUZ6UWl4SFFVRkhMR1ZCUVdVc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzWkdMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVSQ3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEV2l4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOUUxFTkJRVU03UVVGUFJDeE5RVUZOTEVOQlFVTXNTMEZCU3l4VlFVRlZMR0ZCUVdFc1EwRkJReXhQUVVGakxFVkJRVVVzVDBGQll6dEpRVU5xUlN4UFFVRlBMRTFCUVUwc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRPMU5CUXpGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTnNRaXhEUVVGRE8wRkJVVVFzVFVGQlRTeERRVUZETEV0QlFVc3NWVUZCVlN4aFFVRmhMRU5CUVVNc1QwRkJZeXhGUVVGRkxFZEJRVTg3U1VGRGRrUXNUMEZCVHl4TlFVRk5MRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETzFOQlEyNURMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzFOQlEzQkNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVU1zU1VGQlNTeEZRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MR0ZCUVdFc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEYmtRc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeENMRU5CUVVNN1FVRlRSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eFZRVUZWTEZWQlFWVXNRMEZCUXl4UFFVRmpMRVZCUVVVc1QwRkJZeXhGUVVGRkxGTkJRV1VzU1VGQlNUdEpRVU5vUml4SlFVRkpMRkZCUVZFc1IwRkJUeXhOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZETEVOQlFVTTdTVUZEY2tRc1NVRkJTVHRSUVVGRkxFOUJRVThzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU12UXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRU5CUVVNc1IwRkJUeXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFFY3NRMEZCUXl4RFFVRkRMRU5CUVVFN1MwRkJRenRKUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFGQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRVVU3U1VGQlFTeERRVUZETzBGQlF5OUNMRU5CUVVNN1FVRlRSQ3hOUVVGTkxGVkJRVlVzWTBGQll5eERRVUZETEU5QlFXTXNSVUZCUlN4UFFVRmpMRVZCUVVVc1UwRkJaU3hKUVVGSk8wbEJRemxGTEVsQlFVa3NVVUZCVVN4SFFVRlBMRTFCUVUwc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFVkJRVU1zUTBGQlF6dEpRVU55UkN4SlFVRkpPMUZCUTBFc1JVRkJSU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRemxETEU5QlFVOHNUMEZCVHl4RFFVRkRPMHRCUTJ4Q08wbEJRVU1zVDBGQlRTeERRVUZETEVWQlFVVTdVVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGQlJUdEpRVUZCTEVOQlFVTTdRVUZETjBJc1EwRkJRenRCUVU5RUxFMUJRVTBzUTBGQlF5eExRVUZMTEZWQlFWVXNUVUZCVFN4RFFVRkRMRTlCUVdNN1NVRkRka01zVFVGQlRTeEhRVUZITEVkQlFWY3NUVUZCVFN4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGJFUXNUMEZCVHl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMUZCUTNSRExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTNSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5LTEVOQlFVTTdRVUZQUkN4TlFVRk5MRU5CUVVNc1MwRkJTeXhWUVVGVkxGTkJRVk1zUTBGQlF5eFBRVUZqTzBsQlF6RkRMRTFCUVUwc1QwRkJUeXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU51UWl4TlFVRk5MRWRCUVVjc1IwRkJWeXhOUVVGTkxGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXZReXhKUVVGSkxFZEJRVWNzUlVGQlJUdFJRVU5NTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzQkRMRTFCUVUwc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJReXhEUVVGRExFVkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhOUVVGTkxGTkJRVk1zUTBGQlF5eEhRVUZITEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlF5OUdPMGxCUTBRc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM0JETEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUTI1Q0xFTkJRVU1pZlE9PSIsImV4cG9ydCB7IGNoaWxkX3Byb2Nlc3MgYXMgY3AgfSBmcm9tIFwiLi9jcFV0aWwuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xvZy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vUmVxdWVzdC5qc1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcIi4vZnNVdGlsLmpzXCI7XG5leHBvcnQgeyBmcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUMEZCVHl4RlFVRkZMR0ZCUVdFc1NVRkJTU3hGUVVGRkxFVkJRVVVzVFVGQlR5eGhRVUZoTEVOQlFVTTdRVUZEYmtRc1kwRkJjVU1zVlVGQlZTeERRVUZETzBGQlEyaEVMR05CUVhGRExHTkJRV01zUTBGQlF6dEJRVVZ3UkN4UFFVRlBMRXRCUVVzc1JVRkJSU3hOUVVGMVFpeGhRVUZoTEVOQlFVTTdRVUZEYmtRc1QwRkJUeXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZESW4wPSIsImltcG9ydCB7IExvZyBhcyBMb2dVdGlsIH0gZnJvbSAnaHN1dGlsJztcbmltcG9ydCB7IGRhdGUgfSBmcm9tICdoc3V0aWwnO1xuaW1wb3J0IHsgcGF0aEV4aXN0cyB9IGZyb20gJy4vZnNVdGlsJztcbmltcG9ydCB7IGFwcGVuZEZpbGVTeW5jIH0gZnJvbSAnLi9mc1V0aWwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5jb25zdCBDT0xPUiA9IHtcbiAgICBjbGVhcjogJ1xceDFiWzBtJyxcbiAgICBib2xkOiAnXFx4MWJbMW0nLFxuICAgIGRpbTogJ1xceDFiWzJtJyxcbiAgICB1bmRlcnNjb3JlOiAnXFx4MWJbNG0nLFxuICAgIGJsaW5rOiAnXFx4MWJbNW0nLFxuICAgIHJldmVyc2U6ICdcXHgxYls3bScsXG4gICAgaGlkZGVuOiAnXFx4MWJbOG0nLFxuICAgIGJsYWNrOiAnXFx4MWJbMzBtJyxcbiAgICByZWQ6ICdcXHgxYlszMW0nLFxuICAgIGdyZWVuOiAnXFx4MWJbMzJtJyxcbiAgICB5ZWxsb3c6ICdcXHgxYlszM20nLFxuICAgIGJsdWU6ICdcXHgxYlszNG0nLFxuICAgIG1hZ2VudGE6ICdcXHgxYlszNW0nLFxuICAgIGN5YW46ICdcXHgxYlszNm0nLFxuICAgIHdoaXRlOiAnXFx4MWJbMzdtJyxcbiAgICBkYXJrcmVkOiAnXFx4MWJbMzFtJyxcbiAgICBkYXJrZ3JlZW46ICdcXHgxYlszMm0nLFxuICAgIGRhcmt5ZWxsb3c6ICdcXHgxYlszM20nLFxuICAgIGRhcmtibHVlOiAnXFx4MWJbMzRtJyxcbiAgICBkYXJrbWFnZW50YTogJ1xceDFiWzM1bScsXG4gICAgZGFya2N5YW46ICdcXHgxYlszNm0nLFxuICAgIGdyYXk6ICdcXHgxYlszN20nLFxuICAgIGJnQmxhY2s6ICdcXHgxYls0MG0nLFxuICAgIGJnUmVkOiAnXFx4MWJbNDFtJyxcbiAgICBiZ0dyZWVuOiAnXFx4MWJbNDJtJyxcbiAgICBiZ1llbGxvdzogJ1xceDFiWzQzbScsXG4gICAgYmdCbHVlOiAnXFx4MWJbNDRtJyxcbiAgICBiZ01hZ2VudGE6ICdcXHgxYls0NW0nLFxuICAgIGJnQ3lhbjogJ1xceDFiWzQ2bScsXG4gICAgYmdXaGl0ZTogJ1xceDFiWzQ3bSdcbn07XG5leHBvcnQgY2xhc3MgTG9nIGV4dGVuZHMgTG9nVXRpbCB7XG4gICAgY29uc3RydWN0b3IocHJlZml4KSB7IHN1cGVyKHByZWZpeCk7IH1cbiAgICB0cmFuc2llbnQobXNnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm91dChMb2dVdGlsLklORk8sIG1zZy5wYWRFbmQodGhpcy5tZXNzYWdlTGVuZ3RoIHx8IDgwLCAnICcpICsgJyBcXHInLCB7IGNvbG9yOiBbJ2dyZWVuJ10gfSk7XG4gICAgfVxuICAgIG91dHB1dChjb2xvciwgaGVhZGVyLCBsaW5lKSB7XG4gICAgICAgIGNvbnN0IGMgPSBjb2xvci5tYXAoYyA9PiBDT0xPUltjXSkuam9pbignJyk7XG4gICAgICAgIGNvbnN0IG1zZyA9IGAke2N9JHtoZWFkZXJ9JHtDT0xPUlsnY2xlYXInXX0gJHtsaW5lfWA7XG4gICAgICAgIGlmICh0aGlzLkxvZ0ZpbGUpIHtcbiAgICAgICAgICAgIGFwcGVuZEZpbGVTeW5jKGRhdGUodGhpcy5Mb2dGaWxlKSwgYCR7aGVhZGVyfSAke2xpbmV9XFxuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc2xpY2UoLTEpID09PSAnXFxyJykge1xuICAgICAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUobXNnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgbG9nRmlsZShmaWxlUGF0dGVybikge1xuICAgICAgICBpZiAoZmlsZVBhdHRlcm4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuaW5mbyhcImRpc2FibGluZyBsb2dmaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9nRmlsZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWxlUGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2dGaWxlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBkYXRlKHRoaXMuTG9nRmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVBhdHRlcm4uaW5kZXhPZignLycpID49IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5wYXJzZShmaWxlUGF0dGVybik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IHBhdGhFeGlzdHMocGFydHMuZGlyKTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2FybihgcGF0aCAnJHtwYXJ0cy5kaXJ9JyBkb2Vzbid0IGV4aXN0czsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2dGaWxlID0gZmlsZVBhdHRlcm47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mbyhcIm5vdyBsb2dnaW5nIHRvIGZpbGUgXCIgKyBkYXRlKGZpbGVQYXR0ZXJuKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvZ0ZpbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBjaGVja2luZyBwYXRoICR7cGFydHMuZGlyfTsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvZ0ZpbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmlsZVBhdHRlcm4gPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLkxvZ0ZpbGUgPSAnbG9nLSVZWVlZLSVNTS0lREQudHh0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuTG9nRmlsZSA9IGZpbGVQYXR0ZXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5mbyh0aGlzLkxvZ0ZpbGUgPyBgbm93IGxvZ2dpbmcgdG8gZmlsZSAke2RhdGUodGhpcy5Mb2dGaWxlKX1gIDogJ2xvZ2ZpbGUgZGlzYmFsZWQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuTG9nRmlsZTtcbiAgICB9XG4gICAgZ2V0UHJlUG9zdGZpeChpbmRlbnQsIGxldmVsLCBjdXJySW5kZW50LCBjb2xvcnMpIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMgPyBDT0xPUltjb2xvcnNbbGV2ZWwgJSBjb2xvcnMubGVuZ3RoXV0gOiAnJztcbiAgICAgICAgcmV0dXJuIFtgJHtjdXJySW5kZW50fSR7aW5kZW50fSR7Y29sb3J9YCwgY29sb3JzID8gQ09MT1IuY2xlYXIgOiAnJywgJ1xcbicsIGN1cnJJbmRlbnRdO1xuICAgIH1cbn1cbkxvZy5sb2cgPSBuZXcgTG9nKCcnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJHOW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGVFFTeFBRVUZQTEVWQlFVVXNSMEZCUnl4SlFVRkpMRTlCUVU4c1JVRkJSU3hOUVVGUkxGRkJRVkVzUTBGQlF6dEJRVU14UXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRV3RDTEZGQlFWRXNRMEZCUXp0QlFVTXhReXhQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFWa3NWVUZCVlN4RFFVRkRPMEZCUXpWRExFOUJRVThzUlVGQlJTeGpRVUZqTEVWQlFVVXNUVUZCVVN4VlFVRlZMRU5CUVVNN1FVRkROVU1zVDBGQlVTeEpRVUZKTEUxQlFYRkNMRTFCUVUwc1EwRkJRenRCUVV0NFF5eE5RVUZOTEV0QlFVc3NSMEZCUnp0SlFVTldMRXRCUVVzc1JVRkJUeXhUUVVGVE8wbEJSWEpDTEVsQlFVa3NSVUZCVVN4VFFVRlRPMGxCUTNKQ0xFZEJRVWNzUlVGQlV5eFRRVUZUTzBsQlEzSkNMRlZCUVZVc1JVRkJSU3hUUVVGVE8wbEJRM0pDTEV0QlFVc3NSVUZCVHl4VFFVRlRPMGxCUTNKQ0xFOUJRVThzUlVGQlN5eFRRVUZUTzBsQlEzSkNMRTFCUVUwc1JVRkJUU3hUUVVGVE8wbEJSWEpDTEV0QlFVc3NSVUZCVHl4VlFVRlZPMGxCUTNSQ0xFZEJRVWNzUlVGQlV5eFZRVUZWTzBsQlEzUkNMRXRCUVVzc1JVRkJUeXhWUVVGVk8wbEJRM1JDTEUxQlFVMHNSVUZCVFN4VlFVRlZPMGxCUTNSQ0xFbEJRVWtzUlVGQlVTeFZRVUZWTzBsQlEzUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wbEJRM1JDTEVsQlFVa3NSVUZCVVN4VlFVRlZPMGxCUTNSQ0xFdEJRVXNzUlVGQlR5eFZRVUZWTzBsQlJYUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wbEJRM1JDTEZOQlFWTXNSVUZCUnl4VlFVRlZPMGxCUTNSQ0xGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlEzUkNMRkZCUVZFc1JVRkJTU3hWUVVGVk8wbEJRM1JDTEZkQlFWY3NSVUZCUXl4VlFVRlZPMGxCUTNSQ0xGRkJRVkVzUlVGQlNTeFZRVUZWTzBsQlEzUkNMRWxCUVVrc1JVRkJVU3hWUVVGVk8wbEJSWFJDTEU5QlFVOHNSVUZCU3l4VlFVRlZPMGxCUTNSQ0xFdEJRVXNzUlVGQlR5eFZRVUZWTzBsQlEzUkNMRTlCUVU4c1JVRkJTeXhWUVVGVk8wbEJRM1JDTEZGQlFWRXNSVUZCU1N4VlFVRlZPMGxCUTNSQ0xFMUJRVTBzUlVGQlRTeFZRVUZWTzBsQlEzUkNMRk5CUVZNc1JVRkJSeXhWUVVGVk8wbEJRM1JDTEUxQlFVMHNSVUZCVFN4VlFVRlZPMGxCUTNSQ0xFOUJRVThzUlVGQlN5eFZRVUZWTzBOQlEzcENMRU5CUVVNN1FVRlJSaXhOUVVGTkxFOUJRVThzUjBGQlNTeFRRVUZSTEU5QlFVODdTVUZOTlVJc1dVRkJXU3hOUVVGaExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVZWMFF5eFRRVUZUTEVOQlFVTXNSMEZCVHp0UlFVTndRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRWxCUVVrc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRSeXhEUVVGRE8wbEJTMU1zVFVGQlRTeERRVUZETEV0QlFXTXNSVUZCUlN4TlFVRmhMRVZCUVVVc1NVRkJWenRSUVVOMlJDeE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpWRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRja1FzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUVVVc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVRkZPMUZCUTJoR0xFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGSExFbEJRVWtzUlVGQlJUdFpRVUZGTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFOQlFVVTdZVUZEY0VRN1dVRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUVVVN1NVRkRPVUlzUTBGQlF6dEpRV05OTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJiVUk3VVVGRGNFTXNTVUZCU1N4WFFVRlhMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRM1JDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRE8xbEJRM3BDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXp0WlFVTXZRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdVMEZEZGtJN1lVRkJUU3hKUVVGSkxGZEJRVmNzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEYkVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZITEZOQlFWTXNRMEZCUVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRMjVGTzJGQlFVMHNTVUZCU1N4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZGTEVOQlFVTXNSVUZCUlR0WlFVTndReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xbEJRM1JETEVsQlFVazdaMEpCUTBFc1RVRkJUU3hOUVVGTkxFZEJRVmNzVFVGQlRTeFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVU51UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yOUNRVU5VTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1UwRkJVeXhEUVVGRE8yOUNRVU42UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUzBGQlN5eERRVUZETEVkQlFVY3NiME5CUVc5RExFTkJRVU1zUTBGQlF6dHBRa0ZEY2tVN2NVSkJRVTA3YjBKQlEwZ3NTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhYUVVGWExFTkJRVU03YjBKQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdhVUpCUTNwRU8yZENRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRoUVVOMlFqdFpRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMmRDUVVOUUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRPMmRDUVVONlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2xDUVVGcFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF5eERRVUZETzJkQ1FVTXpSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTTdZVUZEZGtJN1UwRkRTanRoUVVGTkxFbEJRVWtzVjBGQlZ5eExRVUZMTEVWQlFVVXNSVUZCUlR0WlFVTXpRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEhWQ1FVRjFRaXhEUVVGRE8xTkJRekZETzJGQlFVMDdXVUZEU0N4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGRExGZEJRVmNzUTBGQlF6dFRRVU0xUWp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUVN4RFFVRkRMRU5CUVVNc2RVSkJRWFZDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dFJRVU14Uml4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVlRMR0ZCUVdFc1EwRkJReXhOUVVGaExFVkJRVVVzUzBGQldTeEZRVUZGTEZWQlFXbENMRVZCUVVVc1RVRkJaVHRSUVVOdVJpeE5RVUZOTEV0QlFVc3NSMEZCU1N4TlFVRk5MRU5CUVVFc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRha1VzVDBGQlR5eERRVUZETEVkQlFVY3NWVUZCVlN4SFFVRkhMRTFCUVUwc1IwRkJSeXhMUVVGTExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRE1VWXNRMEZCUXpzN1FVRTVSV0VzVDBGQlJ5eEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGREluMD0iLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImNoaWxkX3Byb2Nlc3NcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJjcnlwdG9cIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJmc1wiXTsgfSgpKTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcImh0dHBcIl07IH0oKSk7IiwiKGZ1bmN0aW9uKCkgeyBtb2R1bGUuZXhwb3J0cyA9IHRoaXNbXCJwYXRoXCJdOyB9KCkpOyIsIihmdW5jdGlvbigpIHsgbW9kdWxlLmV4cG9ydHMgPSB0aGlzW1widXJsXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=