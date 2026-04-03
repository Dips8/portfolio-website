import React from "react";
import bannerImg from "../images/portfolio-banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      className="modern-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-card">
        <h1 className="hero-title">
          Hi, I'm <span>Dipak</span> 👋
        </h1>

        <h2 className="hero-role">
         Web Developer & Frontend Specialist
        </h2>

        <p className="hero-subtitle">
         I build fast, modern, and high-converting websites for businesses and startups.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;