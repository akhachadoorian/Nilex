import react from "react";

function MediaWithCopy({ header, bodyText, subsections, media, mediaAltText, mediaSide = "right" }) {
    return (
        <div className="media-with-copy" >
            <div className="mwc-inner">
                { mediaSide == "right" ?
                    <>
                        <div data-scroll data-scroll-speed="1" className="text-side">
                            <h2>{header}</h2>
                            <div className="body" dangerouslySetInnerHTML={{ __html: bodyText }} />
                            <div className="subsections">
                                {subsections.map((s) => (
                                    <div key={s.subheader} className="section">
                                        <h6>{s.subheader}</h6>
                                        <p>{s.subtext}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div data-scroll data-scroll-speed="2" className="img-side">
                            <div className="overlay"></div>
                            <img src={media} alt={mediaAltText} />
                        </div>
                    </>
                :
                    <>
                        <div data-scroll data-scroll-speed="2" className="img-side">
                            <div className="overlay"></div>
                            <img src={media} alt={mediaAltText} />
                        </div>
                        <div data-scroll data-scroll-speed="1" className="text-side">
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
