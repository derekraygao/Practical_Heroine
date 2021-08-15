var RO = require('./RolesObject.js');
var rI = require('./ResultsInfo.js');
var {VoteAdjuster} = require('./VoteAdjuster.js');
var {randomName} = require('../random_name.js');
var {generateRandomPhrase} = require('../functions/randomPhraseGenerator.js');


class Controller {


	constructor() {

		this.roomsData = {};
		this.listOfRooms = ["testing"];
		this.socketRoom = {}; //which room is a socket in (based on socket.id)
		this.voteAdjuster = new VoteAdjuster(); //all rooms can share this single instance


		this.roomsData["testing"] = 
		{	
			roomStatus: "Open",
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
			messageStack: [],
			statusEffects: [], //refers to status effects that Ability Manager should implement [{target: "John", effect: "paralysis"}]
			playerTracker: {} //{name: index in player array} //populated in assignPlayersTheirRoles

		};

		this.socketRoom["DerekID"] = "testing";
		this.socketRoom["CloudID"] = "testing";
		this.socketRoom["SerenaID"] = "testing";
		this.socketRoom["LucioID"] = "testing";
		this.socketRoom["XingID"] = "testing";
		this.socketRoom["HarleyID"] = "testing";
		this.socketRoom["KennethID"] = "testing";
		this.socketRoom["MarsID"] = "testing";


	}; //end constructor


	checkIfDuplicateCapitalizedRoomName(roomName) {

		var capitalizedRN = roomName.toUpperCase();

		var forLength = this.listOfRooms.length;
		var i = 0;

		for (i; i < forLength; i++) {

			if (capitalizedRN == this.listOfRooms[i].toUpperCase()) {
				return true;
			};

		};

		return false;

	}; //end checkIfDuplicateCapitalizedRoomName(roomName)


	createRoom(roomName, socket) {

		if (this.checkIfDuplicateCapitalizedRoomName(roomName)) {
			return "Room Name Exists";
		};


		this.listOfRooms.push(roomName);

		this.socketRoom[socket.id] = roomName;


		var tempRanName = randomName();

		this.roomsData[roomName] = 
		{	
			roomStatus: "Open",
			roomMaster: tempRanName,
			jitsiRoomName: generateRandomPhrase(),
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
			messageStack: [],
			statusEffects: [], 
			playerTracker: {} 
		};


		this.addPlayerToArray(tempRanName, socket.id, roomName);

		return "Successfully Created Room";

	}; //end createRoom


	openRoom(obj) {

		if (obj.pA[obj.index].name !== obj.rD.roomMaster) { return 0; };

		obj.rD.roomStatus = "Open";

	};


	closeRoom(obj) {

		if (obj.pA[obj.index].name !== obj.rD.roomMaster) { return 0; };

		obj.rD.roomStatus = "Closed";

	};



	//room is open and < 10 players
	isRoomJoinable(roomName) {

		if (this.roomsData[roomName].roomStatus !== "Open") {
			return false;
		};


		if (this.roomsData[roomName].playersInRoomArray.length
			>= 10) {
			return false;
		};

		
		if (![0, 10, 11].includes(this.roomsData[roomName].gamePhase)) {
			return false;
		};
	

		return true;

	}; //end isRoomJoinable


	joinRoom(roomName, socket) {

		//make sure roomName exists
		if (!this.listOfRooms.includes(roomName)) { return "Failed To Join"; };
		if (!this.isRoomJoinable(roomName)) { return "Failed To Join"; };

		this.addPlayerToArray(randomName(), socket.id, roomName);

		return "Successfully Joined Room";

	}; //end joinRoom()


	/*must be disconnected, if connected or rejoined, then 
	you are not a rejoining player
	During game phase 0, 10, 11, all d/ced has already been
	spliced out*/
	isPlayerRejoining(roomName, info) {
		
		if (info.roomName !== roomName) { return -1; };

		var pA = this.roomsData[roomName].playersInRoomArray;
		var forLength = pA.length;
		var i = 0;

		for (i; i < forLength; i++) {

			if (pA[i].name !== info.name) { continue; };
			if (pA[i].connection !== "disconnected") { break; };

			return i;

		};


		return -1; 

	}; //end isPlayerRejoining


	/*
		Need to check listOfRooms.includes(roomName), in case room
		doesn't exist for isPlayerRejoining function. It's also why
		we cannot just re-use this.joinRoom since it checks it again,
		so not very efficient
	*/
	joinRoomManually(roomName, socket, rejoinInfo) {

		if (!this.listOfRooms.includes(roomName)) { return "Failed To Join"; };

		var ind = this.isPlayerRejoining(roomName, rejoinInfo);

		if (ind == -1) {

			if (!this.isRoomJoinable(roomName)) { return "Failed To Join"; };

			this.addPlayerToArray(randomName(), socket.id, roomName);

			return "Successfully Joined Room";

		}; //end areYouRejoining

		/*you are rejoining player*/

		var pObj = this.roomsData[roomName].playersInRoomArray[ind];
		var rolesInGameObj = this.roomsData[roomName].rolesObject.rolesInGame[ind];

		delete this.socketRoom[pObj.socketID];
		this.socketRoom[socket.id] = roomName;

		pObj.socketID = socket.id;
		rolesInGameObj.socketID = socket.id;

		pObj.connection = "rejoined";


		return "Rejoined The Room";

	}; //end joinRoomManually



	setNewJitsiRoomName(obj) {

		var newJitsiRoomName = generateRandomPhrase();

		obj.rD.jitsiRoomName = newJitsiRoomName;

		return newJitsiRoomName;

	};



	/*For now, it's just open/closed status, but in future,
	maybe can set like level limits and stuff */
	getListOfRooms() {

		var roomsList = [];
		var forLength = this.listOfRooms.length;
		var i = 0;

		for (i; i < forLength; i++) {

			if (this.roomsData[this.listOfRooms[i]].roomStatus 
				== "Closed") { continue; };

			if (![0, 10, 11].includes(this.roomsData[this.listOfRooms[i]].gamePhase)) 
				{ continue; };		

			roomsList.push(this.listOfRooms[i]);

		}; //end for 
		

		return roomsList;

	}; //end getListOfRooms




	addPlayerName(name, obj) {

		var capitalizedName = name.toUpperCase();

		for (var i = 0; i < obj.pA.length; i++) {

			if ((obj.pA[i].name).toUpperCase() == capitalizedName) {
				return "Name Taken";
			};

		}; //end for


		/*if it's room master submitting name,
		need to update everyone */
		if (obj.pA[obj.index].name == obj.rD.roomMaster) {

			obj.pA[obj.index].name = name;
			obj.rD.roomMaster = name;

			return "Successfully Added Room Master Name";
		};

		
		obj.pA[obj.index].name = name;

		return "Successfully Added Name";

	};


	//also adds socketRoom
	addPlayerToArray(name, socketID, roomName) {

		this.roomsData[roomName].playersInRoomArray.
		push(new Player(name, socketID, roomName));

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


	unreadyPlayer(obj) {

		obj.pA[obj.index].ready = false;

	};


	isEveryoneReadyFirstGameAndAtLeastSixPlayers(obj) {

		if (obj.pA.length < 6) { return false; };

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].ready) {

				return false;

			};

		}; //end for

		return true;

	}; //end isEveryoneReadyFirstGameAndAtLeastFivePlayers(obj)


	areAllConnectedPlayersReady(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].connection !== "connected") { continue; };

			if (!obj.pA[i].ready) { return false; };

		};

		return true;

	}; //end areAllConnectedPlayersReady(obj)


	areAllConnectedPlayersDoneWithPowerPhase2(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].connection !== "connected") { continue; };
			if (!obj.pA[i].selectedForMission) { continue; };

			if (!obj.pA[i].ready) { return false; };

		}; //end for

		return true;

	}; //end areAllConnectedPlayersDoneWithPowerPhase2(obj)



	//remember there's 1:1 mapping of pA & rolesInGame index
	didAllConnectedVillainsGuessOnThePrincessIdentity(obj) {

		for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

			if (obj.pA[i].connection !== "connected") { continue; };
			if (obj.rO.rolesInGame[i].team != "villains") { continue; };

			//if princessGuess is null
			if (!obj.rO.rolesInGame[i].princessGuess) {
				return false;
			};

		};

		return true;


	}; //end didAllConnectedVillainsGuessOnThePrincessIdentity(obj)


	/*need this to prevent infinite loop in case everyone 
	connected is paralyzed*/
	areAllConnectedPlayersParalyzed(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].connection !== "connected") { continue; };

			if (!obj.pA[i].paralyzed) { return false; };

		};

		return true;

	}; //end ifAllPlayersParalyzed



	paralyzedPlayerSkip(obj) {

		if (this.areAllConnectedPlayersParalyzed(obj)) { return 0; };

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


		if (obj.pA[obj.rD.teamLeaderIndex].connection !== "connected") {
			
			return this.chooseOnlyConnectedTeamLeader(obj);

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


	didAllConnectedPlayersVoteOnTheTeam(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].connection !== "connected") { continue; };

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
		adjustVotesWithUmbraLordAbsolutePower(teamVoteAccumulator, obj);

		console.log("team vote accumulator is: " + teamVoteAccumulator);


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

		//this.roomsData[obj.room].missionTeam = [];
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
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Success", 
									      obj.rD.missionNo
									     );

				break;


			case "Fail":

				obj.pA[obj.index].missionVote = -1;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Fail", 
									      obj.rD.missionNo
									     );
				this.healPlayerForVotingForFailure(obj.pA[obj.index]);

				break;


			case "Power":

				obj.pA[obj.index].missionVote = 0;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;


			//for Umbra Lord
			case "Bide":

				obj.pA[obj.index].missionVote = 1;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;


			//for Princess
			case "Star Prism Power": 
				obj.pA[obj.index].missionVote = -2;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );
				break;

			
			case "Starlight Shuriken": 
				obj.pA[obj.index].missionVote = 3;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );
				break;



			case "Power (-1)":

				obj.pA[obj.index].missionVote = -1;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;


			//for Sensor
			case "Test Results":

				obj.pA[obj.index].missionVote = -1.5;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;


			//for Noah
			case "Nightmare Syndrome":

				obj.pA[obj.index].missionVote = 1.5;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;

			//for BabyDoll
			case "Perish Song":

				obj.pA[obj.index].missionVote = 2;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;

			//for Kaguya
			case "Sweet Charm":

				obj.pA[obj.index].missionVote = 1;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Power", 
									      obj.rD.missionNo
									     );

				break;


			default:

				obj.pA[obj.index].missionVote = 1;
				obj.rI.addMissionVoteType(obj.pA[obj.index].name, 
									      "Success", 
									      obj.rD.missionNo
									     );

				break;


		}; //end switch


	}; //end addMissionVoteForPlayer


	/*disconnected player missionVote DOES get counted if they
	voted before d/c, because in mission vote accumulator it 
	will add if vote is not null
	*/ 
	didAllConnectedPlayersVoteOnTheMission(obj) {

		for (let i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			if (obj.pA[i].connection !== "connected") { continue; };

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
			
			console.log(obj.pA[i].name + " final vote after adjustments is: " 
				+ obj.pA[i].missionVote); 
			
		}; //end for


		negativeVoteAccumulator = obj.rO.roles["Psychologist"]
		.adjustNegativeVotesPrediction(negativeVoteAccumulator, obj);

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


		missionVoteAccumulator = obj.rO.roles["Lan"]
		.adjustVoteSumIntimidate(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Balancer"]
		.adjustVoteSumEquilibrium(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Scientist"]
		.adjustVoteSumHypothesis(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Jailer"]
		.adjustVoteSumCapitalPunishment(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Oracle"]
		.adjustVoteSumLucinite(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Sensor"]
		.adjustVoteSumDiagnosis(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Detective Chat"]
		.adjustVoteSumCrossExamination(missionVoteAccumulator, obj);

		missionVoteAccumulator = obj.rO.roles["Backstabber"]
		.adjustVoteSumAssassinate(missionVoteAccumulator, obj);


		//Hylian shield needs to be the very last thing
		missionVoteAccumulator = obj.rO.roles["Ichigo"]
		.hylianShield(missionVoteAccumulator);

		console.log("Mission " + obj.rD.missionNo + " vote total: " + missionVoteAccumulator);

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

		/*
		don't reset since it just gets overwritten,
		plus rejoining player during night phase 
		needs to know mission Team for power phase 1
		this.roomsData[obj.room].missionTeam = [];
		*/
		this.roomsData[obj.room].missionVoteInfo = [];
		this.roomsData[obj.room].teamVoteInfo = [];
		this.roomsData[obj.room].statusEffects = [];


		for (let i = 0; i < obj.pA.length; i++) {

			obj.pA[i].ready = false;
			obj.pA[i].isTeamLeader = false;
			obj.pA[i].selectedForMission = false;
			obj.pA[i].missionVote = null;
			obj.pA[i].teamVote = null;

		
		};



	}; //end resetDataAtEndOfMission



	resetDataForNewGame(room) {

		this.roomsData[room].missionNo = 1;
		this.roomsData[room].gamePhase = 1;
		this.roomsData[room].teamLeaderIndex = -1; //needs to be -1 because chooseOnlyConnectedTeamLeader automatically does +1 to it 
		this.roomsData[room].missionTeam = [];
		this.roomsData[room].missionVoteInfo = [];
		this.roomsData[room].teamVoteInfo = [];
		this.roomsData[room].numOfFailedTeamProposals = 0;
		this.roomsData[room].rolesObject = new RO.RolesObject();
		this.roomsData[room].results = new rI.ResultsInfo();
		this.roomsData[room].messageStack = [];
		this.roomsData[room].statusEffects = [];
		this.roomsData[room].playerTracker = {};


		var pA = this.roomsData[room].playersInRoomArray;
		var forLength = pA.length;

		for (let i = 0; i < forLength; i++) {

			pA[i].ready = false;
			pA[i].isTeamLeader = false;
			pA[i].selectedForMission = false;
			pA[i].missionVote = null;
			pA[i].teamVote = null;

		};


	}; //end resetDataAtEndOfGame



	healPlayerForVotingForFailure(playerObj) {

		playerObj.burnCount = 0;
		playerObj.bomb = false;

		playerObj.shrinkCount = 0;
		playerObj.injuredCount = 0;

		playerObj.soulMark = false;
		playerObj.markedMan = false;

		playerObj.entranced = false;

		if (playerObj.zombie == "zombie") {
			playerObj.zombie = "recovered";
		};



		/* no point for frozen/paralysis since
		they only last one turn */

	};



	getRoomPlayerList(pA) {

		var roomPlayerList = [];
		var forLength = pA.length;

		for (var i = 0; i < forLength; i++) {

			roomPlayerList.push(
				{
					name: pA[i].name,
					ready: pA[i].ready,
					connection: pA[i].connection,
				}
			); //end push

		}; //end for

		return roomPlayerList;

	}; //end getRoomPlayerList()


	getRoomInfoFirstTime(roomName) {

		return (
			{
				roomName: roomName,
				roomStatus: this.roomsData[roomName].roomStatus,
				jitsiRoomName: this.roomsData[roomName].jitsiRoomName,
				roomMaster: this.roomsData[roomName].roomMaster,
				playerList: this.getRoomPlayerList(this.roomsData[roomName].playersInRoomArray)
			}
		); //end return

	}; //end getRoomInfoFirstTime(roomName)


	getRoomInfo(obj) {

		return (
			{
				roomName: obj.room,
				roomStatus: obj.rD.roomStatus,
				jitsiRoomName: obj.rD.jitsiRoomName,
				roomMaster: obj.rD.roomMaster,
				playerList: this.getRoomPlayerList(obj.pA)
			}
		); //end return

	}; //end getRoomInfoFirstTime(roomName)




	returnpArrayRoomAndIndex(socket) {

		if (!this.socketRoom.hasOwnProperty(socket.id)) { 
			return ({room: "404 Does Not Exist: Error!", playerArray: undefined});
		};


		if (!this.roomsData.hasOwnProperty(this.socketRoom[socket.id])) { 
			return ({room: "404 Room Does Not Exist: Error!", playerArray: undefined});
		};

		var roomInfo = this.roomsData[this.socketRoom[socket.id]];

		var pA = roomInfo.playersInRoomArray;

		var index = -1;

		for (let i = 0; i < pA.length; i++) {

			if (pA[i].socketID == socket.id) {
				index = i;
			};

		};


		return (
			{
				room: this.socketRoom[socket.id], 
				pA: pA,
				rO: roomInfo.rolesObject,
				rI: roomInfo.results,
				rD: roomInfo,
				pT: roomInfo.playerTracker,
				stack: roomInfo.messageStack,
				sE: roomInfo.statusEffects,
				index: index
			}
		);

	}; //end returnpArrayRoomAndIndex(socket)




	/*Disconnect and Rejoin Functions */


	frozenRejoinInfo(obj) {

	    if (obj.rD.gamePhase == 8) { return false; };

	    return (obj.pA[obj.index].frozen);

	};


	/*In the future, make character info update come from server,
	not from local storage. Then, you won't need to do stuff like,
	if backstabber, see if he/she was switched */
	getRejoinInfo(obj) {

		var pObj = obj.pA[obj.index];
		var rolesIG = obj.rO.rolesInGame;
		var rObj = rolesIG[obj.index];

		var villainList = [];

		var ogBackstabber = "nobody";


		/*get villain list. Cannot re-use obj.rO function cause
		worried about persequor switched with somebody. Move this
		function to rolesObject when have time */
		if (rObj.team == "villains"
			&& rObj.role !== "???") {

			var forLength = rolesIG.length;

			for (let i = 0; i < forLength; i++) {

		      if (rolesIG[i].team == "villains"
		      	&& rolesIG[i].role !== "???") {
		        villainList.push(obj.pA[i].name);
		      };

	    	}; //end for
			
		}; //end if team == villains


		if (rObj.role == "Backstabber") {

			if (rObj.originalBackStabberName
				!== "nobody chosen") {
				ogBackstabber = rObj.originalBackStabberName;
			};

		}; //end if role == Backstabber


		var charStatus = {
							selectedForTelepathy: obj.rO.roles["Esper"].rejoinInfo(pObj.name),
							jailed: obj.rO.roles["Jailer"].rejoinInfo(obj),
							frozen: this.frozenRejoinInfo(obj), 
						 };


		/*this is in case player rejoins during game phase 1
		for very first game*/
		if (obj.rD.teamLeaderIndex == -1) {
			var teamLeaderName = "No Team Leader Yet";
		} else {
			var teamLeaderName = obj.pA[obj.rD.teamLeaderIndex].name;
		};


		var rejoinInfo = {
							name: pObj.name,
							role: pObj.role,
							gamePhase: obj.rD.gamePhase,
							playerList: this.getListOfPlayers(obj),
							roomInfo: this.getRoomInfo(obj),
							villainList: villainList,
							teamLeader: teamLeaderName,
							missionNumber: obj.rD.missionNo,
							missionTeam: obj.rD.missionTeam,
							teamVoteInfo: obj.rI.teamInfo,
							missionResultsHistory: obj.rI.missionInfo,
							ogBackstabber: ogBackstabber,
							characterStatus: charStatus,
						 };


		return rejoinInfo;

	}; //end getRejoinInfo


	convertRejoinedToConnected(obj) {

		var forLength = obj.pA.length;

		for (let i = 0; i < forLength; i++) {

			if (obj.pA[i].connection == "rejoined") {
				obj.pA[i].connection = "connected";
			};

		}; //end for


	}; //end convertRejoinedToConnnected



	/*needs to be after splicing from playerArray*/
	numberOfConnectedRejoinedPlayersLeft(obj) {

		var numConnected = 0;
		var numRejoined = 0;
		var forLength = obj.pA.length;

		for (var i = 0; i < forLength; i++) {

			if (obj.pA[i].connection == "connected") {

				numConnected += 1;
				continue;

			}; //end if connected


			if (obj.pA[i].connection == "rejoined") {

				numRejoined += 1;
				continue;
			}; //end if rejoined


		}; //end for


		return {connected: numConnected, rejoined: numRejoined};


	}; //end numberOfConnectedPlayersLeft(obj)


	didTooManyHeroesOrVillainsLeave(obj) {

		var numHeroesDiscon = 0;
		var numVillainsDiscon = 0;
		var forLength = obj.rO.rolesInGame.length;

		for (var i = 0; i < forLength; i++) {

			if (obj.pA[i].connection != "disconnected") { continue; };

			if (obj.rO.rolesInGame[i].team == "villains") {
				numVillainsDiscon += 1;
			} else {
				numHeroesDiscon += 1;
			};

		}; //end for

		var stopGameBool = (numVillainsDiscon >= 2 || numHeroesDiscon >= 2);

		return stopGameBool;

	};


	removeAllSocketRoomReferences(obj) {

		var forLength = obj.pA.length;

		for (var i = 0; i < forLength; i++) {

			delete this.socketRoom[obj.pA[i].socketID];

		};

	}; //end removeSocketRoom


	removeAllDisconnectedAndHandleRejoinedPlayers(obj) {

		var forLength = obj.pA.length;
		var removeIndicesArray = [];

		for (var i = 0; i < forLength; i++) {

			if (obj.pA[i].connection == "disconnected") {
				removeIndicesArray.push(i);
			};


			if (obj.pA[i].connection == "rejoined") {
				obj.pA[i].connection = "connected";
			};

		}; //end for


		/*remove from reverse order since splicing out will change
		position of everything behind the spliced out element*/
		forLength = (removeIndicesArray.length - 1);

		for (i = forLength; i > -1; i--) {

			delete this.socketRoom[obj.pA[removeIndicesArray[i]].socketID];
			obj.pA.splice(removeIndicesArray[i], 1);

		};


	}; //end removeAllDisconnectedPlayers


	/*roomMaster was already set to "disconnected" within disconnect function
	roomMaster can be "rejoined" player*/
	ifRoomMasterAssignSomeoneElse(obj) {

		if (obj.pA[obj.index].name != obj.rD.roomMaster) { return 0; };

		var forLength = obj.pA.length;

		for (var i = 0; i < forLength; i++) {

			if (obj.pA[i].connection == "disconnected") { continue; };

			obj.rD.roomMaster = obj.pA[i].name;

			break;

		};


		var stackObj = {
						type: "Everyone",
						destination: "Update Room Master",
						data: obj.rD.roomMaster
					   };

		obj.stack.push(stackObj);

	}; //end ifRoomMasterAssignSomeoneElse


	ifCurrentTeamLeader(obj) {

		/*only applies if it's during team leader
		choosing team phase */
		if (obj.rD.gamePhase !== 2) { return 0; };
		if (obj.index !== obj.rD.teamLeaderIndex) { return 0; };

		var newTLName = this.chooseOnlyConnectedTeamLeader(obj);

		var stackObj = {
						type: "Everyone",
						destination: "Start Game Phase 2: Team Leader Choosing A Team",
						data: newTLName
					   };

		obj.stack.push(stackObj);


	}; //end ifCurrentTeamLeader



	handlePlayerDisconnect(obj, socket) {


		obj.pA[obj.index].connection = "disconnected";

		var p = this.numberOfConnectedRejoinedPlayersLeft(obj);
		var cAndR = p.connected + p.rejoined;

		if (cAndR == 0) {

			this.removeAllSocketRoomReferences(obj);

			delete this.roomsData[obj.room];
			
			var q = this.listOfRooms.indexOf(obj.room);
			this.listOfRooms.splice(q, 1);

			return 0;

		}; //end if numConnected == 0


		/*reassign room master needs to be after if cAndR == 0, otherwise maybe push into 
		obj.stack, which gets deleted later...MessageNotification then tries to access undefined*/
		this.ifRoomMasterAssignSomeoneElse(obj);


		/*can just splice them out completely during join room phases */
		if ([0, 10, 11].includes(obj.rD.gamePhase)) {

			obj.pA.splice(obj.index, 1);

			delete this.socketRoom[socket.id];

			var stackObj = {
							type: "Everyone",
							destination: "Update Entire Room Info",
							data: this.getRoomInfo(obj)
						   };

			obj.stack.push(stackObj);


			return 0;

		}; //end if gamePhase == 0, 10, 11


		
		/*During Game Play, cannot splice out.
		Player was set to "disconnected" at very top of function */

		var stopGameBool = this.didTooManyHeroesOrVillainsLeave(obj);
	
		/*do if rejoined >= 3 in case there's weird situation where
		most players are rejoined players. Maybe chooseTeam leader 
		will get stuck in infinite loop cause there's nobody to 
		choose */
		
		
		if (stopGameBool || cAndR <= 4 || p.rejoined >= 3) {

			var allInfo = obj.rO.getAllIdentitiesAndTheirRoles();

			this.removeAllDisconnectedAndHandleRejoinedPlayers(obj);

			obj.rD.gamePhase = 11;

			var stackObj = {
							type: "Everyone",
							destination: "Start Game Phase 11: Too Many Players Left Room",
							data: allInfo
						   };

			obj.stack.push(stackObj);


			stackObj = {
						type: "Everyone",
						destination: "Update Entire Room Info",
						data: this.getRoomInfo(obj)
					   };

			obj.stack.push(stackObj);


			return 0;

		}; //end if numConnected <= 4

		

		/*if none of the above applies, means the game 
		continues as normally*/

		/*in case the person disconnecting was the team leader,
		then you need to choose a new one */
		this.ifCurrentTeamLeader(obj);

		var stackObj = {
						type: "Everyone",
						destination: "Update Entire Room Info",
						data: this.getRoomInfo(obj)
					   };

		obj.stack.push(stackObj);


		/*Because the game only checks whether to proceed or not 
		after people send information (e.g. areAllPlayersReady), 
		if last person to send info disconnects, then the check of 
		"should game proceed" does not happen, so you need to do it 
		here 

		I do a roundabout method of emitting to team leader who emits 
		back to server because otherwise would need to wrap 
		socket.on (in server.js) in functions, and I feel that would 
		get complicated/less readable
		*/

		//0, 10, 11 check happens at top
		if ([2].includes(obj.rD.gamePhase)) { return 0; };

		//if 1, 3, 4, 5, 6, 7, 8, 9, then need to do check


		var stackObj = {
						type: "Individual",
						socketID: obj.pA[obj.pT[obj.rD.roomMaster]].socketID,
						destination: "Room Master Check Server If Game Should Proceed Upon Player Disconnect",
						data: obj.rD.gamePhase
					   };

		obj.stack.push(stackObj);


	}; //end handlePlayerDisconnect()






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


	resetEverythingWhenTestingRoomEmpty(room) {

		this.roomsData[room].missionNo = 0;
		this.roomsData[room].gamePhase = 0;
		this.roomsData[room].teamLeaderIndex = -1;
		this.roomsData[room].missionTeam = [];
		this.roomsData[room].missionVoteInfo = [];
		this.roomsData[room].teamVoteInfo = [];
		this.roomsData[room].numOfFailedTeamProposals = 0;
		this.roomsData[room].rolesObject = new RO.RolesObject();
		this.roomsData[room].results = new rI.ResultsInfo();
		this.roomsData[room].messageStack = [];
		this.roomsData[room].statusEffects = [];
		this.roomsData[room].playerTracker = {};

	};



}; //end class Controller



class Player {

	constructor(_name, _socketID, _roomName) {

		this.name = _name;
		this.pseudonym = ""; //for telepathy
		this.socketID = _socketID;
		this.room = _roomName;
		this.ready = false;
		this.connected = true; //if disconnected, change to false
		this.connection = "connected";

		this.role = "";
		this.isTeamLeader = false;
		this.selectedForMission = false;
		this.teamVote = null; 
		this.missionVote = null;
        this.princessChoice = "";

        this.corrupted = false;
        this.soulMark = false; //spiritualist
        this.poisonCount = 0; //default 0
        this.zombie = "human";

        this.bomb = false;
       	this.burnCount = 0; //default is 0
       	this.frozen = false;
       	this.paralyzed = false;
       	this.confused = false;
       	this.entranced = false;

       	this.injuredCount = 0;
       	this.markedMan = false; //backstabber

        this.slow = false;
        this.slowCharge = 0;
        this.shrinkCount = 0; //default is 0
        this.multiplier = 1; //default 1: needs to be 1 (and not 0) so you can stack multiplication powers
        this.boost = 0;

        this.safeguard = false; //safeguard and bless gets reset in resetallplayerinfo
        this.bless = false; //default is 1 changed to false.
        this.heartacheDefense = false;
        this.therapy = false;
        this.groupHug = false;
        
        this.invisible = false;
        this.jailed = false;
        this.selectedForTelepathy = false;
        this.reverse = false; //is this necessary???

	}; //end constructor



}; //end class Player





module.exports = {
    Controller,
    Player
};