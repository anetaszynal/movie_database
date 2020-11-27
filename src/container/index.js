import styled from "styled-components";

export const Container = styled.section`
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  grid-gap: 24px;
`;