var {RolesMasterClass} = require("./RolesMasterClass.js");

class Jailer extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Jailer";
        this.alignment = "good";
        this.team = "heroes";

        this.jailedPlayer = "nobody chosen";
        this.capitalPunishmentTarget = "nobody chosen";

	}; //end constructor



	jailPlayer(name) {

		this.jailedPlayer = name;

	};


	resetJailedPlayerAtEndOfNight() {

		this.jailedPlayer = "nobody chosen";
	};


	adjustMissionVotesJailed(obj) {

		if (this.jailedPlayer == "nobody chosen") { return 0; };

		var jInd = obj.pT[this.jailedPlayer];

		/*maybe check if selected for mission in case 
		some logic in Controller (?) checks to see if 
		missionVote is null to know if player is NOT selected
		for the mission, so don't set it to 0 if NOT on the 
		misison team*/
		if (!obj.pA[jInd].selectedForMission) { return 0; };

		obj.pA[jInd].missionVote = 0;

	};



	executeAPlayer(name) {

		this.capitalPunishmentTarget = name;

	};


	adjustVoteSumCapitalPunishment(voteSum, obj) {

		if (this.capitalPunishmentTarget == "nobody chosen") { 
			return voteSum; 
		}; 


		var cpInd = obj.pT[this.capitalPunishmentTarget];

		this.capitalPunishmentTarget = "nobody chosen";

		var cpMess = "";

		
		if (obj.pA[cpInd].missionVote >= 0) {

			voteSum -= 2.5;
			cpMess = (obj.pA[cpInd].name + "'s final voting "
				+ "power is >= 0! You accidentally executed an "
				+ "ally! Bad move! -2.5 to the mission vote sum!")

		} else {

			voteSum += 2;
			cpMess = (obj.pA[cpInd].name + "'s final voting "
				+ "power is negative (< 0)! You correctly "
				+ "executed a foe! +2 to the mission vote sum!")
		};

		
		this.messageHandler(cpMess, obj);

		return voteSum;

	};



	messageSenderNameForJailer(index, obj) {

		if (obj.pA[index].role == "Jailer") {

			return (obj.pA[index].name + " (Jailer)");

		} else {
			return obj.pA[index].name
		};

	};


	messageSenderNameForJailedPlayer(index, obj) {

		if (obj.pA[index].role == "Jailer") {

			return "Jailer";

		} else {

			return obj.pA[index].name;

		};

	};

	//get index within server.js, using socket.id
	convertJailerMessage(message, obj) {

		return (

			{
				messForJailer:
					{
						sender: this.messageSenderNameForJailer(obj.index, obj),
						message: message
					},

				messForPrisoner:
					{
						sender: this.messageSenderNameForJailedPlayer(obj.index, obj),
						message: message
					}

			} //end obj

		); //end return

	}; //end convertJailerMessage(index, message, obj)



	messageHandler(mess, obj) {

		var sysMess = {
						type: "power",
						message: mess
					  };

		var stackObj = {
						type: "SMI",
						socketID: obj.pA[this.index].socketID,
						data: sysMess
					   };

		obj.stack.push(stackObj);

	};


	/*for rejoin info in Controller.js*/
	rejoinInfo(obj) {

		if (!this.inGame) { return false; };

		if (obj.rD.gamePhase == 8) { return false; };

		//if you are jailer
		if (this.name == obj.pA[obj.index].name && 
			this.jailedPlayer !== "nobody chosen") {

			return true;
		};

		//if you are prisoner
		if (obj.pA[obj.index].name == this.jailedPlayer) {
			return true;
		};


		return false;

	}; //end rejoinInfo(obj)



}; //end class


module.exports = {
    Jailer
};