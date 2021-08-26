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

		var pObj1 = obj.pA[obj.pT[this.exchangeArray[0]]];
		var pObj2 = obj.pA[obj.pT[this.exchangeArray[1]]];

		this.exchangeArray = [];
		

		if ( [pObj1.role, pObj2.role].includes("Saintess") ) { return 0; };


		if ( [pObj1.role, pObj2.role].includes("Umbra Lord") ) {


			var tempStatusHolder = {	
										slow: pObj1.slow,
										energyPool: pObj1.energyPool,
										shrinkCount: pObj1.shrinkCount,
										multiplier: pObj1.multiplier,
										boost: pObj1.boost,
								   }; //end tempStatusHolder

			pObj1.slow = pObj2.slow;
			pObj1.energyPool = pObj2.energyPool;
			pObj1.shrinkCount = pObj2.shrinkCount;
			pObj1.multiplier = pObj2.multiplier;
			pObj1.boost = pObj2.boost;


			pObj2.slow = tempStatusHolder.slow;
			pObj2.energyPool = tempStatusHolder.energyPool;
			pObj2.shrinkCount = tempStatusHolder.shrinkCount;
			pObj2.multiplier = tempStatusHolder.multiplier;
			pObj2.boost = tempStatusHolder.boost;

			return 0;

		}; //end if either role is Umbra Lord



		this.handleFrozenExchange(pObj1, pObj2, obj);


		var tempStatusHolder = {
									corrupted: pObj1.corrupted,
									soulMark: pObj1.soulMark,
									poisonCount: pObj1.poisonCount,
									zombie: pObj1.zombie,

									bomb: pObj1.bomb,
									burnCount: pObj1.burnCount,
									frozen: pObj1.frozen,
									paralyzed: pObj1.paralyzed,
									confused: pObj1.confused,
									entranced: pObj1.entranced,

									injuredCount: pObj1.injuredCount,
									markedMan: pObj1.markedMan,

									slow: pObj1.slow,
									energyPool: pObj1.energyPool,
									shrinkCount: pObj1.shrinkCount,
									multiplier: pObj1.multiplier,
									boost: pObj1.boost,

									safeguard: pObj1.safeguard,
									bless: pObj1.bless,
									heartacheDefense: pObj1.heartacheDefense,
									therapy: pObj1.therapy,
									groupHug: pObj1.groupHug,
									
						   	   }; //end tempStatusHolder


		//put player 2 status into player 1
		pObj1.corrupted = pObj2.corrupted;
		pObj1.soulMark = pObj2.soulMark;
		pObj1.poisonCount = pObj2.poisonCount;
		pObj1.zombie = pObj2.zombie;

		pObj1.bomb = pObj2.bomb;
		pObj1.burnCount = pObj2.burnCount;
		pObj1.frozen = pObj2.frozen;
		pObj1.paralyzed = pObj2.paralyzed; 
		pObj1.confused = pObj2.confused;
		pObj1.entranced = pObj2.entranced;

		pObj1.injuredCount = pObj2.injuredCount;
		pObj1.markedMan = pObj2.markedMan;

		pObj1.slow = pObj2.slow;
		pObj1.energyPool = pObj2.energyPool;
		pObj1.shrinkCount = pObj2.shrinkCount;
		pObj1.multiplier = pObj2.multiplier;
		pObj1.boost = pObj2.boost;
		
		pObj1.safeguard = pObj2.safeguard;
		pObj1.bless = pObj2.bless;
		pObj1.heartacheDefense = pObj2.heartacheDefense;
		pObj1.therapy = pObj2.therapy;
		pObj1.groupHug = pObj2.groupHug;


		//put Player 1 Status into Player 2

		pObj2.corrupted = tempStatusHolder.corrupted;
		pObj2.soulMark = tempStatusHolder.soulMark;
		pObj2.poisonCount = tempStatusHolder.poisonCount;
		pObj2.zombie = tempStatusHolder.zombie;

		pObj2.bomb = tempStatusHolder.bomb;
		pObj2.burnCount = tempStatusHolder.burnCount;
		pObj2.frozen = tempStatusHolder.frozen;
		pObj2.paralyzed = tempStatusHolder.paralyzed; 
		pObj2.confused = tempStatusHolder.confused;
		pObj2.entranced = tempStatusHolder.entranced;

		pObj2.injuredCount = tempStatusHolder.injuredCount;
		pObj2.markedMan = tempStatusHolder.markedMan;

		pObj2.slow = tempStatusHolder.slow;
		pObj2.energyPool = tempStatusHolder.energyPool;
		pObj2.shrinkCount = tempStatusHolder.shrinkCount;
		pObj2.multiplier = tempStatusHolder.multiplier;
		pObj2.boost = tempStatusHolder.boost;
		
		pObj2.safeguard = tempStatusHolder.safeguard;
		pObj2.bless = tempStatusHolder.bless;
		pObj2.heartacheDefense = tempStatusHolder.heartacheDefense;
		pObj2.therapy = tempStatusHolder.therapy;
		pObj2.groupHug = tempStatusHolder.groupHug;


		if (obj.rO.roles["Saintess"].curagaBoostTarget
			== pObj1.name) { 

			obj.rO.roles["Saintess"].curagaBoostTarget = pObj2.name;
			

		} else if (obj.rO.roles["Saintess"].curagaBoostTarget
			== pObj2.name) {

			obj.rO.roles["Saintess"].curagaBoostTarget = pObj1.name;
			
		};


		//return ("Exchanged the statuses of " + name1 + " and " + name2);

	}; //end exchangeOfTheSpirits



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