import React from "react";

import { contactItems } from "../../data/contactItems";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@phosphor-icons/react";
import { useFadeInChildren } from "../../hooks/useFadeIn";
import { LenisLink } from "../../utils/LenisLink";

function Footer({}) {
    const copyrightYear = new Date().getFullYear();
    // const ref = useFadeIn<HTMLDivElement>();

    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", {
        stagger: 0.15,
        y: 24,
    });

    return (
        <footer ref={ref}>
            <div className="footer-wrapper">
                <div className="footer_left mwc-animate">
                    <div className="logo-holder img-holder">
                        <img src={"/assets/WhiteLogo.svg"} alt="Nilex Logo" />
                    </div>
                </div>

                <div className="footer_right">
                    <div className="footer_right-upper mwc-animate">
                        <p className="footer_right-contact_text heading-xs">
                            Get in Touch
                        </p>
                        <div className="footer_right-contact_links mwc-animate">
                            {contactItems.map((c, idx) => {
                                let IconComponent =
                                    c.kind === "phone"
                                        ? PhoneIcon
                                        : c.kind === "email"
                                          ? EnvelopeIcon
                                          : LinkIcon;

                                let text =
                                    c.kind === "phone"
                                        ? c.phone
                                        : c.kind === "email"
                                          ? c.email
                                          : c.link;

                                return (
                                    <LenisLink
                                        key={idx}
                                        to={c.link}
                                        className="contact_link"
                                    >
                                        <div className="hex_icon">
                                            <IconComponent
                                                color="var(--stone-000)"
                                                size={22}
                                            />
                                        </div>

                                        <p className="">{text}</p>
                                    </LenisLink>
                                );
                            })}
                        </div>
                    </div>

                    <div className="footer_right-lower mwc-animate">
                        <p className="body-s">
                            Copyright {copyrightYear} by Nilex Industrial
                        </p>

                        <LenisLink
                            to={"/privacy-policy"}
                            target="_self"
                            className="footer_right-lower-link"
                        >
                            <p className="body-s">Privacy Policy</p>
                        </LenisLink>

                        <LenisLink
                            to={"https://akhachadoorian.github.io/Resume/"}
                            target="_blank"
                            className="footer_right-lower-link"
                        >
                            <p className="body-s">
                                Designed & Developed by Alex Khachadoorian
                            </p>
                        </LenisLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
