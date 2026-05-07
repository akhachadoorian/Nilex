import HomeHero from "../../layout/HomeHero/HomeHero.js";

import content from "./content.js"
import './Home.scss';

import { useFadeIn } from "../../hooks/useFadeIn.js";
import CopyOnly from "../../components/CopyOnly/CopyOnly.js";
import ProductCards from "../../components/ProductCards/ProductCards.js";
import ValuesGrid from "../../components/ValuesGrid/ValuesGrid.js";
import { homeSEO } from "../../data/seoContent.js";
import SEO from "../../utils/SEO.js";

export default function Home({}) {
    const aboutRef = useFadeIn<HTMLDivElement>();
    const productRef = useFadeIn<HTMLDivElement>();
    const contactRef = useFadeIn<HTMLDivElement>();

    return (
        <>
            <SEO {...homeSEO} />

            <HomeHero
                {...content.hero}
            />

            <section
                ref={aboutRef}
                className="base_section about-section"
                id="about"
                aria-label="About Nilex"
            >
                <CopyOnly
                    styleOptions={{
                        headingSize: "h2",
                        variation: "left",
                    }}
                    {...content.about.copyOnly}
                />

                <ValuesGrid
                    {...content.about.values}
                />
            </section>

            <section
                ref={productRef}
                id="products"
                className="base_section product-section"
                aria-label="Products"
            >
                <CopyOnly
                    styleOptions={{
                        headingSize: "h2",
                        variation: "center",
                    }}
                    {...content.products.copyOnly}
                />

                <ProductCards {...content.products.productCards} />
            </section>

            <section
                ref={contactRef}
                id="contact"
                className="full-width contact-section"
                aria-label="Contact"
            >
                <div className="section-inner">
                    <CopyOnly
                        styleOptions={{
                            headingSize: "h2",
                            variation: "columns",
                        }}
                        {...content.contact.copyOnly}
                    />
                </div>
            </section>
        </>
    );
}
