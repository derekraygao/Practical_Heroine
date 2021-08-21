var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Spiritualist extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Spiritualist";
        this.alignment = "evil";
        this.team = "villains";

        /*Don't have Saintess, Princess, Oracle, Aura Knight
        or Seer, since those are special roles that are handled
        differently */
        this.goodRolesOdd = ["Ichigo", "Marcus", "Lottie", "Lan", 
        					 "Balancer", "Esper", "Pear", 
        					 "Detective Chat", "Ranger", 
        					 "Scientist", "Jailer", "Pharaoh"];

        //no Ichigo
        this.goodRolesEven = ["Marcus", "Lottie", "Lan", 
        					 "Balancer", "Esper", "Pear", 
        					 "Detective Chat", "Ranger", 
        					 "Scientist", "Jailer", "Pharaoh"];


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

		if ((numOfPlayers % 2) == 1) {

			shuffle(this.goodRolesOdd);

			//this to avoid choosing same role as actual role
			if (this.goodRolesOdd[0] == char) {
				return this.goodRolesOdd[1];
			} else {
				return this.goodRolesOdd[0];
			};

		};


		shuffle(this.goodRolesEven);

		//this to avoid choosing same role as actual role
		if (this.goodRolesEven[0] == char) {
			return this.goodRolesEven[1];
		} else {
			return this.goodRolesEven[0];
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