import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.username == "12345" && data.password == "12345") {
      //   alert("Sucessfully login");
      navigate("/dashboard");
    } else {
      alert("please enter user and password");
    }
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}

export default Login;
