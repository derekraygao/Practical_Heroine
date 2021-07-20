

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

const options = { 
                  cors:true,
                  origins:["*"],
                  pingTimeout: 4000, 
                  pingInterval: 5000
                };


var io = require('socket.io')(server, options);





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
//console.log(Controller);

var {randomName} = require('./random_name.js');
var {shuffle} = require("./src/characters/shuffle.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");

//EVERY SERVER MESSAGE (socket.on) GOES INSIDE THE io.on
io.on('connection', function (socket) {

  console.log(socket.id + " connected!");


  /*for testing only */
  socket.on("Get Testing Name - Skip Input Screen", () => {

    socket.emit("From Server: Random Name For Testing", randomName());

  });



  socket.on("TESTING ONLY: Ready For New Game", () => {

    var playerRandName = randomName();
    socket.emit("From Server: Random Name For Testing", playerRandName);

    Controller.addPlayerToArray(playerRandName, socket.id, "testing", "nobody");

    var obj = Controller.returnpArrayRoomAndIndex(socket);

    Controller.setPlayerReady(obj);

    if (!Controller.isEveryoneReadyFirstGameAndAtLeastThreePlayers(obj)) {

      //update control panel ready info
      return 0;

    };

    /* if everyone is ready */

    console.log("Everyone is ready (3 players!)");

    Controller.setGamePhase(obj, 1);

    //default missionNo is 0, add to become Mission 1
    Controller.updateMissionNumber(obj);

    Controller.resetPlayerReadyStatus(obj);

    shuffle(obj.pA);

    //index mapping is done here, so cannot shuffle afterwards, or if shuffle
    //playerArray, then need to re-map the indices
    Controller.assignPlayersTheirRoles(obj);

    obj.rO.roles["Esper"].assignPlayersTheirPseudonyms(obj);

    var listOfPlayers = Controller.getListOfPlayers(obj);

    //sets roles on client side
    for (let i = 0; i < obj.rO.rolesInGame.length; i++) {

      //sets roles for everyone and starts the game
      io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Start Game", {
                        role: obj.rO.rolesInGame[i].role,
                        team: obj.rO.rolesInGame[i].team,
                        listOfPlayers: listOfPlayers
                      }
      ); //end emit


      if (obj.rO.rolesInGame[i].team == "villains") {

        io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Set Villains List For Villains", obj.rO.getVillainsIdentities());

      };


    }; //end for

 
    io.to(`${obj.rO.roles["Princess"].socketID}`).emit(
    "Reveal Villains To Princess", obj.rO.getVillainsIdentitiesForPrincess());


    if (obj.rO.roles["Marcus"].inGame) {

        io.to(`${obj.rO.roles["Marcus"].socketID}`).emit(
          "Reveal Princess Identity To Marcus", 
          obj.rO.getPrincessIdentityArrayForMarcus()
        );

    };


  }); //end TESTING ONLY: Ready For New Game












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

    var listOfPlayers = Controller.getListOfPlayers(obj);

    //sets roles on client side
    for (let i = 0; i < obj.rO.rolesInGame.length; i++) {

      //sets roles for everyone and starts the game
      io.to(`${obj.rO.rolesInGame[i].socketID}`).emit(
        "Start Game", {
                        role: obj.rO.rolesInGame[i].role,
                        team: obj.rO.rolesInGame[i].team,
                        listOfPlayers: listOfPlayers
                      }
      );


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


    obj.rO.roles["Esper"].assignPlayersTheirPseudonyms(obj);


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
    console.log("Submitted team is: " + proposedTeamArray);

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
      "Start Game Phase 3: Set Team Leader's Proposed Team", proposedTeamArray);



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

        emitToAllSocketsInRoom(obj, "Start Game Phase 4: Team Was Accepted!", 
          obj.rI.teamInfo);

        /*
        emitToAllSocketsInRoom(obj, "Start Game Phase 4: Team Was Accepted!", 
          obj.rI.getLatestTeamVotingInfo(obj.rD.missionNo));
        */

        break;


      case "Failed Team Proposal":

        //you'll update teamLeaderTracker AFTER everyone is finished viewing the 
        //team results, which is why to see nextTeamLeader, you do current index + 1

        Controller.setGamePhase(obj, 4);

        updateTeamHistoryResults(obj);

        emitToAllSocketsInRoom(
          obj, 
          "Start Game Phase 4: Team Was Rejected!",
          {
            teamInfo: obj.rI.teamInfo,
            numOfFailedTeamProposals: obj.rD.numOfFailedTeamProposals,
            //nextTeamLeader: obj.pA[(obj.rD.teamLeaderIndex + 1)].name this could
            //result in teamLeaderIndex that is greater than (array length - 1) and thus cause error 
            //of reading property of undefined
          } //what happens in case of paralysis?
          
        );

        break;


      case "Game Over. Too Many Failed Team Proposals":

        Controller.setGamePhase(obj, 10);

        emitToAllSocketsInRoom(
          obj, 
          "Start Game Phase 10: Game Over. Villains Win! 5 Failed Team Proposals!",
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



  //this must go BEFORE Controller.setPlayersForMission
  function dropPlayerAffectedBySing(obj) {

    if (!obj.rO.roles["Baby Doll"].inGame) { return 0; };

    var singResult = 
    obj.rO.roles["Baby Doll"].ifAsleepDropPlayerFromMission(obj);

    console.log("sing result is: " + singResult);

    if (singResult !== "nobody was dropped") {

      emitToAllSocketsInRoom(obj, 
        "Sing: Player Was Dropped From The Mission Team",
        singResult);

      emitToAllSocketsInRoom(obj, 
        "Update Mission Team",
        obj.rD.missionTeam);

    };


  }; //end dropPlayerAffectedBySing



  //after people view team votes
  socket.on("Ready To Start Power Phase 2 and Game Phase 5", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };

    Controller.resetPlayerReadyStatus(obj);

    //this must go BEFORE Controller.setPlayersForMission
    dropPlayerAffectedBySing(obj);

    Controller.setPlayersForMission(obj);

    //tells selected for mission to start power phase 2 and for
    //those not selected to wait
    Controller.setGamePhase(obj, 5);

    emitStartPowerPhase2(obj);


  }); //end "Ready For Next Team Leader Proposal After Failed One"



  socket.on("End Power Phase 2. Start Mission Voting And Game Phase 6", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    Controller.setPlayerReady(obj);

    //this checks ONLY those selected for mission
    if (!Controller.areAllConnectedPlayersDoneWithPowerPhase2(obj)) { return 0; };

    Controller.resetPlayerReadyStatus(obj);

    Controller.setGamePhase(obj, 6);

    emitStartMission(obj);

  }); //end "Ready For Next Team Leader Proposal After Failed One"




  socket.on("Vote on Mission", (vote) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    console.log(obj.pA[obj.index].name + " voted for " + vote);

    Controller.setPlayerMissionVote(vote, obj);

    if ( !Controller.didAllPlayersVoteOnTheMission(obj) ) { return 0; };

    /*All players have voted on mission */

    var missionPointsTotal = Controller.missionVoteCalculation(obj);

    var gameStatus = obj.rI.didAnyoneWin(obj.rD.missionNo);

    //needs to come after above mission calculations
    updateMissionResults(obj);


    switch(gameStatus) {

      case "Heroes Win! Villains' Last Chance.":

        console.log("Start Game Phase 9: Heroes Win! Villains' Last Chance.");

        Controller.setGamePhase(obj, 9);

        emitToStartGamePhase9(obj);

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

        emitToAllSocketsInRoom(obj, "Start Game Phase 7: Mission Ended", missionPointsTotal);

        break;

      default:

        break;

    }; //end switch


    /*abilitymanager needs to come BEFORE
    you update mission number and A*/
    AbilityManager.updateStatusesBeforeNightPhase(obj);

    MessageNotificationStack(obj);

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


    //mission number updated in client's side
    emitToAllSocketsInRoom(obj, "Start Game Phase 8: Night Phase", obj.rD.missionNo);


  });



  socket.on("End Night Phase", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    //console.log(obj.pA[obj.index].name + "end night phase 8");

    Controller.setPlayerReady(obj);

    if (!Controller.areAllConnectedPlayersReady(obj)) { return 0; };  

    //console.log("End night phase, all players ready");

    Controller.resetPlayerReadyStatus(obj);

    Controller.setGamePhase(obj, 1);


    AbilityManager.updateStatusesAfterNightPhase(obj);

    //put info in Redux store because you cannot send messages
    //to an unmounted component
    updateInfoForPowersOnClientSide(obj);

    emitToAllSocketsInRoom(obj, "Start Game Phase 1: Power Phase 1", "");


  });

  //starting Mission 2
  function updateInfoForPowersOnClientSide(obj) {

    //send to App.js and redux store, because component
    //has not been mounted yet
    if (obj.rO.roles["Ranger"].inGame) {

      io.to(`${obj.rO.roles["Ranger"].socketID}`).
        emit("Receive Ranger Sense Array", 
          obj.rO.roles["Ranger"].sense(obj));
    };


    if (obj.rO.roles["Saintess"].inGame) {

      io.to(`${obj.rO.roles["Saintess"].socketID}`).
        emit("Receive Saintess Sense Array", 
          obj.rO.roles["Saintess"].saintessSense(obj));

    };




    if (obj.rO.roles["Backstabber"].activateSwitch) {

      var bsInfo = obj.rO.roles["Backstabber"].betray(obj);
      obj.rO.roles["Backstabber"].activateSwitch = false;

      io.to(`${bsInfo.originalSID}`).
        emit("Give Original Backstabber New Role", bsInfo.originalBSNewRole);


      var newBSInfo = {
                        originalBSName: bsInfo.originalBSName,
                        villainList: obj.rO.getVillainsIdentities()
                      };

      io.to(`${bsInfo.newSID}`).
        emit("Give New Backstabber New Role", newBSInfo);

    };


  }; //end updateInfoForPowersOnClientSide(obj)





  socket.on("Submit Villain Guess On The Princess's Identity", (guess) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.addPrincessGuessForVillain(obj, guess);

    console.log(obj.pA[obj.index].name + " guessed the princess to be: " + guess);

    if (!Controller.didAllConnectedVillainsGuessOnThePrincessIdentity(obj)) {
      return 0;
    };


    Controller.setGamePhase(obj, 10);

    //if everyone did guess, then next phase
    if (obj.rO.didVillainsCorrectlyGuessThePrincessIdentity()) {

      console.log("Correct guess");

      emitToAllSocketsInRoom(
        obj, 
        "Start Game Phase 10: Game Over. Villains Win! Correctly Guessed Princess Identity!", 
        obj.rO.getAllIdentitiesAndTheirRoles()
      );


    } else {

      console.log("Wrong guess");

      emitToAllSocketsInRoom(
        obj, 
        "Start Game Phase 10: Game Over. Heroes Win!", 
        obj.rO.getAllIdentitiesAndTheirRoles()
      );

    }; //end else


  }); //end socket.on("Submit Villain Guess On The Princess' Identity")



  socket.on("Normal Chat", (chatMess) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var _message = {name: obj.pA[obj.index].name, message: chatMess};

    emitToAllSocketsInRoom(obj, 
      "Normal Chat Message From Server To Client", _message);

  }); //end socket.on("Normal Chat")


  socket.on("Villain Chat", (vChatMess) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };
    if (obj.rO.rolesInGame[obj.index].team === "heroes") { return 0; };


    var _vMessage = {name: obj.pA[obj.index].name, message: vChatMess};

    for (var i = 0; i < obj.pA.length; i++) {
      
      if (obj.rO.rolesInGame[i].team === "villains") {

        io.to(`${obj.pA[i].socketID}`).
        emit("Villain Chat Message From Server To Client", _vMessage);

      };

    }; //end for



  }); //end socket.on("Villain Chat")




  /* POWERS */


  //Marcus
  socket.on("Activate Berserk", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Marcus"].activateBerserk(obj);
    
    //console.log(obj.rO.roles["Marcus"].berserk);

  });


  //Lottie

  socket.on("Add Therapy Target", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Lottie"].addTherapyTarget(name);

    //console.log("Therapy Target: " + obj.rO.roles["Lottie"].therapy);

  });



  socket.on("Use Group Hug", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Lottie"].activateGroupHug();
    
    //console.log("Group Hug status: " + obj.rO.roles["Lottie"].groupHugActivated);

  });




  //Pear

  socket.on("Invisible Spy", (spyTarget) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Pear"].spyOn(spyTarget);

    //console.log("Spy on " + obj.rO.roles["Pear"].voteToExpose);

  });


  socket.on("Vanish", (vanishTarget) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Pear"].vanish(vanishTarget);

    //console.log("Turn vote invisible: " + obj.rO.roles["Pear"].playerVoteToVanish);

  });


  //Lan 
  socket.on("Beat Rush", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };    

    obj.rO.roles["Lan"].beatRush(name, obj);

    //console.log(obj.pA[obj.pT[name]].confused);

  });


  socket.on("Activate Intimidation", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };   

    obj.rO.roles["Lan"].addIntimidateTarget(name);

    console.log(obj.rO.roles["Lan"].intimidateTarget);

  });


  socket.on("Activate Final Heaven", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };  

    obj.rO.roles["Lan"].activateFinalHeaven(obj);

    MessageNotificationStack(obj);

  });





  //Ichigo
  socket.on("Activate Hylian Shield", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };   

    obj.rO.roles["Ichigo"].activateHylianShield();

    var hMess = {
                  type: "power",
                  message: "The Hero of Azurea, Ichigo, repels "
                  + "evil with the Hylian Shield! If the "
                  + "end mission vote sum is < 0, then +3 to "
                  + "the sum, if >= 0, then -3."
                };

    emitToAllSocketsInRoom(obj, "Add System Message", hMess);

    console.log("Hylian Shield Status: " + obj.rO.roles["Ichigo"].isHylianShieldActivated);

  });


  socket.on("Activate Holy Strike", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };   

    obj.rO.roles["Ichigo"].activateHolyStrike();

    console.log("Holy Strike Status: ", obj.rO.roles["Ichigo"].holyStrike);

  });







  //Seer

  socket.on("Scry", (_name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var scryInfo = obj.rO.roles["Seer"].scry(obj, _name);

    socket.emit("Scry Info From Server", scryInfo);

  });


  //Aura Knight
  socket.on("Sense Aura", (_name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var auraInfo = obj.rO.roles["Aura Knight"].readAura(_name, obj);

    socket.emit("Aura Sense Result", auraInfo);

  });


  //Oracle
  socket.on("Oracle Message", (oraclePowerChoice) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var oracleInfoArray = obj.rO.roles["Oracle"].prophesize(
      oraclePowerChoice, obj);

    var oMess = {

      type: "power",
      message: ("Luces: For '" + oraclePowerChoice + "': "
      + formatArrayIntoString(oracleInfoArray))

    };

    socket.emit("Add System Message", oMess);

  });


  //Balancer
  socket.on("Weighing of Souls", (_bArr) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var balanceResult = obj.rO.roles["Balancer"].
    mysticScales(_bArr[0], _bArr[1], obj);

    var bMessage = 
    {
      type: "power",
      message: (_bArr[0] + " and " + _bArr[1] + " have " + balanceResult)
    };

    socket.emit("Add System Message", bMessage);

  });


  socket.on("Equilibrium", (eArr) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Balancer"].setEquilibriumArray(eArr);

    /*console.log("Equilibrium Array is: " + 
      formatArrayIntoString(obj.rO.roles["Balancer"].equilibriumArray));
    */
  });






  //Detective Chat

  socket.on("Investigate", (_name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var InvestigationResults = obj.rO.roles["Detective Chat"].
    investigate(_name, obj);

    var investigateMessage = {
      type: "power",
      message: InvestigationResults
    };

    socket.emit("Add System Message", investigateMessage);

  });



  socket.on("Interrogation", (target) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Detective Chat"].setInterrogationTarget(target);


  });




  /* Esper Powers */

  socket.on("Telepathy Choices", (tArray) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Esper"].setTelepathyArray(tArray, obj);

    //console.log(obj.rO.roles["Esper"].telepathyArray);

    socket.emit("Add System Message",
      {
        type: "power",
        message: "For night " + obj.rD.missionNo + " you will telepathically " 
        + "communicate with: " + formatArrayIntoString(tArray)
      }
    ); //end socket.emit()

    MessageNotificationStack(obj);


  }); //end socket.on("Telepathy Choices")


  socket.on("Headache Charge", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var currentHCharge = obj.rO.roles["Esper"].chargeUpHeadache();

    socket.emit("Add System Message",
      {
        type: "power",
        message: ("Your current headache charge is: " + currentHCharge)
      }
    ); //end socket.emit()
 

  }); //end socket.on("Headache Charge")


  socket.on("Activate Psybomb", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Esper"].activatePsybomb(obj);

    MessageNotificationStack(obj);

  });


  socket.on("Receive Esper Messages", (message) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    var esperRef = obj.rO.roles["Esper"];

    var eMessObj = esperRef.convertEsperMessage(message, obj);

    
    var telepathyArr = esperRef.telepathyArray;
    var telepathArrLength = telepathyArr.length;

    for (var i = 0; i < telepathArrLength; i++) {

      if (telepathyArr[i].role == "Esper") {

        io.to(`${esperRef.socketID}`).
          emit("Receive Esper Chat Messages", eMessObj.esperMessage);
      
      } else {

        io.to(`${telepathyArr[i].socketID}`).
          emit("Receive Esper Chat Messages", eMessObj.othersMessage);
      
      };


    }; //end for

  

  }); //end socket.on("Receive Esper Messages");



  //Jailer

  socket.on("Jail A Player", (_jailedName) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Jailer"].jailPlayer(_jailedName);

    //console.log(obj.rO.roles["Jailer"].jailedPlayer);

  });


  socket.on("Execute A Player", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Jailer"].executeAPlayer(name);


  });




  //Sensor

  socket.on("Individual Scan", (pToScan) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Sensor"].scanOne(pToScan, obj);

    MessageNotificationStack(obj);

  });


  socket.on("Scan All For One Status", (whichStatus) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Sensor"].scanAll(whichStatus, obj);

    MessageNotificationStack(obj);

  });



  socket.on("Send Test Results", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Sensor"].testResults(name, obj);

    MessageNotificationStack(obj);

  });





  //Ranger
  socket.on("Anti-Magic Ray", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Ranger"].antiMagicRay(name, obj);

    console.log("Status for " + name + " after anti-magic ray.");
    console.log(obj.pA[obj.pT[name]]);

  });


  socket.on("Shrink Ray", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };


    obj.rO.roles["Ranger"].setShrinkTarget(name, obj);

    console.log("shrink ray target: " 
      + obj.rO.roles["Ranger"].
      powersHistory[obj.rD.missionNo].shrinkName);

  });



  //Scientist
  socket.on("Scientist Will Expose Everyone's Votes", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };
  
    obj.rO.roles["Scientist"].activateAndNotifyVotesWillBeExposed(obj);

    MessageNotificationStack(obj);

  });


  socket.on("Set Hypothesis", (hypothesis) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };   

    obj.rO.roles["Scientist"].setHypothesis(hypothesis);

    //console.log(obj.rO.roles["Scientist"].hypothesis);

  });




  /*Villains Powers*/


  //Umbra Lord
  socket.on("Corruption", (_name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Umbra Lord"].corrupt(_name, obj);

    console.log("Corrupt status: " + obj.pA[obj.pT[_name]].corrupted);

  });


  socket.on("Charge Up Bide", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Umbra Lord"].bidePower(obj);

    MessageNotificationStack(obj);

  });


  socket.on("Meteor Blast", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Umbra Lord"].activateMeteor();   


  });



  //Hecate
  socket.on("Exchange of the Spirits", (namesArr) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Hecate"].exchangeOfTheSpirits(
      namesArr[0], namesArr[1], obj);

  });


  socket.on("Multiplication Magic", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Hecate"].setMultiplierTarget(name, obj)

    obj.rO.roles["Hecate"].multiplication(obj);

    MessageNotificationStack(obj);

  });


  //Delayer
  socket.on("Stall A Player's Vote", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Delayer"].stall(name, obj);

    MessageNotificationStack(obj);

  });



  //Noah
  socket.on("Activate Hurricane", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Noah"].activateHurricane();

    console.log("Hurricane is: " + obj.rO.roles["Noah"].hurricane);

  });


  socket.on("Use Thunder Wave", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Noah"].setThunderWave(name, obj);

    /*
    console.log(obj.rO.roles["Noah"].
      powersHistory[obj.rD.missionNo].paralyzed);
    
    */
  });



  socket.on("Use Ice Punch", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Noah"].setIcePunch(name, obj);

    /*
    console.log(obj.rO.roles["Noah"].
      powersHistory[obj.rD.missionNo].frozen);
    */
  });



  socket.on("Cast Nightmare Syndrome", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Noah"].setNightmareSyndrome(name, obj);

    /*console.log("Zombie target is: " + obj.rO.roles["Noah"].
      powersHistory[obj.rD.missionNo].zombie);*/

  });





  //Bomberman AKA Mr. Sun Fun
  socket.on("Plant Flame Seal Bomb", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Bomberman"].setBombTarget(name, obj);

  });


  socket.on("Fire Punch A Player", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Bomberman"].setfirePunchTarget(name, obj);

  });


  //Lieutenant Blitz
  socket.on("United States of Smash", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Lieutenant Blitz"].setUnitedStatesOfSmashTarget(name, obj);

    console.log(obj.rO.roles["Lieutenant Blitz"].powersHistory[obj.rD.missionNo]["USOS"]);


  });



  //Persequor

  socket.on("Copycat a Vote", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Persequor"].copyCat(name);

    console.log(obj.rO.roles["Persequor"].personVoteToCopy);


  });


  socket.on("Activate Identity Theft", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };

    obj.rO.roles["Persequor"].activateIdentityTheft(obj);

    console.log(obj.rO.roles["Persequor"].powersHistory[obj.rD.missionNo].switchedName);

  });





  //Reverser
  socket.on("Activate Mirror World", (mwType) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 
    if (obj.rO.roles["Reverser"].wasMirrorWorldAlreadyUsed(mwType)) { return 0; };

    obj.rO.roles["Reverser"].activateMirrorWorld(mwType);
 
    emitToAllSocketsInRoom(obj, "Mirror World Activated");

  });



  socket.on("Reverse Vote", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Reverser"].reverseVote(name);

    console.log("Reverse Vote of: " + obj.rO.roles["Reverser"].personToReverseVote);

  });






  //Backstabber

  socket.on("Activate Backstab Switch", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Backstabber"].backstab();


  });


  socket.on("Mark A Man", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Backstabber"].markAMan(name, obj);

  });


  socket.on("Assassinate!", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Backstabber"].assassinate(name, obj);
    
  });




  //Spiritualist
  socket.on("Mark Player's Soul Sea", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Spiritualist"].markAPlayer(name, obj);

    console.log("Soul Mark target: " + obj.rO.roles["Spiritualist"].powersHistory[obj.rD.missionNo].soulMark);

  });


  socket.on("Scan Player's Soul Sea", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    //2 element array of 2 roles: 1 actual, 1 fake
    var roleArr = obj.rO.roles["Spiritualist"].soulScan(name, obj);

    var ssMess = {
                  type: "power",
                  message: ("You scanned " + name
                  + "'s soul. His/her potential role(s): "
                  + formatArrayIntoString(roleArr) + ".")
                 };

    socket.emit("Add System Message", ssMess);
           
  });




  //Baby Doll
  socket.on("Sing", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Baby Doll"].setSingTarget(name, obj);

    //console.log("Sing target: " + obj.rO.roles["Baby Doll"].powersHistory[obj.rD.missionNo]["sing"]);

  });


  socket.on("Activate Lullaby", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Baby Doll"].activateLullaby(obj);

    MessageNotificationStack(obj);

    //console.log("Lullaby status: " + obj.rO.roles["Baby Doll"].lullabyPowerUsed);

  });


  socket.on("Activate Perish Song", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Baby Doll"].
    activatePerishSong(obj.rD.missionTeam, obj);

    MessageNotificationStack(obj);

  });



  //Toxiturtle
  socket.on("Poison Beak", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Toxiturtle"].poisonBeak(name, obj);

    //console.log(obj.pA[obj.pT[name]].poisonCount);

  });



  socket.on("Toxiturtle Glare", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; };     

    obj.rO.roles["Toxiturtle"].glare(name, obj);

    //console.log(obj.rO.roles["Toxiturtle"].powersHistoryGlare);


  });




  //Psychologist
  socket.on("Submit Predicted Team", (pTeamArr) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Psychologist"].setPredictionArray(pTeamArr, obj);

  });



  socket.on("Pistanthrophobia", (arr) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    var mixedNames = obj.rO.roles["Psychologist"].revealOneBadOneGoodPlayer(arr);

    var pMess = {
                  type: "power",
                  message: ("The psychologist has revealed that "
                  + formatArrayIntoString(arr)
                  + " are on opposite teams!")
                };


    emitToAllSocketsInRoom(obj, 
                           "Psychologist Message", 
                           pMess
                          );

  });



  socket.on("Activate D.I.D.", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    var mixedRoles = obj.rO.roles["Psychologist"].revealOnePlayersRole(name, obj);
    
    var dMess = {
                  type: "power",
                  message: ("The psychologist has revealed "
                    + name + "'s potential roles: "
                    + formatArrayIntoString(mixedRoles)
                    + ".")
                };


    emitToAllSocketsInRoom(obj, 
                           "Psychologist Message", 
                           dMess
                          );

  });




  //Kaguya

  socket.on("Dark Destiny", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Kaguya"].addDarkDestinyTarget(name, obj);

    MessageNotificationStack(obj);

  });




  socket.on("Use Sweet Charm", (name) => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Kaguya"].setSweetCharmTarget(name, obj);

    //console.log("Sweet Charm Target is: " + obj.rO.roles["Kaguya"].powersHistory[obj.rD.missionNo]["sweetCharm"]);


  });


  socket.on("Activate Moonblast", () => {

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.rO.roles["Kaguya"].activateMoonblast(obj);

    MessageNotificationStack(obj);

  });





  socket.on("disconnect", () => {

    console.log(socket.id + " disconnected!");

    var obj = Controller.returnpArrayRoomAndIndex(socket);
    if (!obj.pA) { return 0; }; 

    obj.pA.splice(obj.index, 1);

    if (obj.pA.length == 0) {

      Controller.resetEverythingWhenTestingRoomEmpty(obj);

    };


  });




}); //end of io.on curly braces






function emitToAllSocketsInRoom(obj, _destination, _data = "") {

  for (var i = 0; i < obj.pA.length; i++) {
    
    if (obj.pA[i].connected) {
      io.to(`${obj.pA[i].socketID}`).emit(_destination, _data);
    }; //end if
    
  }; //end for

}; //end emitToAllSocketsInRoom



function emitToTeamLeaderChoosingTeam(obj, data) {

  for (var i = 0; i < obj.pA.length; i++) {

    io.to(`${obj.pA[i].socketID}`).emit(
      "Start Game Phase 2: Team Leader Choosing A Team", data);

  }; //end for

  /*
  for (var i = 0; i < obj.pA.length; i++) {

    if (obj.pA[i].isTeamLeader) {
      io.to(`${obj.pA[i].socketID}`).emit("You Are Team Leader", data);
    } else {
      io.to(`${obj.pA[i].socketID}`).emit("Wait While Team Leader Chooses Team", data);
    };

  }; //end for
  */

}; //end emitToTeamLeaderChoosingTeam




function emitStartPowerPhase2(obj) {

    for (let i = 0; i < obj.pA.length; i++) {

      io.to(`${obj.pA[i].socketID}`).emit(
      "Start Game Phase 5: Power Phase 2");

    }; //end for

}; //end emitStartPowerPhase2

/*
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
*/


function emitStartMission(obj) {

    for (let i = 0; i < obj.pA.length; i++) {

      if (obj.pA[i].selectedForMission) {

        io.to(`${obj.pA[i].socketID}`).emit(
        "Start Game Phase 6: Start Mission");

      };

    }; //end for

}; //end emitStartMission



function emitToStartGamePhase9(obj) {

  var _villainListArr = obj.rO.getVillainsIdentities();

  for (var i = 0; i < obj.pA.length; i++) {

    io.to(`${obj.pA[i].socketID}`).emit(
      "Start Game Phase 9: Heroes Win! Villains' Last Chance.", 
      _villainListArr
    );

  }; //end for


}; //end emitToStartGamePhase9(obj)




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



/*
The reason we need this function is because cannot pass io 
object into other files by export/import or as a function
argument. So can only do "socket.emit" but not "io.to" emits.

stack (s) is an array of message objects, with similar forms of:
  {
    "type": "everyone" or "multiplier notification" or "etc.",
    "socketID": 
    "destination": "Update Powers", 
    "data": 35
  }


function MessageNotificationStack(obj) {

  console.log("function: what is stack");
  console.log(obj.stack);

  for (var i = 0; i < obj.stack.length; i++) {

    switch (obj.stack[i].type) {

      case "Individual":

        io.to(`${obj.stack[i].socketID}`).emit(
          obj.stack[i].destination, 
          obj.stack[i].data);

        break;


      default:
        return 0;

    }; //end switch

  }; //end for

  obj.stack = []; //reset after sending out messages

  console.log("function: set stack to empty");
  console.log(obj.stack);

}; //end MessageNotification Stack
*/

function MessageNotificationStack(obj) {

  while (obj.stack.length > 0) {


    switch (obj.stack[0].type) {

      case "Individual":

        io.to(`${obj.stack[0].socketID}`).emit(
          obj.stack[0].destination, 
          obj.stack[0].data);

        break;


      case "Everyone":

        for (var i = 0; i < obj.pA.length; i++) {

          io.to(`${obj.pA[i].socketID}`).emit(
          obj.stack[0].destination, 
          obj.stack[0].data);

        };

        break;

      //system message individual/single person
      case "SMI":

        io.to(`${obj.stack[0].socketID}`).emit(
          "Add System Message", 
          obj.stack[0].data);

        break;


      //system message everyone
      case "SME":

        for (var i = 0; i < obj.pA.length; i++) {

            io.to(`${obj.pA[i].socketID}`).emit(
            "Add System Message", 
            obj.stack[0].data);

        };

        break;

      //system message everyone music
      case "SME Music":

        for (var i = 0; i < obj.pA.length; i++) {

            io.to(`${obj.pA[i].socketID}`).emit(
            "Add System Message Music", 
            obj.stack[0].data);

        };

        break;


      default:
        return 0;

    }; //end switch


    obj.stack.splice(0, 1);

  }; //end while


}; //end MessageNotification Stack




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











