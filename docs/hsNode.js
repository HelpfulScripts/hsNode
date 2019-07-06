var hsNode =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function shortCheckSum(s) {
    var chk = 0x12345678;
    var len = s.length;
    for (var i = 0; i < len; i++) {
        chk += (s.charCodeAt(i) * (i + 1));
    }
    return (chk & 0xffffffff).toString(16);
}
exports.shortCheckSum = shortCheckSum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tzdW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ2hlY2tzdW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQyxTQUFnQixhQUFhLENBQUMsQ0FBUTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFQRCxzQ0FPQyJ9

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
    var r = '' + number;
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

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Number.js":
/*!*****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Number.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function round(n, d = 0) {
    const f = Math.pow(10, d);
    const r = Math.round(n * f) / f;
    return '' + r;
}
exports.round = round;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL051bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdDLFNBQWdCLEtBQUssQ0FBQyxDQUFRLEVBQUUsQ0FBQyxHQUFDLENBQUM7SUFPaEMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sRUFBRSxHQUFDLENBQUMsQ0FBQztBQUNmLENBQUM7QUFWRCxzQkFVQyJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js":
/*!************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function timeout(ms) {
    return new Promise((resolve, reject) => { setTimeout(reject, ms); });
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
    constructor(pace = 100, maxConcurrent = -1) {
        this.maxConcurrent = -1;
        this.waitUntil = 0;
        this.waitCount = 0;
        this.beingCalled = 0;
        this.pace = pace + 5;
        this.maxConcurrent = maxConcurrent;
    }
    getWaitCount() { return this.waitCount; }
    getCallingCount() { return this.beingCalled; }
    add(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            const addTime = Date.now();
            if (this.waitUntil < addTime) {
                this.waitUntil = addTime;
            }
            const diff = this.waitUntil - addTime;
            this.waitUntil += this.pace + 5;
            this.waitCount++;
            yield delay(diff)();
            yield new Promise(resolve => {
                const waitLoop = () => {
                    if (this.maxConcurrent < 0 || this.beingCalled < this.maxConcurrent) {
                        resolve();
                    }
                    else {
                        setTimeout(waitLoop, 10);
                    }
                };
                waitLoop();
            });
            this.waitCount--;
            this.beingCalled++;
            const ret = yield fn(Date.now() - addTime);
            this.beingCalled--;
            return ret;
        });
    }
}
exports.Pace = Pace;
function promiseChain(tasks, initialResult = []) {
    return tasks.reduce((chain, task) => chain.then((_results) => Promise.resolve(task(_results)).then((r) => {
        _results.push(r);
        return _results;
    })), Promise.resolve(initialResult));
}
exports.promiseChain = promiseChain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZWRQcm9taXNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9UaW1lZFByb21pc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFXQSxTQUFnQixPQUFPLENBQUMsRUFBUztJQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFGRCwwQkFFQztBQXVCRCxTQUFnQixLQUFLLENBQUMsRUFBUztJQUMzQixPQUFPLENBQUksSUFBTyxFQUFhLEVBQUU7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQXNCLEVBQUUsRUFBRTtZQUMxQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQU5ELHNCQU1DO0FBYUQsTUFBYSxJQUFJO0lBWWIsWUFBWSxJQUFJLEdBQUMsR0FBRyxFQUFFLGFBQWEsR0FBQyxDQUFDLENBQUM7UUFYOUIsa0JBQWEsR0FBSyxDQUFDLENBQUMsQ0FBQztRQUVyQixjQUFTLEdBQVMsQ0FBQyxDQUFDO1FBQ3BCLGNBQVMsR0FBUyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBTyxDQUFDLENBQUM7UUFReEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZLEtBQVEsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM1QyxlQUFlLEtBQUssT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQVF4QyxHQUFHLENBQUMsRUFBaUM7O1lBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFFO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO2FBQUU7WUFDM0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNwQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN4QixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7b0JBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO3dCQUNqRSxPQUFPLEVBQUUsQ0FBQztxQkFDYjt5QkFBTTt3QkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUM1QjtnQkFDTCxDQUFDLENBQUM7Z0JBQ0YsUUFBUSxFQUFFLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FBQTtDQUNKO0FBakRELG9CQWlEQztBQVdELFNBQWdCLFlBQVksQ0FBSSxLQUFxQyxFQUFFLGdCQUFrQixFQUFFO0lBQ3ZGLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQWtCLEVBQUUsSUFBK0IsRUFBZ0IsRUFBRSxDQUV0RixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBWSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUcsRUFBRSxFQUFFO1FBRXRFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUMsRUFDSCxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUNqQyxDQUFDO0FBQ04sQ0FBQztBQVZELG9DQVVDIn0=

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js":
/*!****************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimedPromises_1 = __webpack_require__(/*! ./TimedPromises */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js");
exports.timeout = TimedPromises_1.timeout;
exports.delay = TimedPromises_1.delay;
var TimedPromises_2 = __webpack_require__(/*! ./TimedPromises */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js");
exports.Pace = TimedPromises_2.Pace;
var TimedPromises_3 = __webpack_require__(/*! ./TimedPromises */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/TimedPromises.js");
exports.promiseChain = TimedPromises_3.promiseChain;
var Checksum_1 = __webpack_require__(/*! ./Checksum */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Checksum.js");
exports.shortCheckSum = Checksum_1.shortCheckSum;
var Date_1 = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js");
exports.date = Date_1.date;
exports.ms = Date_1.ms;
var Number_1 = __webpack_require__(/*! ./Number */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Number.js");
exports.round = Number_1.round;
var log_1 = __webpack_require__(/*! ./log */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js");
exports.log = log_1.log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBdUQ7QUFBOUMsa0NBQUEsT0FBTyxDQUFBO0FBQUUsZ0NBQUEsS0FBSyxDQUFBO0FBQ3ZCLGlEQUF1RDtBQUE5QywrQkFBQSxJQUFJLENBQUE7QUFDYixpREFBdUQ7QUFBOUMsdUNBQUEsWUFBWSxDQUFBO0FBQ3JCLHVDQUFrRDtBQUF6QyxtQ0FBQSxhQUFhLENBQUE7QUFDdEIsK0JBQThDO0FBQXJDLHNCQUFBLElBQUksQ0FBQTtBQUFFLG9CQUFBLEVBQUUsQ0FBQTtBQUNqQixtQ0FBZ0Q7QUFBdkMseUJBQUEsS0FBSyxDQUFBO0FBQ2QsNkJBQTZDO0FBQXBDLG9CQUFBLEdBQUcsQ0FBQSJ9

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js":
/*!**************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/log.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Date_1 = __webpack_require__(/*! ./Date */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/Date.js");
const DEBUG = Symbol('DEBUG');
const INFO = Symbol('INFO');
const WARN = Symbol('WARN');
const ERROR = Symbol('ERROR');
let gLogFile;
const gLevels = {
    [DEBUG]: { importance: 0, sym: DEBUG, desc: 'DEBUG' },
    [INFO]: { importance: 1, sym: INFO, desc: 'INFO' },
    [WARN]: { importance: 2, sym: WARN, desc: 'WARN' },
    [ERROR]: { importance: 3, sym: ERROR, desc: 'ERROR' }
};
let gGlobalLevel = gLevels[INFO];
const defDateFormat = '%YYYY%MM%DD %hh:%mm:%ss.%jjj';
let gDateFormat = defDateFormat;
let gColors = false;
const color = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[36m',
    green: '\x1b[32m',
    bold: '\x1b[1m',
    clear: '\x1b[0m'
};
exports.log = create('', (filename, msg) => Promise.resolve(undefined), (path) => Promise.resolve(path.indexOf('/') >= 0 ? false : true));
function create(_prefix, logToFile, pathExists) {
    const context = {
        level: undefined,
        prefix: _prefix,
        logToFile: logToFile,
        pathExists: pathExists
    };
    function level(newLevelSym, setGlobalLevel = false) {
        let newLevel = gLevels[newLevelSym] || gGlobalLevel;
        let oldLevel = context.level || gGlobalLevel;
        if (newLevelSym === undefined) {
            newLevel = oldLevel;
        }
        else if (newLevelSym === null) {
            context.level = undefined;
        }
        else if (gLevels[newLevelSym]) {
            if (setGlobalLevel) {
                gGlobalLevel = newLevel;
            }
            else {
                context.level = newLevel;
            }
            const msg = `new ${setGlobalLevel ? 'global' : context.prefix} log level ${newLevel.desc.toUpperCase()} (was ${oldLevel.desc.toUpperCase()})`;
            out((newLevel.sym === oldLevel.sym) ? DEBUG : INFO, msg);
        }
        else {
            out(ERROR, `unkown level ${newLevelSym.toString()}; log level remains ${oldLevel.sym.toString()}`);
        }
        return newLevel.sym;
    }
    function debug(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(DEBUG, msg, log2File); });
    }
    function info(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(INFO, msg, log2File); });
    }
    function warn(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(WARN, msg, log2File); });
    }
    function error(msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () { return yield out(ERROR, msg, log2File); });
    }
    function format(fmtStr) {
        if (fmtStr === null) {
            gDateFormat = defDateFormat;
        }
        else if (fmtStr) {
            gDateFormat = fmtStr;
        }
        return gDateFormat;
    }
    function prefix(prf) {
        if (prf) {
            context.prefix = prf;
        }
        return context.prefix;
    }
    function out(lvl, msg, log2File = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const colors = { [ERROR]: color.red + color.bold, [WARN]: color.yellow + color.bold, [DEBUG]: color.blue, [INFO]: color.green };
            let desc = gLevels[lvl];
            const filterLevel = context.level || gGlobalLevel;
            if (desc.importance >= filterLevel.importance) {
                const dateStr = Date_1.date(gDateFormat);
                let line = (typeof msg === 'string') ? msg : inspect(msg, 0);
                const logLine = `${dateStr} ${context.prefix} ${desc.desc} ${line}`;
                const colorLine = `${colors[lvl] || ''} ${dateStr} ${context.prefix} ${desc.desc} ${color.clear} ${line}`;
                console.log(gColors ? colorLine : logLine);
                if (msg && msg.stack) {
                    console.log(msg.stack);
                }
                if (gLogFile && log2File) {
                    return yield context.logToFile(Date_1.date(gLogFile), logLine);
                }
            }
            return undefined;
        });
    }
    function logFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (file === null) {
                gLogFile = undefined;
                return yield info("disabling logfile");
            }
            else if (file === undefined) {
                return Date_1.date(gLogFile);
            }
            else if (file.indexOf('/') >= 0) {
                return yield context.pathExists(file)
                    .then((exists) => __awaiter(this, void 0, void 0, function* () {
                    if (!exists) {
                        gLogFile = undefined;
                        return yield warn(`path '${file}' doesn't exists; logfile disabled`);
                    }
                    gLogFile = file;
                    return yield info("now logging to file " + Date_1.date(file));
                }))
                    .catch(() => __awaiter(this, void 0, void 0, function* () {
                    gLogFile = undefined;
                    return yield error(`checking path ${file}; logfile disabled`);
                }));
            }
            else if (file === '') {
                file = 'log-%YYYY-%MM-%DD.txt';
            }
            else {
            }
            gLogFile = file;
            return yield info(gLogFile ? `now logging to file ${Date_1.date(gLogFile)}` : 'logfile disbaled');
        });
    }
    function config(cfg) {
        if (cfg.colors !== undefined) {
            gColors = cfg.colors;
        }
        if (cfg.format !== undefined) {
            format(cfg.format);
        }
        if (cfg.level !== undefined) {
            level(cfg.level);
        }
    }
    function inspect(msg, depth = 1, indent = '') {
        if (depth === null) {
            depth = 999;
        }
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
            if (msg.length !== undefined) {
                return `[${msg.map((e) => (e === undefined) ? '' : inspect(e, depth - 1, indent)).join(', ')}]`;
            }
            return '{\n' + Object.keys(msg).map(k => `   ${indent}${k}: ${inspect(msg[k], depth - 1, indent + '   ')}`).join(',\n') + `\n${indent}}`;
        }
        return msg.toString();
    }
    const newLog = function (prefix, logToFile = context.logToFile, pathExists = context.pathExists) {
        return create(prefix, logToFile, pathExists);
    };
    newLog.DEBUG = DEBUG;
    newLog.INFO = INFO;
    newLog.WARN = WARN;
    newLog.ERROR = ERROR;
    newLog.level = level;
    newLog.debug = debug;
    newLog.info = info;
    newLog.warn = warn;
    newLog.error = error;
    newLog.format = format;
    newLog.prefix = prefix;
    newLog.out = out;
    newLog.logFile = logFile;
    newLog.config = config;
    newLog.inspect = inspect;
    return newLog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBK0VBLGlDQUFrQztBQUdsQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHOUIsTUFBTSxJQUFJLEdBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzlCLE1BQU0sSUFBSSxHQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc5QixNQUFNLEtBQUssR0FBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFHL0IsSUFBSSxRQUFnQixDQUFDO0FBU3JCLE1BQU0sT0FBTyxHQUFHO0lBQ1osQ0FBQyxLQUFLLENBQUMsRUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0lBQ3RELENBQUMsSUFBSSxDQUFDLEVBQU0sRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUNyRCxDQUFDLElBQUksQ0FBQyxFQUFNLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDckQsQ0FBQyxLQUFLLENBQUMsRUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO0NBQ3pELENBQUM7QUFHRixJQUFJLFlBQVksR0FBYSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFHM0MsTUFBTSxhQUFhLEdBQUcsOEJBQThCLENBQUM7QUFDckQsSUFBSSxXQUFXLEdBQU8sYUFBYSxDQUFDO0FBR3BDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztBQUdwQixNQUFNLEtBQUssR0FBRztJQUNWLEdBQUcsRUFBSyxVQUFV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

/***/ }),

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/https-browserify/index.js":
/*!**************************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/https-browserify/index.js ***!
  \**************************************************************************************/
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

/***/ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/process/browser.js":
/*!*******************************************************************************!*\
  !*** /Users/Shared/Sites/staging/apps/hsDocs/node_modules/process/browser.js ***!
  \*******************************************************************************/
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

/***/ "./bin/cpUtil.js":
/*!***********************!*\
  !*** ./bin/cpUtil.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cp = __webpack_require__(/*! child_process */ "child_process");
exports.child_process = {
    exec: (command, options) => new Promise((resolve, reject) => cp.exec(command, options, (error, stdout, stderr) => {
        error ? reject(error) : resolve({ stdout: stdout, stderr: stderr });
    }))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3BVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NwVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWdCQSxvQ0FBcUM7QUFFeEIsUUFBQSxhQUFhLEdBQUc7SUFhekIsSUFBSSxFQUFFLENBQUMsT0FBYyxFQUFFLE9BQVksRUFBb0MsRUFBRSxDQUNyRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQXFELEVBQUUsTUFBdUIsRUFBRSxFQUFFLENBQzNGLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQVMsRUFBRSxNQUFhLEVBQUUsTUFBYSxFQUFFLEVBQUU7UUFDbEUsS0FBSyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQ0w7Q0FDUixDQUFDIn0=

/***/ }),

/***/ "./bin/fsUtil.js":
/*!***********************!*\
  !*** ./bin/fsUtil.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const hsutil_1 = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js");
function stat(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = yield realPath(thePath);
        return yield new Promise((resolve, reject) => {
            fs.stat(p, (err, stats) => {
                if (err) {
                    console.log(`error getting stats for ${thePath}: ${err}`);
                    reject(err);
                }
                else {
                    resolve(stats);
                }
            });
        });
    });
}
function lstat(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = path.normalize(thePath);
        return new Promise((resolve, reject) => fs.lstat(p, (err, stats) => err ? reject(err) : resolve(stats)));
    });
}
function error(err) {
    const msg = `*** error in fsUtil: ${err}, stack:\n${err.stack}`;
    throw new Error(msg);
}
function realPath(thePath) {
    return new Promise((resolve, reject) => {
        fs.realpath(thePath, (err, resolvedPath) => err ? reject(err) : resolve(resolvedPath));
    })
        .catch(error);
}
exports.realPath = realPath;
function pathExists(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield stat(thePath);
            return true;
        }
        catch (e) {
            return false;
        }
    });
}
exports.pathExists = pathExists;
function isFile(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return (yield stat(thePath)).isFile();
        }
        catch (e) {
            return false;
        }
    });
}
exports.isFile = isFile;
function isDirectory(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return (yield stat(thePath)).isDirectory();
        }
        catch (e) {
            return false;
        }
    });
}
exports.isDirectory = isDirectory;
function isLink(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return (yield lstat(thePath)).isSymbolicLink();
        }
        catch (e) {
            return false;
        }
    });
}
exports.isLink = isLink;
function mkdirs(thePath) {
    const p = path.normalize(path.resolve(process.cwd(), thePath));
    if (p.indexOf(process.cwd()) === 0) {
        const r = p.substr(process.cwd().length + 1);
        let dirs = r.split('/');
        dirs = dirs.map((dir, i) => './' + dirs.slice(0, i + 1).join('/'));
        const tasks = dirs.map(dir => () => isDirectory(dir)
            .then((exists) => new Promise((resolve, reject) => {
            if (exists) {
                resolve(true);
            }
            else {
                fs.mkdir(dir, (err) => {
                    if (!err) {
                        resolve(true);
                    }
                    else if (err.toString().match(/Error: EEXIST: file already exists/)) {
                        resolve(true);
                    }
                    else {
                        reject(err);
                    }
                });
            }
        })));
        return hsutil_1.promiseChain(tasks).then((res) => {
            res.map((r, i) => {
                if (r) {
                    return true;
                }
                throw `mkdir failed for ${dirs[i]}: ${r}`;
            });
            return dirs[dirs.length - 1];
        });
    }
    else {
        return Promise.reject(`target '${p}' not inside working directory '${process.cwd()}'`);
    }
}
exports.mkdirs = mkdirs;
function readDir(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const p = yield realPath(thePath);
        return yield new Promise((resolve, reject) => {
            fs.readdir(p, (err, files) => {
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
    });
}
exports.readDir = readDir;
function readFile(thePath, isText = true) {
    return new Promise((resolve, reject) => {
        let encoding = isText ? 'utf8' : {};
        fs.readFile(thePath, encoding, (err, data) => err ? reject(err) : resolve(data));
    })
        .catch(error);
}
exports.readFile = readFile;
function readTextFile(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield readFile(thePath, true);
        }
        catch (err) {
            error(err);
        }
    });
}
exports.readTextFile = readTextFile;
function readJsonFile(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield readFile(thePath, true);
            return (typeof data === 'string') ? JSON.parse(data) : data;
        }
        catch (err) {
            error(err);
        }
    });
}
exports.readJsonFile = readJsonFile;
function writeFile(thePath, content, isText = true) {
    return __awaiter(this, void 0, void 0, function* () {
        var encoding = isText ? 'utf8' : { encoding: null };
        yield mkdirs(path.dirname(thePath));
        return yield new Promise((resolve, reject) => {
            fs.writeFile(thePath, content, encoding, (err) => err ? reject(`mkdirs failed in writeFile for '${thePath}': ${err}`) : resolve(thePath));
        });
    });
}
exports.writeFile = writeFile;
function writeStream(thePath, content) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            const s = fs.createWriteStream(thePath, { flags: 'w', mode: 0o666 });
            s.on('error', (src) => reject(`writeStream error '${src}' for path '${thePath}'`));
            s.write(content, 'binary', () => resolve(thePath));
            s.end();
        });
    });
}
exports.writeStream = writeStream;
function writeTextFile(thePath, content) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield writeFile(thePath, content, true)
            .catch(error);
    });
}
exports.writeTextFile = writeTextFile;
function writeJsonFile(thePath, obj) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.resolve(obj)
            .then(JSON.stringify)
            .then((data) => __awaiter(this, void 0, void 0, function* () { return yield writeTextFile(thePath, data); }))
            .catch(error);
    });
}
exports.writeJsonFile = writeJsonFile;
function appendFile(thePath, content, isText = true) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            var encoding = isText ? 'utf8' : { encoding: null };
            fs.appendFile(thePath, content, encoding, (err) => err ? reject(err) : resolve(thePath));
        })
            .then(realPath)
            .catch(error);
    });
}
exports.appendFile = appendFile;
function remove(thePath) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = yield isDirectory(thePath);
        return yield new Promise((resolve, reject) => {
            dir ? fs.rmdir(thePath, (e) => (e ? reject(e) : resolve(thePath)))
                : fs.unlink(thePath, (e) => (e ? reject(e) : resolve(thePath)));
        });
    });
}
exports.remove = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnNVdGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBZ0JBLHlCQUF5QjtBQUN6Qiw2QkFBb0M7QUFDcEMsbUNBQXNDO0FBOEN0QyxTQUFlLElBQUksQ0FBQyxPQUFjOztRQUM5QixNQUFNLENBQUMsR0FBRyxNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDekMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFPLEVBQUUsS0FBYyxFQUFFLEVBQUU7Z0JBQ25DLElBQUcsR0FBRyxFQUFFO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLE9BQU8sS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Y7cUJBQ0k7b0JBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUFFO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUE7QUFPRCxTQUFlLEtBQUssQ0FBQyxPQUFjOztRQUMvQixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FDaEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFPLEVBQUUsS0FBUyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzVFLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFRCxT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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/process/browser.js */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/process/browser.js")))

/***/ }),

/***/ "./bin/httpUtil.js":
/*!*************************!*\
  !*** ./bin/httpUtil.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const log_1 = __webpack_require__(/*! ./log */ "./bin/log.js");
const log = log_1.log('httpUtil');
const fs = __webpack_require__(/*! ./fsUtil */ "./bin/fsUtil.js");
function xml2json(xml) {
    let result;
    while (xml.length > 0) {
        let tag = xml.match(/<.*?>/);
        if (tag && tag.length > 0) {
            tag = tag[0].substring(1, tag[0].length - 1);
            result = result || {};
            tag = getAttributes(tag, result);
            let start = xml.indexOf(`<${tag}`);
            let end = xml.indexOf(`</${tag}>`);
            if (end > 0) {
                const close = xml.indexOf('>', start);
                let content = xml.substring(close + 1, end).trim();
                result[tag] = this.xml2json(content);
                xml = xml.substring(end + tag.length + 3).trim();
            }
            else {
                xml = xml.substring(xml.indexOf('>') + 1).trim();
            }
        }
        else {
            result = xml.slice(0);
            xml = '';
        }
    }
    return result;
}
exports.xml2json = xml2json;
function request(url, user, referer, postData) {
    let options = {
        method: postData ? 'POST' : 'GET',
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        path: url.pathname + (url.search || ''),
        headers: { 'User-Agent': 'helpful scripts' },
    };
    if (referer) {
        options.headers.referer = referer;
    }
    return requestOptions(options, user, postData);
}
exports.request = request;
class CachedHTTPRequest {
    constructor(cacheLocation, user) {
        this.cacheLocation = cacheLocation;
        this.user = user;
    }
    requestOnline(url, fname) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield request(url, this.user);
            log.info(`requested ${url}`);
            yield fs.writeTextFile(fname, resp.data);
            return resp.data;
        });
    }
    requestOffline(fname) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info(`get cached '${fname}'`);
            return yield fs.readTextFile(fname);
        });
    }
    request(url, useCached = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const fname = `${this.cacheLocation}${url.host}/${url.pathname}${url.search}`;
            const exists = yield fs.isFile(fname);
            return (exists && useCached) ?
                yield this.requestOffline(fname) : yield this.requestOnline(url, fname);
        });
    }
}
exports.CachedHTTPRequest = CachedHTTPRequest;
class Digest {
    constructor(username, password) {
        this.nc = 0;
        this.username = username;
        this.password = password;
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
    testDigestAuth(options, data, response) {
        log.info(`received www-authenticate request for ${options.host}`);
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
        return requestOptions(options);
    }
}
exports.Digest = Digest;
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
    digestHeader.split(',').forEach((part) => {
        const kv = part.split('=').map((v) => v.trim());
        params[kv[0]] = kv[1].replace(/\"/g, '');
    });
    return params;
}
function isBinary(contentType) {
    const binary = {
        'text/html': false,
        'text/plain': false,
        'image/jpeg': true,
        'image/png': true
    };
    const result = binary[contentType];
    return (result === undefined) ? false : result;
}
function getAttributes(tag, result) {
    let fields = tag.split(/(?=([^"]*"[^"]*")*[^"]*$)\s+/g);
    tag = fields[0].trim();
    result[tag] = {};
    fields.map(f => {
        if (f) {
            let attrs = f.split('=');
            result[tag].attrs = result[tag].attrs || {};
            if (attrs.length > 1) {
                result[tag].attrs[attrs[0].trim()] = attrs[1].replace(/\"/g, '').trim();
            }
        }
    });
    return tag;
}
function requestOptions(options, user, postData) {
    const prot = {
        'http:': __webpack_require__(/*! http */ "http"),
        'https:': __webpack_require__(/*! https */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/https-browserify/index.js")
    };
    let auth = (options.headers && options.headers.Authorization);
    log.debug(`requesting ${log.inspect(options, 4)}`);
    return new Promise((resolve, reject) => {
        let data = '';
        log.debug(`sending request ${auth ? 'with authorization ' : ''}for ${options.protocol}//${options.host}:${options.port}${options.path}`);
        const req = prot[options.protocol].request(options, (res) => {
            const encoding = isBinary(res.headers['content-type']) ? 'binary' : 'utf8';
            log.debug(`receiving...${res.headers['content-type']} => ${encoding}`);
            res.setEncoding(encoding);
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => { log.debug(`received ${encoding}`); resolve({ data: data, response: res }); });
        });
        req.on('error', (e) => reject(e));
        if (postData !== undefined) {
            req.write(postData);
        }
        req.end();
    })
        .then((res) => {
        if (user && res.response.headers['www-authenticate']) {
            return user.testDigestAuth(options, res.data, res.response);
        }
        else {
            return res;
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cFV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaHR0cFV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQWtCQSxtQ0FBc0M7QUFDdEMsK0JBQXFDO0FBQUcsTUFBTSxHQUFHLEdBQUcsU0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JFLCtCQUF3QztBQVF4QyxTQUFnQixRQUFRLENBQUMsR0FBVTtJQUMvQixJQUFJLE1BQVUsQ0FBQztJQUNmLE9BQU0sR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxHQUFHLEdBQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUN0QixHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNuQyxJQUFJLEdBQUcsR0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ1QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJ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

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs = __webpack_require__(/*! ./fsUtil */ "./bin/fsUtil.js");
const cpUtil_1 = __webpack_require__(/*! ./cpUtil */ "./bin/cpUtil.js");
exports.node = {
    fs: fs,
    child_process: cpUtil_1.child_process
};
var log_1 = __webpack_require__(/*! ./log */ "./bin/log.js");
exports.log = log_1.log;
const http = __webpack_require__(/*! ./httpUtil */ "./bin/httpUtil.js");
exports.http = http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQkFBNEM7QUFDNUMscUNBQTRDO0FBRS9CLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLEVBQUUsRUFBRSxFQUFFO0lBQ04sYUFBYSxFQUFFLHNCQUFhO0NBQy9CLENBQUM7QUFFRiw2QkFBaUM7QUFBeEIsb0JBQUEsR0FBRyxDQUFBO0FBRVosbUNBQXNDO0FBQzdCLG9CQUFJIn0=

/***/ }),

/***/ "./bin/log.js":
/*!********************!*\
  !*** ./bin/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const hsutil_1 = __webpack_require__(/*! hsutil */ "../../../../../../../../../../Shared/Sites/staging/apps/hsDocs/node_modules/hsutil/index.js");
const path_1 = __webpack_require__(/*! path */ "path");
const fsUtil_1 = __webpack_require__(/*! ./fsUtil */ "./bin/fsUtil.js");
const fsUtil_2 = __webpack_require__(/*! ./fsUtil */ "./bin/fsUtil.js");
exports.log = hsutil_1.log('', node_logToFile, node_pathExists);
exports.log.config({ colors: true });
function node_pathExists(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = path_1.dirname(path_1.normalize(file));
        return yield fsUtil_1.pathExists(dir);
    });
}
function node_logToFile(filename, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fsUtil_2.appendFile(filename, msg + '\n');
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBc0JBLG1DQUE4QztBQUM5QywrQkFBNEM7QUFDNUMscUNBQWdEO0FBQ2hELHFDQUFnRDtBQUVuQyxRQUFBLEdBQUcsR0FBVyxZQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNyRSxXQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7QUFFMUIsU0FBZSxlQUFlLENBQUMsSUFBVzs7UUFDdEMsTUFBTSxHQUFHLEdBQUcsY0FBTyxDQUFDLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLE1BQU0sbUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQUE7QUFFRCxTQUFlLGNBQWMsQ0FBQyxRQUFlLEVBQUUsR0FBVTs7UUFDckQsT0FBTyxNQUFNLG1CQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQUEifQ==

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = child_process;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = crypto;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fs;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = http;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = path;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = url;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oc05vZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL0NoZWNrc3VtLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9EYXRlLmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL1RpbWVkUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHN1dGlsL2luZGV4LmpzIiwid2VicGFjazovL2hzTm9kZS8vVXNlcnMvU2hhcmVkL1NpdGVzL3N0YWdpbmcvYXBwcy9oc0RvY3Mvbm9kZV9tb2R1bGVzL2hzdXRpbC9sb2cuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy9Vc2Vycy9TaGFyZWQvU2l0ZXMvc3RhZ2luZy9hcHBzL2hzRG9jcy9ub2RlX21vZHVsZXMvaHR0cHMtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvL1VzZXJzL1NoYXJlZC9TaXRlcy9zdGFnaW5nL2FwcHMvaHNEb2NzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2NwVXRpbC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvLi9iaW4vZnNVdGlsLmpzIiwid2VicGFjazovL2hzTm9kZS8uL2Jpbi9odHRwVXRpbC5qcyIsIndlYnBhY2s6Ly9oc05vZGUvLi9iaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vaHNOb2RlLy4vYmluL2xvZy5qcyIsIndlYnBhY2s6Ly9oc05vZGUvZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9oc05vZGUvZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vaHNOb2RlL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2hzTm9kZS9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywr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QkFBTyxDQUFDLHFDQUFZO0FBQ2pDO0FBQ0EsMkNBQTJDLG1XOzs7Ozs7Ozs7Ozs7QUNaOUI7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQywyR0FBUTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsa0JBQU07QUFDN0IsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVU7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMsaUNBQVU7QUFDbkM7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJDQUEyQyxtdUI7Ozs7Ozs7Ozs7O0FDM0IzQywrQjs7Ozs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7Ozs7Ozs7QUNBQSxvQjs7Ozs7Ozs7Ozs7QUNBQSxzQjs7Ozs7Ozs7Ozs7QUNBQSxzQjs7Ozs7Ozs7Ozs7QUNBQSxxQiIsImZpbGUiOiJoc05vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jpbi9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gc2hvcnRDaGVja1N1bShzKSB7XG4gICAgdmFyIGNoayA9IDB4MTIzNDU2Nzg7XG4gICAgdmFyIGxlbiA9IHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY2hrICs9IChzLmNoYXJDb2RlQXQoaSkgKiAoaSArIDEpKTtcbiAgICB9XG4gICAgcmV0dXJuIChjaGsgJiAweGZmZmZmZmZmKS50b1N0cmluZygxNik7XG59XG5leHBvcnRzLnNob3J0Q2hlY2tTdW0gPSBzaG9ydENoZWNrU3VtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUTJobFkydHpkVzB1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlEyaGxZMnR6ZFcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZSUXl4VFFVRm5RaXhoUVVGaExFTkJRVU1zUTBGQlVUdEpRVU51UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU03U1VGRGNrSXNTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU51UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRekZDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU4wUXp0SlFVTkVMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRekZETEVOQlFVTTdRVUZRUkN4elEwRlBReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBtb250aFN0ciA9IFtcbiAgICBbJ0phbicsICdKYW51YXJ5J10sIFsnRmViJywgJ0ZlYnJ1YXJ5J10sIFsnTWFyJywgJ01hcmNoJ10sIFsnQXByJywgJ0FwcmlsJ10sIFsnTWF5JywgJ01heSddLCBbJ0p1bicsICdKdW5lJ10sXG4gICAgWydKdWwnLCAnSnVseSddLCBbJ0F1ZycsICdBdWd1c3QnXSwgWydTZXAnLCAnU2VwdGVtYmVyJ10sIFsnT2N0JywgJ09jdG9iZXInXSwgWydOb3YnLCAnTm92ZW1iZXInXSwgWydEZWMnLCAnRGVjZW1iZXInXVxuXTtcbmNvbnN0IGRheVN0ciA9IFtcbiAgICBbJ1N1bicsICdTdW5kYXknXSwgWydNb24nLCAnTW9uZGF5J10sIFsnVHVlJywgJ1R1ZXNkYXknXSwgWydXZWQnLCAnV2VkbmVzZGF5J10sIFsnVGh1JywgJ1RodXJzZGF5J10sIFsnRnJpJywgJ0ZyaWRheSddLCBbJ1NhdCcsICdTYXR1cmRheSddXG5dO1xuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bWJlciwgZGlnaXRzKSB7XG4gICAgdmFyIHIgPSAnJyArIG51bWJlcjtcbiAgICB3aGlsZSAoci5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgICAgciA9IFwiMFwiICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5mdW5jdGlvbiBkYXRlKGZvcm1hdFN0cmluZywgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBmb3JtYXRTdHJpbmcgIT09ICdzdHJpbmcnIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkgP1xuICAgICAgICAnaW52YWxpZCcgOlxuICAgICAgICBmb3JtYXRTdHJpbmdcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVlZWS9nLCAnJyArIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lWVkvZywgJycgKyAoZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU1NTS9nLCBtb250aFN0cltkYXRlLmdldE1vbnRoKCldWzFdKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhTdHJbZGF0ZS5nZXRNb250aCgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNL2csICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVEREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVsxXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREREL2csIGRheVN0cltkYXRlLmdldERheSgpXVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lREQvZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0RGF0ZSgpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lRC9nLCAnJyArIGRhdGUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVoaC9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRIb3VycygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8laC9nLCAnJyArIGRhdGUuZ2V0SG91cnMoKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbW0vZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lbS9nLCAnJyArIGRhdGUuZ2V0TWludXRlcygpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVzcy9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIDIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqamovZywgZm9ybWF0TnVtYmVyKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVqai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwLCAyKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lai9nLCBmb3JtYXROdW1iZXIoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCwgMSkpO1xufVxuZXhwb3J0cy5kYXRlID0gZGF0ZTtcbmV4cG9ydHMubXMgPSB7XG4gICAgZnJvbU1pbnV0ZXM6IChtaW4pID0+IDEwMDAgKiA2MCAqIG1pbixcbiAgICBmcm9tSG91cnM6IChoKSA9PiAxMDAwICogNjAgKiA2MCAqIGgsXG4gICAgZnJvbURheXM6IChkKSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogZCxcbiAgICBmcm9tV2Vla3M6ICh3KSA9PiAxMDAwICogNjAgKiA2MCAqIDI0ICogNyAqIHcsXG4gICAgdG9NaW51dGVzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCksXG4gICAgdG9Ib3VyczogKG1zKSA9PiBtcyAvICgxMDAwICogNjAgKiA2MCksXG4gICAgdG9EYXlzOiAobXMpID0+IG1zIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpLFxuICAgIHRvV2Vla3M6IChtcykgPT4gbXMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDcpXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pUkdGMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlFWVhSbExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCWlVFc1RVRkJUU3hSUVVGUkxFZEJRVWM3U1VGRFlpeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU03U1VGRE5VY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETzBOQlFVTXNRMEZCUXp0QlFVYzFTQ3hOUVVGTkxFMUJRVTBzUjBGQlJ6dEpRVU5ZTEVOQlFVTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJRenREUVVGRExFTkJRVU03UVVGSE0wa3NVMEZCVXl4WlFVRlpMRU5CUVVNc1RVRkJZU3hGUVVGRkxFMUJRV0U3U1VGRE9VTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGRExFMUJRVTBzUTBGQlF6dEpRVU5zUWl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEZRVUZGTzFGQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGQlJUdEpRVU14UXl4UFFVRlBMRU5CUVVNc1EwRkJRenRCUVVOaUxFTkJRVU03UVVGalJDeFRRVUZuUWl4SlFVRkpMRU5CUVVNc1dVRkJiVUlzUlVGQlJTeEpRVUZKTEVkQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVN1NVRkRja1FzVDBGQlR5eERRVUZETEU5QlFVOHNXVUZCV1N4TFFVRkxMRkZCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhGTEZOQlFWTXNRMEZCUVN4RFFVRkRPMUZCUTFZc1dVRkJXVHRoUVVOUUxFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dGhRVU40UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxFVkJRVVVzUjBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1IwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU01UXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5vUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzQkVMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVWtzUlVGQlJTeEhRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEzaERMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlF6VkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVWtzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGSkxFVkJRVVVzUjBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1lVRkRia01zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCU1N4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJ4RUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVY3NSVUZCUlN4SFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dGhRVU51UXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGSkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRGNFUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJTU3hGUVVGRkxFZEJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMkZCUTNSRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVa3NXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTndSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZKTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdZVUZETVVRc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlNTeFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hIUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTTFSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFZEJRVU1zUjBGQlJ5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRla1VzUTBGQlF6dEJRWFJDUkN4dlFrRnpRa003UVVGSFdTeFJRVUZCTEVWQlFVVXNSMEZCUnp0SlFVTmtMRmRCUVZjc1JVRkJTeXhEUVVGRExFZEJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRVZCUVVVc1IwRkJReXhIUVVGSE8wbEJRek5ETEZOQlFWTXNSVUZCVHl4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1EwRkJRenRKUVVNMVF5eFJRVUZSTEVWQlFWRXNRMEZCUXl4RFFVRlJMRVZCUVVrc1JVRkJSU3hEUVVGRExFbEJRVWtzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4SFFVRkRMRVZCUVVVc1IwRkJReXhEUVVGRE8wbEJReTlETEZOQlFWTXNSVUZCVHl4RFFVRkRMRU5CUVZFc1JVRkJTU3hGUVVGRkxFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUjBGQlF5eERRVUZETzBsQlEycEVMRk5CUVZNc1JVRkJUeXhEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUTBGQlF6dEpRVU0xUXl4UFFVRlBMRVZCUVZNc1EwRkJReXhGUVVGVExFVkJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJReXhGUVVGRkxFZEJRVU1zUlVGQlJTeERRVUZETzBsQlF5OURMRTFCUVUwc1JVRkJWU3hEUVVGRExFVkJRVk1zUlVGQlJ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGRExFVkJRVVVzUjBGQlF5eEZRVUZGTEVkQlFVTXNSVUZCUlN4RFFVRkRPMGxCUTJ4RUxFOUJRVThzUlVGQlV5eERRVUZETEVWQlFWTXNSVUZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZETEVWQlFVVXNSMEZCUXl4RlFVRkZMRWRCUVVNc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF6dERRVU4yUkN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiByb3VuZChuLCBkID0gMCkge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxMCwgZCk7XG4gICAgY29uc3QgciA9IE1hdGgucm91bmQobiAqIGYpIC8gZjtcbiAgICByZXR1cm4gJycgKyByO1xufVxuZXhwb3J0cy5yb3VuZCA9IHJvdW5kO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVG5WdFltVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDA1MWJXSmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFWZERMRk5CUVdkQ0xFdEJRVXNzUTBGQlF5eERRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRkRMRU5CUVVNN1NVRlBhRU1zVFVGQlRTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETzBsQlF6VkNMRTlCUVU4c1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5tTEVOQlFVTTdRVUZXUkN4elFrRlZReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4geyBzZXRUaW1lb3V0KHJlamVjdCwgbXMpOyB9KTtcbn1cbmV4cG9ydHMudGltZW91dCA9IHRpbWVvdXQ7XG5mdW5jdGlvbiBkZWxheShtcykge1xuICAgIHJldHVybiAoYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyByZXNvbHZlKGFyZ3MpOyB9LCBtcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnRzLmRlbGF5ID0gZGVsYXk7XG5jbGFzcyBQYWNlIHtcbiAgICBjb25zdHJ1Y3RvcihwYWNlID0gMTAwLCBtYXhDb25jdXJyZW50ID0gLTEpIHtcbiAgICAgICAgdGhpcy5tYXhDb25jdXJyZW50ID0gLTE7XG4gICAgICAgIHRoaXMud2FpdFVudGlsID0gMDtcbiAgICAgICAgdGhpcy53YWl0Q291bnQgPSAwO1xuICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkID0gMDtcbiAgICAgICAgdGhpcy5wYWNlID0gcGFjZSArIDU7XG4gICAgICAgIHRoaXMubWF4Q29uY3VycmVudCA9IG1heENvbmN1cnJlbnQ7XG4gICAgfVxuICAgIGdldFdhaXRDb3VudCgpIHsgcmV0dXJuIHRoaXMud2FpdENvdW50OyB9XG4gICAgZ2V0Q2FsbGluZ0NvdW50KCkgeyByZXR1cm4gdGhpcy5iZWluZ0NhbGxlZDsgfVxuICAgIGFkZChmbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgYWRkVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAodGhpcy53YWl0VW50aWwgPCBhZGRUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWl0VW50aWwgPSBhZGRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRoaXMud2FpdFVudGlsIC0gYWRkVGltZTtcbiAgICAgICAgICAgIHRoaXMud2FpdFVudGlsICs9IHRoaXMucGFjZSArIDU7XG4gICAgICAgICAgICB0aGlzLndhaXRDb3VudCsrO1xuICAgICAgICAgICAgeWllbGQgZGVsYXkoZGlmZikoKTtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRMb29wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhDb25jdXJyZW50IDwgMCB8fCB0aGlzLmJlaW5nQ2FsbGVkIDwgdGhpcy5tYXhDb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRMb29wLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHdhaXRMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMud2FpdENvdW50LS07XG4gICAgICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkKys7XG4gICAgICAgICAgICBjb25zdCByZXQgPSB5aWVsZCBmbihEYXRlLm5vdygpIC0gYWRkVGltZSk7XG4gICAgICAgICAgICB0aGlzLmJlaW5nQ2FsbGVkLS07XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlBhY2UgPSBQYWNlO1xuZnVuY3Rpb24gcHJvbWlzZUNoYWluKHRhc2tzLCBpbml0aWFsUmVzdWx0ID0gW10pIHtcbiAgICByZXR1cm4gdGFza3MucmVkdWNlKChjaGFpbiwgdGFzaykgPT4gY2hhaW4udGhlbigoX3Jlc3VsdHMpID0+IFByb21pc2UucmVzb2x2ZSh0YXNrKF9yZXN1bHRzKSkudGhlbigocikgPT4ge1xuICAgICAgICBfcmVzdWx0cy5wdXNoKHIpO1xuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfSkpLCBQcm9taXNlLnJlc29sdmUoaW5pdGlhbFJlc3VsdCkpO1xufVxuZXhwb3J0cy5wcm9taXNlQ2hhaW4gPSBwcm9taXNlQ2hhaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lWR2x0WldSUWNtOXRhWE5sY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVVhVzFsWkZCeWIyMXBjMlZ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN1FVRlhRU3hUUVVGblFpeFBRVUZQTEVOQlFVTXNSVUZCVXp0SlFVTTNRaXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRkxFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzcEZMRU5CUVVNN1FVRkdSQ3d3UWtGRlF6dEJRWFZDUkN4VFFVRm5RaXhMUVVGTExFTkJRVU1zUlVGQlV6dEpRVU16UWl4UFFVRlBMRU5CUVVrc1NVRkJUeXhGUVVGaExFVkJRVVU3VVVGRE4wSXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRWE5DTEVWQlFVVXNSVUZCUlR0WlFVTXhReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUXpkRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXl4RFFVRkRPMEZCUTA0c1EwRkJRenRCUVU1RUxITkNRVTFETzBGQllVUXNUVUZCWVN4SlFVRkpPMGxCV1dJc1dVRkJXU3hKUVVGSkxFZEJRVU1zUjBGQlJ5eEZRVUZGTEdGQlFXRXNSMEZCUXl4RFFVRkRMRU5CUVVNN1VVRllPVUlzYTBKQlFXRXNSMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVWeVFpeGpRVUZUTEVkQlFWTXNRMEZCUXl4RFFVRkRPMUZCUTNCQ0xHTkJRVk1zUjBGQlV5eERRVUZETEVOQlFVTTdVVUZEY0VJc1owSkJRVmNzUjBGQlR5eERRVUZETEVOQlFVTTdVVUZSZUVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRPMGxCUTNaRExFTkJRVU03U1VGRlJDeFpRVUZaTEV0QlFWRXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU0xUXl4bFFVRmxMRXRCUVVzc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFWRjRReXhIUVVGSExFTkJRVU1zUlVGQmFVTTdPMWxCUTNaRExFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVNelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1QwRkJUeXhGUVVGRk8yZENRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1QwRkJUeXhEUVVGRE8yRkJRVVU3V1VGRE0wUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdXVUZEZEVNc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOb1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1dVRkRha0lzVFVGQlRTeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVOd1FpeE5RVUZOTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8yZENRVU40UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhIUVVGSExFVkJRVVU3YjBKQlEyeENMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzNkQ1FVTnFSU3hQUVVGUExFVkJRVVVzUTBGQlF6dHhRa0ZEWWp0NVFrRkJUVHQzUWtGRFNDeFZRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8zRkNRVU0xUWp0blFrRkRUQ3hEUVVGRExFTkJRVU03WjBKQlEwWXNVVUZCVVN4RlFVRkZMRU5CUVVNN1dVRkRaaXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRaUVVOcVFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1dVRkRia0lzVFVGQlRTeEhRVUZITEVkQlFVY3NUVUZCVFN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMWxCUTNwRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0WlFVTnVRaXhQUVVGUExFZEJRVWNzUTBGQlF6dFJRVU5tTEVOQlFVTTdTMEZCUVR0RFFVTktPMEZCYWtSRUxHOUNRV2xFUXp0QlFWZEVMRk5CUVdkQ0xGbEJRVmtzUTBGQlNTeExRVUZ4UXl4RlFVRkZMR2RDUVVGclFpeEZRVUZGTzBsQlEzWkdMRTlCUVU4c1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFXdENMRVZCUVVVc1NVRkJLMElzUlVGQlowSXNSVUZCUlN4RFFVVjBSaXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCV1N4RlFVRkZMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVY3NSVUZCUlN4RlFVRkZPMUZCUlhSRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha0lzVDBGQlR5eFJRVUZSTEVOQlFVTTdTVUZEY0VJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGRFNDeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVOcVF5eERRVUZETzBGQlEwNHNRMEZCUXp0QlFWWkVMRzlEUVZWREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBUaW1lZFByb21pc2VzXzEgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy50aW1lb3V0ID0gVGltZWRQcm9taXNlc18xLnRpbWVvdXQ7XG5leHBvcnRzLmRlbGF5ID0gVGltZWRQcm9taXNlc18xLmRlbGF5O1xudmFyIFRpbWVkUHJvbWlzZXNfMiA9IHJlcXVpcmUoXCIuL1RpbWVkUHJvbWlzZXNcIik7XG5leHBvcnRzLlBhY2UgPSBUaW1lZFByb21pc2VzXzIuUGFjZTtcbnZhciBUaW1lZFByb21pc2VzXzMgPSByZXF1aXJlKFwiLi9UaW1lZFByb21pc2VzXCIpO1xuZXhwb3J0cy5wcm9taXNlQ2hhaW4gPSBUaW1lZFByb21pc2VzXzMucHJvbWlzZUNoYWluO1xudmFyIENoZWNrc3VtXzEgPSByZXF1aXJlKFwiLi9DaGVja3N1bVwiKTtcbmV4cG9ydHMuc2hvcnRDaGVja1N1bSA9IENoZWNrc3VtXzEuc2hvcnRDaGVja1N1bTtcbnZhciBEYXRlXzEgPSByZXF1aXJlKFwiLi9EYXRlXCIpO1xuZXhwb3J0cy5kYXRlID0gRGF0ZV8xLmRhdGU7XG5leHBvcnRzLm1zID0gRGF0ZV8xLm1zO1xudmFyIE51bWJlcl8xID0gcmVxdWlyZShcIi4vTnVtYmVyXCIpO1xuZXhwb3J0cy5yb3VuZCA9IE51bWJlcl8xLnJvdW5kO1xudmFyIGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuZXhwb3J0cy5sb2cgPSBsb2dfMS5sb2c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4cFJFRkJkVVE3UVVGQk9VTXNhME5CUVVFc1QwRkJUeXhEUVVGQk8wRkJRVVVzWjBOQlFVRXNTMEZCU3l4RFFVRkJPMEZCUTNaQ0xHbEVRVUYxUkR0QlFVRTVReXdyUWtGQlFTeEpRVUZKTEVOQlFVRTdRVUZEWWl4cFJFRkJkVVE3UVVGQk9VTXNkVU5CUVVFc1dVRkJXU3hEUVVGQk8wRkJRM0pDTEhWRFFVRnJSRHRCUVVGNlF5eHRRMEZCUVN4aFFVRmhMRU5CUVVFN1FVRkRkRUlzSzBKQlFUaERPMEZCUVhKRExITkNRVUZCTEVsQlFVa3NRMEZCUVR0QlFVRkZMRzlDUVVGQkxFVkJRVVVzUTBGQlFUdEJRVU5xUWl4dFEwRkJaMFE3UVVGQmRrTXNlVUpCUVVFc1MwRkJTeXhEUVVGQk8wRkJRMlFzTmtKQlFUWkRPMEZCUVhCRExHOUNRVUZCTEVkQlFVY3NRMEZCUVNKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBEYXRlXzEgPSByZXF1aXJlKFwiLi9EYXRlXCIpO1xuY29uc3QgREVCVUcgPSBTeW1ib2woJ0RFQlVHJyk7XG5jb25zdCBJTkZPID0gU3ltYm9sKCdJTkZPJyk7XG5jb25zdCBXQVJOID0gU3ltYm9sKCdXQVJOJyk7XG5jb25zdCBFUlJPUiA9IFN5bWJvbCgnRVJST1InKTtcbmxldCBnTG9nRmlsZTtcbmNvbnN0IGdMZXZlbHMgPSB7XG4gICAgW0RFQlVHXTogeyBpbXBvcnRhbmNlOiAwLCBzeW06IERFQlVHLCBkZXNjOiAnREVCVUcnIH0sXG4gICAgW0lORk9dOiB7IGltcG9ydGFuY2U6IDEsIHN5bTogSU5GTywgZGVzYzogJ0lORk8nIH0sXG4gICAgW1dBUk5dOiB7IGltcG9ydGFuY2U6IDIsIHN5bTogV0FSTiwgZGVzYzogJ1dBUk4nIH0sXG4gICAgW0VSUk9SXTogeyBpbXBvcnRhbmNlOiAzLCBzeW06IEVSUk9SLCBkZXNjOiAnRVJST1InIH1cbn07XG5sZXQgZ0dsb2JhbExldmVsID0gZ0xldmVsc1tJTkZPXTtcbmNvbnN0IGRlZkRhdGVGb3JtYXQgPSAnJVlZWVklTU0lREQgJWhoOiVtbTolc3MuJWpqaic7XG5sZXQgZ0RhdGVGb3JtYXQgPSBkZWZEYXRlRm9ybWF0O1xubGV0IGdDb2xvcnMgPSBmYWxzZTtcbmNvbnN0IGNvbG9yID0ge1xuICAgIHJlZDogJ1xceDFiWzMxbScsXG4gICAgeWVsbG93OiAnXFx4MWJbMzNtJyxcbiAgICBibHVlOiAnXFx4MWJbMzZtJyxcbiAgICBncmVlbjogJ1xceDFiWzMybScsXG4gICAgYm9sZDogJ1xceDFiWzFtJyxcbiAgICBjbGVhcjogJ1xceDFiWzBtJ1xufTtcbmV4cG9ydHMubG9nID0gY3JlYXRlKCcnLCAoZmlsZW5hbWUsIG1zZykgPT4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCksIChwYXRoKSA9PiBQcm9taXNlLnJlc29sdmUocGF0aC5pbmRleE9mKCcvJykgPj0gMCA/IGZhbHNlIDogdHJ1ZSkpO1xuZnVuY3Rpb24gY3JlYXRlKF9wcmVmaXgsIGxvZ1RvRmlsZSwgcGF0aEV4aXN0cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICAgIGxldmVsOiB1bmRlZmluZWQsXG4gICAgICAgIHByZWZpeDogX3ByZWZpeCxcbiAgICAgICAgbG9nVG9GaWxlOiBsb2dUb0ZpbGUsXG4gICAgICAgIHBhdGhFeGlzdHM6IHBhdGhFeGlzdHNcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGxldmVsKG5ld0xldmVsU3ltLCBzZXRHbG9iYWxMZXZlbCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBuZXdMZXZlbCA9IGdMZXZlbHNbbmV3TGV2ZWxTeW1dIHx8IGdHbG9iYWxMZXZlbDtcbiAgICAgICAgbGV0IG9sZExldmVsID0gY29udGV4dC5sZXZlbCB8fCBnR2xvYmFsTGV2ZWw7XG4gICAgICAgIGlmIChuZXdMZXZlbFN5bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBuZXdMZXZlbCA9IG9sZExldmVsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0xldmVsU3ltID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxldmVsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdMZXZlbHNbbmV3TGV2ZWxTeW1dKSB7XG4gICAgICAgICAgICBpZiAoc2V0R2xvYmFsTGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBnR2xvYmFsTGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBuZXcgJHtzZXRHbG9iYWxMZXZlbCA/ICdnbG9iYWwnIDogY29udGV4dC5wcmVmaXh9IGxvZyBsZXZlbCAke25ld0xldmVsLmRlc2MudG9VcHBlckNhc2UoKX0gKHdhcyAke29sZExldmVsLmRlc2MudG9VcHBlckNhc2UoKX0pYDtcbiAgICAgICAgICAgIG91dCgobmV3TGV2ZWwuc3ltID09PSBvbGRMZXZlbC5zeW0pID8gREVCVUcgOiBJTkZPLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3V0KEVSUk9SLCBgdW5rb3duIGxldmVsICR7bmV3TGV2ZWxTeW0udG9TdHJpbmcoKX07IGxvZyBsZXZlbCByZW1haW5zICR7b2xkTGV2ZWwuc3ltLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0xldmVsLnN5bTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVidWcobXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHlpZWxkIG91dChERUJVRywgbXNnLCBsb2cyRmlsZSk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbmZvKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBvdXQoSU5GTywgbXNnLCBsb2cyRmlsZSk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB3YXJuKG1zZywgbG9nMkZpbGUgPSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHJldHVybiB5aWVsZCBvdXQoV0FSTiwgbXNnLCBsb2cyRmlsZSk7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlcnJvcihtc2csIGxvZzJGaWxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgb3V0KEVSUk9SLCBtc2csIGxvZzJGaWxlKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcm1hdChmbXRTdHIpIHtcbiAgICAgICAgaWYgKGZtdFN0ciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZ0RhdGVGb3JtYXQgPSBkZWZEYXRlRm9ybWF0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZtdFN0cikge1xuICAgICAgICAgICAgZ0RhdGVGb3JtYXQgPSBmbXRTdHI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdEYXRlRm9ybWF0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcmVmaXgocHJmKSB7XG4gICAgICAgIGlmIChwcmYpIHtcbiAgICAgICAgICAgIGNvbnRleHQucHJlZml4ID0gcHJmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnByZWZpeDtcbiAgICB9XG4gICAgZnVuY3Rpb24gb3V0KGx2bCwgbXNnLCBsb2cyRmlsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IHsgW0VSUk9SXTogY29sb3IucmVkICsgY29sb3IuYm9sZCwgW1dBUk5dOiBjb2xvci55ZWxsb3cgKyBjb2xvci5ib2xkLCBbREVCVUddOiBjb2xvci5ibHVlLCBbSU5GT106IGNvbG9yLmdyZWVuIH07XG4gICAgICAgICAgICBsZXQgZGVzYyA9IGdMZXZlbHNbbHZsXTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlckxldmVsID0gY29udGV4dC5sZXZlbCB8fCBnR2xvYmFsTGV2ZWw7XG4gICAgICAgICAgICBpZiAoZGVzYy5pbXBvcnRhbmNlID49IGZpbHRlckxldmVsLmltcG9ydGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyID0gRGF0ZV8xLmRhdGUoZ0RhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSA/IG1zZyA6IGluc3BlY3QobXNnLCAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dMaW5lID0gYCR7ZGF0ZVN0cn0gJHtjb250ZXh0LnByZWZpeH0gJHtkZXNjLmRlc2N9ICR7bGluZX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yTGluZSA9IGAke2NvbG9yc1tsdmxdIHx8ICcnfSAke2RhdGVTdHJ9ICR7Y29udGV4dC5wcmVmaXh9ICR7ZGVzYy5kZXNjfSAke2NvbG9yLmNsZWFyfSAke2xpbmV9YDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnQ29sb3JzID8gY29sb3JMaW5lIDogbG9nTGluZSk7XG4gICAgICAgICAgICAgICAgaWYgKG1zZyAmJiBtc2cuc3RhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdMb2dGaWxlICYmIGxvZzJGaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjb250ZXh0LmxvZ1RvRmlsZShEYXRlXzEuZGF0ZShnTG9nRmlsZSksIGxvZ0xpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2dGaWxlKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZ0xvZ0ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGluZm8oXCJkaXNhYmxpbmcgbG9nZmlsZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlXzEuZGF0ZShnTG9nRmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmaWxlLmluZGV4T2YoJy8nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNvbnRleHQucGF0aEV4aXN0cyhmaWxlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZXhpc3RzKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCB3YXJuKGBwYXRoICcke2ZpbGV9JyBkb2Vzbid0IGV4aXN0czsgbG9nZmlsZSBkaXNhYmxlZGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGdMb2dGaWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGluZm8oXCJub3cgbG9nZ2luZyB0byBmaWxlIFwiICsgRGF0ZV8xLmRhdGUoZmlsZSkpO1xuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBnTG9nRmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGVycm9yKGBjaGVja2luZyBwYXRoICR7ZmlsZX07IGxvZ2ZpbGUgZGlzYWJsZWRgKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmaWxlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGZpbGUgPSAnbG9nLSVZWVlZLSVNTS0lREQudHh0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ0xvZ0ZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGluZm8oZ0xvZ0ZpbGUgPyBgbm93IGxvZ2dpbmcgdG8gZmlsZSAke0RhdGVfMS5kYXRlKGdMb2dGaWxlKX1gIDogJ2xvZ2ZpbGUgZGlzYmFsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbmZpZyhjZmcpIHtcbiAgICAgICAgaWYgKGNmZy5jb2xvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZ0NvbG9ycyA9IGNmZy5jb2xvcnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNmZy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9ybWF0KGNmZy5mb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZmcubGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV2ZWwoY2ZnLmxldmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbnNwZWN0KG1zZywgZGVwdGggPSAxLCBpbmRlbnQgPSAnJykge1xuICAgICAgICBpZiAoZGVwdGggPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlcHRoID0gOTk5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1zZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAnJHttc2d9J2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBtc2cgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoZGVwdGggPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChtc2cubGVuZ3RoID09PSB1bmRlZmluZWQpID8gJ3suLi59JyA6ICdbLi4uXSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXNnLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBbJHttc2cubWFwKChlKSA9PiAoZSA9PT0gdW5kZWZpbmVkKSA/ICcnIDogaW5zcGVjdChlLCBkZXB0aCAtIDEsIGluZGVudCkpLmpvaW4oJywgJyl9XWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ3tcXG4nICsgT2JqZWN0LmtleXMobXNnKS5tYXAoayA9PiBgICAgJHtpbmRlbnR9JHtrfTogJHtpbnNwZWN0KG1zZ1trXSwgZGVwdGggLSAxLCBpbmRlbnQgKyAnICAgJyl9YCkuam9pbignLFxcbicpICsgYFxcbiR7aW5kZW50fX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtc2cudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc3QgbmV3TG9nID0gZnVuY3Rpb24gKHByZWZpeCwgbG9nVG9GaWxlID0gY29udGV4dC5sb2dUb0ZpbGUsIHBhdGhFeGlzdHMgPSBjb250ZXh0LnBhdGhFeGlzdHMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShwcmVmaXgsIGxvZ1RvRmlsZSwgcGF0aEV4aXN0cyk7XG4gICAgfTtcbiAgICBuZXdMb2cuREVCVUcgPSBERUJVRztcbiAgICBuZXdMb2cuSU5GTyA9IElORk87XG4gICAgbmV3TG9nLldBUk4gPSBXQVJOO1xuICAgIG5ld0xvZy5FUlJPUiA9IEVSUk9SO1xuICAgIG5ld0xvZy5sZXZlbCA9IGxldmVsO1xuICAgIG5ld0xvZy5kZWJ1ZyA9IGRlYnVnO1xuICAgIG5ld0xvZy5pbmZvID0gaW5mbztcbiAgICBuZXdMb2cud2FybiA9IHdhcm47XG4gICAgbmV3TG9nLmVycm9yID0gZXJyb3I7XG4gICAgbmV3TG9nLmZvcm1hdCA9IGZvcm1hdDtcbiAgICBuZXdMb2cucHJlZml4ID0gcHJlZml4O1xuICAgIG5ld0xvZy5vdXQgPSBvdXQ7XG4gICAgbmV3TG9nLmxvZ0ZpbGUgPSBsb2dGaWxlO1xuICAgIG5ld0xvZy5jb25maWcgPSBjb25maWc7XG4gICAgbmV3TG9nLmluc3BlY3QgPSBpbnNwZWN0O1xuICAgIHJldHVybiBuZXdMb2c7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liRzluTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyeHZaeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQkswVkJMR2xEUVVGclF6dEJRVWRzUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRVUZIT1VJc1RVRkJUU3hKUVVGSkxFZEJRVXNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUnpsQ0xFMUJRVTBzU1VGQlNTeEhRVUZMTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVjNVFpeE5RVUZOTEV0QlFVc3NSMEZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGSEwwSXNTVUZCU1N4UlFVRm5RaXhEUVVGRE8wRkJVM0pDTEUxQlFVMHNUMEZCVHl4SFFVRkhPMGxCUTFvc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlN5eEZRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkRPMGxCUTNSRUxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVMHNSVUZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVY3NTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJRenRKUVVOeVJDeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRk5MRVZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkhMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVU03U1VGRGNrUXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJTeXhGUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZETzBOQlEzcEVMRU5CUVVNN1FVRkhSaXhKUVVGSkxGbEJRVmtzUjBGQllTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkhNME1zVFVGQlRTeGhRVUZoTEVkQlFVY3NPRUpCUVRoQ0xFTkJRVU03UVVGRGNrUXNTVUZCU1N4WFFVRlhMRWRCUVU4c1lVRkJZU3hEUVVGRE8wRkJSM0JETEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVkd1FpeE5RVUZOTEV0QlFVc3NSMEZCUnp0SlFVTldMRWRCUVVjc1JVRkJTeXhWUVVGVk8wbEJRMnhDTEUxQlFVMHNSVUZCUlN4VlFVRlZPMGxCUTJ4Q0xFbEJRVWtzUlVGQlNTeFZRVUZWTzBsQlEyeENMRXRCUVVzc1JVRkJSeXhWUVVGVk8wbEJRMnhDTEVsQlFVa3NSVUZCU1N4VFFVRlRPMGxCUTJwQ0xFdEJRVXNzUlVGQlJ5eFRRVUZUTzBOQlEzQkNMRU5CUVVNN1FVRnhTVmNzVVVGQlFTeEhRVUZITEVkQlFWY3NUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkRhRU1zUTBGQlF5eFJRVUZsTEVWQlFVVXNSMEZCVlN4RlFVRnJRaXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkZNMFVzUTBGQlF5eEpRVUZYTEVWQlFXMUNMRVZCUVVVc1EwRkJRU3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVVVzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVU4yUml4RFFVRkRPMEZCUlVZc1UwRkJVeXhOUVVGTkxFTkJRVU1zVDBGQll5eEZRVUZGTEZOQlFXbENMRVZCUVVVc1ZVRkJhVUk3U1VGRGFFVXNUVUZCVFN4UFFVRlBMRWRCUVVjN1VVRkRXaXhMUVVGTExFVkJRV3RDTEZOQlFWTTdVVUZEYUVNc1RVRkJUU3hGUVVGTkxFOUJRVTg3VVVGRGJrSXNVMEZCVXl4RlFVRlpMRk5CUVZNN1VVRkRPVUlzVlVGQlZTeEZRVUZWTEZWQlFWVTdTMEZEYWtNc1EwRkJRenRKUVVWR0xGTkJRVk1zUzBGQlN5eERRVUZETEZkQlFXMUNMRVZCUVVVc1kwRkJZeXhIUVVGRExFdEJRVXM3VVVGRGNFUXNTVUZCU1N4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEZsQlFWa3NRMEZCUXp0UlFVTndSQ3hKUVVGSkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4SlFVRkpMRmxCUVZrc1EwRkJRenRSUVVNM1F5eEpRVUZKTEZkQlFWY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRNMElzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0VFFVTjJRanRoUVVGTkxFbEJRVWtzVjBGQlZ5eExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTTNRaXhQUVVGUExFTkJRVU1zUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTTNRanRoUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFbEJRVWtzWTBGQll5eEZRVUZGTzJkQ1FVRkZMRmxCUVZrc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGQlJUdHBRa0ZETlVJN1owSkJRVVVzVDBGQlR5eERRVUZETEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNN1lVRkJSVHRaUVVOcVJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4UFFVRlBMR05CUVdNc1EwRkJRU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hqUVVGakxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRk5CUVZNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNSMEZCUnl4RFFVRkRPMWxCUXpkSkxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRXRCUVVzc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUVN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTXhSRHRoUVVGTk8xbEJRMGdzUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4blFrRkJaMElzVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4MVFrRkJkVUlzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGRFYzdVVUZEUkN4UFFVRlBMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU03U1VGRGVFSXNRMEZCUXp0SlFVVkVMRk5CUVdVc1MwRkJTeXhEUVVGRExFZEJRVThzUlVGQlJTeFJRVUZSTEVkQlFVTXNTVUZCU1RzNFJFRkJiMElzVDBGQlR5eE5RVUZOTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVRkJPMGxCUTNoSExGTkJRV1VzU1VGQlNTeERRVUZETEVkQlFVOHNSVUZCUlN4UlFVRlJMRWRCUVVNc1NVRkJTVHM0UkVGQmIwSXNUMEZCVHl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVGQk8wbEJRM1JITEZOQlFXVXNTVUZCU1N4RFFVRkRMRWRCUVU4c1JVRkJSU3hSUVVGUkxFZEJRVU1zU1VGQlNUczRSRUZCYjBJc1QwRkJUeXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVUZCTzBsQlEzUkhMRk5CUVdVc1MwRkJTeXhEUVVGRExFZEJRVThzUlVGQlJTeFJRVUZSTEVkQlFVTXNTVUZCU1RzNFJFRkJiMElzVDBGQlR5eE5RVUZOTEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVRkJPMGxCUlhoSExGTkJRVk1zVFVGQlRTeERRVUZETEUxQlFXTTdVVUZETVVJc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeEZRVUZGTzFsQlFVVXNWMEZCVnl4SFFVRkhMR0ZCUVdFc1EwRkJRenRUUVVGRk8yRkJRMmhFTEVsQlFVa3NUVUZCVFN4RlFVRk5PMWxCUVVVc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF6dFRRVUZGTzFGQlF6bERMRTlCUVU4c1YwRkJWeXhEUVVGRE8wbEJRM1pDTEVOQlFVTTdTVUZGUkN4VFFVRlRMRTFCUVUwc1EwRkJReXhIUVVGWE8xRkJRM1pDTEVsQlFVa3NSMEZCUnl4RlFVRkZPMWxCUVVVc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTTdVMEZCUlR0UlFVTnNReXhQUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRUxGTkJRV1VzUjBGQlJ5eERRVUZETEVkQlFWVXNSVUZCUlN4SFFVRlBMRVZCUVVVc1VVRkJVU3hIUVVGRExFbEJRVWs3TzFsQlEycEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1IwRkJSeXhIUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWxCUXpWSUxFbEJRVWtzU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONFFpeE5RVUZOTEZkQlFWY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1MwRkJTeXhKUVVGSkxGbEJRVmtzUTBGQlF6dFpRVU5zUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzVjBGQlZ5eERRVUZETEZWQlFWVXNSVUZCUlR0blFrRkRNME1zVFVGQlRTeFBRVUZQTEVkQlFVY3NWMEZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8yZENRVU5zUXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkJMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6VkVMRTFCUVUwc1QwRkJUeXhIUVVGM1FpeEhRVUZITEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJRM3BHTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZGTEVWQlFVVXNTVUZCU1N4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUTNoSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkJMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVNeFF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8yOUNRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJsQ1FVRkZPMmRDUVVOcVJDeEpRVUZKTEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVN2IwSkJRM1JDTEU5QlFVOHNUVUZCVFN4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExGZEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRwUWtGRE0wUTdZVUZEU2p0WlFVTkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8xRkJRM0pDTEVOQlFVTTdTMEZCUVR0SlFVVkVMRk5CUVdVc1QwRkJUeXhEUVVGRExFbEJRVms3TzFsQlF5OUNMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUlVGQlJUdG5Ra0ZEWml4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRE8yZENRVU55UWl4UFFVRlBMRTFCUVUwc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN1lVRkRNVU03YVVKQlFVMHNTVUZCU1N4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU16UWl4UFFVRlBMRmRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU42UWp0cFFrRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVVc1EwRkJReXhGUVVGRk8yZENRVU0zUWl4UFFVRlBMRTFCUVUwc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTTdjVUpCUTJoRExFbEJRVWtzUTBGQlF5eERRVUZQTEUxQlFXTXNSVUZCUlN4RlFVRkZPMjlDUVVNelFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPM2RDUVVOVUxGRkJRVkVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdkMEpCUTNKQ0xFOUJRVThzVFVGQlRTeEpRVUZKTEVOQlFVTXNVMEZCVXl4SlFVRkpMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdjVUpCUTNoRk8yOUNRVU5FTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN2IwSkJRMmhDTEU5QlFVOHNUVUZCVFN4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NWMEZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlF6TkVMRU5CUVVNc1EwRkJRU3hEUVVGRE8zRkNRVU5FTEV0QlFVc3NRMEZCUXl4SFFVRlRMRVZCUVVVN2IwSkJRMlFzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXp0dlFrRkRja0lzVDBGQlR5eE5RVUZOTEV0QlFVc3NRMEZCUXl4cFFrRkJhVUlzU1VGQlNTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRE8yZENRVU5zUlN4RFFVRkRMRU5CUVVFc1EwRkJReXhEUVVGRE8yRkJRMVk3YVVKQlFVMHNTVUZCU1N4SlFVRkpMRXRCUVVzc1JVRkJSU3hGUVVGRk8yZENRVU53UWl4SlFVRkpMRWRCUVVjc2RVSkJRWFZDTEVOQlFVTTdZVUZEYkVNN2FVSkJRVTA3WVVGRFRqdFpRVU5FTEZGQlFWRXNSMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRaQ3hQUVVGUExFMUJRVTBzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUVN4RFFVRkRMRU5CUVVNc2RVSkJRWFZDTEZkQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE8xRkJRemxHTEVOQlFVTTdTMEZCUVR0SlFVVkVMRk5CUVZNc1RVRkJUU3hEUVVGRExFZEJRWEZFTzFGQlEycEZMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlJ5eFRRVUZUTEVWQlFVVTdXVUZCUlN4UFFVRlBMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF6dFRRVUZGTzFGQlEzSkVMRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUzBGQlJ5eFRRVUZUTEVWQlFVVTdXVUZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzFOQlFVVTdVVUZEYmtRc1NVRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eExRVUZITEZOQlFWTXNSVUZCUnp0WlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZCUlR0SlFVTnlSQ3hEUVVGRE8wbEJSVVFzVTBGQlV5eFBRVUZQTEVOQlFVTXNSMEZCVHl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeEhRVUZETEVWQlFVVTdVVUZEZUVNc1NVRkJTU3hMUVVGTExFdEJRVWNzU1VGQlNTeEZRVUZuUWp0WlFVRkZMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU03VTBGQlJUdFJRVU5vUkN4SlFVRkpMRWRCUVVjc1MwRkJTeXhKUVVGSkxFVkJRV2RDTzFsQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNN1UwRkJSVHRSUVVOc1JDeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVZjN1dVRkJSU3hQUVVGUExGZEJRVmNzUTBGQlF6dFRRVUZGTzFGQlEzWkVMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVlVGQlZTeEZRVUZITzFsQlFVVXNUMEZCVHl4VlFVRlZMRU5CUVVNN1UwRkJSVHRSUVVOMFJDeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJTenRaUVVGRkxFOUJRVThzU1VGQlNTeEhRVUZITEVkQlFVY3NRMEZCUXp0VFFVRkZPMUZCUTNSRUxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkxPMWxCUXpWQ0xFbEJRVWtzUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlR0blFrRkJSU3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNTMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1lVRkJSVHRaUVVOd1JTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVUZGTEU5QlFVOHNTVUZCU1N4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlN5eEZRVUZETEVWQlFVVXNRMEZCUVN4RFFVRkRMRU5CUVVNc1MwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVRXNSVUZCUlN4RFFVRkJMRU5CUVVNc1EwRkJRU3hQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRoUVVGRk8xbEJRelZJTEU5QlFVOHNTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NRMEZCUXl4TFFVTnlSQ3hQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeEhRVUZETEV0QlFVc3NRMEZEZWtNc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRXRCUVVzc1RVRkJUU3hIUVVGSExFTkJRVU03VTBGRGNFTTdVVUZEUkN4UFFVRlBMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU14UWl4RFFVRkRPMGxCUlVRc1RVRkJUU3hOUVVGTkxFZEJRVThzVlVGQlV5eE5RVUZoTEVWQlFVVXNXVUZCYTBJc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeGhRVUZyUWl4UFFVRlBMRU5CUVVNc1ZVRkJWVHRSUVVOb1NDeFBRVUZQTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBsQlEycEVMRU5CUVVNc1EwRkJRenRKUVVOR0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVMHNTMEZCU3l4RFFVRkRPMGxCUTNoQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVOHNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVOHNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVMHNTMEZCU3l4RFFVRkRPMGxCUTNoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVMHNTMEZCU3l4RFFVRkRPMGxCUTNoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVMHNTMEZCU3l4RFFVRkRPMGxCUTNoQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVOHNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVkQlFVOHNTVUZCU1N4RFFVRkRPMGxCUTNaQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVkQlFVMHNTMEZCU3l4RFFVRkRPMGxCUTNoQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVc3NUVUZCVFN4RFFVRkRPMGxCUTNwQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVc3NUVUZCVFN4RFFVRkRPMGxCUTNwQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVkQlFWRXNSMEZCUnl4RFFVRkRPMGxCUTNSQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVkQlFVa3NUMEZCVHl4RFFVRkRPMGxCUXpGQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVc3NUVUZCVFN4RFFVRkRPMGxCUTNwQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVkQlFVa3NUMEZCVHl4RFFVRkRPMGxCUXpGQ0xFOUJRVThzVFVGQlRTeERRVUZETzBGQlEyeENMRU5CUVVNaWZRPT0iLCJ2YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKVxudmFyIHVybCA9IHJlcXVpcmUoJ3VybCcpXG5cbnZhciBodHRwcyA9IG1vZHVsZS5leHBvcnRzXG5cbmZvciAodmFyIGtleSBpbiBodHRwKSB7XG4gIGlmIChodHRwLmhhc093blByb3BlcnR5KGtleSkpIGh0dHBzW2tleV0gPSBodHRwW2tleV1cbn1cblxuaHR0cHMucmVxdWVzdCA9IGZ1bmN0aW9uIChwYXJhbXMsIGNiKSB7XG4gIHBhcmFtcyA9IHZhbGlkYXRlUGFyYW1zKHBhcmFtcylcbiAgcmV0dXJuIGh0dHAucmVxdWVzdC5jYWxsKHRoaXMsIHBhcmFtcywgY2IpXG59XG5cbmh0dHBzLmdldCA9IGZ1bmN0aW9uIChwYXJhbXMsIGNiKSB7XG4gIHBhcmFtcyA9IHZhbGlkYXRlUGFyYW1zKHBhcmFtcylcbiAgcmV0dXJuIGh0dHAuZ2V0LmNhbGwodGhpcywgcGFyYW1zLCBjYilcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXJhbXMgKHBhcmFtcykge1xuICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXJhbXMgPSB1cmwucGFyc2UocGFyYW1zKVxuICB9XG4gIGlmICghcGFyYW1zLnByb3RvY29sKSB7XG4gICAgcGFyYW1zLnByb3RvY29sID0gJ2h0dHBzOidcbiAgfVxuICBpZiAocGFyYW1zLnByb3RvY29sICE9PSAnaHR0cHM6Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvdG9jb2wgXCInICsgcGFyYW1zLnByb3RvY29sICsgJ1wiIG5vdCBzdXBwb3J0ZWQuIEV4cGVjdGVkIFwiaHR0cHM6XCInKVxuICB9XG4gIHJldHVybiBwYXJhbXNcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNwID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5leHBvcnRzLmNoaWxkX3Byb2Nlc3MgPSB7XG4gICAgZXhlYzogKGNvbW1hbmQsIG9wdGlvbnMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGNwLmV4ZWMoY29tbWFuZCwgb3B0aW9ucywgKGVycm9yLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICBlcnJvciA/IHJlamVjdChlcnJvcikgOiByZXNvbHZlKHsgc3Rkb3V0OiBzdGRvdXQsIHN0ZGVycjogc3RkZXJyIH0pO1xuICAgIH0pKVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzQlZkR2xzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTndWWFJwYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRV2RDUVN4dlEwRkJjVU03UVVGRmVFSXNVVUZCUVN4aFFVRmhMRWRCUVVjN1NVRmhla0lzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCWXl4RlFVRkZMRTlCUVZrc1JVRkJiME1zUlVGQlJTeERRVU55UlN4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRWEZFTEVWQlFVVXNUVUZCZFVJc1JVRkJSU3hGUVVGRkxFTkJRek5HTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEV0QlFWTXNSVUZCUlN4TlFVRmhMRVZCUVVVc1RVRkJZU3hGUVVGRkxFVkJRVVU3VVVGRGJFVXNTMEZCU3l4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRExFMUJRVTBzUlVGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkRMRTFCUVUwc1JVRkJReXhEUVVGRExFTkJRVU03U1VGRGJrVXNRMEZCUXl4RFFVRkRMRU5CUTB3N1EwRkRVaXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBoc3V0aWxfMSA9IHJlcXVpcmUoXCJoc3V0aWxcIik7XG5mdW5jdGlvbiBzdGF0KHRoZVBhdGgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBwID0geWllbGQgcmVhbFBhdGgodGhlUGF0aCk7XG4gICAgICAgIHJldHVybiB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmcy5zdGF0KHAsIChlcnIsIHN0YXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgZ2V0dGluZyBzdGF0cyBmb3IgJHt0aGVQYXRofTogJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdGF0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbHN0YXQodGhlUGF0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHAgPSBwYXRoLm5vcm1hbGl6ZSh0aGVQYXRoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IGZzLmxzdGF0KHAsIChlcnIsIHN0YXRzKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoc3RhdHMpKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICBjb25zdCBtc2cgPSBgKioqIGVycm9yIGluIGZzVXRpbDogJHtlcnJ9LCBzdGFjazpcXG4ke2Vyci5zdGFja31gO1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xufVxuZnVuY3Rpb24gcmVhbFBhdGgodGhlUGF0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZzLnJlYWxwYXRoKHRoZVBhdGgsIChlcnIsIHJlc29sdmVkUGF0aCkgPT4gZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHJlc29sdmVkUGF0aCkpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnRzLnJlYWxQYXRoID0gcmVhbFBhdGg7XG5mdW5jdGlvbiBwYXRoRXhpc3RzKHRoZVBhdGgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgc3RhdCh0aGVQYXRoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMucGF0aEV4aXN0cyA9IHBhdGhFeGlzdHM7XG5mdW5jdGlvbiBpc0ZpbGUodGhlUGF0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gKHlpZWxkIHN0YXQodGhlUGF0aCkpLmlzRmlsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuaXNGaWxlID0gaXNGaWxlO1xuZnVuY3Rpb24gaXNEaXJlY3RvcnkodGhlUGF0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gKHlpZWxkIHN0YXQodGhlUGF0aCkpLmlzRGlyZWN0b3J5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5pc0RpcmVjdG9yeSA9IGlzRGlyZWN0b3J5O1xuZnVuY3Rpb24gaXNMaW5rKHRoZVBhdGgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICh5aWVsZCBsc3RhdCh0aGVQYXRoKSkuaXNTeW1ib2xpY0xpbmsoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmlzTGluayA9IGlzTGluaztcbmZ1bmN0aW9uIG1rZGlycyh0aGVQYXRoKSB7XG4gICAgY29uc3QgcCA9IHBhdGgubm9ybWFsaXplKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCB0aGVQYXRoKSk7XG4gICAgaWYgKHAuaW5kZXhPZihwcm9jZXNzLmN3ZCgpKSA9PT0gMCkge1xuICAgICAgICBjb25zdCByID0gcC5zdWJzdHIocHJvY2Vzcy5jd2QoKS5sZW5ndGggKyAxKTtcbiAgICAgICAgbGV0IGRpcnMgPSByLnNwbGl0KCcvJyk7XG4gICAgICAgIGRpcnMgPSBkaXJzLm1hcCgoZGlyLCBpKSA9PiAnLi8nICsgZGlycy5zbGljZSgwLCBpICsgMSkuam9pbignLycpKTtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkaXJzLm1hcChkaXIgPT4gKCkgPT4gaXNEaXJlY3RvcnkoZGlyKVxuICAgICAgICAgICAgLnRoZW4oKGV4aXN0cykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmcy5ta2RpcihkaXIsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyLnRvU3RyaW5nKCkubWF0Y2goL0Vycm9yOiBFRVhJU1Q6IGZpbGUgYWxyZWFkeSBleGlzdHMvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgICAgIHJldHVybiBoc3V0aWxfMS5wcm9taXNlQ2hhaW4odGFza3MpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgcmVzLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBgbWtkaXIgZmFpbGVkIGZvciAke2RpcnNbaV19OiAke3J9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGRpcnNbZGlycy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYHRhcmdldCAnJHtwfScgbm90IGluc2lkZSB3b3JraW5nIGRpcmVjdG9yeSAnJHtwcm9jZXNzLmN3ZCgpfSdgKTtcbiAgICB9XG59XG5leHBvcnRzLm1rZGlycyA9IG1rZGlycztcbmZ1bmN0aW9uIHJlYWREaXIodGhlUGF0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHAgPSB5aWVsZCByZWFsUGF0aCh0aGVQYXRoKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZzLnJlYWRkaXIocCwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXMucGF0aCA9IHA7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVhZERpciA9IHJlYWREaXI7XG5mdW5jdGlvbiByZWFkRmlsZSh0aGVQYXRoLCBpc1RleHQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGVuY29kaW5nID0gaXNUZXh0ID8gJ3V0ZjgnIDoge307XG4gICAgICAgIGZzLnJlYWRGaWxlKHRoZVBhdGgsIGVuY29kaW5nLCAoZXJyLCBkYXRhKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoZGF0YSkpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvcik7XG59XG5leHBvcnRzLnJlYWRGaWxlID0gcmVhZEZpbGU7XG5mdW5jdGlvbiByZWFkVGV4dEZpbGUodGhlUGF0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgcmVhZEZpbGUodGhlUGF0aCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkVGV4dEZpbGUgPSByZWFkVGV4dEZpbGU7XG5mdW5jdGlvbiByZWFkSnNvbkZpbGUodGhlUGF0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVhZEZpbGUodGhlUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRKc29uRmlsZSA9IHJlYWRKc29uRmlsZTtcbmZ1bmN0aW9uIHdyaXRlRmlsZSh0aGVQYXRoLCBjb250ZW50LCBpc1RleHQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGVuY29kaW5nID0gaXNUZXh0ID8gJ3V0ZjgnIDogeyBlbmNvZGluZzogbnVsbCB9O1xuICAgICAgICB5aWVsZCBta2RpcnMocGF0aC5kaXJuYW1lKHRoZVBhdGgpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZSh0aGVQYXRoLCBjb250ZW50LCBlbmNvZGluZywgKGVycikgPT4gZXJyID8gcmVqZWN0KGBta2RpcnMgZmFpbGVkIGluIHdyaXRlRmlsZSBmb3IgJyR7dGhlUGF0aH0nOiAke2Vycn1gKSA6IHJlc29sdmUodGhlUGF0aCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMud3JpdGVGaWxlID0gd3JpdGVGaWxlO1xuZnVuY3Rpb24gd3JpdGVTdHJlYW0odGhlUGF0aCwgY29udGVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0odGhlUGF0aCwgeyBmbGFnczogJ3cnLCBtb2RlOiAwbzY2NiB9KTtcbiAgICAgICAgICAgIHMub24oJ2Vycm9yJywgKHNyYykgPT4gcmVqZWN0KGB3cml0ZVN0cmVhbSBlcnJvciAnJHtzcmN9JyBmb3IgcGF0aCAnJHt0aGVQYXRofSdgKSk7XG4gICAgICAgICAgICBzLndyaXRlKGNvbnRlbnQsICdiaW5hcnknLCAoKSA9PiByZXNvbHZlKHRoZVBhdGgpKTtcbiAgICAgICAgICAgIHMuZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy53cml0ZVN0cmVhbSA9IHdyaXRlU3RyZWFtO1xuZnVuY3Rpb24gd3JpdGVUZXh0RmlsZSh0aGVQYXRoLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIHlpZWxkIHdyaXRlRmlsZSh0aGVQYXRoLCBjb250ZW50LCB0cnVlKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMud3JpdGVUZXh0RmlsZSA9IHdyaXRlVGV4dEZpbGU7XG5mdW5jdGlvbiB3cml0ZUpzb25GaWxlKHRoZVBhdGgsIG9iaikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBQcm9taXNlLnJlc29sdmUob2JqKVxuICAgICAgICAgICAgLnRoZW4oSlNPTi5zdHJpbmdpZnkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyByZXR1cm4geWllbGQgd3JpdGVUZXh0RmlsZSh0aGVQYXRoLCBkYXRhKTsgfSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0cy53cml0ZUpzb25GaWxlID0gd3JpdGVKc29uRmlsZTtcbmZ1bmN0aW9uIGFwcGVuZEZpbGUodGhlUGF0aCwgY29udGVudCwgaXNUZXh0ID0gdHJ1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgZW5jb2RpbmcgPSBpc1RleHQgPyAndXRmOCcgOiB7IGVuY29kaW5nOiBudWxsIH07XG4gICAgICAgICAgICBmcy5hcHBlbmRGaWxlKHRoZVBhdGgsIGNvbnRlbnQsIGVuY29kaW5nLCAoZXJyKSA9PiBlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUodGhlUGF0aCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVhbFBhdGgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5hcHBlbmRGaWxlID0gYXBwZW5kRmlsZTtcbmZ1bmN0aW9uIHJlbW92ZSh0aGVQYXRoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZGlyID0geWllbGQgaXNEaXJlY3RvcnkodGhlUGF0aCk7XG4gICAgICAgIHJldHVybiB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBkaXIgPyBmcy5ybWRpcih0aGVQYXRoLCAoZSkgPT4gKGUgPyByZWplY3QoZSkgOiByZXNvbHZlKHRoZVBhdGgpKSlcbiAgICAgICAgICAgICAgICA6IGZzLnVubGluayh0aGVQYXRoLCAoZSkgPT4gKGUgPyByZWplY3QoZSkgOiByZXNvbHZlKHRoZVBhdGgpKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labk5WZEdsc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMlp6VlhScGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMEZCWjBKQkxIbENRVUY1UWp0QlFVTjZRaXcyUWtGQmIwTTdRVUZEY0VNc2JVTkJRWE5ETzBGQk9FTjBReXhUUVVGbExFbEJRVWtzUTBGQlF5eFBRVUZqT3p0UlFVTTVRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVOc1F5eFBRVUZQTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdXVUZEZWtNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRlBMRVZCUVVVc1MwRkJZeXhGUVVGRkxFVkJRVVU3WjBKQlEyNURMRWxCUVVjc1IwRkJSeXhGUVVGRk8yOUNRVU5LTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc01rSkJRVEpDTEU5QlFVOHNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8yOUNRVU14UkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlEyWTdjVUpCUTBrN2IwSkJRVVVzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmxDUVVGRk8xbEJRelZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETzBOQlFVRTdRVUZQUkN4VFFVRmxMRXRCUVVzc1EwRkJReXhQUVVGak96dFJRVU12UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNKRExFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGRGFFTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZQTEVWQlFVVXNTMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUXpWRkxFTkJRVU03U1VGRFNDeERRVUZETzBOQlFVRTdRVUZGUkN4VFFVRlRMRXRCUVVzc1EwRkJReXhIUVVGUE8wbEJRMnhDTEUxQlFVMHNSMEZCUnl4SFFVRkhMSGRDUVVGM1FpeEhRVUZITEdGQlFXRXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMmhGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVrSXNRMEZCUXp0QlFWVkVMRk5CUVdkQ0xGRkJRVkVzUTBGQlF5eFBRVUZqTzBsQlEzUkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUV5UWl4RlFVRkZMRTFCUVhOQ0xFVkJRVVVzUlVGQlJUdFJRVU14UlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVOHNSVUZCUlN4WlFVRnRRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRkxFTkJRVU03U1VGRGFFY3NRMEZCUXl4RFFVRkRPMU5CUTBRc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeENMRU5CUVVNN1FVRk1SQ3cwUWtGTFF6dEJRVTlFTEZOQlFYTkNMRlZCUVZVc1EwRkJReXhQUVVGak96dFJRVU16UXl4SlFVRkpPMWxCUTBFc1RVRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdXVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRFpqdFJRVUZETEU5QlFVMHNRMEZCUXl4RlFVRkZPMWxCUTFBc1QwRkJUeXhMUVVGTExFTkJRVU03VTBGRGFFSTdTVUZEVEN4RFFVRkRPME5CUVVFN1FVRlFSQ3huUTBGUFF6dEJRVTlFTEZOQlFYTkNMRTFCUVUwc1EwRkJReXhQUVVGak96dFJRVU4yUXl4SlFVRkpPMWxCUTBFc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03VTBGRGVrTTdVVUZCUXl4UFFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOUUxFOUJRVThzUzBGQlN5eERRVUZETzFOQlEyaENPMGxCUTB3c1EwRkJRenREUVVGQk8wRkJUa1FzZDBKQlRVTTdRVUZQUkN4VFFVRnpRaXhYUVVGWExFTkJRVU1zVDBGQll6czdVVUZETlVNc1NVRkJTVHRaUVVOQkxFOUJRVThzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFOQlF6bERPMUZCUVVNc1QwRkJUU3hEUVVGRExFVkJRVVU3V1VGRFVDeFBRVUZQTEV0QlFVc3NRMEZCUXp0VFFVTm9RanRKUVVOTUxFTkJRVU03UTBGQlFUdEJRVTVFTEd0RFFVMURPMEZCVDBRc1UwRkJjMElzVFVGQlRTeERRVUZETEU5QlFXTTdPMUZCUTNaRExFbEJRVWs3V1VGRFFTeFBRVUZQTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0VFFVTnNSRHRSUVVGRExFOUJRVTBzUTBGQlF5eEZRVUZGTzFsQlExQXNUMEZCVHl4TFFVRkxMRU5CUVVNN1UwRkRhRUk3U1VGRFRDeERRVUZETzBOQlFVRTdRVUZPUkN4M1FrRk5RenRCUVZWRUxGTkJRV2RDTEUxQlFVMHNRMEZCUXl4UFFVRmpPMGxCUTJwRExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UkN4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRXRCUVVjc1EwRkJReXhGUVVGRk8xRkJRemxDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1IwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU16UXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlhoQ0xFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNTVUZCU1N4SFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVTVSQ3hOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJRenRoUVVNdlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCTWtJc1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU5zUlN4SlFVRkpMRTFCUVUwc1JVRkJSVHRuUWtGRFVpeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRha0k3YVVKQlFVMDdaMEpCUTBnc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SFFVRlBMRVZCUVVVc1JVRkJSVHR2UWtGRGRFSXNTVUZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSVHQzUWtGQlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN2NVSkJRVVU3ZVVKQlEzUkNMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4dlEwRkJiME1zUTBGQlF5eEZRVUZGTzNkQ1FVTnFSU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdjVUpCUTJwQ08zbENRVUZOTzNkQ1FVTklMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHhRa0ZEWmp0blFrRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5PTzFGQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkRUaXhEUVVGRE8xRkJSVVlzVDBGQlR5eHhRa0ZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFXRXNSVUZCUlN4RlFVRkZPMWxCUXpsRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3WjBKQlEySXNTVUZCU1N4RFFVRkRMRVZCUVVVN2IwSkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdhVUpCUVVVN1owSkJRM1pDTEUxQlFVMHNiMEpCUVc5Q0xFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVNNVF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRMMElzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEVGp0VFFVRk5PMUZCUTBnc1QwRkJUeXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4dFEwRkJiVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVNeFJqdEJRVU5NTEVOQlFVTTdRVUZ1UTBRc2QwSkJiVU5ETzBGQlQwUXNVMEZCYzBJc1QwRkJUeXhEUVVGRExFOUJRV003TzFGQlEzaERMRTFCUVUwc1EwRkJReXhIUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTJ4RExFOUJRVThzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVhsQ0xFVkJRVVVzVFVGQmMwSXNSVUZCUlN4RlFVRkZPMWxCUXpORkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJUeXhGUVVGRkxFdEJRVk1zUlVGQlJTeEZRVUZGTzJkQ1FVTnFReXhKUVVGSExFZEJRVWNzUlVGQlJUdHZRa0ZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlFVVTdjVUpCUTI1Q08yOUNRVU5FTEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU5tTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRwUWtGRGJFSTdXVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOUUxFTkJRVU1zUTBGQlF6dGhRVU5FTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOc1FpeERRVUZETzBOQlFVRTdRVUZhUkN3d1FrRlpRenRCUVZORUxGTkJRV2RDTEZGQlFWRXNRMEZCUXl4UFFVRmpMRVZCUVVVc1RVRkJUU3hIUVVGRExFbEJRVWs3U1VGRGJrUXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRWGRDTEVWQlFVVXNUVUZCYzBJc1JVRkJSU3hGUVVGRk8xRkJRM1pGTEVsQlFVa3NVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRia01zUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hGUVVGRkxFTkJRVU1zUjBGQlR5eEZRVUZGTEVsQlFWRXNSVUZCUlN4RlFVRkZMRU5CUXpORExFZEJRVWNzUTBGQlFTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVNM1F5eERRVUZETEVOQlFVTTdVMEZEUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGJFSXNRMEZCUXp0QlFWQkVMRFJDUVU5RE8wRkJUMFFzVTBGQmMwSXNXVUZCV1N4RFFVRkRMRTlCUVdNN08xRkJRMmhFTEVsQlFVazdXVUZCUlN4UFFVRlBMRTFCUVUwc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVRkZPMUZCUXpGRExFOUJRVTBzUjBGQlJ5eEZRVUZGTzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRE9VSXNRMEZCUXp0RFFVRkJPMEZCU0VRc2IwTkJSME03UVVGUFJDeFRRVUZ6UWl4WlFVRlpMRU5CUVVNc1QwRkJZenM3VVVGRE4wTXNTVUZCU1R0WlFVTkJMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNelF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTTVSRHRSUVVORUxFOUJRVTBzUjBGQlJ5eEZRVUZGTzFsQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJRVVU3U1VGRE9VSXNRMEZCUXp0RFFVRkJPMEZCVGtRc2IwTkJUVU03UVVGVFJDeFRRVUZ6UWl4VFFVRlRMRU5CUVVNc1QwRkJZeXhGUVVGRkxFOUJRV01zUlVGQlJTeFRRVUZsTEVsQlFVazdPMUZCUXk5RkxFbEJRVWtzVVVGQlVTeEhRVUZQTEUxQlFVMHNRMEZCUVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVNc1EwRkJRenRSUVVOeVJDeE5RVUZOTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEY0VNc1QwRkJUeXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRM3BETEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4SFFVRlBMRVZCUVVVc1JVRkJSU3hEUVVOcVJDeEhRVUZITEVOQlFVRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXh0UTBGQmJVTXNUMEZCVHl4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJReTlHTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTFBc1EwRkJRenREUVVGQk8wRkJVRVFzT0VKQlQwTTdRVUZSUkN4VFFVRnpRaXhYUVVGWExFTkJRVU1zVDBGQll5eEZRVUZGTEU5QlFXTTdPMUZCUXpWRUxFOUJRVThzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU42UXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVU1zUzBGQlN5eEZRVUZETEVkQlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVNc1MwRkJTeXhGUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5xUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVOHNSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExITkNRVUZ6UWl4SFFVRkhMR1ZCUVdVc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkdMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnVSQ3hEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZEV2l4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03UTBGQlFUdEJRVkJFTEd0RFFVOURPMEZCVDBRc1UwRkJjMElzWVVGQllTeERRVUZETEU5QlFXTXNSVUZCUlN4UFFVRmpPenRSUVVOcVJTeFBRVUZQTEUxQlFVMHNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETzJGQlF6RkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5zUWl4RFFVRkRPME5CUVVFN1FVRklSQ3h6UTBGSFF6dEJRVkZFTEZOQlFYTkNMR0ZCUVdFc1EwRkJReXhQUVVGakxFVkJRVVVzUjBGQlR6czdVVUZEZGtRc1QwRkJUeXhOUVVGTkxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMkZCUTI1RExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMkZCUTNCQ0xFbEJRVWtzUTBGQlF5eERRVUZOTEVsQlFVa3NSVUZCUXl4RlFVRkZMR2RFUVVGRExFOUJRVUVzVFVGQlRTeGhRVUZoTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGQkxFZEJRVUVzUTBGQlF6dGhRVU51UkN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFSXNRMEZCUXp0RFFVRkJPMEZCVEVRc2MwTkJTME03UVVGVFJDeFRRVUZ6UWl4VlFVRlZMRU5CUVVNc1QwRkJZeXhGUVVGRkxFOUJRV01zUlVGQlJTeFRRVUZsTEVsQlFVazdPMUZCUTI1R0xFOUJRVThzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU0xUXl4SlFVRkpMRkZCUVZFc1IwRkJUeXhOUVVGTkxFTkJRVUVzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZETEVOQlFVTTdXVUZETDBNc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVThzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyaEhMRU5CUVVNc1EwRkJRenRoUVVORUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdZVUZEWkN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJFSXNRMEZCUXp0RFFVRkJPMEZCVUVRc1owTkJUME03UVVGUFJDeFRRVUZ6UWl4TlFVRk5MRU5CUVVNc1QwRkJZenM3VVVGRGRrTXNUVUZCVFN4SFFVRkhMRWRCUVZjc1RVRkJUU3hYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZEYkVRc1QwRkJUeXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRk8xbEJRM1JETEVkQlFVY3NRMEZCUVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5xUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE4wVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wTkJRVUU3UVVGT1JDeDNRa0ZOUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjcnlwdG9fMSA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5jb25zdCBsb2dfMSA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcbmNvbnN0IGxvZyA9IGxvZ18xLmxvZygnaHR0cFV0aWwnKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcIi4vZnNVdGlsXCIpO1xuZnVuY3Rpb24geG1sMmpzb24oeG1sKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB3aGlsZSAoeG1sLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHRhZyA9IHhtbC5tYXRjaCgvPC4qPz4vKTtcbiAgICAgICAgaWYgKHRhZyAmJiB0YWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFnID0gdGFnWzBdLnN1YnN0cmluZygxLCB0YWdbMF0ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwge307XG4gICAgICAgICAgICB0YWcgPSBnZXRBdHRyaWJ1dGVzKHRhZywgcmVzdWx0KTtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHhtbC5pbmRleE9mKGA8JHt0YWd9YCk7XG4gICAgICAgICAgICBsZXQgZW5kID0geG1sLmluZGV4T2YoYDwvJHt0YWd9PmApO1xuICAgICAgICAgICAgaWYgKGVuZCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZSA9IHhtbC5pbmRleE9mKCc+Jywgc3RhcnQpO1xuICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0geG1sLnN1YnN0cmluZyhjbG9zZSArIDEsIGVuZCkudHJpbSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdFt0YWddID0gdGhpcy54bWwyanNvbihjb250ZW50KTtcbiAgICAgICAgICAgICAgICB4bWwgPSB4bWwuc3Vic3RyaW5nKGVuZCArIHRhZy5sZW5ndGggKyAzKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4bWwgPSB4bWwuc3Vic3RyaW5nKHhtbC5pbmRleE9mKCc+JykgKyAxKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSB4bWwuc2xpY2UoMCk7XG4gICAgICAgICAgICB4bWwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy54bWwyanNvbiA9IHhtbDJqc29uO1xuZnVuY3Rpb24gcmVxdWVzdCh1cmwsIHVzZXIsIHJlZmVyZXIsIHBvc3REYXRhKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogcG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgICAgcHJvdG9jb2w6IHVybC5wcm90b2NvbCxcbiAgICAgICAgaG9zdDogdXJsLmhvc3QsXG4gICAgICAgIGhvc3RuYW1lOiB1cmwuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybC5wb3J0LFxuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBwYXRoOiB1cmwucGF0aG5hbWUgKyAodXJsLnNlYXJjaCB8fCAnJyksXG4gICAgICAgIGhlYWRlcnM6IHsgJ1VzZXItQWdlbnQnOiAnaGVscGZ1bCBzY3JpcHRzJyB9LFxuICAgIH07XG4gICAgaWYgKHJlZmVyZXIpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLnJlZmVyZXIgPSByZWZlcmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlciwgcG9zdERhdGEpO1xufVxuZXhwb3J0cy5yZXF1ZXN0ID0gcmVxdWVzdDtcbmNsYXNzIENhY2hlZEhUVFBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihjYWNoZUxvY2F0aW9uLCB1c2VyKSB7XG4gICAgICAgIHRoaXMuY2FjaGVMb2NhdGlvbiA9IGNhY2hlTG9jYXRpb247XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgfVxuICAgIHJlcXVlc3RPbmxpbmUodXJsLCBmbmFtZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcCA9IHlpZWxkIHJlcXVlc3QodXJsLCB0aGlzLnVzZXIpO1xuICAgICAgICAgICAgbG9nLmluZm8oYHJlcXVlc3RlZCAke3VybH1gKTtcbiAgICAgICAgICAgIHlpZWxkIGZzLndyaXRlVGV4dEZpbGUoZm5hbWUsIHJlc3AuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdE9mZmxpbmUoZm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKGBnZXQgY2FjaGVkICcke2ZuYW1lfSdgKTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBmcy5yZWFkVGV4dEZpbGUoZm5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdCh1cmwsIHVzZUNhY2hlZCA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZuYW1lID0gYCR7dGhpcy5jYWNoZUxvY2F0aW9ufSR7dXJsLmhvc3R9LyR7dXJsLnBhdGhuYW1lfSR7dXJsLnNlYXJjaH1gO1xuICAgICAgICAgICAgY29uc3QgZXhpc3RzID0geWllbGQgZnMuaXNGaWxlKGZuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RzICYmIHVzZUNhY2hlZCkgP1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVxdWVzdE9mZmxpbmUoZm5hbWUpIDogeWllbGQgdGhpcy5yZXF1ZXN0T25saW5lKHVybCwgZm5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkNhY2hlZEhUVFBSZXF1ZXN0ID0gQ2FjaGVkSFRUUFJlcXVlc3Q7XG5jbGFzcyBEaWdlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICB0aGlzLm5jID0gMDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgfVxuICAgIHVwZGF0ZU5DKCkge1xuICAgICAgICBsZXQgbWF4ID0gOTk5OTk5OTk7XG4gICAgICAgIGxldCBwYWRkaW5nID0gbmV3IEFycmF5KDgpLmpvaW4oJzAnKSArICcnO1xuICAgICAgICB0aGlzLm5jID0gKHRoaXMubmMgPiBtYXggPyAxIDogdGhpcy5uYyArIDEpO1xuICAgICAgICBsZXQgbmMgPSB0aGlzLm5jICsgJyc7XG4gICAgICAgIHJldHVybiBwYWRkaW5nLnN1YnN0cigwLCA4IC0gbmMubGVuZ3RoKSArIG5jO1xuICAgIH1cbiAgICBnZW5lcmF0ZUNOT05DRShxb3ApIHtcbiAgICAgICAgbGV0IGNub25jZTtcbiAgICAgICAgbGV0IG5jO1xuICAgICAgICBpZiAodHlwZW9mIHFvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxldCBjbm9uY2VIYXNoID0gY3J5cHRvXzEuY3JlYXRlSGFzaCgnbWQ1Jyk7XG4gICAgICAgICAgICBjbm9uY2VIYXNoLnVwZGF0ZShNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KSk7XG4gICAgICAgICAgICBjbm9uY2UgPSBjbm9uY2VIYXNoLmRpZ2VzdCgnaGV4Jykuc3Vic3RyKDAsIDE2KTtcbiAgICAgICAgICAgIG5jID0gdGhpcy51cGRhdGVOQygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGNub25jZTogY25vbmNlLCBuYzogbmMgfTtcbiAgICB9XG4gICAgdGVzdERpZ2VzdEF1dGgob3B0aW9ucywgZGF0YSwgcmVzcG9uc2UpIHtcbiAgICAgICAgbG9nLmluZm8oYHJlY2VpdmVkIHd3dy1hdXRoZW50aWNhdGUgcmVxdWVzdCBmb3IgJHtvcHRpb25zLmhvc3R9YCk7XG4gICAgICAgIGxldCBjaGFsbGVuZ2UgPSBwYXJzZURpZ2VzdFJlc3BvbnNlKHJlc3BvbnNlLmhlYWRlcnNbJ3d3dy1hdXRoZW50aWNhdGUnXSk7XG4gICAgICAgIGxldCBoYTEgPSBjcnlwdG9fMS5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgbGV0IF9zdHIgPSBgJHt0aGlzLnVzZXJuYW1lfToke2NoYWxsZW5nZS5yZWFsbX06JHt0aGlzLnBhc3N3b3JkfWA7XG4gICAgICAgIGhhMS51cGRhdGUoX3N0cik7XG4gICAgICAgIGxldCBoYTIgPSBjcnlwdG9fMS5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgICAgICAgX3N0ciA9IGAke29wdGlvbnMubWV0aG9kfToke29wdGlvbnMucGF0aH1gO1xuICAgICAgICBoYTIudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgeyBuYywgY25vbmNlIH0gPSB0aGlzLmdlbmVyYXRlQ05PTkNFKGNoYWxsZW5nZS5xb3ApO1xuICAgICAgICBsZXQgaGFzaCA9IGNyeXB0b18xLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgICBfc3RyID0gYCR7aGExLmRpZ2VzdCgnaGV4Jyl9OiR7Y2hhbGxlbmdlLm5vbmNlfToke25jfToke2Nub25jZX06JHtjaGFsbGVuZ2UucW9wfToke2hhMi5kaWdlc3QoJ2hleCcpfWA7XG4gICAgICAgIGhhc2gudXBkYXRlKF9zdHIpO1xuICAgICAgICBsZXQgYXV0aFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJlYWxtOiBjaGFsbGVuZ2UucmVhbG0sXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHVyaTogb3B0aW9ucy5wYXRoLFxuICAgICAgICAgICAgcW9wOiBjaGFsbGVuZ2UucW9wLFxuICAgICAgICAgICAgbm9uY2U6IGNoYWxsZW5nZS5ub25jZSxcbiAgICAgICAgICAgIGFsZ29yaXRobTogXCJNRDVcIixcbiAgICAgICAgICAgIHJlc3BvbnNlOiBoYXNoLmRpZ2VzdCgnaGV4JylcbiAgICAgICAgfTtcbiAgICAgICAgYXV0aFBhcmFtcyA9IG9taXROdWxsKGF1dGhQYXJhbXMpO1xuICAgICAgICBpZiAoY25vbmNlKSB7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLm5jID0gbmM7XG4gICAgICAgICAgICBhdXRoUGFyYW1zLmNub25jZSA9IGNub25jZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGNvbXBpbGVQYXJhbXMoYXV0aFBhcmFtcyk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG59XG5leHBvcnRzLkRpZ2VzdCA9IERpZ2VzdDtcbmZ1bmN0aW9uIG9taXROdWxsKGRhdGEpIHtcbiAgICBsZXQgbmV3T2JqZWN0ID0ge307XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoaykgPT4ge1xuICAgICAgICBpZiAoZGF0YVtrXSAhPT0gbnVsbCAmJiBkYXRhW2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld09iamVjdFtrXSA9IGRhdGFba107XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3T2JqZWN0O1xufVxuZnVuY3Rpb24gY29tcGlsZVBhcmFtcyhwYXJhbXMpIHtcbiAgICBsZXQgcGFydHMgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIHBhcmFtcykge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1tpXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGV0IHBhcmFtID0gaSArICc9JyArIChwdXREb3VibGVRdW90ZXMoaSkgPyBgXCIke3BhcmFtc1tpXX1cImAgOiBwYXJhbXNbaV0pO1xuICAgICAgICAgICAgcGFydHMucHVzaChwYXJhbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdEaWdlc3QgJyArIHBhcnRzLmpvaW4oJywnKTtcbn1cbmZ1bmN0aW9uIHB1dERvdWJsZVF1b3RlcyhlbnRyeSkge1xuICAgIHJldHVybiBbJ3FvcCcsICduYyddLmluZGV4T2YoZW50cnkpIDwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlRGlnZXN0UmVzcG9uc2UoZGlnZXN0SGVhZGVyKSB7XG4gICAgZGlnZXN0SGVhZGVyID0gZGlnZXN0SGVhZGVyLnNwbGl0KCdEaWdlc3QgJylbMV07XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgZGlnZXN0SGVhZGVyLnNwbGl0KCcsJykuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBjb25zdCBrdiA9IHBhcnQuc3BsaXQoJz0nKS5tYXAoKHYpID0+IHYudHJpbSgpKTtcbiAgICAgICAgcGFyYW1zW2t2WzBdXSA9IGt2WzFdLnJlcGxhY2UoL1xcXCIvZywgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG5mdW5jdGlvbiBpc0JpbmFyeShjb250ZW50VHlwZSkge1xuICAgIGNvbnN0IGJpbmFyeSA9IHtcbiAgICAgICAgJ3RleHQvaHRtbCc6IGZhbHNlLFxuICAgICAgICAndGV4dC9wbGFpbic6IGZhbHNlLFxuICAgICAgICAnaW1hZ2UvanBlZyc6IHRydWUsXG4gICAgICAgICdpbWFnZS9wbmcnOiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBiaW5hcnlbY29udGVudFR5cGVdO1xuICAgIHJldHVybiAocmVzdWx0ID09PSB1bmRlZmluZWQpID8gZmFsc2UgOiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVzKHRhZywgcmVzdWx0KSB7XG4gICAgbGV0IGZpZWxkcyA9IHRhZy5zcGxpdCgvKD89KFteXCJdKlwiW15cIl0qXCIpKlteXCJdKiQpXFxzKy9nKTtcbiAgICB0YWcgPSBmaWVsZHNbMF0udHJpbSgpO1xuICAgIHJlc3VsdFt0YWddID0ge307XG4gICAgZmllbGRzLm1hcChmID0+IHtcbiAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgIGxldCBhdHRycyA9IGYuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIHJlc3VsdFt0YWddLmF0dHJzID0gcmVzdWx0W3RhZ10uYXR0cnMgfHwge307XG4gICAgICAgICAgICBpZiAoYXR0cnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFt0YWddLmF0dHJzW2F0dHJzWzBdLnRyaW0oKV0gPSBhdHRyc1sxXS5yZXBsYWNlKC9cXFwiL2csICcnKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGFnO1xufVxuZnVuY3Rpb24gcmVxdWVzdE9wdGlvbnMob3B0aW9ucywgdXNlciwgcG9zdERhdGEpIHtcbiAgICBjb25zdCBwcm90ID0ge1xuICAgICAgICAnaHR0cDonOiByZXF1aXJlKCdodHRwJyksXG4gICAgICAgICdodHRwczonOiByZXF1aXJlKCdodHRwcycpXG4gICAgfTtcbiAgICBsZXQgYXV0aCA9IChvcHRpb25zLmhlYWRlcnMgJiYgb3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24pO1xuICAgIGxvZy5kZWJ1ZyhgcmVxdWVzdGluZyAke2xvZy5pbnNwZWN0KG9wdGlvbnMsIDQpfWApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gJyc7XG4gICAgICAgIGxvZy5kZWJ1Zyhgc2VuZGluZyByZXF1ZXN0ICR7YXV0aCA/ICd3aXRoIGF1dGhvcml6YXRpb24gJyA6ICcnfWZvciAke29wdGlvbnMucHJvdG9jb2x9Ly8ke29wdGlvbnMuaG9zdH06JHtvcHRpb25zLnBvcnR9JHtvcHRpb25zLnBhdGh9YCk7XG4gICAgICAgIGNvbnN0IHJlcSA9IHByb3Rbb3B0aW9ucy5wcm90b2NvbF0ucmVxdWVzdChvcHRpb25zLCAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGluZyA9IGlzQmluYXJ5KHJlcy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSkgPyAnYmluYXJ5JyA6ICd1dGY4JztcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhgcmVjZWl2aW5nLi4uJHtyZXMuaGVhZGVyc1snY29udGVudC10eXBlJ119ID0+ICR7ZW5jb2Rpbmd9YCk7XG4gICAgICAgICAgICByZXMuc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuICAgICAgICAgICAgcmVzLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7IGRhdGEgKz0gY2h1bms7IH0pO1xuICAgICAgICAgICAgcmVzLm9uKCdlbmQnLCAoKSA9PiB7IGxvZy5kZWJ1ZyhgcmVjZWl2ZWQgJHtlbmNvZGluZ31gKTsgcmVzb2x2ZSh7IGRhdGE6IGRhdGEsIHJlc3BvbnNlOiByZXMgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxLm9uKCdlcnJvcicsIChlKSA9PiByZWplY3QoZSkpO1xuICAgICAgICBpZiAocG9zdERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVxLndyaXRlKHBvc3REYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXEuZW5kKCk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAodXNlciAmJiByZXMucmVzcG9uc2UuaGVhZGVyc1snd3d3LWF1dGhlbnRpY2F0ZSddKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci50ZXN0RGlnZXN0QXV0aChvcHRpb25zLCByZXMuZGF0YSwgcmVzLnJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFIUjBjRlYwYVd3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhSFIwY0ZWMGFXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRCUVd0Q1FTeHRRMEZCYzBNN1FVRkRkRU1zSzBKQlFYRkRPMEZCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzVTBGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMEZCUTNKRkxDdENRVUYzUXp0QlFWRjRReXhUUVVGblFpeFJRVUZSTEVOQlFVTXNSMEZCVlR0SlFVTXZRaXhKUVVGSkxFMUJRVlVzUTBGQlF6dEpRVU5tTEU5QlFVMHNSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJReXhEUVVGRExFVkJRVVU3VVVGRGFFSXNTVUZCU1N4SFFVRkhMRWRCUVU4c1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhKUVVGSkxFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTXpReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVTjBRaXhIUVVGSExFZEJRVWNzWVVGQllTeERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRaUVVOcVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTnVReXhKUVVGSkxFZEJRVWNzUjBGQlNTeEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU53UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlExUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1owSkJRM1JETEVsQlFVa3NUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEhRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZEYWtRc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEzSkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NSMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMkZCUTJoRU8ybENRVUZOTzJkQ1FVVklMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1lVRkRiRVE3VTBGRFNqdGhRVUZOTzFsQlEwZ3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZEVJc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU5hTzB0QlEwbzdTVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOc1FpeERRVUZETzBGQmVrSkVMRFJDUVhsQ1F6dEJRVlZFTEZOQlFXZENMRTlCUVU4c1EwRkJReXhIUVVGUExFVkJRVVVzU1VGQldTeEZRVUZGTEU5QlFXVXNSVUZCUlN4UlFVRmhPMGxCUTNwRkxFbEJRVWtzVDBGQlR5eEhRVUZITzFGQlExWXNUVUZCVFN4RlFVRk5MRkZCUVZFc1EwRkJRU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZCTEVOQlFVTXNRMEZCUXl4TFFVRkxPMUZCUTI1RExGRkJRVkVzUlVGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVR0UlFVTjRRaXhKUVVGSkxFVkJRVkVzUjBGQlJ5eERRVUZETEVsQlFVazdVVUZEY0VJc1VVRkJVU3hGUVVGSkxFZEJRVWNzUTBGQlF5eFJRVUZSTzFGQlEzaENMRWxCUVVrc1JVRkJVU3hIUVVGSExFTkJRVU1zU1VGQlNUdFJRVU53UWl4UlFVRlJMRVZCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkU3VVVGRGVFSXNTVUZCU1N4RlFVRlJMRWRCUVVjc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVNM1F5eFBRVUZQTEVWQlFWVXNSVUZCUlN4WlFVRlpMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVTdTMEZEZGtRc1EwRkJRenRKUVVOR0xFbEJRVWtzVDBGQlR5eEZRVUZGTzFGQlFVVXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETzB0QlFVVTdTVUZEYmtRc1QwRkJUeXhqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVOdVJDeERRVUZETzBGQllrUXNNRUpCWVVNN1FVRm5Ra1FzVFVGQllTeHBRa0ZCYVVJN1NVRk5NVUlzV1VGQmJVSXNZVUZCY1VJc1JVRkJVeXhKUVVGWk8xRkJRVEZETEd0Q1FVRmhMRWRCUVdJc1lVRkJZU3hEUVVGUk8xRkJRVk1zVTBGQlNTeEhRVUZLTEVsQlFVa3NRMEZCVVR0SlFVTTNSQ3hEUVVGRE8wbEJSMkVzWVVGQllTeERRVUZETEVkQlFVOHNSVUZCUlN4TFFVRlpPenRaUVVNM1F5eE5RVUZOTEVsQlFVa3NSMEZCVHl4TlFVRk5MRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXk5RExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRemRDTEUxQlFVMHNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNwRExFOUJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTnlRaXhEUVVGRE8wdEJRVUU3U1VGRllTeGpRVUZqTEVOQlFVTXNTMEZCV1RzN1dVRkRja01zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJFTXNUMEZCVHl4TlFVRk5MRVZCUVVVc1EwRkJReXhaUVVGWkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEZUVNc1EwRkJRenRMUVVGQk8wbEJWVmtzVDBGQlR5eERRVUZETEVkQlFVOHNSVUZCUlN4VFFVRlRMRWRCUVVNc1NVRkJTVHM3V1VGRGVFTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1dVRkRPVVVzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFsQlEzUkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVRXNRMEZCUXp0blFrRkRla0lzVFVGQlRTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyaEdMRU5CUVVNN1MwRkJRVHREUVVOS08wRkJjRU5FTERoRFFXOURRenRCUVcxRFJDeE5RVUZoTEUxQlFVMDdTVUZMWml4WlFVRlpMRkZCUVdVc1JVRkJSU3hSUVVGbE8xRkJTalZETEU5QlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkxTQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJTMFFzVVVGQlVUdFJRVU5LTEVsQlFVa3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJRenRSUVVOdVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRekZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRelZETEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETzFGQlEzUkNMRTlCUVU4c1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYWtRc1EwRkJRenRKUVUxRUxHTkJRV01zUTBGQlF5eEhRVUZWTzFGQlEzSkNMRWxCUVVrc1RVRkJWU3hEUVVGRE8xRkJRMllzU1VGQlNTeEZRVUZUTEVOQlFVTTdVVUZGWkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU42UWl4SlFVRkpMRlZCUVZVc1IwRkJSeXh0UWtGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMWxCUTI1RExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXpsRExFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRhRVFzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRUUVVONFFqdFJRVU5FTEU5QlFVOHNSVUZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVTXNRMEZCUXp0SlFVTndReXhEUVVGRE8wbEJVVVFzWTBGQll5eERRVUZETEU5QlFWY3NSVUZCUlN4SlFVRlhMRVZCUVVVc1VVRkJkMEk3VVVGRE4wUXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXg1UTBGQmVVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRmJFVXNTVUZCU1N4VFFVRlRMRWRCUVU4c2JVSkJRVzFDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRPVVVzU1VGQlNTeEhRVUZITEVkQlFVY3NiVUpCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU0xUWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdVVUZEYkVVc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTnFRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eHRRa0ZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRelZDTEVsQlFVa3NSMEZCUnl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUXpORExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZha0lzU1VGQlNTeEZRVUZETEVWQlFVVXNSVUZCUlN4TlFVRk5MRVZCUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMFJDeEpRVUZKTEVsQlFVa3NSMEZCUnl4dFFrRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlF6ZENMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzU1VGQlNTeEZRVUZGTEVsQlFVa3NUVUZCVFN4SlFVRkpMRk5CUVZNc1EwRkJReXhIUVVGSExFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM1pITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGSGJFSXNTVUZCU1N4VlFVRlZMRWRCUVU4N1dVRkRha0lzUzBGQlN5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TFFVRkxPMWxCUTNSQ0xGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVR0WlFVTjJRaXhIUVVGSExFVkJRVVVzVDBGQlR5eERRVUZETEVsQlFVazdXVUZEYWtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITzFsQlEyeENMRXRCUVVzc1JVRkJSU3hUUVVGVExFTkJRVU1zUzBGQlN6dFpRVU4wUWl4VFFVRlRMRVZCUVVVc1MwRkJTenRaUVVOb1FpeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03VTBGREwwSXNRMEZCUXp0UlFVVkdMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdVVUZGYkVNc1NVRkJTU3hOUVVGTkxFVkJRVVU3V1VGRFVpeFZRVUZWTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRaUVVOdVFpeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRUUVVNNVFqdFJRVVZFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hIUVVGSExHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hQUVVGUExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhEUVVGRE8wTkJRMG83UVVGcVJrUXNkMEpCYVVaRE8wRkJTVVFzVTBGQlV5eFJRVUZSTEVOQlFVTXNTVUZCVVR0SlFVdDBRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYmtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGUkxFVkJRVVVzUlVGQlJUdFJRVU51UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdFpRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZCUlR0SlFVTTVSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5JTEU5QlFVOHNVMEZCVXl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVGTlJDeFRRVUZUTEdGQlFXRXNRMEZCUXl4TlFVRlZPMGxCUXpkQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTm1MRXRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzVFVGQlRTeEZRVUZGTzFGQlEyeENMRWxCUVVrc1QwRkJUeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMWxCUTJwRExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlF6RkZMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEY2tJN1MwRkRTanRKUVVORUxFOUJRVThzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGRrTXNRMEZCUXp0QlFVMUVMRk5CUVZNc1pVRkJaU3hEUVVGRExFdEJRVms3U1VGRGFrTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRE8wRkJRekZETEVOQlFVTTdRVUZGUkN4VFFVRlRMRzFDUVVGdFFpeERRVUZETEZsQlFXMUNPMGxCUXpWRExGbEJRVmtzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU5zUWl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVZjc1JVRkJSU3hGUVVGRk8xRkJRelZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMlJDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZETjBNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFNDeFBRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTnNRaXhEUVVGRE8wRkJSVVFzVTBGQlV5eFJRVUZSTEVOQlFVTXNWMEZCYTBJN1NVRkRhRU1zVFVGQlRTeE5RVUZOTEVkQlFVYzdVVUZEV0N4WFFVRlhMRVZCUVVzc1MwRkJTenRSUVVOeVFpeFpRVUZaTEVWQlFVa3NTMEZCU3p0UlFVTnlRaXhaUVVGWkxFVkJRVWtzU1VGQlNUdFJRVU53UWl4WFFVRlhMRVZCUVVzc1NVRkJTVHRMUVVOMlFpeERRVUZETzBsQlEwWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBsQlEyNURMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzBGQlEyeEVMRU5CUVVNN1FVRkZSQ3hUUVVGVExHRkJRV0VzUTBGQlF5eEhRVUZWTEVWQlFVVXNUVUZCVlR0SlFVTjZReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdTVUZEZUVRc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOMlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMnBDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRFdDeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTklMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRla0lzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVc1EwRkJRenRaUVVNMVF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVNc1EwRkJReXhGUVVGRk8yZENRVU5vUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yRkJRek5GTzFOQlEwbzdTVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOSUxFOUJRVThzUjBGQlJ5eERRVUZETzBGQlEyWXNRMEZCUXp0QlFVVkVMRk5CUVZNc1kwRkJZeXhEUVVGRExFOUJRVmNzUlVGQlJTeEpRVUZaTEVWQlFVVXNVVUZCWVR0SlFVTTFSQ3hOUVVGTkxFbEJRVWtzUjBGQlR6dFJRVU5pTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8xRkJRM2hDTEZGQlFWRXNSVUZCUlN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRE8wdEJRemRDTEVOQlFVTTdTVUZEUml4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEpRVU01UkN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBsQlEyNUVMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZuUXl4RlFVRkZMRTFCUVhWQ0xFVkJRVVVzUlVGQlJUdFJRVU0zUlN4SlFVRkpMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFpDeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRzFDUVVGdFFpeEpRVUZKTEVOQlFVRXNRMEZCUXl4RFFVRkRMSEZDUVVGeFFpeERRVUZCTEVOQlFVTXNRMEZCUVN4RlFVRkZMRTlCUVU4c1QwRkJUeXhEUVVGRExGRkJRVkVzUzBGQlN5eFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkRkRWtzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRE5VUXNUVUZCVFN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNN1dVRkRNVVVzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEU5QlFVOHNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVOMlJTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xbEJRekZDTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUzBGQldTeEZRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRWxCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY2tRc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlF5eEpRVUZKTEVWQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJReXhIUVVGSExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRjRWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVc3NSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZIZEVNc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlFVVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVUZGTzFGQlEzQkVMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU5rTEVOQlFVTXNRMEZCUXp0VFFVTkVMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRV2RDTEVWQlFVVXNSVUZCUlR0UlFVTjJRaXhKUVVGSkxFbEJRVWtzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RlFVRkZPMWxCUTJ4RUxFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1UwRkRMMFE3WVVGQlRUdFpRVU5JTEU5QlFVOHNSMEZCUnl4RFFVRkRPMU5CUTJRN1NVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5RTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCIuL2ZzVXRpbFwiKTtcbmNvbnN0IGNwVXRpbF8xID0gcmVxdWlyZShcIi4vY3BVdGlsXCIpO1xuZXhwb3J0cy5ub2RlID0ge1xuICAgIGZzOiBmcyxcbiAgICBjaGlsZF9wcm9jZXNzOiBjcFV0aWxfMS5jaGlsZF9wcm9jZXNzXG59O1xudmFyIGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuZXhwb3J0cy5sb2cgPSBsb2dfMS5sb2c7XG5jb25zdCBodHRwID0gcmVxdWlyZShcIi4vaHR0cFV0aWxcIik7XG5leHBvcnRzLmh0dHAgPSBodHRwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRFFTd3JRa0ZCTkVNN1FVRkROVU1zY1VOQlFUUkRPMEZCUlM5Q0xGRkJRVUVzU1VGQlNTeEhRVUZITzBsQlEyaENMRVZCUVVVc1JVRkJSU3hGUVVGRk8wbEJRMDRzWVVGQllTeEZRVUZGTEhOQ1FVRmhPME5CUXk5Q0xFTkJRVU03UVVGRlJpdzJRa0ZCYVVNN1FVRkJlRUlzYjBKQlFVRXNSMEZCUnl4RFFVRkJPMEZCUlZvc2JVTkJRWE5ETzBGQlF6ZENMRzlDUVVGSkluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaHN1dGlsXzEgPSByZXF1aXJlKFwiaHN1dGlsXCIpO1xuY29uc3QgcGF0aF8xID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBmc1V0aWxfMSA9IHJlcXVpcmUoXCIuL2ZzVXRpbFwiKTtcbmNvbnN0IGZzVXRpbF8yID0gcmVxdWlyZShcIi4vZnNVdGlsXCIpO1xuZXhwb3J0cy5sb2cgPSBoc3V0aWxfMS5sb2coJycsIG5vZGVfbG9nVG9GaWxlLCBub2RlX3BhdGhFeGlzdHMpO1xuZXhwb3J0cy5sb2cuY29uZmlnKHsgY29sb3JzOiB0cnVlIH0pO1xuZnVuY3Rpb24gbm9kZV9wYXRoRXhpc3RzKGZpbGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoXzEuZGlybmFtZShwYXRoXzEubm9ybWFsaXplKGZpbGUpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGZzVXRpbF8xLnBhdGhFeGlzdHMoZGlyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG5vZGVfbG9nVG9GaWxlKGZpbGVuYW1lLCBtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4geWllbGQgZnNVdGlsXzIuYXBwZW5kRmlsZShmaWxlbmFtZSwgbXNnICsgJ1xcbicpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYkc5bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMnh2Wnk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wRkJjMEpCTEcxRFFVRTRRenRCUVVNNVF5d3JRa0ZCTkVNN1FVRkROVU1zY1VOQlFXZEVPMEZCUTJoRUxIRkRRVUZuUkR0QlFVVnVReXhSUVVGQkxFZEJRVWNzUjBGQlZ5eFpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMR05CUVdNc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dEJRVU55UlN4WFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVU1zVFVGQlRTeEZRVUZETEVsQlFVa3NSVUZCUXl4RFFVRkRMRU5CUVVNN1FVRkZNVUlzVTBGQlpTeGxRVUZsTEVOQlFVTXNTVUZCVnpzN1VVRkRkRU1zVFVGQlRTeEhRVUZITEVkQlFVY3NZMEZCVHl4RFFVRkRMR2RDUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlReXhQUVVGUExFMUJRVTBzYlVKQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlFVRTdRVUZGUkN4VFFVRmxMR05CUVdNc1EwRkJReXhSUVVGbExFVkJRVVVzUjBGQlZUczdVVUZEY2tRc1QwRkJUeXhOUVVGTkxHMUNRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWRCUVVjc1IwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRPME5CUVVFaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IGNoaWxkX3Byb2Nlc3M7IiwibW9kdWxlLmV4cG9ydHMgPSBjcnlwdG87IiwibW9kdWxlLmV4cG9ydHMgPSBmczsiLCJtb2R1bGUuZXhwb3J0cyA9IGh0dHA7IiwibW9kdWxlLmV4cG9ydHMgPSBwYXRoOyIsIm1vZHVsZS5leHBvcnRzID0gdXJsOyJdLCJzb3VyY2VSb290IjoiIn0=