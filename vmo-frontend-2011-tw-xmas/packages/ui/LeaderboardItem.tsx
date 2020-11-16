import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import images from '@vmo/web/themes/images';
import { THUMBNAIL_BASE_URL, DEFAULT_AVATAR } from '@vmo/share/CONST';
import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { numberFormat } from '@vmo/share/utils';

const WrapScore = styled.div`
  color: ${props => props.theme.colorScore};
  font-size: 14px;
  line-height: 16px;
`;
//minheight 
const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.color};
  box-sizing: border-box;
  min-height: 77px;  
  justify-items: center;
  justify-content: center;
  background: ${props => props.theme.background || ''};
`;

const RankNumber = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: ${props => props.theme.colorRankNumber};
  background: url(${props => props.theme.rankBg}) center no-repeat;
  background-size: 30px 30px;
  @media (max-width: 360px) {
    width: 30px;
  }
`;
//加上.user-bonus
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  width: 50%;
  .user-bonus {
    color: #6075c6;
    font-size: 12px;
    line-height: 2;
  }
  > div:first-child {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: normal;
    color: ${props => props.theme.colorNickName};
    margin-bottom: 7px;
    .user-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 95%;
      display: inline-block;
      vertical-align: top;
      font-size: 13px;
    }
  }
  @media (max-width: 320px) {
    margin-left: -15px;
  }
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    height: 8px;
    background: url(${images.dividerLine}) center no-repeat;
    background-size: cover;
  }
`;

const ColumnUserImg = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const UserAvatar = styled.div.attrs<{ style: string }>(props => ({
  style: {
    background: props.style.background,
  },
}))`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-right: 20px;
  background-size: cover;
  box-shadow: ${props =>
    props.isHighlight ? 'none' : 'rgb(0, 234, 255) 0px 0px 7px 1px'};
  &::after {
    content: '';
    background-image: ${props =>
      props.isLive
        ? `url(http://webcdn.17app.co/campaign/assets/igOfficialCircle.png)`
        : `url()`};
    background-size: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: -10px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const WrapperImg = styled.div`
  position: relative;
`;

const RankIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  display: block;
  font-size: 20px;
`;

const WrapBonus = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: #fe41cb;
  line-height: 1.33;
  font-weight: 500;
  margin-top: 5px;
`;

const Borderline = styled.div`
  width: 100%;
  height: 1px;
  background: url(${props => props.theme.borderBottom}) center no-repeat;
  background-size: 100%;
  position: relative;
  top: 0px;
  z-index: 10;
`;

interface Props extends LeaderboardItemInterface {
  theme: {
    color: string;
    borderBottom: string;
    background?: string;
    bottomDetail?: string;
    colorNickName: string;
    colorRankNumber?: string;
    colorScore?: string;
    rankBg?: string;
  };
  icon?: React.ReactElement | string;
  unit?: string;
  handleClickAvatar?: () => void;
  withBonus?: boolean;
  withVote?: boolean;
  bonus?: number;
  isLive: boolean;
  isHighlight: boolean;
  additionalText?: string;
}

const LeaderboardItemFC: React.FC<Props> = ({
  theme,
  icon,
  score,
  rank,
  bonus = 0,
  userInfo,
  unit,
  children,
  handleClickAvatar,
  withBonus = false,
  isLive,
  isHighlight,
  additionalText,
}) => {
  let avatar = '';
  if (userInfo) {
    avatar =
      userInfo!.picture && userInfo!.picture!.startsWith('http')
        ? userInfo!.picture
        : THUMBNAIL_BASE_URL + userInfo!.picture;
  }
  const scoreText = numberFormat(score!);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <RankNumber>
            <span>{rank! + 1}</span>
          </RankNumber>
          <ColumnUserImg>
            <WrapperImg>
              <UserAvatar
                isHighlight={isHighlight}
                isLive={isLive}
                onClick={handleClickAvatar}
                style={{
                  backgroundImage: `url(${avatar}), url(${DEFAULT_AVATAR})`,
                  cursor: 'pointer',
                }}
              />
              <RankIcon>{icon}</RankIcon>
            </WrapperImg>
          </ColumnUserImg>
          <UserInfo>
            <div>
              <span className="user-name">{userInfo!.displayName}</span>
            </div>
            <WrapScore>{additionalText || `${scoreText}  ${unit}`}</WrapScore>
            {withBonus && (
              <div className="user-bonus">+ {numberFormat(bonus)}</div>
            )}
          </UserInfo>
        </Wrapper>
        <Borderline />
        {children}
      </>
    </ThemeProvider>
  );
};

LeaderboardItemFC.defaultProps = {
  unit: '響叮噹',
  icon: '',
};

export const LeaderboardItem = LeaderboardItemFC;

export default LeaderboardItem;
