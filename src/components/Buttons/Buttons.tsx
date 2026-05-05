import React from "react";
import "./Buttons.scss";
import {
    BtnStyles,
    BtnThemes,
    ButtonProps,
    ThreeButtonsProps,
    TwoButtonsProps,
} from "../../types/buttons";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { ColorVariables } from "../../types/colors";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Buttons({
    className,
    btnSettings,
    style = "solid",
    theme = "white",
}: ButtonProps) {
    let btnClass = `btn-style-${style} btn-theme-${theme}`;

    if (className) {
        btnClass += ` ${className}`;
    }

    const arrowThemeMap: Record<string, ColorVariables> = {
        white: "--stone-000",
    };

    const arrowTheme = (arrowThemeMap[theme] ??
        "--stone-000") as ColorVariables;

    return (
        <Link
            className={`btn ${btnClass}`}
            to={btnSettings.link}
            target={btnSettings.target ?? "_self"}
        >
            <p className="btn-text">{btnSettings.btnText}</p>

            {style === "arrow" && (
                <ArrowRightIcon
                    color={`var(${arrowTheme})`}
                    size={"var(--text-s)"}
                />
            )}
        </Link>
    );
}

// function ButtonsWithIcon({className, btnSettings, style, theme}: ButtonProps) {
//     const btn_style = "btn " + style
//     const iconMap = {
//         phone: faPhone,
//         envelope: faEnvelope,
//     };

//     return (
//         <a className={btn_style} href={link} target={target ? target : '_self'}>
//             {/* <img src={icon} alt={iconAltText} /> */}
//             <FontAwesomeIcon icon={iconMap[icon]} className="icon" />
//             <p className="btn_text">{btn_text}</p>
//         </a>
//     )
// }

export function TwoButtons({ buttons, className }: TwoButtonsProps) {
    if (buttons === undefined || buttons?.length == 0) return;

    const styleMap: Array<BtnStyles> = [
        "solid",
        "arrow", // FIXME:
    ];

    const themeMap: Array<BtnThemes> = [
        "pale-orange",
        "white", // FIXME:
    ];

    return (
        <div className={`btns ${className}`}>
            {buttons?.map((btn, idx) => {
                return (
                    <Buttons
                        key={idx}
                        className=""
                        style={styleMap[idx]}
                        theme={themeMap[idx]}
                        btnSettings={{
                            btnText: btn.btnText,
                            link: btn.link,
                            target: btn.target ?? "_self",
                        }}
                    />
                );
            })}
        </div>
    );
}

export function ThreeButtons({ buttons, className }: ThreeButtonsProps) {
    if (buttons === undefined || buttons?.length == 0) return;

    const styleMap: Array<BtnStyles> = [
        "solid",
        "outline",
        "arrow", // FIXME:
    ];

    const themeMap: Array<BtnThemes> = [
        "white",
        "white",
        "white", // FIXME:
    ];

    return (
        <div className={`btns ${className}`}>
            {buttons?.map((btn, idx) => {
                return (
                    <Buttons
                        className=""
                        style={styleMap[idx]}
                        theme={themeMap[idx]}
                        btnSettings={{
                            btnText: btn.btnText,
                            link: btn.link,
                            target: btn.target ?? "_self",
                        }}
                    />
                );
            })}
        </div>
    );
}
