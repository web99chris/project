// xmas round1
import React, { useMemo, useEffect, useState, useCallback, useContext } from 'react';

import { getDefaultDay, getCurrentTransLateLang,conditionMatch,numberFormatWithDigits } from '@vmo/share/utils';
import { Tabs_offline_finalTimeState, Iframes, TrackTab } from '@vmo/web/constants/config';
import { Tab } from '@vmo/ui';
import {
  Tabs_round1Styled,
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
import { sortTab220 } from '@vmo/ui/hooks/api/sort';
import { createTabClickAction } from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';
import { isNumericLiteral } from 'typescript';

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
    case 0: {
      return {
        inactive: <CrownStyled bg={Images.crownOff} />,
        active: <CrownStyled bg={Images.crownOn} />,
      };
    }
    case 1:
    case 2:
    default: {
      return null;
    }
  }
};

const getCondition = (team, scores) => {
  const rank = getRank(team, scores);
  switch (rank) {
    case 0: {
      return Conditions.rank324xx;
    }
    case 1: {
      return Conditions.rank325xx;
    }
    case 2: {
      return Conditions.rank326xx;
    }
    case -1:
    default: {
      return Conditions.rank0;
    }
  }
};



const Tabs_offline_final = () => {
  const translation = useContext(TranslationContext);
  useEffect(() => {
    trackingSource.track(
      createTabClickAction(
        '',
        `${translation.get('TAB_2')}/${translation.get(
          'TAB_2_2',
        )}/${translation.get('TAB_1_1_0')}`,
      ),
    );
  }, []);

  const [initialData, setInitialData] = useState({} || []);
  const [scores, setScores] = useState(initialScores);
  const handleScores = useCallback((newScores: initialScoresType) => {
    setScores(newScores);
  }, []);

  const Tabs_offline_finalItems = [
    {
        tabKey: Tabs_offline_finalTimeState[0].tabKey,
        title: (
          <div>
            <div>{translation.get('TAB_1_1_0')}</div>
            <div>{numberFormatWithDigits(scores.sock, 0)}</div>
          </div>
        ),
        tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_0')}`,
        tabs: null,
        ranks: getRanks('sock', scores),
        crown: getCrown('sock', scores),
        vs: <VSStyled>VS</VSStyled>,
        teamBg: <ScoreTeamBg />,
        eventIntro: {
          title: translation.get('offlineNT_METHOD_TITLE'),
          iframe: Iframes.methods.t6,
        },
        countdown: {
            startDate: Tabs_offline_finalTimeState[0].startDate,
            endDate: Tabs_offline_finalTimeState[0].endDate,
            dateFormat: 'MM/d (WN) hh:mm:ss',
            formatStr: translation.get('COUNTDOWN_COUNTING'),
          },
        // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
        leaderboard: {
            apis:[api.offline.final_1, api.offline.final_2, api.offline.final_3],
            team: 'sock',
            sortFunc: sortTab220,
            condition: getCondition('sock', scores),
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
      {
        tabKey: Tabs_offline_finalTimeState[1].tabKey,
        title: (
          <div>
            <div>{translation.get('TAB_1_1_1')}</div>
            <div>{numberFormatWithDigits(scores.candy, 0)}</div>
          </div>
        ),
        tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_1')}`,
        tabs: null,
        ranks: getRanks('candy', scores),
        crown: getCrown('candy', scores),
        vs: <VSStyled>VS</VSStyled>,
        teamBg: <ScoreTeamBg />,
        eventIntro: {
          title: translation.get('offlineNT_METHOD_TITLE'),
          iframe: Iframes.methods.t6,
        },
        countdown: {
            startDate: Tabs_offline_finalTimeState[1].startDate,
            endDate: Tabs_offline_finalTimeState[1].endDate,
            dateFormat: 'MM/d (WN) hh:mm:ss',
            formatStr: translation.get('COUNTDOWN_COUNTING'),
          },
        // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.offline.final_1, api.offline.final_2, api.offline.final_3],
            team: 'candy',
            sortFunc: sortTab220,
            condition: getCondition('candy', scores),
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
      {
        tabKey: Tabs_offline_finalTimeState[2].tabKey,
        title: (
          <div>
            <div>{translation.get('TAB_1_1_2')}</div>
            <div>{numberFormatWithDigits(scores.candy, 0)}</div>
          </div>
        ),
        tabText: `${translation.get('TAB_2')}/${translation.get('TAB_2_2')}/${translation.get('TAB_1_1_2')}`,
        tabs: null,
        ranks: getRanks('ginger', scores),
        crown: getCrown('ginger', scores),
        // vs: <VSStyled>VS</VSStyled>,
        teamBg: <ScoreTeamBg />,
        eventIntro: {
          title: translation.get('offlineNT_METHOD_TITLE'),
          iframe: Iframes.methods.t6,
        },
        countdown: {
            startDate: Tabs_offline_finalTimeState[2].startDate,
            endDate: Tabs_offline_finalTimeState[2].endDate,
            dateFormat: 'MM/d (WN) hh:mm:ss',
            formatStr: translation.get('COUNTDOWN_COUNTING'),
          },
        // rankTitle: translation.get('offlineNT_INTRO_TITLE'),
        leaderboard: {
            apis: [api.offline.final_1, api.offline.final_2, api.offline.final_3],
            team: 'ginger',
            sortFunc: sortTab220,
            condition: getCondition('ginger', scores),
            iframe: null,
            realTime: 1000,
            style: {},
          },
      },
  ];
  const defaultTabIndex = getDefaultDay(Tabs_offline_finalTimeState, 0);
  return (
    
    <Tabs_round1Styled active={Tabs_offline_finalTimeState[defaultTabIndex].tabKey}>
      {Tabs_offline_finalItems.map(item => (
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
                  const result = item.leaderboard!.sortFunc(
                    data,
                    item.leaderboard!.team,
                  );
                  handleScores(result.scores);
                  setInitialData(data);
                  return result.data;
                }}
                condition={item.leaderboard!.condition}
                iframe={item.leaderboard.iframe}
                realTime={item.leaderboard!.realTime}
              />
            </LeaderboardContainerWrapper>
          ) : null}
        </Tab>
      ))}
    </Tabs_round1Styled>
  );
};

export default Tabs_offline_final;
