import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/11/Practice";
import "./styles/11/styles.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

// 1. when new text is written into the input, its state should be saved
// 2. when the add button is pressed, the current data in ht einput should be added to an array
// 3. the <ul> should display all of the array items as <li>s
