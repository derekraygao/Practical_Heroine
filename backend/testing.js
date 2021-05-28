

var express = require('express');
var app = express();


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





var myClass = require('./src/Controller.js');

var Controller = new myClass.Controller();

//console.log(Controller);

Controller.addPlayerToArray("Derek", "DerekID", "testing", false);
Controller.addPlayerToArray("Cloud", "CloudID", "testing", false);
Controller.addPlayerToArray("Serena", "SerenaID", "testing", false);
Controller.addPlayerToArray("Lucio", "LucioID", "testing", false);
Controller.addPlayerToArray("Xing", "XingID", "testing", false);

var obj = Controller.returnpArrayRoomAndIndex({id: "DerekID"});

Controller.assignPlayersTheirRoles(obj);


Controller.roomsData["testing"].missionNo = 1;
Controller.roomsData["testing"].teamLeaderIndex = 1;

//console.log(obj.rO.rolesInGame);
//console.log(obj.pA);


Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
Controller.setPlayersForMission(obj);


Controller.addTeamVote(obj, 0, 3);
Controller.addTeamVote(obj, 1, null);
Controller.addTeamVote(obj, 2, -3);
Controller.addTeamVote(obj, 3, 1);
Controller.addTeamVote(obj, 4, 1);
//output 2
console.log(Controller.wasTeamAccepted(obj));
//console.log(Controller.teamVoteCalculation(obj));
//console.log(Controller.roomsData["testing"].teamVoteInfo);



/* //test setting of mission votes and if anyone won
setMissionVotes("Success", "Fail", "Fail", "Fail");
console.log(didAnyoneWinTest());
*/



Controller.addMissionVote(obj, 0, null);
Controller.addMissionVote(obj, 1, -2);
Controller.addMissionVote(obj, 2, 1);
Controller.addMissionVote(obj, 3, -4);
Controller.addMissionVote(obj, 4, 2);
//output 0


//console.log("Mission Vote Calcuation Is: " + Controller.missionVoteCalculation(obj));
//console.log(Controller.roomsData["testing"].results.missionInfo[1]);

/* //test seer power
testSeerPower();
*/

/*
//test guessing princess correctly
//players 2,3,4 are villains and should only be counted
//remember need to stop shuffle() in assignRoles, otherwise 1st person is not
//guaranteed to be the princess
addPrincessGuess("Serena", "Lucio", "Derek", "Derek", null);
console.log(Controller.didAllConnectedVillainsGuessOnThePrincessIdentity(obj));

console.log(obj.rO.didVillainsCorrectlyGuessThePrincessIdentity());
*/




function demonLordAbsolutePowerTest() {

	/*
	console.log("");
	Controller.roomsData["testing"].teamVoteInfo = [];

	*/

	Controller.roomsData["testing"].teamLeaderIndex = 0;

	console.log("Used Absolute Vote Yes");
	obj.rO.roles["Umbra Lord"].useAbsoluteTeamYesPower();
	console.log(Controller.wasTeamAccepted(obj));
	console.log(obj.rI.getLatestTeamVotingInfo(1));

	console.log("");
	Controller.roomsData["testing"].teamVoteInfo = [];



	console.log("This should be normal team votes");
	console.log(Controller.wasTeamAccepted(obj));
	console.log(obj.rI.getLatestTeamVotingInfo(1));

	console.log("");
	Controller.roomsData["testing"].teamVoteInfo = [];



	console.log("Used Absolute Vote No");
	obj.rO.roles["Umbra Lord"].useAbsoluteTeamNoPower();
	console.log(Controller.wasTeamAccepted(obj));
	console.log(obj.rI.getLatestTeamVotingInfo(1));

	console.log("");
	Controller.roomsData["testing"].teamVoteInfo = [];



	console.log("This should be normal team votes");
	console.log(Controller.wasTeamAccepted(obj));
	console.log(obj.rI.getLatestTeamVotingInfo(1));

};









function getIdentitiesTest() {

	console.log("Villain Identities Are: ");
	console.log(obj.rO.getVillainsIdentities());

	console.log("Villain Identities For Princess Are: ");
	console.log(obj.rO.getVillainsIdentitiesForPrincess());

	console.log("Princess Identity Is: ");
	console.log(obj.rO.getPrincessIdentity());

	console.log("Princess Identity For Marcus Is (Could Include Ditto): ");
	console.log(obj.rO.getPrincessIdentityArrayForMarcus());



};



function setMissionVotes(vote1, vote2, vote3, vote4, vote5) {

	Controller.setPlayerMissionVote(vote1, obj);

	obj = Controller.returnpArrayRoomAndIndex({id: "CloudID"});
	Controller.setPlayerMissionVote(vote2, obj);

	obj = Controller.returnpArrayRoomAndIndex({id: "SerenaID"});
	Controller.setPlayerMissionVote(vote3, obj);

	obj = Controller.returnpArrayRoomAndIndex({id: "LucioID"});
	Controller.setPlayerMissionVote(vote4, obj);

	obj = Controller.returnpArrayRoomAndIndex({id: "XingID"});
	Controller.setPlayerMissionVote(vote5, obj);

	obj = Controller.returnpArrayRoomAndIndex({id: "DerekID"});

};


function addPrincessGuess(guess1, guess2, guess3, guess4, guess5) {

	obj.rO.addPrincessGuessForVillain(obj, guess1);

	obj = Controller.returnpArrayRoomAndIndex({id: "CloudID"});
	obj.rO.addPrincessGuessForVillain(obj, guess2);

	obj = Controller.returnpArrayRoomAndIndex({id: "SerenaID"});
	obj.rO.addPrincessGuessForVillain(obj, guess3);

	obj = Controller.returnpArrayRoomAndIndex({id: "LucioID"});
	obj.rO.addPrincessGuessForVillain(obj, guess4);

	obj = Controller.returnpArrayRoomAndIndex({id: "XingID"});
	obj.rO.addPrincessGuessForVillain(obj, guess5);


	obj = Controller.returnpArrayRoomAndIndex({id: "DerekID"});


};




//console.log(didAnyoneWinTest());

/* testing didAnyoneWin() */

function didAnyoneWinTest() {

Controller.roomsData["testing"].missionNo = 1;
console.log("Mission Vote Total is: " + Controller.missionVoteCalculation(obj));

Controller.roomsData["testing"].missionNo = 2;
console.log("Mission Vote Total is: " + Controller.missionVoteCalculation(obj));

Controller.roomsData["testing"].missionNo = 3;
console.log("Mission Vote Total is: " + Controller.missionVoteCalculation(obj));

Controller.roomsData["testing"].missionNo = 4;
console.log("Mission Vote Total is: " + Controller.missionVoteCalculation(obj));

return (Controller.roomsData["testing"].results.didAnyoneWin(3));

};


function getLatestTeamAndMisionInfoTest() {

	console.log(obj.rI.getLatestTeamVotingAllInfo(1));

	console.log(obj.rI.getLatestMissionInfo(obj));

};


function testSeerPower() {

	console.log("Testing Seer Power on Princess Role");
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));

	console.log("Testing Seer Power on Umbra Lord Role");
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));	
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));


	obj.pA[0].devilized = true;
	obj.pA[0].soulMark = true;

	obj.pA[1].shrinkCount = 2;
	obj.pA[1].multiplier = 4;

	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));

	obj.rD.missionNo = 7;
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));

	obj.rD.missionNo = 1;

};



/*console.log(Controller.roomsData["testing"].teamVoteInfo);

console.log(Controller.missionVoteCalculation(obj));
console.log(Controller.roomsData["testing"].missionVoteInfo);
*/