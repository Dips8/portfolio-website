import React from "react";
import "./AboutUs.css"; // We'll create this CSS file next
import ProfilePic from "../images/aboutus-img.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-left">
          <img src={ProfilePic} alt="Your Name" className="about-image" />
        </div>

        {/* Right: Text */}
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hi! I'm <span className="highlight">Your Name</span>, a passionate Frontend Developer specializing in building interactive and visually appealing web experiences using React, JavaScript, and modern web technologies.
          </p>
          <p>
            I love turning ideas into real products and continuously learning new skills to improve my craft. My goal is to deliver high-quality, user-friendly, and responsive websites.
          </p>
          <p>
            Skills: React, JavaScript, HTML5, CSS3, Tailwind CSS, Git, Responsive Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;