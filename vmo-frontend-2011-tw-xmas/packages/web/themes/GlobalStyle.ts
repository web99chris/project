import { createGlobalStyle } from 'styled-components';
import images from './images';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "PingFangTC", "Helvetica Neue", Helvetica, Arial, "Microsoft JhengHei", sans-serif;
  }
  body {
    background-size: 100%;
    color: #ffffff;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    object-fit: contain;
    -webkit-tap-highlight-color: transparent;
    background: url(${images.xmasBg}) 0% 0% / 100% repeat-y;
    min-height: 100vh;
    overflow-y: auto;
    @media screen and (max-width: 800px) {
      font-size: calc(0.6rem + 1vw);
    }
  }
`;

export default GlobalStyle;
