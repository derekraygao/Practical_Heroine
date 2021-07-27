var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Hecate extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Hecate";
        this.alignment = "evil";
        this.team = "villains";

        this.multiplicationFactorArray = [1, 2, 2, 2, 2, 2, 3, 3, 3, 4];
        this.metronomeChoices = ["F.S. Bomb", "Burn", 
        						 "Injury", "Paralysis", "Freeze", 
        						 "Zombie", "Slow", "Confusion",
        						 "Bless", "Safeguard"];
       

       /* is keeping track of exchange array necessary?
        power can only be used once */
        this.powersHistory = 
        {
        	1: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        	2: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        	3: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        	4: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        	5: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        	6: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        	7: {"multiplierTarget": "nobody chosen", "boostTarget": "nobody chosen", "metronome": {target: "nobody chosen", power: "none"}},
        };

        this.exchangePowerUsed = false;


	}; //end constructor



	setMultiplierTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo].multiplierTarget = name;

	};


	//check to see if Hecate is in the game occurs in AbilityManager
	multiplication(obj) {

		if (this.powersHistory[obj.rD.missionNo].multiplierTarget == "nobody chosen") 
			{ return 0; };

		var index = obj.pT[this.powersHistory[obj.rD.missionNo].multiplierTarget];
		shuffle(this.multiplicationFactorArray);

		obj.pA[index].multiplier *= this.multiplicationFactorArray[0];


		var sysMess = {
						type: "power",
						message: (obj.pA[index].name + "'s power "
							+ "has been increased by "
							+ this.multiplicationFactorArray[0]
							+ "xs.")
					  };

		var stackObj = {
						type: "Individual",
						socketID: obj.pA[this.index].socketID,
						destination: "Add System Message",
						data: sysMess
					   };

		obj.stack.push(stackObj);

	};


	adjustMissionVotesMultiplication(playerObj) {
		//if (!this.inGame) { return 0; };
		if (playerObj.multiplier <= 1) { return 0; };

		playerObj.missionVote *= playerObj.multiplier;

		playerObj.multiplier = 1;

	};




	setSpellBoostTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo].boostTarget = name;

	};


	getRandomBoost() {

		var rndInt = Math.floor(Math.random() * 3);

		if (rndInt == 0) {
			return 1;
		} else {
			return 3;
		};

	};


	addSpellBoost(obj) {

		if (this.powersHistory[obj.rD.missionNo].boostTarget == "nobody chosen") 
			{ return 0; };

		var bPlayerObj = obj.pA[obj.pT[this.powersHistory[obj.rD.missionNo].boostTarget]];

		var boostAmount = this.getRandomBoost();

		bPlayerObj.boost += boostAmount;

		this.messageHandler("Boost", 
							{"name": bPlayerObj.name, "boost": boostAmount},
							obj
						   );

	}; //end addSpellBoost(obj)




	setMetronomeTargetAndPower(name, obj) {

		var mInd = obj.pT[name];

		//10 possible statuses
		var rndInt = (Math.floor(Math.random() * 10));

		this.powersHistory["metronome"]["target"] = name;
		this.powersHistory["metronome"]["power"] 
		= this.metronomeChoices[rndInt];

	};



	exchangeOfTheSpirits(name1, name2, obj) {

		this.exchangePowerUsed = true;

		var index1 = obj.pT[name1];
		var index2 = obj.pT[name2];

		if (["Saintess", "Umbra Lord"].includes(obj.pA[index1].role) ||
			["Saintess", "Umbra Lord"].includes(obj.pA[index2].role)) {

			return 0;

		};


		var tempStatusHolder = {
									corrupted: obj.pA[index1].corrupted,
									soulMark: obj.pA[index1].soulMark,
									multiplier: obj.pA[index1].multiplier,
									burnCount: obj.pA[index1].burnCount,
									shrinkCount: obj.pA[index1].shrinkCount,
									bomb: obj.pA[index1].bomb,
									bless: obj.pA[index1].bless,
									safeguard: obj.pA[index1].safeguard
						   	   };

		//put player 2 status into player 1
		obj.pA[index1].corrupted = obj.pA[index2].corrupted;
		obj.pA[index1].soulMark = obj.pA[index2].soulMark;
		obj.pA[index1].multiplier = obj.pA[index2].multiplier;
		obj.pA[index1].burnCount = obj.pA[index2].burnCount;
		obj.pA[index1].shrinkCount = obj.pA[index2].shrinkCount;
		obj.pA[index1].bomb = obj.pA[index2].bomb;
		obj.pA[index1].bless = obj.pA[index2].bless;
		obj.pA[index1].safeguard = obj.pA[index2].safeguard;

		//put player 1 status into player 2
		obj.pA[index2].corrupted = tempStatusHolder.corrupted;
		obj.pA[index2].soulMark = tempStatusHolder.soulMark;
		obj.pA[index2].multiplier = tempStatusHolder.multiplier;
		obj.pA[index2].burnCount = tempStatusHolder.burnCount;
		obj.pA[index2].shrinkCount = tempStatusHolder.shrinkCount;
		obj.pA[index2].bomb = tempStatusHolder.bomb;
		obj.pA[index2].bless = tempStatusHolder.bless;
		obj.pA[index2].safeguard = tempStatusHolder.safeguard;

		return ("Exchanged the statuses of " + name1 + " and " + name2);

	};



	messageHandler(power, data, obj) {

		if (power == "Boost") {

			var sysMess = {
							type: "power",
							message: ("You gave " + data.name + " a boost of " + data.boost + "!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };


			obj.stack.push(stackObj);	

		};


	}; //end messageHandler()




}; //end class


module.exports = {
    Hecate
};