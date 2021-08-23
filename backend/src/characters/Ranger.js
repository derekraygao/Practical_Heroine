var {RolesMasterClass} = require("./RolesMasterClass.js");

class Ranger extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Ranger";
        this.alignment = "good";
        this.team = "heroes";

        this.powersHistory = 
        {
        	1: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        	2: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        	3: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        	4: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        	5: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        	6: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        	7: {"shrinkName": "nobody chosen", "AMR": "nobody chosen" },
        };

	}; //end constructor


	rangerSensing(playerObj, obj) {

		if (playerObj.role == "Delayer") {
			if (obj.rO.roles["Delayer"].delayerCount > 0) { return "status"; };
		};

		if (playerObj.role == "Umbra Lord") {
			if (obj.rO.roles["Umbra Lord"].bide > 0) { return "status"; };
		};


		if (playerObj.corrupted) { return "status"; };
		if (playerObj.soulMark) { return "status"; };
		if (playerObj.poisonCount > 0) { return "status"; };
		if (playerObj.zombie == "zombie") { return "status"; };

		if (playerObj.bomb) { return "status"; };
		if (playerObj.burnCount > 0) { return "status"; };
		if (playerObj.frozen) { return "status"; };
		if (playerObj.paralyzed) { return "status"; };
		if (playerObj.confused) { return "status"; };
		if (playerObj.entranced) { return "status"; };

		if (playerObj.injuredCount > 0) { return "status"; };
		if (playerObj.markedMan) { return "status"; };

		if (playerObj.slow) { return "status"; };
		if (playerObj.multiplier > 1) { return "status"; };
		if (playerObj.boost > 0) { return "status"; };

		if (playerObj.energyPool != 0) { return "status"; };

		return "no status";

	};


	updateRangerSenseArray(obj) {

		if (!this.inGame) { return 0; };
		if (obj.rD.missionNo == 1) { return 0; };

		var senseArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			senseArr.push(
				{
					name: obj.pA[i].name,
					status: this.rangerSensing(obj.pA[i], obj)	
				}
			);

		}; //end for


		this.messageHandler("Update Ranger Sense Array", 

							{
								role: "Ranger",
								power: "senseArray",
								newValue: senseArr
							}, 

							obj
						   );


	}; //end updateRangerSenseArray()



	/*You want to do anti-mana ray AFTER power phase 2, in case someone is frozen. Immediately 
	unfreezing them could cause their frontend to re-render and show their powers again */
	setAntiManaRayTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo]["AMR"] = name;

	};


	antiManaRay(obj) {

		if (this.powersHistory[obj.rD.missionNo]["AMR"]
			== "nobody chosen") {
			return 0;
		};


		var pObj = obj.pA[obj.pT[this.powersHistory[obj.rD.missionNo]["AMR"]]];

		if (pObj.role == "Saintess") { return 0; };


		pObj.soulMark = false;
		pObj.poisonCount = 0;
		pObj.zombie = "human";

		pObj.bomb = false;
		pObj.burnCount = 0;
		pObj.paralyzed = false; //is this necessary? since anti mana ray occurs in power phase 2, paralysis effect only works during team leader choosing stage
		pObj.confused = false;
		pObj.entranced = false;

		pObj.injuredCount = 0;
		pObj.markedMan = false;

		pObj.slow = false;

		pObj.multiplier = 1;
		pObj.boost = 0;

		pObj.energyPool = 0;

		pObj.safeguard = false;
		pObj.bless = false;
		pObj.heartacheDefense = false;
		pObj.therapy = false;
		pObj.groupHug = false;


		if (pObj.role == "Umbra Lord") {
			obj.rO.roles["Umbra Lord"].bide = 0;
		};


		if (pObj.role == "Delayer") {
			obj.rO.roles["Delayer"].delayerCount = 0;
		};


		if (obj.rO.roles["Saintess"].curagaBoostTarget
			== pObj.name) {

			obj.rO.roles["Saintess"].curagaBoostTarget = "nobody chosen";

		};



		if (pObj.frozen) {

			pObj.frozen = false;

			this.messageHandler("Unfreeze", {socketID: pObj.socketID}, obj);

		};

		
		this.messageHandler("Anti-Mana Ray", {socketID: pObj.socketID}, obj);

	}; //end antiManaRay



	setShrinkTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo].shrinkName = name;

		var statusObj = {
						 "target": name,
						 "effect": "Shrink",
						 "factor": 0
						};

		if (obj.pA[obj.pT[name]].role !== "Saintess") {
			obj.sE.push(statusObj);
		};

	};


	//when power targets, maybe do (if shrinkCount == 0) then set to -1,
	//otherwise, +=2
	//maybe in adjust votes,  if shrinkCount < 0,
	//then you set shrinkCount to 2, so the power starts NEXT mission
	shrinkRay(name, obj) {

		if (this.powersHistory[obj.rD.missionNo].shrinkName == "nobody chosen") {
			return 0;
		};

		var ind = obj.pT[this.powersHistory[obj.rD.missionNo].shrinkName];

		if (obj.pA[ind].role == "Saintess") { return 0; };
		
		obj.pA[ind].shrinkCount += 2;

	};


	adjustShrinkCount(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].shrinkCount > 0) {
				obj.pA[i].shrinkCount -= 1;
			};

		};

	}; //end adjustShrinkCount



	//is inGame necessary (?) since it's impossible to change shrinkCount
	//unless Ranger is in the game
	adjustMissionVotesShrink(playerObj) {

		//if (!this.inGame) { return 0; };

		if (playerObj.shrinkCount <= 0) { return 0; };

		playerObj.missionVote = (playerObj.missionVote / 2);

	}; //adjustMissionVotesShrink()


	adjustTeamVotesShrink(obj) {

		//if (!this.inGame) { return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].shrinkCount <= 0) { continue; };

			obj.pA[i].teamVote = (obj.pA[i].teamVote / 2);

		};

	}; //adjustTeamVotesShrink()




	messageHandler(power, data, obj) {

		if (power == "Anti-Mana Ray") {

			var sysMess = {
							type: "power",
							message: ("You were blasted by the Yellow Mana Ranger's Anti-Mana Ray! All status conditions, good & bad (except 'Corruption' & 'Shrink'), have been nullified!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: data.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	



		} else if (power == "Unfreeze") {


			var stackObj = {

							type: "Individual",
							socketID: data.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: false}

						   };

			obj.stack.push(stackObj);



		} else if (power == "Update Ranger Sense Array") {

			var stackObj = {
							type: "Individual",
							socketID: this.socketID,
							destination: "Update Character Powers History",
							data: data
						   };

			obj.stack.push(stackObj);


		};


	}; //end messageHandler





}; //end class


module.exports = {
    Ranger
};