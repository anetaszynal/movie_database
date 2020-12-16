import styled, { css } from "styled-components";

export const DetailTileWrapper = styled.article`
  padding: 40px;
  max-width: 1400px;
  margin: 64px auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-template-areas: "picture meta" "picture description";
  grid-template-columns: 312px 1fr;
  grid-gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 16px auto 21px;
    padding: 16px;
    grid-template-areas: "picture meta" "description description";
    grid-template-columns: 114px 1fr;
    grid-gap: 16px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.title};
  line-height: ${({ theme }) => theme.lineHeight.small};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: -4px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.standard};
    line-height: ${({ theme }) => theme.lineHeight.titleLine};
  }
`;

export const Caption = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.secondTitle};
  line-height: ${({ theme }) => theme.lineHeight.small};
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.mobileStandard};
    line-height: ${({ theme }) => theme.lineHeight.titleLine};
    color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;

export const AdditionalInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize.additionalInfo};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.mobileAdditionalInfo};
    line-height: ${({ theme }) => theme.lineHeight.titleLine};
  }

  ${({ last }) =>
    last &&
    css`
      margin-bottom: 0;
    `}
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.additionalInfo};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.description};
  line-height: ${({ theme }) => theme.lineHeight.description};
  margin: -16px 0 0;
  grid-area: description;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 0;
  }
`;
