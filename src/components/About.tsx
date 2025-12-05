import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a frontend developer who prioritizes user experience above
              all. My goal is to deliver value to users through clean and
              intuitive interfaces.
            </p>
            <p>
              I continuously learn the latest web technologies and trends, and
              pursue development that considers performance optimization and
              accessibility.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
