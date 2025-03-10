import React, { useState, useEffect }   from "react";

import Arrow from "../data/images/Arrow.svg"
import ArrowWhite from "../data/images/ArrowWhite.svg"


function HexagonButton ({ icon, iconAltText, hoverIcon, hoverIconAltText, title, bodyText, link, col, row, marginLeft }) {
    const [isHovered, setIsHovered] = useState(false);

    const [screenWidth, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    const baseArrow = {
        backgroundImage: `url(${Arrow})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    }

    const hoverArrow = {
        backgroundImage: `url(${ArrowWhite})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    }

    // const gridSpan = {
    //     gridColumn: col,
    //     gridRow: row,
    //     marginLeft: marginLeft
    // }

    return(
        <div className="hexagon-btn" >
            <a className="hex-btn-wrapper" href={link}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                { isHovered || screenWidth < 800 ?
                    <div className="arrow" style={hoverArrow}></div>
                : 
                    <div className="arrow" style={baseArrow}></div>
                }

            
                {/* Base Look */}
                <div className="hex-btn-inner default">
                    
                    <div className="text">
                        <img src={icon} alt={iconAltText} />
                        <h5>{title}</h5>
                    </div>
                </div>

                {/* Hover State */}
                <div className="hover-state-wrapper">
                    <div className="hex-btn-inner hover">
                        <div className="text">
                            <h5>{title}</h5>
                            <p>{bodyText}</p>
                        </div>
                        <img className="hover-icon" src={hoverIcon} alt={hoverIconAltText} />
                    </div>
                </div>
                
            </a>
        </div>
    )
}

export default HexagonButton