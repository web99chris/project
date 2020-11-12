import React, { useContext, useEffect, useRef, memo } from 'react';
import axios, { CancelTokenSource } from 'axios';

import Loading from '@vmo/ui/Loading';
import { getEventoryDetails } from '@vmo/share/services/leaderboardEventory.service';

import { WrapPanel, WrapMission, WrapMetaScore } from './style';
import { MissionPanelContext } from '../../context/missionPanelContext';

const RenderMission = ({ mission, score, isChecked }) => {
  return (
    <WrapMission isChecked={isChecked}>
      <div className="mission-title">{mission.title}</div>
      <div className="mission-description">
        <div>{mission.description}
        <div className="mission-prize">{mission.prize}</div>
        <div className="mission-threshold">
          目前累積數量({score}/{mission.threshold})
        </div>
        </div>
      </div>
      {mission.threshold && <div className="mission-check" />}
    </WrapMission>
  );
};

export default memo(({ condition, userID, meta = {} }) => {
  const source = useRef<CancelTokenSource>();
  const panelState = useContext(MissionPanelContext);
  const { missionDetails, setMissionDetails } = panelState;

  const { needRequest, missions } = condition;

  useEffect(() => {
    if (needRequest && missionDetails.length === 0) {
      const subKeys = userID;
      source.current = axios.CancelToken.source();
      const cancelToken = source.current.token;
      getEventoryDetails(condition.containerID, subKeys, cancelToken).then(
        result => {
          const detailList = [];
          if (result && result.data) {
            result.data.forEach(item => {
              if (item.meta && item.meta.eventoryKey)
                detailList.push({
                  eventoryKey: item.meta.eventoryKey,
                  score: item.score,
                });
            });
          } else {
            detailList.push({
              eventoryKey: '',
              score: 0,
            });
          }

          setMissionDetails(detailList);
        },
      );
    }
    return () => {
      if (source.current) source.current.cancel();
    };
  }, [
    condition.containerID,
    missionDetails.length,
    needRequest,
    setMissionDetails,
    userID,
  ]);

  const RenderMetaScore = ({ mission }) => {
    return (
      <WrapMetaScore>
        <div className="mission-title">{mission.title}</div>
        <div className="mission-description">+ {meta[mission.metaKey]} 分</div>
      </WrapMetaScore>
    );
  };

  if (needRequest && missionDetails.length === 0) {
    return (
      <WrapPanel>
        <Loading color="#ffffff" />
      </WrapPanel>
    );
  }

  return (
    <WrapPanel>
      {missions.map(item => {
        if (needRequest) {
          let isChecked = false;
          let score = 0;
          if (missionDetails.length > 0) {
            const missionMatched = missionDetails.find(detail =>
              detail.eventoryKey.includes(item.eventoryKey),
            );
            if (missionMatched) {
              isChecked = missionMatched.score >= item.threshold;
              score =
                missionMatched.score >= item.threshold
                  ? item.threshold
                  : missionMatched.score;
            }
          }
          return (
            <RenderMission
              key={item.title}
              mission={item}
              score={score}
              isChecked={isChecked}
            />
          );
        }
        return <RenderMetaScore key={item.title} mission={item} />;
      })}
    </WrapPanel>
  );
});

