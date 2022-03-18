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
      </ul>
    </footer>
  );
};

export default footer;
