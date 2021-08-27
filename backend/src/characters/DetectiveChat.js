var {RolesMasterClass} = require("./RolesMasterClass.js");

class DetectiveChat extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Detective Chat";
        this.alignment = "good";
        this.team = "heroes";

        this.interrogationTarget = "nobody chosen";

        this.crossExaminationPlea = "no response";
        this.crossExaminationTarget = "nobody chosen";
    
        this.missionXXNWasUsed = -1;

	}; //end constructor


	investigate(name, obj) {

		//you always investigate previous mission during power phase 1
		var prevMissionNo = (obj.rD.missionNo - 1);

		//form is: [{name: , vote: }]
		var prevMVoteArr = obj.rI.missionInfo[prevMissionNo].votingArray;
		if (!prevMVoteArr) { return 0; };

		var prevVote = 0;

		for (var i = 0; i < prevMVoteArr.length; i++) {

			if (prevMVoteArr[i].name == name) {
				prevVote = prevMVoteArr[i].vote
			};

		}; //end for

		return ("Investigation Results: For Mission Number " + (obj.rD.missionNo - 1) +
			", " + name + " had a final vote power of: " + prevVote);

		/*
		return prevVote;

		if (prevVote < 0) {
			return -1;
		} else if (prevVote == 0) {
			return 0;
		} else { // prevVote > 0
			return 1;
		};
		*/

	}; //end investigate


	setCrossExaminationTarget(name, obj) {

		if (this.crossExaminationPlea == "Used") { return 0; };

		this.crossExaminationTarget = name;
		this.missionXXNWasUsed = obj.rD.missionNo;

	};


	sendCrossExaminationRequest(obj) {

		if (obj.rD.missionNo > this.missionXXNWasUsed) { return 0; };

		var targetSID = obj.pA[obj.pT[this.crossExaminationTarget]].socketID;

		this.messageHandler("Send Cross Examination", targetSID, obj);

		this.crossExaminationPlea = "Not Guilty"; //default value, maybe should move to constructor

	};


	setCrossExaminationPlea(plea, obj) {

		this.crossExaminationPlea = plea;

		this.messageHandler(
				"Notify Cross Examination Plea",
				"",
				obj
		);

	}; //end setCrossExaminationPlea(plea)



	adjustVoteSumCrossExamination(voteSum, obj) {

		if (obj.rD.missionNo > this.missionXXNWasUsed) {
			return voteSum;
		};


		var targetPObj = obj.pA[obj.pT[this.crossExaminationTarget]];


		if (!targetPObj.selectedForMission) {

			this.crossExaminationTarget = "nobody chosen";

			return voteSum;
		};


		if (this.crossExaminationPlea == "Not Guilty") {

			voteSum += 5;

			this.crossExaminationPlea = "Used";

			this.messageHandler(
				"Update Cross Examination Was Used",
				"",
				obj
			);


		} else {

			voteSum -= 5;
		};


		this.crossExaminationTarget = "nobody chosen";
		
		return voteSum;

	}; //end adjustVoteSumCrossExamination(voteSum)



	setInterrogationTarget(name) {

		this.interrogationTarget = name;

	};

	/*
	{"name": "John", "voteType": "Power" or "Success" or "Fail"}
	*/
	sendInterrogationResults(obj) {

		if (this.interrogationTarget == "nobody chosen") { return 0; };

		var ind = obj.pT[this.interrogationTarget];
		if (ind == undefined) { return 0; };

		var voteType = "Interrogate Error";
		var voteTypeArray = obj.rI.missionInfo[obj.rD.missionNo].voteTypeArray;

		for (var i = 0; i < voteTypeArray.length; i++) {

			if (voteTypeArray[i].name == this.interrogationTarget) {
				voteType = voteTypeArray[i].voteType;
			};

		}; //end for


		this.messageHandler("Interrogation", 
			{"target": this.interrogationTarget, "voteType": voteType}, 
			obj
		);

		this.interrogationTarget = "nobody chosen";

	};



	messageHandler(power, data, obj) {
	
		if (power == "Interrogation") {

			var sysMess = {
							type: "power",
							message: ("For Mission " + obj.rD.missionNo + ", " + data.target + " physically clicked on the '" + data.voteType + "' button!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	



		} else if (power == "Send Cross Examination") {

			var stackObj = {
							type: "Individual",
							socketID: data, //data == target's socketID
							destination: "Display Cross Examination Popup",
							data: ""
						   };

			obj.stack.push(stackObj);	



		} else if (power == "Notify Cross Examination Plea") {

			var sysMess = {
							type: "power",
							message: ("For Mission " + obj.rD.missionNo + ", " + this.crossExaminationTarget + " pleaded '" + this.crossExaminationPlea + "'!")
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };


			obj.stack.push(stackObj);	


		} else if (power == "Update Cross Examination Was Used") {

			var stackObj = {
							type: "Individual",
							socketID: this.socketID, 
							destination: "Update Character Powers History",
							data: {"role": "Detective Chat" , "power": "Cross Examination Target", "newValue": this.crossExaminationTarget}
						   };

			obj.stack.push(stackObj);	
	
		};


	}; //end messageHandler(resultsInfo, obj)



}; //end class


module.exports = {
    DetectiveChat
};