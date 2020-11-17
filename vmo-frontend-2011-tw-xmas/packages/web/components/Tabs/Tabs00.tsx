// 2008-tw-xmas 響叮噹
import React, { useContext, useState, useCallback, useEffect } from 'react';

import {
  getDefaultDay,
  getCurrentTransLateLang,
  numberFormatWithDigits,
} from '@vmo/share/utils';
import { Tab00xxTimeState, Iframes } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs00Styled,
  CountDownStyled,
  EventIntroDemo,
} from '@vmo/web/components/Tabs/styled';
import EventIntro from '@vmo/web/components/EventIntro';
import RankTitle from '@vmo/web/components/RankTitle';
import { api } from '@vmo/web/constants/api';
import { TranslationContext } from '@vmo/web/context/translationContext';
import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
import * as Conditions from '@vmo/web/constants/conditions';
import Images from '@vmo/web/themes/images';
import { sortTab00 } from '@vmo/ui/hooks/api/sort';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import Tabs110xx from '@vmo/web/components/Tabs/Tabs110xx';
import Tabs_intro1 from '@vmo/web/components/Tabs/Tabs_intro1';
import Tabs_qualify from '@vmo/web/components/Tabs/Tabs_qualify';

const Tabs00 = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_0')}/${translation.get('TAB_0_0')}`,
      ),
    );
  }, []);
  const [initialData, setInitialData] = useState({} || []);
  const tabs00Items = [
    {
      tabKey: Tab00xxTimeState[0].tabKey,
      title:(<div>{translation.get('TAB_0_0')}</div>),
      tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_0')}`,
      tabs: null,
      countdown: {
        startDate: Tab00xxTimeState[0].startDate,
        endDate: Tab00xxTimeState[0].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        iframe: `${
          Iframes.methods.t1
        }?lang=${getCurrentTransLateLang()}`,
      },
      leaderboard: {
        apis: [api.bell.s1],
        sortFunc: sortTab00,
        condition: Conditions.rank11xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab00xxTimeState[1].tabKey,
      title: (<div>{translation.get('TAB_0_1')}</div>),
      tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_1')}`,
      tabs: null,
      countdown: {
        startDate: Tab00xxTimeState[1].startDate,
        endDate: Tab00xxTimeState[1].endDate,
        dateFormat: 'MM/d (WN) hh:mm:ss',
        formatStr: translation.get('COUNTDOWN_COUNTING'),
      },
      eventIntro: {
        title: translation.get('EVENT_METHOD_TITLE'),
        iframe: Iframes.methods.t2,
      },
      leaderboard: {
        apis: [api.bell.s2],
        sortFunc: sortTab00,
        condition: Conditions.rank12xx,
        iframe: null,
        realTime: 1000,
        style: {},
      },
    },
    {
      tabKey: Tab00xxTimeState[2].tabKey,
      title: (<div>{translation.get('TAB_0_2')}</div>),
      tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_2')}`,
      tabs: () => <Tabs110xx />,
    },
    {
      tabKey: Tab00xxTimeState[3].tabKey,
      title: (<div>{translation.get('TAB_0_3')}</div>),
      tabText: `${translation.get('TAB_0')}/${translation.get('TAB_0_3')}`,
      tabs: () => <Tabs_qualify />,
    },
    {
      tabKey: Tab00xxTimeState[4].tabKey,
      title: (<div>{translation.get('EVENT_INTRO_TITLE')}</div>),
      tabText: `${translation.get('TAB_0')}/${translation.get('EVENT_INTRO_TITLE')}`,
      tabs: () => <Tabs_intro1 />,
    },
  ];
  const defaultTabIndex = getDefaultDay(Tab00xxTimeState, 0);
  return (
    <Tabs00Styled active={Tab00xxTimeState[defaultTabIndex].tabKey}>
      {tabs00Items.map(item => (
        <Tab
          key={`tab00_${item.tabKey}`}
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
              // title={item.eventIntro.title}
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
                initialData={initialData}
                condition={item.leaderboard!.condition}
                iframe={item.leaderboard.iframe}
                realTime={item.leaderboard!.realTime}
              />
            </LeaderboardContainerWrapper>
          ) : null}
        </Tab>
      ))}
    </Tabs00Styled>
  );
};

export default Tabs00;
