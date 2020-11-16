import React, { useEffect, useRef, useCallback, ReactNode } from 'react';
import { VariableSizeList } from 'react-window';
import styled from 'styled-components';
import {
  useRankSectionTracking,
  createLeaderboardSectionViewAction,
} from '17media-browser-spy';

import { qs, cumulativeOffset } from '@vmo/share/utils';
import { LeaderboardItem as LeaderboardItemInterface } from '@vmo/share/interfaces/LeaderboardItem';
import { trackingSource } from '@vmo/share/17appTrack';

const VariableSizeListContainer = styled(VariableSizeList)<{
  calculatedHeight: number;
}>`
  height: ${props => props.calculatedHeight}px !important;
  overflow: hidden !important;
  .virtualized-item:first-of-type {
    overflow: hidden;
    border-top-left-radius: 2.6vw;
    border-top-right-radius: 2.6vw;
    @media screen and (min-width: 800px) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
  .virtualized-item:last-of-type {
    overflow: hidden;
    border-bottom-left-radius: 2.6vw;
    border-bottom-right-radius: 2.6vw;
    @media screen and (min-width: 800px) {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

interface VirtualizedListProps {
  dataset: LeaderboardItemInterface[];
  updateOnID: string;
  updateOnID2: string;
  children({ index }): ReactNode;
  itemHeight: number;
  panelSize?: number;
  panelSize2?: number;
}

const TrackChildrenWrapper = ({ index, style, children, rank }) => {
  const ref = useRef(null);
  useRankSectionTracking(ref, () => {
    trackingSource.track(createLeaderboardSectionViewAction(rank));
  });

  return (
    <div ref={ref} style={style} className="virtualized-item">
      {children({ index })}
    </div>
  );
};

export const VirtualizedList: React.FC<VirtualizedListProps> = ({
  dataset,
  children,
  itemHeight = 81,
  updateOnID = '',
  panelSize = 0,
}) => {
  const listRef = useRef<any>(null);
  const queryString = qs<{
    copy: string;
    streamerUserID: string;
    count: string;
  }>();
  const getInitScrollOffset = useCallback(() => {
    if (listRef.current) {
      // eslint-disable-next-line no-underscore-dangle
      const boardRect = listRef.current._outerRef.getBoundingClientRect();
      return boardRect.top < 0 ? -boardRect.top : 0;
    }
    return -1;
  }, [listRef]);

  const handleScroll = useCallback(() => {
    const initialScrollOffset = getInitScrollOffset();
    if (initialScrollOffset >= 0) {
      listRef.current.scrollTo(initialScrollOffset);
    }
  }, [getInitScrollOffset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [handleScroll]);

  useEffect(() => {
    if (queryString.streamerUserID) {
      const fIndex = dataset.findIndex(
        item => item.userInfo.userID === queryString.streamerUserID,
      );
      if (fIndex > -1) {
        window.scrollTo({
          top:
            // eslint-disable-next-line no-underscore-dangle
            cumulativeOffset(listRef.current._outerRef).top +
            fIndex * itemHeight,
        });
      }
    }
  }, [dataset, itemHeight, queryString.streamerUserID]);

  useEffect(() => {
    listRef.current.resetAfterIndex(0, true);
    setTimeout(() => {
      handleScroll();
    });
  }, [handleScroll, updateOnID, dataset]);

  const Row = ({ index, style }) => (
    <TrackChildrenWrapper
      index={index}
      style={style}
      children={children}
      rank={dataset[index].rank}
    />
  );

  const getItemSize = (index: number): number => {
    if (updateOnID && updateOnID === dataset[index].userID) {
      return itemHeight + panelSize;
    }
    return itemHeight;
  };

  const getCalculatedHeight = () => {
    if (updateOnID !== '') {
      return dataset.length * itemHeight + panelSize + 10;
    }
    return dataset.length * itemHeight + 10;
  };

  return (
    <VariableSizeListContainer
      ref={listRef}
      height={window.innerHeight}
      itemCount={dataset.length}
      itemSize={getItemSize}
      width={'100%'}
      calculatedHeight={getCalculatedHeight()}
      initialScrollOffset={getInitScrollOffset()}
    >
      {Row}
    </VariableSizeListContainer>
  );
};
