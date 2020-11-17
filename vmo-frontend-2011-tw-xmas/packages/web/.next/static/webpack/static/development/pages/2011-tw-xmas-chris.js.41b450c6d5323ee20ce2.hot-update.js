webpackHotUpdate("static\\development\\pages\\2011-tw-xmas-chris.js",{

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
  endDate: offline.r1.startDate
}, {
  tabKey: 'candycane',
  startDate: offline.r1.startDate,
  endDate: offline.r1.startDate
}, {
  tabKey: 'gingerman',
  startDate: offline.r1.startDate,
  endDate: offline.r1.startDate
}];
const Tabs_round2TimeState = [{
  tabKey: 'socks',
  startDate: offline.r2.startDate,
  endDate: offline.r2.startDate
}, {
  tabKey: 'candycane',
  startDate: offline.r2.startDate,
  endDate: offline.r2.startDate
}, {
  tabKey: 'gingerman',
  startDate: offline.r2.startDate,
  endDate: offline.r2.startDate
}];
const Tabs_offline_finalTimeState = [{
  tabKey: 'socks',
  startDate: offline.final.startDate,
  endDate: offline.final.startDate
}, {
  tabKey: 'candycane',
  startDate: offline.final.startDate,
  endDate: offline.final.startDate
}, {
  tabKey: 'gingerman',
  startDate: offline.final.startDate,
  endDate: offline.final.startDate
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
    intro1: 'https://event.17.media/10742-2020-xmas/intro-r1-1',
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
  if (false) {}

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
  if (false) {}

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

/***/ })

})
//# sourceMappingURL=2011-tw-xmas-chris.js.41b450c6d5323ee20ce2.hot-update.js.map