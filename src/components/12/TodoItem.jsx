import React, { useState } from "react";

function TodoItem(props) {
  var [crossedOff, setCrossedOff] = useState(false);

  function handleClick() {
    setCrossedOff(crossedOff ? false : true);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: crossedOff ? "line-through" : "" }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
