import React, { memo } from 'react';
import styled, { css } from 'styled-components';

const Div = styled.div`
  ${(_p: {}) => css`
    max-width: 800px;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
  `}
`;

type Props = {};

export const EventPage: React.FC<Props> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default memo(EventPage);
