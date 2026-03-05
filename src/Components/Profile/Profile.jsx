import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="page-header">
        <h1>Profile</h1>
        <p>Manage your personal information and account details.</p>
      </header>

      <div className="profile-content">
        <div className="profile-card">
          <div className="avatar-section">
            <div className="avatar-circle">JD</div>
            <button className="btn-change-photo">Change Photo</button>
          </div>
          
          <div className="info-grid">
            <div className="info-group">
              <label>Full Name</label>
              <input type="text" defaultValue="John Doe" />
            </div>
            <div className="info-group">
              <label>Email Address</label>
              <input type="email" defaultValue="john.doe@myapp.com" />
            </div>
            <div className="info-group">
              <label>Role</label>
              <input type="text" defaultValue="Administrator" disabled />
            </div>
          </div>
          
          <button className="btn-save">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;