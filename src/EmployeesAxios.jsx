import moment from "moment/moment";
import { Modal } from "./Modal";
import { useState } from "react";
export function EmployeesAxios(props) {
  const [isTimeClockVisible, setIsTimeClockVisible] = useState(false);

  const handleTimeClockShow = () => {
    setIsTimeClockVisible(true);
  };

  const handleTimeClockClose = () => {
    setIsTimeClockVisible(false);
  };
  const employees = props.employee.map((employee) => {
    console.log("employee", employee);
    return (
      <div className="container" key={employee.id}>
        <div className=" row gx-5">
          <div className="card">
            <img src={employee.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>Name: {` ${employee.first_name} ${employee.last_name}`}</h5>
              <p> Email: {employee.email}</p>
              <p> Address: {employee.address}</p>
            </div>
            <Modal show={isTimeClockVisible} onClose={handleTimeClockClose}>
              <h4>Time Clocks</h4>
              {employee.time_clock.map((punchin) => {
                return (
                  <div>
                    <p>{moment(punchin.time_in).format("MMMM Do YYYY, h:mm:ss a")} </p>
                    <p> Time in: {moment(punchin.time_in).format("MMMM Do YYYY, h:mm:ss a")} </p>
                    <p> Time out: {moment(punchin.time_out).format("MMMM Do YYYY, h:mm:ss a")}</p>
                    <button className="btn btn-success">Edit</button>
                  </div>
                );
              })}
            </Modal>
            <button onClick={() => props.onShowEmployee(employee)} className="btn btn-primary">
              More
            </button>{" "}
            <button onClick={handleTimeClockShow} className="btn btn-primary">
              Time Clock
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Employees</h1>
      {employees}
    </div>
  );
}
