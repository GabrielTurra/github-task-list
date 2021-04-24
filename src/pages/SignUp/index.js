import Header from '../../components/Header';
import SignUpForm from '../../components/SignUpForm';

import { 
    Banner, 
    Content, 
    VideoContent, 
    InformationBanner,
    BannerDivider, 
    SpaceMan, 
    HeroGlow 
} from './styles';

import GlobeVideo from '../../assets/globe.mp4';
import BannerDividerSVG from '../../assets/divider.svg';
import AstroMonaSVG from '../../assets/astro-mona.svg';
import HeroGlowSVG from '../../assets/hero-glow.svg';


const SignUp = () => {
    return(
        <>
            <Header />
            <Banner>
                <Content className="d-flex row justify-content-between">
                    <SignUpForm />
                    <VideoContent className="col-12 col-lg-6 row justify-content-center order-3 order-lg-2">
                        <video muted loop autoPlay>
                            <source src={GlobeVideo} type="video/mp4" />
                        </video>
                    </VideoContent>
                    <InformationBanner className="col-12 order-2 order-2 order-lg-3">
                        <div>
                            <p>56+ million</p>
                            <span>Developers</span>
                        </div>
                        <div>
                            <p>3+ million</p>
                            <span>Organizations</span>
                        </div>
                        <div>
                            <p>100+ million</p>
                            <span>Repositories</span>
                        </div>
                        <div>
                            <p>72%</p>
                            <span>Fortune 50</span>
                        </div>
                    </InformationBanner>
                    <SpaceMan alt="Space Man" src={AstroMonaSVG} />
                    <BannerDivider alt="divider" src={BannerDividerSVG} />
                </Content>
                <HeroGlow alt="Hero Glow" src={HeroGlowSVG} />
            </Banner>
        </>
    );
}

export default SignUp;