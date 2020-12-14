import styled, { css } from "styled-components";
import { APP_ROUTES } from "../../lib/utils";

export const Image = styled.div`
  padding-top: calc(100% * 434 / 292);
  border-radius: 5px;
  background-image: url("${APP_ROUTES.image}${({ url }) => url}");
  background-size: cover;
  background-position: center;
  grid-area: picture;
`;

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
`;
