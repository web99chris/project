import React from 'react';
import styled from 'styled-components';

interface MoraScoreLineInterface {
  data: {
    iconClass?: string;
    teamIcons: Array<{
      alt: string;
      img: string;
    }>;
    lines: Array<{
      lineKey: string;
      title: string;
      itemClass?: string;
      scores: string[];
    }>;
  };
}

const MoraScoreLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5.31vw;
  @media screen and (min-width: 800px) {
    margin-bottom: calc((800 / 828) * 44px);
  }
  .moraBattleIcons {
    padding-left: 15.21vw;
    padding-right: 7.24vw;
    @media screen and (min-width: 800px) {
      padding-left: calc((800 / 828) * 126px);
      padding-right: calc((800 / 828) * 60px);
    }
  }
  .moraBattleItem {
    padding-left: 15.21vw;
    padding-right: 7.24vw;
    @media screen and (min-width: 800px) {
      padding-left: calc((800 / 828) * 126px);
      padding-right: calc((800 / 828) * 60px);
    }
  }
  .springR1Icon {
    padding-left: 28.01vw;
    padding-right: 19.08vw;
    @media screen and (min-width: 800px) {
      padding-left: calc((800 / 828) * 232px);
      padding-right: calc((800 / 828) * 158px);
    }
  }
  .springR1AllScoreItem {
    padding-left: 28.74vw;
    padding-right: 19.56vw;
    @media screen and (min-width: 800px) {
      padding-left: calc((800 / 828) * 238px);
      padding-right: calc((800 / 828) * 162px);
    }
    span {
      :nth-child(1) {
        font-size: 2.89vw;
        width: 9.66vw;
        :lang(en) {
          width: 14.66vw;
        }
        :lang(en_US) {
          width: 14.66vw;
        }
        text-align: center;
        @media screen and (min-width: 800px) {
          font-size: calc((800 / 828) * 24px);
          width: calc((800 / 828) * 80px);
          :lang(en) {
            width: calc((800 / 828) * 122px);
          }
          :lang(en_US) {
            width: calc((800 / 828) * 122px);
          }
        }
      }
    }
  }
`;

const MoraIconLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89.37vw;
  height: 11.08vw;
  @media screen and (min-width: 800px) {
    width: calc((800 / 828) * 740px);
    height: calc((800 / 828) * 91.8px);
  }
  img {
    width: 9.9vw;
    height: 11.08vw;
    @media screen and (min-width: 800px) {
      width: calc((800 / 828) * 82px);
      height: calc((800 / 828) * 91.8px);
    }
  }
`;

export const MoraScoreLineItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89.37vw;
  height: 5.56vw;
  margin-top: 1.45vw;
  color: #ffffff;
  font-size: 2.89vw;
  font-weight: 600;
  background-color: #c09333;
  border-radius: 3.01vw;
  @media screen and (min-width: 800px) {
    border-radius: calc((800 / 828) * 25px);
    margin-top: calc((800 / 828) * 12px);
    width: calc((800 / 828) * 740px);
    height: calc((800 / 828) * 46px);
  }
  span {
    width: 8.69vw;
    text-align: center;
    @media screen and (min-width: 800px) {
      width: calc((800 / 828) * 72px);
    }
  }
  .title {
    position: absolute;
    left: 0;
    color: #000000;
    margin-left: 2.65vw;
    @media screen and (min-width: 800px) {
      margin-left: calc((800 / 828) * 22px);
    }
  }
`;

export const MoraScoreLineComponent: React.FC<MoraScoreLineInterface> = ({
  data,
}) => {
  return (
    <MoraScoreLine>
      <MoraIconLine className={data.iconClass}>
        {data.teamIcons.map(item => (
          <img key={`MoraIconLine-${item.alt}`} src={item.img} alt={item.alt} />
        ))}
      </MoraIconLine>
      {data.lines.map(item => (
        <MoraScoreLineItem key={item.lineKey} className={item.itemClass}>
          <span className="title">{item.title}</span>
          {item.scores.map((s, index) => {
            const key = `MoraIconLine-score-${index}`;
            return <span key={key}>{s}</span>;
          })}
        </MoraScoreLineItem>
      ))}
    </MoraScoreLine>
  );
};

export default MoraScoreLineComponent;
