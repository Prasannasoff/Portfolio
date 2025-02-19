import React, { useEffect, useRef, useState } from "react";

import guestImg from "../assets/ProjectImages/work2!.png";
import { motion } from 'framer-motion'
import paperPresentation from "../assets/paper.jpg";

const AchievementPage = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <div id="achievements" className="flex flex-col">
            <div className="w-full mx-auto flex flex-col items-center xl:items-start p-5">
                <div className="flex flex-col items-center">


                    <div className="flex flex-col xl:flex-row xl:gap-4 w-full p-5">
                        <motion.div whileInView={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ amount: 0.2 }} initial={{
                            opacity: 0, x: isMobile ? -150 : -300,
                            scale: isMobile ? 0.6 : 0.4
                        }} className="xl:min-w-[700px] xl:min-h-[700px] max-h-[540px] max-w-[450px]">
                            <img
                                src={guestImg}
                                alt="Guest Image"
                                className="w-full h-full rounded-xl overflow-hidden object-cover filter brightness-70"
                            />
                        </motion.div>
                        <motion.div whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} viewport={{ amount: 0.2 }} initial={{ opacity: 0, x: isMobile ? 200 : 100, scale: isMobile ? 0.7 : 0.4 }} 
                        className="max-w-md text-white py-10 xl:py-0">

                            <div className="text-3xl md:text-5xl font-bold mb-2">Guest House Booking</div>  
                            <div className="border border-orange-500 w-48 mb-2"></div>
                            <p className="text-sm md:text-lg text-white">
                                We secured second prize in the 30-hour hackathon and developed this project using the MERN Stack. The application allows users to book guest houses, filter by date and available rooms, and view guest houses in a VR model. Notifications are sent to users upon successful booking, and users can also provide feedback about their experience.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-col-reverse xl:flex-row xl:gap-4 w-full p-5">
                        <motion.div whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }} transition={{ duration: 0.4 }} viewport={{ amount: 0.2 }} initial={{ opacity: 0, x: isMobile ? -200 : -200, scale: isMobile ? 0.7 : 0.4 }}
                            className="max-w-md text-white p-2 z-10">
                            <div className="text-3xl md:text-5xl font-bold mb-2">Paper Presentation</div>
                            <div className="border border-orange-500 w-48 mb-2"></div>
                            <p className="text-sm md:text-lg text-white">
                                We secured second prize in the 30-hour hackathon and developed this project using the MERN Stack. The application allows users to book guest houses, filter by date and available rooms, and view guest houses in a VR model. Notifications are sent to users upon successful booking, and users can also provide feedback about their experience.
                            </p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }} transition={{ duration: 0.4 }} viewport={{ amount: 0.2 }} initial={{
                            opacity: 0, x: isMobile ? -150 : 300,
                            y: isMobile ? 50 : 100, scale: isMobile ? 0.6 : 0.4
                        }} className="xl:min-w-[900px] xl:min-h-[700px] max-h-[540px] max-w-[450px]">


                            <img
                                src={paperPresentation}
                                alt="Paper Presentation"
                                className="w-full h-full rounded-xl object-cover filter brightness-70"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementPage;
