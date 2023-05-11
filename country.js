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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/country.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
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

/***/ "./node_modules/twig/twig.js":
/*!***********************************!*\
  !*** ./node_modules/twig/twig.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function sprintf() {
  //  discuss at: https://locutus.io/php/sprintf/
  // original by: Ash Searle (https://hexmen.com/blog/)
  // improved by: Michael White (https://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Dj
  // improved by: Allidylls
  //    input by: Paulo Freitas
  //    input by: Brett Zamir (https://brett-zamir.me)
  // improved by: Rafał Kukawski (https://kukawski.pl)
  //   example 1: sprintf("%01.2f", 123.1)
  //   returns 1: '123.10'
  //   example 2: sprintf("[%10s]", 'monkey')
  //   returns 2: '[    monkey]'
  //   example 3: sprintf("[%'#10s]", 'monkey')
  //   returns 3: '[####monkey]'
  //   example 4: sprintf("%d", 123456789012345)
  //   returns 4: '123456789012345'
  //   example 5: sprintf('%-03s', 'E')
  //   returns 5: 'E00'
  //   example 6: sprintf('%+010d', 9)
  //   returns 6: '+000000009'
  //   example 7: sprintf('%+0\'@10d', 9)
  //   returns 7: '@@@@@@@@+9'
  //   example 8: sprintf('%.f', 3.14)
  //   returns 8: '3.140000'
  //   example 9: sprintf('%% %2$d', 1, 2)
  //   returns 9: '% 2'

  var regex = /%%|%(?:(\d+)\$)?((?:[-+#0 ]|'[\s\S])*)(\d+)?(?:\.(\d*))?([\s\S])/g;
  var args = arguments;
  var i = 0;
  var format = args[i++];

  var _pad = function _pad(str, len, chr, leftJustify) {
    if (!chr) {
      chr = ' ';
    }
    var padding = str.length >= len ? '' : new Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
  };

  var justify = function justify(value, prefix, leftJustify, minWidth, padChar) {
    var diff = minWidth - value.length;
    if (diff > 0) {
      // when padding with zeros
      // on the left side
      // keep sign (+ or -) in front
      if (!leftJustify && padChar === '0') {
        value = [value.slice(0, prefix.length), _pad('', diff, '0', true), value.slice(prefix.length)].join('');
      } else {
        value = _pad(value, minWidth, padChar, leftJustify);
      }
    }
    return value;
  };

  var _formatBaseX = function _formatBaseX(value, base, leftJustify, minWidth, precision, padChar) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    value = _pad(number.toString(base), precision || 0, '0', false);
    return justify(value, '', leftJustify, minWidth, padChar);
  };

  // _formatString()
  var _formatString = function _formatString(value, leftJustify, minWidth, precision, customPadChar) {
    if (precision !== null && precision !== undefined) {
      value = value.slice(0, precision);
    }
    return justify(value, '', leftJustify, minWidth, customPadChar);
  };

  // doFormat()
  var doFormat = function doFormat(substring, argIndex, modifiers, minWidth, precision, specifier) {
    var number, prefix, method, textTransform, value;

    if (substring === '%%') {
      return '%';
    }

    // parse modifiers
    var padChar = ' '; // pad with spaces by default
    var leftJustify = false;
    var positiveNumberPrefix = '';
    var j, l;

    for (j = 0, l = modifiers.length; j < l; j++) {
      switch (modifiers.charAt(j)) {
        case ' ':
        case '0':
          padChar = modifiers.charAt(j);
          break;
        case '+':
          positiveNumberPrefix = '+';
          break;
        case '-':
          leftJustify = true;
          break;
        case "'":
          if (j + 1 < l) {
            padChar = modifiers.charAt(j + 1);
            j++;
          }
          break;
      }
    }

    if (!minWidth) {
      minWidth = 0;
    } else {
      minWidth = +minWidth;
    }

    if (!isFinite(minWidth)) {
      throw new Error('Width must be finite');
    }

    if (!precision) {
      precision = specifier === 'd' ? 0 : 'fFeE'.indexOf(specifier) > -1 ? 6 : undefined;
    } else {
      precision = +precision;
    }

    if (argIndex && +argIndex === 0) {
      throw new Error('Argument number must be greater than zero');
    }

    if (argIndex && +argIndex >= args.length) {
      throw new Error('Too few arguments');
    }

    value = argIndex ? args[+argIndex] : args[i++];

    switch (specifier) {
      case '%':
        return '%';
      case 's':
        return _formatString(value + '', leftJustify, minWidth, precision, padChar);
      case 'c':
        return _formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, padChar);
      case 'b':
        return _formatBaseX(value, 2, leftJustify, minWidth, precision, padChar);
      case 'o':
        return _formatBaseX(value, 8, leftJustify, minWidth, precision, padChar);
      case 'x':
        return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar);
      case 'X':
        return _formatBaseX(value, 16, leftJustify, minWidth, precision, padChar).toUpperCase();
      case 'u':
        return _formatBaseX(value, 10, leftJustify, minWidth, precision, padChar);
      case 'i':
      case 'd':
        number = +value || 0;
        // Plain Math.round doesn't just truncate
        number = Math.round(number - number % 1);
        prefix = number < 0 ? '-' : positiveNumberPrefix;
        value = prefix + _pad(String(Math.abs(number)), precision, '0', false);

        if (leftJustify && padChar === '0') {
          // can't right-pad 0s on integers
          padChar = ' ';
        }
        return justify(value, prefix, leftJustify, minWidth, padChar);
      case 'e':
      case 'E':
      case 'f': // @todo: Should handle locales (as per setlocale)
      case 'F':
      case 'g':
      case 'G':
        number = +value;
        prefix = number < 0 ? '-' : positiveNumberPrefix;
        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(specifier.toLowerCase())];
        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(specifier) % 2];
        value = prefix + Math.abs(number)[method](precision);
        return justify(value, prefix, leftJustify, minWidth, padChar)[textTransform]();
      default:
        // unknown specifier, consume that char and return empty
        return '';
    }
  };

  try {
    return format.replace(regex, doFormat);
  } catch (err) {
    return false;
  }
};
//# sourceMappingURL=sprintf.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _php_cast_int(value) {
  // eslint-disable-line camelcase
  // original by: Rafał Kukawski
  //   example 1: _php_cast_int(false)
  //   returns 1: 0
  //   example 2: _php_cast_int(true)
  //   returns 2: 1
  //   example 3: _php_cast_int(0)
  //   returns 3: 0
  //   example 4: _php_cast_int(1)
  //   returns 4: 1
  //   example 5: _php_cast_int(3.14)
  //   returns 5: 3
  //   example 6: _php_cast_int('')
  //   returns 6: 0
  //   example 7: _php_cast_int('0')
  //   returns 7: 0
  //   example 8: _php_cast_int('abc')
  //   returns 8: 0
  //   example 9: _php_cast_int(null)
  //   returns 9: 0
  //  example 10: _php_cast_int(undefined)
  //  returns 10: 0
  //  example 11: _php_cast_int('123abc')
  //  returns 11: 123
  //  example 12: _php_cast_int('123e4')
  //  returns 12: 123
  //  example 13: _php_cast_int(0x200000001)
  //  returns 13: 8589934593

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'number':
      if (isNaN(value) || !isFinite(value)) {
        // from PHP 7, NaN and Infinity are casted to 0
        return 0;
      }

      return value < 0 ? Math.ceil(value) : Math.floor(value);
    case 'string':
      return parseInt(value, 10) || 0;
    case 'boolean':
    // fall through
    default:
      // Behaviour for types other than float, string, boolean
      // is undefined and can change any time.
      // To not invent complex logic
      // that mimics PHP 7.0 behaviour
      // casting value->bool->number is used
      return +!!value;
  }
};
//# sourceMappingURL=_php_cast_int.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Twig.js
 *
 * @copyright 2011-2020 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/twigjs/twig.js
 */
module.exports = __webpack_require__(8)();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.factory.js
//
// This file handles creating the Twig library
module.exports = function factory() {
  var Twig = {
    VERSION: '1.14.0'
  };

  __webpack_require__(9)(Twig);

  __webpack_require__(10)(Twig);

  __webpack_require__(11)(Twig);

  __webpack_require__(18)(Twig);

  __webpack_require__(19)(Twig);

  __webpack_require__(20)(Twig);

  __webpack_require__(31)(Twig);

  __webpack_require__(32)(Twig);

  __webpack_require__(34)(Twig);

  __webpack_require__(35)(Twig);

  __webpack_require__(36)(Twig);

  __webpack_require__(37)(Twig);

  __webpack_require__(38)(Twig);

  __webpack_require__(39)(Twig);

  __webpack_require__(40)(Twig);

  Twig.exports.factory = factory;
  return Twig.exports;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// ## twig.core.js
//
// This file handles template level tokenizing, compiling and parsing.
module.exports = function (Twig) {
  'use strict';

  Twig.trace = false;
  Twig.debug = false; // Default caching to true for the improved performance it offers

  Twig.cache = true;

  Twig.noop = function () {};

  Twig.merge = function (target, source, onlyChanged) {
    Object.keys(source).forEach(function (key) {
      if (onlyChanged && !(key in target)) {
        return;
      }

      target[key] = source[key];
    });
    return target;
  };
  /**
   * Exception thrown by twig.js.
   */


  Twig.Error = function (message, file) {
    this.message = message;
    this.name = 'TwigException';
    this.type = 'TwigException';
    this.file = file;
  };
  /**
   * Get the string representation of a Twig error.
   */


  Twig.Error.prototype.toString = function () {
    var output = this.name + ': ' + this.message;
    return output;
  };
  /**
   * Wrapper for logging to the console.
   */


  Twig.log = {
    trace: function trace() {
      if (Twig.trace && console) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log(Array.prototype.slice.call(args));
      }
    },
    debug: function debug() {
      if (Twig.debug && console) {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        console.log(Array.prototype.slice.call(args));
      }
    }
  };

  if (typeof console === 'undefined') {
    Twig.log.error = function () {};
  } else if (typeof console.error !== 'undefined') {
    Twig.log.error = function () {
      var _console;

      (_console = console).error.apply(_console, arguments);
    };
  } else if (typeof console.log !== 'undefined') {
    Twig.log.error = function () {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    };
  }
  /**
   * Container for methods related to handling high level template tokens
   *      (for example: {{ expression }}, {% logic %}, {# comment #}, raw data)
   */


  Twig.token = {};
  /**
   * Token types.
   */

  Twig.token.type = {
    output: 'output',
    logic: 'logic',
    comment: 'comment',
    raw: 'raw',
    outputWhitespacePre: 'output_whitespace_pre',
    outputWhitespacePost: 'output_whitespace_post',
    outputWhitespaceBoth: 'output_whitespace_both',
    logicWhitespacePre: 'logic_whitespace_pre',
    logicWhitespacePost: 'logic_whitespace_post',
    logicWhitespaceBoth: 'logic_whitespace_both'
  };
  /**
   * Token syntax definitions.
   */

  Twig.token.definitions = [{
    type: Twig.token.type.raw,
    open: '{% raw %}',
    close: '{% endraw %}'
  }, {
    type: Twig.token.type.raw,
    open: '{% verbatim %}',
    close: '{% endverbatim %}'
  }, // *Whitespace type tokens*
  //
  // These typically take the form `{{- expression -}}` or `{{- expression }}` or `{{ expression -}}`.
  {
    type: Twig.token.type.outputWhitespacePre,
    open: '{{-',
    close: '}}'
  }, {
    type: Twig.token.type.outputWhitespacePost,
    open: '{{',
    close: '-}}'
  }, {
    type: Twig.token.type.outputWhitespaceBoth,
    open: '{{-',
    close: '-}}'
  }, {
    type: Twig.token.type.logicWhitespacePre,
    open: '{%-',
    close: '%}'
  }, {
    type: Twig.token.type.logicWhitespacePost,
    open: '{%',
    close: '-%}'
  }, {
    type: Twig.token.type.logicWhitespaceBoth,
    open: '{%-',
    close: '-%}'
  }, // *Output type tokens*
  //
  // These typically take the form `{{ expression }}`.
  {
    type: Twig.token.type.output,
    open: '{{',
    close: '}}'
  }, // *Logic type tokens*
  //
  // These typically take a form like `{% if expression %}` or `{% endif %}`
  {
    type: Twig.token.type.logic,
    open: '{%',
    close: '%}'
  }, // *Comment type tokens*
  //
  // These take the form `{# anything #}`
  {
    type: Twig.token.type.comment,
    open: '{#',
    close: '#}'
  }];
  /**
   * What characters start "strings" in token definitions. We need this to ignore token close
   * strings inside an expression.
   */

  Twig.token.strings = ['"', '\''];

  Twig.token.findStart = function (template) {
    var output = {
      position: null,
      def: null
    };
    var closePosition = null;
    var len = Twig.token.definitions.length;
    var i;
    var tokenTemplate;
    var firstKeyPosition;
    var closeKeyPosition;

    for (i = 0; i < len; i++) {
      tokenTemplate = Twig.token.definitions[i];
      firstKeyPosition = template.indexOf(tokenTemplate.open);
      closeKeyPosition = template.indexOf(tokenTemplate.close);
      Twig.log.trace('Twig.token.findStart: ', 'Searching for ', tokenTemplate.open, ' found at ', firstKeyPosition); // Special handling for mismatched tokens

      if (firstKeyPosition >= 0) {
        // This token matches the template
        if (tokenTemplate.open.length !== tokenTemplate.close.length) {
          // This token has mismatched closing and opening tags
          if (closeKeyPosition < 0) {
            // This token's closing tag does not match the template
            continue;
          }
        }
      } // Does this token occur before any other types?


      if (firstKeyPosition >= 0 && (output.position === null || firstKeyPosition < output.position)) {
        output.position = firstKeyPosition;
        output.def = tokenTemplate;
        closePosition = closeKeyPosition;
      } else if (firstKeyPosition >= 0 && output.position !== null && firstKeyPosition === output.position) {
        /* This token exactly matches another token,
        greedily match to check if this token has a greater specificity */
        if (tokenTemplate.open.length > output.def.open.length) {
          // This token's opening tag is more specific than the previous match
          output.position = firstKeyPosition;
          output.def = tokenTemplate;
          closePosition = closeKeyPosition;
        } else if (tokenTemplate.open.length === output.def.open.length) {
          if (tokenTemplate.close.length > output.def.close.length) {
            // This token's opening tag is as specific as the previous match,
            // but the closing tag has greater specificity
            if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
              // This token's closing tag exists in the template,
              // and it occurs sooner than the previous match
              output.position = firstKeyPosition;
              output.def = tokenTemplate;
              closePosition = closeKeyPosition;
            }
          } else if (closeKeyPosition >= 0 && closeKeyPosition < closePosition) {
            // This token's closing tag is not more specific than the previous match,
            // but it occurs sooner than the previous match
            output.position = firstKeyPosition;
            output.def = tokenTemplate;
            closePosition = closeKeyPosition;
          }
        }
      }
    }

    return output;
  };

  Twig.token.findEnd = function (template, tokenDef, start) {
    var end = null;
    var found = false;
    var offset = 0; // String position variables

    var strPos = null;
    var strFound = null;
    var pos = null;
    var endOffset = null;
    var thisStrPos = null;
    var endStrPos = null; // For loop variables

    var i;
    var l;

    while (!found) {
      strPos = null;
      strFound = null;
      pos = template.indexOf(tokenDef.close, offset);

      if (pos >= 0) {
        end = pos;
        found = true;
      } else {
        // Throw an exception
        throw new Twig.Error('Unable to find closing bracket \'' + tokenDef.close + '\' opened near template position ' + start);
      } // Ignore quotes within comments; just look for the next comment close sequence,
      // regardless of what comes before it. https://github.com/justjohn/twig.js/issues/95


      if (tokenDef.type === Twig.token.type.comment) {
        break;
      } // Ignore quotes within raw tag
      // Fixes #283


      if (tokenDef.type === Twig.token.type.raw) {
        break;
      }

      l = Twig.token.strings.length;

      for (i = 0; i < l; i += 1) {
        thisStrPos = template.indexOf(Twig.token.strings[i], offset);

        if (thisStrPos > 0 && thisStrPos < pos && (strPos === null || thisStrPos < strPos)) {
          strPos = thisStrPos;
          strFound = Twig.token.strings[i];
        }
      } // We found a string before the end of the token, now find the string's end and set the search offset to it


      if (strPos !== null) {
        endOffset = strPos + 1;
        end = null;
        found = false;

        for (;;) {
          endStrPos = template.indexOf(strFound, endOffset);

          if (endStrPos < 0) {
            throw Twig.Error('Unclosed string in template');
          } // Ignore escaped quotes


          if (template.slice(endStrPos - 1, endStrPos) === '\\') {
            endOffset = endStrPos + 1;
          } else {
            offset = endStrPos + 1;
            break;
          }
        }
      }
    }

    return end;
  };
  /**
   * Convert a template into high-level tokens.
   */


  Twig.tokenize = function (template) {
    var tokens = []; // An offset for reporting errors locations in the template.

    var errorOffset = 0; // The start and type of the first token found in the template.

    var foundToken = null; // The end position of the matched token.

    var end = null;

    while (template.length > 0) {
      // Find the first occurance of any token type in the template
      foundToken = Twig.token.findStart(template);
      Twig.log.trace('Twig.tokenize: ', 'Found token: ', foundToken);

      if (foundToken.position === null) {
        // No more tokens -> add the rest of the template as a raw-type token
        tokens.push({
          type: Twig.token.type.raw,
          value: template
        });
        template = '';
      } else {
        // Add a raw type token for anything before the start of the token
        if (foundToken.position > 0) {
          tokens.push({
            type: Twig.token.type.raw,
            value: template.slice(0, Math.max(0, foundToken.position))
          });
        }

        template = template.slice(foundToken.position + foundToken.def.open.length);
        errorOffset += foundToken.position + foundToken.def.open.length; // Find the end of the token

        end = Twig.token.findEnd(template, foundToken.def, errorOffset);
        Twig.log.trace('Twig.tokenize: ', 'Token ends at ', end);
        tokens.push({
          type: foundToken.def.type,
          value: template.slice(0, Math.max(0, end)).trim()
        });

        if (template.slice(end + foundToken.def.close.length, end + foundToken.def.close.length + 1) === '\n') {
          switch (foundToken.def.type) {
            case 'logic_whitespace_pre':
            case 'logic_whitespace_post':
            case 'logic_whitespace_both':
            case 'logic':
              // Newlines directly after logic tokens are ignored
              end += 1;
              break;

            default:
              break;
          }
        }

        template = template.slice(end + foundToken.def.close.length); // Increment the position in the template

        errorOffset += end + foundToken.def.close.length;
      }
    }

    return tokens;
  };

  Twig.compile = function (tokens) {
    var self = this;

    try {
      // Output and intermediate stacks
      var output = [];
      var stack = []; // The tokens between open and close tags

      var intermediateOutput = [];
      var token = null;
      var logicToken = null;
      var unclosedToken = null; // Temporary previous token.

      var prevToken = null; // Temporary previous output.

      var prevOutput = null; // Temporary previous intermediate output.

      var prevIntermediateOutput = null; // The previous token's template

      var prevTemplate = null; // Token lookahead

      var nextToken = null; // The output token

      var tokOutput = null; // Logic Token values

      var type = null;
      var open = null;
      var next = null;

      var compileOutput = function compileOutput(token) {
        Twig.expression.compile.call(self, token);

        if (stack.length > 0) {
          intermediateOutput.push(token);
        } else {
          output.push(token);
        }
      };

      var compileLogic = function compileLogic(token) {
        // Compile the logic token
        logicToken = Twig.logic.compile.call(self, token);
        type = logicToken.type;
        open = Twig.logic.handler[type].open;
        next = Twig.logic.handler[type].next;
        Twig.log.trace('Twig.compile: ', 'Compiled logic token to ', logicToken, ' next is: ', next, ' open is : ', open); // Not a standalone token, check logic stack to see if this is expected

        if (open !== undefined && !open) {
          prevToken = stack.pop();
          prevTemplate = Twig.logic.handler[prevToken.type];

          if (!prevTemplate.next.includes(type)) {
            throw new Error(type + ' not expected after a ' + prevToken.type);
          }

          prevToken.output = prevToken.output || [];
          prevToken.output = prevToken.output.concat(intermediateOutput);
          intermediateOutput = [];
          tokOutput = {
            type: Twig.token.type.logic,
            token: prevToken
          };

          if (stack.length > 0) {
            intermediateOutput.push(tokOutput);
          } else {
            output.push(tokOutput);
          }
        } // This token requires additional tokens to complete the logic structure.


        if (next !== undefined && next.length > 0) {
          Twig.log.trace('Twig.compile: ', 'Pushing ', logicToken, ' to logic stack.');

          if (stack.length > 0) {
            // Put any currently held output into the output list of the logic operator
            // currently at the head of the stack before we push a new one on.
            prevToken = stack.pop();
            prevToken.output = prevToken.output || [];
            prevToken.output = prevToken.output.concat(intermediateOutput);
            stack.push(prevToken);
            intermediateOutput = [];
          } // Push the new logic token onto the logic stack


          stack.push(logicToken);
        } else if (open !== undefined && open) {
          tokOutput = {
            type: Twig.token.type.logic,
            token: logicToken
          }; // Standalone token (like {% set ... %}

          if (stack.length > 0) {
            intermediateOutput.push(tokOutput);
          } else {
            output.push(tokOutput);
          }
        }
      };

      while (tokens.length > 0) {
        token = tokens.shift();
        prevOutput = output[output.length - 1];
        prevIntermediateOutput = intermediateOutput[intermediateOutput.length - 1];
        nextToken = tokens[0];
        Twig.log.trace('Compiling token ', token);

        switch (token.type) {
          case Twig.token.type.raw:
            if (stack.length > 0) {
              intermediateOutput.push(token);
            } else {
              output.push(token);
            }

            break;

          case Twig.token.type.logic:
            compileLogic.call(self, token);
            break;
          // Do nothing, comments should be ignored

          case Twig.token.type.comment:
            break;

          case Twig.token.type.output:
            compileOutput.call(self, token);
            break;
          // Kill whitespace ahead and behind this token

          case Twig.token.type.logicWhitespacePre:
          case Twig.token.type.logicWhitespacePost:
          case Twig.token.type.logicWhitespaceBoth:
          case Twig.token.type.outputWhitespacePre:
          case Twig.token.type.outputWhitespacePost:
          case Twig.token.type.outputWhitespaceBoth:
            if (token.type !== Twig.token.type.outputWhitespacePost && token.type !== Twig.token.type.logicWhitespacePost) {
              if (prevOutput) {
                // If the previous output is raw, pop it off
                if (prevOutput.type === Twig.token.type.raw) {
                  output.pop();
                  prevOutput.value = prevOutput.value.trimEnd(); // Repush the previous output

                  output.push(prevOutput);
                }
              }

              if (prevIntermediateOutput) {
                // If the previous intermediate output is raw, pop it off
                if (prevIntermediateOutput.type === Twig.token.type.raw) {
                  intermediateOutput.pop();
                  prevIntermediateOutput.value = prevIntermediateOutput.value.trimEnd(); // Repush the previous intermediate output

                  intermediateOutput.push(prevIntermediateOutput);
                }
              }
            } // Compile this token


            switch (token.type) {
              case Twig.token.type.outputWhitespacePre:
              case Twig.token.type.outputWhitespacePost:
              case Twig.token.type.outputWhitespaceBoth:
                compileOutput.call(self, token);
                break;

              case Twig.token.type.logicWhitespacePre:
              case Twig.token.type.logicWhitespacePost:
              case Twig.token.type.logicWhitespaceBoth:
                compileLogic.call(self, token);
                break;

              default:
                break;
            }

            if (token.type !== Twig.token.type.outputWhitespacePre && token.type !== Twig.token.type.logicWhitespacePre) {
              if (nextToken) {
                // If the next token is raw, shift it out
                if (nextToken.type === Twig.token.type.raw) {
                  tokens.shift();
                  nextToken.value = nextToken.value.trimStart(); // Unshift the next token

                  tokens.unshift(nextToken);
                }
              }
            }

            break;

          default:
            break;
        }

        Twig.log.trace('Twig.compile: ', ' Output: ', output, ' Logic Stack: ', stack, ' Pending Output: ', intermediateOutput);
      } // Verify that there are no logic tokens left in the stack.


      if (stack.length > 0) {
        unclosedToken = stack.pop();
        throw new Error('Unable to find an end tag for ' + unclosedToken.type + ', expecting one of ' + unclosedToken.next);
      }

      return output;
    } catch (error) {
      if (self.options.rethrow) {
        if (error.type === 'TwigException' && !error.file) {
          error.file = self.id;
        }

        throw error;
      } else {
        Twig.log.error('Error compiling twig template ' + self.id + ': ');

        if (error.stack) {
          Twig.log.error(error.stack);
        } else {
          Twig.log.error(error.toString());
        }
      }
    }
  };

  function handleException(state, ex) {
    if (state.template.options.rethrow) {
      if (typeof ex === 'string') {
        ex = new Twig.Error(ex);
      }

      if (ex.type === 'TwigException' && !ex.file) {
        ex.file = state.template.id;
      }

      throw ex;
    } else {
      Twig.log.error('Error parsing twig template ' + state.template.id + ': ');

      if (ex.stack) {
        Twig.log.error(ex.stack);
      } else {
        Twig.log.error(ex.toString());
      }

      if (Twig.debug) {
        return ex.toString();
      }
    }
  }
  /**
   * Tokenize and compile a string template.
   *
   * @param {string} data The template.
   *
   * @return {Array} The compiled tokens.
   */


  Twig.prepare = function (data) {
    // Tokenize
    Twig.log.debug('Twig.prepare: ', 'Tokenizing ', data);
    var rawTokens = Twig.tokenize.call(this, data); // Compile

    Twig.log.debug('Twig.prepare: ', 'Compiling ', rawTokens);
    var tokens = Twig.compile.call(this, rawTokens);
    Twig.log.debug('Twig.prepare: ', 'Compiled ', tokens);
    return tokens;
  };
  /**
   * Join the output token's stack and escape it if needed
   *
   * @param {Array} Output token's stack
   *
   * @return {string|String} Autoescaped output
   */


  Twig.output = function (output) {
    var autoescape = this.options.autoescape;

    if (!autoescape) {
      return output.join('');
    }

    var strategy = typeof autoescape === 'string' ? autoescape : 'html';
    var escapedOutput = output.map(function (str) {
      if (str && str.twigMarkup !== true && str.twigMarkup !== strategy && !(strategy === 'html' && str.twigMarkup === 'html_attr')) {
        str = Twig.filters.escape(str, [strategy]);
      }

      return str;
    });

    if (escapedOutput.length === 0) {
      return '';
    }

    var joinedOutput = escapedOutput.join('');

    if (joinedOutput.length === 0) {
      return '';
    }

    return new Twig.Markup(joinedOutput, true);
  }; // Namespace for template storage and retrieval


  Twig.Templates = {
    /**
     * Registered template loaders - use Twig.Templates.registerLoader to add supported loaders
     * @type {Object}
     */
    loaders: {},

    /**
     * Registered template parsers - use Twig.Templates.registerParser to add supported parsers
     * @type {Object}
     */
    parsers: {},

    /**
     * Cached / loaded templates
     * @type {Object}
     */
    registry: {}
  };
  /**
   * Is this id valid for a twig template?
   *
   * @param {string} id The ID to check.
   *
   * @throws {Twig.Error} If the ID is invalid or used.
   * @return {boolean} True if the ID is valid.
   */

  Twig.validateId = function (id) {
    if (id === 'prototype') {
      throw new Twig.Error(id + ' is not a valid twig identifier');
    } else if (Twig.cache && Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
      throw new Twig.Error('There is already a template with the ID ' + id);
    }

    return true;
  };
  /**
   * Register a template loader
   *
   * @example
   * Twig.extend(function (Twig) {
   *    Twig.Templates.registerLoader('custom_loader', function (location, params, callback, errorCallback) {
   *        // ... load the template ...
   *        params.data = loadedTemplateData;
   *        // create and return the template
   *        var template = new Twig.Template(params);
   *        if (typeof callback === 'function') {
   *            callback(template);
   *        }
   *        return template;
   *    });
   * });
   *
   * @param {String} methodName The method this loader is intended for (ajax, fs)
   * @param {Function} func The function to execute when loading the template
   * @param {Object|undefined} scope Optional scope parameter to bind func to
   *
   * @throws Twig.Error
   *
   * @return {void}
   */


  Twig.Templates.registerLoader = function (methodName, func, scope) {
    if (typeof func !== 'function') {
      throw new Twig.Error('Unable to add loader for ' + methodName + ': Invalid function reference given.');
    }

    if (scope) {
      func = func.bind(scope);
    }

    this.loaders[methodName] = func;
  };
  /**
   * Remove a registered loader
   *
   * @param {String} methodName The method name for the loader you wish to remove
   *
   * @return {void}
   */


  Twig.Templates.unRegisterLoader = function (methodName) {
    if (this.isRegisteredLoader(methodName)) {
      delete this.loaders[methodName];
    }
  };
  /**
   * See if a loader is registered by its method name
   *
   * @param {String} methodName The name of the loader you are looking for
   *
   * @return {boolean}
   */


  Twig.Templates.isRegisteredLoader = function (methodName) {
    return Object.hasOwnProperty.call(this.loaders, methodName);
  };
  /**
   * Register a template parser
   *
   * @example
   * Twig.extend(function (Twig) {
   *    Twig.Templates.registerParser('custom_parser', function (params) {
   *        // this template source can be accessed in params.data
   *        var template = params.data
   *
   *        // ... custom process that modifies the template
   *
   *        // return the parsed template
   *        return template;
   *    });
   * });
   *
   * @param {String} methodName The method this parser is intended for (twig, source)
   * @param {Function} func The function to execute when parsing the template
   * @param {Object|undefined} scope Optional scope parameter to bind func to
   *
   * @throws Twig.Error
   *
   * @return {void}
   */


  Twig.Templates.registerParser = function (methodName, func, scope) {
    if (typeof func !== 'function') {
      throw new Twig.Error('Unable to add parser for ' + methodName + ': Invalid function regerence given.');
    }

    if (scope) {
      func = func.bind(scope);
    }

    this.parsers[methodName] = func;
  };
  /**
   * Remove a registered parser
   *
   * @param {String} methodName The method name for the parser you wish to remove
   *
   * @return {void}
   */


  Twig.Templates.unRegisterParser = function (methodName) {
    if (this.isRegisteredParser(methodName)) {
      delete this.parsers[methodName];
    }
  };
  /**
   * See if a parser is registered by its method name
   *
   * @param {String} methodName The name of the parser you are looking for
   *
   * @return {boolean}
   */


  Twig.Templates.isRegisteredParser = function (methodName) {
    return Object.hasOwnProperty.call(this.parsers, methodName);
  };
  /**
   * Save a template object to the store.
   *
   * @param {Twig.Template} template   The twig.js template to store.
   */


  Twig.Templates.save = function (template) {
    if (template.id === undefined) {
      throw new Twig.Error('Unable to save template with no id');
    }

    Twig.Templates.registry[template.id] = template;
  };
  /**
   * Load a previously saved template from the store.
   *
   * @param {string} id   The ID of the template to load.
   *
   * @return {Twig.Template} A twig.js template stored with the provided ID.
   */


  Twig.Templates.load = function (id) {
    if (!Object.hasOwnProperty.call(Twig.Templates.registry, id)) {
      return null;
    }

    return Twig.Templates.registry[id];
  };
  /**
   * Load a template from a remote location using AJAX and saves in with the given ID.
   *
   * Available parameters:
   *
   *      async:       Should the HTTP request be performed asynchronously.
   *                      Defaults to true.
   *      method:      What method should be used to load the template
   *                      (fs or ajax)
   *      parser:      What method should be used to parse the template
   *                      (twig or source)
   *      precompiled: Has the template already been compiled.
   *
   * @param {string} location  The remote URL to load as a template.
   * @param {Object} params The template parameters.
   * @param {function} callback  A callback triggered when the template finishes loading.
   * @param {function} errorCallback  A callback triggered if an error occurs loading the template.
   *
   *
   */


  Twig.Templates.loadRemote = function (location, params, callback, errorCallback) {
    // Default to the URL so the template is cached.
    var id = typeof params.id === 'undefined' ? location : params.id;
    var cached = Twig.Templates.registry[id]; // Check for existing template

    if (Twig.cache && typeof cached !== 'undefined') {
      // A template is already saved with the given id.
      if (typeof callback === 'function') {
        callback(cached);
      } // TODO: if async, return deferred promise


      return cached;
    } // If the parser name hasn't been set, default it to twig


    params.parser = params.parser || 'twig';
    params.id = id; // Default to async

    if (typeof params.async === 'undefined') {
      params.async = true;
    } // Assume 'fs' if the loader is not defined


    var loader = this.loaders[params.method] || this.loaders.fs;
    return loader.call(this, location, params, callback, errorCallback);
  }; // Determine object type


  function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
  }
  /**
   * A wrapper for template blocks.
   *
   * @param  {Twig.Template} The template that the block was originally defined in.
   * @param  {Object} The compiled block token.
   */


  Twig.Block = function (template, token) {
    this.template = template;
    this.token = token;
  };
  /**
   * Render the block using a specific parse state and context.
   *
   * @param  {Twig.ParseState} parseState
   * @param  {Object} context
   *
   * @return {Promise}
   */


  Twig.Block.prototype.render = function (parseState, context) {
    var originalTemplate = parseState.template;
    var promise;
    parseState.template = this.template;

    if (this.token.expression) {
      promise = Twig.expression.parseAsync.call(parseState, this.token.output, context);
    } else {
      promise = parseState.parseAsync(this.token.output, context);
    }

    return promise.then(function (value) {
      return Twig.expression.parseAsync.call(parseState, {
        type: Twig.expression.type.string,
        value: value
      }, context);
    }).then(function (output) {
      parseState.template = originalTemplate;
      return output;
    });
  };
  /**
   * Holds the state needed to parse a template.
   *
   * @param {Twig.Template} template The template that the tokens being parsed are associated with.
   * @param {Object} blockOverrides Any blocks that should override those defined in the associated template.
   */


  Twig.ParseState = function (template, blockOverrides) {
    this.renderedBlocks = {};
    this.overrideBlocks = blockOverrides === undefined ? {} : blockOverrides;
    this.context = {};
    this.macros = {};
    this.nestingStack = [];
    this.template = template;
  };
  /**
   * Get a block by its name, resolving in the following order:
   *     - override blocks specified when initialized (except when excluded)
   *     - blocks resolved from the associated template
   *     - blocks resolved from the parent template when extending
   *
   * @param {String} name The name of the block to return.
   * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the overrides and associated template, will not skip by default.
   *
   * @return {Twig.Block|undefined}
   */


  Twig.ParseState.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
    var block;

    if (checkOnlyInheritedBlocks !== true) {
      // Blocks specified when initialized
      block = this.overrideBlocks[name];
    }

    if (block === undefined) {
      // Block defined by the associated template
      block = this.template.getBlock(name, checkOnlyInheritedBlocks);
    }

    if (block === undefined && this.template.parentTemplate !== null) {
      // Block defined in the parent template when extending
      block = this.template.parentTemplate.getBlock(name);
    }

    return block;
  };
  /**
   * Get all the available blocks, resolving in the following order:
   *     - override blocks specified when initialized
   *     - blocks resolved from the associated template
   *     - blocks resolved from the parent template when extending (except when excluded)
   *
   * @param {Boolean} includeParentBlocks Whether to get blocks from the parent template when extending, will always do so by default.
   *
   * @return {Object}
   */


  Twig.ParseState.prototype.getBlocks = function (includeParentBlocks) {
    var blocks = {};

    if (includeParentBlocks !== false && this.template.parentTemplate !== null && // Prevent infinite loop
    this.template.parentTemplate !== this.template) {
      // Blocks from the parent template when extending
      blocks = this.template.parentTemplate.getBlocks();
    }

    blocks = _objectSpread(_objectSpread(_objectSpread({}, blocks), this.template.getBlocks()), this.overrideBlocks);
    return blocks;
  };
  /**
   * Get the closest token of a specific type to the current nest level.
   *
   * @param  {String} type  The logic token type
   *
   * @return {Object}
   */


  Twig.ParseState.prototype.getNestingStackToken = function (type) {
    var matchingToken;
    this.nestingStack.forEach(function (token) {
      if (matchingToken === undefined && token.type === type) {
        matchingToken = token;
      }
    });
    return matchingToken;
  };
  /**
   * Parse a set of tokens using the current state.
   *
   * @param {Array} tokens The compiled tokens.
   * @param {Object} context The context to set the state to while parsing.
   * @param {Boolean} allowAsync Whether to parse asynchronously.
   * @param {Object} blocks Blocks that should override any defined while parsing.
   *
   * @return {String} The rendered tokens.
   *
   */


  Twig.ParseState.prototype.parse = function (tokens, context, allowAsync) {
    var state = this;
    var output = []; // Store any error that might be thrown by the promise chain.

    var err = null; // This will be set to isAsync if template renders synchronously

    var isAsync = true;
    var promise = null; // Track logic chains

    var chain = true;

    if (context) {
      state.context = context;
    }
    /*
     * Extracted into it's own function such that the function
     * does not get recreated over and over again in the `forEach`
     * loop below. This method can be compiled and optimized
     * a single time instead of being recreated on each iteration.
     */


    function outputPush(o) {
      output.push(o);
    }

    function parseTokenLogic(logic) {
      if (typeof logic.chain !== 'undefined') {
        chain = logic.chain;
      }

      if (typeof logic.context !== 'undefined') {
        state.context = logic.context;
      }

      if (typeof logic.output !== 'undefined') {
        output.push(logic.output);
      }
    }

    promise = Twig.async.forEach(tokens, function (token) {
      Twig.log.debug('Twig.ParseState.parse: ', 'Parsing token: ', token);

      switch (token.type) {
        case Twig.token.type.raw:
          output.push(Twig.filters.raw(token.value));
          break;

        case Twig.token.type.logic:
          return Twig.logic.parseAsync.call(state, token.token
          /* logicToken */
          , state.context, chain).then(parseTokenLogic);

        case Twig.token.type.comment:
          // Do nothing, comments should be ignored
          break;
        // Fall through whitespace to output

        case Twig.token.type.outputWhitespacePre:
        case Twig.token.type.outputWhitespacePost:
        case Twig.token.type.outputWhitespaceBoth:
        case Twig.token.type.output:
          Twig.log.debug('Twig.ParseState.parse: ', 'Output token: ', token.stack); // Parse the given expression in the given context

          return Twig.expression.parseAsync.call(state, token.stack, state.context).then(outputPush);

        default:
          break;
      }
    }).then(function () {
      output = Twig.output.call(state.template, output);
      isAsync = false;
      return output;
    })["catch"](function (error) {
      if (allowAsync) {
        handleException(state, error);
      }

      err = error;
    }); // If `allowAsync` we will always return a promise since we do not
    // know in advance if we are going to run asynchronously or not.

    if (allowAsync) {
      return promise;
    } // Handle errors here if we fail synchronously.


    if (err !== null) {
      return handleException(state, err);
    } // If `allowAsync` is not true we should not allow the user
    // to use asynchronous functions or filters.


    if (isAsync) {
      throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
    }

    return output;
  };
  /**
   * Create a new twig.js template.
   *
   * Parameters: {
   *      data:   The template, either pre-compiled tokens or a string template
   *      id:     The name of this template
   * }
   *
   * @param {Object} params The template parameters.
   */


  Twig.Template = function (params) {
    var data = params.data,
        id = params.id,
        base = params.base,
        path = params.path,
        url = params.url,
        name = params.name,
        method = params.method,
        options = params.options; // # What is stored in a Twig.Template
    //
    // The Twig Template hold several chucks of data.
    //
    //     {
    //          id:     The token ID (if any)
    //          tokens: The list of tokens that makes up this template.
    //          base:   The base template (if any)
    //            options:  {
    //                Compiler/parser options
    //
    //                strict_variables: true/false
    //                    Should missing variable/keys emit an error message. If false, they default to null.
    //            }
    //     }
    //

    this.base = base;
    this.blocks = {
      defined: {},
      imported: {}
    };
    this.id = id;
    this.method = method;
    this.name = name;
    this.options = options;
    this.parentTemplate = null;
    this.path = path;
    this.url = url;

    if (is('String', data)) {
      this.tokens = Twig.prepare.call(this, data);
    } else {
      this.tokens = data;
    }

    if (id !== undefined) {
      Twig.Templates.save(this);
    }
  };
  /**
   * Get a block by its name, resolving in the following order:
   *     - blocks defined in the template itself
   *     - blocks imported from another template
   *
   * @param {String} name The name of the block to return.
   * @param {Boolean} checkOnlyInheritedBlocks Whether to skip checking the blocks defined in the template itself, will not skip by default.
   *
   * @return {Twig.Block|undefined}
   */


  Twig.Template.prototype.getBlock = function (name, checkOnlyInheritedBlocks) {
    var checkImports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var block;

    if (checkOnlyInheritedBlocks !== true) {
      block = this.blocks.defined[name];
    }

    if (checkImports && block === undefined) {
      block = this.blocks.imported[name];
    }

    if (block === undefined && this.parentTemplate !== null) {
      /**
       * Block defined in the parent template when extending.
       * This recursion is useful to inherit from ascendants.
       * But take care of not considering ascendants' {% use %}
       */
      block = this.parentTemplate.getBlock(name, checkOnlyInheritedBlocks, checkImports = false);
    }

    return block;
  };
  /**
   * Get all the available blocks, resolving in the following order:
   *     - blocks defined in the template itself
   *     - blocks imported from other templates
   *
   * @return {Object}
   */


  Twig.Template.prototype.getBlocks = function () {
    var blocks = {};
    blocks = _objectSpread(_objectSpread(_objectSpread({}, blocks), this.blocks.imported), this.blocks.defined);
    return blocks;
  };

  Twig.Template.prototype.render = function (context, params, allowAsync) {
    var template = this;
    params = params || {};
    return Twig.async.potentiallyAsync(template, allowAsync, function () {
      var state = new Twig.ParseState(template, params.blocks);
      return state.parseAsync(template.tokens, context).then(function (output) {
        var parentTemplate;
        var url;

        if (template.parentTemplate !== null) {
          // This template extends another template
          if (template.options.allowInlineIncludes) {
            // The template is provided inline
            parentTemplate = Twig.Templates.load(template.parentTemplate);

            if (parentTemplate) {
              parentTemplate.options = template.options;
            }
          } // Check for the template file via include


          if (!parentTemplate) {
            url = Twig.path.parsePath(template, template.parentTemplate);
            parentTemplate = Twig.Templates.loadRemote(url, {
              method: template.getLoaderMethod(),
              base: template.base,
              async: false,
              id: url,
              options: template.options
            });
          }

          template.parentTemplate = parentTemplate;
          return template.parentTemplate.renderAsync(state.context, {
            blocks: state.getBlocks(false),
            isInclude: true
          });
        }

        if (params.isInclude === true) {
          return output;
        }

        return output.valueOf();
      });
    });
  };

  Twig.Template.prototype.importFile = function (file) {
    var url = null;
    var subTemplate;

    if (!this.url && this.options.allowInlineIncludes) {
      file = this.path ? Twig.path.parsePath(this, file) : file;
      subTemplate = Twig.Templates.load(file);

      if (!subTemplate) {
        subTemplate = Twig.Templates.loadRemote(url, {
          id: file,
          method: this.getLoaderMethod(),
          async: false,
          path: file,
          options: this.options
        });

        if (!subTemplate) {
          throw new Twig.Error('Unable to find the template ' + file);
        }
      }

      subTemplate.options = this.options;
      return subTemplate;
    }

    url = Twig.path.parsePath(this, file); // Load blocks from an external file

    subTemplate = Twig.Templates.loadRemote(url, {
      method: this.getLoaderMethod(),
      base: this.base,
      async: false,
      options: this.options,
      id: url
    });
    return subTemplate;
  };

  Twig.Template.prototype.getLoaderMethod = function () {
    if (this.path) {
      return 'fs';
    }

    if (this.url) {
      return 'ajax';
    }

    return this.method || 'fs';
  };

  Twig.Template.prototype.compile = function (options) {
    // Compile the template into raw JS
    return Twig.compiler.compile(this, options);
  };
  /**
   * Create safe output
   *
   * @param {string} Content safe to output
   *
   * @return {String} Content wrapped into a String
   */


  Twig.Markup = function (content, strategy) {
    if (typeof content !== 'string') {
      return content;
    }
    /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */


    var output = new String(content);
    /* eslint-enable */

    output.twigMarkup = typeof strategy === 'undefined' ? true : strategy;
    return output;
  };

  return Twig;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.compiler.js
//
// This file handles compiling templates into JS
module.exports = function (Twig) {
  /**
   * Namespace for compilation.
   */
  Twig.compiler = {
    module: {}
  }; // Compile a Twig Template to output.

  Twig.compiler.compile = function (template, options) {
    // Get tokens
    var tokens = JSON.stringify(template.tokens);
    var id = template.id;
    var output = null;

    if (options.module) {
      if (Twig.compiler.module[options.module] === undefined) {
        throw new Twig.Error('Unable to find module type ' + options.module);
      }

      output = Twig.compiler.module[options.module](id, tokens, options.twig);
    } else {
      output = Twig.compiler.wrap(id, tokens);
    }

    return output;
  };

  Twig.compiler.module = {
    amd: function amd(id, tokens, pathToTwig) {
      return 'define(["' + pathToTwig + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + '\n\treturn templates;\n});';
    },
    node: function node(id, tokens) {
      return 'var twig = require("twig").twig;\nexports.template = ' + Twig.compiler.wrap(id, tokens);
    },
    cjs2: function cjs2(id, tokens, pathToTwig) {
      return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + Twig.compiler.wrap(id, tokens) + '\n});';
    }
  };

  Twig.compiler.wrap = function (id, tokens) {
    return 'twig({id:"' + id.replace('"', '\\"') + '", data:' + tokens + ', precompiled: true});\n';
  };

  return Twig;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(12));

// ## twig.expression.js
//
// This file handles tokenizing, compiling and parsing expressions.
module.exports = function (Twig) {
  'use strict';

  function parseParams(state, params, context) {
    if (params) {
      return Twig.expression.parseAsync.call(state, params, context);
    }

    return Twig.Promise.resolve(false);
  }
  /**
   * Namespace for expression handling.
   */


  Twig.expression = {};

  __webpack_require__(17)(Twig);
  /**
   * Reserved word that can't be used as variable names.
   */


  Twig.expression.reservedWords = ['true', 'false', 'null', 'TRUE', 'FALSE', 'NULL', '_context', 'and', 'b-and', 'or', 'b-or', 'b-xor', 'in', 'not in', 'if', 'matches', 'starts', 'ends', 'with'];
  /**
   * The type of tokens used in expressions.
   */

  Twig.expression.type = {
    comma: 'Twig.expression.type.comma',
    operator: {
      unary: 'Twig.expression.type.operator.unary',
      binary: 'Twig.expression.type.operator.binary'
    },
    string: 'Twig.expression.type.string',
    bool: 'Twig.expression.type.bool',
    slice: 'Twig.expression.type.slice',
    array: {
      start: 'Twig.expression.type.array.start',
      end: 'Twig.expression.type.array.end'
    },
    object: {
      start: 'Twig.expression.type.object.start',
      end: 'Twig.expression.type.object.end'
    },
    parameter: {
      start: 'Twig.expression.type.parameter.start',
      end: 'Twig.expression.type.parameter.end'
    },
    subexpression: {
      start: 'Twig.expression.type.subexpression.start',
      end: 'Twig.expression.type.subexpression.end'
    },
    key: {
      period: 'Twig.expression.type.key.period',
      brackets: 'Twig.expression.type.key.brackets'
    },
    filter: 'Twig.expression.type.filter',
    _function: 'Twig.expression.type._function',
    variable: 'Twig.expression.type.variable',
    number: 'Twig.expression.type.number',
    _null: 'Twig.expression.type.null',
    context: 'Twig.expression.type.context',
    test: 'Twig.expression.type.test'
  };
  Twig.expression.set = {
    // What can follow an expression (in general)
    operations: [Twig.expression.type.filter, Twig.expression.type.operator.unary, Twig.expression.type.operator.binary, Twig.expression.type.array.end, Twig.expression.type.object.end, Twig.expression.type.parameter.end, Twig.expression.type.subexpression.end, Twig.expression.type.comma, Twig.expression.type.test],
    expressions: [Twig.expression.type._function, Twig.expression.type.bool, Twig.expression.type.string, Twig.expression.type.variable, Twig.expression.type.number, Twig.expression.type._null, Twig.expression.type.context, Twig.expression.type.parameter.start, Twig.expression.type.array.start, Twig.expression.type.object.start, Twig.expression.type.subexpression.start, Twig.expression.type.operator.unary]
  }; // Most expressions allow a '.' or '[' after them, so we provide a convenience set

  Twig.expression.set.operationsExtended = Twig.expression.set.operations.concat([Twig.expression.type.key.period, Twig.expression.type.key.brackets, Twig.expression.type.slice]); // Some commonly used compile and parse functions.

  Twig.expression.fn = {
    compile: {
      push: function push(token, stack, output) {
        output.push(token);
      },
      pushBoth: function pushBoth(token, stack, output) {
        output.push(token);
        stack.push(token);
      }
    },
    parse: {
      push: function push(token, stack) {
        stack.push(token);
      },
      pushValue: function pushValue(token, stack) {
        stack.push(token.value);
      }
    }
  }; // The regular expressions and compile/parse logic used to match tokens in expressions.
  //
  // Properties:
  //
  //      type:  The type of expression this matches
  //
  //      regex: One or more regular expressions that matche the format of the token.
  //
  //      next:  Valid tokens that can occur next in the expression.
  //
  // Functions:
  //
  //      compile: A function that compiles the raw regular expression match into a token.
  //
  //      parse:   A function that parses the compiled token into output.
  //

  Twig.expression.definitions = [{
    type: Twig.expression.type.test,
    regex: /^is\s+(not)?\s*([a-zA-Z_]\w*(\s?as)?)/,
    next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      token.filter = token.match[2];
      token.modifier = token.match[1];
      delete token.match;
      delete token.value;
      output.push(token);
    },
    parse: function parse(token, stack, context) {
      var value = stack.pop();
      var state = this;
      return parseParams(state, token.params, context).then(function (params) {
        var result = Twig.test(token.filter, value, params);

        if (token.modifier === 'not') {
          stack.push(!result);
        } else {
          stack.push(result);
        }
      });
    }
  }, {
    type: Twig.expression.type.comma,
    // Match a comma
    regex: /^,/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
    compile: function compile(token, stack, output) {
      var i = stack.length - 1;
      var stackToken;
      delete token.match;
      delete token.value; // Pop tokens off the stack until the start of the object

      for (; i >= 0; i--) {
        stackToken = stack.pop();

        if (stackToken.type === Twig.expression.type.object.start || stackToken.type === Twig.expression.type.parameter.start || stackToken.type === Twig.expression.type.array.start) {
          stack.push(stackToken);
          break;
        }

        output.push(stackToken);
      }

      output.push(token);
    }
  }, {
    /**
     * Match a number (integer or decimal)
     */
    type: Twig.expression.type.number,
    // Match a number
    regex: /^-?\d+(\.\d+)?/,
    next: Twig.expression.set.operations,
    compile: function compile(token, stack, output) {
      token.value = Number(token.value);
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }, {
    type: Twig.expression.type.operator.binary,
    // Match any of ??, ?:, +, *, /, -, %, ~, <, <=, >, >=, !=, ==, **, ?, :, and, b-and, or, b-or, b-xor, in, not in
    // and, or, in, not in, matches, starts with, ends with can be followed by a space or parenthesis
    regex: /(^\?\?|^\?:|^(b-and)|^(b-or)|^(b-xor)|^[+\-~%?]|^[:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[(|\s+]|^(or)[(|\s+]|^(in)[(|\s+]|^(not in)[(|\s+]|^(matches)|^(starts with)|^(ends with)|^\.\.)/,
    next: Twig.expression.set.expressions,
    transform: function transform(match, tokens) {
      switch (match[0]) {
        case 'and(':
        case 'or(':
        case 'in(':
        case 'not in(':
          // Strip off the ( if it exists
          tokens[tokens.length - 1].value = match[2];
          return match[0];

        default:
          return '';
      }
    },
    compile: function compile(token, stack, output) {
      delete token.match;
      token.value = token.value.trim();
      var value = token.value;
      var operator = Twig.expression.operator.lookup(value, token);
      Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

      while (stack.length > 0 && (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precidence >= stack[stack.length - 1].precidence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precidence > stack[stack.length - 1].precidence)) {
        var temp = stack.pop();
        output.push(temp);
      }

      if (value === ':') {
        // Check if this is a ternary or object key being set
        if (stack[stack.length - 1] && stack[stack.length - 1].value === '?') {// Continue as normal for a ternary
        } else {
          // This is not a ternary so we push the token to the output where it can be handled
          //   when the assocated object is closed.
          var keyToken = output.pop();

          if (keyToken.type === Twig.expression.type.string || keyToken.type === Twig.expression.type.variable) {
            token.key = keyToken.value;
          } else if (keyToken.type === Twig.expression.type.number) {
            // Convert integer keys into string keys
            token.key = keyToken.value.toString();
          } else if (keyToken.expression && (keyToken.type === Twig.expression.type.parameter.end || keyToken.type === Twig.expression.type.subexpression.end)) {
            token.params = keyToken.params;
          } else {
            throw new Twig.Error('Unexpected value before \':\' of ' + keyToken.type + ' = ' + keyToken.value);
          }

          output.push(token);
        }
      } else {
        stack.push(operator);
      }
    },
    parse: function parse(token, stack, context) {
      var state = this;

      if (token.key) {
        // Handle ternary ':' operator
        stack.push(token);
      } else if (token.params) {
        // Handle "{(expression):value}"
        return Twig.expression.parseAsync.call(state, token.params, context).then(function (key) {
          token.key = key;
          stack.push(token); // If we're in a loop, we might need token.params later, especially in this form of "(expression):value"

          if (!context.loop) {
            delete token.params;
          }
        });
      } else {
        Twig.expression.operator.parse(token.value, stack);
      }
    }
  }, {
    type: Twig.expression.type.operator.unary,
    // Match any of not
    regex: /(^not\s+)/,
    next: Twig.expression.set.expressions,
    compile: function compile(token, stack, output) {
      delete token.match;
      token.value = token.value.trim();
      var value = token.value;
      var operator = Twig.expression.operator.lookup(value, token);
      Twig.log.trace('Twig.expression.compile: ', 'Operator: ', operator, ' from ', value);

      while (stack.length > 0 && (stack[stack.length - 1].type === Twig.expression.type.operator.unary || stack[stack.length - 1].type === Twig.expression.type.operator.binary) && (operator.associativity === Twig.expression.operator.leftToRight && operator.precidence >= stack[stack.length - 1].precidence || operator.associativity === Twig.expression.operator.rightToLeft && operator.precidence > stack[stack.length - 1].precidence)) {
        var temp = stack.pop();
        output.push(temp);
      }

      stack.push(operator);
    },
    parse: function parse(token, stack) {
      Twig.expression.operator.parse(token.value, stack);
    }
  }, {
    /**
     * Match a string. This is anything between a pair of single or double quotes.
     */
    type: Twig.expression.type.string,
    // See: http://blog.stevenlevithan.com/archives/match-quoted-string
    regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var value = token.value;
      delete token.match; // Remove the quotes from the string

      if (value.slice(0, 1) === '"') {
        value = value.replace('\\"', '"');
      } else {
        value = value.replace('\\\'', '\'');
      }

      token.value = value.slice(1, -1).replace(/\\n/g, '\n').replace(/\\r/g, '\r');
      Twig.log.trace('Twig.expression.compile: ', 'String value: ', token.value);
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }, {
    /**
     * Match a subexpression set start.
     */
    type: Twig.expression.type.subexpression.start,
    regex: /^\(/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.subexpression.end]),
    compile: function compile(token, stack, output) {
      token.value = '(';
      output.push(token);
      stack.push(token);
    },
    parse: Twig.expression.fn.parse.push
  }, {
    /**
     * Match a subexpression set end.
     */
    type: Twig.expression.type.subexpression.end,
    regex: /^\)/,
    next: Twig.expression.set.operationsExtended,
    validate: function validate(match, tokens) {
      // Iterate back through previous tokens to ensure we follow a subexpression start
      var i = tokens.length - 1;
      var foundSubexpressionStart = false;
      var nextSubexpressionStartInvalid = false;
      var unclosedParameterCount = 0;

      while (!foundSubexpressionStart && i >= 0) {
        var token = tokens[i];
        foundSubexpressionStart = token.type === Twig.expression.type.subexpression.start; // If we have previously found a subexpression end, then this subexpression start is the start of
        // that subexpression, not the subexpression we are searching for

        if (foundSubexpressionStart && nextSubexpressionStartInvalid) {
          nextSubexpressionStartInvalid = false;
          foundSubexpressionStart = false;
        } // Count parameter tokens to ensure we dont return truthy for a parameter opener


        if (token.type === Twig.expression.type.parameter.start) {
          unclosedParameterCount++;
        } else if (token.type === Twig.expression.type.parameter.end) {
          unclosedParameterCount--;
        } else if (token.type === Twig.expression.type.subexpression.end) {
          nextSubexpressionStartInvalid = true;
        }

        i--;
      } // If we found unclosed parameters, return false
      // If we didnt find subexpression start, return false
      // Otherwise return true


      return foundSubexpressionStart && unclosedParameterCount === 0;
    },
    compile: function compile(token, stack, output) {
      // This is basically a copy of parameter end compilation
      var stackToken;
      var endToken = token;
      stackToken = stack.pop();

      while (stack.length > 0 && stackToken.type !== Twig.expression.type.subexpression.start) {
        output.push(stackToken);
        stackToken = stack.pop();
      } // Move contents of parens into preceding filter


      var paramStack = [];

      while (token.type !== Twig.expression.type.subexpression.start) {
        // Add token to arguments stack
        paramStack.unshift(token);
        token = output.pop();
      }

      paramStack.unshift(token); // If the token at the top of the *stack* is a function token, pop it onto the output queue.
      // Get the token preceding the parameters

      stackToken = stack[stack.length - 1];

      if (stackToken === undefined || stackToken.type !== Twig.expression.type._function && stackToken.type !== Twig.expression.type.filter && stackToken.type !== Twig.expression.type.test && stackToken.type !== Twig.expression.type.key.brackets) {
        endToken.expression = true; // Remove start and end token from stack

        paramStack.pop();
        paramStack.shift();
        endToken.params = paramStack;
        output.push(endToken);
      } else {
        // This should never be hit
        endToken.expression = false;
        stackToken.params = paramStack;
      }
    },
    parse: function parse(token, stack, context) {
      var state = this;

      if (token.expression) {
        return Twig.expression.parseAsync.call(state, token.params, context).then(function (value) {
          stack.push(value);
        });
      }

      throw new Twig.Error('Unexpected subexpression end when token is not marked as an expression');
    }
  }, {
    /**
     * Match a parameter set start.
     */
    type: Twig.expression.type.parameter.start,
    regex: /^\(/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
    validate: function validate(match, tokens) {
      var lastToken = tokens[tokens.length - 1]; // We can't use the regex to test if we follow a space because expression is trimmed

      return lastToken && !Twig.expression.reservedWords.includes(lastToken.value.trim());
    },
    compile: Twig.expression.fn.compile.pushBoth,
    parse: Twig.expression.fn.parse.push
  }, {
    /**
     * Match a parameter set end.
     */
    type: Twig.expression.type.parameter.end,
    regex: /^\)/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var stackToken;
      var endToken = token;
      stackToken = stack.pop();

      while (stack.length > 0 && stackToken.type !== Twig.expression.type.parameter.start) {
        output.push(stackToken);
        stackToken = stack.pop();
      } // Move contents of parens into preceding filter


      var paramStack = [];

      while (token.type !== Twig.expression.type.parameter.start) {
        // Add token to arguments stack
        paramStack.unshift(token);
        token = output.pop();
      }

      paramStack.unshift(token); // Get the token preceding the parameters

      token = output[output.length - 1];

      if (token === undefined || token.type !== Twig.expression.type._function && token.type !== Twig.expression.type.filter && token.type !== Twig.expression.type.test && token.type !== Twig.expression.type.key.brackets) {
        endToken.expression = true; // Remove start and end token from stack

        paramStack.pop();
        paramStack.shift();
        endToken.params = paramStack;
        output.push(endToken);
      } else {
        endToken.expression = false;
        token.params = paramStack;
      }
    },
    parse: function parse(token, stack, context) {
      var newArray = [];
      var arrayEnded = false;
      var value = null;
      var state = this;

      if (token.expression) {
        return Twig.expression.parseAsync.call(state, token.params, context).then(function (value) {
          stack.push(value);
        });
      }

      while (stack.length > 0) {
        value = stack.pop(); // Push values into the array until the start of the array

        if (value && value.type && value.type === Twig.expression.type.parameter.start) {
          arrayEnded = true;
          break;
        }

        newArray.unshift(value);
      }

      if (!arrayEnded) {
        throw new Twig.Error('Expected end of parameter set.');
      }

      stack.push(newArray);
    }
  }, {
    type: Twig.expression.type.slice,
    regex: /^\[(\d*:\d*)\]/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var sliceRange = token.match[1].split(':'); // SliceStart can be undefined when we pass parameters to the slice filter later

      var sliceStart = sliceRange[0] ? parseInt(sliceRange[0], 10) : undefined;
      var sliceEnd = sliceRange[1] ? parseInt(sliceRange[1], 10) : undefined;
      token.value = 'slice';
      token.params = [sliceStart, sliceEnd]; // SliceEnd can't be undefined as the slice filter doesn't check for this, but it does check the length
      // of the params array, so just shorten it.

      if (!sliceEnd) {
        token.params = [sliceStart];
      }

      output.push(token);
    },
    parse: function parse(token, stack) {
      var input = stack.pop();
      var params = token.params;
      var state = this;
      stack.push(Twig.filter.call(state, token.value, input, params));
    }
  }, {
    /**
     * Match an array start.
     */
    type: Twig.expression.type.array.start,
    regex: /^\[/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
    compile: Twig.expression.fn.compile.pushBoth,
    parse: Twig.expression.fn.parse.push
  }, {
    /**
     * Match an array end.
     */
    type: Twig.expression.type.array.end,
    regex: /^\]/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var i = stack.length - 1;
      var stackToken; // Pop tokens off the stack until the start of the object

      for (; i >= 0; i--) {
        stackToken = stack.pop();

        if (stackToken.type === Twig.expression.type.array.start) {
          break;
        }

        output.push(stackToken);
      }

      output.push(token);
    },
    parse: function parse(token, stack) {
      var newArray = [];
      var arrayEnded = false;
      var value = null;

      while (stack.length > 0) {
        value = stack.pop(); // Push values into the array until the start of the array

        if (value && value.type && value.type === Twig.expression.type.array.start) {
          arrayEnded = true;
          break;
        }

        newArray.unshift(value);
      }

      if (!arrayEnded) {
        throw new Twig.Error('Expected end of array.');
      }

      stack.push(newArray);
    }
  }, // Token that represents the start of a hash map '}'
  //
  // Hash maps take the form:
  //    { "key": 'value', "another_key": item }
  //
  // Keys must be quoted (either single or double) and values can be any expression.
  {
    type: Twig.expression.type.object.start,
    regex: /^\{/,
    next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
    compile: Twig.expression.fn.compile.pushBoth,
    parse: Twig.expression.fn.parse.push
  }, // Token that represents the end of a Hash Map '}'
  //
  // This is where the logic for building the internal
  // representation of a hash map is defined.
  {
    type: Twig.expression.type.object.end,
    regex: /^\}/,
    next: Twig.expression.set.operationsExtended,
    compile: function compile(token, stack, output) {
      var i = stack.length - 1;
      var stackToken; // Pop tokens off the stack until the start of the object

      for (; i >= 0; i--) {
        stackToken = stack.pop();

        if (stackToken && stackToken.type === Twig.expression.type.object.start) {
          break;
        }

        output.push(stackToken);
      }

      output.push(token);
    },
    parse: function parse(endToken, stack) {
      var newObject = {};
      var objectEnded = false;
      var token = null;
      var hasValue = false;
      var value = null;

      while (stack.length > 0) {
        token = stack.pop(); // Push values into the array until the start of the object

        if (token && token.type && token.type === Twig.expression.type.object.start) {
          objectEnded = true;
          break;
        }

        if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
          if (!hasValue) {
            throw new Twig.Error('Missing value for key \'' + token.key + '\' in object definition.');
          }

          newObject[token.key] = value; // Preserve the order that elements are added to the map
          // This is necessary since JavaScript objects don't
          // guarantee the order of keys

          if (newObject._keys === undefined) {
            newObject._keys = [];
          }

          newObject._keys.unshift(token.key); // Reset value check


          value = null;
          hasValue = false;
        } else {
          hasValue = true;
          value = token;
        }
      }

      if (!objectEnded) {
        throw new Twig.Error('Unexpected end of object.');
      }

      stack.push(newObject);
    }
  }, // Token representing a filter
  //
  // Filters can follow any expression and take the form:
  //    expression|filter(optional, args)
  //
  // Filter parsing is done in the Twig.filters namespace.
  {
    type: Twig.expression.type.filter,
    // Match a | then a letter or _, then any number of letters, numbers, _ or -
    regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_-]*)/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      token.value = token.match[1];
      output.push(token);
    },
    parse: function parse(token, stack, context) {
      var input = stack.pop();
      var state = this;
      return parseParams(state, token.params, context).then(function (params) {
        return Twig.filter.call(state, token.value, input, params);
      }).then(function (value) {
        stack.push(value);
      });
    }
  }, {
    type: Twig.expression.type._function,
    // Match any letter or _, then any number of letters, numbers, _ or - followed by (
    regex: /^([a-zA-Z_]\w*)\s*\(/,
    next: Twig.expression.type.parameter.start,
    validate: function validate(match) {
      // Make sure this function is not a reserved word
      return match[1] && !Twig.expression.reservedWords.includes(match[1]);
    },
    transform: function transform() {
      return '(';
    },
    compile: function compile(token, stack, output) {
      var fn = token.match[1];
      token.fn = fn; // Cleanup token

      delete token.match;
      delete token.value;
      output.push(token);
    },
    parse: function parse(token, stack, context) {
      var state = this;
      var fn = token.fn;
      var value;
      return parseParams(state, token.params, context).then(function (params) {
        if (Twig.functions[fn]) {
          // Get the function from the built-in functions
          value = Twig.functions[fn].apply(state, params);
        } else if (typeof context[fn] === 'function') {
          // Get the function from the user/context defined functions
          value = context[fn].apply(context, (0, _toConsumableArray2["default"])(params));
        } else {
          throw new Twig.Error(fn + ' function does not exist and is not defined in the context');
        }

        return value;
      }).then(function (result) {
        stack.push(result);
      });
    }
  }, // Token representing a variable.
  //
  // Variables can contain letters, numbers, underscores and
  // dashes, but must start with a letter or underscore.
  //
  // Variables are retrieved from the render context and take
  // the value of 'undefined' if the given variable doesn't
  // exist in the context.
  {
    type: Twig.expression.type.variable,
    // Match any letter or _, then any number of letters, numbers, _ or -
    regex: /^[a-zA-Z_]\w*/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: Twig.expression.fn.compile.push,
    validate: function validate(match) {
      return !Twig.expression.reservedWords.includes(match[0]);
    },
    parse: function parse(token, stack, context) {
      var state = this; // Get the variable from the context

      return Twig.expression.resolveAsync.call(state, context[token.value], context).then(function (value) {
        if (state.template.options.strictVariables && value === undefined) {
          throw new Twig.Error('Variable "' + token.value + '" does not exist.');
        }

        stack.push(value);
      });
    }
  }, {
    type: Twig.expression.type.key.period,
    regex: /^\.(\w+)/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      token.key = token.match[1];
      delete token.match;
      delete token.value;
      output.push(token);
    },
    parse: function parse(token, stack, context, nextToken) {
      var state = this;
      var key = token.key;
      var object = stack.pop();
      var value;

      if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
        var keys = Object.keys(object);

        if (keys.length > 0) {
          throw new Twig.Error('Key "' + key + '" for object with keys "' + Object.keys(object).join(', ') + '" does not exist.');
        } else {
          throw new Twig.Error('Key "' + key + '" does not exist as the object is empty.');
        }
      }

      return parseParams(state, token.params, context).then(function (params) {
        if (object === null || object === undefined) {
          value = undefined;
        } else {
          var capitalize = function capitalize(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1);
          }; // Get the variable from the context


          if ((0, _typeof2["default"])(object) === 'object' && key in object) {
            value = object[key];
          } else if (object['get' + capitalize(key)]) {
            value = object['get' + capitalize(key)];
          } else if (object['is' + capitalize(key)]) {
            value = object['is' + capitalize(key)];
          } else {
            value = undefined;
          }
        } // When resolving an expression we need to pass nextToken in case the expression is a function


        return Twig.expression.resolveAsync.call(state, value, context, params, nextToken, object);
      }).then(function (result) {
        stack.push(result);
      });
    }
  }, {
    type: Twig.expression.type.key.brackets,
    regex: /^\[([^\]:]*)\]/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: function compile(token, stack, output) {
      var match = token.match[1];
      delete token.value;
      delete token.match; // The expression stack for the key

      token.stack = Twig.expression.compile({
        value: match
      }).stack;
      output.push(token);
    },
    parse: function parse(token, stack, context, nextToken) {
      // Evaluate key
      var state = this;
      var params = null;
      var object;
      var value;
      return parseParams(state, token.params, context).then(function (parameters) {
        params = parameters;
        return Twig.expression.parseAsync.call(state, token.stack, context);
      }).then(function (key) {
        object = stack.pop();

        if (object && !Object.prototype.hasOwnProperty.call(object, key) && state.template.options.strictVariables) {
          var keys = Object.keys(object);

          if (keys.length > 0) {
            throw new Twig.Error('Key "' + key + '" for array with keys "' + keys.join(', ') + '" does not exist.');
          } else {
            throw new Twig.Error('Key "' + key + '" does not exist as the array is empty.');
          }
        } else if (object === null || object === undefined) {
          return null;
        } // Get the variable from the context


        if ((0, _typeof2["default"])(object) === 'object' && key in object) {
          value = object[key];
        } else {
          value = null;
        } // When resolving an expression we need to pass nextToken in case the expression is a function


        return Twig.expression.resolveAsync.call(state, value, object, params, nextToken);
      }).then(function (result) {
        stack.push(result);
      });
    }
  }, {
    /**
     * Match a null value.
     */
    type: Twig.expression.type._null,
    // Match a number
    regex: /^(null|NULL|none|NONE)/,
    next: Twig.expression.set.operations,
    compile: function compile(token, stack, output) {
      delete token.match;
      token.value = null;
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }, {
    /**
     * Match the context
     */
    type: Twig.expression.type.context,
    regex: /^_context/,
    next: Twig.expression.set.operationsExtended.concat([Twig.expression.type.parameter.start]),
    compile: Twig.expression.fn.compile.push,
    parse: function parse(token, stack, context) {
      stack.push(context);
    }
  }, {
    /**
     * Match a boolean
     */
    type: Twig.expression.type.bool,
    regex: /^(true|TRUE|false|FALSE)/,
    next: Twig.expression.set.operations,
    compile: function compile(token, stack, output) {
      token.value = token.match[0].toLowerCase() === 'true';
      delete token.match;
      output.push(token);
    },
    parse: Twig.expression.fn.parse.pushValue
  }];
  /**
   * Resolve a context value.
   *
   * If the value is a function, it is executed with a context parameter.
   *
   * @param {string} key The context object key.
   * @param {Object} context The render context.
   */

  Twig.expression.resolveAsync = function (value, context, params, nextToken, object) {
    var state = this;

    if (typeof value !== 'function') {
      return Twig.Promise.resolve(value);
    }

    var promise = Twig.Promise.resolve(params);
    /*
    If value is a function, it will have been impossible during the compile stage to determine that a following
    set of parentheses were parameters for this function.
     Those parentheses will have therefore been marked as an expression, with their own parameters, which really
    belong to this function.
     Those parameters will also need parsing in case they are actually an expression to pass as parameters.
        */

    if (nextToken && nextToken.type === Twig.expression.type.parameter.end) {
      // When parsing these parameters, we need to get them all back, not just the last item on the stack.
      var tokensAreParameters = true;
      promise = promise.then(function () {
        return nextToken.params && Twig.expression.parseAsync.call(state, nextToken.params, context, tokensAreParameters);
      }).then(function (p) {
        // Clean up the parentheses tokens on the next loop
        nextToken.cleanup = true;
        return p;
      });
    }

    return promise.then(function (params) {
      return value.apply(object || context, params || []);
    });
  };

  Twig.expression.resolve = function (value, context, params, nextToken, object) {
    return Twig.async.potentiallyAsync(this, false, function () {
      return Twig.expression.resolveAsync.call(this, value, context, params, nextToken, object);
    });
  };
  /**
   * Registry for logic handlers.
   */


  Twig.expression.handler = {};
  /**
   * Define a new expression type, available at Twig.logic.type.{type}
   *
   * @param {string} type The name of the new type.
   */

  Twig.expression.extendType = function (type) {
    Twig.expression.type[type] = 'Twig.expression.type.' + type;
  };
  /**
   * Extend the expression parsing functionality with a new definition.
   *
   * Token definitions follow this format:
   *  {
   *      type:     One of Twig.expression.type.[type], either pre-defined or added using
   *                    Twig.expression.extendType
   *
   *      next:     Array of types from Twig.expression.type that can follow this token,
   *
   *      regex:    A regex or array of regex's that should match the token.
   *
   *      compile: function(token, stack, output) called when this token is being compiled.
   *                   Should return an object with stack and output set.
   *
   *      parse:   function(token, stack, context) called when this token is being parsed.
   *                   Should return an object with stack and context set.
   *  }
   *
   * @param {Object} definition A token definition.
   */


  Twig.expression.extend = function (definition) {
    if (!definition.type) {
      throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
    }

    Twig.expression.handler[definition.type] = definition;
  }; // Extend with built-in expressions


  while (Twig.expression.definitions.length > 0) {
    Twig.expression.extend(Twig.expression.definitions.shift());
  }
  /**
   * Break an expression into tokens defined in Twig.expression.definitions.
   *
   * @param {string} expression The string to tokenize.
   *
   * @return {Array} An array of tokens.
   */


  Twig.expression.tokenize = function (expression) {
    var tokens = []; // Keep an offset of the location in the expression for error messages.

    var expOffset = 0; // The valid next tokens of the previous token

    var next = null; // Match information

    var type;
    var regex;
    var regexI; // The possible next token for the match

    var tokenNext; // Has a match been found from the definitions

    var matchFound;
    var invalidMatches = [];

    var matchFunction = function matchFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Don't pass arguments to `Array.slice`, that is a performance killer
      var matchI = arguments.length - 2;
      var match = new Array(matchI);

      while (matchI-- > 0) {
        match[matchI] = args[matchI];
      }

      Twig.log.trace('Twig.expression.tokenize', 'Matched a ', type, ' regular expression of ', match);

      if (next && !next.includes(type)) {
        invalidMatches.push(type + ' cannot follow a ' + tokens[tokens.length - 1].type + ' at template:' + expOffset + ' near \'' + match[0].slice(0, 20) + '...\''); // Not a match, don't change the expression

        return match[0];
      }

      var handler = Twig.expression.handler[type]; // Validate the token if a validation function is provided

      if (handler.validate && !handler.validate(match, tokens)) {
        return match[0];
      }

      invalidMatches = [];
      tokens.push({
        type: type,
        value: match[0],
        match: match
      });
      matchFound = true;
      next = tokenNext;
      expOffset += match[0].length; // Does the token need to return output back to the expression string
      // e.g. a function match of cycle( might return the '(' back to the expression
      // This allows look-ahead to differentiate between token types (e.g. functions and variable names)

      if (handler.transform) {
        return handler.transform(match, tokens);
      }

      return '';
    };

    Twig.log.debug('Twig.expression.tokenize', 'Tokenizing expression ', expression);

    while (expression.length > 0) {
      expression = expression.trim();

      for (type in Twig.expression.handler) {
        if (Object.hasOwnProperty.call(Twig.expression.handler, type)) {
          tokenNext = Twig.expression.handler[type].next;
          regex = Twig.expression.handler[type].regex;
          Twig.log.trace('Checking type ', type, ' on ', expression);
          matchFound = false;

          if (Array.isArray(regex)) {
            regexI = regex.length;

            while (regexI-- > 0) {
              expression = expression.replace(regex[regexI], matchFunction);
            }
          } else {
            expression = expression.replace(regex, matchFunction);
          } // An expression token has been matched. Break the for loop and start trying to
          //  match the next template (if expression isn't empty.)


          if (matchFound) {
            break;
          }
        }
      }

      if (!matchFound) {
        if (invalidMatches.length > 0) {
          throw new Twig.Error(invalidMatches.join(' OR '));
        } else {
          throw new Twig.Error('Unable to parse \'' + expression + '\' at template position' + expOffset);
        }
      }
    }

    Twig.log.trace('Twig.expression.tokenize', 'Tokenized to ', tokens);
    return tokens;
  };
  /**
   * Compile an expression token.
   *
   * @param {Object} rawToken The uncompiled token.
   *
   * @return {Object} The compiled token.
   */


  Twig.expression.compile = function (rawToken) {
    var expression = rawToken.value; // Tokenize expression

    var tokens = Twig.expression.tokenize(expression);
    var token = null;
    var output = [];
    var stack = [];
    var tokenTemplate = null;
    Twig.log.trace('Twig.expression.compile: ', 'Compiling ', expression); // Push tokens into RPN stack using the Shunting-yard algorithm
    // See http://en.wikipedia.org/wiki/Shunting_yard_algorithm

    while (tokens.length > 0) {
      token = tokens.shift();
      tokenTemplate = Twig.expression.handler[token.type];
      Twig.log.trace('Twig.expression.compile: ', 'Compiling ', token); // Compile the template

      tokenTemplate.compile(token, stack, output);
      Twig.log.trace('Twig.expression.compile: ', 'Stack is', stack);
      Twig.log.trace('Twig.expression.compile: ', 'Output is', output);
    }

    while (stack.length > 0) {
      output.push(stack.pop());
    }

    Twig.log.trace('Twig.expression.compile: ', 'Final output is', output);
    rawToken.stack = output;
    delete rawToken.value;
    return rawToken;
  };
  /**
   * Parse an RPN expression stack within a context.
   *
   * @param {Array} tokens An array of compiled expression tokens.
   * @param {Object} context The render context to parse the tokens with.
   *
   * @return {Object} The result of parsing all the tokens. The result
   *                  can be anything, String, Array, Object, etc... based on
   *                  the given expression.
   */


  Twig.expression.parse = function (tokens, context, tokensAreParameters, allowAsync) {
    var state = this; // If the token isn't an array, make it one.

    if (!Array.isArray(tokens)) {
      tokens = [tokens];
    } // The output stack


    var stack = [];
    var loopTokenFixups = [];
    var binaryOperator = Twig.expression.type.operator.binary;
    return Twig.async.potentiallyAsync(state, allowAsync, function () {
      return Twig.async.forEach(tokens, function (token, index) {
        var tokenTemplate = null;
        var nextToken = null;
        var result; // If the token is marked for cleanup, we don't need to parse it

        if (token.cleanup) {
          return;
        } // Determine the token that follows this one so that we can pass it to the parser


        if (tokens.length > index + 1) {
          nextToken = tokens[index + 1];
        }

        tokenTemplate = Twig.expression.handler[token.type];

        if (tokenTemplate.parse) {
          result = tokenTemplate.parse.call(state, token, stack, context, nextToken);
        } // Store any binary tokens for later if we are in a loop.


        if (token.type === binaryOperator && context.loop) {
          loopTokenFixups.push(token);
        }

        return result;
      }).then(function () {
        // Check every fixup and remove "key" as long as they still have "params". This covers the use case where
        // a ":" operator is used in a loop with a "(expression):" statement. We need to be able to evaluate the expression
        var len = loopTokenFixups.length;
        var loopTokenFixup = null;

        while (len-- > 0) {
          loopTokenFixup = loopTokenFixups[len];

          if (loopTokenFixup.params && loopTokenFixup.key) {
            delete loopTokenFixup.key;
          }
        } // If parse has been called with a set of tokens that are parameters, we need to return the whole stack,
        // wrapped in an Array.


        if (tokensAreParameters) {
          var params = stack.splice(0);
          stack.push(params);
        } // Pop the final value off the stack


        return stack.pop();
      });
    });
  };

  return Twig;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(13);

var iterableToArray = __webpack_require__(14);

var unsupportedIterableToArray = __webpack_require__(15);

var nonIterableSpread = __webpack_require__(16);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.expression.operator.js
//
// This file handles operator lookups and parsing.
module.exports = function (Twig) {
  'use strict';
  /**
   * Operator associativity constants.
   */

  Twig.expression.operator = {
    leftToRight: 'leftToRight',
    rightToLeft: 'rightToLeft'
  };

  var containment = function containment(a, b) {
    if (b === undefined || b === null) {
      return null;
    }

    if (b.indexOf !== undefined) {
      // String
      return (a === b || a !== '') && b.includes(a);
    }

    var el;

    for (el in b) {
      if (Object.hasOwnProperty.call(b, el) && b[el] === a) {
        return true;
      }
    }

    return false;
  };
  /**
   * Get the precidence and associativity of an operator. These follow the order that C/C++ use.
   * See http://en.wikipedia.org/wiki/Operators_in_C_and_C++ for the table of values.
   */


  Twig.expression.operator.lookup = function (operator, token) {
    switch (operator) {
      case '..':
        token.precidence = 20;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case ',':
        token.precidence = 18;
        token.associativity = Twig.expression.operator.leftToRight;
        break;
      // Ternary

      case '?:':
      case '?':
      case ':':
        token.precidence = 16;
        token.associativity = Twig.expression.operator.rightToLeft;
        break;
      // Null-coalescing operator

      case '??':
        token.precidence = 15;
        token.associativity = Twig.expression.operator.rightToLeft;
        break;

      case 'or':
        token.precidence = 14;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'and':
        token.precidence = 13;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'b-or':
        token.precidence = 12;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'b-xor':
        token.precidence = 11;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'b-and':
        token.precidence = 10;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '==':
      case '!=':
        token.precidence = 9;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '<':
      case '<=':
      case '>':
      case '>=':
      case 'not in':
      case 'in':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '~': // String concatination

      case '+':
      case '-':
        token.precidence = 6;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case '//':
      case '**':
      case '*':
      case '/':
      case '%':
        token.precidence = 5;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'not':
        token.precidence = 3;
        token.associativity = Twig.expression.operator.rightToLeft;
        break;

      case 'matches':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'starts with':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      case 'ends with':
        token.precidence = 8;
        token.associativity = Twig.expression.operator.leftToRight;
        break;

      default:
        throw new Twig.Error('Failed to lookup operator: ' + operator + ' is an unknown operator.');
    }

    token.operator = operator;
    return token;
  };
  /**
   * Handle operations on the RPN stack.
   *
   * Returns the updated stack.
   */


  Twig.expression.operator.parse = function (operator, stack) {
    Twig.log.trace('Twig.expression.operator.parse: ', 'Handling ', operator);
    var a;
    var b;
    var c;

    if (operator === '?') {
      c = stack.pop();
    }

    b = stack.pop();

    if (operator !== 'not') {
      a = stack.pop();
    }

    if (operator !== 'in' && operator !== 'not in' && operator !== '??') {
      if (a && Array.isArray(a)) {
        a = a.length;
      }

      if (operator !== '?' && b && Array.isArray(b)) {
        b = b.length;
      }
    }

    if (operator === 'matches') {
      if (b && typeof b === 'string') {
        var reParts = b.match(/^\/(.*)\/([gims]?)$/);
        var reBody = reParts[1];
        var reFlags = reParts[2];
        b = new RegExp(reBody, reFlags);
      }
    }

    switch (operator) {
      case ':':
        // Ignore
        break;

      case '??':
        if (a === undefined) {
          a = b;
          b = c;
          c = undefined;
        }

        if (a !== undefined && a !== null) {
          stack.push(a);
        } else {
          stack.push(b);
        }

        break;

      case '?:':
        if (Twig.lib.boolval(a)) {
          stack.push(a);
        } else {
          stack.push(b);
        }

        break;

      case '?':
        if (a === undefined) {
          // An extended ternary.
          a = b;
          b = c;
          c = undefined;
        }

        if (Twig.lib.boolval(a)) {
          stack.push(b);
        } else {
          stack.push(c);
        }

        break;

      case '+':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a + b);
        break;

      case '-':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a - b);
        break;

      case '*':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a * b);
        break;

      case '/':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a / b);
        break;

      case '//':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(Math.floor(a / b));
        break;

      case '%':
        b = parseFloat(b);
        a = parseFloat(a);
        stack.push(a % b);
        break;

      case '~':
        stack.push((typeof a !== 'undefined' && a !== null ? a.toString() : '') + (typeof b !== 'undefined' && b !== null ? b.toString() : ''));
        break;

      case 'not':
      case '!':
        stack.push(!Twig.lib.boolval(b));
        break;

      case '<':
        stack.push(a < b);
        break;

      case '<=':
        stack.push(a <= b);
        break;

      case '>':
        stack.push(a > b);
        break;

      case '>=':
        stack.push(a >= b);
        break;

      case '===':
        stack.push(a === b);
        break;

      case '==':
        /* eslint-disable-next-line eqeqeq */
        stack.push(a == b);
        break;

      case '!==':
        stack.push(a !== b);
        break;

      case '!=':
        /* eslint-disable-next-line eqeqeq */
        stack.push(a != b);
        break;

      case 'or':
        stack.push(Twig.lib.boolval(a) || Twig.lib.boolval(b));
        break;

      case 'b-or':
        stack.push(a | b);
        break;

      case 'b-xor':
        stack.push(a ^ b);
        break;

      case 'and':
        stack.push(Twig.lib.boolval(a) && Twig.lib.boolval(b));
        break;

      case 'b-and':
        stack.push(a & b);
        break;

      case '**':
        stack.push(Math.pow(a, b));
        break;

      case 'not in':
        stack.push(!containment(a, b));
        break;

      case 'in':
        stack.push(containment(a, b));
        break;

      case 'matches':
        stack.push(b.test(a));
        break;

      case 'starts with':
        stack.push(typeof a === 'string' && a.indexOf(b) === 0);
        break;

      case 'ends with':
        stack.push(typeof a === 'string' && a.includes(b, a.length - b.length));
        break;

      case '..':
        stack.push(Twig.functions.range(a, b));
        break;

      default:
        throw new Twig.Error('Failed to parse operator: ' + operator + ' is an unknown operator.');
    }
  };

  return Twig;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

// ## twig.filters.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
  // Determine object type
  function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
  }

  Twig.filters = {
    // String Filters
    upper: function upper(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.toUpperCase();
    },
    lower: function lower(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.toLowerCase();
    },
    capitalize: function capitalize(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.slice(0, 1).toUpperCase() + value.toLowerCase().slice(1);
    },
    title: function title(value) {
      if (typeof value !== 'string') {
        return value;
      }

      return value.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
        return p1 + p2.toUpperCase();
      });
    },
    length: function length(value) {
      if (Twig.lib.is('Array', value) || typeof value === 'string') {
        return value.length;
      }

      if (Twig.lib.is('Object', value)) {
        if (value._keys === undefined) {
          return Object.keys(value).length;
        }

        return value._keys.length;
      }

      return 0;
    },
    // Array/Object Filters
    reverse: function reverse(value) {
      if (is('Array', value)) {
        return value.reverse();
      }

      if (is('String', value)) {
        return value.split('').reverse().join('');
      }

      if (is('Object', value)) {
        var keys = value._keys || Object.keys(value).reverse();
        value._keys = keys;
        return value;
      }
    },
    sort: function sort(value) {
      if (is('Array', value)) {
        return value.sort();
      }

      if (is('Object', value)) {
        // Sorting objects isn't obvious since the order of
        // returned keys isn't guaranteed in JavaScript.
        // Because of this we use a "hidden" key called _keys to
        // store the keys in the order we want to return them.
        delete value._keys;
        var keys = Object.keys(value);
        var sortedKeys = keys.sort(function (a, b) {
          var a1;
          var b1; // If a and b are comparable, we're fine :-)

          if (value[a] > value[b] === !(value[a] <= value[b])) {
            return value[a] > value[b] ? 1 : value[a] < value[b] ? -1 : 0;
          } // If a and b can be parsed as numbers, we can compare
          // their numeric value


          if (!isNaN(a1 = parseFloat(value[a])) && !isNaN(b1 = parseFloat(value[b]))) {
            return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
          } // If one of the values is a string, we convert the
          // other value to string as well


          if (typeof value[a] === 'string') {
            return value[a] > value[b].toString() ? 1 : value[a] < value[b].toString() ? -1 : 0;
          }

          if (typeof value[b] === 'string') {
            return value[a].toString() > value[b] ? 1 : value[a].toString() < value[b] ? -1 : 0;
          } // Everything failed - return 'null' as sign, that
          // the values are not comparable


          return null;
        });
        value._keys = sortedKeys;
        return value;
      }
    },
    keys: function keys(value) {
      if (value === undefined || value === null) {
        return;
      }

      var keyset = value._keys || Object.keys(value);
      var output = [];
      keyset.forEach(function (key) {
        if (key === '_keys') {
          return;
        } // Ignore the _keys property


        if (Object.hasOwnProperty.call(value, key)) {
          output.push(key);
        }
      });
      return output;
    },

    /* eslint-disable-next-line camelcase */
    url_encode: function url_encode(value) {
      if (value === undefined || value === null) {
        return;
      }

      if (Twig.lib.is('Object', value)) {
        var serialize = function serialize(obj, prefix) {
          var result = [];
          var keyset = obj._keys || Object.keys(obj);
          keyset.forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
              return;
            }

            var resultKey = prefix ? prefix + '[' + key + ']' : key;
            var resultValue = obj[key];
            result.push(Twig.lib.is('Object', resultValue) || Array.isArray(resultValue) ? serialize(resultValue, resultKey) : encodeURIComponent(resultKey) + '=' + encodeURIComponent(resultValue));
          });
          return result.join('&amp;');
        };

        return serialize(value);
      }

      var result = encodeURIComponent(value);
      result = result.replace('\'', '%27');
      return result;
    },
    join: function join(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      var joinStr = '';
      var output = [];
      var keyset = null;

      if (params && params[0]) {
        joinStr = params[0];
      }

      if (is('Array', value)) {
        output = value;
      } else {
        keyset = value._keys || Object.keys(value);
        keyset.forEach(function (key) {
          if (key === '_keys') {
            return;
          } // Ignore the _keys property


          if (Object.hasOwnProperty.call(value, key)) {
            output.push(value[key]);
          }
        });
      }

      return output.join(joinStr);
    },
    "default": function _default(value, params) {
      if (params !== undefined && params.length > 1) {
        throw new Twig.Error('default filter expects one argument');
      }

      if (value === undefined || value === null || value === '') {
        if (params === undefined) {
          return '';
        }

        return params[0];
      }

      return value;
    },

    /* eslint-disable-next-line camelcase */
    json_encode: function json_encode(value) {
      if (value === undefined || value === null) {
        return 'null';
      }

      if ((0, _typeof2["default"])(value) === 'object' && is('Array', value)) {
        var output = [];
        value.forEach(function (v) {
          output.push(Twig.filters.json_encode(v));
        });
        return '[' + output.join(',') + ']';
      }

      if ((0, _typeof2["default"])(value) === 'object' && is('Date', value)) {
        return '"' + value.toISOString() + '"';
      }

      if ((0, _typeof2["default"])(value) === 'object') {
        var keyset = value._keys || Object.keys(value);
        var _output = [];
        keyset.forEach(function (key) {
          _output.push(JSON.stringify(key) + ':' + Twig.filters.json_encode(value[key]));
        });
        return '{' + _output.join(',') + '}';
      }

      return JSON.stringify(value);
    },
    merge: function merge(value, params) {
      var obj = [];
      var arrIndex = 0;
      var keyset = []; // Check to see if all the objects being merged are arrays

      if (is('Array', value)) {
        params.forEach(function (param) {
          if (!is('Array', param)) {
            obj = {};
          }
        });
      } else {
        // Create obj as an Object
        obj = {};
      }

      if (!is('Array', obj)) {
        obj._keys = [];
      }

      if (is('Array', value)) {
        value.forEach(function (val) {
          if (obj._keys) {
            obj._keys.push(arrIndex);
          }

          obj[arrIndex] = val;
          arrIndex++;
        });
      } else {
        keyset = value._keys || Object.keys(value);
        keyset.forEach(function (key) {
          obj[key] = value[key];

          obj._keys.push(key); // Handle edge case where a number index in an object is greater than
          //   the array counter. In such a case, the array counter is increased
          //   one past the index.
          //
          // Example {{ ["a", "b"]|merge({"4":"value"}, ["c", "d"])
          // Without this, d would have an index of "4" and overwrite the value
          //   of "value"


          var intKey = parseInt(key, 10);

          if (!isNaN(intKey) && intKey >= arrIndex) {
            arrIndex = intKey + 1;
          }
        });
      } // Mixin the merge arrays


      params.forEach(function (param) {
        if (is('Array', param)) {
          param.forEach(function (val) {
            if (obj._keys) {
              obj._keys.push(arrIndex);
            }

            obj[arrIndex] = val;
            arrIndex++;
          });
        } else {
          keyset = param._keys || Object.keys(param);
          keyset.forEach(function (key) {
            if (!obj[key]) {
              obj._keys.push(key);
            }

            obj[key] = param[key];
            var intKey = parseInt(key, 10);

            if (!isNaN(intKey) && intKey >= arrIndex) {
              arrIndex = intKey + 1;
            }
          });
        }
      });

      if (params.length === 0) {
        throw new Twig.Error('Filter merge expects at least one parameter');
      }

      return obj;
    },
    date: function date(value, params) {
      var date = Twig.functions.date(value);
      var format = params && Boolean(params.length) ? params[0] : 'F j, Y H:i';
      return Twig.lib.date(format.replace(/\\\\/g, '\\'), date);
    },

    /* eslint-disable-next-line camelcase */
    date_modify: function date_modify(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      if (params === undefined || params.length !== 1) {
        throw new Twig.Error('date_modify filter expects 1 argument');
      }

      var modifyText = params[0];
      var time;

      if (Twig.lib.is('Date', value)) {
        time = Twig.lib.strtotime(modifyText, value.getTime() / 1000);
      }

      if (Twig.lib.is('String', value)) {
        time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value));
      }

      if (Twig.lib.is('Number', value)) {
        time = Twig.lib.strtotime(modifyText, value);
      }

      return new Date(time * 1000);
    },
    replace: function replace(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      var pairs = params[0];
      var tag;

      for (tag in pairs) {
        if (Object.hasOwnProperty.call(pairs, tag) && tag !== '_keys') {
          value = Twig.lib.replaceAll(value, tag, pairs[tag]);
        }
      }

      return value;
    },
    format: function format(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      return Twig.lib.vsprintf(value, params);
    },
    striptags: function striptags(value, allowed) {
      if (value === undefined || value === null) {
        return;
      }

      return Twig.lib.stripTags(value, allowed);
    },
    escape: function escape(value, params) {
      if (value === undefined || value === null || value === '') {
        return;
      }

      var strategy = 'html';

      if (params && Boolean(params.length) && params[0] !== true) {
        strategy = params[0];
      }

      if (strategy === 'html') {
        var rawValue = value.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        return new Twig.Markup(rawValue, 'html');
      }

      if (strategy === 'js') {
        var _rawValue = value.toString();

        var result = '';

        for (var i = 0; i < _rawValue.length; i++) {
          if (_rawValue[i].match(/^[a-zA-Z0-9,._]$/)) {
            result += _rawValue[i];
          } else {
            var _char = _rawValue.charAt(i);

            var charCode = _rawValue.charCodeAt(i); // A few characters have short escape sequences in JSON and JavaScript.
            // Escape sequences supported only by JavaScript, not JSON, are ommitted.
            // \" is also supported but omitted, because the resulting string is not HTML safe.


            var shortMap = {
              '\\': '\\\\',
              '/': '\\/',
              "\b": '\\b',
              "\f": '\\f',
              "\n": '\\n',
              "\r": '\\r',
              "\t": '\\t'
            };

            if (shortMap[_char]) {
              result += shortMap[_char];
            } else {
              result += Twig.lib.sprintf("\\u%04s", charCode.toString(16).toUpperCase());
            }
          }
        }

        return new Twig.Markup(result, 'js');
      }

      if (strategy === 'css') {
        var _rawValue2 = value.toString();

        var _result = '';

        for (var _i = 0; _i < _rawValue2.length; _i++) {
          if (_rawValue2[_i].match(/^[a-zA-Z0-9]$/)) {
            _result += _rawValue2[_i];
          } else {
            var _charCode = _rawValue2.charCodeAt(_i);

            _result += '\\' + _charCode.toString(16).toUpperCase() + ' ';
          }
        }

        return new Twig.Markup(_result, 'css');
      }

      if (strategy === 'url') {
        var _result2 = Twig.filters.url_encode(value);

        return new Twig.Markup(_result2, 'url');
      }

      if (strategy === 'html_attr') {
        var _rawValue3 = value.toString();

        var _result3 = '';

        for (var _i2 = 0; _i2 < _rawValue3.length; _i2++) {
          if (_rawValue3[_i2].match(/^[a-zA-Z0-9,.\-_]$/)) {
            _result3 += _rawValue3[_i2];
          } else if (_rawValue3[_i2].match(/^[&<>"]$/)) {
            _result3 += _rawValue3[_i2].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
          } else {
            var _charCode2 = _rawValue3.charCodeAt(_i2); // The following replaces characters undefined in HTML with
            // the hex entity for the Unicode replacement character.


            if (_charCode2 <= 0x1F && _charCode2 !== 0x09 && _charCode2 !== 0x0A && _charCode2 !== 0x0D) {
              _result3 += '&#xFFFD;';
            } else if (_charCode2 < 0x80) {
              _result3 += Twig.lib.sprintf('&#x%02s;', _charCode2.toString(16).toUpperCase());
            } else {
              _result3 += Twig.lib.sprintf('&#x%04s;', _charCode2.toString(16).toUpperCase());
            }
          }
        }

        return new Twig.Markup(_result3, 'html_attr');
      }

      throw new Twig.Error('escape strategy unsupported');
    },

    /* Alias of escape */
    e: function e(value, params) {
      return Twig.filters.escape(value, params);
    },
    nl2br: function nl2br(value) {
      if (value === undefined || value === null || value === '') {
        return;
      }

      var linebreakTag = 'BACKSLASH_n_replace';
      var br = '<br />' + linebreakTag;
      value = Twig.filters.escape(value).replace(/\r\n/g, br).replace(/\r/g, br).replace(/\n/g, br);
      value = Twig.lib.replaceAll(value, linebreakTag, '\n');
      return new Twig.Markup(value);
    },

    /**
     * Adapted from: http://phpjs.org/functions/number_format:481
     */

    /* eslint-disable-next-line camelcase */
    number_format: function number_format(value, params) {
      var number = value;
      var decimals = params && params[0] ? params[0] : undefined;
      var dec = params && params[1] !== undefined ? params[1] : '.';
      var sep = params && params[2] !== undefined ? params[2] : ',';
      number = String(number).replace(/[^0-9+\-Ee.]/g, '');
      var n = isFinite(Number(number)) ? Number(number) : 0;
      var prec = isFinite(Number(decimals)) ? Math.abs(decimals) : 0;
      var s = '';

      var toFixedFix = function toFixedFix(n, prec) {
        var k = Math.pow(10, prec);
        return String(Math.round(n * k) / k);
      }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


      s = (prec ? toFixedFix(n, prec) : String(Math.round(n))).split('.');

      if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
      }

      if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
      }

      return s.join(dec);
    },
    trim: function trim(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      var str = String(value);
      var whitespace;

      if (params && params[0]) {
        whitespace = String(params[0]);
      } else {
        whitespace = " \n\r\t\f\x0B\xA0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u3000";
      }

      for (var i = 0; i < str.length; i++) {
        if (!whitespace.includes(str.charAt(i))) {
          str = str.slice(Math.max(0, i));
          break;
        }
      }

      for (var _i3 = str.length - 1; _i3 >= 0; _i3--) {
        if (!whitespace.includes(str.charAt(_i3))) {
          str = str.slice(0, Math.max(0, _i3 + 1));
          break;
        }
      }

      return whitespace.includes(str.charAt(0)) ? '' : str;
    },
    truncate: function truncate(value, params) {
      var length = 30;
      var preserve = false;
      var separator = '...';
      value = String(value);

      if (params) {
        if (params[0]) {
          length = params[0];
        }

        if (params[1]) {
          preserve = params[1];
        }

        if (params[2]) {
          separator = params[2];
        }
      }

      if (value.length > length) {
        if (preserve) {
          length = value.indexOf(' ', length);

          if (length === -1) {
            return value;
          }
        }

        value = value.slice(0, length) + separator;
      }

      return value;
    },
    slice: function slice(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      if (params === undefined || params.length === 0) {
        throw new Twig.Error('slice filter expects at least 1 argument');
      } // Default to start of string


      var start = params[0] || 0; // Default to length of string

      var length = params.length > 1 ? params[1] : value.length; // Handle negative start values

      var startIndex = start >= 0 ? start : Math.max(value.length + start, 0);

      if (Twig.lib.is('Array', value)) {
        var output = [];

        for (var i = startIndex; i < startIndex + length && i < value.length; i++) {
          output.push(value[i]);
        }

        return output;
      }

      if (Twig.lib.is('String', value)) {
        return value.slice(startIndex, startIndex + length);
      }

      throw new Twig.Error('slice filter expects value to be an array or string');
    },
    abs: function abs(value) {
      if (value === undefined || value === null) {
        return;
      }

      return Math.abs(value);
    },
    first: function first(value) {
      if (is('Array', value)) {
        return value[0];
      }

      if (is('Object', value)) {
        if ('_keys' in value) {
          return value[value._keys[0]];
        }
      } else if (typeof value === 'string') {
        return value.slice(0, 1);
      }
    },
    split: function split(value, params) {
      if (value === undefined || value === null) {
        return;
      }

      if (params === undefined || params.length === 0 || params.length > 2) {
        throw new Twig.Error('split filter expects 1 or 2 argument');
      }

      if (Twig.lib.is('String', value)) {
        var delimiter = params[0];
        var limit = params[1];
        var split = value.split(delimiter);

        if (limit === undefined) {
          return split;
        }

        if (limit < 0) {
          return value.split(delimiter, split.length + limit);
        }

        var limitedSplit = [];

        if (delimiter === '') {
          // Empty delimiter
          // "aabbcc"|split('', 2)
          //     -> ['aa', 'bb', 'cc']
          while (split.length > 0) {
            var temp = '';

            for (var i = 0; i < limit && split.length > 0; i++) {
              temp += split.shift();
            }

            limitedSplit.push(temp);
          }
        } else {
          // Non-empty delimiter
          // "one,two,three,four,five"|split(',', 3)
          //     -> ['one', 'two', 'three,four,five']
          for (var _i4 = 0; _i4 < limit - 1 && split.length > 0; _i4++) {
            limitedSplit.push(split.shift());
          }

          if (split.length > 0) {
            limitedSplit.push(split.join(delimiter));
          }
        }

        return limitedSplit;
      }

      throw new Twig.Error('split filter expects value to be a string');
    },
    last: function last(value) {
      if (Twig.lib.is('Object', value)) {
        var keys;

        if (value._keys === undefined) {
          keys = Object.keys(value);
        } else {
          keys = value._keys;
        }

        return value[keys[keys.length - 1]];
      }

      if (Twig.lib.is('Number', value)) {
        return value.toString().slice(-1);
      } // String|array


      return value[value.length - 1];
    },
    raw: function raw(value) {
      return new Twig.Markup(value || '');
    },
    batch: function batch(items, params) {
      var size = params.shift();
      var fill = params.shift();
      var last;
      var missing;

      if (!Twig.lib.is('Array', items)) {
        throw new Twig.Error('batch filter expects items to be an array');
      }

      if (!Twig.lib.is('Number', size)) {
        throw new Twig.Error('batch filter expects size to be a number');
      }

      size = Math.ceil(size);
      var result = Twig.lib.chunkArray(items, size);

      if (fill && items.length % size !== 0) {
        last = result.pop();
        missing = size - last.length;

        while (missing--) {
          last.push(fill);
        }

        result.push(last);
      }

      return result;
    },
    round: function round(value, params) {
      params = params || [];
      var precision = params.length > 0 ? params[0] : 0;
      var method = params.length > 1 ? params[1] : 'common';
      value = parseFloat(value);

      if (precision && !Twig.lib.is('Number', precision)) {
        throw new Twig.Error('round filter expects precision to be a number');
      }

      if (method === 'common') {
        return Twig.lib.round(value, precision);
      }

      if (!Twig.lib.is('Function', Math[method])) {
        throw new Twig.Error('round filter expects method to be \'floor\', \'ceil\', or \'common\'');
      }

      return Math[method](value * Math.pow(10, precision)) / Math.pow(10, precision);
    },
    spaceless: function spaceless(value) {
      return value.replace(/>\s+</g, '><').trim();
    }
  };

  Twig.filter = function (filter, value, params) {
    var state = this;

    if (!Twig.filters[filter]) {
      throw new Twig.Error('Unable to find filter ' + filter);
    }

    return Twig.filters[filter].call(state, value, params);
  };

  Twig.filter.extend = function (filter, definition) {
    Twig.filters[filter] = definition;
  };

  return Twig;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

// ## twig.functions.js
//
// This file handles parsing filters.
module.exports = function (Twig) {
  /**
   * @constant
   * @type {string}
   */
  var TEMPLATE_NOT_FOUND_MESSAGE = 'Template "{name}" is not defined.';
  Twig.functions = {
    //  Attribute, block, constant, date, dump, parent, random,.
    // Range function from http://phpjs.org/functions/range:499
    // Used under an MIT License
    range: function range(low, high, step) {
      // http://kevin.vanzonneveld.net
      // +   original by: Waldo Malqui Silva
      // *     example 1: range ( 0, 12 );
      // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      // *     example 2: range( 0, 100, 10 );
      // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      // *     example 3: range( 'a', 'i' );
      // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
      // *     example 4: range( 'c', 'a' );
      // *     returns 4: ['c', 'b', 'a']
      var matrix = [];
      var inival;
      var endval;
      var walker = step || 1;
      var chars = false;

      if (!isNaN(low) && !isNaN(high)) {
        inival = parseInt(low, 10);
        endval = parseInt(high, 10);
      } else if (isNaN(low) && isNaN(high)) {
        chars = true;
        inival = low.charCodeAt(0);
        endval = high.charCodeAt(0);
      } else {
        inival = isNaN(low) ? 0 : low;
        endval = isNaN(high) ? 0 : high;
      }

      var plus = !(inival > endval);

      if (plus) {
        while (inival <= endval) {
          matrix.push(chars ? String.fromCharCode(inival) : inival);
          inival += walker;
        }
      } else {
        while (inival >= endval) {
          matrix.push(chars ? String.fromCharCode(inival) : inival);
          inival -= walker;
        }
      }

      return matrix;
    },
    cycle: function cycle(arr, i) {
      var pos = i % arr.length;
      return arr[pos];
    },
    dump: function dump() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Don't pass arguments to `Array.slice`, that is a performance killer
      var argsCopy = [].concat(args);
      var state = this;
      var EOL = '\n';
      var indentChar = '  ';
      var indentTimes = 0;
      var out = '';

      var indent = function indent(times) {
        var ind = '';

        while (times > 0) {
          times--;
          ind += indentChar;
        }

        return ind;
      };

      var displayVar = function displayVar(variable) {
        out += indent(indentTimes);

        if ((0, _typeof2["default"])(variable) === 'object') {
          dumpVar(variable);
        } else if (typeof variable === 'function') {
          out += 'function()' + EOL;
        } else if (typeof variable === 'string') {
          out += 'string(' + variable.length + ') "' + variable + '"' + EOL;
        } else if (typeof variable === 'number') {
          out += 'number(' + variable + ')' + EOL;
        } else if (typeof variable === 'boolean') {
          out += 'bool(' + variable + ')' + EOL;
        }
      };

      var dumpVar = function dumpVar(variable) {
        var i;

        if (variable === null) {
          out += 'NULL' + EOL;
        } else if (variable === undefined) {
          out += 'undefined' + EOL;
        } else if ((0, _typeof2["default"])(variable) === 'object') {
          out += indent(indentTimes) + (0, _typeof2["default"])(variable);
          indentTimes++;

          out += '(' + function (obj) {
            var size = 0;
            var key;

            for (key in obj) {
              if (Object.hasOwnProperty.call(obj, key)) {
                size++;
              }
            }

            return size;
          }(variable) + ') {' + EOL;

          for (i in variable) {
            if (Object.hasOwnProperty.call(variable, i)) {
              out += indent(indentTimes) + '[' + i + ']=> ' + EOL;
              displayVar(variable[i]);
            }
          }

          indentTimes--;
          out += indent(indentTimes) + '}' + EOL;
        } else {
          displayVar(variable);
        }
      }; // Handle no argument case by dumping the entire render context


      if (argsCopy.length === 0) {
        argsCopy.push(state.context);
      }

      argsCopy.forEach(function (variable) {
        dumpVar(variable);
      });
      return out;
    },
    date: function date(_date) {
      var dateObj;

      if (_date === undefined || _date === null || _date === '') {
        dateObj = new Date();
      } else if (Twig.lib.is('Date', _date)) {
        dateObj = _date;
      } else if (Twig.lib.is('String', _date)) {
        if (_date.match(/^\d+$/)) {
          dateObj = new Date(_date * 1000);
        } else {
          dateObj = new Date(Twig.lib.strtotime(_date) * 1000);
        }
      } else if (Twig.lib.is('Number', _date)) {
        // Timestamp
        dateObj = new Date(_date * 1000);
      } else {
        throw new Twig.Error('Unable to parse date ' + _date);
      }

      return dateObj;
    },
    block: function block(blockName) {
      var state = this;
      var block = state.getBlock(blockName);

      if (block !== undefined) {
        return block.render(state, state.context);
      }
    },
    parent: function parent() {
      var state = this;
      return state.getBlock(state.getNestingStackToken(Twig.logic.type.block).blockName, true).render(state, state.context);
    },
    attribute: function attribute(object, method, params) {
      if (Twig.lib.is('Object', object)) {
        if (Object.hasOwnProperty.call(object, method)) {
          if (typeof object[method] === 'function') {
            return object[method].apply(undefined, params);
          }

          return object[method];
        }
      } // Array will return element 0-index


      return object ? object[method] || undefined : undefined;
    },
    max: function max(values) {
      if (Twig.lib.is('Object', values)) {
        delete values._keys;
        return Twig.lib.max(values);
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return Reflect.apply(Twig.lib.max, null, [values].concat(args));
    },
    min: function min(values) {
      if (Twig.lib.is('Object', values)) {
        delete values._keys;
        return Twig.lib.min(values);
      }

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return Reflect.apply(Twig.lib.min, null, [values].concat(args));
    },

    /* eslint-disable-next-line camelcase */
    template_from_string: function template_from_string(template) {
      var state = this;

      if (template === undefined) {
        template = '';
      }

      return Twig.Templates.parsers.twig({
        options: state.template.options,
        data: template
      });
    },
    random: function random(value) {
      var LIMIT_INT31 = 0x80000000;

      function getRandomNumber(n) {
        var random = Math.floor(Math.random() * LIMIT_INT31);
        var min = Math.min.call(null, 0, n);
        var max = Math.max.call(null, 0, n);
        return min + Math.floor((max - min + 1) * random / LIMIT_INT31);
      }

      if (Twig.lib.is('Number', value)) {
        return getRandomNumber(value);
      }

      if (Twig.lib.is('String', value)) {
        return value.charAt(getRandomNumber(value.length - 1));
      }

      if (Twig.lib.is('Array', value)) {
        return value[getRandomNumber(value.length - 1)];
      }

      if (Twig.lib.is('Object', value)) {
        var keys = Object.keys(value);
        return value[keys[getRandomNumber(keys.length - 1)]];
      }

      return getRandomNumber(LIMIT_INT31 - 1);
    },

    /**
     * Returns the content of a template without rendering it
     * @param {string} name
     * @param {boolean} [ignoreMissing=false]
     * @returns {string}
     */
    source: function source(name, ignoreMissing) {
      var templateSource;
      var templateFound = false;
      var isNodeEnvironment =   true && typeof module.exports !== 'undefined' && typeof window === 'undefined';
      var loader;
      var path = name; // If we are running in a node.js environment, set the loader to 'fs'.

      if (isNodeEnvironment) {
        loader = 'fs';
      } else {
        loader = 'ajax';
      } // Build the params object


      var params = {
        id: name,
        path: path,
        method: loader,
        parser: 'source',
        async: false,
        fetchTemplateSource: true
      }; // Default ignoreMissing to false

      if (typeof ignoreMissing === 'undefined') {
        ignoreMissing = false;
      } // Try to load the remote template
      //
      // on exception, log it


      try {
        templateSource = Twig.Templates.loadRemote(name, params); // If the template is undefined or null, set the template to an empty string and do NOT flip the
        // boolean indicating we found the template
        //
        // else, all is good! flip the boolean indicating we found the template

        if (typeof templateSource === 'undefined' || templateSource === null) {
          templateSource = '';
        } else {
          templateFound = true;
        }
      } catch (error) {
        Twig.log.debug('Twig.functions.source: ', 'Problem loading template  ', error);
      } // If the template was NOT found AND we are not ignoring missing templates, return the same message
      // that is returned by the PHP implementation of the twig source() function
      //
      // else, return the template source


      if (!templateFound && !ignoreMissing) {
        return TEMPLATE_NOT_FOUND_MESSAGE.replace('{name}', name);
      }

      return templateSource;
    }
  };

  Twig._function = function (_function, value, params) {
    if (!Twig.functions[_function]) {
      throw new Twig.Error('Unable to find function ' + _function);
    }

    return Twig.functions[_function](value, params);
  };

  Twig._function.extend = function (_function, definition) {
    Twig.functions[_function] = definition;
  };

  return Twig;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.lib.js
//
// This file contains 3rd party libraries used within twig.
//
// Copies of the licenses for the code included here can be found in the
// LICENSES.md file.
//
module.exports = function (Twig) {
  // Namespace for libraries
  Twig.lib = {};
  Twig.lib.sprintf = __webpack_require__(4);
  Twig.lib.vsprintf = __webpack_require__(21);
  Twig.lib.round = __webpack_require__(22);
  Twig.lib.max = __webpack_require__(24);
  Twig.lib.min = __webpack_require__(25);
  Twig.lib.stripTags = __webpack_require__(26);
  Twig.lib.strtotime = __webpack_require__(28);
  Twig.lib.date = __webpack_require__(29);
  Twig.lib.boolval = __webpack_require__(30);

  Twig.lib.is = function (type, obj) {
    if (typeof obj === 'undefined' || obj === null) {
      return false;
    }

    switch (type) {
      case 'Array':
        return Array.isArray(obj);

      case 'Date':
        return obj instanceof Date;

      case 'String':
        return typeof obj === 'string' || obj instanceof String;

      case 'Number':
        return typeof obj === 'number' || obj instanceof Number;

      case 'Function':
        return typeof obj === 'function';

      case 'Object':
        return obj instanceof Object;

      default:
        return false;
    }
  };

  Twig.lib.replaceAll = function (string, search, replace) {
    // Escape possible regular expression syntax
    var searchEscaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return string.replace(new RegExp(searchEscaped, 'g'), replace);
  }; // Chunk an array (arr) into arrays of (size) items, returns an array of arrays, or an empty array on invalid input


  Twig.lib.chunkArray = function (arr, size) {
    var returnVal = [];
    var x = 0;
    var len = arr.length;

    if (size < 1 || !Array.isArray(arr)) {
      return [];
    }

    while (x < len) {
      returnVal.push(arr.slice(x, x += size));
    }

    return returnVal;
  };

  return Twig;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function vsprintf(format, args) {
  //  discuss at: https://locutus.io/php/vsprintf/
  // original by: ejsanders
  //   example 1: vsprintf('%04d-%02d-%02d', [1988, 8, 1])
  //   returns 1: '1988-08-01'

  var sprintf = __webpack_require__(4);

  return sprintf.apply(this, [format].concat(args));
};
//# sourceMappingURL=vsprintf.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function roundToInt(value, mode) {
  var tmp = Math.floor(Math.abs(value) + 0.5);

  if (mode === 'PHP_ROUND_HALF_DOWN' && value === tmp - 0.5 || mode === 'PHP_ROUND_HALF_EVEN' && value === 0.5 + 2 * Math.floor(tmp / 2) || mode === 'PHP_ROUND_HALF_ODD' && value === 0.5 + 2 * Math.floor(tmp / 2) - 1) {
    tmp -= 1;
  }

  return value < 0 ? -tmp : tmp;
}

module.exports = function round(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PHP_ROUND_HALF_UP';

  //  discuss at: https://locutus.io/php/round/
  // original by: Philip Peterson
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: T.Wild
  //  revised by: Rafał Kukawski (https://blog.kukawski.pl)
  //    input by: Greenseed
  //    input by: meo
  //    input by: William
  //    input by: Josep Sanz (https://www.ws3.es/)
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  //  revised by: Rafał Kukawski
  //   example 1: round(1241757, -3)
  //   returns 1: 1242000
  //   example 2: round(3.6)
  //   returns 2: 4
  //   example 3: round(2.835, 2)
  //   returns 3: 2.84
  //   example 4: round(1.1749999999999, 2)
  //   returns 4: 1.17
  //   example 5: round(58551.799999999996, 2)
  //   returns 5: 58551.8
  //   example 6: round(4096.485, 2)
  //   returns 6: 4096.49

  var floatCast = __webpack_require__(23);
  var intCast = __webpack_require__(5);
  var p;

  // the code is heavily based on the native PHP implementation
  // https://github.com/php/php-src/blob/PHP-7.4/ext/standard/math.c#L355

  value = floatCast(value);
  precision = intCast(precision);
  p = Math.pow(10, precision);

  if (isNaN(value) || !isFinite(value)) {
    return value;
  }

  // if value already integer and positive precision
  // then nothing to do, return early
  if (Math.trunc(value) === value && precision >= 0) {
    return value;
  }

  // PHP does a pre-rounding before rounding to desired precision
  // https://wiki.php.net/rfc/rounding#pre-rounding_to_the_value_s_precision_if_possible
  var preRoundPrecision = 14 - Math.floor(Math.log10(Math.abs(value)));

  if (preRoundPrecision > precision && preRoundPrecision - 15 < precision) {
    value = roundToInt(value * Math.pow(10, preRoundPrecision), mode);
    value /= Math.pow(10, Math.abs(precision - preRoundPrecision));
  } else {
    value *= p;
  }

  value = roundToInt(value, mode);

  return value / p;
};
//# sourceMappingURL=round.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _php_cast_float(value) {
  // eslint-disable-line camelcase
  // original by: Rafał Kukawski
  //   example 1: _php_cast_float(false)
  //   returns 1: 0
  //   example 2: _php_cast_float(true)
  //   returns 2: 1
  //   example 3: _php_cast_float(0)
  //   returns 3: 0
  //   example 4: _php_cast_float(1)
  //   returns 4: 1
  //   example 5: _php_cast_float(3.14)
  //   returns 5: 3.14
  //   example 6: _php_cast_float('')
  //   returns 6: 0
  //   example 7: _php_cast_float('0')
  //   returns 7: 0
  //   example 8: _php_cast_float('abc')
  //   returns 8: 0
  //   example 9: _php_cast_float(null)
  //   returns 9: 0
  //  example 10: _php_cast_float(undefined)
  //  returns 10: 0
  //  example 11: _php_cast_float('123abc')
  //  returns 11: 123
  //  example 12: _php_cast_float('123e4')
  //  returns 12: 1230000
  //  example 13: _php_cast_float(0x200000001)
  //  returns 13: 8589934593
  //  example 14: _php_cast_float('3.14abc')
  //  returns 14: 3.14

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'number':
      return value;
    case 'string':
      return parseFloat(value) || 0;
    case 'boolean':
    // fall through
    default:
      // PHP docs state, that for types other than string
      // conversion is {input type}->int->float
      return __webpack_require__(5)(value);
  }
};
//# sourceMappingURL=_php_cast_float.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function max() {
  //  discuss at: https://locutus.io/php/max/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: max(1, 3, 5, 6, 7)
  //   returns 1: 7
  //   example 2: max([2, 4, 5])
  //   returns 2: 5
  //   example 3: max(0, 'hello')
  //   returns 3: 0
  //   example 4: max('hello', 0)
  //   returns 4: 'hello'
  //   example 5: max(-1, 'hello')
  //   returns 5: 'hello'
  //   example 6: max([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 5, 7]

  var ar;
  var retVal;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    } else {
      var ar = [];
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          ar.push(obj[i]);
        }
      }
      return ar;
    }
  };
  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to max()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for max()');
    }
    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for max()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];
  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === 1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=max.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function min() {
  //  discuss at: https://locutus.io/php/min/
  // original by: Onno Marsman (https://twitter.com/onnomarsman)
  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Jack
  //      note 1: Long code cause we're aiming for maximum PHP compatibility
  //   example 1: min(1, 3, 5, 6, 7)
  //   returns 1: 1
  //   example 2: min([2, 4, 5])
  //   returns 2: 2
  //   example 3: min(0, 'hello')
  //   returns 3: 0
  //   example 4: min('hello', 0)
  //   returns 4: 'hello'
  //   example 5: min(-1, 'hello')
  //   returns 5: -1
  //   example 6: min([2, 4, 8], [2, 5, 7])
  //   returns 6: [2, 4, 8]

  var ar;
  var retVal;
  var i = 0;
  var n = 0;
  var argv = arguments;
  var argc = argv.length;
  var _obj2Array = function _obj2Array(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return obj;
    }
    var ar = [];
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ar.push(obj[i]);
      }
    }
    return ar;
  };

  var _compare = function _compare(current, next) {
    var i = 0;
    var n = 0;
    var tmp = 0;
    var nl = 0;
    var cl = 0;

    if (current === next) {
      return 0;
    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
        current = _obj2Array(current);
        next = _obj2Array(next);
        cl = current.length;
        nl = next.length;
        if (nl > cl) {
          return 1;
        } else if (nl < cl) {
          return -1;
        }
        for (i = 0, n = cl; i < n; ++i) {
          tmp = _compare(current[i], next[i]);
          if (tmp === 1) {
            return 1;
          } else if (tmp === -1) {
            return -1;
          }
        }
        return 0;
      }
      return -1;
    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
      return 1;
    } else if (isNaN(next) && !isNaN(current)) {
      if (current === 0) {
        return 0;
      }
      return current < 0 ? 1 : -1;
    } else if (isNaN(current) && !isNaN(next)) {
      if (next === 0) {
        return 0;
      }
      return next > 0 ? 1 : -1;
    }

    if (next === current) {
      return 0;
    }

    return next > current ? 1 : -1;
  };

  if (argc === 0) {
    throw new Error('At least one value should be passed to min()');
  } else if (argc === 1) {
    if (_typeof(argv[0]) === 'object') {
      ar = _obj2Array(argv[0]);
    } else {
      throw new Error('Wrong parameter count for min()');
    }

    if (ar.length === 0) {
      throw new Error('Array must contain at least one element for min()');
    }
  } else {
    ar = argv;
  }

  retVal = ar[0];

  for (i = 1, n = ar.length; i < n; ++i) {
    if (_compare(retVal, ar[i]) === -1) {
      retVal = ar[i];
    }
  }

  return retVal;
};
//# sourceMappingURL=min.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function strip_tags(input, allowed) {
  // eslint-disable-line camelcase
  //  discuss at: https://locutus.io/php/strip_tags/
  // original by: Kevin van Zonneveld (https://kvz.io)
  // improved by: Luke Godfrey
  // improved by: Kevin van Zonneveld (https://kvz.io)
  //    input by: Pul
  //    input by: Alex
  //    input by: Marc Palau
  //    input by: Brett Zamir (https://brett-zamir.me)
  //    input by: Bobby Drake
  //    input by: Evertjan Garretsen
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Eric Nagel
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Tomasz Wesolowski
  // bugfixed by: Tymon Sturgeon (https://scryptonite.com)
  // bugfixed by: Tim de Koning (https://www.kingsquare.nl)
  //  revised by: Rafał Kukawski (https://blog.kukawski.pl)
  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
  //   returns 2: '<p>Kevin van Zonneveld</p>'
  //   example 3: strip_tags("<a href='https://kvz.io'>Kevin van Zonneveld</a>", "<a>")
  //   returns 3: "<a href='https://kvz.io'>Kevin van Zonneveld</a>"
  //   example 4: strip_tags('1 < 5 5 > 1')
  //   returns 4: '1 < 5 5 > 1'
  //   example 5: strip_tags('1 <br/> 1')
  //   returns 5: '1  1'
  //   example 6: strip_tags('1 <br/> 1', '<br>')
  //   returns 6: '1 <br/> 1'
  //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
  //   returns 7: '1 <br/> 1'
  //   example 8: strip_tags('<i>hello</i> <<foo>script>world<</foo>/script>')
  //   returns 8: 'hello world'
  //   example 9: strip_tags(4)
  //   returns 9: '4'

  var _phpCastString = __webpack_require__(27);

  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

  var tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  var after = _phpCastString(input);
  // removes tha '<' char at the end of the string to replicate PHP's behaviour
  after = after.substring(after.length - 1) === '<' ? after.substring(0, after.length - 1) : after;

  // recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
  while (true) {
    var before = after;
    after = before.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });

    // return once no more tags are removed
    if (before === after) {
      return after;
    }
  }
};
//# sourceMappingURL=strip_tags.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _phpCastString(value) {
  // original by: Rafał Kukawski
  //   example 1: _phpCastString(true)
  //   returns 1: '1'
  //   example 2: _phpCastString(false)
  //   returns 2: ''
  //   example 3: _phpCastString('foo')
  //   returns 3: 'foo'
  //   example 4: _phpCastString(0/0)
  //   returns 4: 'NAN'
  //   example 5: _phpCastString(1/0)
  //   returns 5: 'INF'
  //   example 6: _phpCastString(-1/0)
  //   returns 6: '-INF'
  //   example 7: _phpCastString(null)
  //   returns 7: ''
  //   example 8: _phpCastString(undefined)
  //   returns 8: ''
  //   example 9: _phpCastString([])
  //   returns 9: 'Array'
  //   example 10: _phpCastString({})
  //   returns 10: 'Object'
  //   example 11: _phpCastString(0)
  //   returns 11: '0'
  //   example 12: _phpCastString(1)
  //   returns 12: '1'
  //   example 13: _phpCastString(3.14)
  //   returns 13: '3.14'

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  switch (type) {
    case 'boolean':
      return value ? '1' : '';
    case 'string':
      return value;
    case 'number':
      if (isNaN(value)) {
        return 'NAN';
      }

      if (!isFinite(value)) {
        return (value < 0 ? '-' : '') + 'INF';
      }

      return value + '';
    case 'undefined':
      return '';
    case 'object':
      if (Array.isArray(value)) {
        return 'Array';
      }

      if (value !== null) {
        return 'Object';
      }

      return '';
    case 'function':
    // fall through
    default:
      throw new Error('Unsupported value type');
  }
};
//# sourceMappingURL=_phpCastString.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reSpace = '[ \\t]+';
var reSpaceOpt = '[ \\t]*';
var reMeridian = '(?:([ap])\\.?m\\.?([\\t ]|$))';
var reHour24 = '(2[0-4]|[01]?[0-9])';
var reHour24lz = '([01][0-9]|2[0-4])';
var reHour12 = '(0?[1-9]|1[0-2])';
var reMinute = '([0-5]?[0-9])';
var reMinutelz = '([0-5][0-9])';
var reSecond = '(60|[0-5]?[0-9])';
var reSecondlz = '(60|[0-5][0-9])';
var reFrac = '(?:\\.([0-9]+))';

var reDayfull = 'sunday|monday|tuesday|wednesday|thursday|friday|saturday';
var reDayabbr = 'sun|mon|tue|wed|thu|fri|sat';
var reDaytext = reDayfull + '|' + reDayabbr + '|weekdays?';

var reReltextnumber = 'first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth';
var reReltexttext = 'next|last|previous|this';
var reReltextunit = '(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|' + reDaytext;

var reYear = '([0-9]{1,4})';
var reYear2 = '([0-9]{2})';
var reYear4 = '([0-9]{4})';
var reYear4withSign = '([+-]?[0-9]{4})';
var reMonth = '(1[0-2]|0?[0-9])';
var reMonthlz = '(0[0-9]|1[0-2])';
var reDay = '(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)';
var reDaylz = '(0[0-9]|[1-2][0-9]|3[01])';

var reMonthFull = 'january|february|march|april|may|june|july|august|september|october|november|december';
var reMonthAbbr = 'jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec';
var reMonthroman = 'i[vx]|vi{0,3}|xi{0,2}|i{1,3}';
var reMonthText = '(' + reMonthFull + '|' + reMonthAbbr + '|' + reMonthroman + ')';

var reTzCorrection = '((?:GMT)?([+-])' + reHour24 + ':?' + reMinute + '?)';
var reDayOfYear = '(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])';
var reWeekOfYear = '(0[1-9]|[1-4][0-9]|5[0-3])';

var reDateNoYear = reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]*';

function processMeridian(hour, meridian) {
  meridian = meridian && meridian.toLowerCase();

  switch (meridian) {
    case 'a':
      hour += hour === 12 ? -12 : 0;
      break;
    case 'p':
      hour += hour !== 12 ? 12 : 0;
      break;
  }

  return hour;
}

function processYear(yearStr) {
  var year = +yearStr;

  if (yearStr.length < 4 && year < 100) {
    year += year < 70 ? 2000 : 1900;
  }

  return year;
}

function lookupMonth(monthStr) {
  return {
    jan: 0,
    january: 0,
    i: 0,
    feb: 1,
    february: 1,
    ii: 1,
    mar: 2,
    march: 2,
    iii: 2,
    apr: 3,
    april: 3,
    iv: 3,
    may: 4,
    v: 4,
    jun: 5,
    june: 5,
    vi: 5,
    jul: 6,
    july: 6,
    vii: 6,
    aug: 7,
    august: 7,
    viii: 7,
    sep: 8,
    sept: 8,
    september: 8,
    ix: 8,
    oct: 9,
    october: 9,
    x: 9,
    nov: 10,
    november: 10,
    xi: 10,
    dec: 11,
    december: 11,
    xii: 11
  }[monthStr.toLowerCase()];
}

function lookupWeekday(dayStr) {
  var desiredSundayNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var dayNumbers = {
    mon: 1,
    monday: 1,
    tue: 2,
    tuesday: 2,
    wed: 3,
    wednesday: 3,
    thu: 4,
    thursday: 4,
    fri: 5,
    friday: 5,
    sat: 6,
    saturday: 6,
    sun: 0,
    sunday: 0
  };

  return dayNumbers[dayStr.toLowerCase()] || desiredSundayNumber;
}

function lookupRelative(relText) {
  var relativeNumbers = {
    last: -1,
    previous: -1,
    this: 0,
    first: 1,
    next: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eight: 8,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12
  };

  var relativeBehavior = {
    this: 1
  };

  var relTextLower = relText.toLowerCase();

  return {
    amount: relativeNumbers[relTextLower],
    behavior: relativeBehavior[relTextLower] || 0
  };
}

function processTzCorrection(tzOffset, oldValue) {
  var reTzCorrectionLoose = /(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i;
  tzOffset = tzOffset && tzOffset.match(reTzCorrectionLoose);

  if (!tzOffset) {
    return oldValue;
  }

  var sign = tzOffset[1] === '-' ? 1 : -1;
  var hours = +tzOffset[2];
  var minutes = +tzOffset[4];

  if (!tzOffset[4] && !tzOffset[3]) {
    minutes = Math.floor(hours % 100);
    hours = Math.floor(hours / 100);
  }

  return sign * (hours * 60 + minutes);
}

var formats = {
  yesterday: {
    regex: /^yesterday/i,
    name: 'yesterday',
    callback: function callback() {
      this.rd -= 1;
      return this.resetTime();
    }
  },

  now: {
    regex: /^now/i,
    name: 'now'
    // do nothing
  },

  noon: {
    regex: /^noon/i,
    name: 'noon',
    callback: function callback() {
      return this.resetTime() && this.time(12, 0, 0, 0);
    }
  },

  midnightOrToday: {
    regex: /^(midnight|today)/i,
    name: 'midnight | today',
    callback: function callback() {
      return this.resetTime();
    }
  },

  tomorrow: {
    regex: /^tomorrow/i,
    name: 'tomorrow',
    callback: function callback() {
      this.rd += 1;
      return this.resetTime();
    }
  },

  timestamp: {
    regex: /^@(-?\d+)/i,
    name: 'timestamp',
    callback: function callback(match, timestamp) {
      this.rs += +timestamp;
      this.y = 1970;
      this.m = 0;
      this.d = 1;
      this.dates = 0;

      return this.resetTime() && this.zone(0);
    }
  },

  firstOrLastDay: {
    regex: /^(first|last) day of/i,
    name: 'firstdayof | lastdayof',
    callback: function callback(match, day) {
      if (day.toLowerCase() === 'first') {
        this.firstOrLastDayOfMonth = 1;
      } else {
        this.firstOrLastDayOfMonth = -1;
      }
    }
  },

  backOrFrontOf: {
    regex: RegExp('^(back|front) of ' + reHour24 + reSpaceOpt + reMeridian + '?', 'i'),
    name: 'backof | frontof',
    callback: function callback(match, side, hours, meridian) {
      var back = side.toLowerCase() === 'back';
      var hour = +hours;
      var minute = 15;

      if (!back) {
        hour -= 1;
        minute = 45;
      }

      hour = processMeridian(hour, meridian);

      return this.resetTime() && this.time(hour, minute, 0, 0);
    }
  },

  weekdayOf: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reDayfull + '|' + reDayabbr + ')' + reSpace + 'of', 'i'),
    name: 'weekdayof'
    // todo
  },

  mssqltime: {
    regex: RegExp('^' + reHour12 + ':' + reMinutelz + ':' + reSecondlz + '[:.]([0-9]+)' + reMeridian, 'i'),
    name: 'mssqltime',
    callback: function callback(match, hour, minute, second, frac, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, +frac.substr(0, 3));
    }
  },

  timeLong12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'timelong12',
    callback: function callback(match, hour, minute, second, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  timeShort12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'timeshort12',
    callback: function callback(match, hour, minute, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  },

  timeTiny12: {
    regex: RegExp('^' + reHour12 + reSpaceOpt + reMeridian, 'i'),
    name: 'timetiny12',
    callback: function callback(match, hour, meridian) {
      return this.time(processMeridian(+hour, meridian), 0, 0, 0);
    }
  },

  soap: {
    regex: RegExp('^' + reYear4 + '-' + reMonthlz + '-' + reDaylz + 'T' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reFrac + reTzCorrection + '?', 'i'),
    name: 'soap',
    callback: function callback(match, year, month, day, hour, minute, second, frac, tzCorrection) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, +frac.substr(0, 3)) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  wddx: {
    regex: RegExp('^' + reYear4 + '-' + reMonth + '-' + reDay + 'T' + reHour24 + ':' + reMinute + ':' + reSecond),
    name: 'wddx',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  exif: {
    regex: RegExp('^' + reYear4 + ':' + reMonthlz + ':' + reDaylz + ' ' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz, 'i'),
    name: 'exif',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpc: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + 'T' + reHour24 + ':' + reMinutelz + ':' + reSecondlz),
    name: 'xmlrpc',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpcNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + '[Tt]' + reHour24 + reMinutelz + reSecondlz),
    name: 'xmlrpcnocolon',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  clf: {
    regex: RegExp('^' + reDay + '/(' + reMonthAbbr + ')/' + reYear4 + ':' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reSpace + reTzCorrection, 'i'),
    name: 'clf',
    callback: function callback(match, day, month, year, hour, minute, second, tzCorrection) {
      return this.ymd(+year, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  iso8601long: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond + reFrac, 'i'),
    name: 'iso8601long',
    callback: function callback(match, hour, minute, second, frac) {
      return this.time(+hour, +minute, +second, +frac.substr(0, 3));
    }
  },

  dateTextual: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]+' + reYear, 'i'),
    name: 'datetextual',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  pointedDate4: {
    regex: RegExp('^' + reDay + '[.\\t-]' + reMonth + '[.-]' + reYear4),
    name: 'pointeddate4',
    callback: function callback(match, day, month, year) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pointedDate2: {
    regex: RegExp('^' + reDay + '[.\\t]' + reMonth + '\\.' + reYear2),
    name: 'pointeddate2',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  timeLong24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond),
    name: 'timelong24',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  dateNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz),
    name: 'datenocolon',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pgydotd: {
    regex: RegExp('^' + reYear4 + '\\.?' + reDayOfYear),
    name: 'pgydotd',
    callback: function callback(match, year, day) {
      return this.ymd(+year, 0, +day);
    }
  },

  timeShort24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'timeshort24',
    callback: function callback(match, hour, minute) {
      return this.time(+hour, +minute, 0, 0);
    }
  },

  iso8601noColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz + reSecondlz, 'i'),
    name: 'iso8601nocolon',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  iso8601dateSlash: {
    // eventhough the trailing slash is optional in PHP
    // here it's mandatory and inputs without the slash
    // are handled by dateslash
    regex: RegExp('^' + reYear4 + '/' + reMonthlz + '/' + reDaylz + '/'),
    name: 'iso8601dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  dateSlash: {
    regex: RegExp('^' + reYear4 + '/' + reMonth + '/' + reDay),
    name: 'dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  american: {
    regex: RegExp('^' + reMonth + '/' + reDay + '/' + reYear),
    name: 'american',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  americanShort: {
    regex: RegExp('^' + reMonth + '/' + reDay),
    name: 'americanshort',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, month - 1, +day);
    }
  },

  gnuDateShortOrIso8601date2: {
    // iso8601date2 is complete subset of gnudateshort
    regex: RegExp('^' + reYear + '-' + reMonth + '-' + reDay),
    name: 'gnudateshort | iso8601date2',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  iso8601date4: {
    regex: RegExp('^' + reYear4withSign + '-' + reMonthlz + '-' + reDaylz),
    name: 'iso8601date4',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  gnuNoColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz, 'i'),
    name: 'gnunocolon',
    callback: function callback(match, hour, minute) {
      // this rule is a special case
      // if time was already set once by any preceding rule, it sets the captured value as year
      switch (this.times) {
        case 0:
          return this.time(+hour, +minute, 0, this.f);
        case 1:
          this.y = hour * 100 + +minute;
          this.times++;

          return true;
        default:
          return false;
      }
    }
  },

  gnuDateShorter: {
    regex: RegExp('^' + reYear4 + '-' + reMonth),
    name: 'gnudateshorter',
    callback: function callback(match, year, month) {
      return this.ymd(+year, month - 1, 1);
    }
  },

  pgTextReverse: {
    // note: allowed years are from 32-9999
    // years below 32 should be treated as days in datefull
    regex: RegExp('^' + '(\\d{3,4}|[4-9]\\d|3[2-9])-(' + reMonthAbbr + ')-' + reDaylz, 'i'),
    name: 'pgtextreverse',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateFull: {
    regex: RegExp('^' + reDay + '[ \\t.-]*' + reMonthText + '[ \\t.-]*' + reYear, 'i'),
    name: 'datefull',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoDay: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reYear4, 'i'),
    name: 'datenoday',
    callback: function callback(match, month, year) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  dateNoDayRev: {
    regex: RegExp('^' + reYear4 + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenodayrev',
    callback: function callback(match, year, month) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  pgTextShort: {
    regex: RegExp('^(' + reMonthAbbr + ')-' + reDaylz + '-' + reYear, 'i'),
    name: 'pgtextshort',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoYear: {
    regex: RegExp('^' + reDateNoYear, 'i'),
    name: 'datenoyear',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  dateNoYearRev: {
    regex: RegExp('^' + reDay + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenoyearrev',
    callback: function callback(match, day, month) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  isoWeekDay: {
    regex: RegExp('^' + reYear4 + '-?W' + reWeekOfYear + '(?:-?([0-7]))?'),
    name: 'isoweekday | isoweek',
    callback: function callback(match, year, week, day) {
      day = day ? +day : 1;

      if (!this.ymd(+year, 0, 1)) {
        return false;
      }

      // get day of week for Jan 1st
      var dayOfWeek = new Date(this.y, this.m, this.d).getDay();

      // and use the day to figure out the offset for day 1 of week 1
      dayOfWeek = 0 - (dayOfWeek > 4 ? dayOfWeek - 7 : dayOfWeek);

      this.rd += dayOfWeek + (week - 1) * 7 + day;
    }
  },

  relativeText: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reReltextunit + ')', 'i'),
    name: 'relativetext',
    callback: function callback(match, relValue, relUnit) {
      // todo: implement handling of 'this time-unit'
      // eslint-disable-next-line no-unused-vars
      var _lookupRelative = lookupRelative(relValue),
          amount = _lookupRelative.amount,
          behavior = _lookupRelative.behavior;

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
        case 'weekday':
        case 'weekdays':
          // todo
          break;
      }
    }
  },

  relative: {
    regex: RegExp('^([+-]*)[ \\t]*(\\d+)' + reSpaceOpt + '(' + reReltextunit + '|week)', 'i'),
    name: 'relative',
    callback: function callback(match, signs, relValue, relUnit) {
      var minuses = signs.replace(/[^-]/g, '').length;

      var amount = +relValue * Math.pow(-1, minuses);

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
        case 'weekday':
        case 'weekdays':
          // todo
          break;
      }
    }
  },

  dayText: {
    regex: RegExp('^(' + reDaytext + ')', 'i'),
    name: 'daytext',
    callback: function callback(match, dayText) {
      this.resetTime();
      this.weekday = lookupWeekday(dayText, 0);

      if (this.weekdayBehavior !== 2) {
        this.weekdayBehavior = 1;
      }
    }
  },

  relativeTextWeek: {
    regex: RegExp('^(' + reReltexttext + ')' + reSpace + 'week', 'i'),
    name: 'relativetextweek',
    callback: function callback(match, relText) {
      this.weekdayBehavior = 2;

      switch (relText.toLowerCase()) {
        case 'this':
          this.rd += 0;
          break;
        case 'next':
          this.rd += 7;
          break;
        case 'last':
        case 'previous':
          this.rd -= 7;
          break;
      }

      if (isNaN(this.weekday)) {
        this.weekday = 1;
      }
    }
  },

  monthFullOrMonthAbbr: {
    regex: RegExp('^(' + reMonthFull + '|' + reMonthAbbr + ')', 'i'),
    name: 'monthfull | monthabbr',
    callback: function callback(match, month) {
      return this.ymd(this.y, lookupMonth(month), this.d);
    }
  },

  tzCorrection: {
    regex: RegExp('^' + reTzCorrection, 'i'),
    name: 'tzcorrection',
    callback: function callback(tzCorrection) {
      return this.zone(processTzCorrection(tzCorrection));
    }
  },

  ago: {
    regex: /^ago/i,
    name: 'ago',
    callback: function callback() {
      this.ry = -this.ry;
      this.rm = -this.rm;
      this.rd = -this.rd;
      this.rh = -this.rh;
      this.ri = -this.ri;
      this.rs = -this.rs;
      this.rf = -this.rf;
    }
  },

  year4: {
    regex: RegExp('^' + reYear4),
    name: 'year4',
    callback: function callback(match, year) {
      this.y = +year;
      return true;
    }
  },

  whitespace: {
    regex: /^[ .,\t]+/,
    name: 'whitespace'
    // do nothing
  },

  dateShortWithTimeLong: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond, 'i'),
    name: 'dateshortwithtimelong',
    callback: function callback(match, month, day, hour, minute, second) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  dateShortWithTimeLong12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimelong12',
    callback: function callback(match, month, day, hour, minute, second, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  dateShortWithTimeShort: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'dateshortwithtimeshort',
    callback: function callback(match, month, day, hour, minute) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, 0, 0);
    }
  },

  dateShortWithTimeShort12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimeshort12',
    callback: function callback(match, month, day, hour, minute, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  }
};

var resultProto = {
  // date
  y: NaN,
  m: NaN,
  d: NaN,
  // time
  h: NaN,
  i: NaN,
  s: NaN,
  f: NaN,

  // relative shifts
  ry: 0,
  rm: 0,
  rd: 0,
  rh: 0,
  ri: 0,
  rs: 0,
  rf: 0,

  // weekday related shifts
  weekday: NaN,
  weekdayBehavior: 0,

  // first or last day of month
  // 0 none, 1 first, -1 last
  firstOrLastDayOfMonth: 0,

  // timezone correction in minutes
  z: NaN,

  // counters
  dates: 0,
  times: 0,
  zones: 0,

  // helper functions
  ymd: function ymd(y, m, d) {
    if (this.dates > 0) {
      return false;
    }

    this.dates++;
    this.y = y;
    this.m = m;
    this.d = d;
    return true;
  },
  time: function time(h, i, s, f) {
    if (this.times > 0) {
      return false;
    }

    this.times++;
    this.h = h;
    this.i = i;
    this.s = s;
    this.f = f;

    return true;
  },
  resetTime: function resetTime() {
    this.h = 0;
    this.i = 0;
    this.s = 0;
    this.f = 0;
    this.times = 0;

    return true;
  },
  zone: function zone(minutes) {
    if (this.zones <= 1) {
      this.zones++;
      this.z = minutes;
      return true;
    }

    return false;
  },
  toDate: function toDate(relativeTo) {
    if (this.dates && !this.times) {
      this.h = this.i = this.s = this.f = 0;
    }

    // fill holes
    if (isNaN(this.y)) {
      this.y = relativeTo.getFullYear();
    }

    if (isNaN(this.m)) {
      this.m = relativeTo.getMonth();
    }

    if (isNaN(this.d)) {
      this.d = relativeTo.getDate();
    }

    if (isNaN(this.h)) {
      this.h = relativeTo.getHours();
    }

    if (isNaN(this.i)) {
      this.i = relativeTo.getMinutes();
    }

    if (isNaN(this.s)) {
      this.s = relativeTo.getSeconds();
    }

    if (isNaN(this.f)) {
      this.f = relativeTo.getMilliseconds();
    }

    // adjust special early
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        this.d = 1;
        break;
      case -1:
        this.d = 0;
        this.m += 1;
        break;
    }

    if (!isNaN(this.weekday)) {
      var date = new Date(relativeTo.getTime());
      date.setFullYear(this.y, this.m, this.d);
      date.setHours(this.h, this.i, this.s, this.f);

      var dow = date.getDay();

      if (this.weekdayBehavior === 2) {
        // To make "this week" work, where the current day of week is a "sunday"
        if (dow === 0 && this.weekday !== 0) {
          this.weekday = -6;
        }

        // To make "sunday this week" work, where the current day of week is not a "sunday"
        if (this.weekday === 0 && dow !== 0) {
          this.weekday = 7;
        }

        this.d -= dow;
        this.d += this.weekday;
      } else {
        var diff = this.weekday - dow;

        // some PHP magic
        if (this.rd < 0 && diff < 0 || this.rd >= 0 && diff <= -this.weekdayBehavior) {
          diff += 7;
        }

        if (this.weekday >= 0) {
          this.d += diff;
        } else {
          this.d -= 7 - (Math.abs(this.weekday) - dow);
        }

        this.weekday = NaN;
      }
    }

    // adjust relative
    this.y += this.ry;
    this.m += this.rm;
    this.d += this.rd;

    this.h += this.rh;
    this.i += this.ri;
    this.s += this.rs;
    this.f += this.rf;

    this.ry = this.rm = this.rd = 0;
    this.rh = this.ri = this.rs = this.rf = 0;

    var result = new Date(relativeTo.getTime());
    // since Date constructor treats years <= 99 as 1900+
    // it can't be used, thus this weird way
    result.setFullYear(this.y, this.m, this.d);
    result.setHours(this.h, this.i, this.s, this.f);

    // note: this is done twice in PHP
    // early when processing special relatives
    // and late
    // todo: check if the logic can be reduced
    // to just one time action
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        result.setDate(1);
        break;
      case -1:
        result.setMonth(result.getMonth() + 1, 0);
        break;
    }

    // adjust timezone
    if (!isNaN(this.z) && result.getTimezoneOffset() !== this.z) {
      result.setUTCFullYear(result.getFullYear(), result.getMonth(), result.getDate());

      result.setUTCHours(result.getHours(), result.getMinutes() + this.z, result.getSeconds(), result.getMilliseconds());
    }

    return result;
  }
};

module.exports = function strtotime(str, now) {
  //       discuss at: https://locutus.io/php/strtotime/
  //      original by: Caio Ariede (https://caioariede.com)
  //      improved by: Kevin van Zonneveld (https://kvz.io)
  //      improved by: Caio Ariede (https://caioariede.com)
  //      improved by: A. Matías Quezada (https://amatiasq.com)
  //      improved by: preuter
  //      improved by: Brett Zamir (https://brett-zamir.me)
  //      improved by: Mirko Faber
  //         input by: David
  //      bugfixed by: Wagner B. Soares
  //      bugfixed by: Artur Tchernychev
  //      bugfixed by: Stephan Bösch-Plepelits (https://github.com/plepe)
  // reimplemented by: Rafał Kukawski
  //           note 1: Examples all have a fixed timestamp to prevent
  //           note 1: tests to fail because of variable time(zones)
  //        example 1: strtotime('+1 day', 1129633200)
  //        returns 1: 1129719600
  //        example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
  //        returns 2: 1130425202
  //        example 3: strtotime('last month', 1129633200)
  //        returns 3: 1127041200
  //        example 4: strtotime('2009-05-04 08:30:00+00')
  //        returns 4: 1241425800
  //        example 5: strtotime('2009-05-04 08:30:00+02:00')
  //        returns 5: 1241418600

  if (now == null) {
    now = Math.floor(Date.now() / 1000);
  }

  // the rule order is important
  // if multiple rules match, the longest match wins
  // if multiple rules match the same string, the first match wins
  var rules = [formats.yesterday, formats.now, formats.noon, formats.midnightOrToday, formats.tomorrow, formats.timestamp, formats.firstOrLastDay, formats.backOrFrontOf,
  // formats.weekdayOf, // not yet implemented
  formats.timeTiny12, formats.timeShort12, formats.timeLong12, formats.mssqltime, formats.timeShort24, formats.timeLong24, formats.iso8601long, formats.gnuNoColon, formats.iso8601noColon, formats.americanShort, formats.american, formats.iso8601date4, formats.iso8601dateSlash, formats.dateSlash, formats.gnuDateShortOrIso8601date2, formats.gnuDateShorter, formats.dateFull, formats.pointedDate4, formats.pointedDate2, formats.dateNoDay, formats.dateNoDayRev, formats.dateTextual, formats.dateNoYear, formats.dateNoYearRev, formats.dateNoColon, formats.xmlRpc, formats.xmlRpcNoColon, formats.soap, formats.wddx, formats.exif, formats.pgydotd, formats.isoWeekDay, formats.pgTextShort, formats.pgTextReverse, formats.clf, formats.year4, formats.ago, formats.dayText, formats.relativeTextWeek, formats.relativeText, formats.monthFullOrMonthAbbr, formats.tzCorrection, formats.dateShortWithTimeShort12, formats.dateShortWithTimeLong12, formats.dateShortWithTimeShort, formats.dateShortWithTimeLong, formats.relative, formats.whitespace];

  var result = Object.create(resultProto);

  while (str.length) {
    var longestMatch = null;
    var finalRule = null;

    for (var i = 0, l = rules.length; i < l; i++) {
      var format = rules[i];

      var match = str.match(format.regex);

      if (match) {
        if (!longestMatch || match[0].length > longestMatch[0].length) {
          longestMatch = match;
          finalRule = format;
        }
      }
    }

    if (!finalRule || finalRule.callback && finalRule.callback.apply(result, longestMatch) === false) {
      return false;
    }

    str = str.substr(longestMatch[0].length);
    finalRule = null;
    longestMatch = null;
  }

  return Math.floor(result.toDate(new Date(now * 1000)) / 1000);
};
//# sourceMappingURL=strtotime.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function date(format, timestamp) {
  //  discuss at: https://locutus.io/php/date/
  // original by: Carlos R. L. Rodrigues (https://www.jsfromhell.com)
  // original by: gettimeofday
  //    parts by: Peter-Paul Koch (https://www.quirksmode.org/js/beat.html)
  // improved by: Kevin van Zonneveld (https://kvz.io)
  // improved by: MeEtc (https://yass.meetcweb.com)
  // improved by: Brad Touesnard
  // improved by: Tim Wiel
  // improved by: Bryan Elliott
  // improved by: David Randall
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Brett Zamir (https://brett-zamir.me)
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Thomas Beaucourt (https://www.webapp.fr)
  // improved by: JT
  // improved by: Theriault (https://github.com/Theriault)
  // improved by: Rafał Kukawski (https://blog.kukawski.pl)
  // improved by: Theriault (https://github.com/Theriault)
  //    input by: Brett Zamir (https://brett-zamir.me)
  //    input by: majak
  //    input by: Alex
  //    input by: Martin
  //    input by: Alex Wilson
  //    input by: Haravikk
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: majak
  // bugfixed by: Kevin van Zonneveld (https://kvz.io)
  // bugfixed by: Brett Zamir (https://brett-zamir.me)
  // bugfixed by: omid (https://locutus.io/php/380:380#comment_137122)
  // bugfixed by: Chris (https://www.devotis.nl/)
  //      note 1: Uses global: locutus to store the default timezone
  //      note 1: Although the function potentially allows timezone info
  //      note 1: (see notes), it currently does not set
  //      note 1: per a timezone specified by date_default_timezone_set(). Implementers might use
  //      note 1: $locutus.currentTimezoneOffset and
  //      note 1: $locutus.currentTimezoneDST set by that function
  //      note 1: in order to adjust the dates in this function
  //      note 1: (or our other date functions!) accordingly
  //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
  //   returns 1: '07:09:40 m is month'
  //   example 2: date('F j, Y, g:i a', 1062462400)
  //   returns 2: 'September 2, 2003, 12:26 am'
  //   example 3: date('Y W o', 1062462400)
  //   returns 3: '2003 36 2003'
  //   example 4: var $x = date('Y m d', (new Date()).getTime() / 1000)
  //   example 4: $x = $x + ''
  //   example 4: var $result = $x.length // 2009 01 09
  //   returns 4: 10
  //   example 5: date('W', 1104534000)
  //   returns 5: '52'
  //   example 6: date('B t', 1104534000)
  //   returns 6: '999 31'
  //   example 7: date('W U', 1293750000.82); // 2010-12-31
  //   returns 7: '52 1293750000'
  //   example 8: date('W', 1293836400); // 2011-01-01
  //   returns 8: '52'
  //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
  //   returns 9: '52 2011-01-02'
  //        test: skip-1 skip-2 skip-5

  var jsdate, f;
  // Keep this here (works, but for code commented-out below for file size reasons)
  // var tal= [];
  var txtWords = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // trailing backslash -> (dropped)
  // a backslash followed by any character (including backslash) -> the character
  // empty string -> empty string
  var formatChr = /\\?(.?)/gi;
  var formatChrCb = function formatChrCb(t, s) {
    return f[t] ? f[t]() : s;
  };
  var _pad = function _pad(n, c) {
    n = String(n);
    while (n.length < c) {
      n = '0' + n;
    }
    return n;
  };
  f = {
    // Day
    d: function d() {
      // Day of month w/leading 0; 01..31
      return _pad(f.j(), 2);
    },
    D: function D() {
      // Shorthand day name; Mon...Sun
      return f.l().slice(0, 3);
    },
    j: function j() {
      // Day of month; 1..31
      return jsdate.getDate();
    },
    l: function l() {
      // Full day name; Monday...Sunday
      return txtWords[f.w()] + 'day';
    },
    N: function N() {
      // ISO-8601 day of week; 1[Mon]..7[Sun]
      return f.w() || 7;
    },
    S: function S() {
      // Ordinal suffix for day of month; st, nd, rd, th
      var j = f.j();
      var i = j % 10;
      if (i <= 3 && parseInt(j % 100 / 10, 10) === 1) {
        i = 0;
      }
      return ['st', 'nd', 'rd'][i - 1] || 'th';
    },
    w: function w() {
      // Day of week; 0[Sun]..6[Sat]
      return jsdate.getDay();
    },
    z: function z() {
      // Day of year; 0..365
      var a = new Date(f.Y(), f.n() - 1, f.j());
      var b = new Date(f.Y(), 0, 1);
      return Math.round((a - b) / 864e5);
    },

    // Week
    W: function W() {
      // ISO-8601 week number
      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
      var b = new Date(a.getFullYear(), 0, 4);
      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
    },

    // Month
    F: function F() {
      // Full month name; January...December
      return txtWords[6 + f.n()];
    },
    m: function m() {
      // Month w/leading 0; 01...12
      return _pad(f.n(), 2);
    },
    M: function M() {
      // Shorthand month name; Jan...Dec
      return f.F().slice(0, 3);
    },
    n: function n() {
      // Month; 1...12
      return jsdate.getMonth() + 1;
    },
    t: function t() {
      // Days in month; 28...31
      return new Date(f.Y(), f.n(), 0).getDate();
    },

    // Year
    L: function L() {
      // Is leap year?; 0 or 1
      var j = f.Y();
      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
    },
    o: function o() {
      // ISO-8601 year
      var n = f.n();
      var W = f.W();
      var Y = f.Y();
      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
    },
    Y: function Y() {
      // Full year; e.g. 1980...2010
      return jsdate.getFullYear();
    },
    y: function y() {
      // Last two digits of year; 00...99
      return f.Y().toString().slice(-2);
    },

    // Time
    a: function a() {
      // am or pm
      return jsdate.getHours() > 11 ? 'pm' : 'am';
    },
    A: function A() {
      // AM or PM
      return f.a().toUpperCase();
    },
    B: function B() {
      // Swatch Internet time; 000..999
      var H = jsdate.getUTCHours() * 36e2;
      // Hours
      var i = jsdate.getUTCMinutes() * 60;
      // Minutes
      // Seconds
      var s = jsdate.getUTCSeconds();
      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
    },
    g: function g() {
      // 12-Hours; 1..12
      return f.G() % 12 || 12;
    },
    G: function G() {
      // 24-Hours; 0..23
      return jsdate.getHours();
    },
    h: function h() {
      // 12-Hours w/leading 0; 01..12
      return _pad(f.g(), 2);
    },
    H: function H() {
      // 24-Hours w/leading 0; 00..23
      return _pad(f.G(), 2);
    },
    i: function i() {
      // Minutes w/leading 0; 00..59
      return _pad(jsdate.getMinutes(), 2);
    },
    s: function s() {
      // Seconds w/leading 0; 00..59
      return _pad(jsdate.getSeconds(), 2);
    },
    u: function u() {
      // Microseconds; 000000-999000
      return _pad(jsdate.getMilliseconds() * 1000, 6);
    },

    // Timezone
    e: function e() {
      // Timezone identifier; e.g. Atlantic/Azores, ...
      // The following works, but requires inclusion of the very large
      // timezone_abbreviations_list() function.
      /*              return that.date_default_timezone_get();
       */
      var msg = 'Not supported (see source code of date() for timezone on how to add support)';
      throw new Error(msg);
    },
    I: function I() {
      // DST observed?; 0 or 1
      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
      // If they are not equal, then DST is observed.
      var a = new Date(f.Y(), 0);
      // Jan 1
      var c = Date.UTC(f.Y(), 0);
      // Jan 1 UTC
      var b = new Date(f.Y(), 6);
      // Jul 1
      // Jul 1 UTC
      var d = Date.UTC(f.Y(), 6);
      return a - c !== b - d ? 1 : 0;
    },
    O: function O() {
      // Difference to GMT in hour format; e.g. +0200
      var tzo = jsdate.getTimezoneOffset();
      var a = Math.abs(tzo);
      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
    },
    P: function P() {
      // Difference to GMT w/colon; e.g. +02:00
      var O = f.O();
      return O.substr(0, 3) + ':' + O.substr(3, 2);
    },
    T: function T() {
      // The following works, but requires inclusion of the very
      // large timezone_abbreviations_list() function.
      /*              var abbr, i, os, _default;
      if (!tal.length) {
        tal = that.timezone_abbreviations_list();
      }
      if ($locutus && $locutus.default_timezone) {
        _default = $locutus.default_timezone;
        for (abbr in tal) {
          for (i = 0; i < tal[abbr].length; i++) {
            if (tal[abbr][i].timezone_id === _default) {
              return abbr.toUpperCase();
            }
          }
        }
      }
      for (abbr in tal) {
        for (i = 0; i < tal[abbr].length; i++) {
          os = -jsdate.getTimezoneOffset() * 60;
          if (tal[abbr][i].offset === os) {
            return abbr.toUpperCase();
          }
        }
      }
      */
      return 'UTC';
    },
    Z: function Z() {
      // Timezone offset in seconds (-43200...50400)
      return -jsdate.getTimezoneOffset() * 60;
    },

    // Full Date/Time
    c: function c() {
      // ISO-8601 date.
      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
    },
    r: function r() {
      // RFC 2822
      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
    },
    U: function U() {
      // Seconds since UNIX epoch
      return jsdate / 1000 | 0;
    }
  };

  var _date = function _date(format, timestamp) {
    jsdate = timestamp === undefined ? new Date() // Not provided
    : timestamp instanceof Date ? new Date(timestamp) // JS Date()
    : new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
    ;
    return format.replace(formatChr, formatChrCb);
  };

  return _date(format, timestamp);
};
//# sourceMappingURL=date.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function boolval(mixedVar) {
  // original by: Will Rowe
  //   example 1: boolval(true)
  //   returns 1: true
  //   example 2: boolval(false)
  //   returns 2: false
  //   example 3: boolval(0)
  //   returns 3: false
  //   example 4: boolval(0.0)
  //   returns 4: false
  //   example 5: boolval('')
  //   returns 5: false
  //   example 6: boolval('0')
  //   returns 6: false
  //   example 7: boolval([])
  //   returns 7: false
  //   example 8: boolval('')
  //   returns 8: false
  //   example 9: boolval(null)
  //   returns 9: false
  //   example 10: boolval(undefined)
  //   returns 10: false
  //   example 11: boolval('true')
  //   returns 11: true

  if (mixedVar === false) {
    return false;
  }

  if (mixedVar === 0 || mixedVar === 0.0) {
    return false;
  }

  if (mixedVar === '' || mixedVar === '0') {
    return false;
  }

  if (Array.isArray(mixedVar) && mixedVar.length === 0) {
    return false;
  }

  if (mixedVar === null || mixedVar === undefined) {
    return false;
  }

  return true;
};
//# sourceMappingURL=boolval.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  Twig.Templates.registerLoader('ajax', function (location, params, callback, errorCallback) {
    var template;
    var precompiled = params.precompiled;
    var parser = this.parsers[params.parser] || this.parser.twig;

    if (typeof XMLHttpRequest === 'undefined') {
      throw new Twig.Error('Unsupported platform: Unable to do ajax requests ' + 'because there is no "XMLHTTPRequest" implementation');
    }

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      var data = null;

      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200 || window.cordova && xmlhttp.status === 0) {
          Twig.log.debug('Got template ', xmlhttp.responseText);

          if (precompiled === true) {
            data = JSON.parse(xmlhttp.responseText);
          } else {
            data = xmlhttp.responseText;
          }

          params.url = location;
          params.data = data;
          template = parser.call(this, params);

          if (typeof callback === 'function') {
            callback(template);
          }
        } else if (typeof errorCallback === 'function') {
          errorCallback(xmlhttp);
        }
      }
    };

    xmlhttp.open('GET', location, Boolean(params.async));
    xmlhttp.overrideMimeType('text/plain');
    xmlhttp.send();

    if (params.async) {
      // TODO: return deferred promise
      return true;
    }

    return template;
  });
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  var fs;
  var path;

  try {
    // Require lib dependencies at runtime
    fs = __webpack_require__(33);
    path = __webpack_require__(6);
  } catch (error) {
    // NOTE: this is in a try/catch to avoid errors cross platform
    console.warn('Missing fs and path modules. ' + error);
  }

  Twig.Templates.registerLoader('fs', function (location, params, callback, errorCallback) {
    var template;
    var data = null;
    var precompiled = params.precompiled;
    var parser = this.parsers[params.parser] || this.parser.twig;

    if (!fs || !path) {
      throw new Twig.Error('Unsupported platform: Unable to load from file ' + 'because there is no "fs" or "path" implementation');
    }

    var loadTemplateFn = function loadTemplateFn(err, data) {
      if (err) {
        if (typeof errorCallback === 'function') {
          errorCallback(err);
        }

        return;
      }

      if (precompiled === true) {
        data = JSON.parse(data);
      }

      params.data = data;
      params.path = params.path || location; // Template is in data

      template = parser.call(this, params);

      if (typeof callback === 'function') {
        callback(template);
      }
    };

    params.path = params.path || location;

    if (params.async) {
      fs.stat(params.path, function (err, stats) {
        if (err || !stats.isFile()) {
          if (typeof errorCallback === 'function') {
            errorCallback(new Twig.Error('Unable to find template file ' + params.path));
          }

          return;
        }

        fs.readFile(params.path, 'utf8', loadTemplateFn);
      }); // TODO: return deferred promise

      return true;
    }

    try {
      if (!fs.statSync(params.path).isFile()) {
        throw new Twig.Error('Unable to find template file ' + params.path);
      }
    } catch (error) {
      throw new Twig.Error('Unable to find template file ' + params.path + '. ' + error);
    }

    data = fs.readFileSync(params.path, 'utf8');
    loadTemplateFn(undefined, data);
    return template;
  });
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! fs */ 0);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(2));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// ## twig.logic.js
//
// This file handles tokenizing, compiling and parsing logic tokens. {% ... %}
module.exports = function (Twig) {
  'use strict';
  /**
   * Namespace for logic handling.
   */

  Twig.logic = {};
  /**
   * Logic token types.
   */

  Twig.logic.type = {
    if_: 'Twig.logic.type.if',
    endif: 'Twig.logic.type.endif',
    for_: 'Twig.logic.type.for',
    endfor: 'Twig.logic.type.endfor',
    else_: 'Twig.logic.type.else',
    elseif: 'Twig.logic.type.elseif',
    set: 'Twig.logic.type.set',
    setcapture: 'Twig.logic.type.setcapture',
    endset: 'Twig.logic.type.endset',
    filter: 'Twig.logic.type.filter',
    endfilter: 'Twig.logic.type.endfilter',
    apply: 'Twig.logic.type.apply',
    endapply: 'Twig.logic.type.endapply',
    "do": 'Twig.logic.type.do',
    shortblock: 'Twig.logic.type.shortblock',
    block: 'Twig.logic.type.block',
    endblock: 'Twig.logic.type.endblock',
    extends_: 'Twig.logic.type.extends',
    use: 'Twig.logic.type.use',
    include: 'Twig.logic.type.include',
    spaceless: 'Twig.logic.type.spaceless',
    endspaceless: 'Twig.logic.type.endspaceless',
    macro: 'Twig.logic.type.macro',
    endmacro: 'Twig.logic.type.endmacro',
    import_: 'Twig.logic.type.import',
    from: 'Twig.logic.type.from',
    embed: 'Twig.logic.type.embed',
    endembed: 'Twig.logic.type.endembed',
    "with": 'Twig.logic.type.with',
    endwith: 'Twig.logic.type.endwith',
    deprecated: 'Twig.logic.type.deprecated'
  }; // Regular expressions for handling logic tokens.
  //
  // Properties:
  //
  //      type:  The type of expression this matches
  //
  //      regex: A regular expression that matches the format of the token
  //
  //      next:  What logic tokens (if any) pop this token off the logic stack. If empty, the
  //             logic token is assumed to not require an end tag and isn't push onto the stack.
  //
  //      open:  Does this tag open a logic expression or is it standalone. For example,
  //             {% endif %} cannot exist without an opening {% if ... %} tag, so open = false.
  //
  //  Functions:
  //
  //      compile: A function that handles compiling the token into an output token ready for
  //               parsing with the parse function.
  //
  //      parse:   A function that parses the compiled token into output (HTML / whatever the
  //               template represents).

  Twig.logic.definitions = [{
    /**
     * If type logic tokens.
     *
     *  Format: {% if expression %}
     */
    type: Twig.logic.type.if_,
    regex: /^if\s?([\s\S]+)$/,
    next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1]; // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (result) {
        chain = true;

        if (Twig.lib.boolval(result)) {
          chain = false;
          return state.parseAsync(token.output, context);
        }

        return '';
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * Else if type logic tokens.
     *
     *  Format: {% elseif expression %}
     */
    type: Twig.logic.type.elseif,
    regex: /^elseif\s?([^\s].*)$/,
    next: [Twig.logic.type.else_, Twig.logic.type.elseif, Twig.logic.type.endif],
    open: false,
    compile: function compile(token) {
      var expression = token.match[1]; // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (result) {
        if (chain && Twig.lib.boolval(result)) {
          chain = false;
          return state.parseAsync(token.output, context);
        }

        return '';
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * Else type logic tokens.
     *
     *  Format: {% else %}
     */
    type: Twig.logic.type.else_,
    regex: /^else$/,
    next: [Twig.logic.type.endif, Twig.logic.type.endfor],
    open: false,
    parse: function parse(token, context, chain) {
      var promise = Twig.Promise.resolve('');
      var state = this;

      if (chain) {
        promise = state.parseAsync(token.output, context);
      }

      return promise.then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * End if type logic tokens.
     *
     *  Format: {% endif %}
     */
    type: Twig.logic.type.endif,
    regex: /^endif$/,
    next: [],
    open: false
  }, {
    /**
     * For type logic tokens.
     *
     *  Format: {% for expression %}
     */
    type: Twig.logic.type.for_,
    regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([\S\s]+?)(?:\s+if\s+([^\s].*))?$/,
    next: [Twig.logic.type.else_, Twig.logic.type.endfor],
    open: true,
    compile: function compile(token) {
      var keyValue = token.match[1];
      var expression = token.match[2];
      var conditional = token.match[3];
      var kvSplit = null;
      token.keyVar = null;
      token.valueVar = null;

      if (keyValue.includes(',')) {
        kvSplit = keyValue.split(',');

        if (kvSplit.length === 2) {
          token.keyVar = kvSplit[0].trim();
          token.valueVar = kvSplit[1].trim();
        } else {
          throw new Twig.Error('Invalid expression in for loop: ' + keyValue);
        }
      } else {
        token.valueVar = keyValue.trim();
      } // Valid expressions for a for loop
      //   for item     in expression
      //   for key,item in expression
      // Compile the expression.


      token.expression = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack; // Compile the conditional (if available)

      if (conditional) {
        token.conditional = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: conditional
        }).stack;
      }

      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      // Parse expression
      var output = [];
      var len;
      var index = 0;
      var keyset;
      var state = this;
      var conditional = token.conditional;

      var buildLoop = function buildLoop(index, len) {
        var isConditional = conditional !== undefined;
        return {
          index: index + 1,
          index0: index,
          revindex: isConditional ? undefined : len - index,
          revindex0: isConditional ? undefined : len - index - 1,
          first: index === 0,
          last: isConditional ? undefined : index === len - 1,
          length: isConditional ? undefined : len,
          parent: context
        };
      }; // Run once for each iteration of the loop


      var loop = function loop(key, value) {
        var innerContext = _objectSpread({}, context);

        innerContext[token.valueVar] = value;

        if (token.keyVar) {
          innerContext[token.keyVar] = key;
        } // Loop object


        innerContext.loop = buildLoop(index, len);
        var promise = conditional === undefined ? Twig.Promise.resolve(true) : Twig.expression.parseAsync.call(state, conditional, innerContext);
        return promise.then(function (condition) {
          if (!condition) {
            return;
          }

          return state.parseAsync(token.output, innerContext).then(function (tokenOutput) {
            output.push(tokenOutput);
            index += 1;
          });
        }).then(function () {
          // Delete loop-related variables from the context
          delete innerContext.loop;
          delete innerContext[token.valueVar];
          delete innerContext[token.keyVar]; // Merge in values that exist in context but have changed
          // in inner_context.

          Twig.merge(context, innerContext, true);
        });
      };

      return Twig.expression.parseAsync.call(state, token.expression, context).then(function (result) {
        if (Array.isArray(result)) {
          len = result.length;
          return Twig.async.forEach(result, function (value) {
            var key = index;
            return loop(key, value);
          });
        }

        if (Twig.lib.is('Object', result)) {
          if (result._keys === undefined) {
            keyset = Object.keys(result);
          } else {
            keyset = result._keys;
          }

          len = keyset.length;
          return Twig.async.forEach(keyset, function (key) {
            // Ignore the _keys property, it's internal to twig.js
            if (key === '_keys') {
              return;
            }

            return loop(key, result[key]);
          });
        }
      }).then(function () {
        // Only allow else statements if no output was generated
        continueChain = output.length === 0;
        return {
          chain: continueChain,
          context: context,
          output: Twig.output.call(state.template, output)
        };
      });
    }
  }, {
    /**
     * End for type logic tokens.
     *
     *  Format: {% endfor %}
     */
    type: Twig.logic.type.endfor,
    regex: /^endfor$/,
    next: [],
    open: false
  }, {
    /**
     * Set type logic tokens.
     *
     *  Format: {% set key = expression %}
     */
    type: Twig.logic.type.set,
    regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      //
      var key = token.match[1].trim();
      var expression = token.match[2]; // Compile the expression.

      var expressionStack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      token.key = key;
      token.expression = expressionStack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      var key = token.key;
      var state = this;
      return Twig.expression.parseAsync.call(state, token.expression, context).then(function (value) {
        if (value === context) {
          /*  If storing the context in a variable, it needs to be a clone of the current state of context.
              Otherwise we have a context with infinite recursion.
              Fixes #341
          */
          value = _objectSpread({}, value);
        }

        context[key] = value;
        return {
          chain: continueChain,
          context: context
        };
      });
    }
  }, {
    /**
     * Set capture type logic tokens.
     *
     *  Format: {% set key %}
     */
    type: Twig.logic.type.setcapture,
    regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
    next: [Twig.logic.type.endset],
    open: true,
    compile: function compile(token) {
      var key = token.match[1].trim();
      token.key = key;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      var state = this;
      var key = token.key;
      return state.parseAsync(token.output, context).then(function (output) {
        // Set on both the global and local context
        state.context[key] = output;
        context[key] = output;
        return {
          chain: continueChain,
          context: context
        };
      });
    }
  }, {
    /**
     * End set type block logic tokens.
     *
     *  Format: {% endset %}
     */
    type: Twig.logic.type.endset,
    regex: /^endset$/,
    next: [],
    open: false
  }, {
    /**
     * Filter logic tokens.
     *
     *  Format: {% filter upper %} or {% filter lower|escape %}
     */
    type: Twig.logic.type.filter,
    regex: /^filter\s+(.+)$/,
    next: [Twig.logic.type.endfilter],
    open: true,
    compile: function compile(token) {
      var expression = '|' + token.match[1].trim(); // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return state.parseAsync(token.output, context).then(function (output) {
        var stack = [{
          type: Twig.expression.type.string,
          value: output
        }].concat(token.stack);
        return Twig.expression.parseAsync.call(state, stack, context);
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * End filter logic tokens.
     *
     *  Format: {% endfilter %}
     */
    type: Twig.logic.type.endfilter,
    regex: /^endfilter$/,
    next: [],
    open: false
  }, {
    /**
     * Apply logic tokens.
     *
     *  Format: {% apply upper %} or {% apply lower|escape %}
     */
    type: Twig.logic.type.apply,
    regex: /^apply\s+(.+)$/,
    next: [Twig.logic.type.endapply],
    open: true,
    compile: function compile(token) {
      var expression = '|' + token.match[1].trim(); // Compile the expression.

      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return state.parseAsync(token.output, context).then(function (output) {
        var stack = [{
          type: Twig.expression.type.string,
          value: output
        }].concat(token.stack);
        return Twig.expression.parseAsync.call(state, stack, context);
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * End apply logic tokens.
     *
     *  Format: {% endapply %}
     */
    type: Twig.logic.type.endapply,
    regex: /^endapply$/,
    next: [],
    open: false
  }, {
    /**
     * Set type logic tokens.
     *
     *  Format: {% do expression %}
     */
    type: Twig.logic.type["do"],
    regex: /^do\s+([\S\s]+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      //
      var expression = token.match[1]; // Compile the expression.

      var expressionStack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      token.expression = expressionStack;
      delete token.match;
      return token;
    },
    parse: function parse(token, context, continueChain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.expression, context).then(function () {
        return {
          chain: continueChain,
          context: context
        };
      });
    }
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% block title %}
     */
    type: Twig.logic.type.block,
    regex: /^block\s+(\w+)$/,
    next: [Twig.logic.type.endblock],
    open: true,
    compile: function compile(token) {
      token.blockName = token.match[1].trim();
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      var promise = Twig.Promise.resolve();
      state.template.blocks.defined[token.blockName] = new Twig.Block(state.template, token);

      if (state.template.parentTemplate === null || state.template.parentTemplate instanceof Twig.Template) {
        promise = state.getBlock(token.blockName).render(state, context);
      }

      return promise.then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    /**
     * Block shorthand logic tokens.
     *
     *  Format: {% block title expression %}
     */
    type: Twig.logic.type.shortblock,
    regex: /^block\s+(\w+)\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var template = this;
      token.expression = token.match[2].trim();
      token.output = Twig.expression.compile({
        type: Twig.expression.type.expression,
        value: token.expression
      }).stack;
      return Twig.logic.handler[Twig.logic.type.block].compile.apply(template, [token]);
    },
    parse: function parse() {
      var state = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return Twig.logic.handler[Twig.logic.type.block].parse.apply(state, args);
    }
  }, {
    /**
     * End block logic tokens.
     *
     *  Format: {% endblock %}
     */
    type: Twig.logic.type.endblock,
    regex: /^endblock(?:\s+(\w+))?$/,
    next: [],
    open: false
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% extends "template.twig" %}
     */
    type: Twig.logic.type.extends_,
    regex: /^extends\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      delete token.match;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (fileName) {
        if (Array.isArray(fileName)) {
          var result = fileName.reverse().reduce(function (acc, file) {
            try {
              return {
                render: state.template.importFile(file),
                fileName: file
              };
              /* eslint-disable-next-line no-unused-vars */
            } catch (error) {
              return acc;
            }
          }, {
            render: null,
            fileName: null
          });

          if (result.fileName !== null) {
            state.template.parentTemplate = result.fileName;
          }
        } else {
          state.template.parentTemplate = fileName;
        }

        return {
          chain: chain,
          output: ''
        };
      });
    }
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% use "template.twig" %}
     */
    type: Twig.logic.type.use,
    regex: /^use\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      delete token.match;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (filePath) {
        // Create a new state instead of using the current state
        // any defined blocks will be created in isolation
        var useTemplate = state.template.importFile(filePath);
        var useState = new Twig.ParseState(useTemplate);
        return useState.parseAsync(useTemplate.tokens).then(function () {
          state.template.blocks.imported = _objectSpread(_objectSpread({}, state.template.blocks.imported), useState.getBlocks());
        });
      }).then(function () {
        return {
          chain: chain,
          output: ''
        };
      });
    }
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% includes "template.twig" [with {some: 'values'} only] %}
     */
    type: Twig.logic.type.include,
    regex: /^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var match = token.match;
      var expression = match[1].trim();
      var ignoreMissing = match[2] !== undefined;
      var withContext = match[3];
      var only = match[4] !== undefined && match[4].length;
      delete token.match;
      token.only = only;
      token.ignoreMissing = ignoreMissing;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim()
        }).stack;
      }

      return token;
    },
    parse: function parse(token, context, chain) {
      // Resolve filename
      var innerContext = token.only ? {} : _objectSpread({}, context);
      var ignoreMissing = token.ignoreMissing;
      var state = this;
      var promise = null;
      var result = {
        chain: chain,
        output: ''
      };

      if (typeof token.withStack === 'undefined') {
        promise = Twig.Promise.resolve();
      } else {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(function (withContext) {
          innerContext = _objectSpread(_objectSpread({}, innerContext), withContext);
        });
      }

      return promise.then(function () {
        return Twig.expression.parseAsync.call(state, token.stack, context);
      }).then(function (file) {
        var files;

        if (Array.isArray(file)) {
          files = file;
        } else {
          files = [file];
        }

        var result = files.reduce(function (acc, file) {
          if (acc.render === null) {
            if (file instanceof Twig.Template) {
              return {
                render: file.renderAsync(innerContext, {
                  isInclude: true
                }),
                lastError: null
              };
            }

            try {
              return {
                render: state.template.importFile(file).renderAsync(innerContext, {
                  isInclude: true
                }),
                lastError: null
              };
            } catch (error) {
              return {
                render: null,
                lastError: error
              };
            }
          }

          return acc;
        }, {
          render: null,
          lastError: null
        });

        if (result.render !== null) {
          return result.render;
        }

        if (result.render === null && ignoreMissing) {
          return '';
        }

        throw result.lastError;
      }).then(function (output) {
        if (output !== '') {
          result.output = output;
        }

        return result;
      });
    }
  }, {
    type: Twig.logic.type.spaceless,
    regex: /^spaceless$/,
    next: [Twig.logic.type.endspaceless],
    open: true,
    // Parse the html and return it without any spaces between tags
    parse: function parse(token, context, chain) {
      var state = this; // Parse the output without any filter

      return state.parseAsync(token.output, context).then(function (tokenOutput) {
        var // A regular expression to find closing and opening tags with spaces between them
        rBetweenTagSpaces = />\s+</g; // Replace all space between closing and opening html tags

        var output = tokenOutput.replace(rBetweenTagSpaces, '><').trim(); // Rewrap output as a Twig.Markup

        output = new Twig.Markup(output);
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, // Add the {% endspaceless %} token
  {
    type: Twig.logic.type.endspaceless,
    regex: /^endspaceless$/,
    next: [],
    open: false
  }, {
    /**
     * Macro logic tokens.
     *
     * Format: {% macro input(name = default, value, type, size) %}
     *
     */
    type: Twig.logic.type.macro,
    regex: /^macro\s+(\w+)\s*\(\s*((?:\w+(?:\s*=\s*([\s\S]+))?(?:,\s*)?)*)\s*\)$/,
    next: [Twig.logic.type.endmacro],
    open: true,
    compile: function compile(token) {
      var macroName = token.match[1];
      var rawParameters = token.match[2].split(/\s*,\s*/);
      var parameters = rawParameters.map(function (rawParameter) {
        return rawParameter.split(/\s*=\s*/)[0];
      });
      var parametersCount = parameters.length; // Duplicate check

      if (parametersCount > 1) {
        var uniq = {};

        for (var i = 0; i < parametersCount; i++) {
          var parameter = parameters[i];

          if (uniq[parameter]) {
            throw new Twig.Error('Duplicate arguments for parameter: ' + parameter);
          } else {
            uniq[parameter] = 1;
          }
        }
      }

      token.macroName = macroName;
      token.parameters = parameters;
      token.defaults = rawParameters.reduce(function (defaults, rawParameter) {
        var pair = rawParameter.split(/\s*=\s*/);
        var key = pair[0];
        var expression = pair[1];

        if (expression) {
          defaults[key] = Twig.expression.compile.call(this, {
            type: Twig.expression.type.expression,
            value: expression
          }).stack;
        } else {
          defaults[key] = undefined;
        }

        return defaults;
      }, {});
      delete token.match;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;

      state.macros[token.macroName] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        // Pass global context and other macros
        var macroContext = _objectSpread(_objectSpread({}, context), {}, {
          _self: state.macros
        }); // Save arguments


        return Twig.async.forEach(token.parameters, function (prop, i) {
          // Add parameters from context to macroContext
          if (typeof args[i] !== 'undefined') {
            macroContext[prop] = args[i];
            return true;
          }

          if (typeof token.defaults[prop] !== 'undefined') {
            return Twig.expression.parseAsync.call(this, token.defaults[prop], context).then(function (value) {
              macroContext[prop] = value;
              return Twig.Promise.resolve();
            });
          }

          macroContext[prop] = undefined;
          return true;
        }).then(function () {
          // Render
          return state.parseAsync(token.output, macroContext);
        });
      };

      return {
        chain: chain,
        output: ''
      };
    }
  }, {
    /**
     * End macro logic tokens.
     *
     * Format: {% endmacro %}
     */
    type: Twig.logic.type.endmacro,
    regex: /^endmacro$/,
    next: [],
    open: false
  }, {
    /*
    * Import logic tokens.
    *
    * Format: {% import "template.twig" as form %}
    */
    type: Twig.logic.type.import_,
    regex: /^import\s+(.+)\s+as\s+(\w+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      var contextName = token.match[2].trim();
      delete token.match;
      token.expression = expression;
      token.contextName = contextName;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      var output = {
        chain: chain,
        output: ''
      };

      if (token.expression === '_self') {
        context[token.contextName] = state.macros;
        return output;
      }

      return Twig.expression.parseAsync.call(state, token.stack, context).then(function (filePath) {
        return state.template.importFile(filePath || token.expression);
      }).then(function (importTemplate) {
        var importState = new Twig.ParseState(importTemplate);
        return importState.parseAsync(importTemplate.tokens).then(function () {
          context[token.contextName] = importState.macros;
          return output;
        });
      });
    }
  }, {
    /*
    * From logic tokens.
    *
    * Format: {% from "template.twig" import func as form %}
    */
    type: Twig.logic.type.from,
    regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      var expression = token.match[1].trim();
      var macroExpressions = token.match[2].trim().split(/\s*,\s*/);
      var macroNames = {};

      var _iterator = _createForOfIteratorHelper(macroExpressions),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var res = _step.value;
          // Match function as variable
          var macroMatch = res.match(/^(\w+)\s+as\s+(\w+)$/);

          if (macroMatch) {
            macroNames[macroMatch[1].trim()] = macroMatch[2].trim();
          } else if (res.match(/^(\w+)$/)) {
            macroNames[res] = res;
          } else {// ignore import
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      delete token.match;
      token.expression = expression;
      token.macroNames = macroNames;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;
      return token;
    },
    parse: function parse(token, context, chain) {
      var state = this;
      var promise;

      if (token.expression === '_self') {
        promise = Twig.Promise.resolve(state.macros);
      } else {
        promise = Twig.expression.parseAsync.call(state, token.stack, context).then(function (filePath) {
          return state.template.importFile(filePath || token.expression);
        }).then(function (importTemplate) {
          var importState = new Twig.ParseState(importTemplate);
          return importState.parseAsync(importTemplate.tokens).then(function () {
            return importState.macros;
          });
        });
      }

      return promise.then(function (macros) {
        for (var macroName in token.macroNames) {
          if (macros[macroName] !== undefined) {
            context[token.macroNames[macroName]] = macros[macroName];
          }
        }

        return {
          chain: chain,
          output: ''
        };
      });
    }
  }, {
    /**
     * The embed tag combines the behaviour of include and extends.
     * It allows you to include another template's contents, just like include does.
     *
     *  Format: {% embed "template.twig" [with {some: 'values'} only] %}
     */
    type: Twig.logic.type.embed,
    regex: /^embed\s+(.+?)(?:\s+(ignore missing))?(?:\s+with\s+([\S\s]+?))?(?:\s+(only))?$/,
    next: [Twig.logic.type.endembed],
    open: true,
    compile: function compile(token) {
      var match = token.match;
      var expression = match[1].trim();
      var ignoreMissing = match[2] !== undefined;
      var withContext = match[3];
      var only = match[4] !== undefined && match[4].length;
      delete token.match;
      token.only = only;
      token.ignoreMissing = ignoreMissing;
      token.stack = Twig.expression.compile.call(this, {
        type: Twig.expression.type.expression,
        value: expression
      }).stack;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim()
        }).stack;
      }

      return token;
    },
    parse: function parse(token, context, chain) {
      var embedContext = {};
      var promise = Twig.Promise.resolve();
      var state = this;

      if (!token.only) {
        embedContext = _objectSpread({}, context);
      }

      if (token.withStack !== undefined) {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(function (withContext) {
          embedContext = _objectSpread(_objectSpread({}, embedContext), withContext);
        });
      }

      return promise.then(function () {
        return Twig.expression.parseAsync.call(state, token.stack, embedContext);
      }).then(function (fileName) {
        var embedOverrideTemplate = new Twig.Template({
          data: token.output,
          id: state.template.id,
          base: state.template.base,
          path: state.template.path,
          url: state.template.url,
          name: state.template.name,
          method: state.template.method,
          options: state.template.options
        });

        try {
          embedOverrideTemplate.importFile(fileName);
        } catch (error) {
          if (token.ignoreMissing) {
            return '';
          } // Errors preserve references to variables in scope,
          // this removes `this` from the scope.


          state = null;
          throw error;
        }

        embedOverrideTemplate.parentTemplate = fileName;
        return embedOverrideTemplate.renderAsync(embedContext, {
          isInclude: true
        });
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  },
  /* Add the {% endembed %} token
   *
   */
  {
    type: Twig.logic.type.endembed,
    regex: /^endembed$/,
    next: [],
    open: false
  }, {
    /**
     * Block logic tokens.
     *
     *  Format: {% with {some: 'values'} [only] %}
     */
    type: Twig.logic.type["with"],
    regex: /^(?:with\s+([\S\s]+?))(?:\s|$)(only)?$/,
    next: [Twig.logic.type.endwith],
    open: true,
    compile: function compile(token) {
      var match = token.match;
      var withContext = match[1];
      var only = match[2] !== undefined && match[2].length;
      delete token.match;
      token.only = only;

      if (withContext !== undefined) {
        token.withStack = Twig.expression.compile.call(this, {
          type: Twig.expression.type.expression,
          value: withContext.trim()
        }).stack;
      }

      return token;
    },
    parse: function parse(token, context, chain) {
      // Resolve filename
      var innerContext = {};
      var i;
      var state = this;
      var promise = Twig.Promise.resolve();

      if (!token.only) {
        innerContext = _objectSpread({}, context);
      }

      if (token.withStack !== undefined) {
        promise = Twig.expression.parseAsync.call(state, token.withStack, context).then(function (withContext) {
          for (i in withContext) {
            if (Object.hasOwnProperty.call(withContext, i)) {
              innerContext[i] = withContext[i];
            }
          }
        });
      }

      return promise.then(function () {
        return state.parseAsync(token.output, innerContext);
      }).then(function (output) {
        return {
          chain: chain,
          output: output
        };
      });
    }
  }, {
    type: Twig.logic.type.endwith,
    regex: /^endwith$/,
    next: [],
    open: false
  }, {
    /**
     * Deprecated type logic tokens.
     *
     *  Format: {% deprecated 'Description' %}
     */
    type: Twig.logic.type.deprecated,
    regex: /^deprecated\s+(.+)$/,
    next: [],
    open: true,
    compile: function compile(token) {
      console.warn('Deprecation notice: ' + token.match[1]);
      return token;
    },
    parse: function parse() {
      return {};
    }
  }];
  /**
   * Registry for logic handlers.
   */

  Twig.logic.handler = {};
  /**
   * Define a new token type, available at Twig.logic.type.{type}
   */

  Twig.logic.extendType = function (type, value) {
    value = value || 'Twig.logic.type' + type;
    Twig.logic.type[type] = value;
  };
  /**
   * Extend the logic parsing functionality with a new token definition.
   *
   * // Define a new tag
   * Twig.logic.extend({
   *     type: Twig.logic.type.{type},
   *     // The pattern to match for this token
   *     regex: ...,
   *     // What token types can follow this token, leave blank if any.
   *     next: [ ... ]
   *     // Create and return compiled version of the token
   *     compile: function(token) { ... }
   *     // Parse the compiled token with the context provided by the render call
   *     //   and whether this token chain is complete.
   *     parse: function(token, context, chain) { ... }
   * });
   *
   * @param {Object} definition The new logic expression.
   */


  Twig.logic.extend = function (definition) {
    if (definition.type) {
      Twig.logic.extendType(definition.type);
    } else {
      throw new Twig.Error('Unable to extend logic definition. No type provided for ' + definition);
    }

    Twig.logic.handler[definition.type] = definition;
  }; // Extend with built-in expressions


  while (Twig.logic.definitions.length > 0) {
    Twig.logic.extend(Twig.logic.definitions.shift());
  }
  /**
   * Compile a logic token into an object ready for parsing.
   *
   * @param {Object} rawToken An uncompiled logic token.
   *
   * @return {Object} A compiled logic token, ready for parsing.
   */


  Twig.logic.compile = function (rawToken) {
    var expression = rawToken.value.trim();
    var token = Twig.logic.tokenize.call(this, expression);
    var tokenTemplate = Twig.logic.handler[token.type]; // Check if the token needs compiling

    if (tokenTemplate.compile) {
      token = tokenTemplate.compile.call(this, token);
      Twig.log.trace('Twig.logic.compile: ', 'Compiled logic token to ', token);
    }

    return token;
  };
  /**
   * Tokenize logic expressions. This function matches token expressions against regular
   * expressions provided in token definitions provided with Twig.logic.extend.
   *
   * @param {string} expression the logic token expression to tokenize
   *                (i.e. what's between {% and %})
   *
   * @return {Object} The matched token with type set to the token type and match to the regex match.
   */


  Twig.logic.tokenize = function (expression) {
    var tokenTemplateType = null;
    var tokenType = null;
    var tokenRegex = null;
    var regexArray = null;
    var regexLen = null;
    var regexI = null;
    var match = null; // Ignore whitespace around expressions.

    expression = expression.trim();

    for (tokenTemplateType in Twig.logic.handler) {
      if (Object.hasOwnProperty.call(Twig.logic.handler, tokenTemplateType)) {
        // Get the type and regex for this template type
        tokenType = Twig.logic.handler[tokenTemplateType].type;
        tokenRegex = Twig.logic.handler[tokenTemplateType].regex; // Handle multiple regular expressions per type.

        regexArray = tokenRegex;

        if (!Array.isArray(tokenRegex)) {
          regexArray = [tokenRegex];
        }

        regexLen = regexArray.length; // Check regular expressions in the order they were specified in the definition.

        for (regexI = 0; regexI < regexLen; regexI++) {
          match = regexArray[regexI].exec(expression);

          if (match !== null) {
            Twig.log.trace('Twig.logic.tokenize: ', 'Matched a ', tokenType, ' regular expression of ', match);
            return {
              type: tokenType,
              match: match
            };
          }
        }
      }
    } // No regex matches


    throw new Twig.Error('Unable to parse \'' + expression.trim() + '\'');
  };
  /**
   * Parse a logic token within a given context.
   *
   * What are logic chains?
   *      Logic chains represent a series of tokens that are connected,
   *          for example:
   *          {% if ... %} {% else %} {% endif %}
   *
   *      The chain parameter is used to signify if a chain is open of closed.
   *      open:
   *          More tokens in this chain should be parsed.
   *      closed:
   *          This token chain has completed parsing and any additional
   *          tokens (else, elseif, etc...) should be ignored.
   *
   * @param {Object} token The compiled token.
   * @param {Object} context The render context.
   * @param {boolean} chain Is this an open logic chain. If false, that means a
   *                        chain is closed and no further cases should be parsed.
   */


  Twig.logic.parse = function (token, context, chain, allowAsync) {
    return Twig.async.potentiallyAsync(this, allowAsync, function () {
      Twig.log.debug('Twig.logic.parse: ', 'Parsing logic token ', token);
      var tokenTemplate = Twig.logic.handler[token.type];
      var result;
      var state = this;

      if (!tokenTemplate.parse) {
        return '';
      }

      state.nestingStack.unshift(token);
      result = tokenTemplate.parse.call(state, token, context || {}, chain);

      if (Twig.isPromise(result)) {
        result = result.then(function (result) {
          state.nestingStack.shift();
          return result;
        });
      } else {
        state.nestingStack.shift();
      }

      return result;
    });
  };

  return Twig;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  Twig.Templates.registerParser('source', function (params) {
    return params.data || '';
  });
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Twig) {
  'use strict';

  Twig.Templates.registerParser('twig', function (params) {
    return new Twig.Template(params);
  });
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(1));

// ## twig.path.js
//
// This file handles path parsing
module.exports = function (Twig) {
  'use strict';
  /**
   * Namespace for path handling.
   */

  Twig.path = {};
  /**
   * Generate the canonical version of a url based on the given base path and file path and in
   * the previously registered namespaces.
   *
   * @param  {string} template The Twig Template
   * @param  {string} _file    The file path, may be relative and may contain namespaces.
   *
   * @return {string}          The canonical version of the path
   */

  Twig.path.parsePath = function (template, _file) {
    var k = null;
    var namespaces = template.options.namespaces;
    var file = _file || '';
    var hasNamespaces = namespaces && (0, _typeof2["default"])(namespaces) === 'object';

    if (hasNamespaces) {
      for (k in namespaces) {
        if (!file.includes(k)) {
          continue;
        } // Check if keyed namespace exists at path's start


        var colon = new RegExp('^' + k + '::');
        var atSign = new RegExp('^@' + k + '/'); // Add slash to the end of path

        var namespacePath = namespaces[k].replace(/([^/])$/, '$1/');

        if (colon.test(file)) {
          file = file.replace(colon, namespacePath);
          return file;
        }

        if (atSign.test(file)) {
          file = file.replace(atSign, namespacePath);
          return file;
        }
      }
    }

    return Twig.path.relativePath(template, file);
  };
  /**
   * Generate the relative canonical version of a url based on the given base path and file path.
   *
   * @param {Twig.Template} template The Twig.Template.
   * @param {string} _file The file path, relative to the base path.
   *
   * @return {string} The canonical version of the path.
   */


  Twig.path.relativePath = function (template, _file) {
    var base;
    var basePath;
    var sepChr = '/';
    var newPath = [];
    var file = _file || '';
    var val;

    if (template.url) {
      if (typeof template.base === 'undefined') {
        base = template.url;
      } else {
        // Add slash to the end of path
        base = template.base.replace(/([^/])$/, '$1/');
      }
    } else if (template.path) {
      // Get the system-specific path separator
      var path = __webpack_require__(6);

      var sep = path.sep || sepChr;
      var relative = new RegExp('^\\.{1,2}' + sep.replace('\\', '\\\\'));
      file = file.replace(/\//g, sep);

      if (template.base !== undefined && file.match(relative) === null) {
        file = file.replace(template.base, '');
        base = template.base + sep;
      } else {
        base = path.normalize(template.path);
      }

      base = base.replace(sep + sep, sep);
      sepChr = sep;
    } else if ((template.name || template.id) && template.method && template.method !== 'fs' && template.method !== 'ajax') {
      // Custom registered loader
      base = template.base || template.name || template.id;
    } else {
      throw new Twig.Error('Cannot extend an inline template.');
    }

    basePath = base.split(sepChr); // Remove file from url

    basePath.pop();
    basePath = basePath.concat(file.split(sepChr));

    while (basePath.length > 0) {
      val = basePath.shift();

      if (val === '.') {// Ignore
      } else if (val === '..' && newPath.length > 0 && newPath[newPath.length - 1] !== '..') {
        newPath.pop();
      } else {
        newPath.push(val);
      }
    }

    return newPath.join(sepChr);
  };

  return Twig;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.tests.js
//
// This file handles expression tests. (is empty, is not defined, etc...)
module.exports = function (Twig) {
  'use strict';

  Twig.tests = {
    empty: function empty(value) {
      if (value === null || value === undefined) {
        return true;
      } // Handler numbers


      if (typeof value === 'number') {
        return false;
      } // Numbers are never "empty"
      // Handle strings and arrays


      if (value.length > 0) {
        return false;
      } // Handle objects


      for (var key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
          return false;
        }
      }

      return true;
    },
    odd: function odd(value) {
      return value % 2 === 1;
    },
    even: function even(value) {
      return value % 2 === 0;
    },
    divisibleby: function divisibleby(value, params) {
      return value % params[0] === 0;
    },
    defined: function defined(value) {
      return value !== undefined;
    },
    none: function none(value) {
      return value === null;
    },
    "null": function _null(value) {
      return this.none(value); // Alias of none
    },
    'same as': function sameAs(value, params) {
      return value === params[0];
    },
    sameas: function sameas(value, params) {
      console.warn('`sameas` is deprecated use `same as`');
      return Twig.tests['same as'](value, params);
    },
    iterable: function iterable(value) {
      return value && (Twig.lib.is('Array', value) || Twig.lib.is('Object', value));
    }
    /*
    Constant ?
     */

  };

  Twig.test = function (test, value, params) {
    if (!Twig.tests[test]) {
      throw Twig.Error('Test ' + test + ' is not defined.');
    }

    return Twig.tests[test](value, params);
  };

  Twig.test.extend = function (test, definition) {
    Twig.tests[test] = definition;
  };

  return Twig;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.async.js
//
// This file handles asynchronous tasks within twig.
module.exports = function (Twig) {
  'use strict';

  var STATE_UNKNOWN = 0;
  var STATE_RESOLVED = 1;
  var STATE_REJECTED = 2;

  Twig.ParseState.prototype.parseAsync = function (tokens, context) {
    return this.parse(tokens, context, true);
  };

  Twig.expression.parseAsync = function (tokens, context, tokensAreParameters) {
    var state = this;
    return Twig.expression.parse.call(state, tokens, context, tokensAreParameters, true);
  };

  Twig.logic.parseAsync = function (token, context, chain) {
    var state = this;
    return Twig.logic.parse.call(state, token, context, chain, true);
  };

  Twig.Template.prototype.renderAsync = function (context, params) {
    return this.render(context, params, true);
  };

  Twig.async = {};
  /**
   * Checks for `thenable` objects
   */

  Twig.isPromise = function (obj) {
    return obj && obj.then && typeof obj.then === 'function';
  };
  /**
   * Handling of code paths that might either return a promise
   * or a value depending on whether async code is used.
   *
   * @see https://github.com/twigjs/twig.js/blob/master/ASYNC.md#detecting-asynchronous-behaviour
   */


  function potentiallyAsyncSlow(that, allowAsync, action) {
    var result = action.call(that);
    var err = null;
    var isAsync = true;

    if (!Twig.isPromise(result)) {
      return result;
    }

    result.then(function (res) {
      result = res;
      isAsync = false;
    })["catch"](function (error) {
      err = error;
    });

    if (err !== null) {
      throw err;
    }

    if (isAsync) {
      throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');
    }

    return result;
  }

  Twig.async.potentiallyAsync = function (that, allowAsync, action) {
    if (allowAsync) {
      return Twig.Promise.resolve(action.call(that));
    }

    return potentiallyAsyncSlow(that, allowAsync, action);
  };

  function run(fn, resolve, reject) {
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  function pending(handlers, onResolved, onRejected) {
    var h = [onResolved, onRejected, -2]; // The promise has yet to be rejected or resolved.

    if (!handlers) {
      handlers = h;
    } else if (handlers[2] === -2) {
      // Only allocate an array when there are multiple handlers
      handlers = [handlers, h];
    } else {
      handlers.push(h);
    }

    return handlers;
  }
  /**
   * Really small thenable to represent promises that resolve immediately.
   *
   */


  Twig.Thenable = function (then, value, state) {
    this.then = then;
    this._value = state ? value : null;
    this._state = state || STATE_UNKNOWN;
  };

  Twig.Thenable.prototype["catch"] = function (onRejected) {
    // THe promise will not throw, it has already resolved.
    if (this._state === STATE_RESOLVED) {
      return this;
    }

    return this.then(null, onRejected);
  };
  /**
   * The `then` method attached to a Thenable when it has resolved.
   *
   */


  Twig.Thenable.resolvedThen = function (onResolved) {
    try {
      return Twig.Promise.resolve(onResolved(this._value));
    } catch (error) {
      return Twig.Promise.reject(error);
    }
  };
  /**
   * The `then` method attached to a Thenable when it has rejected.
   *
   */


  Twig.Thenable.rejectedThen = function (onResolved, onRejected) {
    // Shortcut for rejected twig promises
    if (!onRejected || typeof onRejected !== 'function') {
      return this;
    }

    var value = this._value;
    var result;

    try {
      result = onRejected(value);
    } catch (error) {
      result = Twig.Promise.reject(error);
    }

    return Twig.Promise.resolve(result);
  };
  /**
   * An alternate implementation of a Promise that does not fully follow
   * the spec, but instead works fully synchronous while still being
   * thenable.
   *
   * These promises can be mixed with regular promises at which point
   * the synchronous behaviour is lost.
   */


  Twig.Promise = function (executor) {
    var state = STATE_UNKNOWN;
    var value = null;

    var changeState = function changeState(nextState, nextValue) {
      state = nextState;
      value = nextValue;
    };

    function onReady(v) {
      changeState(STATE_RESOLVED, v);
    }

    function onReject(e) {
      changeState(STATE_REJECTED, e);
    }

    run(executor, onReady, onReject); // If the promise settles right after running the executor we can
    // return a Promise with it's state already set.
    //
    // Twig.Promise.resolve and Twig.Promise.reject both use the more
    // efficient `Twig.Thenable` for this purpose.

    if (state === STATE_RESOLVED) {
      return Twig.Promise.resolve(value);
    }

    if (state === STATE_REJECTED) {
      return Twig.Promise.reject(value);
    } // If we managed to get here our promise is going to resolve asynchronous.


    changeState = new Twig.FullPromise();
    return changeState.promise;
  };
  /**
   * Promise implementation that can handle being resolved at any later time.
   *
   */


  Twig.FullPromise = function () {
    var handlers = null; // The state has been changed to either resolve, or reject
    // which means we should call the handler.

    function resolved(onResolved) {
      onResolved(p._value);
    }

    function rejected(onResolved, onRejected) {
      onRejected(p._value);
    }

    var append = function append(onResolved, onRejected) {
      handlers = pending(handlers, onResolved, onRejected);
    };

    function changeState(newState, v) {
      if (p._state) {
        return;
      }

      p._value = v;
      p._state = newState;
      append = newState === STATE_RESOLVED ? resolved : rejected;

      if (!handlers) {
        return;
      }

      if (handlers[2] === -2) {
        append(handlers[0], handlers[1]);
        handlers = null;
        return;
      }

      handlers.forEach(function (h) {
        append(h[0], h[1]);
      });
      handlers = null;
    }

    var p = new Twig.Thenable(function (onResolved, onRejected) {
      var hasResolved = typeof onResolved === 'function'; // Shortcut for resolved twig promises

      if (p._state === STATE_RESOLVED && !hasResolved) {
        return Twig.Promise.resolve(p._value);
      }

      if (p._state === STATE_RESOLVED) {
        try {
          return Twig.Promise.resolve(onResolved(p._value));
        } catch (error) {
          return Twig.Promise.reject(error);
        }
      }

      var hasRejected = typeof onRejected === 'function';
      return new Twig.Promise(function (resolve, reject) {
        append(hasResolved ? function (result) {
          try {
            resolve(onResolved(result));
          } catch (error) {
            reject(error);
          }
        } : resolve, hasRejected ? function (err) {
          try {
            resolve(onRejected(err));
          } catch (error) {
            reject(error);
          }
        } : reject);
      });
    });
    changeState.promise = p;
    return changeState;
  };

  Twig.Promise.defaultResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, undefined, STATE_RESOLVED);
  Twig.Promise.emptyStringResolved = new Twig.Thenable(Twig.Thenable.resolvedThen, '', STATE_RESOLVED);

  Twig.Promise.resolve = function (value) {
    if (arguments.length === 0 || typeof value === 'undefined') {
      return Twig.Promise.defaultResolved;
    }

    if (Twig.isPromise(value)) {
      return value;
    } // Twig often resolves with an empty string, we optimize for this
    // scenario by returning a fixed promise. This reduces the load on
    // garbage collection.


    if (value === '') {
      return Twig.Promise.emptyStringResolved;
    }

    return new Twig.Thenable(Twig.Thenable.resolvedThen, value, STATE_RESOLVED);
  };

  Twig.Promise.reject = function (e) {
    // `e` should never be a promise.
    return new Twig.Thenable(Twig.Thenable.rejectedThen, e, STATE_REJECTED);
  };

  Twig.Promise.all = function (promises) {
    var results = new Array(promises.length);
    return Twig.async.forEach(promises, function (p, index) {
      if (!Twig.isPromise(p)) {
        results[index] = p;
        return;
      }

      if (p._state === STATE_RESOLVED) {
        results[index] = p._value;
        return;
      }

      return p.then(function (v) {
        results[index] = v;
      });
    }).then(function () {
      return results;
    });
  };
  /**
  * Go over each item in a fashion compatible with Twig.forEach,
  * allow the function to return a promise or call the third argument
  * to signal it is finished.
  *
  * Each item in the array will be called sequentially.
  */


  Twig.async.forEach = function (arr, callback) {
    var len = arr ? arr.length : 0;
    var index = 0;

    function next() {
      var resp = null;

      do {
        if (index === len) {
          return Twig.Promise.resolve();
        }

        resp = callback(arr[index], index);
        index++; // While the result of the callback is not a promise or it is
        // a promise that has settled we can use a regular loop which
        // is much faster.
      } while (!resp || !Twig.isPromise(resp) || resp._state === STATE_RESOLVED);

      return resp.then(next);
    }

    return next();
  };

  return Twig;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ## twig.exports.js
//
// This file provides extension points and other hooks into the twig functionality.
module.exports = function (Twig) {
  'use strict';

  Twig.exports = {
    VERSION: Twig.VERSION
  };
  /**
   * Create and compile a twig.js template.
   *
   * @param {Object} param Paramteres for creating a Twig template.
   *
   * @return {Twig.Template} A Twig template ready for rendering.
   */

  Twig.exports.twig = function (params) {
    'use strict';

    var id = params.id;
    var options = {
      strictVariables: params.strict_variables || false,
      // TODO: turn autoscape on in the next major version
      autoescape: params.autoescape !== null && params.autoescape || false,
      allowInlineIncludes: params.allowInlineIncludes || false,
      rethrow: params.rethrow || false,
      namespaces: params.namespaces
    };

    if (Twig.cache && id) {
      Twig.validateId(id);
    }

    if (params.debug !== undefined) {
      Twig.debug = params.debug;
    }

    if (params.trace !== undefined) {
      Twig.trace = params.trace;
    }

    if (params.data !== undefined) {
      return Twig.Templates.parsers.twig({
        data: params.data,
        path: Object.hasOwnProperty.call(params, 'path') ? params.path : undefined,
        module: params.module,
        id: id,
        options: options
      });
    }

    if (params.ref !== undefined) {
      if (params.id !== undefined) {
        throw new Twig.Error('Both ref and id cannot be set on a twig.js template.');
      }

      return Twig.Templates.load(params.ref);
    }

    if (params.method !== undefined) {
      if (!Twig.Templates.isRegisteredLoader(params.method)) {
        throw new Twig.Error('Loader for "' + params.method + '" is not defined.');
      }

      return Twig.Templates.loadRemote(params.name || params.href || params.path || id || undefined, {
        id: id,
        method: params.method,
        parser: params.parser || 'twig',
        base: params.base,
        module: params.module,
        precompiled: params.precompiled,
        async: params.async,
        options: options
      }, params.load, params.error);
    }

    if (params.href !== undefined) {
      return Twig.Templates.loadRemote(params.href, {
        id: id,
        method: 'ajax',
        parser: params.parser || 'twig',
        base: params.base,
        module: params.module,
        precompiled: params.precompiled,
        async: params.async,
        options: options
      }, params.load, params.error);
    }

    if (params.path !== undefined) {
      return Twig.Templates.loadRemote(params.path, {
        id: id,
        method: 'fs',
        parser: params.parser || 'twig',
        base: params.base,
        module: params.module,
        precompiled: params.precompiled,
        async: params.async,
        options: options
      }, params.load, params.error);
    }
  }; // Extend Twig with a new filter.


  Twig.exports.extendFilter = function (filter, definition) {
    Twig.filter.extend(filter, definition);
  }; // Extend Twig with a new function.


  Twig.exports.extendFunction = function (fn, definition) {
    Twig._function.extend(fn, definition);
  }; // Extend Twig with a new test.


  Twig.exports.extendTest = function (test, definition) {
    Twig.test.extend(test, definition);
  }; // Extend Twig with a new definition.


  Twig.exports.extendTag = function (definition) {
    Twig.logic.extend(definition);
  }; // Provide an environment for extending Twig core.
  // Calls fn with the internal Twig object.


  Twig.exports.extend = function (fn) {
    fn(Twig);
  };
  /**
   * Provide an extension for use with express 2.
   *
   * @param {string} markup The template markup.
   * @param {array} options The express options.
   *
   * @return {string} The rendered template.
   */


  Twig.exports.compile = function (markup, options) {
    var id = options.filename;
    var path = options.filename; // Try to load the template from the cache

    var template = new Twig.Template({
      data: markup,
      path: path,
      id: id,
      options: options.settings['twig options']
    }); // Twig.Templates.load(id) ||

    return function (context) {
      return template.render(context);
    };
  };
  /**
   * Provide an extension for use with express 3.
   *
   * @param {string} path The location of the template file on disk.
   * @param {Object|Function} The options or callback.
   * @param {Function} fn callback.
   *
   * @throws Twig.Error
   */


  Twig.exports.renderFile = function (path, options, fn) {
    // Handle callback in options
    if (typeof options === 'function') {
      fn = options;
      options = {};
    }

    options = options || {};
    var settings = options.settings || {}; // Mixin any options provided to the express app.

    var viewOptions = settings['twig options'];
    var params = {
      path: path,
      base: settings.views,
      load: function load(template) {
        // Render and return template as a simple string, see https://github.com/twigjs/twig.js/pull/348 for more information
        if (!viewOptions || !viewOptions.allowAsync) {
          fn(null, String(template.render(options)));
          return;
        }

        template.renderAsync(options).then(function (out) {
          return fn(null, out);
        }, fn);
      },
      error: function error(err) {
        fn(err);
      }
    };

    if (viewOptions) {
      for (var option in viewOptions) {
        if (Object.hasOwnProperty.call(viewOptions, option)) {
          params[option] = viewOptions[option];
        }
      }
    }

    Twig.exports.twig(params);
  }; // Express 3 handler


  Twig.exports.__express = Twig.exports.renderFile;
  /**
   * Shoud Twig.js cache templates.
   * Disable during development to see changes to templates without
   * reloading, and disable in production to improve performance.
   *
   * @param {boolean} cache
   */

  Twig.exports.cache = function (cache) {
    Twig.cache = cache;
  }; // We need to export the path module so we can effectively test it


  Twig.exports.path = Twig.path; // Export our filters.
  // Resolves #307

  Twig.exports.filters = Twig.filters; // Export our tests.

  Twig.exports.tests = Twig.tests; // Export our functions.

  Twig.exports.functions = Twig.functions;
  Twig.exports.Promise = Twig.Promise;
  return Twig;
};

/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
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

/***/ "./src/country.js":
/*!************************!*\
  !*** ./src/country.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _template_pages_country_twig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/pages/country.twig */ "./src/template/pages/country.twig");
/* harmony import */ var _template_pages_country_twig__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_pages_country_twig__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/template/blocks/best-tours.twig":
/*!*********************************************!*\
  !*** ./src/template/blocks/best-tours.twig ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<section class=\"best-tours\">\n\t<div class=\"best-tours__main\">\n\t\t<h2 class=\"best-tours__title title\">\n\t\t\tВыбираем самые лучшие туры в Тайланд в 2019 году\n\t\t</h2>\n\t\t<div class=\"best-tours__descr\">\n\t\t\tМы подобрали только проверенные отели для незабываемого отпуска — вас уже ждут золотистые пляжи и роскошное турецкое море!\n\t\t</div>\n\t\t<div class=\"best-tours__wrap\">\n\t\t\t<div class=\"progress\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n\t\t\t\t<span class=\"progress-fill\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"best-tours__slider slider\">\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-2.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-2.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"}],
    template = twig({"id":"$resolved:aa87df7838dd0b9379d49d0bed789d88444ccdff9f1ac8fffa4be6464319c7bcea64767f801516e8645728fc7aec76417fa9f953f27f90629bfbfc0d525d09fb:best-tours.twig","data":[{"type":"raw","value":"<section class=\"best-tours\">\n\t<div class=\"best-tours__main\">\n\t\t<h2 class=\"best-tours__title title\">\n\t\t\tВыбираем самые лучшие туры в Тайланд в 2019 году\n\t\t</h2>\n\t\t<div class=\"best-tours__descr\">\n\t\t\tМы подобрали только проверенные отели для незабываемого отпуска — вас уже ждут золотистые пляжи и роскошное турецкое море!\n\t\t</div>\n\t\t<div class=\"best-tours__wrap\">\n\t\t\t<div class=\"progress\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n\t\t\t\t<span class=\"progress-fill\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"best-tours__slider slider\">\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-2.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"best-tours__slider-item slide\">\n\t\t\t\t\t<div class=\"best-tours__item-wrap\">\n\t\t\t\t\t\t<a class=\"best-tours__item-top\">\n\t\t\t\t\t\t\t<img src=\"img/slider-2.jpg\" alt=\"\">\n\t\t\t\t\t\t\t<div class=\"best-tours__tags\">\n\t\t\t\t\t\t\t\t<div class=\"best-tours__tags-item\">🇩🇴 Доминикана</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"best-tours__item-bottom\">\n\t\t\t\t\t\t\t<div class=\"best-tours__item-stars\">\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t\t<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z\" fill=\"#FFAE00\"/></svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"best-tours__item-title\">\n\t\t\t\t\t\t\t\tAdalin Resort Hotel\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class=\"best-tours__item-list\">\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.00001 1.33325C5.05935 1.33325 2.66668 3.72592 2.66668 6.66325C2.64735 10.9599 7.79735 14.5226 8.00001 14.6666C8.00001 14.6666 13.3527 10.9599 13.3333 6.66659C13.3333 3.72592 10.9407 1.33325 8.00001 1.33325ZM8.00001 9.33325C6.52668 9.33325 5.33335 8.13992 5.33335 6.66659C5.33335 5.19325 6.52668 3.99992 8.00001 3.99992C9.47335 3.99992 10.6667 5.19325 10.6667 6.66659C10.6667 8.13992 9.47335 9.33325 8.00001 9.33325Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Ланта, Тайланд</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.99998 12H14V13.3333H1.99998V12ZM14.3393 5.68467C14.152 5.122 13.5446 4.818 12.982 5.00533L9.99998 6L4.66665 4L3.33331 4.66667L7.33331 7.33333L4.66665 8.66667L1.99998 7.33333L1.33331 8L3.99998 10.6667L13.698 7.03C14.2386 6.82667 14.522 6.23333 14.3393 5.68467Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Вылет 27 апреля 2021 из Москвы</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.828 8.69669C13.3766 8.81669 12.9106 8.87736 12.4433 8.87736C11.02 8.87736 9.68332 8.32403 8.67932 7.32003C7.34065 5.98136 6.81332 4.00869 7.30332 2.17136C7.36465 1.94136 7.29865 1.69603 7.13065 1.52803C6.96265 1.36003 6.71798 1.29203 6.48665 1.35603C5.35198 1.65936 4.31732 2.25469 3.49398 3.07736C0.895316 5.67603 0.895316 9.90603 3.49398 12.506C4.75332 13.7654 6.42798 14.4594 8.20865 14.4594C9.98932 14.4594 11.6633 13.766 12.922 12.5067C13.746 11.682 14.342 10.646 14.644 9.51269C14.7053 9.28269 14.6386 9.03736 14.4706 8.86936C14.3026 8.70069 14.0566 8.63403 13.828 8.69669ZM11.98 11.564C10.9726 12.5714 9.63332 13.126 8.20932 13.126C6.78465 13.126 5.44532 12.5707 4.43732 11.5634C2.35865 9.48403 2.35865 6.10003 4.43732 4.02069C4.83865 3.61936 5.30265 3.28603 5.81065 3.03203C5.66265 4.95536 6.35332 6.88003 7.73732 8.26403C9.11598 9.64336 11.022 10.344 12.9693 10.1914C12.7146 10.6974 12.3806 11.162 11.98 11.564Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>На 6 ночей ( 7 дней )</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 10.0001C14 6.91675 11.662 4.37275 8.66665 4.03941V2.66675H7.33331V4.03941C4.33798 4.37275 1.99998 6.91675 1.99998 10.0001V11.3334H14V10.0001ZM3.33331 10.0001C3.33331 7.42741 5.42731 5.33341 7.99998 5.33341C10.5726 5.33341 12.6666 7.42741 12.6666 10.0001H3.33331ZM1.33331 12.0001H14.6666V13.3334H1.33331V12.0001Z\" fill=\"#596C80\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>Питание: Завтрак</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"best-tours__item-prop\">\n\t\t\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"\"><path d=\"M2.99998 5.70125C2.99998 7.03125 4.00331 8.03459 5.33331 8.03459C6.66331 8.03459 7.66665 7.03125 7.66665 5.70125C7.66665 4.37125 6.66331 3.36792 5.33331 3.36792C4.00331 3.36792 2.99998 4.37125 2.99998 5.70125ZM2.66665 12.6666H7.99998H8.66665H9.33331V11.9999C9.33331 10.1619 7.83798 8.66659 5.99998 8.66659H4.66665C2.82865 8.66659 1.33331 10.1619 1.33331 11.9999V12.6666H1.99998H2.66665Z\" fill=\"#596C80\" fill-opacity=\"0.63\"/><path d=\"M7.79997 5.70125C7.79997 7.03125 8.8033 8.03459 10.1333 8.03459C11.4633 8.03459 12.4666 7.03125 12.4666 5.70125C12.4666 4.37125 11.4633 3.36792 10.1333 3.36792C8.8033 3.36792 7.79997 4.37125 7.79997 5.70125ZM7.46663 12.6666H12.8H13.4666H14.1333V11.9999C14.1333 10.1619 12.638 8.66659 10.8 8.66659H9.46663C7.62863 8.66659 6.1333 10.1619 6.1333 11.9999V12.6666H6.79997H7.46663Z\" fill=\"#596C80\"/></g><defs><clipPath id=\"\"><rect width=\"16\" height=\"16\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t<span>2 Туриста</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<button class=\"best-tours__item-button\">\n\t\t\t\t\t\t\t\tУзнать цену на этот тур\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/blocks/breadcrumbs.twig":
/*!**********************************************!*\
  !*** ./src/template/blocks/breadcrumbs.twig ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<section class=\"breadcrumbs\">\n\t<ul class=\"breadcrumbs__list\">\n\t\t<li class=\"breadcrumbs__item\">\n\t\t\t<a href=\"#\" class=\"breadcrumbs__link\">\n\t\t\t\t<span>Главная</span>\n\t\t\t\t<span>&rarr;</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"breadcrumbs__item\">\n\t\t\t<a href=\"#\" class=\"breadcrumbs__link\">\n\t\t\t\t<span>Главная</span>\n\t\t\t\t<span>&rarr;</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"breadcrumbs__item\">\n\t\t\t<a href=\"#\" class=\"breadcrumbs__link\">\n\t\t\t\t<span>Тур в Тайланд</span>\n\t\t\t\t<span>&rarr;</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</section>"}],
    template = twig({"id":"$resolved:62c155da6fbd14d376393afbdbaa6d403bd1be21ddcae12f4723d836f50dbccc4c0f416a4c6bb916e3dcf6388de5b1917b7729f62bc5f78f20677efdebd2fe05:breadcrumbs.twig","data":[{"type":"raw","value":"<section class=\"breadcrumbs\">\n\t<ul class=\"breadcrumbs__list\">\n\t\t<li class=\"breadcrumbs__item\">\n\t\t\t<a href=\"#\" class=\"breadcrumbs__link\">\n\t\t\t\t<span>Главная</span>\n\t\t\t\t<span>&rarr;</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"breadcrumbs__item\">\n\t\t\t<a href=\"#\" class=\"breadcrumbs__link\">\n\t\t\t\t<span>Главная</span>\n\t\t\t\t<span>&rarr;</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"breadcrumbs__item\">\n\t\t\t<a href=\"#\" class=\"breadcrumbs__link\">\n\t\t\t\t<span>Тур в Тайланд</span>\n\t\t\t\t<span>&rarr;</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</section>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/blocks/footer.twig":
/*!*****************************************!*\
  !*** ./src/template/blocks/footer.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<footer class=\"footer\">\n\t<div class=\"footer__wrap\">\n\t\t<div class=\"footer__contacts\">\n\t\t\t<div class=\"footer__logo\">\n\t\t\t\t<img src=\"img/footer-logo.svg\" alt=\"\">\n\t\t\t</div>\n\t\t\t<a href=\"tel:88001003024\" class=\"footer__phone\">\n\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t<span class=\"footer__phone-number\">\n\t\t\t\t\t8-800-100-30-24\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<div class=\"footer__social\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/fb.svg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/vk.svg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/ig.svg\" alt=\"\">\n\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/wa.svg\" alt=\"\">\n\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"footer__mail\">\n\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t<span>\n\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"footer__menu\">\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tТуры\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tЗаказать подбор тура\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tГорящие туры\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tОтдых в России\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tСервисы\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tАвиабилеты онлайн\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tАкции турагентств\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tПоиск попутчика\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tПоиск попутчика\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tРеклама на сайте\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tТехническая поддержка\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tУлучшить сайт\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tЗарегистрировать турагентство\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tПользовательское соглашение\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tПолитика конфиденциальности\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tПолезное\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tО проекте\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tКонтакты\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tКак оформить визу\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tСтатьи для туриста\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tОтзывы туристов\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tГде получить кредит\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer__copyright\">\n\t\t© «Aborigen Travel» 2008-2021. Все материалы можно использовать со ссылкой на первоисточник.\n\t</div>\n</footer>"}],
    template = twig({"id":"$resolved:8ffe7eb014640f0bb11837065f3518fedc41372534fd42cb644b8ff1d7f35bb9e6ce55d4c8b68290f2bfe32233de1ed002b7247924ec8a9aac7d6931ee46f797:footer.twig","data":[{"type":"raw","value":"<footer class=\"footer\">\n\t<div class=\"footer__wrap\">\n\t\t<div class=\"footer__contacts\">\n\t\t\t<div class=\"footer__logo\">\n\t\t\t\t<img src=\"img/footer-logo.svg\" alt=\"\">\n\t\t\t</div>\n\t\t\t<a href=\"tel:88001003024\" class=\"footer__phone\">\n\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t<span class=\"footer__phone-number\">\n\t\t\t\t\t8-800-100-30-24\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t\t<div class=\"footer__social\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/fb.svg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/vk.svg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/ig.svg\" alt=\"\">\n\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"img/wa.svg\" alt=\"\">\n\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"footer__mail\">\n\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t<span>\n\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"footer__menu\">\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tТуры\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tЗаказать подбор тура\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tГорящие туры\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tОтдых в России\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tСервисы\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tАвиабилеты онлайн\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tАкции турагентств\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tПоиск попутчика\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tПоиск попутчика\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tРеклама на сайте\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tТехническая поддержка\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tУлучшить сайт\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tЗарегистрировать турагентство\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tПользовательское соглашение\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tПолитика конфиденциальности\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"footer__nav\">\n\t\t\t\t<div class=\"footer__nav-head\">\n\t\t\t\t\tПолезное\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"footer__list\">\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tО проекте\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tКонтакты\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tКак оформить визу\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tСтатьи для туриста\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tОтзывы туристов\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"footer__list-item\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\tГде получить кредит\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer__copyright\">\n\t\t© «Aborigen Travel» 2008-2021. Все материалы можно использовать со ссылкой на первоисточник.\n\t</div>\n</footer>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/blocks/guide.twig":
/*!****************************************!*\
  !*** ./src/template/blocks/guide.twig ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<section class=\"guide\">\n\t<div class=\"guide__main\">\n\t\t<h2 class=\"guide__title title\">\n\t\t\tКраткий путеводитель по Таиланду\n\t\t</h2>\n\t\t<div class=\"guide__descr\">\n\t\t\tТаиланд считается самой посещаемой страной Юго-Восточной Азии, и это неудивительно: теплая погода, цветущее буйство растений, обилие свежих фруктов и ласковое море доступны здесь в течение всего года.\n\t\t</div>\n\t\t<div class=\"guide__wrap\">\n\t\t\t<div class=\"guide__wrap-item\">🇹🇭 Язык:  Тайский</div>\n\t\t\t<div class=\"guide__wrap-item\">💰 Валюта: Бат</div>\n\t\t\t<div class=\"guide__wrap-item\">🏢 Столица: Бангкок</div>\n\t\t\t<div class=\"guide__wrap-item\">📁 Виза: не нужна</div>\n\t\t\t<div class=\"guide__wrap-item\">🕔 Часовой пояс:  UTC+7 (+4ч к мск)</div>\n\t\t\t<div class=\"guide__wrap-item\">⛈ Сезон дождей:  июнь-август</div>\n\t\t</div>\n\t</div>\n</section>"}],
    template = twig({"id":"$resolved:b5a14b66219b8bd5a474857ed534c895fa1afcfeca141e99097fdf8ed8e922b077b42de0367515f1e13439509ecc9e1cd5b2c86a8b0f0ffa1e1218d7322a6cf6:guide.twig","data":[{"type":"raw","value":"<section class=\"guide\">\n\t<div class=\"guide__main\">\n\t\t<h2 class=\"guide__title title\">\n\t\t\tКраткий путеводитель по Таиланду\n\t\t</h2>\n\t\t<div class=\"guide__descr\">\n\t\t\tТаиланд считается самой посещаемой страной Юго-Восточной Азии, и это неудивительно: теплая погода, цветущее буйство растений, обилие свежих фруктов и ласковое море доступны здесь в течение всего года.\n\t\t</div>\n\t\t<div class=\"guide__wrap\">\n\t\t\t<div class=\"guide__wrap-item\">🇹🇭 Язык:  Тайский</div>\n\t\t\t<div class=\"guide__wrap-item\">💰 Валюта: Бат</div>\n\t\t\t<div class=\"guide__wrap-item\">🏢 Столица: Бангкок</div>\n\t\t\t<div class=\"guide__wrap-item\">📁 Виза: не нужна</div>\n\t\t\t<div class=\"guide__wrap-item\">🕔 Часовой пояс:  UTC+7 (+4ч к мск)</div>\n\t\t\t<div class=\"guide__wrap-item\">⛈ Сезон дождей:  июнь-август</div>\n\t\t</div>\n\t</div>\n</section>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/blocks/header.twig":
/*!*****************************************!*\
  !*** ./src/template/blocks/header.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"short","match":["short"]}],"output":[{"type":"raw","value":"\t<header class=\"header header--short\">\n\t\t<div class=\"header__main\">\n\t\t\t<div class=\"header__menu\">\n\t\t\t\t<div class=\"header__menu-left\">\n\t\t\t\t\t<button class=\"header__burger\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a href=\"#\" class=\"header__logo\">\n\t\t\t\t\t\t<svg width=\"175\" height=\"27\" viewBox=\"0 0 175 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.2928 13.276L32.951 13.276L32.951 15.0347C32.951 15.0347 33.8221 15.6362 34.3724 16.5619C34.9226 17.4875 35.2434 19.5701 35.2434 19.5701C35.2434 19.5701 36.0458 18.9915 37.1006 18.737C38.1554 18.4825 39.5077 18.5983 39.5077 18.5983C39.5077 18.5983 40.1957 17.7188 41.5023 17.3488C42.8092 16.9786 43.9554 17.1869 43.9554 17.1869C43.9554 17.1869 44.6891 16.2148 46.1791 15.8678C47.6695 15.5204 48.655 15.7752 48.655 15.7752C48.655 15.7752 49.6868 14.8496 50.1453 14.5025C50.6038 14.1555 52.0712 13.415 52.0712 13.415C52.0712 13.415 50.902 12.9751 50.2143 12.628C49.5266 12.281 48.4948 11.2628 48.4948 11.2628C48.4948 11.2628 47.3486 11.6101 45.9957 11.147C44.6431 10.6842 43.8637 9.66597 43.8637 9.66597C43.8637 9.66597 42.9006 10.2443 41.3879 9.8511C39.8746 9.45793 39.5307 8.4165 39.5307 8.4165C39.5307 8.4165 38.5222 8.64776 37.1236 8.27751C35.725 7.90755 35.0603 7.14352 35.0603 7.14352C35.0603 7.14352 34.9456 8.85611 34.5788 9.59632C34.2119 10.3368 33.1114 11.6095 33.1114 11.6095C33.1114 11.6095 34.6245 11.6789 35.4271 11.7714C36.2295 11.864 36.7338 12.0491 37.2383 12.3268C37.7429 12.6048 38.2928 13.276 38.2928 13.276ZM29.5124 13.3918L29.5124 14.9883C29.5124 14.9883 28.8017 15.3121 28.5496 15.7288C28.2975 16.1452 28.1828 17.2327 28.1828 17.2327L25.8214 17.2327L25.8214 15.0344L0.24656 15.0344L0.24656 13.3915L29.5124 13.3915L29.5124 13.3918ZM32.8369 15.0347L32.8369 11.6098L32.3327 11.6098L32.3327 15.0347L32.8369 15.0347ZM31.9658 15.0347L31.9658 11.6098L31.4616 11.6098L31.4616 15.0347L31.9658 15.0347ZM31.0487 15.0347L31.0487 11.6098L30.5445 11.6098L30.5445 15.0347L31.0487 15.0347Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.0385 4.53869C20.0165 4.60591 21.6935 4.94231 21.6935 4.94231C21.6935 4.94231 20.4177 5.60935 19.7109 6.16416L20.1333 6.33323C20.3623 6.42411 20.5786 6.51239 20.7841 6.5975C21.123 6.40766 21.5197 6.37275 21.5197 6.37275C21.5197 6.37275 21.3306 6.54471 21.1826 6.76513C21.9263 7.0822 22.515 7.35975 23.0136 7.61682C23.5367 7.341 24.4689 7.25618 24.4689 7.25618C24.4689 7.25618 23.9961 7.50949 23.505 7.87936C24.5432 8.4535 25.2149 8.95522 26.3526 9.63005C26.6369 9.79883 26.9225 9.96761 27.2077 10.1332C27.8899 9.90356 28.663 9.86433 28.663 9.86433C28.663 9.86433 28.0901 10.1032 27.658 10.3923C29.2269 11.2847 30.7519 12.0368 31.9199 12.1421C33.3311 12.2694 34.4082 12.1961 34.855 12.0737L34.855 14.8564L35.3673 14.8564L35.3673 11.5371C35.3673 11.5371 35.1111 11.2904 35.018 11.0885C34.9248 10.8868 34.3426 9.89981 34.3426 9.89981L33.9231 10.124C33.9231 10.124 33.9231 10.3259 34.0166 10.5726C34.1098 10.8193 34.366 11.201 34.366 11.201C34.366 11.201 33.9468 10.999 33.4575 10.5279C32.8694 9.96155 32.6689 9.24316 31.6056 8.06113L31.4812 8.4134C31.4812 8.4134 31.3949 8.11912 31.332 7.76742C31.1957 7.62576 31.0474 7.47776 30.8847 7.32311C30.8643 7.68433 30.891 8.09806 30.891 8.09806C30.891 8.09806 30.6336 7.65 30.6213 7.07874C30.3915 6.86981 30.1566 6.66625 29.9166 6.46825C28.3319 5.1561 26.8841 4.20084 25.0624 3.59871C25.0783 3.86486 25.0989 4.13071 25.1244 4.39616C25.1244 4.39616 24.7095 3.805 24.4578 3.41638C23.6749 3.20057 22.8198 3.04362 21.8565 2.94668C21.4751 2.9083 21.1074 2.87917 20.7515 2.85839C20.8648 3.07802 20.9848 3.2944 21.1113 3.50726C21.3672 3.93368 21.8795 4.51676 21.8795 4.51676C21.8795 4.51676 20.8776 4.3148 19.5269 4.22507C18.1756 4.13506 16.522 4.42674 16.522 4.42674C16.522 4.42674 18.06 4.47146 19.0385 4.53869Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3997 12.9833L33.0429 12.9833L33.0429 14.7252L32.9285 14.7252L32.9285 11.333L33.2041 11.333C33.2041 11.333 34.7214 11.4017 35.5263 11.4934C36.3309 11.5851 36.8366 11.7684 37.3425 12.0435C37.8482 12.3185 38.3997 12.9833 38.3997 12.9833ZM29.5946 14.7252L29.5946 13.0979L0.246518 13.0979L0.246518 11.333L24.8245 11.333C25.5597 11.6664 26.2442 11.8967 26.8359 11.9518C28.2287 12.0818 29.2918 12.0069 29.7327 11.8819L29.7327 14.7252L29.5946 14.7252ZM32.4228 11.333L32.4228 14.7252L32.0549 14.7252L32.0549 11.333L32.4228 11.333ZM31.5493 11.333L31.5493 14.7252L31.1353 14.7252L31.1353 11.333L31.5493 11.333ZM30.6296 11.333L30.6296 14.7252L30.2384 14.7252L30.2384 11.333L30.6296 11.333ZM10.6739 4.27387C11.6125 4.50764 13.0212 5.11079 14.786 5.84306C15.4836 5.27588 16.7427 4.59461 16.7427 4.59461C16.7427 4.59461 15.0874 4.25088 14.1224 4.18219C13.1567 4.1138 11.6397 4.06752 11.6397 4.06752C11.6397 4.06752 13.272 3.76948 14.6053 3.86145C15.9384 3.95313 16.9273 4.15949 16.9273 4.15949C16.9273 4.15949 16.4213 3.56371 16.1691 3.12801C16.0431 2.91222 15.9133 2.66223 15.8139 2.46501C12.8879 2.28961 10.8152 2.7604 8.92651 4.0908C9.43218 4.04481 9.66195 4.02182 10.6739 4.27387ZM18.5309 7.59591C19.0156 7.21798 19.4822 6.95915 19.4822 6.95915C19.4822 6.95915 18.5622 7.04582 18.0459 7.32764C18.2089 7.41476 18.3705 7.50419 18.5309 7.59591ZM26.4027 8.14098L26.5254 7.78104C26.4412 7.68435 26.3516 7.58411 26.2555 7.48064C26.2942 7.70293 26.3433 7.92328 26.4027 8.14098ZM25.554 6.77726C25.5662 7.36096 25.8202 7.81877 25.8202 7.81877C25.8202 7.81877 25.7936 7.39603 25.814 7.02695C25.7315 6.94559 25.6448 6.86246 25.554 6.77726ZM20.1289 4.03597C20.1289 4.03597 20.0858 3.5755 20.0677 3.22116C19.8737 3.15454 19.675 3.09263 19.471 3.03485C19.7197 3.43194 20.1289 4.03597 20.1289 4.03597ZM22.6298 10.1639C23.0559 9.86848 23.6216 9.62439 23.6216 9.62439C23.6216 9.62439 22.8586 9.66448 22.1853 9.89913C22.3335 9.98816 22.4819 10.0766 22.6298 10.1639ZM15.8453 6.28584C15.9816 6.34421 16.112 6.4014 16.2386 6.45712C16.3846 6.2316 16.5712 6.0562 16.5712 6.0562C16.5712 6.0562 16.1797 6.09187 15.8453 6.28584ZM49.2668 12.7572C49.2858 12.7287 49.2928 12.6939 49.2862 12.6604C49.2795 12.6268 49.2598 12.5973 49.2313 12.5782C49.2289 12.5767 48.9726 12.4028 48.7611 12.0868C48.5441 11.7622 48.4098 11.3651 48.4086 11.3613C48.3978 11.3288 48.3744 11.302 48.3437 11.2867C48.313 11.2713 48.2774 11.2688 48.2448 11.2797C48.2122 11.2905 48.1853 11.3138 48.1699 11.3444C48.1546 11.375 48.152 11.4105 48.1629 11.443C48.1688 11.4607 48.3093 11.876 48.5458 12.2301C48.7871 12.5912 49.0755 12.7849 49.0876 12.7931C49.1162 12.8118 49.151 12.8185 49.1846 12.8118C49.2181 12.8051 49.2477 12.7854 49.2668 12.7572ZM47.8772 12.3786C47.8994 12.3533 47.9106 12.3202 47.9084 12.2867C47.9063 12.2531 47.8909 12.2218 47.8657 12.1994C47.8409 12.1773 47.6061 11.9845 46.9801 11.9603C46.367 11.9368 45.9868 12.0529 45.9711 12.0579C45.9383 12.0681 45.911 12.0908 45.8951 12.1211C45.8791 12.1513 45.8759 12.1867 45.8861 12.2193C45.8963 12.252 45.9191 12.2792 45.9494 12.2951C45.9798 12.311 46.0152 12.3142 46.048 12.3041C46.0515 12.3032 46.4055 12.1965 46.9703 12.218C47.5011 12.2383 47.6939 12.3919 47.6957 12.3934C47.7219 12.4151 47.7555 12.4257 47.7895 12.423C47.8234 12.4202 47.8549 12.4043 47.8772 12.3786ZM45.0845 12.6667C45.0972 12.6554 45.1075 12.6417 45.1149 12.6264C45.1222 12.6111 45.1264 12.5945 45.1274 12.5776C45.1283 12.5607 45.1258 12.5437 45.1201 12.5278C45.1145 12.5118 45.1057 12.4971 45.0943 12.4845C45.0905 12.4798 44.6853 12.0293 44.3967 11.5426C44.106 11.0521 43.7645 10.2376 43.7612 10.2293C43.748 10.1977 43.7228 10.1727 43.691 10.1596C43.6593 10.1466 43.6236 10.1467 43.5919 10.1599C43.5603 10.1731 43.5351 10.1982 43.5221 10.2299C43.509 10.2615 43.5091 10.2971 43.5223 10.3286C43.5365 10.3626 43.8739 11.1676 44.1741 11.6738C44.476 12.1835 44.8846 12.6381 44.9018 12.6569C44.9248 12.6824 44.9569 12.6977 44.9912 12.6995C45.0254 12.7013 45.059 12.6895 45.0845 12.6667ZM43.25 11.8088C43.2789 11.7909 43.2995 11.7623 43.3075 11.7293C43.3154 11.6963 43.3099 11.6615 43.2922 11.6325C43.2807 11.6142 43.003 11.175 42.0704 10.8891C41.1421 10.6043 40.5625 10.8136 40.5383 10.8227C40.4718 10.8475 40.438 10.9215 40.4629 10.9881C40.4877 11.0547 40.5619 11.0886 40.6288 11.0645C40.6341 11.0624 41.1572 10.8787 41.9944 11.1355C42.8224 11.3896 43.0699 11.7643 43.0722 11.7681C43.0906 11.7968 43.1195 11.8171 43.1528 11.8247C43.186 11.8323 43.2209 11.8266 43.25 11.8088ZM39.3957 11.9244C39.4067 11.892 39.4044 11.8566 39.3892 11.8259C39.3741 11.7953 39.3474 11.7718 39.3149 11.7608C39.3099 11.759 38.7992 11.5806 38.2143 11.0114C37.2899 10.1117 36.9892 8.66336 36.9862 8.64862C36.9795 8.61508 36.9596 8.58558 36.9311 8.56662C36.9025 8.54766 36.8676 8.54078 36.8339 8.5475C36.8003 8.55423 36.7707 8.574 36.7517 8.60247C36.7326 8.63094 36.7257 8.66578 36.7325 8.69932C36.7449 8.76182 37.0504 10.2393 38.0333 11.1959C38.6638 11.8094 39.2091 11.9975 39.2318 12.0051C39.2479 12.0106 39.2649 12.0128 39.2819 12.0117C39.2988 12.0106 39.3154 12.0062 39.3306 11.9987C39.3458 11.9912 39.3594 11.9808 39.3706 11.968C39.3817 11.9552 39.3903 11.9404 39.3957 11.9244ZM38.3997 12.9833C38.3997 12.9833 38.8137 13.2123 39.5953 13.2123C40.3771 13.2123 41.2279 12.8471 41.6185 12.7999C42.377 12.7082 43.3419 13.1531 44.0327 13.2123C45.3661 13.327 46.6997 13.052 46.6997 13.052C46.6997 13.052 47.0901 13.3412 47.4585 13.35C48.424 13.3727 49.2517 13.0979 49.8955 13.052C50.5392 13.006 51.6428 13.1436 51.6428 13.1436C51.6428 13.1436 50.9302 13.4417 50.1714 13.9688C49.4129 14.4959 48.6999 15.1376 48.6999 15.1376C48.6999 15.1376 47.5502 14.9083 46.263 15.2523C44.9754 15.596 44.0099 16.4898 44.0099 16.4898C44.0099 16.4898 42.5385 16.3295 41.5499 16.6272C40.5614 16.9253 39.4578 17.9108 39.4578 17.9108C39.4578 17.9108 38.4 17.8191 37.5495 17.9794C36.6988 18.1398 35.5721 18.7129 35.5721 18.7129C35.5721 18.7129 35.3882 17.223 34.8364 16.2378C34.2846 15.2523 33.6639 14.6335 33.6639 14.6335C33.6639 14.6335 34.5147 14.7252 35.3193 14.6105C36.1239 14.4959 36.7218 14.4042 37.2506 14.0604C37.779 13.7167 38.3997 12.9833 38.3997 12.9833Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4083 16.0886C27.4101 16.0829 27.5888 15.5266 27.8222 15.2591C28.0544 14.9925 28.5373 14.7828 28.5421 14.7806C28.5719 14.7653 28.5951 14.7386 28.607 14.706C28.6188 14.6734 28.6184 14.6373 28.6058 14.605C28.5932 14.5726 28.5694 14.5466 28.5392 14.532C28.509 14.5175 28.4747 14.5155 28.4432 14.5266C28.4211 14.536 27.9017 14.7614 27.6295 15.0735C27.3581 15.3843 27.1684 15.9765 27.1603 16.0016C27.1493 16.0362 27.1519 16.0739 27.1674 16.1065C27.1829 16.1391 27.21 16.1638 27.2429 16.1754C27.2758 16.1869 27.3117 16.1842 27.3427 16.168C27.3738 16.1517 27.3974 16.1231 27.4083 16.0886ZM26.7808 14.6446C27.1881 14.6192 27.6767 14.4497 27.6973 14.4425C27.7136 14.4367 27.7286 14.4277 27.7416 14.4159C27.7546 14.4041 27.7652 14.3897 27.7729 14.3735C27.7805 14.3574 27.7851 14.3398 27.7863 14.3218C27.7875 14.3039 27.7854 14.2858 27.7799 14.2687C27.7745 14.2516 27.7659 14.2357 27.7546 14.2221C27.7434 14.2085 27.7297 14.1973 27.7143 14.1893C27.699 14.1812 27.6823 14.1764 27.6651 14.1751C27.648 14.1739 27.6308 14.1762 27.6145 14.1819C27.6097 14.1834 27.1379 14.3473 26.7656 14.3706C26.4028 14.3928 25.9166 14.2095 25.9118 14.2076C25.8792 14.1952 25.8433 14.1968 25.8119 14.2122C25.7805 14.2276 25.7562 14.2555 25.7443 14.2897C25.7325 14.3239 25.734 14.3617 25.7487 14.3947C25.7633 14.4277 25.7899 14.4532 25.8224 14.4657C25.8446 14.4739 26.3636 14.6704 26.7808 14.6446ZM22.6435 17.34C22.6477 17.329 23.0616 16.2264 23.6237 15.4707C24.1723 14.7326 24.9275 14.4443 24.9349 14.4415C24.9511 14.4355 24.966 14.4262 24.9788 14.4141C24.9915 14.402 25.0019 14.3874 25.0093 14.3712C25.0167 14.3549 25.021 14.3372 25.0219 14.3192C25.0228 14.3012 25.0203 14.2832 25.0146 14.2662C25.0088 14.2492 25 14.2335 24.9885 14.2201C24.977 14.2067 24.9631 14.1958 24.9476 14.188C24.9321 14.1802 24.9153 14.1758 24.8982 14.1748C24.881 14.1739 24.8639 14.1765 24.8477 14.1825C24.8139 14.1951 24.0148 14.498 23.4175 15.3015C22.8318 16.0892 22.417 17.1931 22.3997 17.2399C22.3934 17.2567 22.3904 17.2746 22.3907 17.2927C22.3911 17.3108 22.3948 17.3286 22.4017 17.3451C22.4086 17.3617 22.4185 17.3766 22.4309 17.3891C22.4433 17.4016 22.4579 17.4115 22.4739 17.418C22.4899 17.4246 22.507 17.4278 22.5242 17.4275C22.5414 17.4271 22.5584 17.4232 22.5741 17.4159C22.5898 17.4087 22.6041 17.3983 22.616 17.3852C22.6279 17.3722 22.6373 17.3569 22.6435 17.34ZM20.4952 16.0047C21.0657 15.8051 21.5779 15.4161 21.5994 15.3997C21.6274 15.3782 21.6461 15.346 21.6515 15.3101C21.657 15.2742 21.6486 15.2374 21.6284 15.2079C21.608 15.1785 21.5773 15.1588 21.5431 15.1531C21.5089 15.1474 21.4739 15.1562 21.4458 15.1774C21.4407 15.1812 20.9435 15.558 20.4125 15.7441C19.8847 15.9291 19.2336 15.908 19.227 15.908C19.2099 15.9074 19.1928 15.9104 19.1767 15.9167C19.1606 15.923 19.1459 15.9326 19.1334 15.9449C19.1208 15.9572 19.1107 15.972 19.1036 15.9884C19.0965 16.0048 19.0925 16.0225 19.0919 16.0405C19.0914 16.0585 19.0941 16.0765 19.1002 16.0934C19.1062 16.1103 19.1153 16.1257 19.127 16.1389C19.1387 16.1521 19.1528 16.1627 19.1684 16.1702C19.184 16.1777 19.2009 16.1818 19.218 16.1824C19.2464 16.1834 19.9218 16.2054 20.4952 16.0047ZM32.0817 14.8315C32.0823 14.8283 32.1489 14.5297 32.2544 14.3301C32.339 14.1702 32.6444 13.9006 32.755 13.8104C32.7793 13.7871 32.7943 13.7549 32.7971 13.7204C32.7999 13.6859 32.7902 13.6516 32.7699 13.6242C32.7497 13.5969 32.7204 13.5785 32.6879 13.5729C32.6554 13.5672 32.6221 13.5745 32.5945 13.5935C32.5494 13.6302 32.1516 13.9596 32.0261 14.1966C31.9024 14.4305 31.8301 14.7558 31.8271 14.7693C31.8193 14.8048 31.8251 14.8421 31.8435 14.873C31.8618 14.9039 31.8911 14.9259 31.9248 14.9341C31.9586 14.9424 31.9941 14.9362 32.0235 14.9169C32.0529 14.8977 32.0739 14.8669 32.0817 14.8315Z\" fill=\"white\"/><path d=\"M66.04 17.38L66.66 19H69.18L63.58 4.6L58 19H60.52L61.12 17.38H66.04ZM61.88 15.36L63.58 10.5L65.28 15.36H61.88ZM77.7319 12.02C78.9319 11.72 80.0719 10.78 80.0719 8.94C80.0719 4.9 75.4119 5 75.4119 5H70.7519V19H75.4119C76.3519 19 80.2719 18.82 80.2719 14.98C80.2719 14.98 80.3719 12.56 77.7319 12.02ZM73.0719 10.84V7.32H75.4119C75.4119 7.32 77.7319 7.22 77.7319 9.1C77.7319 10.84 75.4119 10.84 75.4119 10.84H73.0719ZM75.4119 16.68H73.0719V13.18H75.4119C75.4119 13.18 77.9319 13.04 77.9319 14.92C77.9319 16.44 76.3919 16.68 75.4119 16.68ZM87.5627 15.2C90.4227 15.2 92.7627 12.86 92.7627 10C92.7627 7.14 90.4227 4.8 87.5627 4.8C84.7027 4.8 82.3627 7.14 82.3627 10C82.3627 12.86 84.7027 15.2 87.5627 15.2ZM87.5627 7.12C89.1627 7.12 90.4427 8.4 90.4427 10C90.4427 11.6 89.1627 12.88 87.5627 12.88C85.9627 12.88 84.6827 11.6 84.6827 10C84.6827 8.4 85.9627 7.12 87.5627 7.12ZM92.1227 19V16.68H82.8827V19H92.1227ZM102.897 19H105.637L101.837 12.92C103.197 12.54 104.917 11.56 104.917 9.08C104.917 5 100.237 5 100.237 5H95.5766V7.34L97.7966 10.84H95.5766V19H97.9166V13.16H99.2566L102.897 19ZM100.537 10.82L98.3566 7.34H100.237C100.237 7.34 102.577 7.34 102.577 9.08C102.577 10.46 101.157 10.76 100.537 10.82ZM110.863 7.14H112.423V5H106.963V7.14H108.523V16.86H106.883V19H112.503V16.86H110.863V7.14ZM127.215 11.04H122.535V13.26H124.875V15.28C124.015 16.26 122.775 16.86 121.375 16.86C118.795 16.86 116.715 15.42 116.715 12C116.715 8.94 118.795 7.14 121.375 7.14C122.655 7.14 123.835 7.66 124.675 8.5L126.315 6.86C125.055 5.58 123.315 4.8 121.375 4.8C117.515 4.8 114.375 7.84 114.375 12C114.375 16.58 117.315 19.2 121.075 19.2C122.735 19.2 123.915 18.8 125.055 17.74L125.175 19.06H127.215V11.04ZM132.604 7.34H139.604V5H130.264V19H139.604V16.66H132.604V13.16H138.424V10.84H132.604V7.34ZM153.681 19V5H151.361V14.96L144.381 5H142.021V19H144.361V9.04L151.321 19H153.681Z\" fill=\"white\"/></svg>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"header__nav\">\n\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t<ul class=\"header__nav-list\">\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Авиабилеты</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Поиск попутчиков</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Энциклопедия туриста</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Кредит</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Виза</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t<div class=\"header__manager\">\n\t\t\t\t\t\t\t\t<div class=\"header__manager-photo\">\n\t\t\t\t\t\t\t\t<img src=\"img/manager.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<span class=\"header__manager-status\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"header__manager-name\">\n\t\t\t\t\t\t\t\t\tАнна Захаренко\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"header__manager-position\">\n\t\t\t\t\t\t\t\t\tПерсональный менеджер\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button class=\"header__manager-button\">\n\t\t\t\t\t\t\t\t\tПомощь с выбором тура\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t<div class=\"header__contacts\">\n\t\t\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__contacts-phone\">\n\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t<span class=\"header__contacts-phone-number\">\n\t\t\t\t\t\t\t\t\t\t8-800-100-30-24\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"header__contacts-mail\">\n\t\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"header__contacts-social\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297437L8.4761 3.47847C8.47863 3.47697 8.48144 3.47584 8.48407 3.47425C7.68832 3.93212 7.19444 4.91134 7.19041 6.30559L7.12722 28.5902C7.11925 31.3872 9.08641 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3114 48.171 34.1174 47.6606C34.095 47.6748 34.0731 47.69 34.0501 47.7035L39.5238 44.5226C40.315 44.0627 40.8055 43.0851 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#155C92\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#1A6FB0\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#1D81CD\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.3361 44.8764L35.3992 22.5919Z\" fill=\"#1D81CD\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#3D99E2\"/><path d=\"M31.0059 14.9825L36.4795 11.8015C38.9138 13.2068 40.8807 16.6134 40.8729 19.411L35.3992 22.592C35.4071 19.7944 33.44 16.3879 31.0059 14.9825Z\" fill=\"#5AAAE7\"/><path d=\"M18.5229 27.7352L18.5367 22.8668L22.1951 24.9789L22.2054 21.3883C22.2172 17.2213 24.4386 16.232 27.6733 18.0996C29.2225 18.9939 30.5536 19.8949 30.942 20.1785L30.9296 24.5327L28.6858 23.2387C26.9271 22.2233 26.5838 22.9873 26.5797 24.3966L26.5709 27.5054L30.766 29.9274L30.2062 34.4807L26.5569 32.3738L26.5217 44.8656L22.1459 42.3392L22.1814 29.8475L18.5229 27.7352Z\" fill=\"#3D5A98\"/><path d=\"M22.2054 21.4862L22.1951 25.0768L18.5367 22.9647L18.5229 27.8331L22.1814 29.9453L22.1462 42.3344L26.522 44.8608L26.5571 32.4717L30.2063 34.5785L30.766 30.0253L26.5709 27.6032L26.5797 24.4944C26.5838 23.0851 26.927 22.3211 28.6858 23.3365L30.9296 24.6305L30.942 20.2763C30.5537 19.9926 29.2225 19.0918 27.6733 18.1974C24.4386 16.3299 22.2172 17.3193 22.2054 21.4862Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604657C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297438L8.4761 3.47847C8.47863 3.47697 8.48144 3.47585 8.48407 3.47426C7.68832 3.93213 7.19444 4.91135 7.19041 6.3056L7.12722 28.5902C7.11925 31.3872 9.08641 34.7944 11.5205 36.1997L30.9139 47.3965C32.174 48.1239 33.3114 48.1711 34.1174 47.6607C34.095 47.6748 34.0731 47.6901 34.0501 47.7036L39.5238 44.5227C40.315 44.0628 40.8055 43.0852 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#6F75E3\"/><path d=\"M22.1161 19.7619L18.8617 17.883C18.4276 17.6324 18.2094 17.7004 17.9771 17.8785C17.8427 17.9815 17.802 18.0754 18.0766 18.2948C18.6159 18.7236 18.9193 19.3016 18.9978 19.9689C19.1251 21.0398 19.113 22.031 19.0356 22.9871C19.0124 23.2642 18.9675 23.5313 18.8669 23.7447C18.7684 23.9543 18.6327 24.0104 18.4637 23.9129C18.3614 23.8538 18.2469 23.7383 18.1211 23.5664C17.8201 23.1545 17.6084 22.6952 17.4017 22.2378C16.6248 20.5205 16.0066 18.7948 15.5022 17.0649C15.3558 16.565 15.1041 16.1682 14.7221 15.9411C14.2515 15.6603 13.7816 15.3839 13.3118 15.1126C12.842 14.8414 12.3723 14.5752 11.9025 14.3147C11.3368 13.9988 11.1674 14.2183 11.3957 14.9404C12.4119 18.1461 13.544 21.3483 15.0239 24.5222C15.7844 26.1517 16.6595 27.7094 17.7887 29.1064C18.9239 30.5108 20.1376 31.496 21.4128 32.2323C21.5764 32.3267 21.7412 32.4172 21.9067 32.5038C22.5882 32.8615 22.7935 32.7744 22.8269 32.0135C22.8508 31.492 22.9044 30.9918 23.1344 30.6441C23.274 30.4335 23.4571 30.3935 23.6692 30.516C23.8009 30.592 23.9438 30.7307 24.0943 30.9302C24.2906 31.1909 24.4543 31.4711 24.6114 31.7592C24.9934 32.4626 25.3609 33.1726 25.7581 33.8699C26.2117 34.6654 26.7442 35.3058 27.3991 35.6839C27.4614 35.7198 27.5249 35.7536 27.5894 35.7846L30.4697 37.4492C30.9328 37.6808 31.1762 37.167 30.911 36.4194C30.7241 35.8928 30.4792 35.3791 30.2206 34.8694C29.6348 33.7202 28.9445 32.6282 28.2914 31.5143C27.7016 30.5102 27.665 30.1037 28.1431 29.6155C28.6634 29.0792 29.2249 28.6 29.7495 28.0703C30.24 27.5743 30.742 27.0889 31.0014 26.3079C31.1666 25.8097 31.0227 25.4652 30.4949 25.0572C30.4052 24.9872 30.3112 24.9312 30.2178 24.8774L27.0857 23.0664C27.077 23.0613 27.0684 23.0561 27.0599 23.0511C26.6898 22.8376 26.4825 22.9118 26.3485 23.2201C26.1632 23.6451 25.9715 24.0665 25.7502 24.4506C25.2499 25.3265 24.6904 26.1284 23.9081 26.6289C23.7629 26.7213 23.6049 26.8453 23.388 26.72C23.3467 26.6962 23.3033 26.6634 23.2575 26.6197C22.8983 26.2609 22.7947 25.5192 22.8012 25.2931L22.8101 21.1371C22.7415 20.5043 22.6287 20.1744 22.1161 19.7619Z\" fill=\"white\"/><path d=\"M39.5238 44.5223L34.0501 47.7033C34.8414 47.2434 35.332 46.2658 35.3359 44.8763L40.8096 41.6953C40.8056 43.0848 40.315 44.0625 39.5238 44.5223Z\" fill=\"#7C84E7\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8612 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#989FED\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.336 44.8764L35.3992 22.5919Z\" fill=\"#989FED\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#A8ADEF\"/><path d=\"M31.0059 14.9825L36.4796 11.8015C38.9138 13.2068 40.8808 16.6134 40.8729 19.411L35.3992 22.592C35.4072 19.7944 33.4401 16.3879 31.0059 14.9825Z\" fill=\"#C5C8F5\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4795 11.8015L17.0862 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.9499 0.297437L8.47604 3.47847C8.47857 3.47697 8.48138 3.47584 8.484 3.47425C7.68825 3.93212 7.19438 4.91134 7.19035 6.30559L7.12716 28.5902C7.11919 31.3872 9.08635 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3113 48.171 34.1173 47.6606C34.0949 47.6748 34.0731 47.69 34.05 47.7035L39.5237 44.5226C40.3149 44.0627 40.8054 43.0851 40.8095 41.6956L40.8727 19.411C40.8808 16.6133 38.9137 13.2068 36.4795 11.8015Z\" fill=\"#7F33AD\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#943EC7\"/><path d=\"M8.47601 3.47837L13.9497 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3874 3.07834 9.27758 3.01253 8.47601 3.47837Z\" fill=\"#A258CB\"/><path d=\"M35.3991 22.5919L40.8728 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#A258CB\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#B77FDA\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#D5B4E9\"/><path d=\"M20.692 34.1685C18.2847 32.7787 17.9996 32.6035 17.049 32.0044C16.1703 31.4514 15.6931 31.0066 15.3757 30.681C14.9554 30.2505 14.656 29.8527 14.3415 29.3079C14.027 28.7632 13.8325 28.3048 13.6701 27.7268C13.5475 27.2902 13.4025 26.6573 13.3651 25.6236C13.3252 24.5063 13.3168 24.1733 13.3246 21.4073C13.3325 18.6412 13.3425 18.3182 13.3887 17.2507C13.4319 16.264 13.58 15.8004 13.7046 15.5065C13.8698 15.1177 14.0662 14.8851 14.3828 14.7046C14.6994 14.5241 15 14.4728 15.4213 14.5282C15.7396 14.5697 16.2177 14.6764 17.0967 15.1382C18.0476 15.6369 18.3326 15.7909 20.74 17.1807C23.1478 18.5708 23.4328 18.746 24.3835 19.3451C25.2622 19.8981 25.7395 20.3429 26.0568 20.6685C26.4771 21.099 26.7764 21.4968 27.091 22.0416C27.4055 22.5863 27.5999 23.0447 27.7624 23.6228C27.8844 24.0591 28.03 24.6922 28.0674 25.7253C28.1073 26.8426 28.1157 27.1762 28.1079 29.9423C28.1 32.7084 28.09 33.0308 28.0437 34.0983C28.0006 35.0857 27.8519 35.5489 27.7279 35.8431C27.5627 36.2319 27.3663 36.4645 27.0497 36.645C26.7331 36.8255 26.4325 36.8768 26.0111 36.8214C25.6929 36.7799 25.2147 36.6732 24.3357 36.2113C23.385 35.7127 23.0998 35.5586 20.692 34.1685ZM20.7455 15.3144C18.2969 13.9007 17.9899 13.7354 17.0281 13.2304C16.0681 12.7264 15.4122 12.5237 14.8379 12.4481C14.2446 12.3709 13.7406 12.4351 13.2378 12.7217C12.735 13.0082 12.4253 13.4083 12.1928 13.9562C11.9679 14.4866 11.8135 15.1516 11.7667 16.2294C11.7192 17.3089 11.7079 17.6557 11.6999 20.4692C11.692 23.2828 11.7013 23.6415 11.7424 24.772C11.783 25.9002 11.9331 26.7412 12.1543 27.5291C12.3829 28.3432 12.6894 29.0989 13.189 29.9643C13.6885 30.8297 14.1905 31.4746 14.7823 32.0816C15.3553 32.6684 16.0101 33.2218 16.9698 33.8269C17.9313 34.4322 18.2381 34.6214 20.6869 36.0351C23.1361 37.4491 23.4431 37.6145 24.4048 38.1194C25.3644 38.6225 26.0207 38.8261 26.5945 38.9013C27.1884 38.9789 27.6924 38.9146 28.1952 38.6281C28.698 38.3416 29.0078 37.9415 29.2403 37.3936C29.4652 36.8632 29.6196 36.1982 29.6664 35.1203C29.7132 34.0405 29.7252 33.6941 29.7331 30.8806C29.7411 28.0669 29.7312 27.7079 29.6907 26.5778C29.6501 25.4496 29.5 24.6087 29.2787 23.8207C29.0502 23.0066 28.7437 22.2509 28.2441 21.3855C27.7445 20.5202 27.2426 19.8752 26.6501 19.2678C26.0777 18.6813 25.4223 18.1269 24.4632 17.5229C23.5016 16.9176 23.1946 16.7285 20.7455 15.3144Z\" fill=\"white\"/><path d=\"M20.7063 29.1284C19.0468 28.1703 17.7056 25.8472 17.7111 23.9398C17.7164 22.0323 19.0664 21.263 20.7259 22.221C22.3859 23.1794 23.7271 25.5025 23.7217 27.41C23.7162 29.3175 22.3663 30.0868 20.7063 29.1284ZM20.7311 20.3546C18.1745 18.8784 16.0944 20.0631 16.0861 23.0016C16.0777 25.9401 18.1443 29.5188 20.7009 30.9949C23.2582 32.4714 25.3376 31.2864 25.346 28.3479C25.3544 25.4094 23.2884 21.8309 20.7311 20.3546Z\" fill=\"white\"/><path d=\"M25.5486 21.6797C24.9508 21.3346 24.4646 21.6116 24.4627 22.2985C24.4607 22.9848 24.9436 23.8213 25.5414 24.1664C26.1386 24.5112 26.6248 24.2342 26.6267 23.5479C26.6288 22.861 26.1458 22.0244 25.5486 21.6797Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8018L17.0863 0.604901C15.8613 -0.10235 14.7514 -0.168068 13.95 0.297682L8.4761 3.47871C8.47863 3.47721 8.48144 3.47609 8.48407 3.4745C7.68832 3.93237 7.19444 4.91159 7.19041 6.30584L7.12722 28.5904C7.11925 31.3874 9.08641 34.7946 11.5205 36.1999L30.9139 47.3967C32.174 48.1241 33.3114 48.1712 34.1174 47.6609C34.095 47.675 34.0731 47.6903 34.0501 47.7038L39.5238 44.5229C40.315 44.063 40.8055 43.0854 40.8095 41.6958L40.8727 19.4113C40.8809 16.6136 38.9137 13.2071 36.4796 11.8018Z\" fill=\"#40A559\"/><path d=\"M39.5236 44.5223L34.0499 47.7033C34.8412 47.2434 35.3319 46.2658 35.3357 44.8762L40.8094 41.6953C40.8055 43.0848 40.3148 44.0625 39.5236 44.5223Z\" fill=\"#4DBA69\"/><path d=\"M8.47595 3.47837L13.9497 0.297437C14.7511 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3873 3.07834 9.27752 3.01253 8.47595 3.47837Z\" fill=\"#65C27C\"/><path d=\"M35.3991 22.5919L40.8727 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#65C27C\"/><path d=\"M11.6124 3.78552L17.0861 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#7BCC92\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#94D6A8\"/><path d=\"M27.061 21.937C25.4139 19.0818 23.2184 16.7643 20.8771 15.4115C16.0507 12.6251 12.1103 14.8707 12.0926 20.4152C12.0876 22.1891 12.4858 24.1521 13.247 26.1201L11.9907 30.6165L16.6354 31.896C17.9126 33.4362 19.3512 34.6905 20.8161 35.5362L20.8201 35.5384C25.6445 38.3238 29.585 36.0782 29.6037 30.5341C29.6113 27.8461 28.7091 24.7926 27.061 21.937ZM20.8249 33.8394L20.822 33.8377C19.5163 33.084 18.236 31.9412 17.121 30.5337L16.8563 30.1997L14.0999 29.4402L14.8431 26.7787L14.6711 26.3618C13.9472 24.6111 13.5659 22.849 13.5714 21.27C13.5864 16.6607 16.8613 14.7945 20.8754 17.1121C22.8184 18.235 24.6432 20.1607 26.0125 22.5345C27.3818 24.9082 28.1326 27.446 28.1252 29.6792C28.1099 34.2886 24.8351 36.1548 20.8249 33.8394Z\" fill=\"white\"/><path d=\"M24.8335 29.8822C24.6152 29.6298 23.5416 28.4006 23.3416 28.2013C23.2543 28.1145 23.1776 28.0416 23.1065 28.0005C23.0141 27.9472 22.9316 27.948 22.8487 28.0432C22.7022 28.2102 22.2809 28.5339 22.1532 28.629C22.0802 28.6827 22.007 28.6885 21.9171 28.6364C21.8495 28.5974 21.7725 28.5259 21.679 28.4178C21.4607 28.1654 20.7562 27.4926 19.9231 26.154C19.2751 25.1124 18.8383 24.036 18.7118 23.7103C18.5843 23.3851 18.6992 23.3151 18.8084 23.2528C18.9079 23.1973 19.0279 23.0854 19.1381 23.0015C19.2483 22.9186 19.2845 22.8344 19.3579 22.7091C19.4313 22.5826 19.3957 22.4156 19.3407 22.2575C19.2866 22.0999 18.8529 20.6107 18.6717 20.0018C18.5235 19.5055 18.3732 19.3989 18.2504 19.3279C18.2439 19.3242 18.2374 19.3205 18.2309 19.3168C18.2134 19.3066 18.1969 19.2972 18.1813 19.287C18.0531 19.2053 17.9074 19.1199 17.7617 19.0358C17.6159 18.9516 17.3787 18.8773 17.177 19.0123C16.9762 19.1491 16.409 19.431 16.4055 20.6679C16.4021 21.9047 17.1826 23.5529 17.2919 23.7837C17.4003 24.0151 18.827 27.3815 21.0185 29.737C21.5395 30.2982 21.9461 30.6874 22.2634 30.9868C22.5647 31.2707 22.8505 31.4735 23.1106 31.6238C23.303 31.7349 23.4814 31.8172 23.6416 31.8821C24.0614 32.0518 24.9373 32.0208 25.1207 31.5386C25.3049 31.0568 25.3064 30.5533 25.2523 30.4181C25.1982 30.2816 25.0517 30.1333 24.8335 29.8822Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__menu-center\">\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\tПоиск туров\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t🔥 Горящие туры\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\tТурагенствам\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__menu-right\">\n\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__phone\">\n\t\t\t\t\t\t<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.6579 9.42675L8.94794 6.96275C8.68194 6.72075 8.27128 6.73341 8.02061 6.99141L6.42528 8.63208C6.04128 8.55875 5.26928 8.31808 4.47461 7.52541C3.67994 6.73008 3.43928 5.95608 3.36794 5.57475L5.00728 3.97875C5.26594 3.72808 5.27794 3.31808 5.03594 3.05141L2.57261 0.342081C2.33061 0.0747474 1.91928 0.0494141 1.64528 0.284081L0.198611 1.52475C0.0832773 1.64075 0.0146105 1.79408 0.00527717 1.95741C-0.00472283 2.12408 -0.195389 6.07208 2.86594 9.13475C5.53661 11.8047 8.88194 12.0001 9.80328 12.0001C9.93794 12.0001 10.0206 11.9961 10.0426 11.9947C10.2059 11.9854 10.3593 11.9167 10.4746 11.8007L11.7146 10.3534C11.9506 10.0794 11.9246 9.66875 11.6579 9.42675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t8 800 100 30 24\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<button class=\"header__sign-in\">\n\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6666 8.00008L7.33329 5.33341L7.33329 7.33341L2.66663 7.33341L2.66663 8.66675L7.33329 8.66675L7.33329 10.6667L10.6666 8.00008Z\" fill=\"white\"/><path d=\"M12 2.66675L12 13.3334L7.33337 13.3334L7.33337 14.6667L12 14.6667C12.7354 14.6667 13.3334 14.0687 13.3334 13.3334L13.3334 2.66675C13.3334 1.93141 12.7354 1.33341 12 1.33341L7.33337 1.33341L7.33337 2.66675L12 2.66675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t<span>Вход</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a href=\"#\" class=\"header__region\">\n\t\t\t\t\t\tМосква\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</header>\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\n"},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"index","match":["index"]}],"output":[{"type":"raw","value":"\t<header class=\"header\" style=\"background-image: url('../img/header-bg-desk.jpg');\">\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\t<header class=\"header\" style=\"background-image: url('../img/header-bg-inner.jpg');\">\n"}]}},{"type":"raw","value":"\t\t<div class=\"header__main\">\n\t\t\t"},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"index","match":["index"]}],"output":[{"type":"raw","value":"\t\t\t\t<div class=\"header__menu\">\n\t\t\t\t\t<div class=\"header__menu-left\">\n\t\t\t\t\t\t<button class=\"header__burger\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__logo\">\n\t\t\t\t\t\t\t<svg width=\"175\" height=\"27\" viewBox=\"0 0 175 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.2928 13.276L32.951 13.276L32.951 15.0347C32.951 15.0347 33.8221 15.6362 34.3724 16.5619C34.9226 17.4875 35.2434 19.5701 35.2434 19.5701C35.2434 19.5701 36.0458 18.9915 37.1006 18.737C38.1554 18.4825 39.5077 18.5983 39.5077 18.5983C39.5077 18.5983 40.1957 17.7188 41.5023 17.3488C42.8092 16.9786 43.9554 17.1869 43.9554 17.1869C43.9554 17.1869 44.6891 16.2148 46.1791 15.8678C47.6695 15.5204 48.655 15.7752 48.655 15.7752C48.655 15.7752 49.6868 14.8496 50.1453 14.5025C50.6038 14.1555 52.0712 13.415 52.0712 13.415C52.0712 13.415 50.902 12.9751 50.2143 12.628C49.5266 12.281 48.4948 11.2628 48.4948 11.2628C48.4948 11.2628 47.3486 11.6101 45.9957 11.147C44.6431 10.6842 43.8637 9.66597 43.8637 9.66597C43.8637 9.66597 42.9006 10.2443 41.3879 9.8511C39.8746 9.45793 39.5307 8.4165 39.5307 8.4165C39.5307 8.4165 38.5222 8.64776 37.1236 8.27751C35.725 7.90755 35.0603 7.14352 35.0603 7.14352C35.0603 7.14352 34.9456 8.85611 34.5788 9.59632C34.2119 10.3368 33.1114 11.6095 33.1114 11.6095C33.1114 11.6095 34.6245 11.6789 35.4271 11.7714C36.2295 11.864 36.7338 12.0491 37.2383 12.3268C37.7429 12.6048 38.2928 13.276 38.2928 13.276ZM29.5124 13.3918L29.5124 14.9883C29.5124 14.9883 28.8017 15.3121 28.5496 15.7288C28.2975 16.1452 28.1828 17.2327 28.1828 17.2327L25.8214 17.2327L25.8214 15.0344L0.24656 15.0344L0.24656 13.3915L29.5124 13.3915L29.5124 13.3918ZM32.8369 15.0347L32.8369 11.6098L32.3327 11.6098L32.3327 15.0347L32.8369 15.0347ZM31.9658 15.0347L31.9658 11.6098L31.4616 11.6098L31.4616 15.0347L31.9658 15.0347ZM31.0487 15.0347L31.0487 11.6098L30.5445 11.6098L30.5445 15.0347L31.0487 15.0347Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.0385 4.53869C20.0165 4.60591 21.6935 4.94231 21.6935 4.94231C21.6935 4.94231 20.4177 5.60935 19.7109 6.16416L20.1333 6.33323C20.3623 6.42411 20.5786 6.51239 20.7841 6.5975C21.123 6.40766 21.5197 6.37275 21.5197 6.37275C21.5197 6.37275 21.3306 6.54471 21.1826 6.76513C21.9263 7.0822 22.515 7.35975 23.0136 7.61682C23.5367 7.341 24.4689 7.25618 24.4689 7.25618C24.4689 7.25618 23.9961 7.50949 23.505 7.87936C24.5432 8.4535 25.2149 8.95522 26.3526 9.63005C26.6369 9.79883 26.9225 9.96761 27.2077 10.1332C27.8899 9.90356 28.663 9.86433 28.663 9.86433C28.663 9.86433 28.0901 10.1032 27.658 10.3923C29.2269 11.2847 30.7519 12.0368 31.9199 12.1421C33.3311 12.2694 34.4082 12.1961 34.855 12.0737L34.855 14.8564L35.3673 14.8564L35.3673 11.5371C35.3673 11.5371 35.1111 11.2904 35.018 11.0885C34.9248 10.8868 34.3426 9.89981 34.3426 9.89981L33.9231 10.124C33.9231 10.124 33.9231 10.3259 34.0166 10.5726C34.1098 10.8193 34.366 11.201 34.366 11.201C34.366 11.201 33.9468 10.999 33.4575 10.5279C32.8694 9.96155 32.6689 9.24316 31.6056 8.06113L31.4812 8.4134C31.4812 8.4134 31.3949 8.11912 31.332 7.76742C31.1957 7.62576 31.0474 7.47776 30.8847 7.32311C30.8643 7.68433 30.891 8.09806 30.891 8.09806C30.891 8.09806 30.6336 7.65 30.6213 7.07874C30.3915 6.86981 30.1566 6.66625 29.9166 6.46825C28.3319 5.1561 26.8841 4.20084 25.0624 3.59871C25.0783 3.86486 25.0989 4.13071 25.1244 4.39616C25.1244 4.39616 24.7095 3.805 24.4578 3.41638C23.6749 3.20057 22.8198 3.04362 21.8565 2.94668C21.4751 2.9083 21.1074 2.87917 20.7515 2.85839C20.8648 3.07802 20.9848 3.2944 21.1113 3.50726C21.3672 3.93368 21.8795 4.51676 21.8795 4.51676C21.8795 4.51676 20.8776 4.3148 19.5269 4.22507C18.1756 4.13506 16.522 4.42674 16.522 4.42674C16.522 4.42674 18.06 4.47146 19.0385 4.53869Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3997 12.9833L33.0429 12.9833L33.0429 14.7252L32.9285 14.7252L32.9285 11.333L33.2041 11.333C33.2041 11.333 34.7214 11.4017 35.5263 11.4934C36.3309 11.5851 36.8366 11.7684 37.3425 12.0435C37.8482 12.3185 38.3997 12.9833 38.3997 12.9833ZM29.5946 14.7252L29.5946 13.0979L0.246518 13.0979L0.246518 11.333L24.8245 11.333C25.5597 11.6664 26.2442 11.8967 26.8359 11.9518C28.2287 12.0818 29.2918 12.0069 29.7327 11.8819L29.7327 14.7252L29.5946 14.7252ZM32.4228 11.333L32.4228 14.7252L32.0549 14.7252L32.0549 11.333L32.4228 11.333ZM31.5493 11.333L31.5493 14.7252L31.1353 14.7252L31.1353 11.333L31.5493 11.333ZM30.6296 11.333L30.6296 14.7252L30.2384 14.7252L30.2384 11.333L30.6296 11.333ZM10.6739 4.27387C11.6125 4.50764 13.0212 5.11079 14.786 5.84306C15.4836 5.27588 16.7427 4.59461 16.7427 4.59461C16.7427 4.59461 15.0874 4.25088 14.1224 4.18219C13.1567 4.1138 11.6397 4.06752 11.6397 4.06752C11.6397 4.06752 13.272 3.76948 14.6053 3.86145C15.9384 3.95313 16.9273 4.15949 16.9273 4.15949C16.9273 4.15949 16.4213 3.56371 16.1691 3.12801C16.0431 2.91222 15.9133 2.66223 15.8139 2.46501C12.8879 2.28961 10.8152 2.7604 8.92651 4.0908C9.43218 4.04481 9.66195 4.02182 10.6739 4.27387ZM18.5309 7.59591C19.0156 7.21798 19.4822 6.95915 19.4822 6.95915C19.4822 6.95915 18.5622 7.04582 18.0459 7.32764C18.2089 7.41476 18.3705 7.50419 18.5309 7.59591ZM26.4027 8.14098L26.5254 7.78104C26.4412 7.68435 26.3516 7.58411 26.2555 7.48064C26.2942 7.70293 26.3433 7.92328 26.4027 8.14098ZM25.554 6.77726C25.5662 7.36096 25.8202 7.81877 25.8202 7.81877C25.8202 7.81877 25.7936 7.39603 25.814 7.02695C25.7315 6.94559 25.6448 6.86246 25.554 6.77726ZM20.1289 4.03597C20.1289 4.03597 20.0858 3.5755 20.0677 3.22116C19.8737 3.15454 19.675 3.09263 19.471 3.03485C19.7197 3.43194 20.1289 4.03597 20.1289 4.03597ZM22.6298 10.1639C23.0559 9.86848 23.6216 9.62439 23.6216 9.62439C23.6216 9.62439 22.8586 9.66448 22.1853 9.89913C22.3335 9.98816 22.4819 10.0766 22.6298 10.1639ZM15.8453 6.28584C15.9816 6.34421 16.112 6.4014 16.2386 6.45712C16.3846 6.2316 16.5712 6.0562 16.5712 6.0562C16.5712 6.0562 16.1797 6.09187 15.8453 6.28584ZM49.2668 12.7572C49.2858 12.7287 49.2928 12.6939 49.2862 12.6604C49.2795 12.6268 49.2598 12.5973 49.2313 12.5782C49.2289 12.5767 48.9726 12.4028 48.7611 12.0868C48.5441 11.7622 48.4098 11.3651 48.4086 11.3613C48.3978 11.3288 48.3744 11.302 48.3437 11.2867C48.313 11.2713 48.2774 11.2688 48.2448 11.2797C48.2122 11.2905 48.1853 11.3138 48.1699 11.3444C48.1546 11.375 48.152 11.4105 48.1629 11.443C48.1688 11.4607 48.3093 11.876 48.5458 12.2301C48.7871 12.5912 49.0755 12.7849 49.0876 12.7931C49.1162 12.8118 49.151 12.8185 49.1846 12.8118C49.2181 12.8051 49.2477 12.7854 49.2668 12.7572ZM47.8772 12.3786C47.8994 12.3533 47.9106 12.3202 47.9084 12.2867C47.9063 12.2531 47.8909 12.2218 47.8657 12.1994C47.8409 12.1773 47.6061 11.9845 46.9801 11.9603C46.367 11.9368 45.9868 12.0529 45.9711 12.0579C45.9383 12.0681 45.911 12.0908 45.8951 12.1211C45.8791 12.1513 45.8759 12.1867 45.8861 12.2193C45.8963 12.252 45.9191 12.2792 45.9494 12.2951C45.9798 12.311 46.0152 12.3142 46.048 12.3041C46.0515 12.3032 46.4055 12.1965 46.9703 12.218C47.5011 12.2383 47.6939 12.3919 47.6957 12.3934C47.7219 12.4151 47.7555 12.4257 47.7895 12.423C47.8234 12.4202 47.8549 12.4043 47.8772 12.3786ZM45.0845 12.6667C45.0972 12.6554 45.1075 12.6417 45.1149 12.6264C45.1222 12.6111 45.1264 12.5945 45.1274 12.5776C45.1283 12.5607 45.1258 12.5437 45.1201 12.5278C45.1145 12.5118 45.1057 12.4971 45.0943 12.4845C45.0905 12.4798 44.6853 12.0293 44.3967 11.5426C44.106 11.0521 43.7645 10.2376 43.7612 10.2293C43.748 10.1977 43.7228 10.1727 43.691 10.1596C43.6593 10.1466 43.6236 10.1467 43.5919 10.1599C43.5603 10.1731 43.5351 10.1982 43.5221 10.2299C43.509 10.2615 43.5091 10.2971 43.5223 10.3286C43.5365 10.3626 43.8739 11.1676 44.1741 11.6738C44.476 12.1835 44.8846 12.6381 44.9018 12.6569C44.9248 12.6824 44.9569 12.6977 44.9912 12.6995C45.0254 12.7013 45.059 12.6895 45.0845 12.6667ZM43.25 11.8088C43.2789 11.7909 43.2995 11.7623 43.3075 11.7293C43.3154 11.6963 43.3099 11.6615 43.2922 11.6325C43.2807 11.6142 43.003 11.175 42.0704 10.8891C41.1421 10.6043 40.5625 10.8136 40.5383 10.8227C40.4718 10.8475 40.438 10.9215 40.4629 10.9881C40.4877 11.0547 40.5619 11.0886 40.6288 11.0645C40.6341 11.0624 41.1572 10.8787 41.9944 11.1355C42.8224 11.3896 43.0699 11.7643 43.0722 11.7681C43.0906 11.7968 43.1195 11.8171 43.1528 11.8247C43.186 11.8323 43.2209 11.8266 43.25 11.8088ZM39.3957 11.9244C39.4067 11.892 39.4044 11.8566 39.3892 11.8259C39.3741 11.7953 39.3474 11.7718 39.3149 11.7608C39.3099 11.759 38.7992 11.5806 38.2143 11.0114C37.2899 10.1117 36.9892 8.66336 36.9862 8.64862C36.9795 8.61508 36.9596 8.58558 36.9311 8.56662C36.9025 8.54766 36.8676 8.54078 36.8339 8.5475C36.8003 8.55423 36.7707 8.574 36.7517 8.60247C36.7326 8.63094 36.7257 8.66578 36.7325 8.69932C36.7449 8.76182 37.0504 10.2393 38.0333 11.1959C38.6638 11.8094 39.2091 11.9975 39.2318 12.0051C39.2479 12.0106 39.2649 12.0128 39.2819 12.0117C39.2988 12.0106 39.3154 12.0062 39.3306 11.9987C39.3458 11.9912 39.3594 11.9808 39.3706 11.968C39.3817 11.9552 39.3903 11.9404 39.3957 11.9244ZM38.3997 12.9833C38.3997 12.9833 38.8137 13.2123 39.5953 13.2123C40.3771 13.2123 41.2279 12.8471 41.6185 12.7999C42.377 12.7082 43.3419 13.1531 44.0327 13.2123C45.3661 13.327 46.6997 13.052 46.6997 13.052C46.6997 13.052 47.0901 13.3412 47.4585 13.35C48.424 13.3727 49.2517 13.0979 49.8955 13.052C50.5392 13.006 51.6428 13.1436 51.6428 13.1436C51.6428 13.1436 50.9302 13.4417 50.1714 13.9688C49.4129 14.4959 48.6999 15.1376 48.6999 15.1376C48.6999 15.1376 47.5502 14.9083 46.263 15.2523C44.9754 15.596 44.0099 16.4898 44.0099 16.4898C44.0099 16.4898 42.5385 16.3295 41.5499 16.6272C40.5614 16.9253 39.4578 17.9108 39.4578 17.9108C39.4578 17.9108 38.4 17.8191 37.5495 17.9794C36.6988 18.1398 35.5721 18.7129 35.5721 18.7129C35.5721 18.7129 35.3882 17.223 34.8364 16.2378C34.2846 15.2523 33.6639 14.6335 33.6639 14.6335C33.6639 14.6335 34.5147 14.7252 35.3193 14.6105C36.1239 14.4959 36.7218 14.4042 37.2506 14.0604C37.779 13.7167 38.3997 12.9833 38.3997 12.9833Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4083 16.0886C27.4101 16.0829 27.5888 15.5266 27.8222 15.2591C28.0544 14.9925 28.5373 14.7828 28.5421 14.7806C28.5719 14.7653 28.5951 14.7386 28.607 14.706C28.6188 14.6734 28.6184 14.6373 28.6058 14.605C28.5932 14.5726 28.5694 14.5466 28.5392 14.532C28.509 14.5175 28.4747 14.5155 28.4432 14.5266C28.4211 14.536 27.9017 14.7614 27.6295 15.0735C27.3581 15.3843 27.1684 15.9765 27.1603 16.0016C27.1493 16.0362 27.1519 16.0739 27.1674 16.1065C27.1829 16.1391 27.21 16.1638 27.2429 16.1754C27.2758 16.1869 27.3117 16.1842 27.3427 16.168C27.3738 16.1517 27.3974 16.1231 27.4083 16.0886ZM26.7808 14.6446C27.1881 14.6192 27.6767 14.4497 27.6973 14.4425C27.7136 14.4367 27.7286 14.4277 27.7416 14.4159C27.7546 14.4041 27.7652 14.3897 27.7729 14.3735C27.7805 14.3574 27.7851 14.3398 27.7863 14.3218C27.7875 14.3039 27.7854 14.2858 27.7799 14.2687C27.7745 14.2516 27.7659 14.2357 27.7546 14.2221C27.7434 14.2085 27.7297 14.1973 27.7143 14.1893C27.699 14.1812 27.6823 14.1764 27.6651 14.1751C27.648 14.1739 27.6308 14.1762 27.6145 14.1819C27.6097 14.1834 27.1379 14.3473 26.7656 14.3706C26.4028 14.3928 25.9166 14.2095 25.9118 14.2076C25.8792 14.1952 25.8433 14.1968 25.8119 14.2122C25.7805 14.2276 25.7562 14.2555 25.7443 14.2897C25.7325 14.3239 25.734 14.3617 25.7487 14.3947C25.7633 14.4277 25.7899 14.4532 25.8224 14.4657C25.8446 14.4739 26.3636 14.6704 26.7808 14.6446ZM22.6435 17.34C22.6477 17.329 23.0616 16.2264 23.6237 15.4707C24.1723 14.7326 24.9275 14.4443 24.9349 14.4415C24.9511 14.4355 24.966 14.4262 24.9788 14.4141C24.9915 14.402 25.0019 14.3874 25.0093 14.3712C25.0167 14.3549 25.021 14.3372 25.0219 14.3192C25.0228 14.3012 25.0203 14.2832 25.0146 14.2662C25.0088 14.2492 25 14.2335 24.9885 14.2201C24.977 14.2067 24.9631 14.1958 24.9476 14.188C24.9321 14.1802 24.9153 14.1758 24.8982 14.1748C24.881 14.1739 24.8639 14.1765 24.8477 14.1825C24.8139 14.1951 24.0148 14.498 23.4175 15.3015C22.8318 16.0892 22.417 17.1931 22.3997 17.2399C22.3934 17.2567 22.3904 17.2746 22.3907 17.2927C22.3911 17.3108 22.3948 17.3286 22.4017 17.3451C22.4086 17.3617 22.4185 17.3766 22.4309 17.3891C22.4433 17.4016 22.4579 17.4115 22.4739 17.418C22.4899 17.4246 22.507 17.4278 22.5242 17.4275C22.5414 17.4271 22.5584 17.4232 22.5741 17.4159C22.5898 17.4087 22.6041 17.3983 22.616 17.3852C22.6279 17.3722 22.6373 17.3569 22.6435 17.34ZM20.4952 16.0047C21.0657 15.8051 21.5779 15.4161 21.5994 15.3997C21.6274 15.3782 21.6461 15.346 21.6515 15.3101C21.657 15.2742 21.6486 15.2374 21.6284 15.2079C21.608 15.1785 21.5773 15.1588 21.5431 15.1531C21.5089 15.1474 21.4739 15.1562 21.4458 15.1774C21.4407 15.1812 20.9435 15.558 20.4125 15.7441C19.8847 15.9291 19.2336 15.908 19.227 15.908C19.2099 15.9074 19.1928 15.9104 19.1767 15.9167C19.1606 15.923 19.1459 15.9326 19.1334 15.9449C19.1208 15.9572 19.1107 15.972 19.1036 15.9884C19.0965 16.0048 19.0925 16.0225 19.0919 16.0405C19.0914 16.0585 19.0941 16.0765 19.1002 16.0934C19.1062 16.1103 19.1153 16.1257 19.127 16.1389C19.1387 16.1521 19.1528 16.1627 19.1684 16.1702C19.184 16.1777 19.2009 16.1818 19.218 16.1824C19.2464 16.1834 19.9218 16.2054 20.4952 16.0047ZM32.0817 14.8315C32.0823 14.8283 32.1489 14.5297 32.2544 14.3301C32.339 14.1702 32.6444 13.9006 32.755 13.8104C32.7793 13.7871 32.7943 13.7549 32.7971 13.7204C32.7999 13.6859 32.7902 13.6516 32.7699 13.6242C32.7497 13.5969 32.7204 13.5785 32.6879 13.5729C32.6554 13.5672 32.6221 13.5745 32.5945 13.5935C32.5494 13.6302 32.1516 13.9596 32.0261 14.1966C31.9024 14.4305 31.8301 14.7558 31.8271 14.7693C31.8193 14.8048 31.8251 14.8421 31.8435 14.873C31.8618 14.9039 31.8911 14.9259 31.9248 14.9341C31.9586 14.9424 31.9941 14.9362 32.0235 14.9169C32.0529 14.8977 32.0739 14.8669 32.0817 14.8315Z\" fill=\"white\"/><path d=\"M66.04 17.38L66.66 19H69.18L63.58 4.6L58 19H60.52L61.12 17.38H66.04ZM61.88 15.36L63.58 10.5L65.28 15.36H61.88ZM77.7319 12.02C78.9319 11.72 80.0719 10.78 80.0719 8.94C80.0719 4.9 75.4119 5 75.4119 5H70.7519V19H75.4119C76.3519 19 80.2719 18.82 80.2719 14.98C80.2719 14.98 80.3719 12.56 77.7319 12.02ZM73.0719 10.84V7.32H75.4119C75.4119 7.32 77.7319 7.22 77.7319 9.1C77.7319 10.84 75.4119 10.84 75.4119 10.84H73.0719ZM75.4119 16.68H73.0719V13.18H75.4119C75.4119 13.18 77.9319 13.04 77.9319 14.92C77.9319 16.44 76.3919 16.68 75.4119 16.68ZM87.5627 15.2C90.4227 15.2 92.7627 12.86 92.7627 10C92.7627 7.14 90.4227 4.8 87.5627 4.8C84.7027 4.8 82.3627 7.14 82.3627 10C82.3627 12.86 84.7027 15.2 87.5627 15.2ZM87.5627 7.12C89.1627 7.12 90.4427 8.4 90.4427 10C90.4427 11.6 89.1627 12.88 87.5627 12.88C85.9627 12.88 84.6827 11.6 84.6827 10C84.6827 8.4 85.9627 7.12 87.5627 7.12ZM92.1227 19V16.68H82.8827V19H92.1227ZM102.897 19H105.637L101.837 12.92C103.197 12.54 104.917 11.56 104.917 9.08C104.917 5 100.237 5 100.237 5H95.5766V7.34L97.7966 10.84H95.5766V19H97.9166V13.16H99.2566L102.897 19ZM100.537 10.82L98.3566 7.34H100.237C100.237 7.34 102.577 7.34 102.577 9.08C102.577 10.46 101.157 10.76 100.537 10.82ZM110.863 7.14H112.423V5H106.963V7.14H108.523V16.86H106.883V19H112.503V16.86H110.863V7.14ZM127.215 11.04H122.535V13.26H124.875V15.28C124.015 16.26 122.775 16.86 121.375 16.86C118.795 16.86 116.715 15.42 116.715 12C116.715 8.94 118.795 7.14 121.375 7.14C122.655 7.14 123.835 7.66 124.675 8.5L126.315 6.86C125.055 5.58 123.315 4.8 121.375 4.8C117.515 4.8 114.375 7.84 114.375 12C114.375 16.58 117.315 19.2 121.075 19.2C122.735 19.2 123.915 18.8 125.055 17.74L125.175 19.06H127.215V11.04ZM132.604 7.34H139.604V5H130.264V19H139.604V16.66H132.604V13.16H138.424V10.84H132.604V7.34ZM153.681 19V5H151.361V14.96L144.381 5H142.021V19H144.361V9.04L151.321 19H153.681Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"header__nav\">\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<ul class=\"header__nav-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Авиабилеты</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Поиск попутчиков</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Энциклопедия туриста</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Кредит</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Виза</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__manager\">\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-photo\">\n\t\t\t\t\t\t\t\t\t<img src=\"img/manager.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__manager-status\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-name\">\n\t\t\t\t\t\t\t\t\t\tАнна Захаренко\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-position\">\n\t\t\t\t\t\t\t\t\t\tПерсональный менеджер\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"header__manager-button\">\n\t\t\t\t\t\t\t\t\t\tПомощь с выбором тура\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__contacts\">\n\t\t\t\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__contacts-phone\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__contacts-phone-number\">\n\t\t\t\t\t\t\t\t\t\t\t8-800-100-30-24\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"header__contacts-mail\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"header__contacts-social\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297437L8.4761 3.47847C8.47863 3.47697 8.48144 3.47584 8.48407 3.47425C7.68832 3.93212 7.19444 4.91134 7.19041 6.30559L7.12722 28.5902C7.11925 31.3872 9.08641 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3114 48.171 34.1174 47.6606C34.095 47.6748 34.0731 47.69 34.0501 47.7035L39.5238 44.5226C40.315 44.0627 40.8055 43.0851 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#155C92\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#1A6FB0\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#1D81CD\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.3361 44.8764L35.3992 22.5919Z\" fill=\"#1D81CD\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#3D99E2\"/><path d=\"M31.0059 14.9825L36.4795 11.8015C38.9138 13.2068 40.8807 16.6134 40.8729 19.411L35.3992 22.592C35.4071 19.7944 33.44 16.3879 31.0059 14.9825Z\" fill=\"#5AAAE7\"/><path d=\"M18.5229 27.7352L18.5367 22.8668L22.1951 24.9789L22.2054 21.3883C22.2172 17.2213 24.4386 16.232 27.6733 18.0996C29.2225 18.9939 30.5536 19.8949 30.942 20.1785L30.9296 24.5327L28.6858 23.2387C26.9271 22.2233 26.5838 22.9873 26.5797 24.3966L26.5709 27.5054L30.766 29.9274L30.2062 34.4807L26.5569 32.3738L26.5217 44.8656L22.1459 42.3392L22.1814 29.8475L18.5229 27.7352Z\" fill=\"#3D5A98\"/><path d=\"M22.2054 21.4862L22.1951 25.0768L18.5367 22.9647L18.5229 27.8331L22.1814 29.9453L22.1462 42.3344L26.522 44.8608L26.5571 32.4717L30.2063 34.5785L30.766 30.0253L26.5709 27.6032L26.5797 24.4944C26.5838 23.0851 26.927 22.3211 28.6858 23.3365L30.9296 24.6305L30.942 20.2763C30.5537 19.9926 29.2225 19.0918 27.6733 18.1974C24.4386 16.3299 22.2172 17.3193 22.2054 21.4862Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604657C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297438L8.4761 3.47847C8.47863 3.47697 8.48144 3.47585 8.48407 3.47426C7.68832 3.93213 7.19444 4.91135 7.19041 6.3056L7.12722 28.5902C7.11925 31.3872 9.08641 34.7944 11.5205 36.1997L30.9139 47.3965C32.174 48.1239 33.3114 48.1711 34.1174 47.6607C34.095 47.6748 34.0731 47.6901 34.0501 47.7036L39.5238 44.5227C40.315 44.0628 40.8055 43.0852 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#6F75E3\"/><path d=\"M22.1161 19.7619L18.8617 17.883C18.4276 17.6324 18.2094 17.7004 17.9771 17.8785C17.8427 17.9815 17.802 18.0754 18.0766 18.2948C18.6159 18.7236 18.9193 19.3016 18.9978 19.9689C19.1251 21.0398 19.113 22.031 19.0356 22.9871C19.0124 23.2642 18.9675 23.5313 18.8669 23.7447C18.7684 23.9543 18.6327 24.0104 18.4637 23.9129C18.3614 23.8538 18.2469 23.7383 18.1211 23.5664C17.8201 23.1545 17.6084 22.6952 17.4017 22.2378C16.6248 20.5205 16.0066 18.7948 15.5022 17.0649C15.3558 16.565 15.1041 16.1682 14.7221 15.9411C14.2515 15.6603 13.7816 15.3839 13.3118 15.1126C12.842 14.8414 12.3723 14.5752 11.9025 14.3147C11.3368 13.9988 11.1674 14.2183 11.3957 14.9404C12.4119 18.1461 13.544 21.3483 15.0239 24.5222C15.7844 26.1517 16.6595 27.7094 17.7887 29.1064C18.9239 30.5108 20.1376 31.496 21.4128 32.2323C21.5764 32.3267 21.7412 32.4172 21.9067 32.5038C22.5882 32.8615 22.7935 32.7744 22.8269 32.0135C22.8508 31.492 22.9044 30.9918 23.1344 30.6441C23.274 30.4335 23.4571 30.3935 23.6692 30.516C23.8009 30.592 23.9438 30.7307 24.0943 30.9302C24.2906 31.1909 24.4543 31.4711 24.6114 31.7592C24.9934 32.4626 25.3609 33.1726 25.7581 33.8699C26.2117 34.6654 26.7442 35.3058 27.3991 35.6839C27.4614 35.7198 27.5249 35.7536 27.5894 35.7846L30.4697 37.4492C30.9328 37.6808 31.1762 37.167 30.911 36.4194C30.7241 35.8928 30.4792 35.3791 30.2206 34.8694C29.6348 33.7202 28.9445 32.6282 28.2914 31.5143C27.7016 30.5102 27.665 30.1037 28.1431 29.6155C28.6634 29.0792 29.2249 28.6 29.7495 28.0703C30.24 27.5743 30.742 27.0889 31.0014 26.3079C31.1666 25.8097 31.0227 25.4652 30.4949 25.0572C30.4052 24.9872 30.3112 24.9312 30.2178 24.8774L27.0857 23.0664C27.077 23.0613 27.0684 23.0561 27.0599 23.0511C26.6898 22.8376 26.4825 22.9118 26.3485 23.2201C26.1632 23.6451 25.9715 24.0665 25.7502 24.4506C25.2499 25.3265 24.6904 26.1284 23.9081 26.6289C23.7629 26.7213 23.6049 26.8453 23.388 26.72C23.3467 26.6962 23.3033 26.6634 23.2575 26.6197C22.8983 26.2609 22.7947 25.5192 22.8012 25.2931L22.8101 21.1371C22.7415 20.5043 22.6287 20.1744 22.1161 19.7619Z\" fill=\"white\"/><path d=\"M39.5238 44.5223L34.0501 47.7033C34.8414 47.2434 35.332 46.2658 35.3359 44.8763L40.8096 41.6953C40.8056 43.0848 40.315 44.0625 39.5238 44.5223Z\" fill=\"#7C84E7\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8612 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#989FED\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.336 44.8764L35.3992 22.5919Z\" fill=\"#989FED\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#A8ADEF\"/><path d=\"M31.0059 14.9825L36.4796 11.8015C38.9138 13.2068 40.8808 16.6134 40.8729 19.411L35.3992 22.592C35.4072 19.7944 33.4401 16.3879 31.0059 14.9825Z\" fill=\"#C5C8F5\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4795 11.8015L17.0862 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.9499 0.297437L8.47604 3.47847C8.47857 3.47697 8.48138 3.47584 8.484 3.47425C7.68825 3.93212 7.19438 4.91134 7.19035 6.30559L7.12716 28.5902C7.11919 31.3872 9.08635 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3113 48.171 34.1173 47.6606C34.0949 47.6748 34.0731 47.69 34.05 47.7035L39.5237 44.5226C40.3149 44.0627 40.8054 43.0851 40.8095 41.6956L40.8727 19.411C40.8808 16.6133 38.9137 13.2068 36.4795 11.8015Z\" fill=\"#7F33AD\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#943EC7\"/><path d=\"M8.47601 3.47837L13.9497 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3874 3.07834 9.27758 3.01253 8.47601 3.47837Z\" fill=\"#A258CB\"/><path d=\"M35.3991 22.5919L40.8728 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#A258CB\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#B77FDA\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#D5B4E9\"/><path d=\"M20.692 34.1685C18.2847 32.7787 17.9996 32.6035 17.049 32.0044C16.1703 31.4514 15.6931 31.0066 15.3757 30.681C14.9554 30.2505 14.656 29.8527 14.3415 29.3079C14.027 28.7632 13.8325 28.3048 13.6701 27.7268C13.5475 27.2902 13.4025 26.6573 13.3651 25.6236C13.3252 24.5063 13.3168 24.1733 13.3246 21.4073C13.3325 18.6412 13.3425 18.3182 13.3887 17.2507C13.4319 16.264 13.58 15.8004 13.7046 15.5065C13.8698 15.1177 14.0662 14.8851 14.3828 14.7046C14.6994 14.5241 15 14.4728 15.4213 14.5282C15.7396 14.5697 16.2177 14.6764 17.0967 15.1382C18.0476 15.6369 18.3326 15.7909 20.74 17.1807C23.1478 18.5708 23.4328 18.746 24.3835 19.3451C25.2622 19.8981 25.7395 20.3429 26.0568 20.6685C26.4771 21.099 26.7764 21.4968 27.091 22.0416C27.4055 22.5863 27.5999 23.0447 27.7624 23.6228C27.8844 24.0591 28.03 24.6922 28.0674 25.7253C28.1073 26.8426 28.1157 27.1762 28.1079 29.9423C28.1 32.7084 28.09 33.0308 28.0437 34.0983C28.0006 35.0857 27.8519 35.5489 27.7279 35.8431C27.5627 36.2319 27.3663 36.4645 27.0497 36.645C26.7331 36.8255 26.4325 36.8768 26.0111 36.8214C25.6929 36.7799 25.2147 36.6732 24.3357 36.2113C23.385 35.7127 23.0998 35.5586 20.692 34.1685ZM20.7455 15.3144C18.2969 13.9007 17.9899 13.7354 17.0281 13.2304C16.0681 12.7264 15.4122 12.5237 14.8379 12.4481C14.2446 12.3709 13.7406 12.4351 13.2378 12.7217C12.735 13.0082 12.4253 13.4083 12.1928 13.9562C11.9679 14.4866 11.8135 15.1516 11.7667 16.2294C11.7192 17.3089 11.7079 17.6557 11.6999 20.4692C11.692 23.2828 11.7013 23.6415 11.7424 24.772C11.783 25.9002 11.9331 26.7412 12.1543 27.5291C12.3829 28.3432 12.6894 29.0989 13.189 29.9643C13.6885 30.8297 14.1905 31.4746 14.7823 32.0816C15.3553 32.6684 16.0101 33.2218 16.9698 33.8269C17.9313 34.4322 18.2381 34.6214 20.6869 36.0351C23.1361 37.4491 23.4431 37.6145 24.4048 38.1194C25.3644 38.6225 26.0207 38.8261 26.5945 38.9013C27.1884 38.9789 27.6924 38.9146 28.1952 38.6281C28.698 38.3416 29.0078 37.9415 29.2403 37.3936C29.4652 36.8632 29.6196 36.1982 29.6664 35.1203C29.7132 34.0405 29.7252 33.6941 29.7331 30.8806C29.7411 28.0669 29.7312 27.7079 29.6907 26.5778C29.6501 25.4496 29.5 24.6087 29.2787 23.8207C29.0502 23.0066 28.7437 22.2509 28.2441 21.3855C27.7445 20.5202 27.2426 19.8752 26.6501 19.2678C26.0777 18.6813 25.4223 18.1269 24.4632 17.5229C23.5016 16.9176 23.1946 16.7285 20.7455 15.3144Z\" fill=\"white\"/><path d=\"M20.7063 29.1284C19.0468 28.1703 17.7056 25.8472 17.7111 23.9398C17.7164 22.0323 19.0664 21.263 20.7259 22.221C22.3859 23.1794 23.7271 25.5025 23.7217 27.41C23.7162 29.3175 22.3663 30.0868 20.7063 29.1284ZM20.7311 20.3546C18.1745 18.8784 16.0944 20.0631 16.0861 23.0016C16.0777 25.9401 18.1443 29.5188 20.7009 30.9949C23.2582 32.4714 25.3376 31.2864 25.346 28.3479C25.3544 25.4094 23.2884 21.8309 20.7311 20.3546Z\" fill=\"white\"/><path d=\"M25.5486 21.6797C24.9508 21.3346 24.4646 21.6116 24.4627 22.2985C24.4607 22.9848 24.9436 23.8213 25.5414 24.1664C26.1386 24.5112 26.6248 24.2342 26.6267 23.5479C26.6288 22.861 26.1458 22.0244 25.5486 21.6797Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8018L17.0863 0.604901C15.8613 -0.10235 14.7514 -0.168068 13.95 0.297682L8.4761 3.47871C8.47863 3.47721 8.48144 3.47609 8.48407 3.4745C7.68832 3.93237 7.19444 4.91159 7.19041 6.30584L7.12722 28.5904C7.11925 31.3874 9.08641 34.7946 11.5205 36.1999L30.9139 47.3967C32.174 48.1241 33.3114 48.1712 34.1174 47.6609C34.095 47.675 34.0731 47.6903 34.0501 47.7038L39.5238 44.5229C40.315 44.063 40.8055 43.0854 40.8095 41.6958L40.8727 19.4113C40.8809 16.6136 38.9137 13.2071 36.4796 11.8018Z\" fill=\"#40A559\"/><path d=\"M39.5236 44.5223L34.0499 47.7033C34.8412 47.2434 35.3319 46.2658 35.3357 44.8762L40.8094 41.6953C40.8055 43.0848 40.3148 44.0625 39.5236 44.5223Z\" fill=\"#4DBA69\"/><path d=\"M8.47595 3.47837L13.9497 0.297437C14.7511 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3873 3.07834 9.27752 3.01253 8.47595 3.47837Z\" fill=\"#65C27C\"/><path d=\"M35.3991 22.5919L40.8727 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#65C27C\"/><path d=\"M11.6124 3.78552L17.0861 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#7BCC92\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#94D6A8\"/><path d=\"M27.061 21.937C25.4139 19.0818 23.2184 16.7643 20.8771 15.4115C16.0507 12.6251 12.1103 14.8707 12.0926 20.4152C12.0876 22.1891 12.4858 24.1521 13.247 26.1201L11.9907 30.6165L16.6354 31.896C17.9126 33.4362 19.3512 34.6905 20.8161 35.5362L20.8201 35.5384C25.6445 38.3238 29.585 36.0782 29.6037 30.5341C29.6113 27.8461 28.7091 24.7926 27.061 21.937ZM20.8249 33.8394L20.822 33.8377C19.5163 33.084 18.236 31.9412 17.121 30.5337L16.8563 30.1997L14.0999 29.4402L14.8431 26.7787L14.6711 26.3618C13.9472 24.6111 13.5659 22.849 13.5714 21.27C13.5864 16.6607 16.8613 14.7945 20.8754 17.1121C22.8184 18.235 24.6432 20.1607 26.0125 22.5345C27.3818 24.9082 28.1326 27.446 28.1252 29.6792C28.1099 34.2886 24.8351 36.1548 20.8249 33.8394Z\" fill=\"white\"/><path d=\"M24.8335 29.8822C24.6152 29.6298 23.5416 28.4006 23.3416 28.2013C23.2543 28.1145 23.1776 28.0416 23.1065 28.0005C23.0141 27.9472 22.9316 27.948 22.8487 28.0432C22.7022 28.2102 22.2809 28.5339 22.1532 28.629C22.0802 28.6827 22.007 28.6885 21.9171 28.6364C21.8495 28.5974 21.7725 28.5259 21.679 28.4178C21.4607 28.1654 20.7562 27.4926 19.9231 26.154C19.2751 25.1124 18.8383 24.036 18.7118 23.7103C18.5843 23.3851 18.6992 23.3151 18.8084 23.2528C18.9079 23.1973 19.0279 23.0854 19.1381 23.0015C19.2483 22.9186 19.2845 22.8344 19.3579 22.7091C19.4313 22.5826 19.3957 22.4156 19.3407 22.2575C19.2866 22.0999 18.8529 20.6107 18.6717 20.0018C18.5235 19.5055 18.3732 19.3989 18.2504 19.3279C18.2439 19.3242 18.2374 19.3205 18.2309 19.3168C18.2134 19.3066 18.1969 19.2972 18.1813 19.287C18.0531 19.2053 17.9074 19.1199 17.7617 19.0358C17.6159 18.9516 17.3787 18.8773 17.177 19.0123C16.9762 19.1491 16.409 19.431 16.4055 20.6679C16.4021 21.9047 17.1826 23.5529 17.2919 23.7837C17.4003 24.0151 18.827 27.3815 21.0185 29.737C21.5395 30.2982 21.9461 30.6874 22.2634 30.9868C22.5647 31.2707 22.8505 31.4735 23.1106 31.6238C23.303 31.7349 23.4814 31.8172 23.6416 31.8821C24.0614 32.0518 24.9373 32.0208 25.1207 31.5386C25.3049 31.0568 25.3064 30.5533 25.2523 30.4181C25.1982 30.2816 25.0517 30.1333 24.8335 29.8822Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-center\">\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tПоиск туров\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\t🔥 Горящие туры\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТурагенствам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-right\">\n\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__phone\">\n\t\t\t\t\t\t\t<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.6579 9.42675L8.94794 6.96275C8.68194 6.72075 8.27128 6.73341 8.02061 6.99141L6.42528 8.63208C6.04128 8.55875 5.26928 8.31808 4.47461 7.52541C3.67994 6.73008 3.43928 5.95608 3.36794 5.57475L5.00728 3.97875C5.26594 3.72808 5.27794 3.31808 5.03594 3.05141L2.57261 0.342081C2.33061 0.0747474 1.91928 0.0494141 1.64528 0.284081L0.198611 1.52475C0.0832773 1.64075 0.0146105 1.79408 0.00527717 1.95741C-0.00472283 2.12408 -0.195389 6.07208 2.86594 9.13475C5.53661 11.8047 8.88194 12.0001 9.80328 12.0001C9.93794 12.0001 10.0206 11.9961 10.0426 11.9947C10.2059 11.9854 10.3593 11.9167 10.4746 11.8007L11.7146 10.3534C11.9506 10.0794 11.9246 9.66875 11.6579 9.42675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t8 800 100 30 24\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<button class=\"header__sign-in\">\n\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6666 8.00008L7.33329 5.33341L7.33329 7.33341L2.66663 7.33341L2.66663 8.66675L7.33329 8.66675L7.33329 10.6667L10.6666 8.00008Z\" fill=\"white\"/><path d=\"M12 2.66675L12 13.3334L7.33337 13.3334L7.33337 14.6667L12 14.6667C12.7354 14.6667 13.3334 14.0687 13.3334 13.3334L13.3334 2.66675C13.3334 1.93141 12.7354 1.33341 12 1.33341L7.33337 1.33341L7.33337 2.66675L12 2.66675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>Вход</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__region\">\n\t\t\t\t\t\t\tМосква\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1 class=\"header__title title\">\n\t\t\t\t\tПоиск туров онлайн <br>по всем туроператорам\n\t\t\t\t</h1>\n\t\t\t\t<div class=\"header__filter\">\n\t\t\t\t\t<form action=\"\" class=\"filter\">\n\t\t\t\t\t\t<div class=\"filter__item filter__item--country\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Куда вы хотите полететь?</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-country\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--country\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇻 Мальдивы\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇸 Испания\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇦🇿 Азербайджан\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇬 Египет\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇰 Северная Македония\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--from\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Отправление</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input\" value=\"Москва\">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--date\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Даты вылета</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input filter__item-input--date datepicker-here\"\n\t\t\t\t\t\t\t\t\tdata-range=\"true\"\n\t\t\t\t\t\t\t\t\tdata-multiple-dates-separator=\" - \"\n\t\t\t\t\t\t\t\t\tplaceholder = \"07.05.2021 - 14.05.2021\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span class=\"filter__item-icon\">\n\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-0.000976562 3.2V4.8V14.4C-0.000976562 15.2824 0.716623 16 1.59902 16H12.799C13.6814 16 14.399 15.2824 14.399 14.4V4.8V3.2C14.399 2.3176 13.6814 1.6 12.799 1.6H11.199V0H9.59902V1.6H4.79902V0H3.19902V1.6H1.59902C0.716623 1.6 -0.000976562 2.3176 -0.000976562 3.2ZM12.8006 14.4H1.59902V4.8H12.799L12.8006 14.4Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--nights\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Количество ночей</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-nights\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--nights\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 4 до 11\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 1 до 2\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 2 до 4\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 4 до 11\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 11 до 20\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 20 до 31\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 31\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--tourists\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Туристов</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-tourists\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--tourists\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\t2 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 турист\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t2 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t3 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t4 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t5 туристов\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tбольше\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--submit\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"filter__item-submit\" value=\"Полетели!\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\t\t\t\t<div class=\"header__menu header__menu--inner\">\n\t\t\t\t\t<div class=\"header__menu-left\">\n\t\t\t\t\t\t<button class=\"header__burger\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__logo\">\n\t\t\t\t\t\t\t<svg width=\"175\" height=\"27\" viewBox=\"0 0 175 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.2928 13.276L32.951 13.276L32.951 15.0347C32.951 15.0347 33.8221 15.6362 34.3724 16.5619C34.9226 17.4875 35.2434 19.5701 35.2434 19.5701C35.2434 19.5701 36.0458 18.9915 37.1006 18.737C38.1554 18.4825 39.5077 18.5983 39.5077 18.5983C39.5077 18.5983 40.1957 17.7188 41.5023 17.3488C42.8092 16.9786 43.9554 17.1869 43.9554 17.1869C43.9554 17.1869 44.6891 16.2148 46.1791 15.8678C47.6695 15.5204 48.655 15.7752 48.655 15.7752C48.655 15.7752 49.6868 14.8496 50.1453 14.5025C50.6038 14.1555 52.0712 13.415 52.0712 13.415C52.0712 13.415 50.902 12.9751 50.2143 12.628C49.5266 12.281 48.4948 11.2628 48.4948 11.2628C48.4948 11.2628 47.3486 11.6101 45.9957 11.147C44.6431 10.6842 43.8637 9.66597 43.8637 9.66597C43.8637 9.66597 42.9006 10.2443 41.3879 9.8511C39.8746 9.45793 39.5307 8.4165 39.5307 8.4165C39.5307 8.4165 38.5222 8.64776 37.1236 8.27751C35.725 7.90755 35.0603 7.14352 35.0603 7.14352C35.0603 7.14352 34.9456 8.85611 34.5788 9.59632C34.2119 10.3368 33.1114 11.6095 33.1114 11.6095C33.1114 11.6095 34.6245 11.6789 35.4271 11.7714C36.2295 11.864 36.7338 12.0491 37.2383 12.3268C37.7429 12.6048 38.2928 13.276 38.2928 13.276ZM29.5124 13.3918L29.5124 14.9883C29.5124 14.9883 28.8017 15.3121 28.5496 15.7288C28.2975 16.1452 28.1828 17.2327 28.1828 17.2327L25.8214 17.2327L25.8214 15.0344L0.24656 15.0344L0.24656 13.3915L29.5124 13.3915L29.5124 13.3918ZM32.8369 15.0347L32.8369 11.6098L32.3327 11.6098L32.3327 15.0347L32.8369 15.0347ZM31.9658 15.0347L31.9658 11.6098L31.4616 11.6098L31.4616 15.0347L31.9658 15.0347ZM31.0487 15.0347L31.0487 11.6098L30.5445 11.6098L30.5445 15.0347L31.0487 15.0347Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.0385 4.53869C20.0165 4.60591 21.6935 4.94231 21.6935 4.94231C21.6935 4.94231 20.4177 5.60935 19.7109 6.16416L20.1333 6.33323C20.3623 6.42411 20.5786 6.51239 20.7841 6.5975C21.123 6.40766 21.5197 6.37275 21.5197 6.37275C21.5197 6.37275 21.3306 6.54471 21.1826 6.76513C21.9263 7.0822 22.515 7.35975 23.0136 7.61682C23.5367 7.341 24.4689 7.25618 24.4689 7.25618C24.4689 7.25618 23.9961 7.50949 23.505 7.87936C24.5432 8.4535 25.2149 8.95522 26.3526 9.63005C26.6369 9.79883 26.9225 9.96761 27.2077 10.1332C27.8899 9.90356 28.663 9.86433 28.663 9.86433C28.663 9.86433 28.0901 10.1032 27.658 10.3923C29.2269 11.2847 30.7519 12.0368 31.9199 12.1421C33.3311 12.2694 34.4082 12.1961 34.855 12.0737L34.855 14.8564L35.3673 14.8564L35.3673 11.5371C35.3673 11.5371 35.1111 11.2904 35.018 11.0885C34.9248 10.8868 34.3426 9.89981 34.3426 9.89981L33.9231 10.124C33.9231 10.124 33.9231 10.3259 34.0166 10.5726C34.1098 10.8193 34.366 11.201 34.366 11.201C34.366 11.201 33.9468 10.999 33.4575 10.5279C32.8694 9.96155 32.6689 9.24316 31.6056 8.06113L31.4812 8.4134C31.4812 8.4134 31.3949 8.11912 31.332 7.76742C31.1957 7.62576 31.0474 7.47776 30.8847 7.32311C30.8643 7.68433 30.891 8.09806 30.891 8.09806C30.891 8.09806 30.6336 7.65 30.6213 7.07874C30.3915 6.86981 30.1566 6.66625 29.9166 6.46825C28.3319 5.1561 26.8841 4.20084 25.0624 3.59871C25.0783 3.86486 25.0989 4.13071 25.1244 4.39616C25.1244 4.39616 24.7095 3.805 24.4578 3.41638C23.6749 3.20057 22.8198 3.04362 21.8565 2.94668C21.4751 2.9083 21.1074 2.87917 20.7515 2.85839C20.8648 3.07802 20.9848 3.2944 21.1113 3.50726C21.3672 3.93368 21.8795 4.51676 21.8795 4.51676C21.8795 4.51676 20.8776 4.3148 19.5269 4.22507C18.1756 4.13506 16.522 4.42674 16.522 4.42674C16.522 4.42674 18.06 4.47146 19.0385 4.53869Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3997 12.9833L33.0429 12.9833L33.0429 14.7252L32.9285 14.7252L32.9285 11.333L33.2041 11.333C33.2041 11.333 34.7214 11.4017 35.5263 11.4934C36.3309 11.5851 36.8366 11.7684 37.3425 12.0435C37.8482 12.3185 38.3997 12.9833 38.3997 12.9833ZM29.5946 14.7252L29.5946 13.0979L0.246518 13.0979L0.246518 11.333L24.8245 11.333C25.5597 11.6664 26.2442 11.8967 26.8359 11.9518C28.2287 12.0818 29.2918 12.0069 29.7327 11.8819L29.7327 14.7252L29.5946 14.7252ZM32.4228 11.333L32.4228 14.7252L32.0549 14.7252L32.0549 11.333L32.4228 11.333ZM31.5493 11.333L31.5493 14.7252L31.1353 14.7252L31.1353 11.333L31.5493 11.333ZM30.6296 11.333L30.6296 14.7252L30.2384 14.7252L30.2384 11.333L30.6296 11.333ZM10.6739 4.27387C11.6125 4.50764 13.0212 5.11079 14.786 5.84306C15.4836 5.27588 16.7427 4.59461 16.7427 4.59461C16.7427 4.59461 15.0874 4.25088 14.1224 4.18219C13.1567 4.1138 11.6397 4.06752 11.6397 4.06752C11.6397 4.06752 13.272 3.76948 14.6053 3.86145C15.9384 3.95313 16.9273 4.15949 16.9273 4.15949C16.9273 4.15949 16.4213 3.56371 16.1691 3.12801C16.0431 2.91222 15.9133 2.66223 15.8139 2.46501C12.8879 2.28961 10.8152 2.7604 8.92651 4.0908C9.43218 4.04481 9.66195 4.02182 10.6739 4.27387ZM18.5309 7.59591C19.0156 7.21798 19.4822 6.95915 19.4822 6.95915C19.4822 6.95915 18.5622 7.04582 18.0459 7.32764C18.2089 7.41476 18.3705 7.50419 18.5309 7.59591ZM26.4027 8.14098L26.5254 7.78104C26.4412 7.68435 26.3516 7.58411 26.2555 7.48064C26.2942 7.70293 26.3433 7.92328 26.4027 8.14098ZM25.554 6.77726C25.5662 7.36096 25.8202 7.81877 25.8202 7.81877C25.8202 7.81877 25.7936 7.39603 25.814 7.02695C25.7315 6.94559 25.6448 6.86246 25.554 6.77726ZM20.1289 4.03597C20.1289 4.03597 20.0858 3.5755 20.0677 3.22116C19.8737 3.15454 19.675 3.09263 19.471 3.03485C19.7197 3.43194 20.1289 4.03597 20.1289 4.03597ZM22.6298 10.1639C23.0559 9.86848 23.6216 9.62439 23.6216 9.62439C23.6216 9.62439 22.8586 9.66448 22.1853 9.89913C22.3335 9.98816 22.4819 10.0766 22.6298 10.1639ZM15.8453 6.28584C15.9816 6.34421 16.112 6.4014 16.2386 6.45712C16.3846 6.2316 16.5712 6.0562 16.5712 6.0562C16.5712 6.0562 16.1797 6.09187 15.8453 6.28584ZM49.2668 12.7572C49.2858 12.7287 49.2928 12.6939 49.2862 12.6604C49.2795 12.6268 49.2598 12.5973 49.2313 12.5782C49.2289 12.5767 48.9726 12.4028 48.7611 12.0868C48.5441 11.7622 48.4098 11.3651 48.4086 11.3613C48.3978 11.3288 48.3744 11.302 48.3437 11.2867C48.313 11.2713 48.2774 11.2688 48.2448 11.2797C48.2122 11.2905 48.1853 11.3138 48.1699 11.3444C48.1546 11.375 48.152 11.4105 48.1629 11.443C48.1688 11.4607 48.3093 11.876 48.5458 12.2301C48.7871 12.5912 49.0755 12.7849 49.0876 12.7931C49.1162 12.8118 49.151 12.8185 49.1846 12.8118C49.2181 12.8051 49.2477 12.7854 49.2668 12.7572ZM47.8772 12.3786C47.8994 12.3533 47.9106 12.3202 47.9084 12.2867C47.9063 12.2531 47.8909 12.2218 47.8657 12.1994C47.8409 12.1773 47.6061 11.9845 46.9801 11.9603C46.367 11.9368 45.9868 12.0529 45.9711 12.0579C45.9383 12.0681 45.911 12.0908 45.8951 12.1211C45.8791 12.1513 45.8759 12.1867 45.8861 12.2193C45.8963 12.252 45.9191 12.2792 45.9494 12.2951C45.9798 12.311 46.0152 12.3142 46.048 12.3041C46.0515 12.3032 46.4055 12.1965 46.9703 12.218C47.5011 12.2383 47.6939 12.3919 47.6957 12.3934C47.7219 12.4151 47.7555 12.4257 47.7895 12.423C47.8234 12.4202 47.8549 12.4043 47.8772 12.3786ZM45.0845 12.6667C45.0972 12.6554 45.1075 12.6417 45.1149 12.6264C45.1222 12.6111 45.1264 12.5945 45.1274 12.5776C45.1283 12.5607 45.1258 12.5437 45.1201 12.5278C45.1145 12.5118 45.1057 12.4971 45.0943 12.4845C45.0905 12.4798 44.6853 12.0293 44.3967 11.5426C44.106 11.0521 43.7645 10.2376 43.7612 10.2293C43.748 10.1977 43.7228 10.1727 43.691 10.1596C43.6593 10.1466 43.6236 10.1467 43.5919 10.1599C43.5603 10.1731 43.5351 10.1982 43.5221 10.2299C43.509 10.2615 43.5091 10.2971 43.5223 10.3286C43.5365 10.3626 43.8739 11.1676 44.1741 11.6738C44.476 12.1835 44.8846 12.6381 44.9018 12.6569C44.9248 12.6824 44.9569 12.6977 44.9912 12.6995C45.0254 12.7013 45.059 12.6895 45.0845 12.6667ZM43.25 11.8088C43.2789 11.7909 43.2995 11.7623 43.3075 11.7293C43.3154 11.6963 43.3099 11.6615 43.2922 11.6325C43.2807 11.6142 43.003 11.175 42.0704 10.8891C41.1421 10.6043 40.5625 10.8136 40.5383 10.8227C40.4718 10.8475 40.438 10.9215 40.4629 10.9881C40.4877 11.0547 40.5619 11.0886 40.6288 11.0645C40.6341 11.0624 41.1572 10.8787 41.9944 11.1355C42.8224 11.3896 43.0699 11.7643 43.0722 11.7681C43.0906 11.7968 43.1195 11.8171 43.1528 11.8247C43.186 11.8323 43.2209 11.8266 43.25 11.8088ZM39.3957 11.9244C39.4067 11.892 39.4044 11.8566 39.3892 11.8259C39.3741 11.7953 39.3474 11.7718 39.3149 11.7608C39.3099 11.759 38.7992 11.5806 38.2143 11.0114C37.2899 10.1117 36.9892 8.66336 36.9862 8.64862C36.9795 8.61508 36.9596 8.58558 36.9311 8.56662C36.9025 8.54766 36.8676 8.54078 36.8339 8.5475C36.8003 8.55423 36.7707 8.574 36.7517 8.60247C36.7326 8.63094 36.7257 8.66578 36.7325 8.69932C36.7449 8.76182 37.0504 10.2393 38.0333 11.1959C38.6638 11.8094 39.2091 11.9975 39.2318 12.0051C39.2479 12.0106 39.2649 12.0128 39.2819 12.0117C39.2988 12.0106 39.3154 12.0062 39.3306 11.9987C39.3458 11.9912 39.3594 11.9808 39.3706 11.968C39.3817 11.9552 39.3903 11.9404 39.3957 11.9244ZM38.3997 12.9833C38.3997 12.9833 38.8137 13.2123 39.5953 13.2123C40.3771 13.2123 41.2279 12.8471 41.6185 12.7999C42.377 12.7082 43.3419 13.1531 44.0327 13.2123C45.3661 13.327 46.6997 13.052 46.6997 13.052C46.6997 13.052 47.0901 13.3412 47.4585 13.35C48.424 13.3727 49.2517 13.0979 49.8955 13.052C50.5392 13.006 51.6428 13.1436 51.6428 13.1436C51.6428 13.1436 50.9302 13.4417 50.1714 13.9688C49.4129 14.4959 48.6999 15.1376 48.6999 15.1376C48.6999 15.1376 47.5502 14.9083 46.263 15.2523C44.9754 15.596 44.0099 16.4898 44.0099 16.4898C44.0099 16.4898 42.5385 16.3295 41.5499 16.6272C40.5614 16.9253 39.4578 17.9108 39.4578 17.9108C39.4578 17.9108 38.4 17.8191 37.5495 17.9794C36.6988 18.1398 35.5721 18.7129 35.5721 18.7129C35.5721 18.7129 35.3882 17.223 34.8364 16.2378C34.2846 15.2523 33.6639 14.6335 33.6639 14.6335C33.6639 14.6335 34.5147 14.7252 35.3193 14.6105C36.1239 14.4959 36.7218 14.4042 37.2506 14.0604C37.779 13.7167 38.3997 12.9833 38.3997 12.9833Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4083 16.0886C27.4101 16.0829 27.5888 15.5266 27.8222 15.2591C28.0544 14.9925 28.5373 14.7828 28.5421 14.7806C28.5719 14.7653 28.5951 14.7386 28.607 14.706C28.6188 14.6734 28.6184 14.6373 28.6058 14.605C28.5932 14.5726 28.5694 14.5466 28.5392 14.532C28.509 14.5175 28.4747 14.5155 28.4432 14.5266C28.4211 14.536 27.9017 14.7614 27.6295 15.0735C27.3581 15.3843 27.1684 15.9765 27.1603 16.0016C27.1493 16.0362 27.1519 16.0739 27.1674 16.1065C27.1829 16.1391 27.21 16.1638 27.2429 16.1754C27.2758 16.1869 27.3117 16.1842 27.3427 16.168C27.3738 16.1517 27.3974 16.1231 27.4083 16.0886ZM26.7808 14.6446C27.1881 14.6192 27.6767 14.4497 27.6973 14.4425C27.7136 14.4367 27.7286 14.4277 27.7416 14.4159C27.7546 14.4041 27.7652 14.3897 27.7729 14.3735C27.7805 14.3574 27.7851 14.3398 27.7863 14.3218C27.7875 14.3039 27.7854 14.2858 27.7799 14.2687C27.7745 14.2516 27.7659 14.2357 27.7546 14.2221C27.7434 14.2085 27.7297 14.1973 27.7143 14.1893C27.699 14.1812 27.6823 14.1764 27.6651 14.1751C27.648 14.1739 27.6308 14.1762 27.6145 14.1819C27.6097 14.1834 27.1379 14.3473 26.7656 14.3706C26.4028 14.3928 25.9166 14.2095 25.9118 14.2076C25.8792 14.1952 25.8433 14.1968 25.8119 14.2122C25.7805 14.2276 25.7562 14.2555 25.7443 14.2897C25.7325 14.3239 25.734 14.3617 25.7487 14.3947C25.7633 14.4277 25.7899 14.4532 25.8224 14.4657C25.8446 14.4739 26.3636 14.6704 26.7808 14.6446ZM22.6435 17.34C22.6477 17.329 23.0616 16.2264 23.6237 15.4707C24.1723 14.7326 24.9275 14.4443 24.9349 14.4415C24.9511 14.4355 24.966 14.4262 24.9788 14.4141C24.9915 14.402 25.0019 14.3874 25.0093 14.3712C25.0167 14.3549 25.021 14.3372 25.0219 14.3192C25.0228 14.3012 25.0203 14.2832 25.0146 14.2662C25.0088 14.2492 25 14.2335 24.9885 14.2201C24.977 14.2067 24.9631 14.1958 24.9476 14.188C24.9321 14.1802 24.9153 14.1758 24.8982 14.1748C24.881 14.1739 24.8639 14.1765 24.8477 14.1825C24.8139 14.1951 24.0148 14.498 23.4175 15.3015C22.8318 16.0892 22.417 17.1931 22.3997 17.2399C22.3934 17.2567 22.3904 17.2746 22.3907 17.2927C22.3911 17.3108 22.3948 17.3286 22.4017 17.3451C22.4086 17.3617 22.4185 17.3766 22.4309 17.3891C22.4433 17.4016 22.4579 17.4115 22.4739 17.418C22.4899 17.4246 22.507 17.4278 22.5242 17.4275C22.5414 17.4271 22.5584 17.4232 22.5741 17.4159C22.5898 17.4087 22.6041 17.3983 22.616 17.3852C22.6279 17.3722 22.6373 17.3569 22.6435 17.34ZM20.4952 16.0047C21.0657 15.8051 21.5779 15.4161 21.5994 15.3997C21.6274 15.3782 21.6461 15.346 21.6515 15.3101C21.657 15.2742 21.6486 15.2374 21.6284 15.2079C21.608 15.1785 21.5773 15.1588 21.5431 15.1531C21.5089 15.1474 21.4739 15.1562 21.4458 15.1774C21.4407 15.1812 20.9435 15.558 20.4125 15.7441C19.8847 15.9291 19.2336 15.908 19.227 15.908C19.2099 15.9074 19.1928 15.9104 19.1767 15.9167C19.1606 15.923 19.1459 15.9326 19.1334 15.9449C19.1208 15.9572 19.1107 15.972 19.1036 15.9884C19.0965 16.0048 19.0925 16.0225 19.0919 16.0405C19.0914 16.0585 19.0941 16.0765 19.1002 16.0934C19.1062 16.1103 19.1153 16.1257 19.127 16.1389C19.1387 16.1521 19.1528 16.1627 19.1684 16.1702C19.184 16.1777 19.2009 16.1818 19.218 16.1824C19.2464 16.1834 19.9218 16.2054 20.4952 16.0047ZM32.0817 14.8315C32.0823 14.8283 32.1489 14.5297 32.2544 14.3301C32.339 14.1702 32.6444 13.9006 32.755 13.8104C32.7793 13.7871 32.7943 13.7549 32.7971 13.7204C32.7999 13.6859 32.7902 13.6516 32.7699 13.6242C32.7497 13.5969 32.7204 13.5785 32.6879 13.5729C32.6554 13.5672 32.6221 13.5745 32.5945 13.5935C32.5494 13.6302 32.1516 13.9596 32.0261 14.1966C31.9024 14.4305 31.8301 14.7558 31.8271 14.7693C31.8193 14.8048 31.8251 14.8421 31.8435 14.873C31.8618 14.9039 31.8911 14.9259 31.9248 14.9341C31.9586 14.9424 31.9941 14.9362 32.0235 14.9169C32.0529 14.8977 32.0739 14.8669 32.0817 14.8315Z\" fill=\"white\"/><path d=\"M66.04 17.38L66.66 19H69.18L63.58 4.6L58 19H60.52L61.12 17.38H66.04ZM61.88 15.36L63.58 10.5L65.28 15.36H61.88ZM77.7319 12.02C78.9319 11.72 80.0719 10.78 80.0719 8.94C80.0719 4.9 75.4119 5 75.4119 5H70.7519V19H75.4119C76.3519 19 80.2719 18.82 80.2719 14.98C80.2719 14.98 80.3719 12.56 77.7319 12.02ZM73.0719 10.84V7.32H75.4119C75.4119 7.32 77.7319 7.22 77.7319 9.1C77.7319 10.84 75.4119 10.84 75.4119 10.84H73.0719ZM75.4119 16.68H73.0719V13.18H75.4119C75.4119 13.18 77.9319 13.04 77.9319 14.92C77.9319 16.44 76.3919 16.68 75.4119 16.68ZM87.5627 15.2C90.4227 15.2 92.7627 12.86 92.7627 10C92.7627 7.14 90.4227 4.8 87.5627 4.8C84.7027 4.8 82.3627 7.14 82.3627 10C82.3627 12.86 84.7027 15.2 87.5627 15.2ZM87.5627 7.12C89.1627 7.12 90.4427 8.4 90.4427 10C90.4427 11.6 89.1627 12.88 87.5627 12.88C85.9627 12.88 84.6827 11.6 84.6827 10C84.6827 8.4 85.9627 7.12 87.5627 7.12ZM92.1227 19V16.68H82.8827V19H92.1227ZM102.897 19H105.637L101.837 12.92C103.197 12.54 104.917 11.56 104.917 9.08C104.917 5 100.237 5 100.237 5H95.5766V7.34L97.7966 10.84H95.5766V19H97.9166V13.16H99.2566L102.897 19ZM100.537 10.82L98.3566 7.34H100.237C100.237 7.34 102.577 7.34 102.577 9.08C102.577 10.46 101.157 10.76 100.537 10.82ZM110.863 7.14H112.423V5H106.963V7.14H108.523V16.86H106.883V19H112.503V16.86H110.863V7.14ZM127.215 11.04H122.535V13.26H124.875V15.28C124.015 16.26 122.775 16.86 121.375 16.86C118.795 16.86 116.715 15.42 116.715 12C116.715 8.94 118.795 7.14 121.375 7.14C122.655 7.14 123.835 7.66 124.675 8.5L126.315 6.86C125.055 5.58 123.315 4.8 121.375 4.8C117.515 4.8 114.375 7.84 114.375 12C114.375 16.58 117.315 19.2 121.075 19.2C122.735 19.2 123.915 18.8 125.055 17.74L125.175 19.06H127.215V11.04ZM132.604 7.34H139.604V5H130.264V19H139.604V16.66H132.604V13.16H138.424V10.84H132.604V7.34ZM153.681 19V5H151.361V14.96L144.381 5H142.021V19H144.361V9.04L151.321 19H153.681Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"header__nav\">\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<ul class=\"header__nav-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Авиабилеты</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Поиск попутчиков</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Энциклопедия туриста</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Кредит</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Виза</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__manager\">\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-photo\">\n\t\t\t\t\t\t\t\t\t<img src=\"img/manager.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__manager-status\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-name\">\n\t\t\t\t\t\t\t\t\t\tАнна Захаренко\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-position\">\n\t\t\t\t\t\t\t\t\t\tПерсональный менеджер\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"header__manager-button\">\n\t\t\t\t\t\t\t\t\t\tПомощь с выбором тура\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__contacts\">\n\t\t\t\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__contacts-phone\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__contacts-phone-number\">\n\t\t\t\t\t\t\t\t\t\t\t8-800-100-30-24\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"header__contacts-mail\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"header__contacts-social\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297437L8.4761 3.47847C8.47863 3.47697 8.48144 3.47584 8.48407 3.47425C7.68832 3.93212 7.19444 4.91134 7.19041 6.30559L7.12722 28.5902C7.11925 31.3872 9.08641 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3114 48.171 34.1174 47.6606C34.095 47.6748 34.0731 47.69 34.0501 47.7035L39.5238 44.5226C40.315 44.0627 40.8055 43.0851 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#155C92\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#1A6FB0\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#1D81CD\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.3361 44.8764L35.3992 22.5919Z\" fill=\"#1D81CD\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#3D99E2\"/><path d=\"M31.0059 14.9825L36.4795 11.8015C38.9138 13.2068 40.8807 16.6134 40.8729 19.411L35.3992 22.592C35.4071 19.7944 33.44 16.3879 31.0059 14.9825Z\" fill=\"#5AAAE7\"/><path d=\"M18.5229 27.7352L18.5367 22.8668L22.1951 24.9789L22.2054 21.3883C22.2172 17.2213 24.4386 16.232 27.6733 18.0996C29.2225 18.9939 30.5536 19.8949 30.942 20.1785L30.9296 24.5327L28.6858 23.2387C26.9271 22.2233 26.5838 22.9873 26.5797 24.3966L26.5709 27.5054L30.766 29.9274L30.2062 34.4807L26.5569 32.3738L26.5217 44.8656L22.1459 42.3392L22.1814 29.8475L18.5229 27.7352Z\" fill=\"#3D5A98\"/><path d=\"M22.2054 21.4862L22.1951 25.0768L18.5367 22.9647L18.5229 27.8331L22.1814 29.9453L22.1462 42.3344L26.522 44.8608L26.5571 32.4717L30.2063 34.5785L30.766 30.0253L26.5709 27.6032L26.5797 24.4944C26.5838 23.0851 26.927 22.3211 28.6858 23.3365L30.9296 24.6305L30.942 20.2763C30.5537 19.9926 29.2225 19.0918 27.6733 18.1974C24.4386 16.3299 22.2172 17.3193 22.2054 21.4862Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604657C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297438L8.4761 3.47847C8.47863 3.47697 8.48144 3.47585 8.48407 3.47426C7.68832 3.93213 7.19444 4.91135 7.19041 6.3056L7.12722 28.5902C7.11925 31.3872 9.08641 34.7944 11.5205 36.1997L30.9139 47.3965C32.174 48.1239 33.3114 48.1711 34.1174 47.6607C34.095 47.6748 34.0731 47.6901 34.0501 47.7036L39.5238 44.5227C40.315 44.0628 40.8055 43.0852 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#6F75E3\"/><path d=\"M22.1161 19.7619L18.8617 17.883C18.4276 17.6324 18.2094 17.7004 17.9771 17.8785C17.8427 17.9815 17.802 18.0754 18.0766 18.2948C18.6159 18.7236 18.9193 19.3016 18.9978 19.9689C19.1251 21.0398 19.113 22.031 19.0356 22.9871C19.0124 23.2642 18.9675 23.5313 18.8669 23.7447C18.7684 23.9543 18.6327 24.0104 18.4637 23.9129C18.3614 23.8538 18.2469 23.7383 18.1211 23.5664C17.8201 23.1545 17.6084 22.6952 17.4017 22.2378C16.6248 20.5205 16.0066 18.7948 15.5022 17.0649C15.3558 16.565 15.1041 16.1682 14.7221 15.9411C14.2515 15.6603 13.7816 15.3839 13.3118 15.1126C12.842 14.8414 12.3723 14.5752 11.9025 14.3147C11.3368 13.9988 11.1674 14.2183 11.3957 14.9404C12.4119 18.1461 13.544 21.3483 15.0239 24.5222C15.7844 26.1517 16.6595 27.7094 17.7887 29.1064C18.9239 30.5108 20.1376 31.496 21.4128 32.2323C21.5764 32.3267 21.7412 32.4172 21.9067 32.5038C22.5882 32.8615 22.7935 32.7744 22.8269 32.0135C22.8508 31.492 22.9044 30.9918 23.1344 30.6441C23.274 30.4335 23.4571 30.3935 23.6692 30.516C23.8009 30.592 23.9438 30.7307 24.0943 30.9302C24.2906 31.1909 24.4543 31.4711 24.6114 31.7592C24.9934 32.4626 25.3609 33.1726 25.7581 33.8699C26.2117 34.6654 26.7442 35.3058 27.3991 35.6839C27.4614 35.7198 27.5249 35.7536 27.5894 35.7846L30.4697 37.4492C30.9328 37.6808 31.1762 37.167 30.911 36.4194C30.7241 35.8928 30.4792 35.3791 30.2206 34.8694C29.6348 33.7202 28.9445 32.6282 28.2914 31.5143C27.7016 30.5102 27.665 30.1037 28.1431 29.6155C28.6634 29.0792 29.2249 28.6 29.7495 28.0703C30.24 27.5743 30.742 27.0889 31.0014 26.3079C31.1666 25.8097 31.0227 25.4652 30.4949 25.0572C30.4052 24.9872 30.3112 24.9312 30.2178 24.8774L27.0857 23.0664C27.077 23.0613 27.0684 23.0561 27.0599 23.0511C26.6898 22.8376 26.4825 22.9118 26.3485 23.2201C26.1632 23.6451 25.9715 24.0665 25.7502 24.4506C25.2499 25.3265 24.6904 26.1284 23.9081 26.6289C23.7629 26.7213 23.6049 26.8453 23.388 26.72C23.3467 26.6962 23.3033 26.6634 23.2575 26.6197C22.8983 26.2609 22.7947 25.5192 22.8012 25.2931L22.8101 21.1371C22.7415 20.5043 22.6287 20.1744 22.1161 19.7619Z\" fill=\"white\"/><path d=\"M39.5238 44.5223L34.0501 47.7033C34.8414 47.2434 35.332 46.2658 35.3359 44.8763L40.8096 41.6953C40.8056 43.0848 40.315 44.0625 39.5238 44.5223Z\" fill=\"#7C84E7\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8612 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#989FED\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.336 44.8764L35.3992 22.5919Z\" fill=\"#989FED\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#A8ADEF\"/><path d=\"M31.0059 14.9825L36.4796 11.8015C38.9138 13.2068 40.8808 16.6134 40.8729 19.411L35.3992 22.592C35.4072 19.7944 33.4401 16.3879 31.0059 14.9825Z\" fill=\"#C5C8F5\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4795 11.8015L17.0862 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.9499 0.297437L8.47604 3.47847C8.47857 3.47697 8.48138 3.47584 8.484 3.47425C7.68825 3.93212 7.19438 4.91134 7.19035 6.30559L7.12716 28.5902C7.11919 31.3872 9.08635 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3113 48.171 34.1173 47.6606C34.0949 47.6748 34.0731 47.69 34.05 47.7035L39.5237 44.5226C40.3149 44.0627 40.8054 43.0851 40.8095 41.6956L40.8727 19.411C40.8808 16.6133 38.9137 13.2068 36.4795 11.8015Z\" fill=\"#7F33AD\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#943EC7\"/><path d=\"M8.47601 3.47837L13.9497 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3874 3.07834 9.27758 3.01253 8.47601 3.47837Z\" fill=\"#A258CB\"/><path d=\"M35.3991 22.5919L40.8728 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#A258CB\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#B77FDA\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#D5B4E9\"/><path d=\"M20.692 34.1685C18.2847 32.7787 17.9996 32.6035 17.049 32.0044C16.1703 31.4514 15.6931 31.0066 15.3757 30.681C14.9554 30.2505 14.656 29.8527 14.3415 29.3079C14.027 28.7632 13.8325 28.3048 13.6701 27.7268C13.5475 27.2902 13.4025 26.6573 13.3651 25.6236C13.3252 24.5063 13.3168 24.1733 13.3246 21.4073C13.3325 18.6412 13.3425 18.3182 13.3887 17.2507C13.4319 16.264 13.58 15.8004 13.7046 15.5065C13.8698 15.1177 14.0662 14.8851 14.3828 14.7046C14.6994 14.5241 15 14.4728 15.4213 14.5282C15.7396 14.5697 16.2177 14.6764 17.0967 15.1382C18.0476 15.6369 18.3326 15.7909 20.74 17.1807C23.1478 18.5708 23.4328 18.746 24.3835 19.3451C25.2622 19.8981 25.7395 20.3429 26.0568 20.6685C26.4771 21.099 26.7764 21.4968 27.091 22.0416C27.4055 22.5863 27.5999 23.0447 27.7624 23.6228C27.8844 24.0591 28.03 24.6922 28.0674 25.7253C28.1073 26.8426 28.1157 27.1762 28.1079 29.9423C28.1 32.7084 28.09 33.0308 28.0437 34.0983C28.0006 35.0857 27.8519 35.5489 27.7279 35.8431C27.5627 36.2319 27.3663 36.4645 27.0497 36.645C26.7331 36.8255 26.4325 36.8768 26.0111 36.8214C25.6929 36.7799 25.2147 36.6732 24.3357 36.2113C23.385 35.7127 23.0998 35.5586 20.692 34.1685ZM20.7455 15.3144C18.2969 13.9007 17.9899 13.7354 17.0281 13.2304C16.0681 12.7264 15.4122 12.5237 14.8379 12.4481C14.2446 12.3709 13.7406 12.4351 13.2378 12.7217C12.735 13.0082 12.4253 13.4083 12.1928 13.9562C11.9679 14.4866 11.8135 15.1516 11.7667 16.2294C11.7192 17.3089 11.7079 17.6557 11.6999 20.4692C11.692 23.2828 11.7013 23.6415 11.7424 24.772C11.783 25.9002 11.9331 26.7412 12.1543 27.5291C12.3829 28.3432 12.6894 29.0989 13.189 29.9643C13.6885 30.8297 14.1905 31.4746 14.7823 32.0816C15.3553 32.6684 16.0101 33.2218 16.9698 33.8269C17.9313 34.4322 18.2381 34.6214 20.6869 36.0351C23.1361 37.4491 23.4431 37.6145 24.4048 38.1194C25.3644 38.6225 26.0207 38.8261 26.5945 38.9013C27.1884 38.9789 27.6924 38.9146 28.1952 38.6281C28.698 38.3416 29.0078 37.9415 29.2403 37.3936C29.4652 36.8632 29.6196 36.1982 29.6664 35.1203C29.7132 34.0405 29.7252 33.6941 29.7331 30.8806C29.7411 28.0669 29.7312 27.7079 29.6907 26.5778C29.6501 25.4496 29.5 24.6087 29.2787 23.8207C29.0502 23.0066 28.7437 22.2509 28.2441 21.3855C27.7445 20.5202 27.2426 19.8752 26.6501 19.2678C26.0777 18.6813 25.4223 18.1269 24.4632 17.5229C23.5016 16.9176 23.1946 16.7285 20.7455 15.3144Z\" fill=\"white\"/><path d=\"M20.7063 29.1284C19.0468 28.1703 17.7056 25.8472 17.7111 23.9398C17.7164 22.0323 19.0664 21.263 20.7259 22.221C22.3859 23.1794 23.7271 25.5025 23.7217 27.41C23.7162 29.3175 22.3663 30.0868 20.7063 29.1284ZM20.7311 20.3546C18.1745 18.8784 16.0944 20.0631 16.0861 23.0016C16.0777 25.9401 18.1443 29.5188 20.7009 30.9949C23.2582 32.4714 25.3376 31.2864 25.346 28.3479C25.3544 25.4094 23.2884 21.8309 20.7311 20.3546Z\" fill=\"white\"/><path d=\"M25.5486 21.6797C24.9508 21.3346 24.4646 21.6116 24.4627 22.2985C24.4607 22.9848 24.9436 23.8213 25.5414 24.1664C26.1386 24.5112 26.6248 24.2342 26.6267 23.5479C26.6288 22.861 26.1458 22.0244 25.5486 21.6797Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8018L17.0863 0.604901C15.8613 -0.10235 14.7514 -0.168068 13.95 0.297682L8.4761 3.47871C8.47863 3.47721 8.48144 3.47609 8.48407 3.4745C7.68832 3.93237 7.19444 4.91159 7.19041 6.30584L7.12722 28.5904C7.11925 31.3874 9.08641 34.7946 11.5205 36.1999L30.9139 47.3967C32.174 48.1241 33.3114 48.1712 34.1174 47.6609C34.095 47.675 34.0731 47.6903 34.0501 47.7038L39.5238 44.5229C40.315 44.063 40.8055 43.0854 40.8095 41.6958L40.8727 19.4113C40.8809 16.6136 38.9137 13.2071 36.4796 11.8018Z\" fill=\"#40A559\"/><path d=\"M39.5236 44.5223L34.0499 47.7033C34.8412 47.2434 35.3319 46.2658 35.3357 44.8762L40.8094 41.6953C40.8055 43.0848 40.3148 44.0625 39.5236 44.5223Z\" fill=\"#4DBA69\"/><path d=\"M8.47595 3.47837L13.9497 0.297437C14.7511 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3873 3.07834 9.27752 3.01253 8.47595 3.47837Z\" fill=\"#65C27C\"/><path d=\"M35.3991 22.5919L40.8727 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#65C27C\"/><path d=\"M11.6124 3.78552L17.0861 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#7BCC92\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#94D6A8\"/><path d=\"M27.061 21.937C25.4139 19.0818 23.2184 16.7643 20.8771 15.4115C16.0507 12.6251 12.1103 14.8707 12.0926 20.4152C12.0876 22.1891 12.4858 24.1521 13.247 26.1201L11.9907 30.6165L16.6354 31.896C17.9126 33.4362 19.3512 34.6905 20.8161 35.5362L20.8201 35.5384C25.6445 38.3238 29.585 36.0782 29.6037 30.5341C29.6113 27.8461 28.7091 24.7926 27.061 21.937ZM20.8249 33.8394L20.822 33.8377C19.5163 33.084 18.236 31.9412 17.121 30.5337L16.8563 30.1997L14.0999 29.4402L14.8431 26.7787L14.6711 26.3618C13.9472 24.6111 13.5659 22.849 13.5714 21.27C13.5864 16.6607 16.8613 14.7945 20.8754 17.1121C22.8184 18.235 24.6432 20.1607 26.0125 22.5345C27.3818 24.9082 28.1326 27.446 28.1252 29.6792C28.1099 34.2886 24.8351 36.1548 20.8249 33.8394Z\" fill=\"white\"/><path d=\"M24.8335 29.8822C24.6152 29.6298 23.5416 28.4006 23.3416 28.2013C23.2543 28.1145 23.1776 28.0416 23.1065 28.0005C23.0141 27.9472 22.9316 27.948 22.8487 28.0432C22.7022 28.2102 22.2809 28.5339 22.1532 28.629C22.0802 28.6827 22.007 28.6885 21.9171 28.6364C21.8495 28.5974 21.7725 28.5259 21.679 28.4178C21.4607 28.1654 20.7562 27.4926 19.9231 26.154C19.2751 25.1124 18.8383 24.036 18.7118 23.7103C18.5843 23.3851 18.6992 23.3151 18.8084 23.2528C18.9079 23.1973 19.0279 23.0854 19.1381 23.0015C19.2483 22.9186 19.2845 22.8344 19.3579 22.7091C19.4313 22.5826 19.3957 22.4156 19.3407 22.2575C19.2866 22.0999 18.8529 20.6107 18.6717 20.0018C18.5235 19.5055 18.3732 19.3989 18.2504 19.3279C18.2439 19.3242 18.2374 19.3205 18.2309 19.3168C18.2134 19.3066 18.1969 19.2972 18.1813 19.287C18.0531 19.2053 17.9074 19.1199 17.7617 19.0358C17.6159 18.9516 17.3787 18.8773 17.177 19.0123C16.9762 19.1491 16.409 19.431 16.4055 20.6679C16.4021 21.9047 17.1826 23.5529 17.2919 23.7837C17.4003 24.0151 18.827 27.3815 21.0185 29.737C21.5395 30.2982 21.9461 30.6874 22.2634 30.9868C22.5647 31.2707 22.8505 31.4735 23.1106 31.6238C23.303 31.7349 23.4814 31.8172 23.6416 31.8821C24.0614 32.0518 24.9373 32.0208 25.1207 31.5386C25.3049 31.0568 25.3064 30.5533 25.2523 30.4181C25.1982 30.2816 25.0517 30.1333 24.8335 29.8822Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-center\">\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tПоиск туров\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\t🔥 Горящие туры\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТурагенствам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-right\">\n\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__phone\">\n\t\t\t\t\t\t\t<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.6579 9.42675L8.94794 6.96275C8.68194 6.72075 8.27128 6.73341 8.02061 6.99141L6.42528 8.63208C6.04128 8.55875 5.26928 8.31808 4.47461 7.52541C3.67994 6.73008 3.43928 5.95608 3.36794 5.57475L5.00728 3.97875C5.26594 3.72808 5.27794 3.31808 5.03594 3.05141L2.57261 0.342081C2.33061 0.0747474 1.91928 0.0494141 1.64528 0.284081L0.198611 1.52475C0.0832773 1.64075 0.0146105 1.79408 0.00527717 1.95741C-0.00472283 2.12408 -0.195389 6.07208 2.86594 9.13475C5.53661 11.8047 8.88194 12.0001 9.80328 12.0001C9.93794 12.0001 10.0206 11.9961 10.0426 11.9947C10.2059 11.9854 10.3593 11.9167 10.4746 11.8007L11.7146 10.3534C11.9506 10.0794 11.9246 9.66875 11.6579 9.42675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t8 800 100 30 24\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<button class=\"header__sign-in\">\n\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6666 8.00008L7.33329 5.33341L7.33329 7.33341L2.66663 7.33341L2.66663 8.66675L7.33329 8.66675L7.33329 10.6667L10.6666 8.00008Z\" fill=\"white\"/><path d=\"M12 2.66675L12 13.3334L7.33337 13.3334L7.33337 14.6667L12 14.6667C12.7354 14.6667 13.3334 14.0687 13.3334 13.3334L13.3334 2.66675C13.3334 1.93141 12.7354 1.33341 12 1.33341L7.33337 1.33341L7.33337 2.66675L12 2.66675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>Вход</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__region\">\n\t\t\t\t\t\t\tМосква\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1 class=\"header__title header__title--inner title\">\n\t\t\t\t\tТуры в Таиланд — страна улыбок и вечного лета ждет вас!\n\t\t\t\t</h1>\n\t\t\t\t<div class=\"header__descr\">\n\t\t\t\t\tНаслаждайтесь южным солнцем и теплом, пока в Украине все мерзнут и мечтают о весне. Экзотическая еда, белоснежные пляжи и ласковое море на краю мира — ваш идеальный отдых в Тайланде!\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__filter\">\n\t\t\t\t\t<form action=\"\" class=\"filter filter--inner\">\n\t\t\t\t\t\t<div class=\"filter__item filter__item--country filter__item--inner\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Куда вы хотите полететь?</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-country\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--country\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header select__header--inner\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇻 Мальдивы\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇸 Испания\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇦🇿 Азербайджан\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇬 Египет\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇰 Северная Македония\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--name filter__item--inner-name\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Имя</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input\" placeholder=\"Ваше имя\">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--phone filter__item--inner\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Ваш номер телефона?</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input\" placeholder=\"+7 (999)-999-99-99\">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--submit filter__item--inner-submit\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"filter__item-submit filter__item-submit--inner\" value=\"Получить предложение &rarr;\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t"}]}},{"type":"raw","value":"\t\t</div>\n\t</header>\n\n"}]}}],
    template = twig({"id":"$resolved:4169178dfb0368a7853c3b5ca9f6018417603e2f04ad039250bfa97ca9ab0fc2b8b33c881c53711a3ac42db2e82960a224b9fb24ffba3d82efb6c1b53de68ad7:header.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"short","match":["short"]}],"output":[{"type":"raw","value":"\t<header class=\"header header--short\">\n\t\t<div class=\"header__main\">\n\t\t\t<div class=\"header__menu\">\n\t\t\t\t<div class=\"header__menu-left\">\n\t\t\t\t\t<button class=\"header__burger\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a href=\"#\" class=\"header__logo\">\n\t\t\t\t\t\t<svg width=\"175\" height=\"27\" viewBox=\"0 0 175 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.2928 13.276L32.951 13.276L32.951 15.0347C32.951 15.0347 33.8221 15.6362 34.3724 16.5619C34.9226 17.4875 35.2434 19.5701 35.2434 19.5701C35.2434 19.5701 36.0458 18.9915 37.1006 18.737C38.1554 18.4825 39.5077 18.5983 39.5077 18.5983C39.5077 18.5983 40.1957 17.7188 41.5023 17.3488C42.8092 16.9786 43.9554 17.1869 43.9554 17.1869C43.9554 17.1869 44.6891 16.2148 46.1791 15.8678C47.6695 15.5204 48.655 15.7752 48.655 15.7752C48.655 15.7752 49.6868 14.8496 50.1453 14.5025C50.6038 14.1555 52.0712 13.415 52.0712 13.415C52.0712 13.415 50.902 12.9751 50.2143 12.628C49.5266 12.281 48.4948 11.2628 48.4948 11.2628C48.4948 11.2628 47.3486 11.6101 45.9957 11.147C44.6431 10.6842 43.8637 9.66597 43.8637 9.66597C43.8637 9.66597 42.9006 10.2443 41.3879 9.8511C39.8746 9.45793 39.5307 8.4165 39.5307 8.4165C39.5307 8.4165 38.5222 8.64776 37.1236 8.27751C35.725 7.90755 35.0603 7.14352 35.0603 7.14352C35.0603 7.14352 34.9456 8.85611 34.5788 9.59632C34.2119 10.3368 33.1114 11.6095 33.1114 11.6095C33.1114 11.6095 34.6245 11.6789 35.4271 11.7714C36.2295 11.864 36.7338 12.0491 37.2383 12.3268C37.7429 12.6048 38.2928 13.276 38.2928 13.276ZM29.5124 13.3918L29.5124 14.9883C29.5124 14.9883 28.8017 15.3121 28.5496 15.7288C28.2975 16.1452 28.1828 17.2327 28.1828 17.2327L25.8214 17.2327L25.8214 15.0344L0.24656 15.0344L0.24656 13.3915L29.5124 13.3915L29.5124 13.3918ZM32.8369 15.0347L32.8369 11.6098L32.3327 11.6098L32.3327 15.0347L32.8369 15.0347ZM31.9658 15.0347L31.9658 11.6098L31.4616 11.6098L31.4616 15.0347L31.9658 15.0347ZM31.0487 15.0347L31.0487 11.6098L30.5445 11.6098L30.5445 15.0347L31.0487 15.0347Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.0385 4.53869C20.0165 4.60591 21.6935 4.94231 21.6935 4.94231C21.6935 4.94231 20.4177 5.60935 19.7109 6.16416L20.1333 6.33323C20.3623 6.42411 20.5786 6.51239 20.7841 6.5975C21.123 6.40766 21.5197 6.37275 21.5197 6.37275C21.5197 6.37275 21.3306 6.54471 21.1826 6.76513C21.9263 7.0822 22.515 7.35975 23.0136 7.61682C23.5367 7.341 24.4689 7.25618 24.4689 7.25618C24.4689 7.25618 23.9961 7.50949 23.505 7.87936C24.5432 8.4535 25.2149 8.95522 26.3526 9.63005C26.6369 9.79883 26.9225 9.96761 27.2077 10.1332C27.8899 9.90356 28.663 9.86433 28.663 9.86433C28.663 9.86433 28.0901 10.1032 27.658 10.3923C29.2269 11.2847 30.7519 12.0368 31.9199 12.1421C33.3311 12.2694 34.4082 12.1961 34.855 12.0737L34.855 14.8564L35.3673 14.8564L35.3673 11.5371C35.3673 11.5371 35.1111 11.2904 35.018 11.0885C34.9248 10.8868 34.3426 9.89981 34.3426 9.89981L33.9231 10.124C33.9231 10.124 33.9231 10.3259 34.0166 10.5726C34.1098 10.8193 34.366 11.201 34.366 11.201C34.366 11.201 33.9468 10.999 33.4575 10.5279C32.8694 9.96155 32.6689 9.24316 31.6056 8.06113L31.4812 8.4134C31.4812 8.4134 31.3949 8.11912 31.332 7.76742C31.1957 7.62576 31.0474 7.47776 30.8847 7.32311C30.8643 7.68433 30.891 8.09806 30.891 8.09806C30.891 8.09806 30.6336 7.65 30.6213 7.07874C30.3915 6.86981 30.1566 6.66625 29.9166 6.46825C28.3319 5.1561 26.8841 4.20084 25.0624 3.59871C25.0783 3.86486 25.0989 4.13071 25.1244 4.39616C25.1244 4.39616 24.7095 3.805 24.4578 3.41638C23.6749 3.20057 22.8198 3.04362 21.8565 2.94668C21.4751 2.9083 21.1074 2.87917 20.7515 2.85839C20.8648 3.07802 20.9848 3.2944 21.1113 3.50726C21.3672 3.93368 21.8795 4.51676 21.8795 4.51676C21.8795 4.51676 20.8776 4.3148 19.5269 4.22507C18.1756 4.13506 16.522 4.42674 16.522 4.42674C16.522 4.42674 18.06 4.47146 19.0385 4.53869Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3997 12.9833L33.0429 12.9833L33.0429 14.7252L32.9285 14.7252L32.9285 11.333L33.2041 11.333C33.2041 11.333 34.7214 11.4017 35.5263 11.4934C36.3309 11.5851 36.8366 11.7684 37.3425 12.0435C37.8482 12.3185 38.3997 12.9833 38.3997 12.9833ZM29.5946 14.7252L29.5946 13.0979L0.246518 13.0979L0.246518 11.333L24.8245 11.333C25.5597 11.6664 26.2442 11.8967 26.8359 11.9518C28.2287 12.0818 29.2918 12.0069 29.7327 11.8819L29.7327 14.7252L29.5946 14.7252ZM32.4228 11.333L32.4228 14.7252L32.0549 14.7252L32.0549 11.333L32.4228 11.333ZM31.5493 11.333L31.5493 14.7252L31.1353 14.7252L31.1353 11.333L31.5493 11.333ZM30.6296 11.333L30.6296 14.7252L30.2384 14.7252L30.2384 11.333L30.6296 11.333ZM10.6739 4.27387C11.6125 4.50764 13.0212 5.11079 14.786 5.84306C15.4836 5.27588 16.7427 4.59461 16.7427 4.59461C16.7427 4.59461 15.0874 4.25088 14.1224 4.18219C13.1567 4.1138 11.6397 4.06752 11.6397 4.06752C11.6397 4.06752 13.272 3.76948 14.6053 3.86145C15.9384 3.95313 16.9273 4.15949 16.9273 4.15949C16.9273 4.15949 16.4213 3.56371 16.1691 3.12801C16.0431 2.91222 15.9133 2.66223 15.8139 2.46501C12.8879 2.28961 10.8152 2.7604 8.92651 4.0908C9.43218 4.04481 9.66195 4.02182 10.6739 4.27387ZM18.5309 7.59591C19.0156 7.21798 19.4822 6.95915 19.4822 6.95915C19.4822 6.95915 18.5622 7.04582 18.0459 7.32764C18.2089 7.41476 18.3705 7.50419 18.5309 7.59591ZM26.4027 8.14098L26.5254 7.78104C26.4412 7.68435 26.3516 7.58411 26.2555 7.48064C26.2942 7.70293 26.3433 7.92328 26.4027 8.14098ZM25.554 6.77726C25.5662 7.36096 25.8202 7.81877 25.8202 7.81877C25.8202 7.81877 25.7936 7.39603 25.814 7.02695C25.7315 6.94559 25.6448 6.86246 25.554 6.77726ZM20.1289 4.03597C20.1289 4.03597 20.0858 3.5755 20.0677 3.22116C19.8737 3.15454 19.675 3.09263 19.471 3.03485C19.7197 3.43194 20.1289 4.03597 20.1289 4.03597ZM22.6298 10.1639C23.0559 9.86848 23.6216 9.62439 23.6216 9.62439C23.6216 9.62439 22.8586 9.66448 22.1853 9.89913C22.3335 9.98816 22.4819 10.0766 22.6298 10.1639ZM15.8453 6.28584C15.9816 6.34421 16.112 6.4014 16.2386 6.45712C16.3846 6.2316 16.5712 6.0562 16.5712 6.0562C16.5712 6.0562 16.1797 6.09187 15.8453 6.28584ZM49.2668 12.7572C49.2858 12.7287 49.2928 12.6939 49.2862 12.6604C49.2795 12.6268 49.2598 12.5973 49.2313 12.5782C49.2289 12.5767 48.9726 12.4028 48.7611 12.0868C48.5441 11.7622 48.4098 11.3651 48.4086 11.3613C48.3978 11.3288 48.3744 11.302 48.3437 11.2867C48.313 11.2713 48.2774 11.2688 48.2448 11.2797C48.2122 11.2905 48.1853 11.3138 48.1699 11.3444C48.1546 11.375 48.152 11.4105 48.1629 11.443C48.1688 11.4607 48.3093 11.876 48.5458 12.2301C48.7871 12.5912 49.0755 12.7849 49.0876 12.7931C49.1162 12.8118 49.151 12.8185 49.1846 12.8118C49.2181 12.8051 49.2477 12.7854 49.2668 12.7572ZM47.8772 12.3786C47.8994 12.3533 47.9106 12.3202 47.9084 12.2867C47.9063 12.2531 47.8909 12.2218 47.8657 12.1994C47.8409 12.1773 47.6061 11.9845 46.9801 11.9603C46.367 11.9368 45.9868 12.0529 45.9711 12.0579C45.9383 12.0681 45.911 12.0908 45.8951 12.1211C45.8791 12.1513 45.8759 12.1867 45.8861 12.2193C45.8963 12.252 45.9191 12.2792 45.9494 12.2951C45.9798 12.311 46.0152 12.3142 46.048 12.3041C46.0515 12.3032 46.4055 12.1965 46.9703 12.218C47.5011 12.2383 47.6939 12.3919 47.6957 12.3934C47.7219 12.4151 47.7555 12.4257 47.7895 12.423C47.8234 12.4202 47.8549 12.4043 47.8772 12.3786ZM45.0845 12.6667C45.0972 12.6554 45.1075 12.6417 45.1149 12.6264C45.1222 12.6111 45.1264 12.5945 45.1274 12.5776C45.1283 12.5607 45.1258 12.5437 45.1201 12.5278C45.1145 12.5118 45.1057 12.4971 45.0943 12.4845C45.0905 12.4798 44.6853 12.0293 44.3967 11.5426C44.106 11.0521 43.7645 10.2376 43.7612 10.2293C43.748 10.1977 43.7228 10.1727 43.691 10.1596C43.6593 10.1466 43.6236 10.1467 43.5919 10.1599C43.5603 10.1731 43.5351 10.1982 43.5221 10.2299C43.509 10.2615 43.5091 10.2971 43.5223 10.3286C43.5365 10.3626 43.8739 11.1676 44.1741 11.6738C44.476 12.1835 44.8846 12.6381 44.9018 12.6569C44.9248 12.6824 44.9569 12.6977 44.9912 12.6995C45.0254 12.7013 45.059 12.6895 45.0845 12.6667ZM43.25 11.8088C43.2789 11.7909 43.2995 11.7623 43.3075 11.7293C43.3154 11.6963 43.3099 11.6615 43.2922 11.6325C43.2807 11.6142 43.003 11.175 42.0704 10.8891C41.1421 10.6043 40.5625 10.8136 40.5383 10.8227C40.4718 10.8475 40.438 10.9215 40.4629 10.9881C40.4877 11.0547 40.5619 11.0886 40.6288 11.0645C40.6341 11.0624 41.1572 10.8787 41.9944 11.1355C42.8224 11.3896 43.0699 11.7643 43.0722 11.7681C43.0906 11.7968 43.1195 11.8171 43.1528 11.8247C43.186 11.8323 43.2209 11.8266 43.25 11.8088ZM39.3957 11.9244C39.4067 11.892 39.4044 11.8566 39.3892 11.8259C39.3741 11.7953 39.3474 11.7718 39.3149 11.7608C39.3099 11.759 38.7992 11.5806 38.2143 11.0114C37.2899 10.1117 36.9892 8.66336 36.9862 8.64862C36.9795 8.61508 36.9596 8.58558 36.9311 8.56662C36.9025 8.54766 36.8676 8.54078 36.8339 8.5475C36.8003 8.55423 36.7707 8.574 36.7517 8.60247C36.7326 8.63094 36.7257 8.66578 36.7325 8.69932C36.7449 8.76182 37.0504 10.2393 38.0333 11.1959C38.6638 11.8094 39.2091 11.9975 39.2318 12.0051C39.2479 12.0106 39.2649 12.0128 39.2819 12.0117C39.2988 12.0106 39.3154 12.0062 39.3306 11.9987C39.3458 11.9912 39.3594 11.9808 39.3706 11.968C39.3817 11.9552 39.3903 11.9404 39.3957 11.9244ZM38.3997 12.9833C38.3997 12.9833 38.8137 13.2123 39.5953 13.2123C40.3771 13.2123 41.2279 12.8471 41.6185 12.7999C42.377 12.7082 43.3419 13.1531 44.0327 13.2123C45.3661 13.327 46.6997 13.052 46.6997 13.052C46.6997 13.052 47.0901 13.3412 47.4585 13.35C48.424 13.3727 49.2517 13.0979 49.8955 13.052C50.5392 13.006 51.6428 13.1436 51.6428 13.1436C51.6428 13.1436 50.9302 13.4417 50.1714 13.9688C49.4129 14.4959 48.6999 15.1376 48.6999 15.1376C48.6999 15.1376 47.5502 14.9083 46.263 15.2523C44.9754 15.596 44.0099 16.4898 44.0099 16.4898C44.0099 16.4898 42.5385 16.3295 41.5499 16.6272C40.5614 16.9253 39.4578 17.9108 39.4578 17.9108C39.4578 17.9108 38.4 17.8191 37.5495 17.9794C36.6988 18.1398 35.5721 18.7129 35.5721 18.7129C35.5721 18.7129 35.3882 17.223 34.8364 16.2378C34.2846 15.2523 33.6639 14.6335 33.6639 14.6335C33.6639 14.6335 34.5147 14.7252 35.3193 14.6105C36.1239 14.4959 36.7218 14.4042 37.2506 14.0604C37.779 13.7167 38.3997 12.9833 38.3997 12.9833Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4083 16.0886C27.4101 16.0829 27.5888 15.5266 27.8222 15.2591C28.0544 14.9925 28.5373 14.7828 28.5421 14.7806C28.5719 14.7653 28.5951 14.7386 28.607 14.706C28.6188 14.6734 28.6184 14.6373 28.6058 14.605C28.5932 14.5726 28.5694 14.5466 28.5392 14.532C28.509 14.5175 28.4747 14.5155 28.4432 14.5266C28.4211 14.536 27.9017 14.7614 27.6295 15.0735C27.3581 15.3843 27.1684 15.9765 27.1603 16.0016C27.1493 16.0362 27.1519 16.0739 27.1674 16.1065C27.1829 16.1391 27.21 16.1638 27.2429 16.1754C27.2758 16.1869 27.3117 16.1842 27.3427 16.168C27.3738 16.1517 27.3974 16.1231 27.4083 16.0886ZM26.7808 14.6446C27.1881 14.6192 27.6767 14.4497 27.6973 14.4425C27.7136 14.4367 27.7286 14.4277 27.7416 14.4159C27.7546 14.4041 27.7652 14.3897 27.7729 14.3735C27.7805 14.3574 27.7851 14.3398 27.7863 14.3218C27.7875 14.3039 27.7854 14.2858 27.7799 14.2687C27.7745 14.2516 27.7659 14.2357 27.7546 14.2221C27.7434 14.2085 27.7297 14.1973 27.7143 14.1893C27.699 14.1812 27.6823 14.1764 27.6651 14.1751C27.648 14.1739 27.6308 14.1762 27.6145 14.1819C27.6097 14.1834 27.1379 14.3473 26.7656 14.3706C26.4028 14.3928 25.9166 14.2095 25.9118 14.2076C25.8792 14.1952 25.8433 14.1968 25.8119 14.2122C25.7805 14.2276 25.7562 14.2555 25.7443 14.2897C25.7325 14.3239 25.734 14.3617 25.7487 14.3947C25.7633 14.4277 25.7899 14.4532 25.8224 14.4657C25.8446 14.4739 26.3636 14.6704 26.7808 14.6446ZM22.6435 17.34C22.6477 17.329 23.0616 16.2264 23.6237 15.4707C24.1723 14.7326 24.9275 14.4443 24.9349 14.4415C24.9511 14.4355 24.966 14.4262 24.9788 14.4141C24.9915 14.402 25.0019 14.3874 25.0093 14.3712C25.0167 14.3549 25.021 14.3372 25.0219 14.3192C25.0228 14.3012 25.0203 14.2832 25.0146 14.2662C25.0088 14.2492 25 14.2335 24.9885 14.2201C24.977 14.2067 24.9631 14.1958 24.9476 14.188C24.9321 14.1802 24.9153 14.1758 24.8982 14.1748C24.881 14.1739 24.8639 14.1765 24.8477 14.1825C24.8139 14.1951 24.0148 14.498 23.4175 15.3015C22.8318 16.0892 22.417 17.1931 22.3997 17.2399C22.3934 17.2567 22.3904 17.2746 22.3907 17.2927C22.3911 17.3108 22.3948 17.3286 22.4017 17.3451C22.4086 17.3617 22.4185 17.3766 22.4309 17.3891C22.4433 17.4016 22.4579 17.4115 22.4739 17.418C22.4899 17.4246 22.507 17.4278 22.5242 17.4275C22.5414 17.4271 22.5584 17.4232 22.5741 17.4159C22.5898 17.4087 22.6041 17.3983 22.616 17.3852C22.6279 17.3722 22.6373 17.3569 22.6435 17.34ZM20.4952 16.0047C21.0657 15.8051 21.5779 15.4161 21.5994 15.3997C21.6274 15.3782 21.6461 15.346 21.6515 15.3101C21.657 15.2742 21.6486 15.2374 21.6284 15.2079C21.608 15.1785 21.5773 15.1588 21.5431 15.1531C21.5089 15.1474 21.4739 15.1562 21.4458 15.1774C21.4407 15.1812 20.9435 15.558 20.4125 15.7441C19.8847 15.9291 19.2336 15.908 19.227 15.908C19.2099 15.9074 19.1928 15.9104 19.1767 15.9167C19.1606 15.923 19.1459 15.9326 19.1334 15.9449C19.1208 15.9572 19.1107 15.972 19.1036 15.9884C19.0965 16.0048 19.0925 16.0225 19.0919 16.0405C19.0914 16.0585 19.0941 16.0765 19.1002 16.0934C19.1062 16.1103 19.1153 16.1257 19.127 16.1389C19.1387 16.1521 19.1528 16.1627 19.1684 16.1702C19.184 16.1777 19.2009 16.1818 19.218 16.1824C19.2464 16.1834 19.9218 16.2054 20.4952 16.0047ZM32.0817 14.8315C32.0823 14.8283 32.1489 14.5297 32.2544 14.3301C32.339 14.1702 32.6444 13.9006 32.755 13.8104C32.7793 13.7871 32.7943 13.7549 32.7971 13.7204C32.7999 13.6859 32.7902 13.6516 32.7699 13.6242C32.7497 13.5969 32.7204 13.5785 32.6879 13.5729C32.6554 13.5672 32.6221 13.5745 32.5945 13.5935C32.5494 13.6302 32.1516 13.9596 32.0261 14.1966C31.9024 14.4305 31.8301 14.7558 31.8271 14.7693C31.8193 14.8048 31.8251 14.8421 31.8435 14.873C31.8618 14.9039 31.8911 14.9259 31.9248 14.9341C31.9586 14.9424 31.9941 14.9362 32.0235 14.9169C32.0529 14.8977 32.0739 14.8669 32.0817 14.8315Z\" fill=\"white\"/><path d=\"M66.04 17.38L66.66 19H69.18L63.58 4.6L58 19H60.52L61.12 17.38H66.04ZM61.88 15.36L63.58 10.5L65.28 15.36H61.88ZM77.7319 12.02C78.9319 11.72 80.0719 10.78 80.0719 8.94C80.0719 4.9 75.4119 5 75.4119 5H70.7519V19H75.4119C76.3519 19 80.2719 18.82 80.2719 14.98C80.2719 14.98 80.3719 12.56 77.7319 12.02ZM73.0719 10.84V7.32H75.4119C75.4119 7.32 77.7319 7.22 77.7319 9.1C77.7319 10.84 75.4119 10.84 75.4119 10.84H73.0719ZM75.4119 16.68H73.0719V13.18H75.4119C75.4119 13.18 77.9319 13.04 77.9319 14.92C77.9319 16.44 76.3919 16.68 75.4119 16.68ZM87.5627 15.2C90.4227 15.2 92.7627 12.86 92.7627 10C92.7627 7.14 90.4227 4.8 87.5627 4.8C84.7027 4.8 82.3627 7.14 82.3627 10C82.3627 12.86 84.7027 15.2 87.5627 15.2ZM87.5627 7.12C89.1627 7.12 90.4427 8.4 90.4427 10C90.4427 11.6 89.1627 12.88 87.5627 12.88C85.9627 12.88 84.6827 11.6 84.6827 10C84.6827 8.4 85.9627 7.12 87.5627 7.12ZM92.1227 19V16.68H82.8827V19H92.1227ZM102.897 19H105.637L101.837 12.92C103.197 12.54 104.917 11.56 104.917 9.08C104.917 5 100.237 5 100.237 5H95.5766V7.34L97.7966 10.84H95.5766V19H97.9166V13.16H99.2566L102.897 19ZM100.537 10.82L98.3566 7.34H100.237C100.237 7.34 102.577 7.34 102.577 9.08C102.577 10.46 101.157 10.76 100.537 10.82ZM110.863 7.14H112.423V5H106.963V7.14H108.523V16.86H106.883V19H112.503V16.86H110.863V7.14ZM127.215 11.04H122.535V13.26H124.875V15.28C124.015 16.26 122.775 16.86 121.375 16.86C118.795 16.86 116.715 15.42 116.715 12C116.715 8.94 118.795 7.14 121.375 7.14C122.655 7.14 123.835 7.66 124.675 8.5L126.315 6.86C125.055 5.58 123.315 4.8 121.375 4.8C117.515 4.8 114.375 7.84 114.375 12C114.375 16.58 117.315 19.2 121.075 19.2C122.735 19.2 123.915 18.8 125.055 17.74L125.175 19.06H127.215V11.04ZM132.604 7.34H139.604V5H130.264V19H139.604V16.66H132.604V13.16H138.424V10.84H132.604V7.34ZM153.681 19V5H151.361V14.96L144.381 5H142.021V19H144.361V9.04L151.321 19H153.681Z\" fill=\"white\"/></svg>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"header__nav\">\n\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t<ul class=\"header__nav-list\">\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Авиабилеты</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Поиск попутчиков</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Энциклопедия туриста</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Кредит</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Виза</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t<div class=\"header__manager\">\n\t\t\t\t\t\t\t\t<div class=\"header__manager-photo\">\n\t\t\t\t\t\t\t\t<img src=\"img/manager.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t<span class=\"header__manager-status\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"header__manager-name\">\n\t\t\t\t\t\t\t\t\tАнна Захаренко\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"header__manager-position\">\n\t\t\t\t\t\t\t\t\tПерсональный менеджер\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button class=\"header__manager-button\">\n\t\t\t\t\t\t\t\t\tПомощь с выбором тура\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t<div class=\"header__contacts\">\n\t\t\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__contacts-phone\">\n\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t<span class=\"header__contacts-phone-number\">\n\t\t\t\t\t\t\t\t\t\t8-800-100-30-24\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"header__contacts-mail\">\n\t\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"header__contacts-social\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297437L8.4761 3.47847C8.47863 3.47697 8.48144 3.47584 8.48407 3.47425C7.68832 3.93212 7.19444 4.91134 7.19041 6.30559L7.12722 28.5902C7.11925 31.3872 9.08641 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3114 48.171 34.1174 47.6606C34.095 47.6748 34.0731 47.69 34.0501 47.7035L39.5238 44.5226C40.315 44.0627 40.8055 43.0851 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#155C92\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#1A6FB0\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#1D81CD\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.3361 44.8764L35.3992 22.5919Z\" fill=\"#1D81CD\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#3D99E2\"/><path d=\"M31.0059 14.9825L36.4795 11.8015C38.9138 13.2068 40.8807 16.6134 40.8729 19.411L35.3992 22.592C35.4071 19.7944 33.44 16.3879 31.0059 14.9825Z\" fill=\"#5AAAE7\"/><path d=\"M18.5229 27.7352L18.5367 22.8668L22.1951 24.9789L22.2054 21.3883C22.2172 17.2213 24.4386 16.232 27.6733 18.0996C29.2225 18.9939 30.5536 19.8949 30.942 20.1785L30.9296 24.5327L28.6858 23.2387C26.9271 22.2233 26.5838 22.9873 26.5797 24.3966L26.5709 27.5054L30.766 29.9274L30.2062 34.4807L26.5569 32.3738L26.5217 44.8656L22.1459 42.3392L22.1814 29.8475L18.5229 27.7352Z\" fill=\"#3D5A98\"/><path d=\"M22.2054 21.4862L22.1951 25.0768L18.5367 22.9647L18.5229 27.8331L22.1814 29.9453L22.1462 42.3344L26.522 44.8608L26.5571 32.4717L30.2063 34.5785L30.766 30.0253L26.5709 27.6032L26.5797 24.4944C26.5838 23.0851 26.927 22.3211 28.6858 23.3365L30.9296 24.6305L30.942 20.2763C30.5537 19.9926 29.2225 19.0918 27.6733 18.1974C24.4386 16.3299 22.2172 17.3193 22.2054 21.4862Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604657C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297438L8.4761 3.47847C8.47863 3.47697 8.48144 3.47585 8.48407 3.47426C7.68832 3.93213 7.19444 4.91135 7.19041 6.3056L7.12722 28.5902C7.11925 31.3872 9.08641 34.7944 11.5205 36.1997L30.9139 47.3965C32.174 48.1239 33.3114 48.1711 34.1174 47.6607C34.095 47.6748 34.0731 47.6901 34.0501 47.7036L39.5238 44.5227C40.315 44.0628 40.8055 43.0852 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#6F75E3\"/><path d=\"M22.1161 19.7619L18.8617 17.883C18.4276 17.6324 18.2094 17.7004 17.9771 17.8785C17.8427 17.9815 17.802 18.0754 18.0766 18.2948C18.6159 18.7236 18.9193 19.3016 18.9978 19.9689C19.1251 21.0398 19.113 22.031 19.0356 22.9871C19.0124 23.2642 18.9675 23.5313 18.8669 23.7447C18.7684 23.9543 18.6327 24.0104 18.4637 23.9129C18.3614 23.8538 18.2469 23.7383 18.1211 23.5664C17.8201 23.1545 17.6084 22.6952 17.4017 22.2378C16.6248 20.5205 16.0066 18.7948 15.5022 17.0649C15.3558 16.565 15.1041 16.1682 14.7221 15.9411C14.2515 15.6603 13.7816 15.3839 13.3118 15.1126C12.842 14.8414 12.3723 14.5752 11.9025 14.3147C11.3368 13.9988 11.1674 14.2183 11.3957 14.9404C12.4119 18.1461 13.544 21.3483 15.0239 24.5222C15.7844 26.1517 16.6595 27.7094 17.7887 29.1064C18.9239 30.5108 20.1376 31.496 21.4128 32.2323C21.5764 32.3267 21.7412 32.4172 21.9067 32.5038C22.5882 32.8615 22.7935 32.7744 22.8269 32.0135C22.8508 31.492 22.9044 30.9918 23.1344 30.6441C23.274 30.4335 23.4571 30.3935 23.6692 30.516C23.8009 30.592 23.9438 30.7307 24.0943 30.9302C24.2906 31.1909 24.4543 31.4711 24.6114 31.7592C24.9934 32.4626 25.3609 33.1726 25.7581 33.8699C26.2117 34.6654 26.7442 35.3058 27.3991 35.6839C27.4614 35.7198 27.5249 35.7536 27.5894 35.7846L30.4697 37.4492C30.9328 37.6808 31.1762 37.167 30.911 36.4194C30.7241 35.8928 30.4792 35.3791 30.2206 34.8694C29.6348 33.7202 28.9445 32.6282 28.2914 31.5143C27.7016 30.5102 27.665 30.1037 28.1431 29.6155C28.6634 29.0792 29.2249 28.6 29.7495 28.0703C30.24 27.5743 30.742 27.0889 31.0014 26.3079C31.1666 25.8097 31.0227 25.4652 30.4949 25.0572C30.4052 24.9872 30.3112 24.9312 30.2178 24.8774L27.0857 23.0664C27.077 23.0613 27.0684 23.0561 27.0599 23.0511C26.6898 22.8376 26.4825 22.9118 26.3485 23.2201C26.1632 23.6451 25.9715 24.0665 25.7502 24.4506C25.2499 25.3265 24.6904 26.1284 23.9081 26.6289C23.7629 26.7213 23.6049 26.8453 23.388 26.72C23.3467 26.6962 23.3033 26.6634 23.2575 26.6197C22.8983 26.2609 22.7947 25.5192 22.8012 25.2931L22.8101 21.1371C22.7415 20.5043 22.6287 20.1744 22.1161 19.7619Z\" fill=\"white\"/><path d=\"M39.5238 44.5223L34.0501 47.7033C34.8414 47.2434 35.332 46.2658 35.3359 44.8763L40.8096 41.6953C40.8056 43.0848 40.315 44.0625 39.5238 44.5223Z\" fill=\"#7C84E7\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8612 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#989FED\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.336 44.8764L35.3992 22.5919Z\" fill=\"#989FED\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#A8ADEF\"/><path d=\"M31.0059 14.9825L36.4796 11.8015C38.9138 13.2068 40.8808 16.6134 40.8729 19.411L35.3992 22.592C35.4072 19.7944 33.4401 16.3879 31.0059 14.9825Z\" fill=\"#C5C8F5\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4795 11.8015L17.0862 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.9499 0.297437L8.47604 3.47847C8.47857 3.47697 8.48138 3.47584 8.484 3.47425C7.68825 3.93212 7.19438 4.91134 7.19035 6.30559L7.12716 28.5902C7.11919 31.3872 9.08635 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3113 48.171 34.1173 47.6606C34.0949 47.6748 34.0731 47.69 34.05 47.7035L39.5237 44.5226C40.3149 44.0627 40.8054 43.0851 40.8095 41.6956L40.8727 19.411C40.8808 16.6133 38.9137 13.2068 36.4795 11.8015Z\" fill=\"#7F33AD\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#943EC7\"/><path d=\"M8.47601 3.47837L13.9497 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3874 3.07834 9.27758 3.01253 8.47601 3.47837Z\" fill=\"#A258CB\"/><path d=\"M35.3991 22.5919L40.8728 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#A258CB\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#B77FDA\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#D5B4E9\"/><path d=\"M20.692 34.1685C18.2847 32.7787 17.9996 32.6035 17.049 32.0044C16.1703 31.4514 15.6931 31.0066 15.3757 30.681C14.9554 30.2505 14.656 29.8527 14.3415 29.3079C14.027 28.7632 13.8325 28.3048 13.6701 27.7268C13.5475 27.2902 13.4025 26.6573 13.3651 25.6236C13.3252 24.5063 13.3168 24.1733 13.3246 21.4073C13.3325 18.6412 13.3425 18.3182 13.3887 17.2507C13.4319 16.264 13.58 15.8004 13.7046 15.5065C13.8698 15.1177 14.0662 14.8851 14.3828 14.7046C14.6994 14.5241 15 14.4728 15.4213 14.5282C15.7396 14.5697 16.2177 14.6764 17.0967 15.1382C18.0476 15.6369 18.3326 15.7909 20.74 17.1807C23.1478 18.5708 23.4328 18.746 24.3835 19.3451C25.2622 19.8981 25.7395 20.3429 26.0568 20.6685C26.4771 21.099 26.7764 21.4968 27.091 22.0416C27.4055 22.5863 27.5999 23.0447 27.7624 23.6228C27.8844 24.0591 28.03 24.6922 28.0674 25.7253C28.1073 26.8426 28.1157 27.1762 28.1079 29.9423C28.1 32.7084 28.09 33.0308 28.0437 34.0983C28.0006 35.0857 27.8519 35.5489 27.7279 35.8431C27.5627 36.2319 27.3663 36.4645 27.0497 36.645C26.7331 36.8255 26.4325 36.8768 26.0111 36.8214C25.6929 36.7799 25.2147 36.6732 24.3357 36.2113C23.385 35.7127 23.0998 35.5586 20.692 34.1685ZM20.7455 15.3144C18.2969 13.9007 17.9899 13.7354 17.0281 13.2304C16.0681 12.7264 15.4122 12.5237 14.8379 12.4481C14.2446 12.3709 13.7406 12.4351 13.2378 12.7217C12.735 13.0082 12.4253 13.4083 12.1928 13.9562C11.9679 14.4866 11.8135 15.1516 11.7667 16.2294C11.7192 17.3089 11.7079 17.6557 11.6999 20.4692C11.692 23.2828 11.7013 23.6415 11.7424 24.772C11.783 25.9002 11.9331 26.7412 12.1543 27.5291C12.3829 28.3432 12.6894 29.0989 13.189 29.9643C13.6885 30.8297 14.1905 31.4746 14.7823 32.0816C15.3553 32.6684 16.0101 33.2218 16.9698 33.8269C17.9313 34.4322 18.2381 34.6214 20.6869 36.0351C23.1361 37.4491 23.4431 37.6145 24.4048 38.1194C25.3644 38.6225 26.0207 38.8261 26.5945 38.9013C27.1884 38.9789 27.6924 38.9146 28.1952 38.6281C28.698 38.3416 29.0078 37.9415 29.2403 37.3936C29.4652 36.8632 29.6196 36.1982 29.6664 35.1203C29.7132 34.0405 29.7252 33.6941 29.7331 30.8806C29.7411 28.0669 29.7312 27.7079 29.6907 26.5778C29.6501 25.4496 29.5 24.6087 29.2787 23.8207C29.0502 23.0066 28.7437 22.2509 28.2441 21.3855C27.7445 20.5202 27.2426 19.8752 26.6501 19.2678C26.0777 18.6813 25.4223 18.1269 24.4632 17.5229C23.5016 16.9176 23.1946 16.7285 20.7455 15.3144Z\" fill=\"white\"/><path d=\"M20.7063 29.1284C19.0468 28.1703 17.7056 25.8472 17.7111 23.9398C17.7164 22.0323 19.0664 21.263 20.7259 22.221C22.3859 23.1794 23.7271 25.5025 23.7217 27.41C23.7162 29.3175 22.3663 30.0868 20.7063 29.1284ZM20.7311 20.3546C18.1745 18.8784 16.0944 20.0631 16.0861 23.0016C16.0777 25.9401 18.1443 29.5188 20.7009 30.9949C23.2582 32.4714 25.3376 31.2864 25.346 28.3479C25.3544 25.4094 23.2884 21.8309 20.7311 20.3546Z\" fill=\"white\"/><path d=\"M25.5486 21.6797C24.9508 21.3346 24.4646 21.6116 24.4627 22.2985C24.4607 22.9848 24.9436 23.8213 25.5414 24.1664C26.1386 24.5112 26.6248 24.2342 26.6267 23.5479C26.6288 22.861 26.1458 22.0244 25.5486 21.6797Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8018L17.0863 0.604901C15.8613 -0.10235 14.7514 -0.168068 13.95 0.297682L8.4761 3.47871C8.47863 3.47721 8.48144 3.47609 8.48407 3.4745C7.68832 3.93237 7.19444 4.91159 7.19041 6.30584L7.12722 28.5904C7.11925 31.3874 9.08641 34.7946 11.5205 36.1999L30.9139 47.3967C32.174 48.1241 33.3114 48.1712 34.1174 47.6609C34.095 47.675 34.0731 47.6903 34.0501 47.7038L39.5238 44.5229C40.315 44.063 40.8055 43.0854 40.8095 41.6958L40.8727 19.4113C40.8809 16.6136 38.9137 13.2071 36.4796 11.8018Z\" fill=\"#40A559\"/><path d=\"M39.5236 44.5223L34.0499 47.7033C34.8412 47.2434 35.3319 46.2658 35.3357 44.8762L40.8094 41.6953C40.8055 43.0848 40.3148 44.0625 39.5236 44.5223Z\" fill=\"#4DBA69\"/><path d=\"M8.47595 3.47837L13.9497 0.297437C14.7511 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3873 3.07834 9.27752 3.01253 8.47595 3.47837Z\" fill=\"#65C27C\"/><path d=\"M35.3991 22.5919L40.8727 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#65C27C\"/><path d=\"M11.6124 3.78552L17.0861 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#7BCC92\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#94D6A8\"/><path d=\"M27.061 21.937C25.4139 19.0818 23.2184 16.7643 20.8771 15.4115C16.0507 12.6251 12.1103 14.8707 12.0926 20.4152C12.0876 22.1891 12.4858 24.1521 13.247 26.1201L11.9907 30.6165L16.6354 31.896C17.9126 33.4362 19.3512 34.6905 20.8161 35.5362L20.8201 35.5384C25.6445 38.3238 29.585 36.0782 29.6037 30.5341C29.6113 27.8461 28.7091 24.7926 27.061 21.937ZM20.8249 33.8394L20.822 33.8377C19.5163 33.084 18.236 31.9412 17.121 30.5337L16.8563 30.1997L14.0999 29.4402L14.8431 26.7787L14.6711 26.3618C13.9472 24.6111 13.5659 22.849 13.5714 21.27C13.5864 16.6607 16.8613 14.7945 20.8754 17.1121C22.8184 18.235 24.6432 20.1607 26.0125 22.5345C27.3818 24.9082 28.1326 27.446 28.1252 29.6792C28.1099 34.2886 24.8351 36.1548 20.8249 33.8394Z\" fill=\"white\"/><path d=\"M24.8335 29.8822C24.6152 29.6298 23.5416 28.4006 23.3416 28.2013C23.2543 28.1145 23.1776 28.0416 23.1065 28.0005C23.0141 27.9472 22.9316 27.948 22.8487 28.0432C22.7022 28.2102 22.2809 28.5339 22.1532 28.629C22.0802 28.6827 22.007 28.6885 21.9171 28.6364C21.8495 28.5974 21.7725 28.5259 21.679 28.4178C21.4607 28.1654 20.7562 27.4926 19.9231 26.154C19.2751 25.1124 18.8383 24.036 18.7118 23.7103C18.5843 23.3851 18.6992 23.3151 18.8084 23.2528C18.9079 23.1973 19.0279 23.0854 19.1381 23.0015C19.2483 22.9186 19.2845 22.8344 19.3579 22.7091C19.4313 22.5826 19.3957 22.4156 19.3407 22.2575C19.2866 22.0999 18.8529 20.6107 18.6717 20.0018C18.5235 19.5055 18.3732 19.3989 18.2504 19.3279C18.2439 19.3242 18.2374 19.3205 18.2309 19.3168C18.2134 19.3066 18.1969 19.2972 18.1813 19.287C18.0531 19.2053 17.9074 19.1199 17.7617 19.0358C17.6159 18.9516 17.3787 18.8773 17.177 19.0123C16.9762 19.1491 16.409 19.431 16.4055 20.6679C16.4021 21.9047 17.1826 23.5529 17.2919 23.7837C17.4003 24.0151 18.827 27.3815 21.0185 29.737C21.5395 30.2982 21.9461 30.6874 22.2634 30.9868C22.5647 31.2707 22.8505 31.4735 23.1106 31.6238C23.303 31.7349 23.4814 31.8172 23.6416 31.8821C24.0614 32.0518 24.9373 32.0208 25.1207 31.5386C25.3049 31.0568 25.3064 30.5533 25.2523 30.4181C25.1982 30.2816 25.0517 30.1333 24.8335 29.8822Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__menu-center\">\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\tПоиск туров\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t🔥 Горящие туры\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\tТурагенствам\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__menu-right\">\n\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__phone\">\n\t\t\t\t\t\t<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.6579 9.42675L8.94794 6.96275C8.68194 6.72075 8.27128 6.73341 8.02061 6.99141L6.42528 8.63208C6.04128 8.55875 5.26928 8.31808 4.47461 7.52541C3.67994 6.73008 3.43928 5.95608 3.36794 5.57475L5.00728 3.97875C5.26594 3.72808 5.27794 3.31808 5.03594 3.05141L2.57261 0.342081C2.33061 0.0747474 1.91928 0.0494141 1.64528 0.284081L0.198611 1.52475C0.0832773 1.64075 0.0146105 1.79408 0.00527717 1.95741C-0.00472283 2.12408 -0.195389 6.07208 2.86594 9.13475C5.53661 11.8047 8.88194 12.0001 9.80328 12.0001C9.93794 12.0001 10.0206 11.9961 10.0426 11.9947C10.2059 11.9854 10.3593 11.9167 10.4746 11.8007L11.7146 10.3534C11.9506 10.0794 11.9246 9.66875 11.6579 9.42675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t8 800 100 30 24\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<button class=\"header__sign-in\">\n\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6666 8.00008L7.33329 5.33341L7.33329 7.33341L2.66663 7.33341L2.66663 8.66675L7.33329 8.66675L7.33329 10.6667L10.6666 8.00008Z\" fill=\"white\"/><path d=\"M12 2.66675L12 13.3334L7.33337 13.3334L7.33337 14.6667L12 14.6667C12.7354 14.6667 13.3334 14.0687 13.3334 13.3334L13.3334 2.66675C13.3334 1.93141 12.7354 1.33341 12 1.33341L7.33337 1.33341L7.33337 2.66675L12 2.66675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t<span>Вход</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<a href=\"#\" class=\"header__region\">\n\t\t\t\t\t\tМосква\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</header>\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\n"},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"index","match":["index"]}],"output":[{"type":"raw","value":"\t<header class=\"header\" style=\"background-image: url('../img/header-bg-desk.jpg');\">\n"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\t<header class=\"header\" style=\"background-image: url('../img/header-bg-inner.jpg');\">\n"}]}},{"type":"raw","value":"\t\t<div class=\"header__main\">\n\t\t\t"},{"type":"logic","token":{"type":"Twig.logic.type.if","stack":[{"type":"Twig.expression.type.variable","value":"index","match":["index"]}],"output":[{"type":"raw","value":"\t\t\t\t<div class=\"header__menu\">\n\t\t\t\t\t<div class=\"header__menu-left\">\n\t\t\t\t\t\t<button class=\"header__burger\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__logo\">\n\t\t\t\t\t\t\t<svg width=\"175\" height=\"27\" viewBox=\"0 0 175 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.2928 13.276L32.951 13.276L32.951 15.0347C32.951 15.0347 33.8221 15.6362 34.3724 16.5619C34.9226 17.4875 35.2434 19.5701 35.2434 19.5701C35.2434 19.5701 36.0458 18.9915 37.1006 18.737C38.1554 18.4825 39.5077 18.5983 39.5077 18.5983C39.5077 18.5983 40.1957 17.7188 41.5023 17.3488C42.8092 16.9786 43.9554 17.1869 43.9554 17.1869C43.9554 17.1869 44.6891 16.2148 46.1791 15.8678C47.6695 15.5204 48.655 15.7752 48.655 15.7752C48.655 15.7752 49.6868 14.8496 50.1453 14.5025C50.6038 14.1555 52.0712 13.415 52.0712 13.415C52.0712 13.415 50.902 12.9751 50.2143 12.628C49.5266 12.281 48.4948 11.2628 48.4948 11.2628C48.4948 11.2628 47.3486 11.6101 45.9957 11.147C44.6431 10.6842 43.8637 9.66597 43.8637 9.66597C43.8637 9.66597 42.9006 10.2443 41.3879 9.8511C39.8746 9.45793 39.5307 8.4165 39.5307 8.4165C39.5307 8.4165 38.5222 8.64776 37.1236 8.27751C35.725 7.90755 35.0603 7.14352 35.0603 7.14352C35.0603 7.14352 34.9456 8.85611 34.5788 9.59632C34.2119 10.3368 33.1114 11.6095 33.1114 11.6095C33.1114 11.6095 34.6245 11.6789 35.4271 11.7714C36.2295 11.864 36.7338 12.0491 37.2383 12.3268C37.7429 12.6048 38.2928 13.276 38.2928 13.276ZM29.5124 13.3918L29.5124 14.9883C29.5124 14.9883 28.8017 15.3121 28.5496 15.7288C28.2975 16.1452 28.1828 17.2327 28.1828 17.2327L25.8214 17.2327L25.8214 15.0344L0.24656 15.0344L0.24656 13.3915L29.5124 13.3915L29.5124 13.3918ZM32.8369 15.0347L32.8369 11.6098L32.3327 11.6098L32.3327 15.0347L32.8369 15.0347ZM31.9658 15.0347L31.9658 11.6098L31.4616 11.6098L31.4616 15.0347L31.9658 15.0347ZM31.0487 15.0347L31.0487 11.6098L30.5445 11.6098L30.5445 15.0347L31.0487 15.0347Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.0385 4.53869C20.0165 4.60591 21.6935 4.94231 21.6935 4.94231C21.6935 4.94231 20.4177 5.60935 19.7109 6.16416L20.1333 6.33323C20.3623 6.42411 20.5786 6.51239 20.7841 6.5975C21.123 6.40766 21.5197 6.37275 21.5197 6.37275C21.5197 6.37275 21.3306 6.54471 21.1826 6.76513C21.9263 7.0822 22.515 7.35975 23.0136 7.61682C23.5367 7.341 24.4689 7.25618 24.4689 7.25618C24.4689 7.25618 23.9961 7.50949 23.505 7.87936C24.5432 8.4535 25.2149 8.95522 26.3526 9.63005C26.6369 9.79883 26.9225 9.96761 27.2077 10.1332C27.8899 9.90356 28.663 9.86433 28.663 9.86433C28.663 9.86433 28.0901 10.1032 27.658 10.3923C29.2269 11.2847 30.7519 12.0368 31.9199 12.1421C33.3311 12.2694 34.4082 12.1961 34.855 12.0737L34.855 14.8564L35.3673 14.8564L35.3673 11.5371C35.3673 11.5371 35.1111 11.2904 35.018 11.0885C34.9248 10.8868 34.3426 9.89981 34.3426 9.89981L33.9231 10.124C33.9231 10.124 33.9231 10.3259 34.0166 10.5726C34.1098 10.8193 34.366 11.201 34.366 11.201C34.366 11.201 33.9468 10.999 33.4575 10.5279C32.8694 9.96155 32.6689 9.24316 31.6056 8.06113L31.4812 8.4134C31.4812 8.4134 31.3949 8.11912 31.332 7.76742C31.1957 7.62576 31.0474 7.47776 30.8847 7.32311C30.8643 7.68433 30.891 8.09806 30.891 8.09806C30.891 8.09806 30.6336 7.65 30.6213 7.07874C30.3915 6.86981 30.1566 6.66625 29.9166 6.46825C28.3319 5.1561 26.8841 4.20084 25.0624 3.59871C25.0783 3.86486 25.0989 4.13071 25.1244 4.39616C25.1244 4.39616 24.7095 3.805 24.4578 3.41638C23.6749 3.20057 22.8198 3.04362 21.8565 2.94668C21.4751 2.9083 21.1074 2.87917 20.7515 2.85839C20.8648 3.07802 20.9848 3.2944 21.1113 3.50726C21.3672 3.93368 21.8795 4.51676 21.8795 4.51676C21.8795 4.51676 20.8776 4.3148 19.5269 4.22507C18.1756 4.13506 16.522 4.42674 16.522 4.42674C16.522 4.42674 18.06 4.47146 19.0385 4.53869Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3997 12.9833L33.0429 12.9833L33.0429 14.7252L32.9285 14.7252L32.9285 11.333L33.2041 11.333C33.2041 11.333 34.7214 11.4017 35.5263 11.4934C36.3309 11.5851 36.8366 11.7684 37.3425 12.0435C37.8482 12.3185 38.3997 12.9833 38.3997 12.9833ZM29.5946 14.7252L29.5946 13.0979L0.246518 13.0979L0.246518 11.333L24.8245 11.333C25.5597 11.6664 26.2442 11.8967 26.8359 11.9518C28.2287 12.0818 29.2918 12.0069 29.7327 11.8819L29.7327 14.7252L29.5946 14.7252ZM32.4228 11.333L32.4228 14.7252L32.0549 14.7252L32.0549 11.333L32.4228 11.333ZM31.5493 11.333L31.5493 14.7252L31.1353 14.7252L31.1353 11.333L31.5493 11.333ZM30.6296 11.333L30.6296 14.7252L30.2384 14.7252L30.2384 11.333L30.6296 11.333ZM10.6739 4.27387C11.6125 4.50764 13.0212 5.11079 14.786 5.84306C15.4836 5.27588 16.7427 4.59461 16.7427 4.59461C16.7427 4.59461 15.0874 4.25088 14.1224 4.18219C13.1567 4.1138 11.6397 4.06752 11.6397 4.06752C11.6397 4.06752 13.272 3.76948 14.6053 3.86145C15.9384 3.95313 16.9273 4.15949 16.9273 4.15949C16.9273 4.15949 16.4213 3.56371 16.1691 3.12801C16.0431 2.91222 15.9133 2.66223 15.8139 2.46501C12.8879 2.28961 10.8152 2.7604 8.92651 4.0908C9.43218 4.04481 9.66195 4.02182 10.6739 4.27387ZM18.5309 7.59591C19.0156 7.21798 19.4822 6.95915 19.4822 6.95915C19.4822 6.95915 18.5622 7.04582 18.0459 7.32764C18.2089 7.41476 18.3705 7.50419 18.5309 7.59591ZM26.4027 8.14098L26.5254 7.78104C26.4412 7.68435 26.3516 7.58411 26.2555 7.48064C26.2942 7.70293 26.3433 7.92328 26.4027 8.14098ZM25.554 6.77726C25.5662 7.36096 25.8202 7.81877 25.8202 7.81877C25.8202 7.81877 25.7936 7.39603 25.814 7.02695C25.7315 6.94559 25.6448 6.86246 25.554 6.77726ZM20.1289 4.03597C20.1289 4.03597 20.0858 3.5755 20.0677 3.22116C19.8737 3.15454 19.675 3.09263 19.471 3.03485C19.7197 3.43194 20.1289 4.03597 20.1289 4.03597ZM22.6298 10.1639C23.0559 9.86848 23.6216 9.62439 23.6216 9.62439C23.6216 9.62439 22.8586 9.66448 22.1853 9.89913C22.3335 9.98816 22.4819 10.0766 22.6298 10.1639ZM15.8453 6.28584C15.9816 6.34421 16.112 6.4014 16.2386 6.45712C16.3846 6.2316 16.5712 6.0562 16.5712 6.0562C16.5712 6.0562 16.1797 6.09187 15.8453 6.28584ZM49.2668 12.7572C49.2858 12.7287 49.2928 12.6939 49.2862 12.6604C49.2795 12.6268 49.2598 12.5973 49.2313 12.5782C49.2289 12.5767 48.9726 12.4028 48.7611 12.0868C48.5441 11.7622 48.4098 11.3651 48.4086 11.3613C48.3978 11.3288 48.3744 11.302 48.3437 11.2867C48.313 11.2713 48.2774 11.2688 48.2448 11.2797C48.2122 11.2905 48.1853 11.3138 48.1699 11.3444C48.1546 11.375 48.152 11.4105 48.1629 11.443C48.1688 11.4607 48.3093 11.876 48.5458 12.2301C48.7871 12.5912 49.0755 12.7849 49.0876 12.7931C49.1162 12.8118 49.151 12.8185 49.1846 12.8118C49.2181 12.8051 49.2477 12.7854 49.2668 12.7572ZM47.8772 12.3786C47.8994 12.3533 47.9106 12.3202 47.9084 12.2867C47.9063 12.2531 47.8909 12.2218 47.8657 12.1994C47.8409 12.1773 47.6061 11.9845 46.9801 11.9603C46.367 11.9368 45.9868 12.0529 45.9711 12.0579C45.9383 12.0681 45.911 12.0908 45.8951 12.1211C45.8791 12.1513 45.8759 12.1867 45.8861 12.2193C45.8963 12.252 45.9191 12.2792 45.9494 12.2951C45.9798 12.311 46.0152 12.3142 46.048 12.3041C46.0515 12.3032 46.4055 12.1965 46.9703 12.218C47.5011 12.2383 47.6939 12.3919 47.6957 12.3934C47.7219 12.4151 47.7555 12.4257 47.7895 12.423C47.8234 12.4202 47.8549 12.4043 47.8772 12.3786ZM45.0845 12.6667C45.0972 12.6554 45.1075 12.6417 45.1149 12.6264C45.1222 12.6111 45.1264 12.5945 45.1274 12.5776C45.1283 12.5607 45.1258 12.5437 45.1201 12.5278C45.1145 12.5118 45.1057 12.4971 45.0943 12.4845C45.0905 12.4798 44.6853 12.0293 44.3967 11.5426C44.106 11.0521 43.7645 10.2376 43.7612 10.2293C43.748 10.1977 43.7228 10.1727 43.691 10.1596C43.6593 10.1466 43.6236 10.1467 43.5919 10.1599C43.5603 10.1731 43.5351 10.1982 43.5221 10.2299C43.509 10.2615 43.5091 10.2971 43.5223 10.3286C43.5365 10.3626 43.8739 11.1676 44.1741 11.6738C44.476 12.1835 44.8846 12.6381 44.9018 12.6569C44.9248 12.6824 44.9569 12.6977 44.9912 12.6995C45.0254 12.7013 45.059 12.6895 45.0845 12.6667ZM43.25 11.8088C43.2789 11.7909 43.2995 11.7623 43.3075 11.7293C43.3154 11.6963 43.3099 11.6615 43.2922 11.6325C43.2807 11.6142 43.003 11.175 42.0704 10.8891C41.1421 10.6043 40.5625 10.8136 40.5383 10.8227C40.4718 10.8475 40.438 10.9215 40.4629 10.9881C40.4877 11.0547 40.5619 11.0886 40.6288 11.0645C40.6341 11.0624 41.1572 10.8787 41.9944 11.1355C42.8224 11.3896 43.0699 11.7643 43.0722 11.7681C43.0906 11.7968 43.1195 11.8171 43.1528 11.8247C43.186 11.8323 43.2209 11.8266 43.25 11.8088ZM39.3957 11.9244C39.4067 11.892 39.4044 11.8566 39.3892 11.8259C39.3741 11.7953 39.3474 11.7718 39.3149 11.7608C39.3099 11.759 38.7992 11.5806 38.2143 11.0114C37.2899 10.1117 36.9892 8.66336 36.9862 8.64862C36.9795 8.61508 36.9596 8.58558 36.9311 8.56662C36.9025 8.54766 36.8676 8.54078 36.8339 8.5475C36.8003 8.55423 36.7707 8.574 36.7517 8.60247C36.7326 8.63094 36.7257 8.66578 36.7325 8.69932C36.7449 8.76182 37.0504 10.2393 38.0333 11.1959C38.6638 11.8094 39.2091 11.9975 39.2318 12.0051C39.2479 12.0106 39.2649 12.0128 39.2819 12.0117C39.2988 12.0106 39.3154 12.0062 39.3306 11.9987C39.3458 11.9912 39.3594 11.9808 39.3706 11.968C39.3817 11.9552 39.3903 11.9404 39.3957 11.9244ZM38.3997 12.9833C38.3997 12.9833 38.8137 13.2123 39.5953 13.2123C40.3771 13.2123 41.2279 12.8471 41.6185 12.7999C42.377 12.7082 43.3419 13.1531 44.0327 13.2123C45.3661 13.327 46.6997 13.052 46.6997 13.052C46.6997 13.052 47.0901 13.3412 47.4585 13.35C48.424 13.3727 49.2517 13.0979 49.8955 13.052C50.5392 13.006 51.6428 13.1436 51.6428 13.1436C51.6428 13.1436 50.9302 13.4417 50.1714 13.9688C49.4129 14.4959 48.6999 15.1376 48.6999 15.1376C48.6999 15.1376 47.5502 14.9083 46.263 15.2523C44.9754 15.596 44.0099 16.4898 44.0099 16.4898C44.0099 16.4898 42.5385 16.3295 41.5499 16.6272C40.5614 16.9253 39.4578 17.9108 39.4578 17.9108C39.4578 17.9108 38.4 17.8191 37.5495 17.9794C36.6988 18.1398 35.5721 18.7129 35.5721 18.7129C35.5721 18.7129 35.3882 17.223 34.8364 16.2378C34.2846 15.2523 33.6639 14.6335 33.6639 14.6335C33.6639 14.6335 34.5147 14.7252 35.3193 14.6105C36.1239 14.4959 36.7218 14.4042 37.2506 14.0604C37.779 13.7167 38.3997 12.9833 38.3997 12.9833Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4083 16.0886C27.4101 16.0829 27.5888 15.5266 27.8222 15.2591C28.0544 14.9925 28.5373 14.7828 28.5421 14.7806C28.5719 14.7653 28.5951 14.7386 28.607 14.706C28.6188 14.6734 28.6184 14.6373 28.6058 14.605C28.5932 14.5726 28.5694 14.5466 28.5392 14.532C28.509 14.5175 28.4747 14.5155 28.4432 14.5266C28.4211 14.536 27.9017 14.7614 27.6295 15.0735C27.3581 15.3843 27.1684 15.9765 27.1603 16.0016C27.1493 16.0362 27.1519 16.0739 27.1674 16.1065C27.1829 16.1391 27.21 16.1638 27.2429 16.1754C27.2758 16.1869 27.3117 16.1842 27.3427 16.168C27.3738 16.1517 27.3974 16.1231 27.4083 16.0886ZM26.7808 14.6446C27.1881 14.6192 27.6767 14.4497 27.6973 14.4425C27.7136 14.4367 27.7286 14.4277 27.7416 14.4159C27.7546 14.4041 27.7652 14.3897 27.7729 14.3735C27.7805 14.3574 27.7851 14.3398 27.7863 14.3218C27.7875 14.3039 27.7854 14.2858 27.7799 14.2687C27.7745 14.2516 27.7659 14.2357 27.7546 14.2221C27.7434 14.2085 27.7297 14.1973 27.7143 14.1893C27.699 14.1812 27.6823 14.1764 27.6651 14.1751C27.648 14.1739 27.6308 14.1762 27.6145 14.1819C27.6097 14.1834 27.1379 14.3473 26.7656 14.3706C26.4028 14.3928 25.9166 14.2095 25.9118 14.2076C25.8792 14.1952 25.8433 14.1968 25.8119 14.2122C25.7805 14.2276 25.7562 14.2555 25.7443 14.2897C25.7325 14.3239 25.734 14.3617 25.7487 14.3947C25.7633 14.4277 25.7899 14.4532 25.8224 14.4657C25.8446 14.4739 26.3636 14.6704 26.7808 14.6446ZM22.6435 17.34C22.6477 17.329 23.0616 16.2264 23.6237 15.4707C24.1723 14.7326 24.9275 14.4443 24.9349 14.4415C24.9511 14.4355 24.966 14.4262 24.9788 14.4141C24.9915 14.402 25.0019 14.3874 25.0093 14.3712C25.0167 14.3549 25.021 14.3372 25.0219 14.3192C25.0228 14.3012 25.0203 14.2832 25.0146 14.2662C25.0088 14.2492 25 14.2335 24.9885 14.2201C24.977 14.2067 24.9631 14.1958 24.9476 14.188C24.9321 14.1802 24.9153 14.1758 24.8982 14.1748C24.881 14.1739 24.8639 14.1765 24.8477 14.1825C24.8139 14.1951 24.0148 14.498 23.4175 15.3015C22.8318 16.0892 22.417 17.1931 22.3997 17.2399C22.3934 17.2567 22.3904 17.2746 22.3907 17.2927C22.3911 17.3108 22.3948 17.3286 22.4017 17.3451C22.4086 17.3617 22.4185 17.3766 22.4309 17.3891C22.4433 17.4016 22.4579 17.4115 22.4739 17.418C22.4899 17.4246 22.507 17.4278 22.5242 17.4275C22.5414 17.4271 22.5584 17.4232 22.5741 17.4159C22.5898 17.4087 22.6041 17.3983 22.616 17.3852C22.6279 17.3722 22.6373 17.3569 22.6435 17.34ZM20.4952 16.0047C21.0657 15.8051 21.5779 15.4161 21.5994 15.3997C21.6274 15.3782 21.6461 15.346 21.6515 15.3101C21.657 15.2742 21.6486 15.2374 21.6284 15.2079C21.608 15.1785 21.5773 15.1588 21.5431 15.1531C21.5089 15.1474 21.4739 15.1562 21.4458 15.1774C21.4407 15.1812 20.9435 15.558 20.4125 15.7441C19.8847 15.9291 19.2336 15.908 19.227 15.908C19.2099 15.9074 19.1928 15.9104 19.1767 15.9167C19.1606 15.923 19.1459 15.9326 19.1334 15.9449C19.1208 15.9572 19.1107 15.972 19.1036 15.9884C19.0965 16.0048 19.0925 16.0225 19.0919 16.0405C19.0914 16.0585 19.0941 16.0765 19.1002 16.0934C19.1062 16.1103 19.1153 16.1257 19.127 16.1389C19.1387 16.1521 19.1528 16.1627 19.1684 16.1702C19.184 16.1777 19.2009 16.1818 19.218 16.1824C19.2464 16.1834 19.9218 16.2054 20.4952 16.0047ZM32.0817 14.8315C32.0823 14.8283 32.1489 14.5297 32.2544 14.3301C32.339 14.1702 32.6444 13.9006 32.755 13.8104C32.7793 13.7871 32.7943 13.7549 32.7971 13.7204C32.7999 13.6859 32.7902 13.6516 32.7699 13.6242C32.7497 13.5969 32.7204 13.5785 32.6879 13.5729C32.6554 13.5672 32.6221 13.5745 32.5945 13.5935C32.5494 13.6302 32.1516 13.9596 32.0261 14.1966C31.9024 14.4305 31.8301 14.7558 31.8271 14.7693C31.8193 14.8048 31.8251 14.8421 31.8435 14.873C31.8618 14.9039 31.8911 14.9259 31.9248 14.9341C31.9586 14.9424 31.9941 14.9362 32.0235 14.9169C32.0529 14.8977 32.0739 14.8669 32.0817 14.8315Z\" fill=\"white\"/><path d=\"M66.04 17.38L66.66 19H69.18L63.58 4.6L58 19H60.52L61.12 17.38H66.04ZM61.88 15.36L63.58 10.5L65.28 15.36H61.88ZM77.7319 12.02C78.9319 11.72 80.0719 10.78 80.0719 8.94C80.0719 4.9 75.4119 5 75.4119 5H70.7519V19H75.4119C76.3519 19 80.2719 18.82 80.2719 14.98C80.2719 14.98 80.3719 12.56 77.7319 12.02ZM73.0719 10.84V7.32H75.4119C75.4119 7.32 77.7319 7.22 77.7319 9.1C77.7319 10.84 75.4119 10.84 75.4119 10.84H73.0719ZM75.4119 16.68H73.0719V13.18H75.4119C75.4119 13.18 77.9319 13.04 77.9319 14.92C77.9319 16.44 76.3919 16.68 75.4119 16.68ZM87.5627 15.2C90.4227 15.2 92.7627 12.86 92.7627 10C92.7627 7.14 90.4227 4.8 87.5627 4.8C84.7027 4.8 82.3627 7.14 82.3627 10C82.3627 12.86 84.7027 15.2 87.5627 15.2ZM87.5627 7.12C89.1627 7.12 90.4427 8.4 90.4427 10C90.4427 11.6 89.1627 12.88 87.5627 12.88C85.9627 12.88 84.6827 11.6 84.6827 10C84.6827 8.4 85.9627 7.12 87.5627 7.12ZM92.1227 19V16.68H82.8827V19H92.1227ZM102.897 19H105.637L101.837 12.92C103.197 12.54 104.917 11.56 104.917 9.08C104.917 5 100.237 5 100.237 5H95.5766V7.34L97.7966 10.84H95.5766V19H97.9166V13.16H99.2566L102.897 19ZM100.537 10.82L98.3566 7.34H100.237C100.237 7.34 102.577 7.34 102.577 9.08C102.577 10.46 101.157 10.76 100.537 10.82ZM110.863 7.14H112.423V5H106.963V7.14H108.523V16.86H106.883V19H112.503V16.86H110.863V7.14ZM127.215 11.04H122.535V13.26H124.875V15.28C124.015 16.26 122.775 16.86 121.375 16.86C118.795 16.86 116.715 15.42 116.715 12C116.715 8.94 118.795 7.14 121.375 7.14C122.655 7.14 123.835 7.66 124.675 8.5L126.315 6.86C125.055 5.58 123.315 4.8 121.375 4.8C117.515 4.8 114.375 7.84 114.375 12C114.375 16.58 117.315 19.2 121.075 19.2C122.735 19.2 123.915 18.8 125.055 17.74L125.175 19.06H127.215V11.04ZM132.604 7.34H139.604V5H130.264V19H139.604V16.66H132.604V13.16H138.424V10.84H132.604V7.34ZM153.681 19V5H151.361V14.96L144.381 5H142.021V19H144.361V9.04L151.321 19H153.681Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"header__nav\">\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<ul class=\"header__nav-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Авиабилеты</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Поиск попутчиков</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Энциклопедия туриста</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Кредит</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Виза</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__manager\">\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-photo\">\n\t\t\t\t\t\t\t\t\t<img src=\"img/manager.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__manager-status\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-name\">\n\t\t\t\t\t\t\t\t\t\tАнна Захаренко\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-position\">\n\t\t\t\t\t\t\t\t\t\tПерсональный менеджер\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"header__manager-button\">\n\t\t\t\t\t\t\t\t\t\tПомощь с выбором тура\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__contacts\">\n\t\t\t\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__contacts-phone\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__contacts-phone-number\">\n\t\t\t\t\t\t\t\t\t\t\t8-800-100-30-24\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"header__contacts-mail\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"header__contacts-social\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297437L8.4761 3.47847C8.47863 3.47697 8.48144 3.47584 8.48407 3.47425C7.68832 3.93212 7.19444 4.91134 7.19041 6.30559L7.12722 28.5902C7.11925 31.3872 9.08641 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3114 48.171 34.1174 47.6606C34.095 47.6748 34.0731 47.69 34.0501 47.7035L39.5238 44.5226C40.315 44.0627 40.8055 43.0851 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#155C92\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#1A6FB0\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#1D81CD\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.3361 44.8764L35.3992 22.5919Z\" fill=\"#1D81CD\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#3D99E2\"/><path d=\"M31.0059 14.9825L36.4795 11.8015C38.9138 13.2068 40.8807 16.6134 40.8729 19.411L35.3992 22.592C35.4071 19.7944 33.44 16.3879 31.0059 14.9825Z\" fill=\"#5AAAE7\"/><path d=\"M18.5229 27.7352L18.5367 22.8668L22.1951 24.9789L22.2054 21.3883C22.2172 17.2213 24.4386 16.232 27.6733 18.0996C29.2225 18.9939 30.5536 19.8949 30.942 20.1785L30.9296 24.5327L28.6858 23.2387C26.9271 22.2233 26.5838 22.9873 26.5797 24.3966L26.5709 27.5054L30.766 29.9274L30.2062 34.4807L26.5569 32.3738L26.5217 44.8656L22.1459 42.3392L22.1814 29.8475L18.5229 27.7352Z\" fill=\"#3D5A98\"/><path d=\"M22.2054 21.4862L22.1951 25.0768L18.5367 22.9647L18.5229 27.8331L22.1814 29.9453L22.1462 42.3344L26.522 44.8608L26.5571 32.4717L30.2063 34.5785L30.766 30.0253L26.5709 27.6032L26.5797 24.4944C26.5838 23.0851 26.927 22.3211 28.6858 23.3365L30.9296 24.6305L30.942 20.2763C30.5537 19.9926 29.2225 19.0918 27.6733 18.1974C24.4386 16.3299 22.2172 17.3193 22.2054 21.4862Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604657C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297438L8.4761 3.47847C8.47863 3.47697 8.48144 3.47585 8.48407 3.47426C7.68832 3.93213 7.19444 4.91135 7.19041 6.3056L7.12722 28.5902C7.11925 31.3872 9.08641 34.7944 11.5205 36.1997L30.9139 47.3965C32.174 48.1239 33.3114 48.1711 34.1174 47.6607C34.095 47.6748 34.0731 47.6901 34.0501 47.7036L39.5238 44.5227C40.315 44.0628 40.8055 43.0852 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#6F75E3\"/><path d=\"M22.1161 19.7619L18.8617 17.883C18.4276 17.6324 18.2094 17.7004 17.9771 17.8785C17.8427 17.9815 17.802 18.0754 18.0766 18.2948C18.6159 18.7236 18.9193 19.3016 18.9978 19.9689C19.1251 21.0398 19.113 22.031 19.0356 22.9871C19.0124 23.2642 18.9675 23.5313 18.8669 23.7447C18.7684 23.9543 18.6327 24.0104 18.4637 23.9129C18.3614 23.8538 18.2469 23.7383 18.1211 23.5664C17.8201 23.1545 17.6084 22.6952 17.4017 22.2378C16.6248 20.5205 16.0066 18.7948 15.5022 17.0649C15.3558 16.565 15.1041 16.1682 14.7221 15.9411C14.2515 15.6603 13.7816 15.3839 13.3118 15.1126C12.842 14.8414 12.3723 14.5752 11.9025 14.3147C11.3368 13.9988 11.1674 14.2183 11.3957 14.9404C12.4119 18.1461 13.544 21.3483 15.0239 24.5222C15.7844 26.1517 16.6595 27.7094 17.7887 29.1064C18.9239 30.5108 20.1376 31.496 21.4128 32.2323C21.5764 32.3267 21.7412 32.4172 21.9067 32.5038C22.5882 32.8615 22.7935 32.7744 22.8269 32.0135C22.8508 31.492 22.9044 30.9918 23.1344 30.6441C23.274 30.4335 23.4571 30.3935 23.6692 30.516C23.8009 30.592 23.9438 30.7307 24.0943 30.9302C24.2906 31.1909 24.4543 31.4711 24.6114 31.7592C24.9934 32.4626 25.3609 33.1726 25.7581 33.8699C26.2117 34.6654 26.7442 35.3058 27.3991 35.6839C27.4614 35.7198 27.5249 35.7536 27.5894 35.7846L30.4697 37.4492C30.9328 37.6808 31.1762 37.167 30.911 36.4194C30.7241 35.8928 30.4792 35.3791 30.2206 34.8694C29.6348 33.7202 28.9445 32.6282 28.2914 31.5143C27.7016 30.5102 27.665 30.1037 28.1431 29.6155C28.6634 29.0792 29.2249 28.6 29.7495 28.0703C30.24 27.5743 30.742 27.0889 31.0014 26.3079C31.1666 25.8097 31.0227 25.4652 30.4949 25.0572C30.4052 24.9872 30.3112 24.9312 30.2178 24.8774L27.0857 23.0664C27.077 23.0613 27.0684 23.0561 27.0599 23.0511C26.6898 22.8376 26.4825 22.9118 26.3485 23.2201C26.1632 23.6451 25.9715 24.0665 25.7502 24.4506C25.2499 25.3265 24.6904 26.1284 23.9081 26.6289C23.7629 26.7213 23.6049 26.8453 23.388 26.72C23.3467 26.6962 23.3033 26.6634 23.2575 26.6197C22.8983 26.2609 22.7947 25.5192 22.8012 25.2931L22.8101 21.1371C22.7415 20.5043 22.6287 20.1744 22.1161 19.7619Z\" fill=\"white\"/><path d=\"M39.5238 44.5223L34.0501 47.7033C34.8414 47.2434 35.332 46.2658 35.3359 44.8763L40.8096 41.6953C40.8056 43.0848 40.315 44.0625 39.5238 44.5223Z\" fill=\"#7C84E7\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8612 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#989FED\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.336 44.8764L35.3992 22.5919Z\" fill=\"#989FED\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#A8ADEF\"/><path d=\"M31.0059 14.9825L36.4796 11.8015C38.9138 13.2068 40.8808 16.6134 40.8729 19.411L35.3992 22.592C35.4072 19.7944 33.4401 16.3879 31.0059 14.9825Z\" fill=\"#C5C8F5\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4795 11.8015L17.0862 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.9499 0.297437L8.47604 3.47847C8.47857 3.47697 8.48138 3.47584 8.484 3.47425C7.68825 3.93212 7.19438 4.91134 7.19035 6.30559L7.12716 28.5902C7.11919 31.3872 9.08635 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3113 48.171 34.1173 47.6606C34.0949 47.6748 34.0731 47.69 34.05 47.7035L39.5237 44.5226C40.3149 44.0627 40.8054 43.0851 40.8095 41.6956L40.8727 19.411C40.8808 16.6133 38.9137 13.2068 36.4795 11.8015Z\" fill=\"#7F33AD\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#943EC7\"/><path d=\"M8.47601 3.47837L13.9497 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3874 3.07834 9.27758 3.01253 8.47601 3.47837Z\" fill=\"#A258CB\"/><path d=\"M35.3991 22.5919L40.8728 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#A258CB\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#B77FDA\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#D5B4E9\"/><path d=\"M20.692 34.1685C18.2847 32.7787 17.9996 32.6035 17.049 32.0044C16.1703 31.4514 15.6931 31.0066 15.3757 30.681C14.9554 30.2505 14.656 29.8527 14.3415 29.3079C14.027 28.7632 13.8325 28.3048 13.6701 27.7268C13.5475 27.2902 13.4025 26.6573 13.3651 25.6236C13.3252 24.5063 13.3168 24.1733 13.3246 21.4073C13.3325 18.6412 13.3425 18.3182 13.3887 17.2507C13.4319 16.264 13.58 15.8004 13.7046 15.5065C13.8698 15.1177 14.0662 14.8851 14.3828 14.7046C14.6994 14.5241 15 14.4728 15.4213 14.5282C15.7396 14.5697 16.2177 14.6764 17.0967 15.1382C18.0476 15.6369 18.3326 15.7909 20.74 17.1807C23.1478 18.5708 23.4328 18.746 24.3835 19.3451C25.2622 19.8981 25.7395 20.3429 26.0568 20.6685C26.4771 21.099 26.7764 21.4968 27.091 22.0416C27.4055 22.5863 27.5999 23.0447 27.7624 23.6228C27.8844 24.0591 28.03 24.6922 28.0674 25.7253C28.1073 26.8426 28.1157 27.1762 28.1079 29.9423C28.1 32.7084 28.09 33.0308 28.0437 34.0983C28.0006 35.0857 27.8519 35.5489 27.7279 35.8431C27.5627 36.2319 27.3663 36.4645 27.0497 36.645C26.7331 36.8255 26.4325 36.8768 26.0111 36.8214C25.6929 36.7799 25.2147 36.6732 24.3357 36.2113C23.385 35.7127 23.0998 35.5586 20.692 34.1685ZM20.7455 15.3144C18.2969 13.9007 17.9899 13.7354 17.0281 13.2304C16.0681 12.7264 15.4122 12.5237 14.8379 12.4481C14.2446 12.3709 13.7406 12.4351 13.2378 12.7217C12.735 13.0082 12.4253 13.4083 12.1928 13.9562C11.9679 14.4866 11.8135 15.1516 11.7667 16.2294C11.7192 17.3089 11.7079 17.6557 11.6999 20.4692C11.692 23.2828 11.7013 23.6415 11.7424 24.772C11.783 25.9002 11.9331 26.7412 12.1543 27.5291C12.3829 28.3432 12.6894 29.0989 13.189 29.9643C13.6885 30.8297 14.1905 31.4746 14.7823 32.0816C15.3553 32.6684 16.0101 33.2218 16.9698 33.8269C17.9313 34.4322 18.2381 34.6214 20.6869 36.0351C23.1361 37.4491 23.4431 37.6145 24.4048 38.1194C25.3644 38.6225 26.0207 38.8261 26.5945 38.9013C27.1884 38.9789 27.6924 38.9146 28.1952 38.6281C28.698 38.3416 29.0078 37.9415 29.2403 37.3936C29.4652 36.8632 29.6196 36.1982 29.6664 35.1203C29.7132 34.0405 29.7252 33.6941 29.7331 30.8806C29.7411 28.0669 29.7312 27.7079 29.6907 26.5778C29.6501 25.4496 29.5 24.6087 29.2787 23.8207C29.0502 23.0066 28.7437 22.2509 28.2441 21.3855C27.7445 20.5202 27.2426 19.8752 26.6501 19.2678C26.0777 18.6813 25.4223 18.1269 24.4632 17.5229C23.5016 16.9176 23.1946 16.7285 20.7455 15.3144Z\" fill=\"white\"/><path d=\"M20.7063 29.1284C19.0468 28.1703 17.7056 25.8472 17.7111 23.9398C17.7164 22.0323 19.0664 21.263 20.7259 22.221C22.3859 23.1794 23.7271 25.5025 23.7217 27.41C23.7162 29.3175 22.3663 30.0868 20.7063 29.1284ZM20.7311 20.3546C18.1745 18.8784 16.0944 20.0631 16.0861 23.0016C16.0777 25.9401 18.1443 29.5188 20.7009 30.9949C23.2582 32.4714 25.3376 31.2864 25.346 28.3479C25.3544 25.4094 23.2884 21.8309 20.7311 20.3546Z\" fill=\"white\"/><path d=\"M25.5486 21.6797C24.9508 21.3346 24.4646 21.6116 24.4627 22.2985C24.4607 22.9848 24.9436 23.8213 25.5414 24.1664C26.1386 24.5112 26.6248 24.2342 26.6267 23.5479C26.6288 22.861 26.1458 22.0244 25.5486 21.6797Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8018L17.0863 0.604901C15.8613 -0.10235 14.7514 -0.168068 13.95 0.297682L8.4761 3.47871C8.47863 3.47721 8.48144 3.47609 8.48407 3.4745C7.68832 3.93237 7.19444 4.91159 7.19041 6.30584L7.12722 28.5904C7.11925 31.3874 9.08641 34.7946 11.5205 36.1999L30.9139 47.3967C32.174 48.1241 33.3114 48.1712 34.1174 47.6609C34.095 47.675 34.0731 47.6903 34.0501 47.7038L39.5238 44.5229C40.315 44.063 40.8055 43.0854 40.8095 41.6958L40.8727 19.4113C40.8809 16.6136 38.9137 13.2071 36.4796 11.8018Z\" fill=\"#40A559\"/><path d=\"M39.5236 44.5223L34.0499 47.7033C34.8412 47.2434 35.3319 46.2658 35.3357 44.8762L40.8094 41.6953C40.8055 43.0848 40.3148 44.0625 39.5236 44.5223Z\" fill=\"#4DBA69\"/><path d=\"M8.47595 3.47837L13.9497 0.297437C14.7511 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3873 3.07834 9.27752 3.01253 8.47595 3.47837Z\" fill=\"#65C27C\"/><path d=\"M35.3991 22.5919L40.8727 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#65C27C\"/><path d=\"M11.6124 3.78552L17.0861 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#7BCC92\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#94D6A8\"/><path d=\"M27.061 21.937C25.4139 19.0818 23.2184 16.7643 20.8771 15.4115C16.0507 12.6251 12.1103 14.8707 12.0926 20.4152C12.0876 22.1891 12.4858 24.1521 13.247 26.1201L11.9907 30.6165L16.6354 31.896C17.9126 33.4362 19.3512 34.6905 20.8161 35.5362L20.8201 35.5384C25.6445 38.3238 29.585 36.0782 29.6037 30.5341C29.6113 27.8461 28.7091 24.7926 27.061 21.937ZM20.8249 33.8394L20.822 33.8377C19.5163 33.084 18.236 31.9412 17.121 30.5337L16.8563 30.1997L14.0999 29.4402L14.8431 26.7787L14.6711 26.3618C13.9472 24.6111 13.5659 22.849 13.5714 21.27C13.5864 16.6607 16.8613 14.7945 20.8754 17.1121C22.8184 18.235 24.6432 20.1607 26.0125 22.5345C27.3818 24.9082 28.1326 27.446 28.1252 29.6792C28.1099 34.2886 24.8351 36.1548 20.8249 33.8394Z\" fill=\"white\"/><path d=\"M24.8335 29.8822C24.6152 29.6298 23.5416 28.4006 23.3416 28.2013C23.2543 28.1145 23.1776 28.0416 23.1065 28.0005C23.0141 27.9472 22.9316 27.948 22.8487 28.0432C22.7022 28.2102 22.2809 28.5339 22.1532 28.629C22.0802 28.6827 22.007 28.6885 21.9171 28.6364C21.8495 28.5974 21.7725 28.5259 21.679 28.4178C21.4607 28.1654 20.7562 27.4926 19.9231 26.154C19.2751 25.1124 18.8383 24.036 18.7118 23.7103C18.5843 23.3851 18.6992 23.3151 18.8084 23.2528C18.9079 23.1973 19.0279 23.0854 19.1381 23.0015C19.2483 22.9186 19.2845 22.8344 19.3579 22.7091C19.4313 22.5826 19.3957 22.4156 19.3407 22.2575C19.2866 22.0999 18.8529 20.6107 18.6717 20.0018C18.5235 19.5055 18.3732 19.3989 18.2504 19.3279C18.2439 19.3242 18.2374 19.3205 18.2309 19.3168C18.2134 19.3066 18.1969 19.2972 18.1813 19.287C18.0531 19.2053 17.9074 19.1199 17.7617 19.0358C17.6159 18.9516 17.3787 18.8773 17.177 19.0123C16.9762 19.1491 16.409 19.431 16.4055 20.6679C16.4021 21.9047 17.1826 23.5529 17.2919 23.7837C17.4003 24.0151 18.827 27.3815 21.0185 29.737C21.5395 30.2982 21.9461 30.6874 22.2634 30.9868C22.5647 31.2707 22.8505 31.4735 23.1106 31.6238C23.303 31.7349 23.4814 31.8172 23.6416 31.8821C24.0614 32.0518 24.9373 32.0208 25.1207 31.5386C25.3049 31.0568 25.3064 30.5533 25.2523 30.4181C25.1982 30.2816 25.0517 30.1333 24.8335 29.8822Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-center\">\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tПоиск туров\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\t🔥 Горящие туры\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТурагенствам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-right\">\n\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__phone\">\n\t\t\t\t\t\t\t<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.6579 9.42675L8.94794 6.96275C8.68194 6.72075 8.27128 6.73341 8.02061 6.99141L6.42528 8.63208C6.04128 8.55875 5.26928 8.31808 4.47461 7.52541C3.67994 6.73008 3.43928 5.95608 3.36794 5.57475L5.00728 3.97875C5.26594 3.72808 5.27794 3.31808 5.03594 3.05141L2.57261 0.342081C2.33061 0.0747474 1.91928 0.0494141 1.64528 0.284081L0.198611 1.52475C0.0832773 1.64075 0.0146105 1.79408 0.00527717 1.95741C-0.00472283 2.12408 -0.195389 6.07208 2.86594 9.13475C5.53661 11.8047 8.88194 12.0001 9.80328 12.0001C9.93794 12.0001 10.0206 11.9961 10.0426 11.9947C10.2059 11.9854 10.3593 11.9167 10.4746 11.8007L11.7146 10.3534C11.9506 10.0794 11.9246 9.66875 11.6579 9.42675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t8 800 100 30 24\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<button class=\"header__sign-in\">\n\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6666 8.00008L7.33329 5.33341L7.33329 7.33341L2.66663 7.33341L2.66663 8.66675L7.33329 8.66675L7.33329 10.6667L10.6666 8.00008Z\" fill=\"white\"/><path d=\"M12 2.66675L12 13.3334L7.33337 13.3334L7.33337 14.6667L12 14.6667C12.7354 14.6667 13.3334 14.0687 13.3334 13.3334L13.3334 2.66675C13.3334 1.93141 12.7354 1.33341 12 1.33341L7.33337 1.33341L7.33337 2.66675L12 2.66675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>Вход</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__region\">\n\t\t\t\t\t\t\tМосква\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1 class=\"header__title title\">\n\t\t\t\t\tПоиск туров онлайн <br>по всем туроператорам\n\t\t\t\t</h1>\n\t\t\t\t<div class=\"header__filter\">\n\t\t\t\t\t<form action=\"\" class=\"filter\">\n\t\t\t\t\t\t<div class=\"filter__item filter__item--country\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Куда вы хотите полететь?</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-country\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--country\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇻 Мальдивы\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇸 Испания\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇦🇿 Азербайджан\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇬 Египет\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇰 Северная Македония\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--from\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Отправление</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input\" value=\"Москва\">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--date\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Даты вылета</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input filter__item-input--date datepicker-here\"\n\t\t\t\t\t\t\t\t\tdata-range=\"true\"\n\t\t\t\t\t\t\t\t\tdata-multiple-dates-separator=\" - \"\n\t\t\t\t\t\t\t\t\tplaceholder = \"07.05.2021 - 14.05.2021\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<span class=\"filter__item-icon\">\n\t\t\t\t\t\t\t\t\t<svg width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M-0.000976562 3.2V4.8V14.4C-0.000976562 15.2824 0.716623 16 1.59902 16H12.799C13.6814 16 14.399 15.2824 14.399 14.4V4.8V3.2C14.399 2.3176 13.6814 1.6 12.799 1.6H11.199V0H9.59902V1.6H4.79902V0H3.19902V1.6H1.59902C0.716623 1.6 -0.000976562 2.3176 -0.000976562 3.2ZM12.8006 14.4H1.59902V4.8H12.799L12.8006 14.4Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--nights\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Количество ночей</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-nights\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--nights\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 4 до 11\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 1 до 2\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 2 до 4\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 4 до 11\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 11 до 20\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 20 до 31\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tот 31\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--tourists\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Туристов</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-tourists\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--tourists\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\t2 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t1 турист\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t2 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t3 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t4 туриста\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t5 туристов\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\tбольше\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--submit\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"filter__item-submit\" value=\"Полетели!\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t"}]}},{"type":"logic","token":{"type":"Twig.logic.type.else","match":["else"],"output":[{"type":"raw","value":"\t\t\t\t<div class=\"header__menu header__menu--inner\">\n\t\t\t\t\t<div class=\"header__menu-left\">\n\t\t\t\t\t\t<button class=\"header__burger\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__logo\">\n\t\t\t\t\t\t\t<svg width=\"175\" height=\"27\" viewBox=\"0 0 175 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.2928 13.276L32.951 13.276L32.951 15.0347C32.951 15.0347 33.8221 15.6362 34.3724 16.5619C34.9226 17.4875 35.2434 19.5701 35.2434 19.5701C35.2434 19.5701 36.0458 18.9915 37.1006 18.737C38.1554 18.4825 39.5077 18.5983 39.5077 18.5983C39.5077 18.5983 40.1957 17.7188 41.5023 17.3488C42.8092 16.9786 43.9554 17.1869 43.9554 17.1869C43.9554 17.1869 44.6891 16.2148 46.1791 15.8678C47.6695 15.5204 48.655 15.7752 48.655 15.7752C48.655 15.7752 49.6868 14.8496 50.1453 14.5025C50.6038 14.1555 52.0712 13.415 52.0712 13.415C52.0712 13.415 50.902 12.9751 50.2143 12.628C49.5266 12.281 48.4948 11.2628 48.4948 11.2628C48.4948 11.2628 47.3486 11.6101 45.9957 11.147C44.6431 10.6842 43.8637 9.66597 43.8637 9.66597C43.8637 9.66597 42.9006 10.2443 41.3879 9.8511C39.8746 9.45793 39.5307 8.4165 39.5307 8.4165C39.5307 8.4165 38.5222 8.64776 37.1236 8.27751C35.725 7.90755 35.0603 7.14352 35.0603 7.14352C35.0603 7.14352 34.9456 8.85611 34.5788 9.59632C34.2119 10.3368 33.1114 11.6095 33.1114 11.6095C33.1114 11.6095 34.6245 11.6789 35.4271 11.7714C36.2295 11.864 36.7338 12.0491 37.2383 12.3268C37.7429 12.6048 38.2928 13.276 38.2928 13.276ZM29.5124 13.3918L29.5124 14.9883C29.5124 14.9883 28.8017 15.3121 28.5496 15.7288C28.2975 16.1452 28.1828 17.2327 28.1828 17.2327L25.8214 17.2327L25.8214 15.0344L0.24656 15.0344L0.24656 13.3915L29.5124 13.3915L29.5124 13.3918ZM32.8369 15.0347L32.8369 11.6098L32.3327 11.6098L32.3327 15.0347L32.8369 15.0347ZM31.9658 15.0347L31.9658 11.6098L31.4616 11.6098L31.4616 15.0347L31.9658 15.0347ZM31.0487 15.0347L31.0487 11.6098L30.5445 11.6098L30.5445 15.0347L31.0487 15.0347Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.0385 4.53869C20.0165 4.60591 21.6935 4.94231 21.6935 4.94231C21.6935 4.94231 20.4177 5.60935 19.7109 6.16416L20.1333 6.33323C20.3623 6.42411 20.5786 6.51239 20.7841 6.5975C21.123 6.40766 21.5197 6.37275 21.5197 6.37275C21.5197 6.37275 21.3306 6.54471 21.1826 6.76513C21.9263 7.0822 22.515 7.35975 23.0136 7.61682C23.5367 7.341 24.4689 7.25618 24.4689 7.25618C24.4689 7.25618 23.9961 7.50949 23.505 7.87936C24.5432 8.4535 25.2149 8.95522 26.3526 9.63005C26.6369 9.79883 26.9225 9.96761 27.2077 10.1332C27.8899 9.90356 28.663 9.86433 28.663 9.86433C28.663 9.86433 28.0901 10.1032 27.658 10.3923C29.2269 11.2847 30.7519 12.0368 31.9199 12.1421C33.3311 12.2694 34.4082 12.1961 34.855 12.0737L34.855 14.8564L35.3673 14.8564L35.3673 11.5371C35.3673 11.5371 35.1111 11.2904 35.018 11.0885C34.9248 10.8868 34.3426 9.89981 34.3426 9.89981L33.9231 10.124C33.9231 10.124 33.9231 10.3259 34.0166 10.5726C34.1098 10.8193 34.366 11.201 34.366 11.201C34.366 11.201 33.9468 10.999 33.4575 10.5279C32.8694 9.96155 32.6689 9.24316 31.6056 8.06113L31.4812 8.4134C31.4812 8.4134 31.3949 8.11912 31.332 7.76742C31.1957 7.62576 31.0474 7.47776 30.8847 7.32311C30.8643 7.68433 30.891 8.09806 30.891 8.09806C30.891 8.09806 30.6336 7.65 30.6213 7.07874C30.3915 6.86981 30.1566 6.66625 29.9166 6.46825C28.3319 5.1561 26.8841 4.20084 25.0624 3.59871C25.0783 3.86486 25.0989 4.13071 25.1244 4.39616C25.1244 4.39616 24.7095 3.805 24.4578 3.41638C23.6749 3.20057 22.8198 3.04362 21.8565 2.94668C21.4751 2.9083 21.1074 2.87917 20.7515 2.85839C20.8648 3.07802 20.9848 3.2944 21.1113 3.50726C21.3672 3.93368 21.8795 4.51676 21.8795 4.51676C21.8795 4.51676 20.8776 4.3148 19.5269 4.22507C18.1756 4.13506 16.522 4.42674 16.522 4.42674C16.522 4.42674 18.06 4.47146 19.0385 4.53869Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M38.3997 12.9833L33.0429 12.9833L33.0429 14.7252L32.9285 14.7252L32.9285 11.333L33.2041 11.333C33.2041 11.333 34.7214 11.4017 35.5263 11.4934C36.3309 11.5851 36.8366 11.7684 37.3425 12.0435C37.8482 12.3185 38.3997 12.9833 38.3997 12.9833ZM29.5946 14.7252L29.5946 13.0979L0.246518 13.0979L0.246518 11.333L24.8245 11.333C25.5597 11.6664 26.2442 11.8967 26.8359 11.9518C28.2287 12.0818 29.2918 12.0069 29.7327 11.8819L29.7327 14.7252L29.5946 14.7252ZM32.4228 11.333L32.4228 14.7252L32.0549 14.7252L32.0549 11.333L32.4228 11.333ZM31.5493 11.333L31.5493 14.7252L31.1353 14.7252L31.1353 11.333L31.5493 11.333ZM30.6296 11.333L30.6296 14.7252L30.2384 14.7252L30.2384 11.333L30.6296 11.333ZM10.6739 4.27387C11.6125 4.50764 13.0212 5.11079 14.786 5.84306C15.4836 5.27588 16.7427 4.59461 16.7427 4.59461C16.7427 4.59461 15.0874 4.25088 14.1224 4.18219C13.1567 4.1138 11.6397 4.06752 11.6397 4.06752C11.6397 4.06752 13.272 3.76948 14.6053 3.86145C15.9384 3.95313 16.9273 4.15949 16.9273 4.15949C16.9273 4.15949 16.4213 3.56371 16.1691 3.12801C16.0431 2.91222 15.9133 2.66223 15.8139 2.46501C12.8879 2.28961 10.8152 2.7604 8.92651 4.0908C9.43218 4.04481 9.66195 4.02182 10.6739 4.27387ZM18.5309 7.59591C19.0156 7.21798 19.4822 6.95915 19.4822 6.95915C19.4822 6.95915 18.5622 7.04582 18.0459 7.32764C18.2089 7.41476 18.3705 7.50419 18.5309 7.59591ZM26.4027 8.14098L26.5254 7.78104C26.4412 7.68435 26.3516 7.58411 26.2555 7.48064C26.2942 7.70293 26.3433 7.92328 26.4027 8.14098ZM25.554 6.77726C25.5662 7.36096 25.8202 7.81877 25.8202 7.81877C25.8202 7.81877 25.7936 7.39603 25.814 7.02695C25.7315 6.94559 25.6448 6.86246 25.554 6.77726ZM20.1289 4.03597C20.1289 4.03597 20.0858 3.5755 20.0677 3.22116C19.8737 3.15454 19.675 3.09263 19.471 3.03485C19.7197 3.43194 20.1289 4.03597 20.1289 4.03597ZM22.6298 10.1639C23.0559 9.86848 23.6216 9.62439 23.6216 9.62439C23.6216 9.62439 22.8586 9.66448 22.1853 9.89913C22.3335 9.98816 22.4819 10.0766 22.6298 10.1639ZM15.8453 6.28584C15.9816 6.34421 16.112 6.4014 16.2386 6.45712C16.3846 6.2316 16.5712 6.0562 16.5712 6.0562C16.5712 6.0562 16.1797 6.09187 15.8453 6.28584ZM49.2668 12.7572C49.2858 12.7287 49.2928 12.6939 49.2862 12.6604C49.2795 12.6268 49.2598 12.5973 49.2313 12.5782C49.2289 12.5767 48.9726 12.4028 48.7611 12.0868C48.5441 11.7622 48.4098 11.3651 48.4086 11.3613C48.3978 11.3288 48.3744 11.302 48.3437 11.2867C48.313 11.2713 48.2774 11.2688 48.2448 11.2797C48.2122 11.2905 48.1853 11.3138 48.1699 11.3444C48.1546 11.375 48.152 11.4105 48.1629 11.443C48.1688 11.4607 48.3093 11.876 48.5458 12.2301C48.7871 12.5912 49.0755 12.7849 49.0876 12.7931C49.1162 12.8118 49.151 12.8185 49.1846 12.8118C49.2181 12.8051 49.2477 12.7854 49.2668 12.7572ZM47.8772 12.3786C47.8994 12.3533 47.9106 12.3202 47.9084 12.2867C47.9063 12.2531 47.8909 12.2218 47.8657 12.1994C47.8409 12.1773 47.6061 11.9845 46.9801 11.9603C46.367 11.9368 45.9868 12.0529 45.9711 12.0579C45.9383 12.0681 45.911 12.0908 45.8951 12.1211C45.8791 12.1513 45.8759 12.1867 45.8861 12.2193C45.8963 12.252 45.9191 12.2792 45.9494 12.2951C45.9798 12.311 46.0152 12.3142 46.048 12.3041C46.0515 12.3032 46.4055 12.1965 46.9703 12.218C47.5011 12.2383 47.6939 12.3919 47.6957 12.3934C47.7219 12.4151 47.7555 12.4257 47.7895 12.423C47.8234 12.4202 47.8549 12.4043 47.8772 12.3786ZM45.0845 12.6667C45.0972 12.6554 45.1075 12.6417 45.1149 12.6264C45.1222 12.6111 45.1264 12.5945 45.1274 12.5776C45.1283 12.5607 45.1258 12.5437 45.1201 12.5278C45.1145 12.5118 45.1057 12.4971 45.0943 12.4845C45.0905 12.4798 44.6853 12.0293 44.3967 11.5426C44.106 11.0521 43.7645 10.2376 43.7612 10.2293C43.748 10.1977 43.7228 10.1727 43.691 10.1596C43.6593 10.1466 43.6236 10.1467 43.5919 10.1599C43.5603 10.1731 43.5351 10.1982 43.5221 10.2299C43.509 10.2615 43.5091 10.2971 43.5223 10.3286C43.5365 10.3626 43.8739 11.1676 44.1741 11.6738C44.476 12.1835 44.8846 12.6381 44.9018 12.6569C44.9248 12.6824 44.9569 12.6977 44.9912 12.6995C45.0254 12.7013 45.059 12.6895 45.0845 12.6667ZM43.25 11.8088C43.2789 11.7909 43.2995 11.7623 43.3075 11.7293C43.3154 11.6963 43.3099 11.6615 43.2922 11.6325C43.2807 11.6142 43.003 11.175 42.0704 10.8891C41.1421 10.6043 40.5625 10.8136 40.5383 10.8227C40.4718 10.8475 40.438 10.9215 40.4629 10.9881C40.4877 11.0547 40.5619 11.0886 40.6288 11.0645C40.6341 11.0624 41.1572 10.8787 41.9944 11.1355C42.8224 11.3896 43.0699 11.7643 43.0722 11.7681C43.0906 11.7968 43.1195 11.8171 43.1528 11.8247C43.186 11.8323 43.2209 11.8266 43.25 11.8088ZM39.3957 11.9244C39.4067 11.892 39.4044 11.8566 39.3892 11.8259C39.3741 11.7953 39.3474 11.7718 39.3149 11.7608C39.3099 11.759 38.7992 11.5806 38.2143 11.0114C37.2899 10.1117 36.9892 8.66336 36.9862 8.64862C36.9795 8.61508 36.9596 8.58558 36.9311 8.56662C36.9025 8.54766 36.8676 8.54078 36.8339 8.5475C36.8003 8.55423 36.7707 8.574 36.7517 8.60247C36.7326 8.63094 36.7257 8.66578 36.7325 8.69932C36.7449 8.76182 37.0504 10.2393 38.0333 11.1959C38.6638 11.8094 39.2091 11.9975 39.2318 12.0051C39.2479 12.0106 39.2649 12.0128 39.2819 12.0117C39.2988 12.0106 39.3154 12.0062 39.3306 11.9987C39.3458 11.9912 39.3594 11.9808 39.3706 11.968C39.3817 11.9552 39.3903 11.9404 39.3957 11.9244ZM38.3997 12.9833C38.3997 12.9833 38.8137 13.2123 39.5953 13.2123C40.3771 13.2123 41.2279 12.8471 41.6185 12.7999C42.377 12.7082 43.3419 13.1531 44.0327 13.2123C45.3661 13.327 46.6997 13.052 46.6997 13.052C46.6997 13.052 47.0901 13.3412 47.4585 13.35C48.424 13.3727 49.2517 13.0979 49.8955 13.052C50.5392 13.006 51.6428 13.1436 51.6428 13.1436C51.6428 13.1436 50.9302 13.4417 50.1714 13.9688C49.4129 14.4959 48.6999 15.1376 48.6999 15.1376C48.6999 15.1376 47.5502 14.9083 46.263 15.2523C44.9754 15.596 44.0099 16.4898 44.0099 16.4898C44.0099 16.4898 42.5385 16.3295 41.5499 16.6272C40.5614 16.9253 39.4578 17.9108 39.4578 17.9108C39.4578 17.9108 38.4 17.8191 37.5495 17.9794C36.6988 18.1398 35.5721 18.7129 35.5721 18.7129C35.5721 18.7129 35.3882 17.223 34.8364 16.2378C34.2846 15.2523 33.6639 14.6335 33.6639 14.6335C33.6639 14.6335 34.5147 14.7252 35.3193 14.6105C36.1239 14.4959 36.7218 14.4042 37.2506 14.0604C37.779 13.7167 38.3997 12.9833 38.3997 12.9833Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.4083 16.0886C27.4101 16.0829 27.5888 15.5266 27.8222 15.2591C28.0544 14.9925 28.5373 14.7828 28.5421 14.7806C28.5719 14.7653 28.5951 14.7386 28.607 14.706C28.6188 14.6734 28.6184 14.6373 28.6058 14.605C28.5932 14.5726 28.5694 14.5466 28.5392 14.532C28.509 14.5175 28.4747 14.5155 28.4432 14.5266C28.4211 14.536 27.9017 14.7614 27.6295 15.0735C27.3581 15.3843 27.1684 15.9765 27.1603 16.0016C27.1493 16.0362 27.1519 16.0739 27.1674 16.1065C27.1829 16.1391 27.21 16.1638 27.2429 16.1754C27.2758 16.1869 27.3117 16.1842 27.3427 16.168C27.3738 16.1517 27.3974 16.1231 27.4083 16.0886ZM26.7808 14.6446C27.1881 14.6192 27.6767 14.4497 27.6973 14.4425C27.7136 14.4367 27.7286 14.4277 27.7416 14.4159C27.7546 14.4041 27.7652 14.3897 27.7729 14.3735C27.7805 14.3574 27.7851 14.3398 27.7863 14.3218C27.7875 14.3039 27.7854 14.2858 27.7799 14.2687C27.7745 14.2516 27.7659 14.2357 27.7546 14.2221C27.7434 14.2085 27.7297 14.1973 27.7143 14.1893C27.699 14.1812 27.6823 14.1764 27.6651 14.1751C27.648 14.1739 27.6308 14.1762 27.6145 14.1819C27.6097 14.1834 27.1379 14.3473 26.7656 14.3706C26.4028 14.3928 25.9166 14.2095 25.9118 14.2076C25.8792 14.1952 25.8433 14.1968 25.8119 14.2122C25.7805 14.2276 25.7562 14.2555 25.7443 14.2897C25.7325 14.3239 25.734 14.3617 25.7487 14.3947C25.7633 14.4277 25.7899 14.4532 25.8224 14.4657C25.8446 14.4739 26.3636 14.6704 26.7808 14.6446ZM22.6435 17.34C22.6477 17.329 23.0616 16.2264 23.6237 15.4707C24.1723 14.7326 24.9275 14.4443 24.9349 14.4415C24.9511 14.4355 24.966 14.4262 24.9788 14.4141C24.9915 14.402 25.0019 14.3874 25.0093 14.3712C25.0167 14.3549 25.021 14.3372 25.0219 14.3192C25.0228 14.3012 25.0203 14.2832 25.0146 14.2662C25.0088 14.2492 25 14.2335 24.9885 14.2201C24.977 14.2067 24.9631 14.1958 24.9476 14.188C24.9321 14.1802 24.9153 14.1758 24.8982 14.1748C24.881 14.1739 24.8639 14.1765 24.8477 14.1825C24.8139 14.1951 24.0148 14.498 23.4175 15.3015C22.8318 16.0892 22.417 17.1931 22.3997 17.2399C22.3934 17.2567 22.3904 17.2746 22.3907 17.2927C22.3911 17.3108 22.3948 17.3286 22.4017 17.3451C22.4086 17.3617 22.4185 17.3766 22.4309 17.3891C22.4433 17.4016 22.4579 17.4115 22.4739 17.418C22.4899 17.4246 22.507 17.4278 22.5242 17.4275C22.5414 17.4271 22.5584 17.4232 22.5741 17.4159C22.5898 17.4087 22.6041 17.3983 22.616 17.3852C22.6279 17.3722 22.6373 17.3569 22.6435 17.34ZM20.4952 16.0047C21.0657 15.8051 21.5779 15.4161 21.5994 15.3997C21.6274 15.3782 21.6461 15.346 21.6515 15.3101C21.657 15.2742 21.6486 15.2374 21.6284 15.2079C21.608 15.1785 21.5773 15.1588 21.5431 15.1531C21.5089 15.1474 21.4739 15.1562 21.4458 15.1774C21.4407 15.1812 20.9435 15.558 20.4125 15.7441C19.8847 15.9291 19.2336 15.908 19.227 15.908C19.2099 15.9074 19.1928 15.9104 19.1767 15.9167C19.1606 15.923 19.1459 15.9326 19.1334 15.9449C19.1208 15.9572 19.1107 15.972 19.1036 15.9884C19.0965 16.0048 19.0925 16.0225 19.0919 16.0405C19.0914 16.0585 19.0941 16.0765 19.1002 16.0934C19.1062 16.1103 19.1153 16.1257 19.127 16.1389C19.1387 16.1521 19.1528 16.1627 19.1684 16.1702C19.184 16.1777 19.2009 16.1818 19.218 16.1824C19.2464 16.1834 19.9218 16.2054 20.4952 16.0047ZM32.0817 14.8315C32.0823 14.8283 32.1489 14.5297 32.2544 14.3301C32.339 14.1702 32.6444 13.9006 32.755 13.8104C32.7793 13.7871 32.7943 13.7549 32.7971 13.7204C32.7999 13.6859 32.7902 13.6516 32.7699 13.6242C32.7497 13.5969 32.7204 13.5785 32.6879 13.5729C32.6554 13.5672 32.6221 13.5745 32.5945 13.5935C32.5494 13.6302 32.1516 13.9596 32.0261 14.1966C31.9024 14.4305 31.8301 14.7558 31.8271 14.7693C31.8193 14.8048 31.8251 14.8421 31.8435 14.873C31.8618 14.9039 31.8911 14.9259 31.9248 14.9341C31.9586 14.9424 31.9941 14.9362 32.0235 14.9169C32.0529 14.8977 32.0739 14.8669 32.0817 14.8315Z\" fill=\"white\"/><path d=\"M66.04 17.38L66.66 19H69.18L63.58 4.6L58 19H60.52L61.12 17.38H66.04ZM61.88 15.36L63.58 10.5L65.28 15.36H61.88ZM77.7319 12.02C78.9319 11.72 80.0719 10.78 80.0719 8.94C80.0719 4.9 75.4119 5 75.4119 5H70.7519V19H75.4119C76.3519 19 80.2719 18.82 80.2719 14.98C80.2719 14.98 80.3719 12.56 77.7319 12.02ZM73.0719 10.84V7.32H75.4119C75.4119 7.32 77.7319 7.22 77.7319 9.1C77.7319 10.84 75.4119 10.84 75.4119 10.84H73.0719ZM75.4119 16.68H73.0719V13.18H75.4119C75.4119 13.18 77.9319 13.04 77.9319 14.92C77.9319 16.44 76.3919 16.68 75.4119 16.68ZM87.5627 15.2C90.4227 15.2 92.7627 12.86 92.7627 10C92.7627 7.14 90.4227 4.8 87.5627 4.8C84.7027 4.8 82.3627 7.14 82.3627 10C82.3627 12.86 84.7027 15.2 87.5627 15.2ZM87.5627 7.12C89.1627 7.12 90.4427 8.4 90.4427 10C90.4427 11.6 89.1627 12.88 87.5627 12.88C85.9627 12.88 84.6827 11.6 84.6827 10C84.6827 8.4 85.9627 7.12 87.5627 7.12ZM92.1227 19V16.68H82.8827V19H92.1227ZM102.897 19H105.637L101.837 12.92C103.197 12.54 104.917 11.56 104.917 9.08C104.917 5 100.237 5 100.237 5H95.5766V7.34L97.7966 10.84H95.5766V19H97.9166V13.16H99.2566L102.897 19ZM100.537 10.82L98.3566 7.34H100.237C100.237 7.34 102.577 7.34 102.577 9.08C102.577 10.46 101.157 10.76 100.537 10.82ZM110.863 7.14H112.423V5H106.963V7.14H108.523V16.86H106.883V19H112.503V16.86H110.863V7.14ZM127.215 11.04H122.535V13.26H124.875V15.28C124.015 16.26 122.775 16.86 121.375 16.86C118.795 16.86 116.715 15.42 116.715 12C116.715 8.94 118.795 7.14 121.375 7.14C122.655 7.14 123.835 7.66 124.675 8.5L126.315 6.86C125.055 5.58 123.315 4.8 121.375 4.8C117.515 4.8 114.375 7.84 114.375 12C114.375 16.58 117.315 19.2 121.075 19.2C122.735 19.2 123.915 18.8 125.055 17.74L125.175 19.06H127.215V11.04ZM132.604 7.34H139.604V5H130.264V19H139.604V16.66H132.604V13.16H138.424V10.84H132.604V7.34ZM153.681 19V5H151.361V14.96L144.381 5H142.021V19H144.361V9.04L151.321 19H153.681Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"header__nav\">\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<ul class=\"header__nav-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Авиабилеты</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Поиск попутчиков</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Энциклопедия туриста</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Кредит</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class=\"header__nav-list-item\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Виза</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__manager\">\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-photo\">\n\t\t\t\t\t\t\t\t\t<img src=\"img/manager.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__manager-status\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-name\">\n\t\t\t\t\t\t\t\t\t\tАнна Захаренко\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"header__manager-position\">\n\t\t\t\t\t\t\t\t\t\tПерсональный менеджер\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button class=\"header__manager-button\">\n\t\t\t\t\t\t\t\t\t\tПомощь с выбором тура\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"header__nav-item\">\n\t\t\t\t\t\t\t\t<div class=\"header__contacts\">\n\t\t\t\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__contacts-phone\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.4869 14.1399L13.4219 10.4439C13.0229 10.0809 12.4069 10.0999 12.0309 10.4869L9.63792 12.9479C9.06192 12.8379 7.90392 12.4769 6.71192 11.2879C5.51992 10.0949 5.15892 8.93388 5.05192 8.36188L7.51092 5.96788C7.89892 5.59188 7.91692 4.97688 7.55392 4.57688L3.85892 0.512877C3.49592 0.111877 2.87892 0.0738771 2.46792 0.425877L0.297916 2.28688C0.124916 2.46088 0.0219158 2.69088 0.00791575 2.93588C-0.00708425 3.18588 -0.293084 9.10788 4.29892 13.7019C8.30492 17.7069 13.3229 17.9999 14.7049 17.9999C14.9069 17.9999 15.0309 17.9939 15.0639 17.9919C15.3089 17.9779 15.5389 17.8749 15.7119 17.7009L17.5719 15.5299C17.9259 15.1189 17.8869 14.5029 17.4869 14.1399Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span class=\"header__contacts-phone-number\">\n\t\t\t\t\t\t\t\t\t\t\t8-800-100-30-24\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:mail@aborigen.ru\" class=\"header__contacts-mail\">\n\t\t\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 4H6C4.897 4 4 4.897 4 6V11H6V8L12.4 12.8C12.578 12.933 12.789 13 13 13C13.211 13 13.422 12.933 13.6 12.8L20 8V17H12V19H20C21.103 19 22 18.103 22 17V6C22 4.897 21.103 4 20 4ZM13 10.75L6.666 6H19.334L13 10.75Z\" fill=\"#303030\"/><path d=\"M2 12H9V14H2V12ZM4 15H10V17H4V15ZM7 18H11V20H7V18Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\tmail@aborigen.ru\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"header__contacts-social\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297437L8.4761 3.47847C8.47863 3.47697 8.48144 3.47584 8.48407 3.47425C7.68832 3.93212 7.19444 4.91134 7.19041 6.30559L7.12722 28.5902C7.11925 31.3872 9.08641 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3114 48.171 34.1174 47.6606C34.095 47.6748 34.0731 47.69 34.0501 47.7035L39.5238 44.5226C40.315 44.0627 40.8055 43.0851 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#155C92\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#1A6FB0\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#1D81CD\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.3361 44.8764L35.3992 22.5919Z\" fill=\"#1D81CD\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#3D99E2\"/><path d=\"M31.0059 14.9825L36.4795 11.8015C38.9138 13.2068 40.8807 16.6134 40.8729 19.411L35.3992 22.592C35.4071 19.7944 33.44 16.3879 31.0059 14.9825Z\" fill=\"#5AAAE7\"/><path d=\"M18.5229 27.7352L18.5367 22.8668L22.1951 24.9789L22.2054 21.3883C22.2172 17.2213 24.4386 16.232 27.6733 18.0996C29.2225 18.9939 30.5536 19.8949 30.942 20.1785L30.9296 24.5327L28.6858 23.2387C26.9271 22.2233 26.5838 22.9873 26.5797 24.3966L26.5709 27.5054L30.766 29.9274L30.2062 34.4807L26.5569 32.3738L26.5217 44.8656L22.1459 42.3392L22.1814 29.8475L18.5229 27.7352Z\" fill=\"#3D5A98\"/><path d=\"M22.2054 21.4862L22.1951 25.0768L18.5367 22.9647L18.5229 27.8331L22.1814 29.9453L22.1462 42.3344L26.522 44.8608L26.5571 32.4717L30.2063 34.5785L30.766 30.0253L26.5709 27.6032L26.5797 24.4944C26.5838 23.0851 26.927 22.3211 28.6858 23.3365L30.9296 24.6305L30.942 20.2763C30.5537 19.9926 29.2225 19.0918 27.6733 18.1974C24.4386 16.3299 22.2172 17.3193 22.2054 21.4862Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8015L17.0863 0.604657C15.8613 -0.102594 14.7514 -0.168313 13.95 0.297438L8.4761 3.47847C8.47863 3.47697 8.48144 3.47585 8.48407 3.47426C7.68832 3.93213 7.19444 4.91135 7.19041 6.3056L7.12722 28.5902C7.11925 31.3872 9.08641 34.7944 11.5205 36.1997L30.9139 47.3965C32.174 48.1239 33.3114 48.1711 34.1174 47.6607C34.095 47.6748 34.0731 47.6901 34.0501 47.7036L39.5238 44.5227C40.315 44.0628 40.8055 43.0852 40.8095 41.6956L40.8727 19.411C40.8809 16.6133 38.9137 13.2068 36.4796 11.8015Z\" fill=\"#6F75E3\"/><path d=\"M22.1161 19.7619L18.8617 17.883C18.4276 17.6324 18.2094 17.7004 17.9771 17.8785C17.8427 17.9815 17.802 18.0754 18.0766 18.2948C18.6159 18.7236 18.9193 19.3016 18.9978 19.9689C19.1251 21.0398 19.113 22.031 19.0356 22.9871C19.0124 23.2642 18.9675 23.5313 18.8669 23.7447C18.7684 23.9543 18.6327 24.0104 18.4637 23.9129C18.3614 23.8538 18.2469 23.7383 18.1211 23.5664C17.8201 23.1545 17.6084 22.6952 17.4017 22.2378C16.6248 20.5205 16.0066 18.7948 15.5022 17.0649C15.3558 16.565 15.1041 16.1682 14.7221 15.9411C14.2515 15.6603 13.7816 15.3839 13.3118 15.1126C12.842 14.8414 12.3723 14.5752 11.9025 14.3147C11.3368 13.9988 11.1674 14.2183 11.3957 14.9404C12.4119 18.1461 13.544 21.3483 15.0239 24.5222C15.7844 26.1517 16.6595 27.7094 17.7887 29.1064C18.9239 30.5108 20.1376 31.496 21.4128 32.2323C21.5764 32.3267 21.7412 32.4172 21.9067 32.5038C22.5882 32.8615 22.7935 32.7744 22.8269 32.0135C22.8508 31.492 22.9044 30.9918 23.1344 30.6441C23.274 30.4335 23.4571 30.3935 23.6692 30.516C23.8009 30.592 23.9438 30.7307 24.0943 30.9302C24.2906 31.1909 24.4543 31.4711 24.6114 31.7592C24.9934 32.4626 25.3609 33.1726 25.7581 33.8699C26.2117 34.6654 26.7442 35.3058 27.3991 35.6839C27.4614 35.7198 27.5249 35.7536 27.5894 35.7846L30.4697 37.4492C30.9328 37.6808 31.1762 37.167 30.911 36.4194C30.7241 35.8928 30.4792 35.3791 30.2206 34.8694C29.6348 33.7202 28.9445 32.6282 28.2914 31.5143C27.7016 30.5102 27.665 30.1037 28.1431 29.6155C28.6634 29.0792 29.2249 28.6 29.7495 28.0703C30.24 27.5743 30.742 27.0889 31.0014 26.3079C31.1666 25.8097 31.0227 25.4652 30.4949 25.0572C30.4052 24.9872 30.3112 24.9312 30.2178 24.8774L27.0857 23.0664C27.077 23.0613 27.0684 23.0561 27.0599 23.0511C26.6898 22.8376 26.4825 22.9118 26.3485 23.2201C26.1632 23.6451 25.9715 24.0665 25.7502 24.4506C25.2499 25.3265 24.6904 26.1284 23.9081 26.6289C23.7629 26.7213 23.6049 26.8453 23.388 26.72C23.3467 26.6962 23.3033 26.6634 23.2575 26.6197C22.8983 26.2609 22.7947 25.5192 22.8012 25.2931L22.8101 21.1371C22.7415 20.5043 22.6287 20.1744 22.1161 19.7619Z\" fill=\"white\"/><path d=\"M39.5238 44.5223L34.0501 47.7033C34.8414 47.2434 35.332 46.2658 35.3359 44.8763L40.8096 41.6953C40.8056 43.0848 40.315 44.0625 39.5238 44.5223Z\" fill=\"#7C84E7\"/><path d=\"M8.47607 3.47837L13.9498 0.297437C14.7512 -0.168313 15.8612 -0.102594 17.0861 0.604656L11.6124 3.78559C10.3875 3.07834 9.27764 3.01253 8.47607 3.47837Z\" fill=\"#989FED\"/><path d=\"M35.3992 22.5919L40.8729 19.4109L40.8097 41.6955L35.336 44.8764L35.3992 22.5919Z\" fill=\"#989FED\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#A8ADEF\"/><path d=\"M31.0059 14.9825L36.4796 11.8015C38.9138 13.2068 40.8808 16.6134 40.8729 19.411L35.3992 22.592C35.4072 19.7944 33.4401 16.3879 31.0059 14.9825Z\" fill=\"#C5C8F5\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4795 11.8015L17.0862 0.604656C15.8613 -0.102594 14.7514 -0.168313 13.9499 0.297437L8.47604 3.47847C8.47857 3.47697 8.48138 3.47584 8.484 3.47425C7.68825 3.93212 7.19438 4.91134 7.19035 6.30559L7.12716 28.5902C7.11919 31.3872 9.08635 34.7943 11.5205 36.1997L30.9139 47.3964C32.174 48.1238 33.3113 48.171 34.1173 47.6606C34.0949 47.6748 34.0731 47.69 34.05 47.7035L39.5237 44.5226C40.3149 44.0627 40.8054 43.0851 40.8095 41.6956L40.8727 19.411C40.8808 16.6133 38.9137 13.2068 36.4795 11.8015Z\" fill=\"#7F33AD\"/><path d=\"M39.5239 44.5223L34.0502 47.7033C34.8414 47.2434 35.3321 46.2658 35.336 44.8762L40.8096 41.6953C40.8057 43.0848 40.315 44.0625 39.5239 44.5223Z\" fill=\"#943EC7\"/><path d=\"M8.47601 3.47837L13.9497 0.297437C14.7512 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3874 3.07834 9.27758 3.01253 8.47601 3.47837Z\" fill=\"#A258CB\"/><path d=\"M35.3991 22.5919L40.8728 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#A258CB\"/><path d=\"M11.6124 3.78552L17.0862 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#B77FDA\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#D5B4E9\"/><path d=\"M20.692 34.1685C18.2847 32.7787 17.9996 32.6035 17.049 32.0044C16.1703 31.4514 15.6931 31.0066 15.3757 30.681C14.9554 30.2505 14.656 29.8527 14.3415 29.3079C14.027 28.7632 13.8325 28.3048 13.6701 27.7268C13.5475 27.2902 13.4025 26.6573 13.3651 25.6236C13.3252 24.5063 13.3168 24.1733 13.3246 21.4073C13.3325 18.6412 13.3425 18.3182 13.3887 17.2507C13.4319 16.264 13.58 15.8004 13.7046 15.5065C13.8698 15.1177 14.0662 14.8851 14.3828 14.7046C14.6994 14.5241 15 14.4728 15.4213 14.5282C15.7396 14.5697 16.2177 14.6764 17.0967 15.1382C18.0476 15.6369 18.3326 15.7909 20.74 17.1807C23.1478 18.5708 23.4328 18.746 24.3835 19.3451C25.2622 19.8981 25.7395 20.3429 26.0568 20.6685C26.4771 21.099 26.7764 21.4968 27.091 22.0416C27.4055 22.5863 27.5999 23.0447 27.7624 23.6228C27.8844 24.0591 28.03 24.6922 28.0674 25.7253C28.1073 26.8426 28.1157 27.1762 28.1079 29.9423C28.1 32.7084 28.09 33.0308 28.0437 34.0983C28.0006 35.0857 27.8519 35.5489 27.7279 35.8431C27.5627 36.2319 27.3663 36.4645 27.0497 36.645C26.7331 36.8255 26.4325 36.8768 26.0111 36.8214C25.6929 36.7799 25.2147 36.6732 24.3357 36.2113C23.385 35.7127 23.0998 35.5586 20.692 34.1685ZM20.7455 15.3144C18.2969 13.9007 17.9899 13.7354 17.0281 13.2304C16.0681 12.7264 15.4122 12.5237 14.8379 12.4481C14.2446 12.3709 13.7406 12.4351 13.2378 12.7217C12.735 13.0082 12.4253 13.4083 12.1928 13.9562C11.9679 14.4866 11.8135 15.1516 11.7667 16.2294C11.7192 17.3089 11.7079 17.6557 11.6999 20.4692C11.692 23.2828 11.7013 23.6415 11.7424 24.772C11.783 25.9002 11.9331 26.7412 12.1543 27.5291C12.3829 28.3432 12.6894 29.0989 13.189 29.9643C13.6885 30.8297 14.1905 31.4746 14.7823 32.0816C15.3553 32.6684 16.0101 33.2218 16.9698 33.8269C17.9313 34.4322 18.2381 34.6214 20.6869 36.0351C23.1361 37.4491 23.4431 37.6145 24.4048 38.1194C25.3644 38.6225 26.0207 38.8261 26.5945 38.9013C27.1884 38.9789 27.6924 38.9146 28.1952 38.6281C28.698 38.3416 29.0078 37.9415 29.2403 37.3936C29.4652 36.8632 29.6196 36.1982 29.6664 35.1203C29.7132 34.0405 29.7252 33.6941 29.7331 30.8806C29.7411 28.0669 29.7312 27.7079 29.6907 26.5778C29.6501 25.4496 29.5 24.6087 29.2787 23.8207C29.0502 23.0066 28.7437 22.2509 28.2441 21.3855C27.7445 20.5202 27.2426 19.8752 26.6501 19.2678C26.0777 18.6813 25.4223 18.1269 24.4632 17.5229C23.5016 16.9176 23.1946 16.7285 20.7455 15.3144Z\" fill=\"white\"/><path d=\"M20.7063 29.1284C19.0468 28.1703 17.7056 25.8472 17.7111 23.9398C17.7164 22.0323 19.0664 21.263 20.7259 22.221C22.3859 23.1794 23.7271 25.5025 23.7217 27.41C23.7162 29.3175 22.3663 30.0868 20.7063 29.1284ZM20.7311 20.3546C18.1745 18.8784 16.0944 20.0631 16.0861 23.0016C16.0777 25.9401 18.1443 29.5188 20.7009 30.9949C23.2582 32.4714 25.3376 31.2864 25.346 28.3479C25.3544 25.4094 23.2884 21.8309 20.7311 20.3546Z\" fill=\"white\"/><path d=\"M25.5486 21.6797C24.9508 21.3346 24.4646 21.6116 24.4627 22.2985C24.4607 22.9848 24.9436 23.8213 25.5414 24.1664C26.1386 24.5112 26.6248 24.2342 26.6267 23.5479C26.6288 22.861 26.1458 22.0244 25.5486 21.6797Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0)\"><path d=\"M36.4796 11.8018L17.0863 0.604901C15.8613 -0.10235 14.7514 -0.168068 13.95 0.297682L8.4761 3.47871C8.47863 3.47721 8.48144 3.47609 8.48407 3.4745C7.68832 3.93237 7.19444 4.91159 7.19041 6.30584L7.12722 28.5904C7.11925 31.3874 9.08641 34.7946 11.5205 36.1999L30.9139 47.3967C32.174 48.1241 33.3114 48.1712 34.1174 47.6609C34.095 47.675 34.0731 47.6903 34.0501 47.7038L39.5238 44.5229C40.315 44.063 40.8055 43.0854 40.8095 41.6958L40.8727 19.4113C40.8809 16.6136 38.9137 13.2071 36.4796 11.8018Z\" fill=\"#40A559\"/><path d=\"M39.5236 44.5223L34.0499 47.7033C34.8412 47.2434 35.3319 46.2658 35.3357 44.8762L40.8094 41.6953C40.8055 43.0848 40.3148 44.0625 39.5236 44.5223Z\" fill=\"#4DBA69\"/><path d=\"M8.47595 3.47837L13.9497 0.297437C14.7511 -0.168313 15.8611 -0.102594 17.086 0.604656L11.6123 3.78559C10.3873 3.07834 9.27752 3.01253 8.47595 3.47837Z\" fill=\"#65C27C\"/><path d=\"M35.3991 22.5919L40.8727 19.4109L40.8096 41.6955L35.3359 44.8764L35.3991 22.5919Z\" fill=\"#65C27C\"/><path d=\"M11.6124 3.78552L17.0861 0.604492L36.4795 11.8013L31.0058 14.9823L11.6124 3.78552Z\" fill=\"#7BCC92\"/><path d=\"M31.0058 14.9825L36.4795 11.8015C38.9137 13.2068 40.8807 16.6134 40.8728 19.411L35.3991 22.592C35.4071 19.7944 33.4399 16.3879 31.0058 14.9825Z\" fill=\"#94D6A8\"/><path d=\"M27.061 21.937C25.4139 19.0818 23.2184 16.7643 20.8771 15.4115C16.0507 12.6251 12.1103 14.8707 12.0926 20.4152C12.0876 22.1891 12.4858 24.1521 13.247 26.1201L11.9907 30.6165L16.6354 31.896C17.9126 33.4362 19.3512 34.6905 20.8161 35.5362L20.8201 35.5384C25.6445 38.3238 29.585 36.0782 29.6037 30.5341C29.6113 27.8461 28.7091 24.7926 27.061 21.937ZM20.8249 33.8394L20.822 33.8377C19.5163 33.084 18.236 31.9412 17.121 30.5337L16.8563 30.1997L14.0999 29.4402L14.8431 26.7787L14.6711 26.3618C13.9472 24.6111 13.5659 22.849 13.5714 21.27C13.5864 16.6607 16.8613 14.7945 20.8754 17.1121C22.8184 18.235 24.6432 20.1607 26.0125 22.5345C27.3818 24.9082 28.1326 27.446 28.1252 29.6792C28.1099 34.2886 24.8351 36.1548 20.8249 33.8394Z\" fill=\"white\"/><path d=\"M24.8335 29.8822C24.6152 29.6298 23.5416 28.4006 23.3416 28.2013C23.2543 28.1145 23.1776 28.0416 23.1065 28.0005C23.0141 27.9472 22.9316 27.948 22.8487 28.0432C22.7022 28.2102 22.2809 28.5339 22.1532 28.629C22.0802 28.6827 22.007 28.6885 21.9171 28.6364C21.8495 28.5974 21.7725 28.5259 21.679 28.4178C21.4607 28.1654 20.7562 27.4926 19.9231 26.154C19.2751 25.1124 18.8383 24.036 18.7118 23.7103C18.5843 23.3851 18.6992 23.3151 18.8084 23.2528C18.9079 23.1973 19.0279 23.0854 19.1381 23.0015C19.2483 22.9186 19.2845 22.8344 19.3579 22.7091C19.4313 22.5826 19.3957 22.4156 19.3407 22.2575C19.2866 22.0999 18.8529 20.6107 18.6717 20.0018C18.5235 19.5055 18.3732 19.3989 18.2504 19.3279C18.2439 19.3242 18.2374 19.3205 18.2309 19.3168C18.2134 19.3066 18.1969 19.2972 18.1813 19.287C18.0531 19.2053 17.9074 19.1199 17.7617 19.0358C17.6159 18.9516 17.3787 18.8773 17.177 19.0123C16.9762 19.1491 16.409 19.431 16.4055 20.6679C16.4021 21.9047 17.1826 23.5529 17.2919 23.7837C17.4003 24.0151 18.827 27.3815 21.0185 29.737C21.5395 30.2982 21.9461 30.6874 22.2634 30.9868C22.5647 31.2707 22.8505 31.4735 23.1106 31.6238C23.303 31.7349 23.4814 31.8172 23.6416 31.8821C24.0614 32.0518 24.9373 32.0208 25.1207 31.5386C25.3049 31.0568 25.3064 30.5533 25.2523 30.4181C25.1982 30.2816 25.0517 30.1333 24.8335 29.8822Z\" fill=\"white\"/></g><defs><clipPath id=\"clip0\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-center\">\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tПоиск туров\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\t🔥 Горящие туры\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТуры по странам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__menu-item\">\n\t\t\t\t\t\t\tТурагенствам\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"header__menu-right\">\n\t\t\t\t\t\t<a href=\"tel:88001003024\" class=\"header__phone\">\n\t\t\t\t\t\t\t<svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.6579 9.42675L8.94794 6.96275C8.68194 6.72075 8.27128 6.73341 8.02061 6.99141L6.42528 8.63208C6.04128 8.55875 5.26928 8.31808 4.47461 7.52541C3.67994 6.73008 3.43928 5.95608 3.36794 5.57475L5.00728 3.97875C5.26594 3.72808 5.27794 3.31808 5.03594 3.05141L2.57261 0.342081C2.33061 0.0747474 1.91928 0.0494141 1.64528 0.284081L0.198611 1.52475C0.0832773 1.64075 0.0146105 1.79408 0.00527717 1.95741C-0.00472283 2.12408 -0.195389 6.07208 2.86594 9.13475C5.53661 11.8047 8.88194 12.0001 9.80328 12.0001C9.93794 12.0001 10.0206 11.9961 10.0426 11.9947C10.2059 11.9854 10.3593 11.9167 10.4746 11.8007L11.7146 10.3534C11.9506 10.0794 11.9246 9.66875 11.6579 9.42675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t8 800 100 30 24\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<button class=\"header__sign-in\">\n\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.6666 8.00008L7.33329 5.33341L7.33329 7.33341L2.66663 7.33341L2.66663 8.66675L7.33329 8.66675L7.33329 10.6667L10.6666 8.00008Z\" fill=\"white\"/><path d=\"M12 2.66675L12 13.3334L7.33337 13.3334L7.33337 14.6667L12 14.6667C12.7354 14.6667 13.3334 14.0687 13.3334 13.3334L13.3334 2.66675C13.3334 1.93141 12.7354 1.33341 12 1.33341L7.33337 1.33341L7.33337 2.66675L12 2.66675Z\" fill=\"white\"/></svg>\n\t\t\t\t\t\t\t<span>Вход</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<a href=\"#\" class=\"header__region\">\n\t\t\t\t\t\t\tМосква\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1 class=\"header__title header__title--inner title\">\n\t\t\t\t\tТуры в Таиланд — страна улыбок и вечного лета ждет вас!\n\t\t\t\t</h1>\n\t\t\t\t<div class=\"header__descr\">\n\t\t\t\t\tНаслаждайтесь южным солнцем и теплом, пока в Украине все мерзнут и мечтают о весне. Экзотическая еда, белоснежные пляжи и ласковое море на краю мира — ваш идеальный отдых в Тайланде!\n\t\t\t\t</div>\n\t\t\t\t<div class=\"header__filter\">\n\t\t\t\t\t<form action=\"\" class=\"filter filter--inner\">\n\t\t\t\t\t\t<div class=\"filter__item filter__item--country filter__item--inner\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Куда вы хотите полететь?</span>\n\t\t\t\t\t\t\t\t<div class=\"filter__item-country\">\n\t\t\t\t\t\t\t\t\t<div class=\"select select--country\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__header select__header--inner\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__current\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<svg class=\"select__icon\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.73455 7.20482C6.33863 7.63342 5.66137 7.63342 5.26545 7.20482L0.622375 2.17855C0.0307251 1.53807 0.484997 0.499999 1.35693 0.499999L10.6431 0.5C11.515 0.5 11.9693 1.53807 11.3776 2.17855L6.73455 7.20482Z\" fill=\"#303030\"/></svg>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"select__body select__body--close\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇮🇳 Индия\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇻 Мальдивы\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇸 Испания\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇦🇿 Азербайджан\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇪🇬 Египет\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"select__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t🇲🇰 Северная Македония\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--name filter__item--inner-name\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Имя</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input\" placeholder=\"Ваше имя\">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--phone filter__item--inner\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"filter__item-descr\">\n\t\t\t\t\t\t\t\t<span class=\"filter__descr\">Ваш номер телефона?</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"filter__item-input\" placeholder=\"+7 (999)-999-99-99\">\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"filter__item filter__item--submit filter__item--inner-submit\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"filter__item-submit filter__item-submit--inner\" value=\"Получить предложение &rarr;\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t"}]}},{"type":"raw","value":"\t\t</div>\n\t</header>\n\n"}]}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/blocks/resorts.twig":
/*!******************************************!*\
  !*** ./src/template/blocks/resorts.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<section class=\"resorts\">\n\t<div class=\"resorts__main\">\n\t\t<h2 class=\"resorts__title title\">\n\t\t\tГлавные курорты города Тайланд\n\t\t</h2>\n\t\t<div class=\"resorts__descr\">\n\t\t\tМы подобрали только проверенные отели для незабываемого отпуска — вас уже ждут золотистые пляжи и роскошное турецкое море!\n\t\t</div>\n\t\t<div class=\"resorts__wrap\">\n\t\t\t<div class=\"progress\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n\t\t\t\t<span class=\"progress-fill\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"resorts__slider slider\">\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"}],
    template = twig({"id":"$resolved:c65c90f8e8189688d8118532fddf53fa2b25fdeae31ab9416bc408f0fc6301d66faa12fbd1b7941ef5e1c7cb1a309f7eceaa08bb7baf47933f4be0f186fe44e2:resorts.twig","data":[{"type":"raw","value":"<section class=\"resorts\">\n\t<div class=\"resorts__main\">\n\t\t<h2 class=\"resorts__title title\">\n\t\t\tГлавные курорты города Тайланд\n\t\t</h2>\n\t\t<div class=\"resorts__descr\">\n\t\t\tМы подобрали только проверенные отели для незабываемого отпуска — вас уже ждут золотистые пляжи и роскошное турецкое море!\n\t\t</div>\n\t\t<div class=\"resorts__wrap\">\n\t\t\t<div class=\"progress\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n\t\t\t\t<span class=\"progress-fill\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"resorts__slider slider\">\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"resorts__slider-item slide\">\n\t\t\t\t\t<div class=\"resorts__item-wrap\">\n\t\t\t\t\t\t<div class=\"resorts__item-left\">\n\t\t\t\t\t\t\t<img src=\"img/phyket.jpg\" alt=\"\" class=\"resorts__item-img\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-note\">\n\t\t\t\t\t\t\t\t<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z\" fill=\"black\"/><path d=\"M11 11H13V17H11V11ZM11 7H13V9H11V7Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t<span>Считается, что лучшие пляжи находятся в западной части острова.</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"resorts__item-right\">\n\t\t\t\t\t\t\t<div class=\"resorts__item-country\">\n\t\t\t\t\t\t\t\t🇹🇭 Тайланд\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-city\">\n\t\t\t\t\t\t\t\tПхукет\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-descr\">\n\t\t\t\t\t\t\t\tГород Пхукет на острове с одноименным названием – столица провинции Пхукет в Таиланде. Улица Таланг в районе старого города знаменита разноцветными магазинчиками в зданиях XIX века и архитектурой в китайско-португальском стиле. Особняк семьи Чинпрача был построен в 1903 году по заказу зажиточного торговца оловом.\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"resorts__item-tabs\">\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-buttons\">\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button resorts__item-button--inactive\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.24472 9C5.24472 11.0708 6.92922 12.7553 8.99997 12.7553C11.0707 12.7553 12.7552 11.0708 12.7552 9C12.7552 6.92925 11.0707 5.24475 8.99997 5.24475C6.92922 5.24475 5.24472 6.92925 5.24472 9ZM8.99997 6.74475C10.2435 6.74475 11.2552 7.7565 11.2552 9C11.2552 10.2435 10.2435 11.2553 8.99997 11.2553C7.75647 11.2553 6.74472 10.2435 6.74472 9C6.74472 7.7565 7.75647 6.74475 8.99997 6.74475ZM8.24847 14.25H9.74847V16.5H8.24847V14.25ZM8.24847 1.5H9.74847V3.75H8.24847V1.5ZM1.49847 8.25H3.74847V9.75H1.49847V8.25ZM14.2485 8.25H16.4985V9.75H14.2485V8.25Z\" fill=\"black\"/><path d=\"M3.16431 13.7725L4.75482 12.181L5.8158 13.2413L4.22528 14.8328L3.16431 13.7725Z\" fill=\"black\"/><path d=\"M12.1802 4.75781L13.7717 3.16626L14.8323 4.22691L13.2409 5.81845L12.1802 4.75781Z\" fill=\"black\"/><path d=\"M4.75629 5.81885L3.16577 4.22739L4.22674 3.16704L5.81726 4.7585L4.75629 5.81885Z\" fill=\"black\"/><path d=\"M14.8318 13.7725L13.7711 14.8331L12.1796 13.2416L13.2402 12.181L14.8318 13.7725Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tПогода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.208 8.334C13.8802 5.7525 11.67 3.75 9 3.75C6.933 3.75 5.1375 4.95825 4.31775 6.8625C2.70675 7.344 1.5 8.865 1.5 10.5C1.5 12.5677 3.18225 14.25 5.25 14.25H13.5C15.1545 14.25 16.5 12.9045 16.5 11.25C16.5 9.84 15.5212 8.6535 14.208 8.334ZM13.5 12.75H5.25C4.0095 12.75 3 11.7405 3 10.5C3 9.447 3.89925 8.433 5.00475 8.23875L5.4405 8.16225L5.5845 7.74375C6.11175 6.2055 7.42125 5.25 9 5.25C11.0677 5.25 12.75 6.93225 12.75 9V9.75H13.5C14.3273 9.75 15 10.4227 15 11.25C15 12.0773 14.3273 12.75 13.5 12.75Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tОсадки\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"resorts__item-button\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.497 6.75C5.55675 6.75 6.117 6.18975 6.52575 5.78025C6.89325 5.41275 7.074 5.25 7.49475 5.25C7.9155 5.25 8.09625 5.41275 8.46375 5.78025C8.8725 6.18975 9.43275 6.75 10.4932 6.75C11.5545 6.75 12.1155 6.18975 12.5258 5.78025C12.894 5.41275 13.0747 5.25 13.497 5.25C13.9193 5.25 14.1 5.41275 14.4683 5.78025C14.8778 6.18975 15.4388 6.75 16.5 6.75V5.25C16.0778 5.25 15.897 5.08725 15.5287 4.71975C15.1193 4.31025 14.5583 3.75 13.497 3.75C12.4358 3.75 11.8755 4.31025 11.4653 4.719C11.097 5.08725 10.917 5.25 10.4932 5.25C10.0717 5.25 9.89175 5.08725 9.52425 4.71975C9.1155 4.31025 8.55525 3.75 7.49475 3.75C6.43425 3.75 5.874 4.31025 5.46525 4.71975C5.09775 5.08725 4.91775 5.25 4.497 5.25C4.07625 5.25 3.89625 5.08725 3.52875 4.71975C3.12 4.31025 2.55975 3.75 1.5 3.75V5.25C1.92075 5.25 2.10075 5.41275 2.46825 5.78025C2.877 6.18975 3.43725 6.75 4.497 6.75ZM4.497 10.5C5.55675 10.5 6.117 9.93975 6.52575 9.53025C6.89325 9.16275 7.074 9 7.49475 9C7.9155 9 8.09625 9.16275 8.46375 9.53025C8.8725 9.93975 9.43275 10.5 10.4932 10.5C11.5545 10.5 12.1155 9.93975 12.5258 9.53025C12.894 9.16275 13.0747 9 13.497 9C13.9193 9 14.1 9.16275 14.4683 9.53025C14.8778 9.93975 15.4388 10.5 16.5 10.5V9C16.0778 9 15.897 8.83725 15.5287 8.46975C15.1193 8.06025 14.5583 7.5 13.497 7.5C12.4358 7.5 11.8755 8.06025 11.4653 8.469C11.097 8.83725 10.917 9 10.4932 9C10.0717 9 9.89175 8.83725 9.52425 8.46975C9.1155 8.06025 8.55525 7.5 7.49475 7.5C6.43425 7.5 5.874 8.06025 5.46525 8.46975C5.09775 8.83725 4.91775 9 4.497 9C4.07625 9 3.89625 8.83725 3.52875 8.46975C3.12 8.06025 2.55975 7.5 1.5 7.5V9C1.92075 9 2.10075 9.16275 2.46825 9.53025C2.877 9.93975 3.43725 10.5 4.497 10.5ZM4.497 14.25C5.55675 14.25 6.117 13.6898 6.52575 13.2803C6.89325 12.9128 7.074 12.75 7.49475 12.75C7.9155 12.75 8.09625 12.9128 8.46375 13.2803C8.8725 13.6898 9.43275 14.25 10.4932 14.25C11.5545 14.25 12.1155 13.6898 12.5258 13.2803C12.894 12.9128 13.0747 12.75 13.497 12.75C13.9193 12.75 14.1 12.9128 14.4683 13.2803C14.8778 13.6898 15.4388 14.25 16.5 14.25V12.75C16.0778 12.75 15.897 12.5872 15.5287 12.2197C15.1193 11.8102 14.5583 11.25 13.497 11.25C12.4358 11.25 11.8755 11.8103 11.4653 12.219C11.097 12.5872 10.917 12.75 10.4932 12.75C10.0717 12.75 9.89175 12.5872 9.52425 12.2197C9.1155 11.8102 8.55525 11.25 7.49475 11.25C6.43425 11.25 5.874 11.8102 5.46525 12.2197C5.09775 12.5872 4.91775 12.75 4.497 12.75C4.07625 12.75 3.89625 12.5872 3.52875 12.2197C3.12 11.8102 2.55975 11.25 1.5 11.25V12.75C1.92075 12.75 2.10075 12.9128 2.46825 13.2803C2.877 13.6898 3.43725 14.25 4.497 14.25Z\" fill=\"black\"/></svg>\n\t\t\t\t\t\t\t\t\t\tВода\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"resorts__item-contents\">\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--weather\" data-num='1'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>24</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>27</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>21</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>42</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>16</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>25</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>20</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>35</span> °C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--rainfall resorts__item-content--hide\" data-num='2'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 2°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-content resorts__item-content--water resorts__item-content--hide\" data-num='3'>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tЯнв\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>31</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tФев\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМар\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАпр\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tМай\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>32</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюн\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tИюл\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tАвг\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tСен\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tОкт\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>33</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tНоя\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-month\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-value\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>30</span> 3°C\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-column\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"resorts__item-count\">\n\t\t\t\t\t\t\t\t\t\t\t\tДек\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/blocks/subscribe.twig":
/*!********************************************!*\
  !*** ./src/template/blocks/subscribe.twig ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"<section class=\"subscribe\">\n\t<div class=\"subscribe__main\">\n\t\t<div class=\"subscribe__logo\">\n\t\t\t<img src=\"img/subscribe-logo.svg\" alt=\"\">\n\t\t</div>\n\t\t<h3 class=\"subscribe__title\">\n\t\t\tПоймай горящий тур 🔥\n\t\t</h3>\n\t\t<div class=\"subscribe__descr\">\n\t\t\tПодпишись на нашу рассылку и первым получай туры по выгодным ценам\n\t\t</div>\n\t\t<form action=\"\" class=\"subscribe__form\">\n\t\t\t<input type=\"text\" class=\"subscribe__input\" placeholder=\"+7 (999)-999-99-99\">\n\t\t\t<label for=\"\" class=\"subscribe__label\">\n\t\t\t\t<input type=\"submit\" class=\"subscribe__submit\" value=\"Полетели!\">\n\t\t\t</label>\n\t\t</form>\n\t\t<div class=\"subscribe__descr\">\n\t\t\tОставьте ваш телефон и наш менеджер свяжется с вами в ближайшее время\n\t\t</div>\n\t</div>\n</section>"}],
    template = twig({"id":"$resolved:832d75d985b74af74b9aa41c0085be67fa22cb4374d98d760a8aa7c8ecddc119b421422df25d026fa0a39d2a8fabc6b13d2b2903028f096bf86c3b2501adde23:subscribe.twig","data":[{"type":"raw","value":"<section class=\"subscribe\">\n\t<div class=\"subscribe__main\">\n\t\t<div class=\"subscribe__logo\">\n\t\t\t<img src=\"img/subscribe-logo.svg\" alt=\"\">\n\t\t</div>\n\t\t<h3 class=\"subscribe__title\">\n\t\t\tПоймай горящий тур 🔥\n\t\t</h3>\n\t\t<div class=\"subscribe__descr\">\n\t\t\tПодпишись на нашу рассылку и первым получай туры по выгодным ценам\n\t\t</div>\n\t\t<form action=\"\" class=\"subscribe__form\">\n\t\t\t<input type=\"text\" class=\"subscribe__input\" placeholder=\"+7 (999)-999-99-99\">\n\t\t\t<label for=\"\" class=\"subscribe__label\">\n\t\t\t\t<input type=\"submit\" class=\"subscribe__submit\" value=\"Полетели!\">\n\t\t\t</label>\n\t\t</form>\n\t\t<div class=\"subscribe__descr\">\n\t\t\tОставьте ваш телефон и наш менеджер свяжется с вами в ближайшее время\n\t\t</div>\n\t</div>\n</section>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/layouts/layout.twig":
/*!******************************************!*\
  !*** ./src/template/layouts/layout.twig ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"raw","value":"\n<!DOCTYPE html>\n<html>\n<head>\n\t<meta name=\"viewport\" content=\"width=device-width\">\n\t<meta name=\"MobileOptimized\" content=\"375\"/>\n\t<meta name=\"HandheldFriendly\" content=\"true\"/>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"format-detection\" content=\"telephone=no\">\n\t<meta name=\"viewport min-width=375px\" content=\"min-width=375, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">\n\t<title>Абориген</title>\n\t<meta property=\"og:url\" content=\"https://aborigen.ru/\">\n\t<meta property=\"og:type\" content=\"website\">\n\t<meta property=\"og:title\" content=\"Абориген\">\n\t<meta property=\"og:site_name\" content=\"Aborigen\">\n\t<meta property=\"og:locale\" content=\"ru_RU\">\n</head>\n<body class=\"preload\">\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[]}},{"type":"raw","value":"\n\t\t<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyC3qZbAAKA2vB9nfXq981FqCNLMNjoY9jU\"></script>\n</body>\n</html>"}],
    template = twig({"id":"$resolved:0152f66c9e7cd9face943e34d5b55d868291eccd74f548fcbeef7e1626b0242d44ef7e5bb3a36e075e42386b6b9320be2ec1f6d6254d060cab6a1adc80cb42b1:layout.twig","data":[{"type":"raw","value":"\n<!DOCTYPE html>\n<html>\n<head>\n\t<meta name=\"viewport\" content=\"width=device-width\">\n\t<meta name=\"MobileOptimized\" content=\"375\"/>\n\t<meta name=\"HandheldFriendly\" content=\"true\"/>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"format-detection\" content=\"telephone=no\">\n\t<meta name=\"viewport min-width=375px\" content=\"min-width=375, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">\n\t<title>Абориген</title>\n\t<meta property=\"og:url\" content=\"https://aborigen.ru/\">\n\t<meta property=\"og:type\" content=\"website\">\n\t<meta property=\"og:title\" content=\"Абориген\">\n\t<meta property=\"og:site_name\" content=\"Aborigen\">\n\t<meta property=\"og:locale\" content=\"ru_RU\">\n</head>\n<body class=\"preload\">\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[]}},{"type":"raw","value":"\n\t\t<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyC3qZbAAKA2vB9nfXq981FqCNLMNjoY9jU\"></script>\n</body>\n</html>"}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ "./src/template/pages/country.twig":
/*!*****************************************!*\
  !*** ./src/template/pages/country.twig ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../blocks/footer.twig */ "./src/template/blocks/footer.twig");

__webpack_require__(/*! ../blocks/subscribe.twig */ "./src/template/blocks/subscribe.twig");

__webpack_require__(/*! ../blocks/resorts.twig */ "./src/template/blocks/resorts.twig");

__webpack_require__(/*! ../blocks/guide.twig */ "./src/template/blocks/guide.twig");

__webpack_require__(/*! ../blocks/best-tours.twig */ "./src/template/blocks/best-tours.twig");

__webpack_require__(/*! ../blocks/breadcrumbs.twig */ "./src/template/blocks/breadcrumbs.twig");

__webpack_require__(/*! ../blocks/header.twig */ "./src/template/blocks/header.twig");

__webpack_require__(/*! ../layouts/layout.twig */ "./src/template/layouts/layout.twig");

var twig = __webpack_require__(/*! twig */ "./node_modules/twig/twig.js").twig,
    tokens = [{"type":"logic","token":{"type":"Twig.logic.type.extends","stack":[{"type":"Twig.expression.type.string","value":"$resolved:0152f66c9e7cd9face943e34d5b55d868291eccd74f548fcbeef7e1626b0242d44ef7e5bb3a36e075e42386b6b9320be2ec1f6d6254d060cab6a1adc80cb42b1:layout.twig"}]}},{"type":"raw","value":"\n"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:4169178dfb0368a7853c3b5ca9f6018417603e2f04ad039250bfa97ca9ab0fc2b8b33c881c53711a3ac42db2e82960a224b9fb24ffba3d82efb6c1b53de68ad7:header.twig"}]}},{"type":"raw","value":"\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:62c155da6fbd14d376393afbdbaa6d403bd1be21ddcae12f4723d836f50dbccc4c0f416a4c6bb916e3dcf6388de5b1917b7729f62bc5f78f20677efdebd2fe05:breadcrumbs.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:aa87df7838dd0b9379d49d0bed789d88444ccdff9f1ac8fffa4be6464319c7bcea64767f801516e8645728fc7aec76417fa9f953f27f90629bfbfc0d525d09fb:best-tours.twig"}]}},{"type":"raw","value":"\t"},{"type":"raw","value":"\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:b5a14b66219b8bd5a474857ed534c895fa1afcfeca141e99097fdf8ed8e922b077b42de0367515f1e13439509ecc9e1cd5b2c86a8b0f0ffa1e1218d7322a6cf6:guide.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c65c90f8e8189688d8118532fddf53fa2b25fdeae31ab9416bc408f0fc6301d66faa12fbd1b7941ef5e1c7cb1a309f7eceaa08bb7baf47933f4be0f186fe44e2:resorts.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:832d75d985b74af74b9aa41c0085be67fa22cb4374d98d760a8aa7c8ecddc119b421422df25d026fa0a39d2a8fabc6b13d2b2903028f096bf86c3b2501adde23:subscribe.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:8ffe7eb014640f0bb11837065f3518fedc41372534fd42cb644b8ff1d7f35bb9e6ce55d4c8b68290f2bfe32233de1ed002b7247924ec8a9aac7d6931ee46f797:footer.twig"}]}}]}}],
    template = twig({"id":"$resolved:3d2ffc0601c4f707c47089cc778a95acb343b2ce0ce8da1eec21f1011c2dd18ae0e0a31aefb29201bfd8709b26673ed6956540406f932a7d76a375cc288a835b:country.twig","data":[{"type":"logic","token":{"type":"Twig.logic.type.extends","stack":[{"type":"Twig.expression.type.string","value":"$resolved:0152f66c9e7cd9face943e34d5b55d868291eccd74f548fcbeef7e1626b0242d44ef7e5bb3a36e075e42386b6b9320be2ec1f6d6254d060cab6a1adc80cb42b1:layout.twig"}]}},{"type":"raw","value":"\n"},{"type":"logic","token":{"type":"Twig.logic.type.block","blockName":"main","output":[{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:4169178dfb0368a7853c3b5ca9f6018417603e2f04ad039250bfa97ca9ab0fc2b8b33c881c53711a3ac42db2e82960a224b9fb24ffba3d82efb6c1b53de68ad7:header.twig"}]}},{"type":"raw","value":"\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:62c155da6fbd14d376393afbdbaa6d403bd1be21ddcae12f4723d836f50dbccc4c0f416a4c6bb916e3dcf6388de5b1917b7729f62bc5f78f20677efdebd2fe05:breadcrumbs.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:aa87df7838dd0b9379d49d0bed789d88444ccdff9f1ac8fffa4be6464319c7bcea64767f801516e8645728fc7aec76417fa9f953f27f90629bfbfc0d525d09fb:best-tours.twig"}]}},{"type":"raw","value":"\t"},{"type":"raw","value":"\n\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:b5a14b66219b8bd5a474857ed534c895fa1afcfeca141e99097fdf8ed8e922b077b42de0367515f1e13439509ecc9e1cd5b2c86a8b0f0ffa1e1218d7322a6cf6:guide.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:c65c90f8e8189688d8118532fddf53fa2b25fdeae31ab9416bc408f0fc6301d66faa12fbd1b7941ef5e1c7cb1a309f7eceaa08bb7baf47933f4be0f186fe44e2:resorts.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:832d75d985b74af74b9aa41c0085be67fa22cb4374d98d760a8aa7c8ecddc119b421422df25d026fa0a39d2a8fabc6b13d2b2903028f096bf86c3b2501adde23:subscribe.twig"}]}},{"type":"raw","value":"\t"},{"type":"logic","token":{"type":"Twig.logic.type.include","only":false,"ignoreMissing":false,"stack":[{"type":"Twig.expression.type.string","value":"$resolved:8ffe7eb014640f0bb11837065f3518fedc41372534fd42cb644b8ff1d7f35bb9e6ce55d4c8b68290f2bfe32233de1ed002b7247924ec8a9aac7d6931ee46f797:footer.twig"}]}}]}}],"allowInlineIncludes":true,"rethrow":true});

module.exports = function(context) { return template.render(context); }

module.exports.tokens = tokens;

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=country.js.map