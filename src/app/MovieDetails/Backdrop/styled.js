import styled from "styled-components";
import { APP_ROUTES } from "../../../lib/utils";

export const Poster = styled.article`
  width: 100%;
  padding-top: calc(65% * 148 / 320);
  background: linear-gradient(to top, transparent 95%, #000000 100%),
    linear-gradient(to right, transparent 68%, #000000 95%),
    linear-gradient(to left, transparent 68%, #000000 95%),
    linear-gradient(to bottom, transparent 60%, #000000 95%),
    url("${APP_ROUTES.image}${({ url }) => url}") no-repeat center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 0 16px 56px;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 0 16px 8px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 25px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.backdrop};
  line-height: ${({ theme }) => theme.lineHeight.small};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 0 0 5px;
    font-size: ${({ theme }) => theme.fontSize.mobileBackdrop};
  }
`;
