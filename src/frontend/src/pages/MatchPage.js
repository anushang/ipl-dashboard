import React, { useEffect, useState } from 'react'
import { MatchDetailCard } from '../components/MatchDetailCard'
import { MatchSmallCard } from '../components/MatchSmallCard'
import { useParams } from 'react-router-dom'

export const TeamPage = () => {

  if (!team || !team.teamName) {
    return <h1>Team Not Found!</h1>
  }

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard  teamName={team.teamName}  match={team.matches[0]} />
      {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName}   match={match}  />)}
    </div>
  );
}

