import React from "react";
import reactLogo from "../images/logo512.png";
export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "navbar dark" : "navbar"}>
      <img src={reactLogo} alt="Logo" className="nav-icon" />
      <h3 className="nav_logo_text">ReactFacts</h3>
      <h4 className="nav-toggle">
        <span id={props.darkMode ? "light-text" : ""}>Light</span>
        <label className="switch">
          <input type="checkbox" onClick={props.toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <span id={props.darkMode ? "dark-text" : "lessopac"}>Dark</span>
      </h4>
    </nav>
  );
}
