import React, { useContext } from "react";
import { NAV_ITEMS } from "../../data/navItems";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { useFadeIn } from "../../hooks/useFadeIn";
// import Logo from '/assets/OrangeLogo.svg';

function Navigation({}) {
    const ref = useFadeIn<HTMLDivElement>();
    
    return (
        <header ref={ref} className="navigation">
            <div className="navigation-inner">
                <div className="logo-holder">
                    <img src={"/assets/NilexOnlyWhite.svg"} alt="Nilex Logo" />
                </div>
                <nav>
                    {NAV_ITEMS.map((item, idx) => (
                        <Link key={idx} to={item.link} className={`nav-link ${item.style === 'button' ? "nav-button" : ""}` }>
                            <p className="nav-text">{item.text}</p>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
