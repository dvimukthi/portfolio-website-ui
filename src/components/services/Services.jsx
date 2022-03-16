import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

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
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Prototyping</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing web applications</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing user interfaces</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization (SEO)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version control</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proofreading</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Copy Typing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Translation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
