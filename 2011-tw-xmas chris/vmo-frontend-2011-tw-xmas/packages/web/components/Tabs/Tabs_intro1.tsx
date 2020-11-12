// xmas 活動說明1
import React, { useMemo, useEffect, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
import { Tabsintro1TimeState, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs_intro1Styled,
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

const Tabs_intro1 = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_0')}/${translation.get(
          'EVENT_INTRO_TITLE',
        )}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`,
      ),
    );
  }, []);
  const Tabs_intro1Items = [
    {
        tabKey: Tabsintro1TimeState[0].tabKey,
        title: (<div>{translation.get('EVENT_INTRO_METHOD_TITLE')}</div>),
        tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_METHOD_TITLE')}`,
        tabs: null,
        // rankTitle: translation.get('EVENT_INTRO_TITLE'),
        leaderboard: {
          iframe: Iframes.methods.intro1,
          style: {},
          sortFunc: data => data,
          condition:null
        },
        countdown:null,
        eventIntro:null,
      },
      {
        tabKey: Tabsintro1TimeState[1].tabKey,
        title: (<div>{translation.get('EVENT_INTRO_TIMELINE')}</div>),
        tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_TIMELINE')}`,
        tabs: null,
        // rankTitle: translation.get('EVENT_INTRO_TITLE'),
        leaderboard: {
          iframe: Iframes.methods.introtimeline,
          style: {},
          sortFunc: data => data,
          condition:null
        },
        countdown:null,
        eventIntro:null,
      },
      {
        tabKey: Tabsintro1TimeState[2].tabKey,
        title: (<div>{translation.get('EVENT_INTRO_GIFT')}</div>),
        tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}/${translation.get('EVENT_INTRO_GIFT')}`,
        tabs: null,
        // rankTitle: translation.get('EVENT_INTRO_TITLE'),
        leaderboard: {
          iframe: Iframes.methods.introgifts,
          style: {},
          sortFunc: data => data,
          condition:null
        },
        countdown:null,
        eventIntro:null,
      },
  ];
  const defaultTabIndex = getDefaultDay(Tabsintro1TimeState, 0);
  return (
    
    <Tabs_intro1Styled active={Tabsintro1TimeState[defaultTabIndex].tabKey}>
      {Tabs_intro1Items.map(item => (
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
                // apis={item.leaderboard!.apis}
                sortFunc={(data: any) => {
                  const result = item.leaderboard!.sortFunc(data);
                  return result || [];
                }}
                condition={item.leaderboard!.condition}
                iframe={item.leaderboard.iframe}
                // realTime={item.leaderboard!.realTime}
              />
            </LeaderboardContainerWrapper>
          ) : null}
        </Tab>
      ))}
    </Tabs_intro1Styled>
  );
};

export default Tabs_intro1;
