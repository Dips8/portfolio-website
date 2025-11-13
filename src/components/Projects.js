import React from "react";
import "./Projects.css"; // We'll create this CSS file next
import Project1 from "../images/project-1.jpg"; // replace with your project images
import Project2 from "../images/project-2.jpg";
// import Project3 from "../images/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern React web app with responsive design.",
      image: Project1,
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A creative UI/UX project using CSS and JS.",
      image: Project2,
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A portfolio project demonstrating animations.",
      // image: Project3,
      link: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn btn-project">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;