import React, { useState } from "react";
import { CardBody, CardItem ,CardContainer} from "../ui/3d-card"; // Import your CardBody and CardItem

const ProjectCard = ({ image, title, description, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col max-w-xl w-full m-4">
    <CardContainer className="inter-var">
    <CardBody
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-5/6 rounded-xl p-6 border`} 
    >
      <CardItem translateZ="50" className="lg:text-3xl font-Poppins font-bold text-neutral-600 dark:text-white">
        {title}
      </CardItem>
      <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <img
          src={image}
          height="1200"
          width="1200"
          className={`h-60 w-full object-contain rounded-xl ${isHovered ? "group-hover/card:shadow-xl" : ""}`}
          alt={title}
        />
      </CardItem>
      <div className="flex justify-between items-center mt-20">
        <CardItem translateZ={20} href={githubLink} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
          Try now →
        </CardItem>
        <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
          Sign up
        </CardItem>
      </div>
    </CardBody>
    </CardContainer>
    </div>
  );
};

export default ProjectCard;
