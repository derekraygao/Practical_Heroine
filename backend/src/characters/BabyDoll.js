var {RolesMasterClass} = require("./RolesMasterClass.js");


class BabyDoll extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Baby Doll";
        this.alignment = "evil";
        this.team = "villains";

        
        this.powersHistory = 
        {

        	1: {"sing": "nobody chosen"},
        	2: {"sing": "nobody chosen"},
        	3: {"sing": "nobody chosen"},
        	4: {"sing": "nobody chosen"},
        	5: {"sing": "nobody chosen"},
        	6: {"sing": "nobody chosen"},
        	7: {"sing": "nobody chosen"},

        };

        this.lullabyPowerUsed = false;

	}; //end constructor


	setSingTarget(name, obj) {

		var missionNo = obj.rD.missionNo;

		//cannot choose same person twice in a row
		if (missionNo > 1) {

			if (this.powersHistory[(missionNo - 1)]["sing"] == name) {
				return 0;
			};

		};

		this.powersHistory[missionNo]["sing"] = name;

	};


	activateLullaby() {

		this.lullabyPowerUsed = true;
	};

		
	//this is handled by dropPlayerAffectedBySing(obj) in server.js
	ifAsleepDropPlayerFromMission(obj) {

		var singTarget = this.powersHistory[obj.rD.missionNo]["sing"];

		var q = obj.rD.missionTeam.indexOf(singTarget);

		if (q > -1) {

			obj.rD.missionTeam.splice(q, 1);
			return singTarget;

		}; //end if q > -1


		return "nobody was dropped";

	};


	adjustMissionVotesLullaby(obj) {

		if (!this.lullabyPowerUsed) { return 0; };
		this.lullabyPowerUsed = false;

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].missionVote > 2) {
				obj.pA[i].missionVote = 2;
				continue;
			};

			if (obj.pA[i].missionVote < -3) {
				obj.pA[i].missionVote = -3;
			}

		}; //end for

	}; //end adjustMissionVotesLullaby(obj)






}; //end class Baby Doll


module.exports = {
    BabyDoll
};