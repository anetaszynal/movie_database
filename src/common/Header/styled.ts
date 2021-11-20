import styled from 'styled-components'
import { ReactComponent as logoIcon } from './logoIcon.svg'

export const Wrapper = styled.header`
  width: 100%;
  min-height: 94px;
  background-color: ${({ theme }) => theme.colors.black};
`

export const ContentWrapper = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
  }
  `

const flexGap = 16
const mobileFlexGap = 6

export const List = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  list-style-type: none;
  list-style-position: inside;
  padding-left: 0;
  margin: 0 -${flexGap}px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.headerBreak}) {
    margin: 0 -${mobileFlexGap}px;
  }
`

export const ListItem = styled.li`
  margin: 7px ${flexGap}px 23px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.headerBreak}) {
    margin: 8px ${mobileFlexGap}px 24px;
  }
`

export const Logo = styled(logoIcon)`
  width: 220px;
  height: 48px;
  margin-right: 48px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.headerBreak}) {
    width: 130px;
    height: 28px;
    margin-right: -5px;
  }
`
