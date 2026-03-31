import React from "react";
import "./SkillsSection.css";

const Skills = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Shopify", level: "Intermediate" },
    { name: "WordPress", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        Technologies I use to build fast, scalable, and modern web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <span>{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;