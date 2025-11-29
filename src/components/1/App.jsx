import React from "react";
import Login from "./Login";

var isRegistered = false;

function App() {
  return (
    <div className="container">
      <Login reg={isRegistered} />
    </div>
  );
}

export default App;
