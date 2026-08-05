import React from 'react';
import { Link } from 'react-router-dom';

export const ClubCard = ({ club }) => {
  // Generate a consistent emoji for each club based on its ID
  const getClubEmoji = (id) => {
    const emojis = ['⚪', '🔴', '🔵', '🟡', '🟢', '🟣', '🟠', '⬛', '⬜', '🟥'];
    return emojis[id % emojis.length];
  };

  return (
    <Link to={`/clubs/${club.id}`} style={{ textDecoration: 'none' }}>
      <div className="club-card">
        <div className="club-card-logo">
          {getClubEmoji(club.id)}
        </div>
        <div className="club-card-content">
          <h3 className="club-card-name">{club.club_name}</h3>
          <p className="club-card-info">🌍 {club.country}</p>
          <p className="club-card-info">👨‍💼 {club.coach}</p>
          <p className="club-card-info">🏟️ {club.stadium}</p>
        </div>
      </div>
    </Link>
  );
};
