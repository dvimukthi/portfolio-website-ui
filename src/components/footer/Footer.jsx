import React from "react";
import "./Footer.css";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Logo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
