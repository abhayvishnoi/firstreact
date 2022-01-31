import React from "react";
import Navbar from "./components/NavBar";
import Body from "./components/Main";
import "./style.css";
export default function App() {
  const [darkMode, setdarkMode] = React.useState(false);
  function toggleDarkMode() {
    setdarkMode((prevMode) => !prevMode);
  }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Body darkMode={darkMode} />
    </div>
  );
}
