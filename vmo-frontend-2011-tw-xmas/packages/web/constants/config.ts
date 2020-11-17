//2011-xmas
import { isPRO, isSta } from '@vmo/share/utils';

  // 響叮噹_階段一 ~ 出席總榜
export const bell = {
  s1: {
    startDate: '2020-11-24T18:00:00+08:00',
    endDate: '2020-11-30T23:59:59+08:00',
  },
  s2: {
    startDate: '2020-12-01T00:00:00+08:00',
    endDate: '2020-12-07T23:59:59+08:00',
  },
  s3_12081209: {
    startDate: '2020-12-08T00:00:00+08:00',
    endDate: '2020-12-09T23:59:59+08:00',
  },
  s3_12101211: {
    startDate: '2020-12-10T00:00:00+08:00',
    endDate: '2020-12-11T23:59:59+08:00',
  },
  s3_12121213: {
    startDate: '2020-12-12T00:00:00+08:00',
    endDate: '2020-12-13T23:59:59+08:00',
  },
  s3_12141215: {
    startDate: '2020-12-14T00:00:00+08:00',
    endDate: '2020-12-15T23:59:59+08:00',
  },
  s3_total: {
    startDate: '2020-12-08T00:00:00+08:00',
    endDate: '2020-12-15T23:59:59+08:00',
  },
  qualify: {
    startDate: '2020-11-24T18:00:00+08:00',
    endDate: '2020-12-16T23:59:59+08:00',
  },
};


//平安夜

export const eve = {
  s4: {
    startDate: '2020-12-17T18:00:00+08:00',
    endDate: '2020-12-22T23:59:59+08:00',
  },
};

//狂歡夜

export const offline = {
  r1: {
    startDate: '2020-12-23T19:00:00+08:00',
    endDate: '2020-12-23T19:29:59+08:00',
  },
  r2: {
    startDate: '2020-12-23T19:50:00+08:00',
    endDate: '2020-12-23T20:09:59+08:00',
  },
  final: {
    startDate: '2020-12-23T19:00:00+08:00',
    endDate: '2020-12-23T20:29:59+08:00',
  }
};

//聖誕總榜

export const xmasfinal = {
  streamer: {
    startDate: '2020-12-17T00:00:00+08:00',
    endDate: '2020-12-23T20:59:59+08:00',
  },
  fans: {
    startDate: '2020-11-24T18:00:00+08:00',
    endDate: '2020-12-23T20:59:59+08:00',
  }
};



//Xmas Time stage

//階段一 階段二 timestate
export const Tab00xxTimeState = [
  {
    tabKey: 'bell-s1',
    startDate: bell.s1.startDate,
    endDate: bell.s1.endDate,
  },
  {
    tabKey: 'bell-s2',
    startDate: bell.s2.startDate,
    endDate: bell.s2.endDate,
  },
  {
    tabKey: 'bell-s3',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'bell-s3_total',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'bell-intro',
    startDate: '',
    endDate: '',
  },
];

//階段三timestate
export const Tab110xxTimeState = [
  {
    tabKey: 'bell-s3-1',
    startDate: bell.s3_12081209.startDate,
    endDate: bell.s3_12081209.endDate,
  },
  {
    tabKey: 'bell-s3-2',
    startDate: bell.s3_12101211.startDate,
    endDate: bell.s3_12101211.endDate,
  },
  {
    tabKey: 'bell-s3-3',
    startDate: bell.s3_12121213.startDate,
    endDate: bell.s3_12121213.endDate,
  },
  {
    tabKey: 'bell-s3-4',
    startDate: bell.s3_12141215.startDate,
    endDate: bell.s3_12141215.endDate,
  },
  {
    tabKey: 'bell-s3-5',
    startDate: bell.s3_total.startDate,
    endDate: bell.s3_total.endDate,
  },
];

//出席榜timestate
export const TabsqualifyTimeState = [
  {
    tabKey: 'streamer',
    startDate: bell.qualify.startDate,
    endDate: bell.qualify.endDate,
  },
  {
    tabKey: 'fans',
    startDate: bell.qualify.startDate,
    endDate: bell.qualify.endDate,
  },
];

//階段四timestate
export const Tab10TimeStatexx = [
  {
    tabKey: 'eve-s4',
    startDate: eve.s4.startDate,
    endDate: eve.s4.endDate,
  },
  {
    tabKey: 'eve-intro',
    startDate: '',
    endDate: '',
  },
];


export const Tabs_step4TimeState = [
  {
    tabKey: 'socks',
    startDate: eve.s4.startDate,
    endDate: eve.s4.endDate,
  },
  {
    tabKey: 'candycane',
    startDate: eve.s4.startDate,
    endDate: eve.s4.endDate,
  },
  {
    tabKey: 'gingerman',
    startDate: eve.s4.startDate,
    endDate: eve.s4.endDate,
  },
];

//線下round1~線下總榜
export const Tab20TimeStatexx = [
  {
    tabKey: 'Offline-r1',
    startDate: offline.r1.startDate,
    endDate: offline.r1.endDate,
  },
  {
    tabKey: 'Offline-r2',
    startDate: offline.r2.startDate,
    endDate: offline.r2.endDate,
  },
  {
    tabKey: 'Offline-all',
    startDate: offline.final.startDate,
    endDate: offline.final.endDate,
  },
  {
    tabKey: 'Offline-intro',
    startDate: '',
    endDate: '',
  },
];

export const Tabs_round1TimeState = [
  {
    tabKey: 'socks',
    startDate: offline.r1.startDate,
    endDate: offline.r1.endDate,
  },
  {
    tabKey: 'candycane',
    startDate: offline.r1.startDate,
    endDate: offline.r1.endDate,
  },
  {
    tabKey: 'gingerman',
    startDate: offline.r1.startDate,
    endDate: offline.r1.endDate,
  },
];


export const Tabs_round2TimeState = [
  {
    tabKey: 'socks',
    startDate: offline.r2.startDate,
    endDate: offline.r2.endDate,
  },
  {
    tabKey: 'candycane',
    startDate: offline.r2.startDate,
    endDate: offline.r2.endDate,
  },
  {
    tabKey: 'gingerman',
    startDate: offline.r2.startDate,
    endDate: offline.r2.endDate,
  },
];


export const Tabs_offline_finalTimeState = [
  {
    tabKey: 'socks',
    startDate: offline.final.startDate,
    endDate: offline.final.endDate,
  },
  {
    tabKey: 'candycane',
    startDate: offline.final.startDate,
    endDate: offline.final.endDate,
  },
  {
    tabKey: 'gingerman',
    startDate: offline.final.startDate,
    endDate: offline.final.endDate,
  },
];

//最後總榜
export const Tab30TimeStatexx = [
  {
    tabKey: 'final-streamer',
    startDate: xmasfinal.streamer.startDate,
    endDate: xmasfinal.streamer.endDate,
  },
  {
    tabKey: 'final-fans',
    startDate: xmasfinal.fans.startDate,
    endDate: xmasfinal.fans.endDate,
  },
  {
    tabKey: 'final-prize',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'final-intro',
    startDate: '',
    endDate: '',
  },
];


//活動說明

export const Tabsintro1TimeState = [
  {
    tabKey: 'intro1',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro2',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro3',
    startDate: '',
    endDate: '',
  },
];

export const Tabsintro2TimeState = [
  {
    tabKey: 'intro1',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro2',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro3',
    startDate: '',
    endDate: '',
  },
];

export const Tabsintro3TimeState = [
  {
    tabKey: 'intro1',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro2',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro3',
    startDate: '',
    endDate: '',
  },
];

export const Tabsintro4TimeState = [
  {
    tabKey: 'intro1',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro2',
    startDate: '',
    endDate: '',
  },
  {
    tabKey: 'intro3',
    startDate: '',
    endDate: '',
  },
];


export const LocakTotalTime = '2020-09-10T23:59:59+08:00';
export const LocakTotalTime2 = '2020-09-18T23:59:59+08:00';

export const Iframes = {
  masterVision: {
    kv: 'https://sta-event.17.media/10495-2011-xmas-final-intro/kv',
    video: 'https://event.17.media/10240-2008-tw-momo-frontend/main-vision'
  },
  methods: {
    t1:'https://sta-event.17.media/10495-2011-xmas-final-intro/t1',
    t2:'https://sta-event.17.media/10495-2011-xmas-final-intro/t2',
    t3: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t3',
    t3_1: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t3-1',
    t4: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t4',
    streamer_qualify: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t5',
    fans_qualify:'https://sta-event.17.media/10495-2011-xmas-final-intro/t5-1',
    t6: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t6',
    t7: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t7',
    t8: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t8',
    t9: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t9',
    t10: 'https://sta-event.17.media/10495-2011-xmas-final-intro/t10',
    intro1: 'https://sta-event.17.media/10482-xmas-intro1',
    introtimeline: 'https://sta-event.17.media/10483-2011xmas-intro1-1',
    intro2:'https://sta-event.17.media/10491-2011xmas-intro2-test',
    introgifts:'https://sta-event.17.media/10484-2011xmas-intro1-2',
    intro3:'https://sta-event.17.media/10493-2011xmas-intro3/intro3',
    intro4:'https://sta-event.17.media/10493-2011xmas-intro3/intro-final',
    prize:'https://sta-event.17.media/10493-2011xmas-intro3/prize',
    introfinal:'https://sta-event.17.media/10493-2011xmas-intro3/intro-final',
  },
};

export const staPrefix = '10262-';
export const prodPrefix = '10198-';

export const projectNameFunc = (project: string) => {
  if (!process.browser) {
    return project;
  }
  if (isPRO()) {
    return `/${prodPrefix}${project}`;
  }
  if (isSta()) {
    return `/${staPrefix}${project}`;
  }
  return project;
};

export const PAGE_PATH = projectNameFunc('2008-tw-momo');

export const IMAGE_PATH = projectNameFunc('2008-tw-momo');

export const CDNURL = () => {
  if (!process.browser) {
    return `https://vmo.17.media${IMAGE_PATH}`;
  }
  if (isPRO()) {
    return `https://vmo.17.media${IMAGE_PATH}`;
  }
  if (isSta()) {
    return `https://sta-vmo.17.media${IMAGE_PATH}`;
  }
  return '.';
};

// Tracking
export const SectionTypes = {
  kv: 'KV',
  tabs: 'tabs',
  buttons: 'buttons',
  duration: 'duration',
  searchBar: 'searchBar',
  description: 'description',
  topStreamer: 'topStreamer',
  leaderboardItem: 'leaderboardItem',
  gifts: 'gifts',
  timeline: 'timeline',
};

// export const TrackTab = [
//   '歡慶開幕',
//   '強強聯手',
//   '票選最強直播主',
//   '購物派對 線下活動',
//   '購物總榜',
//   '活動重點',
// ];

export const TrackTab = [
  '響叮噹',
  '平安夜',
  '狂歡夜',
  '聖誕總榜',
];