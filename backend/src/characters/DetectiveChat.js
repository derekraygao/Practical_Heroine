var {RolesMasterClass} = require("./RolesMasterClass.js");

class DetectiveChat extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Detective Chat";
        this.alignment = "good";
        this.team = "heroes";

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


		if (prevVote < 0) {
			return -1;
		} else if (prevVote == 0) {
			return 0;
		} else { // prevVote > 0
			return 1;
		};


	}; //end investigate



}; //end class


module.exports = {
    DetectiveChat
};