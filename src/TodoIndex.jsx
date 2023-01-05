import { useState, useEffect } from "react";
import axios from "axios";

export function TodosIndex(props) {
  const handleDone = (event) => {
    axios.patch("http://localhost:3000.json");
  };
  const [isDone, setIsDone] = useState(false);
  const toggleDone = () => setIsDone(!isDone);
  useEffect(() => {
    console.log("isDone is:", isDone);
  }, [isDone]);
  return (
    <div>
      <h1>All Todos</h1>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
          <p>{todo.description}</p>
          <button
            onClick={() => {
              axios.patch(`http://localhost:3000/todos/${todo.id}.json`).then((response) => {
                console.log(response);
              });
            }}
          >
            {todo.done}
            Done
          </button>
          <button onClick={() => props.onShowTodo(todo)}>More info</button>
        </div>
      ))}
    </div>
  );
}
