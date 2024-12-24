import React, { useState } from 'react';
import MainImage from '../assets/myProfile.png';

export default function AboutMePage() {
    const [activeSection, setActiveSection] = useState('skills');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="flex flex-col p-10 lg:p-20 w-screen items-center justify-center overflow-hidden px-4">
            <div className="flex items-center gap-5 md:flex-row lg:flex-row flex-col lg:items-start lg:justify-center w-full lg:gap-16 md:gap-16  max-w-6xl">
                {/* Image Section */}
                <div className="flex justify-center w-[300px] h-[300px] sm:w-[470px] sm:h-[520px] bg-white bg-opacity-30 lg:h-[520px] lg:w-[700px] mb-8 lg:mb-0 rounded-xl">
                    <img
                        src={MainImage}
                        alt="Main"
                        className="bottom-0  h-[300px]  mt-4 w-[200px] sm:mt-0 lg:mt-0  sm:h-[545px] sm:w-[400px]  lg:w-[380px] lg:h-[543px] animate-cont-left"
                    />
                </div>
                {/* Description Section */}
                <div className="flex flex-col items-center md:items-start lg:items-start sm:items-center w-full">
                    <div className="lg:text-7xl text-2xl font-bold md:text-5xl sm:text-3xl text-white mb-5">About Me</div>
                    <div className="flex flex-col px-14 items-center lg:p=0 md:p-0 lg:max-w-[700px] sm:max-w-[500px] sm:pr-5 lg:pr-5 md:pr-5 text-white">
                        <p className="lg:text-lg text-base font-normal sm:text-md">
                            I am a full-stack developer with 1 year of experience building web and mobile applications using React.js, React Native, Node.js, Spring Boot, MySQL, and MongoDB. I have experience with JWT-based authentication, SQL, and have completed 1-credit courses in UI/UX design and DevOps. I enjoy solving challenges, collaborating with teams, and constantly learning new technologies.
                        </p>
                    </div>
                    {/* Sections for Skills and Education */}
                    <div className="flex gap-10 mt-10">
                        {/* Skills Button */}
                        <div
                            className={`flex flex-col cursor-pointer ${activeSection === 'skills' ? 'border-b-4 border-orange-400' : ''}`}
                            onClick={() => handleSectionClick('skills')}
                        >
                            <div className="text-2xl text-gray-200 font-medium text-opacity-50">Skills</div>
                        </div>
                        {/* Education Button */}
                        <div
                            className={`flex flex-col cursor-pointer ${activeSection === 'education' ? 'border-b-4 border-orange-400' : ''}`}
                            onClick={() => handleSectionClick('education')}
                        >
                            <div className="text-2xl text-gray-200 font-medium text-opacity-50">Education</div>
                        </div>
                    </div>

                    {/* Conditional Rendering of Content */}
                    {activeSection === 'skills' && (
                        <div className="mt-5 text-white">
                            <div className="text-orange-400 font-semibold">UI/UX</div>
                            <div className="text-gray-400 text-opacity-50">Designing Web/App interfaces</div>
                            <div className="text-orange-400 font-semibold mt-4">Web Development</div>
                            <div className="text-gray-400 text-opacity-50">Web App development</div>
                            <div className="text-orange-400 font-semibold mt-4">App Development</div>
                            <div className="text-gray-400 text-opacity-50">Building Android/IOS apps</div>
                        </div>
                    )}

                    {activeSection === 'education' && (
                        <div className="mt-5 text-white">
                            <div className="text-orange-400 font-semibold">2020</div>
                            <div className="text-gray-400 text-opacity-50">SSLC From BVB school</div>
                            <div className="text-orange-400 font-semibold mt-4">2022</div>
                            <div className="text-gray-400 text-opacity-50">HSC From BVB school</div>
                            <div className="text-orange-400 font-semibold mt-4">2022-2026</div>
                            <div className="text-gray-400 text-opacity-50">BE From KEC College</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
