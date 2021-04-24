import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    background: #0d1117;
    min-height: 100vh;
    /* padding: 2rem; */
`;
export const Content = styled.div`
    width: 340px;
    margin: 0 auto;
    text-align: center;

    a svg{
        color: #8b949e;
        margin: 2rem 0 1.5rem;
    }

    > p{
        margin-bottom: 15px;
        color: #fff;
        text-align: center;
        text-shadow: none;
        background-color: initial;
        border: 0;
        font-size: 24px;
        font-weight: 300;
        letter-spacing: -.5px;
    }
`;

export const NewUSerContent = styled.div`
    padding: 15px 20px;
    text-align: center;
    border: 1px solid #6e7181;
    border-radius: 6px;
    width: 308px;
    margin: 1rem auto 0;

    font-size: 14px;

    a{
        color: #58a6ff;
        text-decoration: none;
    }
`;

export const Form = styled(Unform)`
    width: 308px;
    background: #161b22;
    text-align: left;
    margin: 0 auto;
    
    padding: 20px;
    font-size: 14px;

    border: 1px solid #21262d; 
    border-radius: 6px;

    label{ 
        display: block;
        margin-bottom: 7px;
    }

    div svg{
        margin-top: -4px!important;
    }

    div{
        padding: 5px 15px;
    }

    div + label{
        margin-top: 15px;
    }

    button{
        outline: none;
        box-shadow: none;
        border: none;

        margin-top: 20px;
        width: 100%;

        color: #fff;
        background: #238636;
        border-radius: 6px;
        font-weight: 500;
        padding: 8px;
        font-size: 0.9rem;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;
