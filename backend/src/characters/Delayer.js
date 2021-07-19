var {RolesMasterClass} = require("./RolesMasterClass.js");

class Delayer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Delayer";
        this.alignment = "evil";
        this.team = "villains";

        this.delayerCount = 0;

        this.powersHistory = 
        {
        	1: {"slowTarget": "nobody chosen"},
        	2: {"slowTarget": "nobody chosen"},
        	3: {"slowTarget": "nobody chosen"},
        	4: {"slowTarget": "nobody chosen"},
        	5: {"slowTarget": "nobody chosen"},
        	6: {"slowTarget": "nobody chosen"},
        	7: {"slowTarget": "nobody chosen"},
        };

	}; //end constructor



	stall(name, obj) {

		var slowInd = obj.pT[name];

		if (slowInd == undefined) { return 0; };

		this.powersHistory[obj.rD.missionNo].slowTarget = name;

		obj.pA[slowInd].slow = true;

		
		var sysMess = {
						type: "urgent",
						message: ("Time flows unceasingly, like a "
							+ "river with no end. Delayer's stall "
							+ "magic has inflicted you with the "
							+ "'slow' status. For this mission "
							+ "round only, your final voting power "
							+ "will be 0. However, that final voting "
							+ "power is not destroyed, but delayed. "
							+ "The next time you vote on a mission, "
							+ "that power x 1.5 will be added to your "
							+ "voting power!")
					  };

		var stackObj = {
						type: "SMI",
						socketID: obj.pA[slowInd].socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);

	};


	adjustMissionVotesSlow(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].slow) {

				obj.pA[i].slowCharge = (obj.pA[i].missionVote * 1.5);
				obj.pA[i].missionVote = 0;

			};

		};

	}; //end adjustMissionVotesSlow(obj)


	adjustMissionVotesSlowCharge(playerObj) {

		if (playerObj.slowCharge !== 0) {

			playerObj.missionVote += playerObj.slowCharge;

			playerObj.slowCharge = 0;

		};

	}; //end adjustMissionVotesSlowCharge(playerObj)


	removeSlowEffect(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			obj.pA[i].slow = false;

		};

	};




	isDelayerCountAbove0() {

		return ((this.delayerCount > 0) ? true : false);
	
	};


	increaseDelayerCountByOne(obj) {

		this.delayerCount += 1;

		var sysMess = {
						type: "power",
						message: ("Your delay counter is currently: "
							+ this.delayerCount)
					  };

		var stackObj = {
						type: "SMI",
						socketID: obj.pA[this.index].socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);

	};



	adjustDelayerTeamVote(obj) {

		if (!this.inGame) { return 0; };

		var amountToAdjust = 0;

		if ([5, 7, 9].includes(obj.pA.length)) {

			amountToAdjust = (0.333 * this.delayerCount);

		} else {

			amountToAdjust = (0.666 * this.delayerCount);

		};

		amountToAdjust = Math.round((amountToAdjust + Number.EPSILON) * 100) / 100;

		if (obj.pA[this.index].teamVote >= 0) {

			obj.pA[this.index].teamVote += amountToAdjust; 

		} else {

			obj.pA[this.index].teamVote -= amountToAdjust; 

		};


	}; //end adjustDelayerTeamVote


	//also resets delayerCount since he is chosen for Mission
	adjustDelayerMissionVote(obj) {

		if (!this.inGame) { return 0; };
		if (!obj.pA[this.index].selectedForMission) { return 0; };


		var amountToAdjust = (1.5 * this.delayerCount);

		if (obj.pA[this.index].missionVote >= 0) {

			obj.pA[this.index].missionVote += amountToAdjust;

		} else {

			obj.pA[this.index].missionVote -= amountToAdjust;

		};

		//reset count if chosen for mission team
		this.delayerCount = 0;


	}; //end adjustDelayerMissionVote


}; //end class


module.exports = {
    Delayer
};