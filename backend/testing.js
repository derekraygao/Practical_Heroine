

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


//console.log(obj.rO.rolesInGame);
rolesInGame();







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


function testUmbraLordPowers() {

	obj.rO.roles["Umbra Lord"].bidePower();
	console.log("Bide should be +2" + " actual power is: " 
		+ obj.rO.roles["Umbra Lord"].bide);

	obj.rO.roles["Umbra Lord"].bidePower();
	console.log("Bide should be +4" + " actual power is: " 
		+ obj.rO.roles["Umbra Lord"].bide);

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



function rolesInGame() {

	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {
		console.log("Name: " + obj.rO.rolesInGame[i].name 
			+ ", " + "Role: " + obj.rO.rolesInGame[i].role
			+ ", " + "Index: " + i);

		console.log("");
	};

}; //end rolesInGame();


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

};



function testBalancerPower(name1, name2) {
	console.log(obj.rO.roles["Balancer"].mysticScales(name1, name2, obj));
};



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


function testAuraKnightPower(name) {

	console.log(name + "'s role is: " 
		+ obj.rO.rolesInGame[obj.pT[name]].role 
		+ " and alignment is: " + obj.rO.rolesInGame[obj.pT[name]].alignment);

	console.log(obj.rO.roles["Aura Knight"].readAura(name, obj));

	obj.pA[obj.pT[name]].burnCount = 2;
	obj.pA[obj.pT[name]].devilized = true;
	obj.pA[obj.pT[name]].delayerCount = 2;

	console.log(obj.rO.roles["Aura Knight"].readAura(name, obj));
};



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

/*console.log(Controller.roomsData["testing"].teamVoteInfo);

console.log(Controller.missionVoteCalculation(obj));
console.log(Controller.roomsData["testing"].missionVoteInfo);
*/


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


function testSensorPower() {

	obj.pA[0].bomb = true;
	obj.pA[0].burnCount = 1;
	obj.pA[0].soulMark = true;
	obj.pA[0].shrinkCount = 1;
	obj.pA[0].multiplier = 2;

	obj.pA[1].bomb = true;

	console.log("Scan Individual should have: bomb, burn, soulmark, shrink, multiplier");
	console.log(obj.rO.roles["Sensor"].scanOne(obj.pA[0].name, obj));

	console.log("Scan Individual should have only bomb");
	console.log(obj.rO.roles["Sensor"].scanOne(obj.pA[1].name, obj));

	console.log("Scan Individual should have nothing");
	console.log(obj.rO.roles["Sensor"].scanOne(obj.pA[2].name, obj));

	console.log(obj.rO.roles["Sensor"].scanAll("Multiplier", obj));

};


function testJailerPower() {

	obj.pA[0].role = "Jailer";

	console.log("Message coming from Jailer");
	console.log(obj.rO.roles["Jailer"].convertJailerMessage(0, "Hello", obj));
	
	console.log("Message coming from Jailed Player");
	console.log(obj.rO.roles["Jailer"].convertJailerMessage(1, "Hello", obj));


};


function testIchigoPower() {


	var vote1 = 3;
	var vote2 = 0;
	var vote3 = -1;

	console.log("Hylian Shield Acting on Vote = 3, expect -1");
	console.log(vote1 = obj.rO.roles["Ichigo"].hylianShield(vote1));

	console.log("Hylian Shield Acting on Vote = 0, expect +4");
	console.log(vote1 = obj.rO.roles["Ichigo"].hylianShield(vote2));

	console.log("Hylian Shield Acting on Vote = -1, expect +3");
	console.log(vote1 = obj.rO.roles["Ichigo"].hylianShield(vote3));

	console.log("");
	console.log("Now testing status notification");

	obj.pA[2].role = "Ichigo";

	console.log(obj.rO.roles["Ichigo"].naviNotification(1, "bomb", obj));

	console.log(obj.rO.roles["Ichigo"].naviNotification(2, "bomb", obj));
	console.log(obj.rO.roles["Ichigo"].naviNotification(2, "devilized", obj));
	console.log(obj.rO.roles["Ichigo"].naviNotification(2, "burn", obj));
	console.log(obj.rO.roles["Ichigo"].naviNotification(2, "shrink", obj));
	console.log(obj.rO.roles["Ichigo"].naviNotification(2, "anti-magic ray", obj));
	console.log(obj.rO.roles["Ichigo"].naviNotification(2, "soul mark", obj));

};



function checkStatusConditionForSaintess(playerObject) {

	console.log("For player " + playerObject.name + ", status is: ");

	console.log("devilized: " + obj.rO.roles["Umbra Lord"].isPlayerDevilized(playerObject.name));
	console.log("soul mark: " + playerObject.soulMark);
	console.log("bomb: " + playerObject.bomb);
	console.log("burn count: " + playerObject.burnCount);
	console.log("shrink count: " + playerObject.shrinkCount);
	console.log("multiplier: " + playerObject.multiplier);
	console.log("bless: " + playerObject.bless);
	console.log("safeguard: " + playerObject.safeguard);


};


function testSaintessPower() {

	
	obj.rO.roles["Umbra Lord"].devilConversion("Derek", obj);

	obj.pA[0].soulMark = true;
	obj.pA[0].bomb = true;
	obj.pA[0].burnCount = 1;
	obj.pA[0].multiplier = 2;
	obj.pA[0].shrinkCount = 2;

	//obj.pA[0].role = "Delayer";
	//obj.rO.roles["Delayer"].delayerCount = 2;

	console.log(obj.rO.roles["Saintess"].saintessSense(obj));

	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");
	obj.rO.roles["Saintess"].purify("Derek", obj);
	console.log("After purify");
	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");
	obj.rO.roles["Saintess"].esuna("Derek", obj);
	console.log("After esuna");
	checkStatusConditionForSaintess(obj.pA[0]);


	console.log("");
	obj.rO.roles["Saintess"].dispel("Derek", obj);
	console.log("After dispel");
	checkStatusConditionForSaintess(obj.pA[0]);

	console.log("");
	obj.rO.roles["Saintess"].bless("Derek", obj);
	console.log("After bless");
	checkStatusConditionForSaintess(obj.pA[0]);

	//obj.pA[0].role = "Umbra Lord"; //should not affect umbra lord

	console.log("");
	obj.rO.roles["Saintess"].safeguard("Derek", obj);
	console.log("After safeguard");
	checkStatusConditionForSaintess(obj.pA[0]);

	obj.pA[0].role = "Umbra Lord";

};



function testHecatePower() {

	console.log(obj.rO.roles["Hecate"].multiplication("Derek", obj));
	console.log("Derek multiplication is now: " + obj.pA[0].multiplier);

	obj.pA[0].devilized = true;
	obj.pA[0].soulMark = true;
	obj.pA[0].burnCount = 3;
	obj.pA[0].shrinkCount = 5;
	obj.pA[0].bomb = true;
	obj.pA[0].bless = true;
	obj.pA[0].safeguard = true;


	obj.rO.roles["Hecate"].exchangeOfTheSpirits("Derek", "Cloud", obj);

	console.log("Status after exchange of spirits");
	console.log(obj.pA[0]);
	console.log(obj.pA[1]);

};


function testBombermanPower() {

	obj.rO.roles["Bomberman"].plantBomb("Derek", obj);

	console.log("Derek bomb status is: " + obj.pA[0].bomb);

	obj.rO.roles["Bomberman"].firePunch("Cloud", obj);

	console.log("Cloud burn counter should be 1, it is: " + obj.pA[1].burnCount);

	obj.rO.roles["Bomberman"].increaseBurnCounter(obj);

	console.log("Cloud burn counter after increaseBurnCounter should be 2, it is: " 
		+ obj.pA[1].burnCount);
};


function testLieutenantBlitzPower() {

	obj.rD.missionNo = 1;
	//first need some mission results
	Controller.addMissionVote(obj, 0, 1); //Derek
	Controller.addMissionVote(obj, 1, 1); //Cloud
	Controller.addMissionVote(obj, 2, 1); //Serena
	Controller.addMissionVote(obj, 3, -4); //Lucio
	Controller.addMissionVote(obj, 4, 2); //Xing

	Controller.setMissionTeam(obj, ["Derek", "Serena"]);
	Controller.setPlayersForMission(obj);

	obj.pA[0].role = "Lieutenant Blitz";
	obj.rO.roles["Lieutenant Blitz"].inGame = true;
	obj.rO.roles["Lieutenant Blitz"].index = 0;

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

	Controller.addMissionVote(obj, 2, 1); //Serena

	obj.pA[2].soulMark = true;
	obj.pA[0].soulMark = true;
	obj.pA[1].soulMark = true;

	obj.rO.roles["Spiritualist"].adjustSpiritualistMissionVote(obj);

	console.log(obj.pA[2].missionVote);

};



//Need to set Serena as backstabber inside RolesObject assignroles
function testBackstabberPower() {

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
			+ obj.pA[i].role + ", index is: " + i);
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
			+ obj.pA[i].role + ", index is: " + i);
	};


	console.log("");
	console.log("rolesInGame order");
	for (var i = 0; i < obj.rO.rolesInGame.length; i++) {
		console.log(obj.rO.rolesInGame[i].name + ", role is: " 
			+ obj.rO.rolesInGame[i].role + ", index is: " 
			+ obj.rO.rolesInGame[i].index);
	};

	console.log("");
	console.log("Serena obj.pT index is: " + obj.pT["Serena"]);
	console.log("Lucio obj.pT index is: " + obj.pT["Lucio"]);


};


testBackstabberPower();


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



function testNoahPowersParalyzeSkip() {

	obj.rO.roles["Noah"].useThunderWave("Derek", obj);

	for (var i = 0; i < 9; i++) {

		Controller.updateTeamLeaderIndex(obj);

		console.log("team leader index is now: " + obj.rD.teamLeaderIndex);

	};

};

//testNoahPowersParalyzeSkip();


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

