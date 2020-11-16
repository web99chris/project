import React, { ReactNode } from 'react';

import {
  PopupTitleWrapper,
  PopupFooterWrapper,
  PopupBodyWrapper,
  WrapCloseButton,
} from './style';

export default ({
  title = '',
  children,
  withClose = false,
  onClose,
}: {
  title: string;
  children: ReactNode[] | ReactNode;
  withClose: boolean;
  onClose(): void;
}) => {
  return (
    <>
      <PopupTitleWrapper>{title}</PopupTitleWrapper>
      {withClose && <WrapCloseButton onClick={() => onClose()} />}
      <PopupBodyWrapper>{children}</PopupBodyWrapper>
      <PopupFooterWrapper />
    </>
  );
};
