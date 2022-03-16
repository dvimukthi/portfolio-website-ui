import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list"></ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
