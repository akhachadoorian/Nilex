import React from "react";

import { contactItems } from "../../data/contactItems";
import HexIconButton from "../HexIconButton";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@phosphor-icons/react";
import { useFadeIn, useFadeInChildren } from "../../hooks/useFadeIn";

function Footer({}) {
    const copyrightYear = new Date().getFullYear();
    // const ref = useFadeIn<HTMLDivElement>();

    const ref = useFadeInChildren<HTMLDivElement>(".mwc-animate", { stagger: 0.15, y: 24 });

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
                                let pre =
                                    c.kind === "phone"
                                        ? "tel:"
                                        : c.kind === "email"
                                          ? "mailto"
                                          : "";

                                let IconComponent =
                                    c.kind === "phone"
                                        ? PhoneIcon
                                        : c.kind === "email"
                                          ? EnvelopeIcon
                                          : LinkIcon;

                                return (
                                    <Link
                                        key={idx}
                                        to={`${pre ?? ""}${c.link}`}
                                        className="contact_link"
                                    >
                                        {/* TODO: add icon */}
                                        <div className="hex_icon">
                                            <IconComponent
                                                color="var(--stone-000)"
                                                size={22}
                                            />
                                        </div>

                                        <p className="">{c.text}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="footer_right-lower mwc-animate">
                        <p className="body-s">
                            Copyright {copyrightYear} by Nilex Industrial
                        </p>

                        {/* FIXME: updated privacy statement */}
                        <Link
                            to={"https://akhachadoorian.github.io/Resume/"}
                            target="_blank"
                            className="footer_right-lower-link"
                        >
                            <p className="body-s">
                                Designed & Developed by Alex Khachadoorian
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

// function Footer({}) {
//     const copyrightYear = new Date().getFullYear();

//     return (
//         <footer>
//             <div className="footer_upper">
//                 <div className="footer_upper-left">
//                     <div className="logo-holder img-holder">
//                         <img src={"/assets/WhiteLogo.svg"} alt="Nilex Logo" />
//                     </div>
//                 </div>

//                 <div className="footer_upper-right">
//                   <p className="eyebrow">Get in Touch</p>
//                   <div className="footer_upper-contact_links">
//                     {contactItems.map((c, idx) => {
//                       let pre = c.kind === 'phone' ? 'tel:' : c.kind === 'email' ? 'mailto' : '';

//                       let IconComponent = c.kind === 'phone' ? PhoneIcon : c.kind === 'email' ? EnvelopeIcon : LinkIcon;

//                       return (
//                         <Link key={idx} to={`${pre ?? ''}${c.link}`} className="contact_link">
//                           {/* TODO: add icon */}
//                           <IconComponent color="var(--stone-000)" size={16}/>
//                           <p className="">{c.text}</p>
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 </div>
//             </div>

//             <div className="footer_lower">
//                 <div className="footer_lower-left">
//                     <p className="body-s">
//                         Copyright {copyrightYear} by Nilex Industrial
//                     </p>
//                 </div>
//                 <div className="footer_lower-right">
//                     {/* FIXME: updated privacy statement */}
//                     <Link
//                         to={"https://akhachadoorian.github.io/Resume/"}
//                         target="_blank"
//                     >
//                         <p className="body-s">
//                             Designed & Developed by Alex Khachadoorian
//                         </p>
//                     </Link>
//                 </div>
//             </div>
//         </footer>
//     );
// }
