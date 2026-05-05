import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Hero.scss";
import Eyebrow from "../Eyebrow/Eyebrow";
import Buttons, { TwoButtons } from "../Buttons/Buttons";
import { ThreeButtonsArray, TwoButtonsArray } from "../../types/buttons";

type HeroProps = {
    eyebrow?: string;
    header: string;
    subtitle?: string;
    body?: string;
    buttons?: TwoButtonsArray;
};

const COLORS = {
    "orange-300": "251, 192, 158",
    "orange-400": "248, 164, 118",
    "orange-500": "241, 100, 37",
    "orange-900": "74, 26, 5",
    "oxblood-800": "67, 17, 17",
}

export default function Hero({
    eyebrow,
    header,
    subtitle,
    body,
    buttons,
}: HeroProps) {
    const svgRef = useRef<SVGSVGElement>(null);

    // Handles the number of hexagons 
    const mobileScreenSize = 750;
    const [screenWidth, setWidth] = useState(window.innerWidth < mobileScreenSize);



    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const W = () => window.innerWidth;
        const H = () => window.innerHeight;

        function hexPoints(cx: number, cy: number, r: number): string {
            const pts: string[] = [];
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 180) * (60 * i - 30);
                pts.push(
                    `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`,
                );
            }
            return pts.join(" ");
        }

        const styles = [
            { fill: `rgba(${COLORS['orange-400']}, 1.0)`, stroke: "none"},
            { fill: `rgba(${COLORS['orange-900']}, 1.0)`, stroke: "none" }, 
            { fill: `rgba(${COLORS['orange-900']}, .20)`, stroke: "none" }, 
            { fill: `rgba(${COLORS['orange-400']}, 1.0)`, stroke: "none" }, 
            { fill: "none", stroke: `rgba(${COLORS['orange-400']}, 1.0)`, sw: 2 }, 
            { fill: "none", stroke: `rgba(${COLORS['orange-900']}, .20)`, sw: 2.5 }, 
            { fill: `rgba(${COLORS['oxblood-800']}, 0.50)`, stroke: "none" }, 
            { fill: "none", stroke: `rgba(${COLORS['oxblood-800']}, 0.50)`, sw: 2.5 },
            { fill: `rgba(${COLORS['orange-900']}, .40)`, stroke: "none" }, 
            
        ];

        const hexDefs = [
            { x: 0.03, y: 0.02, r: 110, style: 0 },
            { x: 0.0, y: 0.25, r: 160, style: 4, sw: 2 },
            { x: 0.42, y: -0.04, r: 140, style: 4 },
            { x: 0.78, y: -0.06, r: 90, style: 2, mobile: false },
            { x: 0.88, y: 0.06, r: 170, style: 2, mobile: false },
            { x: 0.97, y: -0.02, r: 80, style: 4, mobile: false },
            { x: -0.04, y: 0.52, r: 90, style: 4, sw: 2 },
            { x: 0.82, y: 0.48, r: 130, style: 6, mobile: false },
            { x: 0.94, y: 0.38, r: 70, style: 3, mobile: false },
            { x: 0.1, y: 0.72, r: 150, style: 2 },
            { x: 0.16, y: 0.95, r: 80, style: 3 },
            { x: 0.58, y: 0.8, r: 100, style: 6 },
            { x: 0.72, y: 0.7, r: 55, style: 3, mobile: false },
            { x: 0.9, y: 0.75, r: 90, style: 5, sw: 2.5, mobile: false },
            { x: 1.0, y: 0.85, r: 130, style: 5, sw: 2.5, mobile: false },
            { x: 0.28, y: 0.35, r: 40, style: 3 },
            { x: 0.65, y: 0.15, r: 35, style: 4, mobile: false },
            { x: 0.5, y: 0.6, r: 45, style: 5, sw: 1.5 },
        ].filter(def => !screenWidth || def.mobile !== false);

        const hexEls = hexDefs.map((def) => {
            const s = styles[def.style];
            const el = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "polygon",
            );
            el.setAttribute(
                "points",
                hexPoints(def.x * W(), def.y * H(), def.r),
            );
            el.setAttribute("fill", s.fill);
            if (s.stroke !== "none") {
                el.setAttribute("stroke", s.stroke);
                el.setAttribute("stroke-width", String(def.sw ?? s.sw ?? 2));
            }
            svg.appendChild(el);
            return el;
        });

        function repositionHexes() {
            hexEls.forEach((el, i) => {
                const def = hexDefs[i];
                el.setAttribute(
                    "points",
                    hexPoints(def.x * W(), def.y * H(), def.r),
                );
            });
        }
        window.addEventListener("resize", repositionHexes, );

        window.addEventListener('resize', (event) => {
            repositionHexes;
            setWidth(window.innerWidth < mobileScreenSize);
        });

        // Staggered entrance for hexagons
        gsap.set(hexEls, {
            opacity: 0,
            scale: 0.6,
            transformOrigin: "center center",
        });
        gsap.to(hexEls, {
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            stagger: { each: 0.07, from: "random" },
            delay: 0.1,
        });

        // Continuous float per hex
        hexEls.forEach((el, i) => {
            const dur = 5 + Math.random() * 5;
            const dy = 8 + Math.random() * 16;
            const dx = 4 + Math.random() * 8;
            const rot = 3 + Math.random() * 6;
            gsap.to(el, {
                y: i % 2 === 0 ? -dy : dy,
                x: i % 3 === 0 ? -dx : dx,
                rotation: i % 2 === 0 ? rot : -rot,
                transformOrigin: "center center",
                duration: dur,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 4,
            });
            if (i % 3 === 0) {
                gsap.to(el, {
                    opacity: 0.5 + Math.random() * 0.4,
                    duration: 3 + Math.random() * 3,
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: true,
                    delay: Math.random() * 3,
                });
            }
        });

        // Hero content entrance
        gsap.set(
            [
                ".hero-eyebrow",
                ".hero-title",
                ".hero-subtitle",
                ".hero-body",
                ".hero-btns",
            ],
            {
                opacity: 0,
                y: 30,
            },
        );
        const tl = gsap.timeline({ delay: 0.3 });
        tl.to(".hero-eyebrow", {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
        })
            .to(
                ".hero-title",
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                "-=0.4",
            )
            .to(
                ".hero-subtitle",
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                "-=0.4",
            )
            .to(
                ".hero-body",
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4",
            )
            .to(
                ".hero-btns",
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.35",
            );

        return () => {
            window.removeEventListener("resize", repositionHexes);
            gsap.killTweensOf(hexEls);
            tl.kill();
            hexEls.forEach((el) => el.remove());
        };
    }, [screenWidth]);

    return (
        <section className="hero-section hero-center">
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                className="hex-canvas"
            />
            <div className="hero-content-wrapper">
                <div className="hero-content">
                    {eyebrow && (
                        <Eyebrow
                            text={eyebrow}
                            className={"hero-eyebrow"}
                            color="--stone-300"
                        />
                    )}

                    <h1 className="hero-title">{header}</h1>

                    {subtitle && (
                        <h2 className="heading-xl hero-subtitle">{subtitle}</h2>
                    )}

                    {body && <p className="hero-body body-l">{body}</p>}

                    {buttons && buttons?.length != 0 && (
                        <TwoButtons
                            className="hero-btns"
                            buttons={buttons ?? []}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
