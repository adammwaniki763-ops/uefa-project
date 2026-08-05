import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const ClubDetails = () => {
  const { id } = useParams();
  const { data: club, loading, error } = useFetch(`/api/clubs/${id}`);

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <p>Loading club details...</p>
      </div>
    );
  }

  if (error || !club) {
    return (
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="alert alert-error">
          {error || 'Club not found'}
        </div>
        <Link to="/clubs">
          <button className="btn btn-primary">Back to Clubs</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/clubs">
          <button className="btn btn-outline" style={{ marginBottom: '1rem' }}>
            ← Back to Clubs
          </button>
        </Link>
      </div>

      {/* Club Info */}
      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="card-premium featured">
          <div className="card-header-premium">
            <h1 style={{ fontSize: '2rem', margin: 0 }}>⚽ {club.club_name}</h1>
          </div>
          <div className="card-body-premium" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>⚽</div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Country</p>
              <p style={{ fontSize: '1.3rem', fontWeight: '700' }}>🌍 {club.country}</p>
            </div>
          </div>
        </div>

        <div className="card-premium">
          <div className="card-header-premium">
            <h3>Club Details</h3>
          </div>
          <div className="card-body-premium">
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Manager</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>👨‍💼 {club.coach}</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Stadium</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>🏟️ {club.stadium}</p>
            </div>
            {club.logo_url && (
              <div>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Logo</p>
                <img src={club.logo_url} alt={club.club_name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#001a4d' }}>
          📊 Statistics
        </h2>
        <div className="grid-4">
          <div className="dashboard-card featured">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚽</div>
            <div className="dashboard-card-title">Matches Played</div>
            <div className="dashboard-card-value">0</div>
          </div>
          <div className="dashboard-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
            <div className="dashboard-card-title">Wins</div>
            <div className="dashboard-card-value">0</div>
          </div>
          <div className="dashboard-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
            <div className="dashboard-card-title">Draws</div>
            <div className="dashboard-card-value">0</div>
          </div>
          <div className="dashboard-card">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❌</div>
            <div className="dashboard-card-title">Losses</div>
            <div className="dashboard-card-value">0</div>
          </div>
        </div>
      </section>

      {/* Recent Matches */}
      <section>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#001a4d' }}>
          📅 Recent Matches
        </h2>
        <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '12px' }}>
          <p style={{ color: '#666' }}>No matches found for this club</p>
        </div>
      </section>
    </div>
  );
};
