var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Hecate extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Hecate";
        this.alignment = "evil";
        this.team = "villains";

        this.multiplicationFactorArray = [1, 2, 2, 2, 2, 2, 3, 3, 3, 4];
       	

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
        this.exchangeArray = [];


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





	handleFrozenExchange(pObj1, pObj2, obj) {

		if (!pObj1.frozen && !pObj2.frozen) { return 0; };
		if (pObj1.frozen && pObj2.frozen) { return 0; };
		

		if (pObj1.frozen) {

		   var stackObj1 = {
							type: "Individual",
							socketID: pObj1.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: false}
						   };

		   var stackObj2 = {
							type: "Individual",
							socketID: pObj2.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: true}
						   };

			obj.stack.push(stackObj1);
			obj.stack.push(stackObj2);	


		} else if (pObj2.frozen) {

		   var stackObj1 = {
							type: "Individual",
							socketID: pObj2.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: false}
						   };

		   var stackObj2 = {
							type: "Individual",
							socketID: pObj1.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: true}
						   };

			obj.stack.push(stackObj1);
			obj.stack.push(stackObj2);	

		};


	}; //end handleFrozenExchange(pObj1, pObj2, obj)


	/*namesArr = ["Derek", "John"]
	You want to delay EoS to AFTER 1st powers phase has ended in case somebody is frozen...
	updating frozen could cause their frontend to re-render and they could re-use their powers.
	*/
	setEoSTargets(namesArr) {

		this.exchangeArray = namesArr;

	};


	exchangeOfTheSpirits(obj) {

		if (this.exchangeArray.length == 0) { return 0; };
		if (this.exchangePowerUsed) { return 0; };

		this.exchangePowerUsed = true;

		var index1 = obj.pT[this.exchangeArray[0]];
		var index2 = obj.pT[this.exchangeArray[1]];
		this.exchangeArray = [];
		

		if (["Saintess", "Umbra Lord"].includes(obj.pA[index1].role) ||
			["Saintess", "Umbra Lord"].includes(obj.pA[index2].role)) {

			return 0;

		};


		this.handleFrozenExchange(obj.pA[index1], obj.pA[index2], obj);


		var tempStatusHolder = {
									corrupted: obj.pA[index1].corrupted,
									soulMark: obj.pA[index1].soulMark,
									poisonCount: obj.pA[index1].poisonCount,
									zombie: obj.pA[index1].zombie,

									bomb: obj.pA[index1].bomb,
									burnCount: obj.pA[index1].burnCount,
									frozen: obj.pA[index1].frozen,
									paralyzed: obj.pA[index1].paralyzed,
									confused: obj.pA[index1].confused,
									entranced: obj.pA[index1].entranced,

									injuredCount: obj.pA[index1].injuredCount,
									markedMan: obj.pA[index1].markedMan,

									slow: obj.pA[index1].slow,
									slowCharge: obj.pA[index1].slowCharge,
									shrinkCount: obj.pA[index1].shrinkCount,
									multiplier: obj.pA[index1].multiplier,
									boost: obj.pA[index1].boost,

									safeguard: obj.pA[index1].safeguard,
									bless: obj.pA[index1].bless,
									heartacheDefense: obj.pA[index1].heartacheDefense,
									therapy: obj.pA[index1].therapy,
									groupHug: obj.pA[index1].groupHug,
									
						   	   };

		//put player 2 status into player 1
		obj.pA[index1].corrupted = obj.pA[index2].corrupted;
		obj.pA[index1].soulMark = obj.pA[index2].soulMark;
		obj.pA[index1].poisonCount = obj.pA[index2].poisonCount;
		obj.pA[index1].zombie = obj.pA[index2].zombie;

		obj.pA[index1].bomb = obj.pA[index2].bomb;
		obj.pA[index1].burnCount = obj.pA[index2].burnCount;
		obj.pA[index1].frozen = obj.pA[index2].frozen;
		obj.pA[index1].paralyzed = obj.pA[index2].paralyzed; 
		obj.pA[index1].confused = obj.pA[index2].confused;
		obj.pA[index1].entranced = obj.pA[index2].entranced;

		obj.pA[index1].injuredCount = obj.pA[index2].injuredCount;
		obj.pA[index1].markedMan = obj.pA[index2].markedMan;

		obj.pA[index1].slow = obj.pA[index2].slow;
		obj.pA[index1].slowCharge = obj.pA[index2].slowCharge;
		obj.pA[index1].shrinkCount = obj.pA[index2].shrinkCount;
		obj.pA[index1].multiplier = obj.pA[index2].multiplier;
		obj.pA[index1].boost = obj.pA[index2].boost;
		
		obj.pA[index1].safeguard = obj.pA[index2].safeguard;
		obj.pA[index1].bless = obj.pA[index2].bless;
		obj.pA[index1].heartacheDefense = obj.pA[index2].heartacheDefense;
		obj.pA[index1].therapy = obj.pA[index2].therapy;
		obj.pA[index1].groupHug = obj.pA[index2].groupHug;


		//put Player 1 Status into Player 2

		obj.pA[index2].corrupted = tempStatusHolder.corrupted;
		obj.pA[index2].soulMark = tempStatusHolder.soulMark;
		obj.pA[index2].poisonCount = tempStatusHolder.poisonCount;
		obj.pA[index2].zombie = tempStatusHolder.zombie;

		obj.pA[index2].bomb = tempStatusHolder.bomb;
		obj.pA[index2].burnCount = tempStatusHolder.burnCount;
		obj.pA[index2].frozen = tempStatusHolder.frozen;
		obj.pA[index2].paralyzed = tempStatusHolder.paralyzed; 
		obj.pA[index2].confused = tempStatusHolder.confused;
		obj.pA[index2].entranced = tempStatusHolder.entranced;

		obj.pA[index2].injuredCount = tempStatusHolder.injuredCount;
		obj.pA[index2].markedMan = tempStatusHolder.markedMan;

		obj.pA[index2].slow = tempStatusHolder.slow;
		obj.pA[index2].slowCharge = tempStatusHolder.slowCharge;
		obj.pA[index2].shrinkCount = tempStatusHolder.shrinkCount;
		obj.pA[index2].multiplier = tempStatusHolder.multiplier;
		obj.pA[index2].boost = tempStatusHolder.boost;
		
		obj.pA[index2].safeguard = tempStatusHolder.safeguard;
		obj.pA[index2].bless = tempStatusHolder.bless;
		obj.pA[index2].heartacheDefense = tempStatusHolder.heartacheDefense;
		obj.pA[index2].therapy = tempStatusHolder.therapy;
		obj.pA[index2].groupHug = tempStatusHolder.groupHug;


		if (obj.rO.roles["Saintess"].curagaBoostTarget
			== obj.pA[index1].name) { 

			obj.rO.roles["Saintess"].curagaBoostTarget = obj.pA[index2].name;
			

		} else if (obj.rO.roles["Saintess"].curagaBoostTarget
			== obj.pA[index2].name) {

			obj.rO.roles["Saintess"].curagaBoostTarget = obj.pA[index1].name;
			
		};


		//return ("Exchanged the statuses of " + name1 + " and " + name2);

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