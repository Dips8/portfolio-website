import React from "react";
import "./contact.css";

const Contact = () => {

  // ✅ ADD THIS FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://portfolio-backend-zav4.onrender.com/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          payment_id: formData.message, // temporary
        }),
      });

      const data = await res.text();
      alert("Message Sent ✅");

      // ✅ Clear form after submit
      e.target.reset();

    } catch (error) {
      alert("Error sending message ❌");
      console.log(error);
    }
  };

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
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
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
