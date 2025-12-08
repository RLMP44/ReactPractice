import React from "react";

function TodoItem(props) {
  // to avoid calling the function immediately upon todoItem render
  // onClick must have a function created inside of it
  // only then can we pass the ID to the function from App
  // onClick={props.onChecked(props.id)} runs the function on render, before the click
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
