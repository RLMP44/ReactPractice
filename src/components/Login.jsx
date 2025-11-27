import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.reg && <Input type="password" placeholder="Confirm password" />}
      <button type="submit">{props.reg ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
