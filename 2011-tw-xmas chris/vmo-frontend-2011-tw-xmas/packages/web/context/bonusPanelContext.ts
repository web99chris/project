import React from 'react';

export const BonusPanelContext = React.createContext<{
  showPanelID2: string;
  setShowPanelID2(panelID: string): void;
  BonusDetails: any;
  setBonusDetails: any;
}>({
  showPanelID2: '',
  setShowPanelID2: () => {},
  BonusDetails: [],
  setBonusDetails: () => {},
});
