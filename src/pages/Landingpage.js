import Hero from "../components/Hero";

import { hero } from "../data/text/landingpage.js"

function LandingPage({}) {
    return (
        <Hero 
            header={hero.header}
            bodyText={hero.bodyText}
            logo={hero.logo}
            logoAltText={hero.logoAltText}
            background={hero.backgroundImage}
            mobileBackground={hero.mobileBackgroundImage}
        />
    );
}


export default LandingPage;