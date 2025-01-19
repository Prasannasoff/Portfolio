import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import success1 from '../assets/success.png';
import success2 from '../assets/success2.png';

function Achievement() {
    const targetRef = useRef(null);

    // Use useScroll to track the scroll progress of the first section
    const { scrollYProgress: firstScrollProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"],
    });

    const moveLeft = useTransform(firstScrollProgress, [0, 0.5, 1], [-280, 0, -280]);
    const moveRight = useTransform(firstScrollProgress, [0, 0.5, 1], [280, 0, 280]);

    return (
        <div className="h-[100px] lg:h-full flex flex-col lg:bg-white">
            {/* Achievements Section */}
            <motion.div
                ref={targetRef}
                className="relative h-screen flex items-center justify-center"
            >
                {/* Left Image - Only visible on lg screens and above */}
                <motion.img
                    src={success1}
                    alt="Success 1"
                    className="absolute lg:-left-8 hidden lg:block w-1/4"
                    style={{ x: moveLeft }}
                />
                {/* Right Image - Only visible on lg screens and above */}
                <motion.img
                    src={success2}
                    alt="Success 2"
                    className="absolute lg:-right-8 hidden w-1/4 lg:block"
                    style={{ x: moveRight }}
                />
                {/* Static Achievements Text */}
                <div className="z-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-center text-white lg:text-gray-800">
                    Achievements
                </div>
            </motion.div>

            {/* Guest House Booking Section */}
        </div>
    );
}

export default Achievement;
