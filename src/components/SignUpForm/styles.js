import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
    padding: 5rem 0;
    z-index: 7;

    p{
        font-size: 4rem;
        font-weight: 800;
        line-height: .96;
        margin-bottom: 25px;

        @media(max-width: 768px){
            text-align: center;
            font-size: 3.5rem;
        }
    }

    > div{        
        > div{
            margin: 10px 10px 0 0;
        }
    }

    button{
        padding: 10px 15px;
        flex: 1;

        border:none;
        outline: none;

        margin: 10px 10px 0 0;
        border-radius: 5px;
        background: #2ea44f;
        color: #fff;
        font-weight: bold;
        transition: filter 0.2s ease;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;

