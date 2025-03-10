import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/Hanana.jpg"; // Import your image

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
      <div className="about-image">
          <img src={AboutImage} alt="Fathima Hanana" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Fathima Hanana</strong>, a passionate Final Year IT Undergraduate with experience in 
            full-stack development, specializing in the <strong>MERN</strong> stack. I have worked on real-world projects, 
            including e-commerce platforms, hospital management systems, and career guidance portals.
          </p>
          <p>
            My expertise includes <strong>React, Node.js, Express, MongoDB, MySQL, Flask</strong>, and <strong>WordPress</strong>. 
            I love solving problems, developing creative web applications, and continuously learning new technologies.
          </p>
          <p>
            Apart from coding, I enjoy <strong>mentoring students, conducting workshops, and working on research projects</strong> related to demand patterns in cosmetics, food, and fashion products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

