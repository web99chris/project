import { getInstance } from '@vmo/share/services/axios';
import { LeaderboardItem } from '@vmo/share/interfaces/LeaderboardItem';
import { CancelToken } from 'axios';
import { getType } from '@vmo/share/utils';

export const getLeaderboard = async (
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

  const url = `/v1/leaderboards/mktevent`;
  const body = { type: getType(type), count: limit, cursor };
  let res;
  if (method === 'POST') {
    res = await axios.post(url, body, { cancelToken });
  } else {
    res = await axios.get(url, {
      params: {
        type: getType(type),
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
      ...(await getLeaderboard(type, cancelToken, limit, nextCursor, method)),
    ];
  }
  return data;
};
