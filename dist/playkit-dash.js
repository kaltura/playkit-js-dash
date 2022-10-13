(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@playkit-js/playkit-js"), require("shaka-player"));
	else if(typeof define === 'function' && define.amd)
		define("dash", ["playkit-js", "shaka-player"], factory);
	else if(typeof exports === 'object')
		exports["dash"] = factory(require("@playkit-js/playkit-js"), require("shaka-player"));
	else
		root["playkit"] = root["playkit"] || {}, root["playkit"]["dash"] = factory(root["playkit"]["core"], root["shaka"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__playkit_js_playkit_js__, __WEBPACK_EXTERNAL_MODULE_shaka_player__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./assets/style.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./assets/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".shaka-text-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n  width: 100%;\n  min-width: 48px;\n  transition: bottom cubic-bezier(0.4, 0, 0.6, 1) 0.1s;\n  transition-delay: 0s;\n  font-size: 20px;\n  line-height: 1.4;\n  color: #fff;\n  font-family: Roboto-Regular, Roboto, sans-serif, TengwarTelcontar;\n}\n.shaka-text-container span.shaka-text-wrapper {\n  display: inline;\n  background: 0 0;\n  text-align: center;\n}\n\n:fullscreen .shaka-text-container {\n  font-size: 4.4vmin;\n}\n\n:-webkit-full-screen .shaka-text-container {\n  font-size: 4.4vmin;\n}\n\n:-moz-full-screen .shaka-text-container {\n  font-size: 4.4vmin;\n}\n\n:-ms-fullscreen .shaka-text-container {\n  font-size: 4.4vmin;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./assets/style.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "./dash-adapter.js":
/*!*************************!*\
  !*** ./dash-adapter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashAdapter; });
/* harmony import */ var shaka_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shaka-player */ "shaka-player");
/* harmony import */ var shaka_player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shaka_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/playkit-js */ "@playkit-js/playkit-js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drm_widevine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drm/widevine */ "./drm/widevine.js");
/* harmony import */ var _drm_playready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drm/playready */ "./drm/playready.js");
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-config */ "./default-config.json");
var _default_config__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./default-config */ "./default-config.json", 1);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/style.css */ "./assets/style.css");
/* harmony import */ var _parser_dash_manifest_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parser/dash-manifest-parser */ "./parser/dash-manifest-parser.js");
/* harmony import */ var _dash_thumbnail_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dash-thumbnail-controller */ "./dash-thumbnail-controller.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/**
 * Shaka events enum
 * @type {Object}
 * @const
 */
var ShakaEvent = {
  ERROR: 'error',
  ADAPTATION: 'adaptation',
  BUFFERING: 'buffering',
  DRM_SESSION_UPDATE: 'drmsessionupdate',
  EMSG: 'emsg'
};
/**
 * the interval in which to sample player size changes
 * @type {number}
 * @const
 */

var ABR_RESTRICTION_UPDATE_INTERVAL = 1000;
/**
 * the interval for stall detection in milliseconds
 * @type {number}
 * @const
 */

var STALL_DETECTION_INTERVAL = 500;
/**
 * the threshold for stall detection in seconds
 * @type {number}
 * @const
 */

var STALL_DETECTION_THRESHOLD = 3;
/**
 * the threshold needed to break the stall
 * @type {number}
 * @const
 */

var STALL_BREAK_THRESHOLD = 0.1;
/**
 * Adapter of shaka lib for dash content
 * @classdesc
 */

var DashAdapter = /*#__PURE__*/function (_BaseMediaSourceAdapt) {
  _inheritsLoose(DashAdapter, _BaseMediaSourceAdapt);

  /**
   * The id of Adapter
   * @member {string} id
   * @static
   * @public
   */

  /**
   * The adapter logger
   * @member {any} _logger
   * @private
   * @static
   */

  /**
   * The supported mime type by the dash adapter
   * @member {string} _dashMimeType
   * @static
   * @private
   */

  /**
   * The DRM protocols implementations for dash adapter.
   * @type {Array<Function>}
   * @private
   * @static
   */

  /**
   * The DRM protocols available for the current playback.
   * @type {Array<Function>}
   * @private
   * @static
   */

  /**
   * The shaka Lib
   * @member {any} _shakaLib
   * @private
   */

  /**
   * an object containing all the events we bind and unbind to.
   * @member {Object} - _adapterEventsBindings
   * @type {Object}
   * @private
   */

  /**
   * The buffering state flag
   * @member {boolean} - _buffering
   * @type {boolean}
   * @private
   */

  /**
   * Whether 'waiting' event has been sent by the HTMLVideoElement
   * @member {boolean} - _waitingSent
   * @type {boolean}
   * @private
   */

  /**
   * Whether 'playing' event has been sent by the HTMLVideoElement
   * @member {boolean} - _playingSent
   * @type {boolean}
   * @private
   */

  /**
   * Video size update timer
   * @type {null|number}
   * @private
   */

  /**
   * stall interval to break the stall on Smart TV
   * @type {null|IntervalID}
   * @private
   */

  /**
   * 3016 is the number of the video error at shaka, we already listens to it in the html5 class
   * @member {number} - VIDEO_ERROR_CODE
   * @type {number}
   * @private
   */

  /**
   * The last time detach occurred
   * @type {number}
   * @private
   */

  /**
   * Whether the request filter threw an error
   * @type {boolean}
   * @private
   */

  /**
   * Whether the response filter threw an error
   * @type {boolean}
   * @private
   */

  /**
   * Whether async destroy is in progress
   * @type {boolean}
   * @private
   */

  /**
   * Factory method to create media source adapter.
   * @function createAdapter
   * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
   * @param {PKMediaSourceObject} source - The source Object.
   * @param {Object} config - The player configuration.
   * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
   * @static
   */
  DashAdapter.createAdapter = function createAdapter(videoElement, source, config) {
    var adapterConfig = _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.copyDeep(_default_config__WEBPACK_IMPORTED_MODULE_4__);

    if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(config, 'text.useNativeTextTrack')) {
      adapterConfig.textTrackVisibile = _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.getPropertyPath(config, 'text.useNativeTextTrack');
    }

    if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(config, 'text.useShakaTextTrackDisplay')) {
      adapterConfig.useShakaTextTrackDisplay = _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.getPropertyPath(config, 'text.useShakaTextTrackDisplay');
    }

    if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(config, 'streaming')) {
      var streaming = config.streaming;

      if (typeof streaming.forceBreakStall === 'boolean') {
        adapterConfig.forceBreakStall = streaming.forceBreakStall;
      }

      if (typeof streaming.lowLatencyMode === 'boolean') {
        adapterConfig.lowLatencyMode = streaming.lowLatencyMode;
      }

      if (typeof streaming.trackEmsgEvents === 'boolean') {
        adapterConfig.trackEmsgEvents = streaming.trackEmsgEvents;
      }
    }

    if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(config, 'sources.options')) {
      var options = config.sources.options;
      adapterConfig.forceRedirectExternalStreams = options.forceRedirectExternalStreams;
      adapterConfig.redirectExternalStreamsHandler = options.redirectExternalStreamsHandler;
      adapterConfig.redirectExternalStreamsTimeout = options.redirectExternalStreamsTimeout;
    }

    if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(config, 'abr')) {
      var abr = config.abr;

      if (typeof abr.enabled === 'boolean') {
        adapterConfig.shakaConfig.abr.enabled = abr.enabled;
      }

      if (typeof abr.capLevelToPlayerSize === 'boolean') {
        adapterConfig.capLevelToPlayerSize = abr.capLevelToPlayerSize;
      }

      if (abr.defaultBandwidthEstimate) {
        adapterConfig.shakaConfig.abr.defaultBandwidthEstimate = abr.defaultBandwidthEstimate;
      }

      if (abr.restrictions) {
        _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.createPropertyPath(adapterConfig, 'abr.restrictions', abr.restrictions);
      }
    } //Merge shaka config with override config, override takes precedence


    if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(config, 'playback.options.html5.dash')) {
      _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.mergeDeep(adapterConfig.shakaConfig, config.playback.options.html5.dash); //for backward compatibility with shaka version < 4

      if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(adapterConfig.shakaConfig, 'manifest.dash.defaultPresentationDelay')) {
        adapterConfig.shakaConfig.manifest.defaultPresentationDelay = adapterConfig.shakaConfig.manifest.dash.defaultPresentationDelay;
        delete adapterConfig.shakaConfig.manifest.dash.defaultPresentationDelay;
      }
    }

    adapterConfig.network = config.network;
    return new this(videoElement, source, adapterConfig);
  }
  /**
   * Checks if dash adapter can play a given mime type
   * @function canPlayType
   * @param {string} mimeType - The mime type to check
   * @returns {boolean} - Whether the dash adapter can play a specific mime type
   * @static
   */
  ;

  DashAdapter.canPlayType = function canPlayType(mimeType) {
    var canPlayType = typeof mimeType === 'string' ? mimeType.toLowerCase() === DashAdapter._dashMimeType && DashAdapter.isMSESupported() : false;

    DashAdapter._logger.debug('canPlayType result for mimeType: ' + mimeType + ' is ' + canPlayType.toString());

    return canPlayType;
  }
  /**
   * set 'bitrate' the max bandwidth (if possible)
   * @param {number} bitrate the max bitrate allowed
   * @returns {void}
   */
  ;

  var _proto = DashAdapter.prototype;

  _proto.setMaxBitrate = function setMaxBitrate(bitrate) {
    if (this._hasLowerOrEqualBitrate(bitrate)) {
      this._shaka.configure({
        abr: {
          restrictions: {
            maxBandwidth: bitrate
          }
        }
      });
    }
  };

  _proto._getSortedTracks = function _getSortedTracks() {
    var tracks = this._shaka.getVariantTracks();

    var sortedTracks = tracks.map(function (obj) {
      return {
        id: obj.id,
        bandwidth: obj.bandwidth,
        active: obj.active
      };
    }).sort(function (obj1, obj2) {
      return obj1.bandwidth - obj2.bandwidth;
    });
    return sortedTracks;
  };

  _proto._hasLowerOrEqualBitrate = function _hasLowerOrEqualBitrate(maxBitrate) {
    var sortedTracks = this._getSortedTracks();

    if (sortedTracks[0].bandwidth <= maxBitrate) {
      return true;
    }

    return false;
  }
  /**
   * Checks if dash adapter can play a given drm data.
   * @param {Array<Object>} drmData - The drm data to check.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @returns {boolean} - Whether the dash adapter can play a specific drm data.
   * @static
   */
  ;

  DashAdapter.canPlayDrm = function canPlayDrm(drmData, drmConfig) {
    DashAdapter._availableDrmProtocol = [];

    for (var _iterator = _createForOfIteratorHelperLoose(DashAdapter._drmProtocols), _step; !(_step = _iterator()).done;) {
      var _drmProtocol = _step.value;

      if (_drmProtocol.isConfigured(drmData, drmConfig)) {
        DashAdapter._availableDrmProtocol.push(_drmProtocol);

        break;
      }
    }

    if (!DashAdapter._availableDrmProtocol.length) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(DashAdapter._drmProtocols), _step2; !(_step2 = _iterator2()).done;) {
        var drmProtocol = _step2.value;

        if (drmProtocol.canPlayDrm(drmData)) {
          DashAdapter._availableDrmProtocol.push(drmProtocol);
        }
      }
    }

    return !!DashAdapter._availableDrmProtocol.length;
  }
  /**
   * Checks if the dash adapter is supported
   * @function isSupported
   * @returns {boolean} -  Whether dash is supported.
   * @static
   */
  ;

  DashAdapter.isSupported = function isSupported() {
    /*
    for browsers which don't have VTT cue we need to install a polyfill for both isBrowserSupported
    check and also for playback, but we might not use Shaka so if we install the polyfill now just for browser support
    check then uninstall it after, and call it again if we actually use DASH adapter for playback on init
    this is in order to avoid collisions with other libs
     */
    var resetVttPolyfill = false;

    if (!window.VTTCue) {
      resetVttPolyfill = true;
    }

    shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill.installAll();
    var isSupported = shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.Player.isBrowserSupported();

    if (resetVttPolyfill) {
      window.VTTCue = undefined;
    }

    DashAdapter._logger.debug('isSupported:' + isSupported);

    return isSupported;
  }
  /**
   * @constructor
   * @param {HTMLVideoElement} videoElement - The video element which bind to the dash adapter
   * @param {PKMediaSourceObject} source - The source object
   * @param {Object} config - The media source adapter configuration
   */
  ;

  function DashAdapter(videoElement, source, config) {
    var _defineProperty2;

    var _this;

    if (config === void 0) {
      config = {};
    }

    DashAdapter._logger.debug('Creating adapter. Shaka version: ' + shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.Player.version);

    _this = _BaseMediaSourceAdapt.call(this, videoElement, source, config) || this;

    _defineProperty(_assertThisInitialized(_this), "_shakaLib", shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a);

    _defineProperty(_assertThisInitialized(_this), "_adapterEventsBindings", (_defineProperty2 = {}, _defineProperty2[ShakaEvent.ERROR] = function (event) {
      return _this._onError(event);
    }, _defineProperty2[ShakaEvent.ADAPTATION] = function () {
      return _this._onAdaptation();
    }, _defineProperty2[ShakaEvent.BUFFERING] = function (event) {
      return _this._onBuffering(event);
    }, _defineProperty2[ShakaEvent.DRM_SESSION_UPDATE] = function () {
      return _this._onDrmSessionUpdate();
    }, _defineProperty2[ShakaEvent.EMSG] = function (event) {
      return _this._onEmsg(event);
    }, _defineProperty2[_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].WAITING] = function () {
      return _this._onWaiting();
    }, _defineProperty2[_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].PLAYING] = function () {
      return _this._onPlaying();
    }, _defineProperty2));

    _defineProperty(_assertThisInitialized(_this), "_buffering", false);

    _defineProperty(_assertThisInitialized(_this), "_waitingSent", false);

    _defineProperty(_assertThisInitialized(_this), "_playingSent", false);

    _defineProperty(_assertThisInitialized(_this), "_videoSizeUpdateTimer", null);

    _defineProperty(_assertThisInitialized(_this), "_stallInterval", null);

    _defineProperty(_assertThisInitialized(_this), "VIDEO_ERROR_CODE", 3016);

    _defineProperty(_assertThisInitialized(_this), "_lastTimeDetach", NaN);

    _defineProperty(_assertThisInitialized(_this), "_requestFilterError", false);

    _defineProperty(_assertThisInitialized(_this), "_responseFilterError", false);

    _defineProperty(_assertThisInitialized(_this), "_isDestroyInProgress", false);

    _defineProperty(_assertThisInitialized(_this), "_isStartOver", true);

    _defineProperty(_assertThisInitialized(_this), "_seekRangeStart", 0);

    _defineProperty(_assertThisInitialized(_this), "_isLive", false);

    _defineProperty(_assertThisInitialized(_this), "_isStaticLive", false);

    _defineProperty(_assertThisInitialized(_this), "_selectedVideoTrack", null);

    _this._config = _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.mergeDeep({}, _default_config__WEBPACK_IMPORTED_MODULE_4__, _this._config);

    _this._init();

    return _this;
  }
  /**
   * Runs the initialization actions of the dash adapter.
   * @private
   * @returns {void}
   */


  _proto._init = function _init() {
    //Need to call this again cause we are uninstalling the VTTCue polyfill to avoid collisions with other libs
    shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill.installAll();
    this._shaka = new shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.Player(); // This will force the player to use shaka UITextDisplayer plugin to render text tracks.

    if (this._config.useShakaTextTrackDisplay) {
      this._shaka.setVideoContainer(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Dom.getElementBySelector('.playkit-subtitles'));
    }

    this._maybeSetFilters();

    this._maybeSetDrmConfig();

    this._maybeBreakStalls();

    this._shaka.configure(this._config.shakaConfig);

    this._addBindings();
  };

  _proto._clearStallInterval = function _clearStallInterval() {
    if (this._stallInterval) {
      clearInterval(this._stallInterval);
      this._stallInterval = null;
    }
  };

  _proto._stallHandler = function _stallHandler() {
    var _this2 = this;

    this._clearStallInterval();

    var getCurrentTimeInSeconds = function getCurrentTimeInSeconds() {
      return Date.now() / 1000;
    };

    var lastUpdateTime = getCurrentTimeInSeconds();
    var lastCurrentTime = this._videoElement.currentTime;
    this._stallInterval = setInterval(function () {
      var stallSeconds = getCurrentTimeInSeconds() - lastUpdateTime; //waiting for 3 sec until checking stalling

      if (stallSeconds > STALL_DETECTION_THRESHOLD && !_this2._videoElement.paused) {
        if (lastCurrentTime === _this2._videoElement.currentTime) {
          DashAdapter._logger.debug('stall found, break the stall');

          _this2._videoElement.currentTime = parseFloat(_this2._videoElement.currentTime.toFixed(1)) + STALL_BREAK_THRESHOLD;
        }

        _this2._clearStallInterval();
      }

      lastCurrentTime = _this2._videoElement.currentTime;
    }, STALL_DETECTION_INTERVAL);
  }
  /**
   * register to event to break the stalls on smart TV
   * @returns {void}
   * @private
   */
  ;

  _proto._maybeBreakStalls = function _maybeBreakStalls() {
    var _this3 = this;

    if (this._config.forceBreakStall) {
      this._eventManager.listen(this._videoElement, _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].SEEKING, function () {
        return _this3._stallHandler();
      });
    }
  }
  /**
   * get the redirected URL
   * @param {string} url - The url to check for redirection
   * @returns {Promise<string>} - the resolved url
   * @private
   */
  ;

  _proto._maybeGetRedirectedUrl = function _maybeGetRedirectedUrl(url) {
    var shouldRedirect = this._config.forceRedirectExternalStreams;
    var timeout = this._config.redirectExternalStreamsTimeout;
    var callback = this._config.redirectExternalStreamsHandler;
    return new Promise(function (resolve) {
      if (!shouldRedirect) {
        return resolve(url);
      }

      _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Http.jsonp(url, callback, {
        timeout: timeout
      }).then(function (uri) {
        resolve(uri);
      }).catch(function () {
        return resolve(url);
      });
    });
  };

  _proto._maybeSetFilters = function _maybeSetFilters() {
    var _this4 = this;

    if (typeof _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.getPropertyPath(this._config, 'network.requestFilter') === 'function') {
      DashAdapter._logger.debug('Register request filter');

      this._shaka.getNetworkingEngine().registerRequestFilter(function (type, request) {
        if (Object.values(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["RequestType"]).includes(type)) {
          var pkRequest = {
            url: request.uris[0],
            body: request.body,
            headers: request.headers
          };
          var requestFilterPromise;

          try {
            requestFilterPromise = _this4._config.network.requestFilter(type, pkRequest);
          } catch (error) {
            requestFilterPromise = Promise.reject(error);
          }

          requestFilterPromise = requestFilterPromise || Promise.resolve(pkRequest);
          return requestFilterPromise.then(function (updatedRequest) {
            request.uris = [updatedRequest.url];
            request.headers = updatedRequest.headers;

            if (typeof updatedRequest.withCredentials === 'boolean') {
              request.allowCrossSiteCredentials = updatedRequest.withCredentials;
            }

            if (request.method === 'POST') {
              request.body = updatedRequest.body;
            } else if (updatedRequest.body) {
              DashAdapter._logger.warn("Request with " + request.method + " method cannot have body");
            }
          }).catch(function (error) {
            _this4._requestFilterError = true;
            throw error;
          });
        }
      });
    }

    if (typeof _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.getPropertyPath(this._config, 'network.responseFilter') === 'function') {
      DashAdapter._logger.debug('Register response filter');

      this._shaka.getNetworkingEngine().registerResponseFilter(function (type, response) {
        if (Object.values(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["RequestType"]).includes(type)) {
          var url = response.uri,
              data = response.data,
              headers = response.headers;
          var pkResponse = {
            url: url,
            originalUrl: _this4._sourceObj.url,
            data: data,
            headers: headers
          };
          var responseFilterPromise;

          try {
            responseFilterPromise = _this4._config.network.responseFilter(type, pkResponse);
          } catch (error) {
            responseFilterPromise = Promise.reject(error);
          }

          responseFilterPromise = responseFilterPromise || Promise.resolve(pkResponse);
          return responseFilterPromise.then(function (updatedResponse) {
            response.data = updatedResponse.data;
          }).catch(function (error) {
            _this4._responseFilterError = true;
            throw error;
          });
        }
      });
    }
  }
  /**
   * Configure drm for shaka player.
   * @private
   * @returns {void}
   */
  ;

  _proto._maybeSetDrmConfig = function _maybeSetDrmConfig() {
    if (this._sourceObj && this._sourceObj.drmData) {
      var config = {};

      for (var _iterator3 = _createForOfIteratorHelperLoose(DashAdapter._availableDrmProtocol), _step3; !(_step3 = _iterator3()).done;) {
        var drmProtocol = _step3.value;
        drmProtocol.setDrmPlayback(config, this._sourceObj.drmData); // If shaka config already has some drm configuration override the config defaults with it

        if (this._config.shakaConfig.drm) {
          _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.mergeDeep(config.drm, this._config.shakaConfig.drm);
        }

        _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.mergeDeep(this._config.shakaConfig, config);
      }
    }
  }
  /**
   * apply Capping to player size restrictions
   * @private
   * @returns {void}
   */
  ;

  _proto._maybeCapLevelToPlayerSize = function _maybeCapLevelToPlayerSize() {
    var _this5 = this;

    if (this._config.capLevelToPlayerSize) {
      var getRestrictions = function getRestrictions() {
        return {
          minHeight: 0,
          maxHeight: _this5._videoHeight,
          minWidth: 0,
          maxWidth: _this5._videoWidth,
          minBitrate: 0,
          maxBitrate: Infinity
        };
      };

      this._clearVideoUpdateTimer();

      this._videoSizeUpdateTimer = setInterval(function () {
        return _this5._updateRestriction(getRestrictions());
      }, ABR_RESTRICTION_UPDATE_INTERVAL);

      this._updateRestriction(getRestrictions());
    }
  }
  /**
   * apply ABR restrictions
   * @private
   * @returns {void}
   */
  ;

  _proto._maybeApplyAbrRestrictions = function _maybeApplyAbrRestrictions() {
    if (!this._config.capLevelToPlayerSize) {
      this._clearVideoUpdateTimer();

      if (_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.hasPropertyPath(this._config, 'abr.restrictions')) {
        this._updateRestriction(this._config.abr.restrictions);
      }
    }
  }
  /**
   * apply ABR restrictions by size
   * @private
   * @param {PKABRRestrictionObject} restrictions - abr restrictions config
   * @returns {void}
   */
  ;

  _proto._updateRestriction = function _updateRestriction(restrictions) {
    var shakaRestrictionsConfig = this._getRestrictionShakaConfig(restrictions);

    this._shaka.configure({
      abr: {
        restrictions: shakaRestrictionsConfig
      }
    });
  };

  _proto._getRestrictionShakaConfig = function _getRestrictionShakaConfig(restrictions) {
    var _this6 = this;

    var getMinDimensions = function getMinDimensions(dim) {
      var videoTracks = _this6._getVideoTracks();

      return Math.min.apply(null, videoTracks.map(function (variant) {
        return variant[dim];
      }));
    };

    var restrictionsShakaConfig = {};

    if (restrictions) {
      var maxHeight = restrictions.maxHeight,
          maxWidth = restrictions.maxWidth,
          maxBitrate = restrictions.maxBitrate,
          minHeight = restrictions.minHeight,
          minWidth = restrictions.minWidth,
          minBitrate = restrictions.minBitrate;
      var minHeightValue = Math.max(minHeight, 0);
      var maxHeightValue = Math.max(maxHeight, getMinDimensions('height'));

      if (maxHeightValue >= minHeightValue) {
        restrictionsShakaConfig.minHeight = minHeightValue;
        restrictionsShakaConfig.maxHeight = maxHeightValue;
      } else {
        DashAdapter._logger.warn('Invalid maxHeight restriction, maxHeight must be greater than minHeight', minHeight, maxHeight);
      }

      var minWidthValue = Math.max(minWidth, 0);
      var maxWidthValue = Math.max(maxWidth, getMinDimensions('width'));

      if (maxWidthValue >= minWidthValue) {
        restrictionsShakaConfig.minWidth = minWidthValue;
        restrictionsShakaConfig.maxWidth = maxWidthValue;
      } else {
        DashAdapter._logger.warn('Invalid maxWidth restriction, maxWidth must be greater than minWidth', minWidth, maxWidth);
      }

      var minBitrateValue = Math.max(minBitrate, 0);
      var maxBitrateValue = Math.max(maxBitrate, getMinDimensions('bandwidth'));

      if (maxBitrateValue >= minBitrateValue) {
        restrictionsShakaConfig.minBandwidth = minBitrateValue;
        restrictionsShakaConfig.maxBandwidth = maxBitrateValue;
      } else {
        DashAdapter._logger.warn('Invalid maxBitrate restriction, maxBitrate must be greater than minBitrate', minBitrate, maxBitrate);
      }
    }

    return restrictionsShakaConfig;
  }
  /**
   * attach media - return the media source to handle the video tag
   * @public
   * @returns {void}
   */
  ;

  _proto.attachMediaSource = function attachMediaSource() {
    if (!this._shaka) {
      if (this._videoElement && this._videoElement.src) {
        _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Dom.setAttribute(this._videoElement, 'src', '');
        _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Dom.removeAttribute(this._videoElement, 'src');
      }

      this._init();
    }
  }
  /**
   * detach media - will remove the media source from handling the video
   * @public
   * @returns {Promise<void>} - detach promise
   */
  ;

  _proto.detachMediaSource = function detachMediaSource() {
    var _this7 = this;

    if (this._shaka) {
      // 1 second different between duration and current time will signal as end - will enable replay button
      if (Math.floor(this.duration - this.currentTime) === 0) {
        this._lastTimeDetach = 0;
      } else if (this.currentTime > 0) {
        this._lastTimeDetach = this.currentTime;
      }

      return this._reset().then(function () {
        _this7._shaka = null;
        _this7._loadPromise = null;
      });
    } else {
      return Promise.resolve();
    }
  }
  /**
   * Clear the video update timer
   * @private
   * @returns {void}
   */
  ;

  _proto._clearVideoUpdateTimer = function _clearVideoUpdateTimer() {
    if (this._videoSizeUpdateTimer) {
      clearInterval(this._videoSizeUpdateTimer);
      this._videoSizeUpdateTimer = null;
    }
  };

  /**
   * Add the required bindings to shaka.
   * @function _addBindings
   * @private
   * @returns {void}
   */
  _proto._addBindings = function _addBindings() {
    var _this8 = this;

    this._eventManager.listen(this._shaka, ShakaEvent.ADAPTATION, this._adapterEventsBindings.adaptation);

    this._eventManager.listen(this._shaka, ShakaEvent.ERROR, this._adapterEventsBindings.error);

    this._eventManager.listen(this._shaka, ShakaEvent.DRM_SESSION_UPDATE, this._adapterEventsBindings.drmsessionupdate);

    this._eventManager.listen(this._videoElement, _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].WAITING, this._adapterEventsBindings.waiting);

    this._eventManager.listen(this._videoElement, _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].PLAYING, this._adapterEventsBindings.playing);

    this._eventManager.listen(this._videoElement, _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].LOADED_DATA, function () {
      return _this8._onLoadedData();
    });

    this._eventManager.listenOnce(this._videoElement, _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].PLAYING, function () {
      _this8._eventManager.listen(_this8._shaka, ShakaEvent.BUFFERING, _this8._adapterEventsBindings.buffering);
    });

    if (this._config.trackEmsgEvents) {
      this._eventManager.listen(this._shaka, ShakaEvent.EMSG, this._adapterEventsBindings.emsg);
    } // called when a resource is downloaded


    this._shaka.getNetworkingEngine().registerResponseFilter(function (type, response) {
      switch (type) {
        case shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.net.NetworkingEngine.RequestType.SEGMENT:
          _this8._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].FRAG_LOADED, {
            miliSeconds: response.timeMs,
            bytes: response.data.byteLength,
            url: response.uri
          });

          if (_this8.isLive()) {
            _this8._dispatchNativeEvent(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].DURATION_CHANGE);
          }

          break;

        case shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.net.NetworkingEngine.RequestType.MANIFEST:
          _this8._parseManifest(response.data);

          _this8._playbackActualUri = response.uri;

          _this8._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].MANIFEST_LOADED, {
            miliSeconds: response.timeMs
          });

          setTimeout(function () {
            var _this8$_shaka, _this8$_shaka2;

            _this8._isLive = _this8._isLive || ((_this8$_shaka = _this8._shaka) == null ? void 0 : _this8$_shaka.isLive());

            if (_this8._isLive && !((_this8$_shaka2 = _this8._shaka) == null ? void 0 : _this8$_shaka2.isLive()) && !_this8._isStaticLive) {
              _this8._sourceObj.url = response.uri;

              _this8._switchFromDynamicToStatic();
            }
          });
          break;
      }
    });
  };

  _proto._onLoadedData = function _onLoadedData() {
    var _this9 = this;

    this._setLowLatencyMode();

    var segmentDuration = this.getSegmentDuration();
    this._seekRangeStart = this._shaka.seekRange().start;
    this._startOverTimeout = setTimeout(function () {
      if (_this9._shaka.seekRange().start - _this9._seekRangeStart >= segmentDuration) {
        // in start over the seekRange().start should be permanent
        _this9._isStartOver = false;
      }
    }, (segmentDuration + 1) * 1000);
  };

  _proto._switchFromDynamicToStatic = function _switchFromDynamicToStatic() {
    var _this10 = this;

    DashAdapter._logger.debug('Switch from dynamic manifest to static');

    var distanceFromLive = this._getLiveEdge() - this._videoElement.currentTime;

    this._dispatchNativeEvent(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].WAITING);

    var isAdaptiveBitrateEnabled = this.isAdaptiveBitrateEnabled();
    var paused = this._videoElement.paused; // const {maxHeight} = this._shaka.getConfiguration().abr.restrictions;

    this.detachMediaSource().then(function () {
      _this10._isStaticLive = true;
      _this10._isLive = true;

      _this10.attachMediaSource(); // if (isAdaptiveBitrateEnabled) {
      //   this._shaka.configure({abr: {restrictions: {maxHeight: 0}}});
      // }


      _this10.load().then(function () {
        _this10._videoElement.currentTime = _this10._videoElement.duration - distanceFromLive;
        !paused && _this10._videoElement.play();

        if (isAdaptiveBitrateEnabled) {
          _this10._onAdaptation(); // this._eventManager.listenOnce(this._videoElement, EventType.PLAYING, () => {
          //   this._shaka.configure({abr: {restrictions: {maxHeight}}});
          // });

        } else if (_this10._selectedVideoTrack) {
          DashAdapter._logger.debug('Select the selected video track');

          _this10.selectVideoTrack(_this10._selectedVideoTrack);
        }
      });
    });
  };

  _proto._setLowLatencyMode = function _setLowLatencyMode() {
    this._shaka.configure({
      streaming: {
        lowLatencyMode: typeof this._config.lowLatencyMode === 'boolean' ? this._config.lowLatencyMode : this.isLive()
      }
    });
  }
  /**
   * Custom parser to retrieve image adaptation sets.
   * @param {ArrayBuffer} manifestBuffer - The array buffer manifest from the response.
   * @function _parseManifest
   * @private
   * @returns {void}
   */
  ;

  _proto._parseManifest = function _parseManifest(manifestBuffer) {
    if (!this._manifestParser && _parser_dash_manifest_parser__WEBPACK_IMPORTED_MODULE_6__["DashManifestParser"].isValid()) {
      DashAdapter._logger.debug('Creating parser for the first time');

      this._manifestParser = new _parser_dash_manifest_parser__WEBPACK_IMPORTED_MODULE_6__["DashManifestParser"](manifestBuffer);

      this._manifestParser.parseManifest();
    }
  }
  /**
   * Load the video source
   * @param {number} startTime - Optional time to start the video from.
   * @function load
   * @override
   */
  ;

  _proto.load =
  /*#__PURE__*/
  function () {
    var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(startTime) {
      var _this11 = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this._loadPromise) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return this._removeMediaKeys();

            case 3:
              this._shaka.attach(this._videoElement);

              this._loadPromise = new Promise(function (resolve, reject) {
                if (_this11._sourceObj && _this11._sourceObj.url) {
                  _this11._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].ABR_MODE_CHANGED, {
                    mode: _this11.isAdaptiveBitrateEnabled() ? 'auto' : 'manual'
                  });

                  var shakaStartTime = startTime && startTime > -1 ? startTime : undefined;
                  shakaStartTime = isNaN(_this11._lastTimeDetach) ? shakaStartTime : _this11._lastTimeDetach;
                  _this11._lastTimeDetach = NaN;

                  _this11._maybeGetRedirectedUrl(_this11._sourceObj.url).then(function (url) {
                    return _this11._shaka.load(url, shakaStartTime);
                  }).then(function () {
                    var data = {
                      tracks: _this11._getParsedTracks()
                    };

                    _this11._maybeCapLevelToPlayerSize();

                    DashAdapter._logger.debug('The source has been loaded successfully');

                    resolve(data);
                  }).catch(function (error) {
                    reject(new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Error"](_this11._isDestroyInProgress ? _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Error"].Severity.RECOVERABLE : error.severity, error.category, error.code, error.data));
                  });
                }
              });

            case 5:
              return _context.abrupt("return", this._loadPromise);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function load(_x) {
      return _load.apply(this, arguments);
    }

    return load;
  }()
  /**
   * Destroys the dash adapter
   * @function destroy
   * @override
   * @returns {Promise<*>} - The destroy promise.
   */
  ;

  _proto.destroy = function destroy() {
    var _this12 = this;

    this._isDestroyInProgress = true;
    return new Promise(function (resolve, reject) {
      _BaseMediaSourceAdapt.prototype.destroy.call(_this12).then(function () {
        DashAdapter._logger.debug('destroy');

        _this12._loadPromise = null;
        _this12._adapterEventsBindings = {};

        _this12._reset().then(function (resetResult) {
          _this12._isDestroyInProgress = false;
          resolve(resetResult);
        }).catch(function (error) {
          _this12._isDestroyInProgress = false;
          reject(error);
        });
      });
    });
  }
  /**
   *  Returns in-stream thumbnail for a chosen time.
   * @param {number} time - playback time.
   * @public
   * @return {?ThumbnailInfo} - Thumbnail info
   */
  ;

  _proto.getThumbnail = function getThumbnail(time) {
    if (this._thumbnailController) {
      return this._thumbnailController.getThumbnail(time);
    }
  }
  /**
   * reset shaka instance and its bindings
   * @function _reset
   * @private
   * @returns {Promise<*>} - The destroy promise.
   */
  ;

  _proto._reset = function _reset() {
    this._buffering = false;
    this._waitingSent = false;
    this._playingSent = false;
    this._isLive = false;
    this._isStaticLive = false;
    this._requestFilterError = false;
    this._responseFilterError = false;
    this._manifestParser = null;
    this._thumbnailController = null;

    this._clearStallInterval();

    this._clearVideoUpdateTimer();

    clearTimeout(this._startOverTimeout);

    if (this._eventManager) {
      this._eventManager.removeAll();
    }

    if (this._shaka) {
      return this._shaka.destroy();
    }

    return Promise.resolve();
  }
  /**
   * Remove mediaKeys from the video element.
   * mediaKeys are set if an encrypted media was previously played, and must be removed before a new encrypted media can be played.
   * If mediaKeys are not null it means that shaka reset wasn't called or that it failed to remove them.
   * @returns {Promise<void>} Promise that resolves when the operation finishes.
   */
  ;

  _proto._removeMediaKeys =
  /*#__PURE__*/
  function () {
    var _removeMediaKeys2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this._videoElement && this._videoElement.mediaKeys)) {
                _context2.next = 16;
                break;
              }

              _context2.prev = 1;

              DashAdapter._logger.debug('Removing mediaKeys from the video element');

              _context2.next = 5;
              return this._videoElement.setMediaKeys(null);

            case 5:
              DashAdapter._logger.debug('mediaKeys removed');

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);

              // non encrypted playback should still work, so we don't reject
              this._logger.warn('mediaKeys not cleared');

            case 11:
              _context2.prev = 11;
              return _context2.abrupt("return", Promise.resolve());

            case 14:
              _context2.next = 17;
              break;

            case 16:
              return _context2.abrupt("return", Promise.resolve());

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 8, 11, 14]]);
    }));

    function _removeMediaKeys() {
      return _removeMediaKeys2.apply(this, arguments);
    }

    return _removeMediaKeys;
  }()
  /**
   * Get the original video tracks
   * @function _getVideoTracks
   * @returns {Array<Object>} - The original video tracks
   * @private
   */
  ;

  _proto._getVideoTracks = function _getVideoTracks() {
    var variantTracks = this._shaka.getVariantTracks();

    var activeVariantTrack = this._getActiveTrack();

    var videoTracks = variantTracks.filter(function (variantTrack) {
      return variantTrack.audioId === activeVariantTrack.audioId;
    });
    return videoTracks;
  };

  _proto._getActiveTrack = function _getActiveTrack() {
    return this._shaka.getVariantTracks().find(function (variantTrack) {
      return variantTrack.active;
    });
  }
  /**
   * Get the original audio tracks
   * @function _getAudioTracks
   * @returns {Array<Object>} - Array of objects with unique language and label.
   * @private
   */
  ;

  _proto._getAudioTracks = function _getAudioTracks() {
    var variantTracks = this._shaka.getVariantTracks();

    var audioTracks = this._shaka.getAudioLanguagesAndRoles();

    audioTracks.forEach(function (track) {
      var sameLangAudioVariants = variantTracks.filter(function (vt) {
        return vt.language === track.language;
      });
      var id = sameLangAudioVariants.map(function (variant) {
        return variant.id;
      }).join('_');
      var active = sameLangAudioVariants.some(function (variant) {
        return variant.active;
      });
      track.id = id;
      track.label = sameLangAudioVariants[0].label;
      track.active = active;
    });
    return audioTracks;
  }
  /**
   * Get the parsed tracks
   * @function _getParsedTracks
   * @returns {Array<Track>} - The parsed tracks
   * @private
   */
  ;

  _proto._getParsedTracks = function _getParsedTracks() {
    if (this._shaka) {
      var videoTracks = this._getParsedVideoTracks();

      var audioTracks = this._getParsedAudioTracks();

      var textTracks = this._getParsedTextTracks();

      var imageTracks = this._getParsedImageTracks();

      return videoTracks.concat(audioTracks).concat(textTracks).concat(imageTracks);
    }

    return [];
  }
  /**
   * Get the parsed video tracks
   * @function _getParsedVideoTracks
   * @returns {Array<VideoTrack>} - The parsed video tracks
   * @private
   */
  ;

  _proto._getParsedVideoTracks = function _getParsedVideoTracks() {
    var videoTracks = this._getVideoTracks();

    var parsedTracks = [];

    if (videoTracks) {
      for (var i = 0; i < videoTracks.length; i++) {
        var settings = {
          id: videoTracks[i].id,
          bandwidth: videoTracks[i].videoBandwidth || videoTracks[i].bandwidth,
          width: videoTracks[i].width,
          height: videoTracks[i].height,
          active: videoTracks[i].active,
          index: i
        };
        parsedTracks.push(new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["VideoTrack"](settings));
      }
    }

    return parsedTracks;
  }
  /**
   * Get the parsed audio tracks
   * @function _getParsedAudioTracks
   * @returns {Array<AudioTrack>} - The parsed audio tracks
   * @private
   */
  ;

  _proto._getParsedAudioTracks = function _getParsedAudioTracks() {
    var audioTracks = this._getAudioTracks();

    var parsedTracks = [];

    if (audioTracks) {
      for (var i = 0; i < audioTracks.length; i++) {
        var settings = {
          id: audioTracks[i].id,
          active: audioTracks[i].active,
          label: audioTracks[i].label,
          language: audioTracks[i].language,
          index: i
        };
        parsedTracks.push(new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["AudioTrack"](settings));
      }
    }

    return parsedTracks;
  }
  /**
   * Get the parsed text tracks
   * @function _getParsedTextTracks
   * @returns {Array<TextTrack>} - The parsed text tracks
   * @private
   */
  ;

  _proto._getParsedTextTracks = function _getParsedTextTracks() {
    var parsedTracks = [];

    for (var _iterator4 = _createForOfIteratorHelperLoose(this._shaka.getTextTracks()), _step4; !(_step4 = _iterator4()).done;) {
      var textTrack = _step4.value;
      var kind = textTrack.kind ? textTrack.kind + 's' : '';
      kind = kind === '' && this._config.useShakaTextTrackDisplay ? 'captions' : kind;
      var settings = {
        id: textTrack.id,
        kind: kind,
        active: false,
        label: textTrack.label,
        language: textTrack.language
      };
      parsedTracks.push(new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["TextTrack"](settings));
    }

    return parsedTracks;
  }
  /**
   * Get the parsed image tracks
   * @function _getParsedImageTracks
   * @returns {Array<ImageTrack>} - The parsed image tracks
   * @private
   */
  ;

  _proto._getParsedImageTracks = function _getParsedImageTracks() {
    var _this$_manifestParser, _this$_manifestParser2;

    var imageSet = (_this$_manifestParser = this._manifestParser) == null ? void 0 : _this$_manifestParser.getImageSet();
    var mediaTemplatePrefix = ((_this$_manifestParser2 = this._manifestParser) == null ? void 0 : _this$_manifestParser2.getBaseUrl()) || '';

    if (imageSet) {
      this._thumbnailController = new _dash_thumbnail_controller__WEBPACK_IMPORTED_MODULE_7__["DashThumbnailController"](imageSet, this._playbackActualUri, mediaTemplatePrefix);
      return this._thumbnailController.getTracks();
    }

    return [];
  }
  /**
   * Select a video track
   * @function selectVideoTrack
   * @param {VideoTrack} videoTrack - the video track to select
   * @returns {void}
   * @public
   */
  ;

  _proto.selectVideoTrack = function selectVideoTrack(videoTrack) {
    if (this._shaka) {
      var videoTracks = this._getVideoTracks();

      if (videoTrack instanceof _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["VideoTrack"] && videoTracks) {
        var selectedVideoTrack = videoTracks[videoTrack.index];

        if (selectedVideoTrack) {
          if (this.isAdaptiveBitrateEnabled()) {
            this._shaka.configure({
              abr: {
                enabled: false
              }
            });

            this._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].ABR_MODE_CHANGED, {
              mode: 'manual'
            });
          }

          if (!selectedVideoTrack.active) {
            this._selectedVideoTrack = videoTrack;

            this._shaka.selectVariantTrack(videoTracks[videoTrack.index], true);

            this._onTrackChanged(videoTrack);
          }
        }
      }
    }
  }
  /**
   * Select an audio track
   * @function selectAudioTrack
   * @param {AudioTrack} audioTrack - the audio track to select
   * @returns {void}
   * @public
   */
  ;

  _proto.selectAudioTrack = function selectAudioTrack(audioTrack) {
    if (this._shaka && audioTrack instanceof _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["AudioTrack"] && !audioTrack.active) {
      this._shaka.selectAudioLanguage(audioTrack.language);

      this._onTrackChanged(audioTrack);
    }
  }
  /**
   * Select a text track
   * @function selectTextTrack
   * @param {TextTrack} textTrack - the track to select
   * @returns {void}
   * @public
   */
  ;

  _proto.selectTextTrack = function selectTextTrack(textTrack) {
    if (this._shaka && textTrack instanceof _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["TextTrack"] && !textTrack.active && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
      this._shaka.setTextTrackVisibility(this._config.textTrackVisibile);

      this._shaka.selectTextLanguage(textTrack.language);

      this._onTrackChanged(textTrack);
    }
  };

  _proto.selectImageTrack = function selectImageTrack(imageTrack) {
    if (this._shaka && this._thumbnailController && imageTrack instanceof _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["ImageTrack"] && !imageTrack.active) {
      this._thumbnailController.selectTrack(imageTrack);

      this._onTrackChanged(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["ImageTrack"]);
    }
  }
  /**
   * Hide the text track
   * @function hideTextTrack
   * @returns {void}
   * @public
   */
  ;

  _proto.hideTextTrack = function hideTextTrack() {
    if (this._shaka) {
      this._shaka.setTextTrackVisibility(false);
    }
  }
  /**
   * Enables adaptive bitrate switching
   * @function enableAdaptiveBitrate
   * @returns {void}
   * @public
   */
  ;

  _proto.enableAdaptiveBitrate = function enableAdaptiveBitrate() {
    if (this._shaka && !this.isAdaptiveBitrateEnabled()) {
      this._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].ABR_MODE_CHANGED, {
        mode: 'auto'
      });

      this._shaka.configure({
        abr: {
          enabled: true
        }
      });
    }
  }
  /**
   * Checking if adaptive bitrate switching is enabled.
   * @function isAdaptiveBitrateEnabled
   * @returns {boolean} - Whether adaptive bitrate is enabled.
   * @public
   */
  ;

  _proto.isAdaptiveBitrateEnabled = function isAdaptiveBitrateEnabled() {
    if (this._shaka) {
      var shakaConfig = this._shaka.getConfiguration();

      return shakaConfig.abr.enabled;
    }

    return false;
  }
  /**
   * Apply ABR restriction.
   * @function applyABRRestriction
   * @param {PKABRRestrictionObject} restrictions - abr restrictions config
   * @returns {void}
   * @public
   */
  ;

  _proto.applyABRRestriction = function applyABRRestriction(restrictions) {
    _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Utils"].Object.createPropertyPath(this._config, 'abr.restrictions', restrictions);

    this._maybeApplyAbrRestrictions();

    if (!this.isAdaptiveBitrateEnabled()) {
      var videoTracks = this._getParsedVideoTracks();

      var availableTracks = Object(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["filterTracksByRestriction"])(videoTracks, this._config.abr.restrictions);

      if (availableTracks.length) {
        var activeTrackInRange = availableTracks.find(function (track) {
          return track.active;
        });

        if (!activeTrackInRange) {
          this.selectVideoTrack(availableTracks[0]);
        }
      }
    }
  }
  /**
   * Returns the live edge
   * @returns {number} - live edge
   * @private
   */
  ;

  _proto._getLiveEdge = function _getLiveEdge() {
    return this._shaka ? this._shaka.seekRange().end : NaN;
  }
  /**
   * Seeking to live edge.
   * @function seekToLiveEdge
   * @returns {void}
   * @public
   */
  ;

  _proto.seekToLiveEdge = function seekToLiveEdge() {
    if (this._shaka && this._videoElement.readyState > 0) {
      this._videoElement.currentTime = this._getLiveEdge();
    }
  }
  /**
   * Checking if the current playback is live.
   * @function isLive
   * @returns {boolean} - Whether playback is live.
   * @public
   */
  ;

  _proto.isLive = function isLive() {
    var _this$_shaka;

    return ((_this$_shaka = this._shaka) == null ? void 0 : _this$_shaka.isLive()) || this._isLive;
  }
  /**
   * Gets the segment duration of the stream
   * @return {number} - Segment duration in seconds
   */
  ;

  /**
   * Gets the live duration
   * @return {number} - live duration
   */
  _proto.getSegmentDuration = function getSegmentDuration() {
    if (this._shaka) {
      return this._shaka.getStats().maxSegmentDuration;
    }

    return 0;
  }
  /**
   * An handler to shaka adaptation event
   * @function _onAdaptation
   * @returns {void}
   * @private
   */
  ;

  _proto._onAdaptation = function _onAdaptation() {
    var selectedVideoTrack = this._getParsedVideoTracks().find(function (videoTrack) {
      return videoTrack.active;
    });

    this._onTrackChanged(selectedVideoTrack);
  }
  /**
   * An handler to shaka error event
   * @function _onError
   * @param {any} event - the error event
   * @returns {void}
   * @private
   */
  ;

  _proto._onError = function _onError(event) {
    if (event && event.detail) {
      var error = event.detail; //don't handle video element errors, they are already handled by the player

      if (error.code === this.VIDEO_ERROR_CODE) {
        return;
      }

      if ((this._requestFilterError || this._responseFilterError) && error.data[0] instanceof shaka_player__WEBPACK_IMPORTED_MODULE_0___default.a.util.Error) {
        // When the request/response filter of the license request throws an error,
        // shaka wraps the request/response filter error (code 1006/1007) with a license request error (code 6007)
        // so extract the inner error
        error = error.data[0];
        this._requestFilterError ? this._requestFilterError = false : this._responseFilterError = false;
      }

      this._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].ERROR, new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Error"](error.severity, error.category, error.code, error.data));

      DashAdapter._logger.error(error);

      if (error.severity === _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["Error"].Severity.CRITICAL) {
        this.destroy();
      }
    }
  }
  /**
   * An handler to shaka buffering event
   * @function _onBuffering
   * @param {any} event - the buffering event
   * @returns {void}
   * @private
   */
  ;

  _proto._onBuffering = function _onBuffering(event) {
    if (event.buffering) {
      if (!this._waitingSent) {
        // The player enters the buffering state and 'waiting' event hasn't been sent by the HTMLVideoElement.
        this._dispatchNativeEvent(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].WAITING);

        this._buffering = true;
      }
    } else {
      this._buffering = false;

      if (!this._videoElement.paused && !this._playingSent) {
        //the player leaves the buffering state. and 'playing' event hasn't been sent by the HTMLVideoElement.
        this._dispatchNativeEvent(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].PLAYING);
      }
    }
  };

  _proto._dispatchNativeEvent = function _dispatchNativeEvent(type) {
    var event;

    if (typeof window.Event === 'function') {
      event = new Event(type);
    } else {
      event = document.createEvent('Event');
      event.initEvent(type, true, true);
    }

    this._videoElement.dispatchEvent(event);
  }
  /**
   * An handler to shaka drm session update event
   * @function _onDrmSessionUpdate
   * @returns {void}
   * @private
   */
  ;

  _proto._onDrmSessionUpdate = function _onDrmSessionUpdate() {
    this._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].DRM_LICENSE_LOADED, {
      licenseTime: this._shaka.getStats().licenseTime,
      scheme: this._shaka.drmInfo().keySystem
    });
  }
  /**
   * An handler to shaka emsg event
   * @function _onEmsg
   * @param {any} event - the emsg event
   * @returns {void}
   * @private
   */
  ;

  _proto._onEmsg = function _onEmsg(event) {
    var detail = event.detail,
        type = event.type;
    var metadataTrack = Array.from(this._videoElement.textTracks).find(function (track) {
      return track.label === type;
    });

    if (!metadataTrack) {
      metadataTrack = this._videoElement.addTextTrack(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["TextTrack"].KIND.METADATA, type);
    }

    var startTime = detail.startTime,
        endTime = detail.endTime,
        id = detail.id,
        metadata = _objectWithoutPropertiesLoose(detail, ["startTime", "endTime", "id"]);

    var timedMetadata = new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["TimedMetadata"](startTime, endTime, id, _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["TimedMetadata"].TYPE.EMSG, metadata);
    var textTrackCue = Object(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["createTextTrackCue"])(timedMetadata);
    metadataTrack.addCue(textTrackCue);

    this._trigger(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].TIMED_METADATA_ADDED, {
      cues: [timedMetadata]
    });
  }
  /**
   * An handler to HTMLVideoElement waiting event
   * @function _onWaiting
   * @returns {void}
   * @private
   */
  ;

  _proto._onWaiting = function _onWaiting() {
    this._waitingSent = true;
    this._playingSent = false;
  }
  /**
   * An handler to HTMLVideoElement playing event
   * @function _onPlaying
   * @returns {void}
   * @private
   */
  ;

  _proto._onPlaying = function _onPlaying() {
    this._playingSent = true;
    this._waitingSent = false;

    if (this._buffering) {
      // The player is in buffering state.
      this._dispatchNativeEvent(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["EventType"].WAITING);
    }
  }
  /**
   * Get the start time of DVR window in live playback in seconds.
   * @returns {Number} - start time of DVR window.
   * @public
   */
  ;

  _proto.getStartTimeOfDvrWindow = function getStartTimeOfDvrWindow() {
    if (this.isLive() && this._shaka) {
      return (this._isStartOver ? this._seekRangeStart : this._shaka.seekRange().start) + this._shaka.getConfiguration().streaming.safeSeekOffset;
    }

    return 0;
  }
  /**
   * gets the target buffer of the player
   * @returns {number} - buffer length target in seconds
   */
  ;

  _proto.getDrmInfo = function getDrmInfo() {
    var drmInfo = this._shaka.drmInfo();

    if (!drmInfo) {
      return null;
    } else {
      var licenseServerUri = drmInfo.licenseServerUri,
          keySystem = drmInfo.keySystem,
          serverCertificateUri = drmInfo.serverCertificateUri;
      var drmDataObject = {
        licenseUrl: licenseServerUri,
        scheme: keySystem
      };
      if (serverCertificateUri) drmDataObject.certificate = serverCertificateUri;
      return drmDataObject;
    }
  };

  _createClass(DashAdapter, [{
    key: "_videoWidth",
    get: function get() {
      var width;
      var videoElement = this._videoElement;

      if (videoElement) {
        width = videoElement.width || videoElement.clientWidth || videoElement.offsetWidth;
        width *= this._contentScaleFactor;
      }

      return width;
    }
  }, {
    key: "_videoHeight",
    get: function get() {
      var height;
      var videoElement = this._videoElement;

      if (videoElement) {
        height = videoElement.height || videoElement.clientHeight || videoElement.offsetHeight;
        height *= this._contentScaleFactor;
      }

      return height;
    }
  }, {
    key: "_contentScaleFactor",
    get: function get() {
      var pixelRatio = 1;

      try {
        pixelRatio = window.devicePixelRatio;
      } catch (e) {
        DashAdapter._logger.debug('failed reading devicePixelRatio, assume 1');
      }

      return pixelRatio;
    }
  }, {
    key: "liveDuration",
    get: function get() {
      return this._getLiveEdge();
    }
  }, {
    key: "targetBuffer",
    get: function get() {
      var targetBufferVal = NaN;
      if (!this._shaka) return NaN;

      if (this.isLive()) {
        targetBufferVal = this._getLiveEdge() - this._videoElement.currentTime;
      } else {
        // consideration of the end of the playback in the target buffer calc
        targetBufferVal = this._videoElement.duration - this._videoElement.currentTime;
      }

      targetBufferVal = Math.min(targetBufferVal, this._shaka.getConfiguration().streaming.bufferingGoal + this._shaka.getStats().maxSegmentDuration);
      return targetBufferVal;
    }
  }]);

  return DashAdapter;
}(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["BaseMediaSourceAdapter"]);

_defineProperty(DashAdapter, "id", 'DashAdapter');

_defineProperty(DashAdapter, "_logger", _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_1__["BaseMediaSourceAdapter"].getLogger(DashAdapter.id));

_defineProperty(DashAdapter, "_dashMimeType", 'application/dash+xml');

_defineProperty(DashAdapter, "_drmProtocols", [_drm_widevine__WEBPACK_IMPORTED_MODULE_2__["Widevine"], _drm_playready__WEBPACK_IMPORTED_MODULE_3__["PlayReady"]]);

_defineProperty(DashAdapter, "_availableDrmProtocol", []);



/***/ }),

/***/ "./dash-thumbnail-controller.js":
/*!**************************************!*\
  !*** ./dash-thumbnail-controller.js ***!
  \**************************************/
/*! exports provided: DashThumbnailController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashThumbnailController", function() { return DashThumbnailController; });
/* harmony import */ var _parser_adaptation_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser/adaptation-set */ "./parser/adaptation-set.js");
/* harmony import */ var _parser_representation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser/representation */ "./parser/representation.js");
/* harmony import */ var _parser_parser_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser/parser-utils */ "./parser/parser-utils.js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @playkit-js/playkit-js */ "@playkit-js/playkit-js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parser_essential_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser/essential-property */ "./parser/essential-property.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var DashThumbnailController = /*#__PURE__*/function () {
  function DashThumbnailController(_set, _playerUrl, _mediaTemplatePrefix) {
    var _this = this;

    _defineProperty(this, "_tracks", []);

    _defineProperty(this, "_parseTracks", function (set, playerUrl, mediaTemplatePrefix) {
      var representations = set.representations,
          segmentTemplate = set.segmentTemplate,
          essentialProperty = set.essentialProperty;
      representations.forEach(function (representation, index) {
        var id = representation.id,
            bandwidth = representation.bandwidth,
            width = representation.width,
            height = representation.height;
        var startNumber = segmentTemplate.startNumber,
            duration = segmentTemplate.duration,
            media = segmentTemplate.media,
            timescale = segmentTemplate.timescale,
            presentationTimeOffset = segmentTemplate.presentationTimeOffset;

        var value = _this._getEssentialValue(essentialProperty, representation);

        var _this$_getDimensions = _this._getDimensions(value),
            rows = _this$_getDimensions[0],
            cols = _this$_getDimensions[1];

        _this._tracks.push(new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_3__["ImageTrack"]({
          id: id,
          index: index,
          active: false,
          width: width,
          height: height,
          duration: duration,
          rows: rows,
          cols: cols,
          url: _this._buildTemplateUrl(media, id, playerUrl, mediaTemplatePrefix),
          customData: {
            bitrate: bandwidth,
            startNumber: startNumber,
            timescale: timescale,
            presentationTimeOffset: presentationTimeOffset
          }
        }));
      });
    });

    _defineProperty(this, "_getDimensions", function (value) {
      var rows = 1,
          cols = 1;

      if (value.includes('x')) {
        var values = value.split('x');
        rows = parseInt(values[0]);
        cols = parseInt(values[1]);
      }

      return [rows, cols];
    });

    _defineProperty(this, "_getEssentialValue", function (essentialProperty, representation) {
      return essentialProperty ? essentialProperty.value : representation.essentialProperty ? representation.essentialProperty.value : '';
    });

    _defineProperty(this, "_buildTemplateUrl", function (mediaTemplate, id, url, mediaTemplatePrefix) {
      var last = url.split('/').pop();
      var baseUrl = url.replace(last, '');
      var regex = /^\.\/|^\./;
      mediaTemplatePrefix = mediaTemplatePrefix.replace(regex, '');

      if (mediaTemplatePrefix.length > 0 && !mediaTemplatePrefix.endsWith('/')) {
        mediaTemplatePrefix += '/';
      }

      var urlTemplate = "" + baseUrl + mediaTemplatePrefix + mediaTemplate;
      return _parser_parser_utils__WEBPACK_IMPORTED_MODULE_2__["UrlUtils"].resolve(urlTemplate, {
        id: id
      });
    });

    _defineProperty(this, "_buildUrlFromTemplate", function (track, index) {
      return _parser_parser_utils__WEBPACK_IMPORTED_MODULE_2__["UrlUtils"].resolve(track.url, {
        index: index,
        time: (index - 1) * track.duration * track.customData.timescale,
        bitrate: track.customData.bitrate
      });
    });

    this._parseTracks(_set, _playerUrl, _mediaTemplatePrefix);

    if (this._tracks.length > 0) {
      this._tracks.sort(function (t1, t2) {
        return t1.customData.bitrate - t2.customData.bitrate;
      });

      this.selectTrack(this._tracks[this._tracks.length - 1]);
    }
  }

  var _proto = DashThumbnailController.prototype;

  _proto.selectTrack = function selectTrack(track) {
    this._tracks.forEach(function (t) {
      return t.index === track.index ? t.active = true : t.active = false;
    });
  };

  _proto.getTracks = function getTracks() {
    return this._tracks;
  };

  _proto.getActiveTrack = function getActiveTrack() {
    return this._tracks.find(function (t) {
      return t.active;
    });
  };

  _proto.getThumbnail = function getThumbnail(time) {
    var activeTrack = this.getActiveTrack();
    var duration = activeTrack.duration,
        rows = activeTrack.rows,
        cols = activeTrack.cols,
        sliceWidth = activeTrack.sliceWidth,
        sliceHeight = activeTrack.sliceHeight,
        customData = activeTrack.customData;
    var page = Math.floor(time / duration) + customData.startNumber;
    var offset = time % duration;
    var thumbIndex = Math.floor(offset * rows * cols / duration);
    return new _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_3__["ThumbnailInfo"]({
      width: Math.floor(sliceWidth),
      height: Math.floor(sliceHeight),
      x: Math.floor(thumbIndex % rows) * sliceWidth,
      y: Math.floor(thumbIndex / rows) * sliceHeight,
      url: this._buildUrlFromTemplate(activeTrack, page)
    });
  };

  return DashThumbnailController;
}();



/***/ }),

/***/ "./default-config.json":
/*!*****************************!*\
  !*** ./default-config.json ***!
  \*****************************/
/*! exports provided: shakaConfig, forceRedirectExternalStreams, trackEmsgEvents, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"shakaConfig\":{\"streaming\":{\"ignoreTextStreamFailures\":true,\"bufferingGoal\":60,\"alwaysStreamText\":true},\"abr\":{\"enabled\":true,\"restrictions\":{}}},\"forceRedirectExternalStreams\":false,\"trackEmsgEvents\":true}");

/***/ }),

/***/ "./drm/playready.js":
/*!**************************!*\
  !*** ./drm/playready.js ***!
  \**************************/
/*! exports provided: PlayReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayReady", function() { return PlayReady; });
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/playkit-js */ "@playkit-js/playkit-js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__);
var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var PlayReady = (_temp = _class = /*#__PURE__*/function () {
  function PlayReady() {}

  /**
   * PLAYREADY is the configure key system.
   * @param {Array<Object>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether PLAYREADY is the configure key system.
   */
  PlayReady.isConfigured = function isConfigured(drmData, drmConfig) {
    return _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].PLAYREADY === drmConfig.keySystem && !!drmData.find(function (drmEntry) {
      return drmEntry.scheme === drmConfig.keySystem;
    });
  }
  /**
   * PlayReady playback supports in case 2 conditions are met:
   * 1. The environment supports PlayReady playback.
   * 2. The drm data of the source object contains entry with PlayReady scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether PlayReady can be play on the current environment.
   */
  ;

  PlayReady.canPlayDrm = function canPlayDrm(drmData) {
    PlayReady._logger.debug('Can play DRM scheme of: ' + _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].PLAYREADY);

    return !!drmData.find(function (drmEntry) {
      return drmEntry.scheme === _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].PLAYREADY;
    });
  }
  /**
   * Sets the PlayReady playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  ;

  PlayReady.setDrmPlayback = function setDrmPlayback(config, drmData) {
    PlayReady._logger.debug('Sets drm playback');

    var prDrmEntry = drmData.find(function (drmEntry) {
      return drmEntry.scheme === _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].PLAYREADY;
    });

    if (prDrmEntry) {
      var _servers;

      config.drm = {
        servers: (_servers = {}, _servers[_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].PLAYREADY] = prDrmEntry.licenseUrl, _servers)
      };
    }
  };

  return PlayReady;
}(), _defineProperty(_class, "_logger", Object(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["getLogger"])('PlayReady')), _temp);


/***/ }),

/***/ "./drm/widevine.js":
/*!*************************!*\
  !*** ./drm/widevine.js ***!
  \*************************/
/*! exports provided: Widevine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widevine", function() { return Widevine; });
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/playkit-js */ "@playkit-js/playkit-js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__);
var _class, _temp;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Widevine = (_temp = _class = /*#__PURE__*/function () {
  function Widevine() {}

  /**
   * Widevine is the configure key system.
   * @param {Array<Object>} drmData - The drm data.
   * @param {PKDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether Widevine is the configure key system.
   */
  Widevine.isConfigured = function isConfigured(drmData, drmConfig) {
    return _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].WIDEVINE === drmConfig.keySystem && !!drmData.find(function (drmEntry) {
      return drmEntry.scheme === drmConfig.keySystem;
    });
  }
  /**
   * Widevine playback supports in case 2 conditions are met:
   * 1. The environment supports Widevine playback.
   * 2. The drm data of the source object contains entry with Widevine scheme.
   * @param {Array<Object>} drmData - The drm data to check.
   * @return {boolean} - Whether Widevine can be play on the current environment.
   */
  ;

  Widevine.canPlayDrm = function canPlayDrm(drmData) {
    Widevine._logger.debug('Can play DRM scheme of: ' + _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].WIDEVINE);

    return !!drmData.find(function (drmEntry) {
      return drmEntry.scheme === _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].WIDEVINE;
    });
  }
  /**
   * Sets the Widevine playback.
   * @param {Object} config - The shaka player config.
   * @param {Array<Object>} drmData - The drm data.
   * @returns {void}
   */
  ;

  Widevine.setDrmPlayback = function setDrmPlayback(config, drmData) {
    Widevine._logger.debug('Sets drm playback');

    var browser = _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["Env"].browser.name;
    var wwDrmEntry = drmData.find(function (drmEntry) {
      return drmEntry.scheme === _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].WIDEVINE;
    });

    if (wwDrmEntry) {
      var _servers;

      config.drm = {
        servers: (_servers = {}, _servers[_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].WIDEVINE] = wwDrmEntry.licenseUrl, _servers),
        advanced: {}
      };

      if (browser === 'Chrome') {
        var _config$drm$advanced;

        config.drm.advanced = (_config$drm$advanced = {}, _config$drm$advanced[_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["DrmScheme"].WIDEVINE] = {
          videoRobustness: 'SW_SECURE_CRYPTO',
          audioRobustness: 'SW_SECURE_CRYPTO'
        }, _config$drm$advanced);
      }
    }
  };

  return Widevine;
}(), _defineProperty(_class, "_logger", Object(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["getLogger"])('Widevine')), _temp);


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default, VERSION, NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME", function() { return NAME; });
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/playkit-js */ "@playkit-js/playkit-js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dash_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-adapter */ "./dash-adapter.js");


var VERSION = "1.31.2";
var NAME = "@playkit-js/playkit-js-dash";
/* harmony default export */ __webpack_exports__["default"] = (_dash_adapter__WEBPACK_IMPORTED_MODULE_1__["default"]);
 // Register DashAdapter to the media source adapter manager

if (_dash_adapter__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported()) {
  Object(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_0__["registerMediaSourceAdapter"])(_dash_adapter__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./parser/adaptation-set.js":
/*!**********************************!*\
  !*** ./parser/adaptation-set.js ***!
  \**********************************/
/*! exports provided: AdaptationSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdaptationSet", function() { return AdaptationSet; });
/* harmony import */ var _segment_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-template */ "./parser/segment-template.js");
/* harmony import */ var _representation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./representation */ "./parser/representation.js");
/* harmony import */ var _parser_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser-utils */ "./parser/parser-utils.js");
/* harmony import */ var _essential_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./essential-property */ "./parser/essential-property.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var AdaptationSet = /*#__PURE__*/function () {
  function AdaptationSet(elem) {
    this._id = _parser_utils__WEBPACK_IMPORTED_MODULE_2__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_2__["MpdUtils"].AttributeTypes.ID);
    this._mimeType = _parser_utils__WEBPACK_IMPORTED_MODULE_2__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_2__["MpdUtils"].AttributeTypes.MIME_TYPE);
    this._contentType = _parser_utils__WEBPACK_IMPORTED_MODULE_2__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_2__["MpdUtils"].AttributeTypes.CONTENT_TYPE);
    this._representations = Array.from(_parser_utils__WEBPACK_IMPORTED_MODULE_2__["XmlUtils"].findChildren(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_2__["MpdUtils"].TagTypes.REPRESENTATION)).map(function (repElem) {
      return new _representation__WEBPACK_IMPORTED_MODULE_1__["Representation"](repElem);
    });
    var segTempElem = _parser_utils__WEBPACK_IMPORTED_MODULE_2__["XmlUtils"].findChild(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_2__["MpdUtils"].TagTypes.SEGMENT_TEMPLATE);

    if (segTempElem) {
      this._segmentTemplate = new _segment_template__WEBPACK_IMPORTED_MODULE_0__["SegmentTemplate"](segTempElem);
    }

    var essPropElem = _parser_utils__WEBPACK_IMPORTED_MODULE_2__["XmlUtils"].findChild(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_2__["MpdUtils"].TagTypes.ESSENTIAL_PROPERTY);

    if (essPropElem) {
      this._essentialProperty = new _essential_property__WEBPACK_IMPORTED_MODULE_3__["EssentialProperty"](essPropElem);
    }
  }

  _createClass(AdaptationSet, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "mimeType",
    get: function get() {
      return this._mimeType;
    }
  }, {
    key: "contentType",
    get: function get() {
      return this._contentType;
    }
  }, {
    key: "segmentTemplate",
    get: function get() {
      return this._segmentTemplate;
    }
  }, {
    key: "essentialProperty",
    get: function get() {
      return this._essentialProperty;
    }
  }, {
    key: "representations",
    get: function get() {
      return this._representations;
    }
  }]);

  return AdaptationSet;
}();

_defineProperty(AdaptationSet, "ContentType", {
  VIDEO: 'video',
  AUDIO: 'audio',
  TEXT: 'text',
  IMAGE: 'image'
});



/***/ }),

/***/ "./parser/dash-manifest-parser.js":
/*!****************************************!*\
  !*** ./parser/dash-manifest-parser.js ***!
  \****************************************/
/*! exports provided: DashManifestParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashManifestParser", function() { return DashManifestParser; });
/* harmony import */ var _parser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-utils */ "./parser/parser-utils.js");
/* harmony import */ var _adaptation_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptation-set */ "./parser/adaptation-set.js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/playkit-js */ "@playkit-js/playkit-js");
/* harmony import */ var _playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DashManifestParser = /*#__PURE__*/function () {
  DashManifestParser.isValid = function isValid() {
    return window.TextEncoder && window.TextDecoder;
  };

  function DashManifestParser(manifest) {
    var _this = this;

    _defineProperty(this, "_logger", Object(_playkit_js_playkit_js__WEBPACK_IMPORTED_MODULE_2__["getLogger"])('DashManifestParser'));

    _defineProperty(this, "_parseAdaptionSets", function () {
      var baseURL = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].findElements(_this._xmlDoc, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].TagTypes.BASE_URL);

      if (baseURL && baseURL.length > 0) {
        if (baseURL[0].innerHTML) {
          _this._baseURL = baseURL[0].textContent;
        }
      }

      var adaptationNodes = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].findElements(_this._xmlDoc, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].TagTypes.ADAPTATION_SET); // For now parse only image adaptation sets

      var imageAdaptationsNodes = Array.from(adaptationNodes).filter(function (adaptation) {
        return _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(adaptation, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.CONTENT_TYPE) === _adaptation_set__WEBPACK_IMPORTED_MODULE_1__["AdaptationSet"].ContentType.IMAGE;
      });

      if (imageAdaptationsNodes.length > 0) {
        _this._adaptationSets = imageAdaptationsNodes.map(function (adaptation) {
          return new _adaptation_set__WEBPACK_IMPORTED_MODULE_1__["AdaptationSet"](adaptation);
        });

        _this._logger.debug('Found image adaptation set', _this._adaptationSets);
      } else {
        _this._logger.debug('No image adaptations were found in manifest');
      }
    });

    this._logger.debug('Initialize manifest parser');

    this._adaptationSets = [];
    var xmlStr;

    if (manifest instanceof ArrayBuffer) {
      xmlStr = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["ParserUtils"].BufferToStr(manifest);
    } else {
      xmlStr = manifest;
    }

    if (xmlStr) {
      this._xmlDoc = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseXml(xmlStr);
    }
  }

  var _proto = DashManifestParser.prototype;

  _proto.parseManifest = function parseManifest() {
    try {
      this._logger.debug('Start parsing dash manifest'); // For now parse only adaptation sets


      this._parseAdaptionSets();

      this._logger.debug('Manifest parsing finished successfully');
    } catch (e) {
      this._logger.warn('Manifest parsing failed', e);
    }
  } // return the manifest BaseURL tag textvalue
  ;

  _proto.getBaseUrl = function getBaseUrl() {
    return this._baseURL || '';
  };

  _proto.getImageSet = function getImageSet() {
    return this._adaptationSets.find(function (adaptationSet) {
      return adaptationSet.contentType === _adaptation_set__WEBPACK_IMPORTED_MODULE_1__["AdaptationSet"].ContentType.IMAGE;
    });
  };

  _proto.hasImageSet = function hasImageSet() {
    return !!this.getImageSet();
  };

  _createClass(DashManifestParser, [{
    key: "adaptationSets",
    get: function get() {
      return this._adaptationSets;
    }
  }]);

  return DashManifestParser;
}();



/***/ }),

/***/ "./parser/essential-property.js":
/*!**************************************!*\
  !*** ./parser/essential-property.js ***!
  \**************************************/
/*! exports provided: EssentialProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssentialProperty", function() { return EssentialProperty; });
/* harmony import */ var _parser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-utils */ "./parser/parser-utils.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var EssentialProperty = /*#__PURE__*/function () {
  function EssentialProperty(elem) {
    this._schemeIdUri = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.SCHEME_ID_URI);
    this._value = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.VALUE);
  }

  _createClass(EssentialProperty, [{
    key: "schemeIdUri",
    get: function get() {
      return this._schemeIdUri;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  return EssentialProperty;
}();



/***/ }),

/***/ "./parser/parser-utils.js":
/*!********************************!*\
  !*** ./parser/parser-utils.js ***!
  \********************************/
/*! exports provided: ParserUtils, MpdUtils, XmlUtils, UrlUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserUtils", function() { return ParserUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MpdUtils", function() { return MpdUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlUtils", function() { return XmlUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlUtils", function() { return UrlUtils; });
/* harmony import */ var _segment_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment-template */ "./parser/segment-template.js");

var UrlUtils = {
  resolve: function resolve(url, data) {
    var id = data.id,
        index = data.index,
        bitrate = data.bitrate,
        time = data.time;
    var regExp = /\$([a-zA-Z]+)\$/g;
    var expressions = url.match(regExp);

    var replaceTokens = function replaceTokens(url, exp, token) {
      return token ? url.replace(exp, token) : url;
    };

    if (expressions) {
      expressions.forEach(function (exp) {
        switch (exp) {
          case _segment_template__WEBPACK_IMPORTED_MODULE_0__["SegmentTemplate"].MediaTemplateType.REPRESENTATION:
            url = replaceTokens(url, exp, id);
            break;

          case _segment_template__WEBPACK_IMPORTED_MODULE_0__["SegmentTemplate"].MediaTemplateType.NUMBER:
            url = replaceTokens(url, exp, index);
            break;

          case _segment_template__WEBPACK_IMPORTED_MODULE_0__["SegmentTemplate"].MediaTemplateType.BANDWIDTH:
            url = replaceTokens(url, exp, bitrate);
            break;

          case _segment_template__WEBPACK_IMPORTED_MODULE_0__["SegmentTemplate"].MediaTemplateType.TIME:
            url = replaceTokens(url, exp, time);
            break;
        }
      });
    }

    return url;
  }
};
var ParserUtils = {
  BufferToStr: function BufferToStr(buffer) {
    if (TextDecoder) {
      var textDecoder = new TextDecoder();
      return textDecoder.decode(new Uint8Array(buffer));
    }

    return null;
  },
  StrToBuffer: function StrToBuffer(str) {
    if (TextEncoder) {
      var textEncoder = new TextEncoder();
      return textEncoder.encode(str);
    }

    return null;
  }
};
var MpdUtils = {
  TagTypes: {
    BASE_URL: 'BaseURL',
    SEGMENT_TEMPLATE: 'SegmentTemplate',
    REPRESENTATION: 'Representation',
    ESSENTIAL_PROPERTY: 'EssentialProperty',
    ADAPTATION_SET: 'AdaptationSet'
  },
  AttributeTypes: {
    BASE_URL: 'BaseURL',
    ID: 'id',
    CONTENT_TYPE: 'contentType',
    MIME_TYPE: 'mimeType',
    MEDIA: 'media',
    DURATION: 'duration',
    START_NUMBER: 'startNumber',
    TIMESCALE: 'timescale',
    PRESENTATION_TIME_OFFSET: 'presentationTimeOffset',
    END_NUMBER: 'endNumber',
    BANDWIDTH: 'bandwidth',
    WIDTH: 'width',
    HEIGHT: 'height',
    SCHEME_ID_URI: 'schemeIdUri',
    VALUE: 'value'
  }
};
var XmlUtils = {
  parseXml: function parseXml(text) {
    var domParser = new DOMParser();
    return domParser.parseFromString(text, 'text/xml');
  },
  parseAttr: function parseAttr(elem, name, parseFunction, defaultValue) {
    var parsedValue = null;
    var value = elem.getAttribute(name);

    if (value !== null) {
      parsedValue = parseFunction ? parseFunction(value) : value;
    }

    return parsedValue == null ? defaultValue : parsedValue;
  },
  findElements: function findElements(node, name) {
    return node.getElementsByTagName(name);
  },
  findChild: function findChild(elem, name) {
    var children = this.findChildren(elem, name);

    if (children.length !== 1) {
      return null;
    }

    return children[0];
  },
  findChildren: function findChildren(elem, name) {
    return Array.from(elem.childNodes).filter(function (child) {
      return child instanceof Element && child.tagName === name;
    });
  },
  parseInt: function parseInt(intString) {
    var n = Number(intString);
    return n % 1 === 0 ? n : null;
  },
  parsePositiveInt: function parsePositiveInt(intString) {
    var n = Number(intString);
    return n % 1 === 0 && n > 0 ? n : null;
  },
  parseFloat: function parseFloat(floatString) {
    var n = Number(floatString);
    return !isNaN(n) ? n : null;
  }
};


/***/ }),

/***/ "./parser/representation.js":
/*!**********************************!*\
  !*** ./parser/representation.js ***!
  \**********************************/
/*! exports provided: Representation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Representation", function() { return Representation; });
/* harmony import */ var _essential_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./essential-property */ "./parser/essential-property.js");
/* harmony import */ var _parser_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser-utils */ "./parser/parser-utils.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Representation = /*#__PURE__*/function () {
  function Representation(elem) {
    this._id = _parser_utils__WEBPACK_IMPORTED_MODULE_1__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_1__["MpdUtils"].AttributeTypes.ID);
    this._bandwidth = _parser_utils__WEBPACK_IMPORTED_MODULE_1__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_1__["MpdUtils"].AttributeTypes.BANDWIDTH, parseInt);
    this._width = _parser_utils__WEBPACK_IMPORTED_MODULE_1__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_1__["MpdUtils"].AttributeTypes.WIDTH, parseInt);
    this._height = _parser_utils__WEBPACK_IMPORTED_MODULE_1__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_1__["MpdUtils"].AttributeTypes.HEIGHT, parseInt);
    var essPropElem = _parser_utils__WEBPACK_IMPORTED_MODULE_1__["XmlUtils"].findChild(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_1__["MpdUtils"].TagTypes.ESSENTIAL_PROPERTY);

    if (essPropElem) {
      this._essentialProperty = new _essential_property__WEBPACK_IMPORTED_MODULE_0__["EssentialProperty"](essPropElem);
    }
  }

  _createClass(Representation, [{
    key: "bandwidth",
    get: function get() {
      return this._bandwidth;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "essentialProperty",
    get: function get() {
      return this._essentialProperty;
    }
  }]);

  return Representation;
}();



/***/ }),

/***/ "./parser/segment-template.js":
/*!************************************!*\
  !*** ./parser/segment-template.js ***!
  \************************************/
/*! exports provided: SegmentTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentTemplate", function() { return SegmentTemplate; });
/* harmony import */ var _parser_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser-utils */ "./parser/parser-utils.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SegmentTemplate = /*#__PURE__*/function () {
  function SegmentTemplate(elem) {
    this._media = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.MEDIA);
    this._startNumber = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.START_NUMBER, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseInt, 1);
    this._duration = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.DURATION, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseFloat);
    this._timescale = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.TIMESCALE, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parsePositiveInt, 1);
    this._presentationTimeOffset = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.PRESENTATION_TIME_OFFSET, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseInt, 0);
    this._endNumber = _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parseAttr(elem, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["MpdUtils"].AttributeTypes.END_NUMBER, _parser_utils__WEBPACK_IMPORTED_MODULE_0__["XmlUtils"].parsePositiveInt);
  }

  _createClass(SegmentTemplate, [{
    key: "media",
    get: function get() {
      return this._media;
    }
  }, {
    key: "startNumber",
    get: function get() {
      return this._startNumber;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
  }, {
    key: "timescale",
    get: function get() {
      return this._timescale;
    }
  }, {
    key: "presentationTimeOffset",
    get: function get() {
      return this._presentationTimeOffset;
    }
  }, {
    key: "endNumber",
    get: function get() {
      return this._endNumber;
    }
  }]);

  return SegmentTemplate;
}();

_defineProperty(SegmentTemplate, "MediaTemplateType", {
  REPRESENTATION: '$RepresentationID$',
  NUMBER: '$Number$',
  BANDWIDTH: '$Bandwidth$',
  TIME: '$Time$'
});



/***/ }),

/***/ "@playkit-js/playkit-js":
/*!****************************************************************************************************************************************!*\
  !*** external {"commonjs":"@playkit-js/playkit-js","commonjs2":"@playkit-js/playkit-js","amd":"playkit-js","root":["playkit","core"]} ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__playkit_js_playkit_js__;

/***/ }),

/***/ "shaka-player":
/*!***********************************************************************************************************!*\
  !*** external {"commonjs":"shaka-player","commonjs2":"shaka-player","amd":"shaka-player","root":"shaka"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_shaka_player__;

/***/ })

/******/ });
});
//# sourceMappingURL=playkit-dash.js.map