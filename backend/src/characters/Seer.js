var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Seer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Seer";
        this.alignment = "good";
        this.team = "heroes";

    	this.goodRoles7or9 = ["Princess", "Saintess", "Ichigo", "Seer", "balancer", 
    					"telepath", "ghost", "Marcus", "detective", "aura", 
    					"ranger", "scientist", "oracle", "jailer", "sensor"];

    	this.goodRoles = ["Princess", "Seer", "balancer", "telepath", "ghost", 
    					"Marcus", "detective", "aura", "ranger", "scientist", 
    					"oracle", "jailer", "sensor"];


    	this.badRoles = ["Umbra Lord", "hecate", "exploder", "alpha", "reverser", 
                     	"delayer", "ditto", "spiritualist", "Back Stabber"];

	}; //end constructor



	isThereAStatusCondition(obj, ind) {

		var statusArrayForSeerPower = [];

		if (obj.pA[ind].devilized) { statusArrayForSeerPower.push("devilized"); };

		if (obj.pA[ind].bomb) { statusArrayForSeerPower.push("flame seal bomb"); };

		if (obj.pA[ind].soulMark) { statusArrayForSeerPower.push("soul mark"); };

		if (obj.pA[ind].multiplier > 1) { statusArrayForSeerPower.push("multiplier"); };

		if (obj.pA[ind].delayerCount > 0) { statusArrayForSeerPower.push("delay power"); };

		if (obj.pA[ind].shrinkCount > 0) { statusArrayForSeerPower.push("shrink"); };

		if (obj.pA[ind].burnCount > 0) { statusArrayForSeerPower.push("burn"); };

		return statusArrayForSeerPower;

	};


	_75PercentChance() {

		var rndInt = (Math.floor(Math.random() * 4) + 1);

		return ( (rndInt == 4) ? false : true );

	};


	falseScry25PercentChance(obj, ind) {

		if (obj.rO.rolesInGame[ind].team == "heroes") {

			shuffle(this.badRoles);

			return (this.badRoles[0]);

		}; //end if


		//if bad role, then return good role
		if ([5, 7, 9].includes(obj.pA.length)) {

			shuffle(this.goodRoles7or9);

			return (this.goodRoles7or9[0]);

		} else {

			shuffle(this.goodRoles);

			return (this.goodRoles[0]);

		}; //end else


	}; //end falseScry25PercentChance




	getRole(obj, ind) {

		//for missions 1-6
		if (this._75PercentChance()) {
			//accurate 75%

			return (
				{
					name: obj.pA[ind].name,
					role: obj.pA[ind].role
				}
			); //end return


		} else { //false 25%

			return (
				{
					name: obj.pA[ind].name,
					role: this.falseScry25PercentChance(obj, ind)
				}
			); //end return

		}; //end else

	}; //end getRole(obj, ind)



	scry(obj, name) {

		var ind = obj.pT[name];
		var statusArray = this.isThereAStatusCondition(obj, ind);


		if (obj.rD.missionNo == 7) {

			return (
				{
					name: obj.pA[ind].name,
					role: obj.pA[ind].role,
					status: statusArray
				}
			); //end return
			
		}; //end if


		//mission 1-6

		if (statusArray.length > 0) {

			return (
				{
					name: obj.pA[ind].name,
					role: "status condition",
					status: statusArray
				}
			);

		} else {

			return (this.getRole(obj, ind));

		};


	}; //end scry



}; //end class


module.exports = {
    Seer
};