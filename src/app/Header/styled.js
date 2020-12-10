import styled, { css } from 'styled-components'
import { ReactComponent as logoIcon } from './logoIcon.svg'
import searchIcon from './searchIcon.svg'
import { NavLink } from 'react-router-dom'

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
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
  }
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
`;

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
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: 300ms;
  
  ${({ border }) => border && css`
    padding: 8px 24px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.headerBreak}) {
      padding: 8px 12px;
      font-size: 10px;
  }
  
    &.${activeClassName} {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
    }
  
    &:hover {
      background-color: ${({ theme }) => theme.colors.almostBlack};
      color: ${({ theme }) => theme.colors.white};
    }
  `}`;