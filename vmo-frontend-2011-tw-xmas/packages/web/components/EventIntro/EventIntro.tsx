// 2002-tw-alliance
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { SectionTypes } from '@vmo/web/constants/config';
import {
  useMinSectionTracking,
  createSectionViewAction,
} from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import { EventIntroHeaderStyled } from '@vmo/web/components/Tabs/styled';
import Images from '@vmo/web/themes/images';

interface EventIntroProps {
  title?: string;
  content?: string;
  iframe?: string;
  only?: boolean;
}

const EventIntro = styled.div`
  position: relative;
  max-width: 800px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom:5px;

  @media screen and (max-width: 800px) {
    height: 450px;
  }
`;

// const EventIntroTop = styled.div`
//   width: 100%;
//   height: 24.39vw;
//   background-image: url(${Images.yellow1}), url(${Images.block1});
//   background-repeat: no-repeat;
//   background-size: 100% 102%, 95% 102%;
//   background-position: top;
//   @media screen and (min-width: 800px) {
//     height: calc((800 / 828) * 202px);
//   }
// `;

// const EventIntroBottom = styled.div`
//   position: relative;
//   z-index: 0;
//   margin-top: -8px;
//   width: 100%;
//   height: 31.88vw;
//   background-image: url(${Images.yellow3}), url(${Images.cloud}),
//     url(${Images.block3});
//   background-repeat: no-repeat;
//   background-size: 100%, 100%, 95% 100%;
//   background-position: top;
//   @media screen and (min-width: 800px) {
//     height: calc((800 / 828) * 264px);
//   }
// `;

// const EventIntroHeader = styled.div`
//   background-image: url(${Images.eventTitle});
//   background-repeat: no-repeat;
//   background-position: top;
//   background-size: contain;
//   width: 100%;
//   height: 13.04vw;
//   color: #000000;
//   font-weight: 600;
//   text-align: center;
//   @media screen and (min-width: 800px) {
//     font-size: calc((800 / 828) * 28px);
//     height: calc((800 / 828) * 108px);
//   }
// `;

// const EventIntroContent = styled.div`
//   position: absolute;
//   z-index: 1;
//   width: 100%;
//   display: flex;
//   flex: 0 0 auto;
//   flex-direction: column;
//   justify-content: center;
//   align-content: center;
//   align-self: center;
//   min-height: 40.33vw;
//   font-size: 3.38vw;
//   font-weight: 600;
//   line-height: 1.43;
//   color: #fff;
//   background-image: url(${Images.yellow2}), url(${Images.block2});
//   background-repeat: repeat-y, repeat-y;
//   background-size: 100%, 95%;
//   background-position: top;
  
//   @media screen and (min-width: 800px) {
//     font-size: calc((800 / 828) * 28px);
//     min-height: calc((800 / 828) * 334px);
//   }
//   iframe {
//      margin-top: -12.8vw;
//     @media screen and (min-width: 800px) {
//       margin-top: calc((800 / 828) * -106px);
//     }
//   }
// `;

const Iframe: React.FC<{ src: string }> = ({ src }) => {

  
  useEffect(() => {
    const frame = document.querySelector('#frame') as HTMLElement;
    frame.style.overflow = 'hidden';
    window.addEventListener('message', e => {
      if (
        e.data.source &&
        e.data.source.indexOf('main-vision') === -1 &&
        e.data.size
      ) {
        frame.style.height = `${e.data.size.height}px`;
      }
    });
    return () => window.removeEventListener('message', () => {});
  }, []);




  return (
    <iframe
      id="frame"
      src={src}
      frameBorder="0"
      width="90%"
      scrolling="no"
      title="event description"
    />
  );
};

const EventIntroComponent: React.FC<EventIntroProps> = ({
  title,
  content,
  iframe,
  only,
}) => {
  const descriptionRef = useRef(null);
  useMinSectionTracking(descriptionRef, () => {
    trackingSource.track(createSectionViewAction(SectionTypes.description));
  });
  if (only) {
    return (
      <div ref={descriptionRef}>
        <Iframe src={iframe} />
      </div>
    );
  }
  if (iframe) {
    return (
      <EventIntro ref={descriptionRef}>
        {/* <EventIntroHeaderStyled>{title}</EventIntroHeaderStyled> */}
        <Iframe src={iframe} />
      </EventIntro>
    );
  }
  return (
    <EventIntro ref={descriptionRef}>
      {/* <EventIntroHeaderStyled>{title}</EventIntroHeaderStyled> */}
      {content ? (
        <EventIntroContent
          dangerouslySetInnerHTML={{
            __html: `${content.replace(/\n/g, '<br/>')}`,
          }}
        />
      ) : null}
    </EventIntro>
  );
};

export default EventIntroComponent;
