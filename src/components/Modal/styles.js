import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled(Unform)`
    h2{ 
        color: #333;
        font-size: 2rem;
        font-weight: 800;
        line-height: .96;

        margin-bottom: 2rem;
        text-align: center;
    }

    label{
        color: #333;
        display: block;
        margin: 1rem 0 0.5rem;
    }

    input{ 
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
        border-radius: 0.25rem;

        font-weight: 400;
        font-size: 1rem;

        
    }

    svg{
        margin-top: 6px;
    }

    button[type="submit"], button[type="button"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: #48BB78;
        border: 0;
        border-radius: 0.25rem;
        color: #fff;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;

        &:hover{
            filter: brightness(0.9);
        }
    }

    button[type="checkbox"]{
        display: block;
    }
`;
