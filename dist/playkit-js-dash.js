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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Playkit", [], factory);
	else if(typeof exports === 'object')
		exports["Playkit"] = factory();
	else
		root["Playkit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * General track representation of the player.
 * @classdesc
 */
var Track = function () {
  _createClass(Track, [{
    key: "id",


    /**
     * Getter for the track id.
     * @public
     * @returns {?string} - The track id.
     */

    /**
     * The language of the track.
     * @member
     * @type {string}
     * @private
     */

    /**
     * The active mode of the track.
     * @member
     * @type {boolean}
     * @private
     */
    get: function get() {
      return this._id;
    }

    /**
     * Getter for the active mode of the track.
     * @public
     * @returns {boolean} - The active mode of the track.
     */

    /**
     * The index of the track.
     * @member
     * @type {number}
     * @private
     */

    /**
     * The label of the track.
     * @member
     * @type {string}
     * @private
     */

    /**
     * The id of the track.
     * @member
     * @type {string}
     * @private
     */

  }, {
    key: "active",
    get: function get() {
      return this._active;
    }

    /**
     * Setter for the active mode of the track.
     * @public
     * @param {boolean} value - Whether the track is active or not.
     */
    ,
    set: function set(value) {
      this._active = value;
    }

    /**
     * Getter for the label of the track.
     * @public
     * @returns {string} - The label of the track.
     */

  }, {
    key: "label",
    get: function get() {
      return this._label;
    }

    /**
     * Getter for the language of the track.
     * @public
     * @returns {string} - The language of the track.
     */

  }, {
    key: "language",
    get: function get() {
      return this._language;
    }

    /**
     * Getter for the index of the track.
     * @public
     * @returns {number} - The index of the track.
     */

  }, {
    key: "index",
    get: function get() {
      return this._index;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

  }]);

  function Track() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Track);

    this._id = settings.id;
    this._active = settings.active;
    this._label = settings.label;
    this._language = settings.language;
    this._index = settings.index;
  }

  return Track;
}();

exports.default = Track;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOG_LEVEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLogger = __webpack_require__(24);

var JsLogger = _interopRequireWildcard(_jsLogger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LOG_LEVEL = {
  "DEBUG": JsLogger.DEBUG,
  "INFO": JsLogger.INFO,
  "TIME": JsLogger.TIME,
  "WARN": JsLogger.WARN,
  "ERROR": JsLogger.ERROR,
  "OFF": JsLogger.OFF
};

var LoggerFactory = function () {
  function LoggerFactory(options) {
    _classCallCheck(this, LoggerFactory);

    JsLogger.useDefaults(options || {});
  }

  _createClass(LoggerFactory, [{
    key: "getLogger",
    value: function getLogger(name) {
      if (!name) {
        return JsLogger;
      }
      return JsLogger.get(name);
    }
  }]);

  return LoggerFactory;
}();

var lf = new LoggerFactory({ defaultLevel: JsLogger.DEBUG });

exports.default = lf;
exports.LOG_LEVEL = LOG_LEVEL;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Create an Event work-alike object based on the dictionary.
 * The event should contain all of the same properties from the dict.
 * @param {string} type -
 * @param {Object=} opt_dict -
 * @constructor
 * @extends {Event}
 */
var FakeEvent = function () {

  /**
   * Non-standard property read by FakeEventTarget to stop processing listeners.
   * @type {boolean}
   */


  /** @type {EventTarget} */


  /** @const {string} */


  /** @const {boolean} */

  /** @const {boolean} */
  function FakeEvent(type, payload) {
    _classCallCheck(this, FakeEvent);

    // These Properties below cannot be set by dict.  They are all provided for
    // compatibility with native events.

    /** @const {boolean} */
    this.bubbles = false;

    /** @const {boolean} */
    this.cancelable = false;

    /** @const {boolean} */
    this.defaultPrevented = false;

    /**
     * According to MDN, Chrome uses high-res timers instead of epoch time.
     * Follow suit so that timeStamps on FakeEvents use the same base as
     * on native Events.
     * @const {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
     */
    this.timeStamp = window.performance ? window.performance.now() : Date.now();

    /** @const {string} */
    this.type = type;

    /** @const {boolean} */
    this.isTrusted = false;

    /** @type {EventTarget} */
    this.currentTarget = null;

    /** @type {EventTarget} */
    this.target = null;

    /**
     * Non-standard property read by FakeEventTarget to stop processing listeners.
     * @type {boolean}
     */
    this.stopped = false;

    this.payload = payload;
  }

  /**
   * Does nothing, since FakeEvents have no default.  Provided for compatibility
   * with native Events.
   * @override
   */


  /** @type {EventTarget} */


  /** @const {boolean} */


  /**
   * According to MDN, Chrome uses high-res timers instead of epoch time.
   * Follow suit so that timeStamps on FakeEvents use the same base as
   * on native Events.
   * @const {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp
   */


  /** @const {boolean} */


  _createClass(FakeEvent, [{
    key: "preventDefault",
    value: function preventDefault() {}

    /**
     * Stops processing event listeners for this event.  Provided for compatibility
     * with native Events.
     * @override
     */

  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.stopped = true;
    }

    /**
     * Does nothing, since FakeEvents do not bubble.  Provided for compatibility
     * with native Events.
     * @override
     */

  }, {
    key: "stopPropagation",
    value: function stopPropagation() {}
  }]);

  return FakeEvent;
}();

exports.default = FakeEvent;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Audio track representation of the player.
 * @classdesc
 */
var AudioTrack = function (_Track) {
  _inherits(AudioTrack, _Track);

  function AudioTrack() {
    _classCallCheck(this, AudioTrack);

    return _possibleConstructorReturn(this, (AudioTrack.__proto__ || Object.getPrototypeOf(AudioTrack)).apply(this, arguments));
  }

  return AudioTrack;
}(_track2.default);

exports.default = AudioTrack;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Text track representation of the player.
 * @classdesc
 */
var TextTrack = function (_Track) {
  _inherits(TextTrack, _Track);

  _createClass(TextTrack, [{
    key: 'kind',


    /**
     * Getter for the kind of the text track.
     * @public
     * @returns {string} - The kind of the text track.
     */
    get: function get() {
      return this._kind;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

    /**
     * The kind of the text track:
     * subtitles/captions/metadata.
     * @member
     * @type {string}
     * @private
     */

  }]);

  function TextTrack() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TextTrack);

    var _this = _possibleConstructorReturn(this, (TextTrack.__proto__ || Object.getPrototypeOf(TextTrack)).call(this, settings));

    _this._kind = settings.kind;
    return _this;
  }

  return TextTrack;
}(_track2.default);

exports.default = TextTrack;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Video track representation of the player.
 * @classdesc
 */
var VideoTrack = function (_Track) {
  _inherits(VideoTrack, _Track);

  _createClass(VideoTrack, [{
    key: 'bandwidth',


    /**
     * Getter for the kind of the text track.
     * @public
     * @returns {string} - The kind of the text track.
     */
    get: function get() {
      return this._bandwidth;
    }

    /**
     * @constructor
     * @param {Object} settings - The track settings object.
     */

    /**
     * The kind of the text track:
     * subtitles/captions/metadata.
     * @member
     * @type {string}
     * @private
     */

  }]);

  function VideoTrack() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, VideoTrack);

    var _this = _possibleConstructorReturn(this, (VideoTrack.__proto__ || Object.getPrototypeOf(VideoTrack)).call(this, settings));

    _this._bandwidth = settings.bandwidth;
    return _this;
  }

  return VideoTrack;
}(_track2.default);

exports.default = VideoTrack;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _multiMap = __webpack_require__(17);

var _multiMap2 = _interopRequireDefault(_multiMap);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a new EventManager. An EventManager maintains a collection of "event
 * bindings" between event targets and event listeners.
 *
 * @struct
 * @constructor
 * @implements {IDestroyable}
 */
var EventManager = function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    /**
     * Maps an event type to an array of event bindings.
     * @private {MultiMap.<!EventManager.Binding_>}
     */
    this._bindingMap = new _multiMap2.default();
  }

  /**
   * Detaches all event listeners.
   * @override
   */


  _createClass(EventManager, [{
    key: 'destroy',
    value: function destroy() {
      this.removeAll();
      this._bindingMap = null;
      return Promise.resolve();
    }

    /**
     * Attaches an event listener to an event target.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     * @param {EventManager.ListenerType} listener The event listener.
     * @returns {void}
     */

  }, {
    key: 'listen',
    value: function listen(target, type, listener) {
      var binding = new Binding_(target, type, listener);
      if (this._bindingMap) {
        this._bindingMap.push(type, binding);
      }
    }

    /**
     * Detaches an event listener from an event target.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     * @returns {void}
     */

  }, {
    key: 'unlisten',
    value: function unlisten(target, type) {
      if (this._bindingMap) {
        var list = this._bindingMap.get(type);

        for (var i = 0; i < list.length; ++i) {
          var binding = list[i];

          if (binding.target == target) {
            binding.unlisten();
            if (this._bindingMap) {
              this._bindingMap.remove(type, binding);
            }
          }
        }
      }
    }

    /**
     * Detaches all event listeners from all targets.
     * @returns {void}
     */

  }, {
    key: 'removeAll',
    value: function removeAll() {
      if (this._bindingMap) {
        var listeners = this._bindingMap.getAll();

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var listener = _step.value;

            listener.unlisten();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (this._bindingMap) {
          this._bindingMap.clear();
        }
      }
    }
  }]);

  return EventManager;
}();

/**
 * @typedef {function(!Event)}
 */


/**
 * Creates a new Binding_ and attaches the event listener to the event target.
 * @param {EventTarget} target The event target.
 * @param {string} type The event type.
 * @param {EventManager.ListenerType} listener The event listener.
 * @constructor
 * @private
 */
var Binding_ = function () {
  function Binding_(target, type, listener) {
    _classCallCheck(this, Binding_);

    /** @type {EventTarget} */
    this.target = target;

    /** @type {string} */
    this.type = type;

    /** @type {?EventManager.ListenerType} */
    this.listener = listener;

    this.target.addEventListener(type, listener, false);
  }

  /**
   * Detaches the event listener from the event target. This does nothing if the
   * event listener is already detached.
   * @returns {void}
   */


  _createClass(Binding_, [{
    key: 'unlisten',
    value: function unlisten() {
      if (!this.target) return;

      this.target.removeEventListener(this.type, this.listener, false);

      this.target = null;
      this.listener = null;
    }
  }]);

  return Binding_;
}();

exports.default = EventManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CUSTOM_EVENTS = exports.HTML5_EVENTS = exports.PLAYER_EVENTS = undefined;

var _util = __webpack_require__(11);

var HTML5_EVENTS = {
  /**
   * Fires when the loading of an audio/video is aborted
   */
  ABORT: 'abort',
  /**
   * Fires when the browser can start playing the audio/video
   */
  CAN_PLAY: 'canplay',
  /**
   * Fires when the browser can play through the audio/video without stopping for buffering
   */
  CAN_PLAY_THROUGH: 'canplaythrough',
  /**
   * Fires when the duration of the audio/video is changed
   */
  DURATION_CHANGE: 'durationchange',
  /**
   * Fires when the current playlist is empty
   */
  EMPTIED: 'emptied',
  /**
   * Fires when the current playlist is ended
   */
  ENDED: 'ended',
  /**
   * Fires when an error occurred during the loading of an audio/video
   */
  ERROR: 'error',
  /**
   * Fires when the browser has loaded the current frame of the audio/video
   */
  LOADED_DATA: 'loadeddata',
  /**
   * Fires when the browser has loaded meta data for the audio/video
   */
  LOADED_METADATA: 'loadedmetadata',
  /**
   * Fires when the browser starts looking for the audio/video
   */
  LOAD_START: 'loadstart',
  /**
   * Fires when the audio/video has been paused
   */
  PAUSE: 'pause',
  /**
   * Fires when the audio/video has been started or is no longer paused
   */
  PLAY: 'play',
  /**
   * Fires when the audio/video is playing after having been paused or stopped for buffering
   */
  PLAYING: 'playing',
  /**
   * Fires when the browser is downloading the audio/video
   */
  PROGRESS: 'progress',
  /**
   * Fires when the playing speed of the audio/video is changed
   */
  RATE_CHANGE: 'ratechange',
  /**
   * Fires when the user is finished moving/skipping to a new position in the audio/video
   */
  SEEKED: 'seeked',
  /**
   * Fires when the user starts moving/skipping to a new position in the audio/video
   */
  SEEKING: 'seeking',
  /**
   * Fires when the browser is trying to get media data, but data is not available
   */
  STALLED: 'stalled',
  /**
   * Fires when the browser is intentionally not getting media data
   */
  SUSPEND: 'suspend',
  /**
   * Fires when the current playback position has changed
   */
  TIME_UPDATE: 'timeupdate',
  /**
   * Fires when the volume has been changed
   */
  VOLUME_CHANGE: 'volumechange',
  /**
   * Fires when the video stops because it needs to buffer the next frame
   */
  WAITING: 'waiting'
};


var CUSTOM_EVENTS = {
  /**
   * Fires when the video track has been changed
   */
  VIDEO_TRACK_CHANGED: 'videotrackchanged',
  /**
   * Fires when the audio track has been changed
   */
  AUDIO_TRACK_CHANGED: 'audiotrackchanged',
  /**
   * Fires when the text track has been changed
   */
  TEXT_TRACK_CHANGED: 'texttrackchanged',
  /**
   * Fires when the player state has been changed
   */
  PLAYER_STATE_CHANGED: 'playerstatechanged'
};

var PLAYER_EVENTS = (0, _util.merge)((0, _util.merge)({}, HTML5_EVENTS), CUSTOM_EVENTS);

exports.PLAYER_EVENTS = PLAYER_EVENTS;
exports.HTML5_EVENTS = HTML5_EVENTS;
exports.CUSTOM_EVENTS = CUSTOM_EVENTS;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(9);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _events = __webpack_require__(7);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _util = __webpack_require__(11);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _html = __webpack_require__(19);

var _html2 = _interopRequireDefault(_html);

var _pluginManager = __webpack_require__(15);

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _stateManager = __webpack_require__(21);

var _stateManager2 = _interopRequireDefault(_stateManager);

var _trackTypes = __webpack_require__(23);

var _trackTypes2 = _interopRequireDefault(_trackTypes);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The HTML5 player class.
 * @classdesc
 */
var Player = function (_FakeEventTarget) {
  _inherits(Player, _FakeEventTarget);

  /**
   * @param {Object} config - The configuration for the player instance.
   * @constructor
   */

  /**
   * The state manager of the player.
   * @type {StateManager}
   * @private
   */

  /**
   * The runtime configuration of the player.
   * @type {Object}
   * @private
   */

  /**
   * The plugin manager of the player.
   * @type {PluginManager}
   * @private
   */
  function Player(config) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this._tracks = [];
    _this._logger = _logger2.default.getLogger('Player');
    _this._stateManager = new _stateManager2.default(_this);
    _this._pluginManager = new _pluginManager2.default();
    _this._eventManager = new _eventManager2.default();
    _this.configure(config);
    return _this;
  }

  /**
   * Configures the player according to given configuration.
   * @param {Object} config - The configuration for the player instance.
   * @returns {void}
   */

  /**
   * The tracks of the player.
   * @type {Array<Track>}
   * @private
   */

  /**
   * The playback engine.
   * @type {IEngine}
   * @private
   */

  /**
   * The event manager of the player.
   * @type {EventManager}
   * @private
   */

  /**
   * The player class logger.
   * @type {any}
   * @private
   */


  _createClass(Player, [{
    key: 'configure',
    value: function configure(config) {
      if (this._config) {
        this._config = (0, _util.merge)(this._config, config);
      } else {
        this._config = config || Player._defaultConfig();
      }
      this._loadPlugins(this._config);
      this._selectEngine(this._config);
      this._attachMedia();
    }

    /**
     * Destroys the player.
     * @returns {void}
     * @public
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._engine.destroy();
      this._eventManager.destroy();
      this._pluginManager.destroy();
      this._stateManager.destroy();
      this._config = {};
      this._tracks = [];
    }

    /**
     * @returns {Object} - The default configuration of the player.
     * @private
     * @static
     */

  }, {
    key: '_loadPlugins',


    /**
     *
     * @param {Object} config - The configuration of the player instance.
     * @private
     * @returns {void}
     */
    value: function _loadPlugins(config) {
      var plugins = config.plugins;
      for (var name in plugins) {
        this._pluginManager.load(name, this, plugins[name]);
      }
    }

    /**
     * Select the engine to create based on the given configured sources.
     * @param {Object} config - The configuration of the player instance.
     * @private
     * @returns {void}
     */

  }, {
    key: '_selectEngine',
    value: function _selectEngine(config) {
      if (config && config.sources) {
        var sources = config.sources;
        for (var i = 0; i < sources.length; i++) {
          if (_html2.default.canPlayType(sources[i].mimetype)) {
            this._loadEngine(sources[i], config);
            break;
          }
        }
      }
    }

    /**
     * Loads the selected engine.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The configuration of the player instance.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadEngine',
    value: function _loadEngine(source, config) {
      this._engine = new _html2.default(source, config);
      if (config.preload === "auto") {
        this.load();
      }
    }

    /**
     * Listen to all HTML5 defined events and trigger them on the player
     * @private
     * @returns {void}
     */

  }, {
    key: '_attachMedia',
    value: function _attachMedia() {
      var _this2 = this;

      if (this._engine) {
        for (var playerEvent in _events.HTML5_EVENTS) {
          this._eventManager.listen(this._engine, _events.HTML5_EVENTS[playerEvent], function (event) {
            return _this2.dispatchEvent(event);
          });
        }
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          _this2._markActiveTrack(event.payload.selectedVideoTrack);
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          _this2._markActiveTrack(event.payload.selectedAudioTrack);
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._engine, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          _this2._markActiveTrack(event.payload.selectedTextTrack);
          return _this2.dispatchEvent(event);
        });
      }
    }

    /**
     * Returns the tracks according to the filter. if no filter given returns the all tracks.
     * @function getTracks
     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
     * @returns {Array<Track>} - The parsed tracks.
     * @public
     */

  }, {
    key: 'getTracks',
    value: function getTracks(type) {
      return this._getTracksByType(type);
    }

    /**
     * Returns the tracks according to the filter. if no filter given returns the all tracks.
     * @function _getTracksByType
     * @param {string} [type] - a tracks filter, should be 'video', 'audio' or 'text'.
     * @returns {Array<Track>} - The parsed tracks.
     * @private
     */

  }, {
    key: '_getTracksByType',
    value: function _getTracksByType(type) {
      return !type ? this._tracks : this._tracks.filter(function (track) {
        if (type === _trackTypes2.default.VIDEO) {
          return track instanceof _videoTrack2.default;
        } else if (type === _trackTypes2.default.AUDIO) {
          return track instanceof _audioTrack2.default;
        } else if (type === _trackTypes2.default.TEXT) {
          return track instanceof _textTrack2.default;
        } else {
          return true;
        }
      });
    }

    /**
     * Select a track
     * @function selectTrack
     * @param {Track} track - the track to select
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectTrack',
    value: function selectTrack(track) {
      if (this._engine) {
        if (track instanceof _videoTrack2.default) {
          this._engine.selectVideoTrack(track);
        } else if (track instanceof _audioTrack2.default) {
          this._engine.selectAudioTrack(track);
        } else if (track instanceof _textTrack2.default) {
          this._engine.selectTextTrack(track);
        }
      }
    }

    /**
     * Enables adaptive bitrate switching.
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @public
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._engine) {
        this._engine.enableAdaptiveBitrate();
      }
    }

    /**
     * Mark the selected track as active
     * @function _markActiveTrack
     * @param {Track} track - the track to mark
     * @returns {void}
     * @private
     */

  }, {
    key: '_markActiveTrack',
    value: function _markActiveTrack(track) {
      var type = void 0;
      if (track instanceof _videoTrack2.default) {
        type = _trackTypes2.default.VIDEO;
      } else if (track instanceof _audioTrack2.default) {
        type = _trackTypes2.default.AUDIO;
      } else if (track instanceof _textTrack2.default) {
        type = _trackTypes2.default.TEXT;
      }
      if (type) {
        var tracks = this.getTracks(type);
        for (var i = 0; i < tracks.length; i++) {
          tracks[i].active = track.index === i;
        }
      }
    }

    /**
     * Get the player config.
     * @returns {Object} - The player configuration.
     * @public
     */

  }, {
    key: 'play',


    //  <editor-fold desc="Playback Interface">
    /**
     * Start/resume playback.
     * @returns {void}
     * @public
     */
    value: function play() {
      var _this3 = this;

      if (this._engine) {
        if (this._engine.src) {
          this._engine.play();
        } else {
          this.load().then(function () {
            _this3._engine.play();
          });
        }
      }
    }

    /**
     * Pause playback.
     * @returns {void}
     * @public
     */

  }, {
    key: 'pause',
    value: function pause() {
      if (this._engine) {
        return this._engine.pause();
      }
    }

    /**
     * Load media.
     * @public
     * @returns {Promise<*>} - The load promise.
     */

  }, {
    key: 'load',
    value: function load() {
      var _this4 = this;

      if (this._engine) {
        return this._engine.load().then(function (data) {
          _this4._tracks = data.tracks;
        });
      } else {
        return Promise.resolve();
      }
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     */

  }, {
    key: 'ready',


    // </editor-fold>

    // <editor-fold desc="State">
    value: function ready() {}

    /**
     * Get paused state.
     * @returns {?boolean} - Whether the video is paused or not.
     * @public
     */

  }, {
    key: 'buffered',
    value: function buffered() {}

    /**
     * Set player muted state.
     * @param {boolean} mute - The mute value.
     * @returns {void}
     * @public
     */

  }, {
    key: 'config',
    get: function get() {
      return this._config;
    }
  }, {
    key: 'currentTime',
    set: function set(to) {
      if (this._engine) {
        if ((0, _util.isNumber)(to)) {
          var boundedTo = to;
          if (to < 0) {
            boundedTo = 0;
          }
          if (boundedTo > this._engine.duration) {
            boundedTo = this._engine.duration;
          }
          this._engine.currentTime = boundedTo;
        }
      }
    }

    /**
     * Get the current time in seconds.
     * @returns {?Number} - The playback current time.
     * @public
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.currentTime;
      }
    }

    /**
     * Get the duration in seconds.
     * @returns {?Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      if (this._engine) {
        return this._engine.duration;
      }
    }

    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @returns {void}
     * @public
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      if (this._engine) {
        if ((0, _util.isFloat)(vol)) {
          var boundedVol = vol;
          if (boundedVol < 0) {
            boundedVol = 0;
          }
          if (boundedVol > 1) {
            boundedVol = 1;
          }
          this._engine.volume = boundedVol;
        }
      }
    }

    /**
     * Get playback volume.
     * @returns {?Number} - The playback volume.
     * @public
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.volume;
      }
    }
  }, {
    key: 'paused',
    get: function get() {
      if (this._engine) {
        return this._engine.paused;
      }
    }

    /**
     * Get seeking state.
     * @returns {?boolean} - Whether the video is seeking or not.
     * @public
     */

  }, {
    key: 'seeking',
    get: function get() {
      if (this._engine) {
        return this._engine.seeking;
      }
    }
  }, {
    key: 'muted',
    set: function set(mute) {
      if (this._engine) {
        this._engine.muted = mute;
      }
    }

    /**
     * Get player muted state.
     * @returns {?boolean} - Whether the video is muted or not.
     * @public
     */
    ,
    get: function get() {
      if (this._engine) {
        return this._engine.muted;
      }
    }

    /**
     * Get the player source.
     * @returns {?string} - The current source of the player.
     * @public
     */

  }, {
    key: 'src',
    get: function get() {
      if (this._engine) {
        return this._engine.src;
      }
    }

    /**
     * Get the player events.
     * @returns {Object} - The events of the player.
     * @public
     */

  }, {
    key: 'Event',
    get: function get() {
      return _events.PLAYER_EVENTS;
    }

    /**
     * Get the player states.
     * @returns {Object} - The states of the player.
     * @public
     */

  }, {
    key: 'State',
    get: function get() {
      return _stateTypes2.default;
    }

    /**
     * Get the player tracks types.
     * @returns {Object} - The tracks types of the player.
     * @public
     */

  }, {
    key: 'Track',
    get: function get() {
      return _trackTypes2.default;
    }

    // </editor-fold>

  }], [{
    key: '_defaultConfig',
    value: function _defaultConfig() {
      return {};
    }
  }]);

  return Player;
}(_fakeEventTarget2.default);

exports.default = Player;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _multiMap = __webpack_require__(17);

var _multiMap2 = _interopRequireDefault(_multiMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A work-alike for EventTarget.  Only DOM elements may be true EventTargets,
 * but this can be used as a base class to provide event dispatch to non-DOM
 * classes.  Only FakeEvents should be dispatched.
 *
 * @struct
 * @constructor
 * @implements {EventTarget}
 * @export
 */
var FakeEventTarget = function () {
  function FakeEventTarget() {
    _classCallCheck(this, FakeEventTarget);

    /**
     * @private {!MultiMap.<FakeEventTarget.ListenerType>}
     */
    this._listeners = new _multiMap2.default();

    /**
     * The target of all dispatched events.  Defaults to |this|.
     * @type {EventTarget}
     */
    this.dispatchTarget = this;
  }

  /**
   * Add an event listener to this object.
   *
   * @param {string} type The event type to listen for.
   * @param {FakeEventTarget.ListenerType} listener The callback or
   *   listener object to invoke.
   * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
   *   parents, so events neither capture nor bubble.
   * @override
   * @export
   */


  _createClass(FakeEventTarget, [{
    key: 'addEventListener',
    value: function addEventListener(type, listener) {
      this._listeners.push(type, listener);
    }

    /**
     * Remove an event listener from this object.
     *
     * @param {string} type The event type for which you wish to remove a listener.
     * @param {FakeEventTarget.ListenerType} listener The callback or
     *   listener object to remove.
     * @param {boolean=} opt_capturing Ignored.  FakeEventTargets do not have
     *   parents, so events neither capture nor bubble.
     * @override
     * @export
     */

  }, {
    key: 'removeEventListener',
    value: function removeEventListener(type, listener) {
      this._listeners.remove(type, listener);
    }

    /**
     * Dispatch an event from this object.
     *
     * @param {!Event} event The event to be dispatched from this object.
     * @return {boolean} True if the default action was prevented.
     * @override
     * @export
     */

  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(event) {
      // In many browsers, it is complex to overwrite properties of actual Events.
      // Here we expect only to dispatch FakeEvents, which are simpler.
      //goog.asserts.assert(event instanceof FakeEvent,
      //    'FakeEventTarget can only dispatch FakeEvents!');

      var list = this._listeners.get(event.type) || [];

      for (var i = 0; i < list.length; ++i) {
        // Do this every time, since events can be re-dispatched from handlers.
        event.target = this.dispatchTarget;
        event.currentTarget = this.dispatchTarget;

        var listener = list[i];
        try {
          if (listener.handleEvent) {
            listener.handleEvent(event);
          } else {
            listener.call(this, event);
          }
        } catch (exception) {
          // Exceptions during event handlers should not affect the caller,
          // but should appear on the console as uncaught, according to MDN:
          // http://goo.gl/N6Ff27
          // TODO: add log
        }

        if (event.stopped) {
          break;
        }
      }

      return event.defaultPrevented;
    }
  }]);

  return FakeEventTarget;
}();

/**
 * These are the listener types defined in the closure extern for EventTarget.
 * @typedef {EventListener|function(!Event):(boolean|undefined)}
 */


exports.default = FakeEventTarget;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerError = function () {
  function PlayerError(error, param) {
    _classCallCheck(this, PlayerError);

    this.name = error.name;
    this.message = error.message(param);
  }

  _createClass(PlayerError, [{
    key: "getError",
    value: function getError() {
      return {
        name: this.name,
        message: this.message
      };
    }
  }]);

  return PlayerError;
}();

PlayerError.TYPE = {
  NOT_REGISTERED_PLUGIN: {
    name: "PluginNotRegisteredException",
    message: function message(name) {
      return "Cannot load " + name + " plugin. Name not found in the registry";
    }
  },
  NOT_VALID_HANDLER: {
    name: "PluginHandlerIsNotValidException",
    message: function message() {
      return "To activate plugin you must provide a class derived from BasePlugin";
    }
  },
  NOT_IMPLEMENTED_METHOD: {
    name: "NotImplementedException",
    message: function message(method) {
      return method + " method not implemented";
    }
  }
};
exports.default = PlayerError;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a number
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isNumber(n) {
  return Number(n) === n;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is an integer
 */
function isInt(n) {
  return isNumber(n) && n % 1 === 0;
}

/**
 * @param {number} n - A certain number
 * @returns {boolean} - If the input is a float
 */
function isFloat(n) {
  return isNumber(n) && n % 1 !== 0;
}

/**
 * @param {Object} obj1 - Certain object
 * @param {Object} obj2 - Certain object
 * @returns {*} - The merged object.
 */
function merge(obj1, obj2) {
  if (!obj1 && !obj2) return {};
  if (!obj1) return obj2;
  if (!obj2) return obj1;
  return Object.assign(obj1, obj2);
}

exports.isNumber = isNumber;
exports.isInt = isInt;
exports.isFloat = isFloat;
exports.merge = merge;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _fakeEventTarget = __webpack_require__(9);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _playerError = __webpack_require__(10);

var _playerError2 = _interopRequireDefault(_playerError);

var _events = __webpack_require__(7);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable no-unused-vars */


var BaseMediaSourceAdapter = function (_FakeEventTarget) {
  _inherits(BaseMediaSourceAdapter, _FakeEventTarget);

  _createClass(BaseMediaSourceAdapter, null, [{
    key: 'isSupported',


    /**
     * Checks if the media source adapter is supported.
     * @function isSupported
     * @returns {boolean} - Whether the media source adapter is supported.
     * @static
     */


    /**
     * The adapter config.
     * @member {Object} _config
     * @private
     */


    /**
     * The source object.
     * @member {Source} _sourceObj
     * @private
     */


    /**
     * The dom video element.
     * @member {HTMLVideoElement} _videoElement
     * @private
     */

    /**
     * Passing the custom events to the actual media source adapter.
     * @static
     */
    value: function isSupported() {
      return true;
    }

    /**
     * Factory method to create media source adapter.
     * @function createAdapter
     * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
     * @param {Object} source - The source Object.
     * @param {Object} config - The media source adapter configuration.
     * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
     * @static
     */


    /**
     * Passing the getLogger function to the actual media source adapter.
     * @type {Function}
     * @static
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(videoElement, source, config) {
      return new this(videoElement, source, config);
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to media source adapter.
     * @param {Source} source - The source object.
     * @param {Object} config - The media source adapter configuration.
     */

  }]);

  function BaseMediaSourceAdapter(videoElement, source, config) {
    _classCallCheck(this, BaseMediaSourceAdapter);

    var _this = _possibleConstructorReturn(this, (BaseMediaSourceAdapter.__proto__ || Object.getPrototypeOf(BaseMediaSourceAdapter)).call(this));

    _this._videoElement = videoElement;
    _this._sourceObj = source;
    _this._config = config;
    return _this;
  }

  /**
   * Destroys the media source adapter.
   * @function destroy
   * @returns {void}
   */


  _createClass(BaseMediaSourceAdapter, [{
    key: 'destroy',
    value: function destroy() {
      this._sourceObj = null;
      this._config = null;
    }

    /**
     * Triggers the appropriate track changed event.
     * @param {Track} track - The selected track.
     * @private
     * @returns {void}
     */

  }, {
    key: '_onTrackChanged',
    value: function _onTrackChanged(track) {
      if (track instanceof _videoTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.CustomEvents.VIDEO_TRACK_CHANGED, { selectedVideoTrack: track });
      } else if (track instanceof _audioTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.CustomEvents.AUDIO_TRACK_CHANGED, { selectedAudioTrack: track });
      } else if (track instanceof _textTrack2.default) {
        this._trigger(BaseMediaSourceAdapter.CustomEvents.TEXT_TRACK_CHANGED, { selectedTextTrack: track });
      }
    }

    /**
     * Dispatch an adapter event forward.
     * @param {string} name - The name of the event.
     * @param {Object} payload - The event payload.
     * @returns {void}
     */

  }, {
    key: '_trigger',
    value: function _trigger(name, payload) {
      this.dispatchEvent(new _fakeEvent2.default(name, payload));
    }

    /** Must implemented methods by the derived media source adapter **/

  }, {
    key: 'load',
    value: function load() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'load').getError();
    }
  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectVideoTrack').getError();
    }
  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectAudioTrack').getError();
    }
  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'selectTextTrack').getError();
    }
  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'enableAdaptiveBitrate').getError();
    }
  }, {
    key: 'src',
    get: function get() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'get src').getError();
    }
  }], [{
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'static canPlayType').getError();
    }
  }]);

  return BaseMediaSourceAdapter;
}(_fakeEventTarget2.default);

BaseMediaSourceAdapter.CustomEvents = _events.CUSTOM_EVENTS;
BaseMediaSourceAdapter.getLogger = _logger2.default.getLogger;
exports.default = BaseMediaSourceAdapter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMediaSourceAdapter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nativeAdapter = __webpack_require__(20);

var _nativeAdapter2 = _interopRequireDefault(_nativeAdapter);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Media source provider
 * @classdesc
 */
var MediaSourceProvider = function () {
  function MediaSourceProvider() {
    _classCallCheck(this, MediaSourceProvider);
  }

  _createClass(MediaSourceProvider, null, [{
    key: 'register',


    /**
     * Add a media source adapter to the registry
     * @function register
     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to register
     * @static
     * @returns {void}
     */

    /**
     * The media source adapter registry
     * @member {Array<IMediaSourceAdapter>} _mediaSourceAdapters
     * @static
     * @private
     */
    value: function register(mediaSourceAdapter) {
      if (mediaSourceAdapter) {
        if (!MediaSourceProvider._mediaSourceAdapters.includes(mediaSourceAdapter)) {
          MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.name + '> has been registered successfully');
          MediaSourceProvider._mediaSourceAdapters.push(mediaSourceAdapter);
        } else {
          MediaSourceProvider._logger.debug('Adapter <' + mediaSourceAdapter.name + '> is already registered, do not register again');
        }
      }
    }

    /**
     * Remove a media source adapter from the registry
     * @function unRegister
     * @param {IMediaSourceAdapter} mediaSourceAdapter - The media source adapter to unRegister
     * @static
     * @returns {void}
     */

    /**
     * The selected adapter for playback
     * @type {null|IMediaSourceAdapter}
     * @static
     * @private
     */

    /**
     * The logger of the media source provider
     * @member {any} _logger
     * @static
     * @private
     */

  }, {
    key: 'unRegister',
    value: function unRegister(mediaSourceAdapter) {
      var index = MediaSourceProvider._mediaSourceAdapters.indexOf(mediaSourceAdapter);
      if (index > -1) {
        MediaSourceProvider._logger.debug('Unregistered <' + mediaSourceAdapter.name + '> adapter');
        MediaSourceProvider._mediaSourceAdapters.splice(index, 1);
      }
    }

    /**
     * Checks if one of the registered media source adapters can play a given mime type
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @static
     * @returns {boolean} - If one of the adapters can play the specific mime type
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      var mediaSourceAdapters = MediaSourceProvider._mediaSourceAdapters;
      for (var i = 0; i < mediaSourceAdapters.length; i++) {
        if (mediaSourceAdapters[i].canPlayType(mimeType)) {
          MediaSourceProvider._selectedAdapter = mediaSourceAdapters[i];
          MediaSourceProvider._logger.debug('Selected adapter is <' + MediaSourceProvider._selectedAdapter.name + '>');
          return true;
        }
      }
      return false;
    }

    /**
     * Get the appropriate media source adapter to the video source
     * @function getMediaSourceAdapter
     * @param {HTMLVideoElement} videoElement - The video element which requires adapter for a given mimeType
     * @param {Source} source - The selected source object
     * @param {Object} config - The player configuration
     * @returns {IMediaSourceAdapter|null} - The selected media source adapter, or null if such doesn't exists
     * @static
     */

  }, {
    key: 'getMediaSourceAdapter',
    value: function getMediaSourceAdapter(videoElement, source, config) {
      if (videoElement && source && config) {
        if (!MediaSourceProvider._selectedAdapter) {
          MediaSourceProvider.canPlayType(source.mimetype);
        }
        return MediaSourceProvider._selectedAdapter ? MediaSourceProvider._selectedAdapter.createAdapter(videoElement, source, config.engines) : null;
      }
      return null;
    }
  }]);

  return MediaSourceProvider;
}();

MediaSourceProvider._logger = _logger2.default.getLogger('MediaSourceProvider');
MediaSourceProvider._mediaSourceAdapters = [_nativeAdapter2.default];
MediaSourceProvider._selectedAdapter = null;
exports.default = MediaSourceProvider;


var registerMediaSourceAdapter = MediaSourceProvider.register;
exports.registerMediaSourceAdapter = registerMediaSourceAdapter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _util = __webpack_require__(11);

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _playerError = __webpack_require__(10);

var _playerError2 = _interopRequireDefault(_playerError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** The BasePlugin responsible to implement the plugin interface.
 * Contains several default implementations.
 * Other plugins should extend this class.
 * @classdesc
 */
var BasePlugin = function () {
  _createClass(BasePlugin, null, [{
    key: 'createPlugin',


    /**
     * Factory method to create the actual plugin.
     * @param {string} name - The plugin name
     * @param {Player} player - The player reference
     * @param {Object} config - The plugin configuration
     * @returns {BasePlugin} - New runtime plugin instance
     * @static
     * @public
     */

    /**
     * The event manager of the plugin.
     * @member
     */

    /**
     * The logger of the plugin.
     * @member
     */

    /**
     * The runtime configuration of the plugin.
     * @member
     */
    value: function createPlugin(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return new this(name, player, config);
    }

    /**
     * Returns under what conditions the plugin is valid.
     * Plugin must implement this method.
     * @returns {boolean} - Whether the plugin is valid and can be initiated. Default implementation is true
     * @static
     * @public
     * @abstract
     */

    /**
     * The default configuration of the plugin.
     * Inherited plugins should override this property.
     * @type {Object}
     * @static
     * @member
     */

    /**
     * Reference to the actual player.
     * @member
     */

    /**
     * The name of the plugin.
     * @member
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'isValid()').getError();
    }

    /**
     * constructor
     * @param {string} name - The plugin name
     * @param {Player} player - The player reference
     * @param {Object} config - The plugin configuration
     * @constructor
     * @private
     */

  }]);

  function BasePlugin(name, player, config) {
    _classCallCheck(this, BasePlugin);

    this.name = name;
    this.player = player;
    this.eventManager = new _eventManager2.default();
    this.logger = _logger2.default.getLogger(this.name);
    this.config = (0, _util.merge)(this.constructor.defaultConfig, config);
  }

  /**
   * Getter for the configuration of the plugin.
   * @param {string} attr - The key in the plugin configuration (optional).
   * @returns {*} - If attribute is provided, returns its value. Else, Returns the config of the plugin.
   * @public
   */


  _createClass(BasePlugin, [{
    key: 'getConfig',
    value: function getConfig(attr) {
      if (attr) {
        return this.config[attr];
      }
      return this.config;
    }

    /**
     * Updates the config of the plugin.
     * @param {Object} update - The updated configuration.
     * @public
     * @returns {void}
     */

  }, {
    key: 'updateConfig',
    value: function updateConfig(update) {
      this.config = (0, _util.merge)(this.config, update);
    }

    /**
     * Runs the destroy logic of the plugin.
     * plugin must implement this method.
     * @public
     * @abstract
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      throw new _playerError2.default(_playerError2.default.TYPE.NOT_IMPLEMENTED_METHOD, 'destroy()').getError();
    }

    /**
     * Getter for the plugin's name.
     * @returns {string} - The name of the plugin.
     * @public
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }]);

  return BasePlugin;
}();

BasePlugin.defaultConfig = {};
exports.default = BasePlugin;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _playerError = __webpack_require__(10);

var _playerError2 = _interopRequireDefault(_playerError);

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The logger of the PluginManager class.
 * @private
 * @const
 */
var logger = _logger2.default.getLogger("PluginManager");

/** The PluginManager responsible for register plugins definitions and store plugins instances.
 * @classdesc
 */

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);

    this._plugins = new Map();
  }
  /**
   * The registry of the plugins.
   * Maps plugin's name to his class.
   * @type {Map}
   * @static
   * @private
   */

  /**
   * The active plugins in the player.
   * Maps plugin's name to his instance.
   * @type {Map}
   * @private
   */


  _createClass(PluginManager, [{
    key: 'load',


    /**
     * Creates and store new instance of the plugin in case isValid() of the plugin returns true.
     * @param {string} name - The plugin name
     * @param {Player} player - The player reference
     * @param {Object} [config={}] - The plugin configuration
     * @returns {boolean} - Whether the plugin load was successful
     * @public
     */
    value: function load(name, player) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!PluginManager._registry.has(name)) {
        throw new _playerError2.default(_playerError2.default.TYPE.NOT_REGISTERED_PLUGIN, name).getError();
      }
      var pluginClass = PluginManager._registry.get(name);
      if (pluginClass != null && pluginClass.isValid()) {
        this._plugins.set(name, pluginClass.createPlugin(name, player, config));
        logger.debug('Plugin <' + name + '> has been loaded');
        return true;
      }
      logger.debug('Plugin <' + name + '> isn\'t loaded, isValid()=false');
      return false;
    }

    /**
     * Iterates over all the plugins and calls private _destroy.
     * @public
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._plugins.forEach(this._destroy.bind(this));
    }

    /**
     * Calls destroy() method of the plugin's impl.
     * @param {BasePlugin} plugin - The plugin instance
     * @param {string} name - The plugin name
     * @private
     * @returns {void}
     */

  }, {
    key: '_destroy',
    value: function _destroy(plugin, name) {
      plugin.destroy();
      this._plugins.delete(name);
    }

    /**
     * Returns the plugin's instance.
     * @param {string} name - The plugin name
     * @returns {BasePlugin} - The plugin instance
     * @public
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this._plugins.get(name);
    }
  }], [{
    key: 'register',


    /**
     * Writes the plugin in the registry.
     * Maps: plugin name -> plugin class.
     * @param {string} name - The plugin name
     * @param {Function} handler - The plugin class
     * @returns {boolean} - If the registration request succeeded
     * @static
     * @public
     */
    value: function register(name, handler) {
      if (typeof handler !== 'function' || handler.prototype instanceof _basePlugin2.default === false) {
        throw new _playerError2.default(_playerError2.default.TYPE.NOT_VALID_HANDLER).getError();
      }
      if (!PluginManager._registry.has(name)) {
        PluginManager._registry.set(name, handler);
        logger.debug('Plugin <' + name + '> has been registered successfully');
        return true;
      }
      logger.debug('Plugin <' + name + '> is already registered, do not register again');
      return false;
    }

    /**
     * Removes the plugin from the registry.
     * @param {string} name - The plugin name
     * @static
     * @public
     * @returns {void}
     */

  }, {
    key: 'unRegister',
    value: function unRegister(name) {
      if (PluginManager._registry.has(name)) {
        PluginManager._registry.delete(name);
        logger.debug('Unregistered <' + name + '> plugin.');
      }
    }
  }]);

  return PluginManager;
}();

/**
 * Export the register method.
 * @type {function}
 * @constant
 */


PluginManager._registry = new Map();
exports.default = PluginManager;
var registerPlugin = PluginManager.register;
exports.registerPlugin = registerPlugin;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PLAYER_STATE_TYPES = {
  IDLE: "idle",
  LOADING: "loading",
  PLAYING: "playing",
  PAUSED: "paused",
  BUFFERING: "buffering"
};

exports.default = PLAYER_STATE_TYPES;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A simple multimap template.
 * @constructor
 * @struct
 * @template T
 */
var MultiMap = function () {
  function MultiMap() {
    _classCallCheck(this, MultiMap);

    /** @private {!Object.<string, !Array.<T>>} */
    this._map = new Map();
  }

  /**
   * Add a key, value pair to the map.
   * @param {string} key -
   * @param {T} value  -
   * @returns {void}
   */


  _createClass(MultiMap, [{
    key: "push",
    value: function push(key, value) {
      if (this._map.has(key)) {
        var list = this._map.get(key);
        if (Array.isArray(list)) {
          list.push(value);
          this._map.set(key, list);
        }
      } else {
        this._map.set(key, [value]);
      }
    }

    /**
     * Set an array of values for the key, overwriting any previous data.
     * @param {string} key -
     * @param {!Array.<T>} values -
     * @returns {void}
     */

  }, {
    key: "set",
    value: function set(key, values) {
      this._map.set(key, values);
    }

    /**
     * Check for a key.
     * @param {string} key -
     * @return {boolean} true if the key exists.
     */

  }, {
    key: "has",
    value: function has(key) {
      return this._map.has(key);
    }

    /**
     * Get a list of values by key.
     * @param {string} key -
     * @return {Array.<T>} or null if no suZch key exists.
     */

  }, {
    key: "get",
    value: function get(key) {
      var list = this._map.get(key);
      // slice() clones the list so that it and the map can each be modified
      // without affecting the other.
      return list ? list.slice() : [];
    }

    /**
     * Get a list of all values.
     * @returns {!Array.<T>} -
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var list = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._map.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;

          list = list.concat(value);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return list;
    }

    /**
     * Remove a specific value, if it exists.
     * @param {string} key -
     * @param {T} value -
     * @returns {void}
     */

  }, {
    key: "remove",
    value: function remove(key, value) {
      if (!this._map.has(key)) return;
      var list = this._map.get(key);
      if (Array.isArray(list)) {
        for (var i = 0; i < list.length; ++i) {
          if (list[i] == value) {
            list.splice(i, 1);
            --i;
          }
        }
      }
    }

    /**
     * Get all keys from the multimap.
     * @return {!Array.<string>}
     */
    // eslint-disable-next-line no-undef

  }, {
    key: "keys",
    value: function keys() {
      return this._map.keys();
    }

    /**
     * Clear all keys and values from the multimap.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear() {
      this._map.clear();
    }
  }]);

  return MultiMap;
}();

exports.default = MultiMap;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
	"name": "playkit-js",
	"version": "0.1.0",
	"main": "dist/playkit.js",
	"scripts": {
		"clean": "rm -rf ./dist",
		"prebuild": "npm run clean",
		"build": "webpack",
		"dev": "webpack --progress --colors --watch",
		"test": "NODE_ENV=test karma start --color",
		"test:chrome": "NODE_ENV=test karma start --color --browsers Chrome",
		"test:chrome:dots": "NODE_ENV=test karma start --color --browsers Chrome --reporters dots",
		"test:firefox": "NODE_ENV=test karma start --color --browsers Firefox",
		"test:safari": "NODE_ENV=test karma start --color --browsers Safari",
		"test:watch": "NODE_ENV=test karma start --color --auto-watch",
		"start": "webpack-dev-server",
		"release": "NODE_ENV=production npm run build -- -p && git add --all dist && git commit -m'Update dist' && standard-version",
		"eslint": "eslint . --color",
		"flow": "flow check",
		"prepush": "npm run eslint && npm run test && npm run flow"
	},
	"devDependencies": {
		"babel-cli": "^6.18.0",
		"babel-core": "^6.18.2",
		"babel-eslint": "^7.1.1",
		"babel-loader": "^6.2.7",
		"babel-plugin-istanbul": "^4.0.0",
		"babel-plugin-transform-class-properties": "^6.22.0",
		"babel-plugin-transform-flow-strip-types": "^6.22.0",
		"babel-preset-es2015": "^6.18.0",
		"babel-register": "^6.23.0",
		"chai": "^3.5.0",
		"cross-env": "^3.1.4",
		"eslint": "^3.10.0",
		"eslint-loader": "^1.6.1",
		"eslint-plugin-flowtype": "^2.30.0",
		"eslint-plugin-import": "^2.2.0",
		"eslint-plugin-mocha-no-only": "^0.0.5",
		"flow-bin": "latest",
		"istanbul": "^0.4.5",
		"karma": "^1.5.0",
		"karma-chai": "^0.1.0",
		"karma-chrome-launcher": "^2.0.0",
		"karma-cli": "^1.0.1",
		"karma-coverage": "^1.1.1",
		"karma-firefox-launcher": "^1.0.1",
		"karma-ie-launcher": "^1.0.0",
		"karma-mocha": "^1.3.0",
		"karma-safari-launcher": "^1.0.0",
		"karma-sourcemap-loader": "^0.3.7",
		"karma-webpack": "^2.0.2",
		"mocha": "^3.2.0",
		"mocha-cli": "^1.0.1",
		"nyc": "^10.1.2",
		"sinon": "^2.0.0",
		"sinon-chai": "^2.8.0",
		"standard-version": "^4.0.0",
		"uglifyjs-webpack-plugin": "^0.4.3",
		"webpack": "latest",
		"webpack-dev-server": "latest"
	},
	"repository": {
		"type": "git",
		"url": "https://github.com/kaltura/playkit-js"
	},
	"keywords": [
		"kaltura",
		"player",
		"html5 player"
	],
	"license": "AGPLV3",
	"bugs": {
		"url": "https://github.com/kaltura/playkit-js/issues"
	},
	"homepage": "https://github.com/kaltura/playkit-js",
	"dependencies": {
		"js-logger": "^1.3.0"
	}
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fakeEventTarget = __webpack_require__(9);

var _fakeEventTarget2 = _interopRequireDefault(_fakeEventTarget);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(7);

var _mediaSourceProvider = __webpack_require__(13);

var _mediaSourceProvider2 = _interopRequireDefault(_mediaSourceProvider);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Html5 = function (_FakeEventTarget) {
  _inherits(Html5, _FakeEventTarget);

  _createClass(Html5, null, [{
    key: 'canPlayType',


    /**
     * Checks if the engine can play a given mime type.
     * @param {string} mimeType - The mime type to check.
     * @returns {boolean} - Whether the engine can play the mime type.
     */

    /**
     * The selected media source adapter of the engine.
     * @type {IMediaSourceAdapter}
     * @private
     */

    /**
     * The video element.
     * @type {HTMLVideoElement}
     * @private
     */
    value: function canPlayType(mimeType) {
      return _mediaSourceProvider2.default.canPlayType(mimeType);
    }

    /**
     * @constructor
     * @param {Source} source - The selected source object.
     * @param {Object} config - The player configuration.
     */


    /**
     * @type {string} - The engine name.
     */

    /**
     * The event manager of the engine.
     * @type {EventManager}
     * @private
     */

  }]);

  function Html5(source, config) {
    _classCallCheck(this, Html5);

    var _this = _possibleConstructorReturn(this, (Html5.__proto__ || Object.getPrototypeOf(Html5)).call(this));

    _this._createVideoElement();
    _this._eventManager = new _eventManager2.default();
    _this._loadMediaSourceAdapter(source, config);
    _this.attach();
    return _this;
  }

  /**
   * Destroys the engine.
   * @public
   * @returns {void}
   */


  _createClass(Html5, [{
    key: 'destroy',
    value: function destroy() {
      this.detach();
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.destroy();
      }
      if (this._el) {
        this.pause();
        this._el.removeAttribute('src');
        if (this._el.parentNode) {
          this._el.parentNode.removeChild(this._el);
        }
      }
      this._eventManager.destroy();
    }

    /**
     * Listen to the video element events and triggers them from the engine.
     * @public
     * @returns {void}
     */

  }, {
    key: 'attach',
    value: function attach() {
      var _this2 = this;

      var _loop = function _loop(playerEvent) {
        _this2._eventManager.listen(_this2._el, _events.HTML5_EVENTS[playerEvent], function () {
          _this2.dispatchEvent(new _fakeEvent2.default(_events.HTML5_EVENTS[playerEvent]));
        });
      };

      for (var playerEvent in _events.HTML5_EVENTS) {
        _loop(playerEvent);
      }
      if (this._mediaSourceAdapter) {
        // listen and dispatch adaptive bitrate changed event
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED, function (event) {
          _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
        this._eventManager.listen(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED, function (event) {
          return _this2.dispatchEvent(event);
        });
      }
    }

    /**
     * Remove the listeners of the video element events.
     * @public
     * @returns {void}
     */

  }, {
    key: 'detach',
    value: function detach() {
      for (var playerEvent in _events.HTML5_EVENTS) {
        this._eventManager.unlisten(this._el, _events.HTML5_EVENTS[playerEvent]);
      }
      if (this._mediaSourceAdapter) {
        // unlisten to adaptive bitrate changed
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.VIDEO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.AUDIO_TRACK_CHANGED);
        this._eventManager.unlisten(this._mediaSourceAdapter, _events.CUSTOM_EVENTS.TEXT_TRACK_CHANGED);
      }
    }

    /**
     * @returns {HTMLVideoElement} - The video element.
     * @public
     */

  }, {
    key: 'getVideoElement',
    value: function getVideoElement() {
      return this._el;
    }

    /**
     * Creates a video element dom object.
     * @private
     * @returns {void}
     */

  }, {
    key: '_createVideoElement',
    value: function _createVideoElement() {
      this._el = document.createElement("video");
      //Set attributes
      this._el.style.width = "640px";
      this._el.style.height = "360px";
      this._el.style.backgroundColor = "black";
      this._el.controls = true;
      if (document && document.body) {
        document.body.appendChild(this._el);
      }
    }

    /**
     * Loads the appropriate media source extension adapter.
     * @param {Source} source - The selected source object.
     * @param {Object} config - The media source extension configuration.
     * @private
     * @returns {void}
     */

  }, {
    key: '_loadMediaSourceAdapter',
    value: function _loadMediaSourceAdapter(source, config) {
      this._mediaSourceAdapter = _mediaSourceProvider2.default.getMediaSourceAdapter(this.getVideoElement(), source, config);
    }

    /**
     * Select a new video track.
     * @param {VideoTrack} videoTrack - The video track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectVideoTrack(videoTrack);
      }
    }

    /**
     * Select a new audio track.
     * @param {AudioTrack} audioTrack - The video track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectAudioTrack(audioTrack);
      }
    }

    /**
     * Select a new text track.
     * @param {TextTrack} textTrack - The text track object to set.
     * @returns {void}
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.selectTextTrack(textTrack);
      }
    }

    /**
     * Enables adaptive bitrate switching according to the media source extension logic.
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @public
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._mediaSourceAdapter) {
        this._mediaSourceAdapter.enableAdaptiveBitrate();
      }
    }

    /**
     * Set a source.
     * @param {string} source - Source to set.
     * @public
     * @returns {void}
     */

  }, {
    key: 'play',


    //playback interface
    /**
     * Start/resume playback.
     * @public
     * @returns {void}
     */
    value: function play() {
      return this._el.play();
    }

    /**
     * Pause playback.
     * @public
     * @returns {void}
     */

  }, {
    key: 'pause',
    value: function pause() {
      return this._el.pause();
    }

    /**
     * Load media.
     * @public
     * @returns {Promise<Object>} - The loaded data
     */

  }, {
    key: 'load',
    value: function load() {
      return this._mediaSourceAdapter ? this._mediaSourceAdapter.load() : Promise.resolve({});
    }

    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: 'ready',
    value: function ready() {}

    /**
     * Get paused state.
     * @returns {boolean} - The paused value of the video element.
     * @public
     */

  }, {
    key: 'src',
    set: function set(source) {
      this._el.src = source;
    }

    /**
     * Get the source url.
     * @returns {string} - The source url.
     * @public
     */
    ,
    get: function get() {
      if (this._mediaSourceAdapter) {
        return this._mediaSourceAdapter.src;
      }
      return "";
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this._el.currentTime;
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function set(to) {
      this._el.currentTime = to;
    }

    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._el.duration;
    }

    /**
     * Set playback volume.
     * @param {Number} vol - The volume to set.
     * @public
     * @returns {void}
     */

  }, {
    key: 'volume',
    set: function set(vol) {
      this._el.volume = vol;
    }

    /**
     * Get playback volume.
     * @returns {Number} - The volume value of the video element.
     * @public
     */
    ,
    get: function get() {
      return this._el.volume;
    }
  }, {
    key: 'paused',
    get: function get() {
      return this._el.paused;
    }

    /**
     * Get seeking state.
     * @returns {boolean} - The seeking value of the video element.
     * @public
     */

  }, {
    key: 'seeking',
    get: function get() {
      return this._el.seeking;
    }

    /**
     * Get the first seekable range (part) of the video in seconds.
     * @returns {TimeRanges} - First seekable range (part) of the video in seconds.
     * @public
     */

  }, {
    key: 'seekable',
    get: function get() {
      return this._el.seekable;
    }

    /**
     * Get the first played range (part) of the video in seconds.
     * @returns {TimeRanges} - First played range (part) of the video in seconds.
     * @public
     */

  }, {
    key: 'played',
    get: function get() {
      return this._el.played;
    }

    /**
     * Get the first buffered range (part) of the video in seconds.
     * @returns {TimeRanges} - First buffered range (part) of the video in seconds.
     * @public
     */

  }, {
    key: 'buffered',
    get: function get() {
      return this._el.buffered;
    }

    /**
     * Set player muted state.
     * @param {boolean} mute - The new mute value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'muted',
    set: function set(mute) {
      this._el.muted = mute;
    }

    /**
     * Get player muted state.
     * @returns {boolean} - The muted value of the video element.
     * @public
     */
    ,
    get: function get() {
      return this._el.muted;
    }

    /**
     * Get the default mute value.
     * @returns {boolean} - The defaultMuted of the video element.
     * @public
     */

  }, {
    key: 'defaultMuted',
    get: function get() {
      return this._el.defaultMuted;
    }

    /**
     * Sets an image to be shown while the video is downloading, or until the user hits the play button.
     * @param {string} poster - The image url to be shown.
     * @returns {void}
     * @public
     */

  }, {
    key: 'poster',
    set: function set(poster) {
      this._el.poster = poster;
    }

    /**
     * Gets an image to be shown while the video is downloading, or until the user hits the play button.
     * @returns {poster} - The image url.
     * @public
     */
    ,
    get: function get() {
      return this._el.poster;
    }

    /**
     * Specifies if and how the author thinks that the video should be loaded when the page loads.
     * @param {string} preload - The preload value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'preload',
    set: function set(preload) {
      this._el.preload = preload;
    }

    /**
     * Gets the preload value of the video element.
     * @returns {string} - The preload value.
     * @public
     */
    ,
    get: function get() {
      return this._el.preload;
    }

    /**
     * Set if the video will automatically start playing as soon as it can do so without stopping.
     * @param {boolean} autoplay - The autoplay value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'autoplay',
    set: function set(autoplay) {
      this._el.autoplay = autoplay;
    }

    /**
     * Gets the autoplay value of the video element.
     * @returns {boolean} - The autoplay value.
     * @public
     */
    ,
    get: function get() {
      return this._el.autoplay;
    }

    /**
     * Set to specifies that the video will start over again, every time it is finished.
     * @param {boolean} loop - the loop value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'loop',
    set: function set(loop) {
      this._el.loop = loop;
    }

    /**
     * Gets the loop value of the video element.
     * @returns {boolean} - The loop value.
     * @public
     */
    ,
    get: function get() {
      return this._el.loop;
    }

    /**
     * Set to specifies that video controls should be displayed.
     * @param {boolean} controls - the controls value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'controls',
    set: function set(controls) {
      this._el.controls = controls;
    }

    /**
     * Gets the controls value of the video element.
     * @returns {boolean} - The controls value.
     * @public
     */
    ,
    get: function get() {
      return this._el.controls;
    }

    /**
     * Sets the current playback speed of the audio/video.
     * @param {Number} playbackRate - The playback speed value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'playbackRate',
    set: function set(playbackRate) {
      this._el.playbackRate = playbackRate;
    }

    /**
     * Gets the current playback speed of the audio/video.
     * @returns {Number} - The current playback speed value.
     * @public
     */
    ,
    get: function get() {
      return this._el.playbackRate;
    }

    /**
     * Sets the default playback speed of the audio/video.
     * @param {Number} defaultPlaybackRate - The default playback speed value.
     * @public
     * @returns {void}
     */

  }, {
    key: 'defaultPlaybackRate',
    set: function set(defaultPlaybackRate) {
      this._el.defaultPlaybackRate = defaultPlaybackRate;
    }

    /**
     * Gets the default playback speed of the audio/video.
     * @returns {Number} - The default playback speed value.
     * @public
     */
    ,
    get: function get() {
      return this._el.defaultPlaybackRate;
    }

    /**
     * The ended property returns whether the playback of the audio/video has ended.
     * @returns {boolean} - The ended value.
     * @public
     */

  }, {
    key: 'ended',
    get: function get() {
      return this._el.ended;
    }

    /**
     * The error property returns a MediaError object.
     * @returns {MediaError} - The MediaError object has a code property containing the error state of the audio/video.
     * @public
     */

  }, {
    key: 'error',
    get: function get() {
      return this._el.error;
    }

    /**
     * @returns {Number} - The current network state (activity) of the audio/video.
     * @public
     */

  }, {
    key: 'networkState',
    get: function get() {
      return this._el.networkState;
    }

    /**
     * Indicates if the audio/video is ready to play or not.
     * @returns {Number} - The current ready state of the audio/video.
     * 0 = HAVE_NOTHING - no information whether or not the audio/video is ready.
     * 1 = HAVE_METADATA - metadata for the audio/video is ready.
     * 2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond.
     * 3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available.
     * 4 = HAVE_ENOUGH_DATA - enough data available to start playing.
     */

  }, {
    key: 'readyState',
    get: function get() {
      return this._el.readyState;
    }

    /**
     * @returns {Number} - The height of the video player, in pixels.
     * @public
     */

  }, {
    key: 'videoHeight',
    get: function get() {
      return this._el.videoHeight;
    }

    /**
     * @returns {Number} - The width of the video player, in pixels.
     * @public
     */

  }, {
    key: 'videoWidth',
    get: function get() {
      return this._el.videoWidth;
    }

    /**
     * Test video element to check if html5 engine is supported.
     */

  }], [{
    key: 'isSupported',


    /**
     * Checks if the html5 engine is supported.
     * @returns {boolean} - The isSupported result.
     * @static
     * @public
     */
    value: function isSupported() {
      try {
        Html5.TEST_VID = document.createElement('video');
        Html5.TEST_VID.volume = 0.5;
      } catch (e) {
        return false;
      }
      return !!Html5.TEST_VID.canPlayType;
    }
  }]);

  return Html5;
}(_fakeEventTarget2.default);

Html5.EngineName = "html5";
exports.default = Html5;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _events = __webpack_require__(7);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

var _baseMediaSourceAdapter = __webpack_require__(12);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An illustration of media source extension for progressive download
 * @classdesc
 * @implements {IMediaSourceAdapter}
 */
var NativeAdapter = function (_BaseMediaSourceAdapt) {
  _inherits(NativeAdapter, _BaseMediaSourceAdapt);

  _createClass(NativeAdapter, null, [{
    key: 'canPlayType',


    /**
     * Checks if NativeAdapter can play a given mime type.
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @returns {boolean} - Whether the native adapter can play a specific mime type
     * @static
     */

    /**
     * The event manager of the class.
     * @member {EventManager} - _eventManager
     * @type {EventManager}
     * @private
     */

    /**
     * The load promise
     * @member {Promise<Object>} - _loadPromise
     * @type {Promise<Object>}
     * @private
     */

    /**
     * The name of the Adapter
     * @member {string} _name
     * @static
     * @private
     */
    value: function canPlayType(mimeType) {
      var canPlayType = typeof mimeType === 'string' ? !!document.createElement("video").canPlayType(mimeType.toLowerCase()) : false;
      NativeAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
      return canPlayType;
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to NativeAdapter
     * @param {Source} source - The source object
     * @param {Object} config - The media source adapter configuration
     */


    /**
     * The adapter logger
     * @member {any} _logger
     * @private
     * @static
     */

  }]);

  function NativeAdapter(videoElement, source, config) {
    _classCallCheck(this, NativeAdapter);

    NativeAdapter._logger.debug('Creating adapter');

    var _this = _possibleConstructorReturn(this, (NativeAdapter.__proto__ || Object.getPrototypeOf(NativeAdapter)).call(this, videoElement, source, config));

    _this._eventManager = new _eventManager2.default();
    return _this;
  }

  /**
   * Load the video source
   * @function load
   * @returns {Promise<Object>} - The loaded data
   */


  _createClass(NativeAdapter, [{
    key: 'load',
    value: function load() {
      var _this2 = this;

      if (!this._loadPromise) {
        this._loadPromise = new Promise(function (resolve, reject) {
          // We're using 'loadeddata' event for native hls (on 'loadedmetadata' native hls doesn't have tracks yet).
          _this2._eventManager.listen(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA, function () {
            _this2._eventManager.unlisten(_this2._videoElement, _events.HTML5_EVENTS.LOADED_DATA);
            var data = { tracks: _this2._getParsedTracks() };
            NativeAdapter._logger.debug('The source has been loaded successfully');
            resolve(data);
          });
          _this2._eventManager.listen(_this2._videoElement, _events.HTML5_EVENTS.ERROR, function (error) {
            _this2._eventManager.unlisten(_this2._videoElement, _events.HTML5_EVENTS.ERROR);
            NativeAdapter._logger.error(error);
            reject(error);
          });
          if (_this2._sourceObj && _this2._sourceObj.url) {
            _this2._videoElement.src = _this2._sourceObj.url;
          }
        });
      }
      return this._loadPromise;
    }

    /**
     * Destroys the native adapter.
     * @function destroy
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      NativeAdapter._logger.debug('destroy');
      _get(NativeAdapter.prototype.__proto__ || Object.getPrototypeOf(NativeAdapter.prototype), 'destroy', this).call(this);
      this._eventManager.destroy();
      this._loadPromise = null;
    }

    /**
     * Get the parsed tracks
     * @function _getParsedTracks
     * @returns {Array<Track>} - The parsed tracks
     * @private
     */

  }, {
    key: '_getParsedTracks',
    value: function _getParsedTracks() {
      var videoTracks = this._getParsedVideoTracks();
      var audioTracks = this._getParsedAudioTracks();
      var textTracks = this._getParsedTextTracks();
      return videoTracks.concat(audioTracks).concat(textTracks);
    }

    /**
     * Get the parsed video tracks
     * @function _getParsedVideoTracks
     * @returns {Array<Track>} - The parsed video tracks
     * @private
     */

  }, {
    key: '_getParsedVideoTracks',
    value: function _getParsedVideoTracks() {
      var videoTracks = this._videoElement.videoTracks;
      var parsedTracks = [];
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          var settings = {
            id: videoTracks[i].id,
            active: videoTracks[i].selected,
            label: videoTracks[i].label,
            language: videoTracks[i].language,
            index: i
          };
          parsedTracks.push(new _videoTrack2.default(settings));
        }
      }
      return parsedTracks;
    }

    /**
     * Get the parsed audio tracks
     * @function _getParsedAudioTracks
     * @returns {Array<Track>} - The parsed audio tracks
     * @private
     */

  }, {
    key: '_getParsedAudioTracks',
    value: function _getParsedAudioTracks() {
      var audioTracks = this._videoElement.audioTracks;
      var parsedTracks = [];
      if (audioTracks) {
        for (var i = 0; i < audioTracks.length; i++) {
          var settings = {
            id: audioTracks[i].id,
            active: audioTracks[i].enabled,
            label: audioTracks[i].label,
            language: audioTracks[i].language,
            index: i
          };
          parsedTracks.push(new _audioTrack2.default(settings));
        }
      }
      return parsedTracks;
    }

    /**
     * Get the parsed text tracks
     * @function _getParsedTextTracks
     * @returns {Array<Track>} - The parsed text tracks
     * @private
     */

  }, {
    key: '_getParsedTextTracks',
    value: function _getParsedTextTracks() {
      var textTracks = this._videoElement.textTracks;
      var parsedTracks = [];
      if (textTracks) {
        for (var i = 0; i < textTracks.length; i++) {
          var settings = {
            kind: textTracks[i].kind,
            active: textTracks[i].mode === 'showing',
            label: textTracks[i].label,
            language: textTracks[i].language,
            index: i
          };
          parsedTracks.push(new _textTrack2.default(settings));
        }
      }
      return parsedTracks;
    }

    /**
     * Select a video track
     * @function selectVideoTrack
     * @param {VideoTrack} videoTrack - the track to select
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      var videoTracks = this._videoElement.videoTracks;
      if (videoTrack instanceof _videoTrack2.default && videoTracks && videoTracks[videoTrack.index]) {
        this._disableVideoTracks();
        videoTracks[videoTrack.index].selected = true;
        this._onTrackChanged(videoTrack);
      }
    }

    /**
     * Select an audio track
     * @function selectAudioTrack
     * @param {AudioTrack} audioTrack - the  audio track to select
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      var audioTracks = this._videoElement.audioTracks;
      if (audioTrack instanceof _audioTrack2.default && audioTracks && audioTracks[audioTrack.index]) {
        this._disableAudioTracks();
        audioTracks[audioTrack.index].enabled = true;
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

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      var textTracks = this._videoElement.textTracks;
      if (textTrack instanceof _textTrack2.default && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions') && textTracks && textTracks[textTrack.index]) {
        this._disableTextTracks();
        textTracks[textTrack.index].mode = 'showing';
        this._onTrackChanged(textTrack);
      }
    }

    /**
     * Disables all the existing video tracks.
     * @private
     * @returns {void}
     */

  }, {
    key: '_disableVideoTracks',
    value: function _disableVideoTracks() {
      var videoTracks = this._videoElement.videoTracks;
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          videoTracks[i].selected = false;
        }
      }
    }

    /**
     * Disables all the existing audio tracks.
     * @private
     * @returns {void}
     */

  }, {
    key: '_disableAudioTracks',
    value: function _disableAudioTracks() {
      var audioTracks = this._videoElement.audioTracks;
      if (audioTracks) {
        for (var i = 0; i < audioTracks.length; i++) {
          audioTracks[i].enabled = false;
        }
      }
    }

    /**
     * Disables all the existing text tracks.
     * @private
     * @returns {void}
     */

  }, {
    key: '_disableTextTracks',
    value: function _disableTextTracks() {
      var textTracks = this._videoElement.textTracks;
      if (textTracks) {
        for (var i = 0; i < textTracks.length; i++) {
          textTracks[i].mode = 'disabled';
        }
      }
    }

    /**
     * Getter for the src that the adapter plays on the video element.
     * @public
     * @returns {string} - The src url.
     */

  }, {
    key: 'src',
    get: function get() {
      return this._videoElement.src;
    }
  }]);

  return NativeAdapter;
}(_baseMediaSourceAdapter2.default);

NativeAdapter._name = 'NativeAdapter';
NativeAdapter._logger = _baseMediaSourceAdapter2.default.getLogger(NativeAdapter._name);
exports.default = NativeAdapter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _eventManager = __webpack_require__(6);

var _eventManager2 = _interopRequireDefault(_eventManager);

var _state = __webpack_require__(22);

var _state2 = _interopRequireDefault(_state);

var _stateTypes = __webpack_require__(16);

var _stateTypes2 = _interopRequireDefault(_stateTypes);

var _events = __webpack_require__(7);

var _fakeEvent = __webpack_require__(2);

var _fakeEvent2 = _interopRequireDefault(_fakeEvent);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class responsible to manage all the state machine of the player.
 * @classdesc
 */


/**
 * Define a transition object.
 */
var StateManager = function () {

  /**
   * @constructor
   * @param {Player} player - Reference to the player.
   */

  /**
   * Holds the state history of the player.
   * @member
   * @type {Array<State>}
   * @private
   */

  /**
   * Holds the current state of the player.
   * @member
   * @type {State}
   * @private
   */

  /**
   * Reference to the actual player.
   * @member
   * @type {Player}
   * @private
   */
  function StateManager(player) {
    var _this = this,
        _PlayerStates$IDLE,
        _PlayerStates$LOADING,
        _PlayerStates$PAUSED,
        _PlayerStates$PLAYING,
        _PlayerStates$BUFFERI,
        _transitions;

    _classCallCheck(this, StateManager);

    this._transitions = (_transitions = {}, _defineProperty(_transitions, _stateTypes2.default.IDLE, (_PlayerStates$IDLE = {}, _defineProperty(_PlayerStates$IDLE, _events.HTML5_EVENTS.LOAD_START, function () {
      _this._updateState(_stateTypes2.default.LOADING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$IDLE, _events.HTML5_EVENTS.PLAY, function () {
      _this._updateState(_stateTypes2.default.BUFFERING);
      _this._dispatchEvent();
    }), _PlayerStates$IDLE)), _defineProperty(_transitions, _stateTypes2.default.LOADING, (_PlayerStates$LOADING = {}, _defineProperty(_PlayerStates$LOADING, _events.HTML5_EVENTS.LOADED_METADATA, function () {
      if (_this._player.config.autoPlay) {
        _this._updateState(_stateTypes2.default.PLAYING);
      } else {
        _this._updateState(_stateTypes2.default.PAUSED);
      }
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$LOADING, _events.HTML5_EVENTS.ERROR, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _PlayerStates$LOADING)), _defineProperty(_transitions, _stateTypes2.default.PAUSED, (_PlayerStates$PAUSED = {}, _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.PLAY, function () {
      _this._updateState(_stateTypes2.default.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.PLAYING, function () {
      _this._updateState(_stateTypes2.default.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PAUSED, _events.HTML5_EVENTS.ENDED, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _PlayerStates$PAUSED)), _defineProperty(_transitions, _stateTypes2.default.PLAYING, (_PlayerStates$PLAYING = {}, _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.PAUSE, function () {
      _this._updateState(_stateTypes2.default.PAUSED);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.WAITING, function () {
      _this._updateState(_stateTypes2.default.BUFFERING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.ENDED, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$PLAYING, _events.HTML5_EVENTS.ERROR, function () {
      _this._updateState(_stateTypes2.default.IDLE);
      _this._dispatchEvent();
    }), _PlayerStates$PLAYING)), _defineProperty(_transitions, _stateTypes2.default.BUFFERING, (_PlayerStates$BUFFERI = {}, _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.PLAYING, function () {
      _this._updateState(_stateTypes2.default.PLAYING);
      _this._dispatchEvent();
    }), _defineProperty(_PlayerStates$BUFFERI, _events.HTML5_EVENTS.PAUSE, function () {
      _this._updateState(_stateTypes2.default.PAUSED);
      _this._dispatchEvent();
    }), _PlayerStates$BUFFERI)), _transitions);

    this._player = player;
    this._logger = _logger2.default.getLogger("StateManager");
    this._eventManager = new _eventManager2.default();
    this._history = [];
    this._prevState = null;
    this._curState = new _state2.default(_stateTypes2.default.IDLE);
    this._attachListeners();
  }

  /**
   * Register to all necessary events which impacts on the player state.
   * @private
   * @returns {void}
   */

  /**
   * The possible transitions from one state to another.
   * @type {Array<Transition>}
   * @private
   */

  /**
   * Holds the previous state of the player.
   * @member
   * @type {State | null}
   * @private
   */

  /**
   * The event manager of the class.
   * @member
   * @type {EventManager}
   * @private
   */

  /**
   * The logger of the class.
   * @member
   * @type {any}
   * @private
   */


  _createClass(StateManager, [{
    key: '_attachListeners',
    value: function _attachListeners() {
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.ERROR, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.ENDED, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PLAY, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.LOAD_START, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PLAYING, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.LOADED_METADATA, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.PAUSE, this._doTransition.bind(this));
      this._eventManager.listen(this._player, _events.HTML5_EVENTS.WAITING, this._doTransition.bind(this));
    }

    /**
     * Performs a state transition depends on the event which occurs in the player system.
     * @param {FakeEvent} event - The event occurs in the player system.
     * @private
     * @returns {void}
     */

  }, {
    key: '_doTransition',
    value: function _doTransition(event) {
      this._logger.debug('Do transition request', event);
      var transition = this._transitions[this._curState.type];
      if (typeof transition[event.type] === 'function') {
        transition[event.type]();
      }
    }

    /**
     * Updates the player's state.
     * @param {string} type - The type of the new state.
     * @private
     * @returns {void}
     */

  }, {
    key: '_updateState',
    value: function _updateState(type) {
      if (this._curState.type !== type) {
        this._curState.duration = Date.now() / 1000;
        this._history.push(this._curState);
        this._prevState = this._curState;
        this._curState = new _state2.default(type);
        this._logger.debug('Switch player state: from ' + this._prevState.type + ' to ' + this._curState.type);
      }
    }

    /**
     * Fires the playerStateChanged event after state has been changed.
     * @private
     * @returns {void}
     */

  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent() {
      var event = new _fakeEvent2.default(_events.CUSTOM_EVENTS.PLAYER_STATE_CHANGED, {
        'oldState': this._prevState,
        'newState': this._curState
      });
      this._player.dispatchEvent(event);
    }

    /**
     * Destroys the state manager.
     * @public
     * @returns {void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._history = [];
      this._eventManager.destroy();
    }

    /**
     * Getter to the current state of the player.
     * @public
     * @returns {State} - The current state object
     */

  }, {
    key: 'currentState',
    get: function get() {
      return this._curState;
    }

    /**
     * Getter to the previous state of the player.
     * @public
     * @returns {State|null} - The previous state object, or null if such doesn't exists
     */

  }, {
    key: 'previousState',
    get: function get() {
      return this._prevState;
    }

    /**
     * Getter to the state history of the player.
     * @public
     * @returns {Array.<State>} - The full states history objects
     */

  }, {
    key: 'history',
    get: function get() {
      return this._history;
    }
  }]);

  return StateManager;
}();

exports.default = StateManager;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class describes a player state.
 * @classdesc
 */
var State = function () {

  /**
   * @constructor
   * @param {string} type - The type of the state.
   */

  /**
   * The duration that the player was in this state.
   * @member
   * @type {number}
   * @private
   */
  function State(type) {
    _classCallCheck(this, State);

    this.type = type;
    this._duration = 0;
    this._timestamp = Date.now() / 1000;
  }

  /**
   * Getter for the duration of the state.
   * @returns {number} - The duration of the state
   */

  /**
   * The timestamp that this state started.
   * @member
   * @type {number}
   * @private
   */

  /**
   * The type of the state.
   * Can be one of those describes in states.js
   * @member
   * @type {string}
   * @public
   */


  _createClass(State, [{
    key: "duration",
    get: function get() {
      return this._duration;
    }

    /**
     * Setter for the duration of the state.
     * @param {number} endTime - The timestamp of the next state.
     */
    ,
    set: function set(endTime) {
      this._duration = endTime - this._timestamp;
    }
  }]);

  return State;
}();

exports.default = State;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TRACK_TYPES = {
  VIDEO: "video",
  AUDIO: "audio",
  TEXT: "text"
};

exports.default = TRACK_TYPES;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (global) {
	"use strict";

	// Top level module for the global, static logger instance.
	var Logger = { };

	// For those that are at home that are keeping score.
	Logger.VERSION = "1.3.0";

	// Function which handles all incoming log messages.
	var logHandler;

	// Map of ContextualLogger instances by name; used by Logger.get() to return the same named instance.
	var contextualLoggersByNameMap = {};

	// Polyfill for ES5's Function.bind.
	var bind = function(scope, func) {
		return function() {
			return func.apply(scope, arguments);
		};
	};

	// Super exciting object merger-matron 9000 adding another 100 bytes to your download.
	var merge = function () {
		var args = arguments, target = args[0], key, i;
		for (i = 1; i < args.length; i++) {
			for (key in args[i]) {
				if (!(key in target) && args[i].hasOwnProperty(key)) {
					target[key] = args[i][key];
				}
			}
		}
		return target;
	};

	// Helper to define a logging level object; helps with optimisation.
	var defineLogLevel = function(value, name) {
		return { value: value, name: name };
	};

	// Predefined logging levels.
	Logger.DEBUG = defineLogLevel(1, 'DEBUG');
	Logger.INFO = defineLogLevel(2, 'INFO');
	Logger.TIME = defineLogLevel(3, 'TIME');
	Logger.WARN = defineLogLevel(4, 'WARN');
	Logger.ERROR = defineLogLevel(8, 'ERROR');
	Logger.OFF = defineLogLevel(99, 'OFF');

	// Inner class which performs the bulk of the work; ContextualLogger instances can be configured independently
	// of each other.
	var ContextualLogger = function(defaultContext) {
		this.context = defaultContext;
		this.setLevel(defaultContext.filterLevel);
		this.log = this.info;  // Convenience alias.
	};

	ContextualLogger.prototype = {
		// Changes the current logging level for the logging instance.
		setLevel: function (newLevel) {
			// Ensure the supplied Level object looks valid.
			if (newLevel && "value" in newLevel) {
				this.context.filterLevel = newLevel;
			}
		},

		// Is the logger configured to output messages at the supplied level?
		enabledFor: function (lvl) {
			var filterLevel = this.context.filterLevel;
			return lvl.value >= filterLevel.value;
		},

		debug: function () {
			this.invoke(Logger.DEBUG, arguments);
		},

		info: function () {
			this.invoke(Logger.INFO, arguments);
		},

		warn: function () {
			this.invoke(Logger.WARN, arguments);
		},

		error: function () {
			this.invoke(Logger.ERROR, arguments);
		},

		time: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'start' ]);
			}
		},

		timeEnd: function (label) {
			if (typeof label === 'string' && label.length > 0) {
				this.invoke(Logger.TIME, [ label, 'end' ]);
			}
		},

		// Invokes the logger callback if it's not being filtered.
		invoke: function (level, msgArgs) {
			if (logHandler && this.enabledFor(level)) {
				logHandler(msgArgs, merge({ level: level }, this.context));
			}
		}
	};

	// Protected instance which all calls to the to level `Logger` module will be routed through.
	var globalLogger = new ContextualLogger({ filterLevel: Logger.OFF });

	// Configure the global Logger instance.
	(function() {
		// Shortcut for optimisers.
		var L = Logger;

		L.enabledFor = bind(globalLogger, globalLogger.enabledFor);
		L.debug = bind(globalLogger, globalLogger.debug);
		L.time = bind(globalLogger, globalLogger.time);
		L.timeEnd = bind(globalLogger, globalLogger.timeEnd);
		L.info = bind(globalLogger, globalLogger.info);
		L.warn = bind(globalLogger, globalLogger.warn);
		L.error = bind(globalLogger, globalLogger.error);

		// Don't forget the convenience alias!
		L.log = L.info;
	}());

	// Set the global logging handler.  The supplied function should expect two arguments, the first being an arguments
	// object with the supplied log messages and the second being a context object which contains a hash of stateful
	// parameters which the logging function can consume.
	Logger.setHandler = function (func) {
		logHandler = func;
	};

	// Sets the global logging filter level which applies to *all* previously registered, and future Logger instances.
	// (note that named loggers (retrieved via `Logger.get`) can be configured independently if required).
	Logger.setLevel = function(level) {
		// Set the globalLogger's level.
		globalLogger.setLevel(level);

		// Apply this level to all registered contextual loggers.
		for (var key in contextualLoggersByNameMap) {
			if (contextualLoggersByNameMap.hasOwnProperty(key)) {
				contextualLoggersByNameMap[key].setLevel(level);
			}
		}
	};

	// Retrieve a ContextualLogger instance.  Note that named loggers automatically inherit the global logger's level,
	// default context and log handler.
	Logger.get = function (name) {
		// All logger instances are cached so they can be configured ahead of use.
		return contextualLoggersByNameMap[name] ||
			(contextualLoggersByNameMap[name] = new ContextualLogger(merge({ name: name }, globalLogger.context)));
	};

	// CreateDefaultHandler returns a handler function which can be passed to `Logger.setHandler()` which will
	// write to the window's console object (if present); the optional options object can be used to customise the
	// formatter used to format each log message.
	Logger.createDefaultHandler = function (options) {
		options = options || {};

		options.formatter = options.formatter || function defaultMessageFormatter(messages, context) {
			// Prepend the logger's name to the log message for easy identification.
			if (context.name) {
				messages.unshift("[" + context.name + "]");
			}
		};

		// Map of timestamps by timer labels used to track `#time` and `#timeEnd()` invocations in environments
		// that don't offer a native console method.
		var timerStartTimeByLabelMap = {};

		// Support for IE8+ (and other, slightly more sane environments)
		var invokeConsoleMethod = function (hdlr, messages) {
			Function.prototype.apply.call(hdlr, console, messages);
		};

		// Check for the presence of a logger.
		if (typeof console === "undefined") {
			return function () { /* no console */ };
		}

		return function(messages, context) {
			// Convert arguments object to Array.
			messages = Array.prototype.slice.call(messages);

			var hdlr = console.log;
			var timerLabel;

			if (context.level === Logger.TIME) {
				timerLabel = (context.name ? '[' + context.name + '] ' : '') + messages[0];

				if (messages[1] === 'start') {
					if (console.time) {
						console.time(timerLabel);
					}
					else {
						timerStartTimeByLabelMap[timerLabel] = new Date().getTime();
					}
				}
				else {
					if (console.timeEnd) {
						console.timeEnd(timerLabel);
					}
					else {
						invokeConsoleMethod(hdlr, [ timerLabel + ': ' +
							(new Date().getTime() - timerStartTimeByLabelMap[timerLabel]) + 'ms' ]);
					}
				}
			}
			else {
				// Delegate through to custom warn/error loggers if present on the console.
				if (context.level === Logger.WARN && console.warn) {
					hdlr = console.warn;
				} else if (context.level === Logger.ERROR && console.error) {
					hdlr = console.error;
				} else if (context.level === Logger.INFO && console.info) {
					hdlr = console.info;
				}

				options.formatter(messages, context);
				invokeConsoleMethod(hdlr, messages);
			}
		};
	};

	// Configure and example a Default implementation which writes to the `window.console` (if present).  The
	// `options` hash can be used to configure the default logLevel and provide a custom message formatter.
	Logger.useDefaults = function(options) {
		Logger.setLevel(options && options.defaultLevel || Logger.DEBUG);
		Logger.setHandler(Logger.createDefaultHandler(options));
	};

	// Export to popular environments boilerplate.
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (Logger),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Logger;
	}
	else {
		Logger._prevLogger = global.Logger;

		Logger.noConflict = function () {
			global.Logger = Logger._prevLogger;
			return Logger;
		};

		global.Logger = Logger;
	}
}(this));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.TextTrack = exports.AudioTrack = exports.VideoTrack = exports.Track = exports.BasePlugin = exports.registerPlugin = exports.BaseMediaSourceAdapter = exports.registerMediaSourceAdapter = undefined;
exports.playkit = playkit;

var _player = __webpack_require__(8);

var _player2 = _interopRequireDefault(_player);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _package = __webpack_require__(18);

var packageData = _interopRequireWildcard(_package);

var _baseMediaSourceAdapter = __webpack_require__(12);

var _baseMediaSourceAdapter2 = _interopRequireDefault(_baseMediaSourceAdapter);

var _mediaSourceProvider = __webpack_require__(13);

var _pluginManager = __webpack_require__(15);

var _basePlugin = __webpack_require__(14);

var _basePlugin2 = _interopRequireDefault(_basePlugin);

var _track = __webpack_require__(0);

var _track2 = _interopRequireDefault(_track);

var _videoTrack = __webpack_require__(5);

var _videoTrack2 = _interopRequireDefault(_videoTrack);

var _audioTrack = __webpack_require__(3);

var _audioTrack2 = _interopRequireDefault(_audioTrack);

var _textTrack = __webpack_require__(4);

var _textTrack2 = _interopRequireDefault(_textTrack);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Playkit version
var VERSION = packageData.version;


_logger2.default.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
_logger2.default.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
function playkit() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new _player2.default(config);
}

// Export the media source adapters necessary utils
exports.registerMediaSourceAdapter = _mediaSourceProvider.registerMediaSourceAdapter;
exports.BaseMediaSourceAdapter = _baseMediaSourceAdapter2.default;

// Export the plugin framework

exports.registerPlugin = _pluginManager.registerPlugin;
exports.BasePlugin = _basePlugin2.default;

// Export the tracks classes

exports.Track = _track2.default;
exports.VideoTrack = _videoTrack2.default;
exports.AudioTrack = _audioTrack2.default;
exports.TextTrack = _textTrack2.default;

//export version

exports.VERSION = VERSION;
exports.default = playkit;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(){var g={};
(function(window){var k,aa=this;aa.ue=!0;function m(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function ba(a){var b=p;function c(){}c.prototype=b.prototype;a.ze=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.we=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};/*

 Copyright 2016 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ca(a){this.c=Math.exp(Math.log(.5)/a);this.b=this.a=0}function da(a,b,c){var d=Math.pow(a.c,b);c=c*(1-d)+d*a.a;isNaN(c)||(a.a=c,a.b+=b)}function ea(a){return a.a/(1-Math.pow(a.c,a.b))};function fa(){this.c=new ca(2);this.f=new ca(5);this.a=0;this.b=5E5}fa.prototype.setDefaultEstimate=function(a){this.b=a};fa.prototype.getBandwidthEstimate=function(){return 128E3>this.a?this.b:Math.min(ea(this.c),ea(this.f))};function ga(){};function t(a,b,c,d){this.severity=a;this.category=b;this.code=c;this.data=Array.prototype.slice.call(arguments,3)}m("shaka.util.Error",t);t.prototype.toString=function(){return"shaka.util.Error "+JSON.stringify(this,null,"  ")};t.Severity={RECOVERABLE:1,CRITICAL:2};t.Category={NETWORK:1,TEXT:2,MEDIA:3,MANIFEST:4,STREAMING:5,DRM:6,PLAYER:7,CAST:8,STORAGE:9};
t.Code={UNSUPPORTED_SCHEME:1E3,BAD_HTTP_STATUS:1001,HTTP_ERROR:1002,TIMEOUT:1003,MALFORMED_DATA_URI:1004,UNKNOWN_DATA_URI_ENCODING:1005,REQUEST_FILTER_ERROR:1006,RESPONSE_FILTER_ERROR:1007,INVALID_TEXT_HEADER:2E3,INVALID_TEXT_CUE:2001,UNABLE_TO_DETECT_ENCODING:2003,BAD_ENCODING:2004,INVALID_XML:2005,INVALID_MP4_TTML:2007,INVALID_MP4_VTT:2008,BUFFER_READ_OUT_OF_BOUNDS:3E3,JS_INTEGER_OVERFLOW:3001,EBML_OVERFLOW:3002,EBML_BAD_FLOATING_POINT_SIZE:3003,MP4_SIDX_WRONG_BOX_TYPE:3004,MP4_SIDX_INVALID_TIMESCALE:3005,
MP4_SIDX_TYPE_NOT_SUPPORTED:3006,WEBM_CUES_ELEMENT_MISSING:3007,WEBM_EBML_HEADER_ELEMENT_MISSING:3008,WEBM_SEGMENT_ELEMENT_MISSING:3009,WEBM_INFO_ELEMENT_MISSING:3010,WEBM_DURATION_ELEMENT_MISSING:3011,WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:3012,WEBM_CUE_TIME_ELEMENT_MISSING:3013,MEDIA_SOURCE_OPERATION_FAILED:3014,MEDIA_SOURCE_OPERATION_THREW:3015,VIDEO_ERROR:3016,QUOTA_EXCEEDED_ERROR:3017,UNABLE_TO_GUESS_MANIFEST_TYPE:4E3,DASH_INVALID_XML:4001,DASH_NO_SEGMENT_INFO:4002,DASH_EMPTY_ADAPTATION_SET:4003,
DASH_EMPTY_PERIOD:4004,DASH_WEBM_MISSING_INIT:4005,DASH_UNSUPPORTED_CONTAINER:4006,DASH_PSSH_BAD_ENCODING:4007,DASH_NO_COMMON_KEY_SYSTEM:4008,DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:4009,DASH_CONFLICTING_KEY_IDS:4010,UNPLAYABLE_PERIOD:4011,RESTRICTIONS_CANNOT_BE_MET:4012,NO_PERIODS:4014,HLS_PLAYLIST_HEADER_MISSING:4015,INVALID_HLS_TAG:4016,HLS_INVALID_PLAYLIST_HIERARCHY:4017,DASH_DUPLICATE_REPRESENTATION_ID:4018,HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:4020,HLS_COULD_NOT_GUESS_MIME_TYPE:4021,HLS_MASTER_PLAYLIST_NOT_PROVIDED:4022,
HLS_REQUIRED_ATTRIBUTE_MISSING:4023,HLS_REQUIRED_TAG_MISSING:4024,HLS_COULD_NOT_GUESS_CODECS:4025,HLS_KEYFORMATS_NOT_SUPPORTED:4026,INVALID_STREAMS_CHOSEN:5005,NO_RECOGNIZED_KEY_SYSTEMS:6E3,REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:6001,FAILED_TO_CREATE_CDM:6002,FAILED_TO_ATTACH_TO_VIDEO:6003,INVALID_SERVER_CERTIFICATE:6004,FAILED_TO_CREATE_SESSION:6005,FAILED_TO_GENERATE_LICENSE_REQUEST:6006,LICENSE_REQUEST_FAILED:6007,LICENSE_RESPONSE_REJECTED:6008,ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:6010,NO_LICENSE_SERVER_GIVEN:6012,
OFFLINE_SESSION_REMOVED:6013,EXPIRED:6014,LOAD_INTERRUPTED:7E3,CAST_API_UNAVAILABLE:8E3,NO_CAST_RECEIVERS:8001,ALREADY_CASTING:8002,UNEXPECTED_CAST_ERROR:8003,CAST_CANCELED_BY_USER:8004,CAST_CONNECTION_TIMED_OUT:8005,CAST_RECEIVER_APP_UNAVAILABLE:8006,STORAGE_NOT_SUPPORTED:9E3,INDEXED_DB_ERROR:9001,OPERATION_ABORTED:9002,REQUESTED_ITEM_NOT_FOUND:9003,MALFORMED_OFFLINE_URI:9004,CANNOT_STORE_LIVE_OFFLINE:9005,STORE_ALREADY_IN_PROGRESS:9006,NO_INIT_DATA_FOR_OFFLINE:9007,LOCAL_PLAYER_INSTANCE_REQUIRED:9008};var ha=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function ia(a){var b;a instanceof ia?(ja(this,a.aa),this.Aa=a.Aa,this.ca=a.ca,ka(this,a.Ia),this.W=a.W,la(this,ma(a.a)),this.ta=a.ta):a&&(b=String(a).match(ha))?(ja(this,b[1]||"",!0),this.Aa=na(b[2]||""),this.ca=na(b[3]||"",!0),ka(this,b[4]),this.W=na(b[5]||"",!0),la(this,b[6]||"",!0),this.ta=na(b[7]||"")):this.a=new oa(null)}k=ia.prototype;k.aa="";k.Aa="";k.ca="";k.Ia=null;k.W="";k.ta="";
k.toString=function(){var a=[],b=this.aa;b&&a.push(qa(b,ra,!0),":");if(b=this.ca){a.push("//");var c=this.Aa;c&&a.push(qa(c,ra,!0),"@");a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.Ia;null!=b&&a.push(":",String(b))}if(b=this.W)this.ca&&"/"!=b.charAt(0)&&a.push("/"),a.push(qa(b,"/"==b.charAt(0)?sa:ta,!0));(b=this.a.toString())&&a.push("?",b);(b=this.ta)&&a.push("#",qa(b,ua));return a.join("")};
k.resolve=function(a){var b=new ia(this);"data"===b.aa&&(b=new ia);var c=!!a.aa;c?ja(b,a.aa):c=!!a.Aa;c?b.Aa=a.Aa:c=!!a.ca;c?b.ca=a.ca:c=null!=a.Ia;var d=a.W;if(c)ka(b,a.Ia);else if(c=!!a.W){if("/"!=d.charAt(0))if(this.ca&&!this.W)d="/"+d;else{var e=b.W.lastIndexOf("/");-1!=e&&(d=b.W.substr(0,e+1)+d)}if(".."==d||"."==d)d="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){for(var e=!d.lastIndexOf("/",0),d=d.split("/"),f=[],g=0;g<d.length;){var h=d[g++];"."==h?e&&g==d.length&&f.push(""):".."==h?((1<
f.length||1==f.length&&""!=f[0])&&f.pop(),e&&g==d.length&&f.push("")):(f.push(h),e=!0)}d=f.join("/")}}c?b.W=d:c=""!==a.a.toString();c?la(b,ma(a.a)):c=!!a.ta;c&&(b.ta=a.ta);return b};function ja(a,b,c){a.aa=c?na(b,!0):b;a.aa&&(a.aa=a.aa.replace(/:$/,""))}function ka(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ia=b}else a.Ia=null}function la(a,b,c){b instanceof oa?a.a=b:(c||(b=qa(b,va)),a.a=new oa(b))}
function na(a,b){return a?b?decodeURI(a):decodeURIComponent(a):""}function qa(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,wa),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wa(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ra=/[#\/\?@]/g,ta=/[\#\?:]/g,sa=/[\#\?]/g,va=/[\#\?@]/g,ua=/#/g;function oa(a){this.b=a||null}oa.prototype.a=null;oa.prototype.c=null;
oa.prototype.toString=function(){if(this.b)return this.b;if(!this.a)return"";var a=[],b;for(b in this.a)for(var c=encodeURIComponent(b),d=this.a[b],e=0;e<d.length;e++){var f=c;""!==d[e]&&(f+="="+encodeURIComponent(d[e]));a.push(f)}return this.b=a.join("&")};function ma(a){var b=new oa;b.b=a.b;if(a.a){var c={},d;for(d in a.a)c[d]=a.a[d].concat();b.a=c;b.c=a.c}return b};function xa(a,b){return a.reduce(function(a,b,e){return b["catch"](a.bind(null,e))}.bind(null,b),Promise.reject())}function x(a,b){return a.concat(b)}function y(){}function ya(a){return null!=a}function za(a){return function(b){return b!=a}}function Aa(a,b,c){return c.indexOf(a)==b};function z(a,b){if(!b.length)return a;var c=b.map(function(a){return new ia(a)});return a.map(function(a){return new ia(a)}).map(function(a){return c.map(a.resolve.bind(a))}).reduce(x,[]).map(function(a){return a.toString()})}function Ba(a,b){return{keySystem:a,licenseServerUri:"",distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,initData:b||[],keyIds:[]}};function Ca(a,b,c,d,e){var f=e in d,g;for(g in b){var h=e+"."+g,l=f?d[e]:c[g],n=!!{".abr.manager":!0}[h]||!!{serverCertificate:!0}[g];if(f||g in a)void 0===b[g]?void 0===l||f?delete a[g]:a[g]=l:n?a[g]=b[g]:"object"==typeof a[g]&&"object"==typeof b[g]?Ca(a[g],b[g],l,d,h):typeof b[g]==typeof l&&(a[g]=b[g])}}function Da(a){return JSON.parse(JSON.stringify(a))};function A(){var a,b,c=new Promise(function(c,e){a=c;b=e});c.resolve=a;c.reject=b;return c};function B(a){this.f=!1;this.a=[];this.b=[];this.c=[];this.h=a||null}m("shaka.net.NetworkingEngine",B);B.RequestType={MANIFEST:0,SEGMENT:1,LICENSE:2,APP:3};var Ea={};B.registerScheme=function(a,b){Ea[a]=b};B.unregisterScheme=function(a){delete Ea[a]};B.prototype.Jd=function(a){this.b.push(a)};B.prototype.registerRequestFilter=B.prototype.Jd;B.prototype.me=function(a){var b=this.b;a=b.indexOf(a);0<=a&&b.splice(a,1)};B.prototype.unregisterRequestFilter=B.prototype.me;
B.prototype.Gc=function(){this.b=[]};B.prototype.clearAllRequestFilters=B.prototype.Gc;B.prototype.Kd=function(a){this.c.push(a)};B.prototype.registerResponseFilter=B.prototype.Kd;B.prototype.ne=function(a){var b=this.c;a=b.indexOf(a);0<=a&&b.splice(a,1)};B.prototype.unregisterResponseFilter=B.prototype.ne;B.prototype.Hc=function(){this.c=[]};B.prototype.clearAllResponseFilters=B.prototype.Hc;function Fa(){return{maxAttempts:2,baseDelay:1E3,backoffFactor:2,fuzzFactor:.5,timeout:0}}
function C(a,b){return{uris:a,method:"GET",body:null,headers:{},allowCrossSiteCredentials:!1,retryParameters:b}}B.prototype.m=function(){this.f=!0;this.b=[];this.c=[];for(var a=[],b=0;b<this.a.length;++b)a.push(this.a[b]["catch"](y));return Promise.all(a)};B.prototype.destroy=B.prototype.m;
B.prototype.request=function(a,b){if(this.f)return Promise.reject();b.method=b.method||"GET";b.headers=b.headers||{};b.retryParameters=b.retryParameters?Da(b.retryParameters):Fa();b.uris=Da(b.uris);var c=Date.now(),d=Promise.resolve();this.b.forEach(function(c){d=d.then(c.bind(null,a,b))});d=d["catch"](function(a){throw new t(2,1,1006,a);});d=d.then(function(){for(var d=Date.now()-c,f=b.retryParameters||{},g=f.maxAttempts||1,h=f.backoffFactor||2,f=null==f.baseDelay?1E3:f.baseDelay,l=this.g(a,b,0,
d),n=1;n<g;n++)l=l["catch"](function(c,e,f){if(f&&1==f.severity){f=new A;var g=b.retryParameters||{};window.setTimeout(f.resolve,c*(1+(2*Math.random()-1)*(null==g.fuzzFactor?.5:g.fuzzFactor)));return f.then(this.g.bind(this,a,b,e,d))}throw f;}.bind(this,f,n%b.uris.length)),f*=h;return l}.bind(this));this.a.push(d);return d.then(function(b){0<=this.a.indexOf(d)&&this.a.splice(this.a.indexOf(d),1);this.h&&!b.fromCache&&1==a&&this.h(b.timeMs,b.data.byteLength);return b}.bind(this))["catch"](function(a){a&&
(a.severity=2);0<=this.a.indexOf(d)&&this.a.splice(this.a.indexOf(d),1);return Promise.reject(a)}.bind(this))};B.prototype.request=B.prototype.request;
B.prototype.g=function(a,b,c,d){if(this.f)return Promise.reject();var e=new ia(b.uris[c]),f=e.aa;f||(f=location.protocol,f=f.slice(0,-1),ja(e,f),b.uris[c]=e.toString());f=Ea[f];if(!f)return Promise.reject(new t(2,1,1E3,e));var g=Date.now();return f(b.uris[c],b,a).then(function(b){void 0==b.timeMs&&(b.timeMs=Date.now()-g);var c=Date.now(),e=Promise.resolve();this.c.forEach(function(c){e=e.then(function(){return Promise.resolve(c(a,b))}.bind(this))});e=e["catch"](function(a){var b=2;a instanceof t&&
(b=a.severity);throw new t(b,1,1007,a);});return e.then(function(){b.timeMs+=Date.now()-c;b.timeMs+=d;return b})}.bind(this))};function Ga(a,b){for(var c=[],d=0;d<a.length;++d){for(var e=!1,f=0;f<c.length&&!(e=b?b(a[d],c[f]):a[d]===c[f]);++f);e||c.push(a[d])}return c}function Ha(a,b,c){for(var d=0;d<a.length;++d)if(c(a[d],b))return d;return-1};function Ia(){this.a={}}Ia.prototype.push=function(a,b){this.a.hasOwnProperty(a)?this.a[a].push(b):this.a[a]=[b]};Ia.prototype.get=function(a){return(a=this.a[a])?a.slice():null};Ia.prototype.remove=function(a,b){var c=this.a[a];if(c)for(var d=0;d<c.length;++d)c[d]==b&&(c.splice(d,1),--d)};function D(){this.a=new Ia}D.prototype.m=function(){Ja(this);this.a=null;return Promise.resolve()};function E(a,b,c,d){a.a&&(b=new Ka(b,c,d),a.a.push(c,b))}function La(a,b,c,d){E(a,b,c,function(a){this.ha(b,c);d(a)}.bind(a))}D.prototype.ha=function(a,b){if(this.a)for(var c=this.a.get(b)||[],d=0;d<c.length;++d){var e=c[d];e.target==a&&(e.ha(),this.a.remove(b,e))}};function Ja(a){if(a.a){var b=a.a,c=[],d;for(d in b.a)c.push.apply(c,b.a[d]);for(b=0;b<c.length;++b)c[b].ha();a.a.a={}}}
function Ka(a,b,c){this.target=a;this.type=b;this.a=c;this.target.addEventListener(b,c,!1)}Ka.prototype.ha=function(){this.target.removeEventListener(this.type,this.a,!1);this.a=this.target=null};function Ma(a){return!a||!Object.keys(a).length}function Na(a){return Object.keys(a).map(function(b){return a[b]})}function Oa(a,b){return Object.keys(a).reduce(function(c,d){c[d]=b(a[d],d);return c},{})}function Pa(a,b){return Object.keys(a).every(function(c){return b(c,a[c])})}function Qa(a,b){Object.keys(a).forEach(function(c){b(c,a[c])})};function F(a){if(!a)return"";a=new Uint8Array(a);239==a[0]&&187==a[1]&&191==a[2]&&(a=a.subarray(3));a=escape(Ra(a));try{return decodeURIComponent(a)}catch(b){throw new t(2,2,2004);}}m("shaka.util.StringUtils.fromUTF8",F);
function Sa(a,b,c){if(!a)return"";if(!c&&a.byteLength%2)throw new t(2,2,2004);if(a instanceof ArrayBuffer)var d=a;else c=new Uint8Array(a.byteLength),c.set(new Uint8Array(a)),d=c.buffer;a=Math.floor(a.byteLength/2);c=new Uint16Array(a);d=new DataView(d);for(var e=0;e<a;e++)c[e]=d.getUint16(2*e,b);return Ra(c)}m("shaka.util.StringUtils.fromUTF16",Sa);
function Ta(a){var b=new Uint8Array(a);if(239==b[0]&&187==b[1]&&191==b[2])return F(b);if(254==b[0]&&255==b[1])return Sa(b.subarray(2),!1);if(255==b[0]&&254==b[1])return Sa(b.subarray(2),!0);var c=function(a,b){return a.byteLength<=b||32<=a[b]&&126>=a[b]}.bind(null,b);if(b[0]||b[2]){if(!b[1]&&!b[3])return Sa(a,!0);if(c(0)&&c(1)&&c(2)&&c(3))return F(a)}else return Sa(a,!1);throw new t(2,2,2003);}m("shaka.util.StringUtils.fromBytesAutoDetect",Ta);
function Ua(a){a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),c=0;c<a.length;++c)b[c]=a.charCodeAt(c);return b.buffer}m("shaka.util.StringUtils.toUTF8",Ua);function Ra(a){for(var b="",c=0;c<a.length;c+=16E3)b+=String.fromCharCode.apply(null,a.subarray(c,c+16E3));return b};function Va(a){this.a=null;this.b=function(){this.a=null;a()}.bind(this)}Va.prototype.cancel=function(){null!=this.a&&(clearTimeout(this.a),this.a=null)};function Wa(a){a.cancel();a.a=setTimeout(a.b,500)};function Xa(a,b){var c=void 0==b?!0:b,d=window.btoa(String.fromCharCode.apply(null,a)).replace(/\+/g,"-").replace(/\//g,"_");return c?d:d.replace(/=*$/,"")}m("shaka.util.Uint8ArrayUtils.toBase64",Xa);function Ya(a){a=window.atob(a.replace(/-/g,"+").replace(/_/g,"/"));for(var b=new Uint8Array(a.length),c=0;c<a.length;++c)b[c]=a.charCodeAt(c);return b}m("shaka.util.Uint8ArrayUtils.fromBase64",Ya);
function Za(a){for(var b=new Uint8Array(a.length/2),c=0;c<a.length;c+=2)b[c/2]=window.parseInt(a.substr(c,2),16);return b}m("shaka.util.Uint8ArrayUtils.fromHex",Za);function $a(a){for(var b="",c=0;c<a.length;++c){var d=a[c].toString(16);1==d.length&&(d="0"+d);b+=d}return b}m("shaka.util.Uint8ArrayUtils.toHex",$a);function ab(a,b){if(!a&&!b)return!0;if(!a||!b||a.length!=b.length)return!1;for(var c=0;c<a.length;++c)if(a[c]!=b[c])return!1;return!0}m("shaka.util.Uint8ArrayUtils.equal",ab);
m("shaka.util.Uint8ArrayUtils.concat",function(a){for(var b=0,c=0;c<arguments.length;++c)b+=arguments[c].length;for(var b=new Uint8Array(b),d=0,c=0;c<arguments.length;++c)b.set(arguments[c],d),d+=arguments[c].length;return b});function bb(a,b,c,d){this.j=this.i=this.v=null;this.J=!1;this.b=null;this.f=new D;this.a=[];this.o=[];this.l=new A;this.ka=a;this.h=null;this.g=function(a){this.l.reject(a);b(a)}.bind(this);this.A={};this.Ba=c;this.la=d;this.B=new Va(this.Id.bind(this));this.ja=this.c=!1;this.G=[];this.ia=!1;this.P=setInterval(this.Hd.bind(this),1E3);this.l["catch"](function(){})}k=bb.prototype;
k.m=function(){this.c=!0;var a=this.a.map(function(a){return(a.ba.close()||Promise.resolve())["catch"](y)});this.l.reject();this.f&&a.push(this.f.m());this.j&&a.push(this.j.setMediaKeys(null)["catch"](y));this.P&&(clearInterval(this.P),this.P=null);this.B&&this.B.cancel();this.f=this.j=this.i=this.v=this.b=this.B=null;this.a=[];this.o=[];this.la=this.g=this.h=this.ka=null;return Promise.all(a)};k.configure=function(a){this.h=a};
k.init=function(a,b){var c={},d=[];this.ja=b;this.o=a.offlineSessionIds;cb(this,a,b||0<a.offlineSessionIds.length,c,d);return d.length?db(this,c,d):(this.J=!0,Promise.resolve())};
function eb(a,b){if(!a.i)return La(a.f,b,"encrypted",function(){this.g(new t(2,6,6010))}.bind(a)),Promise.resolve();a.j=b;La(a.f,a.j,"play",a.od.bind(a));var c=a.j.setMediaKeys(a.i),c=c["catch"](function(a){return Promise.reject(new t(2,6,6003,a.message))}),d=null;a.b.serverCertificate&&(d=a.i.setServerCertificate(a.b.serverCertificate).then(function(){})["catch"](function(a){return Promise.reject(new t(2,6,6004,a.message))}));return Promise.all([c,d]).then(function(){if(this.c)return Promise.reject();
fb(this);this.b.initData.length||this.o.length||E(this.f,this.j,"encrypted",this.dd.bind(this))}.bind(a))["catch"](function(a){return this.c?Promise.resolve():Promise.reject(a)}.bind(a))}function gb(a,b){return Promise.all(b.map(function(a){return hb(this,a).then(function(a){if(a){for(var b=new A,c=0;c<this.a.length;c++)if(this.a[c].ba==a){this.a[c].ib=b;break}return Promise.all([a.remove(),b])}}.bind(this))}.bind(a)))}
function fb(a){var b=a.b?a.b.initData:[];b.forEach(function(a){ib(this,a.initDataType,a.initData)}.bind(a));a.o.forEach(function(a){hb(this,a)}.bind(a));b.length||a.o.length||a.l.resolve();return a.l}k.keySystem=function(){return this.b?this.b.keySystem:""};function jb(a){return a.a.map(function(a){return a.ba.sessionId})}k.ab=function(){var a=this.a.map(function(a){a=a.ba.expiration;return isNaN(a)?Infinity:a});return Math.min.apply(Math,a)};
function cb(a,b,c,d,e){var f=kb(a);b.periods.forEach(function(a){a.variants.forEach(function(a){f&&(a.drmInfos=[f]);a.drmInfos.forEach(function(b){lb(this,b);window.cast&&window.cast.__platform__&&"com.microsoft.playready"==b.keySystem&&(b.keySystem="com.chromecast.playready");var f=d[b.keySystem];f||(f={audioCapabilities:[],videoCapabilities:[],distinctiveIdentifier:"optional",persistentState:c?"required":"optional",sessionTypes:[c?"persistent-license":"temporary"],label:b.keySystem,drmInfos:[]},
d[b.keySystem]=f,e.push(b.keySystem));f.drmInfos.push(b);b.distinctiveIdentifierRequired&&(f.distinctiveIdentifier="required");b.persistentStateRequired&&(f.persistentState="required");var g=[];a.video&&g.push(a.video);a.audio&&g.push(a.audio);g.forEach(function(a){var c="video"==a.type?f.videoCapabilities:f.audioCapabilities,d=("video"==a.type?b.videoRobustness:b.audioRobustness)||"",e=a.mimeType;a.codecs&&(e+='; codecs="'+a.codecs+'"');c.push({robustness:d,contentType:e})}.bind(this))}.bind(this))}.bind(this))}.bind(a))}
function db(a,b,c){if(1==c.length&&""==c[0])return Promise.reject(new t(2,6,6E3));var d=new A,e=d;[!0,!1].forEach(function(a){c.forEach(function(c){var d=b[c];d.drmInfos.some(function(a){return!!a.licenseServerUri})==a&&(d.audioCapabilities.length||delete d.audioCapabilities,d.videoCapabilities.length||delete d.videoCapabilities,e=e["catch"](function(){return this.c?Promise.reject():navigator.requestMediaKeySystemAccess(c,[d])}.bind(this)))}.bind(this))}.bind(a));e=e["catch"](function(){return Promise.reject(new t(2,
6,6001))});e=e.then(function(a){if(this.c)return Promise.reject();var c=0<=navigator.userAgent.indexOf("Edge/"),d=a.getConfiguration();this.v=(d.audioCapabilities||[]).concat(d.videoCapabilities||[]).map(function(a){return a.contentType});c&&(this.v=null);c=b[a.keySystem];mb(this,a.keySystem,c,c.drmInfos);return this.b.licenseServerUri?a.createMediaKeys():Promise.reject(new t(2,6,6012))}.bind(a)).then(function(a){if(this.c)return Promise.reject();this.i=a;this.J=!0}.bind(a))["catch"](function(a){if(this.c)return Promise.resolve();
this.v=this.b=null;return a instanceof t?Promise.reject(a):Promise.reject(new t(2,6,6002,a.message))}.bind(a));d.reject();return e}
function lb(a,b){var c=b.keySystem;if(c){if(!b.licenseServerUri){var d=a.h.servers[c];d&&(b.licenseServerUri=d)}b.keyIds||(b.keyIds=[]);if(c=a.h.advanced[c])b.distinctiveIdentifierRequired||(b.distinctiveIdentifierRequired=c.distinctiveIdentifierRequired),b.persistentStateRequired||(b.persistentStateRequired=c.persistentStateRequired),b.videoRobustness||(b.videoRobustness=c.videoRobustness),b.audioRobustness||(b.audioRobustness=c.audioRobustness),b.serverCertificate||(b.serverCertificate=c.serverCertificate)}}
function kb(a){if(Ma(a.h.clearKeys))return null;var b=[],c=[],d;for(d in a.h.clearKeys){var e=a.h.clearKeys[d],f=Za(d),e=Za(e),f={kty:"oct",kid:Xa(f,!1),k:Xa(e,!1)};b.push(f);c.push(f.kid)}a=JSON.stringify({keys:b});c=JSON.stringify({kids:c});c=[{initData:new Uint8Array(Ua(c)),initDataType:"keyids"}];return{keySystem:"org.w3.clearkey",licenseServerUri:"data:application/json;base64,"+window.btoa(a),distinctiveIdentifierRequired:!1,persistentStateRequired:!1,audioRobustness:"",videoRobustness:"",serverCertificate:null,
initData:c,keyIds:[]}}function mb(a,b,c,d){var e=[],f=[],g=[],h=[];nb(d,e,f,g,h);a.b={keySystem:b,licenseServerUri:e[0],distinctiveIdentifierRequired:"required"==c.distinctiveIdentifier,persistentStateRequired:"required"==c.persistentState,audioRobustness:c.audioCapabilities?c.audioCapabilities[0].robustness:"",videoRobustness:c.videoCapabilities?c.videoCapabilities[0].robustness:"",serverCertificate:f[0],initData:g,keyIds:h}}
function nb(a,b,c,d,e){function f(a,b){return a.keyId&&a.keyId==b.keyId?!0:a.initDataType==b.initDataType&&ab(a.initData,b.initData)}a.forEach(function(a){-1==b.indexOf(a.licenseServerUri)&&b.push(a.licenseServerUri);a.serverCertificate&&-1==Ha(c,a.serverCertificate,ab)&&c.push(a.serverCertificate);a.initData&&a.initData.forEach(function(a){-1==Ha(d,a,f)&&d.push(a)});if(a.keyIds)for(var g=0;g<a.keyIds.length;++g)-1==e.indexOf(a.keyIds[g])&&e.push(a.keyIds[g])})}
k.dd=function(a){for(var b=new Uint8Array(a.initData),c=0;c<this.a.length;++c)if(ab(b,this.a[c].initData))return;ib(this,a.initDataType,b)};
function hb(a,b){try{var c=a.i.createSession("persistent-license")}catch(f){var d=new t(2,6,6005,f.message);a.g(d);return Promise.reject(d)}E(a.f,c,"message",a.ic.bind(a));E(a.f,c,"keystatuseschange",a.cc.bind(a));var e={initData:null,ba:c,loaded:!1,xb:Infinity,ib:null};a.a.push(e);return c.load(b).then(function(a){if(!this.c){if(a)return e.loaded=!0,this.a.every(function(a){return a.loaded})&&this.l.resolve(),c;this.a.splice(this.a.indexOf(e),1);this.g(new t(2,6,6013))}}.bind(a),function(a){this.c||
(this.a.splice(this.a.indexOf(e),1),this.g(new t(2,6,6005,a.message)))}.bind(a))}
function ib(a,b,c){try{var d=a.ja?a.i.createSession("persistent-license"):a.i.createSession()}catch(e){a.g(new t(2,6,6005,e.message));return}E(a.f,d,"message",a.ic.bind(a));E(a.f,d,"keystatuseschange",a.cc.bind(a));a.a.push({initData:c,ba:d,loaded:!1,xb:Infinity,ib:null});d.generateRequest(b,c.buffer)["catch"](function(a){if(!this.c){for(var b=0;b<this.a.length;++b)if(this.a[b].ba==d){this.a.splice(b,1);break}this.g(new t(2,6,6006,a.message))}}.bind(a))}
k.ic=function(a){this.h.delayLicenseRequestUntilPlayed&&this.j.paused&&!this.ia?this.G.push(a):ob(this,a)};
function ob(a,b){for(var c=b.target,d,e=0;e<a.a.length;e++)if(a.a[e].ba==c){d=a.a[e].ib;break}e=C([a.b.licenseServerUri],a.h.retryParameters);e.body=b.message;e.method="POST";"com.microsoft.playready"==a.b.keySystem&&pb(e);a.ka.request(2,e).then(function(a){return this.c?Promise.reject():c.update(a.data).then(function(){d&&d.resolve()})}.bind(a),function(a){if(this.c)return Promise.resolve();a=new t(2,6,6007,a);this.g(a);d&&d.reject(a)}.bind(a))["catch"](function(a){if(this.c)return Promise.resolve();
a=new t(2,6,6008,a.message);this.g(a);d&&d.reject(a)}.bind(a))}function pb(a){var b=Sa(a.body,!0,!0);if(-1==b.indexOf("PlayReadyKeyMessage"))a.headers["Content-Type"]="text/xml; charset=utf-8";else{for(var b=(new DOMParser).parseFromString(b,"application/xml"),c=b.getElementsByTagName("HttpHeader"),d=0;d<c.length;++d)a.headers[c[d].querySelector("name").textContent]=c[d].querySelector("value").textContent;a.body=Ya(b.querySelector("Challenge").textContent).buffer}}
k.cc=function(a){a=a.target;var b;for(b=0;b<this.a.length&&this.a[b].ba!=a;++b);if(b!=this.a.length){var c=!1;a.keyStatuses.forEach(function(a,d){if("string"==typeof d){var e=d;d=a;a=e}if("com.microsoft.playready"==this.b.keySystem&&16==d.byteLength){var e=new DataView(d),f=e.getUint32(0,!0),l=e.getUint16(4,!0),n=e.getUint16(6,!0);e.setUint32(0,f,!1);e.setUint16(4,l,!1);e.setUint16(6,n,!1)}"com.microsoft.playready"==this.b.keySystem&&"status-pending"==a&&(a="usable");"status-pending"!=a&&(this.a[b].loaded=
!0,this.a.every(function(a){return a.loaded})&&this.l.resolve());"expired"==a&&(c=!0);e=$a(new Uint8Array(d));this.A[e]=a}.bind(this));var d=a.expiration-Date.now();(0>d||c&&1E3>d)&&!this.a[b].ib&&(this.a.splice(b,1),a.close());Wa(this.B)}};k.Id=function(){function a(a,c){return"expired"==c}!Ma(this.A)&&Pa(this.A,a)&&this.g(new t(2,6,6014));this.Ba(this.A)};
function qb(){var a=[],b=[{contentType:'video/mp4; codecs="avc1.42E01E"'},{contentType:'video/webm; codecs="vp8"'}],c=[{videoCapabilities:b,persistentState:"required",sessionTypes:["persistent-license"]},{videoCapabilities:b}],d={};"org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(b){var e=navigator.requestMediaKeySystemAccess(b,c).then(function(a){var c=a.getConfiguration().sessionTypes;d[b]=
{persistentState:c?0<=c.indexOf("persistent-license"):!1};return a.createMediaKeys()})["catch"](function(){d[b]=null});a.push(e)});return Promise.all(a).then(function(){return d})}k.od=function(){for(var a=0;a<this.G.length;a++)ob(this,this.G[a]);this.ia=!0;this.G=[]};function rb(a,b){var c=a.keySystem();return!b.drmInfos.length||b.drmInfos.some(function(a){return a.keySystem==c})}
function sb(a,b){if(!a.length)return b;if(!b.length)return a;for(var c=[],d=0;d<a.length;d++)for(var e=0;e<b.length;e++)if(a[d].keySystem==b[e].keySystem){var f=a[d],e=b[e],g=[],g=g.concat(f.initData||[]),g=g.concat(e.initData||[]),h=[],h=h.concat(f.keyIds),h=h.concat(e.keyIds);c.push({keySystem:f.keySystem,licenseServerUri:f.licenseServerUri||e.licenseServerUri,distinctiveIdentifierRequired:f.distinctiveIdentifierRequired||e.distinctiveIdentifierRequired,persistentStateRequired:f.persistentStateRequired||
e.persistentStateRequired,videoRobustness:f.videoRobustness||e.videoRobustness,audioRobustness:f.audioRobustness||e.audioRobustness,serverCertificate:f.serverCertificate||e.serverCertificate,initData:g,keyIds:h});break}return c}k.Hd=function(){this.a.forEach(function(a){var b=a.xb,c=a.ba.expiration;isNaN(c)&&(c=Infinity);c!=b&&(this.la(a.ba.sessionId,c),a.xb=c)}.bind(this))};function tb(a){this.f=null;this.c=a;this.h=0;this.g=Infinity;this.a=this.b=null}var ub={};function vb(a,b){ub[a]=b.length?wb.bind(null,b):b}m("shaka.media.TextEngine.registerParser",vb);m("shaka.media.TextEngine.unregisterParser",function(a){delete ub[a]});function xb(a,b,c){return a>=b?null:new VTTCue(a,b,c)}m("shaka.media.TextEngine.makeCue",xb);tb.prototype.m=function(){this.c&&yb(this,function(){return!0});this.c=this.f=null;return Promise.resolve()};
function zb(a,b,c,d){return Promise.resolve().then(function(){if(this.c)if(null==c||null==d)this.f.parseInit(b);else{for(var a=this.f.parseMedia(b,{periodStart:this.h,segmentStart:c,segmentEnd:d}),f=0;f<a.length&&!(a[f].startTime>=this.g);++f)this.c.addCue(a[f]);null==this.b&&(this.b=c);this.a=Math.min(d,this.g)}}.bind(a))}
tb.prototype.remove=function(a,b){return Promise.resolve().then(function(){this.c&&(yb(this,function(c){return c.startTime>=b||c.endTime<=a?!1:!0}),null==this.b||b<=this.b||a>=this.a||(a<=this.b&&b>=this.a?this.b=this.a=null:a<=this.b&&b<this.a?this.b=b:a>this.b&&b>=this.a&&(this.a=a)))}.bind(this))};function yb(a,b){for(var c=a.c.cues,d=[],e=0;e<c.length;++e)b(c[e])&&d.push(c[e]);for(e=0;e<d.length;++e)a.c.removeCue(d[e])}function wb(a){this.Na=a}
wb.prototype.parseInit=function(a){this.Na(a,0,null,null)};wb.prototype.parseMedia=function(a,b){return this.Na(a,b.periodStart,b.segmentStart,b.segmentEnd)};function Ab(a){return!a||1==a.length&&1E-6>a.end(0)-a.start(0)?null:a.length?a.end(a.length-1):null}function Bb(a,b){return!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0)?!1:b>=a.start(0)&&b<=a.end(a.length-1)}function Cb(a,b){if(!a||!a.length||1==a.length&&1E-6>a.end(0)-a.start(0))return 0;for(var c=0,d=a.length-1;0<=d&&a.end(d)>b;--d)c+=a.end(d)-Math.max(a.start(d),b);return c};function Db(a,b,c){this.f=a;this.N=b;this.i=c;this.c={};this.a=null;this.b={};this.g=new D;this.h=!1}
function Eb(){var a={};'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hvc1.1.6.L93.90",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(b){a[b]=!!ub[b]||
MediaSource.isTypeSupported(b);var c=b.split(";")[0];a[c]=a[c]||a[b]});return a}k=Db.prototype;k.m=function(){this.h=!0;var a=[],b;for(b in this.b){var c=this.b[b],d=c[0];this.b[b]=c.slice(0,1);d&&a.push(d.p["catch"](y));for(d=1;d<c.length;++d)c[d].p["catch"](y),c[d].p.reject()}this.a&&a.push(this.a.m());return Promise.all(a).then(function(){this.g.m();this.a=this.i=this.N=this.f=this.g=null;this.c={};this.b={}}.bind(this))};
k.init=function(a){for(var b in a){var c=a[b];"text"==b?Fb(this,c):(c=this.N.addSourceBuffer(c),E(this.g,c,"error",this.he.bind(this,b)),E(this.g,c,"updateend",this.Ha.bind(this,b)),this.c[b]=c,this.b[b]=[])}};function Fb(a,b){a.a||(a.a=new tb(a.i));a.a.f=new ub[b]}function Gb(a,b){if("text"==b)var c=a.a.b;else c=Ib(a,b),c=!c||1==c.length&&1E-6>c.end(0)-c.start(0)?null:1==c.length&&0>c.start(0)?0:c.length?c.start(0):null;return c}function Ib(a,b){try{return a.c[b].buffered}catch(c){return null}}
function Jb(a,b,c,d,e){return"text"==b?zb(a.a,c,d,e):Kb(a,b,a.ge.bind(a,b,c))}k.remove=function(a,b,c){return"text"==a?this.a.remove(b,c):Kb(this,a,this.oc.bind(this,a,b,c))};function Lb(a,b){return"text"==b?a.a.remove(0,Infinity):Kb(a,b,a.oc.bind(a,b,0,a.N.duration))}function Mb(a,b,c,d){if("text"==b)return a.a.h=c,null!=d&&(a.a.g=d),Promise.resolve();null==d&&(d=Infinity);return Promise.all([Kb(a,b,a.Cc.bind(a,b)),Kb(a,b,a.Xd.bind(a,b,c)),Kb(a,b,a.Vd.bind(a,b,d))])}
k.endOfStream=function(a){return Nb(this,function(){a?this.N.endOfStream(a):this.N.endOfStream()}.bind(this))};k.pa=function(a){return Nb(this,function(){this.N.duration=a}.bind(this))};k.Y=function(){return this.N.duration};k.ge=function(a,b){this.c[a].appendBuffer(b)};k.oc=function(a,b,c){c<=b?this.Ha(a):this.c[a].remove(b,c)};k.Cc=function(a){var b=this.c[a].appendWindowEnd;this.c[a].abort();this.c[a].appendWindowEnd=b;this.Ha(a)};k.Mc=function(a){this.f.currentTime-=.001;this.Ha(a)};
k.Xd=function(a,b){this.c[a].timestampOffset=b;this.Ha(a)};k.Vd=function(a,b){this.c[a].appendWindowEnd=b+.04;this.Ha(a)};k.he=function(a){this.b[a][0].p.reject(new t(2,3,3014,this.f.error?this.f.error.code:0))};k.Ha=function(a){var b=this.b[a][0];b&&(b.p.resolve(),Ob(this,a))};
function Kb(a,b,c){if(a.h)return Promise.reject();c={start:c,p:new A};a.b[b].push(c);if(1==a.b[b].length)try{c.start()}catch(d){"QuotaExceededError"==d.name?c.p.reject(new t(2,3,3017,b)):c.p.reject(new t(2,3,3015,d)),Ob(a,b)}return c.p}
function Nb(a,b){if(a.h)return Promise.reject();var c=[],d;for(d in a.c){var e=new A,f={start:function(a){a.resolve()}.bind(null,e),p:e};a.b[d].push(f);c.push(e);1==a.b[d].length&&f.start()}return Promise.all(c).then(function(){var a;try{b()}catch(l){var c=Promise.reject(new t(2,3,3015,l))}for(a in this.c)Ob(this,a);return c}.bind(a),function(){return Promise.reject()}.bind(a))}function Ob(a,b){a.b[b].shift();var c=a.b[b][0];if(c)try{c.start()}catch(d){c.p.reject(new t(2,3,3015,d)),Ob(a,b)}};function Pb(a,b,c){return c==b||a>=Qb&&c==b.split("-")[0]||a>=Rb&&c.split("-")[0]==b.split("-")[0]?!0:!1}var Qb=1,Rb=2;function Sb(a){a=a.toLowerCase().split("-");var b=Tb[a[0]];b&&(a[0]=b);return a.join("-")}
var Tb={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bod:"bo",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",ces:"cs",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cym:"cy",cze:"cs",dan:"da",deu:"de",div:"dv",dut:"nl",dzo:"dz",ell:"el",eng:"en",epo:"eo",est:"et",eus:"eu",ewe:"ee",fao:"fo",fas:"fa",fij:"fj",fin:"fi",fra:"fr",fre:"fr",
fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",hye:"hy",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",isl:"is",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kat:"ka",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",
lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mkd:"mk",mlg:"mg",mlt:"mt",mon:"mn",mri:"mi",msa:"ms",mya:"my",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nld:"nl",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",ron:"ro",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slk:"sk",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",sqi:"sq",
srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zho:"zh",zul:"zu"};function Ub(a,b,c){var d=a.video;return d&&(d.width<b.minWidth||d.width>b.maxWidth||d.width>c.width||d.height<b.minHeight||d.height>b.maxHeight||d.height>c.height||d.width*d.height<b.minPixels||d.width*d.height>b.maxPixels)||a.bandwidth<b.minBandwidth||a.bandwidth>b.maxBandwidth?!1:!0}function Vb(a,b,c){var d=!1;a.variants.forEach(function(a){var e=a.allowedByApplication;a.allowedByApplication=Ub(a,b,c);e!=a.allowedByApplication&&(d=!0)});return d}
function Wb(a,b,c){var d=b.video,e=b.audio;for(b=0;b<c.variants.length;++b){var f=c.variants[b],g=a,h=e,l=d;(g&&g.J&&!rb(g,f)?0:Xb(f.audio,g,h)&&Xb(f.video,g,l))||(c.variants.splice(b,1),--b)}for(b=0;b<c.textStreams.length;++b)a=c.textStreams[b],ub[Yb(a.mimeType,a.codecs)]||(c.textStreams.splice(b,1),--b)}
function Xb(a,b,c){if(!a)return!0;var d=null;b&&b.J&&(d=b.v);b=Yb(a.mimeType,a.codecs);return!ub[b]&&!MediaSource.isTypeSupported(b)||d&&a.encrypted&&0>d.indexOf(b)||c&&(a.mimeType!=c.mimeType||a.codecs.split(".")[0]!=c.codecs.split(".")[0])?!1:!0}
function Zb(a,b,c){var d=null;return $b(a.variants).map(function(a){var e;a.video&&a.audio?e=c==a.video.id&&b==a.audio.id:e=a.video&&c==a.video.id||a.audio&&b==a.audio.id;var g="";a.video&&(g+=a.video.codecs);a.audio&&(""!=g&&(g+=", "),g+=a.audio.codecs,d=a.audio.label);var h=a.audio?a.audio.codecs:null,l=a.video?a.video.codecs:null,n=null;a.video?n=a.video.mimeType:a.audio&&(n=a.audio.mimeType);var q=null;a.audio?q=a.audio.kind:a.video&&(q=a.video.kind);var r=Ga((a.audio?a.audio.roles:[]).concat(a.video?
a.video.roles:[]));return{id:a.id,active:e,type:"variant",bandwidth:a.bandwidth,language:a.language,label:d,kind:q||null,width:a.video?a.video.width:null,height:a.video?a.video.height:null,frameRate:a.video?a.video.frameRate:void 0,mimeType:n,codecs:g,audioCodec:h,videoCodec:l,primary:a.primary,roles:r,videoId:a.video?a.video.id:null,audioId:a.audio?a.audio.id:null}})}
function ac(a,b){return a.textStreams.map(function(a){return{id:a.id,active:b==a.id,type:"text",language:a.language,label:a.label,kind:a.kind,mimeType:a.mimeType,codecs:a.codecs||null,audioCodec:null,videoCodec:null,primary:a.primary,roles:a.roles}})}function bc(a,b){for(var c=0;c<a.variants.length;c++)if(a.variants[c].id==b.id)return a.variants[c];return null}function cc(a,b){for(var c=0;c<a.textStreams.length;c++)if(a.textStreams[c].id==b.id)return a.textStreams[c];return null}
function $b(a){return a.filter(function(a){return a.allowedByApplication&&a.allowedByKeySystem})}function dc(a,b,c){var d=$b(a.variants),e=d.filter(function(a){return a.language==d[0].language});a=d.filter(function(a){return a.primary});a.length&&(e=a);if(b){var f=Sb(b);[Rb,Qb,0].forEach(function(a){var b=!1;d.forEach(function(d){f=Sb(f);var g=Sb(d.language);Pb(a,f,g)&&(b?e.push(d):(e=[d],b=!0),c&&(c.audio=!0))})})}return e}
function ec(a,b,c){var d=a.textStreams,e=d;a=d.filter(function(a){return a.primary});a.length&&(e=a);if(b){var f=Sb(b);[Rb,Qb,0].forEach(function(a){var b=!1;d.forEach(function(d){var g=Sb(d.language);Pb(a,f,g)&&(b?e.push(d):(e=[d],b=!0),c&&(c.text=!0))})})}return e}function fc(a,b,c){for(var d=0;d<c.length;d++)if(c[d].audio==a&&c[d].video==b)return c[d];return null}
function gc(a,b,c){function d(a,b){return null==a?null==b:b.id==a}for(var e=0;e<c.length;e++)if(d(a,c[e].audio)&&d(b,c[e].video))return c[e];return null}function Yb(a,b){var c=a;b&&(c+='; codecs="'+b+'"');return c}function hc(a,b){for(var c=a.periods.length-1;0<c;--c)if(b>=a.periods[c].startTime)return c;return 0}
function ic(a,b){for(var c=0;c<a.periods.length;++c){var d=a.periods[c];if("text"==b.type)for(var e=0;e<d.textStreams.length;++e){if(d.textStreams[e]==b)return c}else for(e=0;e<d.variants.length;++e){var f=d.variants[e];if(f.audio==b||f.video==b||f.video&&f.video.trickModeVideo==b)return c}}return-1};function H(){this.f=null;this.b=!1;this.a=new fa;this.h=[];this.g=[];this.j=!1;this.c=null;this.i={minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}}m("shaka.abr.SimpleAbrManager",H);H.prototype.stop=function(){this.f=null;this.b=!1;this.h=[];this.g=[];this.c=null};H.prototype.stop=H.prototype.stop;H.prototype.init=function(a){this.f=a};H.prototype.init=H.prototype.init;
H.prototype.chooseStreams=function(a){var b={};if(-1<a.indexOf("audio")||-1<a.indexOf("video")){var c=this.h;var d=jc(this.i,c);var e=this.a.getBandwidthEstimate();if(c.length&&!d.length)throw new t(2,4,4012);for(var c=d[0],f=0;f<d.length;++f){var g=d[f],h=(d[f+1]||{bandwidth:Infinity}).bandwidth/.85;e>=g.bandwidth/.95&&e<=h&&(c=g)}(d=c)&&d.video&&(b.video=d.video);d&&d.audio&&(b.audio=d.audio)}-1<a.indexOf("text")&&(b.text=this.g[0]);this.c=Date.now();return b};H.prototype.chooseStreams=H.prototype.chooseStreams;
H.prototype.enable=function(){this.b=!0};H.prototype.enable=H.prototype.enable;H.prototype.disable=function(){this.b=!1};H.prototype.disable=H.prototype.disable;H.prototype.segmentDownloaded=function(a,b){var c=this.a;if(!(16E3>b)){var d=8E3*b/a,e=a/1E3;c.a+=b;da(c.c,e,d);da(c.f,e,d)}if(null!=this.c&&this.b)a:{if(!this.j){if(!(128E3<=this.a.a))break a;this.j=!0}else if(8E3>Date.now()-this.c)break a;c=this.chooseStreams(["audio","video"]);this.a.getBandwidthEstimate();this.f(c)}};
H.prototype.segmentDownloaded=H.prototype.segmentDownloaded;H.prototype.getBandwidthEstimate=function(){return this.a.getBandwidthEstimate()};H.prototype.getBandwidthEstimate=H.prototype.getBandwidthEstimate;H.prototype.setDefaultEstimate=function(a){this.a.setDefaultEstimate(a)};H.prototype.setDefaultEstimate=H.prototype.setDefaultEstimate;H.prototype.setRestrictions=function(a){this.i=a};H.prototype.setRestrictions=H.prototype.setRestrictions;H.prototype.setVariants=function(a){this.h=a};
H.prototype.setVariants=H.prototype.setVariants;H.prototype.setTextStreams=function(a){this.g=a};H.prototype.setTextStreams=H.prototype.setTextStreams;function jc(a,b){return b.filter(function(b){return Ub(b,a,{width:Infinity,height:Infinity})}).sort(function(a,b){return a.bandwidth-b.bandwidth})};function I(a,b){var c=b||{},d;for(d in c)this[d]=c[d];this.defaultPrevented=this.cancelable=this.bubbles=!1;this.timeStamp=window.performance&&window.performance.now?window.performance.now():Date.now();this.type=a;this.isTrusted=!1;this.target=this.currentTarget=null;this.a=!1}I.prototype.preventDefault=function(){this.cancelable&&(this.defaultPrevented=!0)};I.prototype.stopImmediatePropagation=function(){this.a=!0};I.prototype.stopPropagation=function(){};var kc="ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),lc="buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),mc=["loop","playbackRate"],nc=["pause","play"],oc="adaptation buffering emsg error loading unloading texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged".split(" "),pc="drmInfo getAudioLanguages getConfiguration getExpiration getManifestUri getPlaybackRate getPlayheadTimeAsDate getTextLanguages getTextTracks getTracks getStats getVariantTracks isBuffering isInProgress isLive isTextTrackVisible keySystem seekRange".split(" "),
qc=[["getConfiguration","configure"]],rc=[["isTextTrackVisible","setTextTrackVisibility"]],sc="addTextTrack cancelTrickPlay configure resetConfiguration selectAudioLanguage selectTextLanguage selectTextTrack selectTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),uc=["load","unload"];
function vc(a){return JSON.stringify(a,function(a,c){if("manager"!=a&&"function"!=typeof c){if(c instanceof Event||c instanceof I){var b={},e;for(e in c){var f=c[e];f&&"object"==typeof f||e in Event||(b[e]=f)}return b}if(c instanceof TimeRanges)for(b={__type__:"TimeRanges",length:c.length,start:[],end:[]},e=0;e<c.length;++e)b.start.push(c.start(e)),b.end.push(c.end(e));else b="number"==typeof c?isNaN(c)?"NaN":isFinite(c)?c:0>c?"-Infinity":"Infinity":c;return b}})}
function wc(a){return JSON.parse(a,function(a,c){return"NaN"==c?NaN:"-Infinity"==c?-Infinity:"Infinity"==c?Infinity:c&&"object"==typeof c&&"TimeRanges"==c.__type__?xc(c):c})}function xc(a){return{length:a.length,start:function(b){return a.start[b]},end:function(b){return a.end[b]}}};function yc(a,b,c,d,e){this.J=a;this.l=b;this.B=c;this.G=d;this.v=e;this.c=this.j=this.h=!1;this.A="";this.a=this.i=null;this.b={video:{},player:{}};this.o=0;this.f={};this.g=null}k=yc.prototype;k.m=function(){zc(this);this.a&&(this.a.leave(function(){},function(){}),this.a=null);this.G=this.B=this.l=null;this.c=this.j=this.h=!1;this.g=this.f=this.b=this.i=null;return Promise.resolve()};k.V=function(){return this.c};k.Db=function(){return this.A};
k.init=function(){if(window.chrome&&chrome.cast&&chrome.cast.isAvailable){delete window.__onGCastApiAvailable;this.h=!0;this.l();var a=new chrome.cast.SessionRequest(this.J),a=new chrome.cast.ApiConfig(a,this.ed.bind(this),this.qd.bind(this),"origin_scoped");chrome.cast.initialize(a,function(){},function(){})}else window.__onGCastApiAvailable=function(a){a&&this.init()}.bind(this)};k.Gb=function(a){this.i=a;this.c&&Ac(this,{type:"appData",appData:this.i})};
k.cast=function(a){if(!this.h)return Promise.reject(new t(1,8,8E3));if(!this.j)return Promise.reject(new t(1,8,8001));if(this.c)return Promise.reject(new t(1,8,8002));this.g=new A;chrome.cast.requestSession(this.zb.bind(this,a),this.ac.bind(this));return this.g};k.$a=function(){this.c&&(zc(this),this.a&&(this.a.stop(function(){},function(){}),this.a=null))};
k.get=function(a,b){if("video"==a){if(0<=nc.indexOf(b))return this.nc.bind(this,a,b)}else if("player"==a){if(0<=sc.indexOf(b))return this.nc.bind(this,a,b);if(0<=uc.indexOf(b))return this.Md.bind(this,a,b);if(0<=pc.indexOf(b))return this.jc.bind(this,a,b)}return this.jc(a,b)};k.set=function(a,b,c){this.b[a][b]=c;Ac(this,{type:"set",targetName:a,property:b,value:c})};
k.zb=function(a,b){this.a=b;this.a.addUpdateListener(this.bc.bind(this));this.a.addMessageListener("urn:x-cast:com.google.shaka.v2",this.kd.bind(this));this.bc();Ac(this,{type:"init",initState:a,appData:this.i});this.g.resolve()};k.ac=function(a){var b=8003;switch(a.code){case "cancel":b=8004;break;case "timeout":b=8005;break;case "receiver_unavailable":b=8006}this.g.reject(new t(2,8,b,a))};k.jc=function(a,b){return this.b[a][b]};
k.nc=function(a,b){Ac(this,{type:"call",targetName:a,methodName:b,args:Array.prototype.slice.call(arguments,2)})};k.Md=function(a,b){var c=Array.prototype.slice.call(arguments,2),d=new A,e=this.o.toString();this.o++;this.f[e]=d;Ac(this,{type:"asyncCall",targetName:a,methodName:b,args:c,id:e});return d};k.ed=function(a){var b=this.v();this.g=new A;this.zb(b,a)};k.qd=function(a){this.j="available"==a;this.l()};
k.bc=function(){var a=this.a?"connected"==this.a.status:!1;if(this.c&&!a){this.G();for(var b in this.b)this.b[b]={};zc(this)}this.A=(this.c=a)?this.a.receiver.friendlyName:"";this.l()};function zc(a){for(var b in a.f){var c=a.f[b];delete a.f[b];c.reject(new t(1,7,7E3))}}
k.kd=function(a,b){var c=wc(b);switch(c.type){case "event":var d=c.targetName,e=c.event;this.B(d,new I(e.type,e));break;case "update":e=c.update;for(d in e){var c=this.b[d]||{};for(f in e[d])c[f]=e[d][f]}break;case "asyncComplete":d=c.id;var f=c.error;c=this.f[d];delete this.f[d];if(c)if(f){d=new t(f.severity,f.category,f.code);for(e in f)d[e]=f[e];c.reject(d)}else c.resolve()}};function Ac(a,b){var c=vc(b);a.a.sendMessage("urn:x-cast:com.google.shaka.v2",c,function(){},ga)};function p(){this.lb=new Ia;this.Ta=this}p.prototype.addEventListener=function(a,b){this.lb.push(a,b)};p.prototype.removeEventListener=function(a,b){this.lb.remove(a,b)};p.prototype.dispatchEvent=function(a){for(var b=this.lb.get(a.type)||[],c=0;c<b.length;++c){a.target=this.Ta;a.currentTarget=this.Ta;var d=b[c];try{d.handleEvent?d.handleEvent(a):d.call(this,a)}catch(e){}if(a.a)break}return a.defaultPrevented};function J(a,b,c){p.call(this);this.c=a;this.b=b;this.h=this.f=this.g=this.i=this.j=null;this.a=new yc(c,this.ce.bind(this),this.de.bind(this),this.ee.bind(this),this.Tb.bind(this));Bc(this)}ba(J);m("shaka.cast.CastProxy",J);J.prototype.m=function(a){a&&this.a&&this.a.$a();a=[this.h?this.h.m():null,this.b?this.b.m():null,this.a?this.a.m():null];this.a=this.h=this.i=this.j=this.b=this.c=null;return Promise.all(a)};J.prototype.destroy=J.prototype.m;J.prototype.Xc=function(){return this.j};
J.prototype.getVideo=J.prototype.Xc;J.prototype.Rc=function(){return this.i};J.prototype.getPlayer=J.prototype.Rc;J.prototype.Dc=function(){return this.a?this.a.h&&this.a.j:!1};J.prototype.canCast=J.prototype.Dc;J.prototype.V=function(){return this.a?this.a.V():!1};J.prototype.isCasting=J.prototype.V;J.prototype.Db=function(){return this.a?this.a.Db():""};J.prototype.receiverName=J.prototype.Db;J.prototype.cast=function(){var a=this.Tb();return this.a.cast(a).then(function(){return this.b.hb()}.bind(this))};
J.prototype.cast=J.prototype.cast;J.prototype.Gb=function(a){this.a.Gb(a)};J.prototype.setAppData=J.prototype.Gb;J.prototype.ke=function(){var a=this.a;if(a.c){var b=a.v();chrome.cast.requestSession(a.zb.bind(a,b),a.ac.bind(a))}};J.prototype.suggestDisconnect=J.prototype.ke;J.prototype.$a=function(){this.a.$a()};J.prototype.forceDisconnect=J.prototype.$a;
function Bc(a){a.a.init();a.h=new D;kc.forEach(function(a){E(this.h,this.c,a,this.re.bind(this))}.bind(a));oc.forEach(function(a){E(this.h,this.b,a,this.Gd.bind(this))}.bind(a));a.j={};for(var b in a.c)Object.defineProperty(a.j,b,{configurable:!1,enumerable:!0,get:a.qe.bind(a,b),set:a.se.bind(a,b)});a.i={};for(b in a.b)Object.defineProperty(a.i,b,{configurable:!1,enumerable:!0,get:a.Fd.bind(a,b)});a.g=new p;a.g.Ta=a.j;a.f=new p;a.f.Ta=a.i}k=J.prototype;
k.Tb=function(){var a={video:{},player:{},playerAfterLoad:{},manifest:this.b.Ya,startTime:null};this.c.pause();mc.forEach(function(b){a.video[b]=this.c[b]}.bind(this));this.c.ended||(a.startTime=this.c.currentTime);qc.forEach(function(b){var c=b[1];b=this.b[b[0]]();a.player[c]=b}.bind(this));rc.forEach(function(b){var c=b[1];b=this.b[b[0]]();a.playerAfterLoad[c]=b}.bind(this));return a};k.ce=function(){this.dispatchEvent(new I("caststatuschanged"))};
k.ee=function(){qc.forEach(function(a){var b=a[1];a=this.a.get("player",a[0])();this.b[b](a)}.bind(this));var a=this.a.get("player","getManifestUri")(),b=this.a.get("video","ended"),c=Promise.resolve(),d=this.c.autoplay,e=null;b||(e=this.a.get("video","currentTime"));a&&(this.c.autoplay=!1,c=this.b.load(a,e),c["catch"](function(a){this.b.dispatchEvent(new I("error",{detail:a}))}.bind(this)));var f={};mc.forEach(function(a){f[a]=this.a.get("video",a)}.bind(this));c.then(function(){mc.forEach(function(a){this.c[a]=
f[a]}.bind(this));rc.forEach(function(a){var b=a[1];a=this.a.get("player",a[0])();this.b[b](a)}.bind(this));this.c.autoplay=d;a&&this.c.play()}.bind(this))};
k.qe=function(a){if("addEventListener"==a)return this.g.addEventListener.bind(this.g);if("removeEventListener"==a)return this.g.removeEventListener.bind(this.g);if(this.a.V()&&!Object.keys(this.a.b.video).length){var b=this.c[a];if("function"!=typeof b)return b}return this.a.V()?this.a.get("video",a):(b=this.c[a],"function"==typeof b&&(b=b.bind(this.c)),b)};k.se=function(a,b){this.a.V()?this.a.set("video",a,b):this.c[a]=b};k.re=function(a){this.a.V()||this.g.dispatchEvent(new I(a.type,a))};
k.Fd=function(a){return"addEventListener"==a?this.f.addEventListener.bind(this.f):"removeEventListener"==a?this.f.removeEventListener.bind(this.f):"getNetworkingEngine"==a?this.b.Ub.bind(this.b):this.a.V()&&!Object.keys(this.a.b.video).length&&0<=pc.indexOf(a)||!this.a.V()?(a=this.b[a],a.bind(this.b)):this.a.get("player",a)};k.Gd=function(a){this.a.V()||this.f.dispatchEvent(a)};k.de=function(a,b){this.a.V()&&("video"==a?this.g.dispatchEvent(b):"player"==a&&this.f.dispatchEvent(b))};function K(a,b,c,d){p.call(this);this.a=a;this.b=b;this.j={video:a,player:b};this.l=c||function(){};this.o=d||function(a){return a};this.i=!1;this.f=!0;this.h=this.g=this.c=null;Cc(this)}ba(K);m("shaka.cast.CastReceiver",K);K.prototype.isConnected=function(){return this.i};K.prototype.isConnected=K.prototype.isConnected;K.prototype.Zc=function(){return this.f};K.prototype.isIdle=K.prototype.Zc;
K.prototype.m=function(){var a=this.b?this.b.m():Promise.resolve();null!=this.h&&window.clearTimeout(this.h);this.l=this.j=this.b=this.a=null;this.i=!1;this.f=!0;this.h=this.g=this.c=null;return a.then(function(){cast.receiver.CastReceiverManager.getInstance().stop()})};K.prototype.destroy=K.prototype.m;
function Cc(a){var b=cast.receiver.CastReceiverManager.getInstance();b.onSenderConnected=a.hc.bind(a);b.onSenderDisconnected=a.hc.bind(a);b.onSystemVolumeChanged=a.Kc.bind(a);a.g=b.getCastMessageBus("urn:x-cast:com.google.cast.media");a.g.onMessage=a.fd.bind(a);a.c=b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");a.c.onMessage=a.td.bind(a);b.start();kc.forEach(function(a){this.a.addEventListener(a,this.kc.bind(this,"video"))}.bind(a));oc.forEach(function(a){this.b.addEventListener(a,this.kc.bind(this,
"player"))}.bind(a));cast.__platform__&&cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160')?a.b.Hb(3840,2160):a.b.Hb(1920,1080);a.b.addEventListener("loading",function(){this.f=!1;Dc(this)}.bind(a));a.a.addEventListener("playing",function(){this.f=!1;Dc(this)}.bind(a));a.a.addEventListener("pause",function(){Dc(this)}.bind(a));a.b.addEventListener("unloading",function(){this.f=!0;Dc(this)}.bind(a));a.a.addEventListener("ended",function(){window.setTimeout(function(){this.a&&
this.a.ended&&(this.f=!0,Dc(this))}.bind(this),5E3)}.bind(a))}k=K.prototype;k.hc=function(){this.i=!!cast.receiver.CastReceiverManager.getInstance().getSenders().length;Dc(this)};function Dc(a){Promise.resolve().then(function(){this.dispatchEvent(new I("caststatuschanged"));L(this,0)}.bind(a))}
function Ec(a,b,c){for(var d in b.player)a.b[d](b.player[d]);a.l(c);c=Promise.resolve();var e=a.a.autoplay;b.manifest&&(a.a.autoplay=!1,c=a.b.load(b.manifest,b.startTime),c["catch"](function(a){this.b.dispatchEvent(new I("error",{detail:a}))}.bind(a)));c.then(function(){var a;for(a in b.video){var c=b.video[a];this.a[a]=c}for(a in b.playerAfterLoad)c=b.playerAfterLoad[a],this.b[a](c);this.a.autoplay=e;b.manifest&&(this.a.play(),L(this,0))}.bind(a))}
k.kc=function(a,b){this.Ab();Fc(this,{type:"event",targetName:a,event:b},this.c)};k.Ab=function(){null!=this.h&&window.clearTimeout(this.h);this.h=window.setTimeout(this.Ab.bind(this),500);var a={video:{},player:{}};lc.forEach(function(b){a.video[b]=this.a[b]}.bind(this));pc.forEach(function(b){a.player[b]=this.b[b]()}.bind(this));var b=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();b&&(a.video.volume=b.level,a.video.muted=b.muted);Fc(this,{type:"update",update:a},this.c)};
k.Kc=function(){var a=cast.receiver.CastReceiverManager.getInstance().getSystemVolume();a&&Fc(this,{type:"update",update:{video:{volume:a.level,muted:a.muted}}},this.c);Fc(this,{type:"event",targetName:"video",event:{type:"volumechange"}},this.c)};
k.td=function(a){var b=wc(a.data);switch(b.type){case "init":Ec(this,b.initState,b.appData);this.Ab();break;case "appData":this.l(b.appData);break;case "set":var c=b.targetName,d=b.property,e=b.value;if("video"==c)if(b=cast.receiver.CastReceiverManager.getInstance(),"volume"==d){b.setSystemVolumeLevel(e);break}else if("muted"==d){b.setSystemVolumeMuted(e);break}this.j[c][d]=e;break;case "call":c=b.targetName;d=b.methodName;e=b.args;c=this.j[c];c[d].apply(c,e);break;case "asyncCall":c=b.targetName,
d=b.methodName,e=b.args,b=b.id,a=a.senderId,c=this.j[c],c[d].apply(c,e).then(this.tc.bind(this,a,b,null),this.tc.bind(this,a,b))}};
k.fd=function(a){var b=wc(a.data);switch(b.type){case "PLAY":this.a.play();L(this,0);break;case "PAUSE":this.a.pause();L(this,0);break;case "SEEK":a=b.currentTime;var c=b.resumeState;null!=a&&(this.a.currentTime=Number(a));c&&"PLAYBACK_START"==c?(this.a.play(),L(this,0)):c&&"PLAYBACK_PAUSE"==c&&(this.a.pause(),L(this,0));break;case "STOP":this.b.hb().then(function(){L(this,0)}.bind(this));break;case "GET_STATUS":L(this,Number(b.requestId));break;case "VOLUME":c=b.volume;a=c.level;var c=c.muted,d=
this.a.volume,e=this.a.muted;null!=a&&(this.a.volume=Number(a));null!=c&&(this.a.muted=c);d==this.a.volume&&e==this.a.muted||L(this,0);break;case "LOAD":c=b.media.contentId;a=b.currentTime;var f=this.o(c);this.a.autoplay=!0;this.b.load(f,a).then(function(){L(this,0,{contentId:f,streamType:this.b.$()?"LIVE":"BUFFERED",contentType:""})}.bind(this))["catch"](function(a){var c="LOAD_FAILED";7==a.category&&7E3==a.code&&(c="LOAD_CANCELLED");Fc(this,{requestId:Number(b.requestId),type:c},this.g)}.bind(this));
break;default:Fc(this,{requestId:Number(b.requestId),type:"INVALID_REQUEST",reason:"INVALID_COMMAND"},this.g)}};k.tc=function(a,b,c){Fc(this,{type:"asyncComplete",id:b,error:c},this.c,a)};function Fc(a,b,c,d){a.i&&(a=vc(b),d?c.getCastChannel(d).send(a):c.broadcast(a))}
function L(a,b,c){var d=Gc,d={mediaSessionId:0,playbackRate:a.a.playbackRate,playerState:a.f?d.IDLE:a.b.ka?d.yc:a.a.paused?d.zc:d.Ac,currentTime:a.a.currentTime,supportedMediaCommands:15,volume:{level:a.a.volume,muted:a.a.muted}};c&&(d.media=c);Fc(a,{requestId:b,type:"MEDIA_STATUS",status:[d]},a.g)}var Gc={IDLE:"IDLE",Ac:"PLAYING",yc:"BUFFERING",zc:"PAUSED"};function Hc(a,b){var c=M(a,b);return 1!=c.length?null:c[0]}function M(a,b){return Array.prototype.filter.call(a.childNodes,function(a){return a.tagName==b})}function Ic(a){var b=a.firstChild;return b&&b.nodeType==Node.TEXT_NODE?a.textContent.trim():null}function N(a,b,c,d){var e=null;a=a.getAttribute(b);null!=a&&(e=c(a));return null==e?void 0!=d?d:null:e}function Jc(a){if(!a)return null;a=Date.parse(a);return isNaN(a)?null:Math.floor(a/1E3)}
function Kc(a){if(!a)return null;a=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);if(!a)return null;a=31536E3*Number(a[1]||null)+2592E3*Number(a[2]||null)+86400*Number(a[3]||null)+3600*Number(a[4]||null)+60*Number(a[5]||null)+Number(a[6]||null);return isFinite(a)?a:null}function Lc(a){var b=/([0-9]+)-([0-9]+)/.exec(a);if(!b)return null;a=Number(b[1]);if(!isFinite(a))return null;b=Number(b[2]);return isFinite(b)?{start:a,end:b}:null}
function Mc(a){a=Number(a);return a%1?null:a}function Nc(a){a=Number(a);return!(a%1)&&0<a?a:null}function Oc(a){a=Number(a);return!(a%1)&&0<=a?a:null}function Pc(a){var b;a=(b=a.match(/^(\d+)\/(\d+)$/))?Number(b[1]/b[2]):Number(a);return isNaN(a)?null:a};var Qc={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"};
function Rc(a,b,c){a=Sc(a);var d=null,e=null,f=[],g=[],h=a.map(function(a){return a.keyId}).filter(ya);if(0<h.length&&(e=h[0],h.some(za(e))))throw new t(2,4,4010);c||(g=a.filter(function(a){return"urn:mpeg:dash:mp4protection:2011"==a.qc?(d=a.init||d,!1):!0}),0<g.length&&(f=Tc(d,b,g),f.length||(f=[Ba("",d)])));0<a.length&&(c||!g.length)&&(f=Na(Qc).map(function(a){return Ba(a,d)}));e&&f.forEach(function(a){a.initData.forEach(function(a){a.keyId=e})});return{Qb:e,xe:d,drmInfos:f,Sb:!0}}
function Uc(a,b,c,d){var e=Rc(a,b,d);if(c.Sb){a=1==c.drmInfos.length&&!c.drmInfos[0].keySystem;b=!e.drmInfos.length;if(!c.drmInfos.length||a&&!b)c.drmInfos=e.drmInfos;c.Sb=!1}else if(0<e.drmInfos.length&&(c.drmInfos=c.drmInfos.filter(function(a){return e.drmInfos.some(function(b){return b.keySystem==a.keySystem})}),!c.drmInfos.length))throw new t(2,4,4008);return e.Qb||c.Qb}function Tc(a,b,c){return c.map(function(c){var d=Qc[c.qc];return d?[Ba(d,c.init||a)]:b(c.node)||[]}).reduce(x,[])}
function Sc(a){return a.map(function(a){var b=a.getAttribute("schemeIdUri"),d=a.getAttribute("cenc:default_KID"),e=M(a,"cenc:pssh").map(Ic);if(!b)return null;b=b.toLowerCase();if(d&&(d=d.replace(/-/g,"").toLowerCase(),0<=d.indexOf(" ")))throw new t(2,4,4009);var f=[];try{f=e.map(function(a){return{initDataType:"cenc",initData:Ya(a),keyId:null}})}catch(g){throw new t(2,4,4007);}return{node:a,qc:b,keyId:d,init:0<f.length?f:null}}).filter(ya)};function Vc(a,b,c,d,e){null!=e&&(e=Math.round(e));var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g,function(a,b,c){if("$$"==a)return"$";var d=f[b];if(null==d)return a;"RepresentationID"==b&&c&&(c=void 0);a=d.toString();c=window.parseInt(c,10)||1;return Array(Math.max(0,c-a.length)+1).join("0")+a})}
function Wc(a,b){var c=Xc(a,b,"timescale"),d=1;c&&(d=Nc(c)||1);c=Xc(a,b,"duration");(c=Nc(c||""))&&(c/=d);var e=Xc(a,b,"startNumber"),f=Xc(a,b,"presentationTimeOffset"),g=Oc(e||"");if(null==e||null==g)g=1;var h=Yc(a,b,"SegmentTimeline"),e=null;if(h){for(var e=d,l=Number(f),n=a.R.duration||Infinity,h=M(h,"S"),q=[],r=0,v=0;v<h.length;++v){var u=h[v],w=N(u,"t",Oc),G=N(u,"d",Oc),u=N(u,"r",Mc);null!=w&&(w-=l);if(!G)break;w=null!=w?w:r;u=u||0;if(0>u)if(v+1<h.length){u=N(h[v+1],"t",Oc);if(null==u)break;
else if(w>=u)break;u=Math.ceil((u-w)/G)-1}else{if(Infinity==n)break;else if(w/e>=n)break;u=Math.ceil((n*e-w)/G)-1}0<q.length&&w!=r&&(q[q.length-1].end=w/e);for(var pa=0;pa<=u;++pa)r=w+G,q.push({start:w/e,end:r/e,oe:w}),w=r}e=q}return{timescale:d,O:c,ya:g,presentationTimeOffset:Number(f)/d||0,Nb:Number(f),F:e}}function Xc(a,b,c){return[b(a.w),b(a.S),b(a.T)].filter(ya).map(function(a){return a.getAttribute(c)}).reduce(function(a,b){return a||b})}
function Yc(a,b,c){return[b(a.w),b(a.S),b(a.T)].filter(ya).map(function(a){return Hc(a,c)}).reduce(function(a,b){return a||b})};function Zc(a,b,c){this.a=a;this.X=b;this.M=c}m("shaka.media.InitSegmentReference",Zc);function O(a,b,c,d,e,f){this.position=a;this.startTime=b;this.endTime=c;this.a=d;this.X=e;this.M=f}m("shaka.media.SegmentReference",O);function P(a,b){this.H=a;this.a=b==$c;this.u=0}m("shaka.util.DataViewReader",P);var $c=1;P.Endianness={te:0,ve:$c};P.prototype.Z=function(){return this.u<this.H.byteLength};P.prototype.hasMoreData=P.prototype.Z;P.prototype.Tc=function(){return this.u};P.prototype.getPosition=P.prototype.Tc;P.prototype.Oc=function(){return this.H.byteLength};P.prototype.getLength=P.prototype.Oc;P.prototype.Cb=function(){try{var a=this.H.getUint8(this.u)}catch(b){ad()}this.u+=1;return a};P.prototype.readUint8=P.prototype.Cb;
P.prototype.mc=function(){try{var a=this.H.getUint16(this.u,this.a)}catch(b){ad()}this.u+=2;return a};P.prototype.readUint16=P.prototype.mc;P.prototype.D=function(){try{var a=this.H.getUint32(this.u,this.a)}catch(b){ad()}this.u+=4;return a};P.prototype.readUint32=P.prototype.D;P.prototype.lc=function(){try{var a=this.H.getInt32(this.u,this.a)}catch(b){ad()}this.u+=4;return a};P.prototype.readInt32=P.prototype.lc;
P.prototype.Pa=function(){try{if(this.a){var a=this.H.getUint32(this.u,!0);var b=this.H.getUint32(this.u+4,!0)}else b=this.H.getUint32(this.u,!1),a=this.H.getUint32(this.u+4,!1)}catch(c){ad()}if(2097151<b)throw new t(2,3,3001);this.u+=8;return b*Math.pow(2,32)+a};P.prototype.readUint64=P.prototype.Pa;P.prototype.Ja=function(a){this.u+a>this.H.byteLength&&ad();var b=this.H.buffer.slice(this.u,this.u+a);this.u+=a;return new Uint8Array(b)};P.prototype.readBytes=P.prototype.Ja;
P.prototype.I=function(a){this.u+a>this.H.byteLength&&ad();this.u+=a};P.prototype.skip=P.prototype.I;P.prototype.Bb=function(){for(var a=this.u;this.Z()&&this.H.getUint8(this.u);)this.u+=1;a=this.H.buffer.slice(a,this.u);this.u+=1;return F(a)};P.prototype.readTerminatedString=P.prototype.Bb;function ad(){throw new t(2,3,3E3);};function Q(){this.b=[];this.a=[]}m("shaka.util.Mp4Parser",Q);Q.prototype.C=function(a,b){var c=bd(a);this.b[c]=0;this.a[c]=b;return this};Q.prototype.box=Q.prototype.C;Q.prototype.da=function(a,b){var c=bd(a);this.b[c]=1;this.a[c]=b;return this};Q.prototype.fullBox=Q.prototype.da;Q.prototype.parse=function(a){for(a=new P(new DataView(a),0);a.Z();)this.eb(0,a)};Q.prototype.parse=Q.prototype.parse;
Q.prototype.eb=function(a,b){var c=b.u,d=b.D(),e=b.D();switch(d){case 0:d=b.H.byteLength-c;break;case 1:d=b.Pa()}var f=this.a[e];if(f){var g=null,h=null;1==this.b[e]&&(h=b.D(),g=h>>>24,h&=16777215);e=c+d-b.u;e=0<e?b.Ja(e).buffer:new ArrayBuffer(0);e=new P(new DataView(e),0);f({Na:this,version:g,Lc:h,s:e,size:d,start:c+a})}else b.I(c+d-b.u)};Q.prototype.parseNext=Q.prototype.eb;function R(a){for(;a.s.Z();)a.Na.eb(a.start,a.s)}Q.children=R;
function cd(a){for(var b=a.s.D();0<b;--b)a.Na.eb(a.start,a.s)}Q.sampleDescription=cd;function dd(a){return function(b){a(b.s.Ja(b.s.H.byteLength-b.s.u))}}Q.allData=dd;function bd(a){for(var b=0,c=0;c<a.length;c++)b=b<<8|a.charCodeAt(c);return b};function ed(a,b,c,d){var e,f=(new Q).da("sidx",function(a){e=fd(b,d,c,a)});a&&f.parse(a);if(e)return e;throw new t(2,3,3004);}
function fd(a,b,c,d){var e=[];d.s.I(4);var f=d.s.D();if(!f)throw new t(2,3,3005);if(d.version){var g=d.s.Pa();var h=d.s.Pa()}else g=d.s.D(),h=d.s.D();d.s.I(2);var l=d.s.mc();b=g-b;a=a+d.size+h;for(h=0;h<l;h++){var n=d.s.D();g=(n&2147483648)>>>31;var n=n&2147483647,q=d.s.D();d.s.I(4);if(1==g)throw new t(2,3,3006);e.push(new O(e.length,b/f,(b+q)/f,function(){return c},a,a+n-1));b+=q;a+=n}return e};function S(a){this.a=a}m("shaka.media.SegmentIndex",S);S.prototype.m=function(){this.a=null;return Promise.resolve()};S.prototype.destroy=S.prototype.m;S.prototype.find=function(a){for(var b=this.a.length-1;0<=b;--b){var c=this.a[b];if(a>=c.startTime&&a<c.endTime)return c.position}return this.a.length&&a<this.a[0].startTime?this.a[0].position:null};S.prototype.find=S.prototype.find;S.prototype.get=function(a){if(!this.a.length)return null;a-=this.a[0].position;return 0>a||a>=this.a.length?null:this.a[a]};
S.prototype.get=S.prototype.get;S.prototype.vb=function(a){for(var b,c,d=[],e=c=0;c<this.a.length&&e<a.length;){var f=this.a[c];b=a[e];f.startTime<b.startTime?(d.push(f),c++):(f.startTime>b.startTime||(.1<Math.abs(f.endTime-b.endTime)?d.push(b):d.push(f),c++),e++)}for(;c<this.a.length;)d.push(this.a[c++]);if(d.length)for(c=d[d.length-1].position+1;e<a.length;)b=a[e++],b=new O(c++,b.startTime,b.endTime,b.a,b.X,b.M),d.push(b);else d=a;this.a=d};S.prototype.merge=S.prototype.vb;
S.prototype.ob=function(a){for(var b=0;b<this.a.length&&!(this.a[b].endTime>a);++b);this.a.splice(0,b)};S.prototype.evict=S.prototype.ob;function gd(a,b){if(a.a.length){var c=a.a[a.a.length-1];c.startTime>b||(a.a[a.a.length-1]=new O(c.position,c.startTime,b,c.a,c.X,c.M))}};function hd(a){this.b=a;this.a=new P(a,0);id||(id=[new Uint8Array([255]),new Uint8Array([127,255]),new Uint8Array([63,255,255]),new Uint8Array([31,255,255,255]),new Uint8Array([15,255,255,255,255]),new Uint8Array([7,255,255,255,255,255]),new Uint8Array([3,255,255,255,255,255,255]),new Uint8Array([1,255,255,255,255,255,255,255])])}var id;hd.prototype.Z=function(){return this.a.Z()};
function jd(a){var b=kd(a);if(7<b.length)throw new t(2,3,3002);for(var c=0,d=0;d<b.length;d++)c=256*c+b[d];b=c;c=kd(a);a:{for(d=0;d<id.length;d++)if(ab(c,id[d])){d=!0;break a}d=!1}if(d)c=a.b.byteLength-a.a.u;else{if(8==c.length&&c[1]&224)throw new t(2,3,3001);for(var d=c[0]&(1<<8-c.length)-1,e=1;e<c.length;e++)d=256*d+c[e];c=d}c=a.a.u+c<=a.b.byteLength?c:a.b.byteLength-a.a.u;d=new DataView(a.b.buffer,a.b.byteOffset+a.a.u,c);a.a.I(c);return new ld(b,d)}
function kd(a){var b=a.a.Cb(),c;for(c=1;8>=c&&!(b&1<<8-c);c++);if(8<c)throw new t(2,3,3002);var d=new Uint8Array(c);d[0]=b;for(b=1;b<c;b++)d[b]=a.a.Cb();return d}function ld(a,b){this.id=a;this.a=b}function md(a){if(8<a.a.byteLength)throw new t(2,3,3002);if(8==a.a.byteLength&&a.a.getUint8(0)&224)throw new t(2,3,3001);for(var b=0,c=0;c<a.a.byteLength;c++)var d=a.a.getUint8(c),b=256*b+d;return b};function nd(){}
nd.prototype.parse=function(a,b,c,d){var e;b=new hd(new DataView(b));if(440786851!=jd(b).id)throw new t(2,3,3008);var f=jd(b);if(408125543!=f.id)throw new t(2,3,3009);b=f.a.byteOffset;f=new hd(f.a);for(e=null;f.Z();){var g=jd(f);if(357149030==g.id){e=g;break}}if(!e)throw new t(2,3,3010);f=new hd(e.a);e=1E6;for(g=null;f.Z();){var h=jd(f);if(2807729==h.id)e=md(h);else if(17545==h.id)if(g=h,4==g.a.byteLength)g=g.a.getFloat32(0);else if(8==g.a.byteLength)g=g.a.getFloat64(0);else throw new t(2,3,3003);
}if(null==g)throw new t(2,3,3011);f=e/1E9;e=g*f;a=jd(new hd(new DataView(a)));if(475249515!=a.id)throw new t(2,3,3007);return od(a,b,f,e,c,d)};function od(a,b,c,d,e,f){function g(){return e}var h=[];a=new hd(a.a);for(var l=-1,n=-1;a.Z();){var q=jd(a);if(187==q.id){var r=pd(q);r&&(q=c*(r.pe-f),r=b+r.Ld,0<=l&&h.push(new O(h.length,l,q,g,n,r-1)),l=q,n=r)}}0<=l&&h.push(new O(h.length,l,d,g,n,null));return h}
function pd(a){var b=new hd(a.a);a=jd(b);if(179!=a.id)throw new t(2,3,3013);a=md(a);b=jd(b);if(183!=b.id)throw new t(2,3,3012);for(var b=new hd(b.a),c=0;b.Z();){var d=jd(b);if(241==d.id){c=md(d);break}}return{pe:a,Ld:c}};function qd(a,b){var c=Yc(a,b,"Initialization");if(!c)return null;var d=a.w.U,e=c.getAttribute("sourceURL");e&&(d=z(a.w.U,[e]));var e=0,f=null;if(c=N(c,"range",Lc))e=c.start,f=c.end;return new Zc(function(){return d},e,f)}
function rd(a,b){var c=Xc(a,sd,"presentationTimeOffset"),d=qd(a,sd);var e=Number(c);var f=a.w.contentType,g=a.w.mimeType.split("/")[1];if("text"!=f&&"mp4"!=g&&"webm"!=g)throw new t(2,4,4006);if("webm"==g&&!d)throw new t(2,4,4005);var f=Yc(a,sd,"RepresentationIndex"),h=Xc(a,sd,"indexRange"),l=a.w.U,h=Lc(h||"");if(f){var n=f.getAttribute("sourceURL");n&&(l=z(a.w.U,[n]));h=N(f,"range",Lc,h)}if(!h)throw new t(2,4,4002);e=td(a,b,d,l,h.start,h.end,g,e);return{createSegmentIndex:e.createSegmentIndex,findSegmentPosition:e.findSegmentPosition,
getSegmentReference:e.getSegmentReference,initSegmentReference:d,presentationTimeOffset:Number(c)||0}}
function td(a,b,c,d,e,f,g,h){var l=a.presentationTimeline,n=!a.Ca||!a.R.sb,q=a.R.duration,r=b,v=null;return{createSegmentIndex:function(){var a=[r(d,e,f),"webm"==g?r(c.a(),c.X,c.M):null];r=null;return Promise.all(a).then(function(a){var b=a[0];a=a[1]||null;b="mp4"==g?ed(b,e,d,h):(new nd).parse(b,a,d,h);l.Ga(0,b);v=new S(b);n&&gd(v,q)})},findSegmentPosition:function(a){return v.find(a)},getSegmentReference:function(a){return v.get(a)}}}function sd(a){return a.Qa};function ud(a,b){var c=qd(a,vd);var d=wd(a);var e=Wc(a,vd),f=e.ya;f||(f=1);var g=0;e.O?g=e.O*(f-1):e.F&&0<e.F.length&&(g=e.F[0].start);d={O:e.O,startTime:g,ya:f,presentationTimeOffset:e.presentationTimeOffset,F:e.F,Fa:d};if(!d.O&&!d.F&&1<d.Fa.length)throw new t(2,4,4002);if(!d.O&&!a.R.duration&&!d.F&&1==d.Fa.length)throw new t(2,4,4002);if(d.F&&!d.F.length)throw new t(2,4,4002);f=e=null;a.T.id&&a.w.id&&(f=a.T.id+","+a.w.id,e=b[f]);g=xd(a.R.duration,d.ya,a.w.U,d);e?(e.vb(g),e.ob(a.presentationTimeline.ma()-
a.R.start)):(a.presentationTimeline.Ga(0,g),e=new S(g),f&&a.Ca&&(b[f]=e));a.Ca&&a.R.sb||gd(e,a.R.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:e.find.bind(e),getSegmentReference:e.get.bind(e),initSegmentReference:c,presentationTimeOffset:d.presentationTimeOffset}}function vd(a){return a.oa}
function xd(a,b,c,d){var e=d.Fa.length;d.F&&d.F.length!=d.Fa.length&&(e=Math.min(d.F.length,d.Fa.length));for(var f=[],g=d.startTime,h=0;h<e;h++){var l=d.Fa[h],n=z(c,[l.ad]);var q=null!=d.O?g+d.O:d.F?d.F[h].end:g+a;f.push(new O(h+b,g,q,function(a){return a}.bind(null,n),l.start,l.end));g=q}return f}
function wd(a){return[a.w.oa,a.S.oa,a.T.oa].filter(ya).map(function(a){return M(a,"SegmentURL")}).reduce(function(a,c){return 0<a.length?a:c}).map(function(b){b.getAttribute("indexRange")&&!a.Yb&&(a.Yb=!0);var c=b.getAttribute("media");b=N(b,"mediaRange",Lc,{start:0,end:null});return{ad:c,start:b.start,end:b.end}})};function yd(a,b,c,d){var e=zd(a);var f=Wc(a,Ad);var g=Xc(a,Ad,"media"),h=Xc(a,Ad,"index");f={O:f.O,timescale:f.timescale,ya:f.ya,presentationTimeOffset:f.presentationTimeOffset,Nb:f.Nb,F:f.F,ub:g,La:h};g=0+(f.La?1:0);g+=f.F?1:0;g+=f.O?1:0;if(!g)throw new t(2,4,4002);1!=g&&(f.La&&(f.F=null),f.O=null);if(!f.La&&!f.ub)throw new t(2,4,4002);if(f.La){c=a.w.mimeType.split("/")[1];if("mp4"!=c&&"webm"!=c)throw new t(2,4,4006);if("webm"==c&&!e)throw new t(2,4,4005);d=Vc(f.La,a.w.id,null,a.bandwidth||null,
null);d=z(a.w.U,[d]);a=td(a,b,e,d,0,null,c,f.presentationTimeOffset)}else f.O?(d||a.presentationTimeline.wb(f.O),a=Bd(a,f)):(d=b=null,a.T.id&&a.w.id&&(d=a.T.id+","+a.w.id,b=c[d]),g=Cd(a,f),b?(b.vb(g),b.ob(a.presentationTimeline.ma()-a.R.start)):(a.presentationTimeline.Ga(0,g),b=new S(g),d&&a.Ca&&(c[d]=b)),a.Ca&&a.R.sb||gd(b,a.R.duration),a={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b)});return{createSegmentIndex:a.createSegmentIndex,
findSegmentPosition:a.findSegmentPosition,getSegmentReference:a.getSegmentReference,initSegmentReference:e,presentationTimeOffset:f.presentationTimeOffset}}function Ad(a){return a.Ra}
function Bd(a,b){var c=a.R.duration,d=b.O,e=b.ya,f=b.timescale,g=b.ub,h=a.bandwidth||null,l=a.w.id,n=a.w.U;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(a){return 0>a||c&&a>=c?null:Math.floor(a/d)},getSegmentReference:function(a){var b=a*d;return 0>b||c&&b>=c?null:new O(a,b,b+d,function(){var c=Vc(g,l,a+e,h,b*f);return z(n,[c])},0,null)}}}
function Cd(a,b){for(var c=[],d=0;d<b.F.length;d++){var e=d+b.ya;c.push(new O(e,b.F[d].start,b.F[d].end,function(a,b,c,d,e,q){a=Vc(a,b,e,c,q);return z(d,[a]).map(function(a){return a.toString()})}.bind(null,b.ub,a.w.id,a.bandwidth||null,a.w.U,e,b.F[d].oe+b.Nb),0,null))}return c}function zd(a){var b=Xc(a,Ad,"initialization");if(!b)return null;var c=a.w.id,d=a.bandwidth||null,e=a.w.U;return new Zc(function(){var a=Vc(b,c,null,d,null);return z(e,[a])},0,null)};var Dd={},Ed={};m("shaka.media.ManifestParser.registerParserByExtension",function(a,b){Ed[a]=b});m("shaka.media.ManifestParser.registerParserByMime",function(a,b){Dd[a]=b});function Fd(){var a={},b;for(b in Dd)a[b]=!0;for(b in Ed)a[b]=!0;["application/dash+xml","application/x-mpegurl","application/vnd.apple.mpegurl","application/vnd.ms-sstr+xml"].forEach(function(b){a[b]=!!Dd[b]});["mpd","m3u8","ism"].forEach(function(b){a[b]=!!Ed[b]});return a}
function Gd(a,b,c,d){var e=d;e||(d=(new ia(a)).W.split("/").pop().split("."),1<d.length&&(d=d.pop().toLowerCase(),e=Ed[d]));if(e)return Promise.resolve(e);c=C([a],c);c.method="HEAD";return b.request(0,c).then(function(b){(b=b.headers["content-type"])&&(b=b.toLowerCase());return(e=Dd[b])?e:Promise.reject(new t(2,4,4E3,a))},function(a){a.severity=2;return Promise.reject(a)})};function T(a,b){this.f=a;this.i=b;this.c=this.a=Infinity;this.b=1;this.h=0;this.g=!0}m("shaka.media.PresentationTimeline",T);T.prototype.Y=function(){return this.a};T.prototype.getDuration=T.prototype.Y;T.prototype.pa=function(a){this.a=a};T.prototype.setDuration=T.prototype.pa;T.prototype.Uc=function(){return this.f};T.prototype.getPresentationStartTime=T.prototype.Uc;T.prototype.uc=function(a){this.h=a};T.prototype.setClockOffset=T.prototype.uc;T.prototype.wc=function(a){this.g=a};
T.prototype.setStatic=T.prototype.wc;T.prototype.Vc=function(){return this.c};T.prototype.getSegmentAvailabilityDuration=T.prototype.Vc;T.prototype.vc=function(a){this.c=a};T.prototype.setSegmentAvailabilityDuration=T.prototype.vc;T.prototype.Ga=function(a,b){b.length&&(this.b=b.reduce(function(a,b){return Math.max(a,b.endTime-b.startTime)},this.b))};T.prototype.notifySegments=T.prototype.Ga;T.prototype.wb=function(a){this.b=Math.max(this.b,a)};T.prototype.notifyMaxSegmentDuration=T.prototype.wb;
T.prototype.$=function(){return Infinity==this.a&&!this.g};T.prototype.isLive=T.prototype.$;T.prototype.va=function(){return Infinity!=this.a&&!this.g};T.prototype.isInProgress=T.prototype.va;T.prototype.ma=function(){return this.Da(0)};T.prototype.getSegmentAvailabilityStart=T.prototype.ma;T.prototype.Da=function(a){if(Infinity==this.c)return 0;var b=this.ua();return Math.max(0,Math.min(b-this.c+a,b))};T.prototype.getSafeAvailabilityStart=T.prototype.Da;
T.prototype.ua=function(){return this.$()||this.va()?Math.min(Math.max(0,(Date.now()+this.h)/1E3-this.b-this.f),this.a):this.a};T.prototype.getSegmentAvailabilityEnd=T.prototype.ua;T.prototype.bb=function(){return Math.max(0,this.ua()-(this.$()||this.va()?this.i:0))};T.prototype.getSeekRangeEnd=T.prototype.bb;function Hd(){this.a=this.b=null;this.g=[];this.c=null;this.i=[];this.h=1;this.j={};this.l=0;this.f=null}m("shaka.dash.DashParser",Hd);k=Hd.prototype;k.configure=function(a){this.b=a};k.start=function(a,b){this.g=[a];this.a=b;return Id(this).then(function(){this.a&&Jd(this,0);return this.c}.bind(this))};k.stop=function(){this.b=this.a=null;this.g=[];this.c=null;this.i=[];this.j={};null!=this.f&&(window.clearTimeout(this.f),this.f=null);return Promise.resolve()};k.update=function(){Id(this)["catch"](function(a){if(this.a)this.a.onError(a)}.bind(this))};
k.onExpirationUpdated=function(){};function Id(a){return a.a.networkingEngine.request(0,C(a.g,a.b.retryParameters)).then(function(a){if(this.a)return Kd(this,a.data,a.uri)}.bind(a))}
function Kd(a,b,c){var d=F(b),e=new DOMParser,f=null;b=null;try{f=e.parseFromString(d,"text/xml")}catch(v){}f&&"MPD"==f.documentElement.tagName&&(b=f.documentElement);b&&0<b.getElementsByTagName("parsererror").length&&(b=null);if(!b)throw new t(2,4,4001);c=[c];d=M(b,"Location").map(Ic).filter(ya);0<d.length&&(c=a.g=d);d=M(b,"BaseURL").map(Ic);c=z(c,d);var g=N(b,"minBufferTime",Kc);a.l=N(b,"minimumUpdatePeriod",Kc,-1);var h=N(b,"availabilityStartTime",Jc),d=N(b,"timeShiftBufferDepth",Kc),l=N(b,"suggestedPresentationDelay",
Kc),e=N(b,"maxSegmentDuration",Kc),f=b.getAttribute("type")||"static";if(a.c)var n=a.c.presentationTimeline;else{var q=Math.max(10,1.5*g);n=new T(h,null!=l?l:q)}var h=Ld(a,{Ca:"static"!=f,presentationTimeline:n,T:null,R:null,S:null,w:null,bandwidth:void 0,Yb:!1},c,b),l=h.duration,r=h.periods;n.wc("static"==f);n.pa(l||Infinity);n.vc(null!=d?d:Infinity);n.wb(e||1);if(a.c)return Promise.resolve();b=M(b,"UTCTiming");return Md(a,c,b,n.$()).then(function(a){this.a&&(n.uc(a),this.c={presentationTimeline:n,
periods:r,offlineSessionIds:[],minBufferTime:g||0})}.bind(a))}
function Ld(a,b,c,d){var e=N(d,"mediaPresentationDuration",Kc),f=[],g=0;d=M(d,"Period");for(var h=0;h<d.length;h++){var l=d[h],g=N(l,"start",Kc,g),n=N(l,"duration",Kc),q=null;if(h!=d.length-1){var r=N(d[h+1],"start",Kc);null!=r&&(q=r-g)}else null!=e&&(q=e-g);null==q&&(q=n);l=Nd(a,b,c,{start:g,duration:q,node:l,sb:null==q||h==d.length-1});f.push(l);n=b.T.id;a.i.every(za(n))&&(a.a.filterPeriod(l),a.i.push(n),a.c&&a.c.periods.push(l));if(null==q){g=null;break}g+=q}return null!=e?{periods:f,duration:e}:
{periods:f,duration:g}}
function Nd(a,b,c,d){b.T=Od(d.node,null,c);b.R=d;b.T.id||(b.T.id="__shaka_period_"+d.start);M(d.node,"EventStream").forEach(a.Dd.bind(a,d.start,d.duration));c=M(d.node,"AdaptationSet").map(a.Bd.bind(a,b)).filter(ya);var e=c.map(function(a){return a.Nd}).reduce(x,[]),f=e.filter(Aa);if(b.Ca&&e.length!=f.length)throw new t(2,4,4018);var g=c.filter(function(a){return!a.Mb});c.filter(function(a){return a.Mb}).forEach(function(a){var b=a.streams[0],c=a.Mb;g.forEach(function(a){a.id==c&&a.streams.forEach(function(a){a.trickModeVideo=
b})})});e=Pd(g,"video");f=Pd(g,"audio");if(!e.length&&!f.length)throw new t(2,4,4004);f.length||(f=[null]);e.length||(e=[null]);b=[];for(c=0;c<f.length;c++)for(var h=0;h<e.length;h++)Qd(a,f[c],e[h],b);a=Pd(g,"text");e=[];for(c=0;c<a.length;c++)e.push.apply(e,a[c].streams);return{startTime:d.start,textStreams:e,variants:b}}function Pd(a,b){return a.filter(function(a){return a.contentType==b})}
function Qd(a,b,c,d){if(b||c)if(b&&c){var e=b.drmInfos;var f=c.drmInfos;if(e.length&&f.length?0<sb(e,f).length:1)for(var g=sb(b.drmInfos,c.drmInfos),e=0;e<b.streams.length;e++)for(var h=0;h<c.streams.length;h++)f=c.streams[h].bandwidth+b.streams[e].bandwidth,f={id:a.h++,language:b.language,primary:b.tb||c.tb,audio:b.streams[e],video:c.streams[h],bandwidth:f,drmInfos:g,allowedByApplication:!0,allowedByKeySystem:!0},d.push(f)}else for(g=b||c,e=0;e<g.streams.length;e++)f=g.streams[e].bandwidth,f={id:a.h++,
language:g.language||"und",primary:g.tb,audio:b?g.streams[e]:null,video:c?g.streams[e]:null,bandwidth:f,drmInfos:g.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},d.push(f)}
k.Bd=function(a,b){a.S=Od(b,a.T,null);var c=!1,d=M(b,"Role"),e=d.map(function(a){return a.getAttribute("value")}).filter(ya),f=void 0;"text"==a.S.contentType&&(f="subtitle");for(var g=0;g<d.length;g++){var h=d[g].getAttribute("schemeIdUri");if(null==h||"urn:mpeg:dash:role:2011"==h)switch(h=d[g].getAttribute("value"),h){case "main":c=!0;break;case "caption":case "subtitle":f=h}}var l=null,n=!1;M(b,"EssentialProperty").forEach(function(a){"http://dashif.org/guidelines/trickmode"==a.getAttribute("schemeIdUri")?
l=a.getAttribute("value"):n=!0});if(n)return null;var d=M(b,"ContentProtection"),q=Rc(d,this.b.dash.customScheme,this.b.dash.ignoreDrmInfo),d=Sb(b.getAttribute("lang")||"und"),h=b.getAttribute("label"),g=M(b,"Representation"),e=g.map(this.Ed.bind(this,a,q,f,d,h,c,e)).filter(function(a){return!!a});if(!e.length)throw new t(2,4,4003);a.S.contentType||(a.S.contentType=Rd(e[0].mimeType,e[0].codecs),e.forEach(function(b){b.type=a.S.contentType}));e.forEach(function(a){q.drmInfos.forEach(function(b){a.keyId&&
b.keyIds.push(a.keyId)})});f=g.map(function(a){return a.getAttribute("id")}).filter(ya);return{id:a.S.id||"__fake__"+this.h++,contentType:a.S.contentType,language:d,tb:c,streams:e,drmInfos:q.drmInfos,Mb:l,Nd:f}};
k.Ed=function(a,b,c,d,e,f,g,h){a.w=Od(h,a.S,null);if(!Sd(a.w))return null;a.bandwidth=N(h,"bandwidth",Nc)||void 0;var l=this.Od.bind(this);if(a.w.Qa)l=rd(a,l);else if(a.w.oa)l=ud(a,this.j);else if(a.w.Ra)l=yd(a,l,this.j,!!this.c);else{var n=a.w.U,q=a.R.duration||0;l={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(a){return 0<=a&&a<q?1:null},getSegmentReference:function(a){return 1!=a?null:new O(1,0,q,function(){return n},0,null)},initSegmentReference:null,presentationTimeOffset:0}}h=
M(h,"ContentProtection");h=Uc(h,this.b.dash.customScheme,b,this.b.dash.ignoreDrmInfo);return{id:this.h++,createSegmentIndex:l.createSegmentIndex,findSegmentPosition:l.findSegmentPosition,getSegmentReference:l.getSegmentReference,initSegmentReference:l.initSegmentReference,presentationTimeOffset:l.presentationTimeOffset,mimeType:a.w.mimeType,codecs:a.w.codecs,frameRate:a.w.frameRate,bandwidth:a.bandwidth,width:a.w.width,height:a.w.height,kind:c,encrypted:0<b.drmInfos.length,keyId:h,language:d,label:e,
type:a.S.contentType,primary:f,trickModeVideo:null,containsEmsgBoxes:a.w.containsEmsgBoxes,roles:g}};k.fe=function(){this.f=null;var a=Date.now();Id(this).then(function(){this.a&&Jd(this,(Date.now()-a)/1E3)}.bind(this))["catch"](function(a){this.a&&(a.severity=1,this.a.onError(a),Jd(this,0))}.bind(this))};function Jd(a,b){0>a.l||(a.f=window.setTimeout(a.fe.bind(a),1E3*Math.max(Math.max(3,a.l)-b,0)))}
function Od(a,b,c){b=b||{contentType:"",mimeType:"",codecs:"",containsEmsgBoxes:!1,frameRate:void 0};c=c||b.U;var d=M(a,"BaseURL").map(Ic),e=a.getAttribute("contentType")||b.contentType,f=a.getAttribute("mimeType")||b.mimeType,g=a.getAttribute("codecs")||b.codecs,h=N(a,"frameRate",Pc)||b.frameRate,l=!!M(a,"InbandEventStream").length;e||(e=Rd(f,g));return{U:z(c,d),Qa:Hc(a,"SegmentBase")||b.Qa,oa:Hc(a,"SegmentList")||b.oa,Ra:Hc(a,"SegmentTemplate")||b.Ra,width:N(a,"width",Oc)||b.width,height:N(a,"height",
Oc)||b.height,contentType:e,mimeType:f,codecs:g,frameRate:h,containsEmsgBoxes:l||b.containsEmsgBoxes,id:a.getAttribute("id")}}function Sd(a){var b=0+(a.Qa?1:0);b+=a.oa?1:0;b+=a.Ra?1:0;if(!b)return"text"==a.contentType||"application"==a.contentType?!0:!1;1!=b&&(a.Qa&&(a.oa=null),a.Ra=null);return!0}
function Td(a,b,c,d){b=z(b,[c]);b=C(b,a.b.retryParameters);b.method=d;return a.a.networkingEngine.request(0,b).then(function(a){if("HEAD"==d){if(!a.headers||!a.headers.date)return 0;a=a.headers.date}else a=F(a.data);a=Date.parse(a);return isNaN(a)?0:a-Date.now()})}
function Md(a,b,c,d){c=c.map(function(a){return{scheme:a.getAttribute("schemeIdUri"),value:a.getAttribute("value")}});var e=a.b.dash.clockSyncUri;d&&!c.length&&e&&c.push({scheme:"urn:mpeg:dash:utc:http-head:2014",value:e});return xa(c,function(a){var c=a.value;switch(a.scheme){case "urn:mpeg:dash:utc:http-head:2014":case "urn:mpeg:dash:utc:http-head:2012":return Td(this,b,c,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return Td(this,
b,c,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":return a=Date.parse(c),isNaN(a)?0:a-Date.now();case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return Promise.reject();default:return Promise.reject()}}.bind(a))["catch"](function(){return 0})}
k.Dd=function(a,b,c){var d=c.getAttribute("schemeIdUri")||"",e=c.getAttribute("value")||"",f=N(c,"timescale",Oc)||1;M(c,"Event").forEach(function(c){var g=N(c,"presentationTime",Oc)||0,l=N(c,"duration",Oc)||0,g=g/f+a,l=g+l/f;null!=b&&(g=Math.min(g,a+b),l=Math.min(l,a+b));c={schemeIdUri:d,value:e,startTime:g,endTime:l,id:c.getAttribute("id")||"",eventElement:c};this.a.onTimelineRegionAdded(c)}.bind(this))};
k.Od=function(a,b,c){a=C(a,this.b.retryParameters);null!=b&&(a.headers.Range="bytes="+b+"-"+(null!=c?c:""));return this.a.networkingEngine.request(1,a).then(function(a){return a.data})};function Rd(a,b){return ub[Yb(a,b)]?"text":a.split("/")[0]}Ed.mpd=Hd;Dd["application/dash+xml"]=Hd;function Ud(a,b,c,d){this.uri=a;this.type=b;this.ga=c;this.segments=d||null}function Vd(a,b,c,d){this.id=a;this.name=b;this.a=c;this.value=d||null}Vd.prototype.toString=function(){function a(a){return a.name+'="'+a.value+'"'}return this.value?"#"+this.name+":"+this.value:0<this.a.length?"#"+this.name+":"+this.a.map(a).join(","):"#"+this.name};function Wd(a,b){this.name=a;this.value=b}Vd.prototype.getAttribute=function(a){var b=this.a.filter(function(b){return b.name==a});return b.length?b[0]:null};
function Xd(a,b,c){c=c||null;return(a=a.getAttribute(b))?a.value:c}function Yd(a,b){this.ga=b;this.uri=a};function Zd(a,b){return a.filter(function(a){return a.name==b})}function $d(a,b){var c=Zd(a,b);return c.length?c[0]:null}function ae(a,b,c){return a.filter(function(a){var d=a.getAttribute("TYPE");a=a.getAttribute("GROUP-ID");return d.value==b&&a.value==c})};function be(a){this.b=a;this.a=0}function ce(a,b){b.lastIndex=a.a;var c=(c=b.exec(a.b))?{position:c.index,length:c[0].length,Qd:c}:null;if(a.a==a.b.length||!c||c.position!=a.a)return null;a.a+=c.length;return c.Qd}function de(a){return a.a==a.b.length?null:(a=ce(a,/[^ \t\n]*/gm))?a[0]:null};function ee(){this.a=0}
function fe(a,b,c){b=F(b);b=b.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n").trim();var d=b.split(/\n+/m);if(!/^#EXTM3U($|[ \t\n])/m.test(d[0]))throw new t(2,4,4015);b=0;for(var e=[],f=1;f<d.length;)if(/^#(?!EXT)/m.test(d[f]))f+=1;else{var g=d[f];g=ge(a.a++,g);if(0<=he.indexOf(g.name))b=1;else if(0<=ie.indexOf(g.name)){if(1!=b)throw new t(2,4,4017);d=d.splice(f,d.length-f);a=je(a,d);return new Ud(c,b,e,a)}e.push(g);f+=1;"EXT-X-STREAM-INF"==g.name&&(g.a.push(new Wd("URI",d[f])),f+=1)}return new Ud(c,b,e)}
function je(a,b){var c=[],d=[];b.forEach(function(a){/^(#EXT)/.test(a)?(a=ge(this.a++,a),d.push(a)):/^#(?!EXT)/m.test(a)||(c.push(new Yd(a.trim(),d)),d=[])}.bind(a));return c}function ge(a,b){var c=b.match(/^#(EXT[^:]*)(?::(.*))?$/);if(!c)throw new t(2,4,4016);var d=c[1],e=c[2],c=[];if(e&&0<=e.indexOf("="))for(var e=new be(e),f,g=/([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;f=ce(e,g);)c.push(new Wd(f[1],f[2]||f[3]));else if(e)return new Vd(a,d,c,e);return new Vd(a,d,c)}
var he="EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY".split(" "),ie="EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");function ke(a){return new Promise(function(b){var c=ke.parse(a);b({uri:a,data:c.data,headers:{"content-type":c.contentType}})})}m("shaka.net.DataUriPlugin",ke);
ke.parse=function(a){var b=a.split(":");if(2>b.length||"data"!=b[0])throw new t(2,1,1004,a);b=b.slice(1).join(":").split(",");if(2>b.length)throw new t(2,1,1004,a);var c=b[0],b=window.decodeURIComponent(b.slice(1).join(",")),c=c.split(";"),d=null;1<c.length&&(d=c[1]);if("base64"==d)a=Ya(b).buffer;else{if(d)throw new t(2,1,1005,a);a=Ua(b)}return{data:a,contentType:c[0]}};Ea.data=ke;function le(){this.b=this.c=null;this.i=1;this.g={};this.f={};this.a=null;this.j="";this.h=new ee}m("shaka.hls.HlsParser",le);k=le.prototype;k.configure=function(a){this.b=a};k.start=function(a,b){this.c=b;this.j=a;return this.c.networkingEngine.request(0,C([a],this.b.retryParameters)).then(function(b){return ne(this,b.data,a)}.bind(this))};k.stop=function(){this.b=this.c=null;this.g={};return Promise.resolve()};k.update=function(){};k.onExpirationUpdated=function(){};
function ne(a,b,c){b=fe(a.h,b,c);if(0!=b.type)throw new t(2,4,4022);a.a=new T(null,0);return oe(a,b).then(function(a){this.c.filterPeriod(a);return{presentationTimeline:this.a,periods:[a],offlineSessionIds:[],minBufferTime:0}}.bind(a))}
function oe(a,b){var c=Zd(b.ga,"EXT-X-STREAM-INF").map(function(a){return pe(this,a,b)}.bind(a)),d=Zd(b.ga,"EXT-X-MEDIA").filter(function(a){return"SUBTITLES"==U(a,"TYPE")}.bind(a)).map(function(a){return qe(this,a,b)}.bind(a));return Promise.all(c).then(function(a){return Promise.all(d).then(function(b){var c=a.reduce(x,[]);re(this,c);return{startTime:0,variants:c,textStreams:b}}.bind(this))}.bind(a))}
function pe(a,b,c){var d=Number(U(b,"BANDWIDTH")),e=Xd(b,"CODECS","avc1.42E01E,mp4a.40.2").split(","),f=b.getAttribute("RESOLUTION"),g=null,h=null,l=Xd(b,"FRAME-RATE");if(f)var n=f.value.split("x"),g=n[0],h=n[1];var q=se(a,c);c=Zd(c.ga,"EXT-X-MEDIA");var r=Xd(b,"AUDIO"),v=Xd(b,"VIDEO");r?c=ae(c,"AUDIO",r):v&&(c=ae(c,"VIDEO",v));c=c.map(function(a){return te(this,a,e,q)}.bind(a));var u=[],w=[];return Promise.all(c).then(function(a){r?u=a:v&&(w=a);if(u.length||w.length)var c=u.length?"video":"audio";
else 1==e.length?c=f||l?"video":"audio":(c="video",e=[e.join(",")]);a=e;var d=U(b,"URI");return ve(this,d,a,c,q,"und",!1,null)}.bind(a)).then(function(a){"audio"==a.stream.type?u=[a]:w=[a];return we(this,u,w,d,g,h,l)}.bind(a))}
function we(a,b,c,d,e,f,g){c.forEach(function(a){if(a=a.stream)a.width=Number(e)||void 0,a.height=Number(f)||void 0,a.frameRate=Number(g)||void 0}.bind(a));b.length||(b=[null]);c.length||(c=[null]);for(var h=[],l=0;l<b.length;l++)for(var n=0;n<c.length;n++){var q=b[l]?b[l].stream:null,r=c[n]?c[n].stream:null,v=b[l]?b[l].drmInfos:null,u=c[n]?c[n].drmInfos:null;if(q&&r)if(v.length&&u.length?0<sb(v,u).length:1)var w=sb(v,u);else continue;else q?w=v:r&&(w=u);h.push(xe(a,q,r,d,w))}return h}
function xe(a,b,c,d,e){return{id:a.i++,language:b?b.language:"und",primary:!!b&&b.primary||!!c&&c.primary,audio:b,video:c,bandwidth:d,drmInfos:e,allowedByApplication:!0,allowedByKeySystem:!0}}function qe(a,b,c){U(b,"TYPE");c=se(a,c);return te(a,b,[],c).then(function(a){return a.stream})}
function te(a,b,c,d){if(a.g[b.id])return Promise.resolve().then(function(){return this.g[b.id]}.bind(a));var e=U(b,"TYPE").toLowerCase();"subtitles"==e&&(e="text");var f=Sb(Xd(b,"LANGUAGE","und")),g=Xd(b,"NAME"),h=b.getAttribute("DEFAULT"),l=b.getAttribute("AUTOSELECT"),n=U(b,"URI");return ve(a,n,c,e,d,f,!!h||!!l,g).then(function(a){return this.g[b.id]=a}.bind(a))}
function ve(a,b,c,d,e,f,g,h){b=z([a.j],[b])[0];return a.c.networkingEngine.request(0,C([b],a.b.retryParameters)).then(function(a){a=fe(this.h,a.data,a.uri);if(1!=a.type)throw new t(2,4,4017);e=se(this,a)||e;var b=null;"text"!=d&&(b=ye(a));var l=$d(a.ga,"EXT-X-MEDIA-SEQUENCE"),l=ze(this,a,l?Number(l.value):0);this.a.Ga(0,l);var r=l[l.length-1].endTime-l[0].startTime,v=this.a.Y();(Infinity==v||v<r)&&this.a.pa(r);var u=Ae(d,c),w=void 0;"text"==d&&(w="subtitle");var G=new S(l),pa=[];a.segments.forEach(function(a){a=
Zd(a.ga,"EXT-X-KEY");pa.push.apply(pa,a)});var Hb=!1,tc=[],me=null;pa.forEach(function(a){if("NONE"!=U(a,"METHOD")){Hb=!0;var b=U(a,"KEYFORMAT");if(a=(b=Be[b])?b(a):null)a.keyIds.length&&(me=a.keyIds[0]),tc.push(a)}});if(Hb&&!tc.length)throw new t(2,4,4026);return Ce(this,d,l[0].a()[0]).then(function(a){a={id:this.i++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:G.find.bind(G),getSegmentReference:G.get.bind(G),initSegmentReference:b,presentationTimeOffset:e||0,mimeType:a,codecs:u,
kind:w,encrypted:Hb,keyId:me,language:f,label:h||null,type:d,primary:g,trickModeVideo:null,containsEmsgBoxes:!1,frameRate:void 0,width:void 0,height:void 0,bandwidth:void 0,roles:[]};this.f[a.id]=G;return{stream:a,ye:G,drmInfos:tc}}.bind(this))}.bind(a))}
function ye(a){var b=Zd(a.ga,"EXT-X-MAP");if(!b.length)return null;if(1<b.length)throw new t(2,4,4020);var b=b[0],c=U(b,"URI"),d=z([a.uri],[c])[0];a=0;c=null;if(b=Xd(b,"BYTERANGE"))a=b.split("@"),b=Number(a[0]),a=Number(a[1]),c=a+b-1;return new Zc(function(){return[d]},a,c)}
function ze(a,b,c){var d=b.segments,e=[];d.forEach(function(a){var f=a.ga,h=z([b.uri],[a.uri])[0],l=De(f).value.split(","),l=Number(l[0]),n;(a=d.indexOf(a))?n=e[a-1].endTime:n=0;var l=n+l,q=0,r=null;if(f=$d(f,"EXT-X-BYTERANGE"))f=f.value.split("@"),r=Number(f[0]),f[1]?q=Number(f[1]):q=e[a-1].M,r=q+r-1,a==d.length-1&&(r=null);e.push(new O(c+a,n,l,function(){return[h]},q,r))}.bind(a));return e}
function re(a,b){b.forEach(function(a){var b=this.a.Y(),c=a.video;a=a.audio;c&&this.f[c.id]&&gd(this.f[c.id],b);a&&this.f[a.id]&&gd(this.f[a.id],b)}.bind(a))}function Ae(a,b){if(1==b.length)return b[0];if("text"==a)return"";var c=Ee;"audio"==a&&(c=Fe);for(var d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c[d].test(b[e].trim()))return b[e].trim();throw new t(2,4,4025,b);}
function Ce(a,b,c){var d=c.split("."),e=d[d.length-1];if("text"==b)return Promise.resolve("text/vtt");d=Ge;"video"==b&&(d=He);if(b=d[e])return Promise.resolve(b);c=C([c],a.b.retryParameters);c.method="HEAD";return a.c.networkingEngine.request(1,c).then(function(a){a=a.headers["content-type"];if(!a)throw new t(2,4,4021,e);return a})}function se(a,b){var c=$d(b.ga,"EXT-X-START");return c?Number(U(c,"TIME-OFFSET")):a.b.hls.defaultTimeOffset}
function U(a,b){var c=a.getAttribute(b);if(!c)throw new t(2,4,4023,b);return c.value}function De(a){a=$d(a,"EXTINF");if(!a)throw new t(2,4,4024,"EXTINF");return a}
var Ee=[/^(avc)/,/^(hvc)/,/^(vp[8-9])$/,/^(av1)$/,/^(mp4v)/],Fe=[/^(vorbis)/,/^(opus)/,/^(mp4a)/,/^(ac-3)$/,/^(ec-3)$/],Ge={mp4:"audio/mp4",m4s:"audio/mp4",m4i:"audio/mp4",m4a:"audio/mp4",ts:"video/mp2t"},He={mp4:"video/mp4",m4s:"video/mp4",m4i:"video/mp4",m4v:"video/mp4",ts:"video/mp2t"},Be={"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":function(a){if("SAMPLE-AES-CENC"!=U(a,"METHOD"))return null;var b=U(a,"URI"),b=ke.parse(b),b=new Uint8Array(b.data),b=Ba("com.widevine.alpha",[{initDataType:"cenc",
initData:b}]);if(a=Xd(a,"KEYID"))b.keyIds=[a.substr(2).toLowerCase()];return b}};Ed.m3u8=le;Dd["application/x-mpegurl"]=le;Dd["application/vnd.apple.mpegurl"]=le;function Ie(){}Ie.prototype.parseInit=function(){};
Ie.prototype.parseMedia=function(a,b){var c=F(a),d=[],e=new DOMParser,f=null;try{f=e.parseFromString(c,"text/xml")}catch(Hb){throw new t(2,2,2005);}if(f){var g=f.getElementsByTagName("tt")[0];if(g){e=g.getAttribute("ttp:frameRate");f=g.getAttribute("ttp:subFrameRate");var h=g.getAttribute("ttp:frameRateMultiplier");var l=g.getAttribute("ttp:tickRate");c=g.getAttribute("xml:space")||"default"}else throw new t(2,2,2005);if("default"!=c&&"preserve"!=c)throw new t(2,2,2005);c="default"==c;e=new Je(e,
f,h,l);f=Ke(g.getElementsByTagName("styling")[0]);h=Ke(g.getElementsByTagName("layout")[0]);g=Ke(g.getElementsByTagName("body")[0]);for(l=0;l<g.length;l++){var n=g[l],q=b.periodStart,r=e;var v=f;var u=h,w=c;if(n.hasAttribute("begin")||n.hasAttribute("end")||!/^\s*$/.test(n.textContent)){Le(n,w);var w=Me(n.getAttribute("begin"),r),G=Me(n.getAttribute("end"),r),r=Me(n.getAttribute("dur"),r),pa=n.textContent;null==G&&null!=r&&(G=w+r);if(null==w||null==G)throw new t(2,2,2001);if(q=xb(w+q,G+q,pa)){w=Ne(n,
"region",u);u=q;if(G=Oe(n,w,v,"tts:extent"))if(r=Pe.exec(G))u.size=Number(r[1]);r=Oe(n,w,v,"tts:writingMode");G=!0;"tb"==r||"tblr"==r?u.vertical="lr":"tbrl"==r?u.vertical="rl":G=!1;if(r=Oe(n,w,v,"tts:origin"))if(r=Pe.exec(r))G?(u.position=Number(r[2]),u.line=Number(r[1])):(u.position=Number(r[1]),u.line=Number(r[2])),u.snapToLines=!1;if(v=Oe(n,w,v,"tts:textAlign"))u.align=v,"center"==v&&("center"!=u.align&&(u.align="middle"),u.position="auto"),u.positionAlign=Qe[v],u.lineAlign=Re[v];v=q}else v=null}else v=
null;v&&d.push(v)}}return d};var Se=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Te=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,Ue=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/,Ve=/^(\d*\.?\d*)f$/,We=/^(\d*\.?\d*)t$/,Xe=/^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/,Pe=/^(\d{1,2}|100)% (\d{1,2}|100)%$/,Re={left:"start",center:"center",right:"end",start:"start",end:"end"},Qe={left:"line-left",center:"center",right:"line-right"};
function Ke(a){var b=[];if(!a)return b;for(var c=a.childNodes,d=0;d<c.length;d++){var e="span"==c[d].nodeName&&"p"==a.nodeName;c[d].nodeType!=Node.ELEMENT_NODE||"br"==c[d].nodeName||e||(e=Ke(c[d]),b=b.concat(e))}b.length||b.push(a);return b}function Le(a,b){for(var c=a.childNodes,d=0;d<c.length;d++)if("br"==c[d].nodeName&&0<d)c[d-1].textContent+="\n";else if(0<c[d].childNodes.length)Le(c[d],b);else if(b){var e=c[d].textContent.trim(),e=e.replace(/\s+/g," ");c[d].textContent=e}}
function Oe(a,b,c,d){for(var e=Ke(b),f=0;f<e.length;f++){var g=e[f].getAttribute(d);if(g)return g}e=Ne;return(a=e(b,"style",c)||e(a,"style",c))?a.getAttribute(d):null}function Ne(a,b,c){if(!a||1>c.length)return null;var d=null,e=a;for(a=null;e&&!(a=e.getAttribute(b))&&(e=e.parentNode,e instanceof Element););if(b=a)for(a=0;a<c.length;a++)if(c[a].getAttribute("xml:id")==b){d=c[a];break}return d}
function Me(a,b){var c=null;if(Se.test(a))var c=Se.exec(a),d=Number(c[1]),e=Number(c[2]),f=Number(c[3]),g=Number(c[4]),g=g+(Number(c[5])||0)/b.b,f=f+g/b.frameRate,c=f+60*e+3600*d;else Te.test(a)?c=Ye(Te,a):Ue.test(a)?c=Ye(Ue,a):Ve.test(a)?(c=Ve.exec(a),c=Number(c[1])/b.frameRate):We.test(a)?(c=We.exec(a),c=Number(c[1])/b.a):Xe.test(a)&&(c=Ye(Xe,a));return c}
function Ye(a,b){var c=a.exec(b);return c&&""!=c[0]?(Number(c[4])||0)/1E3+(Number(c[3])||0)+60*(Number(c[2])||0)+3600*(Number(c[1])||0):null}function Je(a,b,c,d){this.frameRate=Number(a)||30;this.b=Number(b)||1;this.a=Number(d);this.a||(this.a=a?this.frameRate*this.b:1);c&&(a=/^(\d+) (\d+)$/g.exec(c))&&(this.frameRate*=a[1]/a[2])}vb("application/ttml+xml",Ie);function Ze(){this.a=new Ie}Ze.prototype.parseInit=function(a){var b=!1;(new Q).C("moov",R).C("trak",R).C("mdia",R).C("minf",R).C("stbl",R).da("stsd",cd).C("stpp",function(){b=!0}).parse(a);if(!b)throw new t(2,2,2007);};Ze.prototype.parseMedia=function(a,b){var c=!1,d=[];(new Q).C("mdat",dd(function(a){c=!0;d=this.a.parseMedia(a.buffer,b)}.bind(this))).parse(a);if(!c)throw new t(2,2,2007);return d};vb('application/mp4; codecs="stpp"',Ze);function $e(){}$e.prototype.parseInit=function(){};
$e.prototype.parseMedia=function(a,b){var c=F(a),c=c.replace(/\r\n|\r(?=[^\n]|$)/gm,"\n"),c=c.split(/\n{2,}/m);if(!/^WEBVTT($|[ \t\n])/m.test(c[0]))throw new t(2,2,2E3);var d=b.segmentStart;if(0<=c[0].indexOf("X-TIMESTAMP-MAP")){var e=c[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m),f=c[0].match(/MPEGTS:(\d+)/m);e&&f&&(d=af(new be(e[1])),d=b.periodStart+(Number(f[1])/9E4-d))}f=[];for(e=1;e<c.length;e++){var g=c[e].split("\n"),h=d;if(1==g.length&&!g[0]||/^NOTE($|[ \t])/.test(g[0]))var l=
null;else{l=null;0>g[0].indexOf("--\x3e")&&(l=g[0],g.splice(0,1));var n=new be(g[0]),q=af(n),r=ce(n,/[ \t]+--\x3e[ \t]+/g),v=af(n);if(null==q||!r||null==v)throw new t(2,2,2001);if(g=xb(q+h,v+h,g.slice(1).join("\n").trim())){ce(n,/[ \t]+/gm);for(h=de(n);h;)bf(g,h),ce(n,/[ \t]+/gm),h=de(n);null!=l&&(g.id=l);l=g}else l=null}l&&f.push(l)}return f};
function bf(a,b){var c;if(c=/^align:(start|middle|center|end|left|right)$/.exec(b))a.align=c[1],"center"==c[1]&&"center"!=a.align&&(a.position="auto",a.align="middle");else if(c=/^vertical:(lr|rl)$/.exec(b))a.vertical=c[1];else if(c=/^size:(\d{1,2}|100)%$/.exec(b))a.size=Number(c[1]);else if(c=/^position:(\d{1,2}|100)%(?:,(line-left|line-right|center|start|end))?$/.exec(b))a.position=Number(c[1]),c[2]&&(a.positionAlign=c[2]);else if(c=/^line:(\d{1,2}|100)%(?:,(start|end|center))?$/.exec(b))a.snapToLines=
!1,a.line=Number(c[1]),c[2]&&(a.lineAlign=c[2]);else if(c=/^line:(-?\d+)(?:,(start|end|center))?$/.exec(b))a.snapToLines=!0,a.line=Number(c[1]),c[2]&&(a.lineAlign=c[2])}function af(a){a=ce(a,/(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);if(!a)return null;var b=Number(a[2]),c=Number(a[3]);return 59<b||59<c?null:Number(a[4])/1E3+c+60*b+3600*(Number(a[1])||0)}vb("text/vtt",$e);vb('text/vtt; codecs="vtt"',$e);function cf(){this.a=null}cf.prototype.parseInit=function(a){var b=!1;(new Q).C("moov",R).C("trak",R).C("mdia",R).da("mdhd",function(a){0==a.version?(a.s.I(4),a.s.I(4),this.a=a.s.D(),a.s.I(4)):(a.s.I(8),a.s.I(8),this.a=a.s.D(),a.s.I(8));a.s.I(4)}.bind(this)).C("minf",R).C("stbl",R).da("stsd",cd).C("wvtt",function(){b=!0}).parse(a);if(!this.a)throw new t(2,2,2008);if(!b)throw new t(2,2,2008);};
cf.prototype.parseMedia=function(a,b){var c=0,d=[],e=[],f=[],g=!1,h=!1,l=!1;(new Q).C("moof",R).C("traf",R).da("tfdt",function(a){g=!0;c=a.version?a.s.Pa():a.s.D()}).da("trun",function(a){h=!0;var b=a.version,c=a.Lc;a=a.s;var e=a.D();c&1&&a.I(4);c&4&&a.I(4);for(var f=[],g=0;g<e;g++){var l={duration:null,Lb:null};c&256&&(l.duration=a.D());c&512&&a.I(4);c&1024&&a.I(4);c&2048&&(l.Lb=b?a.lc():a.D());f.push(l)}d=f}).C("vtte",function(){e.push(null)}).C("vttc",dd(function(a){e.push(a.buffer)})).C("mdat",
function(a){l=!0;R(a)}).parse(a);if(!l&&!g&&!h)throw new t(2,2,2008);for(var n=c,q=0;q<d.length;q++){var r=d[q],v=e[q];if(r.duration){var u=r.Lb?c+r.Lb:n,n=u+r.duration;v&&f.push(df(v,b.periodStart+u/this.a,b.periodStart+n/this.a))}}return f};function df(a,b,c){var d,e,f;(new Q).C("payl",dd(function(a){d=F(a)})).C("iden",dd(function(a){e=F(a)})).C("sttg",dd(function(a){f=F(a)})).parse(a);return d?ef(d,e,f,b,c):null}
function ef(a,b,c,d,e){(a=xb(d,e,a))&&b&&(a.id=b);if(a&&c)for(b=new be(c),c=de(b);c;)bf(a,c),ce(b,/[ \t]+/gm),c=de(b);return a}vb('application/mp4; codecs="wvtt"',cf);function ff(a,b,c,d,e,f){this.a=a;this.c=b;this.l=c;this.A=d;this.J=e;this.G=f;this.b=new D;this.h=!1;this.g=1;this.j=this.f=null;this.B=a.readyState;this.i=!1;this.P=this.v=-1;this.o=!1;0<a.readyState?this.dc():La(this.b,a,"loadedmetadata",this.dc.bind(this));b=this.fc.bind(this);E(this.b,a,"ratechange",this.pd.bind(this));E(this.b,a,"waiting",b);this.j=setInterval(b,250)}k=ff.prototype;
k.m=function(){var a=this.b.m();this.b=null;null!=this.f&&(window.clearInterval(this.f),this.f=null);null!=this.j&&(window.clearInterval(this.j),this.j=null);this.G=this.J=this.l=this.c=this.a=null;return a};function gf(a,b){0<a.a.readyState?a.a.currentTime=hf(a,b):a.A=b}function jf(a){return 0<a.a.readyState?hf(a,a.a.currentTime):kf(a)}function kf(a){if(a.A)return hf(a,a.A);a=a.c.presentationTimeline;return Infinity>a.Y()?a.ma():a.bb()}k.pb=function(){return this.g};
function lf(a,b){null!=a.f&&(window.clearInterval(a.f),a.f=null);a.g=b;a.a.playbackRate=a.h||0>b?0:b;!a.h&&0>b&&(a.f=window.setInterval(function(){this.a.currentTime+=b/4}.bind(a),250))}k.yb=function(){this.o=!0;this.fc()};k.pd=function(){this.a.playbackRate!=(this.h||0>this.g?0:this.g)&&lf(this,this.a.playbackRate)};
k.dc=function(){var a=kf(this);.001>Math.abs(this.a.currentTime-a)?(E(this.b,this.a,"seeking",this.gc.bind(this)),E(this.b,this.a,"playing",this.ec.bind(this))):(La(this.b,this.a,"seeking",this.rd.bind(this)),this.a.currentTime=a)};k.rd=function(){E(this.b,this.a,"seeking",this.gc.bind(this));E(this.b,this.a,"playing",this.ec.bind(this))};
k.fc=function(){if(this.a.readyState){this.a.readyState!=this.B&&(this.i=!1,this.B=this.a.readyState);var a=this.l.smallGapLimit,b=this.a.currentTime,c=this.a.buffered;a:{if(c&&c.length&&!(1==c.length&&1E-6>c.end(0)-c.start(0))){var d=.1;/(Edge|Trident)\//.test(navigator.userAgent)&&(d=.5);for(var e=0;e<c.length;e++)if(c.start(e)>b&&(!e||c.end(e-1)-b<=d)){d=e;break a}}d=null}if(null==d){if(3>this.a.readyState&&0<this.a.playbackRate)if(this.P!=b)this.P=b,this.v=Date.now();else if(this.v<Date.now()-
1E3)for(this.v=Date.now()+5E3,d=0;d<c.length;d++)if(b>=c.start(d)&&b<c.end(d)-.5){this.a.currentTime=this.a.currentTime;break}}else if(d||this.o)if(e=c.start(d),!(e>=this.c.presentationTimeline.bb())){var f=e-b,a=f<=a,g=!1;a||this.i||(this.i=!0,f=new I("largegap",{currentTime:b,gapSize:f}),f.cancelable=!0,this.G(f),this.l.jumpLargeGaps&&!f.defaultPrevented&&(g=!0));if(a||g)d&&c.end(d-1),mf(this,b,e)}}};
k.gc=function(){this.o=!1;var a=this.a.currentTime,b=nf(this,a);.001<Math.abs(b-a)?mf(this,a,b):(this.i=!1,this.J())};k.ec=function(){var a=this.a.currentTime,b=nf(this,a);.001<Math.abs(b-a)&&mf(this,a,b)};function nf(a,b){var c=Bb.bind(null,a.a.buffered),d=1*Math.max(a.c.minBufferTime||0,a.l.rebufferingGoal),e=a.c.presentationTimeline,f=e.ua(),g=e.Da(d),h=e.Da(5),d=e.Da(d+5);return b>f?f:b<e.Da(0)?c(h)?h:d:b>=g||c(b)?b:d}
function mf(a,b,c){a.a.currentTime=c;var d=0,e=function(){!this.a||10<=d++||this.a.currentTime!=b||(this.a.currentTime=c,setTimeout(e,100))}.bind(a);setTimeout(e,100)}function hf(a,b){var c=a.c.presentationTimeline.ma();if(b<c)return c;c=a.c.presentationTimeline.ua();return b>c?c:b};function of(a,b,c,d,e,f){this.a=a;this.g=b;this.A=c;this.l=d;this.h=e;this.B=f;this.c=[];this.j=new D;this.b=!1;this.i=-1;this.f=null;pf(this)}of.prototype.m=function(){var a=this.j?this.j.m():Promise.resolve();this.j=null;qf(this);this.B=this.h=this.l=this.A=this.g=this.a=null;this.c=[];return a};
of.prototype.v=function(a){if(!this.c.some(function(b){return b.info.schemeIdUri==a.schemeIdUri&&b.info.startTime==a.startTime&&b.info.endTime==a.endTime})){var b={info:a,status:1};this.c.push(b);var c=new I("timelineregionadded",{detail:rf(a)});this.h(c);this.o(!0,b)}};function rf(a){var b=Da(a);b.eventElement=a.eventElement;return b}
of.prototype.o=function(a,b){var c=b.info.startTime>this.a.currentTime?1:b.info.endTime<this.a.currentTime?3:2,d=2==b.status,e=2==c;if(c!=b.status){if(!a||d||e)d||this.h(new I("timelineregionenter",{detail:rf(b.info)})),e||this.h(new I("timelineregionexit",{detail:rf(b.info)}));b.status=c}};function pf(a){qf(a);a.f=window.setTimeout(a.G.bind(a),250)}function qf(a){a.f&&(window.clearTimeout(a.f),a.f=null)}
of.prototype.G=function(){this.f=null;pf(this);var a=hc(this.g,this.a.currentTime);a!=this.i&&(-1!=this.i&&this.B(),this.i=a);var a=Cb(this.a.buffered,this.a.currentTime),b=Ab(this.a.buffered)>=this.g.presentationTimeline.ua()-.1||this.a.ended;if(this.b){var c=1*Math.max(this.g.minBufferTime||0,this.A.rebufferingGoal);(b||a>=c)&&0!=this.b&&(this.b=!1,this.l(!1))}else!b&&.5>a&&1!=this.b&&(this.b=!0,this.l(!0));this.c.forEach(this.o.bind(this,!1))};function sf(a,b){this.a=b;this.b=a;this.g=null;this.i=1;this.o=Promise.resolve();this.h=[];this.j={};this.c={};this.f=this.l=this.v=!1}k=sf.prototype;k.m=function(){for(var a in this.c)tf(this.c[a]);this.g=this.c=this.j=this.h=this.o=this.b=this.a=null;this.f=!0;return Promise.resolve()};k.configure=function(a){this.g=a};k.init=function(){var a=this.a.$b(this.b.periods[hc(this.b,jf(this.a.Oa))]);return Ma(a)?Promise.reject(new t(2,5,5005)):uf(this,a).then(function(){this.a&&this.a.gd&&this.a.gd()}.bind(this))};
function V(a){return a.b.periods[hc(a.b,jf(a.a.Oa))]}function vf(a){return Oa(a.c,function(a){return a.na||a.stream})}function wf(a,b){var c={};c.text=b;return uf(a,c)}function xf(a,b){var c=a.c.video;if(c){var d=c.stream;if(d)if(b){var e=d.trickModeVideo;if(e){var f=c.na;f||(yf(a,"video",e,!1),c.na=d)}}else if(f=c.na)c.na=null,yf(a,"video",f,!0)}}
function yf(a,b,c,d){var e=a.c[b];!e&&"text"==b&&a.g.ignoreTextStreamFailures?wf(a,c):e&&(e.na&&(c.trickModeVideo?(e.na=c,c=c.trickModeVideo):e.na=null),"text"==b&&Fb(a.a.K,Yb(c.mimeType,c.codecs)),(b=a.h[ic(a.b,c)])&&b.Ka&&(b=a.j[c.id])&&b.Ka&&e.stream!=c&&(e.stream=c,e.cb=!0,d&&(e.sa?e.kb=!0:e.wa?(e.ra=!0,e.kb=!0):(tf(e),zf(a,e,!0)))))}
function Af(a){var b=jf(a.a.Oa);if(!Object.keys(a.c).every(function(a){var c=this.a.K;"text"==a?(a=c.a,a=b>=a.b&&b<a.a):(a=Ib(c,a),a=Bb(a,b));return a}.bind(a)))for(var c in a.c){var d=a.c[c];d.sa||d.ra||(d.wa?d.ra=!0:null==Gb(a.a.K,c)?null==d.qa&&Bf(a,d,0):(tf(d),zf(a,d,!1)))}}
function uf(a,b,c){var d=hc(a.b,jf(a.a.Oa)),e=Oa(b,function(a){return Yb(a.mimeType,a.codecs)});a.a.K.init(e);Cf(a);e=Na(b);return Df(a,e).then(function(){if(!this.f)for(var a in b){var e=b[a];this.c[a]||(this.c[a]={stream:e,type:a,Ea:null,ea:null,na:null,cb:!0,Ma:d,endOfStream:!1,wa:!1,qa:null,ra:!1,kb:!1,sa:!1,Eb:!1,rb:!1,pc:c||0},Bf(this,this.c[a],0))}}.bind(a))}
function Ef(a,b){var c=a.h[b];if(c)return c.L;c={L:new A,Ka:!1};a.h[b]=c;var d=a.b.periods[b].variants.map(function(a){var b=[];a.audio&&b.push(a.audio);a.video&&b.push(a.video);a.video&&a.video.trickModeVideo&&b.push(a.video.trickModeVideo);return b}).reduce(x,[]).filter(Aa);d.push.apply(d,a.b.periods[b].textStreams);a.o=a.o.then(function(){if(!this.f)return Df(this,d)}.bind(a)).then(function(){this.f||(this.h[b].L.resolve(),this.h[b].Ka=!0)}.bind(a))["catch"](function(a){this.f||(this.h[b].L.reject(),
delete this.h[b],this.a.onError(a))}.bind(a));return c.L}
function Df(a,b){b.map(function(a){return a.id}).filter(Aa);for(var c=[],d=0;d<b.length;++d){var e=b[d];var f=a.j[e.id];f?c.push(f.L):(a.j[e.id]={L:new A,Ka:!1},c.push(e.createSegmentIndex()))}return Promise.all(c).then(function(){if(!this.f)for(var a=0;a<b.length;++a){var c=this.j[b[a].id];c.Ka||(c.L.resolve(),c.Ka=!0)}}.bind(a))["catch"](function(a){if(!this.f)return this.j[e.id].L.reject(),delete this.j[e.id],Promise.reject(a)}.bind(a))}
function Cf(a){var b=a.b.presentationTimeline.Y();Infinity>b?a.a.K.pa(b):a.a.K.pa(Math.pow(2,32))}k.ie=function(a){if(!this.f&&!a.wa&&null!=a.qa&&!a.sa)if(a.qa=null,a.ra)zf(this,a,a.kb);else{try{var b=Ff(this,a);null!=b&&(Bf(this,a,b),a.rb=!1)}catch(c){this.a.onError(c);return}b=Na(this.c);Gf(this,a);b.every(function(a){return a.endOfStream})&&this.a.K.endOfStream().then(function(){this.b.presentationTimeline.pa(this.a.K.Y())}.bind(this))}};
function Ff(a,b){var c=jf(a.a.Oa),d=b.Ea&&b.ea?a.b.periods[ic(a.b,b.Ea)].startTime+b.ea.endTime:Math.max(c,b.pc);b.pc=0;var e=ic(a.b,b.stream),f=hc(a.b,d);var g=a.a.K;var h=b.type;"text"==h?(g=g.a,g=null==g.a||g.a<c?0:g.a-Math.max(c,g.b)):(g=Ib(g,h),g=Cb(g,c));h=Math.max(a.i*Math.max(a.b.minBufferTime||0,a.g.rebufferingGoal),a.i*a.g.bufferingGoal);if(d>=a.b.presentationTimeline.Y())return b.endOfStream=!0,null;b.endOfStream=!1;b.Ma=f;if(f!=e)return null;if(g>=h)return.5;d=a.a.K;f=b.type;d="text"==
f?d.a.a:Ab(Ib(d,f));b.ea&&b.stream==b.Ea?(f=b.ea.position+1,d=Hf(a,b,e,f)):(f=b.ea?b.stream.findSegmentPosition(Math.max(0,a.b.periods[ic(a.b,b.Ea)].startTime+b.ea.endTime-a.b.periods[e].startTime)):b.stream.findSegmentPosition(Math.max(0,(d||c)-a.b.periods[e].startTime)),null==f?d=null:(g=null,null==d&&(g=Hf(a,b,e,Math.max(0,f-1))),d=g||Hf(a,b,e,f)));if(!d)return 1;If(a,b,c,e,d);return null}
function Hf(a,b,c,d){c=a.b.periods[c];b=b.stream.getSegmentReference(d);if(!b)return null;a=a.b.presentationTimeline;d=a.ua();return c.startTime+b.endTime<a.ma()||c.startTime+b.startTime>d?null:b}
function If(a,b,c,d,e){var f=a.b.periods[d],g=b.stream,h=a.b.periods[d+1],l=null,l=h?h.startTime:a.b.presentationTimeline.Y();d=Jf(a,b,d,l);b.wa=!0;b.cb=!1;h=Kf(a,e);Promise.all([d,h]).then(function(a){if(!this.f&&!this.l)return Lf(this,b,c,f,g,e,a[1])}.bind(a)).then(function(){this.f||this.l||(b.wa=!1,b.Eb=!1,b.ra||this.a.yb(),Bf(this,b,0),Mf(this,g))}.bind(a))["catch"](function(a){this.f||this.l||(b.wa=!1,this.b.presentationTimeline.$()&&this.g.infiniteRetriesForLiveStreams&&(1001==a.code||1002==
a.code||1003==a.code)?"text"==b.type&&this.g.ignoreTextStreamFailures&&1001==a.code?delete this.c.text:(a.severity=1,this.a.onError(a),Bf(this,b,4)):3017==a.code?Nf(this,b,a):"text"==b.type&&this.g.ignoreTextStreamFailures?delete this.c.text:(b.rb=!0,a.severity=2,this.a.onError(a)))}.bind(a))}function Nf(a,b,c){if(!Na(a.c).some(function(a){return a!=b&&a.Eb})){var d=Math.round(100*a.i);if(20<d)a.i-=.2;else if(4<d)a.i-=.04;else{b.rb=!0;a.l=!0;a.a.onError(c);return}b.Eb=!0}Bf(a,b,4)}
function Jf(a,b,c,d){if(!b.cb)return Promise.resolve();c=Mb(a.a.K,b.type,a.b.periods[c].startTime-b.stream.presentationTimeOffset,d);if(!b.stream.initSegmentReference)return c;a=Kf(a,b.stream.initSegmentReference).then(function(a){if(!this.f)return Jb(this.a.K,b.type,a,null,null)}.bind(a))["catch"](function(a){b.cb=!0;return Promise.reject(a)});return Promise.all([c,a])}
function Lf(a,b,c,d,e,f,g){e.containsEmsgBoxes&&(new Q).da("emsg",a.Cd.bind(a,d,f)).parse(g);return Of(a,b,c).then(function(){if(!this.f)return Jb(this.a.K,b.type,g,f.startTime+d.startTime,f.endTime+d.startTime)}.bind(a)).then(function(){if(!this.f)return b.Ea=e,b.ea=f,Promise.resolve()}.bind(a))}
k.Cd=function(a,b,c){var d=c.s.Bb(),e=c.s.Bb(),f=c.s.D(),g=c.s.D(),h=c.s.D(),l=c.s.D();c=c.s.Ja(c.s.H.byteLength-c.s.u);a=a.startTime+b.startTime+g/f;if("urn:mpeg:dash:event:2012"==d)this.a.hd();else this.a.onEvent(new I("emsg",{detail:{startTime:a,endTime:a+h/f,schemeIdUri:d,value:e,timescale:f,presentationTimeDelta:g,eventDuration:h,id:l,messageData:c}}))};
function Of(a,b,c){var d=Gb(a.a.K,b.type);if(null==d)return Promise.resolve();c=c-d-a.g.bufferBehind;return 0>=c?Promise.resolve():a.a.K.remove(b.type,d,d+c).then(function(){}.bind(a))}function Mf(a,b){if(!a.v&&(a.v=Na(a.c).every(function(a){return"text"==a.type?!0:!a.ra&&!a.sa&&a.ea}),a.v)){var c=ic(a.b,b);a.h[c]||Ef(a,c).then(function(){this.a.Zb()}.bind(a))["catch"](y);for(c=0;c<a.b.periods.length;++c)Ef(a,c)["catch"](y);a.a.ud&&a.a.ud()}}
function Gf(a,b){if(b.Ma!=ic(a.b,b.stream)){var c=b.Ma,d=Na(a.c);d.every(function(a){return a.Ma==c})&&d.every(Pf)&&Ef(a,c).then(function(){if(!this.f&&d.every(function(a){var b=ic(this.b,a.stream);return Pf(a)&&a.Ma==c&&b!=c}.bind(this))){var a=this.b.periods[c],b=this.a.$b(a),g;for(g in this.c)if(!b[g]&&"text"!=g){this.a.onError(new t(2,5,5005));return}for(g in b)if(!this.c[g])if("text"==g)uf(this,{text:b.text},a.startTime),delete b[g];else{this.a.onError(new t(2,5,5005));return}for(g in this.c)(a=
b[g])?(yf(this,g,a,!1),Bf(this,this.c[g],0)):delete this.c[g];this.a.Zb()}}.bind(a))["catch"](y)}}function Pf(a){return!a.wa&&null==a.qa&&!a.ra&&!a.sa}function Kf(a,b){var c=C(b.a(),a.g.retryParameters);if(b.X||null!=b.M){var d="bytes="+b.X+"-";null!=b.M&&(d+=b.M);c.headers.Range=d}return a.a.bd.request(1,c).then(function(a){return a.data})}
function zf(a,b,c){b.ra=!1;b.kb=!1;b.sa=!0;Lb(a.a.K,b.type).then(function(){if(!this.f&&c){var a=this.a.K,e=b.type;return"text"==e?Promise.resolve():Kb(a,e,a.Mc.bind(a,e))}}.bind(a)).then(function(){this.f||(b.Ea=null,b.ea=null,b.sa=!1,b.endOfStream=!1,Bf(this,b,0))}.bind(a))}function Bf(a,b,c){b.qa=window.setTimeout(a.ie.bind(a,b),1E3*c)}function tf(a){null!=a.qa&&(window.clearTimeout(a.qa),a.qa=null)};function Qf(a,b){return new Promise(function(c,d){var e=new XMLHttpRequest;e.open(b.method,a,!0);e.responseType="arraybuffer";e.timeout=b.retryParameters.timeout;e.withCredentials=b.allowCrossSiteCredentials;e.onload=function(b){b=b.target;var e=b.getAllResponseHeaders().split("\r\n").reduce(function(a,b){var c=b.split(": ");a[c[0].toLowerCase()]=c.slice(1).join(": ");return a},{});if(200<=b.status&&299>=b.status&&202!=b.status)b.responseURL&&(a=b.responseURL),c({uri:a,data:b.response,headers:e,fromCache:!!e["x-shaka-from-cache"]});
else{var f=null;try{f=Ta(b.response)}catch(n){}d(new t(401==b.status||403==b.status?2:1,1,1001,a,b.status,f,e))}};e.onerror=function(){d(new t(1,1,1002,a))};e.ontimeout=function(){d(new t(1,1,1003,a))};for(var f in b.headers)e.setRequestHeader(f,b.headers[f]);e.send(b.body)})}m("shaka.net.HttpPlugin",Qf);Ea.http=Qf;Ea.https=Qf;function Rf(){this.a=null;this.b=[];this.c={}}k=Rf.prototype;k.init=function(a,b){return Sf(this,a,b).then(function(){var b=Object.keys(a);return Promise.all(b.map(function(a){return Tf(this,a).then(function(b){this.c[a]=b}.bind(this))}.bind(this)))}.bind(this))};k.m=function(){return Promise.all(this.b.map(function(a){try{a.transaction.abort()}catch(b){}return a.L["catch"](y)})).then(function(){this.a&&(this.a.close(),this.a=null)}.bind(this))};
k.get=function(a,b){var c;return Uf(this,a,"readonly",function(a){c=a.get(b)}).then(function(){return c.result})};k.forEach=function(a,b){return Uf(this,a,"readonly",function(a){a.openCursor().onsuccess=function(a){if(a=a.target.result)b(a.value),a["continue"]()}})};function Vf(a,b,c){return Uf(a,b,"readwrite",function(a){a.put(c)})}k.remove=function(a,b){return Uf(this,a,"readwrite",function(a){a["delete"](b)})};
function Wf(a,b,c){return Uf(a,"segment","readwrite",function(a){for(var d=0;d<b.length;d++)a["delete"](b[d]).onsuccess=c||function(){}})}function Tf(a,b){var c=0;return Uf(a,b,"readonly",function(a){a.openCursor(null,"prev").onsuccess=function(a){(a=a.target.result)&&(c=a.key+1)}}).then(function(){return c})}
function Uf(a,b,c,d){var e={transaction:a.a.transaction([b],c),L:new A};e.transaction.oncomplete=function(){this.b.splice(this.b.indexOf(e),1);e.L.resolve()}.bind(a);e.transaction.onabort=function(a){this.b.splice(this.b.indexOf(e),1);Xf(e.transaction,e.L,a)}.bind(a);e.transaction.onerror=function(a){a.preventDefault()}.bind(a);b=e.transaction.objectStore(b);d(b);a.b.push(e);return e.L}
function Sf(a,b,c){var d=window.indexedDB.open("shaka_offline_db",1),e=!1,f=new A;d.onupgradeneeded=function(a){e=!0;a=a.target.result;for(var c in b)a.createObjectStore(c,{keyPath:b[c]})};d.onsuccess=function(a){c&&!e?(a.target.result.close(),setTimeout(function(){Sf(this,b,c-1).then(f.resolve,f.reject)}.bind(this),1E3)):(this.a=a.target.result,f.resolve())}.bind(a);d.onerror=Xf.bind(null,d,f);return f}
function Xf(a,b,c){a.error?b.reject(new t(2,9,9001,a.error)):b.reject(new t(2,9,9002));c.preventDefault()};var Yf={manifest:"key",segment:"key"};function Zf(a){var b=$f(a.periods[0],[],new T(null,0)),c=Zb(b,null,null),b=ac(b,null);c.push.apply(c,b);return{offlineUri:"offline:"+a.key,originalManifestUri:a.originalManifestUri,duration:a.duration,size:a.size,expiration:void 0==a.expiration?Infinity:a.expiration,tracks:c,appMetadata:a.appMetadata}}
function $f(a,b,c){var d=a.streams.filter(function(a){return"text"==a.contentType}),e=a.streams.filter(function(a){return"audio"==a.contentType}),f=a.streams.filter(function(a){return"video"==a.contentType});b=ag(e,f,b);d=d.map(bg);a.streams.forEach(function(a){a=cg(a);c.Ga(0,a)});return{startTime:a.startTime,variants:b,textStreams:d}}function cg(a){return a.segments.map(function(a,c){return new O(c,a.startTime,a.endTime,function(){return[a.uri]},0,null)})}
function ag(a,b,c){var d=[];if(!a.length&&!b.length)return d;a.length?b.length||(b=[null]):a=[null];for(var e=0,f=0;f<a.length;f++)for(var g=0;g<b.length;g++)if(dg(a[f],b[g])){var h=a[f];var l=b[g],n=c;h={id:e++,language:h?h.language:"",primary:!!h&&h.primary||!!l&&l.primary,audio:bg(h),video:bg(l),bandwidth:0,drmInfos:n,allowedByApplication:!0,allowedByKeySystem:!0};d.push(h)}return d}
function dg(a,b){if(!(a&&b&&a.variantIds&&b.variantIds))return!0;for(var c=0;c<a.variantIds.length;c++)if(b.variantIds.some(function(b){return b==a.variantIds[c]}))return!0;return!1}
function bg(a){if(!a)return null;var b=cg(a),b=new S(b);return{id:a.id,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:b.find.bind(b),getSegmentReference:b.get.bind(b),initSegmentReference:a.initSegmentUri?new Zc(function(){return[a.initSegmentUri]},0,null):null,presentationTimeOffset:a.presentationTimeOffset,mimeType:a.mimeType,codecs:a.codecs,width:a.width||void 0,height:a.height||void 0,frameRate:a.frameRate||void 0,kind:a.kind,encrypted:a.encrypted,keyId:a.keyId,language:a.language,
label:a.label||null,type:a.contentType,primary:a.primary,trickModeVideo:null,containsEmsgBoxes:!1,roles:[]}}function eg(){return window.indexedDB?new Rf:null};function fg(a,b,c,d){this.b={};this.l=[];this.o=d;this.j=a;this.v=b;this.A=c;this.i=this.a=null;this.f=this.g=this.h=this.c=0}fg.prototype.m=function(){var a=this.j,b=this.l,c=this.i||Promise.resolve(),c=c.then(function(){return Wf(a,b)});this.b={};this.l=[];this.i=this.a=this.A=this.v=this.j=this.o=null;return c};function gg(a,b,c,d,e){a.b[b]=a.b[b]||[];a.b[b].push({uris:c.a(),X:c.X,M:c.M,Pb:d,Fb:e})}
function hg(a,b){a.c=0;a.h=0;a.g=0;a.f=0;Na(a.b).forEach(function(a){a.forEach(function(a){null!=a.M?this.c+=a.M-a.X+1:this.g+=a.Pb}.bind(this))}.bind(a));a.a=b;a.a.size=a.c;var c=Na(a.b).map(function(a){var b=0,c=function(){if(!this.o)return Promise.reject(new t(2,9,9002));if(b>=a.length)return Promise.resolve();var d=a[b++];return ig(this,d).then(c)}.bind(this);return c()}.bind(a));a.b={};a.i=Promise.all(c).then(function(){return Vf(this.j,"manifest",b)}.bind(a)).then(function(){this.l=[]}.bind(a));
return a.i}
function ig(a,b){var c=C(b.uris,a.A);if(b.X||null!=b.M)c.headers.Range="bytes="+b.X+"-"+(null==b.M?"":b.M);var d;return a.v.request(1,c).then(function(a){if(!this.a)return Promise.reject(new t(2,9,9002));d=a.data.byteLength;this.l.push(b.Fb.key);b.Fb.data=a.data;return Vf(this.j,"segment",b.Fb)}.bind(a)).then(function(){if(!this.a)return Promise.reject(new t(2,9,9002));null==b.M?(this.a.size+=d,this.f+=b.Pb):this.h+=d;var a=(this.h+this.f)/(this.c+this.g),c=Zf(this.a);this.o.progressCallback(c,a)}.bind(a))}
;function jg(){this.a=-1}k=jg.prototype;k.configure=function(){};k.start=function(a){var b=/^offline:([0-9]+)$/.exec(a);if(!b)return Promise.reject(new t(2,1,9004,a));var c=Number(b[1]),d=eg();this.a=c;return d?d.init(Yf).then(function(){return d.get("manifest",c)}).then(function(a){if(!a)throw new t(2,9,9003,c);return kg(a)}).then(function(a){return d.m().then(function(){return a})},function(a){return d.m().then(function(){throw a;})}):Promise.reject(new t(2,9,9E3))};k.stop=function(){return Promise.resolve()};
k.update=function(){};k.onExpirationUpdated=function(a,b){var c=eg();c.init(Yf).then(function(){return c.get("manifest",this.a)}.bind(this)).then(function(d){if(d&&!(0>d.sessionIds.indexOf(a))&&(void 0==d.expiration||d.expiration>b))return d.expiration=b,Vf(c,"manifest",d)})["catch"](function(){}).then(function(){return c.m()})};
function kg(a){var b=new T(null,0);b.pa(a.duration);var c=a.drmInfo?[a.drmInfo]:[];return{presentationTimeline:b,minBufferTime:10,offlineSessionIds:a.sessionIds,periods:a.periods.map(function(a){return $f(a,c,b)})}}Dd["application/x-offline-manifest"]=jg;function lg(a){if(/^offline:([0-9]+)$/.exec(a)){var b={uri:a,data:new ArrayBuffer(0),headers:{"content-type":"application/x-offline-manifest"}};return Promise.resolve(b)}if(b=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)){var c=Number(b[1]),d=eg();return d?d.init(Yf).then(function(){return d.get("segment",c)}).then(function(b){return d.m().then(function(){if(!b)throw new t(2,9,9003,c);return{uri:a,data:b.data,headers:{}}})}):Promise.reject(new t(2,9,9E3))}return Promise.reject(new t(2,1,9004,a))}
m("shaka.offline.OfflineScheme",lg);Ea.offline=lg;function mg(){this.a=Promise.resolve();this.c=this.b=this.f=!1;this.g=new Promise(function(a){this.h=a}.bind(this))}mg.prototype.then=function(a){this.a=this.a.then(a).then(function(a){return this.c?(this.h(),Promise.reject(this.i)):Promise.resolve(a)}.bind(this));return this};function ng(a){a.f||(a.a=a.a.then(function(a){this.b=!0;return Promise.resolve(a)}.bind(a),function(a){this.b=!0;return Promise.reject(a)}.bind(a)));a.f=!0;return a.a}
mg.prototype.cancel=function(a){if(this.b)return Promise.resolve();this.c=!0;this.i=a;return this.g};function W(a,b){p.call(this);this.J=!1;this.f=a;this.A=null;this.l=new D;this.Ob=new H;this.Ya=this.c=this.h=this.a=this.v=this.g=this.Wa=this.ja=this.N=this.j=this.o=null;this.Bc=1E9;this.Va=[];this.ka=!1;this.Za=!0;this.la=this.G=null;this.B={};this.Xa=[];this.P={};this.b=og(this);this.mb={width:Infinity,height:Infinity};this.i=pg();this.Ua=0;this.ia=this.b.preferredAudioLanguage;this.Ba=this.b.preferredTextLanguage;b&&b(this);this.o=new B(this.be.bind(this));this.Wa=qg(this);for(var c=0;c<this.f.textTracks.length;++c){var d=
this.f.textTracks[c];d.mode="disabled";"Shaka Player TextTrack"==d.label&&(this.A=d)}this.A||(this.A=this.f.addTextTrack("subtitles","Shaka Player TextTrack"));this.A.mode="hidden";E(this.l,this.f,"error",this.wd.bind(this))}ba(W);m("shaka.Player",W);
W.prototype.m=function(){this.J=!0;var a=Promise.resolve();this.G&&(a=this.G.cancel(new t(2,7,7E3)));return a.then(function(){var a=Promise.all([this.la,rg(this),this.l?this.l.m():null,this.o?this.o.m():null]);this.b=this.o=this.Ob=this.l=this.A=this.f=null;return a}.bind(this))};W.prototype.destroy=W.prototype.m;W.version="v2.1.2-17-gf11a54a-dirty";var sg={};W.registerSupportPlugin=function(a,b){sg[a]=b};
W.isBrowserSupported=function(){return!!window.Promise&&!!window.Uint8Array&&!!Array.prototype.forEach&&!!window.MediaSource&&!!window.MediaSource.isTypeSupported&&!!window.MediaKeys&&!!window.navigator&&!!window.navigator.requestMediaKeySystemAccess&&!!window.MediaKeySystemAccess&&!!window.MediaKeySystemAccess.prototype.getConfiguration};W.probeSupport=function(){return qb().then(function(a){var b=Fd(),c=Eb();a={manifest:b,media:c,drm:a};for(var d in sg)a[d]=sg[d]();return a})};
W.prototype.load=function(a,b,c){var d=this.hb(),e=new mg;this.G=e;this.dispatchEvent(new I("loading"));var f=Date.now();return ng(e.then(function(){return d}).then(function(){this.i=pg();E(this.l,this.f,"playing",this.Sa.bind(this));E(this.l,this.f,"pause",this.Sa.bind(this));E(this.l,this.f,"ended",this.Sa.bind(this));return Gd(a,this.o,this.b.manifest.retryParameters,c)}.bind(this)).then(function(b){this.h=new b;this.h.configure(this.b.manifest);b={networkingEngine:this.o,filterPeriod:this.fb.bind(this),
onTimelineRegionAdded:this.vd.bind(this),onEvent:this.gb.bind(this),onError:this.xa.bind(this)};return 2<this.h.start.length?this.h.start(a,this.o,b.filterPeriod,b.onError,b.onEvent):this.h.start(a,b)}.bind(this)).then(function(b){if(0==b.periods.length)throw new t(2,4,4014);this.c=b;this.Ya=a;this.j=new bb(this.o,this.xa.bind(this),this.$d.bind(this),this.Zd.bind(this));this.j.configure(this.b.drm);return this.j.init(b,!1)}.bind(this)).then(function(){this.c.periods.forEach(this.fb.bind(this));this.Ua=
Date.now()/1E3;this.ia=this.b.preferredAudioLanguage;this.Ba=this.b.preferredTextLanguage;return Promise.all([eb(this.j,this.f),this.Wa])}.bind(this)).then(function(){this.b.abr.manager.init(this.Jb.bind(this));this.g=new ff(this.f,this.c,this.b.streaming,b||null,this.ae.bind(this),this.gb.bind(this));this.v=new of(this.f,this.c,this.b.streaming,this.xc.bind(this),this.gb.bind(this),this.Yd.bind(this));this.ja=new Db(this.f,this.N,this.A);this.a=new sf(this.c,{Oa:this.g,K:this.ja,bd:this.o,$b:this.cd.bind(this),
Zb:this.Ec.bind(this),onError:this.xa.bind(this),onEvent:this.gb.bind(this),hd:this.jd.bind(this),yb:this.sd.bind(this)});this.a.configure(this.b.streaming);tg(this);return this.a.init()}.bind(this)).then(function(){if(this.b.streaming.startAtSegmentBoundary){var a=ug(this,jf(this.g));gf(this.g,a)}this.c.periods.forEach(this.fb.bind(this));vg(this);wg(this);var a=V(this.a),b=dc(a,this.ia);this.b.abr.manager.setVariants(b);a.variants.some(function(a){return a.primary});this.Xa.forEach(this.v.v.bind(this.v));
this.Xa=[];La(this.l,this.f,"loadeddata",function(){this.i.loadLatency=(Date.now()-f)/1E3}.bind(this));this.G=null}.bind(this)))["catch"](function(a){this.G==e&&(this.G=null,this.dispatchEvent(new I("unloading")));return Promise.reject(a)}.bind(this))};W.prototype.load=W.prototype.load;
function tg(a){function b(a){return(a.video?a.video.codecs.split(".")[0]:"")+"-"+(a.audio?a.audio.codecs.split(".")[0]:"")}var c={};a.c.periods.forEach(function(a){a.variants.forEach(function(a){var d=b(a);d in c||(c[d]=[]);c[d].push(a)})});var d=null,e=Infinity;Qa(c,function(a,b){var c=0,f=0;b.forEach(function(a){c+=a.bandwidth;++f});var g=c/f;g<e&&(d=a,e=g)});a.c.periods.forEach(function(a){a.variants=a.variants.filter(function(a){return b(a)==d?!0:!1})})}
function qg(a){a.N=new MediaSource;var b=new A;E(a.l,a.N,"sourceopen",b.resolve);a.f.src=window.URL.createObjectURL(a.N);return b}W.prototype.configure=function(a){a.abr&&a.abr.manager&&a.abr.manager!=this.b.abr.manager&&(this.b.abr.manager.stop(),a.abr.manager.init(this.Jb.bind(this)));Ca(this.b,a,og(this),xg(),"");yg(this)};W.prototype.configure=W.prototype.configure;
function yg(a){a.h&&a.h.configure(a.b.manifest);a.j&&a.j.configure(a.b.drm);if(a.a){a.a.configure(a.b.streaming);try{a.c.periods.forEach(a.fb.bind(a))}catch(b){a.xa(b)}zg(a,V(a.a))}a.b.abr.enabled&&!a.Za?a.b.abr.manager.enable():a.b.abr.manager.disable();a.b.abr.manager.setDefaultEstimate(a.b.abr.defaultBandwidthEstimate);a.b.abr.manager.setRestrictions(a.b.abr.restrictions)}W.prototype.getConfiguration=function(){var a=og(this);Ca(a,this.b,og(this),xg(),"");return a};
W.prototype.getConfiguration=W.prototype.getConfiguration;W.prototype.Pd=function(){var a=og(this);a.abr&&a.abr.manager&&a.abr.manager!=this.b.abr.manager&&(this.b.abr.manager.stop(),a.abr.manager.init(this.Jb.bind(this)));this.b=og(this);yg(this)};W.prototype.resetConfiguration=W.prototype.Pd;W.prototype.Qc=function(){return this.f};W.prototype.getMediaElement=W.prototype.Qc;W.prototype.Ub=function(){return this.o};W.prototype.getNetworkingEngine=W.prototype.Ub;W.prototype.Pc=function(){return this.Ya};
W.prototype.getManifestUri=W.prototype.Pc;W.prototype.$=function(){return this.c?this.c.presentationTimeline.$():!1};W.prototype.isLive=W.prototype.$;W.prototype.va=function(){return this.c?this.c.presentationTimeline.va():!1};W.prototype.isInProgress=W.prototype.va;W.prototype.Rd=function(){var a=0,b=0;this.c&&(b=this.c.presentationTimeline,a=b.ma(),b=b.bb());return{start:a,end:b}};W.prototype.seekRange=W.prototype.Rd;W.prototype.keySystem=function(){return this.j?this.j.keySystem():""};
W.prototype.keySystem=W.prototype.keySystem;W.prototype.drmInfo=function(){return this.j?this.j.b:null};W.prototype.drmInfo=W.prototype.drmInfo;W.prototype.ab=function(){return this.j?this.j.ab():Infinity};W.prototype.getExpiration=W.prototype.ab;W.prototype.Yc=function(){return this.ka};W.prototype.isBuffering=W.prototype.Yc;
W.prototype.hb=function(){if(this.J)return Promise.resolve();this.dispatchEvent(new I("unloading"));var a=Promise.resolve();this.G&&(a=this.G.cancel(new t(2,7,7E3)));return a.then(function(){this.la||(this.la=Ag(this).then(function(){this.la=null}.bind(this)));return this.la}.bind(this))};W.prototype.unload=W.prototype.hb;W.prototype.pb=function(){return this.g?this.g.pb():0};W.prototype.getPlaybackRate=W.prototype.pb;W.prototype.le=function(a){this.g&&lf(this.g,a);this.a&&xf(this.a,1!=a)};
W.prototype.trickPlay=W.prototype.le;W.prototype.Fc=function(){this.g&&lf(this.g,1);this.a&&xf(this.a,!1)};W.prototype.cancelTrickPlay=W.prototype.Fc;W.prototype.getTracks=function(){return this.Wb().concat(this.Vb())};W.prototype.getTracks=W.prototype.getTracks;W.prototype.Ud=function(a,b){"text"==a.type?this.rc(a):(this.configure({abr:{enabled:!1}}),this.sc(a,b))};W.prototype.selectTrack=W.prototype.Ud;
W.prototype.Wb=function(){if(!this.c)return[];var a=hc(this.c,jf(this.g)),b=this.P[a]||{};return Zb(this.c.periods[a],b.audio,b.video)};W.prototype.getVariantTracks=W.prototype.Wb;W.prototype.Vb=function(){if(!this.c)return[];var a=hc(this.c,jf(this.g));return ac(this.c.periods[a],(this.P[a]||{}).text).filter(function(a){return 0>this.Va.indexOf(a.id)}.bind(this))};W.prototype.getTextTracks=W.prototype.Vb;
W.prototype.rc=function(a){if(this.a&&(a=cc(V(this.a),a))){Bg(this,a,!1);var b={};b.text=a;Cg(this,b,!0)}};W.prototype.selectTextTrack=W.prototype.rc;
W.prototype.sc=function(a,b){if(this.a){var c={},d=bc(V(this.a),a),e=vf(this.a);if(d){if(!d.allowedByApplication||!d.allowedByKeySystem)return;d.audio&&(Dg(this,d.audio),d.audio!=e.audio&&(c.audio=d.audio));d.video&&(Dg(this,d.video),d.video!=e.video&&(c.video=d.video))}Na(c).forEach(function(a){Bg(this,a,!1)}.bind(this));(d=e.text)&&(c.text=d);Cg(this,c,b)}};W.prototype.selectVariantTrack=W.prototype.sc;
W.prototype.Nc=function(){return this.a?$b(V(this.a).variants).map(function(a){return a.language}).filter(Aa):[]};W.prototype.getAudioLanguages=W.prototype.Nc;W.prototype.Wc=function(){return this.a?V(this.a).textStreams.map(function(a){return a.language}).filter(Aa):[]};W.prototype.getTextLanguages=W.prototype.Wc;W.prototype.Sd=function(a){if(this.a){var b=V(this.a);this.ia=a;zg(this,b)}};W.prototype.selectAudioLanguage=W.prototype.Sd;
W.prototype.Td=function(a){if(this.a){var b=V(this.a);this.Ba=a;zg(this,b)}};W.prototype.selectTextLanguage=W.prototype.Td;W.prototype.$c=function(){return"showing"==this.A.mode};W.prototype.isTextTrackVisible=W.prototype.$c;W.prototype.Wd=function(a){this.A.mode=a?"showing":"hidden";Eg(this)};W.prototype.setTextTrackVisibility=W.prototype.Wd;W.prototype.Sc=function(){return this.c?new Date(1E3*this.c.presentationTimeline.f+1E3*this.f.currentTime):null};W.prototype.getPlayheadTimeAsDate=W.prototype.Sc;
W.prototype.getStats=function(){Fg(this);this.Sa();var a=null,b=null,c=this.f&&this.f.getVideoPlaybackQuality?this.f.getVideoPlaybackQuality():{};this.g&&this.c&&(a=hc(this.c,jf(this.g)),b=this.P[a],b=gc(b.audio,b.video,this.c.periods[a].variants),a=b.video||{});a||(a={});b||(b={});return{width:a.width||0,height:a.height||0,streamBandwidth:b.bandwidth||0,decodedFrames:Number(c.totalVideoFrames),droppedFrames:Number(c.droppedVideoFrames),estimatedBandwidth:this.b.abr.manager.getBandwidthEstimate(),
loadLatency:this.i.loadLatency,playTime:this.i.playTime,bufferingTime:this.i.bufferingTime,switchHistory:Da(this.i.switchHistory),stateHistory:Da(this.i.stateHistory)}};W.prototype.getStats=W.prototype.getStats;
W.prototype.addTextTrack=function(a,b,c,d,e,f){if(!this.a)return Promise.reject();for(var g=V(this.a),h,l=0;l<this.c.periods.length;l++)if(this.c.periods[l]==g){if(l==this.c.periods.length-1){if(h=this.c.presentationTimeline.Y()-g.startTime,Infinity==h)return Promise.reject()}else h=this.c.periods[l+1].startTime-g.startTime;break}var n={id:this.Bc++,createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(){return 1},getSegmentReference:function(b){return 1!=b?null:new O(1,0,
h,function(){return[a]},0,null)},initSegmentReference:null,presentationTimeOffset:0,mimeType:d,codecs:e||"",kind:c,encrypted:!1,keyId:null,language:b,label:f||null,type:"text",primary:!1,trickModeVideo:null,containsEmsgBoxes:!1,roles:[]};this.Va.push(n.id);g.textStreams.push(n);return wf(this.a,n).then(function(){if(!this.J)return this.Va.splice(this.Va.indexOf(n.id),1),zg(this,g),vg(this),{id:n.id,active:!1,type:"text",bandwidth:0,language:b,label:f||null,kind:c,width:null,height:null}}.bind(this))};
W.prototype.addTextTrack=W.prototype.addTextTrack;W.prototype.Hb=function(a,b){this.mb.width=a;this.mb.height=b};W.prototype.setMaxHardwareResolution=W.prototype.Hb;function Bg(a,b,c){a.i.switchHistory.push({timestamp:Date.now()/1E3,id:b.id,type:b.type,fromAdaptation:c});Dg(a,b)}function Dg(a,b){var c=ic(a.c,b);a.P[c]||(a.P[c]={});a.P[c][b.type]=b.id}
function rg(a){a.l&&(a.l.ha(a.N,"sourceopen"),a.l.ha(a.f,"loadeddata"),a.l.ha(a.f,"playing"),a.l.ha(a.f,"pause"),a.l.ha(a.f,"ended"));a.f&&(a.f.removeAttribute("src"),a.f.load());var b=Promise.all([a.b?a.b.abr.manager.stop():null,a.j?a.j.m():null,a.ja?a.ja.m():null,a.g?a.g.m():null,a.v?a.v.m():null,a.a?a.a.m():null,a.h?a.h.stop():null]);a.j=null;a.ja=null;a.g=null;a.v=null;a.a=null;a.h=null;a.c=null;a.Ya=null;a.Wa=null;a.N=null;a.Xa=[];a.P={};a.B={};a.i=pg();return b}
function Ag(a){return a.h?rg(a).then(function(){this.J||(this.xc(!1),this.Wa=qg(this))}.bind(a)):Promise.resolve()}function xg(){return{".drm.servers":"",".drm.clearKeys":"",".drm.advanced":{distinctiveIdentifierRequired:!1,persistentStateRequired:!1,videoRobustness:"",audioRobustness:"",serverCertificate:null}}}
function og(a){return{drm:{retryParameters:Fa(),servers:{},clearKeys:{},advanced:{},delayLicenseRequestUntilPlayed:!1},manifest:{retryParameters:Fa(),dash:{customScheme:function(a){if(a)return null},clockSyncUri:"",ignoreDrmInfo:!1},hls:{defaultTimeOffset:0}},streaming:{retryParameters:Fa(),infiniteRetriesForLiveStreams:!0,rebufferingGoal:2,bufferingGoal:10,bufferBehind:30,ignoreTextStreamFailures:!1,startAtSegmentBoundary:!1,smallGapLimit:.5,jumpLargeGaps:!1},abr:{manager:a.Ob,enabled:!0,defaultBandwidthEstimate:5E5,
restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}},preferredAudioLanguage:"",preferredTextLanguage:"",restrictions:{minWidth:0,maxWidth:Infinity,minHeight:0,maxHeight:Infinity,minPixels:0,maxPixels:Infinity,minBandwidth:0,maxBandwidth:Infinity}}}
function pg(){return{width:NaN,height:NaN,streamBandwidth:NaN,decodedFrames:NaN,droppedFrames:NaN,estimatedBandwidth:NaN,loadLatency:NaN,playTime:0,bufferingTime:0,switchHistory:[],stateHistory:[]}}k=W.prototype;k.fb=function(a){var b=this.a?vf(this.a):{};Wb(this.j,b,a);b=0<$b(a.variants).length;Vb(a,this.b.restrictions,this.mb)&&this.a&&V(this.a)==a&&vg(this);a=1>$b(a.variants).length;if(!b)throw new t(2,4,4011);if(a)throw new t(2,4,4012);};
function Cg(a,b,c){for(var d in b){var e=b[d],f=c||!1;"text"==d&&(f=!0);a.Za?a.B[d]={stream:e,Ic:f}:yf(a.a,d,e,f)}}function Fg(a){if(a.c){var b=Date.now()/1E3;a.ka?a.i.bufferingTime+=b-a.Ua:a.i.playTime+=b-a.Ua;a.Ua=b}}
function ug(a,b){function c(a,b){if(!a)return null;var c=a.findSegmentPosition(b-e.startTime);return null==c?null:(c=a.getSegmentReference(c))?c.startTime+e.startTime:null}var d=vf(a.a),e=V(a.a),f=c(d.video,b),d=c(d.audio,b);return null!=f&&null!=d?Math.max(f,d):null!=f?f:null!=d?d:b}k.be=function(a,b){this.b.abr.manager.segmentDownloaded(a,b)};k.xc=function(a){Fg(this);this.ka=a;this.Sa();if(this.g){var b=this.g;a!=b.h&&(b.h=a,lf(b,b.g))}this.dispatchEvent(new I("buffering",{buffering:a}))};
k.Yd=function(){vg(this)};k.Sa=function(){if(!this.J){var a=this.ka?"buffering":this.f.ended?"ended":this.f.paused?"paused":"playing";var b=Date.now()/1E3;if(this.i.stateHistory.length){var c=this.i.stateHistory[this.i.stateHistory.length-1];c.duration=b-c.timestamp;if(a==c.state)return}this.i.stateHistory.push({timestamp:b,state:a,duration:0})}};k.ae=function(){if(this.v){var a=this.v;a.c.forEach(a.o.bind(a,!0))}this.a&&Af(this.a)};
function Gg(a,b,c,d,e){if(!c||1>c.length)return a.xa(new t(2,4,4012)),{};a.b.abr.manager.setVariants(c);a.b.abr.manager.setTextStreams(d);var f=[];e&&(f=["video","audio"],b.textStreams.length&&f.push("text"));e=vf(a.a);if(b=fc(e.audio,e.video,b.variants)){b.allowedByApplication&&b.allowedByKeySystem||(f.push("audio"),f.push("video"));for(var g in e)b=e[g],"audio"==b.type&&b.language!=c[0].language?f.push(g):"text"==b.type&&0<d.length&&b.language!=d[0].language&&f.push(g)}f=f.filter(Aa);if(0<f.length){c=
{};try{c=a.b.abr.manager.chooseStreams(f)}catch(h){a.xa(h)}return c}return{}}function zg(a,b){var c={audio:!1,text:!1},d=dc(b,a.ia,c),e=ec(b,a.Ba,c),d=Gg(a,b,d,e),f;for(f in d)Bg(a,d[f],!0);Cg(a,d,!0);wg(a);d.text&&d.audio&&c.text&&d.text.language!=d.audio.language&&(a.A.mode="showing",Eg(a))}k.cd=function(a){this.Za=!0;this.b.abr.manager.disable();var b=dc(a,this.ia),c=ec(a,this.Ba);a=Gg(this,a,b,c,!0);for(var d in this.B)a[d]=this.B[d].stream;this.B={};for(d in a)Bg(this,a[d],!0);return a};
k.Ec=function(){this.Za=!1;this.b.abr.enabled&&this.b.abr.manager.enable();for(var a in this.B){var b=this.B[a];yf(this.a,a,b.stream,b.Ic)}this.B={}};k.jd=function(){this.h&&this.h.update&&this.h.update()};k.sd=function(){this.g&&this.g.yb()};k.Jb=function(a,b){var c=vf(this.a),d;for(d in a){var e=a[d];c[d]!=e?Bg(this,e,!0):delete a[d]}if(!Ma(a)&&this.a){for(d in a)yf(this.a,d,a[d],b||!1);wg(this)}};
function wg(a){Promise.resolve().then(function(){this.J||this.dispatchEvent(new I("adaptation"))}.bind(a))}function vg(a){Promise.resolve().then(function(){this.J||this.dispatchEvent(new I("trackschanged"))}.bind(a))}function Eg(a){a.dispatchEvent(new I("texttrackvisibility"))}k.xa=function(a){this.J||this.dispatchEvent(new I("error",{detail:a}))};k.vd=function(a){this.v?this.v.v(a):this.Xa.push(a)};k.gb=function(a){this.dispatchEvent(a)};
k.wd=function(){if(this.f.error){var a=this.f.error.code;if(1!=a){var b=this.f.error.msExtendedCode;b&&(0>b&&(b+=Math.pow(2,32)),b=b.toString(16));this.xa(new t(2,3,3016,a,b))}}};
k.$d=function(a){var b=["output-restricted","internal-error"],c=V(this.a),d=!1;c.variants.forEach(function(c){var e=[];c.audio&&e.push(c.audio);c.video&&e.push(c.video);e.forEach(function(e){var f=c.allowedByKeySystem;e.keyId&&(e=a[e.keyId],c.allowedByKeySystem=!!e&&0>b.indexOf(e));f!=c.allowedByKeySystem&&(d=!0)})});var e=vf(this.a);(e=fc(e.audio,e.video,c.variants))&&!e.allowedByKeySystem&&zg(this,c);d&&vg(this)};
k.Zd=function(a,b){if(this.h&&this.h.onExpirationUpdated)this.h.onExpirationUpdated(a,b);this.dispatchEvent(new I("expirationupdated"))};function X(a){if(!a||a.constructor!=W)throw new t(2,9,9008);this.a=eg();this.f=a;this.i=Hg(this);this.b=null;this.v=!1;this.j=null;this.g=-1;this.l=0;this.c=null;this.h=new fg(this.a,a.o,a.getConfiguration().streaming.retryParameters,this.i)}m("shaka.offline.Storage",X);function Ig(){return!!window.indexedDB}X.support=Ig;X.prototype.m=function(){var a=this.a,b=this.h?this.h.m()["catch"](function(){}).then(function(){if(a)return a.m()}):Promise.resolve();this.i=this.f=this.h=this.a=null;return b};
X.prototype.destroy=X.prototype.m;X.prototype.configure=function(a){Ca(this.i,a,Hg(this),{},"")};X.prototype.configure=X.prototype.configure;
X.prototype.je=function(a,b,c){function d(a){f=a}if(this.v)return Promise.reject(new t(2,9,9006));this.v=!0;var e,f=null;return Jg(this).then(function(){Y(this);return Kg(this,a,d,c)}.bind(this)).then(function(c){Y(this);this.c=c.manifest;this.b=c.Jc;if(this.c.presentationTimeline.$()||this.c.presentationTimeline.va())throw new t(2,9,9005,a);this.c.periods.forEach(this.o.bind(this));this.g=this.a.c.manifest++;this.l=0;c=this.c.periods.map(this.B.bind(this));var d=this.b.b,f=jb(this.b);if(d){if(!f.length)throw new t(2,
9,9007,a);d.initData=[]}e={key:this.g,originalManifestUri:a,duration:this.l,size:0,expiration:this.b.ab(),periods:c,sessionIds:f,drmInfo:d,appMetadata:b};return hg(this.h,e)}.bind(this)).then(function(){Y(this);if(f)throw f;return Lg(this)}.bind(this)).then(function(){return Zf(e)}.bind(this))["catch"](function(a){return Lg(this)["catch"](y).then(function(){throw a;})}.bind(this))};X.prototype.store=X.prototype.je;
X.prototype.remove=function(a){function b(a){6013!=a.code&&(e=a)}var c=a.offlineUri,d=/^offline:([0-9]+)$/.exec(c);if(!d)return Promise.reject(new t(2,9,9004,c));var e=null,f,g,h=Number(d[1]);return Jg(this).then(function(){Y(this);return this.a.get("manifest",h)}.bind(this)).then(function(a){Y(this);if(!a)throw new t(2,9,9003,c);f=a;a=kg(f);g=new bb(this.f.o,b,function(){},function(){});g.configure(this.f.getConfiguration().drm);return g.init(a,!0)}.bind(this)).then(function(){return gb(g,f.sessionIds)}.bind(this)).then(function(){return g.m()}.bind(this)).then(function(){Y(this);
if(e)throw e;var b=f.periods.map(function(a){return a.streams.map(function(a){var b=a.segments.map(function(a){a=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.uri);return Number(a[1])});a.initSegmentUri&&(a=/^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.initSegmentUri),b.push(Number(a[1])));return b}).reduce(x,[])}).reduce(x,[]),c=0,d=b.length,g=this.i.progressCallback;return Wf(this.a,b,function(){c++;g(a,c/d)})}.bind(this)).then(function(){Y(this);this.i.progressCallback(a,1);return this.a.remove("manifest",
h)}.bind(this))};X.prototype.remove=X.prototype.remove;X.prototype.list=function(){var a=[];return Jg(this).then(function(){Y(this);return this.a.forEach("manifest",function(b){a.push(Zf(b))})}.bind(this)).then(function(){return a})};X.prototype.list=X.prototype.list;
function Kg(a,b,c,d){function e(){}var f=a.f.o,g=a.f.getConfiguration(),h,l,n;return Gd(b,f,g.manifest.retryParameters,d).then(function(a){Y(this);n=new a;n.configure(g.manifest);return n.start(b,{networkingEngine:f,filterPeriod:this.o.bind(this),onTimelineRegionAdded:function(){},onEvent:function(){},onError:c})}.bind(a)).then(function(a){Y(this);h=a;l=new bb(f,c,e,function(){});l.configure(g.drm);return l.init(h,!0)}.bind(a)).then(function(){Y(this);return Mg(h)}.bind(a)).then(function(){Y(this);
return fb(l)}.bind(a)).then(function(){Y(this);return n.stop()}.bind(a)).then(function(){Y(this);return{manifest:h,Jc:l}}.bind(a))["catch"](function(a){if(n)return n.stop().then(function(){throw a;});throw a;})}
X.prototype.A=function(a){for(var b=[],c=Sb(this.f.getConfiguration().preferredAudioLanguage),d=[0,Qb,Rb],e=a.filter(function(a){return"variant"==a.type}),d=d.map(function(a){return e.filter(function(b){b=Sb(b.language);return Pb(a,c,b)})}),f,g=0;g<d.length;g++)if(d[g].length){f=d[g];break}f||(d=e.filter(function(a){return a.primary}),d.length&&(f=d));f||(f=e,e.map(function(a){return a.language}).filter(Aa));var h=f.filter(function(a){return a.height&&480>=a.height});h.length&&(h.sort(function(a,
b){return b.height-a.height}),f=h.filter(function(a){return a.height==h[0].height}));f.sort(function(a,b){return a.bandwidth-b.bandwidth});f.length&&b.push(f[Math.floor(f.length/2)]);b.push.apply(b,a.filter(function(a){return"text"==a.type}));return b};function Hg(a){return{trackSelectionCallback:a.A.bind(a),progressCallback:function(a,c){if(a||c)return null}}}function Jg(a){return a.a?a.a.a?Promise.resolve():a.a.init(Yf):Promise.reject(new t(2,9,9E3))}
X.prototype.o=function(a){var b={};if(this.j){var c=this.j.filter(function(a){return"variant"==a.type}),d=null;c.length&&(d=bc(a,c[0]));d&&(d.video&&(b.video=d.video),d.audio&&(b.audio=d.audio))}Wb(this.b,b,a);Vb(a,this.f.getConfiguration().restrictions,{width:Infinity,height:Infinity})};function Lg(a){var b=a.b?a.b.m():Promise.resolve();a.b=null;a.c=null;a.v=!1;a.j=null;a.g=-1;return b}
function Mg(a){var b=a.periods.map(function(a){return a.variants}).reduce(x,[]).map(function(a){var b=[];a.audio&&b.push(a.audio);a.video&&b.push(a.video);return b}).reduce(x,[]).filter(Aa);a=a.periods.map(function(a){return a.textStreams}).reduce(x,[]);b.push.apply(b,a);return Promise.all(b.map(function(a){return a.createSegmentIndex()}))}
X.prototype.B=function(a){var b,c,d=Zb(a,null,null),e=ac(a,null),d=this.i.trackSelectionCallback(d.concat(e));this.j||(this.j=d,this.c.periods.forEach(this.o.bind(this)));for(e=d.length-1;0<e;--e){var f=!1;for(c=e-1;0<=c;--c)if(d[e].type==d[c].type&&d[e].kind==d[c].kind&&d[e].language==d[c].language){f=!0;break}if(f)break}f=[];for(e=0;e<d.length;e++)(b=bc(a,d[e]))?(b.audio&&((c=f.filter(function(a){return a.id==b.audio.id})[0])?c.variantIds.push(b.id):(c=b.video?b.bandwidth/2:b.bandwidth,f.push(Ng(this,
a,b.audio,c,b.id)))),b.video&&((c=f.filter(function(a){return a.id==b.video.id})[0])?c.variantIds.push(b.id):(c=b.audio?b.bandwidth/2:b.bandwidth,f.push(Ng(this,a,b.video,c,b.id))))):f.push(Ng(this,a,cc(a,d[e]),0));return{startTime:a.startTime,streams:f}};
function Ng(a,b,c,d,e){var f=[],g=a.c.presentationTimeline.ma();var h=g;for(var l=c.findSegmentPosition(g),n=null!=l?c.getSegmentReference(l):null;n;)h=a.a.c.segment++,gg(a.h,c.type,n,(n.endTime-n.startTime)*d/8,{key:h,data:null,manifestKey:a.g,streamNumber:c.id,segmentNumber:h}),f.push({startTime:n.startTime,endTime:n.endTime,uri:"offline:"+a.g+"/"+c.id+"/"+h}),h=n.endTime+b.startTime,n=c.getSegmentReference(++l);a.l=Math.max(a.l,h-g);b=null;c.initSegmentReference&&(h=a.a.c.segment++,b="offline:"+
a.g+"/"+c.id+"/"+h,gg(a.h,c.contentType,c.initSegmentReference,0,{key:h,data:null,manifestKey:a.g,streamNumber:c.id,segmentNumber:-1}));a=[];null!=e&&a.push(e);return{id:c.id,primary:c.primary,presentationTimeOffset:c.presentationTimeOffset||0,contentType:c.type,mimeType:c.mimeType,codecs:c.codecs,frameRate:c.frameRate,kind:c.kind,language:c.language,label:c.label,width:c.width||null,height:c.height||null,initSegmentUri:b,encrypted:c.encrypted,keyId:c.keyId,segments:f,variantIds:a}}
function Y(a){if(!a.f)throw new t(2,9,9002);}sg.offline=Ig;m("shaka.polyfill.installAll",function(){for(var a=0;a<Og.length;++a)Og[a]()});var Og=[];function Pg(a){Og.push(a)}m("shaka.polyfill.register",Pg);function Qg(a){var b=a.type.replace(/^(webkit|moz|MS)/,"").toLowerCase();if("function"===typeof Event)var c=new Event(b,a);else c=document.createEvent("Event"),c.initEvent(b,a.bubbles,a.cancelable);a.target.dispatchEvent(c)}
Pg(function(){if(window.Document){var a=Element.prototype;a.requestFullscreen=a.requestFullscreen||a.mozRequestFullScreen||a.msRequestFullscreen||a.webkitRequestFullscreen;a=Document.prototype;a.exitFullscreen=a.exitFullscreen||a.mozCancelFullScreen||a.msExitFullscreen||a.webkitExitFullscreen;"fullscreenElement"in document||(Object.defineProperty(document,"fullscreenElement",{get:function(){return document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement}}),Object.defineProperty(document,
"fullscreenEnabled",{get:function(){return document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled}}));document.addEventListener("webkitfullscreenchange",Qg);document.addEventListener("webkitfullscreenerror",Qg);document.addEventListener("mozfullscreenchange",Qg);document.addEventListener("mozfullscreenerror",Qg);document.addEventListener("MSFullscreenChange",Qg);document.addEventListener("MSFullscreenError",Qg)}});Pg(function(){var a=navigator.userAgent;a&&0<=a.indexOf("CrKey")&&delete window.indexedDB});Pg(function(){if(4503599627370497!=Math.round(4503599627370497)){var a=Math.round;Math.round=function(b){var c=b;4503599627370496>=b&&(c=a(b));return c}}});function Rg(a){this.f=[];this.b=[];this.a=[];(new Q).da("pssh",this.c.bind(this)).parse(a.buffer)}Rg.prototype.c=function(a){if(!(1<a.version)){var b=$a(a.s.Ja(16)),c=[];if(0<a.version)for(var d=a.s.D(),e=0;e<d;++e){var f=$a(a.s.Ja(16));c.push(f)}d=a.s.D();a.s.I(d);this.b.push.apply(this.b,c);this.f.push(b);this.a.push({start:a.start,end:a.start+a.size-1})}};function Sg(a,b){try{var c=new Tg(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}
function Tg(a,b){this.keySystem=a;for(var c=!1,d=0;d<b.length;++d){var e=b[d];var f={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label},g=!1;if(e.audioCapabilities)for(var h=0;h<e.audioCapabilities.length;++h){var l=e.audioCapabilities[h];if(l.contentType){g=!0;var n=l.contentType.split(";")[0];MSMediaKeys.isTypeSupported(this.keySystem,n)&&(f.audioCapabilities.push(l),c=!0)}}if(e.videoCapabilities)for(h=
0;h<e.videoCapabilities.length;++h)l=e.videoCapabilities[h],l.contentType&&(g=!0,n=l.contentType.split(";")[0],MSMediaKeys.isTypeSupported(this.keySystem,n)&&(f.videoCapabilities.push(l),c=!0));g||(c=MSMediaKeys.isTypeSupported(this.keySystem,"video/mp4"));"required"==e.persistentState&&(f.persistentState="required",f.sessionTypes=["persistent-license"]);if(c){this.a=f;return}}e=Error("Unsupported keySystem");e.name="NotSupportedError";e.code=DOMException.NOT_SUPPORTED_ERR;throw e;}
Tg.prototype.createMediaKeys=function(){var a=new Ug(this.keySystem);return Promise.resolve(a)};Tg.prototype.getConfiguration=function(){return this.a};function Vg(a){var b=this.mediaKeys;b&&b!=a&&Wg(b,null);delete this.mediaKeys;return(this.mediaKeys=a)?Wg(a,this):Promise.resolve()}function Ug(a){this.a=new MSMediaKeys(a);this.b=new D}Ug.prototype.createSession=function(a){if("temporary"!=(a||"temporary"))throw new TypeError("Session type "+a+" is unsupported on this platform.");return new Xg(this.a)};
Ug.prototype.setServerCertificate=function(){return Promise.resolve(!1)};function Wg(a,b){function c(){b.msSetMediaKeys(d.a);b.removeEventListener("loadedmetadata",c)}Ja(a.b);if(!b)return Promise.resolve();E(a.b,b,"msneedkey",Yg);var d=a;try{return 1<=b.readyState?b.msSetMediaKeys(a.a):b.addEventListener("loadedmetadata",c),Promise.resolve()}catch(e){return Promise.reject(e)}}
function Xg(a){p.call(this);this.c=null;this.g=a;this.b=this.a=null;this.f=new D;this.sessionId="";this.expiration=NaN;this.closed=new A;this.keyStatuses=new Zg}ba(Xg);k=Xg.prototype;k.generateRequest=function(a,b){this.a=new A;try{this.c=this.g.createSession("video/mp4",new Uint8Array(b),null),E(this.f,this.c,"mskeymessage",this.nd.bind(this)),E(this.f,this.c,"mskeyadded",this.ld.bind(this)),E(this.f,this.c,"mskeyerror",this.md.bind(this)),$g(this,"status-pending")}catch(c){this.a.reject(c)}return this.a};
k.load=function(){return Promise.reject(Error("MediaKeySession.load not yet supported"))};k.update=function(a){this.b=new A;try{this.c.update(new Uint8Array(a))}catch(b){this.b.reject(b)}return this.b};k.close=function(){try{this.c.close(),this.closed.resolve(),Ja(this.f)}catch(a){this.closed.reject(a)}return this.closed};k.remove=function(){return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))};
function Yg(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("encrypted",!1,!1,null);b.initDataType="cenc";var c=a.initData;if(c){var d=new Rg(c);if(1>=d.a.length)a=c;else{var e=[];for(a=0;a<d.a.length;a++)e.push(c.subarray(d.a[a].start,d.a[a].end+1));c=Ga(e,ah);for(a=d=0;a<c.length;a++)d+=c[a].length;d=new Uint8Array(d);for(a=e=0;a<c.length;a++)d.set(c[a],e),e+=c[a].length;a=d}}else a=c;b.initData=a;this.dispatchEvent(b)}function ah(a,b){return ab(a,b)}
k.nd=function(a){this.a&&(this.a.resolve(),this.a=null);this.dispatchEvent(new I("message",{messageType:void 0==this.keyStatuses.qb()?"licenserequest":"licenserenewal",message:a.message.buffer}))};k.ld=function(){this.a?($g(this,"usable"),this.a.resolve(),this.a=null):this.b&&($g(this,"usable"),this.b.resolve(),this.b=null)};
k.md=function(){var a=Error("EME PatchedMediaKeysMs key error");a.errorCode=this.c.error;if(this.a)this.a.reject(a),this.a=null;else if(this.b)this.b.reject(a),this.b=null;else switch(this.c.error.code){case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:$g(this,"output-not-allowed");default:$g(this,"internal-error")}};function $g(a,b){a.keyStatuses.Ib(b);a.dispatchEvent(new I("keystatuseschange"))}function Zg(){this.size=0;this.a=void 0}var bh;k=Zg.prototype;
k.Ib=function(a){this.size=void 0==a?0:1;this.a=a};k.qb=function(){return this.a};k.forEach=function(a){this.a&&a(this.a,bh)};k.get=function(a){if(this.has(a))return this.a};k.has=function(a){var b=bh;return this.a&&ab(new Uint8Array(a),new Uint8Array(b))?!0:!1};k.entries=function(){};k.keys=function(){};k.values=function(){};function ch(){return Promise.reject(Error("The key system specified is not supported."))}function dh(a){return a?Promise.reject(Error("MediaKeys not supported.")):Promise.resolve()}function eh(){throw new TypeError("Illegal constructor.");}eh.prototype.createSession=function(){};eh.prototype.setServerCertificate=function(){};function fh(){throw new TypeError("Illegal constructor.");}fh.prototype.getConfiguration=function(){};fh.prototype.createMediaKeys=function(){};var gh="";function hh(a){gh=a;ih=(new Uint8Array([0])).buffer;navigator.requestMediaKeySystemAccess=jh;delete HTMLMediaElement.prototype.mediaKeys;HTMLMediaElement.prototype.mediaKeys=null;HTMLMediaElement.prototype.setMediaKeys=kh;window.MediaKeys=lh;window.MediaKeySystemAccess=mh}function nh(a){var b=gh;return b?b+a.charAt(0).toUpperCase()+a.slice(1):a}function jh(a,b){try{var c=new mh(a,b);return Promise.resolve(c)}catch(d){return Promise.reject(d)}}
function kh(a){var b=this.mediaKeys;b&&b!=a&&oh(b,null);delete this.mediaKeys;(this.mediaKeys=a)&&oh(a,this);return Promise.resolve()}
function mh(a,b){this.a=this.keySystem=a;var c=!0;"org.w3.clearkey"==a&&(this.a="webkit-org.w3.clearkey",c=!1);var d=!1;var e=document.getElementsByTagName("video");var f=e.length?e[0]:document.createElement("video");for(var g=0;g<b.length;++g){e=b[g];var h={audioCapabilities:[],videoCapabilities:[],persistentState:"optional",distinctiveIdentifier:"optional",initDataTypes:e.initDataTypes,sessionTypes:["temporary"],label:e.label},l=!1;if(e.audioCapabilities)for(var n=0;n<e.audioCapabilities.length;++n){var q=
e.audioCapabilities[n];if(q.contentType){var l=!0,r=q.contentType.split(";")[0];f.canPlayType(r,this.a)&&(h.audioCapabilities.push(q),d=!0)}}if(e.videoCapabilities)for(n=0;n<e.videoCapabilities.length;++n)q=e.videoCapabilities[n],q.contentType&&(l=!0,f.canPlayType(q.contentType,this.a)&&(h.videoCapabilities.push(q),d=!0));l||(d=f.canPlayType("video/mp4",this.a)||f.canPlayType("video/webm",this.a));"required"==e.persistentState&&(c?(h.persistentState="required",h.sessionTypes=["persistent-license"]):
d=!1);if(d){this.b=h;return}}c="Unsupported keySystem";if("org.w3.clearkey"==a||"com.widevine.alpha"==a)c="None of the requested configurations were supported.";c=Error(c);c.name="NotSupportedError";c.code=DOMException.NOT_SUPPORTED_ERR;throw c;}mh.prototype.createMediaKeys=function(){var a=new lh(this.a);return Promise.resolve(a)};mh.prototype.getConfiguration=function(){return this.b};function lh(a){this.g=a;this.b=null;this.a=new D;this.c=[];this.f={}}
function oh(a,b){a.b=b;Ja(a.a);var c=gh;b&&(E(a.a,b,c+"needkey",a.Ad.bind(a)),E(a.a,b,c+"keymessage",a.zd.bind(a)),E(a.a,b,c+"keyadded",a.xd.bind(a)),E(a.a,b,c+"keyerror",a.yd.bind(a)))}k=lh.prototype;k.createSession=function(a){var b=a||"temporary";if("temporary"!=b&&"persistent-license"!=b)throw new TypeError("Session type "+a+" is unsupported on this platform.");a=this.b||document.createElement("video");a.src||(a.src="about:blank");b=new ph(a,this.g,b);this.c.push(b);return b};
k.setServerCertificate=function(){return Promise.resolve(!1)};k.Ad=function(a){var b=document.createEvent("CustomEvent");b.initCustomEvent("encrypted",!1,!1,null);b.initDataType="webm";b.initData=a.initData;this.b.dispatchEvent(b)};k.zd=function(a){var b=qh(this,a.sessionId);b&&(a=new I("message",{messageType:void 0==b.keyStatuses.qb()?"licenserequest":"licenserenewal",message:a.message}),b.b&&(b.b.resolve(),b.b=null),b.dispatchEvent(a))};
k.xd=function(a){if(a=qh(this,a.sessionId))rh(a,"usable"),a.a&&a.a.resolve(),a.a=null};
k.yd=function(a){var b=qh(this,a.sessionId);if(b){var c=Error("EME v0.1b key error");c.errorCode=a.errorCode;c.errorCode.systemCode=a.systemCode;!a.sessionId&&b.b?(c.method="generateRequest",45==a.systemCode&&(c.message="Unsupported session type."),b.b.reject(c),b.b=null):a.sessionId&&b.a?(c.method="update",b.a.reject(c),b.a=null):(c=a.systemCode,a.errorCode.code==MediaKeyError.MEDIA_KEYERR_OUTPUT?rh(b,"output-restricted"):1==c?rh(b,"expired"):rh(b,"internal-error"))}};
function qh(a,b){var c=a.f[b];return c?c:(c=a.c.shift())?(c.sessionId=b,a.f[b]=c):null}function ph(a,b,c){p.call(this);this.f=a;this.h=!1;this.a=this.b=null;this.c=b;this.g=c;this.sessionId="";this.expiration=NaN;this.closed=new A;this.keyStatuses=new sh}ba(ph);
function th(a,b,c){if(a.h)return Promise.reject(Error("The session is already initialized."));a.h=!0;try{if("persistent-license"==a.g)if(c)var d=new Uint8Array(Ua("LOAD_SESSION|"+c));else{var e=Ua("PERSISTENT|"),f=new Uint8Array(e.byteLength+b.byteLength);f.set(new Uint8Array(e),0);f.set(new Uint8Array(b),e.byteLength);d=f}else d=new Uint8Array(b)}catch(h){return Promise.reject(h)}a.b=new A;var g=nh("generateKeyRequest");try{a.f[g](a.c,d)}catch(h){if("InvalidStateError"!=h.name)return a.b=null,Promise.reject(h);
setTimeout(function(){try{this.f[g](this.c,d)}catch(l){this.b.reject(l),this.b=null}}.bind(a),10)}return a.b}k=ph.prototype;
k.Kb=function(a,b){if(this.a)this.a.then(this.Kb.bind(this,a,b))["catch"](this.Kb.bind(this,a,b));else{this.a=a;if("webkit-org.w3.clearkey"==this.c){var c=F(b);var d=JSON.parse(c);"oct"!=d.keys[0].kty&&(this.a.reject(Error("Response is not a valid JSON Web Key Set.")),this.a=null);c=Ya(d.keys[0].k);d=Ya(d.keys[0].kid)}else c=new Uint8Array(b),d=null;var e=nh("addKey");try{this.f[e](this.c,c,d,this.sessionId)}catch(f){this.a.reject(f),this.a=null}}};
function rh(a,b){a.keyStatuses.Ib(b);a.dispatchEvent(new I("keystatuseschange"))}k.generateRequest=function(a,b){return th(this,b,null)};k.load=function(a){return"persistent-license"==this.g?th(this,null,a):Promise.reject(Error("Not a persistent session."))};k.update=function(a){var b=new A;this.Kb(b,a);return b};
k.close=function(){if("persistent-license"!=this.g){if(!this.sessionId)return this.closed.reject(Error("The session is not callable.")),this.closed;var a=nh("cancelKeyRequest");try{this.f[a](this.c,this.sessionId)}catch(b){}}this.closed.resolve();return this.closed};k.remove=function(){return"persistent-license"!=this.g?Promise.reject(Error("Not a persistent session.")):this.close()};function sh(){this.size=0;this.a=void 0}var ih;k=sh.prototype;k.Ib=function(a){this.size=void 0==a?0:1;this.a=a};
k.qb=function(){return this.a};k.forEach=function(a){this.a&&a(this.a,ih)};k.get=function(a){if(this.has(a))return this.a};k.has=function(a){var b=ih;return this.a&&ab(new Uint8Array(a),new Uint8Array(b))?!0:!1};k.entries=function(){};k.keys=function(){};k.values=function(){};Pg(function(){!window.HTMLVideoElement||navigator.requestMediaKeySystemAccess&&MediaKeySystemAccess.prototype.getConfiguration||(HTMLMediaElement.prototype.webkitGenerateKeyRequest?hh("webkit"):HTMLMediaElement.prototype.generateKeyRequest?hh(""):window.MSMediaKeys?(bh=(new Uint8Array([0])).buffer,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=Vg,window.MediaKeys=Ug,window.MediaKeySystemAccess=Tg,navigator.requestMediaKeySystemAccess=
Sg):(navigator.requestMediaKeySystemAccess=ch,delete HTMLMediaElement.prototype.mediaKeys,HTMLMediaElement.prototype.mediaKeys=null,HTMLMediaElement.prototype.setMediaKeys=dh,window.MediaKeys=eh,window.MediaKeySystemAccess=fh))});function uh(){var a=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var b=a.apply(this,arguments);b.abort=function(){};return b}}
function vh(){var a=MediaSource.prototype.endOfStream;MediaSource.prototype.endOfStream=function(){for(var b,d=0,e=0;e<this.sourceBuffers.length;++e)b=this.sourceBuffers[e],b=b.buffered.end(b.buffered.length-1),d=Math.max(d,b);if(!isNaN(this.duration)&&d<this.duration)for(this.Xb=!0,e=0;e<this.sourceBuffers.length;++e)b=this.sourceBuffers[e],b.Rb=!1;return a.apply(this,arguments)};var b=MediaSource.prototype.addSourceBuffer;MediaSource.prototype.addSourceBuffer=function(){var a=b.apply(this,arguments);
a.N=this;a.addEventListener("updateend",wh,!1);this.a||(this.addEventListener("sourceclose",xh,!1),this.a=!0);return a}}function wh(a){var b=a.target,c=b.N;if(c.Xb){a.preventDefault();a.stopPropagation();a.stopImmediatePropagation();b.Rb=!0;for(a=0;a<c.sourceBuffers.length;++a)if(0==c.sourceBuffers[a].Rb)return;c.Xb=!1}}function xh(a){a=a.target;for(var b=0;b<a.sourceBuffers.length;++b)a.sourceBuffers[b].removeEventListener("updateend",wh,!1);a.removeEventListener("sourceclose",xh,!1)}
Pg(function(){if(window.MediaSource){var a=navigator.vendor,b=navigator.appVersion;!a||!b||0>a.indexOf("Apple")||(0<=b.indexOf("Version/8")?window.MediaSource=null:0<=b.indexOf("Version/9")?uh():0<=b.indexOf("Version/10")&&(uh(),vh()))}});function Z(a){this.c=[];this.b=[];this.za=yh;if(a)try{a(this.fa.bind(this),this.a.bind(this))}catch(b){this.a(b)}}var yh=0;function zh(a){var b=new Z;b.fa(void 0);return b.then(function(){return a})}function Ah(a){var b=new Z;b.a(a);return b}function Bh(a){function b(a,b,c){a.za==yh&&(e[b]=c,d++,d==e.length&&a.fa(e))}var c=new Z;if(!a.length)return c.fa([]),c;for(var d=0,e=Array(a.length),f=c.a.bind(c),g=0;g<a.length;++g)a[g]&&a[g].then?a[g].then(b.bind(null,c,g),f):b(c,g,a[g]);return c}
function Ch(a){for(var b=new Z,c=b.fa.bind(b),d=b.a.bind(b),e=0;e<a.length;++e)a[e]&&a[e].then?a[e].then(c,d):c(a[e]);return b}Z.prototype.then=function(a,b){var c=new Z;switch(this.za){case 1:Dh(this,c,a);break;case 2:Dh(this,c,b);break;case yh:this.c.push({L:c,nb:a}),this.b.push({L:c,nb:b})}return c};Z.prototype["catch"]=function(a){return this.then(void 0,a)};
Z.prototype.fa=function(a){if(this.za==yh){this.jb=a;this.za=1;for(a=0;a<this.c.length;++a)Dh(this,this.c[a].L,this.c[a].nb);this.c=[];this.b=[]}};Z.prototype.a=function(a){if(this.za==yh){this.jb=a;this.za=2;for(a=0;a<this.b.length;++a)Dh(this,this.b[a].L,this.b[a].nb);this.c=[];this.b=[]}};
function Dh(a,b,c){Eh.push(function(){if(c&&"function"==typeof c){try{var a=c(this.jb)}catch(f){b.a(f);return}try{var e=a&&a.then}catch(f){b.a(f);return}a instanceof Z?a==b?b.a(new TypeError("Chaining cycle detected")):a.then(b.fa.bind(b),b.a.bind(b)):e?Fh(a,e,b):b.fa(a)}else 1==this.za?b.fa(this.jb):b.a(this.jb)}.bind(a));null==Gh&&(Gh=Hh(Ih))}
function Fh(a,b,c){try{var d=!1;b.call(a,function(a){if(!d){d=!0;try{var b=a&&a.then}catch(g){c.a(g);return}b?Fh(a,b,c):c.fa(a)}},c.a.bind(c))}catch(e){c.a(e)}}function Ih(){for(;Eh.length;){null!=Gh&&(Jh(Gh),Gh=null);var a=Eh;Eh=[];for(var b=0;b<a.length;++b)a[b]()}}function Hh(){return 0}function Jh(){}var Gh=null,Eh=[];
Pg(function(a){window.setImmediate?(Hh=function(a){return window.setImmediate(a)},Jh=function(a){return window.clearImmediate(a)}):(Hh=function(a){return window.setTimeout(a,0)},Jh=function(a){return window.clearTimeout(a)});if(!window.Promise||a)window.Promise=Z,window.Promise.resolve=zh,window.Promise.reject=Ah,window.Promise.all=Bh,window.Promise.race=Ch,window.Promise.prototype.then=Z.prototype.then,window.Promise.prototype["catch"]=Z.prototype["catch"]});Pg(function(){if(window.HTMLMediaElement){var a=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){var b=a.apply(this,arguments);b&&b["catch"](function(){});return b}}});function Kh(){return{droppedVideoFrames:this.webkitDroppedFrameCount,totalVideoFrames:this.webkitDecodedFrameCount,corruptedVideoFrames:0,creationTime:NaN,totalFrameDelay:0}}Pg(function(){if(window.HTMLVideoElement){var a=HTMLVideoElement.prototype;!a.getVideoPlaybackQuality&&"webkitDroppedFrameCount"in a&&(a.getVideoPlaybackQuality=Kh)}});function Lh(a,b,c){return new window.TextTrackCue(a,b,c)}function Mh(a,b,c){return new window.TextTrackCue(a+"-"+b+"-"+c,a,b,c)}Pg(function(){if(!window.VTTCue&&window.TextTrackCue){var a=TextTrackCue.length;if(3==a)window.VTTCue=Lh;else if(6==a)window.VTTCue=Mh;else{try{var b=!!Lh(1,2,"")}catch(c){b=!1}b&&(window.VTTCue=Lh)}}});}.call(g,this));
if (typeof(module)!="undefined"&&module.exports)module.exports=g.shaka;
else if (true)!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return g.shaka}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
else this.shaka=g.shaka;
})();

//# sourceMappingURL=shaka-player.compiled.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shakaPlayer = __webpack_require__(1);

var _shakaPlayer2 = _interopRequireDefault(_shakaPlayer);

var _playkitJs = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Adapter of shaka lib for dash content
 * @classdesc
 */
var DashAdapter = function (_BaseMediaSourceAdapt) {
  _inherits(DashAdapter, _BaseMediaSourceAdapt);

  _createClass(DashAdapter, null, [{
    key: 'canPlayType',


    /**
     * Checks if dash adapter can play a given mime type
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @returns {boolean} - Whether the dash adapter can play a specific mime type
     * @static
     */

    /**
     * The shaka player instance
     * @member {any} _shaka
     * @private
     */

    /**
     * The load promise
     * @member {Promise<Object>} - _loadPromise
     * @type {Promise<Object>}
     * @private
     */

    /**
     * The adapter logger
     * @member {any} _logger
     * @private
     * @static
     */
    value: function canPlayType(mimeType) {
      var canPlayType = mimeType === DashAdapter._dashMimeType;
      DashAdapter._logger.debug('canPlayType result for mimeType:' + mimeType + ' is ' + canPlayType.toString());
      return canPlayType;
    }

    /**
     * Checks if the dash adapter is supported
     * @function isSupported
     * @returns {boolean} -  Whether dash is supported.
     * @static
     */

    /**
     * The supported mime type by the dash adapter
     * @member {string} _dashMimeType
     * @static
     * @private
     */

    /**
     * The name of Adapter
     * @member {string} _name
     * @static
     * @private
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      _shakaPlayer2.default.polyfill.installAll();
      var isSupported = _shakaPlayer2.default.Player.isBrowserSupported();
      DashAdapter._logger.debug('isSupported:' + isSupported);
      return isSupported;
    }

    /**
     * @constructor
     * @param {HTMLVideoElement} videoElement - The video element which bind to the dash adapter
     * @param {Object} source - The source object
     * @param {Object} config - The media source adapter configuration
     */

  }]);

  function DashAdapter(videoElement, source) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, DashAdapter);

    DashAdapter._logger.debug('Creating adapter. Shaka version: ' + _shakaPlayer2.default.Player.version);

    var _this = _possibleConstructorReturn(this, (DashAdapter.__proto__ || Object.getPrototypeOf(DashAdapter)).call(this, videoElement, source, config));

    _this._shaka = new _shakaPlayer2.default.Player(videoElement);
    _this._shaka.configure(config);
    _this._addBindings();
    return _this;
  }

  /**
   * Add the required bindings to shaka.
   * @function _addBindings
   * @private
   * @returns {void}
   */


  _createClass(DashAdapter, [{
    key: '_addBindings',
    value: function _addBindings() {
      this._shaka.addEventListener('adaptation', this._onAdaptation.bind(this));
      this._shaka.addEventListener('error', this._onError.bind(this));
    }

    /**
     * Remove the bindings to shaka.
     * @function _removeBindings
     * @private
     * @returns {void}
     */

  }, {
    key: '_removeBindings',
    value: function _removeBindings() {
      this._shaka.removeEventListener('adaptation', this._onAdaptation);
      this._shaka.removeEventListener('error', this._onError);
    }

    /**
     * Load the video source
     * @function load
     * @override
     */

  }, {
    key: 'load',
    value: function load() {
      var _this2 = this;

      if (!this._loadPromise) {
        this._loadPromise = new Promise(function (resolve, reject) {
          if (_this2._sourceObj && _this2._sourceObj.url) {
            _this2._shaka.load(_this2._sourceObj.url).then(function () {
              var data = { tracks: _this2._getParsedTracks() };
              DashAdapter._logger.debug('The source has been loaded successfully');
              resolve(data);
            }).catch(function (error) {
              reject(error);
              _this2._onError(error);
            });
          }
        });
      }
      return this._loadPromise;
    }

    /**
     * Destroying the dash adapter
     * @function destroy
     * @override
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      DashAdapter._logger.debug('destroy');
      _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), 'destroy', this).call(this);
      this._loadPromise = null;
      this._removeBindings();
      this._shaka.destroy();
    }

    /**
     * Get the parsed tracks
     * @function _getParsedTracks
     * @returns {Array<Track>} - The parsed tracks
     * @private
     */

  }, {
    key: '_getParsedTracks',
    value: function _getParsedTracks() {
      var videoTracks = this._getParsedVideoTracks();
      var audioTracks = this._getParsedAudioTracks();
      var textTracks = this._getParsedTextTracks();
      return videoTracks.concat(audioTracks).concat(textTracks);
    }

    /**
     * Get the parsed video tracks
     * @function _getParsedVideoTracks
     * @returns {Array<VideoTrack>} - The parsed video tracks
     * @private
     */

  }, {
    key: '_getParsedVideoTracks',
    value: function _getParsedVideoTracks() {
      var videoTracks = this._getVideoTracks();
      var parsedTracks = [];
      if (videoTracks) {
        for (var i = 0; i < videoTracks.length; i++) {
          var settings = {
            id: videoTracks[i].id,
            bandwidth: videoTracks[i].bandwidth,
            active: videoTracks[i].active,
            label: videoTracks[i].label,
            index: i
          };
          parsedTracks.push(new _playkitJs.VideoTrack(settings));
        }
      }
      return parsedTracks;
    }
  }, {
    key: '_getVideoTracks',
    value: function _getVideoTracks() {
      var variantTracks = this._shaka.getVariantTracks();
      var activeVariantTrack = variantTracks.filter(function (variantTrack) {
        return variantTrack.active;
      })[0];
      var videoTracks = variantTracks.filter(function (variantTrack) {
        return variantTrack.audioId === activeVariantTrack.audioId;
      });
      return videoTracks;
    }

    /**
     * Get the parsed audio tracks
     * @function _getParsedAudioTracks
     * @returns {Array<AudioTrack>} - The parsed audio tracks
     * @private
     */

  }, {
    key: '_getParsedAudioTracks',
    value: function _getParsedAudioTracks() {
      var variantTracks = this._shaka.getVariantTracks();
      var activeVariantTrack = variantTracks.filter(function (variantTrack) {
        return variantTrack.active;
      })[0];
      var audioTracks = variantTracks.filter(function (variantTrack) {
        return variantTrack.videoId === activeVariantTrack.videoId;
      });
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
          parsedTracks.push(new _playkitJs.AudioTrack(settings));
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

  }, {
    key: '_getParsedTextTracks',
    value: function _getParsedTextTracks() {
      var textTracks = this._shaka.getTextTracks();
      var parsedTracks = [];
      if (textTracks) {
        for (var i = 0; i < textTracks.length; i++) {
          var settings = {
            kind: textTracks[i].kind ? textTracks[i].kind + 's' : "",
            active: textTracks[i].active,
            label: textTracks[i].label,
            language: textTracks[i].language,
            index: i
          };
          parsedTracks.push(new _playkitJs.TextTrack(settings));
        }
      }
      return parsedTracks;
    }

    /**
     * Select a video track
     * @function selectVideoTrack
     * @param {VideoTrack} videoTrack - the video track to select
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectVideoTrack',
    value: function selectVideoTrack(videoTrack) {
      var videoTracks = this._getVideoTracks();
      if (videoTrack instanceof _playkitJs.VideoTrack && videoTracks) {
        var selectedVideoTrack = videoTracks[videoTrack.index];
        if (selectedVideoTrack) {
          this._shaka.configure({ abr: { enabled: false } });
          if (!selectedVideoTrack.active) {
            this._shaka.selectVariantTrack(videoTracks[videoTrack.index], true);
            _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), '_onTrackChanged', this).call(this, videoTrack);
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

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      if (audioTrack instanceof _playkitJs.AudioTrack && !audioTrack.active) {
        this._shaka.selectAudioLanguage(audioTrack.language);
        _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), '_onTrackChanged', this).call(this, audioTrack);
      }
    }

    /**
     * Select a text track
     * @function selectTextTrack
     * @param {TextTrack} textTrack - the track to select
     * @returns {void}
     * @public
     */

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      if (textTrack instanceof _playkitJs.TextTrack && !textTrack.active && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
        this._shaka.selectTextLanguage(textTrack.language);
        _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), '_onTrackChanged', this).call(this, textTrack);
      }
    }

    /**
     * Enables adaptive bitrate switching
     * @function enableAdaptiveBitrate
     * @returns {void}
     * @public
     */

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      this._shaka.configure({ abr: { enabled: true } });
    }

    /**
     * An handler to shaka adaptation event
     * @function _onAdaptation
     * @returns {void}
     * @private
     */

  }, {
    key: '_onAdaptation',
    value: function _onAdaptation() {
      var selectedVideoTrack = this._getParsedVideoTracks().filter(function (videoTrack) {
        return videoTrack.active;
      })[0];
      _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), '_onTrackChanged', this).call(this, selectedVideoTrack);
    }

    /**
     * An handler to shaka error event
     * @function _onError
     * @param {any} error - the error
     * @returns {void}
     * @private
     */

  }, {
    key: '_onError',
    value: function _onError(error) {
      DashAdapter._logger.error(error);
    }

    /**
     * Getter for the src that the adapter plays on the video element.
     * In case the adapter preformed a load it will return the manifest url.
     * @public
     * @returns {string} - The src url.
     */

  }, {
    key: 'src',
    get: function get() {
      if (this._loadPromise && this._sourceObj) {
        return this._sourceObj.url;
      }
      return "";
    }
  }]);

  return DashAdapter;
}(_playkitJs.BaseMediaSourceAdapter);

// Register DashAdapter to the media source adapter manager


DashAdapter._name = 'DashAdapter';
DashAdapter._logger = _playkitJs.BaseMediaSourceAdapter.getLogger(DashAdapter._name);
DashAdapter._dashMimeType = 'application/dash+xml';
exports.default = DashAdapter;
if (DashAdapter.isSupported()) {
  (0, _playkitJs.registerMediaSourceAdapter)(DashAdapter);
}

/***/ })
/******/ ]);
//# sourceMappingURL=playkit-js-dash.js.map