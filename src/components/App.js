import React, { useState, useEffect } from "react";
import Headbar from "./Head";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterTodo = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterTodo();
  }, [todos, status]);

  return (
    <div className="App">
      <div>
        <Headbar />
      </div>
      <div>
        <AddTodo todos={todos} setTodos={setTodos} setStatus={setStatus} />
      </div>
      <div>
        <DisplayTodo
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
};
export default App;
