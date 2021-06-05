import React, { useEffect } from 'react'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'

export const TeamPage=() => {
  
  useEffect(
    () => {
      const fetchMatches = async () =>{
            const respone =await fetch('http://0.0.0.0:8080/team/Chennai%20Super%20Kings');
            const data=await respone.json();
            console.log(data);

      };
      fetchMatches();
    }
  );

  return (
    <div className="TeamPage">
      <h1>Rajasthan Royals</h1>
     <MatchDetailCard/>
     <MatchSmallCard/>
     <MatchSmallCard/>
     <MatchSmallCard/>
     
    </div>
  );
}

