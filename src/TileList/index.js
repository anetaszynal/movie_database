import styled from "styled-components";

export const TileList = styled.section`
  //padding: 16px;
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;
  
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
    }
`;