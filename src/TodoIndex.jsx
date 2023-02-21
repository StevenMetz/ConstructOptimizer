import { useState, useEffect } from "react";
import axios from "axios";

export function TodosIndex(props) {
  const [isDone, setIsDone] = useState(false);
  const toggleDone = () => setIsDone(!isDone);
  useEffect(() => {
    console.log("isDone is:", isDone);
  }, []);
  return (
    <div>
      <h1>Assigned Tasks</h1>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
          <p>{todo.description}</p>
          <p>
            <strong>Assigned to:</strong>
            {` ${todo.employee_first}
             ${todo.employee_last}`}
          </p>
          {todo.done === false && (
            <button
              name="done"
              className="btn btn-outline-success"
              onClick={() => {
                axios.patch(`http://localhost:3000/todos/${todo.id}.json`).then((response) => {
                  console.log(response);
                });
                window.location.reload(false);
              }}
            >
              Done
            </button>
          )}
          {todo.done === true && (
            <button
              name="done"
              className="btn btn-outline-danger"
              onClick={() => {
                axios.patch(`http://localhost:3000/todos/${todo.id}.json`).then((response) => {
                  console.log(response);
                });
                window.location.reload(false);
              }}
            >
              undo
            </button>
          )}
          <button className="btn btn-outline-primary" onClick={() => props.onShowTodo(todo)}>
            More info
          </button>
        </div>
      ))}
    </div>
  );
}
