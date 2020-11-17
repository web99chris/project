module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!***********************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!****************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!***********************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!***********************************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!********************************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!**********************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!********************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!****************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!*******************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*****************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../share/17app.ts":
/*!*************************!*\
  !*** ../share/17app.ts ***!
  \*************************/
/*! exports provided: open */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony import */ var _17liveMessageTunnel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./17liveMessageTunnel */ "../share/17liveMessageTunnel.tsx");


function redirect(url) {
  location.href = url; // eslint-disable-line no-restricted-globals
}

function open(userID, openID, streamID = 0) {
  const page = 'profile';
  const isMobile = /Mobile/.test(navigator.userAgent);

  if (isMobile) {
    const isAndroid = /Android/.test(navigator.userAgent) && typeof java17WebObject !== 'undefined';

    if (isAndroid) {
      if (streamID > 0) {
        redirect(`http://17.media/share/live/${streamID}`);
        return;
      }

      java17WebObject.openProfile(userID, page);
      return;
    }

    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

    if (isIOS) {
      if (streamID > 0) {
        redirect(`media17://live/${streamID}`);
        return;
      }

      redirect(`media17://u/${userID}`);
      return;
    }
  }

  if (window.parent !== window) {
    // 17.live
    _17liveMessageTunnel__WEBPACK_IMPORTED_MODULE_0__["open"](openID);
    return;
  }

  if (streamID > 0) {
    window.open(`http://17.media/share/live/${streamID}`);
  }
}

/***/ }),

/***/ "../share/17appTrack.ts":
/*!******************************!*\
  !*** ../share/17appTrack.ts ***!
  \******************************/
/*! exports provided: trackingSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackingSource", function() { return trackingSource; });
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_0__);

const firebaseAgentConfig =  false ? undefined : {
  // stage
  apiKey: 'AIzaSyDPBroYovkoDzmVjsxKnKuD0Qbh3--fpwg',
  authDomain: 'media17-firebase-event.firebaseapp.com',
  databaseURL: 'https://media17-firebase-event.firebaseio.com',
  projectId: 'media17-firebase-event',
  storageBucket: 'media17-firebase-event.appspot.com',
  messagingSenderId: '813798985844',
  appId: '1:813798985844:web:940292f1b75aa1ef71c121',
  measurementId: 'G-7QF2S7SZQP'
};
let agent = null;
let source = null;

if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
  agent = new _17media_browser_spy__WEBPACK_IMPORTED_MODULE_0__["FirebaseAgent"](firebaseAgentConfig);
  source = new _17media_browser_spy__WEBPACK_IMPORTED_MODULE_0__["DefaultSource"]();
  source.addAgent(agent);
}

const trackingSource = source;

/***/ }),

/***/ "../share/17liveMessageTunnel.tsx":
/*!****************************************!*\
  !*** ../share/17liveMessageTunnel.tsx ***!
  \****************************************/
/*! exports provided: open */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
const hosts = ['https://17.live', 'https://sta.17.live']; // to store recognized host in sessionStorage

const KEY_17LIVE_HOST = '17live/17LIVE_HOST'; // global method to send message

const sendMessage = data => {
  const host = sessionStorage.getItem(KEY_17LIVE_HOST);
  if (host) window.parent.postMessage(data, host);
};
/**
 * setup message tunnel and start receiving messages
 */


if (typeof window !== 'undefined') {
  window.addEventListener('message', ({
    origin,
    data: {
      type,
      payload
    }
  }) => {
    // get, check, and set host origin
    if (origin && sessionStorage.getItem(KEY_17LIVE_HOST) !== origin) {
      const host = hosts.find(h => h === origin);

      if (!host) {
        return false;
      }

      sessionStorage.setItem(KEY_17LIVE_HOST, host);
    } // receive auth info


    if (type === '17live/Event/EVENT_AUTH_INFO') {
      const {
        userID,
        accessToken
      } = payload;
      sessionStorage.setItem('userID', userID);
      sessionStorage.setItem('accessToken', accessToken);
    }
  }, false);
}
/**
 * Actions
 */


const open = openID => sendMessage({
  type: '17live/Event/EVENT_SEND_AVATAR_LINK',
  payload: openID
});

/***/ }),

/***/ "../share/CONST.ts":
/*!*************************!*\
  !*** ../share/CONST.ts ***!
  \*************************/
/*! exports provided: GCloudCDN, DEFAULT_AVATAR, GA_DEV_ID, GA_ID, THUMBNAIL_BASE_URL, RESOURCE_BASE_URL, EVENT_DOMAIN, RESOURCE_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCloudCDN", function() { return GCloudCDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_AVATAR", function() { return DEFAULT_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_DEV_ID", function() { return GA_DEV_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_ID", function() { return GA_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THUMBNAIL_BASE_URL", function() { return THUMBNAIL_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_BASE_URL", function() { return RESOURCE_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DOMAIN", function() { return EVENT_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_IMAGE", function() { return RESOURCE_IMAGE; });
const GCloudCDN = 'webcdn.17app.co';
const DEFAULT_AVATAR = `https://${GCloudCDN}/17live/ig-default.svg`;
const GA_DEV_ID = 'UA-85600241-2';
const GA_ID = 'UA-85600241-7';
const THUMBNAIL_BASE_URL = 'https://assets-17app.akamaized.net/THUMBNAIL_';
const RESOURCE_BASE_URL = 'https://webcdn.17app.co/campaign/vmo/';
const EVENT_DOMAIN = 'https://event.17.media';
const RESOURCE_IMAGE = 'https://webcdn.17app.co/campaign/';

/***/ }),

/***/ "../share/services/axios.ts":
/*!**********************************!*\
  !*** ../share/services/axios.ts ***!
  \**********************************/
/*! exports provided: getInstance, getInstanceCache, getInstanceVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceCache", function() { return getInstanceCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstanceVote", function() { return getInstanceVote; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");


const getInstance = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: window.location.hostname === 'vmo.17.media' ? 'https://api.17app.co/api' : 'https://sta-api.17app.co/api'
  });
};
const getInstanceCache = () => {
  if (process.env.LOCAL) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: 'http://localhost:5000'
    });
  }

  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["isPRO"])() ? 'https://event-server.17app.co/api' : 'https://event-server-sta.17app.co/api'
  });
};
const getInstanceVote = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: window.location.hostname === 'vmo.17.media' ? 'https://api.17app.co/api' : 'https://sta-api.17app.co/api'
  });
};

/***/ }),

/***/ "../share/services/leaderboard.service.ts":
/*!************************************************!*\
  !*** ../share/services/leaderboard.service.ts ***!
  \************************************************/
/*! exports provided: getLeaderboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeaderboard", function() { return getLeaderboard; });
/* harmony import */ var _vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/share/services/axios */ "../share/services/axios.ts");
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");


const getLeaderboard = async (type, cancelToken, limit = 1000, cursor = '', method = 'POST', callBack = data => {}) => {
  const axios = Object(_vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_0__["getInstance"])();
  const url = `/v1/leaderboards/mktevent`;
  const body = {
    type: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getType"])(type),
    count: limit,
    cursor
  };
  let res;

  if (method === 'POST') {
    res = await axios.post(url, body, {
      cancelToken
    });
  } else {
    res = await axios.get(url, {
      params: {
        type: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getType"])(type),
        count: limit,
        cursor,
        onliveInfo: 1
      },
      cancelToken
    });
  }

  const {
    nextCursor,
    data
  } = res.data;

  if (callBack) {
    callBack(data);
  }

  if (nextCursor) {
    return [...data, ...(await getLeaderboard(type, cancelToken, limit, nextCursor, method))];
  }

  return data;
};

/***/ }),

/***/ "../share/services/leaderboardCache.service.ts":
/*!*****************************************************!*\
  !*** ../share/services/leaderboardCache.service.ts ***!
  \*****************************************************/
/*! exports provided: getLeaderboardCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeaderboardCache", function() { return getLeaderboardCache; });
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/services/axios */ "../share/services/axios.ts");


const defaultUrl = `/campaign/cache/`;
const getLeaderboardCache = async (uuid, cancelToken) => {
  const instance = Object(_vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_1__["getInstanceCache"])();
  const currentUrl = `${defaultUrl}${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["getUUID"])(uuid)}`;
  const res = await instance.get(currentUrl, {
    cancelToken
  });
  return res.data || [];
};

/***/ }),

/***/ "../share/services/leaderboardEventory.service.ts":
/*!********************************************************!*\
  !*** ../share/services/leaderboardEventory.service.ts ***!
  \********************************************************/
/*! exports provided: getLeaderboardEventory, getEventoryDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeaderboardEventory", function() { return getLeaderboardEventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventoryDetails", function() { return getEventoryDetails; });
/* harmony import */ var _vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/share/services/axios */ "../share/services/axios.ts");
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");


const url = `/v1/leaderboards/eventory`;
const getLeaderboardEventory = async (type, cancelToken, limit = 1000, cursor = '', method = 'POST', callBack = data => {}) => {
  const axios = Object(_vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_0__["getInstance"])();
  const body = {
    type: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getType"])(type),
    count: limit,
    cursor
  };
  let res;

  if (method === 'POST') {
    res = await axios.post(url, body, {
      cancelToken
    });
  } else {
    res = await axios.get(url, {
      params: {
        containerID: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getType"])(type),
        count: limit,
        cursor,
        onliveInfo: 1
      },
      cancelToken
    });
  }

  const {
    nextCursor,
    data
  } = res.data;

  if (callBack) {
    callBack(data);
  }

  if (nextCursor) {
    return [...data, ...(await getLeaderboardEventory(type, cancelToken, limit, nextCursor, method))];
  }

  return data;
};
const getEventoryDetails = async (EventoryKey, subKeys, cancelToken) => {
  const instance = Object(_vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_0__["getInstance"])();
  const res = await instance.get(url, {
    params: {
      containerID: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getType"])(EventoryKey),
      count: 1000,
      'subkeys[]': subKeys
    },
    cancelToken
  });
  return res.data || [];
};

/***/ }),

/***/ "../share/services/leaderboardVote.service.ts":
/*!****************************************************!*\
  !*** ../share/services/leaderboardVote.service.ts ***!
  \****************************************************/
/*! exports provided: getLeaderboardVote, doLeaderboardVote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeaderboardVote", function() { return getLeaderboardVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLeaderboardVote", function() { return doLeaderboardVote; });
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/services/axios */ "../share/services/axios.ts");


const defaultUrl = `/v1/votingEvent/`;
const getLeaderboardVote = async (voteId, cancelToken) => {
  const instance = Object(_vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_1__["getInstanceVote"])();
  instance.interceptors.response.use(undefined, err => {
    const error = err.response;

    if (error.status === 401) {
      return {};
    }
  });
  const currentUrl = `${defaultUrl}${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["getUUID"])(voteId)}`;
  const res = await instance.get(currentUrl, {
    cancelToken
  });
  return res.data || [];
};
const doLeaderboardVote = async (voteId, topic, nomineeUserID, cancelToken) => {
  const instance = Object(_vmo_share_services_axios__WEBPACK_IMPORTED_MODULE_1__["getInstanceVote"])();
  const currentUrl = `${defaultUrl}${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["getUUID"])(voteId)}/vote/${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["getUUID"])(topic)}/nominee/${nomineeUserID}`;
  const res = await instance.post(currentUrl, {
    cancelToken
  });
  return res.data || [];
};

/***/ }),

/***/ "../share/utils.ts":
/*!*************************!*\
  !*** ../share/utils.ts ***!
  \*************************/
/*! exports provided: path, calculateCountdown, formatDateEvent, addLeadingZeros, formatDateOnCalendar, convertConditionFilter, conditionMatch, numberFormat, numberFormatWithDigits, globalThis, qs, getUserLangs, getCurrentLang, getCurrentTransLateLang, isPRO, isSta, isLocal, debounce, getDateByFormat, getWeekdayByFormat, getTimeByFormat, getStringDateCountdownByLocalFormat, getStringDateByLocalFormat, getDetailDate, isSameDate, convertDateToTime, getDefaultDay, isProdVmo17Media, getUUID, getType, cumulativeOffset, copyStringToClipboard, copyDataToClipboard, animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCountdown", function() { return calculateCountdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateEvent", function() { return formatDateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeadingZeros", function() { return addLeadingZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateOnCalendar", function() { return formatDateOnCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertConditionFilter", function() { return convertConditionFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionMatch", function() { return conditionMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormat", function() { return numberFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberFormatWithDigits", function() { return numberFormatWithDigits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalThis", function() { return globalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qs", function() { return qs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLangs", function() { return getUserLangs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLang", function() { return getCurrentLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTransLateLang", function() { return getCurrentTransLateLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPRO", function() { return isPRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSta", function() { return isSta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocal", function() { return isLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateByFormat", function() { return getDateByFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekdayByFormat", function() { return getWeekdayByFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeByFormat", function() { return getTimeByFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringDateCountdownByLocalFormat", function() { return getStringDateCountdownByLocalFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringDateByLocalFormat", function() { return getStringDateByLocalFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailDate", function() { return getDetailDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDate", function() { return isSameDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateToTime", function() { return convertDateToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultDay", function() { return getDefaultDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProdVmo17Media", function() { return isProdVmo17Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return getUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cumulativeOffset", function() { return cumulativeOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyStringToClipboard", function() { return copyStringToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyDataToClipboard", function() { return copyDataToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "../../node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "../../node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @17media/dad */ "@17media/dad");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_17media_dad__WEBPACK_IMPORTED_MODULE_4__);





const path = (...paths) => {
  return paths.join('/').replace(/\/+/g, '/').replace(/^\//, '//').replace(/^(https?):\//, '$1://');
};
const calculateCountdown = (startDate, endDate) => {
  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
    notYetStarted: false,
    ended: false
  };
  let diff = (Number(new Date(endDate)) - Number(new Date())) / 1000; // clear countdown when date is reached

  if (diff <= 0) return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, timeLeft, {
    ended: true
  });
  const diffStart = (Number(new Date()) - Number(new Date(startDate))) / 1000;
  if (diffStart <= 0) return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, timeLeft, {
    notYetStarted: true
  }); // calculate time difference between now and expected date

  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }

  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }

  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }

  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }

  timeLeft.sec = Math.floor(diff);
  return timeLeft;
};
const formatDateEvent = (date, day) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const dateOfMonth = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const sec = dateObj.getSeconds();
  const stringDateOfMonth = dateOfMonth < 10 ? `0${dateOfMonth}` : String(dateOfMonth);
  const stringHours = hours < 10 ? `0${hours}` : String(hours);
  const stringMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
  const stringSec = sec < 10 ? `0${sec}` : String(sec);
  return `${month}/${stringDateOfMonth} (${day}) ${stringHours}:${stringMinutes}:${stringSec}`;
};
const addLeadingZeros = value => {
  return String(value).length < 2 ? `0${String(value)}` : value;
};
const formatDateOnCalendar = date => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const dateOfMonth = dateObj.getDate();
  const stringDateOfMonth = dateOfMonth < 10 ? `0${dateOfMonth}` : String(dateOfMonth);
  return `${month}/${stringDateOfMonth}`;
};
const convertConditionFilter = (filterCondition, value, conditionValue) => {
  switch (filterCondition) {
    case '>':
      return value > conditionValue;

    case '>=':
      return value >= conditionValue;

    case '<':
      return value < conditionValue;

    case '<=':
      return value <= conditionValue;

    case '===':
      return value === conditionValue;

    default:
      return true;
  }
};
const conditionMatch = (conditions, item) => conditions && conditions.find(cond => {
  return convertConditionFilter(cond.filterCondition, cond.value, item[cond.conditionValue] + 1);
});
const numberFormat = value => {
  let finalValue = value;

  if (!finalValue) {
    finalValue = 0;
    return finalValue.toLocaleString(navigator.language, {
      minimumFractionDigits: 0
    });
  }

  return finalValue.toLocaleString(navigator.language, {
    minimumFractionDigits: 0
  });
};
const numberFormatWithDigits = (value, minimumFractionDigits) => {
  let finalValue = value;

  if (!finalValue) {
    finalValue = 0;
    return finalValue.toLocaleString(navigator.language, {
      minimumFractionDigits
    });
  }

  return value.toLocaleString(navigator.language, {
    minimumFractionDigits
  });
};
const globalThis = (1, eval)('this'); // eslint-disable-line no-eval

const qs = (search = globalThis.location ? globalThis.location.search.slice(1) : '') => search.split('&').filter(Boolean).reduce((o, keyValue) => {
  const [key, value] = keyValue.split('=');
  if (value === undefined) o[key] = true;else o[key] = value;
  return o;
}, {});
const getUserLangs = () => {
  const q = qs();
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_2___default()(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a([q.lang, q.lng, ...window.navigator.languages].filter(Boolean)));
};
const getCurrentLang = () => {
  const supportLangs = [{
    prefix: 'zh',
    lang: 'zh-TW'
  }, {
    prefix: 'en',
    lang: 'en-US'
  }, {
    prefix: 'ja',
    lang: 'ja-JP'
  }, {
    prefix: 'ar',
    lang: 'ar'
  }];
  const langs = getUserLangs();

  if (langs.length > 0) {
    const langItem = {
      prefix: langs[0].substr(0, 2),
      lang: langs[0]
    };
    const findIndex = supportLangs.findIndex(item => item.prefix === langItem.prefix);

    if (findIndex > 0) {
      return supportLangs[findIndex].lang;
    }

    return supportLangs[0].lang;
  }

  return supportLangs[0].lang || 'zh-TW';
};
const getCurrentTransLateLang = () => {
  const supportLangs = [{
    prefix: 'zh',
    lang: 'zh_TW'
  }, {
    prefix: 'en',
    lang: 'en_US'
  }, {
    prefix: 'ja',
    lang: 'ja'
  }, {
    prefix: 'ar',
    lang: 'ar'
  }];
  const langs = getUserLangs();

  if (langs.length > 0) {
    const langItem = {
      prefix: langs[0].substr(0, 2),
      lang: langs[0]
    };
    const findIndex = supportLangs.findIndex(item => item.prefix === langItem.prefix);

    if (findIndex > 0) {
      return supportLangs[findIndex].lang;
    }

    return supportLangs[0].lang;
  }

  return supportLangs[0].lang || 'zh_TW';
};
const isPRO = () => window.location.hostname === 'vmo.17.media';
const isSta = () => window.location.hostname === 'sta-vmo.17.media';
const isLocal = () => window.location.hostname === 'localhost';
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
const getDateByFormat = (date, format, locale) => {
  if (format.indexOf('MM/DD/YYYY') > -1) {
    return format.replace('MM/DD/YYYY', date.toLocaleDateString(locale, {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }));
  }

  if (format.indexOf('MM/DD') > -1) {
    return format.replace('MM/DD', date.toLocaleDateString(locale, {
      month: 'numeric',
      day: '2-digit'
    }));
  }

  if (format.indexOf('MM/d') > -1) {
    return format.replace('MM/d', date.toLocaleDateString(locale, {
      month: 'numeric',
      day: 'numeric'
    }));
  }

  return format;
};
const getWeekdayByFormat = (date, format, locale) => {
  if (format.indexOf('WN') > -1) {
    return format.replace('WN', date.toLocaleDateString(locale, {
      weekday: locale.indexOf('zh') > -1 ? 'narrow' : 'short'
    }));
  }

  return format;
};
const getTimeByFormat = (date, format, locale) => {
  if (format.indexOf('hh:mm:ss') > -1) {
    return format.replace('hh:mm:ss', date.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }));
  }

  if (format.indexOf('HH:mm PP') > -1) {
    return format.replace('HH:mm PP', date.toLocaleTimeString(locale, {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    }));
  }

  return format;
};
const getStringDateCountdownByLocalFormat = ({
  d,
  h,
  m,
  s,
  ms
}, formatStr) => formatStr.replace('D', d.toString()).replace('hh', addLeadingZeros(h).toString()).replace('mm', addLeadingZeros(m).toString()).replace('ss', addLeadingZeros(s).toString());
const getStringDateByLocalFormat = (dateString, format = 'MM/DD(WN)hh:mm:ss') => {
  const date = new Date(dateString);
  const locale = getCurrentLang();
  format = getDateByFormat(date, format, locale);
  format = getWeekdayByFormat(date, format, locale);
  format = getTimeByFormat(date, format, locale);
  return format;
};
const getDetailDate = date => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const dateOfMonth = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const sec = dateObj.getSeconds();
  const stringDateOfMonth = dateOfMonth < 10 ? `0${dateOfMonth}` : String(dateOfMonth);
  const stringHours = hours < 10 ? `0${hours}` : String(hours);
  const stringMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
  const stringSec = sec < 10 ? `0${sec}` : String(sec);
  return {
    month,
    stringDateOfMonth,
    stringHours,
    stringMinutes,
    stringSec
  };
};
const isSameDate = (startDate, endDate) => getStringDateByLocalFormat(startDate, 'MM/DD/YYYY') === getStringDateByLocalFormat(endDate, 'MM/DD/YYYY');
const convertDateToTime = date => {
  const {
    stringHours,
    stringMinutes,
    stringSec
  } = getDetailDate(date);
  return `${stringHours}:${stringMinutes}:${stringSec}`;
};
const getDefaultDay = (dates, indexDefault) => {
  const currentDate = new Date(Object(_17media_dad__WEBPACK_IMPORTED_MODULE_4__["now"])() * 1000);
  const indexDefaultDate = dates.findIndex(item => {
    return new Date(item.endDate).getTime() - currentDate.getTime() >= 0;
  });

  if (indexDefaultDate < 0) {
    if (typeof indexDefault !== 'undefined') {
      return indexDefault;
    }

    return dates.length - 1;
  }

  return indexDefaultDate;
};
const isProdVmo17Media = () => window.location.hostname === 'vmo.17.media';
const getUUID = api => isProdVmo17Media() ? api.prod : api.sta;
const getType = api => isProdVmo17Media() ? api.prod : api.sta;
const cumulativeOffset = element => {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top,
    left
  };
};
const copyStringToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
const copyDataToClipboard = data => {
  // Get mession string
  const messionStrArr = [];

  if (data.length > 0) {
    const firstMission = data[0].missions;

    if (firstMission) {
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(firstMission).sort((a, b) => {
        return Number(a.substr(-1)) - Number(b.substr(-1));
      }).forEach(item => {
        messionStrArr.push(`${item.substr(0, 1).toUpperCase()}${item.substr(1)}`);
      });
    }
  } // Get meta string


  const metaStrArr = [];

  if (data.length > 0) {
    const firstMeta = data[0].meta;

    if (firstMeta) {
      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(firstMeta).forEach(item => {
        metaStrArr.push(`${item.substr(0, 1).toUpperCase()}${item.substr(1)}`);
      });
    }
  } // Get member string


  const memberStrArr = [];

  if (data.length > 0) {
    const firstMember = data[0].member;

    if (firstMember) {
      firstMember.forEach((item, index) => {
        memberStrArr.push(`Member ${index + 1} UserID`);
        memberStrArr.push(`Member ${index + 1} Name`);
        memberStrArr.push(`Member ${index + 1} Score`);
      });
    }
  }

  const copyArr = [];
  let firstRow = `Rank\tUserID\tName\tScore\tRegion`;

  if (data[0] && data[0].member) {
    firstRow = `Rank\tLeagueID\tLeague Name\tLeagueScore\tRegion`;
  }

  if (messionStrArr.length > 0) {
    firstRow = `${firstRow}\t${messionStrArr.join('\t')}`;
  }

  if (metaStrArr.length > 0) {
    firstRow = `${firstRow}\t${metaStrArr.join('\t')}`;
  }

  if (memberStrArr.length > 0) {
    firstRow = `${firstRow}\t${memberStrArr.join('\t')}`;
  }

  copyArr.push(firstRow);
  data.forEach((item, index) => {
    let itemStr = `${index + 1}\t${item.userInfo.userID}\t${item.userInfo.displayName || item.userInfo.openID}\t${item.score}\t${item.userInfo.region}`;

    if (messionStrArr.length > 0) {
      const messions = [];

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item.missions).sort((a, b) => {
        return Number(a.substr(-1)) - Number(b.substr(-1));
      }).forEach(mItem => {
        messions.push(`${item.missions[mItem]}`);
      });

      if (messions.length > 0) {
        itemStr = `${itemStr}\t${messions.join(`\t`)}`;
      }
    }

    if (metaStrArr.length > 0) {
      const meta = [];

      _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item.meta).forEach(mItem => {
        meta.push(`${item.meta[mItem]}`);
      });

      if (meta.length > 0) {
        itemStr = `${itemStr}\t${meta.join(`\t`)}`;
      }
    }

    if (memberStrArr.length > 0) {
      const member = [];
      item.member.forEach(item => {
        member.push(item.userID);
        member.push(item.userInfo.displayName);
        member.push(item.score);
      });

      if (member.length > 0) {
        itemStr = `${itemStr}\t${member.join(`\t`)}`;
      }
    }

    copyArr.push(itemStr);
  });
  copyStringToClipboard(copyArr.join('\n'));
};
const animation = (duration, callback) => {
  const start = performance.now();
  let timer = 0;
  timer = requestAnimationFrame(function animateFunc(time) {
    let percent = (time - start) / duration;
    if (percent > 1) percent = 1;
    if (percent < 0) percent = 0;
    callback(percent);

    if (percent < 1) {
      timer = requestAnimationFrame(animateFunc);
    } else {
      cancelAnimationFrame(timer);
    }
  });
};

/***/ }),

/***/ "../ui/CopyButton.tsx":
/*!****************************!*\
  !*** ../ui/CopyButton.tsx ***!
  \****************************/
/*! exports provided: CopyButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyButton", function() { return CopyButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\CopyButton.tsx";
// 2002-tw-alliance



const ButtonCopy = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "CopyButton__ButtonCopy",
  componentId: "rkn6ib-0"
})(["display:block;font-size:14px;cursor:pointer;border-radius:6px;padding:6px 16px;border:2px solid rgb(90,90,90);transition:all 0.2s ease 0s;margin:0 auto;outline:none;margin-bottom:10px;:active{::before{content:'Copy Complete';}}::before{content:'Copy ", " Rows';}"], props => props.count);
const CopyButton = ({
  data
}) => {
  const queryString = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["qs"])();

  const filterDataCopy = () => {
    const count = Number(queryString.count);
    return count > 0 && count < data.length ? data.filter((_, index) => index < count) : data;
  };

  if (queryString.copy) {
    const counterForCopy = filterDataCopy();

    if (counterForCopy.length) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonCopy, {
        count: counterForCopy.length,
        onClick: () => Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["copyDataToClipboard"])(counterForCopy),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      });
    }
  }

  return null;
};

/***/ }),

/***/ "../ui/Countdown.tsx":
/*!***************************!*\
  !*** ../ui/Countdown.tsx ***!
  \***************************/
/*! exports provided: WrapCountdown, WrapCountdownContent, CountdownWrapper, Countdown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapCountdown", function() { return WrapCountdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapCountdownContent", function() { return WrapCountdownContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownWrapper", function() { return CountdownWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @17media/dad */ "@17media/dad");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_17media_dad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui/hooks */ "../ui/hooks/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\Countdown.tsx";









const WrapCountdown = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Countdown__WrapCountdown",
  componentId: "h7ic9x-0"
})([""]);
const WrapCountdownContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Countdown__WrapCountdownContent",
  componentId: "h7ic9x-1"
})(["display:flex;flex:0 0 auto;flex-direction:column;justify-content:flex-start;align-items:center;> div{display:flex;flex:0 0 auto;justify-content:center;align-content:center;align-self:center;width:77.29vw;font-size:3.86vw;text-align:center;:nth-child(1){margin-top:6.76vw;margin-bottom:0.84vw;border-bottom:1px solid #cd3f6e;}:nth-child(2){margin-top:0.36vw;}@media screen and (min-width:800px){font-size:calc((800 / 828) * 32px);width:calc((800 / 828) * 640px);:nth-child(1){margin-top:calc((800 / 828) * 56px);margin-bottom:calc((800 / 828) * 7px);}:nth-child(2){margin-top:calc((800 / 828) * 3px);}}}"]);
const CountdownWrapper = ({
  children
}) => {
  const timeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_7__["useMinSectionTracking"])(timeRef, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_8__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_7__["createSectionViewAction"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_6__["SectionTypes"].duration));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 10
    }
  }, children);
};
const Countdown = ({
  theme = {},
  startDate,
  endDate,
  className,
  isSameDay = false,
  dateFormat,
  formatStr = ''
}) => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_5__["TranslationContext"]);
  const start = new Date(startDate);
  const end = new Date(endDate);
  const nowTime = Object(_17media_dad__WEBPACK_IMPORTED_MODULE_2__["now"])() * 1000;
  const times = Object(_vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_4__["useCountDown"])(end.getTime());
  const notYetStarted = nowTime - start.getTime() < 0;
  const ended = nowTime - end.getTime() > 0;
  let msg;
  let msgDateRange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, `${_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["getStringDateByLocalFormat"](startDate, dateFormat)}－${_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["getStringDateByLocalFormat"](endDate, dateFormat)}`);

  if (notYetStarted) {
    msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, translation.get('COUNTDOWN_HAS_NOT_BEGUN'));
  } else if (ended) {
    msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, translation.get('COUNTDOWN_HAS_ENDED'));
  } else {
    let format;

    if (times.d === 1) {
      format = formatStr.replace('{0}', `D${translation.get('COUNTDOWN_DAY')}`).replace('{1} {2}', `hh:mm:ss`);
    } else {
      format = formatStr.replace('{0}', `D${translation.get('COUNTDOWN_PLURAL_DAY')}`).replace('{1} {2}', `hh:mm:ss`);
    }

    msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, _vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["getStringDateCountdownByLocalFormat"](times, format));
  }

  if (_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["isSameDate"](startDate, endDate) && isSameDay) {
    msgDateRange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 7
      }
    }, `${_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["getStringDateByLocalFormat"](startDate, dateFormat)} - ${_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["convertDateToTime"](endDate)}`);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CountdownWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapCountdown, {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapCountdownContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, msgDateRange, msg))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Countdown));

/***/ }),

/***/ "../ui/Cover.tsx":
/*!***********************!*\
  !*** ../ui/Cover.tsx ***!
  \***********************/
/*! exports provided: Cover, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover", function() { return Cover; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc */ "../ui/hoc/index.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\Cover.tsx";



const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Cover__Img",
  componentId: "sc-1ckoktl-0"
})(["display:block;width:100%;"]);

const CoverFC = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 43
  }
}));

CoverFC.defaultProps = {
  alt: 'cover'
};
const Cover = Object(_hoc__WEBPACK_IMPORTED_MODULE_3__["withAttrs"])(CoverFC);
/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ }),

/***/ "../ui/CoverVideo.tsx":
/*!****************************!*\
  !*** ../ui/CoverVideo.tsx ***!
  \****************************/
/*! exports provided: Cover, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cover", function() { return Cover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\CoverVideo.tsx";






const Cover = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.video.withConfig({
  displayName: "CoverVideo__Cover",
  componentId: "sc-2v5b61-0"
})(["width:100%;height:145.65vw;@media screen and (min-width:800px){height:calc((800 / 828) * 1206px);}"]);
const TrackDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CoverVideo__TrackDiv",
  componentId: "sc-2v5b61-1"
})([""]);

const CoverVideo = ({
  src,
  iframe
}) => {
  const coverVideoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__["useMinSectionTracking"])(coverVideoRef, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__["createSectionViewAction"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["SectionTypes"].kv));
  });

  if (iframe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrackDiv, {
      ref: coverVideoRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CoverVideoIframeStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      id: "masterVisionIrame",
      src: iframe,
      frameBorder: "0",
      width: "100%",
      height: "100%",
      scrolling: "no",
      title: "master vision",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrackDiv, {
    ref: coverVideoRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: src,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CoverVideo);

/***/ }),

/***/ "../ui/EventCountdown.tsx":
/*!********************************!*\
  !*** ../ui/EventCountdown.tsx ***!
  \********************************/
/*! exports provided: EventCountdown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCountdown", function() { return EventCountdown; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\EventCountdown.tsx";



const WrapCountdown = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "EventCountdown__WrapCountdown",
  componentId: "sc-99do3f-0"
})(["font-size:16px;font-weight:500;line-height:1.38;text-align:center;color:", ";padding:26px 0 21.3px;div{&:last-child{color:", ";}}"], props => props.theme.colorFirst, props => props.theme.colorLast);
class EventCountdown extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      notYetStarted: false,
      ended: false
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.createCountdown();
  }

  componentDidUpdate(prevProps) {
    const {
      startDate
    } = this.props;

    if (prevProps.startDate !== startDate) {
      this.stop();
      this.createCountdown();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
  }

  createCountdown() {
    const {
      startDate,
      endDate
    } = this.props;

    const exePerSec = () => {
      const date = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["calculateCountdown"])(startDate, endDate);
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, date));

      if (date.notYetStarted || date.ended) {
        this.stop();
      }
    }; // update every second


    exePerSec();
    this.interval = setInterval(exePerSec, 1000);
  }

  render() {
    const {
      theme,
      startDate,
      startDay,
      endDate,
      endDay,
      day,
      countdownMSG,
      notYetStartedMSG,
      endedMSG
    } = this.props;
    const {
      days,
      hours,
      min,
      sec,
      notYetStarted,
      ended
    } = this.state;
    let msg;

    if (notYetStarted) {
      msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }
      }, notYetStartedMSG);
    } else if (ended) {
      msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      }, endedMSG);
    } else {
      msg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, `${countdownMSG} ${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["addLeadingZeros"])(days)} ${day} ${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["addLeadingZeros"])(hours)}:${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["addLeadingZeros"])(min)}:${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["addLeadingZeros"])(sec)}`);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrapCountdown, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }, `${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["formatDateEvent"])(startDate, startDay)}－${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["formatDateEvent"])(endDate, endDay)}`), msg));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(EventCountdown, "defaultProps", {
  countdownMSG: '活動尚餘',
  day: '天',
  notYetStartedMSG: '尚未開始',
  endedMSG: '已結束'
});

/* harmony default export */ __webpack_exports__["default"] = (EventCountdown);

/***/ }),

/***/ "../ui/EventPage.tsx":
/*!***************************!*\
  !*** ../ui/EventPage.tsx ***!
  \***************************/
/*! exports provided: EventPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\EventPage.tsx";


const Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventPage__Div",
  componentId: "sc-78mfwa-0"
})(["", ""], _p => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["max-width:800px;margin:0 auto;overflow-y:auto;overflow-x:hidden;"]));
const EventPage = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(EventPage));

/***/ }),

/***/ "../ui/GlobalStyles.tsx":
/*!******************************!*\
  !*** ../ui/GlobalStyles.tsx ***!
  \******************************/
/*! exports provided: GlobalStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

body {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: "PingFangTC", "Helvetica Neue", Helvetica, Arial, "Microsoft JhengHei", sans-serif;

  :lang(ja) {
    font-family: "Hiragino Kaku Gothic Pro", Osaka, Meiryo, "MS PGothic", Arial, sans-serif;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "../ui/LeaderboardItem.tsx":
/*!*********************************!*\
  !*** ../ui/LeaderboardItem.tsx ***!
  \*********************************/
/*! exports provided: LeaderboardItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardItem", function() { return LeaderboardItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");
/* harmony import */ var _vmo_share_CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/CONST */ "../share/CONST.ts");
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\LeaderboardItem.tsx";





const WrapScore = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__WrapScore",
  componentId: "sc-15n6igk-0"
})(["color:", ";font-size:14px;line-height:16px;"], props => props.theme.colorScore); //minheight 

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__Wrapper",
  componentId: "sc-15n6igk-1"
})(["display:flex;font-size:16px;font-weight:500;line-height:16px;color:", ";box-sizing:border-box;min-height:77px;justify-items:center;justify-content:center;background:", ";"], props => props.theme.color, props => props.theme.background || '');
const RankNumber = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__RankNumber",
  componentId: "sc-15n6igk-2"
})(["width:50px;display:flex;justify-content:center;align-content:center;align-items:center;color:", ";background:url(", ") center no-repeat;background-size:30px 30px;@media (max-width:360px){width:30px;}"], props => props.theme.colorRankNumber, props => props.theme.rankBg); //加上.user-bonus

const UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__UserInfo",
  componentId: "sc-15n6igk-3"
})(["display:flex;flex-direction:column;justify-content:center;align-content:center;flex-grow:1;box-sizing:border-box;position:relative;width:50%;.user-bonus{color:#6075c6;font-size:12px;line-height:2;}> div:first-child{font-size:14px;line-height:14px;letter-spacing:normal;color:", ";margin-bottom:7px;.user-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%;display:inline-block;vertical-align:top;font-size:13px;}}@media (max-width:320px){margin-left:-15px;}&::after{content:'';width:100%;position:absolute;z-index:1;bottom:0;left:0;height:8px;background:url(", ") center no-repeat;background-size:cover;}"], props => props.theme.colorNickName, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_2__["default"].dividerLine);
const ColumnUserImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__ColumnUserImg",
  componentId: "sc-15n6igk-4"
})(["display:flex;justify-content:center;align-content:center;align-items:center;"]);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.attrs(props => ({
  style: {
    background: props.style.background
  }
})).withConfig({
  displayName: "LeaderboardItem__UserAvatar",
  componentId: "sc-15n6igk-5"
})(["width:52px;height:52px;border-radius:50%;border:1px solid #fff;margin-right:20px;background-size:cover;box-shadow:", ";&::after{content:'';background-image:", ";background-size:contain;width:100%;height:100%;position:absolute;top:0px;left:-10px;background-repeat:no-repeat;background-position:center center;}"], props => props.isHighlight ? 'none' : 'rgb(0, 234, 255) 0px 0px 7px 1px', props => props.isLive ? `url(http://webcdn.17app.co/campaign/assets/igOfficialCircle.png)` : `url()`);
const WrapperImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__WrapperImg",
  componentId: "sc-15n6igk-6"
})(["position:relative;"]);
const RankIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__RankIcon",
  componentId: "sc-15n6igk-7"
})(["position:absolute;bottom:0;right:20px;display:block;font-size:20px;"]);
const WrapBonus = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__WrapBonus",
  componentId: "sc-15n6igk-8"
})(["font-size:13px;line-height:16px;color:#fe41cb;line-height:1.33;font-weight:500;margin-top:5px;"]);
const Borderline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "LeaderboardItem__Borderline",
  componentId: "sc-15n6igk-9"
})(["width:100%;height:1px;background:url(", ") center no-repeat;background-size:100%;position:relative;top:0px;z-index:10;"], props => props.theme.borderBottom);

const LeaderboardItemFC = ({
  theme,
  icon,
  score,
  rank,
  bonus = 0,
  userInfo,
  unit,
  children,
  handleClickAvatar,
  withBonus = false,
  isLive,
  isHighlight,
  additionalText
}) => {
  let avatar = '';

  if (userInfo) {
    avatar = userInfo.picture && userInfo.picture.startsWith('http') ? userInfo.picture : _vmo_share_CONST__WEBPACK_IMPORTED_MODULE_3__["THUMBNAIL_BASE_URL"] + userInfo.picture;
  }

  const scoreText = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["numberFormat"])(score);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RankNumber, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, rank + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColumnUserImg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperImg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatar, {
    isHighlight: isHighlight,
    isLive: isLive,
    onClick: handleClickAvatar,
    style: {
      backgroundImage: `url(${avatar}), url(${_vmo_share_CONST__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_AVATAR"]})`,
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RankIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, icon))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserInfo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 15
    }
  }, userInfo.displayName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapScore, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, additionalText || `${scoreText}  ${unit}`), withBonus && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-bonus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, "+ ", Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["numberFormat"])(bonus)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Borderline, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }), children));
};

LeaderboardItemFC.defaultProps = {
  unit: '響叮噹',
  icon: ''
};
const LeaderboardItem = LeaderboardItemFC;
/* harmony default export */ __webpack_exports__["default"] = (LeaderboardItem);

/***/ }),

/***/ "../ui/Loading.tsx":
/*!*************************!*\
  !*** ../ui/Loading.tsx ***!
  \*************************/
/*! exports provided: Loading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\Loading.tsx";


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__Wrapper",
  componentId: "sc-1xavaxd-0"
})(["text-align:center;padding:15px 0;"]);
const LdsRing = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
const WrapperLoading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Loading__WrapperLoading",
  componentId: "sc-1xavaxd-1"
})(["display:inline-block;position:relative;width:64px;height:64px;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid ", ";border-radius:50%;animation:", " 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:", " transparent transparent transparent;&:nth-child(1){animation-delay:-0.45s;}&:nth-child(2){animation-delay:-0.3s;}&:nth-child(3){animation-delay:-0.15s;}}"], props => props.color || '#f8b6bb', LdsRing, props => props.color || '#f8b6bb');
const Loading = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperLoading, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }
})));
/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "../ui/Tab.tsx":
/*!*********************!*\
  !*** ../ui/Tab.tsx ***!
  \*********************/
/*! exports provided: Tab, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Tab = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Tab));

/***/ }),

/***/ "../ui/Tabs.tsx":
/*!**********************!*\
  !*** ../ui/Tabs.tsx ***!
  \**********************/
/*! exports provided: DivWrapTab, DivWrapTabMenu, UlLine, LiTab, LiTabActive, DivTabContent, Tabs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivWrapTab", function() { return DivWrapTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivWrapTabMenu", function() { return DivWrapTabMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlLine", function() { return UlLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiTab", function() { return LiTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiTabActive", function() { return LiTabActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivTabContent", function() { return DivTabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\Tabs.tsx";
// import React, { Fragment, useState } from 'react';
// import styled from 'styled-components';
// import { createTabClickAction } from '17media-browser-spy';
// import { trackingSource } from '@vmo/share/17appTrack';
// interface Props {
//   active: string;
//   tabKey?: string;
//   title?: string;
//   tabText?: string;
//   className?: string;
//   itemEndRow?: number[];
//   showTab?: boolean;
// }
// export const DivWrapTab = styled.div``;
// export const DivWrapTabMenu = styled.div``;
// export const UlLine = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   display: flex;
//   justify-content: center;
// `;
// export const LiTab:any = styled.li`
//   flex-grow: 1;
//   cursor: pointer;
// `;
// export const LiTabActive = styled(LiTab)``;
// export const DivTabContent = styled.div``;
// const TabsFC: React.FC<Props> = ({
//   children,
//   active,
//   itemEndRow = [],
//   className,
//   showTab = true,
// }) => {
//   const [activeTab, setActiveTab] = useState(active);
//   const childrenArray = React.Children.toArray(children);
//   let start = 0;
//   const tabGroups = itemEndRow.length
//     ? itemEndRow.map(i => {
//         const items = childrenArray.slice(start, i);
//         start = i;
//         return { groupName: `group${i}`, items };
//       })
//     : [{ groupName: 'group1', items: childrenArray }];
//   return (
//     <DivWrapTab className={className}>
//       <DivWrapTabMenu>
//         {childrenArray.map(item => {
//           const childItem = item as React.ReactElement;
//           const { tabKey, countdown } = childItem.props;
//           if (tabKey !== activeTab) return undefined;
//           return <Fragment key={`${tabKey}_countdown`}>{countdown}</Fragment>;
//         })}
//         {tabGroups.map(group => {
//           return (
//             <UlLine key={group.groupName}>
//               {group.items.map(tab => {
//                 const item = tab as React.ReactElement;
//                 const { tabKey, title, tabText, ranks } = item.props;
//                 if (showTab) {
//                   return tabKey === activeTab ? (
//                     <LiTabActive
//                       onClick={() => {
//                         setActiveTab(tabKey);
//                         trackingSource.track(createTabClickAction('', tabText));
//                       }}
//                       key={tabKey}
//                     >
//                       {title}
//                       {ranks ? ranks.active : null}
//                     </LiTabActive>
//                   ) : (
//                     <LiTab
//                       onClick={() => {
//                         setActiveTab(tabKey);
//                         trackingSource.track(createTabClickAction('', tabText));
//                       }}
//                       key={tabKey}
//                     >
//                       {title}
//                       {ranks ? ranks.inactive: null}
//                     </LiTab>
//                   );
//                 }
//                 return null;
//               })}
//             </UlLine>
//           );
//         })}
//       </DivWrapTabMenu>
//       <DivTabContent>
//         {childrenArray.map(item => {
//           const childItem = item as React.ReactElement;
//           const { tabKey } = childItem.props;
//           if (tabKey !== activeTab) return undefined;
//           const child = item as React.ReactElement;
//           return child.props.children;
//         })}
//       </DivTabContent>
//     </DivWrapTab>
//   );
// };
// export const Tabs: any = styled(TabsFC)``;
// export default Tabs;




const DivWrapTab = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tabs__DivWrapTab",
  componentId: "q7hojp-0"
})([""]);
const DivWrapTabMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tabs__DivWrapTabMenu",
  componentId: "q7hojp-1"
})([""]);
const UlLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Tabs__UlLine",
  componentId: "q7hojp-2"
})(["margin:0;padding:0;list-style-type:none;display:flex;justify-content:center;"]);
const LiTab = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Tabs__LiTab",
  componentId: "q7hojp-3"
})(["flex-grow:1;cursor:pointer;"]);
const LiTabActive = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(LiTab).withConfig({
  displayName: "Tabs__LiTabActive",
  componentId: "q7hojp-4"
})([""]);
const DivTabContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Tabs__DivTabContent",
  componentId: "q7hojp-5"
})([""]);

const TabsFC = ({
  children,
  active,
  itemEndRow = [],
  className,
  showTab = true
}) => {
  const [activeTab, setActiveTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(active);
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children);
  let start = 0;
  const tabGroups = itemEndRow.length ? itemEndRow.map(i => {
    const items = childrenArray.slice(start, i);
    start = i;
    return {
      groupName: `group${i}`,
      items
    };
  }) : [{
    groupName: 'group1',
    items: childrenArray
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivWrapTab, {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivWrapTabMenu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, childrenArray.map(item => {
    const childItem = item;
    const {
      tabKey,
      countdown
    } = childItem.props;
    if (tabKey !== activeTab) return undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: `${tabKey}_countdown`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 18
      }
    }, countdown);
  }), childrenArray.map(item => {
    const childItem = item;
    const {
      tabKey,
      teamBg
    } = childItem.props;
    if (tabKey !== activeTab) return undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: `${tabKey}_teamBg`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 18
      }
    }, teamBg);
  }), tabGroups.map(group => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UlLine, {
      key: group.groupName,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, group.items.map(tab => {
      const item = tab;
      const {
        tabKey,
        title,
        tabText,
        ranks,
        crown,
        vs
      } = item.props;

      if (showTab) {
        return tabKey === activeTab ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LiTabActive, {
          onClick: () => {
            setActiveTab(tabKey);
            _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_3__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["createTabClickAction"])('', tabText));
          },
          key: tabKey,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 21
          }
        }, title, ranks ? ranks.active : null, crown ? crown.active : null, vs ? vs : null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LiTab, {
          onClick: () => {
            setActiveTab(tabKey);
            _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_3__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["createTabClickAction"])('', tabText));
          },
          key: tabKey,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 21
          }
        }, title, ranks ? ranks.inactive : null, crown ? crown.inactive : null, vs ? vs : null);
      }

      return null;
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DivTabContent, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, childrenArray.map(item => {
    const childItem = item;
    const {
      tabKey
    } = childItem.props;
    if (tabKey !== activeTab) return undefined;
    const child = item;
    return child.props.children;
  })));
};

const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(TabsFC).withConfig({
  displayName: "Tabs",
  componentId: "q7hojp-6"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "../ui/VirtualizedList.tsx":
/*!*********************************!*\
  !*** ../ui/VirtualizedList.tsx ***!
  \*********************************/
/*! exports provided: VirtualizedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualizedList", function() { return VirtualizedList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-window */ "react-window");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\VirtualizedList.tsx";






const VariableSizeListContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_window__WEBPACK_IMPORTED_MODULE_1__["VariableSizeList"]).withConfig({
  displayName: "VirtualizedList__VariableSizeListContainer",
  componentId: "sc-1lra6yy-0"
})(["height:", "px !important;overflow:hidden !important;.virtualized-item:first-of-type{overflow:hidden;border-top-left-radius:2.6vw;border-top-right-radius:2.6vw;@media screen and (min-width:800px){border-top-left-radius:20px;border-top-right-radius:20px;}}.virtualized-item:last-of-type{overflow:hidden;border-bottom-left-radius:2.6vw;border-bottom-right-radius:2.6vw;@media screen and (min-width:800px){border-bottom-left-radius:20px;border-bottom-right-radius:20px;}}"], props => props.calculatedHeight);

const TrackChildrenWrapper = ({
  index,
  style,
  children,
  rank
}) => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__["useRankSectionTracking"])(ref, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_5__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__["createLeaderboardSectionViewAction"])(rank));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    style: style,
    className: "virtualized-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, children({
    index
  }));
};

const VirtualizedList = ({
  dataset,
  children,
  itemHeight = 81,
  updateOnID = '',
  panelSize = 0
}) => {
  const listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const queryString = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["qs"])();
  const getInitScrollOffset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (listRef.current) {
      // eslint-disable-next-line no-underscore-dangle
      const boardRect = listRef.current._outerRef.getBoundingClientRect();

      return boardRect.top < 0 ? -boardRect.top : 0;
    }

    return -1;
  }, [listRef]);
  const handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const initialScrollOffset = getInitScrollOffset();

    if (initialScrollOffset >= 0) {
      listRef.current.scrollTo(initialScrollOffset);
    }
  }, [getInitScrollOffset]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [handleScroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (queryString.streamerUserID) {
      const fIndex = dataset.findIndex(item => item.userInfo.userID === queryString.streamerUserID);

      if (fIndex > -1) {
        window.scrollTo({
          top: // eslint-disable-next-line no-underscore-dangle
          Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_4__["cumulativeOffset"])(listRef.current._outerRef).top + fIndex * itemHeight
        });
      }
    }
  }, [dataset, itemHeight, queryString.streamerUserID]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    listRef.current.resetAfterIndex(0, true);
    setTimeout(() => {
      handleScroll();
    });
  }, [handleScroll, updateOnID, dataset]);

  const Row = ({
    index,
    style
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TrackChildrenWrapper, {
    index: index,
    style: style,
    children: children,
    rank: dataset[index].rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  });

  const getItemSize = index => {
    if (updateOnID && updateOnID === dataset[index].userID) {
      return itemHeight + panelSize;
    }

    return itemHeight;
  };

  const getCalculatedHeight = () => {
    if (updateOnID !== '') {
      return dataset.length * itemHeight + panelSize + 10;
    }

    return dataset.length * itemHeight + 10;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VariableSizeListContainer, {
    ref: listRef,
    height: window.innerHeight,
    itemCount: dataset.length,
    itemSize: getItemSize,
    width: '100%',
    calculatedHeight: getCalculatedHeight(),
    initialScrollOffset: getInitScrollOffset(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, Row);
};

/***/ }),

/***/ "../ui/hoc/index.ts":
/*!**************************!*\
  !*** ../ui/hoc/index.ts ***!
  \**************************/
/*! exports provided: withAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withAttrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withAttrs */ "../ui/hoc/withAttrs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAttrs", function() { return _withAttrs__WEBPACK_IMPORTED_MODULE_0__["withAttrs"]; });



/***/ }),

/***/ "../ui/hoc/withAttrs.tsx":
/*!*******************************!*\
  !*** ../ui/hoc/withAttrs.tsx ***!
  \*******************************/
/*! exports provided: withAttrs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAttrs", function() { return withAttrs; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\ui\\hoc\\withAttrs.tsx";

const withAttrs = Component => props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 56
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (withAttrs);

/***/ }),

/***/ "../ui/hooks/TabsRefContext.ts":
/*!*************************************!*\
  !*** ../ui/hooks/TabsRefContext.ts ***!
  \*************************************/
/*! exports provided: TabsRefContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRefContext", function() { return TabsRefContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TabsRefContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

/***/ }),

/***/ "../ui/hooks/api/sort.ts":
/*!*******************************!*\
  !*** ../ui/hooks/api/sort.ts ***!
  \*******************************/
/*! exports provided: sortTab00, sortTab100, sortTab200, sortTab210, sortTab220, sortTab30, sortTab40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab00", function() { return sortTab00; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab100", function() { return sortTab100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab200", function() { return sortTab200; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab210", function() { return sortTab210; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab220", function() { return sortTab220; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab30", function() { return sortTab30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTab40", function() { return sortTab40; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "../../node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");


// import { now } from '@17media/dad';
// import { conditionMatch } from '@vmo/share/utils';
// import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
// const sortTab200Amount = [
//   {
//     filterCondition: '<',
//     value: 31,
//     conditionValue: 'rank',
//     amount: 0,
//   },
//   {
//     filterCondition: '===',
//     value: 2,
//     conditionValue: 'rank',
//     amount: 60,
//   },
//   {
//     filterCondition: '===',
//     value: 3,
//     conditionValue: 'rank',
//     amount: 55,
//   },
//   {
//     filterCondition: '===',
//     value: 4,
//     conditionValue: 'rank',
//     amount: 50,
//   },
//   {
//     filterCondition: '===',
//     value: 5,
//     conditionValue: 'rank',
//     amount: 45,
//   },
//   {
//     filterCondition: '===',
//     value: 6,
//     conditionValue: 'rank',
//     amount: 44,
//   },
//   {
//     filterCondition: '===',
//     value: 7,
//     conditionValue: 'rank',
//     amount: 43,
//   },
//   {
//     filterCondition: '===',
//     value: 8,
//     conditionValue: 'rank',
//     amount: 42,
//   },
//   {
//     filterCondition: '===',
//     value: 9,
//     conditionValue: 'rank',
//     amount: 41,
//   },
//   {
//     filterCondition: '===',
//     value: 10,
//     conditionValue: 'rank',
//     amount: 40,
//   },
//   {
//     filterCondition: '===',
//     value: 11,
//     conditionValue: 'rank',
//     amount: 39,
//   },
//   {
//     filterCondition: '===',
//     value: 12,
//     conditionValue: 'rank',
//     amount: 38,
//   },
//   {
//     filterCondition: '===',
//     value: 13,
//     conditionValue: 'rank',
//     amount: 37,
//   },
//   {
//     filterCondition: '===',
//     value: 14,
//     conditionValue: 'rank',
//     amount: 36,
//   },
//   {
//     filterCondition: '===',
//     value: 15,
//     conditionValue: 'rank',
//     amount: 35,
//   },
//   {
//     filterCondition: '===',
//     value: 16,
//     conditionValue: 'rank',
//     amount: 34,
//   },
//   {
//     filterCondition: '===',
//     value: 17,
//     conditionValue: 'rank',
//     amount: 33,
//   },
//   {
//     filterCondition: '===',
//     value: 18,
//     conditionValue: 'rank',
//     amount: 32,
//   },
//   {
//     filterCondition: '===',
//     value: 19,
//     conditionValue: 'rank',
//     amount: 31,
//   },
//   {
//     filterCondition: '===',
//     value: 20,
//     conditionValue: 'rank',
//     amount: 30,
//   },
//   {
//     filterCondition: '===',
//     value: 21,
//     conditionValue: 'rank',
//     amount: 29,
//   },
//   {
//     filterCondition: '===',
//     value: 22,
//     conditionValue: 'rank',
//     amount: 28,
//   },
//   {
//     filterCondition: '===',
//     value: 23,
//     conditionValue: 'rank',
//     amount: 27,
//   },
//   {
//     filterCondition: '===',
//     value: 24,
//     conditionValue: 'rank',
//     amount: 26,
//   },
//   {
//     filterCondition: '===',
//     value: 25,
//     conditionValue: 'rank',
//     amount: 25,
//   },
//   {
//     filterCondition: '===',
//     value: 26,
//     conditionValue: 'rank',
//     amount: 24,
//   },
//   {
//     filterCondition: '===',
//     value: 27,
//     conditionValue: 'rank',
//     amount: 23,
//   },
//   {
//     filterCondition: '===',
//     value: 28,
//     conditionValue: 'rank',
//     amount: 22,
//   },
//   {
//     filterCondition: '===',
//     value: 29,
//     conditionValue: 'rank',
//     amount: 21,
//   },
//   {
//     filterCondition: '===',
//     value: 30,
//     conditionValue: 'rank',
//     amount: 20,
//   },
//   {
//     filterCondition: '===',
//     value: 31,
//     conditionValue: 'rank',
//     amount: 19,
//   },
// ];
// const sortTab210Amount = [
//   {
//     filterCondition: '<',
//     value: 31,
//     conditionValue: 'rank',
//     amount: 0,
//   },
//   {
//     filterCondition: '<',
//     value: 28,
//     conditionValue: 'rank',
//     amount: 1,
//   },
//   {
//     filterCondition: '===',
//     value: 2,
//     conditionValue: 'rank',
//     amount: 40,
//   },
//   {
//     filterCondition: '===',
//     value: 3,
//     conditionValue: 'rank',
//     amount: 35,
//   },
//   {
//     filterCondition: '===',
//     value: 4,
//     conditionValue: 'rank',
//     amount: 30,
//   },
//   {
//     filterCondition: '===',
//     value: 5,
//     conditionValue: 'rank',
//     amount: 25,
//   },
//   {
//     filterCondition: '===',
//     value: 6,
//     conditionValue: 'rank',
//     amount: 24,
//   },
//   {
//     filterCondition: '===',
//     value: 7,
//     conditionValue: 'rank',
//     amount: 23,
//   },
//   {
//     filterCondition: '===',
//     value: 8,
//     conditionValue: 'rank',
//     amount: 22,
//   },
//   {
//     filterCondition: '===',
//     value: 9,
//     conditionValue: 'rank',
//     amount: 21,
//   },
//   {
//     filterCondition: '===',
//     value: 10,
//     conditionValue: 'rank',
//     amount: 20,
//   },
//   {
//     filterCondition: '===',
//     value: 11,
//     conditionValue: 'rank',
//     amount: 19,
//   },
//   {
//     filterCondition: '===',
//     value: 12,
//     conditionValue: 'rank',
//     amount: 18,
//   },
//   {
//     filterCondition: '===',
//     value: 13,
//     conditionValue: 'rank',
//     amount: 17,
//   },
//   {
//     filterCondition: '===',
//     value: 14,
//     conditionValue: 'rank',
//     amount: 16,
//   },
//   {
//     filterCondition: '===',
//     value: 15,
//     conditionValue: 'rank',
//     amount: 15,
//   },
//   {
//     filterCondition: '===',
//     value: 16,
//     conditionValue: 'rank',
//     amount: 14,
//   },
//   {
//     filterCondition: '===',
//     value: 17,
//     conditionValue: 'rank',
//     amount: 13,
//   },
//   {
//     filterCondition: '===',
//     value: 18,
//     conditionValue: 'rank',
//     amount: 12,
//   },
//   {
//     filterCondition: '===',
//     value: 19,
//     conditionValue: 'rank',
//     amount: 11,
//   },
//   {
//     filterCondition: '===',
//     value: 20,
//     conditionValue: 'rank',
//     amount: 10,
//   },
//   {
//     filterCondition: '===',
//     value: 21,
//     conditionValue: 'rank',
//     amount: 9,
//   },
//   {
//     filterCondition: '===',
//     value: 22,
//     conditionValue: 'rank',
//     amount: 8,
//   },
//   {
//     filterCondition: '===',
//     value: 23,
//     conditionValue: 'rank',
//     amount: 7,
//   },
//   {
//     filterCondition: '===',
//     value: 24,
//     conditionValue: 'rank',
//     amount: 6,
//   },
//   {
//     filterCondition: '===',
//     value: 25,
//     conditionValue: 'rank',
//     amount: 5,
//   },
//   {
//     filterCondition: '===',
//     value: 26,
//     conditionValue: 'rank',
//     amount: 4,
//   },
//   {
//     filterCondition: '===',
//     value: 27,
//     conditionValue: 'rank',
//     amount: 3,
//   },
//   {
//     filterCondition: '===',
//     value: 28,
//     conditionValue: 'rank',
//     amount: 2,
//   },
// ];
// export const sortTab00 = (data: any) => {
//   if (data && data.length && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };
// export const sortTab10 = sortTab00;
// export const sortTab200 = (data: any) => {
//   if (data && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       const amountItem = conditionMatch(sortTab200Amount, item);
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//           amount: amountItem.amount,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };
// export const sortTab210 = (data: any) => {
//   if (data && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       const amountItem = conditionMatch(sortTab210Amount, item);
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//           amount: amountItem.amount,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };
// export const sortTab40 = (data: any) => {
//   if (data && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       let findMeta = {
//         s2: 0,
//         s5: 0,
//         r1: 0,
//         r2: 0,
//       };
//       if (data[1]) {
//         const findItem = data[1].find(
//           f => f.userInfo.userID === userInfo.userID,
//         );
//         if (findItem) {
//           findMeta = findItem.meta;
//         }
//       }
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//           ...findMeta,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };
// export const sortTab410 = sortTab40;
// export const sortTab0330 = (data: any) => {
//   if (data && data.length && data[0] && data[0].streamers) {
//     const newData = data[0].streamers.map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         picture,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       let finalScore = score;
//       if (meta && meta.bonus) {
//         finalScore = parseInt(finalScore + meta.bonus, 10);
//       }
//       return {
//         type,
//         userID,
//         lastTimestamp,
//         rank: index,
//         score: finalScore || 0,
//         meta: {
//           ...meta,
//         },
//         userInfo: {
//           userID,
//           displayName: name,
//           picture,
//         },
//         roomID:
//           userInfo && userInfo.onliveInfo
//             ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//             : 0,
//       };
//     });
//     const finalData = newData
//       .sort((a, b) => b.score - a.score)
//       .map((s, i) => ({
//         ...s,
//         rank: i,
//       }));
//     return finalData;
//   }
//   return [];
// };
// export const sortTab0331 = (data: any) => {
//   let startTimeCheck = 0;
//   let votedList = [];
//   if (data[1]) {
//     startTimeCheck = data[1].startTime;
//   }
//   if (data[2] && data[2].votedTo) {
//     votedList = data[2].votedTo;
//   }
//   if (data && data.length && data[0] && data[0].streamers) {
//     const newData = data[0].streamers.map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         picture,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       let voteInfo = {};
//       const nowTime = now();
//       if (startTimeCheck > 0 && nowTime >= startTimeCheck) {
//         voteInfo = {
//           status: true,
//         };
//         if (votedList && votedList.length > 0) {
//           voteInfo = {
//             status: !votedList.includes(userInfo.userID),
//           };
//         }
//       }
//       return {
//         type,
//         userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo: {
//           userID,
//           displayName: name,
//           picture,
//         },
//         meta: {
//           ...meta,
//         },
//         voteInfo,
//         roomID:
//           userInfo && userInfo.onliveInfo
//             ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//             : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };
// export const sortTabCache = (data: any) => {
//   if (data && data.length && data[0] && data[0].streamers) {
//     const newData = data[0].streamers.map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         picture,
//         name,
//         meta,
//         bonus,
//         userInfo,
//       } = item;
//       return {
//         type,
//         userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         meta: {
//           bonus: bonus || 0,
//           ...meta,
//         },
//         userInfo: {
//           userID,
//           displayName: name,
//           picture,
//         },
//         roomID:
//           userInfo && userInfo.onliveInfo
//             ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//             : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };
const sortTab00 = data => {
  if (data && data.length && data[0]) {
    const newData = data[0].map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta) // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,

      };
    });
    return newData;
  }

  return [];
};
const sortTab100 = (data, team) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];

    switch (team) {
      case 'ginger':
        {
          selectData = gingerData || [];
          break;
        }

      case 'candy':
        {
          selectData = candyData || [];
          break;
        }

      case 'sock':
      default:
        {
          selectData = sockData || [];
        }
    } // total scores


    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0; // socks

    if (sockData && sockData.length > 0) {
      sockData.forEach(item => {
        sockScores += item.score || 0;
      });
    } // candycane


    if (candyData && candyData.length > 0) {
      candyData.forEach(item => {
        candyScores += item.score || 0;
      });
    } // gingerman


    if (gingerData && gingerData.length > 0) {
      gingerData.forEach(item => {
        gingerScores += item.score || 0;
      });
    }

    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta) // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,

      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores
      }
    };
  }

  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0
    },
    data: []
  };
};
const sortTab200 = (data, team) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];

    switch (team) {
      case 'ginger':
        {
          selectData = gingerData || [];
          break;
        }

      case 'candy':
        {
          selectData = candyData || [];
          break;
        }

      case 'sock':
      default:
        {
          selectData = sockData || [];
        }
    } // total scores


    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0; // socks

    if (sockData && sockData.length > 0) {
      sockData.forEach(item => {
        sockScores += item.score || 0;
      });
    } // candycane


    if (candyData && candyData.length > 0) {
      candyData.forEach(item => {
        candyScores += item.score || 0;
      });
    } // gingerman


    if (gingerData && gingerData.length > 0) {
      gingerData.forEach(item => {
        gingerScores += item.score || 0;
      });
    }

    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta) // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,

      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores
      }
    };
  }

  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0
    },
    data: []
  };
};
const sortTab210 = (data, team) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];

    switch (team) {
      case 'ginger':
        {
          selectData = gingerData || [];
          break;
        }

      case 'candy':
        {
          selectData = candyData || [];
          break;
        }

      case 'sock':
      default:
        {
          selectData = sockData || [];
        }
    } // total scores


    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0; // socks

    if (sockData && sockData.length > 0) {
      sockData.forEach(item => {
        sockScores += item.score || 0;
      });
    } // candycane


    if (candyData && candyData.length > 0) {
      candyData.forEach(item => {
        candyScores += item.score || 0;
      });
    } // gingerman


    if (gingerData && gingerData.length > 0) {
      gingerData.forEach(item => {
        gingerScores += item.score || 0;
      });
    }

    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta),
        roomID: userInfo.onliveInfo ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(userInfo.onliveInfo.liveStreamID, 10) : 0
      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores
      }
    };
  }

  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0
    },
    data: []
  };
};
const sortTab220 = (data, team) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];

    switch (team) {
      case 'ginger':
        {
          selectData = gingerData || [];
          break;
        }

      case 'candy':
        {
          selectData = candyData || [];
          break;
        }

      case 'sock':
      default:
        {
          selectData = sockData || [];
        }
    } // total scores


    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0; // socks

    if (sockData && sockData.length > 0) {
      sockData.forEach(item => {
        sockScores += item.score || 0;
      });
    } // candycane


    if (candyData && candyData.length > 0) {
      candyData.forEach(item => {
        candyScores += item.score || 0;
      });
    } // gingerman


    if (gingerData && gingerData.length > 0) {
      gingerData.forEach(item => {
        gingerScores += item.score || 0;
      });
    }

    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta) // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,

      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores
      }
    };
  }

  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0
    },
    data: []
  };
};
const sortTab30 = data => {
  if (data && data.length && data[0]) {
    const newData = data[0].map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;

      const bonus = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
        total: 0,
        r2: 0,
        s4: 0
      }, meta);

      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, bonus, {
          total: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(bonus.r2, 10) + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(bonus.s4, 10)
        })
      };
    });
    return newData;
  }

  return [];
};
const sortTab40 = data => {
  if (data && data[0]) {
    const newData = data[0].map((item, index) => {
      const {
        type,
        userID,
        score,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta
      } = item;
      let findMeta = {
        r2: 0,
        s4: 0
      };

      if (data[1]) {
        const findItem = data[1].find(f => f.userInfo.userID === userInfo.userID);

        if (findItem) {
          findMeta = findItem.meta;
        }
      }

      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, meta, findMeta),
        roomID: userInfo.onliveInfo ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(userInfo.onliveInfo.liveStreamID, 10) : 0
      };
    });
    return newData;
  }

  return [];
};

/***/ }),

/***/ "../ui/hooks/api/useTypeApi.ts":
/*!*************************************!*\
  !*** ../ui/hooks/api/useTypeApi.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vmo_share_services_leaderboardVote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/services/leaderboardVote.service */ "../share/services/leaderboardVote.service.ts");
/* harmony import */ var _vmo_share_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/services/leaderboard.service */ "../share/services/leaderboard.service.ts");
/* harmony import */ var _vmo_share_services_leaderboardCache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/share/services/leaderboardCache.service */ "../share/services/leaderboardCache.service.ts");
/* harmony import */ var _vmo_share_services_leaderboardEventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/share/services/leaderboardEventory.service */ "../share/services/leaderboardEventory.service.ts");

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import axios, { CancelTokenSource } from 'axios';
// import { api } from '@vmo/web/constants/api';
// import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
// import { getLeaderboardVote } from '@vmo/share/services/leaderboardVote.service';
// import { getLeaderboard } from '@vmo/share/services/leaderboard.service';
// import { getLeaderboardCache } from '@vmo/share/services/leaderboardCache.service';
// import { getLeaderboardEventory } from '@vmo/share/services/leaderboardEventory.service';
// import { hashCode } from './utils';
// type APIType = {
//   sta: string;
//   prod: string;
//   isCache?: boolean;
//   isVote?: boolean;
//   isEventory?: boolean;
//   firstRender?: boolean;
// };
// const useTypeApi = (
//   apiList = [],
//   method = 'GET',
//   realTime: number,
//   hashCheck,
//   initialData: any,
//   opt = {
//     limit: 1000,
//     cursor: '',
//   },
// ) => {
//   /* eslint-disable */
//   const timeoutKey = useRef(0);
//   const source = useRef<CancelTokenSource>();
//   const [loading, setLoading] = useState(false);
//   const [polling, setPolling] = useState(false);
//   const [leaderboardData, setLeaderboardData] = useState(initialData);
//   const getDataRealTimeAPI = useCallback((apis = [], time, previousData) => {
//     timeoutKey.current = setTimeout(async () => {
//       setPolling(true);
//       const apiArr = [];
//       apis.forEach((item: APIType) => {
//         if (item.isCache) {
//           apiArr.push(
//             getLeaderboardCache(
//               {
//                 sta: item.sta,
//                 prod: item.prod,
//               },
//               source.current.token,
//             ),
//           );
//         } else if (item.isVote) {
//           apiArr.push(
//             getLeaderboardVote(
//               {
//                 sta: item.sta,
//                 prod: item.prod,
//               },
//               source.current.token,
//             ),
//           );
//         } else if (item.isEventory) {
//           apiArr.push(
//             getLeaderboardEventory(
//               item,
//               source.current.token,
//               opt.limit,
//               opt.cursor,
//               method,
//             ),
//           );
//         } else {
//           apiArr.push(
//             getLeaderboard(
//               item,
//               source.current.token,
//               opt.limit,
//               opt.cursor,
//               method,
//             ),
//           );
//         }
//       });
//       const results = await Promise.all(apiArr);
//       setLeaderboardData(results);
//       setPolling(false);
//     }, time);
//   }, []);
//   useEffect(() => {
//     setLoading(true);
//     const promiseList = [];
//     source.current = axios.CancelToken.source();
//     apiList.forEach((item: APIType) => {
//       if (item.isCache) {
//         promiseList.push(
//           getLeaderboardCache(
//             {
//               sta: item.sta,
//               prod: item.prod,
//             },
//             source.current.token,
//           ),
//         );
//       } else if (item.isVote) {
//         promiseList.push(
//           getLeaderboardVote(
//             {
//               sta: item.sta,
//               prod: item.prod,
//             },
//             source.current.token,
//           ),
//         );
//       } else if (item.isEventory) {
//         promiseList.push(
//           getLeaderboardEventory(
//             item,
//             source.current.token,
//             opt.limit,
//             opt.cursor,
//             method,
//             (data: any) => {
//               if (item.firstRender) {
//                 setLeaderboardData([data]);
//                 setLoading(false);
//               }
//             },
//           ),
//         );
//       } else {
//         promiseList.push(
//           getLeaderboard(
//             item,
//             source.current.token,
//             opt.limit,
//             opt.cursor,
//             method,
//             (data: any) => {
//               if (item.firstRender) {
//                 setLeaderboardData([data]);
//                 setLoading(false);
//               }
//             },
//           ),
//         );
//       }
//     });
//     Promise.all(promiseList).then(async (results: any) => {
//       setLeaderboardData(results);
//       setLoading(false);
//     });
//     return () => {
//       if (source.current) source.current.cancel();
//       if (timeoutKey.current) clearTimeout(timeoutKey.current);
//     };
//   }, []);
//   useEffect(() => {
//     if (!polling && realTime > 0) {
//       clearTimeout(timeoutKey.current);
//       timeoutKey.current = 0;
//       getDataRealTimeAPI(apiList, realTime, leaderboardData);
//     }
//   }, [polling, leaderboardData, apiList, realTime]);
//   return { loading, leaderboardData };
// };
// export default useTypeApi;







const useTypeApi = (apiList = [], method = 'GET', realTime, hashCheck, initialData, opt = {
  limit: 1000,
  cursor: ''
}) => {
  /* eslint-disable */
  const timeoutKey = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  const source = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [polling, setPolling] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [leaderboardData, setLeaderboardData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialData);
  const getDataRealTimeAPI = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((apis = [], time, previousData) => {
    timeoutKey.current = setTimeout(async () => {
      setPolling(true);
      const apiArr = [];
      apis.forEach(item => {
        if (item.isCache) {
          apiArr.push(Object(_vmo_share_services_leaderboardCache_service__WEBPACK_IMPORTED_MODULE_5__["getLeaderboardCache"])({
            sta: item.sta,
            prod: item.prod
          }, source.current.token));
        } else if (item.isVote) {
          apiArr.push(Object(_vmo_share_services_leaderboardVote_service__WEBPACK_IMPORTED_MODULE_3__["getLeaderboardVote"])({
            sta: item.sta,
            prod: item.prod
          }, source.current.token));
        } else if (item.isEventory) {
          apiArr.push(Object(_vmo_share_services_leaderboardEventory_service__WEBPACK_IMPORTED_MODULE_6__["getLeaderboardEventory"])(item, source.current.token, opt.limit, opt.cursor, method));
        } else {
          apiArr.push(Object(_vmo_share_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__["getLeaderboard"])(item, source.current.token, opt.limit, opt.cursor, method));
        }
      });
      const results = await _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(apiArr);
      setLeaderboardData(results);
      setPolling(false);
    }, time);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLoading(true);
    const promiseList = [];
    source.current = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
    apiList.forEach(item => {
      if (item.isCache) {
        promiseList.push(Object(_vmo_share_services_leaderboardCache_service__WEBPACK_IMPORTED_MODULE_5__["getLeaderboardCache"])({
          sta: item.sta,
          prod: item.prod
        }, source.current.token));
      } else if (item.isVote) {
        promiseList.push(Object(_vmo_share_services_leaderboardVote_service__WEBPACK_IMPORTED_MODULE_3__["getLeaderboardVote"])({
          sta: item.sta,
          prod: item.prod
        }, source.current.token));
      } else if (item.isEventory) {
        promiseList.push(Object(_vmo_share_services_leaderboardEventory_service__WEBPACK_IMPORTED_MODULE_6__["getLeaderboardEventory"])(item, source.current.token, opt.limit, opt.cursor, method, data => {
          if (item.firstRender) {
            setLeaderboardData([data]);
            setLoading(false);
          }
        }));
      } else {
        promiseList.push(Object(_vmo_share_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__["getLeaderboard"])(item, source.current.token, opt.limit, opt.cursor, method, data => {
          if (item.firstRender) {
            setLeaderboardData([data]);
            setLoading(false);
          }
        }));
      }
    });

    _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promiseList).then(async results => {
      setLeaderboardData(results);
      setLoading(false);
    });

    return () => {
      if (source.current) source.current.cancel();
      if (timeoutKey.current) clearTimeout(timeoutKey.current);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!polling && realTime > 0) {
      clearTimeout(timeoutKey.current);
      timeoutKey.current = 0;
      getDataRealTimeAPI(apiList, realTime, leaderboardData);
    }
  }, [polling, leaderboardData, apiList, realTime]);
  return {
    loading,
    leaderboardData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTypeApi);

/***/ }),

/***/ "../ui/hooks/index.ts":
/*!****************************!*\
  !*** ../ui/hooks/index.ts ***!
  \****************************/
/*! exports provided: useCountDown, useDeepLink, useFilter, useTrackPageEnter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useCountDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCountDown */ "../ui/hooks/useCountDown.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCountDown", function() { return _useCountDown__WEBPACK_IMPORTED_MODULE_0__["useCountDown"]; });

/* harmony import */ var _useStartRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStartRender */ "../ui/hooks/useStartRender.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _useDeepLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDeepLink */ "../ui/hooks/useDeepLink.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDeepLink", function() { return _useDeepLink__WEBPACK_IMPORTED_MODULE_2__["useDeepLink"]; });

/* harmony import */ var _useFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFilter */ "../ui/hooks/useFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilter", function() { return _useFilter__WEBPACK_IMPORTED_MODULE_3__["useFilter"]; });

/* harmony import */ var _useTrackPageEnter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTrackPageEnter */ "../ui/hooks/useTrackPageEnter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrackPageEnter", function() { return _useTrackPageEnter__WEBPACK_IMPORTED_MODULE_4__["useTrackPageEnter"]; });







/***/ }),

/***/ "../ui/hooks/useCountDown.ts":
/*!***********************************!*\
  !*** ../ui/hooks/useCountDown.ts ***!
  \***********************************/
/*! exports provided: useCountDown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCountDown", function() { return useCountDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @17media/dad */ "@17media/dad");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_17media_dad__WEBPACK_IMPORTED_MODULE_1__);


const day = 1000 * 60 * 60 * 24;
const h = 1000 * 60 * 60;
const m = 1000 * 60;

const getRelatedDistance = dist => {
  return {
    d: Math.max(0, Math.floor(dist / day)),
    h: Math.max(0, Math.floor(dist / h) % 24),
    m: Math.max(0, Math.floor(dist / m) % 60),
    s: Math.max(0, Math.floor(dist / 1000) % 60),
    ms: Math.max(0, dist % 1000)
  };
};

const useCountDown = endTime => {
  let distance = endTime - Object(_17media_dad__WEBPACK_IMPORTED_MODULE_1__["now"])() * 1000;
  const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(distance);
  let timer = 0;
  const countDown = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    distance = endTime - Object(_17media_dad__WEBPACK_IMPORTED_MODULE_1__["now"])() * 1000;
    setCount(distance);

    if (distance > 0) {
      timer = requestAnimationFrame(countDown);
    }
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    timer = requestAnimationFrame(countDown);
    return () => {
      cancelAnimationFrame(timer);
    };
  }, []);
  return getRelatedDistance(count);
};
/* harmony default export */ __webpack_exports__["default"] = (useCountDown);

/***/ }),

/***/ "../ui/hooks/useDeepLink.ts":
/*!**********************************!*\
  !*** ../ui/hooks/useDeepLink.ts ***!
  \**********************************/
/*! exports provided: useDeepLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeepLink", function() { return useDeepLink; });
/* harmony import */ var _vmo_share_17app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/share/17app */ "../share/17app.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");



const useDeepLink = (userID, openID, streamID = 0) => {
  const handleClickItem = () => {
    Object(_vmo_share_17app__WEBPACK_IMPORTED_MODULE_0__["open"])(userID, openID, streamID); // Track

    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_2__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_1__["createProfileClickAction"])(userID, streamID > 0, 'avatar'));
  };

  return {
    handleClickItem
  };
};

/***/ }),

/***/ "../ui/hooks/useFilter.ts":
/*!********************************!*\
  !*** ../ui/hooks/useFilter.ts ***!
  \********************************/
/*! exports provided: useFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFilter", function() { return useFilter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");





const useFilter = initialData => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialData);
  const [isFiltering, setIsFiltering] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const handleOnChange = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["debounce"])(value => {
    if (value) {
      let filterData = [];
      filterData = initialData.filter(item => {
        const name = item.userInfo.displayName || item.userInfo.openID || '';
        return name.toLowerCase().includes(value.trim().toLowerCase());
      });
      setData(filterData);
      setIsFiltering(true); // Track

      _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["createSearchAction"])(value, filterData.length));
    } else {
      setData(initialData);
      setIsFiltering(false);
    }
  }, 500); // sync the new state of the initialData

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isFiltering) {
      setData(preState => {
        let newState = [];

        if (preState && preState.length > 0 && initialData && initialData.length > 0) {
          newState = preState.map(item => {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialData.find(x => x.userID === item.userID));
          });
        }

        newState.sort((l, n) => n.score - l.score);
        return newState;
      });
    } else {
      setData(initialData);
    }
  }, [initialData, isFiltering]);
  return {
    data,
    handleOnChange
  };
};

/***/ }),

/***/ "../ui/hooks/useQueryString.ts":
/*!*************************************!*\
  !*** ../ui/hooks/useQueryString.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");



const useQueryString = loading => {
  const queryString = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["qs"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (queryString.streamerUserID && loading) {
      const target = document.getElementById(`loading-container`);
      target.scrollIntoView();
    }
  }, [loading, queryString.streamerUserID]);
};

/* harmony default export */ __webpack_exports__["default"] = (useQueryString);

/***/ }),

/***/ "../ui/hooks/useStartRender.ts":
/*!*************************************!*\
  !*** ../ui/hooks/useStartRender.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useStartRender = () => {
  const [startRender, setStartRender] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setStartRender(true);
  }, []);
  return startRender;
};

/* harmony default export */ __webpack_exports__["default"] = (useStartRender);

/***/ }),

/***/ "../ui/hooks/useTrackPageEnter.ts":
/*!****************************************!*\
  !*** ../ui/hooks/useTrackPageEnter.ts ***!
  \****************************************/
/*! exports provided: useTrackPageEnter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrackPageEnter", function() { return useTrackPageEnter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");




const useTrackPageEnter = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const queryString = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["qs"])();
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_3__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_1__["createPageEnterAction"])(queryString.utm_campaign || '', queryString.utm_content || '', queryString.utm_medium || '', queryString.utm_source || ''));
  }, []);
};

/***/ }),

/***/ "../ui/hooks/useTranslation.ts":
/*!*************************************!*\
  !*** ../ui/hooks/useTranslation.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const defaultLang = 'zh_TW';

const useTranslation = startRender => {
  const [translation, setTranslation] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());
  const getTranslation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    // eslint-disable-next-line
    const response = __webpack_require__(/*! ../../web/constants/translations.json */ "./constants/translations.json");

    if (response && response.length > 0) {
      const translationTransformed = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a();
      response.forEach(item => {
        const {
          key
        } = item;
        const langItem = item.values.find(data => data.language === defaultLang);
        let langValue = '';

        if (langItem) {
          langValue = langItem.value;
        } else {
          const zhLangItem = item.values.find(data => data.language === 'defaultLang');

          if (zhLangItem) {
            langValue = zhLangItem.value;
          }
        }

        translationTransformed.set(key, langValue);
      });
      setTranslation(translationTransformed);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (startRender) {
      getTranslation();
    }
  }, [getTranslation, startRender]);
  return translation;
};

/* harmony default export */ __webpack_exports__["default"] = (useTranslation);

/***/ }),

/***/ "../ui/index.ts":
/*!**********************!*\
  !*** ../ui/index.ts ***!
  \**********************/
/*! exports provided: EventPage, GlobalStyles, Cover, Loading, LeaderboardItem, Tab, DivWrapTab, DivWrapTabMenu, UlLine, LiTab, LiTabActive, DivTabContent, Tabs, EventCountdown, VirtualizedList, CopyButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventPage */ "../ui/EventPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return _EventPage__WEBPACK_IMPORTED_MODULE_0__["EventPage"]; });

/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalStyles */ "../ui/GlobalStyles.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return _GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["GlobalStyles"]; });

/* harmony import */ var _Cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cover */ "../ui/Cover.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cover", function() { return _Cover__WEBPACK_IMPORTED_MODULE_2__["Cover"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "../ui/Loading.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_3__["Loading"]; });

/* harmony import */ var _LeaderboardItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LeaderboardItem */ "../ui/LeaderboardItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeaderboardItem", function() { return _LeaderboardItem__WEBPACK_IMPORTED_MODULE_4__["LeaderboardItem"]; });

/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tab */ "../ui/Tab.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _Tab__WEBPACK_IMPORTED_MODULE_5__["Tab"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tabs */ "../ui/Tabs.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWrapTab", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["DivWrapTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivWrapTabMenu", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["DivWrapTabMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UlLine", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["UlLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiTab", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["LiTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiTabActive", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["LiTabActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivTabContent", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["DivTabContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_6__["Tabs"]; });

/* harmony import */ var _EventCountdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventCountdown */ "../ui/EventCountdown.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventCountdown", function() { return _EventCountdown__WEBPACK_IMPORTED_MODULE_7__["EventCountdown"]; });

/* harmony import */ var _VirtualizedList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VirtualizedList */ "../ui/VirtualizedList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualizedList", function() { return _VirtualizedList__WEBPACK_IMPORTED_MODULE_8__["VirtualizedList"]; });

/* harmony import */ var _CopyButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CopyButton */ "../ui/CopyButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyButton", function() { return _CopyButton__WEBPACK_IMPORTED_MODULE_9__["CopyButton"]; });












/***/ }),

/***/ "./components/EventIntro/EventIntro.tsx":
/*!**********************************************!*\
  !*** ./components/EventIntro/EventIntro.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\EventIntro\\EventIntro.tsx"; // 2002-tw-alliance






const EventIntro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "EventIntro",
  componentId: "sc-3v5ht8-0"
})(["position:relative;max-width:800px;height:900px;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:5px;@media screen and (max-width:800px){height:450px;}"]); // const EventIntroTop = styled.div`
//   width: 100%;
//   height: 24.39vw;
//   background-image: url(${Images.yellow1}), url(${Images.block1});
//   background-repeat: no-repeat;
//   background-size: 100% 102%, 95% 102%;
//   background-position: top;
//   @media screen and (min-width: 800px) {
//     height: calc((800 / 828) * 202px);
//   }
// `;
// const EventIntroBottom = styled.div`
//   position: relative;
//   z-index: 0;
//   margin-top: -8px;
//   width: 100%;
//   height: 31.88vw;
//   background-image: url(${Images.yellow3}), url(${Images.cloud}),
//     url(${Images.block3});
//   background-repeat: no-repeat;
//   background-size: 100%, 100%, 95% 100%;
//   background-position: top;
//   @media screen and (min-width: 800px) {
//     height: calc((800 / 828) * 264px);
//   }
// `;
// const EventIntroHeader = styled.div`
//   background-image: url(${Images.eventTitle});
//   background-repeat: no-repeat;
//   background-position: top;
//   background-size: contain;
//   width: 100%;
//   height: 13.04vw;
//   color: #000000;
//   font-weight: 600;
//   text-align: center;
//   @media screen and (min-width: 800px) {
//     font-size: calc((800 / 828) * 28px);
//     height: calc((800 / 828) * 108px);
//   }
// `;
// const EventIntroContent = styled.div`
//   position: absolute;
//   z-index: 1;
//   width: 100%;
//   display: flex;
//   flex: 0 0 auto;
//   flex-direction: column;
//   justify-content: center;
//   align-content: center;
//   align-self: center;
//   min-height: 40.33vw;
//   font-size: 3.38vw;
//   font-weight: 600;
//   line-height: 1.43;
//   color: #fff;
//   background-image: url(${Images.yellow2}), url(${Images.block2});
//   background-repeat: repeat-y, repeat-y;
//   background-size: 100%, 95%;
//   background-position: top;
//   @media screen and (min-width: 800px) {
//     font-size: calc((800 / 828) * 28px);
//     min-height: calc((800 / 828) * 334px);
//   }
//   iframe {
//      margin-top: -12.8vw;
//     @media screen and (min-width: 800px) {
//       margin-top: calc((800 / 828) * -106px);
//     }
//   }
// `;

const Iframe = ({
  src
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const frame = document.querySelector('#frame');
    frame.style.overflow = 'hidden';
    window.addEventListener('message', e => {
      if (e.data.source && e.data.source.indexOf('main-vision') === -1 && e.data.size) {
        frame.style.height = `${e.data.size.height}px`;
      }
    });
    return () => window.removeEventListener('message', () => {});
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    id: "frame",
    src: src,
    frameBorder: "0",
    width: "90%",
    scrolling: "no",
    title: "event description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  });
};

const EventIntroComponent = ({
  title,
  content,
  iframe,
  only
}) => {
  const descriptionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__["useMinSectionTracking"])(descriptionRef, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__["createSectionViewAction"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["SectionTypes"].description));
  });

  if (only) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: descriptionRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Iframe, {
      src: iframe,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }));
  }

  if (iframe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventIntro, {
      ref: descriptionRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Iframe, {
      src: iframe,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventIntro, {
    ref: descriptionRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 5
    }
  }, content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventIntroContent, {
    dangerouslySetInnerHTML: {
      __html: `${content.replace(/\n/g, '<br/>')}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (EventIntroComponent);

/***/ }),

/***/ "./components/EventIntro/index.ts":
/*!****************************************!*\
  !*** ./components/EventIntro/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventIntro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventIntro */ "./components/EventIntro/EventIntro.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EventIntro__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/LeaderboardContainer/LeaderboardContainer.tsx":
/*!******************************************************************!*\
  !*** ./components/LeaderboardContainer/LeaderboardContainer.tsx ***!
  \******************************************************************/
/*! exports provided: LeaderboardContainerWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardContainerWrapper", function() { return LeaderboardContainerWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @17media/dad */ "@17media/dad");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_17media_dad__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vmo_ui_hooks_TabsRefContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/ui/hooks/TabsRefContext */ "../ui/hooks/TabsRefContext.ts");
/* harmony import */ var _vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/ui/Loading */ "../ui/Loading.tsx");
/* harmony import */ var _vmo_ui_hooks_useQueryString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/ui/hooks/useQueryString */ "../ui/hooks/useQueryString.ts");
/* harmony import */ var _vmo_ui_hooks_api_useTypeApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/ui/hooks/api/useTypeApi */ "../ui/hooks/api/useTypeApi.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../leaderboard */ "./components/leaderboard/index.tsx");
/* harmony import */ var _themes_images__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../themes/images */ "./themes/images.ts");
/* harmony import */ var _context_missionPanelContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../context/missionPanelContext */ "./context/missionPanelContext.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\LeaderboardContainer\\LeaderboardContainer.tsx"; // 2002-tw-alliance















const LeaderboardContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LeaderboardContainer__LeaderboardContainerWrapper",
  componentId: "sc-1qmnh3n-0"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}"], props => props.styleInfo.marginTop ? `${props.styleInfo.marginTop}vw` : 0, props => props.styleInfo.marginTop ? `calc((800 / 828) * ${props.styleInfo.marginTop * 414 / 100 * 2}px)` : 0);
const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LeaderboardContainer__VideoContainer",
  componentId: "sc-1qmnh3n-1"
})(["position:fixed;width:100%;height:100%;margin:0 auto;font-weight:bold;display:flex;justify-content:center;align-content:center;background:rgba(0,0,0,0.95);top:0;left:0;video{width:100%;height:100%;max-width:800px;min-height:100vh;}img{position:absolute;top:10px;right:10px;width:40px;height:40px;cursor:pointer;border:1px solid #816530;border-radius:50%;}"]);

const Iframe = ({
  src
}) => {
  const descriptionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_10__["useMinSectionTracking"])(descriptionRef, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_11__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_10__["createSectionViewAction"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_9__["SectionTypes"].description));
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const frame = document.querySelector('#frame');
    frame.style.overflow = 'hidden';
    window.addEventListener('message', e => {
      if (e.data.source && e.data.source.indexOf('main-vision') === -1 && e.data.size) {
        frame.style.height = `${e.data.size.height}px`;
      }
    });
    return () => window.removeEventListener('message', () => {});
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    ref: descriptionRef,
    id: "frame",
    src: src,
    frameBorder: "0",
    width: "100%",
    scrolling: "no",
    title: "event description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  });
};

const RenderVideo = ({
  src,
  poster,
  setShowVideo
}) => {
  const appBody = document.querySelector('body');
  /* eslint-disable */

  const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(VideoContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
    src: src,
    controls: true,
    autoPlay: true,
    poster: poster,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _themes_images__WEBPACK_IMPORTED_MODULE_13__["default"].closeButton,
    alt: "",
    onClick: () => setShowVideo({
      isShow: false,
      poster: '',
      video: ''
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }));
  /* eslint-enable */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'auto';
    };
  }, []);
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"])(content, appBody);
};

const checkLockTime = () => {
  const nowTime = Object(_17media_dad__WEBPACK_IMPORTED_MODULE_4__["now"])() * 1000;
  const locakTime = Date.parse(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_9__["LocakTotalTime"]);

  if (nowTime >= locakTime) {
    return true;
  }

  return false;
};

const checkLockTime2 = () => {
  const nowTime = Object(_17media_dad__WEBPACK_IMPORTED_MODULE_4__["now"])() * 1000;
  const locakTime = Date.parse(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_9__["LocakTotalTime2"]);

  if (nowTime >= locakTime) {
    return true;
  }

  return false;
};

const LeaderboardContainer = ({
  apis,
  sortFunc = data => data,
  realTime = 0,
  hashCheck = true,
  iframe,
  condition,
  initialData
}) => {
  const tabsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_ui_hooks_TabsRefContext__WEBPACK_IMPORTED_MODULE_5__["TabsRefContext"]);
  const [showPanelID, setShowPanelID] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [missionDetails, setMissionDetails] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // let finalApis = apis;
  // let finalConditaion = condition;
  // if (apis && apis[0] && apis[0] === api.total.attend.before) {
  //   if (checkLockTime2()) {
  //     finalApis = [api.total.attend.after, api.total.bonus];
  //     finalConditaion = Conditions.rank512;
  //   } else if (checkLockTime()) {
  //     finalApis = [api.total.attend.after, api.total.bonus];
  //     finalConditaion = Conditions.rank511;
  //   } else {
  //     finalApis = [api.total.attend.before, api.total.bonus];
  //     finalConditaion = Conditions.rank0;
  //   }
  // }

  const {
    loading,
    leaderboardData
  } = Object(_vmo_ui_hooks_api_useTypeApi__WEBPACK_IMPORTED_MODULE_8__["default"])( // finalApis,
  apis, 'GET', realTime, hashCheck, initialData);
  Object(_vmo_ui_hooks_useQueryString__WEBPACK_IMPORTED_MODULE_7__["default"])(loading);
  /* eslint-disable */

  const props = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => ({
    leaderboardData: sortFunc(leaderboardData),
    condition,
    isLocked: false
  }), [leaderboardData, condition]);
  /* eslint-enable */

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "loading-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "#fe41cb",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }
    }));
  }

  if (iframe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Iframe, {
      src: iframe,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context_missionPanelContext__WEBPACK_IMPORTED_MODULE_14__["MissionPanelContext"].Provider, {
    value: {
      showPanelID,
      setShowPanelID,
      missionDetails,
      setMissionDetails
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_leaderboard__WEBPACK_IMPORTED_MODULE_12__["Leaderboard"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(LeaderboardContainer));

/***/ }),

/***/ "./components/LeaderboardContainer/index.ts":
/*!**************************************************!*\
  !*** ./components/LeaderboardContainer/index.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeaderboardContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LeaderboardContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/RankTitle/RankTitle.tsx":
/*!********************************************!*\
  !*** ./components/RankTitle/RankTitle.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\RankTitle\\RankTitle.tsx";



const RankTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "RankTitle",
  componentId: "sc-1spt7f8-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;"]);
const RankTitleContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "RankTitle__RankTitleContent",
  componentId: "sc-1spt7f8-1"
})([""]);

const RankTitleComponent = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RankTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_2__["RankStyled"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(RankTitleComponent));

/***/ }),

/***/ "./components/RankTitle/index.ts":
/*!***************************************!*\
  !*** ./components/RankTitle/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RankTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RankTitle */ "./components/RankTitle/RankTitle.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RankTitle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Tabs/Tabs00.tsx":
/*!************************************!*\
  !*** ./components/Tabs/Tabs00.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _vmo_web_components_Tabs_Tabs110xx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs110xx */ "./components/Tabs/Tabs110xx.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_intro1__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_intro1 */ "./components/Tabs/Tabs_intro1.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_qualify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_qualify */ "./components/Tabs/Tabs_qualify.tsx");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs00.tsx"; // 2008-tw-xmas 響叮噹



















const Tabs00 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__["createTabClickAction"])('', `${translation.get('TAB_0')}/${translation.get('TAB_0_0')}`));
  }, []);
  const [initialData, setInitialData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({} || []);
  const tabs00Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 14
      }
    }, translation.get('TAB_0_0')),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_0')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      iframe: `${_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t1}?lang=${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrentTransLateLang"])()}`
    },
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s1],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank11xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, translation.get('TAB_0_1')),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_1')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t2
    },
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s2],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank12xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, translation.get('TAB_0_2')),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_2')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs110xx__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    })
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][3].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }, translation.get('TAB_0_3')),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_qualify__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    })
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][4].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, translation.get('EVENT_INTRO_TITLE')),
    tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_intro1__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    })
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs00Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab00xxTimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, tabs00Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab00_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"] // title={item.eventIntro.title}
  , {
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    initialData: initialData,
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs00);

/***/ }),

/***/ "./components/Tabs/Tabs10.tsx":
/*!************************************!*\
  !*** ./components/Tabs/Tabs10.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_intro2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_intro2 */ "./components/Tabs/Tabs_intro2.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_step4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_step4 */ "./components/Tabs/Tabs_step4.tsx");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs10.tsx"; // 2008-tw-xmas 平安夜















const Tabs10 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__["createTabClickAction"])('', `${translation.get('TAB_1')}/${translation.get('TAB_1_0')}`));
  }, []);
  const tabs10Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab10TimeStatexx"][0].tabKey,
    countdown: null,
    eventIntro: null,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, translation.get('TAB_1_0')),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_0')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_step4__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }),
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab10TimeStatexx"][1].tabKey,
    countdown: null,
    eventIntro: null,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, translation.get('EVENT_INTRO_TITLE')),
    tabText: `${translation.get('TAB_1')}/${translation.get('EVENT_INTRO_TITLE')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_intro2__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    }),
    leaderboard: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab10TimeStatexx"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs10Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab10TimeStatexx"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, tabs10Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs10);

/***/ }),

/***/ "./components/Tabs/Tabs110xx.tsx":
/*!***************************************!*\
  !*** ./components/Tabs/Tabs110xx.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs110xx.tsx"; // xmas 第三層tab測試
















const Tabs110xx = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__["createTabClickAction"])('', `${translation.get('TAB_1')}/${translation.get('TAB_0_2')}/${translation.get('TAB_0_2_0')}`));
  }, []);
  const Tabs_110xxItems = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, translation.get('TAB_0_2_0')),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_0_2')}/${translation.get('TAB_0_2_0')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t3
    },
    // rankTitle: translation.get('TAB_1_1_0'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s3_1],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank131xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, translation.get('TAB_0_2_1')),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_0_2')}/${translation.get('TAB_0_2_1')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t3
    },
    // rankTitle: translation.get('TAB_1_1_1'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s3_2],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank132xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, translation.get('TAB_0_2_2')),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_0_2')}/${translation.get('TAB_0_2_2')}`,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][2].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][2].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t3
    },
    // rankTitle: translation.get('TAB_1_1_2'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s3_3],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank133xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][3].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, translation.get('TAB_0_2_3')),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_0_2')}/${translation.get('TAB_0_2_3')}`,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][3].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][3].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t3
    },
    // rankTitle: translation.get('TAB_1_1_2'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s3_4],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank134xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][4].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }, translation.get('TAB_0_2_4')),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_0_2')}/${translation.get('TAB_0_2_4')}`,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][4].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][4].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t3_1
    },
    // rankTitle: translation.get('TAB_1_1_4'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.s3_5],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank135xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs110Styledxx"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab110xxTimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, Tabs_110xxItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs110xx);

/***/ }),

/***/ "./components/Tabs/Tabs20.tsx":
/*!************************************!*\
  !*** ./components/Tabs/Tabs20.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_intro3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_intro3 */ "./components/Tabs/Tabs_intro3.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_round1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_round1 */ "./components/Tabs/Tabs_round1.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_round2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_round2 */ "./components/Tabs/Tabs_round2.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_offline_final__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_offline_final */ "./components/Tabs/Tabs_offline_final.tsx");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs20.tsx"; // 2008-tw-xmas 狂歡夜

















const Tabs20 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__["createTabClickAction"])('', `${translation.get('TAB_2')}/${translation.get('TAB_2_0')}`));
  }, []);
  const tabs10Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab20TimeStatexx"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 16
      }
    }, translation.get('TAB_2_0')),
    tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_0')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_round1__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }),
    countdown: null,
    eventIntro: null,
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab20TimeStatexx"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 16
      }
    }, translation.get('TAB_2_1')),
    tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_1')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_round2__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }),
    countdown: null,
    eventIntro: null,
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab20TimeStatexx"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, translation.get('TAB_2_2')),
    tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_offline_final__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    }),
    countdown: null,
    eventIntro: null,
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab20TimeStatexx"][3].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, translation.get('EVENT_INTRO_TITLE')),
    tabText: `${translation.get('TAB_2')}/${translation.get('EVENT_INTRO_TITLE')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_intro3__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }),
    countdown: null,
    eventIntro: null,
    leaderboard: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab20TimeStatexx"], 2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs20Styledxx"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab20TimeStatexx"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, tabs10Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab20_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    hashCheck: item.leaderboard.hashCheck,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs20);

/***/ }),

/***/ "./components/Tabs/Tabs30.tsx":
/*!************************************!*\
  !*** ./components/Tabs/Tabs30.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _vmo_web_components_Tabs_Tabs_intro4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs_intro4 */ "./components/Tabs/Tabs_intro4.tsx");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs30.tsx"; // 2008-tw-xmas 總榜


















const Tabs30 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__["createTabClickAction"])('', `${translation.get('TAB_3')}/${translation.get('TAB_3_0')}`));
  }, []);
  const tabs30Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, translation.get('TAB_3_0')),
    tabText: `${translation.get('TAB_3')}/${translation.get('TAB_3_0')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t9
    },
    // rankTitle: translation.get('TAB_0_0'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].xmasfinal.streamer, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].xmasfinal.bonus],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab30"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank411xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, translation.get('TAB_3_1')),
    tabText: `${translation.get('TAB_3')}/${translation.get('TAB_3_1')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.t10
    },
    // rankTitle: translation.get('TAB_0_0'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].xmasfinal.fans],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank412xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 16
      }
    }, translation.get('TAB_3_2')),
    tabText: `${translation.get('TAB_3')}/${translation.get('TAB_3_2')}`,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.prize,
      style: {},
      sortFunc: data => data
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][3].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, translation.get('EVENT_INTRO_TITLE')),
    tabText: `${translation.get('TAB_3')}/${translation.get('EVENT_INTRO_TITLE')}`,
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs_intro4__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    })
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs30Styledxx"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tab30TimeStatexx"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, tabs30Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab30_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs30);

/***/ }),

/***/ "./components/Tabs/Tabs_intro1.tsx":
/*!*****************************************!*\
  !*** ./components/Tabs/Tabs_intro1.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_intro1.tsx"; // xmas 活動說明1













const Tabs_intro1 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__["createTabClickAction"])('', `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`));
  }, []);
  const Tabs_intro1Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro1TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_METHOD_TITLE')),
    tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.intro1,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro1TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_TIMELINE')),
    tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_TIMELINE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introtimeline,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro1TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_GIFT')),
    tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_GIFT')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introgifts,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro1TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs_intro1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro1TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, Tabs_intro1Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__["default"] // apis={item.leaderboard!.apis}
  , {
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe // realTime={item.leaderboard!.realTime}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_intro1);

/***/ }),

/***/ "./components/Tabs/Tabs_intro2.tsx":
/*!*****************************************!*\
  !*** ./components/Tabs/Tabs_intro2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_intro2.tsx"; // xmas 活動說明2













const Tabs_intro2 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__["createTabClickAction"])('', `${translation.get('TAB_1')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`));
  }, []);
  const Tabs_intro1Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro2TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_METHOD_TITLE')),
    tabText: `${translation.get('TAB_1')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.intro2,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro2TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_TIMELINE')),
    tabText: `${translation.get('TAB_1')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_TIMELINE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introtimeline,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro2TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_GIFT')),
    tabText: `${translation.get('TAB_1')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_GIFT')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introgifts,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro2TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs_intro1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro2TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, Tabs_intro1Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__["default"] // apis={item.leaderboard!.apis}
  , {
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe // realTime={item.leaderboard!.realTime}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_intro2);

/***/ }),

/***/ "./components/Tabs/Tabs_intro3.tsx":
/*!*****************************************!*\
  !*** ./components/Tabs/Tabs_intro3.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_intro3.tsx"; // xmas 活動說明3













const Tabs_intro3 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__["createTabClickAction"])('', `${translation.get('TAB_2')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`));
  }, []);
  const Tabs_intro1Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro3TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_METHOD_TITLE')),
    tabText: `${translation.get('TAB_2')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.intro3,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro3TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_TIMELINE')),
    tabText: `${translation.get('TAB_2')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_TIMELINE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introtimeline,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro3TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_GIFT')),
    tabText: `${translation.get('TAB_2')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_GIFT')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introgifts,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro3TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs_intro1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro3TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, Tabs_intro1Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__["default"] // apis={item.leaderboard!.apis}
  , {
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe // realTime={item.leaderboard!.realTime}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_intro3);

/***/ }),

/***/ "./components/Tabs/Tabs_intro4.tsx":
/*!*****************************************!*\
  !*** ./components/Tabs/Tabs_intro4.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_intro4.tsx"; // xmas 活動說明4













const Tabs_intro4 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_6__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_10__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_9__["createTabClickAction"])('', `${translation.get('TAB_3')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`));
  }, []);
  const Tabs_intro4Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro4TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_METHOD_TITLE')),
    tabText: `${translation.get('TAB_3')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.intro4,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro4TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_TIMELINE')),
    tabText: `${translation.get('TAB_3')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_TIMELINE')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introtimeline,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro4TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, translation.get('EVENT_INTRO_GIFT')),
    tabText: `${translation.get('TAB_3')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_GIFT')}`,
    tabs: null,
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.introgifts,
      style: {},
      sortFunc: data => data,
      condition: null
    },
    countdown: null,
    eventIntro: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro4TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs_intro1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Tabsintro4TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, Tabs_intro4Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_7__["default"] // apis={item.leaderboard!.apis}
  , {
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe // realTime={item.leaderboard!.realTime}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_intro4);

/***/ }),

/***/ "./components/Tabs/Tabs_offline_final.tsx":
/*!************************************************!*\
  !*** ./components/Tabs/Tabs_offline_final.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_offline_final.tsx"; // xmas round1
















const board = [{
  value: 55000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 1
}, {
  value: 40000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 2
}, {
  value: 30000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 3
}, {
  value: 15000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 4
}, {
  value: 0,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 5
}];
const initialScores = {
  sock: 0,
  candy: 0,
  ginger: 0
};

const getRank = (team, scores) => {
  let rank = !scores.sock && !scores.candy && !scores.ginger ? -1 : 2;

  const newScores = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(scores).sort((a, b) => b[1] - a[1]).map(o => ({
    [o[0]]: o[1]
  }));

  newScores.forEach((item, index) => {
    if (rank !== -1 && item[team] !== undefined) {
      rank = index;
    }
  });
  return rank;
};

const getRanks = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case -1:
      {
        return {
          inactive: null,
          active: null
        };
      }

    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }
          })
        };
      }

    case 2:
    default:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }
          })
        };
      }
  }
};

const getCrown = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOff,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOn,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
    case 2:
    default:
      {
        return null;
      }
  }
};

const getCondition = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case 0:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank324xx"];
      }

    case 1:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank325xx"];
      }

    case 2:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank326xx"];
      }

    case -1:
    default:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank0"];
      }
  }
};

const Tabs_offline_final = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__["createTabClickAction"])('', `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_0')}`));
  }, []);
  const [initialData, setInitialData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({} || []);
  const [scores, setScores] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialScores);
  const handleScores = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newScores => {
    setScores(newScores);
  }, []);
  const Tabs_offline_finalItems = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.sock, 0))),
    tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_0')}`,
    tabs: null,
    ranks: getRanks('sock', scores),
    crown: getCrown('sock', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }),
    eventIntro: {
      title: translation.get('offlineNT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t6
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g3],
      team: 'sock',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab220"],
      condition: getCondition('sock', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.candy, 0))),
    tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_1')}`,
    tabs: null,
    ranks: getRanks('candy', scores),
    crown: getCrown('candy', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }),
    eventIntro: {
      title: translation.get('offlineNT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t6
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g3],
      team: 'candy',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab220"],
      condition: getCondition('candy', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.candy, 0))),
    tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_2')}`,
    tabs: null,
    ranks: getRanks('ginger', scores),
    crown: getCrown('ginger', scores),
    // vs: <VSStyled>VS</VSStyled>,
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 17
      }
    }),
    eventIntro: {
      title: translation.get('offlineNT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t6
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][2].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][2].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.offlinefinal.g3],
      team: 'ginger',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab220"],
      condition: getCondition('ginger', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["Tabs_round1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_offline_finalTimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 5
    }
  }, Tabs_offline_finalItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    ranks: item.ranks,
    crown: item.crown,
    vs: item.vs,
    teamBg: item.teamBg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 24
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankA,
    team: 1,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.sock
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankB,
    team: 2,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.candy
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankC,
    team: 3,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.ginger
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  })), item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data, item.leaderboard.team);
      handleScores(result.scores);
      setInitialData(data);
      return result.data;
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_offline_final);

/***/ }),

/***/ "./components/Tabs/Tabs_qualify.tsx":
/*!******************************************!*\
  !*** ./components/Tabs/Tabs_qualify.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_qualify.tsx"; // xmas 出席
















const Tabs_qualify = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_7__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_13__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_12__["createTabClickAction"])('', `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}/${translation.get('TAB_0_3_0')}`));
  }, []);
  const Tabs_qualifyItems = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, translation.get('TAB_0_3_0')),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}/${translation.get('TAB_0_3_0')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.streamer_qualify
    },
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.streamer_qualify],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank141xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, translation.get('TAB_0_3_1')),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}/${translation.get('TAB_0_3_1')}`,
    tabs: null,
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["Iframes"].methods.fans_qualify
    },
    // rankTitle: translation.get('EVENT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_6__["api"].bell.fans_qualify],
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_11__["sortTab00"],
      condition: _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_10__["rank142xx"],
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["Tabs_qualifyStyled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__["TabsqualifyTimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, Tabs_qualifyItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 24
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_4__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data);
      return result || [];
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_qualify);

/***/ }),

/***/ "./components/Tabs/Tabs_round1.tsx":
/*!*****************************************!*\
  !*** ./components/Tabs/Tabs_round1.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_round1.tsx"; // xmas round1
















const initialScores = {
  sock: 0,
  candy: 0,
  ginger: 0
};
const board = [{
  value: 55000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 1
}, {
  value: 40000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 2
}, {
  value: 30000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 3
}, {
  value: 15000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 4
}, {
  value: 0,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 5
}];

const getRank = (team, scores) => {
  let rank = !scores.sock && !scores.candy && !scores.ginger ? -1 : 2;

  const newScores = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(scores).sort((a, b) => b[1] - a[1]).map(o => ({
    [o[0]]: o[1]
  }));

  newScores.forEach((item, index) => {
    if (rank !== -1 && item[team] !== undefined) {
      rank = index;
    }
  });
  return rank;
};

const getRanks = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case -1:
      {
        return {
          inactive: null,
          active: null
        };
      }

    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }
          })
        };
      }

    case 2:
    default:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }
          })
        };
      }
  }
};

const getCrown = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOff,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOn,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
    case 2:
    default:
      {
        return null;
      }
  }
};

const getCondition = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case 0:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank311xx"];
      }

    case 1:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank312xx"];
      }

    case 2:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank313xx"];
      }

    case -1:
    default:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank0"];
      }
  }
};

const Tabs_round1 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__["createTabClickAction"])('', `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_0')}`));
  }, []);
  const [initialData, setInitialData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({} || []);
  const [scores, setScores] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialScores);
  const handleScores = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newScores => {
    setScores(newScores);
  }, []);
  const Tabs_round1Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.sock, 0))),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: null,
    ranks: getRanks('sock', scores),
    crown: getCrown('sock', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }),
    // offlinentIntro: {
    //   title: translation.get('offlineNT_METHOD_TITLE'),
    //   iframe: Iframes.methods.t6,
    // },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t6
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g3],
      team: 'sock',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab200"],
      condition: getCondition('sock', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.candy, 0))),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: null,
    ranks: getRanks('candy', scores),
    crown: getCrown('candy', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }
    }),
    // offlinentIntro: {
    //   title: translation.get('offlineNT_METHOD_TITLE'),
    //   iframe: Iframes.methods.t6,
    // },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t6
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g3],
      team: 'candy',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab200"],
      condition: getCondition('candy', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 11
      }
    }, translation.get('TAB_1_1_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 11
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.ginger, 0))),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: null,
    ranks: getRanks('ginger', scores),
    crown: getCrown('ginger', scores),
    // vs: <VSStyled>VS</VSStyled>,
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }),
    // offlinentIntro: {
    //   title: translation.get('offlineNT_METHOD_TITLE'),
    //   iframe: Iframes.methods.t6,
    // },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t6
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][2].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][2].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r1.g3],
      team: 'ginger',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab200"],
      condition: getCondition('ginger', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["Tabs_round1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round1TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 5
    }
  }, Tabs_round1Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    ranks: item.ranks,
    crown: item.crown,
    vs: item.vs,
    teamBg: item.teamBg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 24
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankA,
    team: 1,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.sock
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankB,
    team: 2,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.candy
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankC,
    team: 3,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.ginger
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  })), item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data, item.leaderboard.team);
      handleScores(result.scores);
      setInitialData(data);
      return result.data;
    },
    initialData: initialData,
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_round1);

/***/ }),

/***/ "./components/Tabs/Tabs_round2.tsx":
/*!*****************************************!*\
  !*** ./components/Tabs/Tabs_round2.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_round2.tsx"; // xmas round1





 // import offlinentIntro from '@vmo/web/components/offlinentIntro';











const initialScores = {
  sock: 0,
  candy: 0,
  ginger: 0
};
const board = [{
  value: 55000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 1
}, {
  value: 40000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 2
}, {
  value: 30000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 3
}, {
  value: 15000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 4
}, {
  value: 0,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 5
}];

const getRank = (team, scores) => {
  let rank = !scores.sock && !scores.candy && !scores.ginger ? -1 : 2;

  const newScores = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(scores).sort((a, b) => b[1] - a[1]).map(o => ({
    [o[0]]: o[1]
  }));

  newScores.forEach((item, index) => {
    if (rank !== -1 && item[team] !== undefined) {
      rank = index;
    }
  });
  return rank;
};

const getRanks = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case -1:
      {
        return {
          inactive: null,
          active: null
        };
      }

    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }
          })
        };
      }

    case 2:
    default:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }
          })
        };
      }
  }
};

const getCrown = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOff,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOn,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
    case 2:
    default:
      {
        return null;
      }
  }
};

const getCondition = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case 0:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank321xx"];
      }

    case 1:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank322xx"];
      }

    case 2:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank323xx"];
      }

    case -1:
    default:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank0"];
      }
  }
};

const Tabs_round2 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__["createTabClickAction"])('', `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_0')}`));
  }, []);
  const [initialData, setInitialData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({} || []);
  const [scores, setScores] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialScores);
  const handleScores = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newScores => {
    setScores(newScores);
  }, []);
  const Tabs_round2Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.sock, 0))),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: null,
    ranks: getRanks('sock', scores),
    crown: getCrown('sock', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }),
    // offlinentIntro: {
    //   title: translation.get('offlineNT_METHOD_TITLE'),
    //   iframe: Iframes.methods.t6,
    // },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t7
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g3],
      team: 'sock',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab210"],
      condition: getCondition('sock', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.candy, 0))),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: null,
    ranks: getRanks('candy', scores),
    crown: getCrown('candy', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    }),
    // offlinentIntro: {
    //   title: translation.get('offlineNT_METHOD_TITLE'),
    //   iframe: Iframes.methods.t6,
    // },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t7
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g3],
      team: 'candy',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab210"],
      condition: getCondition('candy', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 11
      }
    }, translation.get('TAB_1_1_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 11
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.ginger, 0))),
    tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
    tabs: null,
    ranks: getRanks('ginger', scores),
    crown: getCrown('ginger', scores),
    // vs: <VSStyled>VS</VSStyled>,
    // offlinentIntro: {
    //   title: translation.get('offlineNT_METHOD_TITLE'),
    //   iframe: Iframes.methods.t6,
    // },
    eventIntro: {
      title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t7
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][2].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][2].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].offline.r2.g3],
      team: 'ginger',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab210"],
      condition: getCondition('ginger', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["Tabs_round1Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_round2TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 5
    }
  }, Tabs_round2Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    ranks: item.ranks,
    crown: item.crown,
    vs: item.vs,
    teamBg: item.teamBg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 24
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankA,
    team: 1,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.sock
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankB,
    team: 2,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.candy
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankC,
    team: 3,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.ginger
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 13
    }
  })), item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data, item.leaderboard.team);
      handleScores(result.scores);
      setInitialData(data);
      return result.data;
    },
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_round2);

/***/ }),

/***/ "./components/Tabs/Tabs_step4.tsx":
/*!****************************************!*\
  !*** ./components/Tabs/Tabs_step4.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "../../node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/constants/api */ "./constants/api.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/constants/conditions */ "./constants/conditions.tsx");
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");
/* harmony import */ var _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/ui/hooks/api/sort */ "../ui/hooks/api/sort.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\Tabs\\Tabs_step4.tsx"; // xmas 階段四 分組
















const initialScores = {
  sock: 0,
  candy: 0,
  ginger: 0
};
const board = [{
  value: 55000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 1
}, {
  value: 40000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 2
}, {
  value: 30000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 3
}, {
  value: 15000000,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 4
}, {
  value: 0,
  conditionValue: 'score',
  filterCondition: '<=',
  rank: 5
}];

const getRank = (team, scores) => {
  let rank = !scores.sock && !scores.candy && !scores.ginger ? -1 : 2;

  const newScores = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(scores).sort((a, b) => b[1] - a[1]).map(o => ({
    [o[0]]: o[1]
  }));

  newScores.forEach((item, index) => {
    if (rank !== -1 && item[team] !== undefined) {
      rank = index;
    }
  });
  return rank;
};

const getRanks = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case -1:
      {
        return {
          inactive: null,
          active: null
        };
      }

    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no1On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no2On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }
          })
        };
      }

    case 2:
    default:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3Off,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankNumber"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].no3On,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }
          })
        };
      }
  }
};

const getCrown = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case -1:
      {
        return {
          inactive: null,
          active: null
        };
      }

    case 0:
      {
        return {
          inactive: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOff,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 19
            }
          }),
          active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CrownStyled"], {
            bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].crownOn,
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }
          })
        };
      }

    case 1:
      {
        return {
          inactive: null,
          active: null
        };
      }

    case 2:
    default:
      {
        return {
          inactive: null,
          active: null
        };
      }
  }
};

const getCondition = (team, scores) => {
  const rank = getRank(team, scores);

  switch (rank) {
    case -1:
    default:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank0"];
      }

    case 0:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank211xx"];
      }

    case 1:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank212xx"];
      }

    case 2:
      {
        return _vmo_web_constants_conditions__WEBPACK_IMPORTED_MODULE_11__["rank213xx"];
      }
  }
};

const Tabs_step4 = () => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_8__["TranslationContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_15__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__["createTabClickAction"])('', `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_0')}`));
  }, []);
  const [initialData, setInitialData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({} || []);
  const [scores, setScores] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialScores);
  const handleScores = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(newScores => {
    setScores(newScores);
  }, []);
  const Tabs_step4Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][0].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.sock, 0))),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_0')}`,
    tabs: null,
    ranks: getRanks('sock', scores),
    crown: getCrown('sock', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    }),
    eventIntro: {
      // title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t4
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][0].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][0].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_3],
      team: 'sock',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab100"],
      condition: getCondition('sock', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][1].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }
    }, translation.get('TAB_1_1_1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 13
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.candy, 0))),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_1')}`,
    tabs: null,
    ranks: getRanks('candy', scores),
    crown: getCrown('candy', scores),
    vs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["VSStyled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 13
      }
    }, "VS"),
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }),
    eventIntro: {
      // title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t4
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][1].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][1].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_3],
      team: 'candy',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab100"],
      condition: getCondition('candy', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][2].tabKey,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }
    }, translation.get('TAB_1_1_2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }
    }, Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["numberFormatWithDigits"])(scores.ginger, 0))),
    tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_2')}`,
    tabs: null,
    ranks: getRanks('ginger', scores),
    crown: getCrown('ginger', scores),
    // vs: <VSStyled>VS</VSStyled>,
    teamBg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["ScoreTeamBg"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 17
      }
    }),
    eventIntro: {
      // title: translation.get('EVENT_METHOD_TITLE'),
      iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Iframes"].methods.t4
    },
    countdown: {
      startDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][2].startDate,
      endDate: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][2].endDate,
      dateFormat: 'MM/d (WN) hh:mm:ss',
      formatStr: translation.get('COUNTDOWN_COUNTING')
    },
    // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
    leaderboard: {
      apis: [_vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_1, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_2, _vmo_web_constants_api__WEBPACK_IMPORTED_MODULE_7__["api"].eve.r4_3],
      team: 'ginger',
      sortFunc: _vmo_ui_hooks_api_sort__WEBPACK_IMPORTED_MODULE_13__["sortTab100"],
      condition: getCondition('ginger', scores),
      iframe: null,
      realTime: 1000,
      style: {}
    }
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["Tabs_step4Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_3__["Tabs_step4TimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 5
    }
  }, Tabs_step4Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    key: `tab10_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    ranks: item.ranks,
    crown: item.crown,
    vs: item.vs,
    teamBg: item.teamBg,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 24
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankA,
    team: 1,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.sock
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankB,
    team: 2,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.candy
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["RankBoardItem"], {
    bg: _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_12__["default"].rankC,
    team: 3,
    rank: Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_2__["conditionMatch"])(board, {
      score: scores.ginger
    }).rank,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  })), item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_5__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_6__["default"] // title={item.eventIntro.title}
  , {
    iframe: item.eventIntro.iframe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_10__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: data => {
      const result = item.leaderboard.sortFunc(data, item.leaderboard.team);
      handleScores(result.scores);
      setInitialData(data);
      return result.data;
    },
    initialData: initialData,
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs_step4);

/***/ }),

/***/ "./components/Tabs/styled.tsx":
/*!************************************!*\
  !*** ./components/Tabs/styled.tsx ***!
  \************************************/
/*! exports provided: calVW, cal800, RankNumber, ScoreTeamBg, CoverVideoIframeStyled, EventIntroHeaderStyled, EventIntroDemo, RankStyled, CountDownStyled, Tabs0Styled, Tabs00Styled, Tabs10Styled, Tabs110Styledxx, Tabs_intro1Styled, Tabs_qualifyStyled, Tabs_round1Styled, Tabs_step4Styled, Tabs20Styledxx, Tabs30Styledxx, RankBoard, RankBoardItem, CrownStyled, VSStyled, ScaleBoard, ScaleBoardItemA, ScaleBoardItemB, ScaleText, Section, SectionImg, SectionTitle, SectionLine, SectionWrapper, BackToTop, ImageCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calVW", function() { return calVW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cal800", function() { return cal800; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankNumber", function() { return RankNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreTeamBg", function() { return ScoreTeamBg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverVideoIframeStyled", function() { return CoverVideoIframeStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventIntroHeaderStyled", function() { return EventIntroHeaderStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventIntroDemo", function() { return EventIntroDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankStyled", function() { return RankStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownStyled", function() { return CountDownStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs0Styled", function() { return Tabs0Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs00Styled", function() { return Tabs00Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs10Styled", function() { return Tabs10Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs110Styledxx", function() { return Tabs110Styledxx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_intro1Styled", function() { return Tabs_intro1Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_qualifyStyled", function() { return Tabs_qualifyStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_round1Styled", function() { return Tabs_round1Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_step4Styled", function() { return Tabs_step4Styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs20Styledxx", function() { return Tabs20Styledxx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs30Styledxx", function() { return Tabs30Styledxx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankBoard", function() { return RankBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankBoardItem", function() { return RankBoardItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrownStyled", function() { return CrownStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSStyled", function() { return VSStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleBoard", function() { return ScaleBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleBoardItemA", function() { return ScaleBoardItemA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleBoardItemB", function() { return ScaleBoardItemB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleText", function() { return ScaleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionImg", function() { return SectionImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionLine", function() { return SectionLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionWrapper", function() { return SectionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackToTop", function() { return BackToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCache", function() { return ImageCache; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_ui_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/ui/Countdown */ "../ui/Countdown.tsx");
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");


 // import { Cover, CoverIframe } from '@vmo/ui/CoverVideo';


const calVW = num => {
  return `${(num / 414 * 100).toFixed(2)}vw`;
};
const cal800 = num => {
  return `${800 / 828 * (num * 2)}px`;
};
const RankNumber = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__RankNumber",
  componentId: "sc-1gfzk9f-0"
})(["position:absolute;z-index:2;top:", ";left:", ";width:", ";height:", ";background-repeat:no-repeat;background-position:center;background-size:contain;", " @media screen and (min-width:800px){width:", ";height:", ";top:", ";left:", ";}"], calVW(65), calVW(65), calVW(30), calVW(30), props => props.bg ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-image:url(", ");"], props.bg) : '', cal800(30), cal800(30), cal800(65), cal800(65));
const ScoreTeamBg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ScoreTeamBg",
  componentId: "sc-1gfzk9f-1"
})(["position:absolute;width:", ";height:", ";border-radius:13px;background-color:rgba(2,2,26,0.95);left:", ";top:", ";@media screen and (min-width:800px){width:", ";height:", ";left:", ";top:", ";}"], calVW(360), calVW(79), calVW(27), calVW(95 + 21), cal800(360), cal800(79), cal800(27), cal800(95 + 21));
const CoverVideoIframeStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__CoverVideoIframeStyled",
  componentId: "sc-1gfzk9f-2"
})(["width:100%;height:", ";img{width:100%;}@media screen and (min-width:800px){height:", ";}iframe{position:relative;z-index:-1;}"], calVW(665), cal800(665));
const EventIntroHeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__EventIntroHeaderStyled",
  componentId: "sc-1gfzk9f-3"
})(["display:flex;justify-content:center;padding-top:", ";width:", ";height:", ";background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url(", ");font-size:", ";font-weight:600;text-shadow:0 2px 6px rgba(0,0,0,0.8);@media screen and (min-width:800px){font-size:", ";font-weight:600;padding-top:", ";width:", ";height:", ";}"], calVW(8), calVW(119), calVW(36), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].tipsBg, calVW(14), cal800(14), cal800(8), cal800(119), cal800(36));
const EventIntroDemo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__EventIntroDemo",
  componentId: "sc-1gfzk9f-4"
})(["position:relative;border-radius:", ";background-image:url(", "),url(", "),linear-gradient( to right,rgba(6,55,103,1),#008099 50%,rgba(13,68,108,1) );background-repeat:no-repeat,no-repeat;background-position:center top,center bottom;background-size:contain;margin:0 ", ";padding-top:", ";padding-bottom:", ";font-size:", ";font-weight:600;line-height:1.69;color:#ffffff;@media screen and (min-width:800px){border-radius:", ";margin:0 ", ";padding-top:", ";padding-bottom:", ";font-size:", ";}> div{padding:0 ", ";background-image:url(", ");background-position:center top;background-size:contain;background-repeat:repeat-y;min-height:", ";@media screen and (min-width:800px){padding:0 ", ";min-height:", ";}}div.title1{position:relative;background-repeat:no-repeat;background-position:left top;background-size:contain;background-image:url(", ");width:", ";height:", ";top:0;left:-", ";font-size:", ";font-weight:600;line-height:1.69;color:#ffffff;padding:", " ", " 0;@media screen and (min-width:800px){top:0;left:-", ";width:", ";height:", ";font-size:", ";padding:", " ", " 0;}}div.title2{position:relative;background-repeat:no-repeat;background-position:left top;background-size:contain;background-image:url(", ");width:", ";height:", ";top:0;left:-", ";font-size:", ";font-weight:600;line-height:1.69;color:#ffffff;padding:", " ", " 0;@media screen and (min-width:800px){top:0;left:-", ";width:", ";height:", ";font-size:", ";padding:", " ", " 0;}}div.title2s{position:relative;background-repeat:no-repeat;background-position:left top;background-size:contain;background-image:url(", ");width:", ";height:", ";top:0;left:-", ";font-size:", ";font-weight:600;line-height:1.69;color:#ffffff;padding:", " ", " 0;@media screen and (min-width:800px){top:0;left:-", ";width:", ";height:", ";font-size:", ";padding:", " ", " 0;}}"], calVW(15), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rot, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rob, calVW(14), calVW(49), calVW(49), calVW(16), cal800(15), cal800(14), cal800(49), cal800(49), cal800(16), calVW(25), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].roc, calVW(200), cal800(25), cal800(200), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].iTitle1, calVW(414), calVW(110), calVW(39), calVW(16), calVW(11), calVW(39), cal800(39), cal800(414), cal800(110), cal800(16), cal800(11), cal800(39), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].iTitle2, calVW(414), calVW(55), calVW(39), calVW(16), calVW(11), calVW(39), cal800(39), cal800(414), cal800(55), cal800(16), cal800(11), cal800(39), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].iTitle2s, calVW(414), calVW(55), calVW(39), calVW(16), calVW(11), calVW(39), cal800(39), cal800(414), cal800(55), cal800(16), cal800(11), cal800(39));
const RankStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__RankStyled",
  componentId: "sc-1gfzk9f-5"
})(["display:flex;justify-content:center;align-items:flex-start;padding-top:", ";width:", ";height:", ";background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url(", ");font-size:", ";font-weight:600;text-shadow:0 2px 6px rgba(0,0,0,0.8);margin-top ", ";margin-bottom:", ";@media screen and (min-width:800px){font-size:", ";font-weight:600;padding-top:", ";width:", ";height:", ";margin-top ", ";margin-bottom:", ";}"], calVW(18), calVW(275), calVW(80), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].titleBg, calVW(16), calVW(15), calVW(10), cal800(16), cal800(18), cal800(275), cal800(80), cal800(15), cal800(10));
const CountDownStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui_Countdown__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "styled__CountDownStyled",
  componentId: "sc-1gfzk9f-6"
})(["flex:0 0 auto;display:flex;justify-content:center;align-items:center;min-height:", ";margin:", " auto ", ";background-image:url(", ");background-repeat:no-repeat;background-position:center;background-size:", " ", ";max-width:800px;@media screen and (min-width:800px){margin:", " auto ", ";min-height:", ";background-size:", " ", ";}", "{max-width:800px;width:100%;margin-top:0;div{margin-top:0;margin-bottom:0;border:none;font-size:", ";font-weight:600;line-height:1.25;color:#ffffff;:nth-child(2){color:#6dd9e3;font-size:", ";margin-top:", ";}}@media screen and (min-width:800px){div{font-size:", ";:nth-child(2){font-size:", ";margin-top:", ";}}}}"], calVW(95), calVW(32), calVW(36), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].timeBg, calVW(360), calVW(95), cal800(32), cal800(36), cal800(95), cal800(360), cal800(95), _vmo_ui_Countdown__WEBPACK_IMPORTED_MODULE_2__["WrapCountdownContent"], calVW(16), calVW(16), calVW(4), cal800(16), cal800(16), cal800(4));
const Tabs0Styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs0Styled",
  componentId: "sc-1gfzk9f-7"
})(["padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}background:url(", ") 0% 0% / 100% repeat-y;& > ", "{", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;flex-wrap:wrap;font-size:3.14vw;color:#ffffff;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";background-repeat:no-repeat;background-position:center;background-size:contain;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}}}}"], calVW(14), cal800(14), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(100), calVW(108), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab1, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab2, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab3, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab4, cal800(103), cal800(108), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab1A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab2A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab3A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab4A);
const Tabs00Styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs00Styled",
  componentId: "sc-1gfzk9f-8"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";background-repeat:no-repeat;background-size:100% 100%;background-position:center;:nth-child(1){background-image:url(", ");margin-right:9px;}:nth-child(2){width:", ";background-image:url(", ");margin-right:9px;}:nth-child(3){width:", ";background-image:url(", ");margin-right:23px;}:nth-child(4){width:", ";background-image:url(", ");margin-right:9px;margin-top:16px;}:nth-child(5){width:", ";background-image:url(", ");margin-top:16px;}@media screen and (min-width:800px){width:", ";height:", ";:nth-child(2){width:", ";}:nth-child(3){width:", ";}:nth-child(4){width:", ";margin-top:16px;}:nth-child(5){width:", ";margin-top:16px;}}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}:nth-child(5){background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";padding-bottom:", ";@media screen and (min-width:800px){padding-top:", ";padding-bottom:", ";}}"], calVW(31), cal800(31), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(39), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtaboff, calVW(117), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtaboff, calVW(117), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtaboff, calVW(117), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtaboff, calVW(117), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtaboff, cal800(117), cal800(39), cal800(117), cal800(117), cal800(117), cal800(117), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtabon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtabon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtabon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtabon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtabon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(26), calVW(26), cal800(26), cal800(26));
const Tabs10Styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs10Styled",
  componentId: "sc-1gfzk9f-9"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";background-repeat:no-repeat;background-size:100% 100%;background-position:center;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}"], calVW(26), cal800(26), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(39), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, cal800(117), cal800(39), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(26), cal800(26));
const Tabs110Styledxx = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs110Styledxx",
  componentId: "sc-1gfzk9f-10"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";background-repeat:no-repeat;background-size:100% 100%;background-position:center;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){margin-top:17px;background-image:url(", ");}:nth-child(5){margin-top:17px;background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){margin-top:17px;background-image:url(", ");}:nth-child(5){margin-top:17px;background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}"], calVW(-6), cal800(-6), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(31), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, cal800(117), cal800(31), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(20), cal800(20));
const Tabs_intro1Styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs_intro1Styled",
  componentId: "sc-1gfzk9f-11"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";background-repeat:no-repeat;background-size:100% 100%;background-position:center;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}"], calVW(-6), cal800(-6), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(31), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, cal800(117), cal800(31), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(20), cal800(20));
const Tabs_qualifyStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs_qualifyStyled",
  componentId: "sc-1gfzk9f-12"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";background-repeat:no-repeat;background-size:100% 100%;background-position:center;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}"], calVW(-6), cal800(-6), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(31), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, cal800(117), cal800(31), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(20), cal800(20));
const Tabs_round1Styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs_round1Styled",
  componentId: "sc-1gfzk9f-13"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{position:relative;", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;font-size:3.38vw;font-weight:600;color:#976337;flex-wrap:wrap;", "{position:relative;flex:0 0 auto;display:flex;justify-content:center;align-items:flex-end;width:", ";min-height:", ";margin-right:", ";:nth-child(1){> div:first-child{width:", ";background-image:url(", ");background-repeat:no-repeat;background-size:", " ", ";background-position:top center;padding-top:", ";position:relative;z-index:1;}}:nth-child(2){> div:first-child{width:", ";background-image:url(", ");background-repeat:no-repeat;background-size:", " ", ";background-position:top center;padding-top:", ";position:relative;z-index:1;}}:nth-child(3){margin-right:0;> div:first-child{width:", ";background-image:url(", ");background-repeat:no-repeat;background-size:", " ", ";background-position:top center;padding-top:", ";position:relative;z-index:1;}}> div{color:#8f8fa8;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:", ";font-weight:500;}@media screen and (min-width:800px){font-size:", ";width:", ";min-height:", ";margin-right:", ";:nth-child(1){> div:first-child{width:", ";background-size:", " ", ";padding-top:", ";}}:nth-child(2){> div:first-child{width:", ";background-size:", " ", ";padding-top:", ";}}:nth-child(3){margin-right:0;> div:first-child{width:", ";background-size:", " ", ";padding-top:", ";}}> div{font-size:", ";}}}", "{:nth-child(1){> div:first-child{background-image:url(", ");}}:nth-child(2){> div:first-child{background-image:url(", ");}}:nth-child(3){> div:first-child{background-image:url(", ");}}> div{color:#fff;}}}}> ", "{margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}}"], calVW(58), cal800(58), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(95), calVW(95), calVW(33), calVW(95), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xmassocksoff, calVW(95), calVW(95), calVW(95 + 39), calVW(95), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].candycanesoff, calVW(95), calVW(95), calVW(95 + 39), calVW(95), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].gingermanoff, calVW(95), calVW(95), calVW(95 + 39), calVW(14), cal800(32), cal800(95), cal800(95), cal800(33), cal800(95), cal800(95), cal800(95), cal800(95 + 39), cal800(95), cal800(95), cal800(95), cal800(95 + 39), cal800(95), cal800(95), cal800(95), cal800(95 + 39), cal800(14), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xmassockson, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].candycaneson, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].gingermanon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], calVW(52), cal800(52));
const Tabs_step4Styled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs_step4Styled",
  componentId: "sc-1gfzk9f-14"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{position:relative;", "{max-width:800px;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;font-size:3.38vw;font-weight:600;color:#976337;flex-wrap:wrap;", "{position:relative;flex:0 0 auto;display:flex;justify-content:center;align-items:flex-end;width:", ";min-height:", ";margin-right:", ";:nth-child(1){> div:first-child{width:", ";background-image:url(", ");background-repeat:no-repeat;background-size:", " ", ";background-position:top center;padding-top:", ";position:relative;z-index:1;}}:nth-child(2){> div:first-child{width:", ";background-image:url(", ");background-repeat:no-repeat;background-size:", " ", ";background-position:top center;padding-top:", ";position:relative;z-index:1;}}:nth-child(3){margin-right:0;> div:first-child{width:", ";background-image:url(", ");background-repeat:no-repeat;background-size:", " ", ";background-position:top center;padding-top:", ";position:relative;z-index:1;}}> div{color:#8f8fa8;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:", ";font-weight:500;}@media screen and (min-width:800px){font-size:", ";width:", ";min-height:", ";margin-right:", ";:nth-child(1){> div:first-child{width:", ";background-size:", " ", ";padding-top:", ";}}:nth-child(2){> div:first-child{width:", ";background-size:", " ", ";padding-top:", ";}}:nth-child(3){> div:first-child{width:", ";background-size:", " ", ";padding-top:", ";}}> div{font-size:", ";}}}", "{:nth-child(1){> div:first-child{background-image:url(", ");}}:nth-child(2){> div:first-child{background-image:url(", ");}}:nth-child(3){> div:first-child{background-image:url(", ");}}> div{color:#fff;}}}}"], calVW(58), cal800(58), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(95), calVW(95), calVW(33), calVW(95), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xmassocksoff, calVW(95), calVW(95), calVW(95 + 39), calVW(95), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].candycanesoff, calVW(95), calVW(95), calVW(95 + 39), calVW(95), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].gingermanoff, calVW(95), calVW(95), calVW(95 + 39), calVW(14), cal800(32), cal800(95), cal800(95), cal800(33), cal800(95), cal800(95), cal800(95), cal800(95 + 39), cal800(95), cal800(95), cal800(95), cal800(95 + 39), cal800(95), cal800(95), cal800(95), cal800(95 + 39), cal800(14), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xmassockson, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].candycaneson, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].gingermanon);
const Tabs20Styledxx = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs20Styledxx",
  componentId: "sc-1gfzk9f-15"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:600px;margin:0 auto;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";margin:0 ", ";background-repeat:no-repeat;background-size:cover;background-position:center;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";margin:0 ", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}"], calVW(26), cal800(26), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(39), calVW(10), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, cal800(117), cal800(39), calVW(5), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(26), cal800(26));
const Tabs30Styledxx = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_vmo_ui__WEBPACK_IMPORTED_MODULE_1__["Tabs"]).withConfig({
  displayName: "styled__Tabs30Styledxx",
  componentId: "sc-1gfzk9f-16"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}& > ", "{", "{max-width:600px;margin:0 auto;flex:0 0 auto;display:flex;justify-content:center;align-items:center;position:relative;flex-wrap:wrap;", "{flex:0 0 auto;display:flex;justify-content:center;align-items:center;width:", ";height:", ";margin:0 ", ";background-repeat:no-repeat;background-size:cover;background-position:center;:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}@media screen and (min-width:800px){width:", ";height:", ";margin:0 ", ";}}", "{:nth-child(1){background-image:url(", ");}:nth-child(2){background-image:url(", ");}:nth-child(3){background-image:url(", ");}:nth-child(4){background-image:url(", ");}}}}> ", "{background:url(", ") 0% 0% / 100% repeat-y;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}"], calVW(26), cal800(26), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivWrapTabMenu"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["UlLine"], _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTab"], calVW(117), calVW(39), calVW(10), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, cal800(117), cal800(39), calVW(5), _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["LiTabActive"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_ui__WEBPACK_IMPORTED_MODULE_1__["DivTabContent"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgm, calVW(26), cal800(26));
const RankBoard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__RankBoard",
  componentId: "sc-1gfzk9f-17"
})(["position:relative;width:100%;height:", ";background-repeat:no-repeat;background-image:url(", ");background-size:100% 100%;background-position:center;margin-top:", ";margin-bottom:", ";@media screen and (min-width:800px){height:", ";margin-top:", ";margin-bottom:", ";}"], calVW(317), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rankBoardBg, calVW(54), calVW(32), cal800(317), cal800(54), cal800(32));
const RankBoardItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__RankBoardItem",
  componentId: "sc-1gfzk9f-18"
})(["position:absolute;right:", ";", " ", " ", " ", " ", " ", " ", "     width:", ";height:", ";background-repeat:no-repeat;", " background-size:100% 100%;background-position:center;@media screen and (min-width:800px){width:", ";height:", ";right:", ";", " ", " ", " ", " ", " ", " ", "}"], calVW(312), props => props.team === 1 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:", ";"], calVW(17)) : '', props => props.team === 2 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:", ";"], calVW(106)) : '', props => props.team === 3 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:", ";"], calVW(196)) : '', props => props.rank === 1 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:0;"]) : '', props => props.rank === 2 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:", ";"], calVW(69)) : '', props => props.rank === 3 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:", ";"], calVW(155)) : '', props => props.rank === 4 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:", ";"], calVW(238)) : '', calVW(103), calVW(81), props => props.bg ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-image:url(", ");"], props.bg) : '', cal800(103), cal800(81), cal800(312), props => props.team === 1 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:", ";"], cal800(17)) : '', props => props.team === 2 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:", ";"], cal800(106)) : '', props => props.team === 3 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["top:", ";"], cal800(196)) : '', props => props.rank === 1 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:0;"]) : '', props => props.rank === 2 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:", ";"], cal800(69)) : '', props => props.rank === 3 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:", ";"], cal800(155)) : '', props => props.rank === 4 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:", ";"], cal800(238)) : '');
const CrownStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__CrownStyled",
  componentId: "sc-1gfzk9f-19"
})(["position:absolute;top:", ";left:", ";width:", ";height:", ";background-repeat:no-repeat;background-position:center;background-size:contain;", " @media screen and (min-width:800px){width:", ";height:", ";top:", ";left:", ";}"], calVW(-24), calVW((95 - 53) / 2), calVW(53), calVW(29), props => props.bg ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-image:url(", ");"], props.bg) : '', cal800(53), cal800(29), cal800(-24), cal800((95 - 53) / 2));
const VSStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__VSStyled",
  componentId: "sc-1gfzk9f-20"
})(["position:absolute;font-size:", ";font-weight:600;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;text-align:center;color:#ffd900 !important;top:", ";left:", ";@media screen and (min-width:800px){font-size:", ";top:", ";left:", ";}"], calVW(16), calVW(49 + 95), calVW(9 + 95), cal800(16), cal800(49 + 95), cal800(9 + 95));
const ScaleBoard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ScaleBoard",
  componentId: "sc-1gfzk9f-21"
})(["position:relative;margin-top:8.93vw;margin-bottom:7.6vw;height:25.12vw;@media screen and (min-width:800px){height:calc((800 / 828) * 208px);margin-top:calc((800 / 828) * 74px);margin-bottom:calc((800 / 828) * 63px);}"]);
const ScaleBoardItemA = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ScaleBoardItemA",
  componentId: "sc-1gfzk9f-22"
})(["background-image:linear-gradient( to right,rgba(235,160,45,0) 0%,rgba(235,160,45,0.4) 49%,rgba(235,160,45,0) 99% );height:6.28vw;@media screen and (min-width:800px){height:calc((800 / 828) * 52px);}"]);
const ScaleBoardItemB = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__ScaleBoardItemB",
  componentId: "sc-1gfzk9f-23"
})(["background-image:linear-gradient( to left,rgba(255,190,73,0),rgba(255,190,73,0.4) 50%,rgba(255,190,73,0) );height:6.28vw;@media screen and (min-width:800px){height:calc((800 / 828) * 52px);}"]);
const ScaleText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styled__ScaleText",
  componentId: "sc-1gfzk9f-24"
})(["position:absolute;display:flex;flex-direction:column;font-size:1.93vw;color:#a5773e;text-shadow:0 0 1px #ffffff;font-weight:600;", " line-height:1.375;width:9.42vw;", " top:-0.96vw;span{margin-bottom:3.62vw;}@media screen and (min-width:800px){font-size:calc((800 / 828) * 16px);width:calc((800 / 828) * 78px);top:calc((800 / 828) * -8px);", " span{margin-bottom:calc((800 / 828) * 30px);}}"], props => props.position === 'left' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-align:right;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-align:left;"]), props => props.position === 'left' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["left:1.88vw;"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:1.88vw;"]), props => props.position === 'left' ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["left:calc((800 / 828) * 15.6px);"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["right:calc((800 / 828) * 15.6px);"]));
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Section",
  componentId: "sc-1gfzk9f-25"
})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;div:nth-child(1){width:34.54vw;height:31.64vw;background-image:url(", ");background-position:center;background-repeat:no-repeat;background-size:contain;@media screen and (min-width:800px){width:calc((800 / 828) * 286px);height:calc((800 / 828) * 262px);}}div:nth-child(2){font-size:3.38vw;font-weight:600;letter-spacing:-0.78px;color:#00eaff;text-shadow:0 0 7px rgba(109,243,255,0.7);margin-top:5.07vw;@media screen and (min-width:800px){font-size:calc((800 / 828) * 28px);margin-top:calc((800 / 828) * 42px);}}div:nth-child(3){cursor:pointer;width:25.36vw;height:7.48vw;display:flex;justify-content:flex-start;align-items:center;text-align:center;background-image:url(", ");background-position:6.28vw center;background-repeat:no-repeat;background-size:contain;font-size:3.38vw;font-weight:600;line-height:3.38vw;letter-spacing:-0.78px;color:#00eaff;text-shadow:0 0 7px rgba(109,243,255,0.7);margin-top:5.07vw;border-radius:7px;box-shadow:0 0 4px 0 #ffffff,0 0 15px 0 #00eeff;border:solid 2px #ffffff;padding-left:12.31vw;@media screen and (min-width:800px){font-size:calc((800 / 828) * 28px);width:calc((800 / 828) * 210px);height:calc((800 / 828) * 62px);line-height:calc((800 / 828) * 28px);padding-left:calc((800 / 828) * 102px);background-position:calc((800 / 828) * 52px) center;}:hover{border-radius:7px;box-shadow:0 0 4px 0 #ffffff,0 0 15px 1px rgba(168,249,255,0.8);border:solid 2px #ffffff;background-color:#00eaff;color:#ffffff;background-image:url(", ");}}"], props => props.bg, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].trophy, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].trophyW);
const SectionImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styled__SectionImg",
  componentId: "sc-1gfzk9f-26"
})(["width:", ";height:", ";", " @media screen and (min-width:800px){width:", ";height:", ";}"], props => calVW(props.width), props => calVW(props.height), props => !props.active ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:0.4;"]) : '', props => cal800(props.width), props => cal800(props.height));
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SectionTitle",
  componentId: "sc-1gfzk9f-27"
})(["text-shadow:0 0 7px rgba(109,243,255,0.7);font-size:", ";font-weight:600;letter-spacing:-0.5px;text-align:center;color:", ";margin-top:", ";@media screen and (min-width:800px){font-size:", ";margin-top:", ";}"], calVW(9), props => props.active ? '#00eaff' : '#fff', calVW(6), cal800(9), cal800(6));
const SectionLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SectionLine",
  componentId: "sc-1gfzk9f-28"
})(["font-size:", ";background-image:url(", ");background-size:50%;background-position:left center;background-repeat:repeat-x;width:90%;text-align:center;margin-bottom:", ";@media screen and (min-width:800px){font-size:", ";margin-bottom:", ";}"], calVW(12), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].line, calVW(2), cal800(12), cal800(2));
const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__SectionWrapper",
  componentId: "sc-1gfzk9f-29"
})(["overflow-y:scroll;display:", ";position:absolute;max-width:800px;margin:0 auto;width:100%;height:100vh;top:", ";left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.7);.container{position:relative;z-index:3;padding:", " 0;background-image:url(", "),url(", ");background-size:100%;background-position:top,bottom;background-repeat:no-repeat;margin:0 auto;@media screen and (min-width:800px){padding:", " 0;}.rowItem{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding-top:", ";@media screen and (min-width:800px){padding-top:", ";}}.row{display:flex;flex-direction:column;justify-content:center;align-items:center;background-image:url(", ");background-size:100%;background-position:center;background-repeat:no-repeat;padding-bottom:", ";@media screen and (min-width:800px){padding-bottom:", ";}.item{width:100%;flex-wrap:wrap;display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:0 ", ";@media screen and (min-width:800px){padding:0 ", ";}}}.section0{cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:", ";@media screen and (min-width:800px){margin-bottom:", ";}}.section1{cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-right:", ";margin-bottom:", ";@media screen and (min-width:800px){margin-right:", ";margin-bottom:", ";}}.section2{cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:", ";@media screen and (min-width:800px){margin-bottom:", ";}}.section3{cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-right:", ";margin-bottom:", ";@media screen and (min-width:800px){margin-right:", ";margin-bottom:", ";}}}"], props => props.show ? 'block' : 'none', props => `${props.top}px`, calVW(71), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgPopTop, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgPopBottom, cal800(71), calVW(10), cal800(10), _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].bgPopMiddle, calVW(17), cal800(17), calVW(50), cal800(50), calVW(13), cal800(13), calVW(33), calVW(3), cal800(33), cal800(3), calVW(3), cal800(3), calVW(38), calVW(13), cal800(38), cal800(13));
const BackToTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__BackToTop",
  componentId: "sc-1gfzk9f-30"
})(["cursor:pointer;width:60px;height:60px;position:fixed;right:0px;bottom:10%;z-index:99;background:url(", ") center center / 100% no-repeat;background-repeat:no-repeat;background-position:center center;"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].backTop);
const ImageCache = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "styled__ImageCache",
  componentId: "sc-1gfzk9f-31"
})(["position:absolute;left:-9999px;width:0;height:0;visibility:hidden;background-image:url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", "),url(", ");"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab1, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab1A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab2, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab2A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab3, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab3A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab4, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtab4A, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtabon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xtaboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].timeBg, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].tipsBg, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].subon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].suboff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xmassockson, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].xmassocksoff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].candycaneson, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].candycanesoff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].gingermanon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].gingermanoff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].n1on, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].n1off, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].n2on, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].n2off, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].n3on, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].n3off, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].missionBG, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].missionTab, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].missionTitle, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].checkon, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].checkoff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rankBoardBg, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rankA, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rankB, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].rankC, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].no1Off, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].no1On, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].no2Off, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].no2On, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].no3Off, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].no3On, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].crownOff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].crownOn, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].plusOff, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].plusOn, _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_3__["default"].borderLine); // export const ImageCache = styled.img`
//   position: absolute;
//   left: -9999px;
//   width: 0;
//   height: 0;
//   visibility: hidden;
//   background-image: url(${Images.tab11I}), url(${Images.tab12I}),
//     url(${Images.tab13I}), url(${Images.tab14I}), url(${Images.tab11A}),
//     url(${Images.tab12A}), url(${Images.tab13A}), url(${Images.tab14A}),
//     url(${Images.tab21I}), url(${Images.tab22I}), url(${Images.tab23I}),
//     url(${Images.tab21A}), url(${Images.tab22A}), url(${Images.tab23A}),
//     url(${Images.tab31I}), url(${Images.tab32I}), url(${Images.tab33I}),
//     url(${Images.tab34I}), url(${Images.tab31A}), url(${Images.tab32A}),
//     url(${Images.tab33A}), url(${Images.tab34A}), url(${Images.tab41I}),
//     url(${Images.tab42I}), url(${Images.tab43I}), url(${Images.tab41A}),
//     url(${Images.tab42A}), url(${Images.tab43A}), url(${Images.tab51I}),
//     url(${Images.tab52I}), url(${Images.tab53I}), url(${Images.tab54I}),
//     url(${Images.tab51A}), url(${Images.tab52A}), url(${Images.tab53A}),
//     url(${Images.tab54A}), url(${Images.tab61I}), url(${Images.tab62I}),
//     url(${Images.tab63I}), url(${Images.tab61A}), url(${Images.tab62A}),
//     url(${Images.tab63A}), url(${Images.tab211I}), url(${Images.tab212I}),
//     url(${Images.tab213I}), url(${Images.tab211A}), url(${Images.tab212A}),
//     url(${Images.tab213A}), url(${Images.tab231I}), url(${Images.tab232I}),
//     url(${Images.tab233I}), url(${Images.tab231A}), url(${Images.tab232A}),
//     url(${Images.tab233A}), url(${Images.tab411I}), url(${Images.tab412I}),
//     url(${Images.tab413I}), url(${Images.tab411A}), url(${Images.tab412A}),
//     url(${Images.tab413A}), url(${Images.tab421I}), url(${Images.tab422I}),
//     url(${Images.tab423I}), url(${Images.tab421A}), url(${Images.tab422A}),
//     url(${Images.tab423A}), url(${Images.tab521I}), url(${Images.tab522I}),
//     url(${Images.tab523I}), url(${Images.tab521A}), url(${Images.tab522A}),
//     url(${Images.tab523A}), url(${Images.tab531I}), url(${Images.tab532I}),
//     url(${Images.tab531A}), url(${Images.tab532A}), url(${Images.tab1A}),
//     url(${Images.tab2A}), url(${Images.tab3A}), url(${Images.tab4A}),
//     url(${Images.tab5A}), url(${Images.tab6A}), url(${Images.tab1I}),
//     url(${Images.tab2I}), url(${Images.tab3I}), url(${Images.tab4I}),
//     url(${Images.tab5I}), url(${Images.tab6I});
// `;

/***/ }),

/***/ "./components/frameBorder/FrameBorder.tsx":
/*!************************************************!*\
  !*** ./components/frameBorder/FrameBorder.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/frameBorder/style.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\frameBorder\\FrameBorder.tsx";


/* harmony default export */ __webpack_exports__["default"] = (({
  title = '',
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["BodyWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, children));
});

/***/ }),

/***/ "./components/frameBorder/PopupFrame.tsx":
/*!***********************************************!*\
  !*** ./components/frameBorder/PopupFrame.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/frameBorder/style.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\frameBorder\\PopupFrame.tsx";


/* harmony default export */ __webpack_exports__["default"] = (({
  title = '',
  children,
  withClose = false,
  onClose
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["PopupTitleWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, title), withClose && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["WrapCloseButton"], {
    onClick: () => onClose(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["PopupBodyWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["PopupFooterWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./components/frameBorder/index.ts":
/*!*****************************************!*\
  !*** ./components/frameBorder/index.ts ***!
  \*****************************************/
/*! exports provided: default, PopupFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PopupFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupFrame */ "./components/frameBorder/PopupFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupFrame", function() { return _PopupFrame__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FrameBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameBorder */ "./components/frameBorder/FrameBorder.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FrameBorder__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/frameBorder/style.ts":
/*!*****************************************!*\
  !*** ./components/frameBorder/style.ts ***!
  \*****************************************/
/*! exports provided: TitleWrapper, FooterWrapper, BodyWrapper, PopupTitleWrapper, PopupFooterWrapper, PopupBodyWrapper, WrapCloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrapper", function() { return TitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyWrapper", function() { return BodyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupTitleWrapper", function() { return PopupTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupFooterWrapper", function() { return PopupFooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupBodyWrapper", function() { return PopupBodyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapCloseButton", function() { return WrapCloseButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/web/themes/images */ "./themes/images.ts");


const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__TitleWrapper",
  componentId: "sc-16glfja-0"
})(["text-align:center;color:#ffffff;height:17vw;max-height:137px;line-height:19vw;background:url(", ") center no-repeat;background-size:cover;text-shadow:0 0 20px rgba(254,65,203,0.7);-webkit-text-stroke:1px #fe41cb;font-size:14px;font-weight:500;letter-spacing:0.61px;@media screen and (min-width:800px){line-height:152px;}"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].frameBorderHeaderWithColor);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__FooterWrapper",
  componentId: "sc-16glfja-1"
})(["width:100%;background-size:cover;text-align:center;color:rgb(254,65,203);height:17vw;max-height:137px;line-height:12vw;padding:0 13px;@media screen and (min-width:800px){line-height:105px;}"]);
const BodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__BodyWrapper",
  componentId: "sc-16glfja-2"
})(["min-height:75px;width:100%;height:10%;background-size:100% 100%;padding:0 35px;@media screen and (max-width:801px){padding:0px 5vw;}"]);
const PopupTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(TitleWrapper).withConfig({
  displayName: "style__PopupTitleWrapper",
  componentId: "sc-16glfja-3"
})(["background:url(", ") center no-repeat;background-size:100% 100%;"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].popupHeader);
const PopupFooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(FooterWrapper).withConfig({
  displayName: "style__PopupFooterWrapper",
  componentId: "sc-16glfja-4"
})(["background:url(", ") center no-repeat;background-size:100% 100%;"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].popupFooter);
const PopupBodyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(BodyWrapper).withConfig({
  displayName: "style__PopupBodyWrapper",
  componentId: "sc-16glfja-5"
})(["background:url(", ") center no-repeat;background-size:cover;"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].popupBody);
const WrapCloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapCloseButton",
  componentId: "sc-16glfja-6"
})(["position:absolute;top:6vw;right:6vw;z-index:11;width:6vw;height:6vw;background:url(", ") center no-repeat;background-size:cover;@media screen and (min-width:800px){top:45px;right:55px;width:45px;height:45px;}"], _vmo_web_themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].popupClose);

/***/ }),

/***/ "./components/leaderboard/LeaderboardGeneral.tsx":
/*!*******************************************************!*\
  !*** ./components/leaderboard/LeaderboardGeneral.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/ui/hooks */ "../ui/hooks/index.ts");
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./components/leaderboard/style.ts");
/* harmony import */ var _context_missionPanelContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/missionPanelContext */ "./context/missionPanelContext.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\leaderboard\\LeaderboardGeneral.tsx";









const LeaderboardGeneral = ({
  leaderboardData,
  render,
  itemHeight,
  panelSize = 0,
  withMissions = false,
  withBonus = false
}) => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_4__["TranslationContext"]);
  const {
    data,
    handleOnChange
  } = Object(_vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_5__["useFilter"])(leaderboardData);
  const refFilter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const refLeaderboard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const panelState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_missionPanelContext__WEBPACK_IMPORTED_MODULE_8__["MissionPanelContext"]);
  const {
    showPanelID,
    setShowPanelID,
    setMissionDetails
  } = panelState;
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["useMinSectionTracking"])(refFilter, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_6__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["createSectionViewAction"])('searchBar'));
  });
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["useMinSectionTracking"])(refLeaderboard, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_6__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_2__["createSectionViewAction"])('leaderboardItem'));
  });

  const handleToggleButton = useId => {
    const newIndex = showPanelID === useId ? '' : useId;
    setShowPanelID(newIndex);
    setMissionDetails([]);
  }; // const handleToggleButton2 = (useId2: string) => {
  //   const newIndex2 = showPanelID2 === useId2 ? '' : useId2;
  //   setShowPanelID2(newIndex2); //寫入newIndex2無效
  //   setBonusDetails([]);
  //   console.log( 'showPanelID2:'+showPanelID2 +'   newIndex2:'+ newIndex2 +'   useId2:'+ useId2 );
  // };


  const Row = ({
    index
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["WrapLeaderboardItem"], {
    key: data[index].userID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, render(data[index], showPanelID === data[index].userID), withMissions && withBonus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["BonusToggleButton"], {
    isOpen: showPanelID === data[index].userID,
    onClick: () => handleToggleButton(data[index].userID),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }) : withMissions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["ToggleButton"], {
    isOpen: showPanelID === data[index].userID,
    onClick: () => handleToggleButton(data[index].userID),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }) : null);

  const Filter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["WrapFilter"], {
    ref: refFilter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "\u8ACB\u8F38\u5165\u4E3B\u64ADID" // placeholder={translation.get('SEARCH_PLACEHOLDER')}
    ,
    onChange: evt => handleOnChange(evt.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }))), [handleOnChange, translation]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["FrameBorder"], {
    ref: refLeaderboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, Filter, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["CopyButton"], {
    data: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), data.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_3__["VirtualizedList"], {
    dataset: data,
    itemHeight: itemHeight,
    updateOnID: showPanelID,
    panelSize: panelSize,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, Row) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["NoData"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, translation.get('EMPTY_LEADERBOARD'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(LeaderboardGeneral, (prev, next) => _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(prev) === _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(next)));

/***/ }),

/***/ "./components/leaderboard/LeaderboardItem.tsx":
/*!****************************************************!*\
  !*** ./components/leaderboard/LeaderboardItem.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui/hooks */ "../ui/hooks/index.ts");
/* harmony import */ var _vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/web/context/translationContext */ "./context/translationContext.ts");
/* harmony import */ var _themes_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../themes/images */ "./themes/images.ts");
/* harmony import */ var _LeaderboardGeneral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LeaderboardGeneral */ "./components/leaderboard/LeaderboardGeneral.tsx");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./components/leaderboard/style.ts");
/* harmony import */ var _MissionPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MissionPanel */ "./components/leaderboard/MissionPanel.tsx");
/* harmony import */ var _frameBorder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../frameBorder */ "./components/frameBorder/index.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\leaderboard\\LeaderboardItem.tsx";











const getBackgroundColor = (item, condition, condIcon) => {
  let backgroundColor = '#070027';

  if (condIcon && condIcon.icon) {
    backgroundColor = 'rgba(9, 0, 59, 0.92)';
  }

  if (condition && condition.bgs) {
    const condBg = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["conditionMatch"])(condition.bgs, item);
    backgroundColor = condBg && condBg.color ? condBg.color : 'rgba(9, 0, 59, 0.92)';
  }

  return backgroundColor;
};

const RenderLeaderboardItem = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(({
  item,
  condition,
  showPanel
}) => {
  const translation = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_vmo_web_context_translationContext__WEBPACK_IMPORTED_MODULE_5__["TranslationContext"]);
  const {
    handleClickItem
  } = Object(_vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_4__["useDeepLink"])(item.userID, item.openID, item.roomID);
  const condIcon = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["conditionMatch"])(condition.icons, item);
  const backgroundColor = getBackgroundColor(item, condition, condIcon);

  const getAdditionalText = () => {
    let additionalText = '';

    if (condition.withVote) {
      additionalText = `${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.score)} 票 / ${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.meta.amount)}分`;
    }

    if (condition.withBonus) {
      additionalText = `${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.score)} 響叮噹 / ${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.meta.amount)}分`;
    }

    if (condition.withTotalScore) {
      additionalText = `${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.score)} ( ${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.meta.vote || 0)} + ${Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_3__["numberFormat"])(item.meta.gift || 0)} ) 總積分`;
    }

    return additionalText;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_8__["WrapLeaderboardItem"], {
    withButton: condition.missions && condition.missions.length > 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_2__["LeaderboardItem"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    handleClickAvatar: handleClickItem,
    isLive: item.roomID && item.roomID > 0,
    theme: {
      colorNickName: '#ffffff',
      color: '#ce9914',
      colorRankNumber: '#ffffff',
      borderBottom: _themes_images__WEBPACK_IMPORTED_MODULE_6__["default"].borderLine,
      background: backgroundColor
    }
  }, item, {
    icon: condIcon ? condIcon.icon : '',
    unit: translation.get('UNIT'),
    additionalText: getAdditionalText(),
    isHighlight: true,
    withBonus: false,
    withVote: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  })), showPanel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MissionPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    condition: condition,
    userID: item.userID,
    meta: item.meta,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }));
});

const Leaderboard = ({
  leaderboardData,
  condition
}) => {
  let panelSize = 98;

  if (condition.missions && condition.missions.length > 0) {
    panelSize = condition.missions.length * 88 + 20;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_frameBorder__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LeaderboardGeneral__WEBPACK_IMPORTED_MODULE_7__["default"], {
    itemHeight: 78,
    panelSize: panelSize,
    leaderboardData: leaderboardData,
    withMissions: condition.missions && condition.missions.length > 0,
    withBonus: condition.withBonus,
    render: (item, showPanel) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RenderLeaderboardItem, {
        item: item,
        condition: condition,
        showPanel: showPanel,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Leaderboard));

/***/ }),

/***/ "./components/leaderboard/MissionPanel.tsx":
/*!*************************************************!*\
  !*** ./components/leaderboard/MissionPanel.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/ui/Loading */ "../ui/Loading.tsx");
/* harmony import */ var _vmo_share_services_leaderboardEventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/share/services/leaderboardEventory.service */ "../share/services/leaderboardEventory.service.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/leaderboard/style.ts");
/* harmony import */ var _context_missionPanelContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/missionPanelContext */ "./context/missionPanelContext.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\leaderboard\\MissionPanel.tsx";







const RenderMission = ({
  mission,
  score,
  isChecked
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["WrapMission"], {
    isChecked: isChecked,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mission-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, mission.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mission-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, mission.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mission-prize",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, mission.prize), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mission-threshold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "\u76EE\u524D\u7D2F\u7A4D\u6578\u91CF(", score, "/", mission.threshold, ")"))), mission.threshold && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mission-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }));
}; // const RenderBonus = ({ bonus, score ,meta }) => {
//   return (
//     <WrapBonusPanel>
//       <div className="bonus_title">加分詳情</div>
//       <section>
//         <div>
//           <span>階段四</span> <span>+{meta.s4 || 0}</span>
//         </div>
//         <div>
//           <span>Round 2</span> <span>+{meta.r2 || 0}</span>
//         </div>
//       </section>
//       <Borderline />
//     </WrapBonusPanel>
//   );
// };


/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  condition,
  userID,
  meta = {}
}) => {
  const source = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const panelState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_missionPanelContext__WEBPACK_IMPORTED_MODULE_5__["MissionPanelContext"]);
  const {
    missionDetails,
    setMissionDetails
  } = panelState;
  const {
    needRequest,
    missions
  } = condition;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (needRequest && missionDetails.length === 0) {
      const subKeys = userID;
      source.current = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken.source();
      const cancelToken = source.current.token;
      Object(_vmo_share_services_leaderboardEventory_service__WEBPACK_IMPORTED_MODULE_3__["getEventoryDetails"])(condition.containerID, subKeys, cancelToken).then(result => {
        const detailList = [];

        if (result && result.data) {
          result.data.forEach(item => {
            if (item.meta && item.meta.eventoryKey) detailList.push({
              eventoryKey: item.meta.eventoryKey,
              score: item.score
            });
          });
        } else {
          detailList.push({
            eventoryKey: '',
            score: 0
          });
        }

        setMissionDetails(detailList);
      });
    }

    return () => {
      if (source.current) source.current.cancel();
    };
  }, [condition.containerID, missionDetails.length, needRequest, setMissionDetails, userID]);

  const RenderMetaScore = ({
    mission
  }) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["WrapBonusPanel"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bonus_title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }, "\u52A0\u5206\u8A73\u60C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 5
      }
    }, "\u968E\u6BB5\u56DB"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 22
      }
    }, "+", meta[mission.metaKey], "\u5206")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, "Round 2"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 32
      }
    }, "+", meta[mission.metaKey], "\u5206"))));
  };

  if (needRequest && missionDetails.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["WrapPanel"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "#ffffff",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__["WrapPanel"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, missions.map(item => {
    if (needRequest) {
      let isChecked = false;
      let score = 0;

      if (missionDetails.length > 0) {
        const missionMatched = missionDetails.find(detail => detail.eventoryKey.includes(item.eventoryKey));

        if (missionMatched) {
          isChecked = missionMatched.score >= item.threshold;
          score = missionMatched.score >= item.threshold ? item.threshold : missionMatched.score;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderMission, {
        key: item.title,
        mission: item,
        score: score,
        isChecked: isChecked,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderMetaScore, {
      key: item.title,
      mission: item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 16
      }
    });
  }));
}));

/***/ }),

/***/ "./components/leaderboard/index.tsx":
/*!******************************************!*\
  !*** ./components/leaderboard/index.tsx ***!
  \******************************************/
/*! exports provided: Leaderboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeaderboardItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaderboardItem */ "./components/leaderboard/LeaderboardItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Leaderboard", function() { return _LeaderboardItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// import LeaderboardGeneral from './LeaderboardGeneral';



/***/ }),

/***/ "./components/leaderboard/style.ts":
/*!*****************************************!*\
  !*** ./components/leaderboard/style.ts ***!
  \*****************************************/
/*! exports provided: WrapTitle, WrapFilter, NoData, WrapLeaderboardItem, FrameBorder, ToggleButton, BonusToggleButton, WrapPanel, WrapMission, WrapMetaScore, WrapBonusPanel, Borderline, MissionPanelWrap, MissionItem, UserAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapTitle", function() { return WrapTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapFilter", function() { return WrapFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoData", function() { return NoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapLeaderboardItem", function() { return WrapLeaderboardItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameBorder", function() { return FrameBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return ToggleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusToggleButton", function() { return BonusToggleButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPanel", function() { return WrapPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapMission", function() { return WrapMission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapMetaScore", function() { return WrapMetaScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapBonusPanel", function() { return WrapBonusPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Borderline", function() { return Borderline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionPanelWrap", function() { return MissionPanelWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionItem", function() { return MissionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../themes/images */ "./themes/images.ts");
// 2002-tw-alliance


const WrapTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapTitle",
  componentId: "sc-2omn6c-0"
})(["text-align:center;font-size:20px;text-shadow:0 0 13px #fbf6d5;font-weight:600;letter-spacing:2.75px;color:#fbf6d5;margin-top:10.62vw;@media screen and (min-width:800px){margin-top:calc((800 / 828) * 88px);}"]);
const WrapFilter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapFilter",
  componentId: "sc-2omn6c-1"
})(["margin:0px auto;padding-top:10px;position:relative;background-color:rgba(9,0,59,0.92);width:100%;&:after{content:'';display:flex;flex-direction:row;width:90%;border:1px solid #ce9914;margin:0 auto;@media screen and (max-width:800px){width:90%;}}@media screen and (min-width:800px){padding:10px 15px;}input{font-size:1rem;width:90%;height:36px;display:flex;justify-content:center;line-height:1;padding-left:13px;padding-right:60px;outline:none;color:#D5AD48;margin:0 auto 20px;border-radius:50px;border:none;position:relative;&::-webkit-input-placeholder{line-height:16px;}&:-moz-placeholder{line-height:16px;}&:-ms-input-placeholder{line-height:16px;}}"]);
const NoData = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__NoData",
  componentId: "sc-2omn6c-2"
})(["color:white;width:100%;text-align:center;padding-bottom:32px;font-weight:600;line-height:60px;padding-top:15px;"]);
const WrapLeaderboardItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapLeaderboardItem",
  componentId: "sc-2omn6c-3"
})(["position:relative;height:100%;overflow:hidden;.user-name{width:", ";}"], props => props.withButton ? 'calc(100% - 85px)' : '100%');
const FrameBorder = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__FrameBorder",
  componentId: "sc-2omn6c-4"
})(["border:1px solid #ce9914;background-size:100% 100%;position:relative;"]); // export const FrameBorder = styled.div`
//   background: url(${images.rankBg}) center;
//   background-size: 100% 100%;
//   padding: 0 3px;
//   position: relative;
//   border-radius: 25px;
//   border-bottom-left-radius: 40px;
//   border-bottom-right-radius: 40px;
//   &:before {
//     content: '';
//     position: absolute;
//     top: -3px;
//     left: 0;
//     width: 100%;
//     height: 25px;
//     z-index: 1;
//     background: url(${images.rankTopBg}) center no-repeat;
//     background-size: 100%;
//     background-position: top;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     bottom: 7px;
//     left: 0;
//     width: 100%;
//     height: 30px;
//     z-index: 1;
//     background: url(${images.rankBottomBg}) center no-repeat;
//     background-size: 100%;
//     background-position: bottom;
//   }
// `;

const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__ToggleButton",
  componentId: "sc-2omn6c-5"
})(["width:80px;height:50px;@media screen and (max-width:800px){width:50px;height:35px;}position:absolute;top:-10px;left:45%;z-index:11;background:url(", ") center no-repeat;background-size:100%;"], props => props.isOpen ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTab : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTab);
const BonusToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__BonusToggleButton",
  componentId: "sc-2omn6c-6"
})(["width:60px;height:24px;position:absolute;top:30px;right:16px;z-index:11;background:url(", ");center no-repeat;background-size:100%;@media screen and (max-width:800px){width:50px;height:20px;}"], props => props.isOpen ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].plusOff : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].plusOn);
const WrapPanel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapPanel",
  componentId: "sc-2omn6c-7"
})(["background:url(", ");background-size:cover;width:98%;height:100%;margin:0 auto;"], _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionBG);
const WrapMission = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapMission",
  componentId: "sc-2omn6c-8"
})(["width:100%;height:80px;background-color:#090029;border:1px solid #ce9914;border-radius:15px;display:flex;flex-direction:column;margin-top:10px;padding-left:15px;position:relative;&:after{content:'';width:45px;height:49px;position:absolute;right:15px;top:15px;z-index:1;background:url(", ") center no-repeat;background-size:cover;}.mission-title{position:absolute;top:-25px;width:90px;height:26px;border-radius:15px;line-height:26px;color:#ffffff;background:url(", ");background-size:cover;box-shadow:0 4px 4px rgba(0,0,0,0.5);text-align:center;margin:20px 12px 0 0;}.mission-description{margin-top:20px;line-height:16px;font-size:13px;text-align:left;margin-left:10px;display:flex;flex-direction:row;justify-content:space-between;align-content:center;margin-right:70px;}.mission-threshold{color:#808080;}"], props => props.isChecked ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].checkon : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].checkoff, _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTitle);
const WrapMetaScore = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(WrapMission).withConfig({
  displayName: "style__WrapMetaScore",
  componentId: "sc-2omn6c-9"
})(["&:after{background:none;}"]); //-------------------------------------------------------------------

const WrapBonusPanel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__WrapBonusPanel",
  componentId: "sc-2omn6c-10"
})(["width:100%;height:100%;background-color:#070027;padding-top:10px;.bonus_title{font-size:14px;text-align:center;color:#ffffff;line-height:1.14;text-shadow:0 0 1px #ffddaf;margin:15px auto 10px auto;}& > section{width:calc(100% - 112px);margin:0 auto;color:#cdd7fe;& > div{display:flex;justify-content:space-between;align-content:center;border-bottom:1px dashed #807d7a;font-size:14px;line-height:2;}}"]);
const Borderline = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Borderline",
  componentId: "sc-2omn6c-11"
})(["width:100%;height:2px;border:1px solid #ce9914;position:relative;top:17px;z-index:10;"]);

const calcBottom = (isOpen, withUserInfo) => {
  if (isOpen) return 0;
  if (withUserInfo) return '-490px';
  return '-420px';
};

const MissionPanelWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__MissionPanelWrap",
  componentId: "sc-2omn6c-12"
})(["position:fixed;bottom:", ";height:", ";z-index:100;width:100%;background:url(", ") center no-repeat;background-size:cover;padding:0 18px;transition:all 0.2s ease 0s;> div{max-width:690px;margin:0 auto;}.mission-button{width:100%;height:34px;background:url(", ") center no-repeat;background-size:contain;transform:rotate(", ");margin-top:", ";margin-bottom:", ";}.mission-user{display:flex;justify-content:flex-start;align-content:center;}.mission-user_info{display:flex;justify-content:space-between;align-content:center;flex-direction:column;padding:13px 0;}.mission-user_info--user_name{font-size:14px;font-weight:500;}.mission-user_info--user_score{font-size:16px;font-weight:500;color:#ce9914;}"], props => calcBottom(props.isOpen, props.withUserInfo), props => props.withUserInfo ? '490px' : '420px', _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionBg, _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionBtn, props => props.isOpen ? '180deg' : '0deg', props => props.isOpen ? '0' : '-34px', props => props.isOpen ? '0' : '34px');
const MissionItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__MissionItem",
  componentId: "sc-2omn6c-13"
})(["height:92px;width:100%;border-radius:13px;box-shadow:inset 0 0 5px 0 rgba(0,0,0,0.5);border:solid 1px #ce9914;background-color:#090029;margin-top:30px;padding:26px 37px 13px;position:relative;font-size:12px;@media (max-width:320px){padding-left:17px;}.mission-score{color:", ";}&:before{content:'", "';position:absolute;width:123px;height:39px;z-index:10;background:url(", ") center no-repeat;background-size:100%;top:-20px;left:20px;text-shadow:0 0 4px #6f4f23;text-align:center;font-size:14px;font-weight:600;color:#ffffff;line-height:39px;letter-spacing:0.44px;}&:after{content:'';position:absolute;top:15px;right:37px;z-index:10;width:63px;height:63px;background:url(", ") center no-repeat;background-size:100%;@media (max-width:320px){right:17px;}}"], props => props.checked ? '#fff1ae' : '#808080', props => props.title, _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTitleBg, props => props.checked ? _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTickOn : _themes_images__WEBPACK_IMPORTED_MODULE_1__["default"].missionTickOff);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(props => ({
  style: {
    background: props.style.background
  }
})).withConfig({
  displayName: "style__UserAvatar",
  componentId: "sc-2omn6c-14"
})(["width:63px;height:63px;border-radius:50%;border:1px solid #fff;margin-right:20px;background-size:cover;box-shadow:'rgb(0, 234, 255) 0px 0px 7px 1px';"]);

/***/ }),

/***/ "./constants/api.ts":
/*!**************************!*\
  !*** ./constants/api.ts ***!
  \**************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
const api = {
  //XMAS API
  bell: {
    s1: {
      sta: '5701af2f-f3cf-46f6-b736-facb2b92c0fb',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    s2: {
      sta: '3017166d-3768-4e95-a3a3-f7edf7fda905',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    s3_1: {
      sta: '6893c5dc-e8e5-435c-bbd4-5aa9cdddf6a6',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    s3_2: {
      sta: 'f5989ad1-3790-46f9-8547-d75162d0c933',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    s3_3: {
      sta: 'c212412c-edbf-448e-bed6-da21e8cb46ba',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    s3_4: {
      sta: '0b0d37b7-c7f3-4c90-9af9-9445b7151694',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    s3_5: {
      sta: 'c6eca7d8-c900-4a0f-b2aa-ed171d95357e',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    streamer_qualify: {
      sta: '7e807c0b-9588-4840-912e-a8276fdbb916',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    fans_qualify: {
      sta: 'da2c89b0-9252-4d10-b126-546020ef0712',
      prod: '',
      isEventory: true,
      firstRender: true
    }
  },
  eve: {
    r4_1: {
      sta: 'a8de1b0b-c937-40a6-9463-49810d64c2b1',
      prod: '',
      isEventory: true,
      firstRender: false
    },
    r4_2: {
      sta: 'f8ea522b-b460-48c2-ab13-bc6173219163',
      prod: '',
      isEventory: true,
      firstRender: false
    },
    r4_3: {
      sta: '324b5cfe-a84a-4f17-8109-e7c36e8885a7',
      prod: '',
      isEventory: true,
      firstRender: false
    }
  },
  offline: {
    r1: {
      g1: {
        sta: '2c25e487-b88b-4e17-8b1d-e4cf804f40c2',
        prod: '',
        isEventory: true,
        firstRender: false
      },
      g2: {
        sta: 'ec221b8e-09b4-46a9-8d35-dc22bbeb3398',
        prod: '',
        isEventory: true,
        firstRender: false
      },
      g3: {
        sta: '3cfe5b99-73d7-4423-835e-c20bf5a11728',
        prod: '',
        isEventory: true,
        firstRender: false
      }
    },
    r2: {
      g1: {
        sta: 'de193a4c-bef1-4b14-bcbf-0cd513982638',
        prod: '',
        isEventory: true,
        firstRender: false
      },
      g2: {
        sta: '395c4727-3f5b-42c4-b20e-9c6e6da509bc',
        prod: '',
        isEventory: true,
        firstRender: false
      },
      g3: {
        sta: 'b4065edf-9c26-4758-a4ec-b46b55a4a558',
        prod: '',
        isEventory: true,
        firstRender: false
      }
    },
    offlinefinal: {
      g1: {
        sta: 'fc344d74-c214-497c-8321-f907b05bc4f0',
        prod: '',
        isEventory: true,
        firstRender: false
      },
      g2: {
        sta: '9fff836d-5a16-4d64-8505-cac9534237f6',
        prod: '',
        isEventory: true,
        firstRender: false
      },
      g3: {
        sta: 'b8649455-3069-4c5b-86b8-15527fed6583',
        prod: '',
        isEventory: true,
        firstRender: false
      }
    }
  },
  //總榜
  xmasfinal: {
    streamer: {
      sta: '5fddcaaa-a27d-47f1-9e29-d47fac0b74b9',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    fans: {
      sta: 'a61fc1b6-b24d-41ec-8099-da33894def53',
      prod: '',
      isEventory: true,
      firstRender: true
    },
    bonus: {
      sta: '2011-tw-xmas-totalBonus',
      prod: '2011-tw-xmas-totalBonus',
      firstRender: false
    }
  } //---------------------------------------------------------------------------------------------------------------------
  //MOMO API
  // welcome: {
  //   r1: {
  //     sta: '46ba1c55-635c-4bbb-b69b-b060e0e3ace0',
  //     prod: 'e6c3de47-577d-4990-a286-3fb31834efe5',
  //     isEventory: true,
  //     firstRender: true,
  //   },
  //   r2: {
  //     sta: 'b7436a56-5d96-4574-a74e-67196668a39a',
  //     prod: 'b326df6f-e4cf-4412-8167-cbd2b5cd2830',
  //     isEventory: true,
  //     firstRender: true,
  //   },
  //   r3: {
  //     sta: '73cbe584-4cb9-42f9-8dd1-c384eb443d0d',
  //     prod: '087ba51f-f20d-47b8-931f-12152901a3a4',
  //     isEventory: true,
  //     firstRender: true,
  //   },
  // },
  // qiangqiang: {
  //   r4: {
  //     sta: '6db39735-989e-4cd7-a4cf-d226999e839d',
  //     prod: '4d01aacc-6bba-4886-b6e7-defdf4e4cec5',
  //     isEventory: true,
  //     firstRender: true,
  //   },
  //   r5: {
  //     star: {
  //       sta: 'b9606097-a65a-4db7-8d96-84d516100949',
  //       prod: 'b271fc5f-9ba8-4fa7-b1f3-33c144898602',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     daren: {
  //       sta: '705604f9-9265-46fd-a82f-6c210183da42',
  //       prod: '4e07a83c-0e85-4f1e-8def-4ee60930ddfc',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     gaoshou: {
  //       sta: '3422092a-7054-4b80-a9fa-f604e1c5244a',
  //       prod: 'f46bac1b-75be-404a-8710-d8507a672075',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //   },
  // },
  // best: {
  //   vote: {
  //     sta: '2008-tw-momo-vote',
  //     prod: '2008-tw-momo-vote',
  //     firstRender: false,
  //   },
  //   gift: {
  //     sta: 'ebc0b1be-e37f-4280-85c2-4c6778f981b5',
  //     prod: '3bb2df15-26b7-40b2-9539-2e3bb73a68f5',
  //     isEventory: true,
  //     firstRender: false,
  //   },
  //   bestAnchor: {
  //     sta: '2008-tw-momo-best-streamer',
  //     prod: '2008-tw-momo-best-streamer',
  //     firstRender: false,
  //   },
  // },
  // momooffline: {
  //   r1: {
  //     star: {
  //       sta: 'e0562c36-984f-4653-8b6e-cf35d25e207d',
  //       prod: '025e4f4a-af6d-497d-ab3f-6d9d48fec9ab',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     daren: {
  //       sta: '7ab8e7b0-d1b2-4a7a-ad18-6bc8e5ef047b',
  //       prod: '361c0451-2524-46f0-b7bb-b50875ada2e5',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     gaoshou: {
  //       sta: 'abf4aa98-f7fd-4efa-8e93-a385c6097676',
  //       prod: '595e33da-e4c7-4868-806a-66a2b89b2d63',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //   },
  //   r2: {
  //     star: {
  //       sta: 'd8fbae12-fdbd-4699-ad61-93c760915eb3',
  //       prod: '707a29cd-7a3a-4ca2-9d25-ec60536d2c26',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     daren: {
  //       sta: 'ffc53b33-e157-4f8a-bbe0-797dde301620',
  //       prod: 'd6a17590-ddeb-423e-9b86-8a1de95e4291',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     gaoshou: {
  //       sta: 'ab27f8f1-0694-4048-90c7-f73dd4f64faa',
  //       prod: 'a3f239ce-423d-4dc8-a01a-a843a7c23bbe',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //   },
  // },
  // total: {
  //   attend: {
  //     before: {
  //       sta: '1daf6082-53d6-451f-9dd9-2604e35b3d55',
  //       prod: '58cff726-a1da-44d4-9bb8-bb459f23ead3',
  //       isEventory: true,
  //       firstRender: false,
  //     },
  //     after: {
  //       sta: 'fddd341d-e780-4f96-88d4-478c6595d54f',
  //       prod: 'b000a7ad-c2bf-48b3-a5ac-4b335f61c899',
  //       isEventory: true,
  //       firstRender: false,
  //     },
  //   },
  //   area: {
  //     star: {
  //       sta: '7efed75a-11c0-4e07-855d-d93d82768f15',
  //       prod: 'c86d5ab6-a53a-4d9b-8fa3-f0756b6ec533',
  //       isEventory: true,
  //       firstRender: false,
  //     },
  //     daren: {
  //       sta: '6cb61795-8632-4819-8d4b-55d59fc2f002',
  //       prod: 'fe400ccc-a97a-4277-9762-83ecba57fb74',
  //       isEventory: true,
  //       firstRender: false,
  //     },
  //     gaoshou: {
  //       sta: '9943cc3e-c160-42a1-84e4-1f609de1ead7',
  //       prod: 'fbac1d20-bf28-441f-8ce3-12e39d18d45e',
  //       isEventory: true,
  //       firstRender: false,
  //     },
  //   },
  //   fans: {
  //     attend: {
  //       sta: 'b3f03ee6-ca65-4771-8ca3-77f1b492530c',
  //       prod: '3aedce47-36f1-4401-8d2c-feb84d1f8714',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //     list: {
  //       sta: 'cea21c6e-df1c-4378-9578-8ad597b9bbaa',
  //       prod: '25697c68-91a0-45bb-b323-2d8df65d4e10',
  //       isEventory: true,
  //       firstRender: true,
  //     },
  //   },
  //   bonus: {
  //     sta: '2008-tw-momo-totalBonus',
  //     prod: '2008-tw-momo-totalBonus',
  //     firstRender: false,
  //   },
  // },

};


/***/ }),

/***/ "./constants/conditions.tsx":
/*!**********************************!*\
  !*** ./constants/conditions.tsx ***!
  \**********************************/
/*! exports provided: rank0, rank11xx, rank12xx, rank131xx, rank132xx, rank133xx, rank134xx, rank135xx, rank141xx, rank142xx, rank211xx, rank212xx, rank213xx, rank311xx, rank312xx, rank313xx, rank321xx, rank322xx, rank323xx, rank324xx, rank325xx, rank326xx, rank411xx, rank412xx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank0", function() { return rank0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank11xx", function() { return rank11xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank12xx", function() { return rank12xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank131xx", function() { return rank131xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank132xx", function() { return rank132xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank133xx", function() { return rank133xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank134xx", function() { return rank134xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank135xx", function() { return rank135xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank141xx", function() { return rank141xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank142xx", function() { return rank142xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank211xx", function() { return rank211xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank212xx", function() { return rank212xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank213xx", function() { return rank213xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank311xx", function() { return rank311xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank312xx", function() { return rank312xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank313xx", function() { return rank313xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank321xx", function() { return rank321xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank322xx", function() { return rank322xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank323xx", function() { return rank323xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank324xx", function() { return rank324xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank325xx", function() { return rank325xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank326xx", function() { return rank326xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank411xx", function() { return rank411xx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rank412xx", function() { return rank412xx; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./constants/api.ts");
/* harmony import */ var _static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/icons/crown.svg */ "./static/icons/crown.svg");
/* harmony import */ var _static_icons_tick1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/icons/tick1.svg */ "./static/icons/tick1.svg");
/* harmony import */ var _static_icons_Crown_silver_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/icons/Crown_silver.svg */ "./static/icons/Crown_silver.svg");
/* harmony import */ var _static_icons_Crown_copper_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/icons/Crown_copper.svg */ "./static/icons/Crown_copper.svg");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\constants\\conditions.tsx";





 // import IconCrownPink from '../static/icons/pink-crown.svg';
// import IconCrownBlue from '../static/icons/blue-crown.svg';
// import IconTick2 from '../static/icons/tick2.svg';
// import IconTick3 from '../static/icons/tick3.svg';
// import IconGiftRed from '../static/icons/gift-red.svg';
// import IconGiftPink from '../static/icons/gift-pink.svg';
// import IconGiftBlue from '../static/icons/gift-blue.svg';
// import IconGiftYellow from '../static/icons/gift-yellow.svg';
// XMAS默认

const rank0 = {}; // 響叮噹 第一階段

const rank11xx = {
  icons: [{
    value: 80,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    })
  }, {
    value: 150000,
    conditionValue: 'score',
    filterCondition: '<=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_tick1_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    })
  }],
  needRequest: true,
  containerID: _api__WEBPACK_IMPORTED_MODULE_1__["api"].bell.s1,
  missions: [{
    title: '任務一',
    description: '收集200個聖誕紅襪',
    prize: '可獲得直播間貼紙（兩週）',
    threshold: 200,
    eventoryKey: '2011_tw_xmas_bp'
  }, {
    title: '任務二',
    description: '收集400個聖誕雪橇 (小)',
    prize: '可獲得400元聖誕祝福金',
    threshold: 400,
    eventoryKey: '2011_tw_xmas_s'
  }, {
    title: '任務三',
    description: '收集50個聖誕音樂盒 (中)',
    prize: '可獲得1200元聖誕祝福金',
    threshold: 50,
    eventoryKey: '2011_tw_xmas_m_4'
  }]
}; // 響叮噹 第二階段

const rank12xx = {
  icons: [{
    value: 50,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    })
  }, {
    value: 150000,
    conditionValue: 'score',
    filterCondition: '<=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_tick1_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    })
  }],
  needRequest: true,
  containerID: _api__WEBPACK_IMPORTED_MODULE_1__["api"].bell.s2,
  missions: [{
    title: '任務一',
    description: '聖誕紅襪',
    prize: '可獲得直播間貼紙（兩週）',
    threshold: 200,
    eventoryKey: '2011_tw_xmas_bp'
  }, {
    title: '任務二',
    description: '聖誕雪橇 (小)',
    prize: '可獲得400元聖誕祝福金',
    threshold: 400,
    eventoryKey: '2011_tw_xmas_s'
  }, {
    title: '任務三',
    description: '聖誕音樂盒 (中)',
    prize: '可獲得1200元聖誕祝福金',
    threshold: 50,
    eventoryKey: '2011_tw_xmas_m_4'
  }]
}; // 響叮噹 第三階段 12081209

const rank131xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    })
  }]
}; // 響叮噹 第三階段 12101211

const rank132xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    })
  }]
}; // 響叮噹 第三階段 12121213

const rank133xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }
    })
  }]
}; // 響叮噹 第三階段 12141215

const rank134xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    })
  }]
}; // 響叮噹 第三階段 階段總榜

const rank135xx = {
  icons: [{
    value: 125000,
    conditionValue: 'score',
    filterCondition: '<=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_tick1_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    })
  }]
}; // 響叮噹 第三階段 主播出席

const rank141xx = {
  icons: [{
    value: 90,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    })
  }]
}; // 響叮噹 第三階段 粉絲出席

const rank142xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    })
  }]
}; // 平安夜 第四階段 - sock

const rank211xx = {
  icons: [{
    value: 25,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }
    })
  }]
}; // 平安夜 第四階段 - candycane

const rank212xx = {
  icons: [{
    value: 20,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_silver_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 13
      }
    })
  }]
}; // 平安夜 第四階段 - gingerman

const rank213xx = {
  icons: [{
    value: 15,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_copper_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 13
      }
    })
  }]
}; // 狂歡夜 round1 - sock

const rank311xx = {
  icons: [{
    value: 20,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 13
      }
    })
  }],
  needRequest: true,
  containerID: _api__WEBPACK_IMPORTED_MODULE_1__["api"].offline.r1.g1,
  missions: [{
    title: '任務一',
    description: '收集 100 個聖誕雪橇 (小)',
    prize: '可獲得線下聖誕小禮物抽獎資格',
    threshold: 100,
    eventoryKey: '2011_tw_xmas_s'
  }, {
    title: '任務二',
    description: '收集 1 個聖誕雪人 (大)',
    prize: '可獲得 2,500 元聖誕祝福金',
    threshold: 1,
    eventoryKey: '2011_tw_xmas_l_3'
  }, {
    title: '任務三',
    description: '收集 300 個任一聖誕活動禮',
    prize: '可獲得 1,000 元聖誕祝福金',
    threshold: 300,
    eventoryKey: 'any_gift'
  }]
}; // 狂歡夜 round1 - candycane

const rank312xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_silver_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 13
      }
    })
  }],
  needRequest: true,
  containerID: _api__WEBPACK_IMPORTED_MODULE_1__["api"].offline.r1.g2,
  missions: [{
    title: '任務一',
    description: '收集 100 個聖誕雪橇 (小)',
    prize: '可獲得線下聖誕小禮物抽獎資格',
    threshold: 100,
    eventoryKey: '2011_tw_xmas_s'
  }, {
    title: '任務二',
    description: '收集 1 個聖誕雪人 (大)',
    prize: '可獲得 2,500 元聖誕祝福金',
    threshold: 1,
    eventoryKey: '2011_tw_xmas_l_3'
  }, {
    title: '任務三',
    description: '收集 300 個任一聖誕活動禮',
    prize: '可獲得 1,000 元聖誕祝福金',
    threshold: 300,
    eventoryKey: 'any_gift'
  }]
}; // 狂歡夜 round1 - gingerman

const rank313xx = {
  icons: [{
    value: 5,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_copper_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 13
      }
    })
  }],
  needRequest: true,
  containerID: _api__WEBPACK_IMPORTED_MODULE_1__["api"].offline.r1.g3,
  missions: [{
    title: '任務一',
    description: '收集 100 個聖誕雪橇 (小)',
    prize: '可獲得線下聖誕小禮物抽獎資格',
    threshold: 100,
    eventoryKey: '2011_tw_xmas_s'
  }, {
    title: '任務二',
    description: '收集 1 個聖誕雪人 (大)',
    prize: '可獲得 2,500 元聖誕祝福金',
    threshold: 1,
    eventoryKey: '2011_tw_xmas_l_3'
  }, {
    title: '任務三',
    description: '收集 300 個任一聖誕活動禮',
    prize: '可獲得 1,000 元聖誕祝福金',
    threshold: 300,
    eventoryKey: 'any_gift'
  }]
}; // 狂歡夜 round2 - sock

const rank321xx = {
  icons: [{
    value: 25,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 13
      }
    })
  }]
}; // 狂歡夜 round2 - candycane

const rank322xx = {
  icons: [{
    value: 15,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_silver_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 13
      }
    })
  }]
}; // 狂歡夜 round2 - gingerman

const rank323xx = {
  icons: [{
    value: 5,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_copper_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 13
      }
    })
  }]
}; // 狂歡夜 線下總榜 - sock

const rank324xx = {
  icons: [{
    value: 30,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 13
      }
    })
  }]
}; // 狂歡夜 線下總榜 - candycane

const rank325xx = {
  icons: [{
    value: 20,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_copper_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 13
      }
    })
  }]
}; // 狂歡夜 線下總榜 - gingerman

const rank326xx = {
  icons: [{
    value: 10,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_Crown_copper_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 13
      }
    })
  }]
}; // 聖誕總榜 主播總榜

const rank411xx = {
  icons: [{
    value: 50,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 13
      }
    })
  }],
  // containerID: api.xmasfinal.bonus,
  // needRequest: true,
  withBonus: true,
  missions: [{
    title: '階段四',
    metaKey: 's4'
  }, {
    title: 'Round 2',
    metaKey: 'r2'
  }]
}; // 聖誕總榜 粉絲總榜

const rank412xx = {
  icons: [{
    value: 30,
    conditionValue: 'rank',
    filterCondition: '>=',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_icons_crown_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 13
      }
    })
  }]
};

/***/ }),

/***/ "./constants/config.ts":
/*!*****************************!*\
  !*** ./constants/config.ts ***!
  \*****************************/
/*! exports provided: bell, eve, offline, xmasfinal, Tab00xxTimeState, Tab110xxTimeState, TabsqualifyTimeState, Tab10TimeStatexx, Tabs_step4TimeState, Tab20TimeStatexx, Tabs_round1TimeState, Tabs_round2TimeState, Tabs_offline_finalTimeState, Tab30TimeStatexx, Tabsintro1TimeState, Tabsintro2TimeState, Tabsintro3TimeState, Tabsintro4TimeState, LocakTotalTime, LocakTotalTime2, Iframes, staPrefix, prodPrefix, projectNameFunc, PAGE_PATH, IMAGE_PATH, CDNURL, SectionTypes, TrackTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bell", function() { return bell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eve", function() { return eve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offline", function() { return offline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xmasfinal", function() { return xmasfinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab00xxTimeState", function() { return Tab00xxTimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab110xxTimeState", function() { return Tab110xxTimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsqualifyTimeState", function() { return TabsqualifyTimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab10TimeStatexx", function() { return Tab10TimeStatexx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_step4TimeState", function() { return Tabs_step4TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab20TimeStatexx", function() { return Tab20TimeStatexx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_round1TimeState", function() { return Tabs_round1TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_round2TimeState", function() { return Tabs_round2TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs_offline_finalTimeState", function() { return Tabs_offline_finalTimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab30TimeStatexx", function() { return Tab30TimeStatexx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabsintro1TimeState", function() { return Tabsintro1TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabsintro2TimeState", function() { return Tabsintro2TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabsintro3TimeState", function() { return Tabsintro3TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabsintro4TimeState", function() { return Tabsintro4TimeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocakTotalTime", function() { return LocakTotalTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocakTotalTime2", function() { return LocakTotalTime2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iframes", function() { return Iframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staPrefix", function() { return staPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodPrefix", function() { return prodPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectNameFunc", function() { return projectNameFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_PATH", function() { return PAGE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_PATH", function() { return IMAGE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDNURL", function() { return CDNURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTypes", function() { return SectionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackTab", function() { return TrackTab; });
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
//2011-xmas
 // 響叮噹_階段一 ~ 出席總榜

const bell = {
  s1: {
    startDate: '2020-11-24T18:00:00+08:00',
    endDate: '2020-11-30T23:59:59+08:00'
  },
  s2: {
    startDate: '2020-12-01T00:00:00+08:00',
    endDate: '2020-12-07T23:59:59+08:00'
  },
  s3_12081209: {
    startDate: '2020-12-08T00:00:00+08:00',
    endDate: '2020-12-09T23:59:59+08:00'
  },
  s3_12101211: {
    startDate: '2020-12-10T00:00:00+08:00',
    endDate: '2020-12-11T23:59:59+08:00'
  },
  s3_12121213: {
    startDate: '2020-12-12T00:00:00+08:00',
    endDate: '2020-12-13T23:59:59+08:00'
  },
  s3_12141215: {
    startDate: '2020-12-14T00:00:00+08:00',
    endDate: '2020-12-15T23:59:59+08:00'
  },
  s3_total: {
    startDate: '2020-12-08T00:00:00+08:00',
    endDate: '2020-12-15T23:59:59+08:00'
  },
  qualify: {
    startDate: '2020-11-24T18:00:00+08:00',
    endDate: '2020-12-16T23:59:59+08:00'
  }
}; //平安夜

const eve = {
  s4: {
    startDate: '2020-12-17T18:00:00+08:00',
    endDate: '2020-12-22T23:59:59+08:00'
  }
}; //狂歡夜

const offline = {
  r1: {
    startDate: '2020-12-23T19:00:00+08:00',
    endDate: '2020-12-23T19:29:59+08:00'
  },
  r2: {
    startDate: '2020-12-23T19:50:00+08:00',
    endDate: '2020-12-23T20:09:59+08:00'
  },
  final: {
    startDate: '2020-12-23T19:00:00+08:00',
    endDate: '2020-12-23T20:29:59+08:00'
  }
}; //聖誕總榜

const xmasfinal = {
  streamer: {
    startDate: '2020-12-17T00:00:00+08:00',
    endDate: '2020-12-23T20:59:59+08:00'
  },
  fans: {
    startDate: '2020-11-24T18:00:00+08:00',
    endDate: '2020-12-23T20:59:59+08:00'
  }
}; //Xmas Time stage
//階段一 階段二 timestate

const Tab00xxTimeState = [{
  tabKey: 'bell-s1',
  startDate: bell.s1.startDate,
  endDate: bell.s1.endDate
}, {
  tabKey: 'bell-s2',
  startDate: bell.s2.startDate,
  endDate: bell.s2.endDate
}, {
  tabKey: 'bell-s3',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'bell-s3_total',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'bell-intro',
  startDate: '',
  endDate: ''
}]; //階段三timestate

const Tab110xxTimeState = [{
  tabKey: 'bell-s3-1',
  startDate: bell.s3_12081209.startDate,
  endDate: bell.s3_12081209.endDate
}, {
  tabKey: 'bell-s3-2',
  startDate: bell.s3_12101211.startDate,
  endDate: bell.s3_12101211.endDate
}, {
  tabKey: 'bell-s3-3',
  startDate: bell.s3_12121213.startDate,
  endDate: bell.s3_12121213.endDate
}, {
  tabKey: 'bell-s3-4',
  startDate: bell.s3_12141215.startDate,
  endDate: bell.s3_12141215.endDate
}, {
  tabKey: 'bell-s3-5',
  startDate: bell.s3_total.startDate,
  endDate: bell.s3_total.endDate
}]; //出席榜timestate

const TabsqualifyTimeState = [{
  tabKey: 'streamer',
  startDate: bell.qualify.startDate,
  endDate: bell.qualify.endDate
}, {
  tabKey: 'fans',
  startDate: bell.qualify.startDate,
  endDate: bell.qualify.endDate
}]; //階段四timestate

const Tab10TimeStatexx = [{
  tabKey: 'eve-s4',
  startDate: eve.s4.startDate,
  endDate: eve.s4.endDate
}, {
  tabKey: 'eve-intro',
  startDate: '',
  endDate: ''
}];
const Tabs_step4TimeState = [{
  tabKey: 'socks',
  startDate: eve.s4.startDate,
  endDate: eve.s4.endDate
}, {
  tabKey: 'candycane',
  startDate: eve.s4.startDate,
  endDate: eve.s4.endDate
}, {
  tabKey: 'gingerman',
  startDate: eve.s4.startDate,
  endDate: eve.s4.endDate
}]; //線下round1~線下總榜

const Tab20TimeStatexx = [{
  tabKey: 'Offline-r1',
  startDate: offline.r1.startDate,
  endDate: offline.r1.endDate
}, {
  tabKey: 'Offline-r2',
  startDate: offline.r2.startDate,
  endDate: offline.r2.endDate
}, {
  tabKey: 'Offline-all',
  startDate: offline.final.startDate,
  endDate: offline.final.endDate
}, {
  tabKey: 'Offline-intro',
  startDate: '',
  endDate: ''
}];
const Tabs_round1TimeState = [{
  tabKey: 'socks',
  startDate: offline.r1.startDate,
  endDate: offline.r1.endDate
}, {
  tabKey: 'candycane',
  startDate: offline.r1.startDate,
  endDate: offline.r1.endDate
}, {
  tabKey: 'gingerman',
  startDate: offline.r1.startDate,
  endDate: offline.r1.endDate
}];
const Tabs_round2TimeState = [{
  tabKey: 'socks',
  startDate: offline.r2.startDate,
  endDate: offline.r2.endDate
}, {
  tabKey: 'candycane',
  startDate: offline.r2.startDate,
  endDate: offline.r2.endDate
}, {
  tabKey: 'gingerman',
  startDate: offline.r2.startDate,
  endDate: offline.r2.endDate
}];
const Tabs_offline_finalTimeState = [{
  tabKey: 'socks',
  startDate: offline.final.startDate,
  endDate: offline.final.endDate
}, {
  tabKey: 'candycane',
  startDate: offline.final.startDate,
  endDate: offline.final.endDate
}, {
  tabKey: 'gingerman',
  startDate: offline.final.startDate,
  endDate: offline.final.endDate
}]; //最後總榜

const Tab30TimeStatexx = [{
  tabKey: 'final-streamer',
  startDate: xmasfinal.streamer.startDate,
  endDate: xmasfinal.streamer.endDate
}, {
  tabKey: 'final-fans',
  startDate: xmasfinal.fans.startDate,
  endDate: xmasfinal.fans.endDate
}, {
  tabKey: 'final-prize',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'final-intro',
  startDate: '',
  endDate: ''
}]; //活動說明

const Tabsintro1TimeState = [{
  tabKey: 'intro1',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro2',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro3',
  startDate: '',
  endDate: ''
}];
const Tabsintro2TimeState = [{
  tabKey: 'intro1',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro2',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro3',
  startDate: '',
  endDate: ''
}];
const Tabsintro3TimeState = [{
  tabKey: 'intro1',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro2',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro3',
  startDate: '',
  endDate: ''
}];
const Tabsintro4TimeState = [{
  tabKey: 'intro1',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro2',
  startDate: '',
  endDate: ''
}, {
  tabKey: 'intro3',
  startDate: '',
  endDate: ''
}];
const LocakTotalTime = '2020-09-10T23:59:59+08:00';
const LocakTotalTime2 = '2020-09-18T23:59:59+08:00';
const Iframes = {
  masterVision: {
    kv: 'https://sta-event.17.media/10495-2011-xmas-final-intro/kv',
    video: 'https://event.17.media/10240-2008-tw-momo-frontend/main-vision'
  },
  methods: {
    t1: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t1',
    t2: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t2',
    t3: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t3',
    t3_1: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t3-1',
    t4: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t4',
    streamer_qualify: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t5',
    fans_qualify: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t5-1',
    t6: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t6',
    t7: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t7',
    t8: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t8',
    t9: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t9',
    t10: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t10',
    intro1: 'https://sta-event.17.media/10482-xmas-intro1',
    introtimeline: 'https://sta-event.17.media/10483-2011xmas-intro1-1',
    intro2: 'https://sta-event.17.media/10491-2011xmas-intro2-test',
    introgifts: 'https://sta-event.17.media/10484-2011xmas-intro1-2',
    intro3: 'https://sta-event.17.media/10493-2011xmas-intro3/intro3',
    intro4: 'https://sta-event.17.media/10493-2011xmas-intro3/intro-final',
    prize: 'https://sta-event.17.media/10493-2011xmas-intro3/prize',
    introfinal: 'https://sta-event.17.media/10493-2011xmas-intro3/intro-final'
  }
};
const staPrefix = '10262-';
const prodPrefix = '10198-';
const projectNameFunc = project => {
  if (true) {
    return project;
  }

  if (Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["isPRO"])()) {
    return `/${prodPrefix}${project}`;
  }

  if (Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["isSta"])()) {
    return `/${staPrefix}${project}`;
  }

  return project;
};
const PAGE_PATH = projectNameFunc('2008-tw-momo');
const IMAGE_PATH = projectNameFunc('2008-tw-momo');
const CDNURL = () => {
  if (true) {
    return `https://vmo.17.media${IMAGE_PATH}`;
  }

  if (Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["isPRO"])()) {
    return `https://vmo.17.media${IMAGE_PATH}`;
  }

  if (Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_0__["isSta"])()) {
    return `https://sta-vmo.17.media${IMAGE_PATH}`;
  }

  return '.';
}; // Tracking

const SectionTypes = {
  kv: 'KV',
  tabs: 'tabs',
  buttons: 'buttons',
  duration: 'duration',
  searchBar: 'searchBar',
  description: 'description',
  topStreamer: 'topStreamer',
  leaderboardItem: 'leaderboardItem',
  gifts: 'gifts',
  timeline: 'timeline'
}; // export const TrackTab = [
//   '歡慶開幕',
//   '強強聯手',
//   '票選最強直播主',
//   '購物派對 線下活動',
//   '購物總榜',
//   '活動重點',
// ];

const TrackTab = ['響叮噹', '平安夜', '狂歡夜', '聖誕總榜'];

/***/ }),

/***/ "./constants/translations.json":
/*!*************************************!*\
  !*** ./constants/translations.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, default */
/***/ (function(module) {

module.exports = [{"key":"EMPTY_LEADERBOARD","values":[{"language":"zh_JP","value":"空席"},{"language":"zh_TW","value":"空席"},{"language":"ja","value":"空席"}]},{"key":"VOTE_LOADING","values":[{"language":"zh_TW","value":"載入中…"},{"language":"ja","value":"読み込み中…"}]},{"key":"SERVER_ERROR_MESSAGE","values":[{"language":"zh_TW","value":"投票ができませんでした。もう一度お試しください。"},{"language":"ja","value":"投票ができませんでした。もう一度お試しください。"}]},{"key":"GENERAL_ERROR_MESSAGE","values":[{"language":"zh_TW","value":"投票は「17LIVE」アプリ内でご利用可能です。"},{"language":"ja","value":"投票は「17LIVE」アプリ内でご利用可能です。"}]},{"key":"NOT_IN_PERIOD","values":[{"language":"zh_TW","value":"投票期間外です。"},{"language":"ja","value":"投票期間外です。"}]},{"key":"VOTE_SUCCESSFULLY","values":[{"language":"zh_TW","value":"投票しました！"},{"language":"ja","value":"投票しました！"}]},{"key":"LEVEL_UNQUALIFIED","values":[{"language":"zh_TW","value":"投票可能なLVに達していません。"},{"language":"ja","value":"投票可能なLVに達していません。"}]},{"key":"HAS_VOTED_TO_NOMINEE","values":[{"language":"zh_TW","value":"同一ライバーへの複数投票はできません。"},{"language":"ja","value":"同一ライバーへの複数投票はできません。"}]},{"key":"NO_QUOTA","values":[{"language":"zh_TW","value":"同一ライバーへの複数投票はできません。"},{"language":"ja","value":"同一ライバーへの複数投票はできません。"}]},{"key":"COUNTDOWN_HAS_NOT_BEGUN","values":[{"language":"zh_TW","value":"活動尚未開始"},{"language":"ja","value":"イベントは開始されていません"}]},{"key":"COUNTDOWN_HAS_ENDED","values":[{"language":"zh_TW","value":"活動已結束"},{"language":"ja","value":"イベントは終了しました"}]},{"key":"COUNTDOWN_COUNTING","values":[{"language":"zh_TW","value":"活動剩餘 {0} {1} {2}"},{"language":"ja","value":"イベント終了まであと {0} {1} {2}"}]},{"key":"COUNTDOWN_DAY","values":[{"language":"zh_TW","value":"天"},{"language":"ja","value":"天"}]},{"key":"COUNTDOWN_PLURAL_DAY","values":[{"language":"zh_TW","value":"天"},{"language":"ja","value":"天"}]},{"key":"TAB_0","values":[{"language":"zh_TW","value":"響叮噹"},{"language":"ja","value":"響叮噹"}]},{"key":"TAB_1","values":[{"language":"zh_TW","value":"平安夜"},{"language":"ja","value":"平安夜"}]},{"key":"TAB_2","values":[{"language":"zh_TW","value":"狂歡夜"},{"language":"ja","value":"狂歡夜"}]},{"key":"TAB_3","values":[{"language":"zh_TW","value":"聖誕總榜"},{"language":"ja","value":"聖誕總榜"}]},{"key":"TAB_0_0","values":[{"language":"zh_TW","value":"階段一"},{"language":"ja","value":"階段一"}]},{"key":"TAB_0_1","values":[{"language":"zh_TW","value":"階段二"},{"language":"ja","value":"階段二"}]},{"key":"TAB_0_2","values":[{"language":"zh_TW","value":"階段三"},{"language":"ja","value":"階段三"}]},{"key":"TAB_0_2_0","values":[{"language":"zh_TW","value":"12/8-12/9"},{"language":"ja","value":"12/8-12/9"}]},{"key":"TAB_0_2_1","values":[{"language":"zh_TW","value":"12/10-12/11"},{"language":"ja","value":"12/10-12/11"}]},{"key":"TAB_0_2_2","values":[{"language":"zh_TW","value":"12/12-12/13"},{"language":"ja","value":"12/12-12/13"}]},{"key":"TAB_0_2_3","values":[{"language":"zh_TW","value":"12/14-12/15"},{"language":"ja","value":"12/14-12/15"}]},{"key":"TAB_0_2_4","values":[{"language":"zh_TW","value":"階段總榜"},{"language":"ja","value":"階段總榜"}]},{"key":"TAB_0_3","values":[{"language":"zh_TW","value":"出席總榜"},{"language":"ja","value":"出席總榜"}]},{"key":"TAB_0_3_0","values":[{"language":"zh_TW","value":"主播出席榜"},{"language":"ja","value":"主播出席榜"}]},{"key":"TAB_0_3_1","values":[{"language":"zh_TW","value":"粉絲出席榜"},{"language":"ja","value":"粉絲出席榜"}]},{"key":"EVENT_METHOD_TITLE","values":[{"language":"zh_TW","value":"活動攻略"},{"language":"ja","value":"選択"}]},{"key":"EVENT_INTRO_TITLE","values":[{"language":"zh_TW","value":"活動說明"},{"language":"ja","value":"活動說明"}]},{"key":"EVENT_INTRO_METHOD_TITLE","values":[{"language":"zh_TW","value":"活動辦法"},{"language":"ja","value":"活動辦法"}]},{"key":"EVENT_INTRO_TIMELINE","values":[{"language":"zh_TW","value":"節點圖"},{"language":"ja","value":"節點圖"}]},{"key":"EVENT_INTRO_GIFT","values":[{"language":"zh_TW","value":"活動禮物"},{"language":"ja","value":"活動禮物"}]},{"key":"TAB_1_0","values":[{"language":"zh_TW","value":"階段四"},{"language":"ja","value":"階段四"}]},{"key":"TAB_1_1_0","values":[{"language":"zh_TW","value":"聖誕襪"},{"language":"ja","value":"聖誕襪"}]},{"key":"TAB_1_1_1","values":[{"language":"zh_TW","value":"拐杖糖"},{"language":"ja","value":"拐杖糖"}]},{"key":"TAB_1_1_2","values":[{"language":"zh_TW","value":"薑餅人"},{"language":"ja","value":"薑餅人"}]},{"key":"TAB_2_0","values":[{"language":"zh_TW","value":"Round 1"},{"language":"ja","value":"Round 1"}]},{"key":"TAB_2_1","values":[{"language":"zh_TW","value":"Round 2"},{"language":"ja","value":"Round 2"}]},{"key":"TAB_2_2","values":[{"language":"zh_TW","value":"線下總榜"},{"language":"ja","value":"線下總榜"}]},{"key":"TAB_3_0","values":[{"language":"zh_TW","value":"主播總榜"},{"language":"ja","value":"主播總榜"}]},{"key":"TAB_3_1","values":[{"language":"zh_TW","value":"粉絲總榜"},{"language":"ja","value":"粉絲總榜"}]},{"key":"TAB_3_2","values":[{"language":"zh_TW","value":"總榜大獎"},{"language":"ja","value":"總榜大獎"}]}];

/***/ }),

/***/ "./context/missionPanelContext.ts":
/*!****************************************!*\
  !*** ./context/missionPanelContext.ts ***!
  \****************************************/
/*! exports provided: MissionPanelContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionPanelContext", function() { return MissionPanelContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MissionPanelContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  showPanelID: '',
  setShowPanelID: () => {},
  missionDetails: [],
  setMissionDetails: () => {}
});

/***/ }),

/***/ "./context/translationContext.ts":
/*!***************************************!*\
  !*** ./context/translationContext.ts ***!
  \***************************************/
/*! exports provided: TranslationContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationContext", function() { return TranslationContext; });
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "../../node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TranslationContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ }),

/***/ "./pages/2011-tw-xmas-chris.tsx":
/*!**************************************!*\
  !*** ./pages/2011-tw-xmas-chris.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_ui_hooks_useStartRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmo/ui/hooks/useStartRender */ "../ui/hooks/useStartRender.ts");
/* harmony import */ var _vmo_ui_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui/hooks/useTranslation */ "../ui/hooks/useTranslation.ts");
/* harmony import */ var _vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/ui/hooks */ "../ui/hooks/index.ts");
/* harmony import */ var _vmo_ui_CoverVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/ui/CoverVideo */ "../ui/CoverVideo.tsx");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _vmo_web_themes_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/web/themes/GlobalStyle */ "./themes/GlobalStyle.ts");
/* harmony import */ var _vmo_ui_hooks_TabsRefContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/ui/hooks/TabsRefContext */ "../ui/hooks/TabsRefContext.ts");
/* harmony import */ var _vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmo/web/components/Tabs/styled */ "./components/Tabs/styled.tsx");
/* harmony import */ var _vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/web/components/EventIntro */ "./components/EventIntro/index.ts");
/* harmony import */ var _vmo_web_components_RankTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmo/web/components/RankTitle */ "./components/RankTitle/index.ts");
/* harmony import */ var _vmo_web_components_Tabs_Tabs00__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs00 */ "./components/Tabs/Tabs00.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs10__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs10 */ "./components/Tabs/Tabs10.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs20__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs20 */ "./components/Tabs/Tabs20.tsx");
/* harmony import */ var _vmo_web_components_Tabs_Tabs30__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @vmo/web/components/Tabs/Tabs30 */ "./components/Tabs/Tabs30.tsx");
/* harmony import */ var _vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @vmo/ui/Loading */ "../ui/Loading.tsx");
/* harmony import */ var _vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer */ "./components/LeaderboardContainer/index.ts");
/* harmony import */ var _vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @vmo/web/components/LeaderboardContainer/LeaderboardContainer */ "./components/LeaderboardContainer/LeaderboardContainer.tsx");
/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-fastclick */ "react-fastclick");
/* harmony import */ var react_fastclick__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_fastclick__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! 17media-browser-spy */ "17media-browser-spy");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _context_translationContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../context/translationContext */ "./context/translationContext.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\pages\\2011-tw-xmas-chris.tsx"; // 2011-tw-xmas Chris

















 // import Tabs40 from '@vmo/web/components/Tabs/Tabs40';
// import Tabs50 from '@vmo/web/components/Tabs/Tabs50';








react_fastclick__WEBPACK_IMPORTED_MODULE_20___default()();

const App = () => {
  const tabsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_21__["useMinSectionTracking"])(tabsRef, () => {
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_22__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_21__["createSectionViewAction"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["SectionTypes"].tabs));
  });
  const startRender = Object(_vmo_ui_hooks_useStartRender__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const translation = Object(_vmo_ui_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])(startRender);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const initialTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"], 0);
    _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_22__["trackingSource"].track(Object(_17media_browser_spy__WEBPACK_IMPORTED_MODULE_21__["createTabClickAction"])('', _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["TrackTab"][initialTabIndex]));
  }, []);
  Object(_vmo_ui_hooks__WEBPACK_IMPORTED_MODULE_5__["useTrackPageEnter"])();

  if (!startRender) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 14
      }
    });
  }

  if (translation.size === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_17__["default"], {
      color: "#fe41cb",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 14
      }
    });
  }

  const tab0Items = [{
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"][0].tabKey,
    title: null,
    tabText: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["TrackTab"][0],
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs00__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }),
    countdown: null,
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"][1].tabKey,
    title: null,
    tabText: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["TrackTab"][1],
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs10__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }),
    countdown: null,
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"][2].tabKey,
    title: null,
    tabText: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["TrackTab"][2],
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs20__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }),
    countdown: null,
    leaderboard: null
  }, {
    tabKey: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"][3].tabKey,
    title: null,
    tabText: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["TrackTab"][3],
    tabs: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_Tabs30__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }),
    countdown: null,
    leaderboard: null
  }];
  const defaultTabIndex = Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_1__["getDefaultDay"])(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"], 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_translationContext__WEBPACK_IMPORTED_MODULE_23__["TranslationContext"].Provider, {
    value: translation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui_hooks_TabsRefContext__WEBPACK_IMPORTED_MODULE_9__["TabsRefContext"].Provider, {
    value: tabsRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_2__["EventPage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui_CoverVideo__WEBPACK_IMPORTED_MODULE_6__["default"], {
    iframe: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Iframes"].masterVision.kv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: tabsRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_10__["Tabs0Styled"], {
    active: _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_7__["Tab00xxTimeState"][defaultTabIndex].tabKey,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, tab0Items.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    key: `tab0_${item.tabKey}`,
    tabKey: item.tabKey,
    title: item.title,
    tabText: item.tabText,
    crown: null,
    vs: null,
    teamBg: null,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, item.tabs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(item.tabs, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 34
    }
  }) : null, item.countdown && item.countdown.startDate && item.countdown.endDate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_10__["CountDownStyled"], {
    startDate: item.countdown.startDate,
    endDate: item.countdown.endDate,
    dateFormat: item.countdown.dateFormat,
    formatStr: item.countdown.formatStr,
    isSameDay: item.countdown.isSameDay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 23
    }
  }) : null, item.eventIntro ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_EventIntro__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: item.eventIntro.title,
    iframe: item.eventIntro.iframe,
    only: item.eventIntro.only,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  }) : null, item.rankTitle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_RankTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: item.rankTitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 39
    }
  }) : null, item.leaderboard ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_19__["LeaderboardContainerWrapper"], {
    styleInfo: item.leaderboard.style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_LeaderboardContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
    apis: item.leaderboard.apis,
    sortFunc: item.leaderboard.sortFunc,
    apiCache: item.leaderboard.apiCache,
    condition: item.leaderboard.condition,
    iframe: item.leaderboard.iframe,
    realTime: item.leaderboard.realTime,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  })) : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_components_Tabs_styled__WEBPACK_IMPORTED_MODULE_10__["ImageCache"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vmo_web_themes_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./static/icons/Crown_copper.svg":
/*!***************************************!*\
  !*** ./static/icons/Crown_copper.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10 20c-5.522 0-10-4.32-10-9.644v-.712C0 4.32 4.478 0 10 0s10 4.32 10 9.644v.712C20.009 15.68 15.53 20 10 20z",
  id: "Crown_copper_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M2.332 3.78L6.814 0l4.47 3.76 2.24-2.388-1 4.362c-1.84-.19-3.807-.393-5.711-.393-1.903 0-3.768.14-5.709.393L.1 1.397 2.332 3.78zm3.524-.092c0 .5.428.905.956.905.527 0 .955-.405.955-.905s-.428-.904-.955-.904c-.528 0-.956.405-.956.904z",
  id: "Crown_copper_svg__d"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.264.102l-.119.002C4.191.119 3.244.169 2.288.25l-.111.01C1.486.32.79.397.087.49l.035.153.001.007.36 1.422c.409-.052.731-.525 1.134-.566.082-.009.054-.287.135-.294 1.34-.13 2.66 0 3.998 0s2.657-.13 3.998 0c.08.007.04.285.121.294.403.04.739.514 1.146.566L11.376.65l.002-.007.036-.154c-.705-.092-1.4-.169-2.091-.23L9.212.25A41.181 41.181 0 006.355.104l-.12-.002a41.516 41.516 0 00-.971 0z",
  id: "Crown_copper_svg__f"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.117 1.135c0 .57.468 1.035 1.042 1.035a1.04 1.04 0 001.042-1.035A1.04 1.04 0 001.159.1 1.04 1.04 0 00.117 1.135z",
  id: "Crown_copper_svg__h"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.07.898a.85.85 0 00.852.846.85.85 0 00.852-.846.85.85 0 00-.852-.845.85.85 0 00-.851.845z",
  id: "Crown_copper_svg__j"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.07.898a.85.85 0 00.853.846.85.85 0 00.851-.846.85.85 0 00-.851-.845.85.85 0 00-.852.845z",
  id: "Crown_copper_svg__l"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
  x1: "0%",
  y1: "0%",
  x2: "96.491%",
  y2: "96.491%",
  id: "Crown_copper_svg__c"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  stopColor: "#834005",
  offset: "0%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  stopColor: "#D08748",
  offset: "51.278%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  stopColor: "#834005",
  offset: "100%"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  x: "-2.5%",
  y: "-2.5%",
  width: "105%",
  height: "110%",
  filterUnits: "objectBoundingBox",
  id: "Crown_copper_svg__a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 1,
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
  in: "shadowOffsetOuter1"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#Crown_copper_svg__a)",
  xlinkHref: "#Crown_copper_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#FFF",
  xlinkHref: "#Crown_copper_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.095 18.762c-4.79 0-8.666-3.74-8.666-8.345v-.644c0-4.612 3.884-8.344 8.666-8.344 4.79 0 8.667 3.74 8.667 8.344v.644c.008 4.613-3.876 8.345-8.667 8.345z",
  fill: "url(#Crown_copper_svg__c)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(3.323 6.738)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_copper_svg__e",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_copper_svg__d"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_copper_svg__e)",
  d: "M-4.684 10.518h22.991V-4.783H-4.684z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(4.387 12.176)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_copper_svg__g",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_copper_svg__f"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_copper_svg__g)",
  d: "M-4.698 6.855h20.895v-11.54H-4.698z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(8.998 5.083)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_copper_svg__i",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_copper_svg__h"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_copper_svg__i)",
  d: "M-4.667 6.954H6.985V-4.684H-4.667z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(15.855 6.974)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_copper_svg__k",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_copper_svg__j"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_copper_svg__k)",
  d: "M-3.838 5.653h9.52v-9.509h-9.52z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(2.495 6.974)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_copper_svg__m",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_copper_svg__l"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_copper_svg__m)",
  d: "M-3.838 5.653h9.52v-9.509h-9.52z"
}))));

const SvgCrownCopper = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  width: 20,
  height: 20
}, props), _ref, _ref2);

/* harmony default export */ __webpack_exports__["default"] = (SvgCrownCopper);

/***/ }),

/***/ "./static/icons/Crown_silver.svg":
/*!***************************************!*\
  !*** ./static/icons/Crown_silver.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10 20c-5.522 0-10-4.32-10-9.644v-.712C0 4.32 4.478 0 10 0s10 4.32 10 9.644v.712C20.009 15.68 15.53 20 10 20z",
  id: "Crown_silver_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M2.332 3.78L6.814 0l4.47 3.76 2.24-2.388-1 4.362c-1.84-.19-3.807-.393-5.711-.393-1.903 0-3.768.14-5.709.393L.1 1.397 2.332 3.78zm3.524-.092c0 .5.428.905.956.905.527 0 .955-.405.955-.905s-.428-.904-.955-.904c-.528 0-.956.405-.956.904z",
  id: "Crown_silver_svg__d"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.264.102l-.119.002C4.191.119 3.244.169 2.288.25l-.111.01C1.486.32.79.397.087.49l.035.153.001.007.36 1.422c.409-.052.731-.525 1.134-.566.082-.009.054-.287.135-.294 1.34-.13 2.66 0 3.998 0s2.657-.13 3.998 0c.08.007.04.285.121.294.403.04.739.514 1.146.566L11.376.65l.002-.007.036-.154c-.705-.092-1.4-.169-2.091-.23L9.212.25A41.181 41.181 0 006.355.104l-.12-.002a41.516 41.516 0 00-.971 0z",
  id: "Crown_silver_svg__f"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.117 1.135c0 .57.468 1.035 1.042 1.035a1.04 1.04 0 001.042-1.035A1.04 1.04 0 001.159.1 1.04 1.04 0 00.117 1.135z",
  id: "Crown_silver_svg__h"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.07.898a.85.85 0 00.852.846.85.85 0 00.852-.846.85.85 0 00-.852-.845.85.85 0 00-.851.845z",
  id: "Crown_silver_svg__j"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.07.898a.85.85 0 00.853.846.85.85 0 00.851-.846.85.85 0 00-.851-.845.85.85 0 00-.852.845z",
  id: "Crown_silver_svg__l"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
  x1: "3.119%",
  y1: "3.119%",
  x2: "99.041%",
  y2: "99.041%",
  id: "Crown_silver_svg__c"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  stopColor: "#7D7D7D",
  offset: "0%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  stopColor: "#DDD",
  offset: "51.874%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
  stopColor: "#717171",
  offset: "100%"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  x: "-2.5%",
  y: "-2.5%",
  width: "105%",
  height: "110%",
  filterUnits: "objectBoundingBox",
  id: "Crown_silver_svg__a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 1,
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
  in: "shadowOffsetOuter1"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#Crown_silver_svg__a)",
  xlinkHref: "#Crown_silver_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#FFF",
  xlinkHref: "#Crown_silver_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.095 18.762c-4.79 0-8.666-3.74-8.666-8.345v-.644c0-4.612 3.884-8.344 8.666-8.344 4.79 0 8.667 3.74 8.667 8.344v.644c.008 4.613-3.876 8.345-8.667 8.345z",
  fill: "url(#Crown_silver_svg__c)"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(3.323 6.738)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_silver_svg__e",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_silver_svg__d"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_silver_svg__e)",
  d: "M-4.684 10.518h22.991V-4.783H-4.684z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(4.387 12.176)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_silver_svg__g",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_silver_svg__f"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_silver_svg__g)",
  d: "M-4.698 6.855h20.895v-11.54H-4.698z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(8.998 5.083)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_silver_svg__i",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_silver_svg__h"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_silver_svg__i)",
  d: "M-4.667 6.954H6.985V-4.684H-4.667z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(15.855 6.974)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_silver_svg__k",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_silver_svg__j"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_silver_svg__k)",
  d: "M-3.838 5.653h9.52v-9.509h-9.52z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(2.495 6.974)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "Crown_silver_svg__m",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#Crown_silver_svg__l"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#Crown_silver_svg__m)",
  d: "M-3.838 5.653h9.52v-9.509h-9.52z"
}))));

const SvgCrownSilver = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  width: 20,
  height: 20
}, props), _ref, _ref2);

/* harmony default export */ __webpack_exports__["default"] = (SvgCrownSilver);

/***/ }),

/***/ "./static/icons/crown.svg":
/*!********************************!*\
  !*** ./static/icons/crown.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10 20c-5.522 0-10-4.32-10-9.644v-.712C0 4.32 4.478 0 10 0s10 4.32 10 9.644v.712C20.009 15.68 15.53 20 10 20z",
  id: "crown_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M2.332 3.78L6.814 0l4.47 3.76 2.24-2.388-1 4.362c-1.84-.19-3.807-.393-5.711-.393-1.903 0-3.768.14-5.709.393L.1 1.397 2.332 3.78zm3.524-.092c0 .5.428.905.956.905.527 0 .955-.405.955-.905s-.428-.904-.955-.904c-.528 0-.956.405-.956.904z",
  id: "crown_svg__c"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M5.264.102l-.119.002C4.191.119 3.244.169 2.288.25l-.111.01C1.486.32.79.397.087.49l.035.153.001.007.36 1.422c.409-.052.731-.525 1.134-.566.082-.009.054-.287.135-.294 1.34-.13 2.66 0 3.998 0s2.657-.13 3.998 0c.08.007.04.285.121.294.403.04.739.514 1.146.566L11.376.65l.002-.007.036-.154c-.705-.092-1.4-.169-2.091-.23L9.212.25A41.181 41.181 0 006.355.104l-.12-.002a41.516 41.516 0 00-.971 0z",
  id: "crown_svg__e"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.117 1.135c0 .57.468 1.035 1.042 1.035a1.04 1.04 0 001.042-1.035A1.04 1.04 0 001.159.1 1.04 1.04 0 00.117 1.135z",
  id: "crown_svg__g"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.07.898a.85.85 0 00.852.846.85.85 0 00.852-.846.85.85 0 00-.852-.845.85.85 0 00-.851.845z",
  id: "crown_svg__i"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M.07.898a.85.85 0 00.853.846.85.85 0 00.851-.846.85.85 0 00-.851-.845.85.85 0 00-.852.845z",
  id: "crown_svg__k"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  x: "-2.5%",
  y: "-2.5%",
  width: "105%",
  height: "110%",
  filterUnits: "objectBoundingBox",
  id: "crown_svg__a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 1,
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
  in: "shadowOffsetOuter1"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#crown_svg__a)",
  xlinkHref: "#crown_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#FFF",
  xlinkHref: "#crown_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.095 18.762c-4.79 0-8.666-3.74-8.666-8.345v-.644c0-4.612 3.884-8.344 8.666-8.344 4.79 0 8.667 3.74 8.667 8.344v.644c.008 4.613-3.876 8.345-8.667 8.345z",
  fill: "#EC3838"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(3.323 6.738)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "crown_svg__d",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#crown_svg__c"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#crown_svg__d)",
  d: "M-4.684 10.518h22.991V-4.783H-4.684z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(4.387 12.176)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "crown_svg__f",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#crown_svg__e"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#crown_svg__f)",
  d: "M-4.698 6.855h20.895v-11.54H-4.698z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(8.998 5.083)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "crown_svg__h",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#crown_svg__g"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#crown_svg__h)",
  d: "M-4.667 6.954H6.985V-4.684H-4.667z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(15.855 6.974)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "crown_svg__j",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#crown_svg__i"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#crown_svg__j)",
  d: "M-3.838 5.653h9.52v-9.509h-9.52z"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  transform: "translate(2.495 6.974)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
  id: "crown_svg__l",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  xlinkHref: "#crown_svg__k"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "#FFF",
  mask: "url(#crown_svg__l)",
  d: "M-3.838 5.653h9.52v-9.509h-9.52z"
}))));

const SvgCrown = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), _ref, _ref2);

/* harmony default export */ __webpack_exports__["default"] = (SvgCrown);

/***/ }),

/***/ "./static/icons/tick1.svg":
/*!********************************!*\
  !*** ./static/icons/tick1.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
  x: "-2.5%",
  y: "-2.5%",
  width: "105%",
  height: "110%",
  filterUnits: "objectBoundingBox",
  id: "tick1_svg__a"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
  dy: 1,
  in: "SourceAlpha",
  result: "shadowOffsetOuter1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
  in: "shadowOffsetOuter1"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10 20c-5.522 0-10-4.32-10-9.644v-.712C0 4.32 4.478 0 10 0s10 4.32 10 9.644v.712C20.009 15.68 15.53 20 10 20z",
  id: "tick1_svg__b"
}));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#000",
  filter: "url(#tick1_svg__a)",
  xlinkHref: "#tick1_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
  fill: "#FFF",
  xlinkHref: "#tick1_svg__b"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10 20c-5.522 0-10-4.32-10-9.644v-.712C0 4.32 4.478 0 10 0s10 4.32 10 9.644v.712C20.009 15.68 15.53 20 10 20z",
  fill: "#FFF"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10 18.667c-4.79 0-8.667-3.74-8.667-8.345v-.644c0-4.612 3.885-8.345 8.667-8.345 4.79 0 8.667 3.74 8.667 8.345v.644c.008 4.612-3.877 8.345-8.667 8.345z",
  fill: "#B279FF"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  stroke: "#FFF",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M5.455 10.01l3.3 3.626 5.79-6.363"
}));

const SvgTick1 = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  width: 20,
  height: 21
}, props), _ref, _ref2);

/* harmony default export */ __webpack_exports__["default"] = (SvgTick1);

/***/ }),

/***/ "./themes/GlobalStyle.ts":
/*!*******************************!*\
  !*** ./themes/GlobalStyle.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./themes/images.ts");


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html {
    box-sizing: border-box;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "PingFangTC", "Helvetica Neue", Helvetica, Arial, "Microsoft JhengHei", sans-serif;
  }
  body {
    background-size: 100%;
    color: #ffffff;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    object-fit: contain;
    -webkit-tap-highlight-color: transparent;
    background: url(${_images__WEBPACK_IMPORTED_MODULE_1__["default"].xmasBg}) 0% 0% / 100% repeat-y;
    min-height: 100vh;
    overflow-y: auto;
    @media screen and (max-width: 800px) {
      font-size: calc(0.6rem + 1vw);
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./themes/images.ts":
/*!**************************!*\
  !*** ./themes/images.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");

const BASE_STATIC_URL = `${Object(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_0__["CDNURL"])()}/static/images`;
const BASE_STATIC_ICON_URL = `${Object(_vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_0__["CDNURL"])()}/static/icons`;
const images = {
  //2011-xmas
  xmasKv: `${BASE_STATIC_URL}/2011xmas_kv.png`,
  xmasBg: `${BASE_STATIC_URL}/bgm.png`,
  xtab1: `${BASE_STATIC_URL}/RI_1_off.png`,
  xtab1A: `${BASE_STATIC_URL}/RI_1_on.png`,
  xtab2: `${BASE_STATIC_URL}/RI_2_off.png`,
  xtab2A: `${BASE_STATIC_URL}/RI_2_on.png`,
  xtab3: `${BASE_STATIC_URL}/RI_3_off.png`,
  xtab3A: `${BASE_STATIC_URL}/RI_3_on.png`,
  xtab4: `${BASE_STATIC_URL}/RI_4_off.png`,
  xtab4A: `${BASE_STATIC_URL}/RI_4_on.png`,
  xtabon: `${BASE_STATIC_URL}/RII_on.png`,
  xtaboff: `${BASE_STATIC_URL}/RII_off.png`,
  timeBg: `${BASE_STATIC_URL}/time-bar.png`,
  tipsBg: `${BASE_STATIC_URL}/tips_title.png`,
  subon: `${BASE_STATIC_URL}/sub_on.png`,
  suboff: `${BASE_STATIC_URL}/sub_off.png`,
  xmassockson: `${BASE_STATIC_URL}/Christmas_socks_on.png`,
  xmassocksoff: `${BASE_STATIC_URL}/Christmas_socks_off.png`,
  candycaneson: `${BASE_STATIC_URL}/Candy_canes_on.png`,
  candycanesoff: `${BASE_STATIC_URL}/Candy_canes_off.png`,
  gingermanon: `${BASE_STATIC_URL}/gingerbread_Man_on.png`,
  gingermanoff: `${BASE_STATIC_URL}/gingerbread_Man_off.png`,
  n1on: `${BASE_STATIC_URL}/n1_on.png`,
  n1off: `${BASE_STATIC_URL}/n1_off.png`,
  n2on: `${BASE_STATIC_URL}/n2_on.png`,
  n2off: `${BASE_STATIC_URL}/n2_off.png`,
  n3on: `${BASE_STATIC_URL}/n3_on.png`,
  n3off: `${BASE_STATIC_URL}/n3_off.png`,
  missionBG: `${BASE_STATIC_URL}/mission_bgm.png`,
  missionTab: `${BASE_STATIC_URL}/RI_1-1.2_tab.png`,
  missionTitle: `${BASE_STATIC_URL}/tips_title.png`,
  checkon: `${BASE_STATIC_URL}/missioncheck_on.png`,
  checkoff: `${BASE_STATIC_URL}/missioncheck_off.png`,
  rankBoardBg: `${BASE_STATIC_URL}/team_list.png`,
  rankA: `${BASE_STATIC_URL}/team_list_team1.png`,
  rankB: `${BASE_STATIC_URL}/team_list_team2.png`,
  rankC: `${BASE_STATIC_URL}/team_list_team3.png`,
  no1Off: `${BASE_STATIC_URL}/n1_off.png`,
  no1On: `${BASE_STATIC_URL}/n1_on.png`,
  no2Off: `${BASE_STATIC_URL}/n2_off.png`,
  no2On: `${BASE_STATIC_URL}/n2_on.png`,
  no3Off: `${BASE_STATIC_URL}/n3_off.png`,
  no3On: `${BASE_STATIC_URL}/n3_on.png`,
  crownOff: `${BASE_STATIC_URL}/win-Crown-off.png`,
  crownOn: `${BASE_STATIC_URL}/win-Crown-on.png`,
  plusOff: `${BASE_STATIC_URL}/plus_close.png`,
  plusOn: `${BASE_STATIC_URL}/plus_open.png`,
  borderLine: `${BASE_STATIC_URL}/rank-line.png`
};
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "17media-browser-spy":
/*!**************************************!*\
  !*** external "17media-browser-spy" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("17media-browser-spy");

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./pages/2011-tw-xmas-chris.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\17專案\客製化ui專案\vmo-frontend-2011-tw-xmas\packages\web\pages\2011-tw-xmas-chris.tsx */"./pages/2011-tw-xmas-chris.tsx");


/***/ }),

/***/ "@17media/dad":
/*!*******************************!*\
  !*** external "@17media/dad" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@17media/dad");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-fastclick":
/*!**********************************!*\
  !*** external "react-fastclick" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fastclick");

/***/ }),

/***/ "react-window":
/*!*******************************!*\
  !*** external "react-window" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-window");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=2011-tw-xmas-chris.js.map