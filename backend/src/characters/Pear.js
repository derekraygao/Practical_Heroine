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




}; //end class


module.exports = {
    Pear
};