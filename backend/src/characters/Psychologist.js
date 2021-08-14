var {RolesMasterClass} = require("./RolesMasterClass.js");
var {shuffle} = require("./shuffle.js");

class Psychologist extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Psychologist";
        this.alignment = "evil";
        this.team = "villains";

        this.powersHistory = 
        {
        	1: {"predictionArray": "no array"},
            2: {"predictionArray": "no array"},
            3: {"predictionArray": "no array"},
            4: {"predictionArray": "no array"},
            5: {"predictionArray": "no array"},
            6: {"predictionArray": "no array"},
            7: {"predictionArray": "no array"},
        };

        this.revealRoleUsed = false;
        this.reveal1Good1BadUsed = false;

        this.goodRoles7or9 = ["Princess", "Saintess", "Ichigo", "Marcus", 
                              "Lottie", "Lan", "Seer", "Balancer", "Esper", 
                              "Pear", "Detective Chat", "Aura Knight", 
                              "Ranger", "Scientist", "Oracle", "Jailer", 
                              "Sensor"];

        //no Ichigo or Saintess
        this.goodRoles = ["Princess", "Seer", "Balancer", "Esper", 
                          "Pear", "Lan", "Marcus", "Lottie", 
                          "Detective Chat", "Aura Knight", 
                          "Ranger", "Scientist", "Oracle", 
                          "Jailer", "Sensor"];

        //20% chance of choosing psychologist, so psychologist
        //can choose to reveal him/herself without people
        //thinking he/she is most likely psychologist
        this.badRoles = ["Umbra Lord", "Hecate", "Bomberman", 
                         "Lieutenant Blitz", "Reverser", "Noah",  
                         "Delayer", "Persequor", "Baby Doll",
                         "Spiritualist", "Backstabber", "Toxiturtle", 
                         "Kaguya", "Psychologist", "Psychologist",
                         "Psychologist"];




	}; //end constructor

	
    setPredictionArray(arr, obj) {

        this.powersHistory[obj.rD.missionNo].predictionArray = arr;

    };


    predictionNegativeVotePower(obj) {

        if (obj.pA.length <= 7) {

            switch (obj.rD.missionTeam.length) {

                case 2:
                    return -1;

                case 3: 
                    return -1.5;

                case 4: 
                    return -2;

                case 5:
                    return -3;

                //for 7 and & players, no mission team is 
                //greater than size of 5

                default:
                    return 0;

            }; //end switch

        }; //end if (obj.pA.length <= 7)


        switch (obj.rD.missionTeam.length) {

            case 2:
                return -1.5;

            case 3: 
                return -2;

            case 4: 
                return -2.5;

            case 5:
                return -3;

            case 6:
                return -3.5;

            case 7:
                return -4;

            case 8:
                return -6;

            //no team size is greater than 8


            default:
                return 0;

        }; //end switch


    }; //end predictionNegativeVotePower(obj)


    wasMissionTeamPredictionCorrect(obj) {

        var predictedTeam = this.powersHistory[obj.rD.missionNo].predictionArray;
        if (predictedTeam == "no array") { return false; };

        var predictedCount = 0;

        for (var i = 0; i < obj.rD.missionTeam.length; i++) {

            if (predictedTeam.includes(obj.rD.missionTeam[i])) {
                predictedCount += 1;
            };

        };
    

        if (predictedCount == obj.rD.missionTeam.length) {
            return true;
        };


        return false;

    }; //end wasMissionTeamPredictionCorrect()


    adjustNegativeVotesPrediction(negativeVoteSum, obj) {

        if (!this.wasMissionTeamPredictionCorrect(obj)) { return negativeVoteSum; };

        var negativePowerIncrease = this.predictionNegativeVotePower(obj);

        return (negativeVoteSum + negativePowerIncrease);

    };


    getOppositeRandomRole(team, obj) {

        if (team == "villains") {

            if ((obj.pA.length % 2) == 1) {

                shuffle(this.goodRoles7or9);
                return this.goodRoles7or9[0];

            };

            shuffle(this.goodRoles);
            return this.goodRoles[0];

        } else {

            shuffle(this.badRoles);
            return this.badRoles[0];

        };

    }; //end getRandomRole(team, obj)


    revealOneBadOneGoodPlayer(arrayOfTwoNames) {

        shuffle(arrayOfTwoNames);

        return arrayOfTwoNames;

    };


    revealOnePlayersRole(name, obj) {

        var ind = obj.pT[name];

        if (ind !== 0 && !ind) { return 0; };

        var realRole = obj.pA[ind].role;

        if (["Princess", "Seer", "Aura Knight", "Oracle"].
            includes(realRole)) {

            realRole = "Princess, Seer, Aura Knight, or Oracle";

        };


        var oppositeFakeRole = this.getOppositeRandomRole(obj.rO.rolesInGame[ind].team, obj);

        if (["Princess", "Seer", "Aura Knight", "Oracle"].
            includes(oppositeFakeRole)) {

            oppositeFakeRole = "Princess, Seer, Aura Knight, or Oracle";

        };


        var twoPossibleRoles = [realRole, oppositeFakeRole];
        
        shuffle(twoPossibleRoles);

        return twoPossibleRoles;

    };






}; //end class Psychologist


module.exports = {
    Psychologist
};