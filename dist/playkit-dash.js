(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("shaka-player"), require("playkit-js"));
	else if(typeof define === 'function' && define.amd)
		define(["shaka-player", "playkit-js"], factory);
	else if(typeof exports === 'object')
		exports["PlaykitJsDash"] = factory(require("shaka-player"), require("playkit-js"));
	else
		root["PlaykitJsDash"] = factory(root["shaka"], root["Playkit"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_mh8k0d0su = function () {
  var path = '/Users/dan.ziv/WebstormProjects/playkit-js-dash/src/dash-adapter.js',
      hash = '31dbc64fc43dd258937f44b58e9168252fd11011',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/dan.ziv/WebstormProjects/playkit-js-dash/src/dash-adapter.js',
    statementMap: {
      '0': {
        start: {
          line: 54,
          column: 22
        },
        end: {
          line: 54,
          column: 113
        }
      },
      '1': {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 112
        }
      },
      '2': {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 56,
          column: 23
        }
      },
      '3': {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 66,
          column: 32
        }
      },
      '4': {
        start: {
          line: 67,
          column: 22
        },
        end: {
          line: 67,
          column: 55
        }
      },
      '5': {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 60
        }
      },
      '6': {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 23
        }
      },
      '7': {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 79,
          column: 90
        }
      },
      '8': {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 40
        }
      },
      '9': {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 81,
          column: 49
        }
      },
      '10': {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 34
        }
      },
      '11': {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 24
        }
      },
      '12': {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 78
        }
      },
      '13': {
        start: {
          line: 94,
          column: 4
        },
        end: {
          line: 94,
          column: 68
        }
      },
      '14': {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 70
        }
      },
      '15': {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 60
        }
      },
      '16': {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 127,
          column: 5
        }
      },
      '17': {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 126,
          column: 9
        }
      },
      '18': {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 125,
          column: 9
        }
      },
      '19': {
        start: {
          line: 117,
          column: 10
        },
        end: {
          line: 124,
          column: 13
        }
      },
      '20': {
        start: {
          line: 118,
          column: 23
        },
        end: {
          line: 118,
          column: 56
        }
      },
      '21': {
        start: {
          line: 119,
          column: 12
        },
        end: {
          line: 119,
          column: 81
        }
      },
      '22': {
        start: {
          line: 120,
          column: 12
        },
        end: {
          line: 120,
          column: 26
        }
      },
      '23': {
        start: {
          line: 122,
          column: 12
        },
        end: {
          line: 122,
          column: 26
        }
      },
      '24': {
        start: {
          line: 123,
          column: 12
        },
        end: {
          line: 123,
          column: 33
        }
      },
      '25': {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 29
        }
      },
      '26': {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 41
        }
      },
      '27': {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 138,
          column: 20
        }
      },
      '28': {
        start: {
          line: 139,
          column: 4
        },
        end: {
          line: 139,
          column: 29
        }
      },
      '29': {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 27
        }
      },
      '30': {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 141,
          column: 26
        }
      },
      '31': {
        start: {
          line: 151,
          column: 24
        },
        end: {
          line: 151,
          column: 54
        }
      },
      '32': {
        start: {
          line: 152,
          column: 29
        },
        end: {
          line: 154,
          column: 9
        }
      },
      '33': {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 153,
          column: 33
        }
      },
      '34': {
        start: {
          line: 155,
          column: 22
        },
        end: {
          line: 157,
          column: 6
        }
      },
      '35': {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 156,
          column: 65
        }
      },
      '36': {
        start: {
          line: 158,
          column: 4
        },
        end: {
          line: 158,
          column: 23
        }
      },
      '37': {
        start: {
          line: 168,
          column: 24
        },
        end: {
          line: 168,
          column: 54
        }
      },
      '38': {
        start: {
          line: 169,
          column: 29
        },
        end: {
          line: 171,
          column: 9
        }
      },
      '39': {
        start: {
          line: 170,
          column: 6
        },
        end: {
          line: 170,
          column: 33
        }
      },
      '40': {
        start: {
          line: 172,
          column: 22
        },
        end: {
          line: 174,
          column: 6
        }
      },
      '41': {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 173,
          column: 65
        }
      },
      '42': {
        start: {
          line: 175,
          column: 4
        },
        end: {
          line: 175,
          column: 23
        }
      },
      '43': {
        start: {
          line: 185,
          column: 22
        },
        end: {
          line: 185,
          column: 50
        }
      },
      '44': {
        start: {
          line: 186,
          column: 22
        },
        end: {
          line: 186,
          column: 50
        }
      },
      '45': {
        start: {
          line: 187,
          column: 21
        },
        end: {
          line: 187,
          column: 48
        }
      },
      '46': {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 188,
          column: 62
        }
      },
      '47': {
        start: {
          line: 198,
          column: 22
        },
        end: {
          line: 198,
          column: 44
        }
      },
      '48': {
        start: {
          line: 199,
          column: 23
        },
        end: {
          line: 199,
          column: 25
        }
      },
      '49': {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 211,
          column: 5
        }
      },
      '50': {
        start: {
          line: 201,
          column: 6
        },
        end: {
          line: 210,
          column: 7
        }
      },
      '51': {
        start: {
          line: 202,
          column: 23
        },
        end: {
          line: 208,
          column: 9
        }
      },
      '52': {
        start: {
          line: 209,
          column: 8
        },
        end: {
          line: 209,
          column: 52
        }
      },
      '53': {
        start: {
          line: 212,
          column: 4
        },
        end: {
          line: 212,
          column: 24
        }
      },
      '54': {
        start: {
          line: 222,
          column: 22
        },
        end: {
          line: 222,
          column: 44
        }
      },
      '55': {
        start: {
          line: 223,
          column: 23
        },
        end: {
          line: 223,
          column: 25
        }
      },
      '56': {
        start: {
          line: 224,
          column: 4
        },
        end: {
          line: 235,
          column: 5
        }
      },
      '57': {
        start: {
          line: 225,
          column: 6
        },
        end: {
          line: 234,
          column: 7
        }
      },
      '58': {
        start: {
          line: 226,
          column: 23
        },
        end: {
          line: 232,
          column: 9
        }
      },
      '59': {
        start: {
          line: 233,
          column: 8
        },
        end: {
          line: 233,
          column: 52
        }
      },
      '60': {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 236,
          column: 24
        }
      },
      '61': {
        start: {
          line: 246,
          column: 21
        },
        end: {
          line: 246,
          column: 48
        }
      },
      '62': {
        start: {
          line: 247,
          column: 23
        },
        end: {
          line: 247,
          column: 25
        }
      },
      '63': {
        start: {
          line: 248,
          column: 4
        },
        end: {
          line: 259,
          column: 5
        }
      },
      '64': {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 258,
          column: 7
        }
      },
      '65': {
        start: {
          line: 250,
          column: 23
        },
        end: {
          line: 256,
          column: 9
        }
      },
      '66': {
        start: {
          line: 257,
          column: 8
        },
        end: {
          line: 257,
          column: 51
        }
      },
      '67': {
        start: {
          line: 260,
          column: 4
        },
        end: {
          line: 260,
          column: 24
        }
      },
      '68': {
        start: {
          line: 271,
          column: 22
        },
        end: {
          line: 271,
          column: 44
        }
      },
      '69': {
        start: {
          line: 272,
          column: 4
        },
        end: {
          line: 281,
          column: 5
        }
      },
      '70': {
        start: {
          line: 273,
          column: 31
        },
        end: {
          line: 273,
          column: 60
        }
      },
      '71': {
        start: {
          line: 274,
          column: 6
        },
        end: {
          line: 280,
          column: 7
        }
      },
      '72': {
        start: {
          line: 275,
          column: 8
        },
        end: {
          line: 275,
          column: 54
        }
      },
      '73': {
        start: {
          line: 276,
          column: 8
        },
        end: {
          line: 279,
          column: 9
        }
      },
      '74': {
        start: {
          line: 277,
          column: 10
        },
        end: {
          line: 277,
          column: 78
        }
      },
      '75': {
        start: {
          line: 278,
          column: 10
        },
        end: {
          line: 278,
          column: 43
        }
      },
      '76': {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 295,
          column: 5
        }
      },
      '77': {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 293,
          column: 59
        }
      },
      '78': {
        start: {
          line: 294,
          column: 6
        },
        end: {
          line: 294,
          column: 39
        }
      },
      '79': {
        start: {
          line: 306,
          column: 4
        },
        end: {
          line: 309,
          column: 5
        }
      },
      '80': {
        start: {
          line: 307,
          column: 6
        },
        end: {
          line: 307,
          column: 57
        }
      },
      '81': {
        start: {
          line: 308,
          column: 6
        },
        end: {
          line: 308,
          column: 38
        }
      },
      '82': {
        start: {
          line: 319,
          column: 4
        },
        end: {
          line: 319,
          column: 49
        }
      },
      '83': {
        start: {
          line: 329,
          column: 29
        },
        end: {
          line: 331,
          column: 9
        }
      },
      '84': {
        start: {
          line: 330,
          column: 6
        },
        end: {
          line: 330,
          column: 31
        }
      },
      '85': {
        start: {
          line: 332,
          column: 4
        },
        end: {
          line: 332,
          column: 45
        }
      },
      '86': {
        start: {
          line: 343,
          column: 4
        },
        end: {
          line: 343,
          column: 37
        }
      },
      '87': {
        start: {
          line: 353,
          column: 4
        },
        end: {
          line: 355,
          column: 5
        }
      },
      '88': {
        start: {
          line: 354,
          column: 6
        },
        end: {
          line: 354,
          column: 33
        }
      },
      '89': {
        start: {
          line: 356,
          column: 4
        },
        end: {
          line: 356,
          column: 14
        }
      },
      '90': {
        start: {
          line: 361,
          column: 0
        },
        end: {
          line: 363,
          column: 1
        }
      },
      '91': {
        start: {
          line: 362,
          column: 2
        },
        end: {
          line: 362,
          column: 42
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 53,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        loc: {
          start: {
            line: 53,
            column: 48
          },
          end: {
            line: 57,
            column: 3
          }
        },
        line: 53
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 65,
            column: 2
          },
          end: {
            line: 65,
            column: 3
          }
        },
        loc: {
          start: {
            line: 65,
            column: 32
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 65
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 83
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 78
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 92,
            column: 2
          },
          end: {
            line: 92,
            column: 3
          }
        },
        loc: {
          start: {
            line: 92,
            column: 23
          },
          end: {
            line: 95,
            column: 3
          }
        },
        line: 92
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 103,
            column: 3
          }
        },
        loc: {
          start: {
            line: 103,
            column: 26
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 103
      },
      '5': {
        name: '(anonymous_5)',
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 26
          },
          end: {
            line: 129,
            column: 3
          }
        },
        line: 113
      },
      '6': {
        name: '(anonymous_6)',
        decl: {
          start: {
            line: 115,
            column: 38
          },
          end: {
            line: 115,
            column: 39
          }
        },
        loc: {
          start: {
            line: 115,
            column: 59
          },
          end: {
            line: 126,
            column: 7
          }
        },
        line: 115
      },
      '7': {
        name: '(anonymous_7)',
        decl: {
          start: {
            line: 117,
            column: 53
          },
          end: {
            line: 117,
            column: 54
          }
        },
        loc: {
          start: {
            line: 117,
            column: 59
          },
          end: {
            line: 121,
            column: 11
          }
        },
        line: 117
      },
      '8': {
        name: '(anonymous_8)',
        decl: {
          start: {
            line: 121,
            column: 19
          },
          end: {
            line: 121,
            column: 20
          }
        },
        loc: {
          start: {
            line: 121,
            column: 30
          },
          end: {
            line: 124,
            column: 11
          }
        },
        line: 121
      },
      '9': {
        name: '(anonymous_9)',
        decl: {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 3
          }
        },
        loc: {
          start: {
            line: 136,
            column: 18
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 136
      },
      '10': {
        name: '(anonymous_10)',
        decl: {
          start: {
            line: 150,
            column: 2
          },
          end: {
            line: 150,
            column: 3
          }
        },
        loc: {
          start: {
            line: 150,
            column: 35
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 150
      },
      '11': {
        name: '(anonymous_11)',
        decl: {
          start: {
            line: 152,
            column: 50
          },
          end: {
            line: 152,
            column: 51
          }
        },
        loc: {
          start: {
            line: 152,
            column: 68
          },
          end: {
            line: 154,
            column: 5
          }
        },
        line: 152
      },
      '12': {
        name: '(anonymous_12)',
        decl: {
          start: {
            line: 155,
            column: 43
          },
          end: {
            line: 155,
            column: 44
          }
        },
        loc: {
          start: {
            line: 155,
            column: 61
          },
          end: {
            line: 157,
            column: 5
          }
        },
        line: 155
      },
      '13': {
        name: '(anonymous_13)',
        decl: {
          start: {
            line: 167,
            column: 2
          },
          end: {
            line: 167,
            column: 3
          }
        },
        loc: {
          start: {
            line: 167,
            column: 35
          },
          end: {
            line: 176,
            column: 3
          }
        },
        line: 167
      },
      '14': {
        name: '(anonymous_14)',
        decl: {
          start: {
            line: 169,
            column: 50
          },
          end: {
            line: 169,
            column: 51
          }
        },
        loc: {
          start: {
            line: 169,
            column: 68
          },
          end: {
            line: 171,
            column: 5
          }
        },
        line: 169
      },
      '15': {
        name: '(anonymous_15)',
        decl: {
          start: {
            line: 172,
            column: 43
          },
          end: {
            line: 172,
            column: 44
          }
        },
        loc: {
          start: {
            line: 172,
            column: 61
          },
          end: {
            line: 174,
            column: 5
          }
        },
        line: 172
      },
      '16': {
        name: '(anonymous_16)',
        decl: {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 184,
            column: 3
          }
        },
        loc: {
          start: {
            line: 184,
            column: 35
          },
          end: {
            line: 189,
            column: 3
          }
        },
        line: 184
      },
      '17': {
        name: '(anonymous_17)',
        decl: {
          start: {
            line: 197,
            column: 2
          },
          end: {
            line: 197,
            column: 3
          }
        },
        loc: {
          start: {
            line: 197,
            column: 45
          },
          end: {
            line: 213,
            column: 3
          }
        },
        line: 197
      },
      '18': {
        name: '(anonymous_18)',
        decl: {
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 221,
            column: 3
          }
        },
        loc: {
          start: {
            line: 221,
            column: 45
          },
          end: {
            line: 237,
            column: 3
          }
        },
        line: 221
      },
      '19': {
        name: '(anonymous_19)',
        decl: {
          start: {
            line: 245,
            column: 2
          },
          end: {
            line: 245,
            column: 3
          }
        },
        loc: {
          start: {
            line: 245,
            column: 43
          },
          end: {
            line: 261,
            column: 3
          }
        },
        line: 245
      },
      '20': {
        name: '(anonymous_20)',
        decl: {
          start: {
            line: 270,
            column: 2
          },
          end: {
            line: 270,
            column: 3
          }
        },
        loc: {
          start: {
            line: 270,
            column: 49
          },
          end: {
            line: 282,
            column: 3
          }
        },
        line: 270
      },
      '21': {
        name: '(anonymous_21)',
        decl: {
          start: {
            line: 291,
            column: 2
          },
          end: {
            line: 291,
            column: 3
          }
        },
        loc: {
          start: {
            line: 291,
            column: 49
          },
          end: {
            line: 296,
            column: 3
          }
        },
        line: 291
      },
      '22': {
        name: '(anonymous_22)',
        decl: {
          start: {
            line: 305,
            column: 2
          },
          end: {
            line: 305,
            column: 3
          }
        },
        loc: {
          start: {
            line: 305,
            column: 46
          },
          end: {
            line: 310,
            column: 3
          }
        },
        line: 305
      },
      '23': {
        name: '(anonymous_23)',
        decl: {
          start: {
            line: 318,
            column: 2
          },
          end: {
            line: 318,
            column: 3
          }
        },
        loc: {
          start: {
            line: 318,
            column: 32
          },
          end: {
            line: 320,
            column: 3
          }
        },
        line: 318
      },
      '24': {
        name: '(anonymous_24)',
        decl: {
          start: {
            line: 328,
            column: 2
          },
          end: {
            line: 328,
            column: 3
          }
        },
        loc: {
          start: {
            line: 328,
            column: 24
          },
          end: {
            line: 333,
            column: 3
          }
        },
        line: 328
      },
      '25': {
        name: '(anonymous_25)',
        decl: {
          start: {
            line: 329,
            column: 65
          },
          end: {
            line: 329,
            column: 66
          }
        },
        loc: {
          start: {
            line: 329,
            column: 87
          },
          end: {
            line: 331,
            column: 5
          }
        },
        line: 329
      },
      '26': {
        name: '(anonymous_26)',
        decl: {
          start: {
            line: 342,
            column: 2
          },
          end: {
            line: 342,
            column: 3
          }
        },
        loc: {
          start: {
            line: 342,
            column: 29
          },
          end: {
            line: 344,
            column: 3
          }
        },
        line: 342
      },
      '27': {
        name: '(anonymous_27)',
        decl: {
          start: {
            line: 352,
            column: 2
          },
          end: {
            line: 352,
            column: 3
          }
        },
        loc: {
          start: {
            line: 352,
            column: 20
          },
          end: {
            line: 357,
            column: 3
          }
        },
        line: 352
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 54,
            column: 22
          },
          end: {
            line: 54,
            column: 113
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 54,
            column: 53
          },
          end: {
            line: 54,
            column: 105
          }
        }, {
          start: {
            line: 54,
            column: 108
          },
          end: {
            line: 54,
            column: 113
          }
        }],
        line: 54
      },
      '1': {
        loc: {
          start: {
            line: 78,
            column: 62
          },
          end: {
            line: 78,
            column: 81
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 78,
            column: 79
          },
          end: {
            line: 78,
            column: 81
          }
        }],
        line: 78
      },
      '2': {
        loc: {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        }, {
          start: {
            line: 114,
            column: 4
          },
          end: {
            line: 127,
            column: 5
          }
        }],
        line: 114
      },
      '3': {
        loc: {
          start: {
            line: 116,
            column: 8
          },
          end: {
            line: 125,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 116,
            column: 8
          },
          end: {
            line: 125,
            column: 9
          }
        }, {
          start: {
            line: 116,
            column: 8
          },
          end: {
            line: 125,
            column: 9
          }
        }],
        line: 116
      },
      '4': {
        loc: {
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 116,
            column: 50
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 116,
            column: 12
          },
          end: {
            line: 116,
            column: 27
          }
        }, {
          start: {
            line: 116,
            column: 31
          },
          end: {
            line: 116,
            column: 50
          }
        }],
        line: 116
      },
      '5': {
        loc: {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        }, {
          start: {
            line: 200,
            column: 4
          },
          end: {
            line: 211,
            column: 5
          }
        }],
        line: 200
      },
      '6': {
        loc: {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        }, {
          start: {
            line: 224,
            column: 4
          },
          end: {
            line: 235,
            column: 5
          }
        }],
        line: 224
      },
      '7': {
        loc: {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 259,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 259,
            column: 5
          }
        }, {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 259,
            column: 5
          }
        }],
        line: 248
      },
      '8': {
        loc: {
          start: {
            line: 251,
            column: 16
          },
          end: {
            line: 251,
            column: 66
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 251,
            column: 37
          },
          end: {
            line: 251,
            column: 61
          }
        }, {
          start: {
            line: 251,
            column: 64
          },
          end: {
            line: 251,
            column: 66
          }
        }],
        line: 251
      },
      '9': {
        loc: {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        }, {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 281,
            column: 5
          }
        }],
        line: 272
      },
      '10': {
        loc: {
          start: {
            line: 272,
            column: 8
          },
          end: {
            line: 272,
            column: 57
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 272,
            column: 9
          },
          end: {
            line: 272,
            column: 41
          }
        }, {
          start: {
            line: 272,
            column: 46
          },
          end: {
            line: 272,
            column: 57
          }
        }],
        line: 272
      },
      '11': {
        loc: {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 280,
            column: 7
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 280,
            column: 7
          }
        }, {
          start: {
            line: 274,
            column: 6
          },
          end: {
            line: 280,
            column: 7
          }
        }],
        line: 274
      },
      '12': {
        loc: {
          start: {
            line: 276,
            column: 8
          },
          end: {
            line: 279,
            column: 9
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 276,
            column: 8
          },
          end: {
            line: 279,
            column: 9
          }
        }, {
          start: {
            line: 276,
            column: 8
          },
          end: {
            line: 279,
            column: 9
          }
        }],
        line: 276
      },
      '13': {
        loc: {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 295,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 295,
            column: 5
          }
        }, {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 295,
            column: 5
          }
        }],
        line: 292
      },
      '14': {
        loc: {
          start: {
            line: 292,
            column: 8
          },
          end: {
            line: 292,
            column: 64
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 292,
            column: 9
          },
          end: {
            line: 292,
            column: 41
          }
        }, {
          start: {
            line: 292,
            column: 46
          },
          end: {
            line: 292,
            column: 64
          }
        }],
        line: 292
      },
      '15': {
        loc: {
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 309,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 309,
            column: 5
          }
        }, {
          start: {
            line: 306,
            column: 4
          },
          end: {
            line: 309,
            column: 5
          }
        }],
        line: 306
      },
      '16': {
        loc: {
          start: {
            line: 306,
            column: 8
          },
          end: {
            line: 306,
            column: 130
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 306,
            column: 9
          },
          end: {
            line: 306,
            column: 39
          }
        }, {
          start: {
            line: 306,
            column: 44
          },
          end: {
            line: 306,
            column: 61
          }
        }, {
          start: {
            line: 306,
            column: 66
          },
          end: {
            line: 306,
            column: 96
          }
        }, {
          start: {
            line: 306,
            column: 100
          },
          end: {
            line: 306,
            column: 129
          }
        }],
        line: 306
      },
      '17': {
        loc: {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 355,
            column: 5
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 355,
            column: 5
          }
        }, {
          start: {
            line: 353,
            column: 4
          },
          end: {
            line: 355,
            column: 5
          }
        }],
        line: 353
      },
      '18': {
        loc: {
          start: {
            line: 353,
            column: 8
          },
          end: {
            line: 353,
            column: 44
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 353,
            column: 8
          },
          end: {
            line: 353,
            column: 25
          }
        }, {
          start: {
            line: 353,
            column: 29
          },
          end: {
            line: 353,
            column: 44
          }
        }],
        line: 353
      },
      '19': {
        loc: {
          start: {
            line: 361,
            column: 0
          },
          end: {
            line: 363,
            column: 1
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 361,
            column: 0
          },
          end: {
            line: 363,
            column: 1
          }
        }, {
          start: {
            line: 361,
            column: 0
          },
          end: {
            line: 363,
            column: 1
          }
        }],
        line: 361
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0,
      '28': 0,
      '29': 0,
      '30': 0,
      '31': 0,
      '32': 0,
      '33': 0,
      '34': 0,
      '35': 0,
      '36': 0,
      '37': 0,
      '38': 0,
      '39': 0,
      '40': 0,
      '41': 0,
      '42': 0,
      '43': 0,
      '44': 0,
      '45': 0,
      '46': 0,
      '47': 0,
      '48': 0,
      '49': 0,
      '50': 0,
      '51': 0,
      '52': 0,
      '53': 0,
      '54': 0,
      '55': 0,
      '56': 0,
      '57': 0,
      '58': 0,
      '59': 0,
      '60': 0,
      '61': 0,
      '62': 0,
      '63': 0,
      '64': 0,
      '65': 0,
      '66': 0,
      '67': 0,
      '68': 0,
      '69': 0,
      '70': 0,
      '71': 0,
      '72': 0,
      '73': 0,
      '74': 0,
      '75': 0,
      '76': 0,
      '77': 0,
      '78': 0,
      '79': 0,
      '80': 0,
      '81': 0,
      '82': 0,
      '83': 0,
      '84': 0,
      '85': 0,
      '86': 0,
      '87': 0,
      '88': 0,
      '89': 0,
      '90': 0,
      '91': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
      '13': 0,
      '14': 0,
      '15': 0,
      '16': 0,
      '17': 0,
      '18': 0,
      '19': 0,
      '20': 0,
      '21': 0,
      '22': 0,
      '23': 0,
      '24': 0,
      '25': 0,
      '26': 0,
      '27': 0
    },
    b: {
      '0': [0, 0],
      '1': [0],
      '2': [0, 0],
      '3': [0, 0],
      '4': [0, 0],
      '5': [0, 0],
      '6': [0, 0],
      '7': [0, 0],
      '8': [0, 0],
      '9': [0, 0],
      '10': [0, 0],
      '11': [0, 0],
      '12': [0, 0],
      '13': [0, 0],
      '14': [0, 0],
      '15': [0, 0],
      '16': [0, 0, 0, 0],
      '17': [0, 0],
      '18': [0, 0],
      '19': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _shakaPlayer = __webpack_require__(1);

var _shakaPlayer2 = _interopRequireDefault(_shakaPlayer);

var _playkitJs = __webpack_require__(2);

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
      ++cov_mh8k0d0su.f[0];

      var canPlayType = (++cov_mh8k0d0su.s[0], typeof mimeType === 'string' ? (++cov_mh8k0d0su.b[0][0], mimeType.toLowerCase() === DashAdapter._dashMimeType) : (++cov_mh8k0d0su.b[0][1], false));
      ++cov_mh8k0d0su.s[1];
      DashAdapter._logger.debug('canPlayType result for mimeType: ' + mimeType + ' is ' + canPlayType.toString());
      ++cov_mh8k0d0su.s[2];
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
     * The id of Adapter
     * @member {string} id
     * @static
     * @public
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      ++cov_mh8k0d0su.f[1];
      ++cov_mh8k0d0su.s[3];

      _shakaPlayer2.default.polyfill.installAll();
      var isSupported = (++cov_mh8k0d0su.s[4], _shakaPlayer2.default.Player.isBrowserSupported());
      ++cov_mh8k0d0su.s[5];
      DashAdapter._logger.debug('isSupported:' + isSupported);
      ++cov_mh8k0d0su.s[6];
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
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (++cov_mh8k0d0su.b[1][0], {});

    _classCallCheck(this, DashAdapter);

    ++cov_mh8k0d0su.f[2];
    ++cov_mh8k0d0su.s[7];

    DashAdapter._logger.debug('Creating adapter. Shaka version: ' + _shakaPlayer2.default.Player.version);
    ++cov_mh8k0d0su.s[8];

    var _this = _possibleConstructorReturn(this, (DashAdapter.__proto__ || Object.getPrototypeOf(DashAdapter)).call(this, videoElement, source, config));

    ++cov_mh8k0d0su.s[9];

    _this._shaka = new _shakaPlayer2.default.Player(videoElement);
    ++cov_mh8k0d0su.s[10];
    _this._shaka.configure(config);
    ++cov_mh8k0d0su.s[11];
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
      ++cov_mh8k0d0su.f[3];
      ++cov_mh8k0d0su.s[12];

      this._shaka.addEventListener('adaptation', this._onAdaptation.bind(this));
      ++cov_mh8k0d0su.s[13];
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
      ++cov_mh8k0d0su.f[4];
      ++cov_mh8k0d0su.s[14];

      this._shaka.removeEventListener('adaptation', this._onAdaptation);
      ++cov_mh8k0d0su.s[15];
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

      ++cov_mh8k0d0su.f[5];
      ++cov_mh8k0d0su.s[16];

      if (!this._loadPromise) {
        ++cov_mh8k0d0su.b[2][0];
        ++cov_mh8k0d0su.s[17];

        this._loadPromise = new Promise(function (resolve, reject) {
          ++cov_mh8k0d0su.f[6];
          ++cov_mh8k0d0su.s[18];

          if ((++cov_mh8k0d0su.b[4][0], _this2._sourceObj) && (++cov_mh8k0d0su.b[4][1], _this2._sourceObj.url)) {
            ++cov_mh8k0d0su.b[3][0];
            ++cov_mh8k0d0su.s[19];

            _this2._shaka.load(_this2._sourceObj.url).then(function () {
              ++cov_mh8k0d0su.f[7];

              var data = (++cov_mh8k0d0su.s[20], { tracks: _this2._getParsedTracks() });
              ++cov_mh8k0d0su.s[21];
              DashAdapter._logger.debug('The source has been loaded successfully');
              ++cov_mh8k0d0su.s[22];
              resolve(data);
            }).catch(function (error) {
              ++cov_mh8k0d0su.f[8];
              ++cov_mh8k0d0su.s[23];

              reject(error);
              ++cov_mh8k0d0su.s[24];
              _this2._onError(error);
            });
          } else {
            ++cov_mh8k0d0su.b[3][1];
          }
        });
      } else {
        ++cov_mh8k0d0su.b[2][1];
      }
      ++cov_mh8k0d0su.s[25];
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
      ++cov_mh8k0d0su.f[9];
      ++cov_mh8k0d0su.s[26];

      DashAdapter._logger.debug('destroy');
      ++cov_mh8k0d0su.s[27];
      _get(DashAdapter.prototype.__proto__ || Object.getPrototypeOf(DashAdapter.prototype), 'destroy', this).call(this);
      ++cov_mh8k0d0su.s[28];
      this._loadPromise = null;
      ++cov_mh8k0d0su.s[29];
      this._removeBindings();
      ++cov_mh8k0d0su.s[30];
      this._shaka.destroy();
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
      ++cov_mh8k0d0su.f[10];

      var variantTracks = (++cov_mh8k0d0su.s[31], this._shaka.getVariantTracks());
      var activeVariantTrack = (++cov_mh8k0d0su.s[32], variantTracks.filter(function (variantTrack) {
        ++cov_mh8k0d0su.f[11];
        ++cov_mh8k0d0su.s[33];

        return variantTrack.active;
      })[0]);
      var videoTracks = (++cov_mh8k0d0su.s[34], variantTracks.filter(function (variantTrack) {
        ++cov_mh8k0d0su.f[12];
        ++cov_mh8k0d0su.s[35];

        return variantTrack.audioId === activeVariantTrack.audioId;
      }));
      ++cov_mh8k0d0su.s[36];
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
      ++cov_mh8k0d0su.f[13];

      var variantTracks = (++cov_mh8k0d0su.s[37], this._shaka.getVariantTracks());
      var activeVariantTrack = (++cov_mh8k0d0su.s[38], variantTracks.filter(function (variantTrack) {
        ++cov_mh8k0d0su.f[14];
        ++cov_mh8k0d0su.s[39];

        return variantTrack.active;
      })[0]);
      var audioTracks = (++cov_mh8k0d0su.s[40], variantTracks.filter(function (variantTrack) {
        ++cov_mh8k0d0su.f[15];
        ++cov_mh8k0d0su.s[41];

        return variantTrack.videoId === activeVariantTrack.videoId;
      }));
      ++cov_mh8k0d0su.s[42];
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
      ++cov_mh8k0d0su.f[16];

      var videoTracks = (++cov_mh8k0d0su.s[43], this._getParsedVideoTracks());
      var audioTracks = (++cov_mh8k0d0su.s[44], this._getParsedAudioTracks());
      var textTracks = (++cov_mh8k0d0su.s[45], this._getParsedTextTracks());
      ++cov_mh8k0d0su.s[46];
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
      ++cov_mh8k0d0su.f[17];

      var videoTracks = (++cov_mh8k0d0su.s[47], this._getVideoTracks());
      var parsedTracks = (++cov_mh8k0d0su.s[48], []);
      ++cov_mh8k0d0su.s[49];
      if (videoTracks) {
        ++cov_mh8k0d0su.b[5][0];
        ++cov_mh8k0d0su.s[50];

        for (var i = 0; i < videoTracks.length; i++) {
          var settings = (++cov_mh8k0d0su.s[51], {
            id: videoTracks[i].id,
            bandwidth: videoTracks[i].bandwidth,
            active: videoTracks[i].active,
            label: videoTracks[i].label,
            index: i
          });
          ++cov_mh8k0d0su.s[52];
          parsedTracks.push(new _playkitJs.VideoTrack(settings));
        }
      } else {
        ++cov_mh8k0d0su.b[5][1];
      }
      ++cov_mh8k0d0su.s[53];
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
      ++cov_mh8k0d0su.f[18];

      var audioTracks = (++cov_mh8k0d0su.s[54], this._getAudioTracks());
      var parsedTracks = (++cov_mh8k0d0su.s[55], []);
      ++cov_mh8k0d0su.s[56];
      if (audioTracks) {
        ++cov_mh8k0d0su.b[6][0];
        ++cov_mh8k0d0su.s[57];

        for (var i = 0; i < audioTracks.length; i++) {
          var settings = (++cov_mh8k0d0su.s[58], {
            id: audioTracks[i].id,
            active: audioTracks[i].active,
            label: audioTracks[i].label,
            language: audioTracks[i].language,
            index: i
          });
          ++cov_mh8k0d0su.s[59];
          parsedTracks.push(new _playkitJs.AudioTrack(settings));
        }
      } else {
        ++cov_mh8k0d0su.b[6][1];
      }
      ++cov_mh8k0d0su.s[60];
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
      ++cov_mh8k0d0su.f[19];

      var textTracks = (++cov_mh8k0d0su.s[61], this._shaka.getTextTracks());
      var parsedTracks = (++cov_mh8k0d0su.s[62], []);
      ++cov_mh8k0d0su.s[63];
      if (textTracks) {
        ++cov_mh8k0d0su.b[7][0];
        ++cov_mh8k0d0su.s[64];

        for (var i = 0; i < textTracks.length; i++) {
          var settings = (++cov_mh8k0d0su.s[65], {
            kind: textTracks[i].kind ? (++cov_mh8k0d0su.b[8][0], textTracks[i].kind + 's') : (++cov_mh8k0d0su.b[8][1], ""),
            active: textTracks[i].active,
            label: textTracks[i].label,
            language: textTracks[i].language,
            index: i
          });
          ++cov_mh8k0d0su.s[66];
          parsedTracks.push(new _playkitJs.TextTrack(settings));
        }
      } else {
        ++cov_mh8k0d0su.b[7][1];
      }
      ++cov_mh8k0d0su.s[67];
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
      ++cov_mh8k0d0su.f[20];

      var videoTracks = (++cov_mh8k0d0su.s[68], this._getVideoTracks());
      ++cov_mh8k0d0su.s[69];
      if ((++cov_mh8k0d0su.b[10][0], videoTrack instanceof _playkitJs.VideoTrack) && (++cov_mh8k0d0su.b[10][1], videoTracks)) {
        ++cov_mh8k0d0su.b[9][0];

        var selectedVideoTrack = (++cov_mh8k0d0su.s[70], videoTracks[videoTrack.index]);
        ++cov_mh8k0d0su.s[71];
        if (selectedVideoTrack) {
          ++cov_mh8k0d0su.b[11][0];
          ++cov_mh8k0d0su.s[72];

          this._shaka.configure({ abr: { enabled: false } });
          ++cov_mh8k0d0su.s[73];
          if (!selectedVideoTrack.active) {
            ++cov_mh8k0d0su.b[12][0];
            ++cov_mh8k0d0su.s[74];

            this._shaka.selectVariantTrack(videoTracks[videoTrack.index], true);
            ++cov_mh8k0d0su.s[75];
            this._onTrackChanged(videoTrack);
          } else {
            ++cov_mh8k0d0su.b[12][1];
          }
        } else {
          ++cov_mh8k0d0su.b[11][1];
        }
      } else {
        ++cov_mh8k0d0su.b[9][1];
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
      ++cov_mh8k0d0su.f[21];
      ++cov_mh8k0d0su.s[76];

      if ((++cov_mh8k0d0su.b[14][0], audioTrack instanceof _playkitJs.AudioTrack) && (++cov_mh8k0d0su.b[14][1], !audioTrack.active)) {
        ++cov_mh8k0d0su.b[13][0];
        ++cov_mh8k0d0su.s[77];

        this._shaka.selectAudioLanguage(audioTrack.language);
        ++cov_mh8k0d0su.s[78];
        this._onTrackChanged(audioTrack);
      } else {
        ++cov_mh8k0d0su.b[13][1];
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
      ++cov_mh8k0d0su.f[22];
      ++cov_mh8k0d0su.s[79];

      if ((++cov_mh8k0d0su.b[16][0], textTrack instanceof _playkitJs.TextTrack) && (++cov_mh8k0d0su.b[16][1], !textTrack.active) && ((++cov_mh8k0d0su.b[16][2], textTrack.kind === 'subtitles') || (++cov_mh8k0d0su.b[16][3], textTrack.kind === 'captions'))) {
        ++cov_mh8k0d0su.b[15][0];
        ++cov_mh8k0d0su.s[80];

        this._shaka.selectTextLanguage(textTrack.language);
        ++cov_mh8k0d0su.s[81];
        this._onTrackChanged(textTrack);
      } else {
        ++cov_mh8k0d0su.b[15][1];
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
      ++cov_mh8k0d0su.f[23];
      ++cov_mh8k0d0su.s[82];

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
      ++cov_mh8k0d0su.f[24];

      var selectedVideoTrack = (++cov_mh8k0d0su.s[83], this._getParsedVideoTracks().filter(function (videoTrack) {
        ++cov_mh8k0d0su.f[25];
        ++cov_mh8k0d0su.s[84];

        return videoTrack.active;
      })[0]);
      ++cov_mh8k0d0su.s[85];
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
      ++cov_mh8k0d0su.f[26];
      ++cov_mh8k0d0su.s[86];

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
      ++cov_mh8k0d0su.f[27];
      ++cov_mh8k0d0su.s[87];

      if ((++cov_mh8k0d0su.b[18][0], this._loadPromise) && (++cov_mh8k0d0su.b[18][1], this._sourceObj)) {
        ++cov_mh8k0d0su.b[17][0];
        ++cov_mh8k0d0su.s[88];

        return this._sourceObj.url;
      } else {
        ++cov_mh8k0d0su.b[17][1];
      }
      ++cov_mh8k0d0su.s[89];
      return "";
    }
  }]);

  return DashAdapter;
}(_playkitJs.BaseMediaSourceAdapter);

// Register DashAdapter to the media source adapter manager


DashAdapter.id = 'DashAdapter';
DashAdapter._logger = _playkitJs.BaseMediaSourceAdapter.getLogger(DashAdapter.id);
DashAdapter._dashMimeType = 'application/dash+xml';
exports.default = DashAdapter;
++cov_mh8k0d0su.s[90];
if (DashAdapter.isSupported()) {
  ++cov_mh8k0d0su.b[19][0];
  ++cov_mh8k0d0su.s[91];

  (0, _playkitJs.registerMediaSourceAdapter)(DashAdapter);
} else {
  ++cov_mh8k0d0su.b[19][1];
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=playkit-dash.js.map