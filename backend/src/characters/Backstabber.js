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

	}; //end constructor


	backstab() {

		this.activateSwitch = true;

	};



	findAHeroToSwitchWith(obj) {

		var heroesIndicesArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.rO.rolesInGame[i].team == "villains") { continue; };
			if (["Princess", "Saintess"].includes(obj.pA[i].role)) { continue; };

			heroesIndicesArr.push(i);
		};

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
		//activateSwitch reset to false in outside function notifying
		//players of the switch

		//means power has been used already
		if (this.originalBackStabberName != "nobody chosen") {
			return 0;
		};

		this.originalBackStabberName = this.name;

		var switchInd = this.findAHeroToSwitchWith(obj);
		console.log("Switched Player Name is: " + obj.pA[switchInd].name);

		//backstabber player
		obj.pA[this.index].role = obj.pA[switchInd].role;

		//switched rolesObject
		obj.rO.rolesInGame[switchInd].name = obj.pA[this.index].name;
		obj.rO.rolesInGame[switchInd].socketID = obj.pA[this.index].socketID;

		//new backstabber/switched player
		obj.pA[switchInd].role = "Backstabber";
		this.name = obj.pA[switchInd].name;
		this.socketID = obj.pA[switchInd].socketID;

		var tempPlayerObjectNewBackstabber = obj.pA[switchInd];

		obj.pA[switchInd] = obj.pA[this.index];
		obj.pA[this.index] = tempPlayerObjectNewBackstabber;
		//once playerArray is switched, it matches up with rolesObject

		//switchInd now refers to original backstabber
		obj.pT[obj.pA[switchInd].name] = switchInd;
		obj.pT[obj.pA[this.index].name] = this.index;


	};


	adjustVoteVengeance(obj) {

		if (!this.inGame) { return 0; };
		if (this.originalBackStabberName == "nobody chosen") { return 0; };

		var indSwitched = obj.pT[this.name];
		var indOriginal = obj.pT[this.originalBackStabberName];

		if (obj.pA[indSwitched].selectedForMission && 
			obj.pA[indOriginal].selectedForMission) {

			if (obj.pA[this.index].missionVote >= 0) {

				obj.pA[this.index].missionVote += 4;

			} else {

				obj.pA[this.index].missionVote -= 4;
		
			};

		}; //end if

	}; //end adjustVoteRevenge



}; //end class


module.exports = {
    Backstabber
};