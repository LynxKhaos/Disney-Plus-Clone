import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --disney-header: hsl(228, 36%, 5%);
  }

* {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  color: white;
}

`;
export default GlobalStyle;
