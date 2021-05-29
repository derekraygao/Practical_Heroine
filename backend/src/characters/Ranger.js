var {RolesMasterClass} = require("./RolesMasterClass.js");

class Ranger extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Ranger";
        this.alignment = "good";
        this.team = "heroes";

	}; //end constructor


	rangerSensing(_playerObject, _rolesObject) {

		if (_playerObject.bomb) { return "status"; };
		if (_playerObject.soulMark) { return "status"; };
		if (_playerObject.burnCount > 0) { return "status"; };
		if (_playerObject.multiplier > 1) { return "status"; };
		if (_playerObject.bless > 1) { return "status"; };
		if (_playerObject.safeguard) { return "status"; };

		if (_rolesObject.role == "Umbra Lord") {
			if (_rolesObject.bide != 0) { return "status"; };
		};

		if (_rolesObject.role == "Delayer") {
			if (_rolesObject.delayerCount > 0) { return "status"; };
		};

		return "no status";
	};


	sense(obj) {

		var senseArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			senseArr.push(
				{
					name: obj.pA[i].name,
					status: this.rangerSensing(obj.pA[i], 
						obj.rO.rolesInGame[i])	
				}
			);

		}; //end for

		return senseArr;

	};


	antiMagicRay(name, obj) {

		var ind = obj.pT[name];

		obj.pA[ind].devilized = false;
		obj.pA[ind].shrinkCount = 0;
		obj.pA[ind].burnCount = false;
		obj.pA[ind].poisoned = false;
		obj.pA[ind].bomb = false;
		obj.pA[ind].multiplier = 1;
		obj.pA[ind].safeguard = false;
		obj.pA[ind].bless = false;
		obj.pA[ind].invisible = false;
		obj.pA[ind].soulMark = false;
		obj.pA[ind].reverse = false;

		if (obj.rO.rolesInGame[ind].role == "Umbra Lord") {
			obj.rO.roles["Umbra Lord"].bide = 0;
		};

		if (obj.rO.rolesInGame[ind].role == "Delayer") {
			obj.rO.roles["Delayer"].delayCount = 0;
		};


	}; //end antiMagicRay


	//when power targets, maybe do (if shrinkCount == 0) then set to -1,
	//otherwise, +=2
	//maybe in adjust votes,  if shrinkCount < 0,
	//then you set shrinkCount to 2, so the power starts NEXT mission
	shrinkRay(name, obj) {

		var ind = obj.pT[name];
		obj.pA[ind].shrinkCount += 2;

	};


}; //end class


module.exports = {
    Ranger
};