club.jsx; import React, { useState } from 'react';
import { ClubCard } from '../components/ClubCard';
import { useFetch } from '../hooks/useFetch';

export const Clubs = () => {
  const { data: clubs, loading, error } = useFetch('/api/clubs');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('all');

  const filteredClubs = clubs?.filter(club => {
    const matchesSearch = club.club_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = filterCountry === 'all' || club.country === filterCountry;
    return matchesSearch && matchesCountry;
  }) || [];

  const countries = [...new Set(clubs?.map(c => c.country) || [])];

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#001a4d', marginBottom: '0.5rem' }}>
          ⚽ Clubs
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Browse all participating clubs
        </p>
      </div>

      {/* Search and Filter */}
      <div style={{ marginBottom: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div>
          <input
            type="text"
            className="form-input"
            placeholder="Search clubs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="form-select"
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          >
            <option value="all">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Loading clubs...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {/* Clubs Grid */}
      {!loading && filteredClubs.length > 0 ? (
        <div className="grid-3">
          {filteredClubs.map(club => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      ) : !loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            No clubs found matching your criteria
          </p>
        </div>
      ) : null}
    </div>
  );
};