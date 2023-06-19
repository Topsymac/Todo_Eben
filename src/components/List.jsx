import React, { useContext } from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

const List = (props) => {
  const { theme } = useContext(ThemeContext);
  const LOCAL_STORAGE_KEY = "todos";

  // console.log(props.todos.length);

  const deleteTodoHandler = (id) => {
    // console.log("hhhhhhhhh");
    props.getTodoId(id);
  };

  const completedTodo = (id) => {
    const { setTodos, todos } = props;
    const updatedTodo = todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodo));
    console.log(updatedTodo);
  };

  const renderTodo = props.todos.map((todo) => {
    return (
      <div
        className="input_container"
        key={todo.id}
        style={{
          backgroundColor: theme === "Light" ? "white" : "hsl(235, 24%, 19%)",
          color: theme === "Light" ? "black" : "white",
        }}
      >
        {todo.completed === true ? (
          <div className="circletwo" onClick={() => completedTodo(todo.id)}>
            <img src={check} alt="" style={{ width: "14px", height: "8px" }} />
          </div>
        ) : (
          <div className="circle" onClick={() => completedTodo(todo.id)}></div>
        )}
        {todo.completed === true ? (
          <div className="texttwo" onClick={() => completedTodo(todo.id)}>
            <p>{todo.text}</p>
          </div>
        ) : (
          <p onClick={() => completedTodo(todo.id)}>{todo.text}</p>
        )}
        <button
          onClick={() => deleteTodoHandler(todo.id)}
          key={todo.id}
          className="deleteButton"
        >
          <img src={cross} alt="" className="cross" />
        </button>
      </div>
    );
  });
  return (
    <div className="renderTodo">
      {/* <h1>Todo</h1> */}
      <div>{renderTodo}</div>
    </div>
  );
};

export default List;
