import { useEffect } from 'react';

import { qs } from '@vmo/share/utils';

const useQueryString = (loading: boolean) => {
  const queryString = qs<{
    streamerUserID: string;
  }>();
  useEffect(() => {
    if (queryString.streamerUserID && loading) {
      const target = document.getElementById(`loading-container`);
      target.scrollIntoView();
    }
  }, [loading, queryString.streamerUserID]);
};

export default useQueryString;
