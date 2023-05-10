import SingleProject from "./SingleProject";
// import { useEffect, useState } from "react";
import { projectData } from "../data/db.js";
/* building AllProjects by importing multiple different individual SingleProjects */

const AllProjects = () => {

  return (
      <div className='all-projects'>
          <div className='projects-container'>
              {projectData && <SingleProject projectData={projectData} title="Projects" />}
          </div>
      </div>
  );
};

export default AllProjects;
