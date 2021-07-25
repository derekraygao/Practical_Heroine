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


	activateFinalHeaven(obj) {

		this.isFinalHeavenActivated = true;

		var sysMess = {
						type: "power",
						message: ("Final Heaven's base "
							+ "mission voting power is: "
							+ this.finalHeavenCountToVoteConverter()
							+ ".")
					  };

		var stackObj = {
						type: "Individual",
						socketID: obj.pA[this.index].socketID,
						destination: "Add System Message",
						data: sysMess
					   };

		obj.stack.push(stackObj);

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

		this.messageHandler("Beat Rush", obj.pA[ind].socketID, obj);

	};

	//confused mission vote adjuster handled inside VoteAdjuster.js
	//confusion removed in AbilityManager



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

			this.messageHandler("Intimidate", 
								{"target": obj.pA[intimidateInd].name, result: "Success!"}, 
								obj);

		} else {

			voteSum -= 1.5;

			this.messageHandler("Intimidate", 
								{"target": obj.pA[intimidateInd].name, result: "Failure!"}, 
								obj);

		};


		return voteSum;

	}; //end adjustVoteSumIntimidate(voteSum, obj)



	messageHandler(power, data, obj) {

		if (power == "Beat Rush") {

			var sysMess = {
							type: "urgent",
							message: ("Lan rushes at you and beats you up! "
								+ "For this mission round only, "
								+ "you will suffer from 'Confusion'. There is "
								+ "a 75% chance your mission base voting power "
								+ "will be reversed.")
						  };

			var stackObj = {
							type: "SMI",
							socketID: data,
							data: sysMess
						   };

			obj.stack.push(stackObj);	



		} else if (power == "Intimidate") {

			var sysMess = {
							type: "power",
							message: ("Intimidation against "
								+ data.target + ": "
								+ data.result)
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);			

		};



	}; //end messageHandler




}; //end class Lan


module.exports = {
    Lan
};