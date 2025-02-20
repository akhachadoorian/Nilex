import LocomotiveScroll from 'locomotive-scroll';



import Hero from "../components/Hero";

import { hero, about, hexagons, product } from "../data/text/landingpage.js"
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
                {/* <Hexagon 
                    color={"grey"}
                    desktopPosition={hexagons.g1.desktop}
                    // mobilePosition={hexagons.g1.mobile}
                    speckled={true}
                /> */}
                <MediaWithCopy 
                    header={about.header}
                    bodyText={about.bodyText}
                    media={about.media}
                    mediaAltText={about.mediaAltText}
                />
            </div>

            <div style={{position: "relative", overflow: 'hidden'}}>
                <h2>{product.header}</h2>
                <p>{product.bodyText}</p>
            </div>
        </div>
    );
}


export default LandingPage;