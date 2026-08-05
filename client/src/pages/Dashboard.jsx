import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { DashboardCard } from '../components/DashboardCard';
import { useFetch } from '../hooks/useFetch';
import { MatchCard } from '../components/MatchCard';

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: tournaments } = useFetch('/api/tournaments');
  const { data: clubs } = useFetch('/api/clubs');
  const { data: matches } = useFetch('/api/matches');

  const upcomingMatches = matches?.filter(m => !m.home_score)?.slice(0, 5) || [];
  const completedMatches = matches?.filter(m => m.home_score)?.length || 0;

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#001a4d', marginBottom: '0.5rem' }}>
          Welcome back, {user?.username}! 👋
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Here's your tournament management dashboard
        </p>
      </div>

      {/* Quick Stats */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#001a4d' }}>
          📊 Quick Statistics
        </h2>
        <div className="dashboard-grid">
          <DashboardCard
            title="Total Tournaments"
            value={tournaments?.length || 0}
            icon="🏆"
            featured
          />
          <DashboardCard
            title="Total Clubs"
            value={clubs?.length || 0}
            icon="⚽"
          />
          <DashboardCard
            title="Total Matches"
            value={matches?.length || 0}
            icon="📅"
          />
          <DashboardCard
            title="Completed Matches"
            value={completedMatches}
            icon="✅"
          />
        </div>
      </section>

      {/* Upcoming Matches */}
      <section style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#001a4d' }}>
            📅 Upcoming Matches
          </h2>
          <Link to="/fixtures">
            <button className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
              View All
            </button>
          </Link>
        </div>
        {upcomingMatches.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {upcomingMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '12px' }}>
            <p style={{ color: '#666' }}>No upcoming matches</p>
          </div>
        )}
      </section>

      {/* Management Sections */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#001a4d' }}>
          🔧 Management Tools
        </h2>
        <div className="grid-3">
          <Link to="/tournaments" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium">
                <h3>🏆 Tournaments</h3>
              </div>
              <div className="card-body-premium">
                <p>Manage and view all tournaments</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Go to Tournaments
                </button>
              </div>
            </div>
          </Link>

          <Link to="/clubs" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium">
                <h3>⚽ Clubs</h3>
              </div>
              <div className="card-body-premium">
                <p>Browse and manage participating clubs</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Go to Clubs
                </button>
              </div>
            </div>
          </Link>

          <Link to="/standings" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium">
                <h3>📊 Standings</h3>
              </div>
              <div className="card-body-premium">
                <p>View group standings and rankings</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Go to Standings
                </button>
              </div>
            </div>
          </Link>

          <Link to="/fixtures" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium">
                <h3>📅 Fixtures</h3>
              </div>
              <div className="card-body-premium">
                <p>View all matches and results</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Go to Fixtures
                </button>
              </div>
            </div>
          </Link>

          <Link to="/knockout" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium">
                <h3>🎯 Knockout</h3>
              </div>
              <div className="card-body-premium">
                <p>View knockout bracket progression</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Go to Knockout
                </button>
              </div>
            </div>
          </Link>

          <Link to="/statistics" style={{ textDecoration: 'none' }}>
            <div className="card-premium">
              <div className="card-header-premium">
                <h3>📈 Statistics</h3>
              </div>
              <div className="card-body-premium">
                <p>View tournament statistics</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Go to Statistics
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
