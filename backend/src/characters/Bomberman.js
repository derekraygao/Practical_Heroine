var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Bomberman extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Bomberman";
        this.alignment = "evil";
        this.team = "villains";


        this.bombTarget = "nobody chosen";
        this.firePunchTarget = "nobody chosen";

        this.powersHistory = 
        {
        	1: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        	2: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        	3: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        	4: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        	5: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        	6: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        	6: {"bombTarget": "nobody chosen", "firePunchTarget": "nobody chosen"},
        };

        //reset this to false when notifying players that a bomb has exploded
        this.didBombBlowUpThisMission = false;

	}; //end constructor



	setBombTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo].bombTarget = name;
	};


	setfirePunchTarget(name, obj) {

		this.powersHistory[obj.rD.missionNo].firePunchTarget = name;
	};


	//check to see if character is in game occurs in Ability Manager
	plantBomb(obj) {

		if (this.powersHistory[obj.rD.missionNo].bombTarget == "nobody chosen") { return 0; };

		var index = obj.pT[this.powersHistory[obj.rD.missionNo].bombTarget];
		if (obj.pA[index].role == "Saintess") { return 0; };

		obj.pA[index].bomb = true;

	};


	firePunch(obj) {

		if (this.powersHistory[obj.rD.missionNo].firePunchTarget == "nobody chosen") { return 0; };

		var index = obj.pT[this.powersHistory[obj.rD.missionNo].firePunchTarget];
		if (obj.pA[index].role == "Saintess") { return 0; };

		obj.pA[index].burnCount += 1;

	};
	



	adjustMissionVotesBurn(playerObj) {

		//if (!this.inGame) { return 0; };
		if (playerObj.burnCount <= 0) { return 0; };

		var burnAdjustment = (playerObj.burnCount * 0.75);

		playerObj.missionVote -= burnAdjustment;

	};



	adjustMissionVotesBomb(playerObj) {

		//if (!this.inGame) { return 0; };
		if (!playerObj.bomb) { return 0; };

		playerObj.missionVote -= 3;

		playerObj.bomb = false;

		this.didBombBlowUpThisMission = true;

	};




}; //end class


module.exports = {
    Bomberman
};