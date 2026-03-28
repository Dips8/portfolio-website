import React, { useState } from "react";
import "./projects.css";

import Project1 from "../images/project-1.webp";
import Project2 from "../images/project-2.png";
import Project3 from "../images/update-img.jpg";
import Project4 from "../images/ecolo-store.jpg";
import Project5 from "../images/project-5.jpg";
import Project6 from "../images/project-6.jpg";
import Project7 from "../images/nroot1.webp";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Current Power Machinery",
      category: "Shopify",
      description:
        "Developed a high-converting Shopify store with optimized UI, fast loading speed, and mobile responsiveness to improve user engagement.",
      image: Project1,
      link: "https://currentpowerinc.ca/",
      github: "#",
      tech: ["Shopify", "Liquid"],
    },
    {
      id: 2,
      title: "VSparkel Website",
      category: "PHP",
      description:
        "Built a responsive business website with clean UI and structured layout to improve brand presence and usability.",
      image: Project2,
      link: "#",
      github: "#",
      tech: ["HTML", "Bootstrap", "PHP"],
    },
    {
      id: 3,
      title: "Marcamor",
      category: "React",
      description:
        "Created a modern React website with dynamic UI, smooth performance, and scalable architecture for better user experience.",
      image: Project3,
      link: "#",
      github: "#",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      id: 4,
      title: "Ecolo Store",
      category: "Shopify",
      description:
        "Designed a clean and modern eCommerce store focused on user experience and conversion optimization.",
      image: Project4,
      link: "https://www.ecolo.store/",
      github: "#",
      tech: ["Shopify"],
    },
    {
      id: 5,
      title: "Bonnie & Pop",
      category: "Shopify",
      description:
        "Optimized an eCommerce website for better conversions, faster load time, and improved UI.",
      image: Project5,
      link: "https://www.bonnieandpop.com/",
      github: "#",
      tech: ["Shopify"],
    },
    {
      id: 6,
      title: "Inamdar Hospital",
      category: "WordPress",
      description:
        "Developed a responsive healthcare website with improved accessibility and structured content layout.",
      image: Project6,
      link: "https://inamdarhospital.com/",
      github: "#",
      tech: ["WordPress"],
    },
    {
      id: 7,
      title: "Nroot Foods",
      category: "Shopify",
      description:
        "Built a responsive eCommerce store with clean UI and mobile-first design approach.",
      image: Project7,
      link: "#",
      github: "#",
      tech: ["Shopify"],
    },
  ];

  const filters = ["All", "React", "Shopify", "WordPress", "PHP"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <p className="projects-subtitle">
        Here are some of my recent works focused on performance, design, and real-world results.
      </p>

      {/* Filters */}
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            
            <div className="project-image-container">
              <span className="category">{project.category}</span>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="overlay">
                <a href={project.link} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-badges">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;