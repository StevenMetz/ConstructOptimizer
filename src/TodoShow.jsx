export function TodosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdateTodo(props.todo.id, params);
    event.target.reset();
  };
  function handleClick() {
    props.onDestroyTodo(props.todo);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Task: <input defaultValue={props.todo.name} name="name" />
        </div>
        <div className="scrollable-div">
          Description:{" "}
          <p>
            <textarea
              className="form-control form-control-lg"
              defaultValue={props.todo.description}
              name="description"
            />
          </p>
          <p>
            <strong>Assigned to:</strong>
            {` ${props.todo.employee_first}
             ${props.todo.employee_last}`}
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button onClick={handleClick} className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  );
}
