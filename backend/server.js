

var express = require('express');
var app = express();

/*
var randomName = require('./randomname');
var AccessToken = require('twilio').jwt.AccessToken;
const MAX_ALLOWED_SESSION_DURATION = 14400;
var VideoGrant = AccessToken.VideoGrant;
*/


var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);





// Set up the path for the quickstart.
var quickstartPath = path.join(__dirname, './quickstart/public');
app.use('/quickstart', express.static(quickstartPath));




app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/game_rules', function(req, res){
    res.sendFile(path.join(__dirname, 'Game_Rules.html'));
});


app.use(express.static(__dirname));



server.listen(process.env.PORT || 4000);
console.log('server running');






var clients = [];
var playerArray = [];
var clients = [];
var readyTracker = [];


var allRolesArray = [];
var goodRolesArrayFor7_9_Players = ["princess", "seer", "aura knight", "marcus", "balancer", "detective", "telepath",
                                    "ghost", "scientist", "sensor", "oracle", "ranger", "jailer", "arduren", "saintess"];
var goodRolesArrayFor6_8_10_Players = ["princess", "seer", "aura knight", "marcus", "balancer", "detective", "telepath",
                                    "ghost", "scientist", "sensor", "oracle", "ranger", "jailer"];
var badRolesArray = ["leader", "morgana", "exploder", "alpha", "delayer", "ditto", "spiritualist", "reverser"];

var gameState = "Start of New Game";


var teamLeaderTracker = 0;

var currentTeamSocketID;

var teamVotesYesorNo = [];

var numOfFailedTeamProposals = 0;


var missionNumber = 1;
var missionResults = [];

var didEvilWin;
var successfulDivination = 0; //1 for success, 0 for did not choose, -1 for failed

var bomberChoice = "";
var burnChoice = "";
var ghostChoice = "";
var multiplyPowerChoice = "";
var originalAndStolenIdentityInfo = "";
var boolStealIdentity = false;
var hylianShield = false;
var reverseVotes = false;

var soulMarkChoice = "";
var numberOfSoulMarks = 0;

var scientistNotifiesEveryoneOfVotes = false;



var indexofNameInPlayerArray = {};


var fakeNamesArray = ["HPotter", "Pikachu", "Naruto", "ClarkKent", "Madonna", "Simpson", "Mario", "Zelda", 
                      "Doraemon", "Batman", "Pedobear", "Licker", "Gandalf", "JBond", "Kermit", "Gollum", 
                      "ScoobyDoo", "Skywalker", "Goku", "MickeyM", "WinnieP", "SpongeBob", "LelouchVi", 
                      "Kirito", "BuffyAS", "Scully", "Cartman", "Elsa", "Maleficent", "PrinceCharm", 
                      "MrMxyzptlk", "RoyalPeach", "Hecate", "Mars", "Prometheus", "Cinderella", "Dumbledore", 
                      "DoctorCrazy", "InvisibleMan", "MeghanMarkle", "YoMama", "EdwardEl", "ErenJ", 
                      "RoyMustang", "Katnissa", "Mr.Darcy", "CaptSparrow", "HPoirot", "Holmes", "FrankenS"];


/*
gamePhase

0 = enter name & click ready to start very first game
1 = power phase 1
2 = team leader is choosing team
3 = vote on team leader's team
4 = view team votes/results
5 = power phase 2 (only for selected for mission - not selected waits)
6 = vote on mission/power phase 3 (only for selected for mission - not selected waits)
7 = view mission results and click ready to start next round
8 = night phase
9 = villains get to guess on who is the princess
10 = game over & click ready to start a new game (other people can join 
during this phase)
11 = less than 5 people in the room - game automatically ends and people can 
join the room during this phase


*/









var myClass = require('./src/Controller.js');

var Controller = new myClass.Controller();
console.log(Controller);



//EVERY SERVER MESSAGE (socket.on) GOES INSIDE THE io.on
io.on('connection', function (socket) {


  socket.on("Ready For New Game", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };


    Controller.setPlayerReady(obj);

    if (!Controller.isEveryoneReadyFirstGameAndAtLeastFivePlayers(obj)) {

      //update control panel ready info
      return 0;

    };

    /* if everyone is ready */

    Controller.setGamePhase(obj, 1);

    //default missionNo is 0, add to become Mission 1
    Controller.updateMissionNumber(obj);

    Controller.resetPlayerReadyStatus(obj);

    shuffle(obj.pA);

    //index mapping is done here, so cannot shuffle afterwards, or if shuffle
    //playerArray, then need to re-map the indices
    Controller.assignPlayersTheirRoles(obj);

    //sets roles on client side
    for (let i = 0; i < obj.rO.rolesInGame.length; i++) {

      //sets roles for everyone and starts the game
      io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Start Game", obj.rO.rolesInGame[i].role);


      if (obj.rO.rolesInGame[i].team == "villains") {

        io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Set Villains List", obj.rO.getVillainsIdentities());

      };


    }; //end for

 
    io.to(`${obj.rO.roles["princess"].socketID}`).emit(
    "Reveal Villains To Princess", obj.rO.getVillainsIdentitiesForPrincess());


    if (obj.rO.roles["marcus"].inGame) {

        io.to(`${obj.rO.roles["marcus"].socketID}`).emit(
          "Reveal Princess Identity To Marcus", 
          obj.rO.getPrincessIdentityArrayForMarcus()
        );

    };





  }); //end Ready For New Game



  socket.on("End Power Phase 1", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };

    /* ready for next phase */

    Controller.resetPlayerReadyStatus(obj);

    //starting teamLeader Index is -1, and chooseOnly +1 to index
    var teamLeaderName = Controller.chooseOnlyConnectedTeamLeader(obj);


    Controller.setGamePhase(obj, 2);
    //on client side, also set gamePhase to 2
    emitToTeamLeaderChoosingTeam(obj, teamLeaderName);


  });




  socket.on("Team Leader's Proposed Team Submission", (proposedTeamArray) => {
    //missionTeamArray = ["Derek", "Cloud", "Serena"]

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    //makes sure person is team leader
    if (!obj.pA[obj.index].isTeamLeader) { return 0; };

    Controller.setMissionTeam(obj, proposedTeamArray);

    //team leader needs to vote too because he/she might be demonLord 
    //and might want to use absolute voting power

    Controller.setGamePhase(obj, 3);

    //Don't need to send team leader name because it was sent previously
    emitToAllSocketsInRoom(obj, 
      "Set Team Leader's Proposed Team", proposedTeamArray);



  }); //end Team Leader's Proposed Team Submission



  socket.on("Vote on Team Leader's Proposed Team", (vote) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    //vote is either "Accept" or "Reject"
    Controller.setPlayerTeamVote(obj, vote);

    if (!Controller.didAllPlayersVoteOnTheTeam(obj)) { return 0; };


    var teamCase = Controller.wasTeamAccepted(obj);


    switch (teamCase) {

      case "Successful Team Proposal":

        Controller.setGamePhase(obj, 4);

        updateTeamHistoryResults(obj);

        emitToAllSocketsInRoom(obj, "Team Was Accepted!", 
          obj.rI.getLatestTeamVotingInfo(obj.rD.missionNo));

        break;


      case "Failed Team Proposal":

        //you'll update teamLeaderTracker AFTER everyone is finished viewing the 
        //team results, which is why to see nextTeamLeader, you do current index + 1

        Controller.setGamePhase(obj, 4);

        updateTeamHistoryResults(obj);

        emitToAllSocketsInRoom(
          obj, 
          "Team Was Rejected!",
          {
            teamVoteInfo: obj.rI.getLatestTeamVotingInfo(obj.rD.missionNo),
            numOfFailedTeamProposals: obj.rD.numOfFailedTeamProposals,
            nextTeamLeader: obj.pA[(obj.rD.teamLeaderIndex + 1)].name
          } 
          
        );

        break;


      case "Game Over. Too Many Failed Team Proposals":

        Controller.setGamePhase(obj, 10);

        emitToAllSocketsInRoom(
          obj, 
          "Game Over. Too Many Failed Team Proposals",
          obj.rO.getAllIdentitiesAndTheirRoles()
        );

        //emitAll and update resultsInfo on client side

        break;


      default:


    }; //end switch



  }); //end "Vote on Team Leader's Proposed Team"



  socket.on("Ready For Next Team Leader Proposal After Failed One", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };

    Controller.resetPlayerReadyStatus(obj);

    //uses original teamLeaderIndex to set player.isTeamLeader = false
    //before selecting for/choosing new team leader
    Controller.resetDataForFailedTeamProposal(obj);

    //this updates teamLeaderIndex
    var teamLeaderName = Controller.chooseOnlyConnectedTeamLeader(obj);

    Controller.setGamePhase(obj, 2);

    //on client side, also set gamePhase to 2
    emitToTeamLeaderChoosingTeam(obj, teamLeaderName);



  }); //end "Ready For Next Team Leader Proposal After Failed One"







  //after people view team votes
  socket.on("Ready To Start Power Phase 2", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };

    Controller.resetPlayerReadyStatus(obj);

    Controller.setPlayersForMission(obj);

    //tells selected for mission to start power phase 2 and for
    //those not selected to wait
    Controller.setGamePhase(obj, 5);

    emitStartPowerPhase2(obj);


  }); //end "Ready For Next Team Leader Proposal After Failed One"



  socket.on("End Power Phase 2. Start Mission Voting", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersDoneWithPowerPhase2(obj)) { return 0; };

    Controller.resetPlayerReadyStatus(obj);

    Controller.setGamePhase(obj, 6);

    emitStartMission(obj);

  }); //end "Ready For Next Team Leader Proposal After Failed One"




  socket.on("Vote on Mission", (vote) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerMissionVote(vote, obj);

    if ( !Controller.didAllPlayersVoteOnTheMission(obj) ) { return 0; };

    /*All players have voted on mission */

    var missionPointsTotal = Controller.missionVoteCalculation(obj);

    var gameStatus = obj.rI.didAnyoneWin(obj.rD.missionNo);

    //needs to come after above mission calculations
    updateMissionResults(obj);


    switch(gameStatus) {

      case "Heroes Win! Villains' Last Chance.":

        console.log("Heroes Win! Villains' Last Chance.");

        Controller.setGamePhase(obj, 9);

        emitToVillainsToGuessPrincessIdentity(obj);

        break;

      case "Villains Win!":

        console.log("Villains Win!");

        Controller.setGamePhase(obj, 10);

        emitToAllSocketsInRoom(
          obj, 
          "Game Over. Villians Win! Roles & Identities Revealed!", 
          Controller.getAllIdentitiesAndTheirRoles()
        );

        break;

      case "Nobody Has Won Yet.":

        console.log("Nobody Has Won Yet.");

        Controller.setGamePhase(obj, 7);

        emitToAllSocketsInRoom(obj, "Mission Ended", missionPointsTotal);

        break;

      default:

        break;

    }; //end switch


  

  }); //end "Vote on Mission"



  socket.on("Ready For Next Round/Mission", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };    

    Controller.resetDataAtEndOfMission(obj);

    Controller.setGamePhase(obj, 8);

    //+1 to current Mission No. Need to update on client side too
    Controller.updateMissionNumber(obj);

    emitToAllSocketsInRoom(obj, "Start Night Phase", "");


  });



  socket.on("End Night Phase", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };  

    Controller.resetPlayerReadyStatus(obj);


    Controller.setGamePhase(obj, 1);

    emitToAllSocketsInRoom(obj, "Start Power Phase 1", "");


  });








  socket.on("Submit Villain Guess On The Princess' Identity", (guess) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.addPrincessGuessForVillain(obj, guess);


    if (!Controller.didAllConnectedVillainsGuessOnThePrincessIdentity(obj)) {
      return 0;
    };


    Controller.setGamePhase(obj, 10);

    //if everyone did guess, then next phase
    if (obj.rO.didVillainsCorrectlyGuessThePrincessIdentity()) {

      emitToAllSocketsInRoom(
        obj, 
        "Game Over. Villians Correctly Guessed The Princess' Identity!", 
        Controller.getAllIdentitiesAndTheirRoles()
      );


    } else {

      emitToAllSocketsInRoom(
        obj, 
        "Game Over. Heroes Win! Villains Failed To Guess The Princess' Identity", 
        Controller.getAllIdentitiesAndTheirRoles()
      );

    }; //end else


  }); //end socket.on("Submit Villain Guess On The Princess' Identity")






}); //end of io.on curly braces






function emitToAllSocketsInRoom(obj, _destination, _data) {

  for (var i = 0; i < obj.pA.length; i++) {
    
    if (obj.pA[i].connected) {
      io.to(`${obj.pA[i].socketID}`).emit(_destination, _data);
    }; //end if
    
  }; //end for

}; //end emitToAllSocketsInRoom



function emitToTeamLeaderChoosingTeam(obj, data) {

  for (var i = 0; i < obj.pA.length; i++) {

    if (obj.pA[i].isTeamLeader) {
      io.to(`${obj.pA[i].socketID}`).emit("You Are Team Leader", data);
    } else {
      io.to(`${obj.pA[i].socketID}`).emit("Wait While Team Leader Chooses Team", data);
    };

  }; //end for


}; //end emitToTeamLeaderChoosingTeam



function emitStartPowerPhase2(obj) {

    for (let i = 0; i < obj.pA.length; i++) {

      if (obj.pA[i].selectedForMission) {

        io.to(`${obj.pA[i].socketID}`).emit(
        "Start Power Phase 2");

      } else {

        io.to(`${obj.pA[i].socketID}`).emit(
        "Wait During Power Phase 2");

      };

    }; //end for

}; //end emitStartPowerPhase2



function emitStartMission(obj) {

    for (let i = 0; i < obj.pA.length; i++) {

      if (obj.pA[i].selectedForMission) {

        io.to(`${obj.pA[i].socketID}`).emit(
        "Start Mission");

      } else {

        io.to(`${obj.pA[i].socketID}`).emit(
        "Wait While Team Completes Mission");

      };

    }; //end for

}; //end emitStartMission



function emitToVillainsToGuessPrincessIdentity(obj) {

  for (let i = 0; i < obj.rO.rolesInGame.length; i++) {

    if (obj.rO.rolesInGame[i].team == "villains") {

        io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Guess The Identity of The Princess");      

    } else {

        io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Wait While the Villains Guess The Identity Of The Princess");

    }; //end else

  }; //end for


}; //end emitToVillainsToGuessPrincessIdentity(obj)



function updateTeamHistoryResults(obj) {

  var latestTeamAllInfo = obj.rI.getLatestTeamVotingAllInfo(obj.rD.missionNo);

  for (var i = 0; i < obj.pA.length; i++) {

    io.to(`${obj.pA[i].socketID}`).emit(
        "Update Team History Results", latestTeamAllInfo);

  };

}; //end updateTeamHistoryResults(obj)


function updateMissionResults(obj) {

  var latestMInfo = obj.rI.getLatestMissionInfo(obj);

  for (var i = 0; i < obj.pA.length; i++) {

    io.to(`${obj.pA[i].socketID}`).emit(
        "Update Mission Results", latestMInfo);

  };

}; //end updateMissionResults















function SendOutPlayerArrayInformation() {

  var _heroesplayerArray = [];
  var _villainsplayerArray = [];

  for (var i = 0; i < playerArray.length; i++) {

    _villainsplayerArray.push({name: playerArray[i].name, team: playerArray[i].team, amIGood: playerArray[i].amIGood, selectedForTeam: playerArray[i].selectedForTeam});

    _heroesplayerArray.push({name: playerArray[i].name, selectedForTeam: playerArray[i].selectedForTeam});

  };


  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].amIGood) {
      io.to(`${playerArray[i].socketID}`).emit("Update playerArray", _heroesplayerArray);
    } else {
      io.to(`${playerArray[i].socketID}`).emit("Update playerArray", _villainsplayerArray);
    };

  }; //end for

}; //end SendOutPlayerArrayInformation()


function SendOutRoleInformationToPlayers() {
  for (var i = 0; i < playerArray.length; i++) {
    io.to(`${playerArray[i].socketID}`).emit("Role Assigned", playerArray[i]);
  };
};




function IndexOfNameInPlayerArray(_name) {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].name == _name) {
      return i;
    };

  };

};


function IndexOfRoleInPlayerArray(_role) {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].role == _role) {
      return i;
    };

  };

};



function UpdateAndNotifyplayerArrayChanges(_name, _prop, _val) {

  var _infoArray = [_name, _prop, _val];

  //this updates server side information
  var changeIndex = IndexOfNameInPlayerArray(_infoArray[0]);
  playerArray[changeIndex][_infoArray[1]] = _infoArray[2];

  io.sockets.emit("playerArray changes", _infoArray);

};



function FindSocketIDFromName(_playerName) {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].name == _playerName) {
      return playerArray[i].socketID;
    };

  };

};



function ResetAllPlayerInfo() {

  for (var i = 0; i < playerArray.length; i++) {

    playerArray[i].ready = false;
    playerArray[i].selectedForTeam = false;
    playerArray[i].princessChoice = "";
    playerArray[i].safeguard = false;
    playerArray[i].bless = 1;
    playerArray[i].invisible = false;
    //playerArray[i].teamChoiceVote = 1; 
    //playerArray[i].missionVote = 1;
    playerArray[i].reverse = false;
    playerArray[i].jailed = false;

  }; //end for

};


function ResetReadySelectedForTeamAndVotes() {

  for (var i = 0; i < playerArray.length; i++) {

    playerArray[i].ready = false;
    playerArray[i].selectedForTeam = false;
    playerArray[i].teamChoiceVote = 1; //is this necessary?
    playerArray[i].missionVote = 1; //is this necessary?

  };

};


function ResetSomePlayerArrayAttributes() {

  for (var i = 0; i < playerArray.length; i++) {

    playerArray[i].safeguard = false;
    playerArray[i].bless = 1;
    playerArray[i].invisible = false;
    playerArray[i].reverse = false;
    playerArray[i].jailed = false;

  }; //end for

};





function ResetPlayerReadyAndSelectedForTeam() {

  for (var i = 0; i < playerArray.length; i++) {

    playerArray[i].ready = false;
    playerArray[i].selectedForTeam = false;
   
  }; //end for

};


function ResetPlayerReadyStatus() {

  for (var i = 0; i < playerArray.length; i++) {
    playerArray[i].ready = false;
  };

};



function IncrementteamLeaderTracker() {

  teamLeaderTracker++; 

  if (teamLeaderTracker > (playerArray.length -1)) {
      teamLeaderTracker = 0;
  };

};



function hasAnyoneWon() {

  //structure of missionResults: missionResults.push({MissionNo: missionNumber, Result: "Success"});

  var successNo = 0;
  var failedNo = 0;

  for (var j = 0; j < missionResults.length; j++) {

    if (missionResults[j].Result == "Success") {

      successNo++;

    } else {

      failedNo++;

    }; //end else

  }; //end for


  if (successNo == 3) {

    didEvilWin = false;
    return true;

  } else if (failedNo == 3) {

    didEvilWin = true;
    return true;

  } else {

    return false;

  };


}; //end hasAnyoneWon function








function populateRolesArray(numberOfPlayers) {

	//good roles
	var princess = {role: "princess", alignment: "unknown", team: "heroes", amIGood: true};
  var saintess = {role: "saintess", alignment: "good", team: "heroes", amIGood: true};
	var seer = {role: "seer", alignment: "good", team: "heroes", amIGood: true};
  var aura = {role: "aura", alignment: "good", team: "heroes", amIGood: true};
	var balancer = {role: "balancer", alignment: "good", team: "heroes", amIGood: true};
	var arduren = {role: "arduren", alignment: "good", team: "heroes", amIGood: true};
	//var silencer = {role: "silencer", alignment: "good", team: "heroes", amIGood: true};
	var telepath = {role: "telepath", alignment: "good", team: "heroes", amIGood: true};
	var ghost = {role: "ghost", alignment: "good", team: "heroes", amIGood: true};
	var detective = {role: "detective", alignment: "good", team: "heroes", amIGood: true};
  var marcus = {role: "marcus", alignment: "good", team: "heroes", amIGood: true};
  var ranger = {role: "ranger", alignment: "good", team: "heroes", amIGood: true};
  var oracle = {role: "oracle", alignment: "good", team: "heroes", amIGood: true};
  var scientist = {role: "scientist", alignment: "good", team: "heroes", amIGood: true};
  var jailer = {role: "jailer", alignment: "good", team: "heroes", amIGood: true};
  var sensor = {role: "sensor", alignment: "good", team: "heroes", amIGood: true};

	//bad roles
	var leader = {role: "leader", alignment: "unknown", team: "villains", amIGood: false}; 
	var exploder = {role: "exploder", alignment: "evil", team: "villains", amIGood: false};
	var alpha = {role: "alpha", alignment: "evil", team: "villains", amIGood: false};
	//var eavesdropper = {role: "eavesdropper", alignment: "evil", team: "villains", amIGood: false};
	var reverser = {role: "reverser", alignment: "evil", team: "villains", amIGood: false};
	//var backstabber = {role: "backstabber", alignment: "evil", team: "villains", amIGood: false};
  var morgana = {role: "morgana", alignment: "evil", team: "villains", amIGood: false};
  var delayer = {role: "delayer", alignment: "evil", team: "villains", amIGood: false};
  var ditto = {role: "ditto", alignment: "evil", team: "villains", amIGood: false};
  var spiritualist = {role: "spiritualist", alignment: "evil", team: "villains", amIGood: false};


	//don't include princess or leader, because they're ALWAYS in the game
	var goodRoles = [seer, balancer, telepath, ghost, marcus, detective, aura, ranger, scientist, oracle, jailer, sensor];
	var badRoles = [morgana, exploder, alpha, reverser, delayer, ditto, spiritualist];

	//shuffle the temporary array roles
	goodRoles = shuffle(goodRoles);
	badRoles = shuffle(badRoles);

	//temp arrays to be returned
	var tempAllRoles = [];

	tempAllRoles[0] = princess;
	tempAllRoles[1] = leader;


	switch(numberOfPlayers) {

    //3 and 4 should be test case only...need minimum 5 players
    case 3:

      //tempAllRoles[2] = goodRoles[0];
      tempAllRoles[2] = marcus;

      break;


		case 4:

			tempAllRoles[2] = ranger;
      tempAllRoles[3] = saintess;

      break;

    case 5:

      tempAllRoles[2] = badRoles[0];
      tempAllRoles[3] = goodRoles[0];
      tempAllRoles[4] = goodRoles[1];

      break;

		case 6: 

      tempAllRoles[2] = spiritualist; //badRoles[0];
      tempAllRoles[3] = oracle;//goodRoles[0];
      tempAllRoles[4] = marcus;//goodRoles[1];
      tempAllRoles[5] = seer;//goodRoles[2];

			break;

		case 7:
			
      tempAllRoles[2] = badRoles[0];
      tempAllRoles[3] = badRoles[1];
      tempAllRoles[4] = goodRoles[0];
      tempAllRoles[5] = balancer;
      tempAllRoles[6] = goodRoles[2];

			break;

		case 8:

			//add good roles
			for (var i = 2; i < 7; i++) {
				tempAllRoles[i] = goodRoles[(i - 2)];
			};
			

			//add bad roles
			for (var i = 7; i < 8; i++) {
				tempAllRoles[i] = badRoles[(i - 7)];
			};

      break;

    case 9:

      tempAllRoles[2] = badRoles[0];
      tempAllRoles[3] = badRoles[1];
      tempAllRoles[4] = badRoles[2];
      tempAllRoles[5] = goodRoles[0];
      tempAllRoles[6] = goodRoles[1];
      tempAllRoles[7] = goodRoles[2];
      tempAllRoles[8] = goodRoles[3];

      break;

    case 10:

      //add good roles
      for (var i = 2; i < 8; i++) {
        tempAllRoles[i] = goodRoles[(i - 2)];
      };
      

      //add bad roles
      for (var i = 8; i < 12; i++) {
        tempAllRoles[i] = badRoles[(i - 8)];
      };

			break;

		default:

	

	}; //end of switch


  tempAllRoles = shuffle(tempAllRoles); console.log(tempAllRoles);

  return tempAllRoles;


}; //end of populateRolesArray function












function assignPlayersTheirRoles(_roleArray) {

  for (var i = 0; i < playerArray.length; i++) {

    playerArray[i].role = _roleArray[i].role;
    playerArray[i].alignment = _roleArray[i].alignment;
    playerArray[i].team = _roleArray[i].team;
    playerArray[i].amIGood = _roleArray[i].amIGood;

    console.log(playerArray[i].name + " role is: " + playerArray[i].role);

    rolesObject[playerArray[i].role].name = playerArray[i].name;
    rolesObject[playerArray[i].role].socketID = playerArray[i].socketID;
    rolesObject[playerArray[i].role].isRoleInGameBool = true;
    rolesObject[playerArray[i].role].indexInPlayerArray = i;

    indexofNameInPlayerArray[playerArray[i].name] = i;

  }; //end of for i = 0 statement

}; //end of assignPlayersTheirRoles()



function AssignPlayersTheirTelepathNames() {

  fakeNamesArray = shuffle(fakeNamesArray);

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].role == "telepath") {
      playerArray[i].pseudoName = "Telepath";
    } else {
      playerArray[i].pseudoName = fakeNamesArray[i];
    };

  };

};




function amIGoodFunction(_myRole) {

  var goodRoles = ["princess", "balancer", "arduren", "silencer", "telepath",
                       "ghost", "detective", "Aura Knight", "marcus", "saintess"];

  if (goodRoles.indexOf(_myrole) > -1) {
    return true;
  } else {
    return false;
  };

}; //end of amIGoodorEvilFunction




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  };

  return array;
};



/*
Need this to update 
var rolesObject 
var indexofNameInPlayerArray 

which stores index in player array

*/

function ShufflePlayerArrayAndUpdate(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  };


  //updates the various index information
  for (var i = 0; i < array.length; i++) {

    rolesObject[array[i].role].indexInPlayerArray = i;
    indexofNameInPlayerArray[array[i].name] = i;

  };


  return array;
};





function boolCheckDuplicateName(_name) {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].name == _name) {
      return true;
    };

  };

  return false;

};



function boolAreAllPlayersOnline() {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].onlineStatus == "offline") {
      return false;
    };

  };

  return true;

};


function BoolAreAllPlayersReady() {

  for (var i = 0; i < playerArray.length; i++) {

    if (!(playerArray[i].ready)) {
      return false;
    };

  };

  return true; 

};



//pass in array of team member names chosen for mission team
function UpdateIfChosenForTeam(_teamArray) {

  for (var i = 0; i < _teamArray.length; i++) {

    var q = IndexOfNameInPlayerArray(_teamArray[i]);
    playerArray[q].selectedForTeam = true;

  };

};


//sets all selectedForTeam = false
function ResetChosenForTeam() {

  for (var i = 0; i < playerArray.length; i++) {

    playerArray[i].selectedForTeam = false;

  };
  
};



function ResetPlayerArrayteamChoiceVote() {

  for (var i = 0; i < playerArray.length; i++) {
    playerArray[i].teamChoiceVote = "";
  };

};


function BoolHaveAllPlayersVotedOnTeamOrMission(_TeamOrMission) {

  for (var i = 0; i < playerArray.length; i++) {

    if (_TeamOrMission == "Team") {

      if (playerArray[i].teamChoiceVote == 0) {
        return false;
      };

    } else {

      if (!playerArray[i].ready && playerArray[i].selectedForTeam) {
        return false;
      };

    }; //end else

  }; //end for loop

  return true;

};




function AdjustDelayerTeamVote(_vote, _indexToChangeVote) {

  if (playerArray[_indexToChangeVote].role == "delayer") {

    var _finalTeamVote = 0;
    var _addToDelayerVote = 0;
    var _delayerCount = playerArray[_indexToChangeVote].delayerCount;
     
    if (playerArray.length == 7 || playerArray.length == 9) {
      _addToDelayerVote = _delayerCount * 0.333;
      _addToDelayerVote = Math.round((_addToDelayerVote + Number.EPSILON) * 100) / 100;

    } else {
      _addToDelayerVote = _delayerCount * 0.666;
      _addToDelayerVote = Math.round((_addToDelayerVote + Number.EPSILON) * 100) / 100;

    };
    
    if (_vote > 0) {

      _finalTeamVote = _vote + _addToDelayerVote;

    } else {

      _addToDelayerVote *= -1; //turn negative
      _finalTeamVote = _vote + _addToDelayerVote;

    };

    return _finalTeamVote;

  };

  return _vote;

};


//for team vote need to do bless + delayercount here since there's no adjustvote() for team unlike mission
function UpdatePlayerTeamVotes(_vote, _indexToChangeVote) {

  if (_vote == "yes") { 

    playerArray[_indexToChangeVote].teamChoiceVote = 1; //need this in case team gets rejected and you voted negative previously
    playerArray[_indexToChangeVote].teamChoiceVote *= playerArray[_indexToChangeVote].bless; //bless default is 1 
    playerArray[_indexToChangeVote].teamChoiceVote = AdjustDelayerTeamVote(playerArray[_indexToChangeVote].teamChoiceVote, _indexToChangeVote);
    if (playerArray[_indexToChangeVote].shrinkCount > 0) { playerArray[_indexToChangeVote].teamChoiceVote *= 0.5; };


  } else if (_vote == "no") {

    playerArray[_indexToChangeVote].teamChoiceVote = -1;
    playerArray[_indexToChangeVote].teamChoiceVote *= playerArray[_indexToChangeVote].bless; //bless default is 1
    playerArray[_indexToChangeVote].teamChoiceVote = AdjustDelayerTeamVote(playerArray[_indexToChangeVote].teamChoiceVote, _indexToChangeVote);
    if (playerArray[_indexToChangeVote].shrinkCount > 0) { playerArray[_indexToChangeVote].teamChoiceVote *= 0.5; };

  } else if (_vote == "absolute yes") {

    playerArray[IndexOfRoleInPlayerArray("leader")].teamChoiceVote = 100; //no need for bless cause impossible for votes to add up more than this

  } else if (_vote == "absolute no") {

    playerArray[IndexOfRoleInPlayerArray("leader")].teamChoiceVote = -100;

  };

};


function SendArrayOfTeamVotesInformation(_bool) {

  var _teamVotesArray = [];

  for (var i = 0; i < playerArray.length; i++) {
    //do >= & <= in case of bless multiplier
    if (playerArray[i].teamChoiceVote >= 100 || playerArray[i].teamChoiceVote <= -100) {

      var ranNum = Math.floor(Math.random() * 2 + 1); //random number of 1,2

      if (ranNum == 1) { //50% chance
        var _tempObj = {name: playerArray[i].name, teamChoiceVote: 1};
      } else { //if ranNum == 2
        var _tempObj = {name: playerArray[i].name, teamChoiceVote: -1};
      };

      
    } else if (playerArray[i].teamChoiceVote > 0) {

      var _tempObj = {name: playerArray[i].name, teamChoiceVote: 1};

    } else { // <= 0

      var _tempObj = {name: playerArray[i].name, teamChoiceVote: -1};

    };
    
    _teamVotesArray.push(_tempObj);

  }; //end for

  //_bool = true for success, false for rejected team
  io.sockets.emit("Update Team Votes Array", [_teamVotesArray, _bool]);


}; //end function SendArrayOfTeamVotesInformation()







function UpdatePlayerMissionVotes(_missionVote, _indexToChangeVote) {

  //default vote = 0, this differs from updateplayervotes (For team)
  //because delayer power is for teams,

  if (_missionVote == "yes") {
    playerArray[_indexToChangeVote].missionVote = 1;

  } else if (_missionVote == "no") {

    playerArray[_indexToChangeVote].missionVote = -1;
    playerArray[_indexToChangeVote].burnCount = 0;
    playerArray[_indexToChangeVote].soulMark = false;
    //bomb handled within adjustvotesbomb() so people don't know who deactivated bomb...
    //you can kind of guess if sound effects come on immediately after you vote no

  } else if (_missionVote == "used power") {
    playerArray[_indexToChangeVote].missionVote = 0;
  } else if (_missionVote == "Holy Strike") {
    playerArray[_indexToChangeVote].missionVote = 2;
  } else if (_missionVote == "Meteor") {
    playerArray[_indexToChangeVote].missionVote = -1;
    playerArray[_indexToChangeVote].missionVote *= playerArray[_indexToChangeVote].bide;
    playerArray[_indexToChangeVote].bide = 1; //resets bide/meteor power after using
  };

};



function DisplayTeamOrMissionVotingInfo(_teamOrMission) {

  if (_teamOrMission == "mission") {

   for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].selectedForTeam) {
      console.log(playerArray[i].name + "(" + playerArray[i].role + ") " + " mission vote for Mission No. " + missionNumber + " is: " + playerArray[i].missionVote);
    };
 
   };

  } else {

    for (var i = 0; i < playerArray.length; i++) {
      console.log(playerArray[i].name + "(" + playerArray[i].role + ") " + " team vote for Mission No. " + missionNumber + " is: " + playerArray[i].teamChoiceVote);
    };
  };

};

 

function ActivateNightChatboxes() {

  for (var i = 0; i < playerArray.length; i++) {
    console.log(playerArray[i]);
    var _whichChatboxesToActivate = [];

    if (playerArray[i].jailed) {

      _whichChatboxesToActivate.push("Jail");

      //only one person can be jailed at a time
      //if someone has been jailed, activate jailer chat box, otherwise no
      io.to(`${rolesObject["jailer"].socketID}`).emit("Activate Jailer Chatbox");

    } else {

      if (!playerArray[i].amIGood) { _whichChatboxesToActivate.push("Villains"); };

      if (playerArray[i].selectedForTelepathy) { _whichChatboxesToActivate.push("Telepathy"); };

    }; //end else


    io.to(`${playerArray[i].socketID}`).emit("Activate Night Chatboxes", _whichChatboxesToActivate);

  }; //end for statement

}; //end ActivateNightChatboxes()







//need to do *= to handle negative/positive vote
function AdjustVotesAlpha(_obj, _vote) {

  if (_obj.role == "alpha") {

    _vote *= Math.ceil((calculateNumberofTeamMembers(missionNumber, playerArray.length))/2);
    console.log(_obj.name + "(" + _obj.role + ") " + "vote after ALPHA calculation is: " + _vote);

  };

  return _vote;

};



//need to do *= to handle negative/positive vote
function AdjustVotesDelayer(_obj, _vote) {

  if (_obj.role == "delayer") { 
    
    if (_vote > 0) {
      _vote = _vote + (_obj.delayerCount * 1.5);
    } else {
      _vote = _vote + (_obj.delayerCount * -1.5);
    };
    
    //handle reset of delayercount in incrementandnotifydelayer()
    console.log(_obj.name + "(" + _obj.role + ") " + "vote after delayer calculation is: " + _vote);
  };

  return _vote;

};



function AdjustVotesReverse(_obj, _vote) {
    //reverse devil calculations
  if (reverseVotes) {
    _vote = -1 * _vote;
    console.log(_obj.name + "(" + _obj.role + ") " + "adjusted vote after reversed power for everyone is: " + _vote);
  };

  //gets reset in resetallplayerinfo()
  if (_obj.reverse) {
    _vote = -1 * _vote;
    console.log(_obj.name + "(" + _obj.role + ") " + "adjusted vote after reversed power for single player is: " + _vote);
  };


  return _vote;

};



function AdjustVotesDevilized(_obj, _vote) {
    //reverse devil calculations
  if (_obj.devilized) {
    _vote = -1 * _vote;
    console.log(_obj.name + "(" + _obj.role + ") " + "adjusted vote after devilized is: " + _vote);
  };

  return _vote;

};




//burn adjustments
//burn is reset under updatemissionvotes
function AdjustVotesBurnCount(_obj, _vote) {

  if (_obj.burnCount > 0) { 

    _vote += (_obj.burnCount * -0.75);

    console.log(_obj.name + "(" + _obj.role + ") " + "vote after " + _obj.burnCount + " BURNcount(s) calculation is: " + _vote);
  };

  return _vote;

};


function AdjustVotesSoulMark(_obj, _vote) {

  if (_obj.role == "spiritualist") {
    //do nothing if 0/used powers
    if (_vote > 0) {
      _vote += (numberOfSoulMarks * 1.5);
    } else if (_vote < 0) {
      _vote += (numberOfSoulMarks * -1.5);
    };

    console.log(_obj.name + "(" + _obj.role + ") " + "vote after spiritualist soul mark calculation is: " + _vote);

  }; //end if role == spiritualist

  return _vote;

};





//if have a reverse power character, need to make sure marcus automatically becomes reverse
//this also temporarily stops burn, but does not prevent it increasing
//should also put shrink before to prevent shrink effect
function AdjustVotesBombWithMarcus(_obj, _vote, _previousVote) {

  //you can do if playerarray[z].role == marcus because if role is marcus it is implied
  //he is already selectedForTeam since all this is within selectedforteam if {}
  if (_obj.role == "marcus" && playerArray[rolesObject["princess"].indexInPlayerArray].selectedForTeam) {

    if (_previousVote >= 0) { //if vote yes
      _vote = 3;
    } else { //if vote no
      _vote = -3;
      _obj.bomb = false;
      io.sockets.emit("Did Bomb Go Off?", false);
    };
    //if marcus & princess are on same team, ignores devilized, bomb, burn, shrink, but status effects
    //still remain


  } else {
    //if want to make devilized more complicated do adjustedVote > 0
    if (_obj.bomb) {

      if (_previousVote > 0) {
        _vote += -5;
        _obj.bomb = false;
        io.sockets.emit("Did Bomb Go Off?", true);
      } else if (_previousVote < 0) {
        _obj.bomb = false;
        io.sockets.emit("Did Bomb Go Off?", false);
      } else {
        //do nothing....nothing happens if uses special powers if vote == 0
      };
      
    }; //end if (_obj.bomb)

  }; //end 1st (outer) else

  console.log(_obj.name + "(" + _obj.role + ") " + "adjusted vote after bomb calculation is: " + _vote);

  return _vote;

}; //end function





function AdjustVotesMultiplier(_obj, _vote) {

  if (_obj.multiplier > 1) {

    _vote *= _obj.multiplier; //default multiplier = 1, so does nothing
    _obj.multiplier = 1; //resets multiplier
    console.log(_obj.name + "(" + _obj.role + ") " + " mission vote for Mission No. " + missionNumber + " (includes multiplier) is: " + _vote);

  };
  
  return _vote;

};



function AdjustVotesShrink(_obj, _vote) {

  //Shrink divide by 2
  if (_obj.shrinkCount > 0) {
    _vote *= 0.5;
    console.log(_obj.name + "(" + _obj.role + ") " + " mission vote for Mission No. " + missionNumber + " after shrink 1/2 is: " + _vote);
  };

  return _vote;

};




function AdjustVotesBlessAndSafeguard(_obj, _vote) {

  //Handles Bless

  if (_obj.bless > 1) {

    _vote *= _obj.bless; //default is 1
    console.log(_obj.name + "(" + _obj.role + ") " + " mission vote for Mission No. " + missionNumber + " after bless is: " + _vote);

  };

  
  //Safeguard: transforms vote to positive
  if (_obj.safeguard) {
    if (_vote < 0) { _vote *= -1; };
    console.log(_obj.name + "(" + _obj.role + ") " + " mission vote for Mission No. " + missionNumber + " after safeguard is: " + _vote);
  };

  return _vote;

};




function AdjustVotesInvisible(_obj, _vote) {

  //ghost power: makes vote count for nothing
  //invisible reset in resetallplayerinfo() at end of mission calculations
  if (_obj.invisible) { 
    _vote = 0; 
    console.log(_obj.name + "(" + _obj.role + ") " + " mission vote for Mission No. " + missionNumber + " after invisibility is: " + _vote);
  };

  return _vote;

};



function CopycatPowerAdjustment() {

  if (rolesObject["ditto"].isRoleInGameBool) {

    var _dittoInd = rolesObject["ditto"].indexInPlayerArray;

    if (playerArray[_dittoInd].copycatChoice != "") {

      var _indOfPersonToCopy = IndexOfNameInPlayerArray(playerArray[_dittoInd].copycatChoice);
      var copiedVote = playerArray[_indOfPersonToCopy].missionVote;

      //turn vote negative
      if (copiedVote > 0) { copiedVote *= -1; };

      //safeguard turns vote positive
      if (playerArray[_dittoInd].safeguard) {
        if (copiedVote < 0) { copiedVote *= -1; };
      };


      playerArray[_dittoInd].missionVote = copiedVote;

      playerArray[_dittoInd].copycatChoice = ""; //resets 

    }; //end if copycatChoie != ""

  }; //end if isdittointhegame

}; //end function




function AdjustVotes() {

  var adjustedVote = 0; //need to define here as integer to avoid NaN (not a number) in below calculations
  var previousVote = 0;
  var _princessInd = IndexOfRoleInPlayerArray("princess");
  var isSaintessOnTheMissionTeam = rolesObject["saintess"].isRoleInGameBool && playerArray[IndexOfRoleInPlayerArray("saintess")].selectedForTeam;

  if (!isSaintessOnTheMissionTeam) {

    for (var z = 0; z < playerArray.length; z++) {
      //IMPORTANT to also do .selectedforteamboolean, otherwise multiplier gets used up every time
      if (playerArray[z].selectedForTeam) {
        

        previousVote = playerArray[z].missionVote;
        adjustedVote = playerArray[z].missionVote;  

        adjustedVote = AdjustVotesAlpha(playerArray[z], adjustedVote);
        adjustedVote = AdjustVotesDelayer(playerArray[z], adjustedVote);


        console.log(playerArray[z].name + "(" + playerArray[z].role + ") " + "previousVote initially is: " + previousVote);

        //ORDER IS IMPORTANT
        //important to have delayer/alpha status adjustments first
        //next do devilized reverse vote
        //then should be negative statuses
        //then after negative, do marcus with bomb
        //finally do positives
        //safeguard second to last, then ghost is last

        adjustedVote = AdjustVotesReverse(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesDevilized(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesSoulMark(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesBurnCount(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesShrink(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesBombWithMarcus(playerArray[z], adjustedVote, previousVote);

        adjustedVote = AdjustVotesMultiplier(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesBlessAndSafeguard(playerArray[z], adjustedVote);

        adjustedVote = AdjustVotesInvisible(playerArray[z], adjustedVote);


        //final assignment of vote power
        playerArray[z].missionVote = adjustedVote;

        console.log(playerArray[z].name + "(" + playerArray[z].role + ") " + "final vote after adjustments is: " + adjustedVote);
        

      }; //end if selectedforMissionTeam

    }; //end for statement

  } else { //with saintess on team
    console.log("saintess on team so votes stay the same.");

    for (var z = 0; z < playerArray.length; z++) {

      if (playerArray[z].selectedForTeam) {

        previousVote = playerArray[z].missionVote;
        adjustedVote = playerArray[z].missionVote; 

        adjustedVote = AdjustVotesAlpha(playerArray[z], adjustedVote);
        adjustedVote = AdjustVotesDelayer(playerArray[z], adjustedVote);

        console.log("Mission Votes For " + playerArray[z].name + "(" + playerArray[z].role + ")" + " original vote with Saintess is: " + adjustedVote);


        adjustedVote = AdjustVotesBlessAndSafeguard(playerArray[z], adjustedVote);
        adjustedVote = AdjustVotesInvisible(playerArray[z], adjustedVote);

        //final assignment of vote power
        playerArray[z].missionVote = adjustedVote;

        console.log("Mission Votes For " + playerArray[z].name + "(" + playerArray[z].role + ")" + " final adjusted vote with Saintess is: " + adjustedVote);


      }; //end if selected for team

    }; //end for statement

    //DisplayTeamOrMissionVotingInfo("mission"); //not necessary?

  }; //end else

    
  CopycatPowerAdjustment();

}; //end AdjustVotes Function








function HylianShieldPower(_sumVotes) {

  var _tempSum = _sumVotes;

  if (_tempSum < 0) {
    _tempSum += 4;
  } else {   // >= 0
    _tempSum += -4;
  };

  var _msg = "Arduren defended with the legendary Hylian Shield! If sum of votes was < 0, +4 total vote power was added. If >= 0, -4 total vote power!";

  io.sockets.emit("Server To Player Message", {name: "System", message: _msg});

  return _tempSum;

};




function BoolTeamOrMissionChoiceYesVotesGreater(_TeamOrMission) {

  var sumVotes = 0;
  //yes & no are for arduren 1/2 powers rounded up
  var yesVotes = 0;
  var noVotes = 0;

  for (var i = 0; i < playerArray.length; i++) {

    if (_TeamOrMission == "Team") {

      sumVotes += playerArray[i].teamChoiceVote;
      //console.log(playerArray[i].role + " votes is: " + playerArray[i].teamChoiceVote);

    } else { //this for mission
      if (playerArray[i].selectedForTeam) {

        if (playerArray[i].missionVote >= 0) {
          yesVotes += playerArray[i].missionVote;
        } else { 
          noVotes += playerArray[i].missionVote;
        };
        
      }; //end if selectedForTeam
    }; //end else statement

  }; //end for statement


  if (_TeamOrMission == "Mission") {

    console.log("Yes Votes for Mission before leader/arduren adjustments is: " + yesVotes);
    console.log("No Votes for Mission before leader/arduren adjustments is: " + noVotes);
    //IMPORTANT arduren is Math.floor (and not ceil) since the votes are negative....
    if (rolesObject["arduren"].isRoleInGameBool && playerArray[IndexOfRoleInPlayerArray("arduren")].selectedForTeam) { noVotes = Math.floor(noVotes/2); };

    if (playerArray[IndexOfRoleInPlayerArray("leader")].selectedForTeam) { noVotes = (noVotes*2); };

    console.log("Yes Votes after arduren/leader adjustment is: " + yesVotes + " and no votes is: " + noVotes);
    sumVotes = yesVotes + noVotes; console.log("sum votes before hylian shield if: " + sumVotes);

    if (hylianShield) {
      console.log("Sum Votes BEFORE Hylian Shield: " + sumVotes); 
      sumVotes = HylianShieldPower(sumVotes); 
      hylianShield = false; 
      console.log("Sum Votes After Hylian Shield is: " + sumVotes);
    };

    io.sockets.emit("Total Mission Vote Points", [yesVotes, noVotes, sumVotes]);

  }; //end if ("mission")


  console.log("sumVotes of " + _TeamOrMission + " is: " + sumVotes);
  if (sumVotes >= 0) {
    return true;
  } else {
    return false;
  };

};



function BoolHaveAllVillainsChosenPrincess() {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].team == "villains") {

      if (playerArray[i].princessChoice == "") {
        return false;
      };
    };
  };

  return true;

};




function PrincessIdentityStringName() {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].role == "princess") {
      return (playerArray[i].name);
    };

  };

  return ("Error, no Princess.");

};




function BoolWasPrincessSuccessfullyKilled() {

    var princessChoiceList = [];
    var princessChoiceCountList = [];


    //put Princess Choices into an array
    for (var i = 0; i < playerArray.length; i++) {

      if (playerArray[i].team == "villains") {
        princessChoiceList.push(playerArray[i].princessChoice);
      };

    };


    //counts occurences of names
    for (var i = 0; i < princessChoiceList.length; i++) {

      var q = princessChoiceCountList.indexOf(princessChoiceList[i]);

      if (q >= 0) {

        princessChoiceCountList[q].points += 1;

      } else {

        princessChoiceCountList.push({name: princessChoiceList[i], points: 1});

      };

    }; //end for



    //compare function for descending order
    function compare(a, b) {
      if (a.points > b.points) {
        return -1;
      }
      if (a.points < b.points) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }; //end compare function


    //sorts array in descending order, so name with most votes is index position 0
    princessChoiceCountList.sort(compare);


    if (princessChoiceCountList[0].name == PrincessIdentityStringName()) {
      return true;
    } else {
      return false;
    };

};



function ResetTelepathChoices() {

  for (var i = 0; i < playerArray.length; i++) {
    playerArray[i].selectedForTelepathy = false;
  };

};


function UpdateSelectedForTelepathy() {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].selectedForTelepathy) {
      io.to(`${playerArray[i].socketID}`).emit("Set selectedForTelepathy to true");
    };

  }; //end for

}; //end UpdateSelectedForTelepathy() function







function WasDivinationCorrect(_morganaInfo) {

  function CaptChoosingTeamAndYouAreTeamCaptain() {
    io.sockets.emit("Captain is choosing team now", playerArray[teamLeaderTracker].name);
    io.to(`${playerArray[teamLeaderTracker].socketID}`).emit('You are Team Captain', missionNumber);
  };


  if (successfulDivination == 0) {

    CaptChoosingTeamAndYouAreTeamCaptain();
 
  } else if (successfulDivination == 1) {
    //correct prediction = failed, villains get the mission
    missionResults.push({MissionNo: missionNumber, Result: "Failed"});
    missionNumber++;

    if (hasAnyoneWon()) {

      //RestoreIdentities MUST GO BEFORE SWAP
      RestoreIdentities(); //restores identities if swapped

      io.sockets.emit("Evil Wins!", [missionResults, "placeholder", true]);

    } else {
      io.sockets.emit("Successful Divination", [missionResults]);
      CaptChoosingTeamAndYouAreTeamCaptain();
    };


  } else if (successfulDivination == -1) {
    //incorrect prediction = success
    missionResults.push({MissionNo: missionNumber, Result: "Success"});
    missionNumber++;

    if (hasAnyoneWon()) {

      //RestoreIdentities MUST GO BEFORE SWAP
      RestoreIdentities(); //restores identities if swapped

      io.sockets.emit("Game Over. Evil's Last Chance. Assassinate Princess.", [missionResults, "placeholder", true]);

    } else {
      io.sockets.emit("Failed Divination", [missionResults]);
      CaptChoosingTeamAndYouAreTeamCaptain();
    };

  };

  successfulDivination = 0;

}; //end WasDivinationCorrect function


function ExchangeSpirits(_spiritArr) {

  var _ind1 = indexofNameInPlayerArray[_spiritArr[0]];
  var _ind2 = indexofNameInPlayerArray[_spiritArr[1]];

  if (playerArray[_ind1].role == "saintess" || playerArray[_ind2].role == "saintess") {

      var _msg = "You attempted to switch " + _spiritArr[0] + " and " + _spiritArr[1] + "'s spirits, but you were burned by a terrifying light. One of them must be the Enlustrian Saintess!";
      var _hecateIndex = rolesObject["morgana"].indexInPlayerArray;

      io.to(`${playerArray[_hecateIndex].socketID}`).emit("Server To Player Message", {name: "System", message: _msg});

  } else {

    var _tempDevilized = playerArray[_ind1].devilized;
    playerArray[_ind1].devilized = playerArray[_ind2].devilized;
    playerArray[_ind2].devilized = _tempDevilized;

    var _tempShrinkCount = playerArray[_ind1].shrinkCount;
    playerArray[_ind1].shrinkCount = playerArray[_ind2].shrinkCount;
    playerArray[_ind2].shrinkCount = _tempShrinkCount;

    var _tempBurnCount = playerArray[_ind1].burnCount;
    playerArray[_ind1].burnCount = playerArray[_ind2].burnCount;
    playerArray[_ind2].burnCount = _tempBurnCount;

    var _tempBomb = playerArray[_ind1].bomb;
    playerArray[_ind1].bomb = playerArray[_ind2].bomb;
    playerArray[_ind2].bomb = _tempBomb;

    var _tempMultiplier = playerArray[_ind1].multiplier;
    playerArray[_ind1].multiplier = playerArray[_ind2].multiplier;
    playerArray[_ind2].multiplier = _tempMultiplier;

    var _tempSafeguard = playerArray[_ind1].safeguard;
    playerArray[_ind1].safeguard = playerArray[_ind2].safeguard;
    playerArray[_ind2].safeguard = _tempSafeguard;

    var _tempBless = playerArray[_ind1].bless;
    playerArray[_ind1].bless = playerArray[_ind2].bless;
    playerArray[_ind2].bless = _tempBless;

    var _tempSoulMark = playerArray[_ind1].soulMark;
    playerArray[_ind1].soulMark = playerArray[_ind2].soulMark;
    playerArray[_ind2].soulMark = _tempSoulMark;

    var _msg = "The witch Hecate switched " + _spiritArr[0] + " and " + _spiritArr[1] + "'s spirits!";
    var _princessIndex = rolesObject["princess"].indexInPlayerArray;
    io.to(`${playerArray[_princessIndex].socketID}`).emit("Server To Player Message", {name: "System", message: _msg});

  };

}; //end ExchangeSpirits function



//if marcus in game, then bomb gets switched to marcus
function PlantBombWithMarcusProtection() {

  if (bomberChoice != "") {

    _bombInd = IndexOfNameInPlayerArray(bomberChoice);

    if (rolesObject["marcus"].isRoleInGameBool && playerArray[_bombInd].role == "princess") {

      var marcusInd = IndexOfRoleInPlayerArray("marcus");

      playerArray[marcusInd].bomb = true;

      var msgToMarcus = "You defended the princess! A flame seal bomb was placed on you instead of her.";

      io.to(`${playerArray[marcusInd].socketID}`).emit("Server To Player Message", {name: "System", message: msgToMarcus});

      NotificationOfStatuses(marcusInd, "bomb");

      bomberChoice = "";

    } else if (playerArray[_bombInd].role == "saintess") {

      //do nothing because saintess can't be affected

    } else {

      playerArray[_bombInd].bomb = true;
      NotificationOfStatuses(_bombInd, "bomb");
      bomberChoice = ""; //resets after planting bomb

    }; //end else

  }; //end if bomberchoice !=

}; //end function



//handle not selecting saintess in initial setting of glboal variable burnChoice in socket receive event
function BurnPlayerAndUpdateBurnCount() {

  //for statement needs to be before setting a burn to another player
  for (var i = 0, len = playerArray.length; i < len; i++) {
    if (playerArray[i].burnCount > 0) { playerArray[i].burnCount += 1; };
  };


  if (burnChoice != "") {

    _burnChoiceInd = indexofNameInPlayerArray[burnChoice];

    if (playerArray[_burnChoiceInd].role == "princess" && rolesObject["marcus"]["isRoleInGameBool"]) {

      var marcusInd = rolesObject["marcus"]["indexInPlayerArray"];

      playerArray[marcusInd].burnCount += 1;

      NotificationOfStatuses(marcusInd, "burn");

      var msgToMarcus = "You defended the princess! You blocked the devil's fire punch! For every turn, your mission voting power decreases by -1.25!";
      io.to(`${playerArray[marcusInd].socketID}`).emit("Server To Player Message", {name: "System", message: msgToMarcus});

      burnChoice = "";


    } else {

      playerArray[_burnChoiceInd].burnCount += 1;
      NotificationOfStatuses(_burnChoiceInd, "burn");
      burnChoice = "";

    };


  }; //end if burnChoice != ""

}; //end function



//put this AFTER success team vote, but BEFORE mission vote
function DecreaseShrinkCount() {

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].shrinkCount > 0) { playerArray[i].shrinkCount -= 1; };

  };

};


function SendResponseAfterSaintessPowers(_whichHolyPowerChosen, _ind) {

  var didItWork = false;

  if (_whichHolyPowerChosen == "dispel") {

    if (playerArray[_ind].multiplier > 1) { didItWork = true; };
    if (playerArray[_ind].teamChoiceVote > 1) { didItWork = true; };
    if (playerArray[_ind].shrinkCount > 0) { didItWork = true; };
    if (playerArray[_ind].delayerCount > 0) { didItWork = true; };


  } else if (_whichHolyPowerChosen == "esuna") {

    if (playerArray[_ind].bomb) { didItWork = true; };
    if (playerArray[_ind].burnCount > 0) { didItWork = true; };

  } else if (_whichHolyPowerChosen == "purify") {

    if (playerArray[_ind].devilized) { didItWork = true; };
    if (playerArray[_ind].soulMark) { didItWork = true; };

  };

  if (didItWork) { //no need for arduren because ONLY Arduren OR Saintess can be in one game, due to being overpowered

    var _statusMessage = "The Saintess SUCCESSFULLY used the light magic of " + _whichHolyPowerChosen + " on " + playerArray[_ind].name + " to resolve all dark energy.";

    io.to(`${playerArray[IndexOfRoleInPlayerArray("saintess")].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});
    io.to(`${playerArray[IndexOfRoleInPlayerArray("princess")].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});

  } else {

    var _statusMessage = "The light magic of " + _whichHolyPowerChosen + " FAILED to work on " + playerArray[_ind].name + ".";
    io.to(`${playerArray[IndexOfRoleInPlayerArray("saintess")].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});
  };
 

}; //end SendResponseAfterSaintessPowers



function ActivateSaintessSelectedPower(_holyArray) {

  //_holyPowerInfo = [playerToTarget, selectedHolyPower]

  var holyPowerTargetIndex = IndexOfNameInPlayerArray(_holyArray[0]);

  if (_holyArray[1] == "Dispel") {

    SendResponseAfterSaintessPowers("dispel", holyPowerTargetIndex);

    playerArray[holyPowerTargetIndex].multiplier = 1;
    //playerArray[holyPowerTargetIndex].teamChoiceVote = 1;
    playerArray[holyPowerTargetIndex].shrinkCount = 0;
    playerArray[holyPowerTargetIndex].delayerCount = 0;

  } else if (_holyArray[1] == "Esuna") {

    SendResponseAfterSaintessPowers("esuna", holyPowerTargetIndex);
    playerArray[holyPowerTargetIndex].bomb = false;
    playerArray[holyPowerTargetIndex].burnCount = 0;


  } else if (_holyArray[1] == "Purify") {

    SendResponseAfterSaintessPowers("purify", holyPowerTargetIndex);
    playerArray[holyPowerTargetIndex].devilized = false;
    playerArray[holyPowerTargetIndex].soulMark = false;


  } else if (_holyArray[1] == "Bless") {

    playerArray[holyPowerTargetIndex].bless = 2;
    
    var _statusMessage = "Your prayers to God blessed " + playerArray[holyPowerTargetIndex].name + ". For this round only, 2xs mission and team vote power!"; //console.log("playerArray after bless"); console.log(playerArray);

    io.to(`${playerArray[IndexOfRoleInPlayerArray("saintess")].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});


  } else if (_holyArray[1] == "Safeguard") {

    if (playerArray[holyPowerTargetIndex].role != "leader") { playerArray[holyPowerTargetIndex].safeguard = true; };

    var _statusMessage = "You prayed to God to safeguard " + playerArray[holyPowerTargetIndex].name + ". For this round only, mission vote will ALWAYS be successful!";

    io.to(`${playerArray[IndexOfRoleInPlayerArray("saintess")].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});
  };



}; //end ActivateSaintessSelectedPower





function ExposeMissionVote() {

  if (ghostChoice != "") {

    var exposeInfo = [ghostChoice, playerArray[IndexOfNameInPlayerArray(ghostChoice)].missionVote];

    io.sockets.emit("Expose Ghost Vote Target", exposeInfo);

    ghostChoice = "";

  };

}; //end function ExposeMissionVote()





function ReturnTrue50Percent() {

  var ranNum = Math.floor(Math.random() * 2 + 1); //random number of 1-2

  if (ranNum == 1) {
    return true;
  } else {
    return false;
  };

};


function ReturnOraclePowerInformation(_oraclePowerChoice) {

  /*
  choices: 1 AND 1, At Least 1 Good, 1 Evil 2 Good, Princess, Roles
  */

  var _oracleInfoArray = [];

  var _rolesArrayHeroes = [];
  var _rolesArrayVillains = [];

  //populate array of villains + heroes
  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].name != rolesObject["oracle"].name) {
      if (playerArray[i].team == "heroes") {
        _rolesArrayHeroes.push(playerArray[i].name);
      } else {
        _rolesArrayVillains.push(playerArray[i].name);
      };
    };

  }; //end for



  _rolesArrayHeroes = shuffle(_rolesArrayHeroes);
  _rolesArrayVillains = shuffle(_rolesArrayVillains);



  if (_oraclePowerChoice == "1 AND 1") {

    _oracleInfoArray.push(_rolesArrayHeroes[0]);
    _oracleInfoArray.push(_rolesArrayVillains[0]);

    //must shuffle or heroes is always first
    _oracleInfoArray = shuffle(_oracleInfoArray);

    return _oracleInfoArray;


  } else if (_oraclePowerChoice == "At Least 1 Good") {

    _oracleInfoArray.push(_rolesArrayHeroes[0]);

    if (ReturnTrue50Percent()) {
      _oracleInfoArray.push(_rolesArrayHeroes[1]);
    } else {
      _oracleInfoArray.push(_rolesArrayVillains[0]);
    };

    _oracleInfoArray = shuffle(_oracleInfoArray);

    return _oracleInfoArray;


  } else if (_oraclePowerChoice == "At Least 1 Evil & Good") {

    _oracleInfoArray.push(_rolesArrayVillains[0]);

    _oracleInfoArray.push(_rolesArrayHeroes[0]);

    if (ReturnTrue50Percent()) {
      _oracleInfoArray.push(_rolesArrayHeroes[1]);
    } else {
      _oracleInfoArray.push(_rolesArrayVillains[1]);
    };

    _oracleInfoArray = shuffle(_oracleInfoArray);

    return _oracleInfoArray;

  } else if (_oraclePowerChoice == "Princess") {

    //removes princess
    var q = _rolesArrayHeroes.indexOf(rolesObject["princess"].name);
    _rolesArrayHeroes.splice(q, 1);

    _oracleInfoArray.push(rolesObject["princess"].name);

    if (ReturnTrue50Percent()) {
      _oracleInfoArray.push(_rolesArrayHeroes[0]);
    } else {
      _oracleInfoArray.push(_rolesArrayVillains[0]);
    };

    if (ReturnTrue50Percent()) {
      _oracleInfoArray.push(_rolesArrayHeroes[1]);
    } else {
      _oracleInfoArray.push(_rolesArrayVillains[1]);
    };


    _oracleInfoArray = shuffle(_oracleInfoArray);

    return _oracleInfoArray;


  } else if (_oraclePowerChoice == "Roles") {

    var _arrayOfRoles = [];

    for (var i = 0; i < playerArray.length; i++) {
      if (playerArray[i].role != "oracle") {
        _arrayOfRoles.push(playerArray[i].role);
      };
    }; //end for

    _arrayOfRoles = shuffle(_arrayOfRoles);

    return (_arrayOfRoles.splice(0,4)); //splice returns subset

  };


}; //end function ReturnOraclePowerInformation()














function MultiplyAPlayersMissionVotePower() {

  if (multiplyPowerChoice != "") {
    var _XAmount = 0;
    var ranNum = Math.floor(Math.random() * 10 + 1); //random number of 1-10

    if (ranNum == 1) {
      //do nothing, so multiply by 1
      _XAmount = 1;
    } else if (ranNum >= 2 && ranNum <= 6) {
      playerArray[IndexOfNameInPlayerArray(multiplyPowerChoice)].multiplier *= 2;
      _XAmount = 2;
    } else if (ranNum >= 7 && ranNum <= 9) {
      playerArray[IndexOfNameInPlayerArray(multiplyPowerChoice)].multiplier *= 3;
      _XAmount = 3;
    } else if (ranNum == 10) {
      playerArray[IndexOfNameInPlayerArray(multiplyPowerChoice)].multiplier *= 4;
      _XAmount = 4;
    };
    
    var _statusMessage = "Your spell increased " + multiplyPowerChoice + "'s mission voting power by " + _XAmount + "xs."; 
    var _morganaInd = IndexOfRoleInPlayerArray("morgana");
    io.to(`${playerArray[_morganaInd].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});

    multiplyPowerChoice = ""; //resets after multiplying
  }; //end if multiplyPowerChoice != ""

}; //end function





function CalculateDelayerTeamVoteForNextRound(_delayerIndex) {

  var _delayerTeamVote = 1;
  var _increaseDelayerTeamVoteAmount = 0;

  if (playerArray.length == 7 || playerArray.length == 9) {
    
    _increaseDelayerTeamVoteAmount = playerArray[_delayerIndex].delayerCount * 0.333;
    _increaseDelayerTeamVoteAmount = Math.round((_increaseDelayerTeamVoteAmount + Number.EPSILON) * 100) / 100;

  } else {
    _increaseDelayerTeamVoteAmount = playerArray[_delayerIndex].delayerCount * 0.666;
    _increaseDelayerTeamVoteAmount = Math.round((_increaseDelayerTeamVoteAmount + Number.EPSILON) * 100) / 100;
    console.log("_increaseDelayerTeamVoteAmount is: " + _increaseDelayerTeamVoteAmount);
  };

  _delayerTeamVote += _increaseDelayerTeamVoteAmount;

  console.log("_delayerTeamVote is: " + _delayerTeamVote);

  return _delayerTeamVote;

};


function IncrementAndNotifyDelayerCount() {

  if (rolesObject["delayer"].isRoleInGameBool) {

    var delayerIndex = IndexOfRoleInPlayerArray("delayer");
    var princessIndex = IndexOfRoleInPlayerArray("princess");

    playerArray[delayerIndex].delayerCount += 1;
    //delayerCount default is 0, and so by putting selectedForTeam afterwards and set to 0, it ensures
    //reset vote count if selected for team
    if (playerArray[delayerIndex].selectedForTeam) {
      playerArray[delayerIndex].delayerCount = 0;
    }; 


    var _nextRoundMVotePower = 1 + (playerArray[delayerIndex].delayerCount * 1.5)

    var _delayerVotePowerInfo = [_nextRoundMVotePower, CalculateDelayerTeamVoteForNextRound(delayerIndex)];

    io.to(`${playerArray[delayerIndex].socketID}`).emit("Notify Delayer of His Vote Count", _delayerVotePowerInfo);

  };

};


function NotifyPrincessDelayerIsInTheGame() {

  if (rolesObject["delayer"].isRoleInGameBool) {

      var _msg = "Delayer is in the game! If he/she is not voted onto a mission team before Mission 5, evil wins!";
      io.to(`${rolesObject["princess"].socketID}`).emit("Server To Player Message", {name: "System", message: _msg});

  };

};



function PlaceSoulMark() {

  if (soulMarkChoice != "") {

    var soulMarkChoiceIndex = indexofNameInPlayerArray[soulMarkChoice];

    if (playerArray[soulMarkChoiceIndex].role != "saintess") {

      if (playerArray[soulMarkChoiceIndex].role == "princess" && rolesObject["marcus"]["isRoleInGameBool"]) {

            var marcusInd = rolesObject["marcus"]["indexInPlayerArray"];

            playerArray[marcusInd].soulMark = true;

            NotificationOfStatuses(marcusInd, "soul mark");

            var msgToMarcus = "You defended the princess! You blocked the spiritualist's soul attack! As long as your soul sea remains marked, the spiritualist gains +2 mission voting power.";
            io.to(`${playerArray[marcusInd].socketID}`).emit("Server To Player Message", {name: "System", message: msgToMarcus});


      } else {
        playerArray[soulMarkChoiceIndex].soulMark = true;
        NotificationOfStatuses(soulMarkChoiceIndex, "soul mark");
      };


    }; //end if (playerArray.role != saintess)

    soulMarkChoice = "";

  }; //end if (soulMarkChoice != "")

};


function UpdateNumberOfSoulMarks() {

  var _numOfSoulMarks = 0;

  for (var i = 0; i < playerArray.length; i++) {
    if (playerArray[i].soulMark) {
      _numOfSoulMarks++;
    };
  };

  numberOfSoulMarks = _numOfSoulMarks;

};


function SoulScan(_scanName) {

  var _scannedRole = playerArray[indexofNameInPlayerArray[_scanName]].role;

  if (playerArray.length == 7 || playerArray.length == 9) {

    var _possibleHeroRoles = ["arduren", "marcus", "telepath", "ranger", "balancer", "detective", 
                              "scientist", "sensor", "ghost", "jailer"]; 
  } else {

    var _possibleHeroRoles = ["marcus", "telepath", "ranger", "balancer", "detective", 
                              "scientist", "sensor", "ghost", "jailer"]; 
  };

  //remove role so it won't be duplicatedly chosen
  var q = _possibleHeroRoles.indexOf(_scannedRole);
  _possibleHeroRoles.splice(q, 1);


  if (_scannedRole == "princess" || _scannedRole == "seer" || _scannedRole == "aura" || _scannedRole == "oracle") {
    return ["Princess", "Seer", "Aura Knight", "Oracle"];

  } else if (_scannedRole == "saintess") {
    return ["Saintess"];

  } else {

    var _sArray = [];

    _sArray.push(_scannedRole);

    _possibleHeroRoles = shuffle(_possibleHeroRoles);

    _sArray.push(_possibleHeroRoles[0]);

    _sArray = shuffle(_sArray);

    return _sArray;

  }; //end else

};




function ScanIndividualForAllStatuses(_playerToScan) {

  var _statusArrayOfIndividual = [];
  var i = indexofNameInPlayerArray[_playerToScan];

  if (playerArray[i].devilized) { _statusArrayOfIndividual.push("has been devilized"); };

  if (playerArray[i].bomb) { _statusArrayOfIndividual.push("has had a Flame Seal Bomb placed"); };

  if (playerArray[i].burnCount > 0) { _statusArrayOfIndividual.push("has been burned"); };

  if (playerArray[i].delayerCount > 0) { _statusArrayOfIndividual.push("has charged up Delay Power"); };

  if (playerArray[i].shrinkCount > 0) { _statusArrayOfIndividual.push("has been shrunk"); };

  if (playerArray[i].soulMark) { _statusArrayOfIndividual.push("has had his/her soul sea marked"); };

  if (playerArray[i].multiplier > 1) { _statusArrayOfIndividual.push("has multiplication magic enhancing him/her"); };

  io.to(`${rolesObject["sensor"].socketID}`).emit("Sensor: Status Information For Individual", [_playerToScan, _statusArrayOfIndividual]);

};








function BoolAilment(_playerObj, _ailment) {

  if (_ailment == "Flame Seal Bomb") {
    if (_playerObj.bomb) { return true; };
  };

  if (_ailment == "Burn") {
    if (_playerObj.burnCount > 0) { return true; };
  };  

  if (_ailment == "Soul Mark") {
    if (_playerObj.soulMark) { return true; };
  };

  if (_ailment == "Shrink") {
    if (_playerObj.shrinkCount > 0) { return true; };
  };

  if (_ailment == "Multiplier") {
    if (_playerObj.multiplier > 1) { return true; };
  };

}; //end function BoolAilment()




function ScanAllPlayersForStatus(_statusAilment) {

  var _arrayOfPeopleAfflicted = [];

  for (var i = 0; i < playerArray.length; i++) {

    if (BoolAilment(playerArray[i], _statusAilment)) {

      _arrayOfPeopleAfflicted.push(playerArray[i].name);

    };

  }; //end for statement

  return _arrayOfPeopleAfflicted;

}; //end function ScanAllPlayersForStatuses()





//this needs to go after adjust votes, near the end
function SendVoteInfoToScientist() {

  if (rolesObject["scientist"].isRoleInGameBool) {

    var _voteInfo = [];

    for (var i = 0; i < playerArray.length; i++) {

      if (playerArray[i].selectedForTeam) {
        _voteInfo.push(playerArray[i].missionVote);
      };

    }; //end for

    _voteInfo = shuffle(_voteInfo);


    if (scientistNotifiesEveryoneOfVotes) {
      var _msg = "The scientist has exposed everyone's votes! Individual votes are: " + FormatNamesInArrayString(_voteInfo);
      io.sockets.emit("Server To Player Message", {name: "System", message: _msg});
      scientistNotifiesEveryoneOfVotes = false; //resets here

    } else {
      var _msg = "Scientist! Use your critical thinking skills! The individual votes of the mission team are: " + FormatNamesInArrayString(_voteInfo);
      io.to(`${rolesObject["scientist"].socketID}`).emit("Server To Player Message", {name: "System", message: _msg});
    }

    
  }; //end if role in game bool

}; //end SendVoteInfoToScientist()
















function ReturnIndexForIdentityTheft() {

  var arrayOfIndicesToSteal = [];

  for (var i = 0; i < playerArray.length; i++) {

    if (playerArray[i].team == "heroes" && playerArray[i].role != "saintess" && playerArray[i].role != "arduren") {
      arrayOfIndicesToSteal.push(i);
    };
    
  }; //end for

  arrayOfIndicesToSteal = shuffle(arrayOfIndicesToSteal);

  return arrayOfIndicesToSteal[0];

};





function SwapIdentities() {

  if (boolStealIdentity) {
  
    var victimIndex = ReturnIndexForIdentityTheft();
    var dittoIndex = IndexOfRoleInPlayerArray("ditto");   

    originalAndStolenIdentityInfo = {victim_index: victimIndex, thief_index: dittoIndex, thief_pseudoName: playerArray[dittoIndex].pseudoName};
      
    playerArray[dittoIndex].role = playerArray[victimIndex].role; //steals/copies role
    playerArray[dittoIndex].pseudoName = playerArray[victimIndex].pseudoName;
    playerArray[dittoIndex].alignment = playerArray[victimIndex].alignment; //in case princess, where alignment = unknown


    playerArray[victimIndex].role = "???"; //sets role to stolen
    playerArray[victimIndex].pseudoName = "???";
    playerArray[victimIndex].alignment = "evil";


    io.to(`${playerArray[victimIndex].socketID}`).emit("Swap Identities.", [playerArray[victimIndex].role, true]); //player whose identity was stolen
    io.to(`${playerArray[dittoIndex].socketID}`).emit("Swap Identities.", [playerArray[dittoIndex].role, true]); //gives stolen identity to thief

    boolStealIdentity = false;

  };

};



function RestoreIdentities() {

  if (originalAndStolenIdentityInfo != "") {

    var victimIndex = originalAndStolenIdentityInfo.victim_index;
    var dittoIndex = originalAndStolenIdentityInfo.thief_index;


    playerArray[victimIndex].role = playerArray[dittoIndex].role;
    playerArray[victimIndex].pseudoName = playerArray[dittoIndex].pseudoName;
    playerArray[victimIndex].alignment = playerArray[dittoIndex].alignment; //in case princess, where alignment = unknown


    playerArray[dittoIndex].role = "ditto";
    playerArray[dittoIndex].pseudoName = originalAndStolenIdentityInfo.thief_pseudoName;
    playerArray[dittoIndex].alignment = "evil";

    //resets myRole
    io.to(`${playerArray[victimIndex].socketID}`).emit("Swap Identities.", [playerArray[victimIndex].role, false]); 
    io.to(`${playerArray[dittoIndex].socketID}`).emit("Swap Identities.", [playerArray[dittoIndex].role, false]); 

    originalAndStolenIdentityInfo = "";

  }; // end if (boolStealIdentity)

}; //end function













function NotificationOfStatuses(_playerTargetedIndex, _status) {

  //_status is devilized, bomb, 
  var _statusMessage = "";


  //notifies Princess
  if (_status == "bomb") {
      _statusMessage = "A flame seal bomb has been placed on " + playerArray[_playerTargetedIndex].name + "!";
  } else if (_status == "devilized") {
      _statusMessage = playerArray[_playerTargetedIndex].name + " has been infected by the Demon Lord's darkness. His/her mission votes are now reversed!";
  } else if (_status == "burn") {
      _statusMessage = playerArray[_playerTargetedIndex].name + " has been burned by fire magic! Every round he/she will lose 1.25 voting power!";
  } else if (_status == "shrink") {
      _statusMessage = playerArray[_playerTargetedIndex].name + " has been shrunk! His/her team & mission votes are halved for 2 rounds (starting this current mission vote)!";
  } else if (_status == "anti-magic") {
      _statusMessage = playerArray[_playerTargetedIndex].name + " has been blasted by the Hex Ranger's anti-magic ray! All magical influences nullified!";
  } else if (_status == "soul mark") {
      _statusMessage = playerArray[_playerTargetedIndex].name + " has had a mark placed within his/her soul sea!";
  };

  io.to(`${rolesObject["princess"].socketID}`).emit("Server To Player Message", {name: "System", message: _statusMessage});


  //notifies Arduren
  if (playerArray[_playerTargetedIndex].role == "arduren") {

    if (_status == "bomb") {
      _statusMessage = "Watch out! A flame seal bomb has been placed on you!";
    } else if (_status == "devilized") {
      _statusMessage = "Hello! Listen! You've been infected by the Demon Lord's darkness. Your mission votes are now reversed!";
    } else if (_status == "burn") {
      _statusMessage = "Look! You just got burned! Every round you will lose 1.25 voting power!";
    } else if (_status == "shrink") {
      _statusMessage = "Hey! You just got shrunk! Your team & mission votes are halved for 2 rounds (starting this current mission vote)!";
    } else if (_status == "anti-magic") {
      _statusMessage = "Arduren! You've just been blasted by the Hex Ranger's anti-magic ray! All magical influences, good & bad, are negated!";
    } else if (_status == "soul mark") {
      _statusMessage = "Careful! A spiritualist invaded your soul sea and placed a mark!";
    };

    io.to(`${playerArray[_playerTargetedIndex].socketID}`).emit("Server To Player Message", {name: "Navi", message: _statusMessage});

  }; //end if (playerArray[])

};



function NotifyMarcusWhoIsThePrincess() {

  if (rolesObject["marcus"].isRoleInGameBool) {

    if (rolesObject["ditto"].isRoleInGameBool) {

      var fakePrincess = playerArray[IndexOfRoleInPlayerArray("ditto")].name;

      var arrayOfPrincesses = [rolesObject["princess"].name, fakePrincess];

      arrayOfPrincesses = shuffle(arrayOfPrincesses);

      var _msg = "Hi Marcus. The identity of the princess is either " + arrayOfPrincesses[0] + " or " + arrayOfPrincesses[1] + ".";
      io.to(`${playerArray[IndexOfRoleInPlayerArray("marcus")].socketID}`).emit("Server To Player Message", {name: "System", message: _msg});

    } else {

      var _msg = "Hi Marcus. The identity of the princess is " + rolesObject["princess"].name;
      io.to(`${playerArray[IndexOfRoleInPlayerArray("marcus")].socketID}`).emit("Server To Player Message", {name: "System", message: _msg});

    }; //end else

  }; //end isMarcusInTheGame

}; //end NotifyMarcusWhoIsThePrincess() function



function AreStatusesNormalForSaintessPowers(_playerObject) {

  if (_playerObject.devilized) { return false; };
  if (_playerObject.soulMark) { return false; };
  if (_playerObject.bomb) { return false; };
  if (_playerObject.multiplier > 1) { return false; };
  if (_playerObject.delayerCount > 0) { return false; };
  if (_playerObject.shrinkCount > 0) { return false; };
  if (_playerObject.burnCount > 0) { return false; };

  return true;
};




function SendArrayForSaintessStatusSensePowers() {

  if (rolesObject["saintess"].isRoleInGameBool) {

    var statusSaintessArray = [];

    for (var i = 0; i < playerArray.length; i++) {

      if(AreStatusesNormalForSaintessPowers(playerArray[i])) {
        statusSaintessArray.push({name: playerArray[i].name, status: "normal"});
      } else {
        statusSaintessArray.push({name: playerArray[i].name, status: "abnormal"});
      };

    }; //end for statement

    io.to(`${playerArray[IndexOfRoleInPlayerArray("saintess")].socketID}`).emit("Set Saintess Status Array", statusSaintessArray);

  }; //if (isSaintessInTheGame)

}; //end function



function AreStatusesNormalForRangerPowers(_playerObject) {

  if (_playerObject.bomb) { return false; };
  if (_playerObject.soulMark) { return false; };
  if (_playerObject.burnCount > 0) { return false; };
  if (_playerObject.multiplier > 1) { return false; };
  if (_playerObject.delayerCount > 0) { return false; };
  if (_playerObject.bide > 1) { return false; };
  if (_playerObject.bless > 1) { return false; };
  if (_playerObject.safeguard) { return false; };
  
  return true;
};


//this should be sent AFTER powers before team vote, so bless/safeguard can be activated
function SendArrayForRangerStatusSensePowers() {

  if (rolesObject["ranger"].isRoleInGameBool) {

    var statusRangerArray = [];

    for (var i = 0; i < playerArray.length; i++) {

      if (playerArray[i].selectedForTeam) {

        if(AreStatusesNormalForRangerPowers(playerArray[i])) {
          statusRangerArray.push({name: playerArray[i].name, status: "normal"});
        } else {
          statusRangerArray.push({name: playerArray[i].name, status: "abnormal"});
        };

      }; //end if selectedForTeam

    }; //end for statement

    io.to(`${playerArray[IndexOfRoleInPlayerArray("ranger")].socketID}`).emit("Set Ranger Status Array", statusRangerArray);

  }; //if (isSaintessInTheGame)

}; //end function






//75 percent chance of returning True
function Bool75PercentChanceTrue() {

  var randomNumber = Math.floor(Math.random() * 4 + 1); //random number of 1,2,3,4

  if (randomNumber == 4) {
    return false;
  } else {
    return true;
  };

};


function StatusCheckForSeerPower(_index) {

  var _statusArrayForSeerPower = [];

  if (playerArray[_index].devilized) { _statusArrayForSeerPower.push("is devilized"); };

  if (playerArray[_index].bomb) { _statusArrayForSeerPower.push("has a flame seal bomb planted"); };

  if (playerArray[_index].soulMark) { _statusArrayForSeerPower.push("has a mark in his/her soul sea"); };

  if (playerArray[_index].multiplier > 1) { _statusArrayForSeerPower.push("is enchanted with multiplication magic"); };

  if (playerArray[_index].delayerCount > 0) { _statusArrayForSeerPower.push("has delay power gathered"); };

  if (playerArray[_index].shrinkCount > 0) { _statusArrayForSeerPower.push("has been shrunk"); };

  if (playerArray[_index].burnCount > 0) { _statusArrayForSeerPower.push("is burned"); };

  return _statusArrayForSeerPower;

};



//Could also do random number generator for choosing role...ie: return _shuffledRoles[randomNumber]
function ReturnReversedRole(_obj) {

  var _7or9Players = false;

  if (playerArray.length == 7 || playerArray.length == 9) { _7or9Players = true; };


  if (_obj.amIGood) {

    var _shuffledBadRoles = shuffle(badRolesArray);
    return _shuffledBadRoles[0];
    

  } else { //if bad, return good role

    if (_7or9Players) {
      var _shuffledGoodRoles = shuffle(goodRolesArrayFor7_9_Players);
    } else {
      var _shuffledGoodRoles = shuffle(goodRolesArrayFor6_8_10_Players);
    };

    return _shuffledGoodRoles[0];

  };

}; //end ReturnReverseRole()



function SeerPower(_seerTargetName) {

  var _index = indexofNameInPlayerArray[_seerTargetName];

  var _arr = StatusCheckForSeerPower(_index);

  if (missionNumber != 7) {


    if (_arr.length > 0) {

      return ["status", _seerTargetName, _arr];

    } else { //if empty array meaning no statuses

      if (Bool75PercentChanceTrue()) { //if true

        return ["role", _seerTargetName, playerArray[_index].role];

      } else { //if false

        return ["role", _seerTargetName, ReturnReversedRole(playerArray[_index])];

      }; //end inner else else

    }; //end outer else


  } else {

    return ["Mission 7", _seerTargetName, playerArray[_index].role, _arr];

  };

}; //end function SeerPower()





function AuraKnightPower(_targetName) {

  var _index = indexofNameInPlayerArray[_targetName];

  var _arr = StatusCheckForSeerPower(_index); //recycle this

  if (missionNumber != 7) {

    if (_arr.length > 0) {

      return ["status", _targetName, _arr];

    } else {

      return ["alignment", _targetName, playerArray[_index].alignment];

    };

  } else {

    return ["Mission 7", _targetName, playerArray[_index].alignment, _arr];

  };


}; //end function AuraKnightPower()





function FormatNamesInArrayString(_array) {

  var outputString = "";

  //format string output
  for (var i = 0; i < _array.length; i++) {

      outputString = outputString + _array[i];

      if (_array.length == 2) {

        if (i == 0) { //if first name of two names
          outputString = outputString + " and ";
        } else { //if second name of two names
          outputString = outputString + "."; //this could be changed to "." period
        };

      } else { //for 3 or more names

        if (i == (_array.length - 2)) { //2nd to last name

          outputString = outputString + ", and ";

        } else if (i == (_array.length - 1)) { //last/final name

          outputString = outputString + "."; //this could be changed to "." period

        } else {

          outputString = outputString + ", ";

        }; //end inner else

      }; //end outer else

  }; //end for (var i = 0; i < baddiesArray.length)

  return outputString;

};





function calculateNumberofTeamMembers(_MNumber, _numOfPlayers) {

  //3 and 4 are for testing purposes only...minimum of 5 players for game

  if (_numOfPlayers == 3) {

    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 3;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 3;

    } else if (_MNumber == 7) {

      return 3;

    };



  } else if (_numOfPlayers == 4) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 3;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 3;

    } else if (_MNumber == 7) {

      return 3;

    };



  } else if (_numOfPlayers == 5) {


    if (_MNumber == 1) {

      return 2;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 3;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 2;

    } else if (_MNumber == 7) {

      return 4;

    };



  } else if (_numOfPlayers == 6) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 2;

    } else if (_MNumber == 3) {

      return 4;

    } else if (_MNumber == 4) {

      return 4;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 2;

    } else if (_MNumber == 7) {

      return 5;

    };


  } else if (_numOfPlayers == 7) {


    if (_MNumber == 1) {

      return 4;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 2;

    } else if (_MNumber == 4) {

      return 2;

    } else if (_MNumber == 5) {

      return 5;

    } else if (_MNumber == 6) {

      return 4;

    } else if (_MNumber == 7) {

      return 5;

    };



  } else if (_numOfPlayers == 8) {


    if (_MNumber == 1) {

      return 3;

    } else if (_MNumber == 2) {

      return 5;

    } else if (_MNumber == 3) {

      return 5;

    } else if (_MNumber == 4) {

      return 2;

    } else if (_MNumber == 5) {

      return 3;

    } else if (_MNumber == 6) {

      return 5;

    } else if (_MNumber == 7) {

      return 6;

    };


  } else if (_numOfPlayers == 9) {


    if (_MNumber == 1) {

      return 5;

    } else if (_MNumber == 2) {

      return 3;

    } else if (_MNumber == 3) {

      return 2;

    } else if (_MNumber == 4) {

      return 6;

    } else if (_MNumber == 5) {

      return 5;

    } else if (_MNumber == 6) {

      return 2;

    } else if (_MNumber == 7) {

      return 7;

    };


  } else if (_numOfPlayers == 10) {


    if (_MNumber == 1) {

      return 6;

    } else if (_MNumber == 2) {

      return 5;

    } else if (_MNumber == 3) {

      return 4;

    } else if (_MNumber == 4) {

      return 3;

    } else if (_MNumber == 5) {

      return 2;

    } else if (_MNumber == 6) {

      return 5;

    } else if (_MNumber == 7) {

      return 8;

    };

  };


}; //end calculateNumberofTeamMembers function











//gets Twilio access token

/*
app.get('/token', function(request, response) {
  var identity = request.query.identity || randomName();

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
    var token = new AccessToken(
    "AC0d83bab192525e68ec42c7e3d979eeae",
    "SKb10f1db83346963116ab5a78bfd660cc",
    "HuKAfxAuyfsJdgiYTh6bPG5EvAzwSX5L",
    { ttl: MAX_ALLOWED_SESSION_DURATION }
  ); 

  //var token = new AccessToken();

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  var grant = new VideoGrant();
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response.
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});




*/










/*
function calculateNumberofTeamMembers(_MNumber, _numOfPlayers) {

  var MNumber = _MNumber;
  var numOfPlayers = _numOfPlayers;
  var numberOfMissionPeople;

  //for 3 people testing case
  if (MNumber == 1 && numOfPlayers == 3) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 2 && numOfPlayers == 3) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 3 && numOfPlayers == 3) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 4 && numOfPlayers == 3) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 5 && numOfPlayers == 3) {
    numberOfMissionPeople = 3;
  };


    //for 4 people testing case
  if (MNumber == 1 && numOfPlayers == 4) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 2 && numOfPlayers == 4) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 3 && numOfPlayers == 4) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 4 && numOfPlayers == 4) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 5 && numOfPlayers == 4) {
    numberOfMissionPeople = 3;
  };


  //for 5 people
  if (MNumber == 1 && numOfPlayers == 5) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 2 && numOfPlayers == 5) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 3 && numOfPlayers == 5) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 4 && numOfPlayers == 5) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 5 && numOfPlayers == 5) {
    numberOfMissionPeople = 3;
  };


  //for 6 people
  if (MNumber == 1 && numOfPlayers == 6) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 2 && numOfPlayers == 6) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 3 && numOfPlayers == 6) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 4 && numOfPlayers == 6) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 5 && numOfPlayers == 6) {
    numberOfMissionPeople = 4;
  };


  //for 7 people
  if (MNumber == 1 && numOfPlayers == 7) {
    numberOfMissionPeople = 2;
  } else if (MNumber == 2 && numOfPlayers == 7) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 3 && numOfPlayers == 7) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 4 && numOfPlayers == 7) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 5 && numOfPlayers == 7) {
    numberOfMissionPeople = 4;
  };


  //for 8 people
  if (MNumber == 1 && numOfPlayers == 8) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 2 && numOfPlayers == 8) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 3 && numOfPlayers == 8) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 4 && numOfPlayers == 8) {
    numberOfMissionPeople = 5;
  } else if (MNumber == 5 && numOfPlayers == 8) {
    numberOfMissionPeople = 5;
  };


  //for 9 people
  if (MNumber == 1 && numOfPlayers == 9) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 2 && numOfPlayers == 9) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 3 && numOfPlayers == 9) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 4 && numOfPlayers == 9) {
    numberOfMissionPeople = 5;
  } else if (MNumber == 5 && numOfPlayers == 9) {
    numberOfMissionPeople = 5;
  };


  //for 10 people
  if (MNumber == 1 && numOfPlayers == 10) {
    numberOfMissionPeople = 3;
  } else if (MNumber == 2 && numOfPlayers == 10) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 3 && numOfPlayers == 10) {
    numberOfMissionPeople = 4;
  } else if (MNumber == 4 && numOfPlayers == 10) {
    numberOfMissionPeople = 5;
  } else if (MNumber == 5 && numOfPlayers == 10) {
    numberOfMissionPeople = 5;
  };


  return numberOfMissionPeople;

}; //end calculateNumberofTeamMembers function
*/
