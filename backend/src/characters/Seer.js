var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Seer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Seer";
        this.alignment = "good";
        this.team = "heroes";


        this.goodRolesOdd = ["Princess", "Saintess", "Ichigo", "Marcus", 
                              "Lottie", "Lan", "Seer", "Balancer", "Esper", 
                              "Pear", "Detective Chat", "Aura Knight", 
                              "Ranger", "Scientist", "Oracle", "Jailer", 
                              "Sensor"];

        //no Ichigo or Saintess
        this.goodRoles = ["Princess", "Seer", "Balancer", "Esper", 
                          "Pear", "Lan", "Marcus", "Lottie", 
                          "Detective Chat", "Aura Knight", 
                          "Ranger", "Scientist", "Oracle", 
                          "Jailer", "Sensor"];

        this.badRoles = ["Umbra Lord", "Hecate", "Bomberman", 
                         "Lieutenant Blitz", "Reverser", "Noah",  
                         "Delayer", "Persequor", "Baby Doll",
                         "Spiritualist", "Backstabber", "Toxiturtle", 
                         "Kaguya", "Psychologist"];



	}; //end constructor



	isThereAStatusCondition(playerObj, obj) {

		var individualStatusArr = [];

		if (playerObj.role == "Delayer") {

			if (obj.rO.roles["Delayer"].delayerCount > 0) {
				individualStatusArr.push("Temporal Charge (Delayer)");
			};

		};
		
		if (playerObj.corrupted) { individualStatusArr.push("Corruption"); };
		if (playerObj.bomb) { individualStatusArr.push("Flame Seal Bomb"); };
		if (playerObj.burnCount > 0) { individualStatusArr.push("Burn"); };
		if (playerObj.soulMark) { individualStatusArr.push("Soul Mark"); };
		if (playerObj.shrinkCount > 0) { individualStatusArr.push("Shrink"); };
		if (playerObj.injuredCount > 0) { individualStatusArr.push("Injury"); };
		if (playerObj.entranced) { individualStatusArr.push("Entrancement"); };
		if (playerObj.confused) { individualStatusArr.push("Confusion"); };
		if (playerObj.markedMan) { individualStatusArr.push("Marked Man"); };
		if (playerObj.slow) { individualStatusArr.push("Slow"); };
		if (playerObj.slowCharge != 0) { individualStatusArr.push("Slow Charge Boost: " + playerObj.slowCharge); };
		if (playerObj.zombie == "zombie") { individualStatusArr.push("Zombie"); };
		if (playerObj.zombie == "recovered") { individualStatusArr.push("Recovered From Zombie"); };
		if (playerObj.paralyzed) { individualStatusArr.push("Paralysis"); };
		if (playerObj.frozen) { individualStatusArr.push("Freeze"); };

		if (playerObj.multiplier > 1) { individualStatusArr.push("Multiplier: " + playerObj.multiplier + "xs"); };
		if (playerObj.boost > 0) { individualStatusArr.push("Boost: ±" + playerObj.boost); };

		return individualStatusArr;

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
		if ((obj.pA.length % 2) == 1) {

			shuffle(this.goodRolesOdd);

			return (this.goodRolesOdd[0]);

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
		var statusArray = this.isThereAStatusCondition(obj.pA[ind], obj);


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

		}; //end if


		return this.getRole(obj, ind);



	}; //end scry




	flash(target, obj) {

		var pObj = obj.pA[obj.pT[target]];

		if (["Umbra Lord", "Saintess"].includes(pObj.role)) { return 0; };

		pObj.confused = true;

		//this.messageHandler(pObj.socketID, obj);

	};


	/*
	messageHandler(socketID, obj) {

		var sysMess = {
						type: "power",
						message: "The Seer used his/her gift of the 'Sight' to flash you with blinding light! For this mission, you are inflicted with the 'Confusion' status, meaning there is a 75% chance your base voting power will be reversed!"
					  };

		var stackObj = {
						type: "Individual",
						socketID: socketID,
						destination: "Add System Message",
						data: sysMess
					   };


		obj.stack.push(stackObj);

	};

	*/

}; //end class


module.exports = {
    Seer
};