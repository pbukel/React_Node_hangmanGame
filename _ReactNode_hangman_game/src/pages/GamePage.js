import React from "react";
import Hash from "../components/Hash";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

let correctSpell = 0;
let wrongSpell = 0;

function GamePage({ word, setWord, logedUser, setLogedUser }) {
  const nav = useNavigate();
  const [allGuessed, setAllGuesed] = useState(false);
  const [head, setHead] = useState(false);
  const [body, setBody] = useState(false);
  const [leftHand, setLeftHand] = useState(false);
  const [rightHAnd, setRightHand] = useState(false);
  const [leftLeg, setLeftLeg] = useState(false);
  const [rightLEg, setRightLeg] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const inLetter = useRef();

  function guessing() {
    if (!inLetter.current.value) return;

    const guessing = {
      letter: inLetter.current.value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(guessing),
    };

    fetch("http://localhost:4000/guessing", options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          console.log(data.message);
          point(5);
          let tarpinis = [...word];
          for (let ind = 0; ind < data.index.length; ind++) {
            tarpinis[data.index[ind]] = data.letter;
          }

          //   tarpinis[data.index] = data.letter;
          setWord(tarpinis);
          correctSpell = correctSpell + data.index.length;
          if (correctSpell === word.length) return setAllGuesed(true);
        } else {
          point(-5);
          wrongSpell++;
          if (wrongSpell === 1) setHead(true);
          if (wrongSpell === 2) setBody(true);
          if (wrongSpell === 3) setLeftHand(true);
          if (wrongSpell === 4) setRightHand(true);
          if (wrongSpell === 5) setLeftLeg(true);
          if (wrongSpell === 6) {
            setRightLeg(true);
            setGameOver(true);
          }
        }
      });

    inLetter.current.value = "";
  }

  function loadNewWord() {
    fetch("http://localhost:4000/getnewword")
      .then((res) => res.json())
      .then((data) => {
        setWord(data.word);
        setAllGuesed(false);
        correctSpell = 0;
        wrongSpell = 0;
        setHead(false);
        setBody(false);
        setLeftHand(false);
        setRightHand(false);
        setLeftLeg(false);
        setRightLeg(false);
        setGameOver(false);

        nav("/game");
      });
  }

  function point(value) {
    const data = {
      email: logedUser.email,
      points: value,
    };

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:4000/points", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        setLogedUser(data.user);
      });
  }

  return (
    <div className={"p-20 m-auto"}>
      <div className="all_hashes">
        {word.map((x, i) => (
          <Hash leter={x} key={i} />
        ))}
      </div>
      <div>
        <input
          ref={inLetter}
          type="text"
          name=""
          id=""
          placeholder="leter"
          maxLength="1"
        />

        {!allGuessed && <button onClick={guessing}>GUESS</button>}
        {allGuessed && <button onClick={loadNewWord}>START AGAIN</button>}
      </div>
      <div className="hangman">
        <img
          id="hangman"
          src="https://pbs.twimg.com/media/DWQJJP6VQAEJUk6.jpg:large"
        ></img>
        {head && (
          <img
            id="hangman-head"
            src="https://pbs.twimg.com/media/DWQMCNyVwAAIejT.jpg:large"
          ></img>
        )}
        {body && (
          <img
            id="hangman-body"
            src="https://pbs.twimg.com/media/DWQNlzAU0AAnm7y.jpg:large"
          ></img>
        )}
        {leftHand && (
          <img
            id="hangman-leftarm"
            src="https://pbs.twimg.com/media/DWQPAdoU8AAgKqJ.jpg"
          ></img>
        )}
        {rightHAnd && (
          <img
            id="hangman-rightarm"
            src="https://pbs.twimg.com/media/DWQI4CXV4AEmgKs.jpg:large"
          ></img>
        )}
        {leftLeg && (
          <img
            id="hangman-leftleg"
            src="https://pbs.twimg.com/media/DWQPAdoU8AAgKqJ.jpg"
          ></img>
        )}
        {rightLEg && (
          <img
            id="hangman-rightleg"
            src="https://pbs.twimg.com/media/DWQI4CXV4AEmgKs.jpg:large"
          ></img>
        )}
      </div>
      {gameOver && (
        <div className="gameover">
          <h1>GAME OVER</h1>
          <button onClick={loadNewWord}>START AGAIN</button>
        </div>
      )}
    </div>
  );
}

export default GamePage;
