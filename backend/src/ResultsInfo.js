

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


	//votingArray is [{name: "Derek", vote: 5}]
	//result is either "Success" or "Fail"
	addMissionInfo(missionNumber, votingArray, pointTotal, result) {

		this.missionInfo[missionNumber].pointTotal = pointTotal;

		this.missionInfo[missionNumber].votingArray = votingArray;

		this.missionInfo[missionNumber].result = result;

	};



	didAnyoneWin(missionNumber) {

		var successfulMissionCount = 0;
		var failedMissionCount = 0;

		for (var i = 1; i < (missionNumber + 1); i++) {

			if (this.missionInfo[i].result == "Success") {

				successfulMissionCount += 1;

			} else {

				failedMissionCount += 1;

			};

		}; //end for


		if (successfulMissionCount >= 4) {

			return "Heroes Win!";

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
