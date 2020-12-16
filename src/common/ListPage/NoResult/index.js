import styled from 'styled-components'
import { ReactComponent as noResultsIcon } from './noResults.svg'

export const NoResults = styled(noResultsIcon)`
  display: block;
  margin: 16px auto 0;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}){
      width: 280px;
      height: auto;
  }
`