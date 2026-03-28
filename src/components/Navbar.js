import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            height="40"
          />
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link contact-btn" href="#contact">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}