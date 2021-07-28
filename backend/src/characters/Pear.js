var {RolesMasterClass} = require("./RolesMasterClass.js");

class Pear extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Pear";
        this.alignment = "good";
        this.team = "heroes";

        //player's name to expose
        this.voteToExpose = "nobody chosen";

        this.playerVoteToVanish = "nobody chosen";


	}; //end constructor



	spyOn(name, obj) {

		this.voteToExpose = name;

		this.messageHandler("Spy", "", obj);

	};


	expose(obj) {

		if (this.voteToExpose == "nobody chosen") 
			{ return 0; };

		var exposeVoteInfo = 

		{
			name: this.voteToExpose,
			vote: obj.pA[obj.pT[this.voteToExpose]].missionVote
		};

		this.voteToExpose = "nobody chosen";

		this.messageHandler("Expose", exposeVoteInfo, obj);

	};


	vanish(name) {

		this.playerVoteToVanish = name;

	};


	adjustMissionVoteVanish(obj) {

		if (this.playerVoteToVanish == "nobody chosen") { return 0; };

		var vanishInd = obj.pT[this.playerVoteToVanish];

		obj.pA[vanishInd].missionVote = 0;

		//this is reset in another function
		//this.playerVoteToVanish = "nobody chosen";

	};


	/*inside AbilityManager
		Reason this is inside AbilityManager and not inside
		adjustMissionVotesVanish is because Persequor ability 
		comes after and Persequor copycat checks if persequor
		was the target of vanish. If she is, then she sets her
		copycat vote to 0, since vanish is supposed to take effect
		AFTER copycat, but we can't put it after copycat cause 
		copycat needs to copy someone else's vote. What if the 
		copied person was the target of vanish then???
	*/
	resetVanishVoteTarget() {

		this.playerVoteToVanish = "nobody chosen";

	};



	natureTelepathy(name, obj) {

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


		if ([-1, 0, 1].includes(prevVote)) {

			prevVote = "-1, 0, or 1";

		};

		console.log("Nature Telepathy. Previous Vote For " + name + ": " + prevVote);

		this.messageHandler("Nature Telepathy", 
							{name: name, missionNo: prevMissionNo, vote: prevVote}, 
							obj
						   );


	}; //end natureTelepathy()



	messageHandler(power, data, obj) {

		if (power == "Spy") {

			var sysMess = {
							type: "urgent",
							message: ("An invisible Spectre spies "
								+ "on the mission team! One player's "
								+ "final voting power will be exposed "
								+ "to everyone! Be careful of how you "
								+ "vote!")
						  };

			var stackObj = {
							type: "SME Music",
							data: {messageObj: sysMess, song: "Invisible Spy"}
						   };

			obj.stack.push(stackObj);



		} else if (power == "Expose") {

			var sysMess = {
							type: "power",
							message: ("The invisible Spectre (Pear) has "
								+ "revealed that " + data.name 
								+ "'s final voting power was: "
								+ data.vote + ".")
						  };

			var stackObj = {
							type: "SME",
							data: sysMess
						   };

			obj.stack.push(stackObj);



		} else if (power == "Nature Telepathy") {


			var sysMess = {
							type: "power",
							message: ("For Mission " + data.missionNo + ", " + data.name + "'s final voting power was: " + data.vote + ".")
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);


		}; //end if power == "Nature Telepathy"




	}; //end messageHandler




}; //end class


module.exports = {
    Pear
};