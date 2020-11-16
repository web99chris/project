import React,{useContext} from 'react';
import { WrapBonusPanel, Borderline } from './style';
import { BonusPanelContext } from '../../context/bonusPanelContext';

// const panelState2 = useContext(BonusPanelContext);
// const { BonusDetails, setBonusDetails } = panelState2;

// const { withBonus, bonus } = condition;

export default ({ meta }) => {
  return (

    <WrapBonusPanel>
      <div className="bonus_title">加分詳情</div>
      <section>
        <div>
          <span>階段四</span> <span>+{meta.s4 || 0}</span>
        </div>
        <div>
          <span>Round 2</span> <span>+{meta.r2 || 0}</span>
        </div>
      </section>
      <Borderline />
    </WrapBonusPanel>
  
  );
};


// import React, { useContext, useEffect, useRef, memo } from 'react';
// import axios, { CancelTokenSource } from 'axios';
// import { WrapBonusPanel,WrapMetaScore,WrapPanel,Borderline } from './style';
// import Loading from '@vmo/ui/Loading';
// import { getEventoryDetails } from '@vmo/share/services/leaderboardEventory.service';
// import { BonusPanelContext } from '../../context/bonusPanelContext';

// const RenderBonus = ({ bonus, score }) => {
//   return (
//     <WrapBonusPanel>
//       <div className="bonus-title">{bonus.title}</div>
//         <div className="bonus-score">
//           {score}分
//         </div>
//     </WrapBonusPanel>
//   );
// };

// export default memo(({ condition, userID, meta = {} }) => {
//   const source = useRef<CancelTokenSource>();
//   const panelState = useContext(BonusPanelContext);
//   const { BonusDetails, setBonusDetails } = panelState;

//   const { needRequest, bonus } = condition;

//   useEffect(() => {
//     if (needRequest && BonusDetails.length === 0) {
//       const subKeys = userID;
//       source.current = axios.CancelToken.source();
//       const cancelToken = source.current.token;
//       getEventoryDetails(condition.containerID, subKeys, cancelToken).then(
//         result => {
//           const detailList = [];
//           if (result && result.data) {
//             result.data.forEach(item => {
//               if (item.meta && item.meta.metaKey)
//                 detailList.push({
//                   metaKey: item.meta.metaKey,
//                   score: item.score,
//                 });
//             });
//           } else {
//             detailList.push({
//               metaKey: '',
//               score: 0,
//             });
//           }

//           setBonusDetails(detailList);
//         },
//       );
//     }
//     return () => {
//       if (source.current) source.current.cancel();
//     };
//   }, [
//     condition.containerID,
//     BonusDetails.length,
//     needRequest,
//     setBonusDetails,
//     userID,
//   ]);

//   const RenderMetaScore = ({ meta }) => {
//     return (
//       // <WrapMetaScore>
//       //   <div className="bonus-title">{bonus.title}</div>
//       //   <div className="bonus-description">+ {meta.s4 || 0} 分</div>
//       //   <div className="bonus-description">+ {meta.r2 || 0} 分</div>
//       // </WrapMetaScore>
//     <WrapBonusPanel>
//       <div className="bonus_title">加分詳情</div>
//       <section>
//         <div>
//           <span>階段四</span> <span>+{meta.s4 || 0}</span>
//         </div>
//         <div>
//           <span>Round 2</span> <span>+{meta.r2 || 0}</span>
//         </div>
//       </section>
//       <Borderline />
//     </WrapBonusPanel>
//     );
//   };

//   if (needRequest && BonusDetails.length === 0) {
//     return (
//       <WrapPanel>
//         <Loading color="#ffffff" />
//       </WrapPanel>
//     );
//   }

//   return (
//     <WrapPanel>
//       {bonus.map(item => {
//         if (needRequest) {
//           // let isChecked = false;
//           let score = 0;
//           if (BonusDetails.length > 0) {
//             const bonusMatched = BonusDetails.find(detail =>
//               detail.metaKey.includes(item.metaKey),
//             );
//             // if (bonusMatched) {
//             //   isChecked = bonusMatched.score >= item.threshold;
//             //   score =
//             //   bonusMatched.score >= item.threshold
//             //       ? item.threshold
//             //       : bonusMatched.score;
//             // }
//           }
//           return (
//             <RenderBonus
//               key={item.title}
//               bonus={item}
//               score={score}
//             />
//           );
//         }
//         return <RenderMetaScore key={item.title} bonus={item} />;
//       })}
//     </WrapPanel>
//   );
// });

