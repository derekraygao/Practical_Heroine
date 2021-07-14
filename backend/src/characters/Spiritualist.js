var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Spiritualist extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Spiritualist";
        this.alignment = "evil";
        this.team = "villains";

        //refers to number of players
        this.heroesArrayFor5 = ["Marcus", "Ichigo", "Balancer", 
        						"Detective Chat", "Ranger", "Pear", "Esper", 
        						"Scientist", "Sensor", "Jailer"];

        this.heroesArrayFor6810 = ["Marcus", "Balancer", "Detective Chat", 
        						   "Ranger", "Pear", "Esper", "Scientist", 
        						   "Sensor", "Jailer"];

        this.heroesArrayFor79 = ["Marcus", "Ichigo", "Balancer", 
        						 "Detective Chat", "Ranger", "Pear",
        						 "Esper", "Scientist", "Sensor", "Jailer"];


        /*numbers refer to mission round the power was used, but the powers
        /take effect the next mission
        no need for mission 7, since there is no mission 8
        */
        this.powersHistory = 
        {
        	1: {"soulMark": "nobody chosen"},
        	2: {"soulMark": "nobody chosen"},
        	3: {"soulMark": "nobody chosen"},
        	4: {"soulMark": "nobody chosen"},
        	5: {"soulMark": "nobody chosen"},
        	6: {"soulMark": "nobody chosen"},
        };


	}; //end constructor


	markAPlayer(name, obj) {

		this.powersHistory[obj.rD.missionNo].soulMark = name;

	};


	//check for if role in game occurs in AbilityManager
	plantSoulMark(obj) {

		if (this.powersHistory[obj.rD.missionNo].soulMark == "nobody chosen") { return 0; };

		var index = obj.pT[this.powersHistory[obj.rD.missionNo].soulMark];
		
		if (obj.rO.rolesInGame[index].team == "villains") { return 0; };
		if (obj.pA[index].role == "Saintess") { return 0; };

		obj.pA[index].soulMark = true;

	};


	countNumberOfSoulMarks(obj) {

		var soulMarkNumber = 0;

		for (var i = 0; i < obj.pA.length; i++) {

			/*prevent counting onself, but placing soulMark
			should skip villains anyway, so this is redundant?*/
			if (this.index == i) { continue; };

			if (obj.pA[i].soulMark) { soulMarkNumber += 1; };
			
		};

		return soulMarkNumber;

	};


	adjustSpiritualistMissionVote(obj) {

		if (!this.inGame) { return 0; };

		if (!obj.pA[this.index].selectedForMission) { return 0; };

		var adjustSpiritualistVote = this.countNumberOfSoulMarks(obj) * 1.25;

		if (obj.pA[this.index].missionVote >= 0) {
			obj.pA[this.index].missionVote += adjustSpiritualistVote;
		} else {
			obj.pA[this.index].missionVote -= adjustSpiritualistVote;
		};

	};

	

	returnRandomHeroChar(char, numOfPlayers) {

		if (numOfPlayers == 5) {

			shuffle(this.heroesArrayFor5);

			//this to avoid choosing same role as actual role
			if (this.heroesArrayFor5[0] == char) {
				return this.heroesArrayFor5[1];
			} else {
				return this.heroesArrayFor5[0];
			};

		};


		if ([6, 8, 10].includes(numOfPlayers)) {

			shuffle(this.heroesArrayFor6810);

			if (this.heroesArrayFor6810[0] == char) {
				return this.heroesArrayFor6810[1];
			} else {
				return this.heroesArrayFor6810[0];
			};

		};


		if ([7, 9].includes(numOfPlayers)) {

			shuffle(this.heroesArrayFor79);

			if (this.heroesArrayFor79[0] == char) {
				return this.heroesArrayFor79[1];
			} else {
				return this.heroesArrayFor79[0];
			};

		};


	}; //end returnRandomHeroChar


	soulScan(name, obj) {

		var index = obj.pT[name];
		if (!(index > -1)) { return 0; };
		if (obj.rO.rolesInGame[index].team == "villains") 
			{ return ["Villain"]; };

		var actualRole = obj.pA[index].role;

		if (["Princess", "Seer", "Aura Knight", "Oracle"].includes(actualRole)) {

			return ["Princess", "Seer", "Aura Knight", "Oracle"];

		};

		if (actualRole == "Saintess") { return ["Saintess"]; };


		var fakeRole = this.returnRandomHeroChar(actualRole, obj.pA.length);

		var rolesArr = [actualRole, fakeRole];
		shuffle(rolesArr);

		return rolesArr;

	}; //end soulScan






}; //end class


module.exports = {
    Spiritualist
};