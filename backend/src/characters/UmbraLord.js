var {RolesMasterClass} = require("./RolesMasterClass.js");

class UmbraLord extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Umbra Lord";
        this.alignment = "unknown";
        this.team = "villains";

        this.bide = 0;
        this.isMeteorActivated = false;

        this.absoluteTeamVoteYesUsed = "No"; //when demonLord uses powers, set to "Yes", then after vote calculation, set to "Used"
        this.absoluteTeamVoteNoUsed = "No";

        this.devilConversionChoice = "nobody was chosen XX";

	}; //end constructor


	//power fails if Evil has won two missions
	useAbsoluteTeamYesPower(obj) {

		if (obj.rI.didEvilWinTwoMissions()) { return 0; };

		this.absoluteTeamVoteYesUsed = "Yes";
	};


	useAbsoluteTeamNoPower() {
		this.absoluteTeamVoteNoUsed = "Yes";
	};



	adjustVotesWithUmbraLordAbsolutePower(vote) {

		if (this.absoluteTeamVoteYesUsed == "Yes") {

			this.absoluteTeamVoteYesUsed = "Used";

			return 100;

		} else if (this.absoluteTeamVoteNoUsed == "Yes") {

			this.absoluteTeamVoteNoUsed = "Used";

			return -100;

		} else {

			return vote;
		};


	}; //end adjustVotesWithUmbraLordAbsolutePower


	corrupt(name, obj) {

		var index = obj.pT[name];
		if (obj.pA[index].role == "Saintess") { return 0; };

		//this.devilConversionChoice = name;
		obj.pA[index].corrupted = true;

	};


	isPlayerDevilized(name) {

		return ((name == this.devilConversionChoice) ? true : false); 

	};


	bidePower(obj) {

		this.bide += 2;


		var sysMess = {
						type: "power",
						message: ("Your bide holds a charge "
							+ "of " + this.bide + ".")
					  };

		var stackObj = {
						type: "Individual",
						socketID: obj.pA[this.index].socketID,
						destination: "Add System Message",
						data: sysMess
					   };

		obj.stack.push(stackObj);


	};


	activateMeteor() {

		this.isMeteorActivated = true;

	};


	adjustMissionVotesBideMeteor(obj) {

		if (!this.isMeteorActivated) { return 0; };

		if (obj.pA[this.index].missionVote >= 0) {

			obj.pA[this.index].missionVote += this.bide;

		} else {
			obj.pA[this.index].missionVote -= this.bide;
		};

		this.bide = 0;
		this.isMeteorActivated = false; 

	}; //end adjustMissionVotesMeteor()


	/*
	adjustMissionVotesDevilized(obj) {

		if (!obj.pT[this.devilConversionChoice]) { return 0; };

		if (!obj.pA[obj.pT[this.devilConversionChoice]].selectedForMission) 
		{ return 0; };

		obj.pA[obj.pT[this.devilConversionChoice]].missionVote *= -1;

	};
	*/

	adjustMissionVotesCorrupted(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].corrupted) {
				obj.pA[i].missionVote *= -1;
			};

		}; //end for

	}; //end adjustMissionVotesCorrupted


	//since it only works on negative votes, needs to be math.floor
	adjustVotesShadowDomain(vote, obj) {

		if (!obj.pA[this.index].selectedForMission) { return vote; };

		return (Math.floor(vote * 1.5));

	};


	/*
	adjustMissionVotesDevilized(playerObj) {

		if (!playerObj.devilized) { return 0; };

		playerObj.missionVote *= -1;

	}; */



	wasAbsolutePowerYesAlreadyUsed() {
		return ( (this.absoluteTeamVoteYesUsed == "Used") ? true : false );
	};

	wasAbsolutePowerNoAlreadyUsed() {
		return ( (this.absoluteTeamVoteNoUsed == "Used") ? true : false );
	};


}; //end class


module.exports = {
    UmbraLord
};