import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis"; // Import Lenis
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import guestImg from "../assets/ProjectImages/work2!.png";
import paperPresentation from "../assets/paper.jpg";
gsap.registerPlugin(ScrollTrigger);

const AchievementPage = () => {
    const sectionRef = useRef(null); // Reference for the section element
    const background = useRef(null);
    const introText = useRef(null);
    const background2 = useRef(null);
    const introText2 = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time) => {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Adjusted GSAP animation for the first background
        gsap.fromTo(
            background.current,
            { width: isMobile ? '150px' : '300px', height: isMobile ? '250px' : '500px', opacity: 0, x: isMobile ? -500 : -1500 },
            {
                width: isMobile ? '350px' : '800px',
                height: isMobile ? '450px' : '700px',
                opacity: 1,
               
                x: 0,
                scrollTrigger: {
                    trigger: background.current,
                    start: "top center",
                    end: "center center",
                    scrub: true,
                    markers: false,
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        // Adjusted GSAP animation for the first intro text
        gsap.fromTo(
            introText.current,
            { fontSize: isMobile ? '30px' : '45px', opacity: 0, x: isMobile ? 500 : 1000 },
            {
                fontSize: isMobile ? '50px' : '70px',
                opacity: 1,
                x: 0,
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: introText.current,
                    scrub: true,
                    start: 'top center',
                    end: 'center center',
                },
            }
        );

        // Adjusted GSAP animation for the second background
        gsap.fromTo(
            background2.current,
            { width: isMobile ? '150px' : '300px', height: isMobile ? '250px' : '500px', opacity: 0, x: isMobile ? 500 : 1000 },
            {
                width: isMobile ? '320px' : '900px',
                height: isMobile ? '250px' : '600px',
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: background2.current,
                    start: "top 70%",
                    end: "top 10%",
                    scrub: true,
                    markers: false,
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        // Adjusted GSAP animation for the second intro text
        gsap.fromTo(
            introText2.current,
            { fontSize: isMobile ? '30px' : '45px', opacity: 0, x: isMobile ? -500 : -1000 },
            {
                fontSize: isMobile ? '50px' : '70px',
                opacity: 1,
                x: 0,
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: introText2.current,
                    scrub: true,
                    start: 'top center',
                    end: 'center center',
                },
            }
        );

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="flex flex-col">
            <div className="w-full mx-auto flex flex-col items-center md:items-start p-5" ref={sectionRef}>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col md:flex-row  d:gap-4 w-full">
                        <div ref={background} className="w-full h-[500px]">
                            <img
                                src={guestImg}
                                alt="Guest Image"
                                className="w-full h-full rounded-xl overflow-hidden object-cover filter brightness-70"
                            />
                        </div>
                        <div ref={introText} className="max-w-md text-white p-2">
                            <div className="text-3xl md:text-5xl font-bold mb-2">
                                Guest House Booking
                            </div>
                            <div className="border border-orange-500 w-48 mb-2"></div>
                            <p className="text-sm md:text-lg text-white">
                                We secured second prize in the 30-hour hackathon and developed this project using the MERN Stack. The application allows users to book guest houses, filter by date and available rooms, and view guest houses in a VR model. Notifications are sent to users upon successful booking, and users can also provide feedback about their experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col-reverse md:flex-row md:gap-4 w-full p-5">
                        <div ref={introText2} className="max-w-md text-white p-2 z-10">
                            <div className="text-3xl md:text-5xl font-bold mb-2">
                                Paper Presentation
                            </div>
                            <div className="border border-orange-500 w-48 mb-2"></div>
                            <p className="text-sm md:text-lg text-white">
                                We secured second prize in the 30-hour hackathon and developed this project using the MERN Stack. The application allows users to book guest houses, filter by date and available rooms, and view guest houses in a VR model. Notifications are sent to users upon successful booking, and users can also provide feedback about their experience.
                            </p>
                        </div>
                        <div ref={background2} className="w-full h-[500px]">
                            <img
                                src={paperPresentation}
                                alt="Paper Presentation"
                                className="w-full h-full rounded-xl object-cover filter brightness-70"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementPage;
