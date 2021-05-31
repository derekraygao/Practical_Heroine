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
	adjustVotesBlitz(vote, playerObject, obj) {

	  if (playerObject.role == "Lieutenant Blitz") {
	    vote *= Math.ceil((calculateNumberofTeamMembers(obj.rD.missionNo, obj.pA.length))/2);
	  };

	  return vote;

	};




}; //end class


module.exports = {
    LieutenantBlitz
};