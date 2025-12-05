import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <h3>E-Commerce Platform</h3>
                <p>React, TypeScript, Redux</p>
                <div className="project-links">
                  <a
                    href="https://example.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Demo
                  </a>
                  <a
                    href="https://github.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <h3>Social Media Dashboard</h3>
                <p>Next.js, TailwindCSS</p>
                <div className="project-links">
                  <a
                    href="https://example.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Demo
                  </a>
                  <a
                    href="https://github.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <h3>Task Management App</h3>
                <p>React, Firebase, Material-UI</p>
                <div className="project-links">
                  <a
                    href="https://example.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Demo
                  </a>
                  <a
                    href="https://github.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <div className="project-overlay">
                <h3>Weather Forecast App</h3>
                <p>React, API Integration</p>
                <div className="project-links">
                  <a
                    href="https://example.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Demo
                  </a>
                  <a
                    href="https://github.com"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

