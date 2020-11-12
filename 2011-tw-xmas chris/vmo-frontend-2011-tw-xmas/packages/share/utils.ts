import { now } from '@17media/dad';
import { LeaderboardItem } from '@vmo/share/interfaces/LeaderboardItem';

export const path = (...paths: string[]) => {
  return paths
    .join('/')
    .replace(/\/+/g, '/')
    .replace(/^\//, '//')
    .replace(/^(https?):\//, '$1://');
};

export const calculateCountdown = (startDate: string, endDate: string) => {
  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
    notYetStarted: false,
    ended: false,
  };

  let diff = (Number(new Date(endDate)) - Number(new Date())) / 1000;
  // clear countdown when date is reached
  if (diff <= 0) return { ...timeLeft, ended: true };

  const diffStart = (Number(new Date()) - Number(new Date(startDate))) / 1000;

  if (diffStart <= 0) return { ...timeLeft, notYetStarted: true };

  // calculate time difference between now and expected date
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

export const formatDateEvent = (date: string, day: string) => {
  const dateObj = new Date(date);

  const month = dateObj.getMonth() + 1;
  const dateOfMonth = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const sec = dateObj.getSeconds();

  const stringDateOfMonth =
    dateOfMonth < 10 ? `0${dateOfMonth}` : String(dateOfMonth);
  const stringHours = hours < 10 ? `0${hours}` : String(hours);
  const stringMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
  const stringSec = sec < 10 ? `0${sec}` : String(sec);

  return `${month}/${stringDateOfMonth} (${day}) ${stringHours}:${stringMinutes}:${stringSec}`;
};

export const addLeadingZeros = (value: number) => {
  return String(value).length < 2 ? `0${String(value)}` : value;
};

export const formatDateOnCalendar = (date: string) => {
  const dateObj = new Date(date);

  const month = dateObj.getMonth() + 1;
  const dateOfMonth = dateObj.getDate();

  const stringDateOfMonth =
    dateOfMonth < 10 ? `0${dateOfMonth}` : String(dateOfMonth);

  return `${month}/${stringDateOfMonth}`;
};

export const convertConditionFilter = (
  filterCondition: string,
  value: number,
  conditionValue: number,
) => {
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

export const conditionMatch = (conditions: any[], item: any) =>
  conditions &&
  conditions.find(cond => {
    return convertConditionFilter(
      cond.filterCondition,
      cond.value,
      item[cond.conditionValue] + 1,
    );
  });

export const numberFormat = (value: number) => {
  let finalValue = value;
  if (!finalValue) {
    finalValue = 0;
    return finalValue.toLocaleString(navigator.language, {
      minimumFractionDigits: 0,
    });
  }
  return finalValue.toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
  });
};

export const numberFormatWithDigits = (
  value: number,
  minimumFractionDigits: number,
) => {
  let finalValue = value;
  if (!finalValue) {
    finalValue = 0;
    return finalValue.toLocaleString(navigator.language, {
      minimumFractionDigits,
    });
  }
  return value.toLocaleString(navigator.language, { minimumFractionDigits });
};

export const globalThis = (1, eval)('this'); // eslint-disable-line no-eval

export const qs = <T extends { [k: string]: string | boolean }>(
  search: string = globalThis.location
    ? globalThis.location.search.slice(1)
    : '',
): Partial<T> =>
  search
    .split('&')
    .filter(Boolean)
    .reduce<any>((o, keyValue) => {
      const [key, value] = keyValue.split('=');

      if (value === undefined) o[key] = true;
      else o[key] = value;

      return o;
    }, {});

export const getUserLangs = (): string[] => {
  const q = qs<{ lang: string; lng: string }>();
  return Array.from(
    new Set([q.lang, q.lng, ...window.navigator.languages].filter(
      Boolean,
    ) as string[]),
  );
};

export const getCurrentLang = (): string => {
  const supportLangs = [
    {
      prefix: 'zh',
      lang: 'zh-TW',
    },
    {
      prefix: 'en',
      lang: 'en-US',
    },
    {
      prefix: 'ja',
      lang: 'ja-JP',
    },
    {
      prefix: 'ar',
      lang: 'ar',
    },
  ];
  const langs = getUserLangs();
  if (langs.length > 0) {
    const langItem = {
      prefix: langs[0].substr(0, 2),
      lang: langs[0],
    };
    const findIndex = supportLangs.findIndex(
      item => item.prefix === langItem.prefix,
    );
    if (findIndex > 0) {
      return supportLangs[findIndex].lang;
    }
    return supportLangs[0].lang;
  }
  return supportLangs[0].lang || 'zh-TW';
};

export const getCurrentTransLateLang = (): string => {
  const supportLangs = [
    {
      prefix: 'zh',
      lang: 'zh_TW',
    },
    {
      prefix: 'en',
      lang: 'en_US',
    },
    {
      prefix: 'ja',
      lang: 'ja',
    },
    {
      prefix: 'ar',
      lang: 'ar',
    },
  ];
  const langs = getUserLangs();
  if (langs.length > 0) {
    const langItem = {
      prefix: langs[0].substr(0, 2),
      lang: langs[0],
    };
    const findIndex = supportLangs.findIndex(
      item => item.prefix === langItem.prefix,
    );
    if (findIndex > 0) {
      return supportLangs[findIndex].lang;
    }
    return supportLangs[0].lang;
  }
  return supportLangs[0].lang || 'zh_TW';
};

export const isPRO = () => window.location.hostname === 'vmo.17.media';

export const isSta = () => window.location.hostname === 'sta-vmo.17.media';

export const isLocal = () => window.location.hostname === 'localhost';

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: number;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export const getDateByFormat = (date: Date, format: string, locale: string) => {
  if (format.indexOf('MM/DD/YYYY') > -1) {
    return format.replace(
      'MM/DD/YYYY',
      date.toLocaleDateString(locale, {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }),
    );
  }

  if (format.indexOf('MM/DD') > -1) {
    return format.replace(
      'MM/DD',
      date.toLocaleDateString(locale, {
        month: 'numeric',
        day: '2-digit',
      }),
    );
  }

  if (format.indexOf('MM/d') > -1) {
    return format.replace(
      'MM/d',
      date.toLocaleDateString(locale, {
        month: 'numeric',
        day: 'numeric',
      }),
    );
  }

  return format;
};

export const getWeekdayByFormat = (
  date: Date,
  format: string,
  locale: string,
) => {
  if (format.indexOf('WN') > -1) {
    return format.replace(
      'WN',
      date.toLocaleDateString(locale, {
        weekday: locale.indexOf('zh') > -1 ? 'narrow' : 'short',
      }),
    );
  }

  return format;
};

export const getTimeByFormat = (date: Date, format: string, locale: string) => {
  if (format.indexOf('hh:mm:ss') > -1) {
    return format.replace(
      'hh:mm:ss',
      date.toLocaleTimeString('en-GB', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }),
    );
  }

  if (format.indexOf('HH:mm PP') > -1) {
    return format.replace(
      'HH:mm PP',
      date.toLocaleTimeString(locale, {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
      }),
    );
  }

  return format;
};

export const getStringDateCountdownByLocalFormat = (
  {
    d,
    h,
    m,
    s,
    ms,
  }: {
    d: number;
    h: number;
    m: number;
    s: number;
    ms: number;
  },
  formatStr: string,
) =>
  formatStr
    .replace('D', d.toString())
    .replace('hh', addLeadingZeros(h).toString())
    .replace('mm', addLeadingZeros(m).toString())
    .replace('ss', addLeadingZeros(s).toString());

export const getStringDateByLocalFormat = (
  dateString: string,
  format = 'MM/DD(WN)hh:mm:ss',
) => {
  const date = new Date(dateString);
  const locale = getCurrentLang();
  format = getDateByFormat(date, format, locale);
  format = getWeekdayByFormat(date, format, locale);
  format = getTimeByFormat(date, format, locale);
  return format;
};

export const getDetailDate = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const dateOfMonth = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const sec = dateObj.getSeconds();
  const stringDateOfMonth =
    dateOfMonth < 10 ? `0${dateOfMonth}` : String(dateOfMonth);
  const stringHours = hours < 10 ? `0${hours}` : String(hours);
  const stringMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
  const stringSec = sec < 10 ? `0${sec}` : String(sec);
  return { month, stringDateOfMonth, stringHours, stringMinutes, stringSec };
};

export const isSameDate = (startDate: string, endDate: string) =>
  getStringDateByLocalFormat(startDate, 'MM/DD/YYYY') ===
  getStringDateByLocalFormat(endDate, 'MM/DD/YYYY');

export const convertDateToTime = (date: string) => {
  const { stringHours, stringMinutes, stringSec } = getDetailDate(date);
  return `${stringHours}:${stringMinutes}:${stringSec}`;
};

export const getDefaultDay = (
  dates: { tabKey: string; startDate: string; endDate: string }[],
  indexDefault?: number,
) => {
  const currentDate = new Date(now() * 1000);
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

export const isProdVmo17Media = () =>
  window.location.hostname === 'vmo.17.media';

export const getUUID = (api: { sta: string; prod: string }) =>
  isProdVmo17Media() ? api.prod : api.sta;

export const getType = (api: { sta: string; prod: string }) =>
  isProdVmo17Media() ? api.prod : api.sta;

export const cumulativeOffset = (element: any) => {
  let top = 0;
  let left = 0;
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top,
    left,
  };
};

export const copyStringToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection()!.rangeCount > 0
      ? document.getSelection()!.getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection()!.removeAllRanges();
    document.getSelection()!.addRange(selected);
  }
};

export const copyDataToClipboard = (data: LeaderboardItem[]) => {
  // Get mession string
  const messionStrArr: string[] = [];
  if (data.length > 0) {
    const firstMission = data[0].missions;
    if (firstMission) {
      Object.keys(firstMission)
        .sort((a: any, b: any) => {
          return Number(a.substr(-1)) - Number(b.substr(-1));
        })
        .forEach(item => {
          messionStrArr.push(
            `${item.substr(0, 1).toUpperCase()}${item.substr(1)}`,
          );
        });
    }
  }
  // Get meta string
  const metaStrArr: string[] = [];
  if (data.length > 0) {
    const firstMeta = data[0].meta;
    if (firstMeta) {
      Object.keys(firstMeta).forEach(item => {
        metaStrArr.push(`${item.substr(0, 1).toUpperCase()}${item.substr(1)}`);
      });
    }
  }
  // Get member string
  const memberStrArr: string[] = [];
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
    let itemStr = `${index + 1}\t${item.userInfo.userID}\t${item.userInfo
      .displayName || item.userInfo.openID}\t${item.score}\t${
      item.userInfo.region
    }`;
    if (messionStrArr.length > 0) {
      const messions = [];
      Object.keys(item.missions)
        .sort((a: any, b: any) => {
          return Number(a.substr(-1)) - Number(b.substr(-1));
        })
        .forEach(mItem => {
          messions.push(`${item.missions[mItem]}`);
        });
      if (messions.length > 0) {
        itemStr = `${itemStr}\t${messions.join(`\t`)}`;
      }
    }
    if (metaStrArr.length > 0) {
      const meta = [];
      Object.keys(item.meta).forEach(mItem => {
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

export const animation = (
  duration: number,
  callback: (percent: number) => void,
) => {
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
