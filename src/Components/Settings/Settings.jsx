import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') !== 'false'; // default: true
  });
  const [emailNotifs, setEmailNotifs] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="settings-container">
      <header className="page-header">
        <h1>Settings</h1>
        <p>Customize your dashboard preferences.</p>
      </header>

      <div className="settings-section">
        <h3>Preferences</h3>
        <div className="settings-list">
          <div className="setting-item">
            <div className="setting-text">
              <p className="setting-title">Dark Mode</p>
              <p className="setting-desc">Adjust the theme of your interface.</p>
            </div>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={e => setDarkMode(e.target.checked)}
            />
          </div>

          <div className="setting-item">
            <div className="setting-text">
              <p className="setting-title">Email Notifications</p>
              <p className="setting-desc">Receive updates about your account via email.</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotifs}
              onChange={e => setEmailNotifs(e.target.checked)}
            />
          </div>
        </div>
      </div>

      <div className="settings-section danger-zone">
        <h3>Security</h3>
        <button className="btn-outline">Reset Password</button>
      </div>
    </div>
  );
};

export default Settings;