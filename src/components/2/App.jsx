import React, { useState } from "react";

function App() {
  // starting value/state in parenthesis, returns an array
  //   const state = useState(0);
  //   console.log(state[0]);
  // to avoid getting elements by rbg[0], rgb[1], etc
  //   const rgb = [2, 33, 293]
  // deconstruct like below
  //   const [red, green, blue] = [2, 33, 293]

  // useState returns an array with 2 items, a value and a function
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      {/* tracks value of state and rerenders automatically */}
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
