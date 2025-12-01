// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDom from "react-dom/client";
import cars from "./cars.js";

const [honda, tesla] = cars;
// don't have to destructure everything, can leave out the ones you want
// destructured objects must use key names as-is then re-assign var name if desired
// arrays can be renamed immediately
const {
  colorsByPopularity: [hondaTopColor],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  colorsByPopularity: [teslaTopColor],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>
);
