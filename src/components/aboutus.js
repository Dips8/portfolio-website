import React from "react";
import "./AboutUs.css";
import AboutImg from "../images/about-me.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-tag">ABOUT ME</span>

          <h2>
            Turning Ideas into <span>Powerful Web Experiences</span>
          </h2>

          <p>
            I'm Dipak, a frontend developer specializing in React and modern web technologies.
            I help businesses build fast, responsive, and user-friendly websites that improve
            user experience and drive real results.
          </p>

          <p>
            With hands-on experience in React, WordPress, Shopify, and PHP, I focus on creating
            clean UI, scalable solutions, and performance-driven applications.
          </p>

          <p className="about-highlight">
            I’m always learning, improving, and adapting to the latest technologies to deliver better results.
          </p>

          {/* STATS */}
          <div className="about-stats">
            <div>
              <h3>3+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>30+</h3>
              <span>Projects Completed</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-box">
          <img src={AboutImg} alt="About Dipak" />
        </div>

      </div>
    </section>
  );
};

export default About;