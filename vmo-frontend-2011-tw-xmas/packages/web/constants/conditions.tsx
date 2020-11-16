import React, { ReactNode } from 'react';

import { api } from './api';

import IconCrown from '../static/icons/crown.svg';
import IconTick1 from '../static/icons/tick1.svg';
import IconCrownSilver from '../static/icons/Crown_silver.svg';
import IconCrownCopper from '../static/icons/Crown_copper.svg';
// import IconCrownPink from '../static/icons/pink-crown.svg';
// import IconCrownBlue from '../static/icons/blue-crown.svg';
// import IconTick2 from '../static/icons/tick2.svg';
// import IconTick3 from '../static/icons/tick3.svg';
// import IconGiftRed from '../static/icons/gift-red.svg';
// import IconGiftPink from '../static/icons/gift-pink.svg';
// import IconGiftBlue from '../static/icons/gift-blue.svg';
// import IconGiftYellow from '../static/icons/gift-yellow.svg';


type condition = {
  value: number;
  conditionValue: string;
  filterCondition: string;
  icon?: ReactNode;
  color?: string;
};

type mission = {
  title: string;
  description?: string;
  prize?: string;
  threshold?: number;
  eventoryKey?: string;
};

type bonus = {
  title: string;
  metaKey?:string;
};

export interface ConditionInterface {
  bgs?: condition[];
  icons?: condition[];
  withVote?: boolean;
  withBonus?: boolean;
  withTotalScore?: boolean;
  missions?: mission[];
  bonus?: bonus[];
  needRequest?: boolean;
  containerID?: {
    [key: string]: any;
  };
}


// XMAS默认
export const rank0 = {};

// 響叮噹 第一階段
export const rank11xx: ConditionInterface = {
  icons: [
    {
      value: 80,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
    {
      value: 150000,
      conditionValue: 'score',
      filterCondition: '<=',
      icon: <IconTick1 />,
    },
  ],
  needRequest: true,
  containerID: api.bell.s1,
  missions: [
    {
      title: '任務一',
      description: '收集200個聖誕紅襪',
      prize:'可獲得直播間貼紙（兩週）',
      threshold: 200,
      eventoryKey: '2011_tw_xmas_bp',
    },
    {
      title: '任務二',
      description: '收集400個聖誕雪橇 (小)',
      prize:'可獲得400元聖誕祝福金',
      threshold: 400,
      eventoryKey: '2011_tw_xmas_s',
    },
    {
      title: '任務三',
      description: '收集50個聖誕音樂盒 (中)',
      prize:'可獲得1200元聖誕祝福金',
      threshold: 50,
      eventoryKey: '2011_tw_xmas_m_4',
    },
  ],
};

// 響叮噹 第二階段
export const rank12xx: ConditionInterface = {
  icons: [
    {
      value: 50,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
    {
      value: 150000,
      conditionValue: 'score',
      filterCondition: '<=',
      icon: <IconTick1 />,
    },
  ],
  needRequest: true,
  containerID: api.bell.s2,
  missions: [
    {
      title: '任務一',
      description: '聖誕紅襪',
      prize:'可獲得直播間貼紙（兩週）',
      threshold: 200,
      eventoryKey: '2011_tw_xmas_bp',
    },
    {
      title: '任務二',
      description: '聖誕雪橇 (小)',
      prize:'可獲得400元聖誕祝福金',
      threshold: 400,
      eventoryKey: '2011_tw_xmas_s',
    },
    {
      title: '任務三',
      description: '聖誕音樂盒 (中)',
      prize:'可獲得1200元聖誕祝福金',
      threshold: 50,
      eventoryKey: '2011_tw_xmas_m_4',
    },
  ],
};

// 響叮噹 第三階段 12081209
export const rank131xx = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 響叮噹 第三階段 12101211
export const rank132xx = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 響叮噹 第三階段 12121213
export const rank133xx = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 響叮噹 第三階段 12141215
export const rank134xx = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 響叮噹 第三階段 階段總榜
export const rank135xx = {
  icons: [
    {
      value: 125000,
      conditionValue: 'score',
      filterCondition: '<=',
      icon: <IconTick1 />,
    },
  ],
};

// 響叮噹 第三階段 主播出席
export const rank141xx = {
  icons: [
    {
      value: 90,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 響叮噹 第三階段 粉絲出席
export const rank142xx = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 平安夜 第四階段 - sock
export const rank211xx: ConditionInterface = {
  icons: [
    {
      value: 25,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 平安夜 第四階段 - candycane
export const rank212xx: ConditionInterface = {
  icons: [
    {
      value: 20,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownSilver />,
    },
  ],
};

// 平安夜 第四階段 - gingerman
export const rank213xx: ConditionInterface = {
  icons: [
    {
      value: 15,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownCopper />,
    },
  ],
};

// 狂歡夜 round1 - sock
export const rank311xx: ConditionInterface = {
  icons: [
    {
      value: 20,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
  needRequest: true,
  containerID: api.offline.r1.g1,
  missions: [
    {
      title: '任務一',
      description: '收集 100 個聖誕雪橇 (小)',
      prize:'可獲得線下聖誕小禮物抽獎資格',
      threshold: 100,
      eventoryKey: '2011_tw_xmas_s',
    },
    {
      title: '任務二',
      description: '收集 1 個聖誕雪人 (大)',
      prize:'可獲得 2,500 元聖誕祝福金',
      threshold: 1,
      eventoryKey: '2011_tw_xmas_l_3',
    },
    {
      title: '任務三',
      description: '收集 300 個任一聖誕活動禮',
      prize:'可獲得 1,000 元聖誕祝福金',
      threshold: 300,
      eventoryKey: 'any_gift',
    },
  ],
};

// 狂歡夜 round1 - candycane
export const rank312xx: ConditionInterface = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownSilver />,
    },
  ],
  needRequest: true,
  containerID: api.offline.r1.g2,
  missions: [
    {
      title: '任務一',
      description: '收集 100 個聖誕雪橇 (小)',
      prize:'可獲得線下聖誕小禮物抽獎資格',
      threshold: 100,
      eventoryKey: '2011_tw_xmas_s',
    },
    {
      title: '任務二',
      description: '收集 1 個聖誕雪人 (大)',
      prize:'可獲得 2,500 元聖誕祝福金',
      threshold: 1,
      eventoryKey: '2011_tw_xmas_l_3',
    },
    {
      title: '任務三',
      description: '收集 300 個任一聖誕活動禮',
      prize:'可獲得 1,000 元聖誕祝福金',
      threshold: 300,
      eventoryKey: 'any_gift',
    },
  ],
};

// 狂歡夜 round1 - gingerman
export const rank313xx: ConditionInterface = {
  icons: [
    {
      value: 5,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownCopper />,
    },
  ],
  needRequest: true,
  containerID: api.offline.r1.g3,
  missions: [
    {
      title: '任務一',
      description: '收集 100 個聖誕雪橇 (小)',
      prize:'可獲得線下聖誕小禮物抽獎資格',
      threshold: 100,
      eventoryKey: '2011_tw_xmas_s',
    },
    {
      title: '任務二',
      description: '收集 1 個聖誕雪人 (大)',
      prize:'可獲得 2,500 元聖誕祝福金',
      threshold: 1,
      eventoryKey: '2011_tw_xmas_l_3',
    },
    {
      title: '任務三',
      description: '收集 300 個任一聖誕活動禮',
      prize:'可獲得 1,000 元聖誕祝福金',
      threshold: 300,
      eventoryKey: 'any_gift',
    },
  ],
};

// 狂歡夜 round2 - sock
export const rank321xx: ConditionInterface = {
  icons: [
    {
      value: 25,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

// 狂歡夜 round2 - candycane
export const rank322xx: ConditionInterface = {
  icons: [
    {
      value: 15,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownSilver />,
    },
  ],
};

// 狂歡夜 round2 - gingerman
export const rank323xx: ConditionInterface = {
  icons: [
    {
      value: 5,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownCopper />,
    },
  ],
};


// 狂歡夜 線下總榜 - sock
export const rank324xx: ConditionInterface = {
  icons: [
    {
      value: 30,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};


// 狂歡夜 線下總榜 - candycane
export const rank325xx: ConditionInterface = {
  icons: [
    {
      value: 20,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownCopper />,
    },
  ],
};


// 狂歡夜 線下總榜 - gingerman
export const rank326xx: ConditionInterface = {
  icons: [
    {
      value: 10,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrownCopper />,
    },
  ],
};


// 聖誕總榜 主播總榜
export const rank411xx = {
  icons: [
    {
      value: 50,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
  // containerID: api.xmasfinal.bonus,
  // needRequest: true,
  withBonus: true,
  missions: [
    {
      title: '階段四',
      metaKey: 's4',
    },
    {
      title: 'Round 2',
      metaKey: 'r2',
    },
  ],
  // bonus: [
  //   {
  //     title: '階段四',
  //     metaKey: 's4',
  //   },
  //   {
  //     title: 'Round 2',
  //     metaKey: 'r2',
  //   },
  // ],
};


// 聖誕總榜 粉絲總榜
export const rank412xx: ConditionInterface = {
  icons: [
    {
      value: 30,
      conditionValue: 'rank',
      filterCondition: '>=',
      icon: <IconCrown />,
    },
  ],
};

