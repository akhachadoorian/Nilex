import react from "react";

function MediaWithCopy({ header, bodyText, media, mediaAltText, mediaSide = "right" }) {
    return (
        <div className="media-with-copy" >
            <div className="mwc-inner">
                { mediaSide == "right" ?
                    <>
                        <div data-scroll data-scroll-speed="1" className="text-side">
                            <h2>{header}</h2>
                            <p>{bodyText}</p>
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
