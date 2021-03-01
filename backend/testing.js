

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



Controller.setMissionTeam(obj, ["Cloud", "Serena"]);
Controller.setPlayersForMission(obj);


Controller.addTeamVote(obj, 0, 4);
Controller.addTeamVote(obj, 1, null);
Controller.addTeamVote(obj, 2, -3);
Controller.addTeamVote(obj, 3, 1);
//output 1

Controller.addMissionVote(obj, 0, -3);
Controller.addMissionVote(obj, 1, null);
Controller.addMissionVote(obj, 2, 1);
Controller.addMissionVote(obj, 3, -4);
//output 0


console.log(Controller.teamVoteCalculation(obj));
console.log(Controller.roomsData["testing"].teamVoteInfo);






/*console.log(Controller.roomsData["testing"].teamVoteInfo);

console.log(Controller.missionVoteCalculation(obj));
console.log(Controller.roomsData["testing"].missionVoteInfo);
*/