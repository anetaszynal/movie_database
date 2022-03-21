import styled from 'styled-components'

const tagsGap = 8

export const List = styled.ul`
   list-style-type: none;
   list-style-position: inside;
   padding: 0;
   margin: -${tagsGap / 2}px;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
`

export const ListItem = styled.li`
   margin: ${tagsGap / 2}px;
   padding: 8px 16px;
   border-radius: 5px;
   background-color: ${({ theme }) => theme.colors.grey};
   font-size: ${({ theme }) => theme.fontSize.small};
   line-height: ${({ theme }) => theme.lineHeight.listLine};
   
    @media(max-width: ${({ theme }) => theme.breakpoint.tablets}) {
      font-size: ${({ theme }) => theme.fontSize.mobileSmall};
      line-height: ${({ theme }) => theme.lineHeight.mobile};
      padding: 4px 8px;
    }
`