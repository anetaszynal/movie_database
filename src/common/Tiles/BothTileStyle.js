import styled, { css } from 'styled-components'

export const Image = styled.div`
  padding-top: calc(100% * 434 / 292);
  border-radius: 5px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  grid-area: picture;

  ${({ noImage }) =>
  noImage &&
  css`
      background-color: ${({ theme }) => theme.colors.imageBackground};
      background-size: 50%;
      background-repeat: no-repeat;
    `}
`

export const Meta = styled.div`
  grid-area: meta;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
  align-items: center;

  ${({ detail }) =>
  detail &&
  css`
      grid-gap: 24px;
      grid-template-rows: auto;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-gap: 8px;
      }
    `}

  ${({ people }) =>
  people &&
  css`
      grid-template-rows: auto;
    `}
`
