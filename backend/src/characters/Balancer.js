var {RolesMasterClass} = require("./RolesMasterClass.js");

class Balancer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Balancer";
        this.alignment = "good";
        this.team = "heroes";

	}; //end constructor

	
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