import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Hero from "../components/Hero";

import { hero, about, hexagons, product, contact } from "../data/text/landingpage.js"
import MediaWithCopy from '../components/MediaWithCopy.jsx';
import Buttons from "../components/Buttons.jsx";
import Hexagon from '../components/Hexagon.jsx';
import Card from '../components/Card.jsx';
import Card_V2 from '../components/Card_V2.jsx';
import HexagonButton from "../components/HexagonButton.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
// import Layout from "../components/Layout";

function LandingPage({}) {
    
    return (
        <>
            <Hero 
                header={hero.header}
                bodyText={hero.bodyText}
                logo={hero.logo}
                logoAltText={hero.logoAltText}
                background={hero.backgroundImage}
                mobileBackground={hero.mobileBackgroundImage}
            />

            <section data-scroll-section style={{position: "relative", overflow: 'hidden'}} id="About">
                {/* <Hexagon 
                    color={"grey"}
                    desktopPosition={hexagons.g1.desktop}
                    // mobilePosition={hexagons.g1.mobile}
                    speckled={true}
                /> */}
                <MediaWithCopy 
                    eyebrow={about.eyebrow}
                    header={about.header}
                    bodyText={about.bodyText}
                    media={about.media}
                    mediaAltText={about.mediaAltText}
                    subsections={about.subsections}
                />
            </section>

            <section data-scroll-section style={{position: "relative", overflow: 'hidden'}} id='Products'>
                {/* <div data-scroll data-scroll-speed="1" className='header'> */}
                <div className='header'>
                    <Eyebrow text={product.eyebrow} center={true}/>
                    <h2>{product.header}</h2>
                    <p>{product.bodyText}</p>
                </div>
                {/* <div data-scroll data-scroll-speed="3" className='card-grid'> */}
                <div  className='card-grid'>
                    {/* {product.products.map((p) =>
                        <Card 
                            key={p.id}
                            icon={p.icon}
                            title={p.title}
                            bodyText={p.bodyText}
                        />
                    )} */}
                    {product.products.map((p) =>
                        <Card_V2
                            key={p.id}
                            icon={p.icon}
                            title={p.title}
                            bodyText={p.bodyText}
                            style={p.style}
                        />
                    )}
                </div>
            </section>

            <section data-scroll-section id="Contact">
                {/* <div data-scroll data-scroll-speed="1" className='header'> */}
                <div className='header'>
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
                </div>
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