// 2008-tw-xmas 平安夜
import React, { useMemo, useEffect, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang } from '@vmo/share/utils';
import { Tab10TimeStatexx, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import { Tabs10Styled, CountDownStyled } from '@vmo/web/components/Tabs/styled';
import EventIntro from '@vmo/web/components/EventIntro';
import { api } from '@vmo/web/constants/api';
import { TranslationContext } from '@vmo/web/context/translationContext';
import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
import * as Conditions from '@vmo/web/constants/conditions';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import Tabs_intro2 from '@vmo/web/components/Tabs/Tabs_intro2';
import Tabs_step4 from '@vmo/web/components/Tabs/Tabs_step4';

const Tabs10 = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_1')}/${translation.get('TAB_1_0')}`,
      ),
    );
  }, []);
  const tabs10Items = [
    {
      tabKey: Tab10TimeStatexx[0].tabKey,
      countdown:null,
      eventIntro:null,
      title: (<div>{translation.get('TAB_1_0')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_0')}`,
      tabs: () => <Tabs_step4 />,
      leaderboard:null
    },
    {
      tabKey: Tab10TimeStatexx[1].tabKey,
      countdown:null,
      eventIntro:null,
      title: (<div>{translation.get('EVENT_INTRO_TITLE')}</div>),
      tabText: `${translation.get('TAB_1')}/${translation.get('EVENT_INTRO_TITLE')}`,
      tabs: () => <Tabs_intro2 />,
      leaderboard:null
    },
  ];
  const defaultTabIndex = getDefaultDay(Tab10TimeStatexx, 0);
  return (
    <Tabs10Styled active={Tab10TimeStatexx[defaultTabIndex].tabKey}>
      {tabs10Items.map(item => (
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
    </Tabs10Styled>
  );
};

export default Tabs10;
