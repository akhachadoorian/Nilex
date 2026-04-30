import React, { useContext } from "react";
import { NAV_ITEMS } from "../../data/navItems";
import { Link } from "react-router-dom";
import "./Navigation.scss";
// import Logo from '/assets/OrangeLogo.svg';

function Navigation({}) {
    return (
        <header className="navigation">
            <div className="navigation-inner">
                <div className="logo-holder">
                    <img src={"/assets/WhiteLogo.svg"} alt="Nilex Logo" />
                </div>
                <nav>
                    {NAV_ITEMS.map((item, idx) => (
                        <Link key={idx} to={item.link} className="nav-link">
                            <p className="nav-text">{item.text}</p>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
