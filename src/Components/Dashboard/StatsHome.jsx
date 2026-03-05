import React from 'react';

const StatsHome = () => {
  return (
    <div className="stats-home">
      <div className="hero" style={{textAlign: 'center', marginBottom: '50px'}}>
        <h1 style={{fontSize: '3rem'}}>Welcome to your dashboard</h1>
        <p style={{color: '#94a3b8'}}>Use the menu to navigate — this is just a demo layout.</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3 style={{color: '#94a3b8', fontSize: '0.9rem'}}>USERS</h3>
          <p className="stat-number">1,234</p>
        </div>
        <div className="stat-card">
          <h3 style={{color: '#94a3b8', fontSize: '0.9rem'}}>SALES</h3>
          <p className="stat-number">$56,789</p>
        </div>
        <div className="stat-card">
          <h3 style={{color: '#94a3b8', fontSize: '0.9rem'}}>ALERTS</h3>
          <p className="stat-number">3</p>
        </div>
      </div>
    </div>
  );
};

export default StatsHome;