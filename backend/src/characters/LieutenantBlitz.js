var {RolesMasterClass} = require("./RolesMasterClass.js");
var {calculateNumberofTeamMembers} = require('./calculateNumberofTeamMembers.js');

class LieutenantBlitz extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Lieutenant Blitz";
        this.alignment = "evil";
        this.team = "villains";

	}; //end constructor



	//need to do *= to handle negative/positive vote
	adjustVotesBlitz(obj) {

	  if (!obj.rO.roles["Lieutenant Blitz"].inGame) { return 0; };

	  if (!obj.pA[obj.rO.roles["Lieutenant Blitz"].index].selectedForMission) { return 0;};
	 
	  obj.pA[obj.rO.roles["Lieutenant Blitz"].index].missionVote 
	  *= Math.ceil((calculateNumberofTeamMembers(obj.rD.missionNo, obj.pA.length))/2);
	
	};




}; //end class


module.exports = {
    LieutenantBlitz
};