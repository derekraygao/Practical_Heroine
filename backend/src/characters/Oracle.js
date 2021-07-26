var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");

class Oracle extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Oracle";
        this.alignment = "good";
        this.team = "heroes";

        this.numberOfLucinites = -1;

        this.powerUsed = 
				        {
				        	"1 and 1": false,
				        	"At Least 1 Good": false,
				        	"At Least 1 Evil and Good": false,
				        	"Princess": false,
				        	"Roles": false,
				        	"LightAndDarkUsedArray": [],
				        };


		this.goodRoles7or9 = ["Princess", "Saintess", "Ichigo", "Marcus", 
                              "Lottie", "Lan", "Seer", "Balancer", "Esper", 
                              "Pear", "Detective Chat", "Aura Knight", 
                              "Ranger", "Scientist", "Oracle", "Jailer", 
                              "Sensor"];

        //no Ichigo or Saintess
        this.goodRoles = ["Princess", "Seer", "Balancer", "Esper", 
                          "Pear", "Lan", "Marcus", "Lottie", 
                          "Detective Chat", "Aura Knight", 
                          "Ranger", "Scientist", "Oracle", 
                          "Jailer", "Sensor"];

        this.badRoles = ["Umbra Lord", "Hecate", "Bomberman", 
                         "Lieutenant Blitz", "Reverser", "Noah",  
                         "Delayer", "Persequor", "Baby Doll",
                         "Spiritualist", "Backstabber", "Toxiturtle", 
                         "Kaguya", "Psychologist"];



	}; //end constructor



	heroAndVillainNamesArray(obj) {

		var heroesArray = [];
		var villainsArray = [];

		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			//don't put your own name inside array
			if (obj.rO.rolesInGame[i].name == 
				this.name) { continue; };

			if (obj.rO.rolesInGame[i].team == "heroes") {
				heroesArray.push(obj.rO.rolesInGame[i].name);
			} else {
				villainsArray.push(obj.rO.rolesInGame[i].name);
			};

		}; //end for

		shuffle(heroesArray);
		shuffle(villainsArray);

		return (

			{
				hA: heroesArray,
				vA: villainsArray
			}

		);

	}; //end heroAndVillainNamesArray(obj)



	true50Percent() {

	  var ranNum = Math.floor(Math.random() * 2 + 1); //random number of 1-2

	  return ( (ranNum == 1) ? true : false );

	};


	_1And1(obj) {

		var oracleInfo = [];
		//hero villain array
		var arr = this.heroAndVillainNamesArray(obj);

		//array is already randomized inside heroAndVillainNamesArray

		oracleInfo.push(arr.hA[0]);
		oracleInfo.push(arr.vA[0]);

		shuffle(oracleInfo);

		return oracleInfo;

	};



	atLeast1Good(obj) {

		var oracleInfo = [];
		var arr = this.heroAndVillainNamesArray(obj);

		oracleInfo.push(arr.hA[0]);

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[1]);
		} else {
			oracleInfo.push(arr.vA[0]);
		};

		shuffle(oracleInfo);

		return oracleInfo;

	};



	atLeast1Good1Evil(obj) {

		var oracleInfo = [];
		var arr = this.heroAndVillainNamesArray(obj);

		oracleInfo.push(arr.hA[0]);
		oracleInfo.push(arr.vA[0]);

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[1]);
		} else {
			oracleInfo.push(arr.vA[1]);
		};	

		shuffle(oracleInfo);

		return oracleInfo;

	};


	princess(obj) {

		var oracleInfo = [];
		var arr = this.heroAndVillainNamesArray(obj);

		var q = arr.hA.indexOf(obj.rO.roles["Princess"].name);

		oracleInfo.push((arr.hA.splice(q, 1))[0]);

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[0]);
		} else {
			oracleInfo.push(arr.vA[0]);
		};	

		if (this.true50Percent()) {
			oracleInfo.push(arr.hA[1]);
		} else {
			oracleInfo.push(arr.vA[1]);
		};			

		shuffle(oracleInfo);

		return oracleInfo;

	};


	howManyRoles(obj) {

		switch(obj.pA.length) {

			case 5:
				return 2;

			case 6:
				return 3;

			case 7:
				return 4;

			case 8:
				return 4;

			case 9:
				return 5;

			case 10:
				return 6;


			default:
				return 2;

		}; //end switch

	}; //end howManyRoles(obj)



	roles(obj) {

		var oracleInfo = [];
		var rolesArr = [];

		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			if (obj.rO.rolesInGame[i].role == "Oracle") { continue; };

			rolesArr.push(obj.rO.rolesInGame[i].role);

		}; //end for

		shuffle(rolesArr);

		var howManyRoles = this.howManyRoles(obj);

		for (var i = 0; i < howManyRoles; i++) {

			oracleInfo.push(rolesArr[i]);

		};

		//rolesArr is shuffled, so no need to shuffle oracleInfo
		return oracleInfo;

	}; //end roles()



	/*
	choices: 
	1 and 1 
	At Least 1 Good 
	At Least 1 Evil and Good
	Princess
	Roles
	*/
	prophesize(oraclePowerChoice, obj) {

	  this.powerUsed[oraclePowerChoice] = true;

	  switch (oraclePowerChoice) {

	  	case "1 and 1":
	  		return (this._1And1(obj));

	  	case "At Least 1 Good":
	  		return (this.atLeast1Good(obj));

	  	case "At Least 1 Evil and Good":
	  		return (this.atLeast1Good1Evil(obj));
	  
	  	case "Princess":
	  		return (this.princess(obj));

	  	case "Roles":
	  		return (this.roles(obj));

	  	default:
	  		return [];

	  }; //end switch

	}; //end prophesize()




	getFalseOppositeTeamRole(team, numOfPlayers) {

		if (team == "villains") {

			//odd number of players
			if (numOfPlayers % 2 == 1) {

				shuffle(this.goodRoles7or9);
				return this.goodRoles7or9[0];

			};


			shuffle(this.goodRoles);
			return this.goodRoles[0];

		}; //end if team == "villains"

		//if team == heroes
		shuffle(this.badRoles);
		return this.badRoles[0];

	}; //end getFalseOppositeTeamRole(team, numOfPlayers)



	lightAndDark(name, obj) {

		if (this.powerUsed["LightAndDarkUsedArray"].includes(name)) { return 0; };

		//can only check a player once
		this.powerUsed["LightAndDarkUsedArray"].push(name);
		//console.log(this.powerUsed["LightAndDarkUsedArray"]);

		var ldInd = obj.pT[name];

		var trueRole = obj.pA[ldInd].role;
		var falseRole = 
		this.getFalseOppositeTeamRole(obj.rO.rolesInGame[ldInd].team, obj.pA.length);

		var lightAndDarkArr = [trueRole, falseRole];
		shuffle(lightAndDarkArr);

		var ldData = {"target": name, identities: formatArrayIntoString(lightAndDarkArr)};
		
		console.log(ldData);
		
		this.messageHandler("Light And Dark", ldData, obj);


	}; //end lightAndDark()



	setLuciniteGuess(number) {

		this.numberOfLucinites = number;

	};




	adjustVoteSumLucinite(voteSum, obj) {

		if (this.numberOfLucinites == -1) { return voteSum; };

		var numHeroes = 0;
		var forLength = obj.rD.missionTeam.length;

		//calculate # of heroes & villains on the mission team
		for (var i = 0 ; i < forLength; i++) {

			if (obj.rO.rolesInGame[obj.pT[obj.rD.missionTeam[i]]].team
				== "heroes") {

				numHeroes += 1;

			};

		}; //end for 

		console.log("Lucinite Guess, Number of Heroes: " + numHeroes);

		if (numHeroes == this.numberOfLucinites) {

			voteSum += 2;

			this.messageHandler("Lucinites Guess", 
				{guess: this.numberOfLucinites, result: "You have correctly ascertained the number of followers! For your piety, we have awarded +2 to the mission team's vote sum!"}, 
				obj
			);


		} else {

			voteSum -= 2;

			this.messageHandler("Lucinites Guess", 
				{guess: this.numberOfLucinites, result: "Your vision is blurred, your ears occluded! Evil has invaded the sanctity of these holy grounds. For your incorrect guess, -2 to the mission team's vote sum!"}, 
				obj
			);

		}; //end else


		this.numberOfLucinites = -1;

		return voteSum;

	}; //end adjustVoteSumIntimidate(voteSum, obj)



	deliverPrivateMessage(messageObj, obj) {

		var receiverObj = obj.pA[obj.pT[messageObj.receiver]];

		var sysMess = {
						type: "oracle message",
						message: ("Oracle: " + messageObj.message)
					  };

		var stackObj = {
						type: "SMI",
						socketID: receiverObj.socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);

	};



	messageHandler(power, data, obj) {

		if (power == "Light And Dark") {

			var sysMess = {
							type: "power",
							message: ("Luces: " + data.target 
								+ "'s possible roles are: "
								+ data.identities + ".")
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		} else if (power == "Lucinites Guess") {


			var sysMess = {
							type: "power",
							message: ("Luces: Oracle, you guessed that the current mission team has " + data.guess + " heroes. " + data.result)
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);



		}; //end if power == LucinitesGuess



	}; //end messageHandler







}; //end class


module.exports = {
    Oracle
};