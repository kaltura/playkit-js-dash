(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("playkit-js"), require("shaka-player"));
	else if(typeof define === 'function' && define.amd)
		define(["playkit-js", "shaka-player"], factory);
	else if(typeof exports === 'object')
		exports["PlaykitJsDash"] = factory(require("playkit-js"), require("shaka-player"));
	else
		root["PlaykitJsDash"] = factory(root["Playkit"], root["shaka"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shakaPlayer = __webpack_require__(2);

var _shakaPlayer2 = _interopRequireDefault(_shakaPlayer);

var _playkitJs = __webpack_require__(0);

var _widevine = __webpack_require__(3);

var _widevine2 = _interopRequireDefault(_widevine);

var _playready = __webpack_require__(4);

var _playready2 = _interopRequireDefault(_playready);

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
    key: 'createAdapter',


    /**
     * Factory method to create media source adapter.
     * @function createAdapter
     * @param {HTMLVideoElement} videoElement - The video element that the media source adapter work with.
     * @param {Object} source - The source Object.
     * @param {Object} config - The player configuration.
     * @returns {IMediaSourceAdapter} - New instance of the run time media source adapter.
     * @static
     */

    /**
     * The DRM protocol for the current playback.
     * @type {?Function}
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
     * The id of Adapter
     * @member {string} id
     * @static
     * @public
     */
    value: function createAdapter(videoElement, source, config) {
      var dashConfig = {};
      if (_playkitJs.Utils.Object.hasPropertyPath(config, 'playback.options.html5.dash')) {
        dashConfig = config.playback.options.html5.dash;
      }
      return new this(videoElement, source, dashConfig);
    }

    /**
     * Checks if dash adapter can play a given mime type
     * @function canPlayType
     * @param {string} mimeType - The mime type to check
     * @returns {boolean} - Whether the dash adapter can play a specific mime type
     * @static
     */

    /**
     * The buffering state flag
     * @member {boolean} - _buffering
     * @type {boolean}
     * @private
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
     * The DRM protocols implementations for dash adapter.
     * @type {Array<Function>}
     * @private
     * @static
     */

    /**
     * The adapter logger
     * @member {any} _logger
     * @private
     * @static
     */

  }, {
    key: 'canPlayType',
    value: function canPlayType(mimeType) {
      var canPlayType = typeof mimeType === 'string' ? mimeType.toLowerCase() === DashAdapter._dashMimeType : false;
      DashAdapter._logger.debug('canPlayType result for mimeType: ' + mimeType + ' is ' + canPlayType.toString());
      return canPlayType;
    }

    /**
     * Checks if dash adapter can play a given drm data.
     * @param {Array<Object>} drmData - The drm data to check.
     * @returns {boolean} - Whether the dash adapter can play a specific drm data.
     * @static
     */

  }, {
    key: 'canPlayDrm',
    value: function canPlayDrm(drmData) {
      var canPlayDrm = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = DashAdapter._drmProtocols[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var drmProtocol = _step.value;

          if (drmProtocol.canPlayDrm(drmData)) {
            DashAdapter._drmProtocol = drmProtocol;
            canPlayDrm = true;
            break;
          }
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

      DashAdapter._logger.debug('canPlayDrm result is ' + canPlayDrm.toString(), drmData);
      return canPlayDrm;
    }

    /**
     * Checks if the dash adapter is supported
     * @function isSupported
     * @returns {boolean} -  Whether dash is supported.
     * @static
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
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
      _shakaPlayer2.default.polyfill.installAll();
      var isSupported = _shakaPlayer2.default.Player.isBrowserSupported();
      if (resetVttPolyfill) {
        window.VTTCue = undefined;
      }
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

    _this._buffering = false;
    return _this;
  }

  /**
   * Runs the initialization actions of the dash adapter.
   * @private
   * @returns {void}
   */


  _createClass(DashAdapter, [{
    key: '_init',
    value: function _init() {
      //Need to call this again cause we are uninstalling the VTTCue polyfill to avoid collisions with other libs
      _shakaPlayer2.default.polyfill.installAll();
      this._shaka = new _shakaPlayer2.default.Player(this._videoElement);
      this._maybeSetDrmConfig();
      this._shaka.configure(this._config);
      this._shaka.setTextTrackVisibility(false);
      this._addBindings();
    }

    /**
     * Configure drm for shaka player.
     * @private
     * @returns {void}
     */

  }, {
    key: '_maybeSetDrmConfig',
    value: function _maybeSetDrmConfig() {
      if (DashAdapter._drmProtocol && this._sourceObj && this._sourceObj.drmData) {
        DashAdapter._drmProtocol.setDrmPlayback(this._config, this._sourceObj.drmData);
      }
    }

    /**
     * Add the required bindings to shaka.
     * @function _addBindings
     * @private
     * @returns {void}
     */

  }, {
    key: '_addBindings',
    value: function _addBindings() {
      this._shaka.addEventListener('adaptation', this._onAdaptation.bind(this));
      this._shaka.addEventListener('error', this._onError.bind(this));
      this._shaka.addEventListener('buffering', this._onBuffering.bind(this));
      //TODO use events enum when available
      this._videoElement.addEventListener('playing', this._onPlaying.bind(this));
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
      this._shaka.removeEventListener('buffering', this._onBuffering.bind(this));
      //TODO use events enum when available
      this._videoElement.removeEventListener('playing', this._onPlaying.bind(this));
    }

    /**
     * Load the video source
     * @param {number} startTime - Optional time to start the video from.
     * @function load
     * @override
     */

  }, {
    key: 'load',
    value: function load(startTime) {
      var _this2 = this;

      if (!this._loadPromise) {
        this._init();
        this._loadPromise = new Promise(function (resolve, reject) {
          if (_this2._sourceObj && _this2._sourceObj.url) {
            _this2._trigger(_playkitJs.BaseMediaSourceAdapter.CustomEvents.ABR_MODE_CHANGED, { mode: _this2.isAdaptiveBitrateEnabled() ? 'auto' : 'manual' });
            _this2._shaka.load(_this2._sourceObj.url, startTime).then(function () {
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
     * Destroys the dash adapter
     * @function destroy
     * @override
     * @returns {Promise<*>} - The destroy promise.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      return _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), 'destroy', this).call(this).then(function () {
        DashAdapter._logger.debug('destroy');
        _this3._loadPromise = null;
        _this3._buffering = false;
        if (DashAdapter._drmProtocol) {
          DashAdapter._drmProtocol.destroy();
          DashAdapter._drmProtocol = null;
        }
        if (_this3._shaka) {
          _this3._removeBindings();
          return _this3._shaka.destroy();
        }
      });
    }

    /**
     * Get the original video tracks
     * @function _getVideoTracks
     * @returns {Array<Object>} - The original video tracks
     * @private
     */

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
     * Get the original audio tracks
     * @function _getAudioTracks
     * @returns {Array<Object>} - The original audio tracks
     * @private
     */

  }, {
    key: '_getAudioTracks',
    value: function _getAudioTracks() {
      var variantTracks = this._shaka.getVariantTracks();
      var activeVariantTrack = variantTracks.filter(function (variantTrack) {
        return variantTrack.active;
      })[0];
      var audioTracks = variantTracks.filter(function (variantTrack) {
        return variantTrack.videoId === activeVariantTrack.videoId;
      });
      return audioTracks;
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
      if (this._shaka) {
        var videoTracks = this._getParsedVideoTracks();
        var audioTracks = this._getParsedAudioTracks();
        var textTracks = this._getParsedTextTracks();
        return videoTracks.concat(audioTracks).concat(textTracks);
      }
      return [];
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
            width: videoTracks[i].width,
            height: videoTracks[i].height,
            active: videoTracks[i].active,
            label: videoTracks[i].label,
            index: i
          };
          parsedTracks.push(new _playkitJs.VideoTrack(settings));
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

  }, {
    key: '_getParsedAudioTracks',
    value: function _getParsedAudioTracks() {
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
            active: false,
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
      if (this._shaka) {
        var videoTracks = this._getVideoTracks();
        if (videoTrack instanceof _playkitJs.VideoTrack && videoTracks) {
          var selectedVideoTrack = videoTracks[videoTrack.index];
          if (selectedVideoTrack) {
            if (this.isAdaptiveBitrateEnabled()) {
              this._shaka.configure({ abr: { enabled: false } });
              this._trigger(_playkitJs.BaseMediaSourceAdapter.CustomEvents.ABR_MODE_CHANGED, { mode: 'manual' });
            }
            if (!selectedVideoTrack.active) {
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

  }, {
    key: 'selectAudioTrack',
    value: function selectAudioTrack(audioTrack) {
      if (this._shaka && audioTrack instanceof _playkitJs.AudioTrack && !audioTrack.active) {
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

  }, {
    key: 'selectTextTrack',
    value: function selectTextTrack(textTrack) {
      if (this._shaka && textTrack instanceof _playkitJs.TextTrack && !textTrack.active && (textTrack.kind === 'subtitles' || textTrack.kind === 'captions')) {
        this._shaka.selectTextLanguage(textTrack.language);
        this._shaka.setTextTrackVisibility(false);
        this._onTrackChanged(textTrack);
      }
    }

    /**
     * Hide the text track
     * @function hideTextTrack
     * @returns {void}
     * @public
     */

  }, {
    key: 'hideTextTrack',
    value: function hideTextTrack() {
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

  }, {
    key: 'enableAdaptiveBitrate',
    value: function enableAdaptiveBitrate() {
      if (this._shaka && !this.isAdaptiveBitrateEnabled()) {
        this._trigger(_playkitJs.BaseMediaSourceAdapter.CustomEvents.ABR_MODE_CHANGED, { mode: 'auto' });
        this._shaka.configure({ abr: { enabled: true } });
      }
    }

    /**
     * Checking if adaptive bitrate switching is enabled.
     * @function isAdaptiveBitrateEnabled
     * @returns {boolean} - Whether adaptive bitrate is enabled.
     * @public
     */

  }, {
    key: 'isAdaptiveBitrateEnabled',
    value: function isAdaptiveBitrateEnabled() {
      if (this._shaka) {
        var shakaConfig = this._shaka.getConfiguration();
        return shakaConfig.abr.enabled;
      }
      return false;
    }

    /**
     * Seeking to live edge.
     * @function seekToLiveEdge
     * @returns {void}
     * @public
     */

  }, {
    key: 'seekToLiveEdge',
    value: function seekToLiveEdge() {
      if (this._shaka) {
        this._videoElement.currentTime = this._shaka.seekRange().end;
      }
    }

    /**
     * Checking if the current playback is live.
     * @function isLive
     * @returns {boolean} - Whether playback is live.
     * @public
     */

  }, {
    key: 'isLive',
    value: function isLive() {
      if (this._shaka) {
        return this._shaka.isLive();
      }
      return false;
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
      this._onTrackChanged(selectedVideoTrack);
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
     * An handler to shaka buffering event
     * @function _onBuffering
     * @param {any} event - the buffering event
     * @returns {void}
     * @private
     */

  }, {
    key: '_onBuffering',
    value: function _onBuffering(event) {
      this._buffering = event.buffering;
      if (this._buffering) {
        //the player enters the buffering state.
        //TODO use events enum when available
        this._videoElement.dispatchEvent(new window.Event('waiting'));
      } else if (!this._videoElement.paused) {
        //the player leaves the buffering state.
        this._videoElement.dispatchEvent(new window.Event('playing'));
      }
    }

    /**
     * An handler to HTMLVideoElement playing event
     * @function _onPlaying
     * @returns {void}
     * @private
     */

  }, {
    key: '_onPlaying',
    value: function _onPlaying() {
      if (this._buffering) {
        //the player is in buffering state.
        //TODO use events enum when available
        this._videoElement.dispatchEvent(new window.Event('waiting'));
      }
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

    /**
     * Get the current time in seconds.
     * @returns {Number} - The current playback time.
     * @public
     */

  }, {
    key: 'currentTime',
    get: function get() {
      if (this._shaka && this.isLive()) {
        return this._videoElement.currentTime - this._shaka.seekRange().start;
      } else {
        return _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), 'currentTime', this);
      }
    }

    /**
     * Set the current time in seconds.
     * @param {Number} to - The number to set in seconds.
     * @public
     * @returns {void}
     */
    ,
    set: function set(to) {
      if (this._shaka && this.isLive()) {
        this._videoElement.currentTime = this._shaka.seekRange().start + to;
      } else {
        _set(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), 'currentTime', to, this);
      }
    }

    /**
     * Get the duration in seconds.
     * @returns {Number} - The playback duration.
     * @public
     */

  }, {
    key: 'duration',
    get: function get() {
      if (this._shaka && this.isLive()) {
        var seekRange = this._shaka.seekRange();
        return seekRange.end - seekRange.start;
      } else {
        return _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), 'duration', this);
      }
    }
  }]);

  return DashAdapter;
}(_playkitJs.BaseMediaSourceAdapter);

// Register DashAdapter to the media source adapter manager


DashAdapter.id = 'DashAdapter';
DashAdapter._logger = _playkitJs.BaseMediaSourceAdapter.getLogger(DashAdapter.id);
DashAdapter._dashMimeType = 'application/dash+xml';
DashAdapter._drmProtocols = [_widevine2.default, _playready2.default];
DashAdapter._drmProtocol = null;
exports.default = DashAdapter;
if (DashAdapter.isSupported()) {
  (0, _playkitJs.registerMediaSourceAdapter)(DashAdapter);
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _playkitJs = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrmSupport = _playkitJs.BaseDrmProtocol.DrmSupport;
var DrmScheme = _playkitJs.BaseDrmProtocol.DrmScheme;

var Widevine = function (_BaseDrmProtocol) {
  _inherits(Widevine, _BaseDrmProtocol);

  function Widevine() {
    _classCallCheck(this, Widevine);

    return _possibleConstructorReturn(this, (Widevine.__proto__ || Object.getPrototypeOf(Widevine)).apply(this, arguments));
  }

  _createClass(Widevine, null, [{
    key: 'canPlayDrm',


    /**
     * Widevine playback supports in case 2 conditions are met:
     * 1. The environment supports Widevine playback.
     * 2. The drm data of the source object contains entry with Widevine scheme.
     * @param {Array<Object>} drmData - The drm data to check.
     * @return {boolean} - Whether FairPlay can be play on the current environment.
     */
    value: function canPlayDrm(drmData) {
      Widevine._logger.debug("Can play DRM scheme of: " + DrmScheme.WIDEVINE);
      return DrmSupport.isProtocolSupported(DrmScheme.WIDEVINE, drmData);
    }

    /**
     * Sets the Widevine playback.
     * @param {Object} config - The shaka player config.
     * @param {Array<Object>} drmData - The drm data.
     * @returns {void}
     */

  }, {
    key: 'setDrmPlayback',
    value: function setDrmPlayback(config, drmData) {
      Widevine._logger.debug("Sets drm playback");
      var browser = _playkitJs.Env.browser.name;
      var wwDrmEntry = drmData.find(function (drmEntry) {
        return drmEntry.scheme === DrmScheme.WIDEVINE;
      });
      if (wwDrmEntry) {
        config.drm = {
          servers: _defineProperty({}, DrmScheme.WIDEVINE, wwDrmEntry.licenseUrl),
          advanced: {}
        };
        if (browser === 'Chrome') {
          config.drm.advanced = _defineProperty({}, DrmScheme.WIDEVINE, {
            'videoRobustness': 'SW_SECURE_CRYPTO',
            'audioRobustness': 'SW_SECURE_CRYPTO'
          });
        }
      }
    }
  }]);

  return Widevine;
}(_playkitJs.BaseDrmProtocol);

Widevine._logger = _playkitJs.BaseDrmProtocol.getLogger('Widevine');
exports.default = Widevine;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _playkitJs = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DrmSupport = _playkitJs.BaseDrmProtocol.DrmSupport;
var DrmScheme = _playkitJs.BaseDrmProtocol.DrmScheme;

var PlayReady = function (_BaseDrmProtocol) {
  _inherits(PlayReady, _BaseDrmProtocol);

  function PlayReady() {
    _classCallCheck(this, PlayReady);

    return _possibleConstructorReturn(this, (PlayReady.__proto__ || Object.getPrototypeOf(PlayReady)).apply(this, arguments));
  }

  _createClass(PlayReady, null, [{
    key: 'canPlayDrm',


    /**
     * PlayReady playback supports in case 2 conditions are met:
     * 1. The environment supports PlayReady playback.
     * 2. The drm data of the source object contains entry with PlayReady scheme.
     * @param {Array<Object>} drmData - The drm data to check.
     * @return {boolean} - Whether FairPlay can be play on the current environment.
     */
    value: function canPlayDrm(drmData) {
      PlayReady._logger.debug("Can play DRM scheme of: " + DrmScheme.PLAYREADY);
      return DrmSupport.isProtocolSupported(DrmScheme.PLAYREADY, drmData);
    }

    /**
     * Sets the PlayReady playback.
     * @param {Object} config - The shaka player config.
     * @param {Array<Object>} drmData - The drm data.
     * @returns {void}
     */

  }, {
    key: 'setDrmPlayback',
    value: function setDrmPlayback(config, drmData) {
      PlayReady._logger.debug("Sets drm playback");
      var prDrmEntry = drmData.find(function (drmEntry) {
        return drmEntry.scheme === DrmScheme.PLAYREADY;
      });
      if (prDrmEntry) {
        config.drm = {
          servers: _defineProperty({}, DrmScheme.PLAYREADY, prDrmEntry.licenseUrl)
        };
      }
    }
  }]);

  return PlayReady;
}(_playkitJs.BaseDrmProtocol);

PlayReady._logger = _playkitJs.BaseDrmProtocol.getLogger('PlayReady');
exports.default = PlayReady;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit-dash.js.map