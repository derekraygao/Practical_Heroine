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

        this.heroesArrayFor79 = ["Marcus", "Saintess", "Ichigo", "Balancer", 
        						 "Detective Chat", "Ranger", "Pear",
        						 "Esper", "Scientist", "Sensor", "Jailer"];



	}; //end constructor


	plantSoulMark(name, obj) {

		var index = obj.pT[name];
		if (!(index > -1)) { return 0; };
		if (obj.rO.rolesInGame[index].team == "villains") { return 0; };

		obj.pA[index].soulMark = true;

	};


	countNumberOfSoulMarks(obj) {

		var soulMarkNumber = 0;

		for (var i = 0; i < obj.pA.length; i++) {

			if (this.index == i) { continue; };

			if (obj.pA[i].soulMark) { soulMarkNumber += 1; };
			
		};

		return soulMarkNumber;

	};


	adjustSpiritualistMissionVote(obj) {

		if (!this.inGame) { return 0; };

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
			{ return ["villain", "villain"]; };

		var actualRole = obj.pA[index].role;

		if (["Princess", "Seer", "Aura Knight", "Oracle"].includes(actualRole)) {

			return ["Princess", "Seer", "Aura Knight", "Oracle"];

		};


		var fakeRole = this.returnRandomHeroChar(actualRole, obj.pA.length);

		var rolesArr = [actualRole, fakeRole];
		shuffle(rolesArr);

		return rolesArr;

	}; //end soulScan






}; //end class


module.exports = {
    Spiritualist
};