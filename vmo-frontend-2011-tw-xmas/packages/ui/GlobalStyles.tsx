import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: "PingFangTC", "Helvetica Neue", Helvetica, Arial, "Microsoft JhengHei", sans-serif;

  :lang(ja) {
    font-family: "Hiragino Kaku Gothic Pro", Osaka, Meiryo, "MS PGothic", Arial, sans-serif;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;

export default GlobalStyles;
