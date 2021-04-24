import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background: #040e1d;

    overflow-y: hidden; 
    margin: 0!important;
    padding: 0 30px;
`;

export const Content = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 80vh;

    background: #eee;
    color: #555;

    border-radius: 25px 25px 0 0;
    padding: 4rem;  

    position: relative;  

    > p{
        font-size: 2rem;
        font-weight: 800;
        line-height: .96;

        margin-bottom: 2rem;
    }

    button{
        position: absolute;
        top: -1.5rem;
        right: 8%;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 3rem; 
        width: 200px;

        border: none;
        border-radius: 25px;
        font-weight: 600;

        background: #48BB78;
        color: #fff;
        box-shadow: 0px 0px 10px #555;

        transition: all 0.2s ease;

        &:hover{
            filter: brightness(0.9)
        }

        svg{
            margin-left: 10px;
        }        
    }

    table{ 
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            font-weight: 600;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        tbody{
            overflow-y: auto;
            max-height: 100%;

            tr {
                background: #fff;
                border-radius: 15px;
            }

            .checked{
                background: rgba(51, 204, 149, 0.3);
                border-radius: 15px;
            }
        }

        td{ 
            padding: 1rem 2rem;
            border: 0;

            svg{
                margin: 0 10px;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
    }
`;

export const ListContent = styled.div`
    overflow-y: auto;
    height: 100%;
    width: 100%;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;