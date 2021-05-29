var {RolesMasterClass} = require("./RolesMasterClass.js");

class AuraKnight extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Aura Knight";
        this.alignment = "good";
        this.team = "heroes";

	}; //end constructor


	isThereAStatusCondition(obj, ind) {

		var statusArrayForAuraKnightPower = [];

		if (obj.pA[ind].devilized) { statusArrayForAuraKnightPower.push("devilized"); };

		if (obj.pA[ind].bomb) { statusArrayForAuraKnightPower.push("flame seal bomb"); };

		if (obj.pA[ind].soulMark) { statusArrayForAuraKnightPower.push("soul mark"); };

		if (obj.pA[ind].multiplier > 1) { statusArrayForAuraKnightPower.push("multiplier"); };

		if (obj.pA[ind].delayerCount > 0) { statusArrayForAuraKnightPower.push("delay power"); };

		if (obj.pA[ind].shrinkCount > 0) { statusArrayForAuraKnightPower.push("shrink"); };

		if (obj.pA[ind].burnCount > 0) { statusArrayForAuraKnightPower.push("burn"); };

		return statusArrayForAuraKnightPower;

	};


	readAura(name, obj) {

		var ind = obj.pT[name];
		var statusArr = this.isThereAStatusCondition(obj, ind);

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


}; //end class


module.exports = {
    AuraKnight
};