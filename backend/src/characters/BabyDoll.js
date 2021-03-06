var {RolesMasterClass} = require("./RolesMasterClass.js");
var {calculateNumberofTeamMembers} = require('./calculateNumberofTeamMembers.js');
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");


class BabyDoll extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Baby Doll";
        this.alignment = "evil";
        this.team = "villains";

        
        this.powersHistory = 
        {

        	1: {"sing": "nobody chosen", "perishSongArray": "no array"},
        	2: {"sing": "nobody chosen", "perishSongArray": "no array"},
        	3: {"sing": "nobody chosen", "perishSongArray": "no array"},
        	4: {"sing": "nobody chosen", "perishSongArray": "no array"},
        	5: {"sing": "nobody chosen", "perishSongArray": "no array"},
        	6: {"sing": "nobody chosen", "perishSongArray": "no array"},
        	7: {"sing": "nobody chosen", "perishSongArray": "no array"},

        };

        this.lullabyPowerUsed = false;

        this.perishSongArray = [];

	}; //end constructor


	setSingTarget(name, obj) {

		var missionNo = obj.rD.missionNo;

		//need minimum of 3 people team...cause you need minimum 2
		//people a team for some powers/abilities to work
		if (calculateNumberofTeamMembers(missionNo, obj.pA.length) < 3) {
			return 0;
		};

		//cannot choose same person twice in a row
		if (missionNo > 1) {

			if (this.powersHistory[(missionNo - 1)]["sing"] == name) {
				return 0;
			};

		};
	
		//cannot choose Saintess
		var ind = obj.pT[name]; 
		if (ind == undefined) { return 0; }; 
		if (obj.pA[ind].role == "Saintess") { return 0; };


		this.powersHistory[missionNo]["sing"] = name;

	};


	activateLullaby(obj) {

		this.lullabyPowerUsed = true;


		var sysMess = {
						type: "urgent",
						message: ("Baby Doll's lullaby "
							+ "exhausts the mission team's "
							+ "energy. The highest allowed "
							+ "final voting power of any "
							+ "person is +2, and the lowest "
							+ "is -3.5.")
					  };

		var stackObj = {
						type: "SME Music",
						data: {messageObj: sysMess, song: "Lullaby"}
					   };

		obj.stack.push(stackObj);

	};


	activatePerishSong(arr, obj) {

		this.powersHistory[obj.rD.missionNo].perishSongArray = arr;

		var sysMess = {
						type: "urgent",
						message: ("Baby Doll's perish song "
							+ "dooms the current mission team! "
							+ "The next time a mission team includes "
							+ "all of the current team "
							+ "(" + formatArrayIntoString(arr) 
							+ ") " + ", then each of the doomed "
							+ "teammates' final voting power will "
							+ "be reduced to 0! Other teammates "
							+ "will not be affected.")
					  };

		var stackObj = {
						type: "SME Music",
						data: {messageObj: sysMess, song: "Perish Song"}
					   };

		obj.stack.push(stackObj);

	};


	/* need to first activatePerishSong and then set it
	inside Ability Manager, so it doesn't activate the same
	mission you set perish song
	*/
	setPerishSongArray(obj) {

		if (!this.inGame) { return 0; };

		var currentPSongArr = 
			this.powersHistory[obj.rD.missionNo].perishSongArray;


		if (currentPSongArr !== "no array") {
			this.perishSongArray = currentPSongArr;
		};

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

			if (obj.pA[i].missionVote < -3.5) {
				obj.pA[i].missionVote = -3.5;
			}

		}; //end for

	}; //end adjustMissionVotesLullaby(obj)



	areAllPerishersOnTheTeam(obj) {

		var numOfPerishersOnTeam = 0;

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].selectedForMission) {

				if (this.perishSongArray.includes(obj.pA[i].name)) {
					numOfPerishersOnTeam += 1;
				};

			};

		}; //end for


		if (this.perishSongArray.length == numOfPerishersOnTeam) {
			return true;
		};

		return false;

	}; //end areAllPerishersOnTheTeam(obj)


	//you know the names exist and are not undefined 
	//since in checking if parishers are on the team, you check if
	//obj.pA[i].name is in the this.perishSongArray
	adjustMissionVotesPerishSong(obj) {

		if (this.perishSongArray.length == 0) { return 0; };

		var perisherInd = -1;

		if (this.areAllPerishersOnTheTeam(obj)) {

			for (var i = 0; i < this.perishSongArray.length; i++) {

				perisherInd = obj.pT[this.perishSongArray[i]];

				obj.pA[perisherInd].missionVote = 0;

			};


			this.perishSongArray = [];

		}; //end if areAllPerishersOnTheTeam

	}; // end adjustMissionVotesPerishSong(obj)







}; //end class Baby Doll


module.exports = {
    BabyDoll
};