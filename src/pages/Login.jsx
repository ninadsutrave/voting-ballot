import React, { useState } from 'react';
import adminImage from '../assets/admin.png';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === "PEHCHAANES-1234" && password === "ELECTIONS2022") {
      sessionStorage.setItem("pass_key", "V55WxiB(J%utJc^Yzp5rt^&p$S9ji!XOsk4n7JLrf-2iWroX9kAsifPYjSVtu5JJ&&WF-XjCcsBh58vrdfOzXpbp^IcpsBr$EsHJ8V3itJ2uz99YikcnJu-n2M4-JWcVecrj%gc5o-IW74LVJg0M");
    }
    window.location.reload();
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
