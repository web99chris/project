// xmas 第三層tab測試
import React, { useMemo, useEffect, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
import { Tab110xxTimeState, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs110Styledxx,
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


const Tabs110xx = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_1')}/${translation.get(
          'TAB_0_2',
        )}/${translation.get('TAB_0_2_0')}`,
      ),
    );
  }, []);
  const Tabs_110xxItems = [
    {
      tabKey: Tab110xxTimeState[0].tabKey,
      title: (<div>{translation.get('TAB_0_2_0')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get(
        'TAB_0_2',
      )}/${translation.get('TAB_0_2_0')}`,
      tabs: null,
      countdown: {
        startDate: Tab110xxTimeState[0].startDate,
        endDate: Tab110xxTimeState[0].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t3,
      },
      // rankTitle: translation.get('TAB_1_1_0'),
      leaderboard: {
        apis: [api.bell.s3_1],
        sortFunc: sortTab00,
        condition: Conditions.rank131xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab110xxTimeState[1].tabKey,
      title: (<div>{translation.get('TAB_0_2_1')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get(
        'TAB_0_2',
      )}/${translation.get('TAB_0_2_1')}`,
      tabs: null,
      countdown: {
        startDate: Tab110xxTimeState[1].startDate,
        endDate: Tab110xxTimeState[1].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t3,
      },
      // rankTitle: translation.get('TAB_1_1_1'),
      leaderboard: {
        apis: [api.bell.s3_2],
        sortFunc: sortTab00,
        condition: Conditions.rank132xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab110xxTimeState[2].tabKey,
      title: (<div>{translation.get('TAB_0_2_2')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get(
        'TAB_0_2',
      )}/${translation.get('TAB_0_2_2')}`,
      countdown: {
        startDate: Tab110xxTimeState[2].startDate,
        endDate: Tab110xxTimeState[2].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t3,
      },
      // rankTitle: translation.get('TAB_1_1_2'),
      leaderboard: {
        apis: [api.bell.s3_3],
        sortFunc: sortTab00,
        condition: Conditions.rank133xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab110xxTimeState[3].tabKey,
      title: (<div>{translation.get('TAB_0_2_3')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get(
        'TAB_0_2',
      )}/${translation.get('TAB_0_2_3')}`,
      countdown: {
        startDate: Tab110xxTimeState[3].startDate,
        endDate: Tab110xxTimeState[3].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t3,
      },
      // rankTitle: translation.get('TAB_1_1_2'),
      leaderboard: {
        apis: [api.bell.s3_4],
        sortFunc: sortTab00,
        condition: Conditions.rank134xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab110xxTimeState[4].tabKey,
      title: (<div>{translation.get('TAB_0_2_4')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get(
        'TAB_0_2',
      )}/${translation.get('TAB_0_2_4')}`,
      countdown: {
        startDate: Tab110xxTimeState[4].startDate,
        endDate: Tab110xxTimeState[4].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t3_1,
      },
      // rankTitle: translation.get('TAB_1_1_4'),
      leaderboard: {
        apis: [api.bell.s3_5],
        sortFunc: sortTab00,
        condition: Conditions.rank135xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
  ];
  const defaultTabIndex = getDefaultDay(Tab110xxTimeState, 0);
  return (
    
    <Tabs110Styledxx active={Tab110xxTimeState[defaultTabIndex].tabKey}>
      {Tabs_110xxItems.map(item => (
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
    </Tabs110Styledxx>
  );
};

export default Tabs110xx;
