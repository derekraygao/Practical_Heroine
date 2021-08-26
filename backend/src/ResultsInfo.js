

class ResultsInfo {

	constructor() {

		/*there is no 0 mission number, but I added it in 
		case there's a problem on client side (?) and they
		try to send data...if mission number is 0, will access
		undefined and server will crash.
		*/

		this.teamInfo = 
		{

			0: [],
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

			0: {voteTypeArray: [], },
			1: {voteTypeArray: [], },
			2: {voteTypeArray: [], },
			3: {voteTypeArray: [], },
			4: {voteTypeArray: [], },
			5: {voteTypeArray: [], },
			6: {voteTypeArray: [], },
			7: {voteTypeArray: [], }

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
	

	/*vote type is either: success, fail, or power
	this is before mission vote power adjustments
	refers to whether you clicked "success" button or 
	"fail" button or used a power during mission voting phase
	*/
	addMissionVoteType(name, voteType, missionNumber) {

		this.missionInfo[missionNumber].
		voteTypeArray.push({"name": name, "voteType": voteType});

	};


	//votingArray is [{name: "Derek", vote: 5}]
	//result is either "Success" or "Fail"
	addMissionInfo(missionNumber, votingArray, positivePointTotal, 
		negativePointTotal, neutralPointTotal, pointTotal, result) {

		this.missionInfo[missionNumber].positiveTotal = positivePointTotal;

		this.missionInfo[missionNumber].negativeTotal = negativePointTotal;

		this.missionInfo[missionNumber].neutralTotal = neutralPointTotal;

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
			positiveTotal: this.missionInfo[obj.rD.missionNo].positiveTotal,
			negativeTotal: this.missionInfo[obj.rD.missionNo].negativeTotal,
			neutralTotal: this.missionInfo[obj.rD.missionNo].neutralTotal,
			pointTotal: this.missionInfo[obj.rD.missionNo].pointTotal,
			result: this.missionInfo[obj.rD.missionNo].result
		};

		return latestMInfo;

	};



	didAnyoneWin(currentMissionNo) {

		var threeWins = this.didAnyoneWinThreeMissionsInARow(currentMissionNo);

		if (threeWins == "Evil 3xs") {

			return "Villains Win 3 Consecutively!";

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

			return "Villains Win 4xs!";

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
	didEvilWinThreeMissions(obj) {

		if (obj.rD.missionNo < 4) { return false; };

		var numOfFailures = 0;

		//no need to check Mission 7
		for (var i = 1; i < obj.rD.missionNo; i++) {

			if (this.missionInfo[i].result == "Fail") {
				numOfFailures += 1;
			};

		}; //end for

		return ((numOfFailures >= 3) ? true : false);

	}; //end didEvilWinThreeMissions


	/*prevent 3 in a row
	no need to check for mission 1 + 2 */
	didEvilWinLastTwoMissions(obj) {

		var currentMN = obj.rD.missionNo;
		if (currentMN < 3) { return false; };

		if (this.missionInfo[(currentMN - 2)].result == "Fail"
			&& this.missionInfo[(currentMN - 1)].result == "Fail") {

			return true;

		}; //end if

		return false;

	};


	canAbsoluteYesBeUsed(obj) {

		if (this.didEvilWinLastTwoMissions(obj)) {
			return false;
		};


		if (this.didEvilWinThreeMissions(obj)) {
			return false;
		};


		if (obj.rO.roles["Kaguya"].darkDestinyCount == 2) { 
			return false; 
		};

		return true;

	};



}; //end class ResultsInfo




module.exports = {
    ResultsInfo
};
