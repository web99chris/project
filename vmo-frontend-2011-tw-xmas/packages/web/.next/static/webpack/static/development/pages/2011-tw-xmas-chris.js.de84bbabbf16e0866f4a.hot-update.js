webpackHotUpdate("static\\development\\pages\\2011-tw-xmas-chris.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @17media/dad */ "../../node_modules/@17media/dad/src/index.js");
/* harmony import */ var _17media_dad__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_17media_dad__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vmo_ui_hooks_TabsRefContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmo/ui/hooks/TabsRefContext */ "../ui/hooks/TabsRefContext.ts");
/* harmony import */ var _vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmo/ui/Loading */ "../ui/Loading.tsx");
/* harmony import */ var _vmo_ui_hooks_useQueryString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmo/ui/hooks/useQueryString */ "../ui/hooks/useQueryString.ts");
/* harmony import */ var _vmo_ui_hooks_api_useTypeApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmo/ui/hooks/api/useTypeApi */ "../ui/hooks/api/useTypeApi.ts");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! 17media-browser-spy */ "../../node_modules/17media-browser-spy/dist/index.esm.js");
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
/* harmony import */ var _leaderboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../leaderboard */ "./components/leaderboard/index.tsx");
/* harmony import */ var _themes_images__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../themes/images */ "./themes/images.ts");
/* harmony import */ var _context_missionPanelContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../context/missionPanelContext */ "./context/missionPanelContext.ts");

var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\LeaderboardContainer\\LeaderboardContainer.tsx"; // 2002-tw-alliance















const LeaderboardContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "LeaderboardContainer__LeaderboardContainerWrapper",
  componentId: "sc-1qmnh3n-0"
})(["margin-top:", ";@media screen and (min-width:800px){margin-top:", ";}"], props => props.styleInfo.marginTop ? `${props.styleInfo.marginTop}vw` : 0, props => props.styleInfo.marginTop ? `calc((800 / 828) * ${props.styleInfo.marginTop * 414 / 100 * 2}px)` : 0);
const VideoContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
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
  const [missionDetails, setMissionDetails] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [showPanelID2, setShowPanelID2] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [BonusDetails, setBonusDetails] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // let finalApis = apis;
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
        lineNumber: 208,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vmo_ui_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "#fe41cb",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }
    }));
  }

  if (iframe) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Iframe, {
      src: iframe,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
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

/***/ })

})
//# sourceMappingURL=2011-tw-xmas-chris.js.de84bbabbf16e0866f4a.hot-update.js.map