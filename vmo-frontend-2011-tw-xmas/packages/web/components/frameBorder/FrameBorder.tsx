import React, { ReactNode } from 'react';

import { TitleWrapper, FooterWrapper, BodyWrapper } from './style';

export default ({
  title = '',
  children,
}: {
  title: string;
  children: ReactNode[] | ReactNode;
}) => {
  return (
    <>
      <BodyWrapper>{children}</BodyWrapper>
      {/* <FooterWrapper /> */}
    </>
  );
};
