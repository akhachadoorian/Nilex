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
        orange: "--orange-650",
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

const DEFAULT_STYLE_MAP_TWO_BTNS: Array<BtnStyles> = [
    "solid",
    "arrow",
];

const DEFAULT_THEME_MAP_TWO_BTNS: Array<BtnThemes> = [
    "orange",
    "orange",
];

export function TwoButtons({
    buttons,
    customStyleMap,
    customThemeMap,
    className,
}: TwoButtonsProps) {
    if (buttons === undefined || buttons?.length == 0) return;

    return (
        <div className={`btns ${className}`}>
            {buttons?.map((btn, idx) => {
                let style =
                    customStyleMap && customStyleMap.length > idx
                        ? customStyleMap[idx]
                        : DEFAULT_STYLE_MAP_TWO_BTNS[idx];

                let theme =
                    customThemeMap && customThemeMap.length > idx
                        ? customThemeMap[idx]
                        : DEFAULT_THEME_MAP_TWO_BTNS[idx];


                return (
                    <Buttons
                        key={idx}
                        className=""
                        style={style}
                        theme={theme}
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

const DEFAULT_STYLE_MAP_THREE_BTNS: Array<BtnStyles> = [
    "solid",
    "outline",
    "arrow",
];

const DEFAULT_THEME_MAP_THREE_BTNS: Array<BtnThemes> = [
    "orange",
    "orange",
    "orange",
];

export function ThreeButtons({
    buttons,
    customStyleMap,
    customThemeMap,
    className,
}: ThreeButtonsProps) {
    if (buttons === undefined || buttons?.length == 0) return;

    return (
        <div className={`btns ${className}`}>
            {buttons?.map((btn, idx) => {
                let style =
                    customStyleMap && customStyleMap.length > idx
                        ? customStyleMap[idx]
                        : DEFAULT_STYLE_MAP_THREE_BTNS[idx];

                let theme =
                    customThemeMap && customThemeMap.length > idx
                        ? customThemeMap[idx]
                        : DEFAULT_THEME_MAP_THREE_BTNS[idx];

                return (
                    <Buttons
                    key={idx}
                        className=""
                        style={style}
                        theme={theme}
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
