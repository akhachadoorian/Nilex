import react, { useState, useEffect }  from "react";

import { hex } from "../data/text/landingpage.js"
import GreyHex from "../data/images/LightGrayMobileHex.svg"

function Hexagon({ color, speckled, top, bottom, left, right }) {
    const [screenWidth, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])


    var hexImg;

    { color === 'grey' ?
        hexImg = GreyHex
        :
        hexImg = GreyHex // FIXME: add orange color
    }

    var style = {
        top: top ? top : '',
        bottom: bottom ? bottom : '',
        left: left ? left : '',
        right: right ? right : '' 
    }


    return (
        <div className="hexagon" style={style}>
            {screenWidth < 800 ? 
                <img src={hexImg} alt="Grey hexagon" width={hex.mobileWidth} height={hex.mobileHeight}/> 
            :
                <img src={hexImg} alt="Grey hexagon" width={hex.width} height={hex.height}/> 
            }
            
        </div>
    )
}

export default Hexagon