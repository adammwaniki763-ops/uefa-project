import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Champions League
        </Link>

        <ul className="navbar-nav">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/tournaments" className={isActive('/tournaments')}>Tournaments</Link></li>
          <li><Link to="/clubs" className={isActive('/clubs')}>Clubs</Link></li>
          <li><Link to="/fixtures" className={isActive('/fixtures')}>Fixtures</Link></li>
          <li><Link to="/standings" className={isActive('/standings')}>Standings</Link></li>
          <li><Link to="/statistics" className={isActive('/statistics')}>Statistics</Link></li>
        </ul>

        <div className="navbar-user">
          {user ? (
            <>
              <div className="navbar-user-info">
                <span>👤</span>
                <span className="navbar-user-name">{user.username}</span>
              </div>
              <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
              <button className="navbar-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={isActive('/login')}>Login</Link>
              <Link to="/register" className={isActive('/register')}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
