import Hero from "../components/Hero/Hero";

import { about, heroContent, } from "../data/text/landingpage"
import MediaWithCopy from '../components/MediaWithCopy/MediaWithCopy';
import Buttons from "../components/Buttons/Buttons.jsx";
import Card_V2 from '../components/Card_V2.jsx';
import Eyebrow from "../components/Eyebrow/Eyebrow.jsx";

function LandingPage({}) {
    
    return (
        <>
            <Hero
                eyebrow={heroContent.eyebrow}
                header={heroContent.header}
                subtitle={heroContent.subtitle}
                body={heroContent.body}
                buttons={heroContent.btns ?? []}
            />

            <section className="base_section about-section" id="about">
                <MediaWithCopy
                    eyebrow={about.eyebrow}
                    header={about.header}
                    body={about.bodyText}
                    img={about.img}
                    subsections={about.subsections}
                    mediaSide="left"
                />
            </section>

            {/* <section data-scroll-section style={{position: "relative", overflow: 'hidden'}} id='Products'> */}
                {/* <div data-scroll data-scroll-speed="1" className='header'> */}
                {/* <div className='header'>
                    <Eyebrow text={product.eyebrow} center={true}/>
                    <h2>{product.header}</h2>
                    <p>{product.bodyText}</p>
                </div> */}
                {/* <div data-scroll data-scroll-speed="3" className='card-grid'> */}
                {/* <div  className='card-grid'> */}
                    {/* {product.products.map((p) =>
                        <Card 
                            key={p.id}
                            icon={p.icon}
                            title={p.title}
                            bodyText={p.bodyText}
                        />
                    )} */}
                    {/* {product.products.map((p) =>
                        <Card_V2
                            key={p.id}
                            icon={p.icon}
                            title={p.title}
                            bodyText={p.bodyText}
                            style={p.style}
                        />
                    )}
                </div>
            </section> */}

            {/* <section id="Contact"> */}
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
            {/* </section> */}
        </>
    );
}


export default LandingPage;