import React, { useState } from "react";

function TodoItem(props) {
  var [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "" }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
