import { useState, useEffect } from "react";
import axios from "axios";
import { EmployeesAxios } from "./EmployeesAxios";
import { Modal } from "./Modal";

export function EmployeesIndex() {
  const [employees, setEmployees] = useState([]);
  const handleIndexEmployees = () => {
    console.log("Wait I'm getting Da Minions");
    axios.get("http://localhost:3000/employees.json").then((response) => {
      console.log("Hello my Minions");
      console.log(response.data);
      setEmployees(response.data);
    });
  };

  useEffect(handleIndexEmployees, []);
  return (
    <div>
      <EmployeesAxios employee={employees} />
    </div>
  );
}
