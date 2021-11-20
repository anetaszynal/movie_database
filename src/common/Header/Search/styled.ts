import styled from 'styled-components'
import searchIcon from '../searchIcon.svg'

export const Input = styled.input`
  width: 432px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 33px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  background: url(${searchIcon}) no-repeat center left 24px ${({ theme }) => theme.colors.white};
  padding-left: 64px;
  font-size: 16px;
  line-height: 1.5;
  transition: 300ms;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    width: 100%;
    height: 44px;
    font-size: 14px;
    line-height: 1.3;
    background: url(${searchIcon}) no-repeat center left 17px /13px ${({ theme }) => theme.colors.white};
    padding-left: 40px;
  }
  
  &:hover {
    box-shadow: 0 1px 6px 1px ${({ theme }) => theme.colors.grey};
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }
   
   &:focus{
     color: ${({ theme }) => theme.colors.black};
   }
`