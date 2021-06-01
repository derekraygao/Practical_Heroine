var {RolesMasterClass} = require("./RolesMasterClass.js");

class Marcus extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Marcus";
        this.alignment = "good";
        this.team = "heroes";

        this.berserk = "not activated";

	}; //end constructor


	//make sure transcendence is BEFORE berserk, otherwise it might
	//turn +6 into +3
	adjustVoteTranscendence(obj) {

		if (!this.inGame) { return 0; };

		//both Marcus + Princess need to be on the mission team
		if (!obj.pA[obj.rO.roles["Princess"].index].selectedForMission
			|| !obj.pA[this.index].selectedForMission) { return 0; };

		obj.pA[this.index].missionVote = 3;

	};



	activateBerserk() {

		this.berserk = "activated first half";

	};


	adjustVoteBerserk(obj) {

		if (!this.inGame) { return 0; };

		/* "activated second half" needs to be ABOVE "activated first half",
		because "activated first half" sets berserk to "activated second half"
		and so it will automatically run both if statements. */
		if (this.berserk == "activated second half") {

			obj.pA[this.index].missionVote = -6;

			this.berserk = "used";
		};


		if (this.berserk == "activated first half") {

			obj.pA[this.index].missionVote = 6;

			this.berserk = "activated second half";
		};


	}; //end berserk





}; //end class


module.exports = {
    Marcus
};