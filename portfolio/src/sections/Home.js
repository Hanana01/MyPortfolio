import React from "react";
import "../styles/Home.css"; 
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa"; // Import icons
import HananaImage from "../assets/Hana.jpg"; // Import your image
import resume from "../assets/Resume.pdf";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="home-text">
          <h1>Hi, I'm Fathima Hanana</h1>
          <h3>Final Year IT Undergraduate</h3>
          <div className="buttons">
            <button className="hire-btn">
            <Link to="contact" smooth={true} duration={500}>
             Hire Me
            </Link>
            </button>
            <button className="resume-btn">
              <a href={resume} download>
                   <FaDownload className="download-icon" /> Download Resume
              </a>   
            </button>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/fathimahanana" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/Hanana01" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="mailto:hananaf2001@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={HananaImage} alt="Fathima Hanana" />
        </div>
      </div>
    </section>
  );
};

export default Home;
