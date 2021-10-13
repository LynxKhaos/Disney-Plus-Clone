import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --disney-header: hsl(228, 36%, 5%);
    --disney-background: #040714;
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
  background: var(--disney-background);
  font-size: 1.6rem;

}

`;
export default GlobalStyle;
