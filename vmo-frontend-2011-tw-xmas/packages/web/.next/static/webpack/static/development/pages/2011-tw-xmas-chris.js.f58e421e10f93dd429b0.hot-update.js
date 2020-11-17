webpackHotUpdate("static\\development\\pages\\2011-tw-xmas-chris.js",{

/***/ "./components/EventIntro/EventIntro.tsx":
/*!**********************************************!*\
  !*** ./components/EventIntro/EventIntro.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _vmo_web_constants_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmo/web/constants/config */ "./constants/config.ts");
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! 17media-browser-spy */ "../../node_modules/17media-browser-spy/dist/index.esm.js");
/* harmony import */ var _vmo_share_17appTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmo/share/17appTrack */ "../share/17appTrack.ts");
var _jsxFileName = "D:\\17\u5C08\u6848\\\u5BA2\u88FD\u5316ui\u5C08\u6848\\vmo-frontend-2011-tw-xmas\\packages\\web\\components\\EventIntro\\EventIntro.tsx"; // 2002-tw-alliance






const EventIntro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "EventIntro",
  componentId: "sc-3v5ht8-0"
})(["position:relative;max-width:800px;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:5px;@media screen and (max-width:800px){}"]); // const EventIntroTop = styled.div`
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
      lineNumber: 133,
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
        lineNumber: 156,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Iframe, {
      src: iframe,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
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
        lineNumber: 163,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Iframe, {
      src: iframe,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventIntro, {
    ref: descriptionRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EventIntroContent, {
    dangerouslySetInnerHTML: {
      __html: `${content.replace(/\n/g, '<br/>')}`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (EventIntroComponent);

/***/ })

})
//# sourceMappingURL=2011-tw-xmas-chris.js.f58e421e10f93dd429b0.hot-update.js.map