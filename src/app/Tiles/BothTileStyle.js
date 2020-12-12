import styled, { css } from 'styled-components'

const API_IMMAGE_PATH = 'https://image.tmdb.org/t/p/w500'

export const Image = styled.div`
  padding-top: calc(100% * 434 / 292);
  border-radius: 5px;
  background-image: url("${API_IMMAGE_PATH}${({ url }) => url}");
  background-size: cover;
  background-position: top;
  grid-area: picture;
`

export const Meta = styled.div`
  grid-area: meta;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  align-items: center;
  
   ${({ detail }) => detail && css`
      grid-gap: 24px;
      grid-template-rows: auto;
      
      @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-gap: 8px;
      }
  `}
   
   ${({ people }) => people && css`
       grid-template-rows: auto;
    `}
`

