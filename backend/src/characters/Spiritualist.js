var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");


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


        this.soulCannonAmount = 0;


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




	getArrayOfSoulMarkedPlayersAndRemoveSM(obj) {

		var forLength = obj.pA.length;
		var i = 0;
		var smArray = [];

		for (i; i < forLength; i++) {

			if (!obj.pA[i].soulMark) { continue; };

			smArray.push(obj.pA[i].name);

			obj.pA[i].soulMark = false;
		
		};


		return smArray;

	}; //end getArrayOfSoulMarkedPlayers()




	soulRelease(choice, obj) {

		var smArray = this.getArrayOfSoulMarkedPlayersAndRemoveSM(obj);

		if (smArray.length == 0) {

			this.messageHandler("No Soul Marks", "", obj);

			return 0;
		};


		if (choice == "Soul Cannon") {

			this.soulCannonAmount = ((smArray.length) * -2.5);

			this.messageHandler("Soul Cannon", smArray, obj);


		} else {

			this.resonance(smArray, obj);

		}; //end else


	}; //end soulRelease




	resonance(smArray, obj) {

		var rolesIG = obj.rO.rolesInGame;
		var forLength = rolesIG.length;
		var i = 0;

		var energyPoolPowerUp = (smArray.length * -1);

		var notificationMessage = ("The soul(s) of " + formatArrayIntoString(smArray) + " have been released! The resonance of the freed souls adds " + energyPoolPowerUp + " to each of the Energy Pools of you and your fellow Villains.");


		for (i; i < forLength; i++) {

			if (rolesIG[i].team == "heroes") { continue; };

			obj.pA[i].energyPool += energyPoolPowerUp;

			this.messageHandler(
									"Resonance", 

									{
										mess: notificationMessage,
										socketID: obj.pA[i].socketID 
									}, 

									obj
							   );
		
		}; //end for


	}; //end resonance()



	adjustVoteSumSoulCannon(voteSum, obj) {

		if (this.soulCannonAmount == 0) {
			return voteSum;
		};


		if (!obj.pA[this.index].selectedForMission) { 

			this.soulCannonAmount = 0;

			return voteSum;

		};
	

		voteSum += this.soulCannonAmount;

		this.soulCannonAmount = 0;

		return voteSum;

	}; //end adjustVoteSumSoulCannon



	messageHandler(power, data, obj) {

		if (power == "Resonance") {
	
			var sysMess = {
							type: "power",
							message: data.mess
						  };

			var stackObj = {
							type: "SMI",
							socketID: data.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	




		} else if (power == "Soul Cannon") {


			var sysMess = {
							type: "power",
							message: ("The souls of " + formatArrayIntoString(data) + " have been released! Soul Cannon focuses the released energy into a powerful blast of negative energy! " + (data.length * -2.5) + " will be added to this round's Mission Team's vote sum ONLY if you, the Spiritualist, are chosen for the Mission Team.")
						  };

			var stackObj = {
							type: "SMI",
							socketID: obj.pA[this.index].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);		




		} else if (power == "No Soul Marks") {

			var sysMess = {
							type: "power",
							message: ("No player currently has a 'Soul Mark' placed within his/her soul. Soul Release fails.")
						  };

			var stackObj = {
							type: "SMI",
							socketID: obj.pA[this.index].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	

		}; //end if power == "No Soul Marks"



	}; //end messageHandler





}; //end class


module.exports = {
    Spiritualist
};