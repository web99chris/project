// xmas 出席
import React, { useMemo, useEffect, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
import { TabsqualifyTimeState, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs_qualifyStyled,
  CountDownStyled,
} from '@vmo/web/components/Tabs/styled';
import EventIntro from '@vmo/web/components/EventIntro';
import RankTitle from '@vmo/web/components/RankTitle';
import { api } from '@vmo/web/constants/api';
import { TranslationContext } from '@vmo/web/context/translationContext';
import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
import * as Conditions from '@vmo/web/constants/conditions';
import { sortTab00 } from '@vmo/ui/hooks/api/sort';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import { isNumericLiteral } from 'typescript';

const Tabs_qualify = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_0')}/${translation.get(
          'TAB_0_3',)}/${translation.get('TAB_0_3_0')}`,
      ),
    );
  }, []);
  const Tabs_qualifyItems = [
    {
        tabKey: TabsqualifyTimeState[0].tabKey,
        title: (<div>{translation.get('TAB_0_3_0')}</div>),
        tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}/${translation.get('TAB_0_3_0')}`,
        tabs: null,
        countdown: {
          startDate: TabsqualifyTimeState[0].startDate,
          endDate: TabsqualifyTimeState[0].endDate,
          dateFormat: 'MM/d (WN) hh:mm:ss',
          formatStr: translation.get('COUNTDOWN_COUNTING'),
        },
        eventIntro: {
          title: translation.get('EVENT_METHOD_TITLE'),
          iframe: Iframes.methods.streamer_qualify,
        },
        // rankTitle: translation.get('EVENT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.bell.streamer_qualify],
            sortFunc: sortTab00,
            condition: Conditions.rank141xx,
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
      {
        tabKey: TabsqualifyTimeState[1].tabKey,
        title: (<div>{translation.get('TAB_0_3_1')}</div>),
        tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}/${translation.get('TAB_0_3_1')}`,
        tabs: null,
        countdown: {
          startDate: TabsqualifyTimeState[1].startDate,
          endDate: TabsqualifyTimeState[1].endDate,
          dateFormat: 'MM/d (WN) hh:mm:ss',
          formatStr: translation.get('COUNTDOWN_COUNTING'),
        },
        eventIntro: {
          title: translation.get('EVENT_METHOD_TITLE'),
          iframe: Iframes.methods.fans_qualify,
        },
        // rankTitle: translation.get('EVENT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.bell.fans_qualify],
            sortFunc: sortTab00,
            condition: Conditions.rank142xx,
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
  ];
  const defaultTabIndex = getDefaultDay(TabsqualifyTimeState, 0);
  return (
    
    <Tabs_qualifyStyled active={TabsqualifyTimeState[defaultTabIndex].tabKey}>
      {Tabs_qualifyItems.map(item => (
        <Tab
          key={`tab10_${item.tabKey}`}
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
              />
            </LeaderboardContainerWrapper>
          ) : null}
        </Tab>
      ))}
    </Tabs_qualifyStyled>
  );
};

export default Tabs_qualify;
