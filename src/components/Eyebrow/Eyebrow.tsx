import react from "react";
import { ColorVariables } from "../../types/colors";
import Hex from "../Hex/Hex";
import './Eyebrow.scss'

type EyebrowProps = {
    className?: String;
    text: String;
    variation?: "left" | "center";
    color?: ColorVariables;
    includeMargin?: boolean;
    hexStyle?: 'solid' | 'outline';
};

export default function Eyebrow({
    className,
    text,
    variation = "left",
    color = "--orange-500",
    includeMargin = true,
    hexStyle = 'outline' 
}: EyebrowProps) {
    let eyebrowClass = `eyebrow-${variation}`;

    if (className) {
        eyebrowClass += ` ${className}`;
    }

    if (includeMargin) {
        eyebrowClass += ` include_margin`;
    }


    return (
        <div
            className={`eyebrow ${eyebrowClass}`}
        >
            <Hex type={hexStyle} color={color} />
            <p className="eyebrow" style={{color: `var(${color})`}}>{text}</p>
        </div>
    );
}
