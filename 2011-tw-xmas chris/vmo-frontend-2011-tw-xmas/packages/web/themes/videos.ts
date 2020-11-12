import { CDNURL } from '@vmo/web/constants/config';

const BASE_STATIC_URL = `${CDNURL()}/static/videos`;

interface Vidoes {
  [key: string]: string;
}

const videos: Vidoes = {
  zh: `${BASE_STATIC_URL}/Motion-KV_TW_modify.mp4`,
  ja: `${BASE_STATIC_URL}/Motion-KV_JP_modify.mp4`,
  en: `${BASE_STATIC_URL}/Motion-KV_US_flower.mp4`,
};

export default videos;
