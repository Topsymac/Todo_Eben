import React, { useContext } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
// import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="header_wrapper">
      <h2>T O D O</h2>
      <button onClick={toggleTheme}>
        <img
          src={theme === "Dark" ? sun : moon}
          alt="sun"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default Header;
