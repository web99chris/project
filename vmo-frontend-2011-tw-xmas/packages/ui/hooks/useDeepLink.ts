import { open } from '@vmo/share/17app';
import { createProfileClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';

export const useDeepLink = (userID: string, openID: string, streamID = 0) => {
  const handleClickItem = () => {
    open(userID, openID, streamID);
    // Track
    trackingSource.track(
      createProfileClickAction(userID, streamID > 0, 'avatar'),
    );
  };

  return { handleClickItem };
};
