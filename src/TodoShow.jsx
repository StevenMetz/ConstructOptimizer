import { useState, useEffect } from "react";
import axios from "axios";
export function TodosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdateTodo(props.todo.id, params);
    event.target.reset();
  };
  const [employees, setEmployees] = useState([]);

  const handleIndexEmployees = () => {
    console.log("handleIndexTodos");
    axios.get("http://localhost:3000/employees.json").then((response) => {
      console.log(response.data);
      setEmployees(response.data);
    });
  };
  useEffect(handleIndexEmployees, []);

  function handleClick() {
    props.onDestroyTodo(props.todo);
  }
  return (
    <div className="container form-control">
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-md-4">
          Task: <input defaultValue={props.todo.name} name="name" />
        </div>
        <div className="col-md-4">
          Description:{" "}
          <p>
            <textarea
              className="form-control form-control-lg"
              defaultValue={props.todo.description}
              name="description"
            />
          </p>
        </div>
        <p>
          <strong>Assigned to:</strong>
          {` ${props.todo.employee_first}
             ${props.todo.employee_last}`}
        </p>
        <div>
          Reasign To:
          <select name="employee_id" className="form-select-md" aria-label="Default select example">
            <option selected>Select employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.first_name} {employee.last_name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button onClick={handleClick} className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  );
}
