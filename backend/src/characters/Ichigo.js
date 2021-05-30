var {RolesMasterClass} = require("./RolesMasterClass.js");

class Ichigo extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Ichigo";
        this.alignment = "good";
        this.team = "heroes";

	}; //end constructor



	hylianShield(voteTotal) {

		if (voteTotal <= 0) {
			voteTotal += 4;
		} else {
			voteTotal -= 4;
		};

		return voteTotal;

	};


	//index refers to player being targeted with status effect
	naviNotification(index, status, obj) {

		if (obj.pA[index].role != "Ichigo") 
			{ return ({message: "Ichigo is not the target."}) };


		if (status == "bomb") {

			return (
				{
					message: "Ichigo, abunai! A flame seal bomb has been placed on you!",
					socketID: obj.pA[index].socketID
				}
			);

		} else if (status == "devilized") {

			return (
				{
					message: "Hello! Listen! You've been infected by the Demon Lord's darkness. Your mission votes are now reversed!",
					socketID: obj.pA[index].socketID
				}
			);

		} else if (status == "burn") {

			return (
				{
					message: "Look! You just got burned! Every round you will lose 1.25 voting power!",
					socketID: obj.pA[index].socketID
				}
			);
			
		} else if (status == "shrink") {

			return (
				{
					message: "Watch out! You just got shrunk! Your team & mission votes will be halved for the next 2 rounds!",
					socketID: obj.pA[index].socketID
				}
			);
			
		} else if (status == "anti-magic ray") {

			return (
				{
					message: "Hey! You've just been blasted by the Hex Ranger's anti-magic ray! All magical influences, good & bad, are negated!",
					socketID: obj.pA[index].socketID
				}
			);
			
		} else if (status == "soul mark") {

			return (
				{
					message: "Careful! A spiritualist invaded your soul sea and placed a mark!",
					socketID: obj.pA[index].socketID
				}
			);
			
		}; //end else if

	}; //end naviNotification




}; //end class


module.exports = {
    Ichigo
};