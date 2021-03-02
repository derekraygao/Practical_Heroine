

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
//Controller.addPlayerToArray("Xing", "XingID", "testing", false);

var obj = Controller.returnpArrayRoomAndIndex({id: "DerekID"});

Controller.assignPlayersTheirRoles(obj);

Controller.roomsData["testing"].gamePhase = 1;

console.log(obj.rO.rolesInGame);
console.log(obj.pA);


Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
Controller.setPlayersForMission(obj);


Controller.addTeamVote(obj, 0, 4);
Controller.addTeamVote(obj, 1, null);
Controller.addTeamVote(obj, 2, -3);
Controller.addTeamVote(obj, 3, 1);
//output 1

Controller.addMissionVote(obj, 0, null);
Controller.addMissionVote(obj, 1, -2);
Controller.addMissionVote(obj, 2, 1);
Controller.addMissionVote(obj, 3, -4);
//output 0


console.log(Controller.teamVoteCalculation(obj));
console.log(Controller.roomsData["testing"].teamVoteInfo);

Controller.missionVoteCalculation(obj);

console.log(Controller.roomsData["testing"].results.missionInfo[1]);


getIdentitiesTest();





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






//console.log(didAnyoneWinTest());

/* testing didAnyoneWin() */

function didAnyoneWinTest() {

Controller.roomsData["testing"].gamePhase = 1;
Controller.missionVoteCalculation(obj);

Controller.roomsData["testing"].gamePhase = 2;
Controller.missionVoteCalculation(obj);

Controller.roomsData["testing"].gamePhase = 3;
Controller.missionVoteCalculation(obj);

Controller.roomsData["testing"].gamePhase = 4;
Controller.missionVoteCalculation(obj);

return (Controller.roomsData["testing"].results.didAnyoneWin(3));

};





/*console.log(Controller.roomsData["testing"].teamVoteInfo);

console.log(Controller.missionVoteCalculation(obj));
console.log(Controller.roomsData["testing"].missionVoteInfo);
*/