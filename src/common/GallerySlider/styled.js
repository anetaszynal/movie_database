import {ReactComponent as arrowIcon} from './arrow.svg'
import styled, {css} from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
`;

export const Slider = styled.div`
  margin-right: -40px;
  display: flex;
  background-color:${({theme}) => theme.colors.sliderGrey};
  height: inherit;
  width: 40px;
  z-index: 1;
  
  &:hover{
    background-color: rgba(255,251,251,0.71);
    filter: brightness(120%);
  }
  
   ${({ back }) => back && css`
     margin-left: -40px;
    `}
   
     ${({ hidden }) => hidden && css`
     visibility: hidden;
    `}
`;

export const Arrow = styled(arrowIcon)`
  align-self: center;
  justify-self: center;
  height: 100px;
  width: 50px;
  color: ${({theme}) => theme.colors.black};
  
    ${({ back }) => back && css`
      transform: rotateY(180deg);
    `}
`;

export const PageWrapper = styled.div`
  margin: 16px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Page = styled.div`
  flex-shrink: 0;
  margin: 8px;
  width: 20px;
  height: 20px;
  border: 1px solid ${({theme}) => theme.colors.imageBackground};
  border-radius: 50%;
  
  &:hover{
    cursor: pointer;
  }
  
  ${({ active }) => active && css`
       background-color: ${({theme}) => theme.colors.imageBackground};
  `}
`;