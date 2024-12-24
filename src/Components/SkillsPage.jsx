import React from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiSpringboot } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import style from "../styles/skillsPage.module.css";
import useMeasure from "react-use-measure"
import { useEffect } from "react";
function SkillsPage() {

    const skills = [
        { icon: <RiReactjsLine size={70} color='#f97316' />, name: "React", level: "Intermediate" },
        { icon: <RiReactjsLine size={70} color='#f97316' />, name: "React Native", level: "Intermediate" },
        { icon: <RiTailwindCssFill size={70} color='#f97316' />, name: "Tailwind CSS", level: "Basic" },
        { icon: <SiMongodb size={70} color='#f97316' />, name: "MongoDB", level: "Intermediate" },
        { icon: <FaNodeJs size={70} color='#f97316' />, name: "Node.js", level: "Intermediate" },
        { icon: <FaHtml5 size={70} color='#f97316' />, name: "HTML5", level: "Advanced" },
        { icon: <GrMysql size={70} color='#f97316' />, name: "MySQL", level: "Intermediate" },
        { icon: <FaGithub size={70} color='#f97316' />, name: "GitHub", level: "Advanced" },
        { icon: <SiSpringboot size={70} color='#f97316'/>, name: "Spring Boot", level: "Intermediate" },
    ];

    let [ref, { width }] = useMeasure()
    const xTranslation = useMotionValue(0);
    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 4;
        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });
        return () => controls.stop();
    }, [xTranslation, width]);

    return (
        <div className="pb-16">
            <div className="text-center text-8xl text-white mb-5 py-7 font-bold">Skills</div>
            <motion.div className="left-0 flex gap-5" ref={ref} style={{ x: xTranslation }}>

                {[...skills, ...skills].map((skill, index) => (
                    <div key={index} className="relative overflow-hidden h-[220px] min-w-[300px] bg-orange-400 bg-opacity-15 rounded-2xl flex justify-center items-center flex-col ">
                        {skill.icon}
                        <h3 className='text-2xl text-white mt-3 font-medium'>{skill.name}</h3>
                        <p className='text-sm text-white text-opacity-50'>{skill.level}</p>
                    </div>
                ))}

            </motion.div>
        </div>
    );
}

export default SkillsPage;
