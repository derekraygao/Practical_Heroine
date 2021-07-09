var RO = require('./RolesObject.js');
var rI = require('./ResultsInfo.js');
var {VoteAdjuster} = require('./VoteAdjuster.js');


class Controller {


	constructor() {

		this.roomsData = {};
		this.listOfRooms = ["testing"];
		this.socketRoom = {}; //which room is a socket in (based on socket.id)
		this.voteAdjuster = new VoteAdjuster(); //all rooms can share this single instance


		this.roomsData["testing"] = 
		{	
			playersInRoomArray: [],
			missionNo: 0,
			gamePhase: 0,
			teamLeaderIndex: -1,
			missionTeam: [],
			missionVoteInfo: [],
			teamVoteInfo: [],
			numOfFailedTeamProposals: 0,
			rolesObject: new RO.RolesObject(),
			results: new rI.ResultsInfo(),
			playerTracker: {} //{name: index in player array} //populated in assignPlayersTheirRoles

		};

		this.socketRoom["DerekID"] = "testing";
		this.socketRoom["CloudID"] = "testing";
		this.socketRoom["SerenaID"] = "testing";
		this.socketRoom["LucioID"] = "testing";
		this.socketRoom["XingID"] = "testing";

	}; //end constructor


	//also adds socketRoom
	addPlayerToArray(name, socketID, roomName, roomMaster) {

		this.roomsData[roomName].playersInRoomArray.
		push(new Player(name, socketID, roomName, roomMaster));

		this.socketRoom[socketID] = roomName;

	};


	getListOfPlayers(obj) {

		var playerList = [];

		for (var i = 0; i < obj.pA.length; i++) {
			playerList.push(obj.pA[i].name);
		};

		return playerList;
		
	};


	setGamePhase(obj, gamePhase) {

		obj.rD["gamePhase"] = gamePhase;

	};


	updateMissionNumber(obj) {

		obj.rD["missionNo"] += 1;

	};



	setPlayerReady(obj) {

		obj.pA[obj.index].ready = true;

	};


	isEveryoneReadyFirstGameAndAtLeastFivePlayers(obj) {

		if (obj.pA.length < 5) { return false; };

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].ready) {

				return false;

			};

		}; //end for

		return true;

	}; //end isEveryoneReadyFirstGameAndAtLeastFivePlayers(obj)


	areAllConnectedPlayersReady(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].connected) { continue; };

			if (!obj.pA[i].ready) { return false; };

		};

		return true;

	}; //end areAllConnectedPlayersReady(obj)


	areAllConnectedPlayersDoneWithPowerPhase2(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].connected) { continue; };
			if (!obj.pA[i].selectedForMission) { continue; };

			if (!obj.pA[i].ready) { return false; };

		}; //end for

		return true;

	}; //end areAllConnectedPlayersDoneWithPowerPhase2(obj)



	//remember there's 1:1 mapping of pA & rolesInGame index
	didAllConnectedVillainsGuessOnThePrincessIdentity(obj) {

		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			if (!obj.pA[i].connected) { continue; };
			if (obj.rO.rolesInGame[i].team != "villains") { continue; };

			//if princessGuess is null
			if (!obj.rO.rolesInGame[i].princessGuess) {
				return false;
			};

		};

		return true;


	}; //end didAllConnectedVillainsGuessOnThePrincessIdentity(obj)



	paralyzedPlayerSkip(obj) {

		if (obj.pA[obj.rD.teamLeaderIndex].paralyzed) {

			obj.rD.teamLeaderIndex += 1;

			if (obj.rD.teamLeaderIndex > (obj.pA.length - 1) ) {
				obj.rD.teamLeaderIndex = 0;
			};

		}; //end if

		if (obj.pA[obj.rD.teamLeaderIndex].paralyzed) {
			this.paralyzedPlayerSkip(obj);
		};

	}; //end paralyzedPlayerSkip(obj)


	updateTeamLeaderIndex(obj) {

		obj.rD.teamLeaderIndex += 1;

		if (obj.rD.teamLeaderIndex > (obj.pA.length - 1) ) {
			obj.rD.teamLeaderIndex = 0;
		};

		this.paralyzedPlayerSkip(obj);

	};


	chooseOnlyConnectedTeamLeader(obj) {

		this.updateTeamLeaderIndex(obj);

		if (!obj.pA[obj.rD.teamLeaderIndex].connected) {

			this.chooseOnlyConnectedTeamLeader(obj);

		} else {

			obj.pA[obj.rD.teamLeaderIndex].isTeamLeader = true;

			return (obj.pA[obj.rD.teamLeaderIndex].name);

		};

	}; //end chooseOnlyConnectedTeamLeader




	//_vote is either "Accept" or "Reject"
	setPlayerTeamVote(obj, _vote) {

		if (_vote == "Accept") {
			obj.pA[obj.index].teamVote = 1;
		} else {
			obj.pA[obj.index].teamVote = -1;
		};

	};


	didAllPlayersVoteOnTheTeam(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].connected) { continue; };

			//default teamVote is null
			if (obj.pA[i].teamVote == null) {
				return false;
			};

		};

		return true;

	};


	//default absoluteTeamVoteUsed is "No" and once demonLord uses,
	//change to "Yes". Then, after points calculation, change to "Used"

	isTeamVoteAcceptOrNot(vote, rO) {

		if (rO.roles["Umbra Lord"].absoluteTeamVoteYesUsed == "Yes") {
			
			return "Absolute Yes";

		} else if (rO.roles["Umbra Lord"].absoluteTeamVoteNoUsed == "Yes") {

			return "Absolute No";

		} else {

			return( (vote >= 0) ? "Accept" : "Reject" );

		};

	}; //end isTeamVoteAcceptOrNot


	wasTeamResultBecauseOfUmbraLordAbsolutePower(voteTotal) {

		if (voteTotal >= 0) {

			if (voteTotal == 100) {
				return "Absolute Accepted";
			};

			return "Accepted";

		} else {

			if (voteTotal == -100) {
				return "Absolute Rejected";
			};

			return "Rejected";

		};

	}; //end wasTeamResultBecauseOfUmbraLordAbsolutePower()


	teamVoteCalculation(obj) {

		var teamVoteAccumulator = 0;

		for (let i = 0; i < obj.pA.length; i++) {

			//default teamVote is null, meaning offline
			if (obj.pA[i].teamVote == null) { continue; };

			teamVoteAccumulator += obj.pA[i].teamVote;

			console.log(obj.pA[i].name + " role is " + 
				obj.pA[i].role + ", team vote is: " + obj.pA[i].teamVote);

			//no need for exact number because it's team vote. Just need to know if
			//it's accept or reject. Only need to store Mission exact number
			this.roomsData[obj.room].teamVoteInfo.push(

				{
					name: obj.pA[i].name,
					vote: this.isTeamVoteAcceptOrNot(obj.pA[i].teamVote, obj.rO)
				}

			);
			
		}; //end for

		return teamVoteAccumulator;

	}; //end teamVoteCalculation



	wasTeamAccepted(obj) {

		this.voteAdjuster.adjustTeamVotes(obj);

		var teamVoteAccumulator = this.teamVoteCalculation(obj);

		teamVoteAccumulator = obj.rO.roles["Umbra Lord"].
		adjustVotesWithUmbraLordAbsolutePower(teamVoteAccumulator);

		//console.log("team vote accumulator is: " + teamVoteAccumulator);


		if (teamVoteAccumulator >= 0) {

			this.roomsData[obj.room].numOfFailedTeamProposals = 0;

			this.roomsData[obj.room].results.
			addTeamInfo(
				obj.rD.missionNo,
				obj.pA[obj.rD.teamLeaderIndex].name,
				obj.rD.missionTeam,
				obj.rD.teamVoteInfo,
				this.wasTeamResultBecauseOfUmbraLordAbsolutePower(teamVoteAccumulator)
			);

			return "Successful Team Proposal";

		} else {

			//this must be before you reset teamVoteInfo below
			this.roomsData[obj.room].results.
			addTeamInfo(
				obj.rD.missionNo,
				obj.pA[obj.rD.teamLeaderIndex].name,
				obj.rD.missionTeam,
				obj.rD.teamVoteInfo,
				this.wasTeamResultBecauseOfUmbraLordAbsolutePower(teamVoteAccumulator)
			);


			this.roomsData[obj.room].numOfFailedTeamProposals += 1;
			

			if (this.roomsData[obj.room].numOfFailedTeamProposals > 4) {
				return "Game Over. Too Many Failed Team Proposals";
			};

			return "Failed Team Proposal";

		};


	}; //end wasTeamAccepted






	//put this outside teamVoteCalculation since you are resetting
	//teamVoteInfo and need to send this data to clients
	resetDataForFailedTeamProposal(obj) {

		this.roomsData[obj.room].missionTeam = [];
		this.roomsData[obj.room].teamVoteInfo = [];

		obj.pA[obj.rD.teamLeaderIndex].isTeamLeader = false;

		for (let i = 0; i < obj.pA.length; i++) {

			//obj.pA[i].isTeamLeader = false;
			obj.pA[i].teamVote = null;

		};

	}; //end resetDataForFailedTeamProposal






	//teamArray = array of names ["Cloud", "Kyle", "Jessica"]
	setMissionTeam(obj, teamArray) {

		this.roomsData[obj.room].missionTeam = teamArray;

	};


	//teamArray = array of names ["Cloud", "Kyle", "Jessica"]
	setPlayersForMission(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (obj.rD.missionTeam.includes(obj.pA[i].name)) {
				obj.pA[i].selectedForMission = true;
			};

		};

	}; //end setPlayersForMission


	setPlayerMissionVote(vote, obj) {

		switch(vote) {

			case "Success":

				obj.pA[obj.index].missionVote = 1;

				break;

			case "Fail":

				obj.pA[obj.index].missionVote = -1;

				break;

			case "":

				break;

			default:

				break;



		}; //end switch


	}; //end addMissionVoteForPlayer


	/*disconnected player missionVote DOES get counted if they
	voted before d/c, because in mission vote accumulator it 
	will add if vote is not null
	*/ 
	didAllPlayersVoteOnTheMission(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			if (!obj.pA[i].connected) { continue; };

			//default missionVote is null
			if (obj.pA[i].missionVote == null) {
				return false;
			};

		};

		return true;

	};



	missionSuccessOrFail(accumulator) {
		return ( (accumulator >= 0) ? "Success" : "Fail" );
	};


	missionVoteCalculation(obj) {

		var missionVoteAccumulator = 0;
		var negativeVoteAccumulator = 0;
		var positiveVoteAccumulator = 0;

		this.voteAdjuster.adjustMissionVotes(obj);

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			//default missionVote is null
			if (obj.pA[i].missionVote == null) {

				obj.rD.missionVoteInfo.
				push({name: obj.pA[i].name, vote: "offline"});

				continue; 
			};



			if (obj.pA[i].missionVote >= 0) {
				positiveVoteAccumulator += obj.pA[i].missionVote;
			} else {
				negativeVoteAccumulator += obj.pA[i].missionVote;
			};



			obj.rD.missionVoteInfo.push(

				{
					name: obj.pA[i].name,
					vote: obj.pA[i].missionVote
				}

			);
			/*
			console.log(obj.pA[i].name + " final vote after adjustments is: " 
				+ obj.pA[i].missionVote); 
			*/
		}; //end for

		/*
		console.log("Negative Vote Total BEFORE Shadow Domain Is: " 
			+ negativeVoteAccumulator);
		*/
		negativeVoteAccumulator = obj.rO.roles["Umbra Lord"]
		.adjustVotesShadowDomain(negativeVoteAccumulator, obj);
		/*
		console.log("Negative Vote Total AFTER Shadow Domain Is: " 
			+ negativeVoteAccumulator);

		console.log("Positive Vote Total BEFORE Ichigo Umbra Slayer is: " 
			+ positiveVoteAccumulator); 
		*/

		positiveVoteAccumulator = obj.rO.roles["Ichigo"]
		.adjustVotesUmbraSlayer(positiveVoteAccumulator, obj);

		/*
		console.log("Positive Vote Total AFTER Ichigo Umbra Slayer is: " 
			+ positiveVoteAccumulator);
		*/

		missionVoteAccumulator = negativeVoteAccumulator + positiveVoteAccumulator;


		missionVoteAccumulator = obj.rO.roles["Ichigo"]
		.hylianShield(missionVoteAccumulator);

		missionVoteAccumulator = obj.rO.roles["Lan"]
		.adjustVoteSumIntimidate(missionVoteAccumulator, obj);

		obj.rI.addMissionInfo(
			obj.rD.missionNo,
			obj.rD.missionVoteInfo,
			positiveVoteAccumulator,
			negativeVoteAccumulator,
			missionVoteAccumulator,
			this.missionSuccessOrFail(missionVoteAccumulator)
		);


		return missionVoteAccumulator;

	}; //end missionVoteCalculation









	//need to shuffle playerArray BEFORE this function, cause we are setting
	//index here
	//length of rolesForThisGame == length of playerArray
	assignPlayersTheirRoles(obj) {

		//getListOfRolesForGame is already shuffled
		var rolesForThisGame = obj.rO.getListOfRolesForGame(obj);
		//console.log(rolesForThisGame);

		for (let i = 0; i < rolesForThisGame.length; i++) {

			obj.pA[i].role = rolesForThisGame[i];

			obj.rO.roles[rolesForThisGame[i]].name = obj.pA[i].name;
			obj.rO.roles[rolesForThisGame[i]].socketID = obj.pA[i].socketID;
			obj.rO.roles[rolesForThisGame[i]].inGame = true;
			obj.rO.roles[rolesForThisGame[i]].index = i;

			obj.rO.rolesInGame.push(obj.rO.roles[rolesForThisGame[i]]);

			obj.pT[obj.pA[i].name] = i;

		};

	}; //end assignPlayersTheirRoles



	resetPlayerReadyStatus(obj) {

		for (var i = 0; i < obj.pA.length; i++) {
			obj.pA[i].ready = false;
		};

	};





	resetDataAtEndOfMission(obj) {

		this.roomsData[obj.room].missionTeam = [];
		this.roomsData[obj.room].missionVoteInfo = [];
		this.roomsData[obj.room].teamVoteInfo = [];


		for (let i = 0; i < obj.pA.length; i++) {

			obj.pA[i].ready = false;
			obj.pA[i].isTeamLeader = false;
			obj.pA[i].selectedForMission = false;
			obj.pA[i].missionVote = null;
			obj.pA[i].teamVote = null;

		
		};



	}; //end resetDataAtEndOfMission



	returnpArrayRoomAndIndex(socket) {

		if (!this.socketRoom.hasOwnProperty(socket.id)) { 
			return ({room: "404 Does Not Exist: Error!", playerArray: undefined});
		};


		if (!this.roomsData.hasOwnProperty(this.socketRoom[socket.id])) { 
			return ({room: "404 Room Does Not Exist: Error!", playerArray: undefined});
		};

		var pA = this.roomsData[this.socketRoom[socket.id]].playersInRoomArray;

		var index = -1;

		for (let i = 0; i < pA.length; i++) {

			if (pA[i].socketID == socket.id) {
				index = i;
			};

		};


		return (
			{
				room: this.socketRoom[socket.id], 
				pA: this.roomsData[this.socketRoom[socket.id]].playersInRoomArray,
				rO: this.roomsData[this.socketRoom[socket.id]].rolesObject,
				rI: this.roomsData[this.socketRoom[socket.id]].results,
				rD: this.roomsData[this.socketRoom[socket.id]],
				pT: this.roomsData[this.socketRoom[socket.id]].playerTracker,
				index: index
			}
		);

	}; //end returnpArrayRoomAndIndex(socket)



	/* TESIING PURPOSE FUNCTIONS ONLY */

	addTeamVote(obj, index, vote) {

		obj.pA[index].teamVote = vote;

	};


	addMissionVote(obj, index, vote) {

		obj.pA[index].missionVote = vote;

	};


	setPlayerDisconnected(obj, index) {

		obj.pA[index].connected = false;

	};

	/*
	setPlayerReady(obj, index) {

		obj.pA[index].ready = true;

	}; */


	isEveryoneReadyFirstGameAndAtLeastThreePlayers(obj) {

		if (obj.pA.length < 3) { return false; };

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].ready) {

				return false;

			};

		}; //end for

		return true;

	}; //end isEveryoneReadyFirstGameAndAtLeastFivePlayers(obj)





}; //end class Controller



class Player {

	constructor(_name, _socketID, _roomName, _roomMaster) {

		this.name = _name;
		this.pseudonym = ""; //for telepathy
		this.socketID = _socketID;
		this.room = _roomName;
		this.roomMaster = _roomMaster;
		this.ready = false;
		this.connected = true; //if disconnected, change to false
		this.role = "";
		this.isTeamLeader = false;
		this.selectedForMission = false;
		this.missionVote = null;
        this.shrinkCount = 0; //default is 0
        this.burnCount = 0; //default is 0
        this.teamVote = null; 
        this.princessChoice = "";
        this.corrupted = false;
        this.poisonCount = 0;
        this.bomb = false;
        this.paralyzed = false;
        this.frozen = false;
        this.selectedForTelepathy = false;
        this.multiplier = 1; //default 1: needs to be 1 (and not 0) so you can stack multiplication powers
        this.safeguard = false; //safeguard and bless gets reset in resetallplayerinfo
        this.bless = false; //default is 1 changed to false.
        this.therapy = false;
        this.groupHug = false;
        this.confused = false;
        this.invisible = false;
        this.soulMark = false;
        this.jailed = false;
        this.reverse = false; 

	}; //end constructor



}; //end class Player





module.exports = {
    Controller,
    Player
};