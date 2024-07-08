import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, 
::before,
::after {
  box-sizing: border-box;
} 

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily}
}

body, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  color: ${({ theme }) => theme.colors.mainText};
  
}

p {
  margin: 0;
  text-align: justify;
}


ul, ol, 
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  font-family: inherit;
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

button {
  cursor: pointer;
}

body.home-page {
    overflow: hidden; /* Evitar scroll en la HomePage */
  }
`;

export default GlobalStyle;
