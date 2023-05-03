import SingleProject from "./SingleProject";
import { useEffect, useState } from "react";
import projects from "../data/db.json";
/* building AllProjects by importing multiple different individual SingleProjects */

const AllProjects = () => {
  /* const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("data/db.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []); */

  return (
    <div className="all-projects">
      <div className="projects-container">
        {projects && <SingleProject projects={projects} title="Projects" />}
        {/* all SingleProjects are imported here */}
      </div>
    </div>
  );
};

export default AllProjects;
