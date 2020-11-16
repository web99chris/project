import * as tunnel from './17liveMessageTunnel';

declare const java17WebObject: any;

function redirect(url: string) {
  location.href = url; // eslint-disable-line no-restricted-globals
}

export function open(userID: string, openID: string, streamID = 0) {
  const page = 'profile';
  const isMobile = /Mobile/.test(navigator.userAgent);
  if (isMobile) {
    const isAndroid =
      /Android/.test(navigator.userAgent) &&
      typeof java17WebObject !== 'undefined';

    if (isAndroid) {
      if (streamID > 0) {
        redirect(`http://17.media/share/live/${streamID}`);
        return;
      }
      java17WebObject.openProfile(userID, page);
      return;
    }

    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);

    if (isIOS) {
      if (streamID > 0) {
        redirect(`media17://live/${streamID}`);
        return;
      }
      redirect(`media17://u/${userID}`);
      return;
    }
  }

  if (window.parent !== window) {
    // 17.live
    tunnel.open(openID);
    return;
  }

  if (streamID > 0) {
    window.open(`http://17.media/share/live/${streamID}`);
  }
}
