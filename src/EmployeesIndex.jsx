import moment from "moment/moment";
import { Modal } from "./Modal";
import { useState } from "react";
import { punchInShow } from "./PunchinShow";
import { EmployeePunchInShow } from "./EmployeePunchInShow";
export function EmployeesIndex(props) {
  const employees = props.employees.map((employee) => {
    const [isEmployeeTimeClockVisible, setIsEmployeeTimeClockVisible] = useState(false);

    const handleEmployeeTimeClockClose = () => {
      setIsEmployeeTimeClockVisible(false);
    };

    const handleEmployeeTimeClockShow = () => {
      setIsEmployeeTimeClockVisible(true);
    };
    return (
      <div className="container" key={employee.id}>
        <div className=" row gx-5">
          <div className="card">
            <img src={employee.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5>Name: {` ${employee.first_name} ${employee.last_name}`}</h5>
              <p> Email: {employee.email}</p>
            </div>
            <button onClick={() => props.onShowEmployee(employee)} className="btn btn-primary">
              More
            </button>{" "}
            <button onClick={handleEmployeeTimeClockShow} className="btn btn-primary">
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
