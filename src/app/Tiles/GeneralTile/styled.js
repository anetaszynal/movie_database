import styled, { css } from "styled-components";

export const TileWrapper = styled.article`
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px 0 rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "picture" "meta";
  grid-template-rows: auto 1fr;
  grid-gap: 16px;
  transition: 300ms;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 114px 1fr;
    grid-template-areas: "picture meta";
    grid-template-rows: auto;
  }

  ${({ people }) =>
    people &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 8px;
        grid-template-columns: 1fr;
        grid-template-areas: "picture" "meta";
        grid-template-rows: auto 1fr;
        grid-gap: 8px;
      }
    `}

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const InsideMeta = styled.div`
  display: grid;
  grid-template-columns: 1f;
  grid-gap: 8px;
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.secondTitle};
  line-height: ${({ theme }) => theme.lineHeight.titleLine};
  color: ${({ theme }) => theme.colors.black};
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.standard};
  }

  ${({ people }) =>
    people &&
    css`
      text-align: center;
    `}
`;

export const Caption = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-size: ${({ theme }) => theme.fontSize.standard};
  font-weight: 400;
  font-style: normal;
  line-height: ${({ theme }) => theme.lineHeight.standard};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.mobileStandard};
    margin: 4px 0 0;
  }

  ${({ people }) =>
    people &&
    css`
      text-align: center;
    `}
`;
