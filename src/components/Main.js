import React from "react";

export default function Body(props) {
  return (
    <main className={props.darkMode ? "maindark" : ""}>
      <h1 className="main_title">
        Reasons Why I<span id="heart">❤️</span>
        React
      </h1>
      <ul className="list">
        <li>Was first released in 2013</li>
        <li>Was Originally Created by Jordan Walke</li>
        <li>Has well over 100k stars on github</li>
        <li>Is Maintained By Facebook</li>
        <li>Power thousands of enterprise apps including mobile apps</li>
        <li>
          Perfect language to get busy enough you will never have time to think
          why you are single
        </li>
      </ul>
    </main>
  );
}
