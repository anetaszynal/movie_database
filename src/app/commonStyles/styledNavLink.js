import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const activeClassName = 'active'

export const StyledNavLink = styled(NavLink).attrs(() => (
  {
    activeClassName,
  }
))`
  color: unset;
  text-decoration: none;
  transition: 300ms;
  display: grid;
  
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
  `}`