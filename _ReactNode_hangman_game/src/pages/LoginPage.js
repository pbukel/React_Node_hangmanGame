import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setLogedUser, setWord }) {
  const nav = useNavigate();
  const [error, setError] = useState(null);
  const inEmail = useRef();
  const inPass = useRef();

  function loginAction() {
    const user = {
      email: inEmail.current.value,
      pass: inPass.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:4000/login", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return setError(data.message);

        // // setPosts(data.posts);
        setError(data.message);
        // console.log(data.data);
        setLogedUser(data.data);
        setWord(data.word);
        nav("/game");
      });
  }

  return (
    <div className="d-flex flex-column login">
      <input ref={inEmail} type="text" placeholder="email" />
      <input ref={inPass} type="text" placeholder="pass" />

      {error && <div>{error}</div>}

      <button onClick={loginAction}>Login</button>
    </div>
  );
}

export default LoginPage;
