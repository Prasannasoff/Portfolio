import React from 'react';
import LandingPage from './Components/LangingPage'
import AboutMePage from './Components/AboutMePage';
import ProjectPage from './Components/ProjectPage';
import './styles/fontStyle.css'
export default function App() {
  return (
 
    
      <div className="absolute inset-0 -z-10 h-full overflow-x-hidden w-full items-center  py-24 [background:radial-gradient(125%_145%_at_50%_30%,#000_40%,#63e_100%)]">
        <div className='flex flex-col'>
      <LandingPage />
      <AboutMePage />
      <ProjectPage />
      </div>

    </div>
  );
}
