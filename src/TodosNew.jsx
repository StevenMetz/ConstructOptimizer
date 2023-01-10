import axios from "axios";
import { useState, useEffect } from "react";
export function TodosNew() {
  const [todos, setTodos] = useState([]);
  const [employees, setEmployees] = useState([]);
  const handleIndexEmployees = () => {
    console.log("handleIndexTodos");
    axios.get("http://localhost:3000/employees.json").then((response) => {
      console.log("hello");
      console.log(response.data);
      setEmployees(response.data);
    });
  };
  const handleCreateTodo = (params) => {
    console.log(handleCreateTodo, params);
    axios.post("http://localhost:3000/todos.json", params).then((response) => {
      setTodos([...todos, response.data]);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateTodo(params);
    event.target.reset();
  };
  useEffect(handleIndexEmployees, []);

  return (
    <div className="container">
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Task: <input className="form-control-sm" name="name" type="text" />
        </div>
        <div>
          Description: <input className="form-control-lg" name="description" type="text" row="3" />
        </div>
        <div>
          Employee:
          <select name="employee_id" className="form-select-md" aria-label="Default select example">
            <option selected>Select employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.first_name} {employee.last_name}
              </option>
            ))}
            {/* <option value="2">Two</option>
            <option value="3">Three</option> */}
          </select>
        </div>
        <button type="submit">Assign task</button>
      </form>
    </div>
  );
}
