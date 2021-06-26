import React, { useEffect, useState } from 'react'
import { TeamTile } from '../components/TeamTile';

import './HomePage.scss'
export const HomePage = () => {

  const [teams, setTeams] = useState([]);
  useEffect(
    () => {
      const fetchAllTeams = async () => {
        const respone = await fetch(`http://0.0.0.0:8080/team/`);
        const data = await respone.json();
        setTeams(data);

      };
      fetchAllTeams();
    }, [] // brackets define when useEffect changes useeffect
  )
  

  return (
    <div className="HomePage">
      <div className="header-section">
          <h1 className="app-name">IPL Dashboard</h1>
      </div>
    <div className="team-grid">
        {teams.map(team => <TeamTile teamName={team.teamName}/>)}
    </div>
    </div>
  );
}

