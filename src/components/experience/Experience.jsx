import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
};

export default Experience;
