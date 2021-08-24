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



	adjustMissionVotesBomb(playerObj, obj) {

		//if (!this.inGame) { return 0; };
		if (!playerObj.bomb) { return 0; };

		playerObj.missionVote -= 3;

		playerObj.bomb = false;

		this.messageHandler("Bomb Explosion Notification", "", obj);

	};




	flameDevourer(target, obj) {

		var playerObj = obj.pA[obj.pT[target]];

		if (playerObj.burnCount >= 2) {

			obj.pA[this.index].boost += 1.5;

			var mess = (playerObj.name + "'s burn count is >= 2! You received a 'Boost' of ±1.5!");

			this.messageHandler("Flame Devourer", mess, obj);


		} else {

			var mess = (playerObj.name + " has a burn count of " + playerObj.burnCount + " and his/her F.S. bomb status is: " + playerObj.bomb + ".");

			this.messageHandler("Flame Devourer", mess, obj);

		}; //end else


	}; //flameDevourer





	messageHandler(power, data, obj) {

		if (power == "Bomb Explosion Notification") {

			var sysMess = {
							type: "power",
							message: ("BOOM! Uh oh! Looks like a flame seal bomb exploded on the mission! The player who was afflicted with the bomb had -3 added to his/her voting power!")
						  };

			var stackObj = {
							type: "SME Music",
							data: {messageObj: sysMess, song: "Bomb Explosion"}
						   };

			obj.stack.push(stackObj);




		} else if (power == "Flame Devourer") {

			var sysMess = {
							type: "power",
							message: data
						  };

			var stackObj = {
							type: "SMI",
							socketID: obj.pA[this.index].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		}; //end else if




	}; //end messageHandler




}; //end class


module.exports = {
    Bomberman
};