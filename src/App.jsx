import React from 'react';
import LandingPage from './Components/LangingPage'
import AboutMePage from './Components/AboutMePage';
import GridSample from './Components/GridSample';
import SkillsPage from './Components/SkillsPage';
import ProjectPage from './Components/ProjectPage';
import './styles/fontStyle.css'
export default function App() {
  return (
    // <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<div class="relative h-full w-full bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] bg-fixed overflow-x-hidden">
  <div class="flex flex-col min-h-screen">
    <LandingPage />
    <AboutMePage />
    <ProjectPage />
    <SkillsPage/>
  </div>
</div>

    // <div class="relative h-full w-full bg-slate-950 overflow-x-hidden">
    //   {/* div className="absolute inset-0 -z-10 h-full overflow-x-hidden w-full items-center  py-24 [background:radial-gradient(125%_145%_at_50%_30%,#000_40%,#63e_100%)]"> */}
    //   <div class="inset-0 h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
    //     <div className='flex flex-col'>
    //       <LandingPage />
    //       <AboutMePage />
    //       <ProjectPage />
    //     </div>
    //   </div>
    // </div>
  );
}
