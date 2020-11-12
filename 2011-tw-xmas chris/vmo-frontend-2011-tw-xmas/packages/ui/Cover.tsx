import React from 'react';
import styled from 'styled-components';
import { withAttrs } from './hoc';

const Img = styled.img`
  display: block;
  width: 100%;
`;

type Props = {
  src: string;
  alt?: string;
};

const CoverFC: React.FC<Props> = props => <Img {...props} />;

CoverFC.defaultProps = {
  alt: 'cover',
};

export const Cover = withAttrs<Props, HTMLImageElement>(CoverFC);

export default Cover;
