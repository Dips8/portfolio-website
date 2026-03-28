import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h2 className="footer-name">Dipak Madwani</h2>
          <p className="footer-tagline">
            Frontend Developer • React | JavaScript | UI/UX
          </p>
        </div>

        {/* Right Social */}
        <div className="footer-section footer-social">
          <h3>Connect</h3>

          <div className="footer-icons">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Dipak Madwani — All Rights Reserved
      </div>
    </footer>
  );
}