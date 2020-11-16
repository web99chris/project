// 2011-tw-xmas Chris
import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    useCallback,
  } from 'react';
  
  import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
  import { EventPage, Tab } from '@vmo/ui';
  import useStartRender from '@vmo/ui/hooks/useStartRender';
  import useTranslation from '@vmo/ui/hooks/useTranslation';
  import { useTrackPageEnter } from '@vmo/ui/hooks';
  import CoverVideo from '@vmo/ui/CoverVideo';
  import {
    Tab00xxTimeState,
    Iframes,
    SectionTypes,
    TrackTab,
    SpecialSection,
  } from '@vmo/web/constants/config';
  import GlobalStyles from '@vmo/web/themes/GlobalStyle';
  import { TabsRefContext } from '@vmo/ui/hooks/TabsRefContext';
  import {
    Tabs0Styled,
    CountDownStyled,
    ImageCache,
  } from '@vmo/web/components/Tabs/styled';
  import EventIntro from '@vmo/web/components/EventIntro';
  import RankTitle from '@vmo/web/components/RankTitle';
  import Tabs00 from '@vmo/web/components/Tabs/Tabs00';
  import Tabs10 from '@vmo/web/components/Tabs/Tabs10';
  import Tabs20 from '@vmo/web/components/Tabs/Tabs20';
  import Tabs30 from '@vmo/web/components/Tabs/Tabs30';
  // import Tabs40 from '@vmo/web/components/Tabs/Tabs40';
  // import Tabs50 from '@vmo/web/components/Tabs/Tabs50';
  import Loading from '@vmo/ui/Loading';
  import Videos from '@vmo/web/themes/videos';
  import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
  import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
  import { api } from '@vmo/web/constants/api';
  import * as Conditions from '@vmo/web/constants/conditions';
  import initReactFastclick from 'react-fastclick';
  import {
    useMinSectionTracking,
    createSectionViewAction,
    createTabClickAction,
  } from '17media-browser-spy';
  import { trackingSource } from '@vmo/share/17appTrack';
  import { TranslationContext } from '../context/translationContext';
  import Images from '../themes/images';
  
  initReactFastclick();
  
  const App: React.FC = () => {
    const tabsRef = useRef(null);
    useMinSectionTracking(tabsRef, () => {
      trackingSource.track(createSectionViewAction(SectionTypes.tabs));
    });
    const startRender = useStartRender();
    const translation = useTranslation(startRender);
    useEffect(() => {
      const initialTabIndex = getDefaultDay(Tab00xxTimeState, 0);
      trackingSource.track(createTabClickAction('', TrackTab[initialTabIndex]));
    }, []);
    useTrackPageEnter();
    if (!startRender) {
      return <div />;
    }
    if (translation.size === 0) {
      return <Loading color="#fe41cb" />;
    }
    const tab0Items = [
      {
        tabKey: Tab00xxTimeState[0].tabKey,
        title: null,
        tabText: TrackTab[0],
        tabs: () => <Tabs00 />,
        countdown: null,
        leaderboard:null
      },
      {
        tabKey: Tab00xxTimeState[1].tabKey,
        title: null,
        tabText: TrackTab[1],
        tabs: () => <Tabs10 />,
        countdown: null,
        leaderboard:null
      },
      {
        tabKey: Tab00xxTimeState[2].tabKey,
        title: null,
        tabText: TrackTab[2],
        tabs: () => <Tabs20 />,
        countdown: null,
        leaderboard:null
      },
      {
        tabKey: Tab00xxTimeState[3].tabKey,
        title: null,
        tabText: TrackTab[3],
        tabs: () => <Tabs30 />,
        countdown: null,
        leaderboard:null
      },
    ];
    const defaultTabIndex = getDefaultDay(Tab00xxTimeState, 0);
    return (
      <TranslationContext.Provider value={translation}>
        <TabsRefContext.Provider value={tabsRef}>
          <EventPage>
            <CoverVideo iframe={Iframes.masterVision.kv} />
            <div ref={tabsRef}>
              <Tabs0Styled active={Tab00xxTimeState[defaultTabIndex].tabKey}>
                {tab0Items.map(item => (
                  <Tab
                    key={`tab0_${item.tabKey}`}
                    tabKey={item.tabKey}
                    title={item.title}
                    tabText={item.tabText}
                    crown={null}
                    vs={null}
                    teamBg={null}
                  >
                    {item.tabs ? <item.tabs /> : null}
                    {item.countdown &&
                    item.countdown.startDate &&
                    item.countdown.endDate ? (
                      <CountDownStyled
                        startDate={item.countdown.startDate}
                        endDate={item.countdown.endDate}
                        dateFormat={item.countdown.dateFormat}
                        formatStr={item.countdown.formatStr}
                        isSameDay={item.countdown.isSameDay}
                      />
                    ) : null}
                    {item.eventIntro ? (
                      <EventIntro
                        title={item.eventIntro.title}
                        iframe={item.eventIntro.iframe}
                        only={item.eventIntro.only}
                      />
                    ) : null}
                    {item.rankTitle ? <RankTitle title={item.rankTitle} /> : null}
                    {item.leaderboard ? (
                      <LeaderboardContainerWrapper
                        styleInfo={item.leaderboard.style}
                      >
                        <LeaderboardContainer
                          apis={item.leaderboard!.apis}
                          sortFunc={item.leaderboard!.sortFunc}
                          apiCache={item.leaderboard!.apiCache}
                          condition={item.leaderboard!.condition}
                          iframe={item.leaderboard.iframe}
                          realTime={item.leaderboard!.realTime}
                        />
                      </LeaderboardContainerWrapper>
                    ) : null}
                  </Tab>
                ))}
              </Tabs0Styled>
            </div>
            <ImageCache />
            <GlobalStyles />
          </EventPage>
        </TabsRefContext.Provider>
      </TranslationContext.Provider>
    );
  };
  
  export default App;
  