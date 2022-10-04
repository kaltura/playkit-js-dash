# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.31.1](https://github.com/kaltura/playkit-js-dash/compare/v1.31.0...v1.31.1) (2022-10-03)


### Bug Fixes

* **FEC-11697:** 2 captions are selected in the menu ([#182](https://github.com/kaltura/playkit-js-dash/issues/182)) ([9964cf0](https://github.com/kaltura/playkit-js-dash/commit/9964cf0)), closes [kaltura/playkit-js#633](https://github.com/kaltura/playkit-js-dash/issues/633) [kaltura/playkit-js-hls#161](https://github.com/kaltura/playkit-js-dash/issues/161) [kaltura/playkit-js#633](https://github.com/kaltura/playkit-js-dash/issues/633)
* **FEC-12189:** Stream doesn't start if open a program with a bookmark ([#211](https://github.com/kaltura/playkit-js-dash/issues/211)) ([9d300bc](https://github.com/kaltura/playkit-js-dash/commit/9d300bc)), closes [kaltura/playkit-js#652](https://github.com/kaltura/playkit-js-dash/issues/652)
* **FEC-12539:** Shaka text displayer font size too small on TVs - Regression ([#210](https://github.com/kaltura/playkit-js-dash/issues/210)) ([1041b0a](https://github.com/kaltura/playkit-js-dash/commit/1041b0a))
* **FEC-12539:** Shaka text displayer font size too small on TVs ([#205](https://github.com/kaltura/playkit-js-dash/issues/205)) ([eaa0949](https://github.com/kaltura/playkit-js-dash/commit/eaa0949))
* **FEC-12539:** Shaka text displayer font size too small on TVs ([#208](https://github.com/kaltura/playkit-js-dash/issues/208)) ([f224a1e](https://github.com/kaltura/playkit-js-dash/commit/f224a1e))
* **FEC-12622:** Revert - TV font size bug fixes - regression ([#214](https://github.com/kaltura/playkit-js-dash/issues/214)) ([1ef471b](https://github.com/kaltura/playkit-js-dash/commit/1ef471b)), closes [#208](https://github.com/kaltura/playkit-js-dash/issues/208) [#210](https://github.com/kaltura/playkit-js-dash/issues/210) [#205](https://github.com/kaltura/playkit-js-dash/issues/205)



## [1.31.0](https://github.com/kaltura/playkit-js-dash/compare/v1.30.3...v1.31.0) (2022-08-31)


### Bug Fixes

* **FEC-12238:** [WEB][ShakaPlayer] - upgrade shaka player to v4.1.2 ([#202](https://github.com/kaltura/playkit-js-dash/issues/202)) ([05ea5c2](https://github.com/kaltura/playkit-js-dash/commit/05ea5c2))
* **FEC-12479:** [Dash] - Subtitles are too small and not centered ([#204](https://github.com/kaltura/playkit-js-dash/issues/204)) ([f7676d9](https://github.com/kaltura/playkit-js-dash/commit/f7676d9))


### Features

* **FEC-12450:** build image uri based on redirected uri ([#201](https://github.com/kaltura/playkit-js-dash/issues/201)) ([8916fb9](https://github.com/kaltura/playkit-js-dash/commit/8916fb9))



### [1.30.3](https://github.com/kaltura/playkit-js-dash/compare/v1.30.2...v1.30.3) (2022-08-04)



### [1.30.2](https://github.com/kaltura/playkit-js-dash/compare/v1.30.1...v1.30.2) (2022-07-06)


### Bug Fixes

* **FEC-12089:** Tizen playback breaks after ad finishes ([f30030a](https://github.com/kaltura/playkit-js-dash/commit/f30030a))
* **FEC-12189:** Stream doesn't start if open a program with a bookmark ([#194](https://github.com/kaltura/playkit-js-dash/issues/194)) ([305e772](https://github.com/kaltura/playkit-js-dash/commit/305e772))


### Build System

* set prerelease false ([6525241](https://github.com/kaltura/playkit-js-dash/commit/6525241))



### [1.30.1](https://github.com/kaltura/playkit-js-dash/compare/v1.30.0...v1.30.1) (2022-05-12)


### Bug Fixes

* do not remove shaka event bindings on reset but in destroy ([#189](https://github.com/kaltura/playkit-js-dash/issues/189)) ([1378ba2](https://github.com/kaltura/playkit-js-dash/commit/1378ba2))


### Build System

* use node_js 17 in travis ([a93b4c8](https://github.com/kaltura/playkit-js-dash/commit/a93b4c8))



## [1.30.0](https://github.com/kaltura/playkit-js-dash/compare/v1.29.0...v1.30.0) (2022-02-16)


### Bug Fixes

* **FEC-11785:** [Web][Youbora] - update youbora options for drm system that is used by the player ([#175](https://github.com/kaltura/playkit-js-dash/issues/175)) ([0923634](https://github.com/kaltura/playkit-js-dash/commit/0923634)), closes [kaltura/kaltura-player-js#515](https://github.com/kaltura/playkit-js-dash/issues/515) [kaltura/playkit-js#624](https://github.com/kaltura/playkit-js-dash/issues/624) [kaltura/playkit-js-youbora#82](https://github.com/kaltura/playkit-js-dash/issues/82)
* **FEC-11937:** Player Compatible with Metrological Platform / Horizon4 Platform? ([#181](https://github.com/kaltura/playkit-js-dash/issues/181)) ([aec16a4](https://github.com/kaltura/playkit-js-dash/commit/aec16a4))


### Features

* **FEC-10548:** Low-Latency support ([#180](https://github.com/kaltura/playkit-js-dash/issues/180)) ([f28fb91](https://github.com/kaltura/playkit-js-dash/commit/f28fb91))
* **FEC-11214:** upgrade shaka to 3.3 ([#178](https://github.com/kaltura/playkit-js-dash/issues/178)) ([0aff340](https://github.com/kaltura/playkit-js-dash/commit/0aff340))



## [1.29.0](https://github.com/kaltura/playkit-js-dash/compare/v1.28.0...v1.29.0) (2022-01-19)


### Features

* **FEC-11761:** expose stream timed metadata - phase 2 ([#174](https://github.com/kaltura/playkit-js-dash/issues/174)) ([716e8c4](https://github.com/kaltura/playkit-js-dash/commit/716e8c4))



## [1.28.0](https://github.com/kaltura/playkit-js-dash/compare/v1.27.3...v1.28.0) (2021-12-21)


### Features

* **FEC-11632:** expose stream timed metadata ([#172](https://github.com/kaltura/playkit-js-dash/issues/172)) ([862a3fd](https://github.com/kaltura/playkit-js-dash/commit/862a3fd))



### [1.27.3](https://github.com/kaltura/playkit-js-dash/compare/v1.27.2...v1.27.3) (2021-11-24)


### Bug Fixes

* **FEC-11166:** dash manifest parser fails on LG webOS 3.3 ([#169](https://github.com/kaltura/playkit-js-dash/issues/169)) ([c3259d3](https://github.com/kaltura/playkit-js-dash/commit/c3259d3))



### [1.27.2](https://github.com/kaltura/playkit-js-dash/compare/v1.27.1...v1.27.2) (2021-08-26)



### [1.27.1](https://github.com/kaltura/playkit-js-dash/compare/v1.27.0...v1.27.1) (2021-08-26)


### Bug Fixes

* **FEC-11473:** start of dvr window is going back and forth while start over ([#165](https://github.com/kaltura/playkit-js-dash/issues/165)) ([d122166](https://github.com/kaltura/playkit-js-dash/commit/d122166))
* **FEC-11492:** dash adapter is not destroyed when network is offline ([#167](https://github.com/kaltura/playkit-js-dash/issues/167)) ([1c496b5](https://github.com/kaltura/playkit-js-dash/commit/1c496b5))



## [1.27.0](https://github.com/kaltura/playkit-js-dash/compare/v1.26.0...v1.27.0) (2021-07-27)


### Bug Fixes

* **FEC-11409:** many shaka warnings printed in the log ([#159](https://github.com/kaltura/playkit-js-dash/issues/159)) ([51f7adf](https://github.com/kaltura/playkit-js-dash/commit/51f7adf))
* **FEC-11409:** many shaka warnings printed in the log ([#163](https://github.com/kaltura/playkit-js-dash/issues/163)) ([081cb8d](https://github.com/kaltura/playkit-js-dash/commit/081cb8d))
* **FEC-11419:** explore why Live Start over starts with few seconds delay ([#160](https://github.com/kaltura/playkit-js-dash/issues/160)) ([c9ea3f8](https://github.com/kaltura/playkit-js-dash/commit/c9ea3f8))
* **FEC-11429:** something went wrong when start playing live dash on IE11 - regression ([#164](https://github.com/kaltura/playkit-js-dash/issues/164)) ([9bf98d0](https://github.com/kaltura/playkit-js-dash/commit/9bf98d0))


### Build System

* **FEC-11389:** reduce builds from travis ([28e4de0](https://github.com/kaltura/playkit-js-dash/commit/28e4de0))


### Features

* **FEC-11423:** upgrade shaka to 3.0.13 ([#161](https://github.com/kaltura/playkit-js-dash/issues/161)) ([4bdd80e](https://github.com/kaltura/playkit-js-dash/commit/4bdd80e))



## [1.26.0](https://github.com/kaltura/playkit-js-dash/compare/v1.25.0...v1.26.0) (2021-07-01)


### Bug Fixes

* **FEC-11140:** DRM scheme might be incorrect in DRM_LICENSE_LOADED event ([#155](https://github.com/kaltura/playkit-js-dash/issues/155)) ([bb6c018](https://github.com/kaltura/playkit-js-dash/commit/bb6c018))


### Features

* **FEC-10817:** expose the current time of the video element in live streams ([#156](https://github.com/kaltura/playkit-js-dash/issues/156)) ([c298892](https://github.com/kaltura/playkit-js-dash/commit/c298892))



## [1.25.0](https://github.com/kaltura/playkit-js-dash/compare/v1.24.3...v1.25.0) (2021-06-02)


### Bug Fixes

* **FEC-11126:** select the lowest value if we're not adaptive mode ([#150](https://github.com/kaltura/playkit-js-dash/issues/150)) ([9b083a5](https://github.com/kaltura/playkit-js-dash/commit/9b083a5))
* **FEC-11268:** incorrect video bandwidth parsed ([#151](https://github.com/kaltura/playkit-js-dash/issues/151)) ([750cc75](https://github.com/kaltura/playkit-js-dash/commit/750cc75))
* **FEC-11270:** cap to player size doesn't apply ([#152](https://github.com/kaltura/playkit-js-dash/issues/152)) ([1ca44b1](https://github.com/kaltura/playkit-js-dash/commit/1ca44b1))


### Features

* **FEC-10980:** Enable setting ABR settings on-the-fly ([#134](https://github.com/kaltura/playkit-js-dash/issues/134)) ([a400399](https://github.com/kaltura/playkit-js-dash/commit/a400399))



### [1.24.3](https://github.com/kaltura/playkit-js-dash/compare/v1.24.2...v1.24.3) (2021-05-04)


### Bug Fixes

* **FEC-11136:** Tizen 4 got stuck on the middle of the media ([#144](https://github.com/kaltura/playkit-js-dash/issues/144)) ([2562f1e](https://github.com/kaltura/playkit-js-dash/commit/2562f1e))



### [1.24.2](https://github.com/kaltura/playkit-js-dash/compare/v1.24.1...v1.24.2) (2021-04-28)


### Tests

* skip unstable test ([33f0baa](https://github.com/kaltura/playkit-js-dash/commit/33f0baa))



### [1.24.1](https://github.com/kaltura/playkit-js-dash/compare/v1.24.0...v1.24.1) (2021-04-28)



## [1.24.0](https://github.com/kaltura/playkit-js-dash/compare/v1.23.0...v1.24.0) (2021-04-28)


### Bug Fixes

* **FEC-11126:** upgrade shaka to 3.0.10 ([#139](https://github.com/kaltura/playkit-js-dash/issues/139)) ([f6268a6](https://github.com/kaltura/playkit-js-dash/commit/f6268a6))
* **FEC-11136:** Tizen 4 got stuck on the beginning of the media ([#140](https://github.com/kaltura/playkit-js-dash/issues/140)) ([13b9fb6](https://github.com/kaltura/playkit-js-dash/commit/13b9fb6))


### Features

* **FEC-11091:** add support for XMLHttpRequest.withCredentials in request filter ([#141](https://github.com/kaltura/playkit-js-dash/issues/141)) ([5f4df73](https://github.com/kaltura/playkit-js-dash/commit/5f4df73))



## [1.23.0](https://github.com/kaltura/playkit-js-dash/compare/v1.22.0...v1.23.0) (2021-04-06)


### Bug Fixes

* **FEC-10590:** remove the logic from dash adapter ([#137](https://github.com/kaltura/playkit-js-dash/issues/137)) ([571ae30](https://github.com/kaltura/playkit-js-dash/commit/571ae30)), closes [kaltura/playkit-js#552](https://github.com/kaltura/playkit-js-dash/issues/552)


### Features

* **FEC-10941:** Use In-Stream DASH thumbnails on the timeline ([#135](https://github.com/kaltura/playkit-js-dash/issues/135)) ([7687a43](https://github.com/kaltura/playkit-js-dash/commit/7687a43))



## [1.22.0](https://github.com/kaltura/playkit-js-dash/compare/v1.21.2...v1.22.0) (2021-02-24)


### Bug Fixes

* **FEC-10773:** reuse Shaka load option to start load from the detached point ([#130](https://github.com/kaltura/playkit-js-dash/issues/130)) ([98282f5](https://github.com/kaltura/playkit-js-dash/commit/98282f5))
* **FEC-10995:** update shaka to 3.0.8 ([#132](https://github.com/kaltura/playkit-js-dash/issues/132)) ([a310ef6](https://github.com/kaltura/playkit-js-dash/commit/a310ef6))


### Features

* **FEC-10768:** expose in-stream DASH thumbnails ([#133](https://github.com/kaltura/playkit-js-dash/issues/133)) ([03b577c](https://github.com/kaltura/playkit-js-dash/commit/03b577c))
* **FEC-10973:** parse image tracks from dash manifest ([#131](https://github.com/kaltura/playkit-js-dash/issues/131)) ([c10efb8](https://github.com/kaltura/playkit-js-dash/commit/c10efb8))



### [1.21.2](https://github.com/kaltura/playkit-js-dash/compare/v1.21.1...v1.21.2) (2021-01-28)



### [1.21.1](https://github.com/kaltura/playkit-js-dash/compare/v1.21.0...v1.21.1) (2021-01-28)


### Bug Fixes

* **FEC-10840:** incorrect waiting and playing event comes from dash adapter ([#128](https://github.com/kaltura/playkit-js-dash/issues/128)) ([fb7ecba](https://github.com/kaltura/playkit-js-dash/commit/fb7ecba))
* update shaka to fix the memory leak ([#127](https://github.com/kaltura/playkit-js-dash/issues/127)) ([7e58f67](https://github.com/kaltura/playkit-js-dash/commit/7e58f67))



## [1.21.0](https://github.com/kaltura/playkit-js-dash/compare/v1.20.4...v1.21.0) (2021-01-07)


### Bug Fixes

* **FEC-10767:** SMPTE-TT Subtitles Support ([#126](https://github.com/kaltura/playkit-js-dash/issues/126)) ([1ad0c7f](https://github.com/kaltura/playkit-js-dash/commit/1ad0c7f))


### Features

* **FEC-10766:** create text config section and option for styling ([#124](https://github.com/kaltura/playkit-js-dash/issues/124)) ([f4a56cf](https://github.com/kaltura/playkit-js-dash/commit/f4a56cf))



### [1.20.4](https://github.com/kaltura/playkit-js-dash/compare/v1.20.3...v1.20.4) (2020-12-07)


### Bug Fixes

* destroy promise doesn't fullfiled correctly ([#122](https://github.com/kaltura/playkit-js-dash/issues/122)) ([ba82b06](https://github.com/kaltura/playkit-js-dash/commit/ba82b06))
* **FEC-10590:** DOM play error on SmartTV on when stall happen on the beginning ([#123](https://github.com/kaltura/playkit-js-dash/issues/123)) ([84d10f2](https://github.com/kaltura/playkit-js-dash/commit/84d10f2))



### [1.20.3](https://github.com/kaltura/playkit-js-dash/compare/v1.20.2...v1.20.3) (2020-11-03)


### Build System

* change modules to default value ([#121](https://github.com/kaltura/playkit-js-dash/issues/121)) ([5ce252f](https://github.com/kaltura/playkit-js-dash/commit/5ce252f))
* remove plugins that already exist on preset-env ([#119](https://github.com/kaltura/playkit-js-dash/issues/119)) ([ba51981](https://github.com/kaltura/playkit-js-dash/commit/ba51981))


### Tests

* update shaka version ([#120](https://github.com/kaltura/playkit-js-dash/issues/120)) ([ba3431c](https://github.com/kaltura/playkit-js-dash/commit/ba3431c))



### [1.20.2](https://github.com/kaltura/playkit-js-dash/compare/v1.20.1...v1.20.2) (2020-10-06)


### Bug Fixes

* **FEC-10309:** Player is triggering 7000 error when user navigation between pages quickly ([#118](https://github.com/kaltura/playkit-js-dash/issues/118)) ([44b2581](https://github.com/kaltura/playkit-js-dash/commit/44b2581))



### [1.20.1](https://github.com/kaltura/playkit-js-dash/compare/v1.20.0...v1.20.1) (2020-09-08)



## [1.20.0](https://github.com/kaltura/playkit-js-dash/compare/v1.19.1...v1.20.0) (2020-09-07)


### Build System

* **FEC-10064:** add automatic release notes ([#116](https://github.com/kaltura/playkit-js-dash/issues/116)) ([81a210f](https://github.com/kaltura/playkit-js-dash/commit/81a210f))


### Features

* **FEC-10435:** upgrade shaka for fixing live issue and optimizations for smartTV ([#115](https://github.com/kaltura/playkit-js-dash/issues/115)) ([40af1c8](https://github.com/kaltura/playkit-js-dash/commit/40af1c8))


### Tests

* faster unit tests ([#114](https://github.com/kaltura/playkit-js-dash/issues/114)) ([0e58d25](https://github.com/kaltura/playkit-js-dash/commit/0e58d25))



### [1.19.1](https://github.com/kaltura/playkit-js-dash/compare/v1.19.0...v1.19.1) (2020-08-05)


### Bug Fixes

* downgrade shaka dependencies ([#113](https://github.com/kaltura/playkit-js-dash/issues/113)) ([af69a03](https://github.com/kaltura/playkit-js-dash/commit/af69a03))



## [1.19.0](https://github.com/kaltura/playkit-js-dash/compare/v1.17.0...v1.19.0) (2020-08-05)


### Bug Fixes

* **FEC-10122:** static _availableDrmProtocol doesn't get clear on reloading ([#103](https://github.com/kaltura/playkit-js-dash/issues/103)) ([e5695b3](https://github.com/kaltura/playkit-js-dash/commit/e5695b3))
* **FEC-10269:** dash adapter overrides shaka DRM settings ([#105](https://github.com/kaltura/playkit-js-dash/issues/105)) ([466f688](https://github.com/kaltura/playkit-js-dash/commit/466f688))


### Build System

* github bad certificate ([#101](https://github.com/kaltura/playkit-js-dash/issues/101)) ([0b1bcb7](https://github.com/kaltura/playkit-js-dash/commit/0b1bcb7))


### Features

* **FEC-10290:** upgrade NPM packages  ([#109](https://github.com/kaltura/playkit-js-dash/issues/109)) ([136926f](https://github.com/kaltura/playkit-js-dash/commit/136926f))
* **FEC-10356:** upgrade Shaka ([#112](https://github.com/kaltura/playkit-js-dash/issues/112)) ([3c3b05b](https://github.com/kaltura/playkit-js-dash/commit/3c3b05b))
* **FEC-9678:** add response filter implementation to dash adapter ([#100](https://github.com/kaltura/playkit-js-dash/issues/100)) ([5454526](https://github.com/kaltura/playkit-js-dash/commit/5454526))



<a name="1.18.3"></a>
## [1.18.3](https://github.com/kaltura/playkit-js-dash/compare/v1.18.2...v1.18.3) (2020-07-07)


### Bug Fixes

* **FEC-10269:** dash adapter overrides shaka DRM settings ([#105](https://github.com/kaltura/playkit-js-dash/issues/105)) ([466f688](https://github.com/kaltura/playkit-js-dash/commit/466f688))



<a name="1.18.2"></a>
## [1.18.2](https://github.com/kaltura/playkit-js-dash/compare/v1.18.1...v1.18.2) (2020-06-10)


### Bug Fixes

* **FEC-10122:** static _availableDrmProtocol doesn't get clear on reloading ([#103](https://github.com/kaltura/playkit-js-dash/issues/103)) ([e5695b3](https://github.com/kaltura/playkit-js-dash/commit/e5695b3))



<a name="1.18.1"></a>
## [1.18.1](https://github.com/kaltura/playkit-js-dash/compare/v1.18.0...v1.18.1) (2020-04-13)



<a name="1.18.0"></a>
# [1.18.0](https://github.com/kaltura/playkit-js-dash/compare/v1.17.0...v1.18.0) (2020-04-13)


### Features

* **FEC-9678:** add response filter implementation to dash adapter ([#100](https://github.com/kaltura/playkit-js-dash/issues/100)) ([5454526](https://github.com/kaltura/playkit-js-dash/commit/5454526))



<a name="1.17.0"></a>
# [1.17.0](https://github.com/kaltura/playkit-js-dash/compare/v1.14.0...v1.17.0) (2020-02-24)


### Bug Fixes

* logs for DRM checks ([#83](https://github.com/kaltura/playkit-js-dash/issues/83)) ([985943c](https://github.com/kaltura/playkit-js-dash/commit/985943c))
* **FEC-9316:** seek doesn't work before video finished loading ([#87](https://github.com/kaltura/playkit-js-dash/issues/87)) ([c498d4d](https://github.com/kaltura/playkit-js-dash/commit/c498d4d))
* **FEC-9342:** Disable shaka on iOS ([#86](https://github.com/kaltura/playkit-js-dash/issues/86)) ([84761fd](https://github.com/kaltura/playkit-js-dash/commit/84761fd))
* seek doesn't work before video finished loading ([#94](https://github.com/kaltura/playkit-js-dash/issues/94)) ([c25663e](https://github.com/kaltura/playkit-js-dash/commit/c25663e))
* **FEC-9512:** save shaka lib on mediaSource adapter ([#95](https://github.com/kaltura/playkit-js-dash/issues/95)) ([cbf15be](https://github.com/kaltura/playkit-js-dash/commit/cbf15be))


### Features

* **FEC-9109:** add DRM Load time metric ([#98](https://github.com/kaltura/playkit-js-dash/issues/98)) ([efb30c0](https://github.com/kaltura/playkit-js-dash/commit/efb30c0))
* **FEC-9314:** update Shaka version ([04aa3e4](https://github.com/kaltura/playkit-js-dash/commit/04aa3e4))
* **FEC-9452:** async request filter handlers ([#96](https://github.com/kaltura/playkit-js-dash/issues/96)) ([565a680](https://github.com/kaltura/playkit-js-dash/commit/565a680))



<a name="1.16.0"></a>
# [1.16.0](https://github.com/kaltura/playkit-js-dash/compare/v1.15.4...v1.16.0) (2019-12-29)


### Features

* **FEC-9452:** async request filter handlers ([#96](https://github.com/kaltura/playkit-js-dash/issues/96)) ([565a680](https://github.com/kaltura/playkit-js-dash/commit/565a680))



<a name="1.15.4"></a>
## [1.15.4](https://github.com/kaltura/playkit-js-dash/compare/v1.15.3...v1.15.4) (2019-12-05)


### Bug Fixes

* **FEC-9512:** save shaka lib on mediaSource adapter ([#95](https://github.com/kaltura/playkit-js-dash/issues/95)) ([cbf15be](https://github.com/kaltura/playkit-js-dash/commit/cbf15be))



<a name="1.15.3"></a>
## [1.15.3](https://github.com/kaltura/playkit-js-dash/compare/v1.15.2...v1.15.3) (2019-11-12)


### Bug Fixes

* seek doesn't work before video finished loading ([#94](https://github.com/kaltura/playkit-js-dash/issues/94)) ([c25663e](https://github.com/kaltura/playkit-js-dash/commit/c25663e))



<a name="1.15.2"></a>
## [1.15.2](https://github.com/kaltura/playkit-js-dash/compare/v1.15.1...v1.15.2) (2019-10-31)


### Bug Fixes

* **FEC-9316:** seek doesn't work before video finished loading ([#87](https://github.com/kaltura/playkit-js-dash/issues/87)) ([c498d4d](https://github.com/kaltura/playkit-js-dash/commit/c498d4d))



<a name="1.15.1"></a>
## [1.15.1](https://github.com/kaltura/playkit-js-dash/compare/v1.15.0...v1.15.1) (2019-09-18)


### Bug Fixes

* **FEC-9342:** Disable shaka on iOS ([#86](https://github.com/kaltura/playkit-js-dash/issues/86)) ([84761fd](https://github.com/kaltura/playkit-js-dash/commit/84761fd))



<a name="1.15.0"></a>
# [1.15.0](https://github.com/kaltura/playkit-js-dash/compare/v1.14.1...v1.15.0) (2019-09-12)


### Features

* **FEC-9314:** update Shaka version ([04aa3e4](https://github.com/kaltura/playkit-js-dash/commit/04aa3e4))



<a name="1.14.1"></a>
## [1.14.1](https://github.com/kaltura/playkit-js-dash/compare/v1.14.0...v1.14.1) (2019-08-28)


### Bug Fixes

* logs for DRM checks ([#83](https://github.com/kaltura/playkit-js-dash/issues/83)) ([985943c](https://github.com/kaltura/playkit-js-dash/commit/985943c))



<a name="1.14.0"></a>
# [1.14.0](https://github.com/kaltura/playkit-js-dash/compare/v1.13.1...v1.14.0) (2019-08-26)


### Features

* **FEC-9137:** DRM protocol detection ([#82](https://github.com/kaltura/playkit-js-dash/issues/82)) ([efb1c1e](https://github.com/kaltura/playkit-js-dash/commit/efb1c1e))
* **FEC-9271:** expose interface and methods to enable customising DRM request/response ([#81](https://github.com/kaltura/playkit-js-dash/issues/81)) ([7c90a3e](https://github.com/kaltura/playkit-js-dash/commit/7c90a3e))



<a name="1.13.1"></a>
## [1.13.1](https://github.com/kaltura/playkit-js-dash/compare/v1.13.0...v1.13.1) (2019-07-28)


### Bug Fixes

* **FEC-9262:** playback doesn't return to start after playback with ads in LG TV ([#79](https://github.com/kaltura/playkit-js-dash/issues/79)) ([5e359b9](https://github.com/kaltura/playkit-js-dash/commit/5e359b9))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/kaltura/playkit-js-dash/compare/v1.12.0...v1.13.0) (2019-07-19)


### Features

* **FEC-9227:** support reInit of MSE ([#78](https://github.com/kaltura/playkit-js-dash/issues/78)) ([1fe4542](https://github.com/kaltura/playkit-js-dash/commit/1fe4542))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/kaltura/playkit-js-dash/compare/v1.11.0...v1.12.0) (2019-06-20)


### Features

* **FEC-8975:** adding segment size in target buffer when exceeding maxmax ([#75](https://github.com/kaltura/playkit-js-dash/issues/75)) ([ed04391](https://github.com/kaltura/playkit-js-dash/commit/ed04391))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/kaltura/playkit-js-dash/compare/v1.10.1...v1.11.0) (2019-06-17)


### Features

* **FEC-8975:** adding QoS data enhancement ([#72](https://github.com/kaltura/playkit-js-dash/issues/72)) ([baeb140](https://github.com/kaltura/playkit-js-dash/commit/baeb140))
* **FEC-8975:** QoS Data enhancment ([#74](https://github.com/kaltura/playkit-js-dash/issues/74)) ([6fa818b](https://github.com/kaltura/playkit-js-dash/commit/6fa818b))



<a name="1.10.1"></a>
## [1.10.1](https://github.com/kaltura/playkit-js-dash/compare/v1.10.0...v1.10.1) (2019-05-01)



<a name="1.10.0"></a>
# [1.10.0](https://github.com/kaltura/playkit-js-dash/compare/v1.9.0...v1.10.0) (2018-12-20)


### Features

* **FEC-8700:** add config option to specify DRM system ([#70](https://github.com/kaltura/playkit-js-dash/issues/70)) ([5a7e528](https://github.com/kaltura/playkit-js-dash/commit/5a7e528))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/kaltura/playkit-js-dash/compare/v1.8.3...v1.9.0) (2018-12-12)


### Features

* **FEC-8147:** add ability to set ABR settings ([#69](https://github.com/kaltura/playkit-js-dash/issues/69)) ([8f5271b](https://github.com/kaltura/playkit-js-dash/commit/8f5271b))



<a name="1.8.3"></a>
## [1.8.3](https://github.com/kaltura/playkit-js-dash/compare/v1.8.2...v1.8.3) (2018-11-22)


### Bug Fixes

* **FEC-8711:** live in IE has a small jump in the stream after a second ([#67](https://github.com/kaltura/playkit-js-dash/issues/67)) ([ceb4063](https://github.com/kaltura/playkit-js-dash/commit/ceb4063))



<a name="1.8.2"></a>
## [1.8.2](https://github.com/kaltura/playkit-js-dash/compare/v1.8.1...v1.8.2) (2018-11-19)


### Bug Fixes

* **FEC-8684:** IE11 live dash playback is stuck ([#66](https://github.com/kaltura/playkit-js-dash/issues/66)) ([c543921](https://github.com/kaltura/playkit-js-dash/commit/c543921))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/kaltura/playkit-js-dash/compare/v1.8.0...v1.8.1) (2018-11-08)


### Bug Fixes

* **FEC-8666:** cannot play dash drm ([#65](https://github.com/kaltura/playkit-js-dash/issues/65)) ([8d724ac](https://github.com/kaltura/playkit-js-dash/commit/8d724ac))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/kaltura/playkit-js-dash/compare/v1.7.0...v1.8.0) (2018-11-07)


### Features

* **FEC-8553:** add ability to force redirect kaltura playManifest urls ([#64](https://github.com/kaltura/playkit-js-dash/issues/64)) ([5d9cc5c](https://github.com/kaltura/playkit-js-dash/commit/5d9cc5c))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/kaltura/playkit-js-dash/compare/v1.6.3...v1.7.0) (2018-11-05)


### Bug Fixes

* **FEC-7590:** filter Shaka audio tracks by language and not bitrate ([#58](https://github.com/kaltura/playkit-js-dash/issues/58)) ([e88747c](https://github.com/kaltura/playkit-js-dash/commit/e88747c))


### Features

* **FEC-7808:** quality watcher for the player ([#63](https://github.com/kaltura/playkit-js-dash/issues/63)) ([4e808af](https://github.com/kaltura/playkit-js-dash/commit/4e808af))



<a name="1.6.4"></a>
## [1.6.4](https://github.com/kaltura/playkit-js-dash/compare/v1.6.3...v1.6.4) (2018-08-05)


### Bug Fixes

* **FEC-7590:** filter Shaka audio tracks by language and not bitrate ([#58](https://github.com/kaltura/playkit-js-dash/issues/58)) ([e88747c](https://github.com/kaltura/playkit-js-dash/commit/e88747c))



<a name="1.6.3"></a>
## [1.6.3](https://github.com/kaltura/playkit-js-dash/compare/v1.6.2...v1.6.3) (2018-07-12)


### Bug Fixes

* **FEC-7935:** fix text selection logic ([#55](https://github.com/kaltura/playkit-js-dash/issues/55)) ([cefc2ce](https://github.com/kaltura/playkit-js-dash/commit/cefc2ce))
* **FEC-8396:** media source adapters default config overrides the player supplied config ([#56](https://github.com/kaltura/playkit-js-dash/issues/56)) ([a9d41ca](https://github.com/kaltura/playkit-js-dash/commit/a9d41ca))



<a name="1.6.2"></a>
## [1.6.2](https://github.com/kaltura/playkit-js-dash/compare/v1.6.1...v1.6.2) (2018-05-10)


### Bug Fixes

* **FEC-8203:** Live with DVR is not playing live edge in first play  ([#53](https://github.com/kaltura/playkit-js-dash/issues/53)) ([0c52757](https://github.com/kaltura/playkit-js-dash/commit/0c52757))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/kaltura/playkit-js-dash/compare/v1.6.0...v1.6.1) (2018-05-06)


### Bug Fixes

* **FEC-8130:** typo in adaptation event listener ([#52](https://github.com/kaltura/playkit-js-dash/issues/52)) ([31f9101](https://github.com/kaltura/playkit-js-dash/commit/31f9101))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/kaltura/playkit-js-dash/compare/v1.5.7...v1.6.0) (2018-04-10)


### Features

* **FEC-7330:** enable setting custom track labels by app ([#51](https://github.com/kaltura/playkit-js-dash/issues/51)) ([025d1a1](https://github.com/kaltura/playkit-js-dash/commit/025d1a1))



<a name="1.5.7"></a>
## [1.5.7](https://github.com/kaltura/playkit-js-dash/compare/v1.5.6...v1.5.7) (2018-03-27)


### Bug Fixes

* **FEC-8079:** move src getter to base adapter ([#50](https://github.com/kaltura/playkit-js-dash/issues/50)) ([16dd32a](https://github.com/kaltura/playkit-js-dash/commit/16dd32a))



<a name="1.5.6"></a>
## [1.5.6](https://github.com/kaltura/playkit-js-dash/compare/v1.5.5...v1.5.6) (2018-03-08)


### Bug Fixes

* **FEC-7034:** player gets stuck at the end after replay - ie11 ([#49](https://github.com/kaltura/playkit-js-dash/issues/49)) ([c8943bd](https://github.com/kaltura/playkit-js-dash/commit/c8943bd))



<a name="1.5.5"></a>
## [1.5.5](https://github.com/kaltura/playkit-js-dash/compare/v1.5.4...v1.5.5) (2018-03-05)


### Bug Fixes

* **FEC-7970:** Change media from DRM to DRM is not working ([#48](https://github.com/kaltura/playkit-js-dash/issues/48)) ([1327693](https://github.com/kaltura/playkit-js-dash/commit/1327693))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/kaltura/playkit-js-dash/compare/v1.5.3...v1.5.4) (2018-02-19)



<a name="1.5.3"></a>
## [1.5.3](https://github.com/kaltura/playkit-js-dash/compare/v1.5.2...v1.5.3) (2018-02-11)


### Bug Fixes

* **FEC-7882:** Live+DVR - unavailable time shown in the seekbar ([#45](https://github.com/kaltura/playkit-js-dash/issues/45)) ([6b04f2b](https://github.com/kaltura/playkit-js-dash/commit/6b04f2b))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/kaltura/playkit-js-dash/compare/v1.5.0...v1.5.2) (2018-02-06)


### Bug Fixes

* build ([#43](https://github.com/kaltura/playkit-js-dash/issues/43)) ([a632a7e](https://github.com/kaltura/playkit-js-dash/commit/a632a7e))
* source type update ([#41](https://github.com/kaltura/playkit-js-dash/issues/41)) ([1360fdc](https://github.com/kaltura/playkit-js-dash/commit/1360fdc))
* update env (docs and namespace) ([c2b016b](https://github.com/kaltura/playkit-js-dash/commit/c2b016b))
* **FEC-7672:** 4XX VTT captions results in a critical error ([#40](https://github.com/kaltura/playkit-js-dash/issues/40)) ([e323606](https://github.com/kaltura/playkit-js-dash/commit/e323606))
* **webpack:** playkit core externals root value ([#42](https://github.com/kaltura/playkit-js-dash/issues/42)) ([4395e42](https://github.com/kaltura/playkit-js-dash/commit/4395e42))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/kaltura/playkit-js-dash/compare/v1.5.0...v1.5.1) (2018-02-06)


### Bug Fixes

* build ([#43](https://github.com/kaltura/playkit-js-dash/issues/43)) ([a632a7e](https://github.com/kaltura/playkit-js-dash/commit/a632a7e))
* source type update ([#41](https://github.com/kaltura/playkit-js-dash/issues/41)) ([1360fdc](https://github.com/kaltura/playkit-js-dash/commit/1360fdc))
* update env (docs and namespace) ([c2b016b](https://github.com/kaltura/playkit-js-dash/commit/c2b016b))
* **FEC-7672:** 4XX VTT captions results in a critical error ([#40](https://github.com/kaltura/playkit-js-dash/issues/40)) ([e323606](https://github.com/kaltura/playkit-js-dash/commit/e323606))
* **webpack:** playkit core externals root value ([#42](https://github.com/kaltura/playkit-js-dash/issues/42)) ([4395e42](https://github.com/kaltura/playkit-js-dash/commit/4395e42))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/kaltura/playkit-js-dash/compare/v1.5.0...v1.5.1) (2018-01-10)


### Bug Fixes

* update env (docs and namespace) ([c2b016b](https://github.com/kaltura/playkit-js-dash/commit/c2b016b))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/kaltura/playkit-js-dash/compare/v1.4.1...v1.5.0) (2017-12-12)


### Bug Fixes

* clear event binding function references ([#38](https://github.com/kaltura/playkit-js-dash/issues/38)) ([58beee8](https://github.com/kaltura/playkit-js-dash/commit/58beee8))


### Features

* add default-config json container ([#39](https://github.com/kaltura/playkit-js-dash/issues/39)) ([ad7a6dc](https://github.com/kaltura/playkit-js-dash/commit/ad7a6dc))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/kaltura/playkit-js-dash/compare/v1.4.0...v1.4.1) (2017-12-06)


### Bug Fixes

* **FEC-7476:** error handling ([#36](https://github.com/kaltura/playkit-js-dash/issues/36)) ([499914f](https://github.com/kaltura/playkit-js-dash/commit/499914f))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/kaltura/playkit-js-dash/compare/v1.3.1...v1.4.0) (2017-11-16)


### Features

* export name and version on module ([#33](https://github.com/kaltura/playkit-js-dash/issues/33)) ([8ca7829](https://github.com/kaltura/playkit-js-dash/commit/8ca7829))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/kaltura/playkit-js-dash/compare/v1.3.0...v1.3.1) (2017-10-25)


### Bug Fixes

* **FEC-7207:** redundant buffering events ([#32](https://github.com/kaltura/playkit-js-dash/issues/32)) ([2922530](https://github.com/kaltura/playkit-js-dash/commit/2922530))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/kaltura/playkit-js-dash/compare/v1.2.1...v1.3.0) (2017-10-16)


### Bug Fixes

* **FEC-7207:** listen to shaka buffering event ([#31](https://github.com/kaltura/playkit-js-dash/issues/31)) ([47d77af](https://github.com/kaltura/playkit-js-dash/commit/47d77af))


### Features

* change media ([#29](https://github.com/kaltura/playkit-js-dash/issues/29)) ([4382852](https://github.com/kaltura/playkit-js-dash/commit/4382852))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/kaltura/playkit-js-dash/compare/v1.2.0...v1.2.1) (2017-10-04)


### Bug Fixes

* **FEC-7034:** update shaka version ([aedbb29](https://github.com/kaltura/playkit-js-dash/commit/aedbb29))
* **FEC-7233:** when parsing text tracks mark all as inactive ([#30](https://github.com/kaltura/playkit-js-dash/issues/30)) ([de9b1e5](https://github.com/kaltura/playkit-js-dash/commit/de9b1e5))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/kaltura/playkit-js-dash/compare/v1.0.1...v1.2.0) (2017-10-02)

### Features

* captions refactor ([#28](https://github.com/kaltura/playkit-js-dash/issues/28)) ([4f87131](https://github.com/kaltura/playkit-js-dash/commit/4f87131))


<a name="1.1.0"></a>
# [1.1.0](https://github.com/kaltura/playkit-js-dash/compare/v1.0.1...v1.1.0) (2017-08-31)


### Bug Fixes

* **FEC-6968:** loadstart issue ([#26](https://github.com/kaltura/playkit-js-dash/issues/26)) ([4246079](https://github.com/kaltura/playkit-js-dash/commit/4246079))


### Features

* drm ([#24](https://github.com/kaltura/playkit-js-dash/issues/24)) ([a844b81](https://github.com/kaltura/playkit-js-dash/commit/a844b81))
* support dash live ([#25](https://github.com/kaltura/playkit-js-dash/issues/25)) ([0e0e97f](https://github.com/kaltura/playkit-js-dash/commit/0e0e97f))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/kaltura/playkit-js-dash/compare/v1.0.0...v1.0.1) (2017-07-30)



<a name="1.0.0"></a>
# 1.0.0 (2017-07-30)


### Bug Fixes

* change the filename that webpack generates ([#7](https://github.com/kaltura/playkit-js-dash/issues/7)) ([06d1404](https://github.com/kaltura/playkit-js-dash/commit/06d1404))


### Features

* **abr:** add abr mode changed event ([#21](https://github.com/kaltura/playkit-js-dash/issues/21)) ([c03485b](https://github.com/kaltura/playkit-js-dash/commit/c03485b))
* **abr:** add api for checking if abr is enabled ([#20](https://github.com/kaltura/playkit-js-dash/issues/20)) ([3a11138](https://github.com/kaltura/playkit-js-dash/commit/3a11138))
* **config:** pass dash config ([#14](https://github.com/kaltura/playkit-js-dash/issues/14)) ([d4af905](https://github.com/kaltura/playkit-js-dash/commit/d4af905))
* **dash adapter:** hide text track api ([#13](https://github.com/kaltura/playkit-js-dash/issues/13)) ([24e6e78](https://github.com/kaltura/playkit-js-dash/commit/24e6e78))
* **start time:** support optional time to start the video from ([#19](https://github.com/kaltura/playkit-js-dash/issues/19)) ([f22d26c](https://github.com/kaltura/playkit-js-dash/commit/f22d26c))
