import axios from "axios";
import moment from "moment/moment";
import { useState, useEffect } from "react";

export function Punchin() {
  const [punchIn, setPunchIn] = useState([]);
  const [punchedIn, setPunchedIn] = useState(false);
  const handleCreatePunchIn = (params) => {
    console.log(handleCreatePunchIn, params);
    axios.post("http://localhost:3000/punchins.json", params).then((response) => {
      setPunchIn([...punchIn, response.data]);
    });
  };
  const handleUpdatePunchIn = (id, params) => {
    console.log(handleUpdatePunchIn, params);
    axios.patch(`http://localhost:3000/punchins/${id}`, params).then((response) => {
      console.log(response.data);
      setPunchedIn(false);

      setPunchIn(
        punchIn.map((punchin) => {
          if (punchin.id === response.data.id) {
            return response.data;
          } else {
            return punchin;
          }
        })
      );
    });
  };
  const handlePunchIn = (event) => {
    setPunchedIn(true);
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreatePunchIn(params);
    event.target.reset();
  };
  const handlePunchOut = (event) => {
    setPunchedIn(false);
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdatePunchIn(params);
    event.target.reset();
  };
  const [time, setTime] = useState(Date());
  let timeIn = moment(time).format("MMMM Do YYYY, h:mm:ss a");
  let timeOut = moment(time).format("MMMM Do YYYY, h:mm:ss a");

  let timeClock;
  if (punchedIn === true) {
    timeClock = (
      <form onSubmit={handlePunchOut}>
        <input name="time_out" value={time} />

        <button className="btn btn-primary" type="submit">
          Punch out
        </button>
      </form>
    );
  } else {
    timeClock = (
      <form onSubmit={handlePunchIn}>
        <input name="time_in" value={time} />

        <button className="btn btn-primary" type="submit">
          Punch In
        </button>
      </form>
    );
  }
  return (
    <div>
      <div>
        <h2>Time In: {timeIn}</h2>
        <h2>Time out:{timeOut}</h2>
        <h3>Total Time: {timeOut - timeIn}</h3>
        <br />
        {timeClock}
      </div>
    </div>
  );
}
