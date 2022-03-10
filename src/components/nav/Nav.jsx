import React from "react";
import "./Nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineProfile } from "react-icons/ai";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <TiHomeOutline />
      </a>
      <a href="#About">
        <AiOutlineProfile />
      </a>
      <a href="#Experience">
        <HiOutlinePresentationChartLine />
      </a>
      <a href="#Services">
        <RiServiceLine />
      </a>
      <a href="#Contact">
        <IoIosContact />
      </a>
    </nav>
  );
};

export default Nav;
