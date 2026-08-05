import React, { useState } from 'react';
import { MatchCard } from '../components/MatchCard';
import { useFetch } from '../hooks/useFetch';

export const Fixtures = () => {
  const { data: matches, loading, error } = useFetch('/api/matches');
  const [filter, setFilter] = useState('all');

  const upcomingMatches = matches?.filter(m => !m.home_score) || [];
  const completedMatches = matches?.filter(m => m.home_score) || [];

  const displayMatches = filter === 'all' ? matches : 
                         filter === 'upcoming' ? upcomingMatches : 
                         completedMatches;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#001a4d', marginBottom: '0.5rem' }}>
          📅 Fixtures & Results
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          View all matches and their results
        </p>
      </div>

      {/* Filter */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('all')}
        >
          All Matches ({matches?.length || 0})
        </button>
        <button
          className={`btn ${filter === 'upcoming' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming ({upcomingMatches.length})
        </button>
        <button
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedMatches.length})
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading fixtures...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {/* Matches Grid */}
      {!loading && displayMatches && displayMatches.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {displayMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      ) : !loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            No matches found
          </p>
        </div>
      ) : null}
    </div>
  );
};
