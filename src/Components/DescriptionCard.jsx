import React from "react";

function DescriptionCard({ projectDetails, onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-black text-white p-5 rounded-lg max-w-lg w-11/12 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-3 text-white text-2xl focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">{projectDetails.title}</h2>
                <p className="mb-4">{projectDetails.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {projectDetails.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DescriptionCard;
