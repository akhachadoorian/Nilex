import React, {useState}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function HexIconButton({ icon, iconAltText, text, link, target = "_self" }) {
    // const iconBg = {
    //     backgroundImage: `url('${icon}')`,
    //     backgroundRepeat: 'norepeat',
    //     backgroundSize: '42px',
    //     backgroundPosition: '40%',
    // }
    const iconMap = {
        phone: faPhone,
        envelope: faEnvelope,
      };
    return (
        <div className="hex-icon-btn" >
            <a className="hex-icon-btn-wrapper" href={link} target={target} >
                <div className="hex-icon-btn-inner">
                    <FontAwesomeIcon icon={iconMap[icon]} className="icon" />
                    {/* <div className="img-holder" >
                        <FontAwesomeIcon icon={icon} />
                    </div> */}
                    {/* <p className="hidden-text">{text}</p> */}
                    {/* <p className="hidden-text">{text}</p> */}
                        
                </div>
            </a>
        </div>
    )
}

export default HexIconButton