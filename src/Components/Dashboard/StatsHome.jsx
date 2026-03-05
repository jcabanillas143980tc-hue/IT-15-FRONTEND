import React from 'react';
import './StatsHome.css';

const reservations = [
  { avatar: 'MR', name: 'Michelle Rivera', time: '17:40', table: 'K-1', people: 4, status: 'Confirmed' },
  { avatar: 'AM', name: 'Arlene McCoy',    time: '17:40', table: 'T-3', people: 5, status: 'Confirmed' },
  { avatar: 'SN', name: 'Savannah Nguyen', time: '18:15', table: 'K-1', people: 3, status: 'Pending'   },
  { avatar: 'JD', name: 'James Doe',       time: '19:00', table: 'B-2', people: 2, status: 'Confirmed' },
];

const menuItems = [
  { emoji: '🐟', name: 'Grilled Salmon With Lemon Butter', price: '68$', revenue: '4,500$' },
  { emoji: '🍜', name: 'Pad Thai With Chicken And Shrimp', price: '76$', revenue: '4,500$' },
  { emoji: '🦞', name: 'Lobster Bisque With Garlic Bread',  price: '55$', revenue: '3,800$' },
];

const StatCard = ({ label, value, change, positive, icon }) => (
  <div className="sh-stat-card">
    <div className="sh-stat-top">
      <span className="sh-stat-label">{label}</span>
      <span className="sh-stat-icon">{icon}</span>
    </div>
    <div className="sh-stat-bottom">
      <span className="sh-stat-value">{value}</span>
      <span className={`sh-stat-change ${positive ? 'pos' : 'neg'}`}>
        {positive ? '▲' : '▼'} {change}
      </span>
    </div>
  </div>
);

const StatsHome = () => {
  return (
    <div className="sh-root">

      {/* top bar */}
      <div className="sh-topbar">
        <h1 className="sh-page-title">Dashboard</h1>
        <div className="sh-topbar-right">
          <span className="sh-search">🔍 Search</span>
          <span className="sh-date">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* stat cards */}
      <div className="sh-stats-row">
        <StatCard label="Total Revenue"      value="$12,896" change="3.67%" positive    icon="💰" />
        <StatCard label="Total Expense"      value="$6,886"  change="2.67%" positive={false} icon="💳" />
        <StatCard label="Total Reservations" value="1,874"   change="2.54%" positive    icon="👤" />
        <StatCard label="Occupied Table / h" value="75%"     change="2.57%" positive={false} icon="🕐" />
      </div>

      {/* reservations table */}
      <div className="sh-card sh-reservations">
        <div className="sh-card-header">
          <span className="sh-card-title">Current Reservations</span>
          <a href="#" className="sh-view-all">View All</a>
        </div>
        <table className="sh-table">
          <thead>
            <tr className="sh-table-head">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Table</th>
              <th>Guests</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r, i) => (
              <tr key={i} className="sh-table-row">
                <td><div className="sh-avatar">{r.avatar}</div></td>
                <td className="sh-name">{r.name}</td>
                <td className="sh-muted">{r.time}</td>
                <td className="sh-muted">{r.table}</td>
                <td className="sh-muted">{r.people} People</td>
                <td>
                  <span className={`sh-badge ${r.status === 'Confirmed' ? 'confirmed' : 'pending'}`}>
                    {r.status}
                  </span>
                </td>
                <td><button className="sh-edit-btn">✏ Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* popular menu items */}
      <div className="sh-card sh-menu-card">
        <div className="sh-card-header">
          <span className="sh-card-title">Most Popular Items</span>
        </div>
        <div className="sh-menu-header-row">
          <span>Menu Item Name</span>
          <span>Item Price</span>
          <span>Total Revenue</span>
        </div>
        {menuItems.map((item, i) => (
          <div key={i} className="sh-menu-row">
            <div className="sh-menu-left">
              <span className="sh-menu-emoji">{item.emoji}</span>
              <span className="sh-menu-name">{item.name}</span>
            </div>
            <span className="sh-menu-price">{item.price}</span>
            <span className="sh-menu-rev">{item.revenue}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default StatsHome;