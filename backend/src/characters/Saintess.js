var {RolesMasterClass} = require("./RolesMasterClass.js");

class Saintess extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Saintess";
        this.alignment = "good";
        this.team = "heroes";

      	this.powersHistory = 
        {
        	1: {"target": "nobody chosen", "power": "none"},
        	2: {"target": "nobody chosen", "power": "none"},
        	3: {"target": "nobody chosen", "power": "none"},
        	4: {"target": "nobody chosen", "power": "none"},
        	5: {"target": "nobody chosen", "power": "none"},
        	6: {"target": "nobody chosen", "power": "none"},
        	7: {"target": "nobody chosen", "power": "none"},
        };

        this.curagaBoostTarget = "nobody chosen";

	}; //end constructor




	isStatusNormal(index, obj) {

		/*if (obj.rO.roles["Umbra Lord"].isPlayerDevilized(obj.pA[index].name)) 
			{ return false; };
		*/

		if (obj.pA[index].corrupted) { return false; };
		if (obj.pA[index].soulMark) { return false; };
		if (obj.pA[index].zombie == "zombie") { return false; };
		if (obj.pA[index].poisonCount > 0) { return false; };

		if (obj.pA[index].bomb) { return false; };
		if (obj.pA[index].burnCount > 0) { return false; };
		if (obj.pA[index].paralyzed) { return false; };
		if (obj.pA[index].frozen) { return false; };
		if (obj.pA[index].confused) { return false; };
		if (obj.pA[index].entranced) { return false; };

		if (obj.pA[index].injuredCount > 0) { return false; };
		if (obj.pA[index].markedMan) { return false; }

		if (obj.pA[index].boost > 0) { return false; };
		if (obj.pA[index].multiplier > 1) { return false; };
		if (obj.pA[index].shrinkCount > 0) { return false; };
		if (obj.pA[index].slow) { return false; }
		if (obj.pA[index].slowCharge != 0) { return false; }

		if (obj.pA[index].role == "Delayer") {

			if (obj.rO.roles["Delayer"].delayerCount > 0) {
				return false;
			};

		};

		return true;
	};


	updateSaintessSenseArray(obj) {

		if (!this.inGame) { return 0; };

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


		var stackObj = {
						type: "Individual",
						socketID: this.socketID, 
						destination: "Update Character Powers History",
						data: {"role": "Saintess" , "power": "senseArray", "newValue": saintessSenseArr}
					   };

		obj.stack.push(stackObj);	

	};


	/*need this to make sure the Saintess Power activates 
	AFTER Power Phase 1, so she can heal whatever status conditions
	are inflicted during Power Phase 1 */
	setSaintessPower(info, obj) {

		this.powersHistory[obj.rD.missionNo] = info;

	};



	purify(index, obj) {

		obj.pA[index].corrupted = false;
		obj.pA[index].soulMark = false;
		obj.pA[index].poisonCount = 0;

		if (obj.pA[index].zombie == "zombie") {
			obj.pA[index].zombie = "recovered";
		};

	}; //end purify


	esuna(index, obj) {

		obj.pA[index].bomb = false;
		obj.pA[index].burnCount = 0;
		obj.pA[index].paralyzed = false;
		obj.pA[index].frozen = false;
		/*message notifying player he/she was 
		thawed happens in messageHandler
		*/

		obj.pA[index].confused = false;
		obj.pA[index].entranced = false;

	}; //end esuna


	curaga(index, obj) {

		obj.pA[index].injuredCount = 0;
		obj.pA[index].markedMan = false;

		this.curagaBoostTarget = obj.pA[index].name;

	};


	dispel(index, obj) {

		obj.pA[index].shrinkCount = 0;
		obj.pA[index].multiplier = 1;
		obj.pA[index].boost = 0;

		obj.pA[index].slow = false;
		obj.pA[index].slowCharge = 0;

		if (obj.pA[index].role == "Delayer") {
			obj.rO.roles["Delayer"].delayerCount = 0;
		};

	};


	bless(index, obj) {

		obj.pA[index].bless = true;

	};


	safeguard(index, obj) {

		if (obj.pA[index].role == "Umbra Lord") {
			return 0;
		};

		obj.pA[index].safeguard = true;

	};


	/*this occurs right after Power Phase 1
	and should be right before status info sent
	to John/Princess */
	activateHolyPower(obj) {

		if (this.powersHistory[obj.rD.missionNo]["target"]
			== "nobody chosen") { return 0; };

		var hIndex = obj.pT[this.powersHistory[obj.rD.missionNo]["target"]];

		if (hIndex == undefined) { return 0; };

		switch (this.powersHistory[obj.rD.missionNo]["power"]) {

			case "Purify":

				this.purify(hIndex, obj);
				this.messageHandler("Purify", obj.pA[hIndex], obj);
				break;

			case "Esuna":

				/*messageHandler needs to be before Esuna takes effect
				because in case of freeze, you need to notify the 
				target he/she was thawed on the client side*/
				this.messageHandler("Esuna", obj.pA[hIndex], obj);
				this.esuna(hIndex, obj);
				break;

			case "Curaga":

				this.curaga(hIndex, obj);
				this.messageHandler("Curaga", obj.pA[hIndex], obj);
				break;

			case "Dispel":

				this.dispel(hIndex, obj);
				this.messageHandler("Dispel", obj.pA[hIndex], obj);
				break;

			case "Bless":

				this.bless(hIndex, obj);
				this.messageHandler("Bless", obj.pA[hIndex], obj);
				break;

			case "Safeguard":

				this.safeguard(hIndex, obj);
				this.messageHandler("Safeguard", obj.pA[hIndex], obj);
				break;

			default:

				return 0;


		}; //end switch
		
	}; //end activateHolyPower(whichPower, target, obj)


	adjustMissionVotesCuraga(playerObj) {

		if (playerObj.name == this.curagaBoostTarget) {
			playerObj.missionVote += 3;
		};

	};


	adjustMissionVotesBless(playerObj) {

		//if (!this.inGame) { return 0; };
		if (!playerObj.bless) { return 0; };

		playerObj.missionVote *= 2;

	};


	adjustMissionVotesSafeguard(obj) {

		if (!this.inGame && !obj.rO.roles["Persequor"].inGame) 
			{ return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].safeguard) { continue; };

			if (obj.pA[i].missionVote < 0) {
				obj.pA[i].missionVote *= -1;
			};

		}; //end for

	}; //end adjustMissionVotesSafeguard(obj)


	adjustTeamVotesBless(obj) {

		if (!this.inGame && !obj.rO.roles["Persequor"].inGame) 
			{ return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].bless) { continue; };

			obj.pA[i].teamVote *= 2;

		};

	};


	removeSaintessBuffsAtEndOfRound(obj) {

		if (!this.inGame) { return 0; };

		this.curagaBoostTarget = "nobody chosen";

		/*
		for (var i = 0; i < obj.pA.length; i++) {

			obj.pA[i].bless = false;
			obj.pA[i].safeguard = false;

		};
		*/

	}; //end removeSaintessBuffsAtEndofRound(obj)


	//this is inside VoteAdjuster.js
	adjustSomeDataWhenSaintessOnTheMissionTeam(obj) {
		
		var reverser = obj.rO.roles["Reverser"];

		reverser.personToReverseVote = "nobody chosen";

		if (reverser.mirrorWorldNormal == "activated") {
			reverser.mirrorWorldNormal = "used";
		};

		if (reverser.mirrorWorldReverse == "activated") {
			reverser.mirrorWorldReverse = "used";
		};


		obj.rO.roles["Baby Doll"].lullabyPowerUsed = false;

		obj.rO.roles["Persequor"].personVoteToCopy = "nobody chosen";

	}; //end adjustSomeDataWhenSaintessOnTheMissionTeam(obj)


	/*must be after setPlayersForMission in server.js */
	notifyMissionTeamThatSaintessIsOnTheTeam(obj) {

		if (!this.inGame) { return 0; };
		if (!obj.pA[this.index].selectedForMission) { return 0; };

		var sysMess = {
						type: "urgent",
						message: ("Saintess: The two primal forces which compose Aether are Light and Darkness, existence and nihility. This Sanctuary repels Umbras, creatures of Darkness, with its Light. Many negative status conditions are nullified when I, the Saintess, am on the Mission Team.")
					  };


		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			obj.stack.push(
							{
							  type: "SMI",
							  socketID: obj.pA[i].socketID,
							  data: sysMess
							}
						  ); //end push

		};

	}; //end notifyMissionTeamThatSaintessIsOnTheTeam()




	getSaintessMessage(power) {

		switch (power) {

			case "Purify":

				return ("The power of 'Purification' cleanses you of "
					+ "Corruption, Soul Mark, Zombie, and Poison."
				);

			case "Esuna":

				return ("If in doubt, use the panacea of 'Esuna'. You "
					+ "are now cured of Flame Seal Bomb, Burn, Freeze, "
					+ "Paralysis, Confusion, and Entrancement."
				);

			case "Curaga":

				return ("A broken warrior's body is rejuvenated by 'Curaga.' "
					+ "Your Injury, Bounty/Marked Man, are healed! "
					+ "Additionally, for this mission round ONLY, you will "
					+ "receive a +3 mission voting power boost!"
				);

			case "Dispel":

				return ("Your strength has been scattered to the 4 winds with "
					+ "the power of 'Dispel'. Temporal Charge, Slow, Slow Charge, "
					+ "Shrink, Boost, and Multiplication Enhancement are reset to normal."
				);

			case "Bless":
				return ("The Cosmic Void shifts through existence and nihility. "
					+ "May the Luces 'Bless' you on your quest for salvation. For "
					+ "this round ONLY, you will receive 2xs team voting AND "
					+ "mission voting power!"
				);

			case "Safeguard":
				return ("Nobody ever comes back.... But, just a little something to "
					+ "keep you safe. With 'Safeguard', for this turn ONLY, if "
					+ "chosen for the mission team, your mission vote is "
					+ "guaranteed to be positive!"
					);

			default:
				return ("Error, contact admin.");

		};

	}; //end getSaintessMessage(power)


	messageHandler(power, playerObj, obj) {


		var sysMess = {
						type: "urgent",
						message: ("Saintess: What is light? What is "
							+ "darkness? There lies an endless "
							+ "struggle for superiority, and yet "
							+ "neither exists without the other. "
							+ this.getSaintessMessage(power)
						)
			
					  };

		var stackObj = {
						type: "SMI",
						socketID: playerObj.socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);	


		if (power == "Esuna" && playerObj.frozen) {

			stackObj = {
							type: "Individual",
							socketID: playerObj.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: false}
						   };

			obj.stack.push(stackObj);	

		};

		
	}; //end messageHandler








}; //end class


module.exports = {
    Saintess
};