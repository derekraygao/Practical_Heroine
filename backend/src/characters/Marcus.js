var {RolesMasterClass} = require("./RolesMasterClass.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");
var {shuffle} = require("./shuffle.js");



class Marcus extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Marcus";
        this.alignment = "good";
        this.team = "heroes";

        this.berserk = "not activated";
        this.berserkActivatedDuringWhichMission = 0;

        this.counterEspionageTarget = "nobody chosen";

	}; //end constructor


	//needs to be after adjustVotesBerserk
	//this turn berserk -6 into +3 if princess is on the team!
	adjustVoteTranscendence(obj) {

		if (!this.inGame) { return 0; };

		if (obj.pA[this.index].missionVote > 3) { return 0; };

		//both Marcus + Princess need to be on the mission team
		if (!obj.pA[obj.rO.roles["Princess"].index].selectedForMission
			|| !obj.pA[this.index].selectedForMission) { return 0; };

		obj.pA[this.index].missionVote = 3;

	};



	activateBerserk(obj) {

		this.berserk = "activated first half";
		this.berserkActivatedDuringWhichMission = obj.rD.missionNo;

	};


	adjustVoteBerserk(obj) {

		if (!this.inGame) { return 0; };

		/* "activated second half" needs to be ABOVE "activated first half",
		because "activated first half" sets berserk to "activated second half"
		and so it will automatically run both if statements. */
		if (this.berserk == "activated second half") {

			obj.pA[this.index].missionVote = -6;

			obj.rO.roles["Saintess"].
			adjustMissionVotesBless(obj.pA[this.index]);

			this.berserk = "used";
		};


		if (this.berserk == "activated first half") {
			//console.log("Did berserk get activated");
			obj.pA[this.index].missionVote = 6;

			obj.rO.roles["Saintess"].
			adjustMissionVotesBless(obj.pA[this.index]);

			this.berserk = "activated second half";
		};


	}; //end berserk


	setCounterEspionageTarget(target) {

		this.counterEspionageTarget = target;

	};


	//[{"name": name, "voteType": voteType}]
	getActions(arr) {

		var forLength = arr.length;

		for (var i = 0; i < forLength; i++) {

			if (arr[i].name == this.counterEspionageTarget) {
				return arr[i].voteType;
			};

		};

		return "Nothing";
	};


	counterEspionage(obj) {

		if (this.counterEspionageTarget == "nobody chosen") { return 0; };

		//Marcus cannot be on the mission team
		if (obj.pA[this.index].selectedForMission) {
			this.counterEspionageTarget = "nobody chosen";
			return 0;
		};
		
		//Target MUST be on the mission team
		if (!obj.pA[obj.pT[this.counterEspionageTarget]].selectedForMission) {
			this.counterEspionageTarget = "nobody chosen";
			return 0;
		};
		

		var missionInfo = obj.rI.missionInfo;
		var voteActionsHistory = [];
		//missionNo + 1 since you also want current mission Info
		var numOfMissions = (obj.rD.missionNo + 1);
		var action;

		for (var i = 1; i < numOfMissions; i++) {

			action = this.getActions(missionInfo[i].voteTypeArray);

			if (action == "Nothing") { continue; };

			voteActionsHistory.push(action);

		}; //end for


		if (voteActionsHistory.length == 0) {

			this.messageHandler("No Action History", obj);

			this.counterEspionageTarget = "nobody chosen";

			return 0;
		};


		shuffle(voteActionsHistory);

		voteActionsHistory = formatArrayIntoString(voteActionsHistory);

		//console.log(voteActionsHistory);
		/*messageHandler needs to come before resetting counterEspionageTarget
		to nobody chosen, since messageHandler uses that variable
		*/
		this.messageHandler(voteActionsHistory, obj);

		this.counterEspionageTarget = "nobody chosen";

	}; //end counterEspionage(name, obj)



	messageHandler(actionHistoryString, obj) {


		var sysMess = {
						type: "power",
						message: (this.counterEspionageTarget + "'s history of actions taken on the mission team, randomized: " + actionHistoryString + ".")
					  };

		var stackObj = {
						type: "SMI",
						socketID: this.socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);


	};





	bodyguardNameSwitch(name, obj) {

		//this is really only for exchange of spirits power
		if (Array.isArray(name)) {

			var q = name.indexOf(obj.rO.roles["Princess"].name);

			if (q >= 0) {
				name[q] = this.name;
			};


		} else {

			if (name == obj.rO.roles["Princess"].name) {
				name = this.name;
			};

		}; //end else


		return name;

	}; //end bodyguardNameSwitch


	bodyguardNotification(status) {

		switch(status) {

			case "corrupted":
				return ("You blocked the Princess from the Umbra Lord's dark magic! You are now corrupted! Your base mission voting power is now reversed!");
				break;

			case "bomb":
				return ("You were cursed with a flame seal bomb instead of the Princess. The bomb will explode the next time you are on a mission.");
				break;

			case "burn":
				return ("You took the hit from the fire punch! You are now burned. Your base voting power will continually decrease every round.");
				break;

			case "soul mark":
				return ("You prevented the Spiritualist from placing a soul mark on the Princess. It is within your soul sea now!");
				break;

			case "paralyzed":
				return ("You took King Noah's lightning strike for the Princess. You are paralyzed and are unable to be the mission leader for next round.");
				break;

			case "multiplier":
				return ("Hecate's multiplication magic amplifies you and not the Princess. Your mission voting power will be multiplied the next time you vote on a mission.");
				break;

			case "exchange":
				return ("You protected the Princess! Your spirit and statuses have been exchanged with another player!");
				break;

			case "shrink":
				return ("You are shrunk instead of the Princess. Your team & mission voting power will be halved for the next 2 rounds.");
				break;

			case "anti-magic ray":
				return ("You were hit by the anti-magic ray targeting the Princess! ALL status effects, good & bad, on you have been nullified.");
				break;

			default:
				return "Marcus Notification Error";

		}; //end switch

	}; //end bodyguardNotification()






}; //end class


module.exports = {
    Marcus
};