import react from "react";

function MediaWithCopy({ header, bodyText, media, mediaAltText, mediaSide = "right" }) {
    return (
        <div className="media-with-copy" data-scroll-section>
            <div className="mwc-inner">
                { mediaSide == "right" ?
                    <>
                        <div className="text-side">
                            <h2>{header}</h2>
                            <p>{bodyText}</p>
                        </div>
                        <div className="img-side">
                            <div className="overlay"></div>
                            <img src={media} alt={mediaAltText} />
                        </div>
                    </>
                :
                    <>
                        <div className="img-side">
                            <div className="overlay"></div>
                            <img src={media} alt={mediaAltText} />
                        </div>
                        <div className="text-side">
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
