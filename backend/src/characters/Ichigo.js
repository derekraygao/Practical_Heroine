var {RolesMasterClass} = require("./RolesMasterClass.js");

class Ichigo extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Ichigo";
        this.alignment = "good";
        this.team = "heroes";

        this.holyStrike = "not used";

        /*should be reset to false when notifying players Hylian Shield
        was used */
        this.isHylianShieldActivated = false;

	}; //end constructor


	activateHylianShield() {
		this.isHylianShieldActivated = true;
	};

	hylianShield(voteTotal) {

		if (!this.isHylianShieldActivated) { return voteTotal; };

		if (voteTotal <= 0) {
			voteTotal += 4;
		} else {
			voteTotal -= 4;
		};

		return voteTotal;

	};


	adjustVotesUmbraSlayer(vote, obj) {

		if (!this.inGame) { return vote; };
		if (!obj.pA[this.index].selectedForMission) { return vote; };

		return (Math.ceil(1.5 * vote));


	};


	activateHolyStrike() {

		this.holyStrike = "activated";

	};


	adjustVotesHolyStrike(obj) {

		if (this.holyStrike != "activated") { return 0; };

		obj.pA[this.index].missionVote = 4;

		this.holyStrike = "used";

	};



	//no need to do Saintess statuses because both she & Ichigo cannot be 
	//in the same game
	naviNotification(name, status, obj) {

		if (this.name != name) { 
			return {message: "Ichigo is not the target."};
		};

		if (status == "bomb") {

			return (
				{
					message: "Ichigo, abunai! A flame seal bomb has been placed on you!",
					socketID: obj.pA[this.index].socketID
				}
			);

		} else if (status == "corrupted") {

			return (
				{
					message: "Hello! You've been corrupted by the Umbra Lord's darkness. Your base mission voting power is now reversed!",
					socketID: obj.pA[this.index].socketID
				}
			);

		} else if (status == "burn") {

			return (
				{
					message: "Look! You just got burned! Every round you will lose 1.25 voting power! To cure yourself, vote for failure on the next mission!",
					socketID: obj.pA[this.index].socketID
				}
			);
			
		} else if (status == "shrink") {

			return (
				{
					message: "Watch out! You just got shrunk! Your team & mission votes will be halved for the next 2 rounds!",
					socketID: obj.pA[this.index].socketID
				}
			);
			
		} else if (status == "anti-magic ray") {

			return (
				{
					message: "Hey! You've just been blasted by the Hex Ranger's anti-magic ray! All magical influences, good & bad, are negated!",
					socketID: obj.pA[this.index].socketID
				}
			);
			
		} else if (status == "soul mark") {

			return (
				{
					message: "Careful! A spiritualist invaded your soul sea and placed a mark! Cleanse your soul sea by voting for failure on the next mission!",
					socketID: obj.pA[this.index].socketID
				}
			);
			
		} else if (status == "paralyzed") {

			return (
				{
					message: "Listen! You've just been paralyzed by thunder! You won't be able to be the team leader for the next round.",
					socketID: obj.pA[this.index].socketID
				}
			);

		} else if (status == "exchange") {

			return (
				{
					message: "Look! Magical forces have swapped your spirit and statuses with another player!",
					socketID: obj.pA[this.index].socketID
				}
			);

		}; //end else if

	}; //end naviNotification




}; //end class


module.exports = {
    Ichigo
};