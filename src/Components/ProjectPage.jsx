import React, { useState } from "react";
import ProjectImage from "../assets/ProjectImages/doctor.png";
import ProjectImage2 from "../assets/ProjectImages/image.png";
import ProjectImage3 from "../assets/ProjectImages/waterfinal2.png";
import ProjectImage4 from "../assets/ProjectImages/ChatApp.png";
import ProjectImage5 from "../assets/ProjectImages/work2!.png";
import ProjectImage6 from "../assets/ProjectImages/bookStore.png";
import DescriptionCard from "./DescriptionCard";
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; // Adjust the path based on your folder structure
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import styles from '../styles/ProjectPage.module.css'
export default function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            image: ProjectImage,
            title: "Doctor Appointment System",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/Prasannasoff/DoctorAppointmentSystem ",
            techStack: ['MERN stack']
        },
        // Add more projects here
        {
            image: ProjectImage2, // Replace with your actual project image
            title: "Movie Recommendation System",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project2",
            techStack: ['MERN stack']
        },
        {
            image: ProjectImage3, // Replace with your actual project image
            title: "Gruno Analysis",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
            techStack: ['MERN stack']
        },

        {
            image: ProjectImage4, // Replace with your actual project image
            title: "Multi Chat Application",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
            techStack: ['React', 'Spring Boot', 'MySQL', 'Socket']
        },

        {
            image: ProjectImage5, // Replace with your actual project image
            title: "Guest House Booking",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
            techStack: ['MERN stack']
        },

        {
            image: ProjectImage6, // Replace with your actual project image
            title: "Book Store",
            description: 'The Doctor Appointment System is a web-based application that streamlines booking and managing doctor appointments. It enables patients to easily find and schedule appointments with healthcare professionals. Key features include real-time availability tracking, automated reminders to minimize no-show rates, and secure user authentication. This system aims to enhance healthcare delivery and improve patient engagement.',
            githubLink: "https://github.com/yourusername/project3",
            techStack: ['MERN stack']
        },

    ];
    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    return (
        <div id="projects" className={styles.mainCont}>
            <div className='md:text-7xl text-5xl text-white font-bold text-center mb-10'>Projects</div>

            <div className={styles.projectCont}>
                {projects.map((project, index) => (
                    <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: index * 0.1 }} viewport={{ amount: 0.5 }} className={styles.projectItem} key={index}>
                        <img
                            loading="lazy"
                            src={project.image}
                            alt={project.title}
                            className={styles.projectImage}
                        />
                        <div className={styles.projectTitle}>
                            <div>{project.title}</div>
                            <div className={styles.projectDesc} onClick={() => openProject(project)}>
                                <div>View Project</div>
                                <div><FaArrowRight /></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {selectedProject && (
                <DescriptionCard
                    projectDetails={selectedProject}
                    onClose={closeProject}
                />
            )}
        </div>

        // <div className="h-full flex flex-col items-center justify-center" >
        //     <div className="font-Poppins text-5xl text-white mt-10">My Works</div>
        //     <div className="flex align-center justify-center flex-wrap">
        //         {projects.map((project, index) => (
        //             <ProjectCard
        //                 key={index}
        //                 image={project.image}
        //                 title={project.title}
        //                 description={project.description}
        //                 githubLink={project.githubLink}
        //             />
        //         ))}
        //     </div>
        // </div >

    );
}
