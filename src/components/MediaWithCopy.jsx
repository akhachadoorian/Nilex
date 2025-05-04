import react from "react";
import Eyebrow from "./Eyebrow";
import Accordion from "./Accordion";

function MediaWithCopy({ eyebrow, header, bodyText, subsections, media, mediaAltText, mediaSide = "right" }) {
    return (
        <div className="media-with-copy" >
            <div className="mwc-inner">
                { mediaSide == "right" ?
                    <>
                        {/* <div data-scroll data-scroll-speed="1" className="text-side"> */}
                        <div className="text-side">
                            { eyebrow ? <Eyebrow text={eyebrow} color={"var(--primary-darker-40"} />: '' }
                            <h2>{header}</h2>
                            <div className="body" dangerouslySetInnerHTML={{ __html: bodyText }} />
                            <div className="subsections">
                                {subsections.map((s) => (
                                    <Accordion 
                                        key={s.subheader} 
                                        header={s.subheader}
                                        body={s.subtext}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* <div data-scroll data-scroll-speed="2" className="img-side"> */}
                        <div className="img-side">
                            <div className="overlay"></div>
                            <img src={media} alt={mediaAltText} />
                        </div>
                    </>
                :
                    <>
                        {/* <div data-scroll data-scroll-speed="2" className="img-side"> */}
                        <div className="img-side">
                            <div className="overlay"></div>
                            <img src={media} alt={mediaAltText} />
                        </div>
                        {/* <div data-scroll data-scroll-speed="1" className="text-side"> */}
                        <div className="text-side">
                            { eyebrow ? <Eyebrow text={eyebrow} color={"var(--primary-darker-40"} />: '' }
                            <h2>{header}</h2>
                            <p>{bodyText}</p>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default MediaWithCopy
