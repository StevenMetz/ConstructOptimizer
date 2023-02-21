import { useState, useEffect } from "react";
export function EmployeeShow(props) {
  const [isManager, setIsManager] = useState(null);
  const [employeeRole, setEmployeeRole] = useState("Manager");
  const [employeeTimeClock, setEmployeeTimeClock] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsManager(props.employee.manager), setEmployeeTimeClock(props.employee.time_clock);
    console.log(employeeTimeClock);
  }, []);
  function handleClick() {
    props.onDestroyEmployee(props.employee);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("1", params);
    props.onUpdateEmployee(props.employee.id, params);
    event.target.reset();
  };

  return (
    <div className="container">
      <meta name="csrf-token" content={props.csrfToken} />

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
            <div className="col-md-4">
              <label className="form-label">City</label>
              <input type="text" name="city" className="form-control" defaultValue={props.employee.city} />
            </div>
            <div className="col-md-4">
              <label className="form-label">State</label>
              <input type="text" name="state" className="form-control" defaultValue={props.employee.state} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Zip Code</label>
              <input type="text" name="zip_code" className="form-control" defaultValue={props.employee.zip_code} />
            </div>
            <div>
              <label className="form-label-md"> Profile Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                multiple={false}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage({ image: event.target.files[0] });
                }}
              />
              {console.log("New Image", selectedImage)}
            </div>
            <div>
              <div>
                <label className="form-label-md">Role </label>
                <select
                  defaultValue={isManager}
                  value={isManager}
                  name="manager"
                  className="form-select-auto"
                  aria-label="Default select example"
                >
                  <option defaultValue={isManager}>Select role</option>
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
