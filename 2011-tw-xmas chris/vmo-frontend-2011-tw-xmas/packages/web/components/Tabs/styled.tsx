
import styled, { css } from 'styled-components';

import {
  Tabs,
  DivWrapTabMenu,
  DivTabContent,
  UlLine,
  LiTab,
  LiTabActive,
} from '@vmo/ui';
import Countdown, { WrapCountdownContent } from '@vmo/ui/Countdown';
// import { Cover, CoverIframe } from '@vmo/ui/CoverVideo';
import Images from '@vmo/web/themes/images';

export const calVW = (num: number) => {
  return `${((num / 414) * 100).toFixed(2)}vw`;
};

export const cal800 = (num: number) => {
  return `${(800 / 828) * (num * 2)}px`;
};

export const RankNumber = styled.div<{ rank?: number; bg: string }>`
  position: absolute;
  z-index: 2;
  top: ${calVW(65)};
  left: ${calVW(65)};
  width: ${calVW(30)};
  height: ${calVW(30)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${props =>
    props.bg
      ? css`
          background-image: url(${props.bg});
        `
      : ''}
  @media screen and (min-width: 800px) {
    width: ${cal800(30)};
    height: ${cal800(30)};
    top: ${cal800(65)};
    left: ${cal800(65)};
  }
`;

export const ScoreTeamBg = styled.div`
  position: absolute;
  width: ${calVW(360)};
  height: ${calVW(79)};
  border-radius: 13px;
  background-color: rgba(2, 2, 26, 0.95);
  left: ${calVW(27)};
  top: ${calVW(95 + 21)};
  @media screen and (min-width: 800px) {
    width: ${cal800(360)};
    height: ${cal800(79)};
    left: ${cal800(27)};
    top: ${cal800(95 + 21)};
  }
`;


export const CoverVideoIframeStyled = styled.div`
  width: 100%;
  height: ${calVW(665)};
  @media screen and (min-width: 800px) {
    height: ${cal800(665)};
  }
  iframe {
    position: relative;
    z-index: -1;
  }
`;

export const EventIntroHeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${calVW(8)};
  width: ${calVW(119)};
  height: ${calVW(36)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${Images.tipsBg});
  font-size: ${calVW(14)};
  font-weight: 600;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  @media screen and (min-width: 800px) {
    font-size: ${cal800(14)};
    font-weight: 600;
    padding-top: ${cal800(8)};
    width: ${cal800(119)};
    height: ${cal800(36)};
  }
`;

export const EventIntroDemo = styled.div`
  position: relative;
  border-radius: ${calVW(15)};
  background-image: url(${Images.rot}), url(${Images.rob}),
    linear-gradient(
      to right,
      rgba(6, 55, 103, 1),
      #008099 50%,
      rgba(13, 68, 108, 1)
    );
  background-repeat: no-repeat, no-repeat;
  background-position: center top, center bottom;
  background-size: contain;
  margin: 0 ${calVW(14)};
  padding-top: ${calVW(49)};
  padding-bottom: ${calVW(49)};
  font-size: ${calVW(16)};
  font-weight: 600;
  line-height: 1.69;
  color: #ffffff;
  @media screen and (min-width: 800px) {
    border-radius: ${cal800(15)};
    margin: 0 ${cal800(14)};
    padding-top: ${cal800(49)};
    padding-bottom: ${cal800(49)};
    font-size: ${cal800(16)};
  }
  > div {
    padding: 0 ${calVW(25)};
    background-image: url(${Images.roc});
    background-position: center top;
    background-size: contain;
    background-repeat: repeat-y;
    min-height: ${calVW(200)};
    @media screen and (min-width: 800px) {
      padding: 0 ${cal800(25)};
      min-height: ${cal800(200)};
    }
  }
  div.title1 {
    position: relative;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    background-image: url(${Images.iTitle1});
    width: ${calVW(414)};
    height: ${calVW(110)};
    top: 0;
    left: -${calVW(39)};
    font-size: ${calVW(16)};
    font-weight: 600;
    line-height: 1.69;
    color: #ffffff;
    padding: ${calVW(11)} ${calVW(39)} 0;
    @media screen and (min-width: 800px) {
      top: 0;
      left: -${cal800(39)};
      width: ${cal800(414)};
      height: ${cal800(110)};
      font-size: ${cal800(16)};
      padding: ${cal800(11)} ${cal800(39)} 0;
    }
  }
  div.title2 {
    position: relative;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    background-image: url(${Images.iTitle2});
    width: ${calVW(414)};
    height: ${calVW(55)};
    top: 0;
    left: -${calVW(39)};
    font-size: ${calVW(16)};
    font-weight: 600;
    line-height: 1.69;
    color: #ffffff;
    padding: ${calVW(11)} ${calVW(39)} 0;
    @media screen and (min-width: 800px) {
      top: 0;
      left: -${cal800(39)};
      width: ${cal800(414)};
      height: ${cal800(55)};
      font-size: ${cal800(16)};
      padding: ${cal800(11)} ${cal800(39)} 0;
    }
  }
  div.title2s {
    position: relative;
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain;
    background-image: url(${Images.iTitle2s});
    width: ${calVW(414)};
    height: ${calVW(55)};
    top: 0;
    left: -${calVW(39)};
    font-size: ${calVW(16)};
    font-weight: 600;
    line-height: 1.69;
    color: #ffffff;
    padding: ${calVW(11)} ${calVW(39)} 0;
    @media screen and (min-width: 800px) {
      top: 0;
      left: -${cal800(39)};
      width: ${cal800(414)};
      height: ${cal800(55)};
      font-size: ${cal800(16)};
      padding: ${cal800(11)} ${cal800(39)} 0;
    }
  }
`;

export const RankStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: ${calVW(18)};
  width: ${calVW(275)};
  height: ${calVW(80)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${Images.titleBg});
  font-size: ${calVW(16)};
  font-weight: 600;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  margin-top ${calVW(15)};
  margin-bottom: ${calVW(10)};
  @media screen and (min-width: 800px) {
    font-size: ${cal800(16)};
    font-weight: 600;
    padding-top: ${cal800(18)};
    width: ${cal800(275)};
    height: ${cal800(80)};
    margin-top ${cal800(15)};
    margin-bottom: ${cal800(10)};
  }
`;

export const CountDownStyled = styled(Countdown)`
width: ${calVW(800)};
height: ${calVW(50)};
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${Images.timeBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 700px 150px;
  max-width: 800px;
  padding-bottom: ${calVW(20)};
  @media screen and (min-width: 800px) {
    padding-bottom: ${cal800(20)};
  }
  ${WrapCountdownContent} {
    max-width: 800px;
    width: 100%;
    margin-top: 50px;
    div {
      margin-top: 20px;
      margin-bottom: 0;
      border: none;
      font-size: ${calVW(16)};
      font-weight: 600;
      line-height: 1.25;
      color: #ffffff;
      :nth-child(2) {
        color: #6dd9e3;
        font-size: ${calVW(16)};
        margin-top: ${calVW(4)};
      }
    }
    @media screen and (min-width: 800px) {
      div {
        font-size: ${cal800(16)};
        :nth-child(2) {
          font-size: ${cal800(16)};
          margin-top: ${cal800(4)};
        }
      }
    }
  }
`;

export const Tabs0Styled = styled(Tabs)`
  padding-top: ${calVW(14)};
  @media screen and (min-width:800px){
    padding-top: ${cal800(14)};
   }
  background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      font-size: 3.14vw;
      color: #ffffff;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(103)};
        height: ${calVW(108)};
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        :nth-child(1) {
          background-image: url(${Images.xtab1});
        }
        :nth-child(2) {
          background-image: url(${Images.xtab2});
        }
        :nth-child(3) {
          background-image: url(${Images.xtab3});
        }
        :nth-child(4) {
          background-image: url(${Images.xtab4});
        }
        
        @media screen and (min-width: 800px) {
          width: ${cal800(103)};
          height: ${cal800(108)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.xtab1A});
        }
        :nth-child(2) {
          background-image: url(${Images.xtab2A});
        }
        :nth-child(3) {
          background-image: url(${Images.xtab3A});
        }
        :nth-child(4) {
          background-image: url(${Images.xtab4A});
        }
      }
    }
  }
`;

export const Tabs00Styled = styled(Tabs)`
  margin-top: ${calVW(31)};
  @media screen and (min-width: 800px){
    margin-top: ${cal800(31)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(117)};
        height: ${calVW(39)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.xtaboff});
          margin-right: 9px;
        }
        :nth-child(2) {
          width: ${calVW(117)};
          background-image: url(${Images.xtaboff});
          margin-right: 9px;
        }
        :nth-child(3) {
          width: ${calVW(117)};
          background-image: url(${Images.xtaboff});
          margin-right: 23px;
        }
        :nth-child(4) {
          width: ${calVW(117)};
          background-image: url(${Images.xtaboff});
          margin-right: 9px;
          margin-top: 16px;
        }
        :nth-child(5) {
          width: ${calVW(117)};
          background-image: url(${Images.xtaboff});
          margin-top: 16px;
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(117)};
          height: ${cal800(39)};
          :nth-child(2) {
            width: ${cal800(117)};
          }
          :nth-child(3) {
            width: ${cal800(117)};
          }
          :nth-child(4) {
            width: ${cal800(117)};
            margin-top: 16px;
          }
          :nth-child(5) {
            width: ${cal800(117)};
            margin-top: 16px;
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.xtabon});
        }
        :nth-child(2) {
          background-image: url(${Images.xtabon});
        }
        :nth-child(3) {
          background-image: url(${Images.xtabon});
        }
        :nth-child(4) {
          background-image: url(${Images.xtabon});
        }
        :nth-child(5) {
          background-image: url(${Images.xtabon});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    padding-bottom: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
      padding-bottom: ${cal800(26)};
    }
  }
`;

export const Tabs10Styled = styled(Tabs)`
  margin-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(26)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(117)};
        height: ${calVW(39)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.suboff});
        }
        :nth-child(2) {
          background-image: url(${Images.suboff});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(117)};
          height: ${cal800(39)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.subon});
        }
        :nth-child(2) {
          background-image: url(${Images.subon});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
    }
  }
`;

export const Tabs110Styled = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(60)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab211I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab212I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab213I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(60)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab211A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab212A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab213A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;



export const Tabs110Styledxx = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(117)};
        height: ${calVW(31)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.suboff});
        }
        :nth-child(2) {
          background-image: url(${Images.suboff});
        }
        :nth-child(3) {
          background-image: url(${Images.suboff});
        }
        :nth-child(4) {
          margin-top:17px;
          background-image: url(${Images.suboff});
        }
        :nth-child(5) {
          margin-top:17px;
          background-image: url(${Images.suboff});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(117)};
          height: ${cal800(31)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.subon});
        }
        :nth-child(2) {
          background-image: url(${Images.subon});
        }
        :nth-child(3) {
          background-image: url(${Images.subon});
        }
        :nth-child(4) {
          margin-top:17px;
          background-image: url(${Images.subon});
        }
        :nth-child(5) {
          margin-top:17px;
          background-image: url(${Images.subon});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;



export const Tabs_intro1Styled = styled(Tabs)`
  margin-top: ${calVW(-6 )};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(117)};
        height: ${calVW(31)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.suboff});
        }
        :nth-child(2) {
          background-image: url(${Images.suboff});
        }
        :nth-child(3) {
          background-image: url(${Images.suboff});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(117)};
          height: ${cal800(31)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.subon});
        }
        :nth-child(2) {
          background-image: url(${Images.subon});
        }
        :nth-child(3) {
          background-image: url(${Images.subon});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;


export const Tabs_qualifyStyled = styled(Tabs)`
  margin-top: ${calVW(-6 )};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(117)};
        height: ${calVW(31)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.suboff});
        }
        :nth-child(2) {
          background-image: url(${Images.suboff});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(117)};
          height: ${cal800(31)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.subon});
        }
        :nth-child(2) {
          background-image: url(${Images.subon});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;


// export const Tabs_step4Styled = styled(Tabs)`
//   margin-top: ${calVW(-6 )};
//   @media screen and (min-width: 800px) {
//     margin-top: ${cal800(-6)};
//   }
//   & > ${DivWrapTabMenu} {
//     ${UlLine} {
//       max-width: 800px;
//       flex: 0 0 auto;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       position: relative;
//       flex-wrap: wrap;
//       ${LiTab} {
//         flex: 0 0 auto;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: ${calVW(95)};
//         height: ${calVW(95)};
//         margin-right:${calVW(10)};
//         background-repeat: no-repeat;
//         background-size: 100% 100%;
//         background-position: center;
//         :nth-child(1) {
//           position:relative;
//           background-image: url(${Images.xmassocksoff});

//           :after{
//             content:${Images.n1off};
//             position:absolute;
//           }
//         }
//         :nth-child(2) {
//           background-image: url(${Images.candycanesoff});
//         }
//         :nth-child(3) {
//           background-image: url(${Images.gingermanoff});
//         }
//         @media screen and (min-width: 800px) {
//           width: ${cal800(95)};
//           height: ${cal800(95)};
//         }
//       }
//       ${LiTabActive} {
//         :nth-child(1) {
//           position:relative;
//           background-image: url(${Images.xmassockson});

//           :after{
//             content:${Images.n1on};
//             position:absolute;
            
//           }
//         }
//         :nth-child(2) {
//           background-image: url(${Images.candycaneson});
//         }
//         :nth-child(3) {
//           background-image: url(${Images.gingermanon});
//         }
//       }
//     }
//   }
//   > ${DivTabContent} {
//     background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
//     padding-top: ${calVW(20)};
//     @media screen and (min-width: 800px) {
//       padding-top: ${cal800(20)};
//     }
//   }
// `;


export const Tabs_round1Styled = styled(Tabs)`
  margin-top: ${calVW(58)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(58)};
  }
  & > ${DivWrapTabMenu} {
    position: relative;
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 3.38vw;
      font-weight: 600;
      color: #976337;
      flex-wrap: wrap;
      ${LiTab} {
        position: relative;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: ${calVW(95)};
        min-height: ${calVW(95)};
        margin-right: ${calVW(33)};
        :nth-child(1) {
          > div:first-child {
            width: ${calVW(95)};
            background-image: url(${Images.xmassocksoff});
            background-repeat: no-repeat;
            background-size: ${calVW(95)} ${calVW(95)};
            background-position: top center;
            padding-top: ${calVW(95 + 39)};
            position: relative;
            z-index: 1;
          }
        }
        :nth-child(2) {
          > div:first-child {
            width: ${calVW(95)};
            background-image: url(${Images.candycanesoff});
            background-repeat: no-repeat;
            background-size: ${calVW(95)} ${calVW(95)};
            background-position: top center;
            padding-top: ${calVW(95 + 39)};
            position: relative;
            z-index: 1;
          }
        }
        :nth-child(3) {
          margin-right: 0;
          > div:first-child {
            width: ${calVW(95)};
            background-image: url(${Images.gingermanoff});
            background-repeat: no-repeat;
            background-size: ${calVW(95)} ${calVW(95)};
            background-position: top center;
            padding-top: ${calVW(95 + 39)};
            position: relative;
            z-index: 1;
          }
        }
        > div {
          color: #8f8fa8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: ${calVW(14)};
          font-weight: 500;
        }
        @media screen and (min-width: 800px) {
          font-size: ${cal800(32)};
          width: ${cal800(95)};
          min-height: ${cal800(95)};
          margin-right: ${cal800(33)};
          :nth-child(1) {
            > div:first-child {
              width: ${cal800(95)};
              background-size: ${cal800(95)} ${cal800(95)};
              padding-top: ${cal800(95 + 39)};
            }
          }
          :nth-child(2) {
            > div:first-child {
              width: ${cal800(95)};
              background-size: ${cal800(95)} ${cal800(95)};
              padding-top: ${cal800(95 + 39)};
            }
          }
          :nth-child(3) {
            margin-right: 0;
            > div:first-child {
              width: ${cal800(95)};
              background-size: ${cal800(95)} ${cal800(95)};
              padding-top: ${cal800(95 + 39)};
            }
          }
          > div {
            font-size: ${cal800(14)};
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          > div:first-child {
            background-image: url(${Images.xmassockson});
          }
        }
        :nth-child(2) {
          > div:first-child {
            background-image: url(${Images.candycaneson});
          }
        }
        :nth-child(3) {
          > div:first-child {
            background-image: url(${Images.gingermanon});
          }
        }
        > div {
          color: #fff;
        }
      }
    }
  }
  > ${DivTabContent} {
    margin-top: ${calVW(52)};
    @media screen and (min-width: 800px) {
      margin-top: ${cal800(52)};
    }
  }
`;

// export const Tabs_round1Styled = styled(Tabs)`
//   margin-top: ${calVW(-6 )};
//   @media screen and (min-width: 800px) {
//     margin-top: ${cal800(-6)};
//   }
//   & > ${DivWrapTabMenu} {
//     ${UlLine} {
//       max-width: 800px;
//       flex: 0 0 auto;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       position: relative;
//       flex-wrap: wrap;
//       ${LiTab} {
//         flex: 0 0 auto;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: ${calVW(95)};
//         height: ${calVW(95)};
//         margin-right:${calVW(10)};
//         background-repeat: no-repeat;
//         background-size: 100% 100%;
//         background-position: center;
//         :nth-child(1) {
//           position:relative;
//           background-image: url(${Images.xmassocksoff});

//           :after{
//             content:${Images.n1off};
//             position:absolute;
//           }
//         }
//         :nth-child(2) {
//           background-image: url(${Images.candycanesoff});
//         }
//         :nth-child(3) {
//           background-image: url(${Images.gingermanoff});
//         }
//         @media screen and (min-width: 800px) {
//           width: ${cal800(95)};
//           height: ${cal800(95)};
//         }
//       }
//       ${LiTabActive} {
//         :nth-child(1) {
//           position:relative;
//           background-image: url(${Images.xmassockson});

//           :after{
//             content:${Images.n1on};
//             position:absolute;
            
//           }
//         }
//         :nth-child(2) {
//           background-image: url(${Images.candycaneson});
//         }
//         :nth-child(3) {
//           background-image: url(${Images.gingermanon});
//         }
//       }
//     }
//   }
//   > ${DivTabContent} {
//     background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
//     padding-top: ${calVW(20)};
//     @media screen and (min-width: 800px) {
//       padding-top: ${cal800(20)};
//     }
//   }
// `;

export const Tabs_step4Styled = styled(Tabs)`
  margin-top: ${calVW(58)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(58)};
  }
  & > ${DivWrapTabMenu} {
    position: relative;
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 3.38vw;
      font-weight: 600;
      color: #976337;
      flex-wrap: wrap;
      ${LiTab} {
        position: relative;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: ${calVW(95)};
        min-height: ${calVW(95)};
        margin-right: ${calVW(33)};
        :nth-child(1) {
          > div:first-child {
            width: ${calVW(95)};
            background-image: url(${Images.xmassocksoff});
            background-repeat: no-repeat;
            background-size: ${calVW(95)} ${calVW(95)};
            background-position: top center;
            padding-top: ${calVW(95 + 39)};
            position: relative;
            z-index: 1;
          }
        }
        :nth-child(2) {
          > div:first-child {
            width: ${calVW(95)};
            background-image: url(${Images.candycanesoff});
            background-repeat: no-repeat;
            background-size: ${calVW(95)} ${calVW(95)};
            background-position: top center;
            padding-top: ${calVW(95 + 39)};
            position: relative;
            z-index: 1;
          }
        }
        :nth-child(3) {
          margin-right: 0;
          > div:first-child {
            width: ${calVW(95)};
            background-image: url(${Images.gingermanoff});
            background-repeat: no-repeat;
            background-size: ${calVW(95)} ${calVW(95)};
            background-position: top center;
            padding-top: ${calVW(95 + 39)};
            position: relative;
            z-index: 1;
          }
        }
        > div {
          color: #8f8fa8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: ${calVW(14)};
          font-weight: 500;
        }
        @media screen and (min-width: 800px) {
          font-size: ${cal800(32)};
          width: ${cal800(95)};
          min-height: ${cal800(95)};
          margin-right: ${cal800(33)};
          :nth-child(1) {
            > div:first-child {
              width: ${cal800(95)};
              background-size: ${cal800(95)} ${cal800(95)};
              padding-top: ${cal800(95 + 39)};
            }
          }
          :nth-child(2) {
            > div:first-child {
              width: ${cal800(95)};
              background-size: ${cal800(95)} ${cal800(95)};
              padding-top: ${cal800(95 + 39)};
            }
          }
          :nth-child(3) {
            > div:first-child {
              width: ${cal800(95)};
              background-size: ${cal800(95)} ${cal800(95)};
              padding-top: ${cal800(95 + 39)};
            }
          }
          > div {
            font-size: ${cal800(14)};
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          > div:first-child {
            background-image: url(${Images.xmassockson});
          }
        }
        :nth-child(2) {
          > div:first-child {
            background-image: url(${Images.candycaneson});
          }
        }
        :nth-child(3) {
          > div:first-child {
            background-image: url(${Images.gingermanon});
          }
        }
        > div {
          color: #fff;
        }
      }
    }
  }
`;


export const Tabs20Styledxx = styled(Tabs)`
  margin-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(26)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 600px;
      margin:0 auto;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(117)};
        height: ${calVW(39)};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.suboff});
        }
        :nth-child(2) {
          background-image: url(${Images.suboff});
        }
        :nth-child(3) {
          background-image: url(${Images.suboff});
        }
        :nth-child(4) {
          background-image: url(${Images.suboff});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(117)};
          height: ${cal800(39)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.subon});
        }
        :nth-child(2) {
          background-image: url(${Images.subon});
        }
        :nth-child(3) {
          background-image: url(${Images.subon});
        }
        :nth-child(4) {
          background-image: url(${Images.subon});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
    }
  }
`;

export const Tabs20Styled = styled(Tabs)`
  margin-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(26)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(104)};
        height: ${calVW(73)};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab31I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab32I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab33I});
        }
        :nth-child(4) {
          width: ${calVW(102)};
          background-image: url(${Images.tab34I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(104)};
          height: ${cal800(73)};
          :nth-child(4) {
            width: ${cal800(102.025)};
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab31A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab32A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab33A});
        }
        :nth-child(4) {
          background-image: url(${Images.tab34A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
    }
  }
`;

export const Tabs230Styled = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(60)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab231I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab232I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab233I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(60)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab231A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab232A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab233A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
  }
`;

export const Tabs30Styledxx = styled(Tabs)`
margin-top: ${calVW(26)};
@media screen and (min-width: 800px) {
  margin-top: ${cal800(26)};
}
& > ${DivWrapTabMenu} {
  ${UlLine} {
    max-width: 600px;
    margin:0 auto;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    ${LiTab} {
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${calVW(117)};
      height: ${calVW(39)};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      :nth-child(1) {
        background-image: url(${Images.suboff});
      }
      :nth-child(2) {
        background-image: url(${Images.suboff});
      }
      :nth-child(3) {
        background-image: url(${Images.suboff});
      }
      :nth-child(4) {
        background-image: url(${Images.suboff});
      }
      @media screen and (min-width: 800px) {
        width: ${cal800(117)};
        height: ${cal800(39)};
      }
    }
    ${LiTabActive} {
      :nth-child(1) {
        background-image: url(${Images.subon});
      }
      :nth-child(2) {
        background-image: url(${Images.subon});
      }
      :nth-child(3) {
        background-image: url(${Images.subon});
      }
      :nth-child(4) {
        background-image: url(${Images.subon});
      }
    }
  }
}
> ${DivTabContent} {
  background: url(${Images.bgm}) 0% 0% / 100% repeat-y;
  padding-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    padding-top: ${cal800(26)};
  }
}
`;


export const Tabs30Styled = styled(Tabs)`
  margin-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(26)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(73)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab41I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab42I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab43I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(73)};
          :nth-child(3) {
            width: ${cal800(138.005)};
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab41A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab42A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab43A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
    }
  }
`;

export const Tabs300Styled = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(60)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab411I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab412I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab413I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(60)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab411A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab412A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab413A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;

export const Tabs310Styled = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(60)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab421I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab422I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab423I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(60)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab421A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab422A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab423A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;

export const Tabs40Styled = styled(Tabs)`
  margin-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(26)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(104)};
        height: ${calVW(73)};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab51I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab52I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab53I});
        }
        :nth-child(4) {
          background-image: url(${Images.tab54I});
          width: ${calVW(102)};
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(104)};
          height: ${cal800(73)};
          :nth-child(4) {
            width: ${cal800(102.025)};
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab51A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab52A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab53A});
        }
        :nth-child(4) {
          background-image: url(${Images.tab54A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
    }
  }
`;

export const Tabs410Styled = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(60)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab521I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab522I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab523I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(60)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab521A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab522A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab523A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;

export const Tabs420Styled = styled(Tabs)`
  margin-top: ${calVW(-6)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(-6)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(207)};
        height: ${calVW(60)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab531I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab532I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(207)};
          height: ${cal800(60)};
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab531A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab532A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(20)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(20)};
    }
  }
`;

export const Tabs50Styled = styled(Tabs)`
  margin-top: ${calVW(26)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(26)};
  }
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-wrap: wrap;
      ${LiTab} {
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(138)};
        height: ${calVW(73)};
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        :nth-child(1) {
          background-image: url(${Images.tab61I});
        }
        :nth-child(2) {
          background-image: url(${Images.tab62I});
        }
        :nth-child(3) {
          background-image: url(${Images.tab63I});
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(138)};
          height: ${cal800(73)};
          :nth-child(3) {
            width: ${cal800(138.005)};
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.tab61A});
        }
        :nth-child(2) {
          background-image: url(${Images.tab62A});
        }
        :nth-child(3) {
          background-image: url(${Images.tab63A});
        }
      }
    }
  }
  > ${DivTabContent} {
    background: url(${Images.tabBg2}) 0% 0% / 100% repeat-y;
    padding-top: ${calVW(26)};
    @media screen and (min-width: 800px) {
      padding-top: ${cal800(26)};
    }
  }
`;

export const Tabs000Styled = styled(Tabs)`
  margin-top: 7.56vw;
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 62.6px);
  }
  & > ${DivWrapTabMenu} {
    margin: 0 ${calVW(12)};
    @media screen and (min-width: 800px) {
      margin: 0 ${cal800(12)};
    }
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.38vw;
      font-weight: 600;
      color: #ffffff;
      flex-wrap: wrap;
      ${LiTab} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42.02vw;
        height: 10.62vw;
        background-image: url(${Images.btnTabI});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        margin-bottom: 3.62vw;
        > div {
          opacity: 0.3;
        }
        @media screen and (min-width: 800px) {
          width: calc((800 / 828) * 348px);
          height: calc((800 / 828) * 88px);
          margin-bottom: calc((800 / 828) * 30px);
          font-size: ${cal800(14)};
        }
      }
      ${LiTabActive} {
        background-image: url(${Images.btnTabA});
        > div {
          opacity: 1;
          -webkit-text-stroke: 0.5px #fe41cb;
        }
      }
    }
  }
`;

export const Tabs010Styled = styled(Tabs)`
  margin-top: ${calVW(31)};
  @media screen and (min-width: 800px) {
    margin-top: ${cal800(31)};
  }
  & > ${DivWrapTabMenu} {
    margin: 0 ${calVW(42)};
    @media screen and (min-width: 800px) {
      margin: 0 ${cal800(42)};
    }
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.38vw;
      font-weight: 600;
      color: #ffffff;
      flex-wrap: wrap;
      ${LiTab} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calVW(72)};
        height: ${calVW(40)};
        border-radius: 23px;
        border: solid 1px rgba(255, 255, 255, 0.6);
        background-color: rgba(51, 0, 89, 0.2);
        margin-bottom: ${calVW(23)};
        opacity: 0.3;
        :nth-child(1) {
          margin-right: ${cal800(14)};
        }
        @media screen and (min-width: 800px) {
          width: ${cal800(72)};
          height: ${cal800(40)};
          margin-bottom: ${cal800(23)};
          font-size: ${cal800(14)};
          :nth-child(1) {
            margin-right: ${cal800(11)};
          }
        }
      }
      ${LiTabActive} {
        border-radius: 23px;
        box-shadow: 0 0 12px 3px rgba(254, 65, 203, 0.5);
        border: solid 2px #fe41cb;
        background-color: rgba(76, 0, 134, 0.3);
        opacity: 1;
      }
    }
  }
`;

export const Tabs0000Styled = styled(Tabs)`
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.38vw;
      font-weight: 600;
      color: #ffffff;
      flex-wrap: wrap;
      ${LiTab} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        opacity: 0.7;
        border-bottom: solid 1px rgba(255, 255, 255, 0.5);
        > div {
          text-shadow: 0 0 10px rgba(254, 65, 203, 0.7);
          color: #ffffff;
          opacity: 0.5;
          font-size: 3.38vw;
          text-align: center;
          margin-bottom: ${calVW(18)};
          @media screen and (min-width: 800px) {
            font-size: calc((800 / 828) * 28px);
            margin-bottom: ${cal800(18)};
          }
          div:nth-child(1) {
            font-size: 3.38vw;
            font-weight: 600;
            line-height: 1.29;
            margin-bottom: 1.2vw;
            @media screen and (min-width: 800px) {
              font-size: calc((800 / 828) * 28px);
              margin-bottom: calc((800 / 828) * 10px);
            }
          }
          div:nth-child(2) {
            font-size: ${calVW(24)};
            font-weight: 600;
            line-height: 0.67;
            font-style: oblique;
            @media screen and (min-width: 800px) {
              font-size: ${cal800(24)};
            }
          }
        }
      }
      ${LiTabActive} {
        > div {
          opacity: 1;
          color: #fe41cb;
        }
        border-bottom: solid 3px #fe41cb;
      }
    }
  }
`;

export const Tabs0031Styled = styled(Tabs)`
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.38vw;
      font-weight: 600;
      color: #ffffff;
      flex-wrap: wrap;
      ${LiTab} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        opacity: 0.7;
        border-bottom: solid 1px rgba(255, 255, 255, 0.5);
        > div {
          text-shadow: 0 0 10px rgba(254, 65, 203, 0.7);
          color: #ffffff;
          opacity: 0.5;
          font-size: ${calVW(24)};
          text-align: center;
          margin-top: ${calVW(7)};
          margin-bottom: ${calVW(12)};
          @media screen and (min-width: 800px) {
            font-size: ${cal800(24)};
            margin-top: ${cal800(7)};
            margin-bottom: ${cal800(12)};
          }
        }
      }
      ${LiTabActive} {
        > div {
          opacity: 1;
          color: #fe41cb;
        }
        border-bottom: solid 3px #fe41cb;
      }
    }
  }
`;

export const Tabs0033Styled = styled(Tabs)`
  & > ${DivWrapTabMenu} {
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.38vw;
      font-weight: 600;
      color: #ffffff;
      flex-wrap: wrap;
      ${LiTab} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        opacity: 0.7;
        border-bottom: solid 1px rgba(255, 255, 255, 0.5);
        > div {
          text-shadow: 0 0 10px rgba(254, 65, 203, 0.7);
          color: #ffffff;
          opacity: 0.5;
          font-size: ${calVW(14)};
          text-align: center;
          margin-bottom: ${calVW(12)};
          @media screen and (min-width: 800px) {
            font-size: ${cal800(14)};
            margin-bottom: ${cal800(12)};
          }
        }
      }
      ${LiTabActive} {
        > div {
          opacity: 1;
          color: #fe41cb;
        }
        border-bottom: solid 3px #fe41cb;
      }
    }
  }
`;

export const Tabs001Styled = styled(Tabs)`
  margin-top: 7.56vw;
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 62.6px);
  }
  & > ${DivWrapTabMenu} {
    margin: 0 ${calVW(12)};
    @media screen and (min-width: 800px) {
      margin: 0 ${cal800(12)};
    }
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      color: #ffffff;
      flex-wrap: wrap;
      ${LiTab} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42.02vw;
        height: 10.62vw;
        font-size: ${calVW(16)};
        background-image: url(${Images.btnTabI});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        margin-bottom: 3.62vw;
        :nth-child(5) {
          background-image: url(${Images.btnTabLI});
          background-size: ${calVW(363)} ${calVW(44)};
        }
        > div {
          opacity: 0.3;
        }
        @media screen and (min-width: 800px) {
          font-size: ${cal800(16)};
          width: calc((800 / 828) * 348px);
          height: calc((800 / 828) * 88px);
          margin-bottom: calc((800 / 828) * 30px);
          :nth-child(5) {
            background-size: ${cal800(363)} ${cal800(44)};
          }
        }
      }
      ${LiTabActive} {
        background-image: url(${Images.btnTabA});
        :nth-child(5) {
          background-image: url(${Images.btnTabLA});
          background-size: 100%;
        }
        > div {
          opacity: 1;
          -webkit-text-stroke: 0.5px #fe41cb;
        }
      }
    }
  }
`;

export const Tabs100Styled = styled(Tabs)`
  margin-top: 9.25vw;
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 76.6px);
  }
  & > ${DivWrapTabMenu} {
    margin-bottom: 9.29vw;
    @media screen and (min-width: 800px) {
      margin-bottom: calc((800 / 828) * 75.4px);
    }
    ${UlLine} {
      max-width: 800px;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 3.38vw;
      font-weight: 600;
      color: #976337;
      flex-wrap: wrap;
      ${LiTab} {
        position: relative;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 25.94vw;
        height: 53.26vw;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top center;
        margin-right: 3.04vw;
        :nth-child(1) {
          background-image: url(${Images.teamAOff});
        }
        :nth-child(2) {
          background-image: url(${Images.teamBOff});
        }
        :nth-child(3) {
          margin-right: 0;
          background-image: url(${Images.teamCOff});
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div {
            :nth-child(1) {
              text-align: center;
              width: 22.7vw;
              background-repeat: no-repeat;
              background-image: url(${Images.lineThick}),
                url(${Images.lineThick});
              background-size: contain;
              background-position: top, bottom;
              letter-spacing: 0.17vw;
              opacity: 0.6;
            }
            :nth-child(2),
            :nth-child(3) {
              opacity: 0.6;
              text-shadow: 1px 1px 0 rgba(253, 253, 253, 0.8);
            }
          }
        }
        @media screen and (min-width: 800px) {
          font-size: calc((800 / 828) * 32px);
          width: calc((800 / 828) * 214.8px);
          height: calc((800 / 828) * 441px);
          margin-right: calc((800 / 828) * 25.2px);
          > div {
            div {
              :nth-child(1) {
                letter-spacing: calc((800 / 828) * 1.5px);
              }
            }
          }
        }
      }
      ${LiTabActive} {
        :nth-child(1) {
          background-image: url(${Images.teamAOn});
        }
        :nth-child(2) {
          background-image: url(${Images.teamBOn});
        }
        :nth-child(3) {
          background-image: url(${Images.teamCOn});
        }
        > div {
          div {
            :nth-child(1) {
              opacity: 1;
              background-image: url(${Images.lineThick}),
                url(${Images.lineThick}),
                linear-gradient(
                  to right,
                  rgba(222, 162, 42, 0),
                  rgba(222, 162, 42, 0.5) 20%,
                  #ffe69d 50%,
                  rgba(222, 162, 42, 0.5) 80%,
                  rgba(222, 162, 42, 0)
                );
            }
            :nth-child(2) {
              opacity: 1;
              color: #e84e38;
            }
            :nth-child(3) {
              opacity: 1;
              color: #e84e38;
            }
          }
        }
      }
    }
  }
`;


export const RankBoard = styled.div`
  position: relative;
  width: 100%;
  height: ${calVW(317)};
  background-repeat: no-repeat;
  background-image: url(${Images.rankBoardBg});
  background-size: 100% 100%;
  background-position: center;
  margin-top: ${calVW(54)};
  margin-bottom: ${calVW(32)};
  @media screen and (min-width: 800px) {
    height: ${cal800(317)};
    margin-top: ${cal800(54)};
    margin-bottom: ${cal800(32)};
  }
`;

export const RankBoardItem = styled.div<{
  bg: string;
  team: number;
  rank: number;
}>`
  position: absolute;
  right: ${calVW(312)};
  ${props =>
    props.team === 1
      ? css`
          top: ${calVW(17)};
        `
      : ''}
  ${props =>
    props.team === 2
      ? css`
          top: ${calVW(106)};
        `
      : ''}
  ${props =>
    props.team === 3
      ? css`
          top: ${calVW(196)};
        `
      : ''}
  ${props =>
    props.rank === 1
      ? css`
          right: 0;
        `
      : ''}
  ${props =>
    props.rank === 2
      ? css`
          right: ${calVW(69)};
        `
      : ''}
  ${props =>
    props.rank === 3
      ? css`
          right: ${calVW(155)};
        `
      : ''}
  ${props =>
    props.rank === 4
      ? css`
          right: ${calVW(238)};
        `
      : ''}    
  width: ${calVW(103)};
  height: ${calVW(81)};
  background-repeat: no-repeat;
  ${props =>
    props.bg
      ? css`
          background-image: url(${props.bg});
        `
      : ''}
  background-size: 100% 100%;
  background-position: center;
  @media screen and (min-width: 800px) {
    width: ${cal800(103)};
    height: ${cal800(81)};
    right: ${cal800(312)};
    ${props =>
      props.team === 1
        ? css`
            top: ${cal800(17)};
          `
        : ''}
    ${props =>
      props.team === 2
        ? css`
            top: ${cal800(106)};
          `
        : ''}
    ${props =>
      props.team === 3
        ? css`
            top: ${cal800(196)};
          `
        : ''}
    ${props =>
      props.rank === 1
        ? css`
            right: 0;
          `
        : ''}
    ${props =>
      props.rank === 2
        ? css`
            right: ${cal800(69)};
          `
        : ''}
    ${props =>
      props.rank === 3
        ? css`
            right: ${cal800(155)};
          `
        : ''}
    ${props =>
      props.rank === 4
        ? css`
            right: ${cal800(238)};
          `
        : ''}
  }
`;


export const CrownStyled = styled.div<{ bg: string }>`
  position: absolute;
  top: ${calVW(-24)};
  left: ${calVW((95 - 53) / 2)};
  width: ${calVW(53)};
  height: ${calVW(29)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${props =>
    props.bg
      ? css`
          background-image: url(${props.bg});
        `
      : ''}
  @media screen and (min-width: 800px) {
    width: ${cal800(53)};
    height: ${cal800(29)};
    top: ${cal800(-24)};
    left: ${cal800((95 - 53) / 2)};
  }
`;

export const VSStyled = styled.div`
  position: absolute;
  font-size: ${calVW(16)};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffd900 !important;
  top: ${calVW(49 + 95)};
  left: ${calVW(9 + 95)};
  @media screen and (min-width: 800px) {
    font-size: ${cal800(16)};
    top: ${cal800(49 + 95)};
    left: ${cal800(9 + 95)};
  }
`;


export const ScaleBoard = styled.div`
  position: relative;
  margin-top: 8.93vw;
  margin-bottom: 7.6vw;
  height: 25.12vw;
  @media screen and (min-width: 800px) {
    height: calc((800 / 828) * 208px);
    margin-top: calc((800 / 828) * 74px);
    margin-bottom: calc((800 / 828) * 63px);
  }
`;

export const ScaleBoardItemA = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(235, 160, 45, 0) 0%,
    rgba(235, 160, 45, 0.4) 49%,
    rgba(235, 160, 45, 0) 99%
  );
  height: 6.28vw;
  @media screen and (min-width: 800px) {
    height: calc((800 / 828) * 52px);
  }
`;

export const ScaleBoardItemB = styled.div`
  background-image: linear-gradient(
    to left,
    rgba(255, 190, 73, 0),
    rgba(255, 190, 73, 0.4) 50%,
    rgba(255, 190, 73, 0)
  );
  height: 6.28vw;
  @media screen and (min-width: 800px) {
    height: calc((800 / 828) * 52px);
  }
`;

export const ScaleText = styled.span<{ position: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 1.93vw;
  color: #a5773e;
  text-shadow: 0 0 1px #ffffff;
  font-weight: 600;
  ${props =>
    props.position === 'left'
      ? css`
          text-align: right;
        `
      : css`
          text-align: left;
        `}
  line-height: 1.375;
  width: 9.42vw;
  ${props =>
    props.position === 'left'
      ? css`
          left: 1.88vw;
        `
      : css`
          right: 1.88vw;
        `}
  top: -0.96vw;
  span {
    margin-bottom: 3.62vw;
  }
  @media screen and (min-width: 800px) {
    font-size: calc((800 / 828) * 16px);
    width: calc((800 / 828) * 78px);
    top: calc((800 / 828) * -8px);
    ${props =>
      props.position === 'left'
        ? css`
            left: calc((800 / 828) * 15.6px);
          `
        : css`
            right: calc((800 / 828) * 15.6px);
          `}
    span {
      margin-bottom: calc((800 / 828) * 30px);
    }
  }
`;

export const CakeTower = styled.div`
  width: 14.97vw;
  height: 26.44vw;
  background-image: url(${Images.cakeOff});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: flex-end;
  @media screen and (min-width: 800px) {
    width: calc((800 / 828) * 124px);
    height: calc((800 / 828) * 219px);
  }
`;

export const CakeTowerActive = styled.div<{ percent: string }>`
  width: 14.97vw;
  height: ${props => props.percent};
  background-image: url(${Images.cakeOn});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  @media screen and (min-width: 800px) {
    width: calc((800 / 828) * 124px);
  }
`;

export const CakeBox = styled.div`
  position: absolute;
  top: 0;
  left: 13.28vw;
  width: 73.43vw;
  height: 26.44vw;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    width: calc((800 / 828) * 608px);
    height: calc((800 / 828) * 219px);
    left: calc((800 / 828) * 110px);
  }
`;


export const Section = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  div:nth-child(1) {
    width: 34.54vw;
    height: 31.64vw;
    background-image: url(${props => props.bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (min-width: 800px) {
      width: calc((800 / 828) * 286px);
      height: calc((800 / 828) * 262px);
    }
  }
  div:nth-child(2) {
    font-size: 3.38vw;
    font-weight: 600;
    letter-spacing: -0.78px;
    color: #00eaff;
    text-shadow: 0 0 7px rgba(109, 243, 255, 0.7);
    margin-top: 5.07vw;
    @media screen and (min-width: 800px) {
      font-size: calc((800 / 828) * 28px);
      margin-top: calc((800 / 828) * 42px);
    }
  }
  div:nth-child(3) {
    cursor: pointer;
    width: 25.36vw;
    height: 7.48vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background-image: url(${Images.trophy});
    background-position: 6.28vw center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 3.38vw;
    font-weight: 600;
    line-height: 3.38vw;
    letter-spacing: -0.78px;
    color: #00eaff;
    text-shadow: 0 0 7px rgba(109, 243, 255, 0.7);
    margin-top: 5.07vw;
    border-radius: 7px;
    box-shadow: 0 0 4px 0 #ffffff, 0 0 15px 0 #00eeff;
    border: solid 2px #ffffff;
    padding-left: 12.31vw;
    @media screen and (min-width: 800px) {
      font-size: calc((800 / 828) * 28px);
      width: calc((800 / 828) * 210px);
      height: calc((800 / 828) * 62px);
      line-height: calc((800 / 828) * 28px);
      padding-left: calc((800 / 828) * 102px);
      background-position: calc((800 / 828) * 52px) center;
    }
    :hover {
      border-radius: 7px;
      box-shadow: 0 0 4px 0 #ffffff, 0 0 15px 1px rgba(168, 249, 255, 0.8);
      border: solid 2px #ffffff;
      background-color: #00eaff;
      color: #ffffff;
      background-image: url(${Images.trophyW});
    }
  }
`;

export const SectionImg = styled.img<{
  width: number;
  height: number;
  active: boolean;
}>`
  width: ${props => calVW(props.width)};
  height: ${props => calVW(props.height)};
  ${props =>
    !props.active
      ? css`
          opacity: 0.4;
        `
      : ''}
  @media screen and (min-width: 800px) {
    width: ${props => cal800(props.width)};
    height: ${props => cal800(props.height)};
  }
`;

export const SectionTitle = styled.div<{ active: boolean }>`
  text-shadow: 0 0 7px rgba(109, 243, 255, 0.7);
  font-size: ${calVW(9)};
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: center;
  color: ${props => (props.active ? '#00eaff' : '#fff')};
  margin-top: ${calVW(6)};
  @media screen and (min-width: 800px) {
    font-size: ${cal800(9)};
    margin-top: ${cal800(6)};
  }
`;

export const SectionLine = styled.div`
  font-size: ${calVW(12)};
  background-image: url(${Images.line});
  background-size: 50%;
  background-position: left center;
  background-repeat: repeat-x;
  width: 90%;
  text-align: center;
  margin-bottom: ${calVW(2)};
  @media screen and (min-width: 800px) {
    font-size: ${cal800(12)};
    margin-bottom: ${cal800(2)};
  }
`;

export const SectionWrapper = styled.div<{ show: boolean; top: number }>`
  overflow-y: scroll;
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  top: ${props => `${props.top}px`};
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .container {
    position: relative;
    z-index: 3;
    padding: ${calVW(71)} 0;
    background-image: url(${Images.bgPopTop}), url(${Images.bgPopBottom});
    background-size: 100%;
    background-position: top, bottom;
    background-repeat: no-repeat;
    margin: 0 auto;
    @media screen and (min-width: 800px) {
      padding: ${cal800(71)} 0;
    }
    .rowItem {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      padding-top: ${calVW(10)};
      @media screen and (min-width: 800px) {
        padding-top: ${cal800(10)};
      }
    }
    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url(${Images.bgPopMiddle});
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      padding-bottom: ${calVW(17)};
      @media screen and (min-width: 800px) {
        padding-bottom: ${cal800(17)};
      }
      .item {
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0 ${calVW(50)};
        @media screen and (min-width: 800px) {
          padding: 0 ${cal800(50)};
        }
      }
    }
    .section0 {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: ${calVW(13)};
      @media screen and (min-width: 800px) {
        margin-bottom: ${cal800(13)};
      }
    }
    .section1 {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: ${calVW(33)};
      margin-bottom: ${calVW(3)};
      @media screen and (min-width: 800px) {
        margin-right: ${cal800(33)};
        margin-bottom: ${cal800(3)};
      }
    }
    .section2 {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: ${calVW(3)};
      @media screen and (min-width: 800px) {
        margin-bottom: ${cal800(3)};
      }
    }
    .section3 {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: ${calVW(38)};
      margin-bottom: ${calVW(13)};
      @media screen and (min-width: 800px) {
        margin-right: ${cal800(38)};
        margin-bottom: ${cal800(13)};
      }
    }
  }
`;

export const BackToTop = styled.div`
  cursor: pointer;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 0px;
  bottom: 10%;
  z-index: 99;
  background: url(${Images.backTop}) center center / 100% no-repeat;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const VoteButton = styled.a`
  display: block;
  margin: 0 auto;
  width: ${calVW(215)};
  height: ${calVW(76)};
  background-image: url(${Images.voteBtn});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 800px) {
    width: ${cal800(215)};
    height: ${cal800(76)};
  }
`;

export const VoteContiner = styled.div`
  width: 100%;
  height: ${calVW(120)};
  padding-top: ${calVW(29.5)};
  margin-bottom: ${calVW(25)};
  background-image: url(${Images.buttonBg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 800px) {
    height: ${cal800(120)};
    padding-top: ${cal800(29.5)};
    margin-bottom: ${cal800(25)};
  }
`;

export const ImageCache = styled.img`
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
  background-image: url(${Images.tab11I}), url(${Images.tab12I}),
    url(${Images.tab13I}), url(${Images.tab14I}), url(${Images.tab11A}),
    url(${Images.tab12A}), url(${Images.tab13A}), url(${Images.tab14A}),
    url(${Images.tab21I}), url(${Images.tab22I}), url(${Images.tab23I}),
    url(${Images.tab21A}), url(${Images.tab22A}), url(${Images.tab23A}),
    url(${Images.tab31I}), url(${Images.tab32I}), url(${Images.tab33I}),
    url(${Images.tab34I}), url(${Images.tab31A}), url(${Images.tab32A}),
    url(${Images.tab33A}), url(${Images.tab34A}), url(${Images.tab41I}),
    url(${Images.tab42I}), url(${Images.tab43I}), url(${Images.tab41A}),
    url(${Images.tab42A}), url(${Images.tab43A}), url(${Images.tab51I}),
    url(${Images.tab52I}), url(${Images.tab53I}), url(${Images.tab54I}),
    url(${Images.tab51A}), url(${Images.tab52A}), url(${Images.tab53A}),
    url(${Images.tab54A}), url(${Images.tab61I}), url(${Images.tab62I}),
    url(${Images.tab63I}), url(${Images.tab61A}), url(${Images.tab62A}),
    url(${Images.tab63A}), url(${Images.tab211I}), url(${Images.tab212I}),
    url(${Images.tab213I}), url(${Images.tab211A}), url(${Images.tab212A}),
    url(${Images.tab213A}), url(${Images.tab231I}), url(${Images.tab232I}),
    url(${Images.tab233I}), url(${Images.tab231A}), url(${Images.tab232A}),
    url(${Images.tab233A}), url(${Images.tab411I}), url(${Images.tab412I}),
    url(${Images.tab413I}), url(${Images.tab411A}), url(${Images.tab412A}),
    url(${Images.tab413A}), url(${Images.tab421I}), url(${Images.tab422I}),
    url(${Images.tab423I}), url(${Images.tab421A}), url(${Images.tab422A}),
    url(${Images.tab423A}), url(${Images.tab521I}), url(${Images.tab522I}),
    url(${Images.tab523I}), url(${Images.tab521A}), url(${Images.tab522A}),
    url(${Images.tab523A}), url(${Images.tab531I}), url(${Images.tab532I}),
    url(${Images.tab531A}), url(${Images.tab532A}), url(${Images.tab1A}),
    url(${Images.tab2A}), url(${Images.tab3A}), url(${Images.tab4A}),
    url(${Images.tab5A}), url(${Images.tab6A}), url(${Images.tab1I}),
    url(${Images.tab2I}), url(${Images.tab3I}), url(${Images.tab4I}),
    url(${Images.tab5I}), url(${Images.tab6I});
`;
