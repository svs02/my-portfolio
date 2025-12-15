const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Full-Stack Developer
          <span className="hero-subtitle-text">
            Crafting digital experiences
          </span>
        </h1>
        <p className="hero-subtitle">
          Web developer with {new Date().getFullYear() - 2022} years of
          experience building scalable B2B systems for enterprise clients,
          including Samsung, using <strong>Angular, React,</strong>
          <strong>TypeScript, NestJS, and MongoDB.</strong>
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
