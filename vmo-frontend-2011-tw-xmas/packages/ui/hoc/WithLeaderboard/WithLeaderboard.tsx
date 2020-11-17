// 2002-tw-alliance
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { now } from '@17media/dad';

import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { ConditionInterface } from '@vmo/web/constants/conditions';
import { getLeaderboard } from '@vmo/share/services/leaderboard.service';
import { getLeaderboardCache } from '@vmo/share/services/leaderboardCache.service';
import { api } from '@vmo/web/constants/api';
import Loading from '@vmo/ui/Loading';
import { qs } from '@vmo/share/utils';
import {
  attendTime,
  anchorAttendCount,
  fansAttendCount,
} from '@vmo/web/constants/config';

type ParamTypeForCache = { sta: string; prod: string };

export interface WrapperedProps {
  iframe?: string;
  condition: ConditionInterface;
  apis?: ParamTypeForCache[];
  sortFunc?: Function;
  realTime?: number;
  apiCache?: boolean;
  hashCheck?: boolean;
  initialData?: any;
}
export interface WrapperProps {
  type?: string | ParamTypeForCache;
  apis?: ParamTypeForCache[];
  sortFunc?: Function;
  filterType?: string;
  limit?: number;
  cursor?: string;
  apiCache?: boolean;
  withTeamInfo?: boolean;
  iframe?: string;
  condition?: ConditionInterface;
  callBack?: Function;
  team?: string;
  realTime?: number;
}

const checkAttendTime = () => {
  const attendTimeData = new Date(attendTime);
  const nowTime = now() * 1000;
  const attendStart = nowTime - attendTimeData.getTime() >= 0;
  return attendStart;
};

const hashCode = str => {
  let h = 0;
  const len = str.length;
  const t = 2147483648;
  for (let i = 0; i < len; i += 1) {
    h = 31 * h + str.charCodeAt(i);
    if (h > 2147483647) h %= t;
  }
  return h;
};

const getTeamUserIDs = (data: Array<LeaderboardItemInterface>) => {
  return data.map(item => item.userID);
};

const getRegionUserIDs = async () => {
  // Region
  const queryString = qs<{
    copy: string;
  }>();
  let regionUserIDs = [];
  if (queryString.copy) {
    regionUserIDs = await getLeaderboardCache(
      api.copy,
      axios.CancelToken.source().token,
    );
  }
  return regionUserIDs;
};

const WithLeaderboard = () => (
  WrapperedComponent: React.ComponentType<WrapperedProps>,
): React.FC<WrapperProps> => {
  return function WrapperComponent({
    type,
    filterType,
    limit = 1000,
    cursor = '',
    apiCache = false,
    withTeamInfo = false,
    callBack = null,
    team = '',
    ...optProps
  }) {
    const source = useRef<CancelTokenSource>();
    const [attend, setAttend] = useState(checkAttendTime());
    const queryString = qs<{
      streamerUserID: string;
    }>();
    const timeoutKey = useRef(0);
    const getDataRealTimeAPI = useCallback(
      async (apiType, time, previousData = null) => {
        timeoutKey.current = setTimeout(async () => {
          if (
            apiType === api.who ||
            apiType === api.urbanArchitect.r2 ||
            apiType === api.fans
          ) {
            const apiArr = [
              getLeaderboard(
                apiType,
                source.current.token,
                limit,
                cursor,
                'GET',
              ),
            ];
            if (apiType === api.fans && attend) {
              apiArr.push(
                getLeaderboard(
                  api.fansAttend,
                  source.current.token,
                  limit,
                  cursor,
                  'GET',
                ),
              );
            }
            const results = await Promise.all(apiArr);
            const finalData = sortData(
              results[0],
              apiType,
              callBack,
              null,
              results[1],
            );
            if (!attend && checkAttendTime() && apiType === api.fans) {
              setAttend(true);
            }
            if (
              hashCode(JSON.stringify(finalData)) !==
              hashCode(JSON.stringify(previousData))
            ) {
              setLeaderboardData(finalData);
            }
            getDataRealTimeAPI(apiType, time, finalData);
          } else {
            const apiArr = [
              getLeaderboard(
                apiType,
                source.current.token,
                limit,
                cursor,
                'GET',
              ),
              getLeaderboard(
                api.metaInfo,
                source.current.token,
                limit,
                cursor,
                'GET',
              ),
            ];
            if (apiType === api.anchor && attend) {
              apiArr.push(
                getLeaderboard(
                  api.anchorAttend,
                  source.current.token,
                  limit,
                  cursor,
                  'GET',
                ),
              );
            }
            const results = await Promise.all(apiArr);
            const finalData = sortData(
              results[0],
              apiType,
              callBack,
              results[1],
              results[2],
            );
            if (!attend && checkAttendTime() && apiType === api.anchor) {
              setAttend(true);
            }
            if (
              hashCode(JSON.stringify(finalData)) !==
              hashCode(JSON.stringify(previousData))
            ) {
              setLeaderboardData(finalData);
            }
            getDataRealTimeAPI(apiType, time, finalData);
          }
        }, time);
      },
      [attend, callBack, cursor, limit],
    );
    const getCacheDataRealTimeAPI = useCallback(
      async (apiType, time) => {
        timeoutKey.current = setTimeout(async () => {
          const regionUserIDs = await getRegionUserIDs();
          const realTimeResult = await getLeaderboardCache(
            apiType,
            source.current.token,
          );
          setLeaderboardData(
            sortDataCache(
              realTimeResult,
              apiType,
              null,
              filterType,
              team,
              callBack,
              regionUserIDs,
            ),
          );
          getCacheDataRealTimeAPI(apiType, time);
        }, time);
      },
      [callBack, filterType, team],
    );
    useEffect(() => {
      if (type) {
        source.current = axios.CancelToken.source();
        if (apiCache) {
          const cacheType = type as ParamTypeForCache;
          if (withTeamInfo) {
            Promise.all([
              getLeaderboardCache(cacheType, source.current.token),
              getLeaderboardCache(api.teamInfo.team1, source.current.token),
              getLeaderboardCache(api.teamInfo.team2, source.current.token),
              getLeaderboardCache(api.teamInfo.team3, source.current.token),
              getLeaderboardCache(api.teamInfo.team4, source.current.token),
            ]).then(async (result: any) => {
              const regionUserIDs = await getRegionUserIDs();
              let team1 = [];
              let team2 = [];
              let team3 = [];
              let team4 = [];
              if (result[1] && result[1].data) {
                team1 = getTeamUserIDs(result[1].data);
              }
              if (result[2] && result[2].data) {
                team2 = getTeamUserIDs(result[2].data);
              }
              if (result[3] && result[3].data) {
                team3 = getTeamUserIDs(result[3].data);
              }
              if (result[4] && result[4].data) {
                team4 = getTeamUserIDs(result[4].data);
              }
              setLeaderboardData(
                sortDataCache(
                  result[0] || [],
                  cacheType,
                  {
                    team1,
                    team2,
                    team3,
                    team4,
                  },
                  null,
                  null,
                  null,
                  regionUserIDs,
                ),
              );
            });
          } else {
            getLeaderboardCache(cacheType, source.current.token).then(
              async (result: any) => {
                setLeaderboardData(
                  sortDataCache(
                    result,
                    cacheType,
                    null,
                    filterType,
                    team,
                    callBack,
                    null,
                  ),
                );
                // if (realTime > 0) {
                //   getCacheDataRealTimeAPI(cacheType, realTime);
                // }
              },
            );
          }
        } else {
        }
      }
      return () => {
        if (source.current) source.current.cancel();
        if (timeoutKey.current) clearTimeout(timeoutKey.current);
      };
    }, [
      apiCache,
      callBack,
      cursor,
      filterType,
      getDataRealTimeAPI,
      getCacheDataRealTimeAPI,
      limit,
      team,
      type,
      withTeamInfo,
      attend,
    ]);

    useEffect(() => {
      if (queryString.streamerUserID) {
        const target = document.getElementById(`loading-container`);
        target.scrollIntoView();
      }
    }, [queryString.streamerUserID]);

    const WrapperedComponentProps = {};

    return (
      <WrapperedComponent {...WrapperedComponentProps} {...(optProps as any)} />
    );
  };
};

export default WithLeaderboard;
