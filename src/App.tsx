import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer.jsx";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const lenisRef = useRef<LenisRef>(null);

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => gsap.ticker.remove(update);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                duration: 1.2,
                anchors: true,
                smoothWheel: true,
                syncTouch: false,
                naiveDimensions: true,
                stopInertiaOnNavigate: true,
            }}
            ref={lenisRef}
        >
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
                <Footer />
            </Router>
        </ReactLenis>
    );
}

export default App;
