import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'

export const TeamPage=() => {
  
  const[team,setTeam] = useState({ matches:[]});
  
  useEffect(
    () => {
      const fetchMatches = async () =>{
            const respone =await fetch('http://0.0.0.0:8080/team/Chennai Super Kings');
            const data=await respone.json();
            console.log(data);
            setTeam(data);

      };
      fetchMatches();
    },[] // brackets cuz infinite loop of useeffect
  )

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
     <MatchDetailCard match={team.matches[0]}/>
     {team.matches.slice(1).map(match=><MatchSmallCard match={match}/>)}
     
     
     
    </div>
  );
}

