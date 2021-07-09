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
        	1: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},
        	2: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},
        	3: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},
        	4: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},
        	5: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},
        	6: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},
        	7: {"paralyzed": "nobody chosen", "frozen": "nobody chosen"},

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

		if (obj.rD.missionNo != 1) {

			if (this.powersHistory[(obj.rD.missionNo - 1)].frozen != "nobody chosen") {
				obj.pA[obj.pT[this.powersHistory[(obj.rD.missionNo - 1)].frozen]].frozen = false;
			};

		}; //end if missionNo != 1

		if (this.powersHistory[obj.rD.missionNo].frozen != "nobody chosen") {

			obj.pA[obj.pT[this.powersHistory[obj.rD.missionNo].frozen]].frozen = true;

		};


	}; //end useIcePunch(obj)




	getNoahPowersHistoryName(paralyzedOrFrozen, missionNo) {

		if (paralyzedOrFrozen == "paralyzed") {

			return this.powersHistory[missionNo].paralyzed;

		} else {

			return this.powersHistory[missionNo].frozen;

		};

	}; //end getNoahPowersHistoryName


	thawPlayer() {

		if (this.icePunchTarget.name == "nobody chosen") {
			return {};
		};

		var frozenPlayerInfo = {
								 role: this.icePunchTarget.role,
								 socketID: this.icePunchTarget.socketID
							   }


		this.icePunchTarget = {
								name: "nobody chosen",
								role: "",
								socketID: ""
							  }

		return frozenPlayerInfo;

	};




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



}; //end class


module.exports = {
    Noah
};