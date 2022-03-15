import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="About">
      <h5>Get You know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card"></article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
