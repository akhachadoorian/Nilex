import Hero from "../components/Hero/Hero";

import { aboutContent, contactCopyOnly, heroContent, productCardsContent, productCopyOnlyContent } from "../data/text/landingpage"
import MediaWithCopy from '../components/MediaWithCopy/MediaWithCopy';
import { useFadeIn } from "../hooks/useFadeIn.js";
import CopyOnly from "../components/CopyOnly/CopyOnly.js";
import ProductCards from "../components/ProductCards/ProductCards.js";

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

            <section ref={aboutRef} className="base_section about-section" id="about">
                <MediaWithCopy
                    eyebrow={aboutContent.eyebrow}
                    header={aboutContent.header}
                    body={aboutContent.bodyText}
                    img={aboutContent.img}
                    subsections={aboutContent.subsections}
                    mediaSide="left"
                />
            </section>

            <section ref={productRef} id='products'  className="base_section product-section">
                <CopyOnly 
                    eyebrow={productCopyOnlyContent.eyebrow}
                    header={productCopyOnlyContent.header}
                    headingSize="h2"
                    body={productCopyOnlyContent.body}
                    variation="center"
                />

                <ProductCards productCards={productCardsContent}/>
            </section> 

            <section ref={contactRef} id='contact'  className="base_section contact-section">
                <CopyOnly 
                    eyebrow={contactCopyOnly.eyebrow}
                    header={contactCopyOnly.header}
                    headingSize="h2"
                    body={contactCopyOnly.body}
                    variation="left"
                />

                {/* <div data-scroll data-scroll-speed="1" className='header'> */}
                {/* <div className='header'>
                    <Eyebrow text={contact.eyebrow} color={"var(--primary)"}/>
                    <h2>{contact.header}</h2>
                    <p>{contact.bodyText}</p>
                </div>
                <div className="buttons">

                    {contact.methods.map((m) =>
                        <Buttons 
                            key={m.id}
                            icon={m.icon.svg}
                            iconAltText={m.icon.altText}
                            btn_text={m.title}
                            link={m.link}
                            style={'main'}
                        />
                    )}
                </div> */}
                {/* <div data-scroll data-scroll-speed="3" className="hex-btns"> */}
                {/* <div className="hex-btns">
                    {contact.methods.map((m) =>
                        <HexagonButton 
                            key={m.id}
                            icon={m.icon.svg}
                            iconAltText={m.icon.altText}
                            hoverIcon={m.iconHover.svg}
                            hoverIconAltText={m.iconHover.altText}
                            title={m.title}
                            bodyText={m.bodyText}
                            link={m.link}
                            col={m.col}
                            row={m.row}
                            marginLeft={m.marginLeft}
                        />
                    )}
                    
                </div> */}
            </section>
        </>
    );
}


export default LandingPage;