import styled, { css } from 'styled-components'
import { ReactComponent as StarIcon } from './star.svg'

export const VoteWrapper = styled.p`
  margin: 0;
  display: flex;
  align-self: end;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.standard};
  line-height: ${({ theme }) => theme.lineHeight.standard};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    font-size: ${({ theme }) => theme.fontSize.mobileStandard};
    line-height: ${({ theme }) => theme.lineHeight.titleLine};
    align-self: start;
  }

  ${({ backdrop }) =>
  backdrop &&
  css`
      display: grid;
      grid-template-columns: 1fr;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        display: -webkit-box;
      }
    `}
`

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
`

export const Star = styled(StarIcon)`
  height: 22px;
  width: auto;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    width: 16px;
    height: auto;
    margin-right: 8px;
  }

  ${({ backdrop }) =>
  backdrop &&
  css`
      height: 40px;
      width: auto;
    `}
`

export const AverageVotes = styled.strong`
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.mobileStandard};
    line-height: ${({ theme }) => theme.lineHeight.titleLine};
  }

  ${({ detail }) =>
  detail &&
  css`
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.secondTitle};
      line-height: ${({ theme }) => theme.lineHeight.titleLine};
    `}

  ${({ backdrop }) =>
  backdrop &&
  css`
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.backdropVote};
      line-height: ${({ theme }) => theme.lineHeight.titleLine};
      color: ${({ theme }) => theme.colors.white};
    `}
`

export const For = styled.span`
  ${({ detail }) =>
  detail &&
  css`
      align-self: flex-end;
      display: unset;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHeight.small};
      margin-left: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        display: none;
      }
    `}

  ${({ backdrop }) =>
  backdrop &&
  css`
      margin-left: 7px;
      align-self: flex-end;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.standard};
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        margin-left: 2px;
        font-size: ${({ theme }) => theme.fontSize.mobileSmall};
      }
    `}
`

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.darkerGrey};
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    color: ${({ theme }) => theme.colors.darkerGrey};
    margin-left: 7px;
    font-size: ${({ theme }) => theme.fontSize.mobileStandard};
    line-height: ${({ theme }) => theme.lineHeight.titleLine};
  }

  ${({ detail }) =>
  detail &&
  css`
      align-self: flex-end;
      font-size: ${({ theme }) => theme.fontSize.small};
      line-height: ${({ theme }) => theme.lineHeight.small};
      color: ${({ theme }) => theme.colors.black};
    `}

  ${({ backdrop }) =>
  backdrop &&
  css`
      margin: 17px 0 0;
      align-self: flex-end;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.standard};
      line-height: ${({ theme }) => theme.lineHeight.small};
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        margin-left: 8px;
        align-self: flex-end;
        font-size: ${({ theme }) => theme.fontSize.mobileSmall};
      }
    `}
`
