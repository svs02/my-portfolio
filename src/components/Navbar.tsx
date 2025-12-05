import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Portfolio
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

