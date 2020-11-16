import React from 'react';

export const MissionPanelContext = React.createContext<{
  showPanelID: string;
  setShowPanelID(panelID: string): void;
  missionDetails: any;
  setMissionDetails: any;
}>({
  showPanelID: '',
  setShowPanelID: () => {},
  missionDetails: [],
  setMissionDetails: () => {},
});
