import SingleProject from "./SingleProject";
// import { useEffect, useState } from "react";
import projects from "../data/db.json";
/* building AllProjects by importing multiple different individual SingleProjects */

const AllProjects = () => {

  return (
      <div className='all-projects'>
          <div className='projects-container'>
              {projects && <SingleProject projects={projects} title="Projects" />}
          </div>
      </div>
  );
};

export default AllProjects;
