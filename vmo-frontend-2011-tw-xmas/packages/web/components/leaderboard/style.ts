// 2002-tw-alliance

import styled from 'styled-components';
import images from '../../themes/images';

export const WrapTitle = styled.div`
  text-align: center;
  font-size: 20px;
  text-shadow: 0 0 13px #fbf6d5;
  font-weight: 600;
  letter-spacing: 2.75px;
  color: #fbf6d5;
  margin-top: 10.62vw;
  @media screen and (min-width: 800px) {
    margin-top: calc((800 / 828) * 88px);
  }
`;

export const WrapFilter = styled.div`
  margin: 0px auto;
  padding-top:10px;
  position: relative;
  background-color: rgba(9, 0, 59, 0.92);
  width:100%;
  &:after{
    content:'';
    display:flex;
    flex-direction:row;
    width:90%;
    border: 1px solid #ce9914;
    margin:0 auto;

    @media screen and (max-width: 800px) {
      width:90%;
    }
    }
  @media screen and (min-width: 800px) {
    padding: 10px 15px;
  }

  input {
    font-size: 1rem;
    width:90%;
    height:36px;
    display:flex;
    justify-content:center;
    line-height: 1;
    padding-left: 13px;
    padding-right: 60px;
    outline: none;
    color: #D5AD48;
    margin: 0 auto 20px;
    border-radius: 50px;
    /* box-shadow: 0 0 10px 5px rgba(254, 65, 203, 0.5), inset 0 0 25px 0 #fe41cb; */
    border: none;
    position: relative;

  
    &::-webkit-input-placeholder {
      /* color: #f094ed; */
      line-height: 16px;
    }
    &:-moz-placeholder {
      /* color: #f094ed; */
      line-height: 16px;
    }
    &:-ms-input-placeholder {
      /* color: #f094ed; */
      line-height: 16px;
    }
  }
`;

export const NoData = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  padding-bottom: 32px;
  font-weight: 600;
  line-height: 60px;
  padding-top: 15px;
`;

export const WrapLeaderboardItem = styled.div<{ withButton?: boolean }>`
  position: relative;
  height: 100%;
  overflow: hidden;
  .user-name {
    width: ${props => (props.withButton ? 'calc(100% - 85px)' : '100%')};
  }
`;

export const FrameBorder = styled.div`
  border: 1px solid #ce9914;
  background-size: 100% 100%;
  position: relative;
`;

// export const FrameBorder = styled.div`
//   background: url(${images.rankBg}) center;
//   background-size: 100% 100%;
//   padding: 0 3px;
//   position: relative;
//   border-radius: 25px;
//   border-bottom-left-radius: 40px;
//   border-bottom-right-radius: 40px;
//   &:before {
//     content: '';
//     position: absolute;
//     top: -3px;
//     left: 0;
//     width: 100%;
//     height: 25px;
//     z-index: 1;
//     background: url(${images.rankTopBg}) center no-repeat;
//     background-size: 100%;
//     background-position: top;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     bottom: 7px;
//     left: 0;
//     width: 100%;
//     height: 30px;
//     z-index: 1;
//     background: url(${images.rankBottomBg}) center no-repeat;
//     background-size: 100%;
//     background-position: bottom;
//   }
// `;

export const ToggleButton = styled.div<{ isOpen: boolean }>`
  width: 80px;
  height: 50px;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 35px;
  }
  position: absolute;
  top: -10px;
  left:45%;
  z-index: 11;
  background: url(${props => (props.isOpen ? images.missionTab : images.missionTab)})
    center no-repeat;
  background-size: 100%;
`;


export const BonusToggleButton = styled.div<{ isOpen: boolean }>`
  width: 60px;
  height: 24px;
  position: absolute;
  top: 30px;
  right: 16px;
  z-index: 11;
  background: url(${props => (props.isOpen ? images.plusOff : images.plusOn)});
    center no-repeat;
  background-size: 100%;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 20px;
  }
`;


export const WrapPanel = styled.div`
  background: url(${images.missionBG});
  background-size: cover;
  width:98%;
  height: 100%;
  margin: 0 auto;
`;

export const WrapMission = styled.div<{ isChecked?: boolean }>`
  width: 100%;
  height: 80px;
  background-color:#090029;
  border: 1px solid #ce9914;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-left: 15px;
  position: relative;
  &:after {
    content: '';
    width: 45px;
    height: 49px;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1;
    background: url(${props =>
        props.isChecked ? images.checkon : images.checkoff})
      center no-repeat;
    background-size: cover;
  }
  .mission-title {
    position:absolute;
    top:-25px;
    width: 90px;
    height: 26px;
    border-radius: 15px;
    line-height: 26px;
    color: #ffffff;
    background:  url(${images.missionTitle});
    background-size: cover;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
    margin: 20px 12px 0 0;
  }
  .mission-description {
    margin-top: 20px;
    line-height: 16px;
    font-size: 13px;
    text-align: left;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin-right: 70px;
  }
  .mission-threshold {
    color:#808080;
  }
`;

export const WrapMetaScore = styled(WrapMission as any)`
  &:after {
    background: none;
  }
`;
//-------------------------------------------------------------------



export const WrapBonusPanel = styled.div`
  width:100%;
  height:100%;
  background-color: #070027;
  padding-top:10px;
  .bonus_title {
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    line-height: 1.14;
    text-shadow: 0 0 1px #ffddaf;
    margin: 15px auto 10px auto;
  }
  & > section {
    width: calc(100% - 112px);
    margin: 0 auto;
    color: #cdd7fe;
    & > div {
      display: flex;
      justify-content: space-between;
      align-content: center;
      border-bottom: 1px dashed #807d7a;
      font-size: 14px;
      line-height: 2;
    }
  }
`;

export const Borderline = styled.div`
  width: 100%;
  height: 2px;
  border: 1px solid #ce9914;
  position: relative;
  top: 17px;
  z-index: 10;
`;


type MissionPanelWrapProps = {
  isOpen?: boolean;
  withUserInfo: boolean;
};

const calcBottom = (isOpen, withUserInfo) => {
  if (isOpen) return 0;
  if (withUserInfo) return '-490px';
  return '-420px';
};

export const MissionPanelWrap = styled.div<MissionPanelWrapProps>`
  position: fixed;
  bottom: ${props => calcBottom(props.isOpen, props.withUserInfo)};
  height: ${props => (props.withUserInfo ? '490px' : '420px')};
  z-index: 100;
  width: 100%;
  background: url(${images.missionBg}) center no-repeat;
  background-size: cover;
  padding: 0 18px;
  transition: all 0.2s ease 0s;
  > div {
    max-width: 690px;
    margin: 0 auto;
  }
  .mission-button {
    width: 100%;
    height: 34px;
    background: url(${images.missionBtn}) center no-repeat;
    background-size: contain;
    transform: rotate(${props => (props.isOpen ? '180deg' : '0deg')});
    margin-top: ${props => (props.isOpen ? '0' : '-34px')};
    margin-bottom: ${props => (props.isOpen ? '0' : '34px')};
  }
  .mission-user {
    display: flex;
    justify-content: flex-start;
    align-content: center;
  }
  .mission-user_info {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: column;
    padding: 13px 0;
  }
  .mission-user_info--user_name {
    font-size: 14px;
    font-weight: 500;
  }
  .mission-user_info--user_score {
    font-size: 16px;
    font-weight: 500;
    color: #ce9914;
  }
`;

export const MissionItem = styled.div<{ checked?: boolean; title: string }>`
  height: 92px;
  width: 100%;
  border-radius: 13px;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #ce9914;
  background-color: #090029;
  margin-top: 30px;
  padding: 26px 37px 13px;
  position: relative;
  font-size: 12px;
  @media (max-width: 320px) {
    padding-left: 17px;
  }
  .mission-score {
    color: ${props => (props.checked ? '#fff1ae' : '#808080')};
  }
  &:before {
    content: '${props => props.title}';
    position: absolute;
    width: 123px;
    height: 39px;
    z-index: 10;
    background: url(${images.missionTitleBg}) center no-repeat;
    background-size: 100%;
    top: -20px;
    left: 20px;
    text-shadow: 0 0 4px #6f4f23;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    line-height: 39px;
    letter-spacing: 0.44px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 15px;
    right: 37px;
    z-index: 10;
    width: 63px;
    height: 63px;
    background: url(${props =>
      props.checked ? images.missionTickOn : images.missionTickOff})
      center no-repeat;
    background-size: 100%;
    @media (max-width: 320px) {
      right: 17px;
    }
  }
`;

export const UserAvatar = styled.div.attrs<{ style: string }>(props => ({
  style: {
    background: props.style.background,
  },
}))`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-right: 20px;
  background-size: cover;
  box-shadow: 'rgb(0, 234, 255) 0px 0px 7px 1px';
`;