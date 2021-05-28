var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Oracle extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Oracle";
        this.alignment = "good";
        this.team = "heroes";

        this.powerUsed = 
				        {
				        	1: false,
				        	2: false,
				        	3: false,
				        	4: false,
				        	5: false
				        };


	}; //end constructor



	heroAndVillainNamesArray(obj) {

		var heroesArray = [];
		var villainsArray = [];

		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			//don't put your own name inside array
			if (obj.rO.rolesInGame[i].name == 
				obj.rO.roles["Oracle"].name) { continue; };

			if (obj.rO.rolesInGame[i].team == "heroes") {
				heroesArray.push(obj.rO.rolesInGame[i].name);
			} else {
				villainsArray.push(obj.rO.rolesInGame[i].name);
			};

		}; //end for

		shuffle(heroesArray);
		shuffle(villainsArray);

		return (

			{
				hA: heroesArray,
				vA: villainsArray
			}

		);

	}; //end heroAndVillainNamesArray(obj)



	true50Percent() {

	  var ranNum = Math.floor(Math.random() * 2 + 1); //random number of 1-2

	  return ( (ranNum == 1) ? true : false );

	};


	_1And1(obj) {

		var oracleInfo = [];
		//hero villain array
		var arr = this.heroAndVillainNamesArray(obj);

		//array is already randomized inside heroAndVillainNamesArray

		oracleInfo.push(arr.hA[0]);
		oracleInfo.push(arr.vA[0]);

		shuffle(oracleInfo);

		return oracleInfo;

	};



	atLeast1Good(obj) {

		var oracleInfo = [];
		var arr = this.heroAndVillainNamesArray(obj);

		oracleInfo.push(arr.hA[0]);

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[1]);
		} else {
			oracleInfo.push(arr.vA[0]);
		};

		shuffle(oracleInfo);

		return oracleInfo;

	};



	atLeast1Good1Evil(obj) {

		var oracleInfo = [];
		var arr = this.heroAndVillainNamesArray(obj);

		oracleInfo.push(arr.hA[0]);
		oracleInfo.push(arr.vA[0]);

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[1]);
		} else {
			oracleInfo.push(arr.vA[1]);
		};	

		shuffle(oracleInfo);

		return oracleInfo;

	};


	princess(obj) {

		var oracleInfo = [];
		var arr = this.heroAndVillainNamesArray(obj);

		var q = arr.hA.indexOf(obj.rO.roles["Princess"].name);

		oracleInfo.push((arr.hA.splice(q, 1))[0]);

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[0]);
		} else {
			oracleInfo.push(arr.vA[0]);
		};	

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[1]);
		} else {
			oracleInfo.push(arr.vA[1]);
		};			

		shuffle(oracleInfo);

		return oracleInfo;

	};


	howManyRoles(obj) {

		switch(obj.pA.length) {

			case 5:
				return 2;

			case 6:
				return 3;

			case 7:
				return 4;

			case 8:
				return 4;

			case 9:
				return 5;

			case 10:
				return 6;

		}; //end switch

	}; //end howManyRoles(obj)



	roles(obj) {

		var oracleInfo = [];
		var rolesArr = [];

		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			if (obj.rO.rolesInGame[i].role == "Oracle") { continue; };

			rolesArr.push(obj.rO.rolesInGame[i].role);

		}; //end for

		shuffle(rolesArr);

		var howManyRoles = this.howManyRoles(obj);

		for (var i = 0; i < howManyRoles; i++) {

			oracleInfo.push(rolesArr[i]);

		};

		//rolesArr is shuffled, so no need to shuffle oracleInfo
		return oracleInfo;

	}; //end roles()



	/*
	choices: 
	1 AND 1 
	At Least 1 Good 
	At Least 1 Evil & Good
	Princess
	Roles
	*/
	prophesize(oraclePowerChoice, obj) {

	  switch (oraclePowerChoice) {

	  	case "1 AND 1":
	  		return (this._1And1(obj));

	  	case "At Least 1 Good":
	  		return (this.atLeast1Good(obj));

	  	case "At Least 1 Evil & Good":
	  		return (this.atLeast1Good1Evil(obj));
	  
	  	case "Princess":
	  		return (this.princess(obj));

	  	case "Roles":
	  		return (this.roles(obj));

	  	default:
	  		return [];

	  }; //end switch

	}; //end prophesize()


}; //end class


module.exports = {
    Oracle
};