import styled from 'styled-components'

export const ButtonTextVisibility = styled.button`
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.secondTitle};
  transition: 1s;
  
  &:hover{
    filter: brightness(150%);
    cursor: pointer;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 0;
  }
`;