var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");


class Backstabber extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Backstabber";
        this.alignment = "evil";
        this.team = "villains";

        this.originalBackStabberName = "nobody";

	}; //end constructor


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


	//do not switch index in rO...it refers to location of char,
	//it is independent of people names
	betray(obj) {

		this.originalBackStabberName = this.name;

		var switchInd = this.findAHeroToSwitchWith(obj);

		var tempSwitchName = obj.pA[switchInd].name;
		var tempSwitchSocketID = obj.pA[switchInd].socketID;
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


	adjustVoteRevenge(obj) {

		if (!this.inGame) { return 0; };

		if (this.originalBackStabberName == "nobody") { return 0; };

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