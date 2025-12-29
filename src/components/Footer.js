import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
      className="footer"
      style={{
        background: "#0d0d0d",
        padding: "40px 20px",
        color: "#fff",
        textAlign: "center",
        borderTop: "1px solid #1f1f1f"
      }}
    >
      {/* Name */}
      <h2 style={{ marginBottom: "15px", color: "#00eaff" }}>
        Dipak Mali
      </h2>

      {/* Tagline */}
      <p style={{ opacity: "0.8", marginBottom: "20px" }}>
        Frontend Developer • React | JavaScript | UI/UX
      </p>

      {/* Social Icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a 
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00eaff", fontSize: "1.5rem" }}
        >
          <FaGithub />
        </a>

        <a 
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00eaff", fontSize: "1.5rem" }}
        >
          <FaLinkedin />
        </a>

        <a 
          href="mailto:yourmail@gmail.com"
          style={{ color: "#00eaff", fontSize: "1.5rem" }}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright */}
      <p style={{ marginTop: "25px", opacity: 0.6 }}>
        © {new Date().getFullYear()} Dipak Mali — All Rights Reserved
      </p>
    </footer>
  );
}
