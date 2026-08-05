import React from 'react';

export const MatchCard = ({ match }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isCompleted = match.home_score !== null && match.away_score !== null;
  const cardClass = isCompleted ? 'completed' : 'upcoming';

  return (
    <div className={`match-card ${cardClass}`}>
      <span className="match-card-stage">{match.stage}</span>
      
      <div className="match-card-content">
        <div className="match-team">
          <div className="match-team-logo">⚽</div>
          <div className="match-team-name">{match.home_club_name}</div>
        </div>

        <div className="match-score">
          {isCompleted ? (
            <>
              <div className="match-score-value">{match.home_score}</div>
              <div className="match-score-vs">VS</div>
              <div className="match-score-value">{match.away_score}</div>
            </>
          ) : (
            <div className="match-score-vs">vs</div>
          )}
        </div>

        <div className="match-team">
          <div className="match-team-logo">⚽</div>
          <div className="match-team-name">{match.away_club_name}</div>
        </div>
      </div>

      <div className="match-date">
        📅 {formatDate(match.match_date)} | 📍 {match.venue}
      </div>
    </div>
  );
};
