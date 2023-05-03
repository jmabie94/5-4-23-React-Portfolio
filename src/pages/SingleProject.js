import "./SingleProject.css";
import viewIcon from "../assets/media/223930.png";
import gitIcon from "../assets/media/25231.png";

const SingleProject = ({ projects, title }) => {

  console.log(projects);
  
  return (
    <>
      <div className="home-header">
        <span className="page-title">{title}</span>
        <span className="contact-bar">
          <span className="phone">+1 (626) 864-0110</span>
          <span className="email">johnmabie94@gmail.com</span>
          <span className="city">Tulsa, OK</span>
        </span>
      </div>
      <div className="intro-container">
        <div className="page-intro">
          <div className="text-box text-project">
            <div id="box2">
              <h2>
                Some projects I've worked on either solo or as part of a group:
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project) => {
          return <div className="project-card" key={project.id}>
            <img
              src={project.screenshot}
              alt={project.title}
              className="project-screenshot"
            />
            <h2 className="project-title">{project.title}</h2>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <div className="project-links">
              <div className="project-url">
                <img src={viewIcon} alt="view Icon" className="icon" />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to Project Deployment"
                  className="url"
                >
                  View
                </a>
              </div>
              <div className="project-github">
                <img src={gitIcon} alt="GitHub Icon" className="icon" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to GitHub Repository"
                  className="github"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>;
        })}
      </div>
    </>
  );
};

export default SingleProject;