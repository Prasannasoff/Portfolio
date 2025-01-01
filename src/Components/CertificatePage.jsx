import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiMongodb } from "react-icons/si";
import { SiDocker, SiKubernetes } from "react-icons/si";
import style from '../styles/CertificatePage.module.css';
gsap.registerPlugin(ScrollTrigger);

const CertificatePage = () => {

    const sectionRef = useRef(null); // Reference for the section element
    const colLeftRef = useRef(null); // Reference for the left column
    const colRightRef = useRef(null); // Reference for the right column
    const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

    useEffect(() => {
        if (isMobile) {
            // Skip animation initialization on mobile
            return;
        }
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Request animation frame loop
        const raf = (time) => {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // GSAP Animation for colRight
        gsap.fromTo(
            colRightRef.current,
            { opacity: 0, x: 2500 }, // Start with opacity 0 and x offset
            {
                opacity: 1,
                x: 0, // Move to the original position
                ease: "power3.out",
                duration: 3,
                scrollTrigger: {
                    trigger: colRightRef.current,
                    scrub: true,
                    start: "top 60%", // Adjust based on when you want the animation to start
                    end: "top 10%", // Adjust the end position
                },
            }
        );

        // GSAP Animation for colLeft
        const timeln = gsap.timeline({ paused: true });
        timeln.fromTo(
            colLeftRef.current,
            { y: 0 },
            { y: "50vh", duration: 3, ease: "none" },
            0
        );

        ScrollTrigger.create({
            animation: timeln,
            trigger: colLeftRef.current,
            start: "top top",
            end: "bottom center",
            scrub: true,
        });

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div id="vertical" ref={sectionRef} className={style.verticalSection}>
            <div className={style.container}>
                <div className={style.verticalContent}>
                    <div className={style.colLeft} ref={colLeftRef}>
                        <h2 className={style.heading}>
                            <span>My</span>
                            <span>Certificates</span>
                        </h2>
                    </div>
                    <div className={style.colRight}>
                        <div className={style.verticalItem}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <SiMongodb title="MongoDB" />
                                    <h3>Mongo DB</h3>
                                </div>
                                <div style={{ display: 'flex', height: '40px', padding: '5px', backgroundColor: 'white', color: "black", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', fontSize: '15px' }}>Download Certficate</div>
                            </div>
                            <p>
                                Lenis is an open-source library built to standardize scroll
                                experiences and sauce up websites with butter-smooth
                                navigation, all while using the platform and keeping it
                                accessible.
                            </p>
                        </div>
                        <div
                            className={`${style.verticalItem} ${style.hidden}`}
                            ref={colRightRef}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <SiDocker title="Docker" />
                                    <h3>Dev Ops</h3>
                                </div>
                                <div style={{ display: 'flex', height: '40px', padding: '5px', backgroundColor: 'white', color: "black", alignItems: 'center', justifyContent: 'center', borderRadius: '10px', fontSize: '15px' }}>Download Certficate</div>
                            </div>
                            <p>
                                Lenis is an open-source library built to standardize scroll
                                experiences and sauce up websites with butter-smooth
                                navigation, all while using the platform and keeping it
                                accessible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificatePage;