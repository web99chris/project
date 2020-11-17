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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!***********************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!************************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!************************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

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

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*******************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!****************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!**********************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*********************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!**********************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**************************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***************************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*******************************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/next/app.js":
/*!**************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/next/app.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../../node_modules/next/dist/pages/_app.js":
/*!**************************************************************************************!*\
  !*** D:/17專案/客製化ui專案/vmo-frontend-2011-tw-xmas/node_modules/next/dist/pages/_app.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../../node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "../../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vmo_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/ui */ "../ui/index.ts");
/* harmony import */ var _vmo_share_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/share/utils */ "../share/utils.ts");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! smoothscroll-polyfill */ "smoothscroll-polyfill");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\pages\\_app.tsx";







class App extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  componentDidMount() {
    document.documentElement.setAttribute('lang', Object(_vmo_share_utils__WEBPACK_IMPORTED_MODULE_5__["getUserLangs"])()[0]);
    smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_6___default.a.polyfill();
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, "17 - Your Life's Moments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui__WEBPACK_IMPORTED_MODULE_4__["GlobalStyles"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "17media-browser-spy":
/*!**************************************!*\
  !*** external "17media-browser-spy" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("17media-browser-spy");

/***/ }),

/***/ "@17media/dad":
/*!*******************************!*\
  !*** external "@17media/dad" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@17media/dad");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

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

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-window":
/*!*******************************!*\
  !*** external "react-window" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-window");

/***/ }),

/***/ "smoothscroll-polyfill":
/*!****************************************!*\
  !*** external "smoothscroll-polyfill" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("smoothscroll-polyfill");

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
//# sourceMappingURL=_app.js.map