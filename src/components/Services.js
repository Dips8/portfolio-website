import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Fast, responsive, and modern websites built to improve user experience and drive conversions.",
      icon: "🌐",
    },
    {
      title: "React Development",
      desc: "Dynamic and scalable web applications using React with clean UI and smooth performance.",
      icon: "⚛️",
    },
    {
      title: "Shopify Development",
      desc: "High-converting Shopify stores with optimized design, speed, and user-friendly experience.",
      icon: "🛒",
    },
    {
      title: "Landing Page Design",
      desc: "Conversion-focused landing pages designed to capture leads and boost business growth.",
      icon: "📈",
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">My Services</h2>

      <p className="services-subtitle">
      I provide modern web solutions that help businesses grow, improve performance, and increase conversions.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;