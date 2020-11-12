interface Window {
  java17WebObject: {
    openProfile?(userID: string, page: string): void;
  };
  sendAvatarLink?(userID: string): void;
  $mapPosition: number;
}
