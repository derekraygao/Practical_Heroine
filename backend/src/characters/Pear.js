var {RolesMasterClass} = require("./RolesMasterClass.js");

class Pear extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Pear";
        this.alignment = "good";
        this.team = "heroes";

        //player's name to expose
        this.voteToExpose = "nobody chosen";

        this.playerVoteToVanish = "nobody chosen";


	}; //end constructor



	spyOn(name) {

		this.voteToExpose = name;

	};


	expose(obj) {

		if (this.voteToExpose == "nobody chosen") 
			{ return "expose power not used"; };

		var exposeVoteInfo = 

		{
			name: this.voteToExpose,
			vote: obj.pA[obj.pT[this.voteToExpose]].missionVote
		};

		this.voteToExpose = "nobody chosen";

		return exposeVoteInfo;

	};


	vanish(name) {

		this.playerVoteToVanish = name;

	};


	adjustMissionVoteVanish(obj) {

		if (this.playerVoteToVanish == "nobody chosen") { return 0; };

		var vanishInd = obj.pT[this.playerVoteToVanish];

		obj.pA[vanishInd].missionVote = 0;

		//this is reset in another function
		//this.playerVoteToVanish = "nobody chosen";

	};


	/*inside AbilityManager
		Reason this is inside AbilityManager and not inside
		adjustMissionVotesVanish is because Persequor ability 
		comes after and Persequor copycat checks if persequor
		was the target of vanish. If she is, then she sets her
		copycat vote to 0, since vanish is supposed to take effect
		AFTER copycat, but we can't put it after copycat cause 
		copycat needs to copy someone else's vote. What if the 
		copied person was the target of vanish then???
	*/
	resetVanishVoteTarget() {

		this.playerVoteToVanish = "nobody chosen";

	};


}; //end class


module.exports = {
    Pear
};