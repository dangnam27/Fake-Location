import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi yêu cầu đăng nhập đến máy chủ
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ms-1 btn  btn-danger">
        <label htmlFor="email">Email:</label>
        <input
          className="ms-1"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="ms-1 btn  btn-danger">
        <label htmlFor="password">Password:</label>
        <input
          className="ms-1"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button className="ms-1 btn  btn-danger" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
