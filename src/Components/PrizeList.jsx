import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import guestHouseImg from '../assets/ProjectImages/work2!.png';
import Lenis from "@studio-freight/lenis";

function PrizeList() {
    const lenisRef = useRef(null);
    const guestHouseRef = useRef(null);
    //scroll event is triggered when the center of the target element reaches the start of the viewport-center start 
    // Scroll tracking for the right section (Guest House & Paper Presentation)
    const { scrollYProgress } = useScroll({
        target: guestHouseRef,
        offset: ["start start", "center start", "end middle"], // Adjust when the scroll effect triggers
    });

    // Use scrollYProgress to control the vertical position (y) of the images
    const guestHouseY = useTransform(scrollYProgress, [0, 0.33, 0.5, 1], [-200, -1400, -1500, 0]);  // Move guest house image up
    const paperPresentationY = useTransform(scrollYProgress, [0, 0.33, 0.5, 1], [2200, 800, -400, 0]);  // Move paper presentation image in
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2, // Animation duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            smooth: true,
        });

        // Reference Lenis instance
        lenisRef.current = lenis;

        // Connect Lenis to the animation frame
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Clean up on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        // Predefined Y-axis positions for scrolling
        const scrollPositions = [4100,4720]; // Adjust positions as needed
        console.log("S+" + scrollPositions)
        let currentPositionIndex = 0;

        // Scroll listener
        function handleScroll(event) {
            event.preventDefault();

            const lenis = lenisRef.current;
            if (!lenis) return;

            const delta = event.deltaY;

            // Determine scroll direction
            if (delta > 0 && currentPositionIndex < scrollPositions.length - 1) {
                // Scroll down
                currentPositionIndex++;
            } else if (delta < 0 && currentPositionIndex > 0) {
                // Scroll up
                currentPositionIndex--;
            }

            // Scroll to the next position
            lenis.scrollTo(scrollPositions[currentPositionIndex], {
                immediate: false,
            });
        }

        // Add event listener
        window.addEventListener("wheel", handleScroll, { passive: false });

        // Clean up on unmount
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="flex h-[250vh]" ref={guestHouseRef}>
            {/* Left Section: Fixed Achievements Text */}
            <div className="w-1/2 flex items-center justify-center bg-gray-100">
                <h2 className="text-8xl font-extrabold text-gray-800">Achievements</h2>
            </div>

            {/* Right Section: Scrollable Content */}
            <div

                className="w-1/2 overflow-hidden relative bg-gray-100 flex flex-col items-center justify-end"
            >

                {/* Guest House Image: Moves up as you scroll */}
                <motion.div
                    style={{ y: guestHouseY }}
                    className="absolute flex flex-col bottom-40 items-center justify-center"
                >
                    <div className="h-[550px] w-[450px] overflow-hidden rounded-xl">
                        <img src={guestHouseImg} alt="Guest House Booking" />
                    </div>
                    <div className="text-4xl font-semibold text-white mt-4">
                        Guest House Booking
                    </div>
                </motion.div>

                {/* Paper Presentation Image: Appears after Guest House */}

                <motion.div
                    style={{ y: paperPresentationY }}
                    className="flex flex-col items-center"
                >
                    <div className="h-[550px] w-[450px] overflow-hidden rounded-xl">
                        {/* Replace with the Paper Presentation image */}
                        <img src={guestHouseImg} alt="Paper Presentation" />
                    </div>
                    <div className="text-4xl font-semibold text-gray-800 mt-4">
                        Paper Presentation
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default PrizeList;
