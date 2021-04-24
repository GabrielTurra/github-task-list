import './bootstrap-grid.min.css';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background: #fff;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 16px serif;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }
    
    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: #eee;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        outline: 0;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent; 

        &:hover{
            filter: brightness(0.8);
        }
    }
`;