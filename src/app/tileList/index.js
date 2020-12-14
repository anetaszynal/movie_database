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

export const Title = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  margin: 56px 0 24px;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: 18px;
       margin: 24px 0 12px;
    }
`