import React, { useContext, memo, useMemo, ReactNode, useRef } from 'react';
import {
  useMinSectionTracking,
  createSectionViewAction,
} from '17media-browser-spy';

import { VirtualizedList, CopyButton } from '@vmo/ui';
import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { TranslationContext } from '@vmo/web/context/translationContext';
import { useFilter } from '@vmo/ui/hooks';
import { trackingSource } from '@vmo/share/17appTrack';

import {
  WrapFilter,
  NoData,
  WrapLeaderboardItem,
  FrameBorder,
  ToggleButton,
  BonusToggleButton,
} from './style';
import { MissionPanelContext } from '../../context/missionPanelContext';
import { BonusPanelContext } from '../../context/bonusPanelContext';


const LeaderboardGeneral: React.FC<{
  leaderboardData: LeaderboardItemInterface[];
  render(item: LeaderboardItemInterface, showPanel: boolean , showPanel2: boolean): ReactNode;
  itemHeight: number;
  panelSize?: number;
  panelSize2?: number;
  withMissions?: boolean;
  withBonus?: boolean;
}> = ({
  leaderboardData,
  render,
  itemHeight,
  panelSize = 0,
  panelSize2 = 0,
  withMissions = false,
  withBonus = false,
}) => {
  const translation = useContext(TranslationContext);
  const { data, handleOnChange } = useFilter(leaderboardData);
  const refFilter = useRef(null);
  const refLeaderboard = useRef(null);
  const panelState = useContext(MissionPanelContext);
  const { showPanelID, setShowPanelID, setMissionDetails } = panelState;
  const panelState2 = useContext(BonusPanelContext);
  const { showPanelID2, setShowPanelID2, setBonusDetails } = panelState2;


  useMinSectionTracking(refFilter, () => {
    trackingSource.track(createSectionViewAction('searchBar'));
  });

  useMinSectionTracking(refLeaderboard, () => {
    trackingSource.track(createSectionViewAction('leaderboardItem'));
  });

  const handleToggleButton = (useId: string) => {
    const newIndex = showPanelID === useId ? '' : useId;
    setShowPanelID(newIndex);
    setMissionDetails([]);
    console.log( 'showPanelID:'+showPanelID +'   newIndex:'+ newIndex +'   useId:'+ useId );
  };

  const handleToggleButton2 = (useId2: string) => {
    const newIndex2 = showPanelID2 === useId2 ? '' : useId2;
    setShowPanelID2(newIndex2); //寫入newIndex2無效
    setBonusDetails([]);
    console.log( 'showPanelID2:'+showPanelID2 +'   newIndex2:'+ newIndex2 +'   useId2:'+ useId2 );
  };


  const Row = ({ index }: { index: number }) => (
    <WrapLeaderboardItem key={data[index].userID}>
      {render(data[index], showPanelID === data[index].userID ,showPanelID2 === data[index].userID) }


      {withMissions && (
        <ToggleButton
          isOpen={showPanelID === data[index].userID}
          onClick={() => handleToggleButton(data[index].userID)}
        />
      )}
       {withBonus && (
        <BonusToggleButton
          isOpen={showPanelID2 === data[index].userID}
          onClick={() => handleToggleButton2(data[index].userID)}
        />
      )}
    </WrapLeaderboardItem>
  );



  const Filter = useMemo(
    () => (
      <WrapFilter ref={refFilter}>
        <div>
          <input
          placeholder="請輸入主播ID"
            // placeholder={translation.get('SEARCH_PLACEHOLDER')}
            onChange={evt => handleOnChange(evt.target.value)}
          />
        </div>
      </WrapFilter>
    ),
    [handleOnChange, translation],
  );

  return (
    <>
      {/* {Filter}
      <CopyButton data={data} /> */}
      <FrameBorder ref={refLeaderboard}>
      {Filter}
      <CopyButton data={data} />
        {data.length > 0 ? (
          <VirtualizedList
            dataset={data}
            itemHeight={itemHeight}
            updateOnID={showPanelID}
            panelSize={panelSize}
            panelSize2={panelSize2}
          >
            {Row}
          </VirtualizedList>
        ) : (
          <NoData>{translation.get('EMPTY_LEADERBOARD')}</NoData>
        )}
      </FrameBorder>
    </>
  );
};

export default memo(
  LeaderboardGeneral,
  (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
);
