import React from "react";
import reactLogo from "../images/logo512.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} alt="Logo" className="nav-icon" />
      <h3 className="nav_logo_text">ReactFacts</h3>
      <h4 className="nav_title">React Course - Project 1</h4>
    </nav>
  );
}
