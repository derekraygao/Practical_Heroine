var {RolesMasterClass} = require("./RolesMasterClass.js");

class Sensor extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Sensor";
        this.alignment = "good";
        this.team = "heroes";

	}; //end constructor

/*
	scanBomb(obj) {

		var bombStatusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].bomb) {

				bombStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Bomb",
						status: true 
					}
				)

			} else {

				bombStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Bomb",
						status: false 
					}
				)

			}; //end else

		}; //end for

		return bombStatusArr;

	}; //end scanBomb


	scanBurn(obj) {

		var burnStatusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].burnCount > 0) {

				burnStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Burn",
						status: true 
					}
				)

			} else {

				burnStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Burn",
						status: false 
					}
				)

			}; //end else

		}; //end for

		return burnStatusArr;

	}; //end scanBomb


	scanSoulSea(obj) {

		var soulSeaStatusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].soulMark) {

				soulSeaStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Soul Mark",
						status: true 
					}
				)

			} else {

				soulSeaStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Soul Mark",
						status: false 
					}
				)

			}; //end else

		}; //end for

		return soulSeaStatusArr;

	}; //end scanBomb


	scanShrink(obj) {

		var shrinkStatusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].shrinkCount > 0) {

				shrinkStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Shrink",
						status: true 
					}
				)

			} else {

				shrinkStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Shrink",
						status: false 
					}
				)

			}; //end else

		}; //end for

		return shrinkStatusArr;

	}; //end scanBomb


	scanMultiplier(obj) {

		var multiplierStatusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].multiplier > 1) {

				multiplierStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Multiplier",
						status: true 
					}
				)

			} else {

				multiplierStatusArr.push(
					{
						name: obj.pA[i].name,
						condition: "Multiplier",
						status: false 
					}
				)

			}; //end else

		}; //end for

		return multiplierStatusArr;

	}; //end scanBomb

*/

	scanBomb(obj) {

		var bombArr = [];

		for (var i = 0; i < obj.pA.length; i++) {
			if (obj.pA[i].bomb) {
				bombArr.push(obj.pA[i].name);
			};
		};

		return bombArr;

	};


	scanBurn(obj) {
		
		var burnArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].burnCount > 0) {
				burnArr.push(obj.pA[i].name);
			};

		};

		return burnArr;
	};


	scanSoulSea(obj) {
		
		var soulSeaArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].soulMark) {
				soulSeaArr.push(obj.pA[i].name);
			};

		};

		return soulSeaArr;
	};



	scanShrink(obj) {
		
		var shrinkArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].shrinkCount > 0) {
				shrinkArr.push(obj.pA[i].name);
			};

		};

		return shrinkArr;
	};



	scanMultiplier(obj) {
		
		var multiplierArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].multiplier > 1) {
				multiplierArr.push(obj.pA[i].name);
			};

		};

		return multiplierArr;
	};





	scanAll(condition, obj) {

		switch(condition) {

			case "FS Bomb":
				return this.scanBomb(obj);

			case "Burn":
				return this.scanBurn(obj);

			case "Soul Mark":
				return this.scanSoulSea(obj);

			case "Shrink":
				return this.scanShrink(obj);

			case "Multiplier":
				return this.scanMultiplier(obj);

			default:
				return [];

		}; //end switch

	}; //end scanAll


	scanOne(name, obj) {

		var ind = obj.pT[name];

		var individualStatusArr = [];

		if (obj.pA[ind].bomb) { individualStatusArr.push("Flame Seal Bomb"); };
		if (obj.pA[ind].burnCount > 0) { individualStatusArr.push("Burn"); };
		if (obj.pA[ind].soulMark) { individualStatusArr.push("Soul Mark"); };
		if (obj.pA[ind].shrinkCount > 0) { individualStatusArr.push("Shrink"); };
		if (obj.pA[ind].multiplier > 1) { individualStatusArr.push("Multiplier"); };

		return (
			{
				name: name,
				statusArray: individualStatusArr
			}
		);


	}; //end scanOne


}; //end class


module.exports = {
    Sensor
};