var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");

class Scientist extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Scientist";
        this.alignment = "good";
        this.team = "heroes";

        this.exposeIndividualVotes = false;

        this.hypothesis = {type: "none", number: "none"};

	}; //end constructor


	getIndividualVotes(obj) {

		var individualVotesArr = [];
		var missionVArray = obj.rI.missionInfo[obj.rD.missionNo].votingArray;

		for (var i = 0; i < missionVArray.length; i++) {

			individualVotesArr.push(missionVArray[i].vote);

		};

		shuffle(individualVotesArr);

		return individualVotesArr;

	};


	/*If exposing votes to all, no need to specially
	send to scientist
	*/
	sendVotesToScientist(obj) {

		if (this.exposeIndividualVotes) { return 0; };

		this.messageHandler("send votes to scientist", obj);

	};


	activateAndNotifyVotesWillBeExposed(obj) {

		this.exposeIndividualVotes = true;

		this.messageHandler("notify votes will be exposed", obj);

	};


	exposeVotesToEveryone(obj) {

		if (!this.exposeIndividualVotes) { return 0; };

		this.exposeIndividualVotes = false;

		this.messageHandler("expose votes to everyone", obj);

	}; //end exposeVotesToEveryone(obj)


	//hypothesisObj = {type: voteType, number: numberOfVotes}
	setHypothesis(hypothesisObj) {

		this.hypothesis = hypothesisObj;

	};


	/*Can't use getIndividualVotes because that relies on 
	obj.rI data which isn't put in until AFTER vote sum is 
	full calculated 
	*/
	getCurrentMissionIndividualVotes(obj) {

		var individualVotesArr = [];
		var tempMT = obj.rD.missionTeam;
		var forLength = tempMT.length;

		for (var i = 0; i < forLength; i++) {

			individualVotesArr.push(
				obj.pA[obj.pT[tempMT[i]]].missionVote
			);
			
		}; //end for

		return individualVotesArr;

	}; //end getCurrentMissionIndividualVotes(obj)


	/*no need to tell scientist if he/she was right because
	he/she already gets the individual votes */
	adjustVoteSumHypothesis(voteSum, obj) {

		if (this.hypothesis.type == "none") { return voteSum; };

		var ivArr = this.getCurrentMissionIndividualVotes(obj);
		var counter = 0;
		var tempLength = ivArr.length;

		for (var i = 0; i < tempLength; i++) {

			if (ivArr[i] == this.hypothesis.type) {
				counter += 1;
			};

		};

		
		if (counter == this.hypothesis.number) {

			voteSum += 2.5;

		} else {
			voteSum -= 2;
		};


		this.hypothesis = {type: "none", number: "none"};

		return voteSum;

	}; //end adjustVoteSumHypothesis(voteSum, obj)


	messageHandler(power, obj) {

		if (power == "notify votes will be exposed") {

			var sysMess = {
							type: "urgent",
							message: ("Stop right there, you "
								+ "supervillains! The Scientist "
								+ "is going to expose everyone's "
								+ "individual final voting power "
								+ "for this mission, anonymized!")
						  };

			var stackObj = {
							type: "SME Music",
							data: {messageObj: sysMess, song: "Scientist Expose"}
						   };

			obj.stack.push(stackObj);


		} else if (power == "send votes to scientist") {

			var voteString = formatArrayIntoString(this.getIndividualVotes(obj)); 

			var sysMess = {
							type: "power",
							message: ("Watson: The individual, anonymized "
								+ "final voting powers of Mission "
								+ obj.rD.missionNo + "'s team are: "
								+ voteString + ".")
						  };

			var stackObj = {
							type: "SMI",
							socketID: obj.pA[this.index].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		} else if (power == "expose votes to everyone") {

			var voteString = formatArrayIntoString(this.getIndividualVotes(obj)); 

			var sysMess = {
							type: "power",
							message: ("Watson: Here are "
								+ "the current mission team's "
								+ "individual, final voting powers "
								+ "for Mission " + obj.rD.missionNo 
								+ ": " + voteString + ".")
						  };

			var stackObj = {
							type: "SME",
							data: sysMess
						   };

			obj.stack.push(stackObj);

		};


	}; //end messageHandler(power, obj)






}; //end class


module.exports = {
    Scientist
};