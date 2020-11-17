webpackHotUpdate("static\\development\\pages\\2011-tw-xmas-chris.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
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
  }] // bonus: [
  //   {
  //     title: '階段四',
  //     metaKey: 's4',
  //   },
  //   {
  //     title: 'Round 2',
  //     metaKey: 'r2',
  //   },
  // ],

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
        lineNumber: 494,
        columnNumber: 13
      }
    })
  }]
};

/***/ })

})
//# sourceMappingURL=2011-tw-xmas-chris.js.5565814a6ed071f5e030.hot-update.js.map