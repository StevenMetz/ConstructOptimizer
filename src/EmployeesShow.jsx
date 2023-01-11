import { useState } from "react";
export function EmployeesShow(props) {
  const [manager, setManager] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdateEmployee(props.employees.id, params);
    event.target.reset();
  };
  function handleClick() {
    props.onDestroyEmployee(props.employees);
  }
  let employee;
  if (props.employees.manager === true) {
    employee = "Manager";
  } else {
    employee = "Employee";
  }
  return (
    <div className="container">
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <p>First Name:</p>
            <input type="text" name="first_name" defaultValue={props.employees.first_name} />
          </div>
          <div className="form-control">
            Last Name:
            <input type="text" name="last_name" defaultValue={props.employees.last_name} />
          </div>
          <div className="form-control">
            Email:
            <input type="text" name="email" defaultValue={props.employees.email} />
          </div>
          <div className="form-control">
            Manager:
            <select name="manager" className="form-select-md" aria-label="Default select example">
              <option selected>{employee}</option>
              <option value={!manager}>Employee</option>
              <option value={manager}>Manager</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <button className="btn btn-danger" onClick={handleClick}>
            Fire Employee
          </button>
        </form>
      </div>
    </div>
  );
}
