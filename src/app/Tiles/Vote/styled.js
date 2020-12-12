import styled, {css} from 'styled-components'
import { ReactComponent as StarIcon } from './star.svg'

export const VoteWrapper = styled.p`
  margin: 0;
  display: flex;
  align-self: end;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.standard};
  line-height: ${({theme}) => theme.lineHeight.standard};
  
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      font-size: ${({theme}) => theme.fontSize.mobileStandard};
      line-height: ${({theme}) => theme.lineHeight.titleLine};
      align-self: start;
    }
`;

export const Star = styled(StarIcon)`
  height: 22px;
  width: auto;
  margin-right: 12px;
  
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      width: 16px;
      height: auto;
      margin-right: 8px;
    }
`;

export const AverageVotes = styled.strong`
  font-weight: 600;
  
   @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.mobileStandard};
      line-height: ${({ theme }) => theme.lineHeight.titleLine};
  }
  
  ${({ detail }) => detail && css`
      font-weight: 500;
      font-size: ${({theme}) => theme.fontSize.secondTitle};
      line-height: ${({theme}) => theme.lineHeight.titleLine};
  `}`;

export const For = styled.span`
  display: none;
  
   ${({ detail }) => detail && css`
     align-self: flex-end;
     display: unset;
     font-size: ${({theme}) => theme.fontSize.small};
     line-height: ${({theme}) => theme.lineHeight.small};
     margin-left: 8px;
     
     @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      display: none;
    }
  `}`;

export const Votes = styled.span`
  color: ${({theme}) => theme.colors.darkerGrey};
  margin-left: 12px;
  
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      color: ${({theme}) => theme.colors.darkerGrey};
      margin-left: 7px;
      font-size: ${({ theme }) => theme.fontSize.mobileStandard};
      line-height: ${({ theme }) => theme.lineHeight.titleLine};
    }
    
  ${({ detail }) => detail && css`
     align-self: flex-end;
     font-size: ${({ theme }) => theme.fontSize.small};
     line-height: ${({ theme }) => theme.lineHeight.small};
     color: ${({theme}) => theme.colors.black};
  `}
`;
