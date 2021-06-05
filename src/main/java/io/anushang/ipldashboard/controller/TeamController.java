package io.anushang.ipldashboard.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.anushang.ipldashboard.model.Team;
import io.anushang.ipldashboard.repository.MatchRepository;
import io.anushang.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
    
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;
    
    public TeamController(TeamRepository teamRepository,MatchRepository matchRepository) {
        this.matchRepository=matchRepository;
        this.teamRepository = teamRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
          Team team =  this.teamRepository.findByTeamName(teamName);
          team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName,4));
          
          return team;
    }

    

}
