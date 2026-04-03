import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v5ke6ms",   // 🔴 replace
      "template_1aptrf3",  // 🔴 replace
      e.target,
      "Ri-czyzAomyCGtwcE"    // 🔴 replace
    ).then(
      (result) => {
        console.log(result.text);
      alert("WORKING NEW CODE 🚀");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Error sending message ❌");
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        <div className="contact-left">
          <h2>Let’s Work Together 🚀</h2>
          <p>
            Have a project in mind or need a website?  
            I’m available for freelance and full-time opportunities.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <span>📧</span>
              <p>dipakmadwani1234@gmail.com</p>
            </div>

            <div className="contact-card">
              <span>📱</span>
              <p>+91 8857020697</p>
            </div>

            <div className="contact-card">
              <span>📍</span>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
