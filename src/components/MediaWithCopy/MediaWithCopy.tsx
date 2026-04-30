import react from "react";
import Eyebrow from "../Eyebrow/Eyebrow";
import Accordion from "../Accordion";
import "./MediaWithCopy.scss";
import { ImageProps } from "../../types/images";

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
                {eyebrow && <Eyebrow text={eyebrow} />}

                <h2>{header}</h2>
                {body && (
                    <div
                        className="body"
                        dangerouslySetInnerHTML={{ __html: body }}
                    />
                )}
            </div>

            <div className="media_with_copy-img">
                <div className="overlay"></div>
                <img src={img.src} alt={img.alt} />
            </div>

            {/* <div className="subsections"> */}
            {/* {subsections.map((s) => (
                                    <Accordion 
                                        key={s.subheader} 
                                        header={s.subheader}
                                        body={s.subtext}
                                    />
                                ))} */}
            {/* </div> */}
        </div>
    );
}

export default MediaWithCopy;
