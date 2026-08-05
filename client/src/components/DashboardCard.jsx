import React from 'react';

export const DashboardCard = ({ title, value, subtitle, icon, featured = false }) => {
  return (
    <div className={`dashboard-card ${featured ? 'featured' : ''}`}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        {icon}
      </div>
      <div className="dashboard-card-title">{title}</div>
      <div className="dashboard-card-value">{value}</div>
      {subtitle && <div className="dashboard-card-subtitle">{subtitle}</div>}
    </div>
  );
};
