import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Prevents any accidental form behavior
    console.log("Logging out..."); 
    localStorage.removeItem('myapp_auth_v1');
    navigate('/');
  };

  return (
    <div className="dashboard-root">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-brand">MyApp</div>
          <nav className="sidebar-menu">
            <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Dashboard
            </NavLink>
            <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Profile
            </NavLink>
            <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Settings
            </NavLink>
          </nav>
        </div>

        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="main-viewport">
        <header className="top-header">
          <button className="btn-create">Create</button>
        </header>

        <section className="scrollable-content">
          <Outlet />
        </section>

        <footer className="footer-bar">
          <p>© 2026 MyApp. All rights reserved.</p>
          <div className="footer-links">
            <span>Help</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;