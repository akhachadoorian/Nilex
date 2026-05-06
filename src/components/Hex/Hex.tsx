import react from "react";
import { ColorVariables } from "../../types/colors";
import './Hex.scss'
import { ResponsiveClampSize } from "../../types/size";
import { CalculateClamp } from "../../hooks/calculateClamp";

type HexSVGProps = {
    color?: ColorVariables
}

function HexOutline({color = "--orange-500"}: HexSVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="28"
            viewBox="0 0 23 28"
            fill="none"
            className="hex-outline"
        >
            <path
                d="M1 7.49099L11.2284 1.5L22 7.49099V20.509L11.2284 26.5L1 20.509V7.49099Z"
                stroke={`var(${color})`}
                strokeWidth="2"
            />
        </svg>
    );
}

function HexSolid({color = "--orange-500"}: HexSVGProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="232" height="276" viewBox="0 0 232 276" fill="none" className="hex-solid">
            <path d="M112.544 0H112.882C114.195 1.12146 119.168 3.81385 121.022 4.86923C126.539 7.97692 132.036 11.1208 137.512 14.3007L194.85 47.4563L219.27 61.4099C222.706 63.4036 228.347 66.4883 231.437 68.6313C231.898 82.889 231.644 99.5415 231.652 113.915L231.791 206.687C223.026 211.162 212.918 217.376 204.219 222.344L143.597 257.372L124.53 268.491C121.248 270.395 116.114 273.487 112.697 275.018C105.12 271.584 94.0577 264.642 86.4497 260.326L23.4992 223.981L8.17554 215.182C6.20051 214.042 1.94711 211.436 0 210.591V64.7434C2.70794 63.5612 10.2397 58.4168 13.3904 56.5882L52.5942 33.7747L96.0334 8.78634C99.3822 6.87029 102.768 5.01952 106.188 3.23513C108.167 2.21723 110.773 1.11513 112.544 0Z" fill={`var(${color})`}/>
        </svg>
    );
}

type HexProps = {
    className?: String;
    type?: 'solid' | 'outline';
    color?: ColorVariables,
    size?: ResponsiveClampSize;
}

const DEFAULT_SIZE = {
    size: {
        minSize: 18,
        desiredSize: 20,
        maxSize: 20
    }
} as ResponsiveClampSize;

export default function Hex({className, color = "--orange-500", type = 'solid', size = DEFAULT_SIZE }: HexProps) {
    // Convert sizes
    let sizeVW = CalculateClamp({size:size.size, mobile:false});
    let mobileSizeVW = CalculateClamp({size: size.mobileSize ? size.mobileSize : size.size, mobile: true});

    const sizeStyle = {
        "--hex-size": sizeVW,
        "--hex-mobile-size": mobileSizeVW,
    } as React.CSSProperties;

    return (
        <div className={`hex ${className ?? ''}`} style={sizeStyle}>
            {type === 'solid' ?
                <HexSolid color={color} />
            :
            <HexOutline color={color} />
            }
        </div>
    )
}
