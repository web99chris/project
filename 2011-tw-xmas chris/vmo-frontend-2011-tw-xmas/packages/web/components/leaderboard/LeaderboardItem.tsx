
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
import BonusPanel from './BonusPanel';
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
  showPanel2: boolean;
}> = memo(({ item, condition, showPanel ,showPanel2 }) => {
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
          color: '#ffec17',
          colorRankNumber: '#ffec17',
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
      {showPanel2 &&( 
        <BonusPanel
          condition={condition.bonus}
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

  let panelSize2 = 98;
  if (condition.bonus && condition.bonus.length > 0) {
    panelSize2 = condition.bonus.length * 88 + 20;
  }

  return (
    <FrameBorder title={''}>
      <LeaderboardGeneral
        itemHeight={78}
        panelSize={panelSize}
        panelSize2={panelSize2}
        leaderboardData={leaderboardData}
        withMissions={condition.missions && condition.missions.length > 0}
        withBonus={condition.bonus && condition.bonus.length > 0}
        render={(item: LeaderboardItemInterface, showPanel: boolean , showPanel2: boolean) => {
          return (
            <RenderLeaderboardItem
              item={item}
              condition={condition}
              showPanel={showPanel}
              showPanel2={showPanel2}
            />
          );
        }}
      />
    </FrameBorder>
  );
};

export default memo(Leaderboard);



// 2008-tw-momo
// import React, { useContext, memo } from 'react';

// import { LeaderboardItem } from '@vmo/ui';
// import { conditionMatch, numberFormat } from '@vmo/share/utils';
// import { useDeepLink } from '@vmo/ui/hooks';
// import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
// import { TranslationContext } from '@vmo/web/context/translationContext';

// import { ConditionInterface } from '../../constants/conditions';
// import images from '../../themes/images';
// import LeaderboardGeneral from './LeaderboardGeneral';
// import { WrapLeaderboardItem } from './style';
// import BonusPanel from './BonusPanel';
// import FrameBorder from '../frameBorder';

// const RenderLeaderboardItem: React.FC<{
//   item: LeaderboardItemInterface;
//   condition: ConditionInterface;
//   showPanel: boolean;
// }> = memo(({ item, condition, showPanel }) => {
//   const translation = useContext(TranslationContext);
//   const { handleClickItem } = useDeepLink(
//     item.userID!,
//     item.openID!,
//     item.roomID,
//   );
//   const condIcon = conditionMatch(condition.icons!, item);
//   const condBg = conditionMatch(condition.bgs!, item);

//   return (
//     <WrapLeaderboardItem
//       withButton={condition.missions && condition.missions.length > 0}
//     >
//       <LeaderboardItem
//         handleClickAvatar={handleClickItem}
//         isLive={item.roomID && item.roomID > 0}
//         theme={{
//           colorNickName: '#ffffff',
//           color: '#ce9914',
//           colorRankNumber: '#ffffff',
//           borderBottom: images.borderLine,
//           background: condBg || 'rgba(9, 0, 59, 0.92);',
//         }}
//         {...item}
//         icon={condIcon ? condIcon.icon : ''}
//         unit={translation.get('UNIT')}
//         isHighlight
//         withBonus={condition.withBonus}
//         withVote={false}
//         bonus={Number.parseInt(item.meta.total, 10) || 0}
//       />
//       {showPanel && <BonusPanel meta={item.meta} />}
//     </WrapLeaderboardItem>
//   );
// });

// const Leaderboard: React.FC<{
//   leaderboardData: LeaderboardItemInterface[];
//   condition: ConditionInterface;
// }> = ({ leaderboardData, condition }) => {
//   const panelSize = 120;

//   return (
//     <FrameBorder title={''}>
//       <LeaderboardGeneral
//         itemHeight={90}
//         panelSize={panelSize}
//         leaderboardData={leaderboardData}
//         withPanel={condition.withBnous}
//         render={(item: LeaderboardItemInterface, showPanel: boolean) => {
//           return (
//             <RenderLeaderboardItem
//               item={item}
//               condition={condition}
//               showPanel={showPanel}
//             />
//           );
//         }}
//       />
//     </FrameBorder>
//   );
// };

// export default memo(Leaderboard);