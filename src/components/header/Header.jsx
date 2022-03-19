import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Deshan Vimukthi</h1>
        <h4 className="text-light">FullStack Developer</h4>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
