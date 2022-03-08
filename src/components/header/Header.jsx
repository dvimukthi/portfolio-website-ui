import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello I'm</h5>
        <h1>Deshan Vimukthi</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <div className="me">
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
