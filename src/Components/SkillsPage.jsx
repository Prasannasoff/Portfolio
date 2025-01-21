import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiSpringboot } from "react-icons/si";
import { FaNodeJs, FaHtml5, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const SkillsPage = () => {
    const skills = [
        { icon: <RiReactjsLine size={70} color="#f97316" />, name: "React", level: "Intermediate" },
        { icon: <RiReactjsLine size={70} color="#f97316" />, name: "React Native", level: "Intermediate" },
        { icon: <RiTailwindCssFill size={70} color="#f97316" />, name: "Tailwind CSS", level: "Basic" },
        { icon: <SiMongodb size={70} color="#f97316" />, name: "MongoDB", level: "Intermediate" },
        { icon: <FaNodeJs size={70} color="#f97316" />, name: "Node.js", level: "Intermediate" },
        { icon: <FaHtml5 size={70} color="#f97316" />, name: "HTML5", level: "Advanced" },
        { icon: <GrMysql size={70} color="#f97316" />, name: "MySQL", level: "Intermediate" },
        { icon: <FaGithub size={70} color="#f97316" />, name: "GitHub", level: "Advanced" },
        { icon: <SiSpringboot size={70} color="#f97316" />, name: "Spring Boot", level: "Intermediate" },
    ];

    return (
        <div id="skills" className="pb-16 overflow-hidden">
            <div className="text-center md:text-8xl text-5xl text-white mb-5 py-7 font-bold">
                Skills
            </div>
            <div className="overflow-hidden flex gap-5">
                {/* Original array */}
                <div className="flex items-center gap-5 animate-loop-scroll">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative md:h-[220px] md:min-w-[300px] min-w-[200px] min-h-[200px] bg-orange-400 bg-opacity-15 rounded-2xl flex justify-center items-center flex-col"
                        >
                            {skill.icon}
                            <h3 className="text-2xl text-white mt-3 font-medium">{skill.name}</h3>
                            <p className="text-sm text-white text-opacity-50">{skill.level}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-5 animate-loop-scroll">

                    {/* Duplicate array */}
                    {skills.map((skill, index) => (
                        <div
                            key={`duplicate-${index}`}
                            aria-hidden="true"
                            className="relative md:h-[220px] md:min-w-[300px] min-w-[200px] min-h-[200px] bg-orange-400 bg-opacity-15 rounded-2xl flex justify-center items-center flex-col"
                        >
                            {skill.icon}
                            <h3 className="text-2xl text-white mt-3 font-medium">{skill.name}</h3>
                            <p className="text-sm text-white text-opacity-50">{skill.level}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SkillsPage;
