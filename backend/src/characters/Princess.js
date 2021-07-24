var {RolesMasterClass} = require("./RolesMasterClass.js");

class Princess extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Princess";
        this.alignment = "unknown";
        this.team = "heroes";

        this.transformed = 0;

        this.heartacheDefenseTarget = "nobody chosen";

	}; //end constructor

	/*this is same as Sensor */
	getStatusesForOnePerson(playerObj, obj) {

		var individualStatusArr = [];

		if (playerObj.corrupted) { individualStatusArr.push("Corruption"); };
		if (playerObj.bomb) { individualStatusArr.push("Flame Seal Bomb"); };
		if (playerObj.burnCount > 0) { individualStatusArr.push("Burn"); };
		if (playerObj.soulMark) { individualStatusArr.push("Soul Mark"); };
		if (playerObj.shrinkCount > 0) { individualStatusArr.push("Shrink"); };
		if (playerObj.multiplier > 1) { individualStatusArr.push("Multiplier: " + playerObj.multiplier + "xs"); };
		if (playerObj.injuredCount > 0) { individualStatusArr.push("Injury"); };
		if (playerObj.entranced) { individualStatusArr.push("Entrancement"); };
		if (playerObj.confused) { individualStatusArr.push("Confusion"); };
		if (playerObj.markedMan) { individualStatusArr.push("Marked Man"); };
		if (playerObj.slow) { individualStatusArr.push("Slow"); };
		if (playerObj.slowCharge != 0) { individualStatusArr.push("Slow Charge Boost: " + playerObj.slowCharge); };
		if (playerObj.zombie == "zombie") { individualStatusArr.push("Zombie"); };
		if (playerObj.zombie == "recovered") { individualStatusArr.push("Recovered From Zombie"); };
		if (playerObj.paralyzed) { individualStatusArr.push("Paralysis"); };
		if (playerObj.frozen) { individualStatusArr.push("Freeze"); };

		if (playerObj.safeguard) { individualStatusArr.push("Safeguard"); };
		if (playerObj.bless) { individualStatusArr.push("Bless"); };
		if (playerObj.heartacheDefense) { individualStatusArr.push("Heartache Defense"); };
		if (playerObj.therapy) { individualStatusArr.push("Therapy +3.5"); };
		if (playerObj.groupHug) { individualStatusArr.push("Group Hug +1.25"); };

		
		if (obj.rO.roles["Saintess"].curagaBoostTarget
			== playerObj.name) {
			individualStatusArr.push("Curaga Boost +3");
		};


		if (individualStatusArr.length == 0) { individualStatusArr.push("No Status Effects"); };

		return individualStatusArr;

	};


	updateEoSenseArray(obj) {

		var eoSenseArr = [];
		var pALength = obj.pA.length;


		for (var i = 0; i < pALength; i++) {

			eoSenseArr.push(
				{
					name: obj.pA[i].name,
					statusArray: this.getStatusesForOnePerson(obj.pA[i], obj)
				}
			);

		}; //end for


		var stackObj = {
						type: "Individual",
						socketID: this.socketID,
						destination: "Receive Eo (Princess) Sense Array",
						data: eoSenseArr
					   };

		obj.stack.push(stackObj);

		return eoSenseArr;

	};


	starPrismPower(obj) {
		/*transformed is 4, not 3, since updateTransformationCount
		will automatically subtract 1 before updating client */
		this.transformed = 4; 

		this.messageHandler("Star Prism Power", "", obj);

	};

	//done right before Game Phase 1
	updateTransformationCount(obj) {

		if (this.transformed == 0) { return 0; };

		this.transformed -= 1;

		this.messageHandler("Update Transformation Count", "", obj);

	};



	starHealingActivation(name, obj) {

		var shInd = obj.pT[name];

		if (obj.pA[shInd].role == "Umbra Lord") { return 0; };

		obj.pA[shInd].corrupted = false;
		obj.pA[shInd].bomb = false;
		obj.pA[shInd].burnCount = 0;
		obj.pA[shInd].poisonCount = 0;
		obj.pA[shInd].shrinkCount = 0;
		obj.pA[shInd].injuredCount = 0;
		obj.pA[shInd].soulMark = false;
		obj.pA[shInd].markedMan = false;
		obj.pA[shInd].entranced = false;
		obj.pA[shInd].confused = false;
		obj.pA[shInd].slow = false;
		obj.pA[shInd].slowCharge = 0;


		if (obj.pA[shInd].zombie == "zombie") {
			obj.pA[shInd].zombie = "recovered";
		};


		if (obj.pA[shInd].role == "Delayer") {
			obj.rO.roles["Delayer"].delayerCount = 0;
		};

		//no need to notify yourself
		if (name == this.name) { return 0; };

		this.messageHandler("Star Healing Activation", 
							obj.pA[shInd].socketID, 
							obj);

	}; //end starHealingActivation(name, obj)



	setHeartacheDefenseTarget(name) {

		this.heartacheDefenseTarget = name;

	};


	updateHeartacheDefense(obj) {

		for (var i = 0; i < obj.pA.length; i++) {
			if (obj.pA[i].heartacheDefense) {
				obj.pA[i].heartacheDefense = false;
			};
		};


		if (this.heartacheDefenseTarget !== "nobody chosen") {
		
			var hdInd = obj.pT[this.heartacheDefenseTarget];

			if (obj.pA[hdInd].role == "Umbra Lord") {

				this.heartacheDefenseTarget = "nobody chosen";

			} else {

				obj.pA[hdInd].heartacheDefense = true;

				this.heartacheDefenseTarget = "nobody chosen";

			};

		}; //end if heartacheDefense !== "nobody chosen"

	}; //end updateHeartacheDefense


	adjustMissionVotesHeartacheDefense(playerObj) {

		if (playerObj.heartacheDefense) {
			playerObj.missionVote += 5;
		};

	};



	adjustTeamVotesStarPractical(obj) {

		if (this.transformed > 0) {

			obj.pA[this.index].teamVote *= 2;

		};

	}; //end adjustTeamVotesStarPractical(obj)


	messageHandler(power, data, obj) {

		if (power == "Star Prism Power") {

			var sysMess = {
							type: "power",
							message: ("Loud and strange music "
								+ "reverberates in the air! Could it "
								+ "be? Oh, yes! Star Practical has "
								+ "arrived! Evil doers beware! "
								+ "In the name of the stars, I will "
								+ "punish you!")
						  };

			var stackObj = {
							type: "SME Music",
							data: {messageObj: sysMess, song: "Star Prism Power"}
						   };

			obj.stack.push(stackObj);


		} else if (power == "Star Healing Activation") {

			var sysMess = {
							type: "urgent",
							message: ("You hear a yell of " 
							+ "'Star Healing Activation!'. Powerful "
							+ "light energy envelopes you and purifies "
							+ "all negative status conditions!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: data,
							data: sysMess
						   };

			obj.stack.push(stackObj);	

		} else if (power == "Update Transformation Count") {

			var stackObj = {
							type: "Individual",
							socketID: this.socketID,
							destination: "Update Character Powers History",
							data: {role: "Princess", 
								   power: "transformed",
								   newValue: this.transformed
								  }
						   };

			obj.stack.push(stackObj);


		}; //end else if


	}; //end messageHandler






	/*Princess ALWAYS in the game, so no need to do checks
	nameArr because for exchange of spirits, there's 2 names!
	also for swapping, there's 2 names */
	EONotification(nameArr, status, obj) {

		switch(status) {

			case "corrupted":
				return (nameArr + " has been corrupted! His/her base voting power is now reversed!");
				break;

			case "bomb":
				return ("A flame seal bomb has been placed upon " + nameArr + ". It will explode the next time he/she is on a mission!");
				break;

			case "burn":
				return (nameArr + " has been burned! Starting next round, every round, he/she will lose an additional 0.75 voting power!");
				break;

			case "soul mark":
				return ("A soul mark has been placd on " + nameArr + ". The spiritualist increases her base voting power by 1.25 per soul mark!");
				break;

			case "paralyzed":
				return (nameArr + " has been paralyzed by thunder! He/she cannot be the mission leader for the next round!");
				break;

			case "multiplier":
				return ("Multiplication magic has been cast on " + nameArr + ". His/her voting power will be multiplied the next time he/she votes!");
				break;

			case "exchange":
				return (nameArr[0] + "'s and " + nameArr[1] + "'s spirits have been exchanged! ALL statuses have been swapped between the two players.");
				break;

			case "shrink":
				return (nameArr + " has been shrunk! His/her mission and team voting power will be halved for the next 2 rounds.");
				break;

			case "anti-magic ray":
				return (nameArr + " has been blasted with an anti-magic ray! ALL status effects, good & bad, have been nullified.");
				break;

			case "bless":
				return ("The saintess has blessed " + nameArr + ". His/her team + mission vote power are doubled for this round only.");
				break;

			case "safeguard":
				return ("Holy magic envelopes " + nameArr + ". For this round only, his/her mission vote is guaranteed to be positive.");
				break;

			case "purify":
				return ("The darkness of corruption and soul mark has been cleansed from " + nameArr + ".");
				break;

			case "esuna":
				return ("Esuna cools the dark fires of flame seal bomb and burn condition on " + nameArr + ".");
				break;

			case "dispel":
				return ("The saintess dispels the negative powers of shrink and multiplication on " + nameArr + ". If he/she is the Delayer, his/her gathered power has been scattered.");
				break;

			default:
				return "EO Notification Error";

		}; //end switch

	}; //end EONotification



}; //end class


module.exports = {
    Princess
};