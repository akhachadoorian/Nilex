import LocomotiveScroll from 'locomotive-scroll';



import Hero from "../components/Hero";

import { hero, about } from "../data/text/landingpage.js"
import MediaWithCopy from '../components/MediaWithCopy.jsx';
import Hexagon from '../components/Hexagon.jsx';

function LandingPage({}) {
    const scroll = new LocomotiveScroll();

    return (
        <div data-scroll-container>
            <Hero 
                header={hero.header}
                bodyText={hero.bodyText}
                logo={hero.logo}
                logoAltText={hero.logoAltText}
                background={hero.backgroundImage}
                mobileBackground={hero.mobileBackgroundImage}
            />

            <div style={{position: "relative", overflow: 'hidden'}}>
                <Hexagon 
                    color={"grey"}
                    top={"-65px"}
                    right={'0px'}
                />
                <MediaWithCopy 
                    header={about.header}
                    bodyText={about.bodyText}
                    media={about.media}
                    mediaAltText={about.mediaAltText}
                />
            </div>
        </div>
    );
}


export default LandingPage;