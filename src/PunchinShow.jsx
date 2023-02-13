export function punchInShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdatePunchin(props.punchin.id, params);
    event.target.reset();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="form-control">
          <form className="row g-4" onSubmit={handleSubmit}>
            <div>
              <label className="form-label"> Time in</label>
              <input type="date" name="time_in" required />
            </div>
            <div>
              <label className="form-label"> Time Out</label>
              <input type="date" name="time_out" required />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
