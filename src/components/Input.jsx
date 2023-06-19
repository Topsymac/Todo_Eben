import React from "react";
import { useState, useContext } from "react";
// import checklist from "../images/icon-sun.svg";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

const Input = (props) => {
  const { theme } = useContext(ThemeContext);

  // console.log(props);
  const [text, setText] = useState("");
  // console.log(text);

  const submit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Enter a Todo");
      return;
    }
    props.addTodoHandler(text);
    setText("");
  };
  console.log(text);
  return (
    <div>
      <form
        style={{
          backgroundColor: theme === "Light" ? "white" : "hsl(235, 24%, 19%)",
        }}
        className="input_container inputter"
        onSubmit={submit}
      >
        <div className="circle"></div>
        <input
          style={{ color: theme === "Light" ? "black" : "white" }}
          type="text"
          placeholder="Create a Todo List..."
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
