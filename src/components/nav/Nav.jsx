import React from "react";
import "./Nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineProfile } from "react-icons/ai";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <TiHomeOutline />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
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
