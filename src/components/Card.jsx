import React from "react";
import HexIcon from "./HexIcon";



function Card({ icon, title, bodyText }) {
    return (
        <div className="card">
            <HexIcon 
                icon={icon.svg}
                iconAltText={icon.altText}
            />
            <div className="card-inner">
                <h4>{title}</h4>
                <p>{bodyText}</p>
            </div>
        </div>
    )
}

export default Card