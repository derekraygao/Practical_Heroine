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
	/*selectedForTelepathy status is reset on client side 
	automatically once night phase ends*/
	setTelepathyArray(tArray, obj) {

		this.telepathyArray = [];
		var stackObj = {};

		for (var i = 0; i < obj.pA.length; i++) {

			if (tArray.includes(obj.pA[i].name) ||
				i == this.index) {

				this.telepathyArray.push(obj.pA[i]);

				this.messageHandler(
									"Set Frontend Telepathy Status To True", 
									obj.pA[i].socketID, 
									obj
								   );


			}; //end if

		}; //end for


	}; //end setTelepathyArray


	resetTelepathyArrayAtEndOfRound() {

		if (!this.inGame) { return 0; };

		this.telepathyArray = [];

	};


	chargeUpHeadache() {

		this.headacheCharge += 1;

		return this.headacheCharge;

	};


	activatePsybomb(obj) {

		this.isPsybombActivated = true;

		this.messageHandler(
							"Activate Psybomb", 
							obj.pA[this.index].socketID, 
							obj
						   );


	}; //end activatePsybomb


	psyBombVotePower() {

		switch (this.headacheCharge) {

			case 0:
				return 1;

			case 1:
				return 2;

			case 2:
				return 3.5;

			case 3:
				return 5;

			case 4:
				return 7;

			default:
				return 8.5;

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

		if (!obj.rO.roles["Esper"].inGame) { return 0; };

		shuffle(this.adjectivesArray);
		shuffle(this.pseudonymsArray);

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].role == "Esper") {
				obj.pA[i].pseudonym = "Esper";
			} else {
				obj.pA[i].pseudonym = this.adjectivesArray[i] + " " + this.pseudonymsArray[i];
			};

		}; //end for

	}; //end assignPlayersTheirPseudonyms


	isMessageComingFromEsper(obj, index) {

		if (obj.pA[index].role == "Esper") {
			return (obj.pA[index].name + " (Esper)");
		} else {
			return (obj.pA[index].pseudonym + " (" 
						+ obj.pA[index].name + ")")
		};

	};


	//pseudonyms assigned when game starts
	//you have socketID, find index from socketID
	convertEsperMessage(message, obj) {

		return (
			{
				esperMessage: 

					{
						sender: this.isMessageComingFromEsper(obj, obj.index),
						message: message
					},

				othersMessage:

					{	//esper's pseudonym is "Esper"
						sender: obj.pA[obj.index].pseudonym,
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


	messageHandler(power, socketID, obj) {

		if (power == "Set Frontend Telepathy Status To True") {

			var stackObj = {

								type: "Individual",
								socketID: socketID,
								destination: "Update Character Status",
								data: {
										status: "selectedForTelepathy",
										newValue: true
									  }

						   };

			obj.stack.push(stackObj);


		} else if (power == "Activate Psybomb") {

			var sysMess = {
							type: "power",
							message: ("Your psybomb has a base "
									+ "mission voting power of: " 
									+ this.psyBombVotePower() + ".")
						  };

			var stackObj = {
							type: "Individual",
							socketID: socketID,
							destination: "Add System Message",
							data: sysMess
						   };

			obj.stack.push(stackObj);

		}; //end else if


	}; //end messageHandler


	//returns true/false for if you are target of telepathy
	rejoinInfo(name) {

		if (!this.inGame) { return false; };

		var forLength = this.telepathyArray.length;

		for (var i = 0; i < forLength; i++) {

			if (this.telepathyArray[i].name == name) {
				return true;
			};

		};

		return false;

	}; //end rejoinInfo



}; //end class


module.exports = {
    Esper
};