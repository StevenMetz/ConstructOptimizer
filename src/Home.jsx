import { TodosIndex } from "./TodoIndex";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { TodosShow } from "./TodoShow";
import axios from "axios";
export function Home() {
  const [todos, setTodos] = useState([]);
  const [isTodoShowVisible, setIsTodoShowVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [employees, setEmployees] = useState([]);

  const handleIndexEmployees = () => {
    console.log("handleIndexTodos");
    axios.get("http://localhost:3000/employees.json").then((response) => {
      console.log(response.data);
      setEmployees(response.data);
    });
  };
  const handleIndexTodos = () => {
    console.log("handleIndexTodos");
    axios.get("http://localhost:3000/todos.json").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };
  const handleUpdateTodo = (id, params) => {
    console.log(handleUpdateTodo, "yo", params);
    axios.patch(`http://localhost:3000/todos/${id}.json`, params).then((response) => {
      console.log(response.data);
      setTodos(
        todos.map((todo) => {
          if (todo.id === response.data.id) {
            return response.data;
          } else {
            return todo;
          }
        })
      );
      // successCallback();
      handleClose();
    });
  };
  const handleShowTodo = (todo) => {
    console.log("handleShowTodo", todo);
    setIsTodoShowVisible(true);
    setCurrentTodo(todo);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsTodoShowVisible(false);
  };

  const handleDeleteTodo = (todo) => {
    console.log("handleDestroyTodo", todo);
    axios.delete(`http://localhost:3000/todos/${todo.id}.json`).then((response) => {
      console.log(response.data);
      setTodos(todo.filter((p) => p.id !== todo.id));
      handleClose();
    });
  };
  useEffect(handleIndexTodos, []);
  useEffect(handleIndexEmployees, []);

  return (
    <div className="container">
      <Modal show={isTodoShowVisible} onClose={handleClose}>
        <TodosShow todo={currentTodo} onUpdateTodo={handleUpdateTodo} onDestroyTodo={handleDeleteTodo} />
      </Modal>
      <TodosIndex todos={todos} onShowTodo={handleShowTodo} />
    </div>
  );
}
