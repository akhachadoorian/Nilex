import React from "react";
import { ImageProps } from "../../types/images";
import './ValuesGrid.scss';
import { useFadeInChildren } from "../../hooks/useFadeIn";

type ValuesGridProps = {
    image1: ImageProps,
    image2: ImageProps,
    image3: ImageProps,
}

export default function ValuesGrid({image1, image2, image3}:ValuesGridProps) {
    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", { stagger: 0.15, y: 24 });

    return (
        <div ref={ref} className="values_grid">
            <div className="values_grid-inner">
                <div className="img-holder values_grid-img1 mwc-animate">
                    <img src={image1.src} alt={image1.alt} />
                </div>
                <div className="img-holder values_grid-img2 mwc-animate">
                    <img src={image2.src} alt={image2.alt} />
                </div>

                <div className="img-holder values_grid-img3 mwc-animate">
                    <img src={image3.src} alt={image3.alt} />
                </div>
            </div>
        </div>
    );
}
