import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const TournamentDetails = () => {
  const { id } = useParams();
  const { data: tournament, loading, error } = useFetch(`/api/tournaments/${id}`);

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <p>Loading tournament details...</p>
      </div>
    );
  }

  if (error || !tournament) {
    return (
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="alert alert-error">
          {error || 'Tournament not found'}
        </div>
        <Link to="/tournaments">
          <button className="btn btn-primary">Back to Tournaments</button>
        </Link>
      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/tournaments">
          <button className="btn btn-outline" style={{ marginBottom: '1rem' }}>
            ← Back to Tournaments
          </button>
        </Link>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#001a4d', marginBottom: '0.5rem' }}>
          🏆 {tournament.name}
        </h1>
      </div>

      {/* Tournament Info */}
      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="card-premium">
          <div className="card-header-premium">
            <h3>Tournament Information</h3>
          </div>
          <div className="card-body-premium">
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Season</p>
              <p style={{ fontSize: '1.3rem', fontWeight: '700' }}>{tournament.season}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Location</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>📍 {tournament.location}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Status</p>
              <span className={`tournament-card-status ${tournament.status.toLowerCase()}`}>
                {tournament.status}
              </span>
            </div>
          </div>
        </div>

        <div className="card-premium">
          <div className="card-header-premium">
            <h3>Dates</h3>
          </div>
          <div className="card-body-premium">
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Start Date</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>📅 {formatDate(tournament.start_date)}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>End Date</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>📅 {formatDate(tournament.end_date)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#001a4d' }}>
          🔗 Quick Links
        </h2>
        <div className="grid-4">
          <Link to="/groups" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium" style={{ textAlign: 'center' }}>
                <h3>📊 Groups</h3>
              </div>
              <div className="card-body-premium" style={{ textAlign: 'center' }}>
                <p>View group stage standings</p>
              </div>
            </div>
          </Link>

          <Link to="/fixtures" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium" style={{ textAlign: 'center' }}>
                <h3>📅 Fixtures</h3>
              </div>
              <div className="card-body-premium" style={{ textAlign: 'center' }}>
                <p>View all matches</p>
              </div>
            </div>
          </Link>

          <Link to="/standings" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium" style={{ textAlign: 'center' }}>
                <h3>🏅 Standings</h3>
              </div>
              <div className="card-body-premium" style={{ textAlign: 'center' }}>
                <p>View standings</p>
              </div>
            </div>
          </Link>

          <Link to="/knockout" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium" style={{ textAlign: 'center' }}>
                <h3>🎯 Knockout</h3>
              </div>
              <div className="card-body-premium" style={{ textAlign: 'center' }}>
                <p>View knockout bracket</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
