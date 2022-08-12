import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Leader from "../components/Leader";

function LeaderBoard() {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/getLeaders")
      .then((res) => res.json())
      .then((data) => {
        //   setProducts(data.products);
        console.log(data.gamers);
        setLeaders(data.gamers);
      });
  }, []);

  return (
    <div>
      {leaders.map((x, i) => (
        <Leader item={x} key={i} />
      ))}
    </div>
  );
}

export default LeaderBoard;
