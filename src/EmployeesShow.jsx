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
      <div className="row">
        <div className="form-control">
          <form className=" row g-4" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label className="form-label">First Name</label>
              <input type="text" name="first_name" className="form-control" defaultValue={props.employees.first_name} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Last Name</label>
              <input type="text" name="last_name" className="form-control" defaultValue={props.employees.last_name} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input type="text" name="email" className="form-control" defaultValue={props.employees.email} />
            </div>
            <div className="col-md-12">
              <label className="form-label">Address</label>
              <input type="text" name="address" className="form-control" defaultValue={props.employees.address} />
            </div>
            <div className="col-4">
              <label className="form-label">Picture</label>
              <input type="text" name="image" className="form-control" defaultValue={props.employees.image} />
            </div>
            <div>
              <div>
                <label className="form-label-md">Role </label>
                <select name="manager" className="form-select-auto" aria-label="Default select example">
                  <option selected>{employee}</option>
                  <option value={!manager}>Employee</option>
                  <option value={manager}>Manager</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
            <div className="col-6">
              <button className="btn btn-danger" onClick={handleClick}>
                Fire Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
