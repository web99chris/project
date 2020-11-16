// xmas 階段四 分組
import React, { useMemo, useEffect, useState, useCallback, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang,conditionMatch,numberFormatWithDigits } from '@vmo/share/utils';
import { Tabs_step4TimeState, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs_step4Styled,
  CountDownStyled,
  RankBoard,
  RankBoardItem,
  RankNumber,
  CrownStyled,
  VSStyled,
  ScoreTeamBg,
} from '@vmo/web/components/Tabs/styled';
import EventIntro from '@vmo/web/components/EventIntro';
import RankTitle from '@vmo/web/components/RankTitle';
import { api } from '@vmo/web/constants/api';
import { TranslationContext } from '@vmo/web/context/translationContext';
import LeaderboardContainer from '@vmo/web/components/LeaderboardContainer';
import { LeaderboardContainerWrapper } from '@vmo/web/components/LeaderboardContainer/LeaderboardContainer';
import * as Conditions from '@vmo/web/constants/conditions';
import Images from '@vmo/web/themes/images';
import { sortTab100 } from '@vmo/ui/hooks/api/sort';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';



type initialScoresType = {
  sock: number;
  candy: number;
  ginger: number;
};

const initialScores = {
  sock: 0,
  candy: 0,
  ginger: 0,
};


const board = [
  {
    value: 55000000,
    conditionValue: 'score',
    filterCondition: '<=',
    rank: 1,
  },
  {
    value: 40000000,
    conditionValue: 'score',
    filterCondition: '<=',
    rank: 2,
  },
  {
    value: 30000000,
    conditionValue: 'score',
    filterCondition: '<=',
    rank: 3,
  },
  {
    value: 15000000,
    conditionValue: 'score',
    filterCondition: '<=',
    rank: 4,
  },
  {
    value: 0,
    conditionValue: 'score',
    filterCondition: '<=',
    rank: 5,
  },
];



const getRank = (team, scores) => {
  let rank = !scores.sock && !scores.candy && !scores.ginger ? -1 : 2;
  const newScores = Object.entries(scores)
    .sort((a: any, b: any) => b[1] - a[1])
    .map(o => ({
      [o[0]]: o[1],
    }));
  newScores.forEach((item, index) => {
    if (rank !== -1 && item[team] !== undefined) {
      rank = index;
    }
  });
  return rank;
};

const getRanks = (team, scores) => {
  const rank = getRank(team, scores);
  switch (rank) {
    case -1: {
      return {
        inactive: null,
        active: null,
      };
    }
    case 0: {
      return {
        inactive: <RankNumber bg={Images.no1Off} />,
        active: <RankNumber bg={Images.no1On} />,
      };
    }
    case 1: {
      return {
        inactive: <RankNumber bg={Images.no2Off} />,
        active: <RankNumber bg={Images.no2On} />,
      };
    }
    case 2:
    default: {
      return {
        inactive: <RankNumber bg={Images.no3Off} />,
        active: <RankNumber bg={Images.no3On} />,
      };
    }
  }
};

const getCrown = (team, scores) => {
  const rank = getRank(team, scores);
  switch (rank) {
    case -1: {
      return {
        inactive: null,
        active: null,
      };
    }
    case 0: {
      return {
        inactive: <CrownStyled bg={Images.crownOff} />,
        active: <CrownStyled bg={Images.crownOn} />,
      };
    }
    case 1:{
      return {
        inactive: null,
        active: null,
      };
    }
    case 2:
    default: {
      return {
        inactive: null,
        active: null,
      }
    }
  }
};

const getCondition = (team, scores) => {
  const rank = getRank(team, scores);
  switch (rank) {
    case -1:
    default: {
      return Conditions.rank0;
    }
    case 0: {
      return Conditions.rank211xx;
    }
    case 1: {
      return Conditions.rank212xx;
    }
    case 2: {
      return Conditions.rank213xx;
    }
  }
};


const Tabs_step4 = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_1')}/${translation.get(
          'TAB_1_1',
        )}/${translation.get('TAB_1_1_0')}`,
      ),
    );
  }, []);

  const [initialData, setInitialData] = useState({} || []);
  const [scores, setScores] = useState(initialScores);
  const handleScores = useCallback((newScores: initialScoresType) => {
    setScores(newScores);
  }, []);

  const Tabs_step4Items = [
    {
        tabKey: Tabs_step4TimeState[0].tabKey,
        title: (
          <div>
            <div>{translation.get('TAB_1_1_0')}</div>
            <div>{numberFormatWithDigits(scores.sock, 0)}</div>
          </div>
        ),
        tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_0')}`,
        tabs: null,
        ranks: getRanks('sock', scores),
        crown: getCrown('sock', scores),
        vs: <VSStyled>VS</VSStyled>,
        teamBg: <ScoreTeamBg />,
        eventIntro: {
          // title: translation.get('EVENT_METHOD_TITLE'),
          iframe: Iframes.methods.t4,
        },
        countdown: {
            startDate: Tabs_step4TimeState[0].startDate,
            endDate: Tabs_step4TimeState[0].endDate,
            dateFormat: 'MM/d (WN) hh:mm:ss',
            formatStr: translation.get('COUNTDOWN_COUNTING'),
          },
        // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.eve.r4_1, api.eve.r4_2, api.eve.r4_3],
            team: 'sock',
            sortFunc: sortTab100,
            condition: getCondition('sock', scores),
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
      {
        tabKey: Tabs_step4TimeState[1].tabKey,
        title: (
          <div>
            <div>{translation.get('TAB_1_1_1')}</div>
            <div>{numberFormatWithDigits(scores.candy, 0)}</div>
          </div>
        ),
        tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_1')}`,
        tabs: null,
        ranks: getRanks('candy', scores),
        crown: getCrown('candy', scores),
        vs: <VSStyled>VS</VSStyled>,
        teamBg: <ScoreTeamBg />,
        eventIntro: {
          // title: translation.get('EVENT_METHOD_TITLE'),
          iframe: Iframes.methods.t4,
        },
        countdown: {
            startDate: Tabs_step4TimeState[1].startDate,
            endDate: Tabs_step4TimeState[1].endDate,
            dateFormat: 'MM/d (WN) hh:mm:ss',
            formatStr: translation.get('COUNTDOWN_COUNTING'),
          },
        // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.eve.r4_1, api.eve.r4_2, api.eve.r4_3],
            team: 'candy',
            sortFunc: sortTab100,
            condition: getCondition('candy', scores),
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
      {
        tabKey: Tabs_step4TimeState[2].tabKey,
        title: (<div>
        <div>{translation.get('TAB_1_1_2')}</div>
        <div>{numberFormatWithDigits(scores.ginger, 0)}</div>
      </div>),
        tabText: `${translation.get('TAB_1')}/${translation.get('TAB_1_1')}/${translation.get('TAB_1_1_2')}`,
        tabs: null,
        ranks: getRanks('ginger', scores),
        crown: getCrown('ginger', scores),
        // vs: <VSStyled>VS</VSStyled>,
        teamBg: <ScoreTeamBg />,
        eventIntro: {
          // title: translation.get('EVENT_METHOD_TITLE'),
          iframe: Iframes.methods.t4,
        },
        countdown: {
            startDate: Tabs_step4TimeState[2].startDate,
            endDate: Tabs_step4TimeState[2].endDate,
            dateFormat: 'MM/d (WN) hh:mm:ss',
            formatStr: translation.get('COUNTDOWN_COUNTING'),
          },
        // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.eve.r4_1, api.eve.r4_2, api.eve.r4_3],
            team: 'ginger',
            sortFunc: sortTab100,
            condition: getCondition('ginger', scores),
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
  ];
  const defaultTabIndex = getDefaultDay(Tabs_step4TimeState, 0);
  return (
    
    <Tabs_step4Styled active={Tabs_step4TimeState[defaultTabIndex].tabKey}>
      {Tabs_step4Items.map(item => (
        <Tab
          key={`tab10_${item.tabKey}`}
          tabKey={item.tabKey}
          title={item.title}
          tabText={item.tabText}
          ranks={item.ranks}
          crown={item.crown}
          vs={item.vs}
          teamBg={item.teamBg}
        >
          {item.tabs ? <item.tabs /> : null}
          <RankBoard>
            <RankBoardItem
              bg={Images.rankA}
              team={1}
              rank={conditionMatch(board, { score: scores.sock }).rank}
            />
            <RankBoardItem
              bg={Images.rankB}
              team={2}
              rank={conditionMatch(board, { score: scores.candy }).rank}
            />
            <RankBoardItem
              bg={Images.rankC}
              team={3}
              rank={conditionMatch(board, { score: scores.ginger }).rank}
            />
          </RankBoard>
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
          {/* {item.rankTitle ? <RankTitle title={item.rankTitle} /> : null} */}
          {item.leaderboard ? (
            <LeaderboardContainerWrapper styleInfo={item.leaderboard.style}>
              <LeaderboardContainer
                apis={item.leaderboard!.apis}
                sortFunc={(data: any) => {
                  const result = item.leaderboard!.sortFunc(
                    data,
                    item.leaderboard!.team,
                  );
                  handleScores(result.scores);
                  setInitialData(data);
                  return result.data;
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
    </Tabs_step4Styled>
  );
};

export default Tabs_step4;