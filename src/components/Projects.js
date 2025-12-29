import React from "react";
import "./Projects.css";
import Project1 from "../images/project-1.jpg";
import Project2 from "../images/project-2.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern UI Website",
      description: "A stylish modern React website with animations and responsive UI.",
      image: Project1,
      link: "#",
      tech: ["React", "CSS", "Animation"],
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description: "A fully responsive e-commerce layout with cart features.",
      image: Project2,
      link: "#",
      tech: ["React", "Context API", "CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A glowing neon style portfolio with smooth transitions.",
      image: Project1,
      link: "#",
      tech: ["React", "Framer Motion"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-badges">
                {project.tech.map((t, index) => (
                  <span key={index} className="badge">{t}</span>
                ))}
              </div>

              <a href={project.link} className="btn-project" target="_blank" rel="noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
