var {RolesMasterClass} = require("./RolesMasterClass.js");

class Lan extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Lan";
        this.alignment = "good";
        this.team = "heroes";

        this.isFinalHeavenActivated = false;
        this.finalHeavenCount = 0;
        this.intimidateTarget = "nobody chosen";


	}; //end constructor


	addIntimidateTarget(name) {

		this.intimidateTarget = name;

	};



	finalHeavenCountToVoteConverter() {

		switch(this.finalHeavenCount) {

			case 0:
				return -2;

			case 1:
				return 0.25;

			case 2:
				return 3;

			case 3:
				return 5;

			case 4:
				return 7;

			default:
				return 7;


		}; //end switch

	}; //end finalHeavenCountConverter()


	activateFinalHeaven() {

		this.isFinalHeavenActivated = true;

	};


	adjustMissionVotesLanFinalHeaven(obj) {

		if (!this.isFinalHeavenActivated) { return 0; };

		this.isFinalHeavenActivated = false;

		if (this.finalHeavenCount == 0) {

			obj.pA[this.index].missionVote = -2;
			this.finalHeavenCount += 1;

			return 0;

		};

		var finalHeavenMissionVote = 
		this.finalHeavenCountToVoteConverter();

		this.finalHeavenCount += 1;

		obj.pA[this.index].missionVote *= finalHeavenMissionVote;

	};


	//this goes inside Controller.setPlayerMissionVote()
	setPositiveFinalHeavenVotePower(obj) {

		var finalHeavenMissionVote = 
		this.finalHeavenCountToVoteConverter();

		this.finalHeavenCount += 1;

		obj.pA[this.index].missionVote = finalHeavenMissionVote;
		//return finalHeavenMissionVote;

	};

	//this goes inside Controller.setPlayerMissionVote()
	setNegativeFinalHeavenVotePower(obj) {

		var finalHeavenMissionVote = 
		this.finalHeavenCountToVoteConverter();

		//first time final heaven is used, vote must be -2
		if (this.finalHeavenCount != 0) {
			finalHeavenMissionVote *= -1;
		};

		this.finalHeavenCount += 1;

		obj.pA[this.index].missionVote = finalHeavenMissionVote;
		//return finalHeavenMissionVote;

	};


	beatRush(name, obj) {

		var ind = obj.pT[name];

		if (["Saintess", "Umbra Lord"].includes(obj.pA[ind].role)) { return 0; };

		obj.pA[ind].confused = true;


	};

	removeConfusedStatusAtEndOfRound(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			obj.pA[i].confused = false;

		};

	};


	_75PercentChanceTrue() {

		var ranNum = (Math.floor(Math.random() * 4) + 1);

		if (ranNum === 4) {
			return false;
		};

		return true;

	};


	adjustMissionVotesConfused(obj) {

		if (!this.inGame) { return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].confused) { continue; };

			if (this._75PercentChanceTrue()) {
				obj.pA[i].missionVote *= -1;
			};

		}; //end for


	}; //end adjustMissionVotesConfused(obj) 

	//don't really need to check if both players are on mission team
	//since intimidate only allows you to select on mission team...
	//but maybe if someone hacks...need to think about that
	adjustVoteSumIntimidate(voteSum, obj) {

		if (this.intimidateTarget == "nobody chosen") { return voteSum; };

		var intimidateInd = obj.pT[this.intimidateTarget];

		if (intimidateInd !== 0 && !intimidateInd) { return voteSum; };

		this.intimidateTarget = "nobody chosen";

		if (obj.pA[this.index].missionVote > 
			obj.pA[intimidateInd].missionVote) {

			voteSum += 1.5;

		} else {
			voteSum -= 1.5;
		};

		return voteSum;

	};



}; //end class Lan


module.exports = {
    Lan
};