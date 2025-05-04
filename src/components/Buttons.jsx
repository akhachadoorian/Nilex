import React from "react";

function Buttons({link, btn_text, target, icon, iconAltText, style}) {
    const btn_style = "btn " + style

    return (
        <a className={btn_style} href={link} target={target ? target : '_self'}>
            <img src={icon} alt={iconAltText} />
            <p className="btn_text">{btn_text}</p>
        </a>
    )
}

export default Buttons