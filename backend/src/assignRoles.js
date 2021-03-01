
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
