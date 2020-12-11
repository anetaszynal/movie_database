import styled, { css } from 'styled-components'

const API_IMMAGE_PATH = 'https://image.tmdb.org/t/p/w500'

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
  
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      grid-template-columns: 114px 1fr;
      grid-template-areas: "picture meta";      
      grid-template-rows: auto;
    }
    
    ${({ people }) => people && css`
      @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 8px;
        grid-template-columns: 1fr;
        grid-template-areas: "picture" "meta";
        grid-template-rows: auto 1fr;
        grid-gap: 8px;
      }
  `}
    
    &:hover{
      transform: scale(1.02);
      cursor: pointer;
    }
`

export const Image = styled.div`
  padding-top: calc(100%*632/421);
  border-radius: 5px;
  background-image: url("${API_IMMAGE_PATH}${({ url }) => url}");
  background-size: cover;
  background-position: top;
  grid-area: picture;
`

export const Meta = styled.div`
  grid-area: meta;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`

export const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.secondTitle};
  line-height: ${({ theme }) => theme.lineHeight.titleLine};
  color: ${({ theme }) => theme.colors.black};
  overflow-wrap: anywhere;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: ${({ theme }) => theme.fontSize.standard};
    }
    
  ${({ people }) => people && css`
     text-align: center;
  `}
`

export const Caption = styled.h3`
  margin: 8px 0 0;
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-size: ${({ theme }) => theme.fontSize.standard};
  font-weight: 400;
  font-style: normal;
  line-height: ${({ theme }) => theme.lineHeight.standard};
  
   @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: ${({ theme }) => theme.fontSize.mobileStandard};
      margin: 4px 0 0;
    }
`

const tagsGap = 8

export const List = styled.ul`
   list-style-type: none;
   list-style-position: inside;
   padding: 0;
   margin: 0 -${tagsGap / 2}px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
`

export const ListItem = styled.li`
   margin: ${tagsGap}px ${tagsGap / 2}px 0;
   padding: 8px 16px;
   border-radius: 5px;
   background-color: ${({ theme }) => theme.colors.grey};
   font-size: ${({ theme }) => theme.fontSize.small};
   line-height: ${({ theme }) => theme.lineHeight.listLine};
   
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: ${({ theme }) => theme.fontSize.mobileSmall};
      line-height: ${({ theme }) => theme.lineHeight.mobile};
    }
`