// 2008-tw-xmas 狂歡夜
import React, { useMemo, useEffect, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
import { Tab20TimeStatexx, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs20Styledxx,
  CountDownStyled
} from '@vmo/web/components/Tabs/styled';
import EventIntro from '@vmo/web/components/EventIntro';
import RankTitle from '@vmo/web/components/RankTitle';
import { api } from '@vmo/web/constants/api';
import { TranslationContext } from '@vmo/web/context/translationContext';
import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
import * as Conditions from '@vmo/web/constants/conditions';
import { sortTab00, sortTab200, sortTab210 } from '@vmo/ui/hooks/api/sort';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import Tabs_intro3 from '@vmo/web/components/Tabs/Tabs_intro3';
import Tabs_round1 from '@vmo/web/components/Tabs/Tabs_round1';
import Tabs_round2 from '@vmo/web/components/Tabs/Tabs_round2';
import Tabs_offline_final from '@vmo/web/components/Tabs/Tabs_offline_final';


const Tabs20 = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_2')}/${translation.get('TAB_2_0')}`,
      ),
    );
  }, []);
  const tabs10Items = [
    {
      tabKey: Tab20TimeStatexx[0].tabKey,
      title:  (<div>{translation.get('TAB_2_0')}</div>),
      tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_0')}`,
      tabs: () => <Tabs_round1 />,
      countdown:null,
      eventIntro:null,
      leaderboard:null
    },
    {
      tabKey: Tab20TimeStatexx[1].tabKey,
      title:  (<div>{translation.get('TAB_2_1')}</div>),
      tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_1')}`,
      tabs: () => <Tabs_round2 />,
      countdown:null,
      eventIntro:null,
      leaderboard:null
    },
    {
      tabKey: Tab20TimeStatexx[2].tabKey,
      title: (<div>{translation.get('TAB_2_2')}</div>),
      tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}`,
      tabs: () => <Tabs_offline_final />,
      countdown:null,
      eventIntro:null,
      leaderboard:null
    },
    {
      tabKey: Tab20TimeStatexx[3].tabKey,
      title: (<div>{translation.get('EVENT_INTRO_TITLE')}</div>),
      tabText: `${translation.get('TAB_2')}/${translation.get('EVENT_INTRO_TITLE')}`,
      tabs: () => <Tabs_intro3 />,
      countdown:null,
      eventIntro:null,
      leaderboard:null
    },
  ];
  const defaultTabIndex = getDefaultDay(Tab20TimeStatexx, 2);
  return (
    <Tabs20Styledxx active={Tab20TimeStatexx[defaultTabIndex].tabKey}>
      {tabs10Items.map(item => (
        <Tab
          key={`tab20_${item.tabKey}`}
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
            />
          ) : null}
          {item.eventIntro ? (
            <EventIntro
              title={item.eventIntro.title}
              iframe={item.eventIntro.iframe}
            />
          ) : null}
          {/* {item.vote ? (
            <VoteContiner>
              <VoteButton href={item.vote} />
            </VoteContiner>
          ) : null} */}
          {/* {item.rankTitle ? <RankTitle title={item.rankTitle} /> : null} */}
          {item.leaderboard ? (
            <LeaderboardContainerWrapper styleInfo={item.leaderboard.style}>
              <LeaderboardContainer
                apis={item.leaderboard!.apis}
                sortFunc={(data: any) => {
                  const result = item.leaderboard!.sortFunc(data);
                  return result || [];
                }}
                condition={item.leaderboard!.condition}
                iframe={item.leaderboard.iframe}
                realTime={item.leaderboard!.realTime}
                hashCheck={item.leaderboard!.hashCheck}
              />
            </LeaderboardContainerWrapper>
          ) : null}
        </Tab>
      ))}
    </Tabs20Styledxx>
  );
};

export default Tabs20;
