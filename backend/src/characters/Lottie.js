var {RolesMasterClass} = require("./RolesMasterClass.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");
var {shuffle} = require("./shuffle.js");

class Lottie extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Lottie";
        this.alignment = "good";
        this.team = "heroes";

        this.therapy = "nobody chosen";
        this.groupHugActivated = false;

	}; //end constructor


	addTherapyTarget(name) {

		this.therapy = name;

	};


	activateGroupHug() {

		this.groupHugActivated = true;

	};


	setTherapyStatus(obj) {

		if (this.therapy == "nobody chosen") { return 0; };

		obj.pA[obj.pT[this.therapy]].therapy = true;

		this.therapy = "nobody chosen";

	};


	setGroupHugStatus(obj) {

		if (!this.groupHugActivated) { return 0; };

		//missionTeam is array of names 
		for (var i = 0; i < obj.rD.missionTeam.length; i++) {

			//changed it so group hug works for Lottie too
			//if (obj.rD.missionTeam[i] == this.name) { continue; };

			obj.pA[obj.pT[obj.rD.missionTeam[i]]].groupHug = true;

		}; //end for

		this.groupHugActivated = false;

	};


	adjustMissionVotesLottie(playerObj) {

		if (!this.inGame) { return 0; };

		if (playerObj.therapy) {

			playerObj.missionVote += 3.5;

		};

		if (playerObj.groupHug) {

			playerObj.missionVote += 1.25;

		};

	};



	adjustMissionVotesPrincessAndLottie(obj) {

		if (!this.inGame) { return 0; };

		var princessInd = obj.rO.roles["Princess"].index;

		if (obj.pA[princessInd].selectedForMission &&
			obj.pA[this.index].selectedForMission) {


			if (obj.pA[princessInd].missionVote < 0) {
				obj.pA[princessInd].missionVote *= -1;
			};

		}; //end if outer


	}; //end adjustMissionVotesPrincessAndLottie



	removeGroupHugAndTherapyAtEndOfRound(obj) {

		if (!this.inGame) { return 0; };
			
		for (var i = 0; i < obj.pA.length; i++) {

			obj.pA[i].therapy = false;
			obj.pA[i].groupHug = false;

		};

	};



	notifyJohnOfLottiesIdentity(obj) {

		if (!this.inGame) { return 0; };

		var lottieIdentity = [this.name];

		if (obj.rO.roles["Persequor"].inGame) {
			lottieIdentity.push(obj.rO.roles["Persequor"].name);

			shuffle(lottieIdentity);
		};

		var lottieIdentity = formatArrayIntoString(lottieIdentity);


		var sysMess = {
						type: "urgent",
						message: ("John! Lottie's "
							+ "identity is: " + lottieIdentity)
					  };

		var stackObj = {
						type: "SMI",
						socketID: obj.rO.roles["Princess"].socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);	

	}; //end notifyJohnOfLottiesIdentity()



}; //end class Lottie


module.exports = {
    Lottie
};