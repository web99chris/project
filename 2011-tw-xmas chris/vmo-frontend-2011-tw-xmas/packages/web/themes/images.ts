import { CDNURL } from '@vmo/web/constants/config';

const BASE_STATIC_URL = `${CDNURL()}/static/images`;

const BASE_STATIC_ICON_URL = `${CDNURL()}/static/icons`;

interface ImagesInterface {
  [key: string]: string;
}

const images: ImagesInterface = {

  //2011-xmas
  xmasKv: `${BASE_STATIC_URL}/2011xmas_kv.png`,
  xmasBg: `${BASE_STATIC_URL}/bgm.png`,
  xtab1: `${BASE_STATIC_URL}/RI_1_off.png`,
  xtab1A: `${BASE_STATIC_URL}/RI_1_on.png`,
  xtab2: `${BASE_STATIC_URL}/RI_2_off.png`,
  xtab2A: `${BASE_STATIC_URL}/RI_2_on.png`,
  xtab3: `${BASE_STATIC_URL}/RI_3_off.png`,
  xtab3A: `${BASE_STATIC_URL}/RI_3_on.png`,
  xtab4: `${BASE_STATIC_URL}/RI_4_off.png`,
  xtab4A: `${BASE_STATIC_URL}/RI_4_on.png`,
  xtabon: `${BASE_STATIC_URL}/RII_on.png`,
  xtaboff: `${BASE_STATIC_URL}/RII_off.png`,
  timeBg: `${BASE_STATIC_URL}/time-bar.png`,
  tipsBg: `${BASE_STATIC_URL}/tips_title.png`,
  subon: `${BASE_STATIC_URL}/sub_on.png`,
  suboff: `${BASE_STATIC_URL}/sub_off.png`,
  xmassockson:`${BASE_STATIC_URL}/Christmas_socks_on.png`,
  xmassocksoff:`${BASE_STATIC_URL}/Christmas_socks_off.png`,
  candycaneson:`${BASE_STATIC_URL}/Candy_canes_on.png`,
  candycanesoff:`${BASE_STATIC_URL}/Candy_canes_off.png`,
  gingermanon: `${BASE_STATIC_URL}/gingerbread_Man_on.png`,
  gingermanoff: `${BASE_STATIC_URL}/gingerbread_Man_off.png`,
  n1on: `${BASE_STATIC_URL}/n1_on.png`,
  n1off: `${BASE_STATIC_URL}/n1_off.png`,
  n2on: `${BASE_STATIC_URL}/n2_on.png`,
  n2off: `${BASE_STATIC_URL}/n2_off.png`,
  n3on: `${BASE_STATIC_URL}/n3_on.png`,
  n3off: `${BASE_STATIC_URL}/n3_off.png`,
  missionBG:`${BASE_STATIC_URL}/mission_bgm.png`,
  missionTab:`${BASE_STATIC_URL}/RI_1-1.2_tab.png`,
  missionTitle:`${BASE_STATIC_URL}/tips_title.png`,
  checkon:`${BASE_STATIC_URL}/missioncheck_on.png`,
  checkoff:`${BASE_STATIC_URL}/missioncheck_off.png`,
  rankBoardBg:`${BASE_STATIC_URL}/team_list.png`,
  rankA:`${BASE_STATIC_URL}/team_list_team1.png`,
  rankB:`${BASE_STATIC_URL}/team_list_team2.png`,
  rankC:`${BASE_STATIC_URL}/team_list_team3.png`,
  no1Off: `${BASE_STATIC_URL}/n1_off.png`,
  no1On: `${BASE_STATIC_URL}/n1_on.png`,
  no2Off: `${BASE_STATIC_URL}/n2_off.png`,
  no2On: `${BASE_STATIC_URL}/n2_on.png`,
  no3Off: `${BASE_STATIC_URL}/n3_off.png`,
  no3On: `${BASE_STATIC_URL}/n3_on.png`,
  crownOff: `${BASE_STATIC_URL}/win-Crown-off.png`,
  crownOn: `${BASE_STATIC_URL}/win-Crown-on.png`,
  plusOff: `${BASE_STATIC_URL}/plus_close.png`,
  plusOn: `${BASE_STATIC_URL}/plus_open.png`,
  borderLine: `${BASE_STATIC_URL}/rank-line.png`,
};

export default images;
