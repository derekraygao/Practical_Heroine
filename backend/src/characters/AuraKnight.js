var {RolesMasterClass} = require("./RolesMasterClass.js");

class AuraKnight extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Aura Knight";
        this.alignment = "good";
        this.team = "heroes";

        this.powersHistory = {
        						1: {"auraBoostTarget": "nobody chosen", "boost": 0},
        						2: {"auraBoostTarget": "nobody chosen", "boost": 0},
        						3: {"auraBoostTarget": "nobody chosen", "boost": 0},
        						4: {"auraBoostTarget": "nobody chosen", "boost": 0},
        						5: {"auraBoostTarget": "nobody chosen", "boost": 0},
        						6: {"auraBoostTarget": "nobody chosen", "boost": 0},
        						7: {"auraBoostTarget": "nobody chosen", "boost": 0},
        					 };

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


	readAura(name, obj) {

		var ind = obj.pT[name];
		var statusArr = this.isThereAStatusCondition(obj.pA[ind], obj);

		if (statusArr.length > 0) {

			return (
				{
					name: name,
					alignment: "Status",
					status: statusArr
				}
			); //end return


		} else {

			return (
				{
					name: name,
					alignment: obj.rO.rolesInGame[ind].alignment
				}
			); //end return

		}; //end else


	}; //end readAura


	setAuraBoostPower(targetName, obj) {

		var numHeroes = 0;
		var numVillains = 0;
		var forLength = obj.rD.missionTeam.length;

		for (var i = 0 ; i < forLength; i++) {

			if (obj.rO.rolesInGame[obj.pT[obj.rD.missionTeam[i]]].team
				== "heroes") {

				numHeroes += 1;

			} else {

				numVillains += 1;

			};

		}; //end for 


		if (numVillains > numHeroes) {

			this.powersHistory[obj.rD.missionNo]["boost"] = 3;
			this.messageHandler(3, obj.pA[obj.pT[targetName]] , obj);
			
		} else {
			
			this.powersHistory[obj.rD.missionNo]["boost"] = 1;
			this.messageHandler(1, obj.pA[obj.pT[targetName]] , obj);

		};


	}; //end auraBoostPower(obj)


	setAuraBoostTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo]["auraBoostTarget"] = name;

		this.setAuraBoostPower(name, obj);

	};


	//inside AbilityManager
	//don't need if inGame since nobody chosen can't be changed except
	//by aura knight
	addAuraBoost(obj) {

		var target = this.powersHistory[obj.rD.missionNo]["auraBoostTarget"];

		if (target == "nobody chosen") { return 0; };

		obj.pA[obj.pT[target]].boost += this.powersHistory[obj.rD.missionNo]["boost"];

	};


	messageHandler(boost, playerObj, obj) {
	

		var sysMess = {
						type: "power",
						message: ("You gave " + playerObj.name + " a boost of " + boost + "!")
					  };

		var stackObj = {
						type: "SMI",
						socketID: this.socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);	


		//don't notify yourself
		if (playerObj.name == this.name) { return 0; };



		sysMess = {
					type: "urgent",
					message: ("You received a boost of " + boost + "! The next time you are on a mission team, your base voting power will be increased accordingly (more negative or more positive) by " + boost + "!")
				  };

		stackObj = {
					type: "SMI",
					socketID: playerObj.socketID,
					data: sysMess
				   };


		obj.stack.push(stackObj);


	}; //end messageHandler(power, data, obj)




}; //end class


module.exports = {
    AuraKnight
};