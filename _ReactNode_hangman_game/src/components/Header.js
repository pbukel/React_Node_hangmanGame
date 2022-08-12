import React from "react";
import { useNavigate } from "react-router-dom";

function Header({ nupirkta, logedUser, setLogedUser }) {
  const nav = useNavigate();

  function toLeaders() {
    nav("/leaders");
  }
  function toPlay() {
    nav("/game");
  }
  function logOut() {
    setLogedUser(null);
    nav("/");
  }
  function toLogIn() {
    nav("/");
  }
  function toRegister() {
    nav("/register");
  }

  return (
    <div className="footer">
      {!logedUser && <h3 onClick={toLogIn}>LogIn</h3>}
      {!logedUser && <h3 onClick={toRegister}>Register</h3>}
      {logedUser && <h3>My points:{logedUser.points}</h3>}
      {logedUser && <h3 onClick={toLeaders}>Leaders</h3>}
      {logedUser && <h3 onClick={toPlay}>Play</h3>}
      {logedUser && <h3 onClick={logOut}>LogOut</h3>}
    </div>
  );
}

export default Header;
