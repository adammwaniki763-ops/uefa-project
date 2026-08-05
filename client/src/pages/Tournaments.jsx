import React, { useState } from 'react';
import { TournamentCard } from '../components/TournamentCard';
import { useFetch } from '../hooks/useFetch';

export const Tournaments = () => {
  const { data: tournaments, loading, error } = useFetch('/api/tournaments');
  const [filter, setFilter] = useState('all');

  const filteredTournaments = tournaments?.filter(t => {
    if (filter === 'all') return true;
    return t.status.toLowerCase() === filter;
  }) || [];

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#001a4d', marginBottom: '0.5rem' }}>
          🏆 Tournaments
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Browse and manage all football tournaments
        </p>
      </div>

      {/* Filter */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('all')}
        >
          All Tournaments
        </button>
        <button
          className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading tournaments...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {/* Tournaments Grid */}
      {!loading && filteredTournaments.length > 0 ? (
        <div className="grid-3">
          {filteredTournaments.map(tournament => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      ) : !loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            No tournaments found. Check back soon!
          </p>
        </div>
      ) : null}
    </div>
  );
};

