import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React / Next.js</h3>
            <p>
              Building SPA and SSR applications using modern React ecosystem
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">💎</div>
            <h3>TypeScript</h3>
            <p>Writing scalable code with type safety</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>CSS / Styled Components</h3>
            <p>Implementing responsive design and modern styling</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>Performance</h3>
            <p>Web performance optimization and UX improvement</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Perfect user experience across all devices</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Modern Tools</h3>
            <p>Utilizing latest development tools like Git, Webpack, Vite</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

