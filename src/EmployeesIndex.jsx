export function EmployeesIndex(props) {
  return (
    <div>
      <h1>All employees</h1>
      {props.employees.map((employee) => {
        <div key={employee.id}>
          <h1>{`${employee.first_name} ${employee.last_nam}`}</h1>
          <p>Email: {` ${employee.email}`}</p>
          <p>Manager: {` ${employee.manager}`}</p>
          <button>More</button>
        </div>;
      })}
    </div>
  );
}
