import styled from 'styled-components';
import images from '@vmo/web/themes/images';

export const TitleWrapper = styled.div`
  text-align: center;
  color: #ffffff;
  height: 17vw;
  max-height: 137px;
  line-height: 19vw;
  background: url(${images.frameBorderHeaderWithColor}) center no-repeat;
  background-size: cover;
  text-shadow: 0 0 20px rgba(254, 65, 203, 0.7);
  -webkit-text-stroke: 1px #fe41cb;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.61px;
  @media screen and (min-width: 800px) {
    line-height: 152px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  /* background: url(${images.frameBorderFooter}) center; */
  background-size: cover;
  text-align: center;
  color: rgb(254, 65, 203);
  height: 17vw;
  max-height: 137px;
  line-height: 12vw;
  padding: 0 13px;
  @media screen and (min-width: 800px) {
    line-height: 105px;
  }
`;

export const BodyWrapper = styled.div`
  min-height: 75px;
  width: 100%;
  height: 10%;
  /* background: url(${images.rankBg}) center; */
  background-size: 100% 100%;
  padding: 0 35px;
  @media screen and (max-width: 801px) {
    padding: 0px 5vw;
  }
`;

export const PopupTitleWrapper = styled(TitleWrapper as any)`
  background: url(${images.popupHeader}) center no-repeat;
  background-size: 100% 100%;
`;

export const PopupFooterWrapper = styled(FooterWrapper as any)`
  background: url(${images.popupFooter}) center no-repeat;
  background-size: 100% 100%;
`;

export const PopupBodyWrapper = styled(BodyWrapper as any)`
  background: url(${images.popupBody}) center no-repeat;
  background-size: cover;
`;

export const WrapCloseButton = styled.div`
  position: absolute;
  top: 6vw;
  right: 6vw;
  z-index: 11;
  width: 6vw;
  height: 6vw;
  background: url(${images.popupClose}) center no-repeat;
  background-size: cover;
  @media screen and (min-width: 800px) {
    top: 45px;
    right: 55px;
    width: 45px;
    height: 45px;
  }
`;
