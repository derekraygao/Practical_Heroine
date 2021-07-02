import { combineReducers } from 'redux';

import systemMessageReducer from './systemMessageReducer.js';
import gamePhaseReducer from './gamePhaseReducer.js';
import missionNumberReducer from './missionNumberReducer.js';
import playerNameReducer from './playerNameReducer.js';
import playerRoleReducer from './playerRoleReducer.js';
import listOfPlayersReducer from './listOfPlayersReducer.js';
import villainListReducer from './villainListReducer.js';
import missionTeamListReducer from './missionTeamListReducer.js';
import teamLeaderReducer from './teamLeaderReducer.js';
import teamVoteInfoReducer from './teamVoteInfoReducer.js';
import numberOfFailedTeamProposalsReducer from './numberOfFailedTeamProposalsReducer.js';
import missionVoteTabReducer from './missionVoteTabReducer.js';

import timerReducer from './timerReducer.js';

//this is your state object
export default combineReducers({
	
	systemMessageArray: systemMessageReducer,
	missionNumber: missionNumberReducer,
	gamePhase: gamePhaseReducer,
	name: playerNameReducer,
	role: playerRoleReducer,
	playerList: listOfPlayersReducer,
	villainList: villainListReducer,
	teamLeader: teamLeaderReducer,
	missionTeam: missionTeamListReducer,
	teamVoteInfo: teamVoteInfoReducer,
	failedProposals: numberOfFailedTeamProposalsReducer,
	missionVoteTab: missionVoteTabReducer, 
	timer: timerReducer,

});