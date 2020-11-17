import React, { memo } from 'react';

interface Props {
  title?: React.ReactElement;
  tabText?: string;
  type?: string;
  tabKey: string;
  countdown?: React.ReactElement;
  ranks?: any;
  crown: any;
  vs: any;
  teamBg: any;
}
export const Tab: React.FC<Props> = props => {
  const { children } = props;

  return <>{children}</>;
};

export default memo(Tab);
