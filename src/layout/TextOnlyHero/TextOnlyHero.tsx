import React from "react";
import "./TextOnlyHero.scss";
import { BtnThemes, TwoButtonsArray } from "../../types/buttons";
import Eyebrow from "../../components/Eyebrow/Eyebrow";
import { TwoButtons } from "../../components/Buttons/Buttons";
import { useFadeInChildren } from "../../hooks/useFadeIn";

type TextOnlyStyleProps = {
    variation?: "left" | "center";
    theme?: "dark-orange" | "dark-oxblood";
    hideHexes?: boolean;
};

const DEFAULT_STYLE = {
    variation: "left",
    theme: "dark-orange",
    hideHexes: false,
} as TextOnlyStyleProps;

type TextOnlyHeroProps = {
    styleOptions?: TextOnlyStyleProps;
    eyebrow?: string;
    header: string;
    body?: string;
    buttons?: TwoButtonsArray;
};

const BUTTON_THEMES: Record<string, Array<BtnThemes>> = {
    "dark-orange": ["pale-orange", "white"],
    "dark-oxblood": ["oxblood", "white"],
};

export default function TextOnlyHero({
    eyebrow,
    header,
    body,
    buttons,
    styleOptions,
}: TextOnlyHeroProps) {
    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", {
        stagger: 0.15,
        y: 24,
    });
    const hasHtmlTags = (body: string) => /<[a-z][\s\S]*>/i.test(body);

    const variation =
        styleOptions && styleOptions.variation
            ? styleOptions?.variation
            : DEFAULT_STYLE.variation;

    const theme =
        styleOptions && styleOptions.theme
            ? styleOptions?.theme
            : DEFAULT_STYLE.theme;

    const hideHexes =
        styleOptions && styleOptions.hideHexes
            ? styleOptions?.hideHexes
            : DEFAULT_STYLE.hideHexes;

    return (
        <section
            className={`text_only_hero-section text_only_hero-${variation} text_only_hero-${theme}`}
            ref={ref}
        >
            {!hideHexes && (
                <div
                    className="text_only_hero-hexes mwc-animate"
                    aria-hidden="true"
                >
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className={`hex-${i}`} />
                    ))}
                </div>
            )}

            <div className="home_hero-content-wrapper">
                <div className="text_only_hero-content">
                    {eyebrow && (
                        <Eyebrow
                            text={eyebrow}
                            className={"text_only_hero-eyebrow mwc-animate"}
                            color={
                                theme === "dark-orange"
                                    ? "--orange-200"
                                    : "--oxblood-200"
                            }
                        />
                    )}

                    <h1 className="text_only_hero-title mwc-animate">
                        {header}
                    </h1>

                    {body && hasHtmlTags(body) ? (
                        <div
                            className={`text_only_hero-body mwc-animate body-l`}
                            dangerouslySetInnerHTML={{ __html: body }}
                        />
                    ) : (
                        <p className={`mwc-animate text_only_hero-body body-l`}>
                            {body}
                        </p>
                    )}

                    {buttons && buttons?.length != 0 && (
                        <TwoButtons
                            className="text_only_hero-btns mwc-animate"
                            buttons={buttons ?? []}
                            customThemeMap={
                                BUTTON_THEMES[theme ?? "dark-orange"]
                            }
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
