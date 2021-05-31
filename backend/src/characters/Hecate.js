var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Hecate extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Hecate";
        this.alignment = "evil";
        this.team = "villains";

        this.multiplicationFactorArray = [1, 2, 2, 2, 2, 2, 3, 3, 3, 4];

	}; //end constructor


	multiplication(name, obj) {

		var index = obj.pT[name];
		shuffle(this.multiplicationFactorArray);

		obj.pA[index].multiplier *= this.multiplicationFactorArray[0];

		return this.multiplicationFactorArray[0];

	};

	exchangeOfTheSpirits(name1, name2, obj) {

		var index1 = obj.pT[name1];
		var index2 = obj.pT[name2];

		if (obj.pA[index1].role == "Saintess" || 
			obj.pA[index2].role == "Saintess") {
			return 0;
		};

		var tempStatusHolder = {
									devilized: obj.pA[index1].devilized,
									soulMark: obj.pA[index1].soulMark,
									multiplier: obj.pA[index1].multiplier,
									burnCount: obj.pA[index1].burnCount,
									shrinkCount: obj.pA[index1].shrinkCount,
									bomb: obj.pA[index1].bomb,
									bless: obj.pA[index1].bless,
									safeguard: obj.pA[index1].safeguard
						   	   };

		//put player 2 status into player 1
		obj.pA[index1].devilized = obj.pA[index2].devilized;
		obj.pA[index1].soulMark = obj.pA[index2].soulMark;
		obj.pA[index1].multiplier = obj.pA[index2].multiplier;
		obj.pA[index1].burnCount = obj.pA[index2].burnCount;
		obj.pA[index1].shrinkCount = obj.pA[index2].shrinkCount;
		obj.pA[index1].bomb = obj.pA[index2].bomb;
		obj.pA[index1].bless = obj.pA[index2].bless;
		obj.pA[index1].safeguard = obj.pA[index2].safeguard;

		//put player 1 status into player 2
		obj.pA[index2].devilized = tempStatusHolder.devilized;
		obj.pA[index2].soulMark = tempStatusHolder.soulMark;
		obj.pA[index2].multiplier = tempStatusHolder.multiplier;
		obj.pA[index2].burnCount = tempStatusHolder.burnCount;
		obj.pA[index2].shrinkCount = tempStatusHolder.shrinkCount;
		obj.pA[index2].bomb = tempStatusHolder.bomb;
		obj.pA[index2].bless = tempStatusHolder.bless;
		obj.pA[index2].safeguard = tempStatusHolder.safeguard;

		return ("Exchanged the statuses of " + name1 + " and " + name2);

	};



}; //end class


module.exports = {
    Hecate
};