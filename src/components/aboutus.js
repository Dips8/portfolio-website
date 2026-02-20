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
            Passionate <span>Frontend Developer</span><br />
            Building modern web experiences
          </h2>

          <p>
            I’m <strong>Dipak</strong>, a frontend developer focused on creating
            clean, responsive, and high-performance websites using modern
            technologies like React and JavaScript.
          </p>

          <p>
            I enjoy turning complex problems into simple, beautiful UI solutions
            and constantly improving my skills.
          </p>

          {/* STATS */}
          <div className="about-stats">
            <div>
              <h3>1+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>10+</h3>
              <span>Projects Completed</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Learning Mindset</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-box">
          <img src={AboutImg} alt="Dipak About" />
        </div>

      </div>
    </section>
  );
};

export default About;