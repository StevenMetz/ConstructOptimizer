import { useState, useEffect } from "react";
import axios from "axios";
import { EmployeesAxios } from "./EmployeesAxios";
import { Modal } from "./Modal";
import { EmployeesShow } from "./EmployeesShow";

export function EmployeesIndex() {
  const [employees, setEmployees] = useState([]);
  const [isEmployeeShowVisible, setIsEmployeeShowVisible] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({});

  const handleIndexEmployees = () => {
    console.log("Wait I'm getting Da Minions");
    axios.get("http://localhost:3000/employees.json").then((response) => {
      console.log("Hello my Minions");
      console.log(response.data);
      setEmployees(response.data);
    });
  };
  const handleUpdatEemployee = (id, params) => {
    console.log(handleUpdatEemployee, "yo", params);
    axios.patch(`http://localhost:3000/employees/${id}.json`, params).then((response) => {
      console.log(response.data);
      setEmployees(
        employees.map((employee) => {
          if (employee.id === response.data.id) {
            return response.data;
          } else {
            return employee;
          }
        })
      );
      // successCallback();
      handleClose();
    });
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsEmployeeShowVisible(false);
  };
  const handleShowEmployee = (employee) => {
    console.log("handleShowEmployee", employee);
    setIsEmployeeShowVisible(true);
    setCurrentEmployee(employee);
  };
  const handleDeletEmployee = (employee) => {
    console.log("handleDestroyemployee", employee);
    axios.delete(`http://localhost:3000/employees/${employee.id}.json`).then((response) => {
      console.log(response.data);
      setEmployees(employee.filter((p) => p.id !== employee.id));
      handleClose();
    });
  };
  useEffect(handleIndexEmployees, []);
  return (
    <div>
      <Modal show={isEmployeeShowVisible} onClose={handleClose}>
        <EmployeesShow
          employees={currentEmployee}
          onUpdateEmployee={handleUpdatEemployee}
          onDestroyEmployee={handleDeletEmployee}
        />
      </Modal>
      <EmployeesAxios employee={employees} onShowEmployee={handleShowEmployee} />
    </div>
  );
}
