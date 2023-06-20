import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  

  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi yêu cầu đăng nhập đến máy chủ
    axios.post('http://14.225.7.179:2989/login',{
      email: email,
      password: password,
    })
    .then((response) => {
      alert(" Bạn đã đăng nhập thành công");
      navigate("/Home");
    })
    .catch((error) => {
      console.log("sai ");
    });
  };

  return (
    <div className="Login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <i className="fa-solid fa-eye p-1" checked={showPassword} onClick={handleTogglePassword}></i>
            <br />
            <input
               type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <div>
            <input
              type="checkbox"
              className="custom-control-input custom-checkbox"
              id="check"
              defaultChecked={false}
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </div>
          <p className="text-end mt-2">
            Forgot <NavLink to="/Registration">Password? </NavLink>{" "}
            <NavLink className="ms-2" to="/Registration">
              Sign Up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
