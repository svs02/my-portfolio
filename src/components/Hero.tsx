import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hello, I'm a <span className="highlight">Frontend Developer</span>
        </h1>
        <p className="hero-subtitle">
          Creating creative and user-centered web experiences
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;

