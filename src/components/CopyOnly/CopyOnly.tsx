import { useFadeInChildren } from "../../hooks/useFadeIn";
import { ThreeButtonsArray } from "../../types/buttons";
import { ColorVariables } from "../../types/colors";
import { ThreeButtons } from "../Buttons/Buttons";
import Eyebrow from "../Eyebrow/Eyebrow";

import "./CopyOnly.scss";

type CopyOnlyStyleProps = {
    variation: "left" | "center" | "columns";
    headingSize?: "h2" | "h3" | "h4";
    eyebrowColor?: ColorVariables;
    textColor?: "light" | "dark";
};

const DEFAULT_STYLE = {
    variation: "left",
    headingSize: "h2",
    eyebrowColor: "--orange-600",
    textColor: "dark",
} as CopyOnlyStyleProps;

export type CopyOnlyProps = {
    className?: string;

    // Style Options
    styleOptions: CopyOnlyStyleProps;

    // Fields
    eyebrow?: string;
    header: string;
    subtitle?: string;
    body?: string;
    buttons?: ThreeButtonsArray;
};

export default function CopyOnly({
    className,
    styleOptions = DEFAULT_STYLE,
    eyebrow,
    header,
    subtitle,
    body,
    buttons,
}: CopyOnlyProps) {
    const eyebrowVariation =
        styleOptions.variation === "center" ? "center" : "left";
    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", {
        stagger: 0.15,
        y: 24,
    });

    const Heading = styleOptions.headingSize ?? "h2";
    const hasHtmlTags = (body: string) => /<[a-z][\s\S]*>/i.test(body);

    if (styleOptions.variation === "columns") {
        return (
            <div
                ref={ref}
                className={`copy copy-${styleOptions.textColor} ${className}`}
            >
                <div className={`copy-inner copy-${styleOptions.variation}`}>
                    <div className="copy-left_col">
                        {eyebrow && (
                            <Eyebrow
                                variation={eyebrowVariation ?? "left"}
                                text={eyebrow}
                                color={
                                    styleOptions.eyebrowColor ?? "--orange-600"
                                }
                                className={"mwc-animate"}
                            />
                        )}

                        <Heading className="copy-header heading-md mwc-animate">
                            {header}
                        </Heading>
                    </div>

                    <div className="copy-right_col">
                        {subtitle && (
                            <h5 className="subtitle mwc-animate">{subtitle}</h5>
                        )}

                        {body && hasHtmlTags(body) ? (
                            <div
                                className="body-l copy-body mwc-animate"
                                dangerouslySetInnerHTML={{ __html: body }}
                            />
                        ) : (
                            <p
                                className={`mwc-animate ${styleOptions.headingSize === "h2" ? "body-l" : "body"}`}
                            >
                                {body}
                            </p>
                        )}

                        {buttons && buttons?.length != 0 && (
                            <ThreeButtons
                                className="copy-btns btns mwc-animate"
                                buttons={buttons ?? []}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            ref={ref}
            className={`copy copy-${styleOptions.textColor} ${className}`}
        >
            <div className={`copy-inner copy-${styleOptions.variation}`}>
                <div className="copy-text">
                    <div className="copy-upper">
                        {eyebrow && (
                            <Eyebrow
                                variation={eyebrowVariation ?? "left"}
                                text={eyebrow}
                                color={
                                    styleOptions.eyebrowColor ?? "--orange-600"
                                }
                                className={"mwc-animate"}
                            />
                        )}

                        <Heading className="copy-header heading-md mwc-animate">
                            {header}
                        </Heading>
                    </div>

                    {subtitle && (
                        <h5 className="subtitle mwc-animate">{subtitle}</h5>
                    )}

                    {body && hasHtmlTags(body) ? (
                        <div
                            className="body-l copy-body mwc-animate"
                            dangerouslySetInnerHTML={{ __html: body }}
                        />
                    ) : (
                        <p
                            className={`mwc-animate ${styleOptions.headingSize === "h2" ? "body-l" : "body"}`}
                        >
                            {body}
                        </p>
                    )}
                </div>

                {buttons && buttons?.length != 0 && (
                    <ThreeButtons
                        className="copy-btns btns mwc-animate"
                        buttons={buttons ?? []}
                    />
                )}
            </div>
        </div>
    );
}
