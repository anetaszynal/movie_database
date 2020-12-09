import styled, { css } from 'styled-components'
import { ReactComponent as logoIcon } from './logoIcon.svg'
import searchIcon from './searchIcon.svg'

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
  }
  }
  `

const flexGap = 16
const mobileFlexGap = 12

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
  
  ${({ border }) => border && css`
    padding: 8px 24px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.headerBreak}) {
      padding: 8px 12px;
      font-size: 12px;
  }
`}
`

export const Logo = styled(logoIcon)`
  width: 220px;
  height: 48px;
  margin-right: 48px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.headerBreak}) {
    width: 120px;
    height: 25px;
    margin-right: -5px;
  }
`

export const Search = styled.input`
  width: 432px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 33px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  background: url(${searchIcon}) no-repeat center left 24px ${({ theme }) => theme.colors.white};
  padding-left: 64px;
  font-size: 16px;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    height: 44px;
    font-size: 14px;
    line-height: 1.3;
    background: url(${searchIcon}) no-repeat center left 17px /13px ${({ theme }) => theme.colors.white};
    padding-left: 40px;
  }
`