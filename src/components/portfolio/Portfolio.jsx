import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>Portfolio item title</h3>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
