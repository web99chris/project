import React, { Component } from 'react';
import {
  calculateCountdown,
  formatDateEvent,
  addLeadingZeros,
} from '@vmo/share/utils';
import styled, { ThemeProvider } from 'styled-components';

const WrapCountdown = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  text-align: center;
  color: ${props => props.theme.colorFirst};
  padding: 26px 0 21.3px;
  div {
    &:last-child {
      color: ${props => props.theme.colorLast};
    }
  }
`;

interface Props {
  endDate: string;
  endDay: string;
  startDate: string;
  startDay: string;
  className?: string;
  theme: { colorFirst: string; colorLast: string };
  countdownMSG?: string;
  day?: string;
  endedMSG?: string;
  notYetStartedMSG?: string;
}

interface State {
  days: number;
  hours: number;
  min: number;
  sec: number;
  notYetStarted: boolean;
  ended: boolean;
}

export class EventCountdown extends Component<Props, State> {
  static defaultProps = {
    countdownMSG: '活動尚餘',
    day: '天',
    notYetStartedMSG: '尚未開始',
    endedMSG: '已結束',
  };

  interval: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      notYetStarted: false,
      ended: false,
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.createCountdown();
  }

  componentDidUpdate(prevProps: Props) {
    const { startDate } = this.props;
    if (prevProps.startDate !== startDate) {
      this.stop();
      this.createCountdown();
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
  }

  createCountdown() {
    const { startDate, endDate } = this.props;
    const exePerSec = () => {
      const date = calculateCountdown(startDate, endDate);
      this.setState({ ...date });
      if (date.notYetStarted || date.ended) {
        this.stop();
      }
    };

    // update every second
    exePerSec();
    this.interval = setInterval(exePerSec, 1000);
  }

  render() {
    const {
      theme,
      startDate,
      startDay,
      endDate,
      endDay,
      day,
      countdownMSG,
      notYetStartedMSG,
      endedMSG,
    } = this.props;
    const { days, hours, min, sec, notYetStarted, ended } = this.state;
    let msg: React.ReactElement;
    if (notYetStarted) {
      msg = <div>{notYetStartedMSG}</div>;
    } else if (ended) {
      msg = <div>{endedMSG}</div>;
    } else {
      msg = (
        <div>{`${countdownMSG} ${addLeadingZeros(
          days,
        )} ${day} ${addLeadingZeros(hours)}:${addLeadingZeros(
          min,
        )}:${addLeadingZeros(sec)}`}</div>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <WrapCountdown {...this.props}>
          <div>{`${formatDateEvent(startDate, startDay)}－${formatDateEvent(
            endDate,
            endDay,
          )}`}</div>
          {msg}
        </WrapCountdown>
      </ThemeProvider>
    );
  }
}

export default EventCountdown;
