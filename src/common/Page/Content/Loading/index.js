import styled, { keyframes } from 'styled-components'
import { ReactComponent as LoaderIcon } from './LoadingIcon.svg'

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }
`

export const Loader = styled(LoaderIcon)`
  animation: ${rotate} 1s linear infinite;
  margin: 120px auto 0;
  display: block;
  height: auto;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.tablets}){
    margin-top: 24px;
    width: 35px;
  }
`