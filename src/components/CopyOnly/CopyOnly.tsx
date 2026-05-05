import { useFadeInChildren } from "../../hooks/useFadeIn";
import { ThreeButtonsArray } from "../../types/buttons";
import { ThreeButtons } from "../Buttons/Buttons";
import Eyebrow from "../Eyebrow/Eyebrow";

import "./CopyOnly.scss";

export type CopyOnlyProps = {
    eyebrow?: string;
    header: string;
    subtitle?: string;
    body?: string;
    buttons?: ThreeButtonsArray;

    headingSize?: "h2" | "h3" | "h4";
    variation: "left" | "center" | "columns";
};

export default function CopyOnly({ eyebrow, header, subtitle, body, buttons, headingSize = "h2", variation = "left" }: CopyOnlyProps) {
    // const eyebrowVariation = variation === "center" ? "centered" : "left";
    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", { stagger: 0.15, y: 24 });

    const Heading = headingSize;

    if (variation === "columns") {
        return (
            <div ref={ref} className={`copy-wrapper`}>
                <div className={`copy-inner ${variation}`}>
                    <div className="copy-left">
                        {eyebrow && <Eyebrow text={eyebrow} className={"mwc-animate"} />}

                        <Heading className="copy-header heading-md mwc-animate">{header}</Heading>
                    </div>

                    <div className="copy-right">
                        {subtitle && <h5 className="subtitle mwc-animate">{subtitle}</h5>}



                         <p className={`mwc-animate ${headingSize === "h2" ? "body-l" : "body"}`}>{body}</p>


                        {buttons && buttons?.length != 0 && <ThreeButtons className="copy-btns mwc-animate" buttons={buttons ?? []} />}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div ref={ref} className={`copy-wrapper `}>
            <div className={`copy-inner ${variation}`}>
                <div className="copy-text">
                    <div className="copy-upper">
                        {eyebrow && <Eyebrow text={eyebrow} className={"mwc-animate"} />}

                        <Heading className="copy-header heading-md mwc-animate">{header}</Heading>
                    </div>

                    {subtitle && <h5 className="subtitle mwc-animate">{subtitle}</h5>}

                    <p className={`mwc-animate ${headingSize === "h2" ? "body-l" : "body"}`}>{body}</p>
                </div>

                {buttons && buttons?.length != 0 && <ThreeButtons className="copy-btns mwc-animate" buttons={buttons ?? []} />}
            </div>
        </div>
    );
}
