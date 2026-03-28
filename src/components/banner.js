import React from "react";
import bannerImg from "../images/portfolio-banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <overlay
      className="modern-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="overlay"></div>

      <div className="hero-container">
        <h1 className="hero-title">
          Hi, I'm <span>Dipak</span> 👋
        </h1>

        <h2 className="hero-role">
          React Developer & Frontend Specialist
        </h2>

        <p className="hero-subtitle">
          I build fast, responsive, and user-friendly websites that help
          businesses grow and convert visitors into customers.
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
    </overlay>
  );
};

export default Banner;