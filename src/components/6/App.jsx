import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  function handleClick() {
    setHeadingText("Submitted");
  }
  function backgroundBlack() {
    document.getElementById("submitbutton").style.backgroundColor = "black";
  }
  function backgroundWhite() {
    document.getElementById("submitbutton").style.backgroundColor = "white";
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        id="submitbutton"
        onClick={handleClick}
        onMouseOver={backgroundBlack}
        onMouseOut={backgroundWhite}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
