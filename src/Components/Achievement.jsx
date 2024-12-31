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
        <div className="h-full flex flex-col bg-gray-100">
            {/* Achievements Section */}
            <motion.div
                ref={targetRef}
                className="relative h-screen flex items-center justify-center"
            >
                {/* Left Image */}
                <motion.img
                    src={success1}
                    alt="Success 1"
                    className="absolute -left-8"
                    style={{ x: moveLeft }}
                />
                {/* Right Image */}
                <motion.img
                    src={success2}
                    alt="Success 2"
                    className="absolute -right-8"
                    style={{ x: moveRight }}
                />
                {/* Static Achievements Text */}
                <div className="z-10 text-8xl font-extrabold text-center text-gray-800">
                    Achievements
                </div>
            </motion.div>

            {/* Guest House Booking Section */}


        </div>
    );
}

export default Achievement;
