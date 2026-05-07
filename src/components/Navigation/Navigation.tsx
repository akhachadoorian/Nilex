import React, { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../data/navItems";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { useFadeIn } from "../../hooks/useFadeIn";
import { LenisLink } from "../../utils/LenisLink";
import Buttons from "../Buttons/Buttons";
import { contactItems } from "../../data/contactItems";
// import Logo from '/assets/OrangeLogo.svg';

function Navigation({}) {
    const ref = useFadeIn<HTMLDivElement>();

    // Handle mobile menu open and closing
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("mobile-nav-open", mobileOpen);

        return () => {
            document.body.classList.remove("mobile-nav-open");
        };
    }, [mobileOpen]);

    const closeMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header ref={ref} className="navigation">
            <div className="navigation-inner">
                <LenisLink to="/" className="navigation-logo">
                    <img src={"/assets/NilexOnlyWhite.svg"} alt="Nilex Logo" />
                </LenisLink>

                <nav>
                    {NAV_ITEMS.map((item, idx) => (
                        <LenisLink
                            key={idx}
                            to={item.link}
                            className={`nav-link ${item.style === "button" ? "nav-button" : ""}`}
                        >
                            <p className="nav-text">{item.text}</p>
                        </LenisLink>
                    ))}
                </nav>

                <div
                    className={`navigation-mobile_btn ${mobileOpen ? "mobile_open" : ""}`}
                    id="mobile_nav_btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <div className="mobile_btn-line"></div>
                </div>
            </div>

            <div className={`mobile_nav ${mobileOpen ? "open" : ""}`}>
                <div className="mobile_nav-wrapper">
                    <div className="mobile_nav-inner">
                        {NAV_ITEMS.map((item, idx) => (
                            <LenisLink
                                key={idx}
                                to={item.link}
                                className={`mobile_nav-link ${item.style === "button" ? "mobile_nav-button" : ""}`}
                                onClick={closeMenu}
                            >
                                <p className="mobile_nav-text">{item.text}</p>
                            </LenisLink>
                        ))}
                    </div>

                    <div className="contact_btns">
                        {contactItems.map((c, idx) => (
                            <Buttons
                                key={idx}
                                btnSettings={{
                                    btnText: c.cta,
                                    link: c.link,
                                }}
                                style={idx === 0 ? "solid" : "solid"}
                                theme={idx === 0 ? "white" : "orange"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navigation;
