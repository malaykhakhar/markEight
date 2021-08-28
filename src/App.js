import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "🐶": "Dog",
    "🐱": "Cat",
    "🐭": "Rat",
    "🐰": "Rabbit",
    "🐷": "Pig",
    "🐸": "Frog",
    "🐵": "Monkey",
    "🐔": "Hen",
    "🐧": "Penguin",
    "🐢": "Trutle",
    "🐍": "Snake",
    "🐴": "Horse",
    "🦄": "Unicorn",
    "🐝": "Honey bee"
  };

  var emojisInDatabase = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("Translation will appear here.");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;
    var userMeaning = emojiDictionary[userInput];

    if (userInput === "") {
      setMeaning("Translation will appear here.");
    } else if (userMeaning === undefined) {
      setMeaning("We dont have in our database");
    } else {
      setMeaning(userMeaning);
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Get Emoji Meaning</h1>
      <input onChange={emojiChangeHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we Know</h3>
      <div style={{ width: "30%", margin: "auto", minWidth: "250px" }}>
        {emojisInDatabase.map((emoji) => {
          return (
            <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
