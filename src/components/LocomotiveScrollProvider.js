import { createContext, useContext, useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";

// Create context
export const LocomotiveScrollContext = createContext(null);

// Provider component
export function LocomotiveScrollProvider({ children }) {
    const scrollRef = useRef(null);
    const locomotiveScroll = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const location = useLocation(); // Detect route changes

    useEffect(() => {
        if (!isReady) return; // Prevents running before the page is ready

        if (scrollRef.current) {
            console.log("Initializing Locomotive Scroll...");

            locomotiveScroll.current = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1, // Adjust smoothness
                multiplier: 1.5, // Adjust speed
                smartphone: { smooth: true },
                tablet: { smooth: true }
            });

            console.log("Locomotive Scroll Initialized ✅");

            return () => {
                locomotiveScroll.current.destroy();
                console.log("Locomotive Scroll Destroyed ❌");
            };
        }
    }, [isReady]);

    // ✅ Ensure Locomotive Scroll updates after route changes
    useEffect(() => {
        setTimeout(() => {
            if (locomotiveScroll.current) {
                locomotiveScroll.current.update();
                console.log("Locomotive Scroll Updated on Route Change 🔄");
            }
        }, 500);
    }, [location.pathname]);

    // ✅ Set `isReady` to true after content renders
    useEffect(() => {
        setTimeout(() => setIsReady(true), 300); // Wait for the DOM to render
    }, []);

    return (
        <LocomotiveScrollContext.Provider value={{ locomotiveScroll }}>
            <div ref={scrollRef} data-scroll-container>
                {children}
            </div>
        </LocomotiveScrollContext.Provider>
    );
}
