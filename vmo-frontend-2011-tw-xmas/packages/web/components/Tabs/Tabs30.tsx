// 2008-tw-xmas 總榜
import React, { useMemo, useEffect, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
import { Tab30TimeStatexx, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import { Tabs30Styledxx, CountDownStyled } from '@vmo/web/components/Tabs/styled';
import EventIntro from '@vmo/web/components/EventIntro';
import RankTitle from '@vmo/web/components/RankTitle';
import { api } from '@vmo/web/constants/api';
import { TranslationContext } from '@vmo/web/context/translationContext';
import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
import * as Conditions from '@vmo/web/constants/conditions';
import { sortTab30,sortTab40 } from '@vmo/ui/hooks/api/sort';
import { sortTab00 } from '@vmo/ui/hooks/api/sort';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import Tabs_intro4 from '@vmo/web/components/Tabs/Tabs_intro4';

const Tabs30 = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_3')}/${translation.get('TAB_3_0')}`,
      ),
    );
  }, []);
  const tabs30Items = [
    {
      tabKey: Tab30TimeStatexx[0].tabKey,
      title: (<div>{translation.get('TAB_3_0')}</div>),
      tabText: `${translation.get('TAB_3')}/${translation.get('TAB_3_0')}`,
      tabs: null,
      countdown: {
        startDate: Tab30TimeStatexx[0].startDate,
        endDate: Tab30TimeStatexx[0].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t9,
      },
      // rankTitle: translation.get('TAB_0_0'),
      leaderboard: {
        apis: [api.xmasfinal.streamer,api.xmasfinal.bonus],
        sortFunc: sortTab30,
        condition: Conditions.rank411xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab30TimeStatexx[1].tabKey,
      title: (<div>{translation.get('TAB_3_1')}</div>),
      tabText: `${translation.get('TAB_3')}/${translation.get('TAB_3_1')}`,
      tabs: null,
      countdown: {
        startDate: Tab30TimeStatexx[1].startDate,
        endDate: Tab30TimeStatexx[1].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t10,
      },
      // rankTitle: translation.get('TAB_0_0'),
      leaderboard: {
        apis: [api.xmasfinal.fans],
        sortFunc: sortTab00,
        condition: Conditions.rank412xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab30TimeStatexx[2].tabKey,
      title:  (<div>{translation.get('TAB_3_2')}</div>),
      tabText: `${translation.get('TAB_3')}/${translation.get('TAB_3_2')}`,
      // rankTitle: translation.get('EVENT_INTRO_TITLE'),
      leaderboard: {
        iframe: Iframes.methods.prize,
        style: {},
        sortFunc: data => data,
      }
    },
    {
      tabKey: Tab30TimeStatexx[3].tabKey,
      title: (<div>{translation.get('EVENT_INTRO_TITLE')}</div>),
      tabText: `${translation.get('TAB_3')}/${translation.get('EVENT_INTRO_TITLE')}`,
      tabs: () => <Tabs_intro4 />,
    },
  ];
  const defaultTabIndex = getDefaultDay(Tab30TimeStatexx, 0);
  return (
    <Tabs30Styledxx active={Tab30TimeStatexx[defaultTabIndex].tabKey}>
      {tabs30Items.map(item => (
        <Tab
          key={`tab30_${item.tabKey}`}
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
              />
            </LeaderboardContainerWrapper>
          ) : null}
        </Tab>
      ))}
    </Tabs30Styledxx>
  );
};

export default Tabs30;
