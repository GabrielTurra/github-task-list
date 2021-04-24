import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    min-height: 860px;
    padding: 6rem 0 7.5rem 0;
    background: #040e1d; 
    
    position: relative;
    overflow: hidden;

    @media(max-width: 990px){
     padding: 6rem 0 6rem 0;
    }

`;

export const Content = styled.div`
    padding: 0 16px;
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width: 990px){
        padding: 0 20px;
    }
`;

export const VideoContent = styled.div`
    width: auto;
    padding-left: 20px;

    video{
        width: 900px;
        height: 900px;
        margin-top: -150px;
        text-align: center; 
    }

    @media(max-width: 990px){
        margin-bottom: -500px;
        padding-left: 0px;

        video{
            margin-top: 0px;
        }
    }
`;

export const InformationBanner = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 25px 0 0;
    margin-top: -110px;

    display: grid;
    grid-template-columns: 17% 17% 17% 17% ;

    font-family: monospace;
    font-size: 1.25rem;

    span{
        display: block;
        margin-top: 3px;
        font-size: 0.75rem;
    }

    @media(max-width: 990px){
        padding: 25px 20px 0;
        margin-top: 0px;
        grid-template-columns: 22% 22% 22% 22% ;
    } 

    @media(max-width: 768px){
        grid-template-columns: auto auto auto;
        text-align: center;

        div:nth-child(3){
            display: none;
        }
    } 
    @media(max-width: 544px){
        grid-template-columns: auto auto;
        div:nth-child(4){
            display: none;
        }
    }
`;

export const BannerDivider = styled.img`
    @media(min-width: 1920px){
        bottom: -2.6rem;
    }

    position: absolute;
    bottom: -1rem;
    width: 100%;
    z-index: 4;
    left: 0;
    
`;

export const SpaceMan = styled.img`
    @media(min-width: 1280px){
        right: calc(50% - 740px);
    }

    position: absolute;
    bottom: 1%;
    left: 63%;
    width: 480px;
    z-index: 5;

    @media(max-width: 990px){
        width: 320px;
        left: calc(50% - 160px);
        bottom: -1%;
    }
`;

export const HeroGlow = styled.img`
    position: absolute;
    width: 200%;
    height: 230%;
    top: -70%;
    left: -50%;
    z-index: 1;
`;