import React from "react";
import "./Banner.css"; // We'll create this CSS file next

const Banner = () => {
  return (
    <section className="banner">
      {/* Overlay */}
      <div className="banner-overlay"></div>

      {/* Content */}
      <div className="banner-content">
        <div className="banner-left">
          <h1>
            Hi, I'm <span className="highlight">Dipak</span>
          </h1>
          <h2>Frontend Developer • React Enthusiast • UI Designer</h2>
          <p>
            I create visually appealing, high-performing web experiences using modern technologies like React, JavaScript, and CSS.
          </p>
          <div className="banner-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;