var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Noah extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Noah";
        this.alignment = "evil";
        this.team = "villains";

        this.hurricane = "not activated";
        this.thunderWaveTarget = "nobody chosen";
        this.icePunchTarget = "nobody chosen";
        
        /*numbers refer to mission round the power was used, but the powers
        /take effect the next mission
        technically no need for mission 7, since there is no mission 8,
        but maybe keep in case someone tries to use Noah's power during 
        mission 7
        */
        this.powersHistory = 
        {
        	1: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},
        	2: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},
        	3: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},
        	4: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},
        	5: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},
        	6: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},
        	7: {"paralyzed": "nobody chosen", "frozen": "nobody chosen", "zombie": "nobody chosen"},

        };

	}; //end constructor



	activateHurricane() {

		this.hurricane = "activated";

	};

	//don't need to check if in game
	//only way to change hurricane is if Noah is in game
	useHurricane(obj) {

		if (this.hurricane == "activated") {

			shuffle(obj.pA);
			this.reMapIndicesAfterShuffling(obj);

			this.hurricane = "used";

		};

	}; //end useHurricane

	//thunder wave effect taken care of in Controller UpdateTeamLeaderIndex
	//reset thunderwave inside server.js
	setThunderWave(name, obj) {

		if (["Saintess", "Umbra Lord"].includes(obj.pA[obj.pT[name]].role)) {
			return 0;
		};

		this.powersHistory[obj.rD.missionNo].paralyzed = name;

	};


	setIcePunch(name, obj) {

		if (["Saintess", "Umbra Lord"].includes(obj.pA[obj.pT[name]].role)) {
			return 0;
		};

		this.powersHistory[obj.rD.missionNo].frozen = name;

	};


	/*
		zombie = "human" is default
		zombie = "zombie" means reverse B.V.P.
		zombie = "recovered" means +2 to mission voting power
	*/
	setNightmareSyndrome(name, obj) {

		if (obj.pA[obj.pT[name]].role == "Saintess") {
			return 0;
		};

		this.powersHistory[obj.rD.missionNo].zombie = name;

	};


	//check to see if Noah is in the game occurs in AbilityManager
	addThunderWaveEffect(obj) {

		if (!this.inGame) { return 0; };

		var thunderWaveTarget = this.powersHistory[obj.rD.missionNo].paralyzed;

	    if (thunderWaveTarget !== "nobody chosen") {

	      var tIndex = obj.pT[thunderWaveTarget];
	      if (tIndex !== 0 && !tIndex) { return 0; };

	      obj.pA[tIndex].paralyzed = true;

	    };	

	}; //end useThunderWave()



	removeThunderWaveEffect(obj) {

		if (!this.inGame) { return 0; };

	    if (obj.rD.missionNo !== 1) {

	      var prevParaName = this.powersHistory[(obj.rD.missionNo - 1)].paralyzed;
	  
	      if (prevParaName != "nobody chosen") {

	      	var pInd = obj.pT[prevParaName];
	      	if (pInd !== 0 && !pInd) { return 0; };

	        obj.pA[pInd].paralyzed = false;

	      }; //end second if

	    }; //end if missionNo != 1	

	}; //end removeThunderWaveEffect()



	adjustIcePunch(obj) {

		var freezeTarget = this.powersHistory[obj.rD.missionNo].frozen;

		if (freezeTarget == "nobody chosen") { return 0; };
		
		var fInd = obj.pT[freezeTarget];

		obj.pA[fInd].frozen = true;

		this.messageHandler(
							"Freeze Target", 
							obj.pA[fInd].socketID, 
							obj
						   );

	}; //end useIcePunch(obj)



	adjustZombieStatus(obj) {

		if (this.powersHistory[obj.rD.missionNo].zombie 
			!== "nobody chosen") {
			
			var zInd = obj.pT[this.powersHistory[obj.rD.missionNo].zombie];
	
			obj.pA[zInd].zombie = "zombie";

		};

	};


	adjustMissionVotesNightmareSyndromeZombie(obj) {

		if (!this.inGame) { return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].zombie == "zombie") {
				obj.pA[i].missionVote *= -1;
			};

		}; //end for

	};


	adjustMissionVotesZombieRecovered(playerObj) {

		if (playerObj.zombie == "recovered") {
			playerObj.missionVote += 2.5;
			playerObj.zombie = "human";
		};

	};



	getNoahPowersHistoryName(paralyzedOrFrozen, missionNo) {

		if (paralyzedOrFrozen == "paralyzed") {

			return this.powersHistory[missionNo].paralyzed;

		} else {

			return this.powersHistory[missionNo].frozen;

		};

	}; //end getNoahPowersHistoryName




	reMapIndicesAfterShuffling(obj) {

		var pAMap = {};
		var tempRolesArray = [];

		for (var i = 0; i < obj.pA.length; i++) {

			pAMap[obj.pA[i].role] = i;

		};


		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			tempRolesArray[pAMap[obj.rO.rolesInGame[i].role]]
			= obj.rO.rolesInGame[i];

			obj.rO.rolesInGame[i].index = pAMap[obj.rO.rolesInGame[i].role];

			obj.pT[obj.rO.rolesInGame[i].name] = pAMap[obj.rO.rolesInGame[i].role];

		};


		obj.rO.rolesInGame = tempRolesArray;

	};




	messageHandler(power, data, obj) {

		//data for Freeze Target is target's socketID
		if (power == "Freeze Target") {

			var stackObj1 = {
							type: "Individual",
							socketID: data,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: true}
						   };

			var stackObj2 = {
							type: "SMI",
							socketID: data,
							data: {
									type: "urgent",
									message: ("You were frozen! For "
									+ "Mission " + (obj.rD.missionNo + 1)
									+ ", you won't be able to use any "
									+ "of your powers!")
								  }
						   };

			obj.stack.push(stackObj1);
			obj.stack.push(stackObj2);

		}; 


	}; //end messageHandler





}; //end class


module.exports = {
    Noah
};