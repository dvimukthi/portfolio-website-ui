import React from "react";
import "./Nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineProfile } from "react-icons/ai";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <TiHomeOutline />
        <AiOutlineProfile />
        <HiOutlinePresentationChartLine />
        <RiServiceLine />
      </a>
    </nav>
  );
};

export default Nav;
