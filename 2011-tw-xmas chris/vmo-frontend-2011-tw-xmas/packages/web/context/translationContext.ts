import React from 'react';

export const TranslationContext = React.createContext<Map<string, string>>(
  new Map(),
);
