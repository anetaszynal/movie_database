import styled from 'styled-components'
import { ReactComponent as StarIcon } from '../star.svg'

export const VoteWrapper = styled.div`
  margin-top: 8px;
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
  
  @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
      width: 16px;
      height: auto;
    }
`;

export const AverageVotes = styled.strong`
  font-weight: 600;
  margin: 0 12px;
  
   @media(max-width: ${({theme}) => theme.breakpoint.mobile}) {
       margin: 0 7px;
    }
`;

export const Votes = styled.span`
  color: ${({theme}) => theme.colors.darkerGrey};
`;
