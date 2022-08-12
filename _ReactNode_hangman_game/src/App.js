import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import Header from "./components/Header";

import GamePage from "./pages/GamePage";
import LeaderBoard from "./pages/LeaderBoard";

function App() {
  const [logedUser, setLogedUser] = useState();

  const [word, setWord] = useState(null);

  return (
    <div className="App d-flex flex-column">
      <BrowserRouter>
        <Header logedUser={logedUser} setLogedUser={setLogedUser} />

        <Routes>
          <Route
            path="/"
            element={
              <LoginPage setLogedUser={setLogedUser} setWord={setWord} />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/leaders" element={<LeaderBoard />} />

          <Route
            path="/game"
            element={
              <GamePage
                word={word}
                setWord={setWord}
                logedUser={logedUser}
                setLogedUser={setLogedUser}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
