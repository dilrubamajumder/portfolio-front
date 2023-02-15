import React, { useState } from "react";
import axios from "axios";
import "./login.css"
const API = process.env.REACT_APP_API_URL;


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendCredentials = async (username, password) => {
    const data = { username: username, password: password };
    axios
    .put(`${API}/users`, data)
      .then((res) => {
        if (res.status === 200) return res.json();
       
        throw Error("Invalid Username/Password");
      })
      .catch((err) => console.log(err));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    sendCredentials(username, password)
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
