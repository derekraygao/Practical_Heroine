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


	//votingArray is [{name: "Derek", vote: 5}]
	getFinalVotePowerFromVotingArray(name, arr) {

		var forLength = arr.length;

		for (var i = 0; i < forLength; i++) {

			if (arr[i].name == name) {
				return arr[i].vote;
			};

		};

		return "Nothing";

	};


	getGossipInfo(target, obj) {

		var missionInfo = obj.rI.missionInfo;
		var votePowerHistory = [];
		var currentMissionNo = obj.rD.missionNo;
		var votePower;

		//start at Mission 1 and end at current Mission - 1
		for (var i = 1; i < currentMissionNo; i++) {

			votePower = this.getFinalVotePowerFromVotingArray(
				target, missionInfo[i].votingArray
			);


			if (votePower == "Nothing") { continue; };
			

			votePowerHistory.push(votePower);

		};


		if (votePowerHistory.length == 0) {
			
			this.messageHandler(target, "No Voting History", obj);

			return 0;

		};


		shuffle(votePowerHistory);

		votePowerHistory = formatArrayIntoString(votePowerHistory);

		this.messageHandler(target, votePowerHistory, obj);


	}; //end getGossipInfo(target, obj)




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



	messageHandler(target, voteString, obj) {

		var sysMess = {
						type: "power",
						message: ("I have it on good authority that Countess Rozecraft fakes her Alshani accent. Hmm? Oh. " + target + "'s voting power history is: " + voteString + ".")
					  };

		var stackObj = {
						type: "SMI",
						socketID: this.socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);			

	};



}; //end class Lottie


module.exports = {
    Lottie
};