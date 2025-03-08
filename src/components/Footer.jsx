import React from "react";

import { footer } from "../data/text/landingpage"

function Footer ({}) {
    return (
        <footer data-scroll-section>
            <div className="left-side">
                <div className="bg-hex"></div>
                <div className="left-side-inner" >
                    <div className="logo-holder">
                        <img src={footer.logo} alt="Nilex Logo" />
                    </div>
                    <div className="footer-links">
                        {footer.footerText.map((t) => (
                                t.link != ' ' ?
                                    <a key={t.text} className="link clickable" href={t.link}>
                                        <p>{t.text}</p>
                                    </a>  
                                :
                                    <div key={t.text} className="link unclickable">
                                        <p>{t.text}</p>
                                    </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-side"></div>
        </footer>       
    )
}

export default Footer