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
  const timeClock = props.employee.map((employee) => {
    return (
      <div className="scrollable-div" key={employee.id}>
        <p>
          {employee.time_clock.map((punchin) => {
            return (
              <div>
                <h6>{moment(punchin.date).format("MMM Do YY")}</h6>
                <p> Time in: {moment(punchin.time_in).format("MMMM Do YYYY, h:mm:ss a")} </p>
                <p> Time out: {moment(punchin.time_out).format("MMMM Do YYYY, h:mm:ss a")}</p>
              </div>
            );
          })}
        </p>
      </div>
    );
  });
  const employee = props.employee.map((employee) => {
    return (
      <div key={employee.id}>
        <h5>Name: {` ${employee.first_name} ${employee.last_name}`}</h5>
        <p> Email: {employee.email}</p>
        <Modal show={isTimeClockVisible} onClose={handleTimeClockClose}>
          <h4>Time Clocks</h4>
          <p>
            {" "}
            Time Clock:{" "}
            {employee.time_clock.map((punchin) => {
              return (
                <div>
                  <p> Time in: {moment(punchin.time_in).format("MMMM Do YYYY, h:mm:ss a")} </p>
                  <p> Time out: {moment(punchin.time_out).format("MMMM Do YYYY, h:mm:ss a")}</p>
                </div>
              );
            })}
          </p>
        </Modal>
        <button>More</button>
        <button onClick={handleTimeClockShow}>Time Clock</button>
      </div>
    );
  });

  return (
    <div>
      <h1>Employees</h1>
      {employee}
    </div>
  );
}
