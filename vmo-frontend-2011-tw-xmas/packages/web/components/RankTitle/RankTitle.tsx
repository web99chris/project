import React, { memo } from 'react';
import styled from 'styled-components';

import Images from '@vmo/web/themes/images';
import { RankStyled } from '@vmo/web/components/Tabs/styled';

interface RankTitleProps {
  title: string | object;
}

const RankTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const RankTitleContent = styled.div``;

const RankTitleComponent: React.FC<RankTitleProps> = ({ title }) => {
  return (
    <RankTitle>
      <RankStyled>{title}</RankStyled>
    </RankTitle>
  );
};

export default memo(RankTitleComponent);
