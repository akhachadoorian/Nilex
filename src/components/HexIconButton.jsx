import React, {useState}  from "react";


function HexIconButton({ icon, iconAltText, text, link, target = "_self" }) {
    // const iconBg = {
    //     backgroundImage: `url('${icon}')`,
    //     backgroundRepeat: 'norepeat',
    //     backgroundSize: '42px',
    //     backgroundPosition: '40%',
    // }

    return (
        <div className="hex-icon-btn" >
            <a className="hex-icon-btn-wrapper" href={link} target={target} >
                <div className="hex-icon-btn-inner">
                    <div className="img-holder" >
                        <img src={icon} alt={iconAltText} />
                    </div>
                    {/* <p className="hidden-text">{text}</p> */}
                    {/* <p className="hidden-text">{text}</p> */}
                        
                </div>
            </a>
        </div>
    )
}

export default HexIconButton