export function TodosNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTodo(params);
    event.target.reset();
  };

  return (
    <div>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Task: <input className="form-control-sm" name="name" type="text" />
        </div>
        <div>
          Description: <input className="form-control-lg" name="description" type="text" row="3" />
        </div>
        <div>
          Employee:
          <select name="employee_id" className="form-select-md" aria-label="Default select example">
            <option selected>Select employee</option>
            {props.employees.map((employee) => (
              <option value={employee.id}>
                {employee.first_name} {employee.last_name}
              </option>
            ))}
            {/* <option value="2">Two</option>
            <option value="3">Three</option> */}
          </select>
        </div>
        <button type="submit">Assign task</button>
      </form>
    </div>
  );
}
