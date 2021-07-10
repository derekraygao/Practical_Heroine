var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Esper extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Esper";
        this.alignment = "good";
        this.team = "heroes";

        this.telepathyArray = [];
        this.headacheCharge = 0;
        this.isPsybombActivated = false;

        this.adjectivesArray = ["Happy", "Angry", "Hopping", "Wily", "Dizzy", "Elegant", "Fancy", "Immoral", "Glorious",
        						"Bashful", "Lucky", "Crying", "Nasty", "Mean", "Pulchritudinous", "Affable", "Ardent", 
        						"Capricious", "Cynical", "Generous", "Eccentric", "Ephemeral", "Flippant", "Munificent", 
        						"Sanctimonious", "Strident", "Sublime", "Toxic", "Vociferous", "Wistful", "Querulous"];

        this.pseudonymsArray = ["HPotter", "Pikachu", "Naruto", "ClarkKent", "Madonna", "Simpson", "Mario", "Zelda", 
                      "LaraCroft", "MA Chief", "Pedobear", "Pacman", "Gandalf", "JamesB", "Kermit", "Gollum", 
                      "ScoobyD", "Skywalker", "Goku", "MickeyM", "WinnieP", "SpongeBob", "Bowser", 
                      "Link", "Yoshi", "Scully", "Cartman", "Elsa", "Maleficent", "PrinceCharm", 
                      "Mr.Mxyzptlk", "RoyalPeach", "Hecate", "Mars", "Prometheus", "Cinderella", "Dumbledore", 
                      "Dr.Crazy", "MegaMan", "CloudStrife", "YoMama", "Alucard", "StarFox", 
                      "Mustang", "Katniss", "Mr.Darcy", "JSparrow", "H.Poirot", "Sherlock", "Sephiroth", 
                      "Tidus", "Noctis", "Usagi", "Ichigo", "Belle", "Aurora", "Mulan", "Aerith", "Tifa",
                      "AshKetchum", "SonicH", "TomJerry"];

	}; //end constructor

	//need to clear at end of night
	setTelepathyArray(tArray, obj) {

		this.telepathyArray = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (tArray.includes(obj.pA[i].name)) {
				this.telepathyArray.push(obj.pA[i]);
			};

		}; //end for

	}; //end setTelepathyArray


	chargeUpHeadache() {

		this.headacheCharge += 1;

		return this.headacheCharge;

	};


	activatePsybomb() {

		this.isPsybombActivated = true;

	};


	psyBombVotePower() {

		switch (this.headacheCharge) {

			case 1:
				return 2;

			case 2:
				return 3.5;

			case 3:
				return 5;

			case 4:
				return 7;

			case 5:
				return 8;

			case 6:
				return 10;

			case 7:
				return 12;

			default:
				return 1;

		}; //end switch

	}; //end psyBombVotePower



	adjustMissionVotePsybomb(obj) {

		if (this.isPsybombActivated) {

			obj.pA[this.index].missionVote *= this.psyBombVotePower();

			this.headacheCharge = 0;
			this.isPsybombActivated = false;
		};

	};





	//should be AFTER assignment of roles
	assignPlayersTheirPseudonyms(obj) {

		shuffle(this.adjectivesArray);
		shuffle(this.pseudonymsArray);

		if (!obj.rO.roles["Esper"].inGame) { return 0; };

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].role == "Esper") {
				obj.pA[i].pseudonym = "Esper";
			} else {
				obj.pA[i].pseudonym = this.adjectivesArray[i] + " " + this.pseudonymsArray[i];
			};

		}; //end for

	}; //end assignPlayersTheirPseudonyms


	isMessageComingFromEsper(index, obj) {

		if (obj.pA[index].role == "Esper") {
			return (obj.pA[index].name + " (Esper)");
		} else {
			return (obj.pA[index].pseudonym + " (" 
						+ obj.pA[index].name + ")")
		};

	};


	//pseudonyms assigned when game starts
	//you have socketID, find index from socketID
	convertTelepathMessage(index, message, obj) {

		return (
			{
				esperMessage: 

					{
						sender: this.isMessageComingFromEsper(index, obj),
						message: message
					},

				othersMessage:

					{	//esper's pseudonym is "Esper"
						sender: obj.pA[index].pseudonym,
						message: message
					}
			} //end outer object

		); //end return


	};


	maxAmountOfConnections(obj) {

		switch (obj.rD.missionNo) {

			case 1:
				return 2;

			case 2:
				return (Math.ceil((obj.pA.length / 2)));

			case 3:
				return (Math.ceil((obj.pA.length / 2)));

			case 4:
				return 2;

			case 5:
				return 2;

			case 6:
				return (Math.ceil((obj.pA.length / 2)));


		}; //end switch


	}; //end maxAmountofConnections();


}; //end class


module.exports = {
    Esper
};