import React from 'react';

type Position = {
  [key: string]: { x: number };
};

export const MapPositionContext = React.createContext<{
  position: Position;
  setMapPosition?(Position): void;
}>({});
