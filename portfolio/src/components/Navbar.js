import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);  // Track the state of the menu

  const toggleMenu = () => {
    setIsMobile(!isMobile);  // Toggle the mobile menu visibility
  };

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className={isMobile ? "active" : ""}>  {/* Add active class for mobile */}
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <button className="menu-btn" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
    </nav>
  );
};

export default Navbar;
