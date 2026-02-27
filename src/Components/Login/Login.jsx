
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // very simple check: fields must not be empty
    if (email.trim() && password.trim()) {
      // demo auth: persist a simple auth flag
      try { localStorage.setItem('myapp_auth_v1', '1'); } catch (e) {}
      navigate('/dashboard');
    } else {
      alert('Please fill in both fields');
    }
  }

  return (
    <div className="login-page">
      {/* form section only, hero removed to keep form centered */}
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Sign in</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;