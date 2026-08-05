import React from 'react';

export const StandingRow = ({ standing, position }) => {
  const getMedalEmoji = (position) => {
    if (position === 1) return '🥇';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return '  ';
  };

  return (
    <tr>
      <td>
        <span className="standings-position">
          {getMedalEmoji(position)} {position}
        </span>
      </td>
      <td>
        <div className="standings-team">
          <span className="standings-team-logo">⚽</span>
          <span className="standings-team-name">{standing.club_name}</span>
        </div>
      </td>
      <td>{standing.matches_played}</td>
      <td>{standing.wins}</td>
      <td>{standing.draws}</td>
      <td>{standing.losses}</td>
      <td>{standing.goals_for}</td>
      <td>{standing.goals_against}</td>
      <td>
        <span style={{ 
          color: standing.goal_difference > 0 ? '#28a745' : standing.goal_difference < 0 ? '#dc3545' : '#666',
          fontWeight: '600'
        }}>
          {standing.goal_difference > 0 ? '+' : ''}{standing.goal_difference}
        </span>
      </td>
      <td style={{ fontWeight: '700', color: '#0066cc' }}>
        {standing.points}
      </td>
    </tr>
  );
};
