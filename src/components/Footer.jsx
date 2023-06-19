import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

const Footer = (props) => {
  const { filterbylabel, todos, deleteCompleted } = props;

  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="input_container footer"
        style={{
          backgroundColor: theme === "Light" ? "white" : "hsl(235, 24%, 19%)",
        }}
      >
        <div className="left">
          <p>{todos.length} items left</p>
        </div>
        <div className="middle">
          <button onClick={() => filterbylabel("all")} className="footerbutton">
            All
          </button>
          <button
            onClick={() => filterbylabel("active")}
            className="footerbutton"
          >
            Active
          </button>
          <button
            onClick={() => filterbylabel("completed")}
            className="footerbutton"
          >
            Completed
          </button>
        </div>
        <div className="right" onClick={deleteCompleted}>
          <button className="footerbutton">Clear Completed</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
