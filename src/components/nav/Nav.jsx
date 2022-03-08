import React from "react";
import "./Nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineProfile } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <TiHomeOutline />
        <AiOutlineProfile />
      </a>
    </nav>
  );
};

export default Nav;
