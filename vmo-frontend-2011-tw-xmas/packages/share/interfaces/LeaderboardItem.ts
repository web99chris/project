type Region = 'TW' | 'JP' | 'HK' | 'MY' | 'US' | 'SG';

interface UserInfo {
  displayName?: string;
  name?: string;
  openID?: string;
  picture?: string;
  region?: Region;
  userID?: string;
  onliveInfo?: any;
}

export interface LeaderboardItem {
  theme?: any;
  rankIcon?: string;
  rank?: number;
  score?: number;
  userInfo?: UserInfo;
  amount?: number;
  avatar?: string;
  userID?: string;
  openID?: string;
  roomID?: number;
  type?: string;
  lastTimestamp?: number;
  name?: string;
  missions?: {
    [key: string]: number;
  };
  meta?: {
    [key: string]: any;
  };
  isMeme?: boolean;
  team?: number;
  member?: any;
  videoURL?: string;
  imageURL?: string;
  voteInfo?: {
    status: boolean | undefined;
  };
}
