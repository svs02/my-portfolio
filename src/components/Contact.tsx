import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              Feel free to reach out if you'd like to discuss projects or
              collaboration opportunities.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+82 10-1234-5678</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Seoul, South Korea</span>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                Twitter
              </a>
              <a
                href="https://blog.example.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
