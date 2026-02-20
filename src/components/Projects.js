import React from "react";
import Slider from "react-slick"; // import slider
import "./Projects.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Project1 from "../images/project-1.webp";
import Project2 from "../images/project-2.png";
import Project3 from "../images/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern UI Website ",
      description: "A stylish modern React website with animations and responsive UI.",
      title: "Current Power Machinery Website",
      description: "A fully responsive Shopify website developed for Current Power Machinery, featuring product listings, category navigation, and a clean user-friendly interface optimized for performance and conversions.",
      image: Project1,
      link: "https://currentpowerinc.ca/",
      tech: ["Shopify", "Liquid", "Responsive Design"],
    },
    {
      id: 2,
      title: "VSparkel Website",
      description: "A responsive business website developed for VSparkel using HTML, Bootstrap, JavaScript, and PHP, featuring interactive UI elements, mobile-friendly design, and dynamic contact form functionality.",
      image: Project2,
      link: "#",
      tech: ["HTML", "Bootstrap", "JavaScript", "PHP"],
    },
    {
      id: 3,
      title: "Marcamor",
      description: "Designed and developed the company’s official WordPress website, including a fully custom theme and a custom plugin to extend functionality, with a focus on performance, scalability, and responsive design.",
      image: Project3,
      link: "#",
      tech: ["WordPress", "Custom Theme Development", "Plugin Development"],
    },
    // Add more projects here (4, 5, 6...)
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of projects to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
    ],
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <Slider {...settings} className="projects-slider">
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
      </Slider>
    </section>
  );
};

export default Projects;