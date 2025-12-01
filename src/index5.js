// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDom from "react-dom/client";
import cars from "./cars.js";

const [honda, tesla] = cars;
const hondaTopSpeed = honda.speedStats["topSpeed"];
const teslaTopSpeed = tesla.speedStats["topSpeed"];
const hondaTopColour = honda.coloursByPopularity[0];
const teslaTopColour = tesla.coloursByPopularity[0];

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
