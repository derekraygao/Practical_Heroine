var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Backstabber extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Backstabber";
        this.alignment = "evil";
        this.team = "villains";

        this.originalBackStabberName = "nobody chosen";

        //reset activateSwitch to false when notifying player he/she has been
        //swapped
        this.activateSwitch = false;
        
        this.powersHistory = 
        {
        	1: {"assassinate": "nobody chosen"},
        	2: {"assassinate": "nobody chosen"},
        	3: {"assassinate": "nobody chosen"},
        	4: {"assassinate": "nobody chosen"},
        	5: {"assassinate": "nobody chosen"},
        	6: {"assassinate": "nobody chosen"},
        	7: {"assassinate": "nobody chosen"},
        };



	}; //end constructor


	backstab() {

		//means power has been used already
		if (this.originalBackStabberName != "nobody chosen") {
			return 0;
		};

		this.activateSwitch = true;

	};



	findAHeroToSwitchWith(obj) {

		var heroesIndicesArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.rO.rolesInGame[i].team == "villains") { continue; };
			if (["Princess", "Saintess", "???"].includes(obj.pA[i].role)) { continue; };

			heroesIndicesArr.push(i);
		};

		if (heroesIndicesArr.length === 0) { return -1; };

		shuffle(heroesIndicesArr);

		return heroesIndicesArr[0];

	}; //end findAHeroToSwitchWith(obj)


	/*
	//do not switch index in rO...it refers to location of char,
	//it is independent of people names
	betray(obj) {

		if (!this.activateSwitch) { return 0; };
		//activateSwitch reset to false in outside function notifying
		//players of the switch

		//means power has been used already
		if (this.originalBackStabberName != "nobody") {
			return {};
		};

		this.originalBackStabberName = this.name;

		var switchInd = this.findAHeroToSwitchWith(obj);

		var tempSwitchName = obj.pA[switchInd].name;
		var tempSwitchSocketID = obj.pA[switchInd].socketID;
		//isn't tempSwitchIndex the same as switchInd?
		var tempSwitchIndex = obj.pT[obj.pA[switchInd].name];

		obj.pT[tempSwitchName] = this.index;
		obj.pT[this.name] = tempSwitchIndex;

		obj.pA[switchInd].name = this.name;
		obj.pA[switchInd].socketID = this.socketID;
		obj.rO.rolesInGame[switchInd].name = this.name;
		obj.rO.rolesInGame[switchInd].socketID = this.socketID;

		obj.pA[this.index].name = tempSwitchName;
		obj.pA[this.index].socketID = tempSwitchSocketID;
		this.name = tempSwitchName;
		this.socketID = tempSwitchSocketID;

		var newRoleInfo =  {

							originalBS: {
										  newRole: obj.pA[switchInd].role,
									      socketID: obj.pA[switchInd].socketID
										 },

							switched: {
										newRole: "Backstabber",
										socketID: tempSwitchSocketID
									  }	
						   };



		return newRoleInfo;

	};
	*/

	//on switched player's side, need to update that backstab power
	//has been used and cannot be used again
	betray(obj) {

		if (!this.activateSwitch) { return 0; };
		this.activateSwitch = false;

		this.originalBackStabberName = this.name;

		var switchInd = this.findAHeroToSwitchWith(obj);
		/*console.log("Backstabbed switch player is: " 
			+ obj.pA[switchInd].name + ", original role: "
			+ obj.pA[switchInd].role); */

		if (switchInd === -1) { return 0; };

		//backstabber player
		obj.pA[this.index].role = obj.pA[switchInd].role;

		//switched rolesObject
		obj.rO.rolesInGame[switchInd].name = this.name;
		obj.rO.rolesInGame[switchInd].socketID = this.socketID;

		//new backstabber/switched player
		obj.pA[switchInd].role = "Backstabber";
		this.name = obj.pA[switchInd].name;
		this.socketID = obj.pA[switchInd].socketID;

		var tempPlayerObjectNewBackstabber = obj.pA[switchInd];

		obj.pA[switchInd] = obj.pA[this.index];
		obj.pA[this.index] = tempPlayerObjectNewBackstabber;
		//once playerArray is switched, it matches up with rolesObject

		//switchInd now refers to original backstabber
		obj.pT[this.originalBackStabberName] = switchInd;
		obj.pT[this.name] = this.index;



		this.backstabberSwitchMessageHandler(
			"Give New Backstabber Info", 

			this.socketID,

			{
				originalBSName: obj.pA[switchInd].name,
	            villainList: obj.rO.getVillainsIdentities()
			}, 

			obj
		);


		this.backstabberSwitchMessageHandler(
			"Give Original Backstabber New Info", 

			obj.pA[switchInd].socketID,

			obj.pA[switchInd].role, 

			obj
		);


		this.messageHandler("Notify Princess of Switch", obj, "");

		/*
		return (
			{
				originalSID: obj.pA[switchInd].socketID,
				originalBSNewRole: obj.pA[switchInd].role,
				originalBSName: obj.pA[switchInd].name,
				newSID: obj.pA[this.index].socketID
			}
		);
		*/

	};


	adjustVoteVengeance(obj) {

		if (!this.inGame) { return 0; };
		if (this.originalBackStabberName == "nobody chosen") { return 0; };

		var indSwitched = obj.pT[this.name];
		var indOriginal = obj.pT[this.originalBackStabberName];

		if (obj.pA[indSwitched].selectedForMission && 
			obj.pA[indOriginal].selectedForMission) {

			if (obj.pA[this.index].missionVote >= 0) {

				obj.pA[this.index].missionVote += 3.5;

			} else {

				obj.pA[this.index].missionVote -= 3.5;
		
			};

		}; //end if

	}; //end adjustVoteRevenge


	markAMan(name, obj) {

		var markInd = obj.pT[name];

		if (obj.pA[markInd].role == "Saintess") { return 0; };

		obj.pA[markInd].markedMan = true;

		this.messageHandler("mark a man", obj, obj.pA[markInd].socketID);

	}; //end markAMan


	assassinate(name, obj) {

		this.powersHistory[obj.rD.missionNo]["assassinate"] = name;

	};


	adjustVoteSumAssassinate(voteSum, obj) {

		if (this.powersHistory[obj.rD.missionNo]["assassinate"]
			== "nobody chosen") { return voteSum; };

		var aInd = obj.pT[this.powersHistory[obj.rD.missionNo]["assassinate"]];

		if (!obj.pA[aInd].markedMan) {

		 	this.messageHandler("failed assassination", obj);
			return voteSum; 

		};

		obj.pA[aInd].markedMan = false;
		
		this.messageHandler("You were assassinated!", obj, obj.pA[aInd].socketID);

		return (voteSum - 5);

	}; //end adjustVoteSumAssassinate()




	messageHandler(power, obj, socketID) {

		if (power == "mark a man") {

			var sysMess = {
							type: "urgent",
							message: ("The Assassin's Order has put "
								+ "a bounty on your head! You're a "
								+ "marked man! Starting next round, "
								+ "if you and the Backstabber are on the "
								+ "mission team together again, the "
								+ "Backstabber can use the 'Assassinate' "
								+ "ability on you, adding -5 to the "
								+ "mission team's vote sum.")
						  };

			var stackObj = {
							type: "SMI",
							socketID: socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		} else if (power == "failed assassination") {

			var sysMess = {
							type: "power",
							message: ("The assassination on "
								+ this.powersHistory[obj.rD.missionNo]["assassinate"] 
								+ " failed!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: obj.pA[this.index].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		} else if (power == "You were assassinated!") {

			var sysMess = {
							type: "urgent",
							message: ("You were assassinated! " 
								+ "-5 to the team's mission vote "
								+ "sum. However, you are no longer "
								+ "a marked man!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		} else if (power == "Notify Princess of Switch") {

			var sysMess = {
							type: "urgent",
							message: ("Eo: John! " + this.originalBackStabberName + " has betrayed his team and joined the Heroes! The new Backstabber is now " + obj.rO.roles["Backstabber"].name + ".")
						  };

			var stackObj = {
							type: "SMI",
							socketID: obj.rO.roles["Princess"].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);		


		}; //end else if


	}; //end messageHandler




	backstabberSwitchMessageHandler(power, socketID, data, obj) {


		if (power == "Give New Backstabber Info") {


			var stackObj = {
				              type: "Individual",
				              socketID: socketID,
				              destination: "Give New Backstabber New Role",
				              data: data
			       		    };


			obj.stack.push(stackObj);



		} else if (power == "Give Original Backstabber New Info") {


			var stackObj = {
					          type: "Individual",
					          socketID: socketID,
					          destination: "Give Original Backstabber New Role",
					          data: data
				   			};


			obj.stack.push(stackObj);


		};



	}; //end backstabberSwitchMessageHandler()








}; //end class


module.exports = {
    Backstabber
};