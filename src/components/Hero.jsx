import React from "react";

function Hero({ header, bodyText, logo, logoAltText, background }) {
    var backgroundStyle = {
        backgroundImage:  background ? `url(${background})` : "",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };


    return(
        <section class="hero">
            <div class="hero-inner" style={backgroundStyle}>
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