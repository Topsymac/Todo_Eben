import { useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import { nanoid } from "nanoid";
import Footer from "./Footer";
import { ThemeContext } from "./context/ThemeContext";
// import Dark from "../images/bg-mobile-dark.jpg";
// import Light from "../images/bg-mobile-light.jpg";

function App() {
  const { theme } = useContext(ThemeContext);
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    // console.log("***********", text);
    // setTodos([...todos, text]);
    setTodos([...todos, { id: nanoid(), text, completed: false }]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...todos, { id: nanoid(), text, completed: false }])
    );
  };

  const removeTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodoList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));
  };

  const filterbylabel = (label) => {
    const copiedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (copiedTodos) {
      if (label.toLowerCase() === "all") {
        setTodos(copiedTodos);
      } else if (label.toLowerCase() === "active") {
        const activeTodos = copiedTodos.filter(
          (item) => item.completed === false
        );
        setTodos(activeTodos);
      } else if (label.toLowerCase() === "completed") {
        const completedTodos = copiedTodos.filter(
          (item) => item.completed === true
        );
        setTodos(completedTodos);
      }
    } else {
      alert("There are no Todos yet!!!");
    }
  };

  const deleteCompleted = () => {
    const copiedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (copiedTodos) {
      const activeTodos = copiedTodos.filter(
        (item) => item.completed === false
      );
      setTodos(activeTodos);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activeTodos));
    }
  };

  useEffect(() => {
    const retrieveTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveTodo) setTodos(retrieveTodo);
  }, []);

  // const todos = [
  //   { id: "1", text: "Jog around the park 3x" },
  //   { id: "2", text: "10  minutes meditation" },
  //   { id: "3", text: "Read for 1 hour" },
  // ];

  return (
    <div
      className="App"
      style={{
        backgroundColor:
          theme === "Light" ? "hsl(236, 33%, 92%)" : "hsl(235, 21%, 11%)",
      }}
    >
      <div
        className="Black"
        // style={{
        //   background: theme === "Light" ? Dark : Light,
        // }}
      >
        <div className="body_container">
          <Header />
          <Input addTodoHandler={addTodoHandler} />
          <List
            todos={todos}
            setTodos={setTodos}
            getTodoId={removeTodoHandler}
          />
          <Footer
            filterbylabel={filterbylabel}
            todos={todos}
            deleteCompleted={deleteCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
