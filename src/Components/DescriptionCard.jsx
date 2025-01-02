import React from "react";
import { FaGithub, FaLaptopCode } from 'react-icons/fa';

function DescriptionCard({ projectDetails, onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-black text-white p-5 rounded-lg max-w-lg w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-white text-2xl focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4 border-l-2 border-l-orange-500 pl-2 text-center sm:text-left">
                    {projectDetails.title}
                </h2>
                <p className="mb-4 text-sm sm:text-base">{projectDetails.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {projectDetails.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm sm:text-base"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-center w-full gap-5 p-4 mt-5 ">
                    <div className="flex bg-orange-500 p-1 cursor-pointer pl-2 pr-2 gap-2 items-center justify-center rounded-xl">
                        <FaGithub color='#ffffff' size={24} />
                        <div className="font-semibold text-sm sm:text-base">Github</div>
                    </div>
                    <div className="flex bg-orange-500 cursor-pointer p-1 pl-2 pr-3 gap-2 items-center justify-center rounded-xl">
                        <FaLaptopCode color='#ffffff' size={24} />
                        <div className="font-semibold text-sm sm:text-base">Demo</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionCard;
