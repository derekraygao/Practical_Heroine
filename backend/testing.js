

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

var {AbilityManager} = require('./src/AbilityManager.js');
var AbilityManager = new AbilityManager();

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


var princess = obj.rO.roles["Princess"];
var saintess = obj.rO.roles["Saintess"];
var marcus = obj.rO.roles["Marcus"];
var scientist = obj.rO.roles["Scientist"];
var jailer = obj.rO.roles["Jailer"];
var pear = obj.rO.roles["Pear"];
var lottie = obj.rO.roles["Lottie"];
var lan = obj.rO.roles["Lan"];
var seer = obj.rO.roles["Seer"];
var aura = obj.rO.roles["Aura Knight"];
var oracle = obj.rO.roles["Oracle"];
var detective = obj.rO.roles["Detective"];
var ranger = obj.rO.roles["Ranger"];
	
var umbraLord = obj.rO.roles["Umbra Lord"];
var kaguya = obj.rO.roles["Kaguya"];
var noah = obj.rO.roles["Noah"];
var delayer = obj.rO.roles["Delayer"];
var backstabber = obj.rO.roles["Backstabber"];
var persequor = obj.rO.roles["Persequor"];


//console.log(obj.rO.rolesInGame);
//console.log(obj.pA);

/*
Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
Controller.setPlayersForMission(obj);
*/
/*
Controller.addTeamVote(obj, 0, 3);
Controller.addTeamVote(obj, 1, null);
Controller.addTeamVote(obj, 2, -3);
Controller.addTeamVote(obj, 3, 1);
Controller.addTeamVote(obj, 4, 1);
//output 2

*/
//console.log(Controller.wasTeamAccepted(obj));
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


//console.log(obj.rO.rolesInGame);
rolesInGame();







function demonLordAbsolutePowerTest() {

	/*
	console.log("");
	Controller.roomsData["testing"].teamVoteInfo = [];

	*/

	Controller.roomsData["testing"].teamLeaderIndex = 0;

	console.log("Used Absolute Vote Yes");
	obj.rO.roles["Umbra Lord"].useAbsoluteTeamYesPower(obj);
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
	obj.rO.roles["Umbra Lord"].useAbsoluteTeamNoPower(obj);
	console.log(Controller.wasTeamAccepted(obj));
	console.log(obj.rI.getLatestTeamVotingInfo(1));

	console.log("");
	Controller.roomsData["testing"].teamVoteInfo = [];



	console.log("This should be normal team votes");
	console.log(Controller.wasTeamAccepted(obj));
	console.log(obj.rI.getLatestTeamVotingInfo(1));


	console.log("");
	console.log("");

	console.log("Can Absolute Yes Be Used Test");
	console.log("");

	
	obj.rI.addMissionInfo(1, [], 0, 0, 0, "Fail");
	obj.rI.addMissionInfo(2, [], 0, 0, 0, "Fail");
	obj.rI.addMissionInfo(3, [], 0, 0, 0, "Success");
	obj.rI.addMissionInfo(4, [], 0, 0, 0, "Fail");

	obj.rD.missionNo = 5;
	console.log("Can Absolute Yes Be Used: " + obj.rI.canAbsoluteYesBeUsed(obj));

	console.log("");
	console.log("Kaguya Dark Destiny is 2");
	kaguya.darkDestinyCount = 2;

	console.log("Can Absolute Yes Be Used, Kaguya: " + obj.rI.canAbsoluteYesBeUsed(obj));
};

//demonLordAbsolutePowerTest();



function testUmbraLordPowers() {


	obj.pA[3].role = "Saintess";


	console.log("Lucio role is Saintess and devilized should be false: " 
		+ obj.pA[3].devilized);

	console.log("Derek role is non-Saintess and devilized should be false: " 
		+ obj.pA[3].devilized);

	obj.rO.roles["Umbra Lord"].devilConversion("Lucio", obj);
	obj.rO.roles["Umbra Lord"].devilConversion("Derek", obj);

	console.log("After devil conversion power");
	console.log("Derek devilized is " + obj.pA[0].devilized);
	console.log("Lucio devilized is: " + obj.pA[3].devilized);

	console.log("Used meteor, vote should be -5");
	console.log(obj.rO.roles["Umbra Lord"].meteor(-1));
	console.log("bide should now be 0, bide is: " 
		+ obj.rO.roles["Umbra Lord"].bide);

};


function testUmbraLordBideMeteor() {

	console.log("Testing Umbra Lord Bide & Meteor");

	var umbraLord = obj.rO.roles["Umbra Lord"];

	Controller.addMissionVote(obj, obj.pT["Derek"], -1); //Derek
	Controller.addMissionVote(obj, obj.pT["Cloud"], -1); //Cloud
	Controller.addMissionVote(obj, obj.pT["Serena"], 0); //Serena
	Controller.addMissionVote(obj, obj.pT["Lucio"], -8); //Lucio
	Controller.addMissionVote(obj, obj.pT["Xing"], -5); //Xing	

	Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
	Controller.setPlayersForMission(obj);

	umbraLord.bidePower(obj);
	umbraLord.bidePower(obj);

	//umbraLord.activateMeteor();

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.addMissionVote(obj, obj.pT["Cloud"], -1); //Cloud

	umbraLord.activateMeteor();

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.addMissionVote(obj, obj.pT["Cloud"], -1); //Cloud
	umbraLord.bidePower(obj);
	umbraLord.activateMeteor();
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));
	
};

//testUmbraLordBideMeteor();





function testUmbraLordIf2FailuresThenAbsoluteYesDoesNotWork() {

	Controller.addMissionVote(obj, obj.pT["Derek"], -1); //Derek
	Controller.addMissionVote(obj, obj.pT["Cloud"], -4); //Cloud
	Controller.addMissionVote(obj, obj.pT["Serena"], 3); //Serena
	Controller.addMissionVote(obj, obj.pT["Lucio"], -8); //Lucio
	Controller.addMissionVote(obj, obj.pT["Xing"], -5); //Xing	

	Controller.setMissionTeam(obj, ["Lucio", "Serena"]);
	Controller.setPlayersForMission(obj);

	obj.rD.missionNo = 1;
	Controller.missionVoteCalculation(obj);

	Controller.addMissionVote(obj, obj.pT["Lucio"], null); //Lucio

	obj.rD.missionNo = 2;
	Controller.missionVoteCalculation(obj);


	obj.rD.missionNo = 3;
	Controller.missionVoteCalculation(obj);

	obj.rD.missionNo = 4;
	Controller.missionVoteCalculation(obj);

	Controller.addMissionVote(obj, obj.pT["Lucio"], -7); //Lucio

	obj.rD.missionNo = 5;
	Controller.missionVoteCalculation(obj);

	console.log(obj.rI.missionInfo);

	console.log("Did Evil Win Two Missions");
	console.log(obj.rI.didEvilWinTwoMissions());


	


};

//testUmbraLordIf2FailuresThenAbsoluteYesDoesNotWork();




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


function showAllMissionVotes() {

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + " mission vote is: "
			+ obj.pA[i].missionVote);

	};

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

Controller.addMissionVote(obj, obj.pT["Derek"], -1); //Derek
Controller.addMissionVote(obj, obj.pT["Cloud"], -4); //Cloud
Controller.addMissionVote(obj, obj.pT["Serena"], 3); //Serena
Controller.addMissionVote(obj, obj.pT["Lucio"], 0); //Lucio
Controller.addMissionVote(obj, obj.pT["Xing"], -5); //Xing	

Controller.setMissionTeam(obj, ["Lucio", "Serena"]);
Controller.setPlayersForMission(obj);

Controller.roomsData["testing"].missionNo = 1;
console.log("Mission " + obj.rD.missionNo + " Vote Total is: " + Controller.missionVoteCalculation(obj));
	

Controller.addMissionVote(obj, obj.pT["Serena"], -5); //Serena	
Controller.roomsData["testing"].missionNo = 2;
console.log("Mission " + obj.rD.missionNo + " Vote Total is: " + Controller.missionVoteCalculation(obj));
	
//Controller.addMissionVote(obj, obj.pT["Serena"], -3); //Serena
Controller.roomsData["testing"].missionNo = 3;
console.log("Mission " + obj.rD.missionNo + " Vote Total is: " + Controller.missionVoteCalculation(obj));

//Controller.addMissionVote(obj, obj.pT["Serena"], 6); //Serena
Controller.roomsData["testing"].missionNo = 4;
console.log("Mission " + obj.rD.missionNo + " Vote Total is: " + Controller.missionVoteCalculation(obj));

Controller.addMissionVote(obj, obj.pT["Serena"], 6); //Serena
Controller.roomsData["testing"].missionNo = 5;
console.log("Mission " + obj.rD.missionNo + " Vote Total is: " + Controller.missionVoteCalculation(obj));

Controller.roomsData["testing"].missionNo = 6;
console.log("Mission " + obj.rD.missionNo + " Vote Total is: " + Controller.missionVoteCalculation(obj));


console.log(obj.rI.missionInfo);

return (Controller.roomsData["testing"].results.didAnyoneWin(4));

};

//console.log(didAnyoneWinTest());


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
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));	
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));

	obj.pA[0].devilized = true;
	obj.pA[0].soulMark = true;

	obj.pA[1].shrinkCount = 2;
	obj.pA[1].multiplier = 4;

	console.log("");
	console.log("With Status Conditions");
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));

	obj.rD.missionNo = 7;
	console.log(obj.rO.roles["Seer"].scry(obj, "Derek"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Cloud"));

	obj.rD.missionNo = 1;

};


//testSeerPower();


function rolesInGame() {

	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {
		console.log("Name: " + obj.rO.rolesInGame[i].name 
			+ ", " + "Role: " + obj.rO.rolesInGame[i].role
			+ ", " + "Index: " + i);

		console.log("");
	};

}; //end rolesInGame();


function testPrincessPower() {

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "corrupted", obj));
	console.log("");
	
	console.log(obj.rO.roles["Princess"].EONotification("Derek", "bomb", obj));
	console.log("");
	
	console.log(obj.rO.roles["Princess"].EONotification("Derek", "burn", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "soul mark", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "paralyzed", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "multiplier", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification(["Derek", "Serena"], "exchange", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "shrink", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "anti-magic ray", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "bless", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "safeguard", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "purify", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "esuna", obj));
	console.log("");

	console.log(obj.rO.roles["Princess"].EONotification("Derek", "dispel", obj));
	console.log("");


};


//testPrincessPower();


function testEoSensePower() {

		console.log("Testing Eo Sense Power");

		obj.pA[0].corrupted = true;
		obj.pA[0].bomb = true
		obj.pA[0].burnCount = 2
		obj.pA[0].soulMark = true
		obj.pA[0].shrinkCount = 2;
		obj.pA[0].multiplier = 3;
		obj.pA[0].injuredCount = 2;
		obj.pA[0].entranced = true;
		obj.pA[0].confused = true;
		obj.pA[0].markedMan = true;
		obj.pA[0].slow = true;
		obj.pA[0].slowCharge = -5;
		obj.pA[0].zombie = "zombie";
		obj.pA[1].zombie = "recovered";
		obj.pA[0].paralyzed = true;
		obj.pA[0].frozen = true;

		obj.pA[0].boost = 3;

		obj.pA[0].safeguard = true;
		obj.pA[0].bless = true;
		obj.pA[0].heartacheDefense = true;
		obj.pA[0].therapy = true;
		obj.pA[0].groupHug = true;

		obj.rO.roles["Saintess"].curagaBoostTarget = "Xing";

		console.log(princess.updateEoSenseArray(obj));


};

//testEoSensePower();




function testStarPracticalPowers() {

	console.log("Test Star Practical Powers");

	obj.index = 0;
	
	Controller.addMissionVote(obj, 0, 1); //Derek Star Practical //0
	Controller.setPlayerMissionVote("Starlight Shuriken", obj);

	//Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	//Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Derek", "Lucio", "Serena"]);
	Controller.setPlayersForMission(obj);

	console.log("With Starlight Shuriken (+3), mission vote total should be: 5");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	//Controller.addMissionVote(obj, 4, -2); //Xing //4

	princess.setHeartacheDefenseTarget("Serena");
	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("With Heartache Defense, mission vote total should be: 8");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	obj.pA[0].corrupted = true;
	obj.pA[0].bomb = true
	obj.pA[0].burnCount = 2
	obj.pA[0].soulMark = true
	obj.pA[0].shrinkCount = 2;
	obj.pA[0].multiplier = 3;
	obj.pA[0].injuredCount = 2;
	obj.pA[0].entranced = true;
	obj.pA[0].confused = true;
	obj.pA[0].markedMan = true;
	obj.pA[0].slow = true;
	obj.pA[0].slowCharge = -5;
	obj.pA[0].zombie = "zombie";
	obj.pA[1].zombie = "recovered";
	obj.pA[0].paralyzed = true;
	obj.pA[0].frozen = true;
	
	princess.starHealingActivation("Derek", obj);

	//console.log(obj.pA[0]);

	obj.rO.roles["Delayer"].delayerCount = 4;
	console.log("delayer count BEFORE healing is: " + obj.rO.roles["Delayer"].delayerCount);

	princess.starHealingActivation("Xing", obj);
	console.log("delayer count AFTER healing is: " + obj.rO.roles["Delayer"].delayerCount);

	
	princess.starPrismPower(obj);

	obj.rD.missionNo = 2;

	Controller.addTeamVote(obj, 0, 3); //Derek
	Controller.addTeamVote(obj, 1, null); //Cloud
	Controller.addTeamVote(obj, 2, -3); //Serena
	Controller.addTeamVote(obj, 3, -1); //Lucio
	Controller.addTeamVote(obj, 4, -1); //Xing
	
	console.log(Controller.wasTeamAccepted(obj));
	//console.log(Controller.teamVoteCalculation(obj));
	console.log(Controller.roomsData["testing"].teamVoteInfo);

};


//testStarPracticalPowers();





function testOraclePower() {

	console.log("1 AND 1");
	console.log(obj.rO.roles["Oracle"].prophesize("1 AND 1", obj));
	console.log("");

	console.log("At Least 1 Good");
	console.log(obj.rO.roles["Oracle"].prophesize("At Least 1 Good", obj));
	console.log("");

	console.log("At Least 1 Good & Evil");
	console.log(obj.rO.roles["Oracle"].prophesize("At Least 1 Evil & Good", obj));
	console.log("");

	console.log("Princess");
	console.log(obj.rO.roles["Oracle"].prophesize("Princess", obj));
	console.log("");

	console.log("Roles");
	console.log(obj.rO.roles["Oracle"].prophesize("Roles", obj));
	console.log("");

	console.log("Nothing Test");
	console.log(obj.rO.roles["Oracle"].prophesize("None", obj));


	console.log("Light and Dark Test");
	obj.rO.roles["Oracle"].lightAndDark("Serena", obj);
	obj.rO.roles["Oracle"].lightAndDark("Serena", obj);
	obj.rO.roles["Oracle"].lightAndDark("Serena", obj);

	obj.rO.roles["Oracle"].lightAndDark("Cloud", obj);

};


//testOraclePower();


function testOracleLuciniteGuess() {

	console.log("Testing Oracle's Lucinite Guess");

	Controller.addMissionVote(obj, 0, 0); //Derek Princess
	Controller.addMissionVote(obj, 1, -1); //Cloud Umbra Lord
	Controller.addMissionVote(obj, 2, 3); //Serena Ranger
	Controller.addMissionVote(obj, 3, 0); //Lucio Persequor
	Controller.addMissionVote(obj, 4, 2); //Xing Baby Doll


	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	oracle.setLuciniteGuess(2);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	Controller.addMissionVote(obj, 0, 0); //Derek Princess
	Controller.addMissionVote(obj, 2, 3); //Serena Ranger
	Controller.addMissionVote(obj, 3, 0); //Lucio Persequor

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

};


//testOracleLuciniteGuess();





function testBalancerPower() {

	console.log("Testinging Balancer Powers");

	var balancer = obj.rO.roles["Balancer"];

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 0); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, 0); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	balancer.setEquilibriumArray(["Derek", "Lucio"]);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	console.log("");
	console.log("Equilibrium Array should be reset at this point");

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, 2); //Lucio

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	console.log(obj.rO.roles["Balancer"].mysticScales("Serena", "Xing", obj));
};


//testBalancerPower()




function logMissionVotes() {

	for (var i = 0; i < obj.pA.length; i++) {
		console.log(obj.pA[i].name + "'s Mission Vote is: " + obj.pA[i].missionVote);
	};

};


function testDetectiveChatPower(name) {


	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, null); //Derek
	Controller.addMissionVote(obj, 1, 0); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Cloud", "Serena"]);

	console.log(Controller.missionVoteCalculation(obj));

	//must increment missionNo here, since you are checking for LAST mission
	obj.rD.missionNo = 2;
	console.log("Detective Chat Power for Mission 1, " 
		+ name + "'s vote is: " + obj.rO.roles["Detective Chat"].investigate(name, obj));

	
	console.log(obj.rI.missionInfo[1].votingArray);

	Controller.addMissionVote(obj, 1, -6); //Cloud
	Controller.addMissionVote(obj, 2, -2); //Serena

	Controller.missionVoteCalculation(obj);


	obj.rD.missionNo = 3;
	console.log("Detective Chat Power for Mission 2, " 
		+ name + "'s vote is: " + obj.rO.roles["Detective Chat"].investigate(name, obj));


};


function testDetectiveChatInterrogate() {

	obj.rD.missionNo = 1;

	var detective = obj.rO.roles["Detective Chat"];

	console.log("Testing Detective Chat Interrogate Powers");

	obj.rI.addMissionVoteType("Derek", "Success", obj.rD.missionNo);
	obj.rI.addMissionVoteType("Cloud", "Fail", obj.rD.missionNo);
	obj.rI.addMissionVoteType("Serena", "Fail", obj.rD.missionNo);
	obj.rI.addMissionVoteType("Lucio", "Success", obj.rD.missionNo);
	obj.rI.addMissionVoteType("Xing", "Power", obj.rD.missionNo);

	detective.setInterrogationTarget("Xing");

	AbilityManager.updateStatuses(obj);



};

//testDetectiveChatInterrogate();






function testAuraKnightPower(name) {


	console.log(obj.rO.roles["Aura Knight"].readAura(name, obj));

		obj.pA[3].corrupted = true;
		obj.pA[3].bomb = true
		obj.pA[3].burnCount = 2
		obj.pA[3].soulMark = true
		obj.pA[3].shrinkCount = 2;
		obj.pA[3].multiplier = 3;
		obj.pA[3].injuredCount = 2;
		obj.pA[3].entranced = true;
		obj.pA[3].confused = true;
		obj.pA[3].markedMan = true;
		obj.pA[3].slow = true;
		obj.pA[3].slowCharge = -5;
		obj.pA[3].zombie = "zombie";
		obj.pA[3].zombie = "recovered";
		obj.pA[3].paralyzed = true;
		obj.pA[3].frozen = true;
		obj.pA[3].boost = 3;
		obj.pA[3].delayerCount = 2;

	console.log(obj.rO.roles["Aura Knight"].readAura(name, obj));
};

//testAuraKnightPower("Lucio");



function testAuraKnightBoost() {

	console.log("Testing Aura Knight Boost Power");

	Controller.addMissionVote(obj, 0, -2); //Derek
	Controller.addMissionVote(obj, 1, 4); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Xing", "Lucio"]);
	Controller.setPlayersForMission(obj);


	aura.setAuraBoostTarget("Derek", obj);
	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	obj.rD.missionNo = 2;

	Controller.addMissionVote(obj, 0, 0); //Derek
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};

//testAuraKnightBoost();



function testRangerPower(name) {

	console.log(obj.rO.roles["Ranger"].sense(obj));

	console.log("Using shrink ray on: " + name);
	obj.rO.roles["Ranger"].shrinkRay(name, obj);
	console.log(name + " shrink count is : " + obj.pA[obj.pT[name]].shrinkCount);
	
	obj.pA[obj.pT[name]].bomb = true;
	console.log("Putting bomb on: " + name);

	console.log(obj.rO.roles["Ranger"].sense(obj));

	console.log("Using anti magic ray on " + name);
	obj.rO.roles["Ranger"].antiMagicRay(name, obj);

	console.log(obj.pA[obj.pT[name]]);

	console.log(obj.rO.roles["Ranger"].sense(obj));

};



function testRangerSensing() {

	console.log("Test Ranger Sensing & Anti Mana Ray");

		//obj.pA[0].corrupted = true;
		//obj.pA[0].bomb = true
		//obj.pA[0].burnCount = 2
		//obj.pA[0].soulMark = true
		//obj.pA[0].shrinkCount = 2; does not check for this
		//obj.pA[0].multiplier = 2;
		//obj.pA[0].injuredCount = 2;
		//obj.pA[0].entranced = true;
		//obj.pA[0].confused = true;
		//obj.pA[0].markedMan = true;
		//obj.pA[0].slow = true;
		//obj.pA[0].slowCharge = -5;
		//obj.pA[0].zombie = "zombie";
		//obj.pA[0].paralyzed = true;
		//obj.pA[0].frozen = true;

		//obj.pA[0].boost = 2;

		console.log(ranger.sense(obj));



};


//testRangerSensing();


function testRangerAntiManaRay() {

	console.log("Test Ranger Anti Mana Ray");

		//obj.pA[3].name == "Lucio"

		console.log(princess.updateEoSenseArray(obj)[3]);

		obj.pA[3].corrupted = true;
		obj.pA[3].bomb = true
		obj.pA[3].burnCount = 2
		obj.pA[3].soulMark = true
		obj.pA[3].shrinkCount = 2;
		obj.pA[3].multiplier = 3;
		obj.pA[3].injuredCount = 2;
		obj.pA[3].entranced = true;
		obj.pA[3].confused = true;
		obj.pA[3].markedMan = true;
		obj.pA[3].slow = true;
		obj.pA[3].slowCharge = -5;
		obj.pA[3].zombie = "zombie";
		obj.pA[3].zombie = "recovered";
		obj.pA[3].paralyzed = true;
		obj.pA[3].frozen = true;

		obj.pA[3].boost = 3;

		obj.pA[3].safeguard = true;
		obj.pA[3].bless = true;
		obj.pA[3].heartacheDefense = true;
		obj.pA[3].therapy = true;
		obj.pA[3].groupHug = true;

		delayer.delayerCount = 3;
		umbraLord.bide = 3;
		saintess.curagaBoostTarget = "Lucio";

		console.log(princess.updateEoSenseArray(obj)[3]);
		console.log("Delayer Charge is: " + delayer.delayerCount);
		console.log("Umbra Lord Bide is: " + umbraLord.bide);
		console.log("Saintess Curaga Boost Target is: " + saintess.curagaBoostTarget);

		ranger.antiManaRay("Lucio", obj);

		console.log("");
		console.log("After Anti-Mana Ray");
		console.log("");

		console.log(princess.updateEoSenseArray(obj)[3]);
		console.log("");

		console.log("Delayer Charge is: " + delayer.delayerCount);
		console.log("Umbra Lord Bide is: " + umbraLord.bide);
		console.log("Saintess Curaga Boost Target is: " + saintess.curagaBoostTarget);


};


//testRangerAntiManaRay();




function testPearPower() {

	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, null); //Derek
	Controller.addMissionVote(obj, 1, 4); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Cloud", "Serena"]);

	console.log(Controller.missionVoteCalculation(obj));

	obj.rO.roles["Pear"].spyOn("Cloud");

	console.log("Vanish is: " + obj.pA[obj.pT["Cloud"]].invisible);
	obj.rO.roles["Pear"].vanish("Cloud", obj);
	console.log("Vanish after power is: " + obj.pA[obj.pT["Cloud"]].invisible);

	console.log(obj.rO.roles["Pear"].expose(obj));

	//expose should have been reset, so get message of "expose power not used"
	console.log(obj.rO.roles["Pear"].expose(obj));

};



function testPearNatureTelepathy() {

	console.log("Testing Pear's Nature Telepathy!");

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 3); //Serena //2
	Controller.addMissionVote(obj, 3, 5); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek"]);
	Controller.setPlayersForMission(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	obj.rD.missionNo = 2;

	pear.natureTelepathy("Lucio", obj);

};

//testPearNatureTelepathy();





function testScientistPower() {

	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, null); //Derek
	Controller.addMissionVote(obj, 1, 4); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Cloud", "Serena"]);

	console.log(Controller.missionVoteCalculation(obj));

	obj.rO.roles["Scientist"].getIndividualVotes(obj);


	obj.rO.roles["Scientist"].exposeIndividualVotes = true;
	console.log(obj.rO.roles["Scientist"].exposeVotes(obj));
	console.log(obj.rO.roles["Scientist"].exposeVotes(obj));

};


function testScientistHypothesis() {

	console.log("Testing Scientist Hypothesis");

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	//Controller.addMissionVote(obj, 1, -1); //Cloud //1
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 1); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena", "Xing"]);
	Controller.setPlayersForMission(obj);

	scientist.setHypothesis({type: -1, number: 0});

	console.log("Sum without hypothesis should be +1");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.addMissionVote(obj, 0, 1); //Derek //0
	//Controller.addMissionVote(obj, 1, -1); //Cloud //1
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 1); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	console.log("Hypothesis should not re-activate, sum should be +1");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

};

//testScientistHypothesis();







function testEsperPower() {

	obj.rO.roles["Esper"].assignPlayersTheirPseudonyms(obj);

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + " pseudonym is: " 
			+ obj.pA[i].pseudonym + " , role is: " + obj.pA[i].role);

	};

	console.log("Message not coming from Esper");
	console.log(obj.rO.roles["Esper"].convertTelepathMessage(0, "Hello", obj));

	console.log("Message coming from Esper");
	console.log(obj.rO.roles["Esper"].convertTelepathMessage(3, "Hello", obj));

};


function testPsybombPower() {

	console.log("Testing Esper's Psybomb Power");
	console.log("Esper is index 2, Serena");

	var esper = obj.rO.roles["Esper"];

	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, null); //Derek
	Controller.addMissionVote(obj, 1, 4); //Cloud
	Controller.addMissionVote(obj, 2, -1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Serena"]);
	Controller.setPlayersForMission(obj);

	esper.chargeUpHeadache();
	esper.chargeUpHeadache();
	esper.chargeUpHeadache();
	esper.chargeUpHeadache();

	esper.activatePsybomb();

	//AbilityManager.updateStatuses(obj);

	console.log(Controller.missionVoteCalculation(obj));

	console.log("Headache charge should be reset to 0");
	Controller.addMissionVote(obj, 2, 1); //Serena

	
	esper.activatePsybomb();
	console.log(Controller.missionVoteCalculation(obj));

};

//testPsybombPower();






function testSensorPower() {

	obj.pA[0].bomb = true;
	obj.pA[0].burnCount = 1;
	obj.pA[0].soulMark = true;
	obj.pA[0].shrinkCount = 1;
	obj.pA[0].multiplier = 2;
	obj.pA[0].injuredCount = 2;
	obj.pA[0].paralyzed = true;
	obj.pA[0].frozen = true;
	obj.pA[0].confused = true;
	obj.pA[0].entranced = true;
	obj.pA[0].zombie = "zombie";
	obj.pA[0].slowCharge = 3;
	obj.pA[0].markedMan = true;

	obj.pA[1].bomb = true;
	obj.pA[2].slowCharge = -3;
	obj.pA[3].markedMan = true;

	console.log("Scan Individual should have: bomb, burn, soulmark, shrink, multiplier, confused, frozen, paralyzed, entranced, injured, and zombie");
	obj.rO.roles["Sensor"].scanOne(obj.pA[0].name, obj)

	console.log("Scan Individual should have only bomb");
	obj.rO.roles["Sensor"].scanOne(obj.pA[1].name, obj)

	console.log("Scan Individual should have nothing");
	obj.rO.roles["Sensor"].scanOne(obj.pA[2].name, obj);

	obj.rO.roles["Sensor"].scanAll("Marked Man", obj);

	obj.rO.roles["Sensor"].testResults(obj.pA[1].name, obj);

};

//testSensorPower();




function testJailerPower() {

	obj.pA[0].role = "Jailer";

	console.log("Message coming from Jailer");
	console.log(obj.rO.roles["Jailer"].convertJailerMessage(0, "Hello", obj));
	
	console.log("Message coming from Jailed Player");
	console.log(obj.rO.roles["Jailer"].convertJailerMessage(1, "Hello", obj));


};



function testJailerCapitalPunishmentAndJail() {

	console.log("Testing Jailer Capital Punishment");

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	//Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, -2); //Serena //2
	Controller.addMissionVote(obj, 3, 4); //Lucio //3
	//Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	jailer.executeAPlayer("Serena");
	jailer.jailPlayer("Lucio");

	//AbilityManager.updateStatuses(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};

//testJailerCapitalPunishmentAndJail();



function testIchigoPower() {

	//obj.rO.roles["Ichigo"].activateHylianShield();
	//obj.rO.roles["Ichigo"].activateHolyStrike();

	//obj.rO.roles["Pear"].vanish("Serena");
	obj.rO.roles["Persequor"].copyCat("Serena");

	Controller.addMissionVote(obj, 0, -1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, 2); //Lucio
	Controller.addMissionVote(obj, 4, -2); //Xing

	Controller.setMissionTeam(obj, ["Cloud", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	obj.pA[obj.rO.roles["Ichigo"].index].bomb = true;


	console.log("Mission Vote is: ");
	console.log(Controller.missionVoteCalculation(obj));


	console.log("");
	console.log("Now testing status notification");

	//obj.pA[2].role = "Ichigo";

	console.log(obj.rO.roles["Ichigo"].naviNotification("bomb"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("corrupted"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("burn"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("shrink"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("anti-magic ray"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("soul mark"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("paralyzed"));
	console.log(obj.rO.roles["Ichigo"].naviNotification("exchange"));
};


//testIchigoPower();

function testIchigoNaviSense() {

		obj.pA[2].corrupted = true;
		obj.pA[2].bomb = true
		obj.pA[2].burnCount = 2
		obj.pA[2].soulMark = true
		obj.pA[2].shrinkCount = 2;
		obj.pA[2].multiplier = 3;
		obj.pA[2].injuredCount = 2;
		obj.pA[2].entranced = true;
		obj.pA[2].confused = true;
		obj.pA[2].markedMan = true;
		obj.pA[2].slow = true;
		obj.pA[2].slowCharge = -5;
		//obj.pA[2].zombie = "zombie";
		obj.pA[2].zombie = "recovered";
		obj.pA[2].paralyzed = true;
		obj.pA[2].frozen = true;

		obj.pA[2].safeguard = true;
		obj.pA[2].bless = true;
		obj.pA[2].heartacheDefense = true;
		obj.pA[2].therapy = true;
		obj.pA[2].groupHug = true;
		

		console.log(obj.rO.roles["Ichigo"].updateNaviSenseInfo(obj));

};

//testIchigoNaviSense();



function checkStatusConditionForSaintess(playerObject) {

	console.log("For player " + playerObject.name + ", status is: ");

	console.log("corrupted: " + playerObject.corrupted);
	console.log("soul mark: " + playerObject.soulMark);
	console.log("poison count: " + playerObject.poisonCount);
	console.log("bomb: " + playerObject.bomb);
	console.log("burn count: " + playerObject.burnCount);
	console.log("shrink count: " + playerObject.shrinkCount);
	console.log("paralysis: " + playerObject.paralyzed);
	console.log("frozen: " + playerObject.frozen);
	console.log("injured count: " + playerObject.injuredCount);
	console.log("multiplier: " + playerObject.multiplier);
	console.log("boost: " + playerObject.boost);
	console.log("bless: " + playerObject.bless);
	console.log("safeguard: " + playerObject.safeguard);
	console.log("");
	console.log("Curaga boost target name: " + obj.rO.roles["Saintess"].curagaBoostTarget);

};

//checkStatusConditionForSaintess(obj.pA[0]);


function isStatusNormalCheckForSaintess() {

		//obj.pA[0].corrupted = true;
		//obj.pA[0].bomb = true
		//obj.pA[0].burnCount = 2
		//obj.pA[0].soulMark = true
		//obj.pA[0].shrinkCount = 2;
		//obj.pA[0].multiplier = 3;
		//obj.pA[0].boost = 2;
		//obj.pA[0].injuredCount = 2;
		//obj.pA[0].entranced = true;
		//obj.pA[0].confused = true;
		//obj.pA[0].markedMan = true;
		//obj.pA[0].slow = true;
		//obj.pA[0].slowCharge = -5;
		//obj.pA[0].zombie = "zombie";
		//obj.pA[0].zombie = "recovered";
		//obj.pA[0].paralyzed = true;
		//obj.pA[0].frozen = true;

		console.log(obj.rO.roles["Saintess"].isStatusNormal(0, obj));

};

//isStatusNormalCheckForSaintess();



function testSaintessPower() {

	obj.rD.missionNo = 1;
	
	obj.rO.roles["Umbra Lord"].corrupt("Derek", obj);

	obj.pA[0].soulMark = true;
	obj.pA[0].poisonCount = 1;
	obj.pA[0].bomb = true;
	obj.pA[0].burnCount = 1;
	obj.pA[0].paralyzed = true;
	obj.pA[0].frozen = true;
	obj.pA[0].multiplier = 2;
	obj.pA[0].boost = 4;
	obj.pA[0].shrinkCount = 2;
	obj.pA[0].injuredCount = 1;

	//obj.rO.roles["Delayer"].delayerCount = 1;

	console.log(saintess.saintessSense(obj));
	
	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");


	saintess.setSaintessPower({power: "Purify", target: "Derek"}, obj);
	saintess.activateHolyPower(obj);
	console.log("After purify");
	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");

	saintess.setSaintessPower({power: "Esuna", target: "Derek"}, obj);
	saintess.activateHolyPower(obj);
	console.log("After esuna");
	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");
	saintess.setSaintessPower({power: "Curaga", target: "Derek"}, obj);
	saintess.activateHolyPower(obj);
	console.log("After curaga");
	//AbilityManager.updateStatuses(obj);
	checkStatusConditionForSaintess(obj.pA[0]);


	console.log("");
	saintess.setSaintessPower({power: "Dispel", target: "Derek"}, obj);
	saintess.activateHolyPower(obj);
	console.log("After dispel");
	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");
	saintess.setSaintessPower({power: "Bless", target: "Derek"}, obj);
	saintess.activateHolyPower(obj);
	console.log("After bless");
	//AbilityManager.updateStatuses(obj);
	checkStatusConditionForSaintess(obj.pA[0]);

	//obj.pA[0].role = "Umbra Lord"; //should not affect umbra lord

	console.log("");
	saintess.setSaintessPower({power: "Safeguard", target: "Derek"}, obj);
	saintess.activateHolyPower(obj);
	console.log("After safeguard");
	//AbilityManager.updateStatuses(obj);
	checkStatusConditionForSaintess(obj.pA[0]);
	
};


//testSaintessPower();


function testSaintessMissionVotingEffect() {

	console.log("Testing Saintess Effect On Mission Votes");

	var saintess = obj.rO.roles["Saintess"];

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, -2); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	saintess.activateHolyPower("Bless", "Derek", obj);
	saintess.activateHolyPower("Curaga", "Derek", obj);
	saintess.activateHolyPower("Safeguard", "Derek", obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	AbilityManager.updateStatuses(obj);

	console.log("");
	console.log("Saintess safeguard, bless and curaga should be gone");

	Controller.addMissionVote(obj, 0, -2); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));
};

//testSaintessMissionVotingEffect();







function testHecatePower() {

	obj.rO.roles["Hecate"].setMultiplierTarget("Derek", obj);

	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("Derek multiplication is now: " + obj.pA[0].multiplier);

	obj.pA[0].corrupted = true;
	obj.pA[0].bomb = true
	obj.pA[0].burnCount = 2
	obj.pA[0].soulMark = true
	obj.pA[0].shrinkCount = 2;
	obj.pA[0].multiplier = 3;
	obj.pA[0].injuredCount = 2;
	obj.pA[0].entranced = true;
	obj.pA[0].confused = true;
	obj.pA[0].markedMan = true;
	obj.pA[0].slow = true;
	obj.pA[0].slowCharge = -5;
	obj.pA[0].zombie = "zombie";
	obj.pA[1].zombie = "recovered";
	obj.pA[0].paralyzed = true;
	obj.pA[0].frozen = true;

	obj.pA[0].boost = 3;

	obj.pA[0].safeguard = true;
	obj.pA[0].bless = true;
	obj.pA[0].heartacheDefense = true;
	obj.pA[0].therapy = true;
	obj.pA[0].groupHug = true;

	obj.rO.roles["Saintess"].curagaBoostTarget = "Derek";

	obj.rO.roles["Hecate"].exchangeOfTheSpirits("Derek", "Serena", obj);

	console.log("Status after exchange of spirits");
	console.log("");

	console.log(princess.updateEoSenseArray(obj));

};

//testHecatePower();



function testBombermanPower() {

	obj.rO.roles["Bomberman"].setBombTarget("Derek", obj);
	obj.rO.roles["Bomberman"].setfirePunchTarget("Cloud", obj);

	AbilityManager.updateStatuses(obj);

	console.log("Derek bomb status is: " + obj.pA[0].bomb);
	console.log("Cloud burn counter should be 1, it is: " + obj.pA[1].burnCount);

	obj.rD.missionNo += 1;

	AbilityManager.updateStatuses(obj);

	console.log("Cloud burn counter after increaseBurnCounter should be 2, it is: " 
		+ obj.pA[1].burnCount);
};


//testBombermanPower();


function testLieutenantBlitzPower() {

	console.log("Testing Lieutenant Blitz Power - Serena, Index 2");

	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, 1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena Lieutenant Blitz
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena"]);
	Controller.setPlayersForMission(obj);


	obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
	console.log("For mission #1, votes should be 1");
	console.log(obj.pA[0].missionVote);


	obj.rD.missionNo = 2;
	obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
	console.log("For mission #2, Lt. Blitz votes should be 2");
	console.log(obj.pA[0].missionVote);

	console.log("For mission #2, for NOT Lt. Blitz role, vote should be 1");
	obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
	console.log(obj.pA[1].missionVote);


	obj.rD.missionNo = 3;
	console.log("For mission #2, votes should be 2");


};

//testLieutenantBlitzPower();


function testInjuredStatus() {

	console.log("Testing Injured Status Power");

	var ltBlitz = obj.rO.roles["Lieutenant Blitz"];
	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, 1); //Cloud
	Controller.addMissionVote(obj, 2, -5); //Serena Lieutenant Blitz
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	ltBlitz.setUnitedStatesOfSmashTarget("Serena", obj);
	AbilityManager.updateStatuses(obj);

	console.log("Injured Count is: " + obj.pA[2].injuredCount);
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	console.log("");
	console.log("Injured Status should wear off after 2 rounds");

	obj.rD.missionNo = 2;

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 2, -5); //Serena Lieutenant Blitz

	ltBlitz.setUnitedStatesOfSmashTarget("Serena", obj);
	console.log("Injured Count is: " + obj.pA[2].injuredCount);
	AbilityManager.updateStatuses(obj);
	console.log("Injured Count is: " + obj.pA[2].injuredCount);

	obj.rD.missionNo = 3;

	AbilityManager.updateStatuses(obj);
	console.log("Injured Count is: " + obj.pA[2].injuredCount);
	AbilityManager.updateStatuses(obj);

	console.log("Injured Count is: " + obj.pA[2].injuredCount);
	AbilityManager.updateStatuses(obj);


	console.log("Injured Count is: " + obj.pA[2].injuredCount);
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));
};


//testInjuredStatus();




function testDelayerPower() {

	obj.pA[0].role = "Delayer";
	obj.rO.roles["Delayer"].inGame = true;
	obj.rO.roles["Delayer"].index = 0;

	obj.rO.roles["Delayer"].delayerCount = 1;

	obj.pA[0].teamVote = 1;

	obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);
	console.log("Team Vote for Delayer should be: 1.33");
	console.log(obj.pA[0].teamVote);

	obj.pA[0].teamVote = 1;
	obj.rO.roles["Delayer"].delayerCount = 2;
	obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);
	console.log("Team Vote for Delayer should be: 1.67");
	console.log(obj.pA[0].teamVote);

	obj.pA[0].teamVote = 1;
	obj.rO.roles["Delayer"].delayerCount = 3;
	obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);
	console.log("Team Vote for Delayer should be: 2");
	console.log(obj.pA[0].teamVote);

	obj.pA[0].teamVote = 1;
	obj.rO.roles["Delayer"].delayerCount = 4;
	obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);
	console.log("Team Vote for Delayer should be: 2.33");
	console.log(obj.pA[0].teamVote);

	obj.pA[0].teamVote = 1;
	obj.rO.roles["Delayer"].delayerCount = 5;
	obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);
	console.log("Team Vote for Delayer should be: 2.67");
	console.log(obj.pA[0].teamVote);

	obj.pA[0].teamVote = 1;
	obj.rO.roles["Delayer"].delayerCount = 6;
	obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);
	console.log("Team Vote for Delayer should be: 3");
	console.log(obj.pA[0].teamVote);


	Controller.setMissionTeam(obj, ["Derek", "Serena"]);
	Controller.setPlayersForMission(obj);
	Controller.addMissionVote(obj, 0, 1); //Derek

	obj.rO.roles["Delayer"].delayerCount = 2;

	console.log("Mission Vote should be: 4");
	obj.rO.roles["Delayer"].adjustDelayerMissionVote(obj);
	console.log(obj.pA[0].missionVote);

	Controller.addMissionVote(obj, 0, 1); //Derek
	console.log("Mission Vote should be: 1");
	obj.rO.roles["Delayer"].adjustDelayerMissionVote(obj);
	console.log(obj.pA[0].missionVote);



};




function testDelayerStall() {

	console.log("Testing Delayer Stall/Slow");
		

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	delayer.stall("Lucio", obj);

	console.log("With slow, should be +2 mission vote total");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	AbilityManager.updateStatuses(obj);

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3

	//delayer.stall("Lucio", obj);
	//if casted stall again, should be +16.25 vote totals

	console.log("With slow boost, should be 9.5 mission vote total");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	AbilityManager.updateStatuses(obj);

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3

	console.log("Slow boost used up, should be +5");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	console.log("Slow Target in Powers History: " + delayer.powersHistory[obj.rD.missionNo].slowTarget);

};


//testDelayerStall();






function testCopycatVoteWithVanishAndSlow() {

	console.log("Testing Copycat Vote Power With Vanish + Slow");
		
	Controller.addMissionVote(obj, 0, -2); //Derek //0
	//Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 1); //Serena //2 Persequor
	Controller.addMissionVote(obj, 3, 3); //Lucio //3 Pear
	//Controller.addMissionVote(obj, 4, -2); //Xing //4 Delayer

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	delayer.stall("Derek", obj);
	//pear.vanish("Derek");

	//persequor.copyCat("Derek");

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

};


//testCopycatVoteWithVanishAndSlow();



//need to make sure index 2 is Persequor inside RolesObject assign roles
function testPersequorPower() {

	console.log(obj.pA[2]);	
	console.log(obj.rO.rolesInGame[2]);
	console.log(obj.pA[4]);
	console.log(obj.rO.rolesInGame[4]);

	console.log("Now doing identity theft");

	obj.rO.roles["Persequor"].identityTheft("Xing", obj);


	console.log(obj.pA[2]);	
	console.log(obj.rO.rolesInGame[2]);
	console.log(obj.pA[4]);
	console.log(obj.rO.rolesInGame[4]);

	console.log("obj.pT for Xing should be 2, it is: " + obj.pT["Xing"]);
	console.log("obj.pT for Serena should be 4, it is: " + obj.pT["Serena"]);

	console.log(obj.rO.roles["Seer"].scry(obj, "Xing"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Serena"));


	console.log("Returning identities to normal");
	obj.rO.roles["Persequor"].switchBackIdentities(obj);

	console.log(obj.pA[2]);	
	console.log(obj.rO.rolesInGame[2]);
	console.log(obj.pA[4]);
	console.log(obj.rO.rolesInGame[4]);

	console.log("obj.pT for Xing should be 4, it is: " + obj.pT["Xing"]);
	console.log("obj.pT for Serena should be 2, it is: " + obj.pT["Serena"]);

	console.log(obj.rO.roles["Seer"].scry(obj, "Xing"));
	console.log(obj.rO.roles["Seer"].scry(obj, "Serena"));



	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -4); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, -2); //Xing

	obj.rO.roles["Persequor"].copyCat("Xing", obj);

	console.log(obj.pA[2].missionVote);

};



function testPersequorMetronome() {

	persequor.metronome("Derek", obj);

	AbilityManager.updateStatusesBeforeNightPhase(obj);
	
	console.log(princess.updateEoSenseArray(obj));


};

//testPersequorMetronome();



function switchTest() {


	console.log("Before Switch, pA");

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + ", role is: " 
			+ obj.pA[i].role + ", index is: " + i 
			+ ", socketID: " + obj.pA[i].socketID);

	};

	console.log("");
	console.log("RolesInGame before switch");

	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

		console.log(obj.rO.rolesInGame[i].name + ", role is: " 
			+ obj.rO.rolesInGame[i].role + ", this.index is: " 
			+ obj.rO.rolesInGame[i].index + ", i is: " + i 
			+ ", socketID: " + obj.rO.rolesInGame[i].socketID);

	};

	console.log("");
	console.log("pT is");
	console.log(obj.pT);


	obj.rO.roles["Persequor"].activateIdentityTheft(obj);

	AbilityManager.updateStatuses(obj);

	console.log("");
	console.log("After switch, rolesInGame");

	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

		console.log(obj.rO.rolesInGame[i].name + ", role is: " 
			+ obj.rO.rolesInGame[i].role + ", this.index is: " 
			+ obj.rO.rolesInGame[i].index + ", i is: " + i 
			+ ", socketID: " + obj.rO.rolesInGame[i].socketID);

	};


	console.log("");
	console.log("After switch, pA");

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + ", role is: " 
			+ obj.pA[i].role + ", index is: " + i 
			+ ", socketID: " + obj.pA[i].socketID);

	};

	console.log("");

	console.log("obj.pT is");
	console.log(obj.pT);


	/* switch back */

	obj.rD.missionNo += 1;
	//obj.rD.missionNo +=1 //this tests to make sure power does NOT activate
	//for second time with updateStatuses();

	AbilityManager.updateStatuses(obj);


	console.log("");
	console.log("SWITCHING BACK");

	console.log("");
	console.log("After switching back, roles object array");

	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

		console.log(obj.rO.rolesInGame[i].name + ", role is: " 
			+ obj.rO.rolesInGame[i].role + ", this.index is: " 
			+ obj.rO.rolesInGame[i].index + ", i is: " + i 
			+ ", socketID: " + obj.rO.rolesInGame[i].socketID);

	};


	console.log("");
	console.log("After switching back, pA is");

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + ", role is: " 
			+ obj.pA[i].role + ", index is: " + i 
			+ ", socketID: " + obj.pA[i].socketID);

	};

	console.log("");
	console.log("After switching back, player tracker");

	console.log("obj.pT is");
	console.log(obj.pT);




};

//switchTest();


function logArrays() {

	console.log("");
	console.log("Player Array");

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + ", role is: " 
			+ obj.pA[i].role + ", index is: " + i 
			+ ", socketID: " + obj.pA[i].socketID);

	};


	console.log("");
	console.log("Roles Object");

	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {

		console.log(obj.rO.rolesInGame[i].name + ", role is: " 
			+ obj.rO.rolesInGame[i].role + ", this.index is: " 
			+ obj.rO.rolesInGame[i].index + ", i is: " + i 
			+ ", socketID: " + obj.rO.rolesInGame[i].socketID);

	};


	console.log("");
	console.log("obj.pT");
	console.log(obj.pT);

};


function hurricaneSwitchBackStabTest() {

	console.log("Before any switching");

	logArrays();

	obj.rO.roles["Noah"].activateHurricane();
	obj.rO.roles["Persequor"].activateIdentityTheft(obj);
	obj.rO.roles["Backstabber"].backstab();

	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("After Switching");

	logArrays();

	obj.rD.missionNo += 1;

	obj.rO.roles["Backstabber"].backstab();
	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("");
	console.log("Mission +1, switched back persequor");
	logArrays();

	console.log("");
	obj.rD.missionNo += 1;
	obj.rO.roles["Persequor"].activateIdentityTheft(obj);
	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("");
	console.log("switched again");
	logArrays();

	
	obj.rD.missionNo += 1;
	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("");
	console.log("Switched Back");
	logArrays();

};


//hurricaneSwitchBackStabTest();




function testBackstabberAssassinate() {

	console.log("Testing Backstabber Assassination!");
	
	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 3); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek"]);
	Controller.setPlayersForMission(obj);

	backstabber.markAMan("Derek", obj);
	backstabber.markAMan("Lucio", obj);
	backstabber.assassinate("Derek", obj);

	//AbilityManager.updateStatuses(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));	


	backstabber.assassinate("Lucio", obj);
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));	

};

//testBackstabberAssassinate();




function testReverserPower() {

	Controller.addMissionVote(obj, 0, -1); //Derek
	Controller.addMissionVote(obj, 1, -4); //Cloud
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, -2); //Xing

	Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
	Controller.setPlayersForMission(obj);

	console.log("Derek Vote before reverseVote is: " + obj.pA[0].missionVote);

	obj.rO.roles["Reverser"].reverseVote("Derek", obj);

	console.log("Derek Vote after reverseVote is: " + obj.pA[0].missionVote);

	obj.rO.roles["Reverser"].inGame = true;

	obj.rO.roles["Reverser"].activateMirrorWorld();
	obj.rO.roles["Reverser"].adjustVotesMirrorWorld(obj);

	showAllMissionVotes();

};



function testSpiritualistPower() {

	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));

	Controller.addMissionVote(obj, 0, -1); //Derek
	Controller.addMissionVote(obj, 1, -4); //Cloud
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, -2); //Xing

	Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
	Controller.setPlayersForMission(obj);

	obj.rO.roles["Spiritualist"].markAPlayer("Derek", obj);

	AbilityManager.updateStatuses(obj);

	obj.rO.roles["Spiritualist"].adjustSpiritualistMissionVote(obj);

	console.log(obj.pA[2].missionVote);

	console.log("Next mission");

	obj.rD.missionNo =+ 1;

	Controller.addMissionVote(obj, 2, 3); //Serena

	obj.rO.roles["Spiritualist"].markAPlayer("Xing", obj);

	AbilityManager.updateStatuses(obj);

	obj.rO.roles["Spiritualist"].adjustSpiritualistMissionVote(obj);

	console.log(obj.pA[2].missionVote);

};

//testSpiritualistPower();


function testSoulScan() {

	console.log("Testing Spiritualist Soul Scan");
	console.log("");

	console.log("Actual Role is: " + obj.pA[3].role);
	console.log("");

	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));
	console.log(obj.rO.roles["Spiritualist"].soulScan("Lucio", obj));

};

//testSoulScan();


//Need to set Serena as backstabber inside RolesObject assignroles
function testBackstabberPower() {

	console.log("Testing Backstabber Power");

	Controller.setMissionTeam(obj, ["Lucio", "Serena"]);
	Controller.setPlayersForMission(obj);

	obj.rO.roles["Backstabber"].backstab();

	Controller.addMissionVote(obj, obj.pT["Derek"], -1); //Derek
	Controller.addMissionVote(obj, obj.pT["Cloud"], -4); //Cloud
	Controller.addMissionVote(obj, obj.pT["Serena"], 3); //Serena
	Controller.addMissionVote(obj, obj.pT["Lucio"], -3); //Lucio
	Controller.addMissionVote(obj, obj.pT["Xing"], -5); //Xing


	console.log("Serena obj.pT index is: " + obj.pT["Serena"]);
	console.log("Lucio obj.pT index is: " + obj.pT["Lucio"]);
	console.log("");

	console.log("player array order");
	for (var i = 0; i < obj.pA.length; i++) {
		console.log(obj.pA[i].name + ", role is: " 
			+ obj.pA[i].role + ", index is: " + i 
			+ ", socketID: " + obj.pA[i].socketID);
	};
	console.log("");

	AbilityManager.updateStatuses(obj);

	obj.rO.roles["Backstabber"].adjustVoteVengeance(obj);

	console.log("Serena (original BS) mission vote is: " 
		+ obj.pA[obj.pT["Serena"]].missionVote);
	console.log("Lucio (new BS) mission vote is: " 
		+ obj.pA[obj.pT["Lucio"]].missionVote);


	console.log("");
	console.log("player array order AFTER switching backstabbers");
	for (var i = 0; i < obj.pA.length; i++) {
		console.log(obj.pA[i].name + ", role is: " 
			+ obj.pA[i].role + ", index is: " + i 
			+ ", socketID: " + obj.pA[i].socketID);
	};

	console.log("");
	console.log("rolesInGame order");
	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {
		console.log(obj.rO.rolesInGame[i].name + ", role is: " 
			+ obj.rO.rolesInGame[i].role + ", index is: " 
			+ obj.rO.rolesInGame[i].index + 
			", socketID: " + obj.rO.rolesInGame[i].socketID);
	};

	console.log("");
	console.log("Serena obj.pT index is: " + obj.pT["Serena"]);
	console.log("Lucio obj.pT index is: " + obj.pT["Lucio"]);


};


//testBackstabberPower();


//set Serena as Marcus
function testMarcusPower() {

	Controller.setMissionTeam(obj, ["Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	Controller.addMissionVote(obj, 0, -1); //Derek
	Controller.addMissionVote(obj, obj.pT["Serena"], -2); //Serena

	//obj.pA[2].selectedForMission = false;

	obj.rO.roles["Marcus"].adjustVoteTranscendence(obj);
	console.log("Mission Vote should be +3, it is: " + obj.pA[2].missionVote);


	obj.rO.roles["Marcus"].activateBerserk();

	obj.rO.roles["Marcus"].adjustVoteBerserk(obj);
	console.log("Mission Vote should be +6, it is: " + obj.pA[2].missionVote);


	obj.rO.roles["Marcus"].adjustVoteBerserk(obj);
	console.log("Mission Vote should be -6, it is: " + obj.pA[2].missionVote);

	obj.rO.roles["Marcus"].berserk = "activated second half";
	obj.rO.roles["Marcus"].adjustVoteBerserk(obj);
	obj.rO.roles["Marcus"].adjustVoteTranscendence(obj);
	console.log("Mission Vote should be +3, it is: " + obj.pA[2].missionVote);


	Controller.addMissionVote(obj, obj.pT["Serena"], -2); //Serena
	console.log("Mission Vote should be -2, it is: " + obj.pA[2].missionVote);


};



function testMarcusCounterEspionage() {

	console.log("Testing Marcus' Counter Espionage");

	obj.rD.missionNo = 1;

	obj.index = 0;
	Controller.setPlayerMissionVote("Power", obj);
	obj.index = 1;
	Controller.setPlayerMissionVote("Success", obj);

	Controller.setMissionTeam(obj, ["Serena", "Derek", "Cloud"]);
	Controller.setPlayersForMission(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.resetDataAtEndOfMission(obj);
	obj.rD.missionNo = 2;

	obj.index = 0;
	Controller.setPlayerMissionVote("Fail", obj);
	obj.index = 1;
	Controller.setPlayerMissionVote("Power", obj);

	Controller.setMissionTeam(obj, ["Serena", "Derek", "Cloud"]);
	Controller.setPlayersForMission(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));



	Controller.resetDataAtEndOfMission(obj);
	obj.rD.missionNo = 3;

	obj.index = 0;
	Controller.setPlayerMissionVote("Power", obj);

	Controller.setMissionTeam(obj, ["Xing", "Cloud"]);
	Controller.setPlayersForMission(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	
	marcus.setCounterEspionageTarget("Derek");
	marcus.counterEspionage(obj);
	

};

//testMarcusCounterEspionage();




function testMarcusBodyguard() {

	var nameToTarget = obj.rO.roles["Marcus"].bodyguardNameSwitch("Lucio", obj);

	console.log(nameToTarget);

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("corrupted"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("bomb"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("burn"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("soul mark"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("paralyzed"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("multiplier"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("exchange"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("shrink"));
	console.log("");

	console.log(obj.rO.roles["Marcus"].bodyguardNotification("anti-magic ray"));
	console.log("");

};

//testMarcusBodyguard();



function testLottiePowers() {

	console.log("Testing Lottie Powers");
	//console.log(obj.rD.missionTeam);

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	obj.rO.roles["Lottie"].addTherapyTarget("Derek");
	obj.rO.roles["Lottie"].activateGroupHug();

	AbilityManager.updateStatusesBeforeNightPhase(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	console.log("Now remove therapy + group hug");
	AbilityManager.updateStatusesBeforeNightPhase(obj)

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	/*see if Lottie turns John's vote positive */

	Controller.addMissionVote(obj, 0, -5); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 0); //Serena
	Controller.addMissionVote(obj, 3, -2); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	console.log("Lottie turns Princess' vote positive");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	lottie.notifyJohnOfLottiesIdentity(obj);

};


//testLottiePowers();


function testLottieGossip() {

	console.log("Test Lottie Gossip Power");

	console.log(obj.rI.missionInfo);
	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	
	Controller.resetDataAtEndOfMission(obj);

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	obj.rD.missionNo = 2;
	Controller.addMissionVote(obj, 0, 5); //Derek
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.resetDataAtEndOfMission(obj);

	Controller.setMissionTeam(obj, ["Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	obj.rD.missionNo = 3;
	Controller.addMissionVote(obj, 0, -1); //Derek
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.resetDataAtEndOfMission(obj);

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	obj.rD.missionNo = 4;
	Controller.addMissionVote(obj, 0, 5); //Derek
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	lottie.getGossipInfo("Cloud", obj);

};

/*Don't forget you only get Mission 1 to (current mission - 1)
vote history since you are on the not selected for mission team
*/
//testLottieGossip();





function testLanPowers() {

	console.log("Testing Lan Powers");

	var lan = obj.rO.roles["Lan"];

	//console.log(obj.rD.missionTeam);

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Serena", "Derek"]);
	Controller.setPlayersForMission(obj);

	lan.activateFinalHeaven();

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	Controller.addMissionVote(obj, 2, 1); //Serena
	lan.activateFinalHeaven();

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));



	Controller.addMissionVote(obj, 2, -1); //Serena
	lan.activateFinalHeaven();

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));



	/*
	obj.rO.roles["Lan"].setPositiveFinalHeavenVotePower(obj);
	console.log(obj.pA[2].missionVote);

	obj.rO.roles["Lan"].setPositiveFinalHeavenVotePower(obj);
	console.log(obj.pA[2].missionVote);

	obj.rO.roles["Lan"].setPositiveFinalHeavenVotePower(obj);
	console.log(obj.pA[2].missionVote);

	obj.rO.roles["Lan"].setNegativeFinalHeavenVotePower(obj);
	console.log(obj.pA[2].missionVote);

	obj.rO.roles["Lan"].setNegativeFinalHeavenVotePower(obj);
	console.log(obj.pA[2].missionVote);

	obj.rO.roles["Lan"].setPositiveFinalHeavenVotePower(obj);
	console.log(obj.pA[2].missionVote);
	*/

	//obj.rO.roles["Lan"].addIntimidateTarget("Derek");

	
	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 2, 1); //Serena

	obj.rO.roles["Lan"].beatRush("Derek", obj);
	console.log("confused for index 0 is: " + obj.pA[0].confused);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));
	

	console.log("");
	console.log("Confused status should be removed");

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 2, 1); //Serena

	AbilityManager.updateStatuses(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

};

//testLanPowers();


function testBabyDollPowers() {

	console.log("Testing BabyDoll Powers");
	//console.log(obj.rD.missionTeam);

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 3); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, -5); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);

	obj.rO.roles["Baby Doll"].setSingTarget("Derek", obj);

	obj.rO.roles["Baby Doll"].ifAsleepDropPlayerFromMission(obj);
	Controller.setPlayersForMission(obj);
	console.log(obj.rD.missionTeam);


	obj.rO.roles["Baby Doll"].activateLullaby();

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));
	/*
	obj.rD.missionNo = 2;

	obj.rD.missionTeam = [];

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);

	console.log("Make sure doesn't work on same person twice in a row");
	obj.rO.roles["Baby Doll"].setSingTarget("Derek", obj);

	obj.rO.roles["Baby Doll"].ifAsleepDropPlayerFromMission(obj);
	Controller.setPlayersForMission(obj);
	console.log(obj.rD.missionTeam);
	*/

	

};

//testBabyDollPowers();


function testBabyDollPerishSong() {

	console.log("Test Baby Doll Perish Song");

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, -5); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Xing", "Lucio"]);

	Controller.setPlayersForMission(obj);
	
	obj.rO.roles["Baby Doll"].activatePerishSong(["Derek", "Serena", "Lucio"], obj);
	AbilityManager.updateStatuses(obj);


	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -1); //Cloud
	Controller.addMissionVote(obj, 2, 3); //Serena
	Controller.addMissionVote(obj, 3, -5); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	console.log("Perish Song should be reset, mission vote total should be: 1");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};


//testBabyDollPerishSong();





function testNoahPowers() {

	console.log("Before Shuffling");
	console.log(obj.pT);

	obj.rO.roles["Noah"].activateHurricane();
	obj.rO.roles["Noah"].useHurricane(obj);

	console.log("After shuffling");
	console.log(obj.pT);

	console.log(obj.rO.rolesInGame);

	for (var i = 0; i < obj.pA.length; i++) {

		console.log(obj.pA[i].name + ", " + obj.pA[i].role 
			+ ", index is: " + i);

		console.log(obj.rO.rolesInGame[i].name + ", " + obj.rO.rolesInGame[i].role 
			+ ", index is: " + i);
	};

};


function testNoahNightmareSyndrome() {

	console.log("Test Noah Nightmare Syndrome Powers");
	
	obj.rD.missionNo = 1;


	console.log("");
	console.log("Testing reversed vote by zombie status");
	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Derek", "Lucio", "Serena"]);
	Controller.setPlayersForMission(obj);

	noah.setNightmareSyndrome("Derek", obj);
	AbilityManager.updateStatuses(obj);


	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));
	

	console.log("");
	console.log("Testing +2.5 by recovered status");

	Controller.healPlayerForVotingForFailure(obj.pA[0]);

	Controller.addMissionVote(obj, 0, -1); //Derek //0
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};


//testNoahNightmareSyndrome();



function testNoahAndToxiTurtlePowersParalyzeSkip() {

	obj.rD.missionNo = 1;
	obj.rD.teamLeaderIndex = -1;
	obj.rO.roles["Noah"].setThunderWave("Derek", obj);

	console.log(obj.rO.roles["Toxiturtle"].glare("Xing", obj));

	AbilityManager.updateStatuses(obj);

	for (var i = 0; i < 9; i++) {

		Controller.updateTeamLeaderIndex(obj);

		console.log("team leader index is now: " + obj.rD.teamLeaderIndex);

	};

	
	console.log("");
	console.log("Paralysis should be removed");

	obj.rD.missionNo = 2;
	AbilityManager.updateStatuses(obj);

	for (var i = 0; i < 9; i++) {

		Controller.updateTeamLeaderIndex(obj);

		console.log("team leader index is now: " + obj.rD.teamLeaderIndex);

	};



};

//testNoahAndToxiTurtlePowersParalyzeSkip();


function testToxiturtlePoisonPowers() {

	console.log("Test Toxiturtle Poison ability");
	
	var toxiturtle = obj.rO.roles["Toxiturtle"];

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	Controller.addMissionVote(obj, 3, -1); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	toxiturtle.poisonBeak("Serena", obj);
	//obj.pA[2].corrupted = true;
	//obj.rO.roles["Reverser"].personToReverseVote = "Serena";

	console.log("Poison Count 3");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	obj.rD.missionNo = 2;
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	AbilityManager.updateStatuses(obj);
	console.log("Poison Count 2");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	obj.rD.missionNo = 3;
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	AbilityManager.updateStatuses(obj);
	console.log("Poison Count 1");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	obj.rD.missionNo = 4;
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	AbilityManager.updateStatuses(obj);
	console.log("Poison Count 0");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	/*
	console.log("");
	console.log("Testing that poison beak doesn't work on same person twice");
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 5); //Lucio //3
	toxiturtle.poisonBeak("Lucio", obj);
	*/

	obj.rD.missionNo = 2;
	console.log("");
	console.log("Testing that poison beak needs 2 turns break");
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 5); //Lucio //3
	toxiturtle.poisonBeak("Lucio", obj);


	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

};

//testToxiturtlePoisonPowers();


function testPsychologistPowers() {

	console.log("Test Psychologist Powers");
	
	var psychologist = obj.rO.roles["Psychologist"];

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, -1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	psychologist.setPredictionArray(["Serena", "Lucio"], obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	console.log("");
	console.log("Get Two Roles For Psychologist");


	var checkName = "Serena";
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));
	console.log(psychologist.revealOnePlayersRole(checkName, obj));

	console.log(psychologist.revealOneBadOneGoodPlayer(["brad", "kevin"]));

};

//testPsychologistPowers();



function testKaguyaEntranced() {

	console.log("Testing Kaguya Entranced Effect on Mission Votes");
	
	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 3); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek"]);
	Controller.setPlayersForMission(obj);

	kaguya.setSweetCharmTarget("Derek", obj);
	AbilityManager.updateStatuses(obj);

	kaguya.setSweetCharmTarget("Lucio", obj);
	AbilityManager.updateStatuses(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};


//testKaguyaEntranced();



function testKaguyaMoonblast() {

	console.log("Testing Kaguya Moonblast");
	
	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3
	Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	kaguya.activateMoonblast(obj);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 2, 1); //Serena //2
	Controller.addMissionVote(obj, 3, 3); //Lucio //3

	console.log("Moonblast should not be activated");
	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};

//testKaguyaMoonblast();




function testKaguyaDarkDestiny() {

	console.log("Testing Kaguya Dark Destiny Game Over");
		
	Controller.setMissionTeam(obj, ["Lucio", "Xing", "Serena"]);
	//Controller.setPlayersForMission(obj);

	kaguya.addDarkDestinyTarget("Xing"); 

	console.log(kaguya.wasDarkDestinyFulfilled(obj));
	console.log(kaguya.wasDarkDestinyFulfilled(obj));

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena"]);
	console.log(kaguya.wasDarkDestinyFulfilled(obj));

	Controller.setMissionTeam(obj, ["Lucio", "Xing", "Serena"]);
	console.log(kaguya.wasDarkDestinyFulfilled(obj));
};

//testKaguyaDarkDestiny();









function testAdjustMissionVotes() {

	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, -3); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -1); //Lucio
	Controller.addMissionVote(obj, 4, -2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena", "Lucio"]);
	Controller.setPlayersForMission(obj);

	//obj.pA[0].shrinkCount = 2;
	//obj.pA[0].burnCount = 3;
	//obj.pA[0].multiplier= 2;

	//obj.rO.roles["Umbra Lord"].corrupt("Serena", obj);

	//console.log(obj.rO.roles["Hecate"].exchangeOfTheSpirits("Serena", "Derek", obj));

	
	//obj.rO.roles["Reverser"].reverseVote("Serena");

	//obj.rO.roles["Reverser"].activateMirrorWorld();
	//obj.rO.roles["Delayer"].delayerCount = 2;
	//obj.rO.roles["Pear"].vanish("Serena");


	//obj.rO.roles["Pear"].spyOn("Derek");
	//console.log(obj.rO.roles["Pear"].expose(obj));

	//obj.rO.roles["Saintess"].bless("Serena", obj);
	//obj.rO.roles["Saintess"].safeguard("Serena", obj);

	//obj.rO.roles["Marcus"].activateBerserk();

	//obj.rO.roles["Persequor"].copyCat("Serena");

	//obj.rO.roles["Spiritualist"].plantSoulMark("Derek", obj);
	//obj.rO.roles["Spiritualist"].plantSoulMark("Xing", obj);

	//obj.rD.missionNo = 7;

	//obj.rO.roles["Bomberman"].plantBomb("Serena", obj);

	console.log(Controller.missionVoteCalculation(obj));

};

//testAdjustMissionVotes();


function testAdjustTeamVotes() {

	Controller.addTeamVote(obj, 0, 1); //Derek
	Controller.addTeamVote(obj, 1, -1); //Cloud
	Controller.addTeamVote(obj, 2, -1); //Serena
	Controller.addTeamVote(obj, 3, 1); //Lucio
	Controller.addTeamVote(obj, 4, 1); //Xing

	//obj.rO.roles["Ranger"].shrinkRay("Serena", obj);
	//obj.rO.roles["Saintess"].bless("Derek", obj);

	obj.rO.roles["Delayer"].delayerCount = 4;

	console.log(Controller.wasTeamAccepted(obj));


};

//testAdjustTeamVotes();



function testAbilityManager() {

	/*
	console.log("Test Saintess Powers");
	obj.rO.roles["Saintess"].bless("Derek", obj);
	obj.rO.roles["Saintess"].safeguard("Derek", obj);

	console.log("Bless & Safeguard should be true");
	console.log(obj.pA[0]);

	AbilityManager.updateStatuses(obj);

	console.log("Bless & Safeguard should be false");
	console.log(obj.pA[0]);
	*/

	/*
	console.log("");

	console.log("Test Noah Powers");

	obj.rO.roles["Noah"].setThunderWave("Derek", obj);
	obj.rO.roles["Noah"].setIcePunch("Derek", obj);

	AbilityManager.updateStatuses(obj);
	console.log("Paralyzed & Frozen should be true");
	console.log(obj.pA[0]);

	obj.rD.missionNo += 1;
	AbilityManager.updateStatuses(obj);
	console.log("Paralyzed & Frozen should be false");
	console.log(obj.pA[0]);

	obj.rO.roles["Noah"].setThunderWave("Xing", obj);
	obj.rO.roles["Noah"].setIcePunch("Xing", obj);

	AbilityManager.updateStatuses(obj);
	console.log(obj.pA[0]);
	console.log(obj.pA[4]);

	*/




};

//testAbilityManager();



function testConfusionPowers() {

	console.log("Testing Confusion Powers");

	obj.rD.missionNo = 1;

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	//Controller.addMissionVote(obj, 1, -3); //Cloud //1
	Controller.addMissionVote(obj, 2, 2); //Serena //2
	Controller.addMissionVote(obj, 3, 5); //Lucio //3
	//Controller.addMissionVote(obj, 4, -2); //Xing //4

	Controller.setMissionTeam(obj, ["Lucio", "Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	lan.beatRush("Derek", obj);
	seer.flash("Serena", obj);
		
	console.log("Derek confused status is: " + obj.pA[0].confused);
	console.log("Serena confused status is: " + obj.pA[2].confused);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));

	AbilityManager.updateStatusesBeforeNightPhase(obj);
	console.log("");
	console.log("Confused Status should be removed!");

	Controller.addMissionVote(obj, 0, 1); //Derek //0
	Controller.addMissionVote(obj, 2, 2); //Serena //2
	Controller.addMissionVote(obj, 3, 5); //Lucio //3

	console.log("Derek confused status is: " + obj.pA[0].confused);
	console.log("Serena confused status is: " + obj.pA[2].confused);

	console.log("Mission Vote Total Is: " + Controller.missionVoteCalculation(obj));


};


//testConfusionPowers();
