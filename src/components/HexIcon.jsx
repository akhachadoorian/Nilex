import React from "react";


function HexIcon({ icon, iconAltText, bgColor = "primary"}) {

    var background = {
        backgroundColor: bgColor == "primary" ? `var(--${bgColor})` : ''
    }

    return (
        <div className="hex-icon" >
            <div className="hex-icon-inner" style={background}>
            <img src={icon} alt={iconAltText} />
            </div>
        </div>
    )
}

export default HexIcon