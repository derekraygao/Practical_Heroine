var {RolesMasterClass} = require("./RolesMasterClass.js");

class Delayer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Delayer";
        this.alignment = "evil";
        this.team = "villains";

        this.delayerCount = 0;

	}; //end constructor


	adjustDelayerTeamVote(obj) {

		if (!obj.rO.roles["Delayer"].inGame) { return 0; };

		var delayerIndex = obj.rO.roles["Delayer"].index;
		if (delayerIndex == -1) { return 0; };

		var amountToAdjust = 0;

		if ([5, 7, 9].includes(obj.pA.length)) {

			amountToAdjust = (0.333 * this.delayerCount);

		} else {

			amountToAdjust = (0.666 * this.delayerCount);

		};

		amountToAdjust = Math.round((amountToAdjust + Number.EPSILON) * 100) / 100;

		if (obj.pA[delayerIndex].teamVote >= 0) {

			obj.pA[delayerIndex].teamVote += amountToAdjust; 

		} else {

			obj.pA[delayerIndex].teamVote -= amountToAdjust; 

		};


	}; //end adjustDelayerTeamVote


	//also resets delayerCount since he is chosen for Mission
	adjustDelayerMissionVote(obj) {

		if (!obj.rO.roles["Delayer"].inGame) { return 0; };

		var delayerIndex = obj.rO.roles["Delayer"].index;
		if (delayerIndex == -1) { return 0; };

		if (!obj.pA[delayerIndex].selectedForMission) { return 0; };


		var amountToAdjust = (1.5 * this.delayerCount);

		if (obj.pA[delayerIndex].missionVote >= 0) {

			obj.pA[delayerIndex].missionVote += amountToAdjust;

		} else {

			obj.pA[delayerIndex].missionVote -= amountToAdjust;

		};

		//reset count if chosen for mission team
		this.delayerCount = 0;


	}; //end adjustDelayerMissionVote


}; //end class


module.exports = {
    Delayer
};