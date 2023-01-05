export function TodosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdateTodo(props.todo.id, params, () => event.target.reset());
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
            <input className="form-control form-control-lg" defaultValue={props.todo.description} name="description" />
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button onClick={handleClick}>Delete</button>
      </form>
    </div>
  );
}
