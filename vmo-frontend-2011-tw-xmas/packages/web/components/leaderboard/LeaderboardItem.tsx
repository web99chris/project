
import React, { useContext, memo } from 'react';

import { LeaderboardItem } from '@vmo/ui';
import { conditionMatch, numberFormat } from '@vmo/share/utils';
import { useDeepLink } from '@vmo/ui/hooks';
import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { TranslationContext } from '@vmo/web/context/translationContext';

import { ConditionInterface } from '../../constants/conditions';
import images from '../../themes/images';
import LeaderboardGeneral from './LeaderboardGeneral';
import { WrapLeaderboardItem } from './style';
import MissionPanel from './MissionPanel';
import FrameBorder from '../frameBorder';

const getBackgroundColor = (item, condition, condIcon) => {
  let backgroundColor = '#070027';
  if (condIcon && condIcon.icon) {
    backgroundColor =  'rgba(9, 0, 59, 0.92)';
  }
  if (condition && condition.bgs) {
    const condBg = conditionMatch(condition.bgs!, item);
    backgroundColor =
      condBg && condBg.color
        ? condBg.color
        :  'rgba(9, 0, 59, 0.92)';
  }

  return backgroundColor;
};

const RenderLeaderboardItem: React.FC<{
  item: LeaderboardItemInterface;
  condition: ConditionInterface;
  showPanel: boolean;
}> = memo(({ item, condition, showPanel }) => {
  const translation = useContext(TranslationContext);
  const { handleClickItem } = useDeepLink(
    item.userID!,
    item.openID!,
    item.roomID,
  );

  const condIcon = conditionMatch(condition.icons!, item);
  const backgroundColor = getBackgroundColor(item, condition, condIcon);

  const getAdditionalText = () => {
    let additionalText = '';
    if (condition.withVote) {
      additionalText = `${numberFormat(item.score!)} 票 / ${numberFormat(
        item.meta.amount!,
      )}分`;
    }

    if (condition.withBonus) {
      additionalText = `${numberFormat(item.score!)} 響叮噹 / ${numberFormat(
        item.meta.amount!,
      )}分`;
    }

    if (condition.withTotalScore) {
      additionalText = `${numberFormat(item.score!)} ( ${numberFormat(
        item.meta.vote! || 0,
      )} + ${numberFormat(item.meta.gift! || 0)} ) 總積分`;
    }

    return additionalText;
  };

  return (
    <WrapLeaderboardItem
      withButton={condition.missions && condition.missions.length > 0 } 
    >
      <LeaderboardItem
        handleClickAvatar={handleClickItem}
        isLive={item.roomID && item.roomID > 0}
        theme={{
          colorNickName: '#ffffff',
          color: '#ce9914',
          colorRankNumber: '#ffffff',
          borderBottom: images.borderLine,
          background: backgroundColor,
        }}
        {...item}
        icon={condIcon ? condIcon.icon : ''}
        unit={translation.get('UNIT')}
        additionalText={getAdditionalText()}
        isHighlight
        withBonus={false}
        withVote={false}
      />
      {showPanel && (
        <MissionPanel
          condition={condition}
          userID={item.userID}
          meta={item.meta}
        /> 
      )}
     
    </WrapLeaderboardItem>
  );
});



const Leaderboard: React.FC<{
  leaderboardData: LeaderboardItemInterface[];
  condition: ConditionInterface;
}> = ({ leaderboardData, condition }) => {
  let panelSize = 98;
  if (condition.missions && condition.missions.length > 0) {
    panelSize = condition.missions.length * 88 + 20;
  }


  return (
    <FrameBorder title={''}>
      <LeaderboardGeneral
        itemHeight={78}
        panelSize={panelSize}
        leaderboardData={leaderboardData}
        withMissions={condition.missions && condition.missions.length > 0}
        withBonus={condition.withBonus}
        render={(item: LeaderboardItemInterface, showPanel: boolean ) => {
          return (
            <RenderLeaderboardItem
              item={item}
              condition={condition}
              showPanel={showPanel}
            />
          );
        }}
      />
    </FrameBorder>
  );
};

export default memo(Leaderboard);

