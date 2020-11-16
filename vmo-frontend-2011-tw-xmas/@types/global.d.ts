declare namespace NodeJS {
  interface Global {}

  interface Process {
    browser: boolean;
  }
}

interface Window {
  java17WebObject?: {
    openProfile(userID: string, page: string);
  };
  sendAvatarLink?: (openID: string) => void;
}
