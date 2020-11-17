webpackHotUpdate("static\\development\\pages\\2011-tw-xmas-chris.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
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
/* harmony import */ var _17media_browser_spy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! 17media-browser-spy */ "../../node_modules/17media-browser-spy/dist/index.esm.js");
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

/***/ })

})
//# sourceMappingURL=2011-tw-xmas-chris.js.42abda384ae84e739993.hot-update.js.map