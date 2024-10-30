import React from "react";
import ProjectImage from "../assets/ProjectImages/doc1.png";
import ProjectImage2 from "../assets/ProjectImages/MovieRecommendation.png";
import ProjectImage3 from "../assets/ProjectImages/ChatApp.png";

import ProjectImage4 from "../assets/ProjectImages/GuestKec.png";


import ProjectCard from "./ProjectCard"; // Adjust the path based on your folder structure
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function ProjectPage() {
    const projects = [
        {
            image: ProjectImage,
            title: "Doctor Appointment System",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/Prasannasoff/DoctorAppointmentSystem "
        },
        // Add more projects here
        {
            image: ProjectImage2, // Replace with your actual project image
            title: "Movie Recommendation System",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',

            githubLink: "https://github.com/yourusername/project2",
        },
        {
            image: ProjectImage3, // Replace with your actual project image
            title: "MultiChat Application",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
        },
    
        {
            image: ProjectImage4, // Replace with your actual project image
            title: "Guest House Booking",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
        },
    
        {
            image: ProjectImage3, // Replace with your actual project image
            title: "Book Store",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
        },
    
        {
            image: ProjectImage4, // Replace with your actual project image
            title: "Water Monitoring",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
        },
    
    ];

    return (
        <div className="h-full flex flex-col items-center justify-center" >
            <div className="font-Poppins text-5xl text-white mt-10">My Works</div>
            <div className="flex align-center justify-center flex-wrap">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div >

    );
}
