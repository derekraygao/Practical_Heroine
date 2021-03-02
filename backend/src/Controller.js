var RO = require('./RolesObject.js');
var rI = require('./ResultsInfo.js');



class Controller {


	constructor() {

		this.roomsData = {};
		this.listOfRooms = ["testing"];
		this.socketRoom = {}; //which room is a socket in (based on socket.id)



		this.roomsData["testing"] = 
		{	
			playersInRoomArray: [],
			gamePhase: 0,
			teamLeaderIndex: 0,
			missionTeam: [],
			missionVoteInfo: [],
			teamVoteInfo: [],
			numOfFailedTeamProposals: 0,
			rolesObject: new RO.RolesObject(),
			results: new rI.ResultsInfo(),
			playerTracker: {} //{name: index in player array}

		};

		this.socketRoom["DerekID"] = "testing";

	

	}; //end constructor



	addPlayerToArray(name, socketID, roomName, roomMaster) {

		this.roomsData[roomName].playersInRoomArray.
		push(new Player(name, socketID, roomName, roomMaster));

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


	updateTeamLeaderIndex(obj) {

		this.roomsData[obj.room].teamLeaderIndex += 1;

		if (this.roomsData[obj.room].teamLeaderIndex 
			> (obj.pA.length - 1)
		) {
			this.roomsData[obj.room].teamLeaderIndex = 0;
		  };

	};


	chooseOnlyConnectedTeamLeader(obj) {

		this.updateTeamLeaderIndex(obj);

		if (!obj.pA[this.roomsData[obj.room].teamLeaderIndex].connected) {

			this.chooseOnlyConnectedTeamLeader(obj);

		} else {

			obj.pA[this.roomsData[obj.room].teamLeaderIndex].isTeamLeader = true;

		};

	}; //end chooseOnlyConnectedTeamLeader



	//_vote is either "Success" or "Fail"
	setPlayerMissionVote(obj, _vote) {

		if (_vote == "Success") {
			obj.pA[obj.index].missionVote = 1;
		} else {
			obj.pA[obj.index].missionVote = -1;
		};

	};


	didAllPlayersVoteOnTheMission(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].connected) { continue; };

			//default missionVote is null
			if (!obj.pA[i].missionVote) {
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

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			//default missionVote is null
			if (!obj.pA[i].missionVote) { 

				this.roomsData[obj.room].missionVoteInfo.
				push({name: obj.pA[i].name, vote: "offline"});

				continue; 
			};


			missionVoteAccumulator += obj.pA[i].missionVote;

			this.roomsData[obj.room].missionVoteInfo.push(

				{
					name: obj.pA[i].name,
					vote: obj.pA[i].missionVote
				}

			);

		}; //end for


		this.roomsData[obj.room].results.addMissionInfo(
			this.roomsData[obj.room].gamePhase,
			this.roomsData[obj.room].missionVoteInfo,
			missionVoteAccumulator,
			this.missionSuccessOrFail(missionVoteAccumulator)
		);


		return missionVoteAccumulator;

	};



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
			if (!obj.pA[i].teamVote) {
				return false;
			};

		};

		return true;

	};




	isTeamVoteAcceptOrNot(vote) {

		return( (vote >= 0) ? "Accept" : "Reject" );

	};


	teamVoteCalculation(obj) {

		var teamVoteAccumulator = 0;

		for (let i = 0; i < obj.pA.length; i++) {

			//default teamVote is null, meaning offline
			if (!obj.pA[i].teamVote) { continue; };

			teamVoteAccumulator += obj.pA[i].teamVote;

			this.roomsData[obj.room].teamVoteInfo.push(

				{
					name: obj.pA[i].name,
					vote: this.isTeamVoteAcceptOrNot(obj.pA[i].teamVote)
				}

			);
			
		}; //end for

		return teamVoteAccumulator;

	}; //end teamVoteCalculation



	wasTeamAccepted(obj) {

		var teamVoteAccumulator = this.teamVoteCalculation(obj);


		if (teamVoteAccumulator >= 0) {

			this.roomsData[obj.room].numOfFailedTeamProposals = 0;

			this.roomsData[obj.room].results.
			addTeamInfo(
				this.roomsData[obj.room].gamePhase,
				obj.pA[this.roomsData[obj.room].teamLeaderIndex].name,
				this.roomsData[obj.room].missionTeam,
				this.roomsData[obj.room].teamVoteInfo,
				"Accepted"
			);

			return "Successful Team Proposal";

		} else {

			//this must be before you reset teamVoteInfo below
			this.roomsData[obj.room].results.
			addTeamInfo(
				this.roomsData[obj.room].gamePhase,
				obj.pA[this.roomsData[obj.room].teamLeaderIndex].name,
				this.roomsData[obj.room].missionTeam,
				this.roomsData[obj.room].teamVoteInfo,
				"Rejected"
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
	resetDataForFailedTeamProposal() {

		this.roomsData[obj.room].missionTeam = [];
		this.roomsData[obj.room].teamVoteInfo = [];

		for (let i = 0; i < obj.pA.length; i++) {

			obj.pA[i].isTeamLeader = false;
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

			if (this.roomsData[obj.room].missionTeam.includes(obj.pA[i].name)) {
				obj.pA[i].selectedForMission = true;
			};

		};

	}; //end setPlayersForMission


	//need to shuffle playerArray BEFORE this function, cause we are setting
	//index here
	assignPlayersTheirRoles(obj) {

		var rolesForThisGame = obj.rO.getListOfRolesForGame(obj);
		//console.log(rolesForThisGame);

		for (let i = 0; i < rolesForThisGame.length; i++) {

			obj.pA[i].role = rolesForThisGame[i];

			obj.rO.roles[rolesForThisGame[i]].name = obj.pA[i].name;
			obj.rO.roles[rolesForThisGame[i]].socketID = obj.pA[i].socketID;
			obj.rO.roles[rolesForThisGame[i]].inGame = true;
			obj.rO.roles[rolesForThisGame[i]].index = i;

			this.roomsData[obj.room].rolesObject.rolesInGame.
			push(obj.rO.roles[rolesForThisGame[i]]);

			this.roomsData[obj.room].playerTracker[obj.pA[i].name] = i;

		};

	}; //end assignPlayersTheirRoles




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






}; //end class Controller



class Player {

	constructor(_name, _socketID, _roomName, _roomMaster) {

		this.name = _name;
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
        this.burnCount = 0;
        this.teamVote = null; 
        this.princessChoice = "";
        this.devilized = false;
        this.poisoned = false;
        this.bomb = false;
        this.selectedForTelepathy = false;
        this.bide = 1;
        this.multiplier = 1; //default 1: needs to be 1 (and not 0) so you can stack multiplication powers
        this.safeguard = false; //safeguard and bless gets reset in resetallplayerinfo
        this.bless = 1; //default is 1.
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