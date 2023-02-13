import { useState, useEffect } from "react";
export function EmployeeShow(props) {
  const [isManager, setIsManager] = useState(null);
  const [employeeRole, setEmployeeRole] = useState("Manager");
  const [employeeTimeClock, setEmployeeTimeClock] = useState([]);
  useEffect(() => {
    setIsManager(props.employee.manager), setEmployeeTimeClock(props.employee.time_clock);
    console.log(employeeTimeClock);
  }, [isManager]);
  function handleClick() {
    props.onDestroyEmployee(props.employee);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdateEmployee(props.employee.id, params);
    event.target.reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="form-control">
          <form className=" row g-4" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label className="form-label">First Name</label>
              <input type="text" name="first_name" className="form-control" defaultValue={props.employee.first_name} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Last Name</label>
              <input type="text" name="last_name" className="form-control" defaultValue={props.employee.last_name} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input type="text" name="email" className="form-control" defaultValue={props.employee.email} />
            </div>
            <div className="col-md-12">
              <label className="form-label">Address</label>
              <input type="text" name="address" className="form-control" defaultValue={props.employee.address} />
            </div>
            <div className="col-4">
              <label className="form-label">Picture</label>
              <input type="text" name="image" className="form-control" />
            </div>
            <div>
              <div>
                <label className="form-label-md">Role </label>
                <select
                  defaultValue={false}
                  value={isManager}
                  name="manager"
                  className="form-select-auto"
                  aria-label="Default select example"
                >
                  <option value={false}>Employee</option>
                  <option value={true}>Manager</option>
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
