import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content"></div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
