import React from "react";

function Leader({ item }) {
  return (
    <div className="gamer">
      <h2>{item.email}</h2>
      <h1>{item.points}</h1>
    </div>
  );
}

export default Leader;
