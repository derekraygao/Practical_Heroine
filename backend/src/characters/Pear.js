var {RolesMasterClass} = require("./RolesMasterClass.js");

class Pear extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Pear";
        this.alignment = "good";
        this.team = "heroes";

        //player's name to expose
        this.voteToExpose = "none";


	}; //end constructor



	spyOn(name) {

		this.voteToExpose = name;

	};


	expose(obj) {

		if (this.voteToExpose == "none") 
			{ return "expose power not used"; };

		var exposeVoteInfo = 

		{
			name: this.voteToExpose,
			vote: obj.pA[obj.pT[this.voteToExpose]].missionVote
		};

		this.voteToExpose = "none";

		return exposeVoteInfo;

	};


	vanish(name, obj) {

		obj.pA[obj.pT[name]].invisible = true;

	};



}; //end class


module.exports = {
    Pear
};