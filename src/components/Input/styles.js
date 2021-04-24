import styled, { css } from 'styled-components';
import Tooltip from './Tooltip';

export const Container = styled.div`
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #fff;
    display: flex;
    flex: 1; 

    ${ props =>
        props.theme === "dark" &&
        css`
            background-color: #0d1117;
            border-color: #21262d;
            input{
                color: #fff;
            }
        `}

    ${ props =>
        props.error &&
        css`
            border: 1px solid red;
        `}
        
    ${ props =>
        props.disabled &&
        css`
            background-color: #b1b1b1;
        `}
    
    input{
        border: none;
        outline: none;
        flex: 1;
        width: 100%;
        background: transparent;
    }

    svg{
        color: #040e1d;
        margin-right: 10px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    width: auto;
    text-align: center;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;