import styled from "styled-components"
import {ReactComponent as StarIcon} from "./star.svg"

export const TileWrapper = styled.article`
  padding: 16px;
  width: 324px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
`;

export const Image = styled.img`
  border-radius: 5px;
  max-width: 292px;
`;

export const Title = styled.h2`
  margin: 16px 0 0;
  font-weight: 500;
  font-size: ${({theme}) => theme.fontSize.secondTitle};
  line-height: ${({theme}) => theme.lineHeight.titleLine};
  color: ${({theme}) => theme.colors.black};
`;

export const Caption = styled.h3`
  margin: 8px 0 0;
  color: ${({theme}) => theme.colors.darkerGrey};
  font-size: ${({theme}) => theme.fontSize.standard};
  font-weight: 400;
  font-style: normal;
  line-height: ${({theme}) => theme.lineHeight.standard};
`;

const tagsGap = 8;

export const List = styled.ul`
   list-style-type: none;
   list-style-position: inside;
   padding: 0;
   margin: 0 -${tagsGap / 2}px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
`;

export const ListItem = styled.li`
   margin: ${tagsGap}px ${tagsGap/2}px 0;
   padding: 8px 16px;
   border-radius: 5px;
   background-color: ${({theme}) => theme.colors.grey};
   font-size: ${({theme}) => theme.fontSize.small};
   line-height: ${({theme}) => theme.lineHeight.listLine};
`;

export const VoteWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.standard};
  line-height: ${({theme}) => theme.lineHeight.standard};
`;

export const Star = styled(StarIcon)`
  height: 22px;
  width: auto;
`;

export const AverageVotes = styled.strong`
  font-weight: 600;
  margin: 0 12px;
`;

export const Votes = styled.span`
  color: ${({theme}) => theme.colors.darkerGrey};
`;
