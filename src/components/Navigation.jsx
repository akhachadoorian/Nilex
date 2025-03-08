import React, { useContext } from "react";
import { LocomotiveScrollContext } from "../components/LocomotiveScrollProvider";
import { navigation } from "../data/text/landingpage";

function Navigation ({}) {
    const { locomotiveScroll } = useContext(LocomotiveScrollContext);

    const handleScroll = (id) => {
        if (locomotiveScroll.current) {
            locomotiveScroll.current.update(); // Refresh Locomotive Scroll
    
            setTimeout(() => { // Delay for better detection
                const target = document.getElementById(id);
                if (target) {
                    locomotiveScroll.current.scrollTo(target, {
                        duration: 1000,
                        offset: -25, // Adjust offset if sections are too high
                        easing: [0.25, 0.0, 0.35, 1.0],
                    });
                } else {
                    console.error(`🚨 Section with id '${id}' not found!`);
                }
            }, 200); // Small delay to ensure the section is detected
        }
    };
    

    return (
        <section data-scroll-section className="navigation">
            <div className="logo-holder">
                <img src={navigation.logo} alt="Nilex Logo" />
            </div>
            <nav>
                {navigation.links.map((l) => (
                    <button 
                        key={l.id} 
                        className="main-nav"
                        onClick={() => handleScroll(l.id)}
                    >
                        {l.name}
                    </button>
                ))}
            </nav>
        </section>
    )
}

export default Navigation