import React from "react";
import { useRef, useState } from "react";

function RegisterPage() {
  const [error, setError] = useState(null);
  const inEmail = useRef();
  const inPass1 = useRef();
  const inPass2 = useRef();

  function registerUser() {
    const user = {
      email: inEmail.current.value,
      pass1: inPass1.current.value,
      pass2: inPass2.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:4000/register", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return setError(data.message);

        setError(data.message);
      });
  }

  return (
    <div className="d-flex flex-column">
      <input ref={inEmail} type="text" placeholder="email" />
      <input ref={inPass1} type="text" placeholder="pass1" />
      <input ref={inPass2} type="text" placeholder="pass2" />

      {error && <div>{error}</div>}

      <button onClick={registerUser}>REGISTER</button>
    </div>
  );
}

export default RegisterPage;
