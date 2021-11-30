import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle<{theme: typeof theme}>`
  html {
    box-sizing: border-box;
  }
  
  *, ::before, ::after {
    box-sizing: inherit;
  }
  
  body{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`