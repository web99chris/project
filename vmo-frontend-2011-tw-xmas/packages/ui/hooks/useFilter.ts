import { useState, useEffect } from 'react';
import { createSearchAction } from '17media-browser-spy';

import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { debounce } from '@vmo/share/utils';
import { trackingSource } from '@vmo/share/17appTrack';

export const useFilter = (initialData: LeaderboardItemInterface[]) => {
  const [data, setData] = useState<LeaderboardItemInterface[]>(initialData);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleOnChange = debounce(value => {
    if (value) {
      let filterData = [];
      filterData = initialData.filter(item => {
        const name =
          item!.userInfo!.displayName || item!.userInfo!.openID || '';
        return name!.toLowerCase().includes(value.trim().toLowerCase());
      });
      setData(filterData);
      setIsFiltering(true);
      // Track
      trackingSource.track(createSearchAction(value, filterData.length));
    } else {
      setData(initialData);
      setIsFiltering(false);
    }
  }, 500);
  // sync the new state of the initialData
  useEffect(() => {
    if (isFiltering) {
      setData(preState => {
        let newState = [];
        if (
          preState &&
          preState.length > 0 &&
          (initialData && initialData.length > 0)
        ) {
          newState = preState.map(item => {
            return { ...initialData.find(x => x.userID === item.userID) };
          });
        }
        newState.sort((l, n) => n.score - l.score);
        return newState;
      });
    } else {
      setData(initialData);
    }
  }, [initialData, isFiltering]);

  return { data, handleOnChange };
};
