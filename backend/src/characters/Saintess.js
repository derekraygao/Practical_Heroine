var {RolesMasterClass} = require("./RolesMasterClass.js");

class Saintess extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Saintess";
        this.alignment = "good";
        this.team = "heroes";

	}; //end constructor




	isStatusNormal(index, obj) {

		if (obj.pA[index].devilized) { return false; };
		if (obj.pA[index].bomb) { return false; };
		if (obj.pA[index].soulMark) { return false; };
		if (obj.pA[index].multiplier > 1) { return false; };
		if (obj.pA[index].shrinkCount > 0) { return false; };
		if (obj.pA[index].burnCount > 0) { return false; };

		if (obj.pA[index].role == "Delayer") {

			if (obj.rO.roles["Delayer"].delayerCount > 0) {
				return false;
			};

		};

		return true;
	};


	saintessSense(obj) {

		var saintessSenseArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].role == "Saintess") { continue; };

			saintessSenseArr.push(
				{
					name: obj.pA[i].name,
					isStatusNormal: this.isStatusNormal(i, obj)
				}
			);

		}; //end for

		return saintessSenseArr;

	};



	purify(name, obj) {

		var index = obj.pT[name];

		obj.pA[index].devilized = false;
		obj.pA[index].soulMark = false;

	};


	esuna(name, obj) {

		var index = obj.pT[name];

		obj.pA[index].bomb = false;
		obj.pA[index].burnCount = 0;		

	};


	dispel(name, obj) {

		var index = obj.pT[name];

		obj.pA[index].shrinkCount = 0;
		obj.pA[index].multiplier = 1;

		if (obj.pA[index].role == "Delayer") {
			obj.rO.roles["Delayer"].delayerCount = 0;
		};

	};


	bless(name, obj) {

		var index = obj.pT[name];

		obj.pA[index].bless = true;

	};


	safeguard(name, obj) {

		var index = obj.pT[name];

		if (obj.pA[index].role == "Umbra Lord") {
			return 0;
		};

		obj.pA[index].safeguard = true;

	};



}; //end class


module.exports = {
    Saintess
};