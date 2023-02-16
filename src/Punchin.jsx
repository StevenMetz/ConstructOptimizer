import axios from "axios";
import moment from "moment/moment";
import { useState, useEffect } from "react";

export function Punchin() {
  const [punchIn, setPunchIn] = useState([]);
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInId, setPunchInId] = useState(null);
  const handleCreatePunchIn = () => {
    const params = { time_in: new Date() };
    console.log(handleCreatePunchIn);
    axios.post("http://localhost:3000/punchins.json", params).then((response) => {
      setPunchIn([...punchIn, response.data]);
      console.log(response.data);
      setPunchInId(response.data.id);
      setTimeIn(punchIn.time_in);
    });
  };
  const handleUpdatePunchIn = () => {
    const params = { time_out: new Date() };
    axios.patch(`http://localhost:3000/punchins/${punchInId}`, params).then((response) => {
      console.log(response.data);
      setIsPunchedIn(false);
      const getUpdatedPunchIn = punchIn.id === response.data.id ? response.data : punchIn;

      setPunchIn(getUpdatedPunchIn);
    });
    console.log("Updated");
  };
  const handlePunchIn = () => {
    setIsPunchedIn(true);
    handleCreatePunchIn();
  };
  const [time, setTime] = useState(moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"));
  const [timeIn, setTimeIn] = useState(null);
  const [timeOut, setTimeOut] = useState(null);

  const getTime = () => {
    const currentTime = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
    setTime(currentTime);
  };
  useEffect(() => {}, []);
  setInterval(getTime, 1000);
  return (
    <div>
      <div>
        <h2>Time In: {timeIn}</h2>
        <h2>Time out:{timeOut}</h2>
        <h3>Total Time: {timeOut - timeIn}</h3>
        <br />
        {isPunchedIn && (
          <div>
            <p>{time} </p>
            <button className="btn btn-primary" onClick={handleUpdatePunchIn}>
              Punch out
            </button>
          </div>
        )}
        {!isPunchedIn && (
          <div>
            <p>{time} </p>
            <button className="btn btn-primary" onClick={handlePunchIn}>
              Punch In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
