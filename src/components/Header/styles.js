import styled, { css } from 'styled-components';

export const Container = styled.header`
    width: 100%;
    position: absolute!important;
    background-color: transparent;
    height: 4.5rem;
    z-index: 999;
`;

export const Content = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;    

    nav {
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        > svg{
            height: 2rem;
            width: 2rem;
        }

        ul{
            list-style: none;
            margin-left: 25px;

            li{
                display: inline-block;
                margin-right: 1rem;          

                svg{
                    vertical-align: middle;
                    background: transparent;
                    
                    color: hsla(0, 0%, 100%, .4);
                    background: transparent;
                }
            }

            @media(max-width: 1060px){
                display: none;
            }
        }
    }
        
    div{
        display: flex;
        justify-content: space-between;

        div{
            @media(max-width: 1060px){
                display: none;
            }
        }
    }
`;

export const InputContent = styled.div`
    padding: 5px 12px 7px 12px;
    border-radius: 8px;
    background: hsla(0,0%,100%,.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-right: 10px;
    width: 240px;

    input{
        background: transparent;
        outline: none;
        border: none;
        color: rgba(255, 255, 255, 0.8);
        &::placeholder {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
        }
    }
`;

export const ButtonMenu = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    height: 35px;

    color: #fff;

    padding: 0px 8px 2px;
    border-radius: 5px;

    ${ props =>
        props.isBordered &&
        css`
            border: 1px solid #fff;
        `}

    & + button{
        margin-left: 10px;
    }
`;

export const LogoutButton = styled.button`
    background: red;
    border: none;
    outline: none;
    font-size: 1rem;
    height: 35px;

    color: #fff;

    padding: 0px 8px 2px;
    border-radius: 5px;

    ${ props =>
        props.isBordered &&
        css`
            border: 1px solid #fff;
        `}

    & + button{
        margin-left: 10px;
    }
`;
