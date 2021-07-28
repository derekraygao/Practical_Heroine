var {RolesMasterClass} = require("./RolesMasterClass.js");
var {calculateNumberofTeamMembers} = require('./calculateNumberofTeamMembers.js');

class LieutenantBlitz extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Lieutenant Blitz";
        this.alignment = "evil";
        this.team = "villains";

        this.powersHistory = {
        						1: {"USOS": "nobody chosen"},
        						2: {"USOS": "nobody chosen"},
        						3: {"USOS": "nobody chosen"},
        						4: {"USOS": "nobody chosen"},
        						5: {"USOS": "nobody chosen"},
        						6: {"USOS": "nobody chosen"},
        						7: {"USOS": "nobody chosen"},
        					 };

	}; //end constructor



	//need to do *= to handle negative/positive vote
	adjustVotesBlitz(obj) {

	  if (!this.inGame) { return 0; };

	  if (!obj.pA[this.index].selectedForMission) { return 0;};
	 
	  obj.pA[this.index].missionVote 
	  *= Math.ceil((calculateNumberofTeamMembers(obj.rD.missionNo, obj.pA.length))/2);
	
	};


	setUnitedStatesOfSmashTarget(name, obj) {

		var ind = obj.pT[name];
		if (ind == undefined) { return 0; };

		if (["Umbra Lord", "Saintess"].includes(obj.pA[ind].role)) {
			return 0;
		};

		this.powersHistory[obj.rD.missionNo]["USOS"] = name;

	};


	adjustMissionVotesInjured(playerObj) {

		if (playerObj.injuredCount > 0) {

			playerObj.missionVote = 0;

		};

	}; //end adjustMissionVotesInjured(obj)


	updateInjuredStatus(obj) {

		if (!this.inGame) { return 0; };

		var usosInd = obj.pT[this.powersHistory[obj.rD.missionNo]["USOS"]];

		if (usosInd !== undefined) {

			obj.pA[usosInd].injuredCount += 2;

			this.messageHandler(obj, obj.pA[usosInd].socketID);

		};


	}; //end updateInjuredStatus(obj)



	messageHandler(obj, socketID) {

			var sysMess = {
							type: "urgent",
							message: ("United States of Smash! BAM! POW! "
								+ "You see stars as Lt. Blitz smashes into you, "
								+ "inflicting the 'Injury' status. Starting next "
								+ "mission round and for 2 rounds, your " 
								+ "base voting power is reduced to 0!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	

	};



}; //end class


module.exports = {
    LieutenantBlitz
};