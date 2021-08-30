var {RolesMasterClass} = require("./RolesMasterClass.js");



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



	BlitzBVP(obj) {

		var missionTeamSize = obj.rD.missionTeam.length;

		switch (missionTeamSize) {

			case 2:
				return 1.5;

			case 3:
				return 2;

			case 4:
				return 2.5;

			case 5:
				return 3;

			case 6:
				return 3.5;

			case 7:
				return 4;

			case 1: /*team size cannot be 1, but just in case */
				return 1;

			default: 
				return 4;

		}; //end switch

	}; //end BlitzBVP


	//need to do *= to handle negative/positive vote
	adjustVotesBlitz(obj) {
		
	  if (!this.inGame) { return 0; };

	  if (!obj.pA[this.index].selectedForMission) { return 0;};
	 
	  obj.pA[this.index].missionVote *= this.BlitzBVP(obj);
	
	};


	setUnitedStatesOfSmashTarget(target, obj) {

		var pObj = obj.pA[obj.pT[target]];

		if (["Umbra Lord", "Saintess"].includes(pObj.role)) {
			return 0;
		};

		
		var statusObj = {
						 "caster": this.name,
						 "target": target,
						 "effect": "Injury",
						};

		obj.sE.push(statusObj);

		//to notify target he/she was smashed!
		this.messageHandler(obj, pObj.socketID);

	}; //end setUnitedStatesOfSmashTarget



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
							message: ("Lieutenant Blitz: United States of Smash! BAM! POW! Weakling! After suffering the might of my awesome punch, you have been inflicted with the 'Injury' status. Starting Mission/Round " + (obj.rD.missionNo + 1) + ", and for 2 whole rounds, your mission B.V.P. will be reduced to 0!")
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