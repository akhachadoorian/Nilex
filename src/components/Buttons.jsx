import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


function Buttons({link, btn_text, target, icon, iconAltText, style}) {
    const btn_style = "btn " + style
    const iconMap = {
        phone: faPhone,
        envelope: faEnvelope,
    };

    return (
        <a className={btn_style} href={link} target={target ? target : '_self'}>
            {/* <img src={icon} alt={iconAltText} /> */}
            <FontAwesomeIcon icon={iconMap[icon]} className="icon" />
            <p className="btn_text">{btn_text}</p>
        </a>
    )
}

export default Buttons