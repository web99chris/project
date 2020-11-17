import { CancelToken } from 'axios';

import { getUUID } from '@vmo/share/utils';
import { getInstanceCache } from '@vmo/share/services/axios';
import { LeaderboardItem } from '@vmo/share/interfaces/LeaderboardItem';

const defaultUrl = `/campaign/cache/`;

export const getLeaderboardCache = async (
  uuid: {
    sta: string;
    prod: string;
  },
  cancelToken: CancelToken,
): Promise<LeaderboardItem[]> => {
  const instance = getInstanceCache();
  const currentUrl = `${defaultUrl}${getUUID(uuid)}`;

  const res = await instance.get(currentUrl, { cancelToken });

  return res.data || [];
};
