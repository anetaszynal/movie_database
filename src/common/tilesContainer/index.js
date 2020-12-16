import styled, { css } from 'styled-components'

export const TileList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  }
  
  ${({ people }) => people && css`
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  
   @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
     grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  }
  `}
`