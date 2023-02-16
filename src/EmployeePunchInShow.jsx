import { Modal } from "./Modal";
import { useState } from "react";
export function EmployeePunchInShow(props) {
  const [isEmployeeTimeClockVisible, setIsEmployeeTimeClockVisible] = useState(false);
  const handleEmployeeTimeClockClose = () => {
    setIsEmployeeTimeClockVisible(false);
  };

  const handleEmployeeTimeClockShow = () => {
    setIsEmployeeTimeClockVisible(true);
  };
  return (
    <Modal show={isEmployeeTimeClockVisible} onClose={handleEmployeeTimeClockClose}>
      <h4>Time Clocks</h4>
      {employee.time_clock.map((punchin) => {
        return (
          <div key={punchin.id}>
            <p>{moment(punchin.time_in).format("MMMM Do YYYY")} </p>
            <p> Time in: {moment(punchin.time_in).format("MMMM Do YYYY, h:mm:ss a")} </p>
            <p> Time out: {moment(punchin.time_out).format("MMMM Do YYYY, h:mm:ss a")}</p>
            <button className="btn btn-success">Edit</button>
          </div>
        );
      })}
    </Modal>
  );
}
