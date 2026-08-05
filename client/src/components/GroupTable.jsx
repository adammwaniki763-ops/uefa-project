import React from 'react';
import { StandingRow } from './StandingRow';

export const GroupTable = ({ groupName, standings }) => {
  return (
    <div className="group-table">
      <div className="group-table-header">
        {groupName}
      </div>
      <div className="group-table-content">
        <div className="standings-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: '5%' }}>Pos</th>
                <th style={{ width: '35%' }}>Team</th>
                <th style={{ width: '8%' }}>P</th>
                <th style={{ width: '8%' }}>W</th>
                <th style={{ width: '8%' }}>D</th>
                <th style={{ width: '8%' }}>L</th>
                <th style={{ width: '8%' }}>GF</th>
                <th style={{ width: '8%' }}>GA</th>
                <th style={{ width: '8%' }}>GD</th>
                <th style={{ width: '8%' }}>Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings && standings.map((standing, index) => (
                <StandingRow 
                  key={standing.id} 
                  standing={standing} 
                  position={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

