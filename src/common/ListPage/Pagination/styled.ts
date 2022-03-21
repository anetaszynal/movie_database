import styled, { css } from 'styled-components'
import { ReactComponent as ArrowIcon } from './arrowIcon.svg'

export const Wrapper = styled.footer`
    height: 36px;
    margin: 40px auto 103px;
    display: flex;
    align-items: center;
    justify-content: center;

   @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
       height: 24px;
       margin: 32px auto 31px;
    }
`

export const ChangePageButton = styled.button`
    margin-right: 12px;
    padding: 8px 16px;
    height: 36px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    align-items: center;
    transition: all 1s ease;
    
    &:hover{
        filter: brightness(105%);
        cursor: pointer;
    }

    &:disabled{
       background-color: ${({ theme }) => theme.colors.grey};
       color: ${({ theme }) => theme.colors.black};
       &:hover{
          filter: brightness(100%);
          cursor: not-allowed;
         }
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        margin-right: 8px;
        padding: 8px 12px;
    }
`

export const Arrow = styled(ArrowIcon)<{disabled:boolean, back?: boolean, hidden?: boolean}>`
    width: 7px;
    height: 11px;
    margin-left: 8px;
    fill: ${({ theme }) => theme.colors.blue};
    
    *:disabled & {
        fill: ${({ theme }) => theme.colors.darkerGrey};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        width: 5px;
        height: 8px;
        margin-left: 0;
    }
    
    ${({ back }) => back && css`
        transform: rotate(180deg);
        margin: 0 8px 0 0;
        
    @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        margin: 0;
    }
    `}

    ${({ hidden }) => hidden && css`
        display: none;
        @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
            display: unset;
            margin-left: 4px;
        }
    `}
`

export const ButtonTitle = styled.span`
    font-size: 14px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        display: none;
    }
`

export const Text = styled.span`
    margin: 0 16px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.darkerGrey};
    align-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        margin: 0 8px;
        font-size: 10px;
        line-height: 2.4;
    }
`

export const Number = styled.span`
    margin: 0 8px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablets}) {
        margin: 0 2px;
        font-size: 10px;
        line-height: 2.4;
    }
`