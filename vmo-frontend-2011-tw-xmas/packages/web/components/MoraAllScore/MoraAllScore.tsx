import React, { useContext } from 'react';
import styled from 'styled-components';

import { TranslationContext } from '@vmo/web/context/translationContext';
import Images from '@vmo/web/themes/images';

interface MoraAllScoreProps {
  showAllScore?: boolean;
  score?: string;
  paper?: {
    level: number;
    score: string;
    active?: boolean;
  };
  scissors?: {
    level: number;
    score: string;
    active?: boolean;
  };
  rock?: {
    level: number;
    score: string;
    active?: boolean;
  };
}

const BattleBox = styled.div``;
const BattleFinger = styled.div``;
const BattleInfo = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 24.15vw;
  height: 14vw;
  background-color: ${props => (props.active ? '#f37293' : '#c09333')};
  border-radius: 2.41vw;
  margin-bottom: 3.38vw;
  text-align: center;
  font-size: 2.89vw;
  line-height: 3.62vw;
  font-weight: 600;
  color: #000000;
  @media screen and (min-width: 800px) {
    font-size: calc((800 / 828) * 24px);
    line-height: calc((800 / 828) * 30px);
    width: calc((800 / 828) * 200px);
    height: calc((800 / 828) * 116px);
    border-radius: calc((800 / 828) * 20px);
    margin-bottom: calc((800 / 828) * 28px);
  }
`;
const BattlePaper = styled.div`
  width: 16.06vw;
  height: 15.57vw;
  background-image: url(${Images.battlePaper});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media screen and (min-width: 800px) {
    width: calc((800 / 828) * 133px);
    height: calc((800 / 828) * 129px);
  }
`;
const BattleScissors = styled.div`
  width: 12.8vw;
  height: 16.06vw;
  background-image: url(${Images.battleScissors});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media screen and (min-width: 800px) {
    width: calc((800 / 828) * 106px);
    height: calc((800 / 828) * 133px);
  }
`;
const BattleRock = styled.div`
  width: 12.92vw;
  height: 13.04vw;
  background-image: url(${Images.battleRock});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 58px);
    width: calc((800 / 828) * 107px);
    height: calc((800 / 828) * 108px);
  }
`;
const BattleLevel0 = styled(BattleBox)<{ active?: boolean }>`
  margin-top: ${props => (props.active ? '4.29vw' : '6.71vw')};
  ${BattleFinger} {
    margin: auto;
    margin-top: 3.38vw;
    width: 22.7vw;
    height: 22.7vw;
    border-radius: 11.35vw;
    background-color: #bc7c1a;
    filter: ${props => (props.active ? 'grayscale(0%)' : 'grayscale(100%)')};
    @media screen and (min-width: 800px) {
      margin-top: calc((800 / 828) * 28px);
      width: calc((800 / 828) * 188px);
      height: calc((800 / 828) * 188px);
    }
    div {
      margin: auto;
    }
  }
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 48px);
    margin-top: ${props =>
      props.active
        ? 'calc((800 / 828) * 35.6px)'
        : 'calc((800 / 828) * 55.6px)'};
  }
`;
const BattleLevel1 = styled(BattleBox)<{ active?: boolean }>`
  margin-top: ${props => (props.active ? '4.29vw' : '6.71vw')};
  ${BattleFinger} {
    margin: auto;
    margin-top: 2.47vw;
    width: 24.51vw;
    height: 24.51vw;
    background-color: #ce8f07;
    background-image: url(${Images.battleLv1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 12.25vw;
    filter: ${props => (props.active ? 'grayscale(0%)' : 'grayscale(100%)')};
    @media screen and (min-width: 800px) {
      margin-top: calc((800 / 828) * 21px);
      width: calc((800 / 828) * 203px);
      height: calc((800 / 828) * 203px);
      background-position: center;
      background-size: contain;
    }
    div {
      margin: auto;
      margin-top: 5.79vw;
      @media screen and (min-width: 800px) {
        margin-top: calc((800 / 828) * 48px);
      }
    }
  }
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 48px);
    margin-top: ${props =>
      props.active
        ? 'calc((800 / 828) * 35.6px)'
        : 'calc((800 / 828) * 55.6px)'};
  }
`;
const BattleLevel2 = styled(BattleBox)<{ active?: boolean }>`
  margin-top: ${props => (props.active ? '4.29vw' : '6.71vw')};
  ${BattleFinger} {
    margin: auto;
    margin-top: 1.2vw;
    width: 26.33vw;
    height: 27.89vw;
    background-image: url(${Images.battleLv2}), url(${Images.battleBg});
    background-repeat: no-repeat, no-repeat;
    background-position: center, center 2.17vw;
    background-size: contain, 22.7vw 22.7vw;
    filter: ${props => (props.active ? 'grayscale(0%)' : 'grayscale(100%)')};
    @media screen and (min-width: 800px) {
      margin-top: calc((800 / 828) * 10px);
      width: calc((800 / 828) * 218px);
      height: calc((800 / 828) * 231px);
      background-position: center, center calc((800 / 828) * 18px);
      background-size: contain,
        calc((800 / 828) * 188px) calc((800 / 828) * 188px);
    }
    div {
      margin: auto;
      margin-top: 5.79vw;
      @media screen and (min-width: 800px) {
        margin-top: calc((800 / 828) * 48px);
      }
    }
  }
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 48px);
    margin-top: ${props =>
      props.active
        ? 'calc((800 / 828) * 35.6px)'
        : 'calc((800 / 828) * 55.6px)'};
  }
`;
const BattleLevel3 = styled(BattleBox)<{ active?: boolean }>`
  margin-top: ${props => (props.active ? '4.29vw' : '6.71vw')};
  ${BattleFinger} {
    margin-top: 1.2vw;
    margin-left: 1.44vw;
    margin-bottom: auto;
    width: 27.77vw;
    height: 28.62vw;
    background-image: url(${Images.battleLv3}), url(${Images.battleBg});
    background-repeat: no-repeat, no-repeat;
    background-position: center, 1.93vw 2.17vw;
    background-size: contain, 22.7vw 22.7vw;
    filter: ${props => (props.active ? 'grayscale(0%)' : 'grayscale(100%)')};
    @media screen and (min-width: 800px) {
      margin-top: calc((800 / 828) * 10px);
      margin-left: calc((800 / 828) * 16px);
      width: calc((800 / 828) * 230px);
      height: calc((800 / 828) * 237px);
      background-position: center,
        calc((800 / 828) * 16px) calc((800 / 828) * 18px);
      background-size: contain,
        calc((800 / 828) * 188px) calc((800 / 828) * 188px);
    }
    ${BattlePaper} {
      margin: auto;
      margin-top: 5.3vw;
      margin-left: 5.77vw;
      @media screen and (min-width: 800px) {
        margin-top: calc((800 / 828) * 44px);
        margin-left: calc((800 / 828) * 48px);
      }
    }
    ${BattleScissors} {
      margin-top: 4.83vw;
      margin-left: 6.76vw;
      @media screen and (min-width: 800px) {
        margin-top: calc((800 / 828) * 40px);
        margin-left: calc((800 / 828) * 56px);
      }
    }
    ${BattleRock} {
      margin: auto;
      margin-top: 7vw;
      margin-left: 6.76vw;
      @media screen and (min-width: 800px) {
        margin-top: calc((800 / 828) * 58px);
        margin-left: calc((800 / 828) * 56px);
      }
    }
  }
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 48px);
    margin-top: ${props =>
      props.active
        ? 'calc((800 / 828) * 35.6px)'
        : 'calc((800 / 828) * 55.6px)'};
  }
`;

const MoraAllScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 4.1vw;
  @media screen and (min-width: 800px) {
    margin-bottom: calc((800 / 828) * 34px);
  }
  .allScore {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 67.63vw;
    height: 7.78vw;
    background-color: #986904;
    border-radius: 4.23vw;
    font-size: 4.06vw;
    margin-top: 3.26vw;
    @media screen and (min-width: 800px) {
      font-size: calc((800 / 828) * 33.6px);
      margin-top: calc((800 / 828) * 27px);
      width: calc((800 / 828) * 560px);
      height: calc((800 / 828) * 65px);
      border-radius: calc((800 / 828) * 35px);
    }
  }
  .mora {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: auto;
    ${BattleBox} {
      display: flex;
      flex-direction: column;
      width: 30.19vw;
      height: 48.07vw;
      border-radius: 2.41vw;
      box-shadow: inset 3px 5px 3px 0 rgba(0, 0, 0, 0.5);
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(
        to bottom,
        #ffe46a,
        #ffd57c 38%,
        #e5a51d
      );
      border-image-slice: 1;
      background-image: linear-gradient(to bottom, #523903, #523903),
        linear-gradient(to bottom, #ffe46a, #ffd57c 38%, #e5a51d);
      background-origin: border-box;
      background-clip: content-box, border-box;
      margin-right: 2.41vw;
      :nth-child(3) {
        margin-right: 0;
      }
      @media screen and (min-width: 800px) {
        width: calc((800 / 828) * 250px);
        height: calc((800 / 828) * 398px);
        border-radius: calc((800 / 828) * 20px);
        margin-right: calc((800 / 828) * 20px);
        :nth-child(3) {
          margin-right: 0;
        }
      }
      ${BattleFinger} {
        display: flex;
      }
    }
  }
`;

const getLevelCmp = (level: number, active?: boolean) => {
  switch (level) {
    case 3:
      return ({ children }: any) => (
        <BattleLevel3 active={active}>{children}</BattleLevel3>
      );
    case 2:
      return ({ children }: any) => (
        <BattleLevel2 active={active}>{children}</BattleLevel2>
      );
    case 1:
      return ({ children }: any) => (
        <BattleLevel1 active={active}>{children}</BattleLevel1>
      );
    case 0:
    default:
      return ({ children }: any) => (
        <BattleLevel0 active={active}>{children}</BattleLevel0>
      );
  }
};

const getFingerCmp = (finger: string) => {
  switch (finger) {
    case 'paper':
      return () => <BattlePaper />;
    case 'scissors':
      return () => <BattleScissors />;
    case 'rock':
    default:
      return () => <BattleRock />;
  }
};

const MoraAllScoreComponent: React.FC<MoraAllScoreProps> = ({
  showAllScore,
  score,
  paper,
  scissors,
  rock,
}) => {
  const translation = useContext(TranslationContext);
  const moraData = [
    {
      moraKey: 'paper',
      ...paper,
    },
    {
      moraKey: 'scissors',
      ...scissors,
    },
    {
      moraKey: 'rock',
      ...rock,
    },
  ];
  return (
    <MoraAllScore>
      {showAllScore ? (
        <div className="allScore">{`${translation.get('KEY_40')}${score}`}</div>
      ) : null}
      <div className="mora">
        {moraData.map(item => {
          const ItemCmp = getLevelCmp(item.level, item.active);
          const FinterCmp = getFingerCmp(item.moraKey);
          return (
            <ItemCmp key={item.moraKey}>
              <BattleFinger>
                <FinterCmp />
              </BattleFinger>
              <BattleInfo active={item.active}>
                <span>Lv{item.level}</span>
                <span>{item.score}</span>
                <span>{translation.get('KEY_35')}</span>
              </BattleInfo>
            </ItemCmp>
          );
        })}
      </div>
    </MoraAllScore>
  );
};

MoraAllScoreComponent.defaultProps = {
  showAllScore: true,
  score: '0.0',
  paper: {
    level: 0,
    score: '0.0',
    active: false,
  },
  scissors: {
    level: 0,
    score: '0.0',
    active: false,
  },
  rock: {
    level: 0,
    score: '0.0',
    active: false,
  },
};

export default MoraAllScoreComponent;
