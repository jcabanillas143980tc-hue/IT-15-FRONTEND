import React from 'react';
import './Settings.css';

const Settings = () => {
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
            <input type="checkbox" defaultChecked />
          </div>

          <div className="setting-item">
            <div className="setting-text">
              <p className="setting-title">Email Notifications</p>
              <p className="setting-desc">Receive updates about your account via email.</p>
            </div>
            <input type="checkbox" />
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