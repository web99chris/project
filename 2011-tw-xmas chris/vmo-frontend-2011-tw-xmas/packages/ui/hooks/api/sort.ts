// import { now } from '@17media/dad';

// import { conditionMatch } from '@vmo/share/utils';
// import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';

// const sortTab200Amount = [
//   {
//     filterCondition: '<',
//     value: 31,
//     conditionValue: 'rank',
//     amount: 0,
//   },
//   {
//     filterCondition: '===',
//     value: 2,
//     conditionValue: 'rank',
//     amount: 60,
//   },
//   {
//     filterCondition: '===',
//     value: 3,
//     conditionValue: 'rank',
//     amount: 55,
//   },
//   {
//     filterCondition: '===',
//     value: 4,
//     conditionValue: 'rank',
//     amount: 50,
//   },
//   {
//     filterCondition: '===',
//     value: 5,
//     conditionValue: 'rank',
//     amount: 45,
//   },
//   {
//     filterCondition: '===',
//     value: 6,
//     conditionValue: 'rank',
//     amount: 44,
//   },
//   {
//     filterCondition: '===',
//     value: 7,
//     conditionValue: 'rank',
//     amount: 43,
//   },
//   {
//     filterCondition: '===',
//     value: 8,
//     conditionValue: 'rank',
//     amount: 42,
//   },
//   {
//     filterCondition: '===',
//     value: 9,
//     conditionValue: 'rank',
//     amount: 41,
//   },
//   {
//     filterCondition: '===',
//     value: 10,
//     conditionValue: 'rank',
//     amount: 40,
//   },
//   {
//     filterCondition: '===',
//     value: 11,
//     conditionValue: 'rank',
//     amount: 39,
//   },
//   {
//     filterCondition: '===',
//     value: 12,
//     conditionValue: 'rank',
//     amount: 38,
//   },
//   {
//     filterCondition: '===',
//     value: 13,
//     conditionValue: 'rank',
//     amount: 37,
//   },
//   {
//     filterCondition: '===',
//     value: 14,
//     conditionValue: 'rank',
//     amount: 36,
//   },
//   {
//     filterCondition: '===',
//     value: 15,
//     conditionValue: 'rank',
//     amount: 35,
//   },
//   {
//     filterCondition: '===',
//     value: 16,
//     conditionValue: 'rank',
//     amount: 34,
//   },
//   {
//     filterCondition: '===',
//     value: 17,
//     conditionValue: 'rank',
//     amount: 33,
//   },
//   {
//     filterCondition: '===',
//     value: 18,
//     conditionValue: 'rank',
//     amount: 32,
//   },
//   {
//     filterCondition: '===',
//     value: 19,
//     conditionValue: 'rank',
//     amount: 31,
//   },
//   {
//     filterCondition: '===',
//     value: 20,
//     conditionValue: 'rank',
//     amount: 30,
//   },
//   {
//     filterCondition: '===',
//     value: 21,
//     conditionValue: 'rank',
//     amount: 29,
//   },
//   {
//     filterCondition: '===',
//     value: 22,
//     conditionValue: 'rank',
//     amount: 28,
//   },
//   {
//     filterCondition: '===',
//     value: 23,
//     conditionValue: 'rank',
//     amount: 27,
//   },
//   {
//     filterCondition: '===',
//     value: 24,
//     conditionValue: 'rank',
//     amount: 26,
//   },
//   {
//     filterCondition: '===',
//     value: 25,
//     conditionValue: 'rank',
//     amount: 25,
//   },
//   {
//     filterCondition: '===',
//     value: 26,
//     conditionValue: 'rank',
//     amount: 24,
//   },
//   {
//     filterCondition: '===',
//     value: 27,
//     conditionValue: 'rank',
//     amount: 23,
//   },
//   {
//     filterCondition: '===',
//     value: 28,
//     conditionValue: 'rank',
//     amount: 22,
//   },
//   {
//     filterCondition: '===',
//     value: 29,
//     conditionValue: 'rank',
//     amount: 21,
//   },
//   {
//     filterCondition: '===',
//     value: 30,
//     conditionValue: 'rank',
//     amount: 20,
//   },
//   {
//     filterCondition: '===',
//     value: 31,
//     conditionValue: 'rank',
//     amount: 19,
//   },
// ];

// const sortTab210Amount = [
//   {
//     filterCondition: '<',
//     value: 31,
//     conditionValue: 'rank',
//     amount: 0,
//   },
//   {
//     filterCondition: '<',
//     value: 28,
//     conditionValue: 'rank',
//     amount: 1,
//   },
//   {
//     filterCondition: '===',
//     value: 2,
//     conditionValue: 'rank',
//     amount: 40,
//   },
//   {
//     filterCondition: '===',
//     value: 3,
//     conditionValue: 'rank',
//     amount: 35,
//   },
//   {
//     filterCondition: '===',
//     value: 4,
//     conditionValue: 'rank',
//     amount: 30,
//   },
//   {
//     filterCondition: '===',
//     value: 5,
//     conditionValue: 'rank',
//     amount: 25,
//   },
//   {
//     filterCondition: '===',
//     value: 6,
//     conditionValue: 'rank',
//     amount: 24,
//   },
//   {
//     filterCondition: '===',
//     value: 7,
//     conditionValue: 'rank',
//     amount: 23,
//   },
//   {
//     filterCondition: '===',
//     value: 8,
//     conditionValue: 'rank',
//     amount: 22,
//   },
//   {
//     filterCondition: '===',
//     value: 9,
//     conditionValue: 'rank',
//     amount: 21,
//   },
//   {
//     filterCondition: '===',
//     value: 10,
//     conditionValue: 'rank',
//     amount: 20,
//   },
//   {
//     filterCondition: '===',
//     value: 11,
//     conditionValue: 'rank',
//     amount: 19,
//   },
//   {
//     filterCondition: '===',
//     value: 12,
//     conditionValue: 'rank',
//     amount: 18,
//   },
//   {
//     filterCondition: '===',
//     value: 13,
//     conditionValue: 'rank',
//     amount: 17,
//   },
//   {
//     filterCondition: '===',
//     value: 14,
//     conditionValue: 'rank',
//     amount: 16,
//   },
//   {
//     filterCondition: '===',
//     value: 15,
//     conditionValue: 'rank',
//     amount: 15,
//   },
//   {
//     filterCondition: '===',
//     value: 16,
//     conditionValue: 'rank',
//     amount: 14,
//   },
//   {
//     filterCondition: '===',
//     value: 17,
//     conditionValue: 'rank',
//     amount: 13,
//   },
//   {
//     filterCondition: '===',
//     value: 18,
//     conditionValue: 'rank',
//     amount: 12,
//   },
//   {
//     filterCondition: '===',
//     value: 19,
//     conditionValue: 'rank',
//     amount: 11,
//   },
//   {
//     filterCondition: '===',
//     value: 20,
//     conditionValue: 'rank',
//     amount: 10,
//   },
//   {
//     filterCondition: '===',
//     value: 21,
//     conditionValue: 'rank',
//     amount: 9,
//   },
//   {
//     filterCondition: '===',
//     value: 22,
//     conditionValue: 'rank',
//     amount: 8,
//   },
//   {
//     filterCondition: '===',
//     value: 23,
//     conditionValue: 'rank',
//     amount: 7,
//   },
//   {
//     filterCondition: '===',
//     value: 24,
//     conditionValue: 'rank',
//     amount: 6,
//   },
//   {
//     filterCondition: '===',
//     value: 25,
//     conditionValue: 'rank',
//     amount: 5,
//   },
//   {
//     filterCondition: '===',
//     value: 26,
//     conditionValue: 'rank',
//     amount: 4,
//   },
//   {
//     filterCondition: '===',
//     value: 27,
//     conditionValue: 'rank',
//     amount: 3,
//   },
//   {
//     filterCondition: '===',
//     value: 28,
//     conditionValue: 'rank',
//     amount: 2,
//   },
// ];

// export const sortTab00 = (data: any) => {
//   if (data && data.length && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };

// export const sortTab10 = sortTab00;

// export const sortTab200 = (data: any) => {
//   if (data && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       const amountItem = conditionMatch(sortTab200Amount, item);
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//           amount: amountItem.amount,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };

// export const sortTab210 = (data: any) => {
//   if (data && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       const amountItem = conditionMatch(sortTab210Amount, item);
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//           amount: amountItem.amount,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };

// export const sortTab40 = (data: any) => {
//   if (data && data[0]) {
//     const newData = data[0].map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         lastTimestamp,
//         avatar,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       let findMeta = {
//         s2: 0,
//         s5: 0,
//         r1: 0,
//         r2: 0,
//       };
//       if (data[1]) {
//         const findItem = data[1].find(
//           f => f.userInfo.userID === userInfo.userID,
//         );
//         if (findItem) {
//           findMeta = findItem.meta;
//         }
//       }
//       return {
//         type,
//         userID: userInfo.userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo,
//         meta: {
//           ...meta,
//           ...findMeta,
//         },
//         roomID: userInfo.onliveInfo
//           ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//           : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };

// export const sortTab410 = sortTab40;

// export const sortTab0330 = (data: any) => {
//   if (data && data.length && data[0] && data[0].streamers) {
//     const newData = data[0].streamers.map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         picture,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       let finalScore = score;
//       if (meta && meta.bonus) {
//         finalScore = parseInt(finalScore + meta.bonus, 10);
//       }
//       return {
//         type,
//         userID,
//         lastTimestamp,
//         rank: index,
//         score: finalScore || 0,
//         meta: {
//           ...meta,
//         },
//         userInfo: {
//           userID,
//           displayName: name,
//           picture,
//         },
//         roomID:
//           userInfo && userInfo.onliveInfo
//             ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//             : 0,
//       };
//     });
//     const finalData = newData
//       .sort((a, b) => b.score - a.score)
//       .map((s, i) => ({
//         ...s,
//         rank: i,
//       }));
//     return finalData;
//   }
//   return [];
// };

// export const sortTab0331 = (data: any) => {
//   let startTimeCheck = 0;
//   let votedList = [];
//   if (data[1]) {
//     startTimeCheck = data[1].startTime;
//   }
//   if (data[2] && data[2].votedTo) {
//     votedList = data[2].votedTo;
//   }
//   if (data && data.length && data[0] && data[0].streamers) {
//     const newData = data[0].streamers.map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         picture,
//         name,
//         userInfo,
//         meta,
//       } = item;
//       let voteInfo = {};
//       const nowTime = now();
//       if (startTimeCheck > 0 && nowTime >= startTimeCheck) {
//         voteInfo = {
//           status: true,
//         };
//         if (votedList && votedList.length > 0) {
//           voteInfo = {
//             status: !votedList.includes(userInfo.userID),
//           };
//         }
//       }
//       return {
//         type,
//         userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         userInfo: {
//           userID,
//           displayName: name,
//           picture,
//         },
//         meta: {
//           ...meta,
//         },
//         voteInfo,
//         roomID:
//           userInfo && userInfo.onliveInfo
//             ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//             : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };

// export const sortTabCache = (data: any) => {
//   if (data && data.length && data[0] && data[0].streamers) {
//     const newData = data[0].streamers.map((item, index) => {
//       const {
//         type,
//         userID,
//         score,
//         amount,
//         lastTimestamp,
//         picture,
//         name,
//         meta,
//         bonus,
//         userInfo,
//       } = item;
//       return {
//         type,
//         userID,
//         lastTimestamp,
//         rank: index,
//         score: score || 0,
//         meta: {
//           bonus: bonus || 0,
//           ...meta,
//         },
//         userInfo: {
//           userID,
//           displayName: name,
//           picture,
//         },
//         roomID:
//           userInfo && userInfo.onliveInfo
//             ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
//             : 0,
//       };
//     });
//     return newData;
//   }
//   return [];
// };

import { now } from '@17media/dad';

import { conditionMatch } from '@vmo/share/utils';
import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';

export const sortTab00 = (data: any) => {
  if (data && data.length && data[0]) {
    const newData = data[0].map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta,
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: {
          ...meta,
        },
        // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,
      };
    });
    return newData;
  }
  return [];
};

export const sortTab100 = (data: any, team: string) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];
    switch (team) {
      case 'ginger': {
        selectData = gingerData || [];
        break;
      }
      case 'candy': {
        selectData = candyData || [];
        break;
      }
      case 'sock':
      default: {
        selectData = sockData || [];
      }
    }
    // total scores
    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0;
    // socks
    if (sockData && sockData.length > 0) {
      sockData.forEach((item: LeaderboardItemInterface) => {
        sockScores += item.score || 0;
      });
    }
     // candycane
    if (candyData && candyData.length > 0) {
      candyData.forEach((item: LeaderboardItemInterface) => {
        candyScores += item.score || 0;
      });
    }
     // gingerman
    if (gingerData && gingerData.length > 0) {
      gingerData.forEach((item: LeaderboardItemInterface) => {
        gingerScores += item.score || 0;
      });
    }
    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta,
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: {
          ...meta,
        },
        // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,
      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores,
      },
    };
  }
  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0,
    },
    data: [],
  };
};

export const sortTab200 = (data: any, team: string) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];
    switch (team) {
      case 'ginger': {
        selectData = gingerData || [];
        break;
      }
      case 'candy': {
        selectData = candyData || [];
        break;
      }
      case 'sock':
      default: {
        selectData = sockData || [];
      }
    }
    // total scores
    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0;
    // socks
    if (sockData && sockData.length > 0) {
      sockData.forEach((item: LeaderboardItemInterface) => {
        sockScores += item.score || 0;
      });
    }
     // candycane
    if (candyData && candyData.length > 0) {
      candyData.forEach((item: LeaderboardItemInterface) => {
        candyScores += item.score || 0;
      });
    }
     // gingerman
    if (gingerData && gingerData.length > 0) {
      gingerData.forEach((item: LeaderboardItemInterface) => {
        gingerScores += item.score || 0;
      });
    }
    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta,
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: {
          ...meta,
        },
        // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,
      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores,
      },
    };
  }
  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0,
    },
    data: [],
  };
};

export const sortTab210 = (data: any, team: string) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];
    switch (team) {
      case 'ginger': {
        selectData = gingerData || [];
        break;
      }
      case 'candy': {
        selectData = candyData || [];
        break;
      }
      case 'sock':
      default: {
        selectData = sockData || [];
      }
    }
    // total scores
    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0;
    // socks
    if (sockData && sockData.length > 0) {
      sockData.forEach((item: LeaderboardItemInterface) => {
        sockScores += item.score || 0;
      });
    }
     // candycane
    if (candyData && candyData.length > 0) {
      candyData.forEach((item: LeaderboardItemInterface) => {
        candyScores += item.score || 0;
      });
    }
     // gingerman
    if (gingerData && gingerData.length > 0) {
      gingerData.forEach((item: LeaderboardItemInterface) => {
        gingerScores += item.score || 0;
      });
    }
    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta,
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: {
          ...meta,
        },
        roomID: userInfo.onliveInfo
          ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
          : 0,
      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores,
      },
    };
  }
  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0,
    },
    data: [],
  };
};

export const sortTab220 = (data: any, team: string) => {
  if (data && data.length) {
    const [sockData, candyData, gingerData] = data;
    let selectData = [];
    switch (team) {
      case 'ginger': {
        selectData = gingerData || [];
        break;
      }
      case 'candy': {
        selectData = candyData || [];
        break;
      }
      case 'sock':
      default: {
        selectData = sockData || [];
      }
    }
    // total scores
    let sockScores = 0;
    let candyScores = 0;
    let gingerScores = 0;
    // socks
    if (sockData && sockData.length > 0) {
      sockData.forEach((item: LeaderboardItemInterface) => {
        sockScores += item.score || 0;
      });
    }
     // candycane
    if (candyData && candyData.length > 0) {
      candyData.forEach((item: LeaderboardItemInterface) => {
        candyScores += item.score || 0;
      });
    }
     // gingerman
    if (gingerData && gingerData.length > 0) {
      gingerData.forEach((item: LeaderboardItemInterface) => {
        gingerScores += item.score || 0;
      });
    }
    const newData = selectData.map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta,
      } = item;
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: {
          ...meta,
        },
        // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,
      };
    });
    return {
      data: newData,
      scores: {
        sock: sockScores,
        candy: candyScores,
        ginger: gingerScores,
      },
    };
  }
  return {
    scores: {
      sock: 0,
      candy: 0,
      ginger: 0,
    },
    data: [],
  };
};

export const sortTab30 = (data: any) => {
  if (data && data.length && data[0]) {
    const newData = data[0].map((item, index) => {
      const {
        type,
        userID,
        score,
        amount,
        lastTimestamp,
        avatar,
        name,
        userInfo,
        meta,
      } = item;
      const bonus = {
        total: 0,
        r2: 0,
        s4: 0,
        ...meta,
      };
      return {
        type,
        userID: userInfo.userID,
        lastTimestamp,
        rank: index,
        score: score || 0,
        userInfo,
        meta: {
          ...bonus,
          total: parseInt(bonus.r2, 10) + parseInt(bonus.s4, 10),
        },
        // roomID: userInfo.onliveInfo
        //   ? parseInt(userInfo.onliveInfo.liveStreamID, 10)
        //   : 0,
      };
    });
    return newData;
  }
  return [];
};