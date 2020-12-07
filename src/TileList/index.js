import styled from 'styled-components'

export const Container = styled.main`
  padding: 16px;
  max-width: 1368px;
  margin: 0 auto;
`

export const TileList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    }
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