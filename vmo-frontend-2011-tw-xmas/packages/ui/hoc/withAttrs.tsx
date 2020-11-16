import React from 'react';

export const withAttrs = <Props, Element>(
  Component: React.ComponentType<Props>,
) => (props: Props & React.HTMLAttributes<Element>) => <Component {...props} />;

export default withAttrs;
