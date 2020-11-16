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
    endDate: offline.r1.startDate,
  },
  {
    tabKey: 'candycane',
    startDate: offline.r1.startDate,
    endDate: offline.r1.startDate,
  },
  {
    tabKey: 'gingerman',
    startDate: offline.r1.startDate,
    endDate: offline.r1.startDate,
  },
];


export const Tabs_round2TimeState = [
  {
    tabKey: 'socks',
    startDate: offline.r2.startDate,
    endDate: offline.r2.startDate,
  },
  {
    tabKey: 'candycane',
    startDate: offline.r2.startDate,
    endDate: offline.r2.startDate,
  },
  {
    tabKey: 'gingerman',
    startDate: offline.r2.startDate,
    endDate: offline.r2.startDate,
  },
];


export const Tabs_offline_finalTimeState = [
  {
    tabKey: 'socks',
    startDate: offline.final.startDate,
    endDate: offline.final.startDate,
  },
  {
    tabKey: 'candycane',
    startDate: offline.final.startDate,
    endDate: offline.final.startDate,
  },
  {
    tabKey: 'gingerman',
    startDate: offline.final.startDate,
    endDate: offline.final.startDate,
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
    kv: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/58eaf47f-4cdf-446c-a060-e8b523c6ca56',
    // video: 'https://event.17.media/10240-2008-tw-momo-frontend/main-vision'
  },
  methods: {
    t1:'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/02ee861f-45fb-40f9-a97f-255698925b3e',
    t2:'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/8bfb69d3-3e22-46f3-a12a-9cc64de926ab',
    t3: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/eb459074-668a-4708-a345-e7a2dba35907',
    t3_1: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/61842bde-dffe-4b47-a5d5-acf139de9885',
    t4: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/10dfe9f7-fa3a-4f3f-aaae-4de3f90dcf76',
    streamer_qualify: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/fc9cac59-70a0-4a05-9bd6-a5cddd4ea676',
    fans_qualify:'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/4cf56199-587d-40db-a420-cce896617c84',
    t6: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/67fa4735-9f08-4218-913e-2935075dab3c',
    t7: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/8e364c5b-8db5-44ab-b0bc-dbf790b999c9',
    t8: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/7e22d4d8-aef7-4ebe-bc39-65692dfa8dc6',
    t9: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/342bbdfe-46d2-4dc6-8111-9bdf98c33716',
    t10: 'https://storage.googleapis.com/media17-sta-web-assets/campaign/10458-2011-tw-xmas/e3220ff0-092d-44ca-9187-bef4f3c6bccf',
    intro1: 'https://sta-event.17.media/10482-xmas-intro1',
    introtimeline: 'https://sta-event.17.media/10483-2011xmas-intro1-1',
    intro2:'https://sta-event.17.media/10491-2011xmas-intro2-test',
    introgifts:'https://sta-event.17.media/10484-2011xmas-intro1-2',
    intro3:'https://sta-event.17.media/10493-2011xmas-intro3/intro3',
    intro4:'https://sta-event.17.media/10493-2011xmas-intro3/intro-final',
    prize:'https://sta-event.17.media/10493-2011xmas-intro3/prize',
    introfinal:'https://sta-event.17.media/10493-2011xmas-intro3/intro-final',
    // t1: 'https://event.17.media/10240-2008-tw-momo-frontend/method-1',
    // t2: 'https://event.17.media/10240-2008-tw-momo-frontend/method-2',
    // t3: 'https://event.17.media/10240-2008-tw-momo-frontend/method-3',
    // t4: 'https://event.17.media/10240-2008-tw-momo-frontend/method-4',
    // t51: 'https://event.17.media/10240-2008-tw-momo-frontend/method-5-1',
    // t52: 'https://event.17.media/10240-2008-tw-momo-frontend/method-5-2',
    // t53: 'https://event.17.media/10240-2008-tw-momo-frontend/method-5-3',
    // t6: 'https://event.17.media/10240-2008-tw-momo-frontend/method-6',
    // t7: 'https://event.17.media/10240-2008-tw-momo-frontend/method-7',
    // t8: 'https://event.17.media/10240-2008-tw-momo-frontend/method-8',
    // t91: 'https://event.17.media/10240-2008-tw-momo-frontend/method-9-1',
    // t92: 'https://event.17.media/10240-2008-tw-momo-frontend/method-9-2',
    // t93: 'https://event.17.media/10240-2008-tw-momo-frontend/method-9-3',
    // t101: 'https://event.17.media/10240-2008-tw-momo-frontend/method-10-1',
    // t102: 'https://event.17.media/10240-2008-tw-momo-frontend/method-10-2',
    // t103: 'https://event.17.media/10240-2008-tw-momo-frontend/method-10-3',
    // t11: 'https://event.17.media/10240-2008-tw-momo-frontend/method-11',
    // t121: 'https://event.17.media/10240-2008-tw-momo-frontend/method-12-1',
    // t122: 'https://event.17.media/10240-2008-tw-momo-frontend/method-12-2',
    // t123: 'https://event.17.media/10240-2008-tw-momo-frontend/method-12-3',
    // t13: 'https://event.17.media/10240-2008-tw-momo-frontend/method-13',
    // t14: 'https://event.17.media/10240-2008-tw-momo-frontend/method-14',
  },
  // intro1: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-1',
  // intro2: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-2',
  // intro3: {
  //   t1: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-3-1',
  //   t2: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-3-2',
  //   t3: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-3-3',
  // },
  // intro4: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-4',
  // intro5: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-5',
  // intro6: {
  //   t1: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-6-1',
  //   t2: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-6-2',
  //   t3: 'https://event.17.media/10240-2008-tw-momo-frontend/intro-6-3',
  // },
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