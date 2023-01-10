import axios from "axios";
import { useEffect, useState } from "react";

export function PunchInsIndex() {
  const [punchIns, setPunchIns] = useState([]);
  const handlePunchinsIndex = () => {
    axios.get("http://localhost:3000/punchins.json").then((response) => {
      console.log("hold up getting the time clock", response.data);
      setPunchIns(response.data);
    });
  };
  useEffect(handlePunchinsIndex, []);
  return (
    <div key={punchIns.id}>
      <p>Time in: {punchIns.punch_in}</p>
      <p>Time out: {punchIns.punch_out}</p>
    </div>
  );
}
