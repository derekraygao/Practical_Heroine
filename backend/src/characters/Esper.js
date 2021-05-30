var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Esper extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Esper";
        this.alignment = "good";
        this.team = "heroes";

        this.telepathyArray = [];

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

	//don't need to clear array after night time, just rewrite over/reassign
	setTelepathyArray(array) {

		this.telepathyArray = array;

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

					{
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