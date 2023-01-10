export function EmployeesAxios(props) {
  const employee = props.employee.map((employee) => {
    <div>
      <h3>Name: {` ${employee.first_name} ${employee.last_name}`}</h3>
    </div>;
  });
  return (
    <div>
      <h1>Employees</h1>
      {employee}
    </div>
  );
}
