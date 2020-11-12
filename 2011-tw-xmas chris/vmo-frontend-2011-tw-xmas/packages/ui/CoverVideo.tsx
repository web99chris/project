import React, { useRef } from 'react';
import styled from 'styled-components';

import { SectionTypes } from '@vmo/web/constants/config';
import {
  useMinSectionTracking,
  createSectionViewAction,
} from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import { CoverVideoIframeStyled } from '@vmo/web/components/Tabs/styled';

type Props = {
  src?: string;
  iframe?: string;
};

export const Cover = styled.video`
  width: 100%;
  height: 145.65vw;
  @media screen and (min-width: 800px) {
    height: calc((800 / 828) * 1206px);
  }
`;

const TrackDiv = styled.div``;

const CoverVideo: React.FC<Props> = ({ src, iframe }) => {
  const coverVideoRef = useRef(null);
  useMinSectionTracking(coverVideoRef, () => {
    trackingSource.track(createSectionViewAction(SectionTypes.kv));
  });
  if (iframe) {
    return (
      <TrackDiv ref={coverVideoRef}>
        <CoverVideoIframeStyled>
          <iframe
            id="masterVisionIrame"
            src={iframe}
            frameBorder="0"
            width="100%"
            height="100%"
            scrolling="no"
            title="master vision"
          />
        </CoverVideoIframeStyled>
      </TrackDiv>
    );
  }
  return (
    <TrackDiv ref={coverVideoRef}>
      {/* <Cover autoPlay muted playsInline loop> */}
        <source src={src} />
        {/* <source src={src} type="video/mp4" /> */}
      {/* </Cover> */}
    </TrackDiv>
  );
};

export default CoverVideo;
