import React, { memo, useContext, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { now } from '@17media/dad';

import * as utils from '@vmo/share/utils';
import { useCountDown } from '@vmo/ui/hooks';
import { TranslationContext } from '@vmo/web/context/translationContext';
import { SectionTypes } from '@vmo/web/constants/config';
import { cal800, calVW } from '@vmo/web/components/Tabs/styled';
import {
  useMinSectionTracking,
  createSectionViewAction,
} from '17media-browser-spy';
import { trackingSource } from '@vmo/share/17appTrack';

export const WrapCountdown = styled.div``;
export const WrapCountdownContent = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  > div {
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-content: center;
    align-self: center;
    width: 77.29vw;
    font-size: 3.86vw;
    text-align: center;
    :nth-child(1) {
      margin-top: 6.76vw;
      margin-bottom: 0.84vw;
      border-bottom: 1px solid #cd3f6e;
    }
    :nth-child(2) {
      margin-top: 0.36vw;
    }
    @media screen and (min-width: 800px) {
      font-size: calc((800 / 828) * 32px);
      width: calc((800 / 828) * 640px);
      :nth-child(1) {
        margin-top: calc((800 / 828) * 56px);
        margin-bottom: calc((800 / 828) * 7px);
      }
      :nth-child(2) {
        margin-top: calc((800 / 828) * 3px);
      }
    }
  }
`;

interface Props {
  startDate: string;
  endDate: string;
  className?: string;
  isSameDay?: boolean;
  theme?: { colorFirst: string; colorLast: string };
  dateFormat?: string;
  formatStr?: string;
}

export const CountdownWrapper = ({ children }) => {
  const timeRef = useRef(null);
  useMinSectionTracking(timeRef, () => {
    trackingSource.track(createSectionViewAction(SectionTypes.duration));
  });
  return <div>{children}</div>;
};

export const Countdown: React.FC<Props> = ({
  theme = {},
  startDate,
  endDate,
  className,
  isSameDay = false,
  dateFormat,
  formatStr = '',
}) => {
  const translation = useContext(TranslationContext);
  const start = new Date(startDate);
  const end = new Date(endDate);
  const nowTime = now() * 1000;
  const times = useCountDown(end.getTime());
  const notYetStarted = nowTime - start.getTime() < 0;
  const ended = nowTime - end.getTime() > 0;
  let msg: React.ReactElement;
  let msgDateRange = (
    <div>{`${utils.getStringDateByLocalFormat(
      startDate,
      dateFormat,
    )}－${utils.getStringDateByLocalFormat(endDate, dateFormat)}`}</div>
  );
  if (notYetStarted) {
    msg = <div>{translation.get('COUNTDOWN_HAS_NOT_BEGUN')}</div>;
  } else if (ended) {
    msg = <div>{translation.get('COUNTDOWN_HAS_ENDED')}</div>;
  } else {
    let format: string;
    if (times.d === 1) {
      format = formatStr
        .replace('{0}', `D${translation.get('COUNTDOWN_DAY')}`)
        .replace('{1} {2}', `hh:mm:ss`);
    } else {
      format = formatStr
        .replace('{0}', `D${translation.get('COUNTDOWN_PLURAL_DAY')}`)
        .replace('{1} {2}', `hh:mm:ss`);
    }
    msg = <div>{utils.getStringDateCountdownByLocalFormat(times, format)}</div>;
  }
  if (utils.isSameDate(startDate, endDate) && isSameDay) {
    msgDateRange = (
      <div>{`${utils.getStringDateByLocalFormat(
        startDate,
        dateFormat,
      )} - ${utils.convertDateToTime(endDate)}`}</div>
    );
  }

  return (
    <CountdownWrapper>
      <ThemeProvider theme={theme}>
        <WrapCountdown className={className}>
          <WrapCountdownContent>
            {msgDateRange}
            {msg}
          </WrapCountdownContent>
        </WrapCountdown>
      </ThemeProvider>
    </CountdownWrapper>
  );
};

export default memo(Countdown);
