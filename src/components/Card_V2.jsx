import React from "react";
import HexIcon from "./HexIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety, faLightbulb, faMitten } from "@fortawesome/free-solid-svg-icons";

function Card_V2({ icon, title, bodyText, style}) {

    const iconMap = {
        bulb: faLightbulb,
        helmet: faHelmetSafety,
        glove: faMitten
    };

    return (
        <div className="card_v2">
            <div className={`card_v2-inner ${style}`}>
                <FontAwesomeIcon icon={iconMap[icon]} className="icon" />
                <h4>{title}</h4>
                <div className="body" dangerouslySetInnerHTML={{ __html: bodyText }} />
            </div>
        </div>
    )
}

export default Card_V2