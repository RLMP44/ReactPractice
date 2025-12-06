import React, { useState } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Submit");
  const [isMouseOver, setMouseOver] = useState(false);
  // name is to be used as a controlled component
  // it must also be set as the value of the input to ensure consistency
  // using react as a "single source of truth"
  // https://legacy.reactjs.org/docs/forms.html#controlled-components
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleClick(event) {
    setButtonText("Submitted");
    setHeadingText(name);
    setTimeout(() => {
      setButtonText("Submit");
    }, 1500);
    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
    setName(event.currentTarget.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{
            backgroundColor: isMouseOver ? "black" : "white",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

// alternate form submission
{
  /* <form>
  <input
    onChange={handleChange}
    type="text"
    placeholder="What's your name?"
    value={name}
  />
  <button
    type="submit"
    style={{
      backgroundColor: isMouseOver ? "black" : "white",
    }}
    onClick={handleClick}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
  >
    {buttonText}
  </button>
</form>; */
}

export default App;
