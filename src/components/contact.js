import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let’s Work Together 🚀</h2>

          <p>
            Have a project in mind or need a website?  
            I’m available for freelance and full-time opportunities.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <span>📧</span>
              <p>yourmail@gmail.com</p>
            </div>

            <div className="contact-card">
              <span>📱</span>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="contact-card">
              <span>📍</span>
              <p>India</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/" target="_blank">GitHub</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;