import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { UserContext } from "../../UserContext";


const API = process.env.REACT_APP_API_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const sendCredentials = async (username, password) => {
    axios
      .put(
        `${API}/users`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res.status === 200) {
          setUser({ id: res.data.user.id, username: res.data.user.username });
          window.localStorage.setItem(
            "book-review-token",
            JSON.stringify({ id: res.data.user.id, username: res.data.user.username, token: res.data.token })
          );
          return navigate("/");
        }

        throw Error("Invalid Username/Password");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCredentials(username, password);
  };

  return (
    <div className="loginbody">
    <form className="loginform" onSubmit={handleSubmit}>
      
    <h1 className="loginh1">Please Log in to enjoy all the perks!</h1>

      <label className="loginlable">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label className="loginlable">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button className="submitbtnL" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Login;
