var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Reverser extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Reverser";
        this.alignment = "evil";
        this.team = "villains";

        this.personToReverseVote = "nobody chosen";

        this.mirrorWorldNormal = "not activated";
        this.mirrorWorldReverse = "not activated";

        //this.mirrorWorld = "not activated";

	}; //end constructor


	/*
	_50PercentChance() {

		var rndInt = (Math.floor(Math.random() * 2) + 1);

		return ( (rndInt == 1) ? false : true );

	};


	activateMirrorWorld() {

		if (this.mirrorWorld != "not activated") { return 0; };

		if (this._50PercentChance()) {
			this.mirrorWorld = "reverse";
			console.log("mirror world is reversed");
		} else {
			this.mirrorWorld = "normal";
			console.log("mirror world is normal");
		};

	};
	

	adjustVotesMirrorWorld(obj) {

		if (!this.inGame) { return 0; };
		if (this.mirrorWorld == "not activated") { return 0; };

		var multiplier = (this.mirrorWorld == "reverse" ? -1 : 1);

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			obj.pA[i].missionVote *= multiplier;

		};

	}; //end adjustVotesMirrorWorld(obj)
	
	*/

	activateMirrorWorld(type) {

		if (type === "Reverse") {
			console.log("reversed");
			this.mirrorWorldReverse = "activated";

		} else if (type === "Normal") {
			console.log("normal");
			this.mirrorWorldNormal = "activated";

		};

	};


	adjustVotesMirrorWorld(obj) {

		if (!this.inGame) { return 0; };


		if (this.mirrorWorldNormal == "activated") {

			this.mirrorWorldNormal = "used";

		}; //end if mirrorWorldNormal


		if (this.mirrorWorldReverse == "activated") {

			this.mirrorWorldReverse = "used";

			for (var i = 0; i < obj.pA.length; i++) {

				if (!obj.pA[i].selectedForMission) { continue; };

				obj.pA[i].missionVote *= -1;

			}; //end for

		}; //end if mirrorWorldReverse
		

	}; //end adjustVotesMirrorWorld(obj)




	reverseVote(name) {

		this.personToReverseVote = name;

	};


	//don't need to check if on mission or in game, cause your only
	//choices are fellow mission teammates and you can only
	//change this.personToReverseVote if reverser is in game
	adjustReverseVote(obj) {

		if (this.personToReverseVote == "nobody chosen") { return 0; };

		var reverseInd = obj.pT[this.personToReverseVote];
		if (reverseInd == undefined) { return 0; };

		obj.pA[reverseInd].missionVote *= -1;
		
		this.personToReverseVote = "nobody chosen";

	};



	useReverserTrickRoom(obj) {

		if (!this.inGame) { return false; };

		if (obj.pA[this.index].selectedForMission) {
			return true;
		};	

		return false;

	}; //useReverseTrickRoom



	wasMirrorWorldAlreadyUsed(type) {

		if (type === "Normal") {

			if (this.mirrorWorldNormal == "used") {
				return true;
			};

		} else if (type === "Reverse") {

			if (this.mirrorWorldReverse == "used") {
				return true;
			};

		} else {

			return false;

		};


	}; //end wasMirrorWorldAlreadyUsed




}; //end class


module.exports = {
    Reverser
};