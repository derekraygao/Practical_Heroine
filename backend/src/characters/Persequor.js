var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Persequor extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Persequor";
        this.alignment = "evil";
        this.team = "villains";

        /*
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
	    */

	    //20 choices
        this.metronomeChoices = ["F.S. Bomb", "F.S. Bomb", "Burn", 
        				 "Burn", "Injury", "Injury", "Paralysis", 
        				 "Paralysis", "Freeze", "Freeze", "Zombie", 
        				 "Slow", "Confusion", "Confusion", "Shrink", 
						 "Shrink", "Boost", "Multiplier", "Bless", 
						 "Safeguard"];



	    this.personVoteToCopy = "nobody chosen";

	    this.persequorRoleObjectReference = {};

	    //have a 0: because for persequor, you check the previous mission in swap back
	    //so for mission 1, it's 1 - 1 = 0...this to prevent access errors
        this.powersHistory = 
        {	
        	0: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},
        	1: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},
        	2: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},
        	3: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},
        	4: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},
        	5: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},
        	6: {"switchedName": "nobody chosen", "originalRole": "", "socketID": "", "originalRolesObject": {}},

        };



	}; //end constructor




	copyCat(personToCopy) {

		this.personVoteToCopy = personToCopy;

	};


	/*don't need to check if persequor is on the team, because 
	this.personVotetoCopy HAS to be "nobody chosen" unless persequor on team
	and has used her powers 
	Also, personVoteToCopy is reset in outside function
	*/
	adjustMissionVoteCopyCat(obj) {

		//if (!this.inGame) { return 0; };
		if (this.personVoteToCopy == "nobody chosen") { return 0; };

		//Pear Vanish Power Adjustment
		if ([this.name, this.personVotetoCopy].
			includes(obj.rO.roles["Pear"].playerVoteToVanish)) {

			obj.pA[this.index].missionVote = 0;

			this.personVoteToCopy = "nobody chosen";

			return 0;

		}; 


		var copyIndex = obj.pT[this.personVoteToCopy];
		if (copyIndex == undefined) { return 0; };
		
		//is this necessary?
		if (!obj.pA[copyIndex].selectedForMission) {

			obj.pA[this.index].missionVote = -1;
			this.personVoteToCopy = "nobody chosen";

			return 0;

		};


		//Slow Power Adjustment
		if (obj.pA[copyIndex].slow) {

			obj.pA[this.index].missionVote = 0;

			this.personVoteToCopy = "nobody chosen";

			return 0;

		};



		var copyVote = obj.pA[copyIndex].missionVote;

		if (copyVote >= 0) {
			copyVote *= -1;
		};


		obj.pA[this.index].missionVote = copyVote;

		this.personVoteToCopy = "nobody chosen";

	};


	/* the reason you do not directly set powersHistory.switchedName =
	obj.pA[this.findAHeroToSwitchWith(obj)].name, is because if Noah
	usees his hurricane power, then the indices become messed up.
	*/
	activateIdentityTheft(obj) {

		this.powersHistory[obj.rD.missionNo].switchedName = 
		"switch with somebody";

		this.persequorRoleObjectReference = obj.rO.roles["Persequor"];

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

		if (this.powersHistory[obj.rD.missionNo].switchedName 
			== "nobody chosen") {
			return 0;
		};

		/* Reason we had to use a dummy name of "switch with somebody" 
		is because Noah's hurricane will mess up indices order */
		this.powersHistory[obj.rD.missionNo].switchedName = 
		obj.pA[this.findAHeroToSwitchWith(obj)].name;


		var switchedInd = obj.pT[this.powersHistory[obj.rD.missionNo].switchedName];

		/*console.log("Persequor switch is " + obj.pA[switchedInd].name 
			+ ", whose role is: " + obj.pA[switchedInd].role); */

		this.powersHistory[obj.rD.missionNo].switchedName = obj.pA[switchedInd].name;
		this.powersHistory[obj.rD.missionNo].originalRole = obj.pA[switchedInd].role;
		this.powersHistory[obj.rD.missionNo].socketID = obj.pA[switchedInd].socketID;
		this.powersHistory[obj.rD.missionNo].originalIndex = switchedInd;

		obj.pA[this.index].role = obj.pA[switchedInd].role;

		obj.rO.rolesInGame[switchedInd].name = this.name;
		obj.rO.rolesInGame[switchedInd].socketID = this.socketID;
		
		obj.pA[switchedInd].role = "???";

		var tempSwitchedPlayerTargetPlayerObj = obj.pA[switchedInd];

		//switches around switched players in playerObject array
		obj.pA[switchedInd] = obj.pA[this.index];
		obj.pA[this.index] = tempSwitchedPlayerTargetPlayerObj;

		//switchedInd now refers to Persequor and this.index refers to switched player

		//swaps out Persequor for Unknown roles object
		obj.rO.rolesInGame[this.index] = obj.rO.roles["Unknown"];

		obj.rO.roles["Unknown"].name = obj.pA[this.index].name;
		obj.rO.roles["Unknown"].socketID = obj.pA[this.index].socketID;
		obj.rO.roles["Unknown"].index = this.index;
		/* Now change obj.pT which maps player names and indices in rolesInGame */

		obj.pT[this.name] = switchedInd;
		obj.pT[obj.pA[this.index].name] = this.index;


	};


	//this needs to occur right before night phase/night chat
	switchBackIdentities(obj) {

		if (obj.rD.missionNo <= 1) { return 0; };

		if (this.powersHistory[(obj.rD.missionNo -1)].switchedName 
			== "nobody chosen") {
			return 0;
		};

		//right now, this.index refers to ??? and switched player
		//switchedIndex refers to where Persequor currently is
		var switchedIndex = obj.pT[this.name];
		var originalRole = this.powersHistory[(obj.rD.missionNo -1)].originalRole;
		
		//switched, non-persequor player
		obj.pA[this.index].role = originalRole;
		obj.pA[switchedIndex].role = "Persequor";

		obj.rO.roles[originalRole].name = obj.pA[this.index].name;
		obj.rO.roles[originalRole].socketID = obj.pA[this.index].socketID;

		obj.rO.rolesInGame[this.index] = this.persequorRoleObjectReference;

		/* swap playerObjects back */
		var tempPersequorPlayerObject = obj.pA[switchedIndex];
		obj.pA[switchedIndex] = obj.pA[this.index];
		obj.pA[this.index] = tempPersequorPlayerObject;


		obj.pT[this.name] = this.index;
		obj.pT[this.powersHistory[(obj.rD.missionNo -1)].switchedName] = switchedIndex;


	}; //end switchBackIdentities



	metronome(target, obj) {

		var rndInt = (Math.floor(Math.random() * 20));

		var rndFactor = (Math.floor(Math.random() * 4) + 1);

		var statusObj = {
						 "target": target,
						 "effect": this.metronomeChoices[rndInt],
						 "factor": rndFactor
						};

		if (!["Saintess", "Umbra Lord"].includes(obj.pA[obj.pT[target]].role)) {
			obj.sE.push(statusObj);
		};
		

		this.messageHandler("Metronome", statusObj, obj);


	}; //end metronome



	messageHandler(power, data, obj) {

		var powerString = "";

		if (["Multiplier", "Boost"].includes(data.effect)) {
			powerString = " (" + data.factor + ")";
		};

		var sysMess = {
						type: "power",
						message: ("The power of metronome inflicts '" + data.effect + powerString + "' on " + data.target + "!")
					  };

		var stackObj = {
						type: "SMI",
						socketID: this.socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);

	}; //end messageHandler


	/*
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

	*/


}; //end class


module.exports = {
    Persequor
};