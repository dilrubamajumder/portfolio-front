import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css"
const API = process.env.REACT_APP_API_URL;


function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  
    const sendCredentials = async (username, password) => {
      const user = { username: username, password: password };
      axios
      .post(`${API}/users`, user)
        .then((res) => {
          if (res.status === 200) return navigate('/');
         
          throw Error("Invalid Username/Password");
        })
        .catch((err) => console.log(err));
    };
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendCredentials(username, password)
  };
  
    return (
      <div >

      <form className="registerform" onSubmit={handleSubmit}>
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
        <button className="submitbtn-r" type="submit">Submit</button>
      </form>
      </div>
    );
  };


export default Register