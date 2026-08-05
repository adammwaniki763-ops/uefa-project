app.jsx ; import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';

// Pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Clubs } from './pages/Clubs';
import { ClubDetails } from './pages/ClubDetails';
import { Tournaments } from './pages/Tournaments';
import { TournamentDetails } from './pages/TournamentDetails';
import { Groups } from './pages/Groups';
import { Fixtures } from './pages/Fixtures';
import { Standings } from './pages/Standings';
import { Knockout } from './pages/Knockout';
import { Statistics } from './pages/Statistics';
import { NotFound } from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Navbar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/clubs/:id" element={<ClubDetails />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/tournaments/:id" element={<TournamentDetails />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/standings" element={<Standings />} />
              <Route path="/knockout" element={<Knockout />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;