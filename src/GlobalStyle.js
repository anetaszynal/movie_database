import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
  body{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${({theme}) => theme.colors.lightGrey};
  }
`;