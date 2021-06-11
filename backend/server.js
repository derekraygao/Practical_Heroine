

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
var {AbilityManager} = require('./src/AbilityManager.js');
var AbilityManager = new AbilityManager();

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



/*name here is original name NOT, the name from Marcus'
bodyguardNameSwitch(name, obj) function
obj is from within the socket.on() scope 
name should always be an array [], since Ichigo + Marcus don't
need the name
*/

function princessMarcusIchigoNotification(name, status, obj) {

  if (obj.rO.roles["Marcus"].inGame) {

    if (name[0] == obj.rO.roles["Princess"].name) {

      io.to(`${obj.rO.roles["Marcus"].socketID}`).emit(
        "Update Statuses", obj.rO.roles["Marcus"].bodyguardNotification(status));    

    } else if (name[0] == obj.rO.roles["Ichigo"].name) {

       io.to(`${obj.rO.roles["Ichigo"].socketID}`).emit(
        "Update Statuses", obj.rO.roles["Ichigo"].naviNotification(name, status, obj));    

    } else {

      //this is in case exchange of spirits chooses Marcus + Princess
      //which would cause array to have [Marcus, Marcus]
      if (name[0] == name[1]) { return 0; };

      io.to(`${obj.rO.roles["Princess"].socketID}`).emit(
        "Update Statuses", obj.rO.roles["Princess"].EONotification(name, status)); 

    };

    return 0;

  }; //end if Marcus in game







}; //end princessMarcusIchigoNotification(name, status, obj)


//it's only an array for exchange of spirits power
//Marcus power ensures princess is never the target
function princessNotificationPower(status, nameOrArray, obj) {

  //this for exchange of spirits and marcus check
  //if marcus in game and hecate chooses Marcus + Princess,
  //the array becomes [Marcus, Marcus]
  if (nameOrArray[0] == nameOrArray[1]) { return 0; };

  var message = obj.rO.roles["Princess"].
  EONotification(nameOrArray, status, obj);

  io.to(`${obj.rO.roles["Princess"].socketID}`).emit(
        "Update Statuses", message); 

};


function MarcusNotificationPower(status, originalName, obj) {

  if (!obj.rO.roles["Marcus"].inGame) { return 0; };

  if (originalName != obj.rO.roles["Princess"].name) { return 0; };

  var message = obj.rO.roles["Marcus"].bodyguardNotification(status);

  io.to(`${obj.rO.roles["Marcus"].socketID}`).emit(
        "Update Statuses", message); 

};


function IchigoNotificationPower(status, name) {

  //check if Ichigo in game not necessary, cause name will be ""
  //if (!obj.rO.roles["Ichigo"].inGame) { return 0; };

  if (name != obj.rO.roles["Ichigo"].name) { return 0; };

  var message = obj.rO.roles["Ichigo"].naviNotification(status);

  io.to(`${obj.rO.roles["Ichigo"].socketID}`).emit(
        "Update Statuses", message);   

};







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











