var {RolesMasterClass} = require("./RolesMasterClass.js");

class UmbraLord extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Umbra Lord";
        this.alignment = "unknown";
        this.team = "villains";
        this.absoluteTeamVoteYesUsed = "No"; //when demonLord uses powers, set to "Yes", then after vote calculation, set to "Used"
        this.absoluteTeamVoteNoUsed = "No";

	}; //end constructor


	useAbsoluteTeamYesPower() {
		this.absoluteTeamVoteYesUsed = "Yes";
	};


	useAbsoluteTeamNoPower() {
		this.absoluteTeamVoteNoUsed = "Yes";
	};



	adjustVotesWithUmbraLordAbsolutePower(vote) {

		if (this.absoluteTeamVoteYesUsed == "Yes") {

			this.absoluteTeamVoteYesUsed = "Used";

			return 1;

		} else if (this.absoluteTeamVoteNoUsed == "Yes") {

			this.absoluteTeamVoteNoUsed = "Used";

			return -1;

		} else {

			return vote;
		};


	}; //end adjustVotesWithUmbraLordAbsolutePower



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