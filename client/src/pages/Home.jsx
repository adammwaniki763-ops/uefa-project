import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TournamentCard } from '../components/TournamentCard';
import { MatchCard } from '../components/MatchCard';
import { useFetch } from '../hooks/useFetch';

export const Home = () => {
  const { data: tournaments } = useFetch('/api/tournaments');
  const { data: matches } = useFetch('/api/matches');

  const upcomingMatches = matches?.filter(m => !m.home_score) || [];
  const recentMatches = matches?.filter(m => m.home_score)?.slice(0, 3) || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>⚽ Champions League Tournament Manager</h1>
          <p>Experience the ultimate football tournament management system inspired by UEFA Champions League</p>
          <div className="hero-cta">
            <Link to="/tournaments">
              <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
                View Tournaments
              </button>
            </Link>
            <Link to="/clubs">
              <button className="btn btn-outline" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
                Browse Clubs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Featured Tournaments */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#001a4d' }}>
            🏆 Featured Tournaments
          </h2>
          <div className="grid-3">
            {tournaments?.slice(0, 3).map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
          {tournaments?.length > 3 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link to="/tournaments">
                <button className="btn btn-primary">View All Tournaments</button>
              </Link>
            </div>
          )}
        </section>

        {/* Upcoming Matches */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#001a4d' }}>
            📅 Upcoming Matches
          </h2>
          {upcomingMatches.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {upcomingMatches.slice(0, 6).map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '12px' }}>
              <p style={{ color: '#666' }}>No upcoming matches scheduled</p>
            </div>
          )}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/fixtures">
              <button className="btn btn-primary">View All Fixtures</button>
            </Link>
          </div>
        </section>

        {/* Recent Results */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#001a4d' }}>
            ✅ Recent Results
          </h2>
          {recentMatches.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {recentMatches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '12px' }}>
              <p style={{ color: '#666' }}>No completed matches yet</p>
            </div>
          )}
        </section>

        {/* Quick Stats */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#001a4d' }}>
            📊 Quick Stats
          </h2>
          <div className="dashboard-grid">
            <div className="dashboard-card featured">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
              <div className="dashboard-card-title">Total Tournaments</div>
              <div className="dashboard-card-value">{tournaments?.length || 0}</div>
            </div>
            <div className="dashboard-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚽</div>
              <div className="dashboard-card-title">Total Matches</div>
              <div className="dashboard-card-value">{matches?.length || 0}</div>
            </div>
            <div className="dashboard-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
              <div className="dashboard-card-title">Completed</div>
              <div className="dashboard-card-value">{matches?.filter(m => m.home_score).length || 0}</div>
            </div>
            <div className="dashboard-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
              <div className="dashboard-card-title">Upcoming</div>
              <div className="dashboard-card-value">{upcomingMatches.length || 0}</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #001a4d 0%, #0066cc 100%)',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '12px',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Join the Action?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Create an account to manage tournaments and follow your favorite clubs
          </p>
          <Link to="/register">
            <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
              Get Started Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};
