import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        if (result.data.message === 'Login successful') {
          localStorage.setItem('data', JSON.stringify(result.data));
          localStorage.setItem('user', JSON.stringify({
            name: result.data.user.username,
            email: result.data.user.email,
          }));
          setIsLoggedIn(true); // Set logged in state
         
          navigate('/');
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(err => {
        if (err.code === 'ERR_NETWORK') {
          console.log('Network error. Please check your backend server.');
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>
        Don't have an account?<Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
