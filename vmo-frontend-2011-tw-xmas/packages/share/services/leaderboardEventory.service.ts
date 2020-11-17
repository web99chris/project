import { getInstance } from '@vmo/share/services/axios';
import { LeaderboardItem } from '@vmo/share/interfaces/LeaderboardItem';
import { CancelToken } from 'axios';
import { getType } from '@vmo/share/utils';

const url = `/v1/leaderboards/eventory`;

export const getLeaderboardEventory = async (
  type: {
    sta: string;
    prod: string;
  },
  cancelToken: CancelToken,
  limit = 1000,
  cursor = '',
  method = 'POST',
  callBack = data => {},
): Promise<LeaderboardItem[]> => {
  const axios = getInstance();

  const body = { type: getType(type), count: limit, cursor };
  let res;
  if (method === 'POST') {
    res = await axios.post(url, body, { cancelToken });
  } else {
    res = await axios.get(url, {
      params: {
        containerID: getType(type),
        count: limit,
        cursor,
        onliveInfo: 1,
      },
      cancelToken,
    });
  }

  const { nextCursor, data } = res.data;

  if (callBack) {
    callBack(data);
  }

  if (nextCursor) {
    return [
      ...data,
      ...(await getLeaderboardEventory(
        type,
        cancelToken,
        limit,
        nextCursor,
        method,
      )),
    ];
  }
  return data;
};

export const getEventoryDetails = async (
  EventoryKey: {
    sta: string;
    prod: string;
  },
  subKeys: string,
  cancelToken: CancelToken,
): Promise<LeaderboardItem[]> => {
  const instance = getInstance();

  const res = await instance.get(url, {
    params: {
      containerID: getType(EventoryKey),
      count: 1000,
      'subkeys[]': subKeys,
    },
    cancelToken,
  });

  return res.data || [];
};
