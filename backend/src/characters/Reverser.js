var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Reverser extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Reverser";
        this.alignment = "evil";
        this.team = "villains";

        this.mirrorWorld = "not activated";

	}; //end constructor


	_50PercentChance() {

		var rndInt = (Math.floor(Math.random() * 2) + 1);

		return ( (rndInt == 1) ? false : true );

	};


	activateMirrorWorld() {

		if (this.mirrorWorld != "not activated") { return 0; };

		if (this._50PercentChance()) {
			this.mirrorWorld = "reverse";
		} else {
			this.mirrorWorld = "normal";
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



	reverseVote(name, obj) {

		var ind = obj.pT[name];
		if (!(ind > -1)) { return 0};

		obj.pA[ind].missionVote *= -1;

	};





}; //end class


module.exports = {
    Reverser
};