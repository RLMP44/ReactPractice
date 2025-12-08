import React, { useState } from "react";
// 1. when new text is written into the input, its state should be saved
// 2. when the add button is pressed, the current data in ht einput should be added to an array
// 3. the <ul> should display all of the array items as <li>s

function Practice() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const input = event.target.value;
    setInputText(input);
  }

  function updateList() {
    setTodos((prevValues) => {
      return [...prevValues, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={updateList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Practice;
