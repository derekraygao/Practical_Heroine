var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Persequor extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Persequor";
        this.alignment = "evil";
        this.team = "villains";

        this.originalPersequorInfo = 
	        {
	        	name: "",
	        	index: -1,
	        	socketID: ""
	        };

        this.swappedPlayerInfo = 
	        {
	        	name: "",
	        	index: -1,
	        	socketID: ""
	        };

	}; //end constructor


	copyCat(personToCopy, obj) {

		var copyIndex = obj.pT[personToCopy];
		var copyVote = obj.pA[copyIndex].missionVote;

		if (copyVote >= 0) {
			copyVote *= -1;
		};

		obj.pA[obj.rO.roles["Persequor"].index].missionVote = copyVote; 

	};


	findAHeroToSwitchWith(obj) {

		var heroesIndicesArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.rO.rolesInGame[i].team == "villains") { continue; };
			if (obj.pA[i].role == "Saintess") { continue; };

			heroesIndicesArr.push(i);
		};

		shuffle(heroesIndicesArr);

		return heroesIndicesArr[0];

	}; //end findAHeroToSwitchWith(obj)


	identityTheft(obj) {

		//checks to make sure it isn't currently being used in case of hacking
		if (this.originalPersequorInfo.index != -1) { return 0; };

		var theftInd = this.findAHeroToSwitchWith(obj);
		var pInd = obj.rO.roles["Persequor"].index;

		this.originalPersequorInfo.name = this.name;
		this.originalPersequorInfo.index = pInd;
		this.originalPersequorInfo.socketID = obj.pA[pInd].socketID;

		this.swappedPlayerInfo.name = obj.pA[theftInd].name;
		this.swappedPlayerInfo.index = theftInd;
		this.swappedPlayerInfo.socketID = obj.pA[theftInd].socketID;

		//switching playerTracker object index
		obj.pT[this.swappedPlayerInfo.name] = this.originalPersequorInfo.index;
		obj.pT[this.originalPersequorInfo.name] = this.swappedPlayerInfo.index;


		obj.pA[theftInd].name = this.originalPersequorInfo.name;
		obj.pA[theftInd].socketID = this.originalPersequorInfo.socketID;

		obj.rO.rolesInGame[theftInd].name = this.originalPersequorInfo.name;
		obj.rO.rolesInGame[theftInd].socketID = this.originalPersequorInfo.socketID;

		obj.pA[pInd].name = this.swappedPlayerInfo.name;
		obj.pA[pInd].socketID = this.swappedPlayerInfo.socketID;

		obj.rO.rolesInGame[pInd].name = this.swappedPlayerInfo.name;
		obj.rO.rolesInGame[pInd].socketID = this.swappedPlayerInfo.socketID;

	}; //end identityTheft


	switchBackIdentities(obj) {

		if (!obj.rO.roles["Persequor"].inGame) { return 0; };
		
		//index == -1 means the identityTheft power was not used
		if (this.originalPersequorInfo.index == -1) { return 0; };

		var persequorInd = this.originalPersequorInfo.index;
		var stolenInd = this.swappedPlayerInfo.index;

		//do switch back

		obj.pT[this.swappedPlayerInfo.name] = stolenInd;
		obj.pT[this.originalPersequorInfo.name] = persequorInd;

		obj.pA[persequorInd].name = this.originalPersequorInfo.name;
		obj.pA[persequorInd].socketID = this.originalPersequorInfo.socketID;
		obj.rO.rolesInGame[persequorInd].name = this.originalPersequorInfo.name;
		obj.rO.rolesInGame[persequorInd].socketID = this.originalPersequorInfo.socketID;

		obj.pA[stolenInd].name = this.swappedPlayerInfo.name;
		obj.pA[stolenInd].socketID = this.swappedPlayerInfo.socketID;
		obj.rO.rolesInGame[stolenInd].name = this.swappedPlayerInfo.name;
		obj.rO.rolesInGame[stolenInd].socketID = this.swappedPlayerInfo.socketID;


		this.originalPersequorInfo.name = ""
		this.originalPersequorInfo.index = -1;
		this.originalPersequorInfo.socketID = "";

		this.swappedPlayerInfo.name = "";
		this.swappedPlayerInfo.index = -1;
		this.swappedPlayerInfo.socketID = "";
		

	};




}; //end class


module.exports = {
    Persequor
};