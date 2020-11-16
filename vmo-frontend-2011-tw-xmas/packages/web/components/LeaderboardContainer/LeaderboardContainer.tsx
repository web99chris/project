// 2002-tw-alliance
import React, {
  useState,
  memo,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useContext,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { now } from '@17media/dad';

import { TabsRefContext } from '@vmo/ui/hooks/TabsRefContext';
import Loading from '@vmo/ui/Loading';
import useQueryString from '@vmo/ui/hooks/useQueryString';
import useTypeApi from '@vmo/ui/hooks/api/useTypeApi';
import { WrapperedProps } from '@vmo/ui/hoc/WithLeaderboard/WithLeaderboard';
import {
  SectionTypes,
  LocakTotalTime,
  LocakTotalTime2,
} from '@vmo/web/constants/config';
import {
  useMinSectionTracking,
  createSectionViewAction,
} from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import { BackToTop } from '@vmo/web/components/Tabs/styled';
import { api } from '@vmo/web/constants/api';
import * as Conditions from '@vmo/web/constants/conditions';
import { Leaderboard } from '../leaderboard';
import images from '../../themes/images';
import { MissionPanelContext } from '../../context/missionPanelContext';
import { BonusPanelContext } from '../../context/bonusPanelContext';

export const LeaderboardContainerWrapper = styled.div<{
  styleInfo?: { marginTop?: number };
}>`
  margin-top: ${props =>
    props.styleInfo.marginTop ? `${props.styleInfo.marginTop}vw` : 0};
  @media screen and (min-width: 800px) {
    margin-top: ${props =>
      props.styleInfo.marginTop
        ? `calc((800 / 828) * ${((props.styleInfo.marginTop * 414) / 100) *
            2}px)`
        : 0};
  }
`;

const VideoContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-content: center;
  background: rgba(0, 0, 0, 0.95);
  top: 0;
  left: 0;
  video {
    width: 100%;
    height: 100%;
    max-width: 800px;
    min-height: 100vh;
  }
  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 1px solid #816530;
    border-radius: 50%;
  }
`;

const Iframe: React.FC<{ src: string }> = ({ src }) => {
  const descriptionRef = useRef(null);
  useMinSectionTracking(descriptionRef, () => {
    trackingSource.track(createSectionViewAction(SectionTypes.description));
  });
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
      ref={descriptionRef}
      id="frame"
      src={src}
      frameBorder="0"
      width="100%"
      scrolling="no"
      title="event description"
    />
  );
};

const RenderVideo = ({ src, poster, setShowVideo }) => {
  const appBody = document.querySelector('body');
  /* eslint-disable */
  const content = (
    <VideoContainer>
      <video src={src} controls autoPlay poster={poster} />
      <img
        src={images.closeButton}
        alt=""
        onClick={() => setShowVideo({ isShow: false, poster: '', video: '' })}
      />
    </VideoContainer>
  );
  /* eslint-enable */
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = 'auto';
    };
  }, []);
  return createPortal(content, appBody);
};

const checkLockTime = () => {
  const nowTime = now() * 1000;
  const locakTime = Date.parse(LocakTotalTime);
  if (nowTime >= locakTime) {
    return true;
  }
  return false;
};

const checkLockTime2 = () => {
  const nowTime = now() * 1000;
  const locakTime = Date.parse(LocakTotalTime2);
  if (nowTime >= locakTime) {
    return true;
  }
  return false;
};

const LeaderboardContainer: React.FC<WrapperedProps> = ({
  apis,
  sortFunc = data => data,
  realTime = 0,
  hashCheck = true,
  iframe,
  condition,
  initialData,
}) => {
  const tabsRef = useContext(TabsRefContext);
  const [showPanelID, setShowPanelID] = useState<string>('');
  const [missionDetails, setMissionDetails] = useState([]);
  const [showPanelID2, setShowPanelID2] = useState<string>('');
  const [BonusDetails, setBonusDetails] = useState([]);
  // let finalApis = apis;
  // let finalConditaion = condition;
  // if (apis && apis[0] && apis[0] === api.total.attend.before) {
  //   if (checkLockTime2()) {
  //     finalApis = [api.total.attend.after, api.total.bonus];
  //     finalConditaion = Conditions.rank512;
  //   } else if (checkLockTime()) {
  //     finalApis = [api.total.attend.after, api.total.bonus];
  //     finalConditaion = Conditions.rank511;
  //   } else {
  //     finalApis = [api.total.attend.before, api.total.bonus];
  //     finalConditaion = Conditions.rank0;
  //   }
  // }
  const { loading, leaderboardData } = useTypeApi(
    // finalApis,
    apis,
    'GET',
    realTime,
    hashCheck,
    initialData,
  );
  useQueryString(loading);
  /* eslint-disable */
  const props = useMemo(
    () => ({
      leaderboardData: sortFunc(leaderboardData),
      condition,
      isLocked: false,
    }),
    [leaderboardData, condition],
    
  );
 
  /* eslint-enable */
  if (loading) {
    return (
      <div id="loading-container">
        <Loading color="#fe41cb" />
      </div>
    );
  }
  if (iframe) {
    return (
      <>
        <div>
          <Iframe src={iframe} />
        </div>
      </>
    );
  }

  return (
    <>
    <MissionPanelContext.Provider
      value={{ showPanelID, setShowPanelID, missionDetails, setMissionDetails }}
    >
      <Leaderboard {...props} />


    </MissionPanelContext.Provider>

  </>
  );


};

export default memo(LeaderboardContainer);
