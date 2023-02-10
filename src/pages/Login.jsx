import React, { useState } from 'react';
import adminImage from '../assets/admin.png';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === import.meta.env.VITE_USERNAME && password === import.meta.env.VITE_PASSWORD) {
      sessionStorage.setItem("pass_key", import.meta.env.VITE_PASS_KEY);
    }
    window.location.reload(false);
  };

  return (
    <div className="login-page">
      <div className="image-wrapper">
        <img className="admin-image" src={adminImage} />
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <header className="header">
              Admin Login
          </header>
          <input
            className="login-username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <input
            className="login-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <button className="login-submit" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
