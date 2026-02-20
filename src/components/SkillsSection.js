import React, { useEffect, useState } from "react";
import "./SkillsSection.css";
import skillsimage from "../images/skill-image.jpg";

const skillsData = [
  { name: "HTML5", value: 90 },
  { name: "CSS3", value: 85 },
  { name: "JavaScript", value: 75 },
  { name: "Bootstrap", value: 80 },
  { name: "React JS", value: 70 },
];

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 300); // small delay for animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <div className="skills-inner">
        {/* LEFT IMAGE */}
        <div className="skills-left">
          <img src={skillsimage} alt="Skills Illustration" className="skills-illustration" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="skills-right">
          <h2 id="skills-heading" className="skills-title">
            ⚡ Skills & Technologies
          </h2>
          <p className="skills-subtitle">
            Tools I use to build high-quality web experiences.
          </p>

          <div className="skills-list" role="list">
            {skillsData.map((s) => (
              <div
                key={s.name}
                className="skill-row"
                role="listitem"
                aria-label={`${s.name} ${s.value}%`}
              >
                <div className="skill-meta">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-value" aria-hidden="true">{s.value}%</span>
                </div>

                <div className="skill-bar" aria-hidden="true">
                  <div
                    className="skill-bar-fill"
                    style={{ width: animated ? `${s.value}%` : `0%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}