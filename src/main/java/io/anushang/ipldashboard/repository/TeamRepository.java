package io.anushang.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.anushang.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team,Long> {
    Team findByTeamName(String  teamName);  
}
