import React from 'react';
import { GroupTable } from '../components/GroupTable';
import { useFetch } from '../hooks/useFetch';

export const Groups = () => {
  const { data: groups, loading, error } = useFetch('/api/groups');
  const { data: standings } = useFetch('/api/standings');

  // Group standings by group_id
  const groupedStandings = standings?.reduce((acc, standing) => {
    if (!acc[standing.group_id]) {
      acc[standing.group_id] = [];
    }
    acc[standing.group_id].push(standing);
    return acc;
  }, {}) || {};

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#001a4d', marginBottom: '0.5rem' }}>
          📊 Group Stage
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          View group standings and team rankings
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading groups...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {/* Groups */}
      {!loading && groups && groups.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '2rem' }}>
          {groups.map(group => (
            <GroupTable
              key={group.id}
              groupName={group.group_name}
              standings={groupedStandings[group.id] || []}
            />
          ))}
        </div>
      ) : !loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            No groups found
          </p>
        </div>
      ) : null}

      {/* Legend */}
      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ marginBottom: '1rem', color: '#001a4d' }}>📋 Legend</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>P = Matches Played</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>W = Wins</p>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>D = Draws</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>L = Losses</p>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>GF = Goals For</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>GA = Goals Against</p>
          </div>
          <div>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>GD = Goal Difference</p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Pts = Points</p>
          </div>
        </div>
      </div>
    </div>
  );
};
