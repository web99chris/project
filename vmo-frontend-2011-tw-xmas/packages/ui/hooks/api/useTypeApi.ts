// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import axios, { CancelTokenSource } from 'axios';

// import { api } from '@vmo/web/constants/api';
// import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
// import { getLeaderboardVote } from '@vmo/share/services/leaderboardVote.service';
// import { getLeaderboard } from '@vmo/share/services/leaderboard.service';
// import { getLeaderboardCache } from '@vmo/share/services/leaderboardCache.service';
// import { getLeaderboardEventory } from '@vmo/share/services/leaderboardEventory.service';
// import { hashCode } from './utils';

// type APIType = {
//   sta: string;
//   prod: string;
//   isCache?: boolean;
//   isVote?: boolean;
//   isEventory?: boolean;
//   firstRender?: boolean;
// };

// const useTypeApi = (
//   apiList = [],
//   method = 'GET',
//   realTime: number,
//   hashCheck,
//   initialData: any,
//   opt = {
//     limit: 1000,
//     cursor: '',
//   },
// ) => {
//   /* eslint-disable */
//   const timeoutKey = useRef(0);
//   const source = useRef<CancelTokenSource>();
//   const [loading, setLoading] = useState(false);
//   const [polling, setPolling] = useState(false);
//   const [leaderboardData, setLeaderboardData] = useState(initialData);
//   const getDataRealTimeAPI = useCallback((apis = [], time, previousData) => {
//     timeoutKey.current = setTimeout(async () => {
//       setPolling(true);
//       const apiArr = [];
//       apis.forEach((item: APIType) => {
//         if (item.isCache) {
//           apiArr.push(
//             getLeaderboardCache(
//               {
//                 sta: item.sta,
//                 prod: item.prod,
//               },
//               source.current.token,
//             ),
//           );
//         } else if (item.isVote) {
//           apiArr.push(
//             getLeaderboardVote(
//               {
//                 sta: item.sta,
//                 prod: item.prod,
//               },
//               source.current.token,
//             ),
//           );
//         } else if (item.isEventory) {
//           apiArr.push(
//             getLeaderboardEventory(
//               item,
//               source.current.token,
//               opt.limit,
//               opt.cursor,
//               method,
//             ),
//           );
//         } else {
//           apiArr.push(
//             getLeaderboard(
//               item,
//               source.current.token,
//               opt.limit,
//               opt.cursor,
//               method,
//             ),
//           );
//         }
//       });
//       const results = await Promise.all(apiArr);
//       setLeaderboardData(results);
//       setPolling(false);
//     }, time);
//   }, []);
//   useEffect(() => {
//     setLoading(true);
//     const promiseList = [];
//     source.current = axios.CancelToken.source();
//     apiList.forEach((item: APIType) => {
//       if (item.isCache) {
//         promiseList.push(
//           getLeaderboardCache(
//             {
//               sta: item.sta,
//               prod: item.prod,
//             },
//             source.current.token,
//           ),
//         );
//       } else if (item.isVote) {
//         promiseList.push(
//           getLeaderboardVote(
//             {
//               sta: item.sta,
//               prod: item.prod,
//             },
//             source.current.token,
//           ),
//         );
//       } else if (item.isEventory) {
//         promiseList.push(
//           getLeaderboardEventory(
//             item,
//             source.current.token,
//             opt.limit,
//             opt.cursor,
//             method,
//             (data: any) => {
//               if (item.firstRender) {
//                 setLeaderboardData([data]);
//                 setLoading(false);
//               }
//             },
//           ),
//         );
//       } else {
//         promiseList.push(
//           getLeaderboard(
//             item,
//             source.current.token,
//             opt.limit,
//             opt.cursor,
//             method,
//             (data: any) => {
//               if (item.firstRender) {
//                 setLeaderboardData([data]);
//                 setLoading(false);
//               }
//             },
//           ),
//         );
//       }
//     });
//     Promise.all(promiseList).then(async (results: any) => {
//       setLeaderboardData(results);
//       setLoading(false);
//     });
//     return () => {
//       if (source.current) source.current.cancel();
//       if (timeoutKey.current) clearTimeout(timeoutKey.current);
//     };
//   }, []);
//   useEffect(() => {
//     if (!polling && realTime > 0) {
//       clearTimeout(timeoutKey.current);
//       timeoutKey.current = 0;
//       getDataRealTimeAPI(apiList, realTime, leaderboardData);
//     }
//   }, [polling, leaderboardData, apiList, realTime]);

//   return { loading, leaderboardData };
// };

// export default useTypeApi;


import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios, { CancelTokenSource } from 'axios';

import { api } from '@vmo/web/constants/api';
import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { getLeaderboardVote } from '@vmo/share/services/leaderboardVote.service';
import { getLeaderboard } from '@vmo/share/services/leaderboard.service';
import { getLeaderboardCache } from '@vmo/share/services/leaderboardCache.service';
import { getLeaderboardEventory } from '@vmo/share/services/leaderboardEventory.service';
import { hashCode } from './utils';

type APIType = {
  sta: string;
  prod: string;
  isCache?: boolean;
  isVote?: boolean;
  isEventory?: boolean;
  firstRender?: boolean;
};

const useTypeApi = (
  apiList = [],
  method = 'GET',
  realTime: number,
  hashCheck,
  initialData: any,
  opt = {
    limit: 1000,
    cursor: '',
  },
) => {
  /* eslint-disable */
  const timeoutKey = useRef(0);
  const source = useRef<CancelTokenSource>();
  const [loading, setLoading] = useState(false);
  const [polling, setPolling] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState(initialData);
  const getDataRealTimeAPI = useCallback((apis = [], time, previousData) => {
    timeoutKey.current = setTimeout(async () => {
      setPolling(true);
      const apiArr = [];
      apis.forEach((item: APIType) => {
        if (item.isCache) {
          apiArr.push(
            getLeaderboardCache(
              {
                sta: item.sta,
                prod: item.prod,
              },
              source.current.token,
            ),
          );
        } else if (item.isVote) {
          apiArr.push(
            getLeaderboardVote(
              {
                sta: item.sta,
                prod: item.prod,
              },
              source.current.token,
            ),
          );
        } else if (item.isEventory) {
          apiArr.push(
            getLeaderboardEventory(
              item,
              source.current.token,
              opt.limit,
              opt.cursor,
              method,
            ),
          );
        } else {
          apiArr.push(
            getLeaderboard(
              item,
              source.current.token,
              opt.limit,
              opt.cursor,
              method,
            ),
          );
        }
      });
      const results = await Promise.all(apiArr);
      setLeaderboardData(results);
      setPolling(false);
    }, time);
  }, []);
  useEffect(() => {
    setLoading(true);
    const promiseList = [];
    source.current = axios.CancelToken.source();
    apiList.forEach((item: APIType) => {
      if (item.isCache) {
        promiseList.push(
          getLeaderboardCache(
            {
              sta: item.sta,
              prod: item.prod,
            },
            source.current.token,
          ),
        );
      } else if (item.isVote) {
        promiseList.push(
          getLeaderboardVote(
            {
              sta: item.sta,
              prod: item.prod,
            },
            source.current.token,
          ),
        );
      } else if (item.isEventory) {
        promiseList.push(
          getLeaderboardEventory(
            item,
            source.current.token,
            opt.limit,
            opt.cursor,
            method,
            (data: any) => {
              if (item.firstRender) {
                setLeaderboardData([data]);
                setLoading(false);
              }
            },
          ),
        );
      } else {
        promiseList.push(
          getLeaderboard(
            item,
            source.current.token,
            opt.limit,
            opt.cursor,
            method,
            (data: any) => {
              if (item.firstRender) {
                setLeaderboardData([data]);
                setLoading(false);
              }
            },
          ),
        );
      }
    });
    Promise.all(promiseList).then(async (results: any) => {
      setLeaderboardData(results);
      setLoading(false);
    });
    return () => {
      if (source.current) source.current.cancel();
      if (timeoutKey.current) clearTimeout(timeoutKey.current);
    };
  }, []);
  useEffect(() => {
    if (!polling && realTime > 0) {
      clearTimeout(timeoutKey.current);
      timeoutKey.current = 0;
      getDataRealTimeAPI(apiList, realTime, leaderboardData);
    }
  }, [polling, leaderboardData, apiList, realTime]);
  return { loading, leaderboardData };
};

export default useTypeApi;