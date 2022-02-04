import React from "react";
import reactLogo from "../images/logo512.png";
import { FaSun } from "react-icons/fa";
import { RiMoonClearFill } from "react-icons/ri";
export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "navbar dark" : "navbar"}>
      <img src={reactLogo} alt="Logo" className="nav-logo" />
      <h3 className="nav_logo_text">ReactFacts</h3>
      <h4 className="nav-toggle" onClick={props.toggleDarkMode}>
        {props.darkMode ? (
          <FaSun className="nav-icon light-icon" />
        ) : (
          <RiMoonClearFill className="nav-icon" />
        )}
      </h4>
    </nav>
  );
}
