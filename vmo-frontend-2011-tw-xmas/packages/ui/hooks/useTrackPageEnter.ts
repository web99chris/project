import { useEffect } from 'react';
import { createPageEnterAction } from '17media-browser-spy';
import { qs } from '@vmo/share/utils';
import { trackingSource } from '@vmo/share/17appTrack';

export const useTrackPageEnter = () => {
  useEffect(() => {
    const queryString = qs<{
      utm_campaign: string;
      utm_content: string;
      utm_medium: string;
      utm_source: string;
    }>();
    trackingSource.track(
      createPageEnterAction(
        queryString.utm_campaign || '',
        queryString.utm_content || '',
        queryString.utm_medium || '',
        queryString.utm_source || '',
      ),
    );
  }, []);
};
