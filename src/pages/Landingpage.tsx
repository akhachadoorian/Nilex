import Hero from "../components/Hero/Hero";

import {
    aboutContent,
    contactCopyOnlyContent,
    heroContent,
    productCardsContent,
    productCopyOnlyContent,
    valuesContent,
} from "../data/text/landingpage";
import MediaWithCopy from "../components/MediaWithCopy/MediaWithCopy";
import { useFadeIn } from "../hooks/useFadeIn.js";
import CopyOnly from "../components/CopyOnly/CopyOnly.js";
import ProductCards from "../components/ProductCards/ProductCards.js";
import ValuesGrid from "../components/ValuesGrid/ValuesGrid.js";

function LandingPage({}) {
    const aboutRef = useFadeIn<HTMLDivElement>();
    const productRef = useFadeIn<HTMLDivElement>();
    const contactRef = useFadeIn<HTMLDivElement>();

    return (
        <>
            <Hero
                eyebrow={heroContent.eyebrow}
                header={heroContent.header}
                subtitle={heroContent.subtitle}
                body={heroContent.body}
                buttons={heroContent.btns ?? []}
            />

            <section
                ref={aboutRef}
                className="base_section about-section"
                id="about"
                aria-label="About Nilex"
            >
                {/* <MediaWithCopy  
                    eyebrow={aboutContent.eyebrow}
                    header={aboutContent.header}
                    body={aboutContent.bodyText}
                    img={aboutContent.img}
                    // subsections={aboutContent.subsections}
                    mediaSide="left"
                /> */}
                <CopyOnly
                    styleOptions={{
                        headingSize: "h2",
                        variation: "left",
                    }}
                    eyebrow={aboutContent.eyebrow}
                    header={aboutContent.header}
                    body={aboutContent.bodyText}
                />

                <ValuesGrid
                    image1={valuesContent.image1}
                    image2={valuesContent.image2}
                    image3={valuesContent.image3}
                />
            </section>

            <section
                ref={productRef}
                id="products"
                className="base_section product-section"
                aria-label="Products"
            >
                <CopyOnly
                    eyebrow={productCopyOnlyContent.eyebrow}
                    header={productCopyOnlyContent.header}
                    body={productCopyOnlyContent.body}
                    styleOptions={{
                        headingSize: "h2",
                        variation: "center",
                    }}
                />

                <ProductCards productCards={productCardsContent} />
            </section>

            <section
                ref={contactRef}
                id="contact"
                className="full-width contact-section"
                aria-label="Contact"
            >
                <div className="section-inner">
                    <CopyOnly
                        eyebrow={contactCopyOnlyContent.eyebrow}
                        header={contactCopyOnlyContent.header}
                        body={contactCopyOnlyContent.body}
                        buttons={contactCopyOnlyContent.buttons}
                        styleOptions={{
                            headingSize: "h2",
                            variation: "columns",
                        }}
                    />
                </div>
            </section>
        </>
    );
}

export default LandingPage;
