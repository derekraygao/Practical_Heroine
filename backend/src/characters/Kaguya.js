var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Kaguya extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Kaguya";
        this.alignment = "evil";
        this.team = "villains";

        this.moonblastPower = -1; //-1 means not activated
        this.moonblastPowerArray = [2, 2, 0, 0, -2, -2, -2, -2, -3, -4];



        this.powersHistory = 
        {
        	1: {sweetCharm: "nobody chosen"},
        	2: {sweetCharm: "nobody chosen"},
        	3: {sweetCharm: "nobody chosen"},
        	4: {sweetCharm: "nobody chosen"},
        	5: {sweetCharm: "nobody chosen"},
        	6: {sweetCharm: "nobody chosen"},
        	7: {sweetCharm: "nobody chosen"},
        };


        this.darkDestinyTarget = "nobody chosen";
        this.darkDestinyCount = 0;


	}; //end constructor


	addDarkDestinyTarget(name, obj) {

		this.darkDestinyTarget = name;

		this.messageHandler("Activate Dark Destiny", "", obj);

	};


	//must come after mission team array is finalized
	wasDarkDestinyFulfilled(obj) {

		if (this.darkDestinyTarget == "nobody chosen") { return 0; };

		if (obj.rD.missionTeam.includes(this.darkDestinyTarget)) {

			this.darkDestinyCount += 1;
			//console.log("dark destiny count: " + this.darkDestinyCount);
			if (this.darkDestinyCount >= 3) {
				return true;
			};

			return false;

		};
			
		this.darkDestinyCount = 0;
		//console.log("dark destiny count: " + this.darkDestinyCount);
		return false;
		

	}; //end wasDarkDestinyFulfilled(obj)


	setSweetCharmTarget(name, obj) {

		try {
			if (obj.pA[obj.pT[name]].role == "Saintess") { return 0; };
		} catch {};
		
		this.powersHistory[obj.rD.missionNo]["sweetCharm"] = name;

	};


	addEntrancedStatus(obj) {
		
		if (this.powersHistory[obj.rD.missionNo]["sweetCharm"]
			== "nobody chosen") { return 0; };

		var sInd = obj.pT[this.powersHistory[obj.rD.missionNo]["sweetCharm"]];
		if (sInd == undefined) { return 0; };

		obj.pA[sInd].entranced = true;

	};


	_67PercentChanceTrue() {

		var rndInt = (Math.floor(Math.random() * 3) + 1);

		return ((rndInt == 3) ? false : true);

	};


	adjustMissionVotesEntranced(obj) {

		if (!this.inGame) { return 0; };
		//Kaguya must be on the mission team
		if (!obj.pA[this.index].selectedForMission) { return 0; }

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };
			if (!obj.pA[i].entranced) { continue; };

			if (this._67PercentChanceTrue()) {

				/*console.log(obj.pA[i].name + " was entranced"
					+ " and his/her vote is reversed!"); */

				obj.pA[i].missionVote *= -1;

			}; //end if 67PercentChanceTrue

		}; //end for

	}; //end adjustMissionVotesEntranced


	_random0to9() {

		var rndInt = (Math.floor(Math.random() * 10));

		return rndInt;

	};



	activateMoonblast(obj) {

		this.moonblastPower =
		this.moonblastPowerArray[this._random0to9()];
		
		var sysMess = {
						type: "power",
						message: ("Moonblast's base voting "
							+ "power for this round only is: "
							+ this.moonblastPower)
					  };

		var stackObj = {
						type: "SMI",
						socketID: obj.pA[this.index].socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);
	
	};


	adjustMissionVotesMoonblast(obj) {

		if (this.moonblastPower == -1) { return 0; };
		
		//console.log("Moonblast power is:" + this.moonblastPower);
		
		obj.pA[this.index].missionVote = this.moonblastPower;

		this.moonblastPower = -1;

	};


	messageHandler(power, data, obj) {

		if (power == "Activate Dark Destiny") {


			var sysMess = {
							type: "urgent",
							message: ("Fate cannot be denied. The moon "
								+ "casts a shadow upon a certain player. "
								+ "His/her dark destiny will result in "
								+ "the villains' automatic victory if "
								+ "he/she is chosen for the mission team " 
								+ "3 consecutive times! The doomed player "
								+ "can be villain or hero!")
						  };

			var stackObj = {
							type: "SME Music",
							data: {messageObj: sysMess, song: "Dark Destiny"}
						   };

			obj.stack.push(stackObj);



			sysMess = {
						type: "urgent",
						message: ("Eo: John! Watch out! The laws of fate are being twisted! I sense a dark destiny surrounding " + this.darkDestinyTarget + ". Don't let him/her be on the Mission Team for 3 consecutive times! Otherwise the villains win!")
					  };

			stackObj = {
						type: "SMI",
						socketID: obj.rO.roles["Princess"].socketID,
						data: sysMess
					   };


			obj.stack.push(stackObj);	


		}; //end if


	}; //end messageHandler()



}; //end class


module.exports = {
    Kaguya
};