import React from "react";
import bannerImg from "../images/portfolio-banner.png"; // <-- correct path

import "./Banner.css";

const Banner = () => {
  return (
     <section
      className="modern-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Content */}
      <div className="hero-card">
        <h1 className="hero-title">
          Crafting <span>Modern</span> Digital Experiences
        </h1>

        <p className="hero-subtitle">
          Hi, I'm <strong>Dipak</strong> — a Frontend Developer building
          pixel-perfect user interfaces with React, animations, and clean UI.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">See Projects</a>
          <a href="#contact" className="btn-outline">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
