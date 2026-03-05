import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      try { localStorage.setItem('myapp_auth_v1', '1'); } catch (e) {}
      navigate('/dashboard');
    } else {
      alert('Please fill in both fields');
    }
  }

  return (
    <div className="login-page">
      <div className="login-form-container">

        {/* ── LEFT PANEL ── */}
        <div className="login-left">
          {/* floating dots */}
          <div className="dot dot-1" />
          <div className="dot dot-2" />
          <div className="dot dot-3" />
          <div className="dot dot-4" />

          <p className="login-left-subtitle">Welcome back</p>
          <h2 className="login-left-headline">MyApp<br />Cabanillas</h2>

          {/* inline SVG illustration */}
          <div className="login-illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* device / phone base */}
              <rect x="55" y="90" width="90" height="60" rx="10" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5"/>
              <rect x="70" y="100" width="60" height="8" rx="3" fill="rgba(34,211,238,0.2)"/>
              <rect x="70" y="114" width="45" height="6" rx="3" fill="rgba(34,211,238,0.12)"/>
              <rect x="70" y="126" width="30" height="6" rx="3" fill="rgba(34,211,238,0.12)"/>

              {/* person sitting */}
              {/* body */}
              <ellipse cx="100" cy="78" rx="16" ry="20" fill="rgba(34,211,238,0.15)" stroke="rgba(34,211,238,0.35)" strokeWidth="1.5"/>
              {/* head */}
              <circle cx="100" cy="52" r="14" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5"/>
              {/* arms */}
              <path d="M84 80 Q72 85 68 95" stroke="rgba(34,211,238,0.35)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M116 80 Q128 85 132 95" stroke="rgba(34,211,238,0.35)" strokeWidth="2" strokeLinecap="round"/>
              {/* legs */}
              <path d="M92 96 Q88 110 82 118" stroke="rgba(34,211,238,0.35)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M108 96 Q112 110 118 118" stroke="rgba(34,211,238,0.35)" strokeWidth="2" strokeLinecap="round"/>

              {/* key icon top-right */}
              <circle cx="148" cy="42" r="12" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5"/>
              <circle cx="148" cy="42" r="5" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" fill="none"/>
              <path d="M153 47 L162 56 M158 54 L160 52 M161 57 L163 55" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" strokeLinecap="round"/>

              {/* chat bubbles */}
              <rect x="30" y="58" width="28" height="18" rx="6" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.25)" strokeWidth="1"/>
              <circle cx="38" cy="67" r="2" fill="rgba(34,211,238,0.4)"/>
              <circle cx="44" cy="67" r="2" fill="rgba(34,211,238,0.4)"/>
              <circle cx="50" cy="67" r="2" fill="rgba(34,211,238,0.4)"/>

              {/* small diamonds */}
              <rect x="38" y="128" width="8" height="8" rx="1" transform="rotate(45 38 128)" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.3)" strokeWidth="1"/>
              <rect x="155" y="95" width="6" height="6" rx="1" transform="rotate(45 155 95)" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.3)" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Sign in</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <div className="input-wrapper">
              <span className="input-icon">✉</span>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="forgot-row">
              <a href="#" className="forgot-link">Forget password?</a>
            </div>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>

          <p className="form-footer">
            Don't have an account?
            <a href="#" className="signup-link">Create an account</a>
          </p>
        </form>

      </div>
    </div>
  );
}

export default Login;