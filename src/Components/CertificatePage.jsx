import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiMongodb } from "react-icons/si";
import { SiDocker } from "react-icons/si";
gsap.registerPlugin(ScrollTrigger);

const CertificatePage = () => {
    const sectionRef = useRef(null);
    const colLeftRef = useRef(null);
    const colRightRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        // Use ResizeObserver to detect window size changes
        const resizeObserver = new ResizeObserver(() => {
            handleResize();
        });
        resizeObserver.observe(document.body);

        let lenis;
        if (!isMobile) {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });

            const raf = (time) => {
                lenis.raf(time);
                ScrollTrigger.update();
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);

            gsap.fromTo(
                colRightRef.current,
                { opacity: 0, x: 2500, y: 0 },
                {
                    opacity: 1,
                    y: -100,
                    x: 0,
                    ease: "power3.out",
                    duration: 3,
                    scrollTrigger: {
                        trigger: colRightRef.current,
                        scrub: true,
                        start: "top 60%",
                        end: "top 10%",
                    },
                }
            );

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
                start: "top 0%",
                end: "bottom center",
                scrub: true,
            });

            return () => {
                lenis.destroy();
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [isMobile]);

    return (
        <div id="certifications" ref={sectionRef} className="lg:min-h-[200vh] lg:mt-12 h-full lg:block flex flex-col w-screen pt-[100px] lg:p-0 p-5 min-p-3 font-slussen text-[24px] font-normal text-white">
            <div className="w-[95%] flex mx-auto">
                <div className="flex justify-center lg:flex-row flex-col items-center">
                    <div ref={colLeftRef} className="w-1/2 h-full">
                        <div className="lg:text-[70px] lg:pt-16 text-[30px] lg:items-start items-center flex flex-col font-extrabold  lg:pl-[25px] m-0 uppercase">
                            <div className="lg:border-l-[3px] flex gap-[10px] lg:gap-[0px] lg:flex lg:flex-col lg:border-[#ff98a2] lg:pl-10 lg:leading-[80%]">
                                <div>My</div>
                                <div>Certificates</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 min-w-[320px] font-Lato flex flex-col gap-[15px]">
                        <div className="p-[15px] bg-gray-600/50 rounded-[15px] flex flex-col gap-[10px] lg:mb-[240px]">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-[10px]">
                                    <SiMongodb title="MongoDB" />
                                    <h3 className="text-[20px] uppercase leading-none text-white">Mongo DB</h3>
                                </div>
                                <div className="flex h-[40px] p-[5px] bg-white text-black items-center justify-center rounded-[10px] text-[15px]">
                                    Download Certificate
                                </div>
                            </div>
                            <p>
                                Lenis is an open-source library built to standardize scroll
                                experiences and sauce up websites with butter-smooth
                                navigation, all while using the platform and keeping it
                                accessible.
                            </p>
                        </div>
                        <div
                            ref={colRightRef}
                            className="p-[15px] bg-gray-600/50 rounded-[15px] flex flex-col gap-[10px] lg:transform lg:translate-x-[2500px] lg:opacity-0"
                        >
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-[10px]">
                                    <SiDocker title="Docker" />
                                    <h3 className="text-[20px] uppercase leading-none text-white">Dev Ops</h3>
                                </div>
                                <div className="flex h-[40px] p-[5px] bg-white text-black items-center justify-center rounded-[10px] text-[15px]">
                                    Download Certificate
                                </div>
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
