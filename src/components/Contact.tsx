import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // React 19와 react-icons 호환성을 위한 타입 단언
  const GithubIcon = FaGithub as React.FC<{ className?: string }>;
  const LinkedInIcon = FaLinkedin as React.FC<{ className?: string }>;
  const EmailIcon = FaEnvelope as React.FC<{ className?: string }>;

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              Open to new projects and opportunities. Feel free to reach out
              anytime.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">🍁</span>
                <span>Vancouver, Canada</span>
              </div>
            </div>
            <div className="social-links">
              <a
                href="mailto:luketae0220@gmail.com"
                className="social-link"
                data-social="email"
                data-tooltip="Email me"
                aria-label="Email">
                <EmailIcon className="social-icon" />
              </a>
              <a
                href="https://github.com/svs02"
                className="social-link"
                data-social="github"
                data-tooltip="Visit my GitHub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                <GithubIcon className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/taehyeok-lee-luke"
                className="social-link"
                data-social="linkedin"
                data-tooltip="Connect on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <LinkedInIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
