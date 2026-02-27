<<<<<<< HEAD


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { logout as authLogout } from '../../utils/auth';
>>>>>>> 193db1ba7bc25f60c2015e1d43e4612e92ec3074

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
<<<<<<< HEAD
    try { localStorage.removeItem('myapp_auth_v1'); } catch (e) {}
    navigate('/');
  };
=======
    authLogout();
    navigate('/');
  };

>>>>>>> 193db1ba7bc25f60c2015e1d43e4612e92ec3074
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="nav-brand">MyApp</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
          <div className="nav-actions">
            <button className="btn-create">Create</button>
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="hero-section">
          <h1>Welcome to your dashboard</h1>
          <p>Use the menu to navigate — this is just a demo layout.</p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3>Users</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Sales</h3>
            <p className="stat-number">$56,789</p>
          </div>
          <div className="stat-card">
            <h3>Alerts</h3>
            <p className="stat-number">3</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 MyApp. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;