

class ResultsInfo {

	constructor() {

		this.teamInfo = 
		{

			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
			6: [],
			7: []

		};


		this.missionInfo = 
		{

			1: {},
			2: {},
			3: {},
			4: {},
			5: {},
			6: {},
			7: {}

		};



	}; //end constructor


	addTeamInfo(missionNumber, teamLeader, teamArray, votingInfo, result) {

		this.teamInfo[missionNumber].push( 

			{
				missionNumber: missionNumber,
				teamLeader: teamLeader,
				teamArray: teamArray,
				votingInfo: votingInfo,
				result: result
			}

		);

	}; //end addTeamInfo


	/*
	output is [{name: "Derek", vote: "Accept/Reject/Absolute Yes/Absolute No"}, {name: , vote: }]
	*/
	getLatestTeamVotingInfo(missionNumber) {

		//index for very last teamInfo/most recent
		var teamInfoIndex = (this.teamInfo[missionNumber].length - 1);
		if (teamInfoIndex < 0) { return []; };

		return this.teamInfo[missionNumber][teamInfoIndex]["votingInfo"];

	}; //end getLatestTeamVotingInfo


	getLatestTeamVotingAllInfo(missionNumber) {

		//index for very last teamInfo/most recent
		var teamInfoIndex = (this.teamInfo[missionNumber].length - 1);
		if (teamInfoIndex < 0) { return []; };

		return this.teamInfo[missionNumber][teamInfoIndex];

	};



	//votingArray is [{name: "Derek", vote: 5}]
	//result is either "Success" or "Fail"
	addMissionInfo(missionNumber, votingArray, pointTotal, result) {

		this.missionInfo[missionNumber].pointTotal = pointTotal;

		this.missionInfo[missionNumber].votingArray = votingArray;

		this.missionInfo[missionNumber].result = result;

	};


	getLatestMissionInfo(obj) {

		var latestMInfo = 
		{
			missionNumber: obj.rD.missionNo,
			teamLeader: obj.pA[obj.rD.teamLeaderIndex].name,
			missionTeam: obj.rD.missionTeam,
			pointTotal: this.missionInfo[obj.rD.missionNo].pointTotal,
			result: this.missionInfo[obj.rD.missionNo].result
		};

		return latestMInfo;

	};



	didAnyoneWin(currentMissionNo) {

		var threeWins = this.didAnyoneWinThreeMissionsInARow(currentMissionNo);

		if (threeWins == "Evil 3xs") {

			return "Villains Win!";

		} else if (threeWins == "Good 3xs") {

			return "Heroes Win! Villains' Last Chance.";

		};


		//Did Anyone Win 4/7 Missions
		var successfulMissionCount = 0;
		var failedMissionCount = 0;
		var loopStopper = currentMissionNo + 1;

		for (let i = 1; i < loopStopper; i++) {

			if (this.missionInfo[i].result == "Success") {

				successfulMissionCount += 1;

			} else {

				failedMissionCount += 1;

			};

		}; //end for


		if (successfulMissionCount >= 4) {

			return "Heroes Win! Villains' Last Chance.";

		} else if (failedMissionCount >= 4) {

			return "Villains Win!";

		} else {

			return "Nobody Has Won Yet.";

		};


	}; //end didAnyoneWin


	didAnyoneWinThreeMissionsInARow(currentMissionNo) {

		var evilWins = 0;
		var goodWins = 0;
		var loopStopper = currentMissionNo + 1;
		
		for (var i = 1; i < loopStopper; i++) {

			if (this.missionInfo[i].result == "Fail") {

				evilWins += 1;
				goodWins = 0;

			} else {

				goodWins += 1;
				evilWins = 0;

			};

		}; //end for loop


		if (evilWins == 3) {
			return "Evil 3xs";
		} else if (goodWins == 3) {
			return "Good 3xs";
		} else {
			return "Nobody Won 3xs";
		};


	}; //end didAnyoneWinThreeMissionInARow()



	//for Umbra Lord Absolute Yes Power
	didEvilWinTwoMissions() {

		var numOfFailures = 0;

		//no need to check Mission 7
		for (var i = 1; i < 7; i++) {

			if (this.missionInfo[i].result == "Fail") {
				numOfFailures += 1;
			};

		}; //end for

		return ((numOfFailures >= 2) ? true : false);

	}; //end didEvilWinTwoMissions


}; //end class ResultsInfo




module.exports = {
    ResultsInfo
};
