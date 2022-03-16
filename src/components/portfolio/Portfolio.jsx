import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Farm Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dvimukthi/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/dvimukthi/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>NFT Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dvimukthi/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/dvimukthi/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Educational Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dvimukthi/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/dvimukthi/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dvimukthi/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/dvimukthi/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dvimukthi/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/dvimukthi/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/dvimukthi/"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/dvimukthi/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
