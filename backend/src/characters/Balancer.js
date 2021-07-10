var {RolesMasterClass} = require("./RolesMasterClass.js");

class Balancer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Balancer";
        this.alignment = "good";
        this.team = "heroes";

        this.equilibriumArray = [];

	}; //end constructor

		

	setEquilibriumArray(arr) {

		this.equilibriumArray = arr;

	};


	//should I check if the index exists??
	adjustVoteSumEquilibrium(voteSum, obj) {

		if (this.equilibriumArray.length !== 2) { return voteSum; };

		var vote1 = obj.pA[obj.pT[this.equilibriumArray[0]]].missionVote;
		var vote2 = obj.pA[obj.pT[this.equilibriumArray[1]]].missionVote;

		this.equilibriumArray = [];

		if (vote1 == 0 && vote2 == 0) { 

			return (voteSum + 3.5); 

		};

		if ((vote1 * vote2) > 0) {

			return (voteSum + 1.5);

		} else {

			return (voteSum - 2);

		}; //end else


	}; //end adjustVoteSumEquilibrium(voteSum)


	mysticScales(name1, name2, obj) {

		var ind1 = obj.pT[name1];
		var ind2 = obj.pT[name2];

		if (obj.rO.rolesInGame[ind1].alignment 
			== obj.rO.rolesInGame[ind2].alignment) {

			return "the same alignment.";

		} else {

			return "different alignments.";

		};

	}; //end mysticScales



}; //end class


module.exports = {
    Balancer
};