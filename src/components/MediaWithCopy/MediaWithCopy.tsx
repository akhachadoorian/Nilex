import react from "react";
import Eyebrow from "../Eyebrow/Eyebrow";
import Accordion from "../Accordion";
import "./MediaWithCopy.scss";
import { ImageProps } from "../../types/images";
import IconNote from "../IconNote/IconNote";

type MediaWithCopyProps = {
    className?: string;
    mediaSide?: "right" | "left";

    eyebrow?: string;
    header: string;
    body?: string | TrustedHTML;
    subsections?: Array<any>; //FIXME:
    img: ImageProps;
};

function MediaWithCopy({
    className,
    mediaSide = "right",
    eyebrow,
    header,
    body,
    subsections,
    img,
}: MediaWithCopyProps) {
    let mediaClass = `media_with_copy-${mediaSide}`;

    if (className) {
        mediaClass += ` ${className}`;
    }

    return (
        <div className={`media_with_copy ${mediaClass}`}>
            <div className="media_with_copy-text">
                {eyebrow && <Eyebrow text={eyebrow} color="--orange-600" />}

                <h2>{header}</h2>
                {body && (
                    <div
                        className="body-l media_with_copy-body"
                        dangerouslySetInnerHTML={{ __html: body }}
                    />
                )}

                {subsections && (
                    <div className="media_with_copy-subsections">
                        {" "}
                        {subsections.map((s) => (
                            <IconNote
                                key={s.subheader}
                                icon={s.icon}
                                title={s.subheader}
                                body={s.subtext}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="media_with_copy-img">
                {/* <div className="overlay"></div> */}
                <div className="img-holder">
                    <img src={img.src} alt={img.alt} />
                </div>
            </div>

            {/* <div className="subsections"> */}

            {/* </div> */}
        </div>
    );
}

export default MediaWithCopy;
