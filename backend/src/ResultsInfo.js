

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



	didAnyoneWin(missionNumber) {

		var successfulMissionCount = 0;
		var failedMissionCount = 0;

		for (let i = 1; i < (missionNumber + 1); i++) {

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





}; //end class ResultsInfo




module.exports = {
    ResultsInfo
};
