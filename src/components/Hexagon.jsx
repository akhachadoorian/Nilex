import React, { useState, useEffect }  from "react";

import { hex } from "../data/text/landingpage.js"
import GreyHex from "../data/images/LightGrayHex.svg"
import GreySpeckledHex from "../data/images/LightGrayHexSpeckled.svg"

function Hexagon({ color, speckled = false, desktopPosition, mobilePosition }) {
    const [screenWidth, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])


    var hexImg;

    { color === 'grey' ?
         (speckled ? 
            hexImg = GreySpeckledHex
            :
            hexImg = GreyHex
         )
        :
        hexImg = GreyHex // FIXME: add orange color
    }

    var desktopStyle = {
        top: desktopPosition.top ? desktopPosition.top : '',
        bottom: desktopPosition.bottom ? desktopPosition.bottom : '',
        left: desktopPosition.left ? desktopPosition.left : '',
        right: desktopPosition.right ? desktopPosition.right : '',
        width: hex.width,
        height: hex.height
    };

    var mobileStyle = {
        width: hex.mobileWidth,
        height: hex.mobileHeight
    }

    if (mobilePosition) {
        mobileStyle = {
            top: mobilePosition.top ? mobilePosition.top : '',
            bottom: mobilePosition.bottom ? mobilePosition.bottom : '',
            left: mobilePosition.left ? mobilePosition.left : '',
            right: mobilePosition.right ? mobilePosition.right : '',
            width: hex.mobileWidth,
            height: hex.mobileHeight
        };
    }


    return (
        <div className="hexagon" style={screenWidth < 800 && mobileStyle ? mobileStyle : desktopStyle }>
            {screenWidth < 800 ? 
                <img src={hexImg} alt="Grey hexagon"/> 
            :
                <img src={hexImg} alt="Grey hexagon"/> 
            }
            
        </div>
    )
}

export default Hexagon