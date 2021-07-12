var {RolesMasterClass} = require("./RolesMasterClass.js");

class Saintess extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Saintess";
        this.alignment = "good";
        this.team = "heroes";

        this.curagaBoostTarget = "nobody chosen";

	}; //end constructor




	isStatusNormal(index, obj) {

		/*if (obj.rO.roles["Umbra Lord"].isPlayerDevilized(obj.pA[index].name)) 
			{ return false; };
		*/

		if (obj.pA[index].corrupted) { return false; };
		if (obj.pA[index].soulMark) { return false; };
		if (obj.pA[index].poisonCount > 0) { return false; };

		if (obj.pA[index].bomb) { return false; };
		if (obj.pA[index].burnCount > 0) { return false; };
		if (obj.pA[index].paralyzed) { return false; };
		if (obj.pA[index].frozen) { return false; };

		if (obj.pA[index].injuredCount > 0) { return false; };

		if (obj.pA[index].multiplier > 1) { return false; };
		if (obj.pA[index].shrinkCount > 0) { return false; };
		

		if (obj.pA[index].role == "Delayer") {

			if (obj.rO.roles["Delayer"].delayerCount > 0) {
				return false;
			};

		};

		return true;
	};


	saintessSense(obj) {

		var saintessSenseArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].role == "Saintess") { continue; };

			saintessSenseArr.push(
				{
					name: obj.pA[i].name,
					isStatusNormal: this.isStatusNormal(i, obj)
				}
			);

		}; //end for

		return saintessSenseArr;

	};



	purify(index, obj) {

		obj.pA[index].soulMark = false;
		obj.pA[index].corrupted = false;
		obj.pA[index].poisonCount = 0;

	}; //end purify


	esuna(index, obj) {

		obj.pA[index].bomb = false;
		obj.pA[index].burnCount = 0;
		obj.pA[index].paralyzed = false;

		if (obj.pA[index].frozen) {

			obj.pA[index].frozen = false;
			//message to update player

		};		

	}; //end esuna


	curaga(index, obj, name) {

		obj.pA[index].injuredCount = 0;

		this.curagaBoostTarget = name;

	};


	dispel(index, obj) {

		console.log("index is: " + index);

		obj.pA[index].shrinkCount = 0;
		obj.pA[index].multiplier = 1;

		if (obj.pA[index].role == "Delayer") {
			obj.rO.roles["Delayer"].delayerCount = 0;
		};

	};


	bless(index, obj) {

		obj.pA[index].bless = true;

	};


	safeguard(index, obj) {

		if (obj.pA[index].role == "Umbra Lord") {
			return 0;
		};

		obj.pA[index].safeguard = true;

	};


	activateHolyPower(whichPower, target, obj) {

		var hIndex = obj.pT[target];
		if (hIndex == undefined) { return 0; };

		switch (whichPower) {

			case "Purify":

				this.purify(hIndex, obj);
				break;

			case "Esuna":

				this.esuna(hIndex, obj);
				break;

			case "Curaga":

				this.curaga(hIndex, obj, target);
				break;

			case "Dispel":

				this.dispel(hIndex, obj);
				break;

			case "Bless":

				this.bless(hIndex, obj);
				break;

			case "Safeguard":

				this.safeguard(hIndex, obj);
				break;

			default:

				return 0;


		}; //end switch

	}; //end activateHolyPower(whichPower, target, obj)


	adjustMissionVotesCuraga(playerObj) {

		if (playerObj.name == this.curagaBoostTarget) {
			playerObj.missionVote += 3;
		};

	};


	adjustMissionVotesBless(playerObj) {

		//if (!this.inGame) { return 0; };
		if (!playerObj.bless) { return 0; };

		playerObj.missionVote *= 2;

	};


	adjustMissionVotesSafeguard(obj) {

		if (!this.inGame) { return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].safeguard) { continue; };

			if (obj.pA[i].missionVote < 0) {
				obj.pA[i].missionVote *= -1;
			};

		}; //end for

	}; //end adjustMissionVotesSafeguard(obj)


	adjustTeamVotesBless(obj) {

		if (!this.inGame) { return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].bless) { continue; };

			obj.pA[i].teamVote *= 2;

		};

	};


	removeSaintessBuffsAtEndOfRound(obj) {

		if (!this.inGame) { return 0; };

		this.curagaBoostTarget = "nobody chosen";

		for (var i = 0; i < obj.pA.length; i++) {

			obj.pA[i].bless = false;
			obj.pA[i].safeguard = false;

		};

	}; //end removeSaintessBuffsAtEndofRound(obj)


	//like reverseTarget, lullaby, etc. - inside AbilityManager
	adjustSomeDataWhenSaintessOnTheMissionTeam(obj) {

		var reverser = obj.rO.roles["Reverser"];

		reverser.personToReverseVote = "nobody chosen";

		if (reverser.mirrorWorldNormal == "activated") {
			reverser.mirrorWorldNormal = "used";
		};

		if (reverser.mirrorWorldReverse == "activated") {
			reverser.mirrorWorldReverse = "used";
		};


		var babydoll = obj.rO.roles["Baby Doll"];

		if (babydoll.lullabyPowerUsed) {
			babydoll.lullabyPowerUsed = false;
		};


	}; //end adjustSomeDataWhenSaintessOnTheMissionTeam(obj)



}; //end class


module.exports = {
    Saintess
};