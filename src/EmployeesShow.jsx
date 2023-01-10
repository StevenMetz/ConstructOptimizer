export function EmployeesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdateTodo(props.employees.id, params);
    event.target.reset();
  };
  function handleClick() {
    props.onDestroyTodo(props.employees);
  }
  return (
    <div className="container">
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <input type="text" name="first_name">
            {" "}
            First Name:
          </input>
          <input type="text" name="last_name">
            {" "}
            Last Name
          </input>
          <input type="text" name="email">
            {" "}
            Email:
          </input>
          <input type="radio"> Manager:</input>
        </form>
      </div>
    </div>
  );
}
