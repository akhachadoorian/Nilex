import React from "react";


function HexIcon({ icon, iconAltText}) {


    return (
        <div className="hex-icon" >
            <div className="hex-icon-inner">
                <img src={icon} alt={iconAltText} />
            </div>
        </div>
    )
}

export default HexIcon