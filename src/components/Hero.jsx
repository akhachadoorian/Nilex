import React from "react";

function Hero({ header, bodyText, logo, logoAltText, background, mobileBackground }) {
    var backgroundStyleDesktop = {
        backgroundImage:  background ? `url(${background})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    var backgroundStyleMobile = {
        backgroundImage:  background ? `url(${mobileBackground})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    const isMobile = window.innerWidth <= 800;

    return(
        <section class="hero">
            <div class="hero-inner" style={isMobile ? backgroundStyleMobile : backgroundStyleDesktop}>
                <div class="logo-holder">
                    <img src={logo} alt={logoAltText} />
                </div>
                <div class="text">
                    <h1>{header}</h1>
                    <h6>{bodyText}</h6>
                </div>
            </div>
        </section>
    )
}

export default Hero