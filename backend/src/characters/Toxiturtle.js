var {RolesMasterClass} = require("./RolesMasterClass.js");


class Toxiturtle extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Toxiturtle";
        this.alignment = "evil";
        this.team = "villains";

        this.poisonBeakArray = [];

        this.powersHistoryGlare = 
        {
        	1: "nobody chosen",
        	2: "nobody chosen",
        	3: "nobody chosen",
        	4: "nobody chosen",
        	5: "nobody chosen",
        	6: "nobody chosen",
        	7: "nobody chosen"
        };

	}; //end constructor



	hasItBeenTwoTurnsSincePoisonBeak(obj) {

		if (this.poisonBeakArray.length == 0) { return true; };
		if (this.poisonBeakArray.length >= 2) { return false; };

		if (obj.rD.missionNo >=
			this.poisonBeakArray[0].nextMissionItCanBeUsed)
		{

			return true;
		};

		return false;

	}; //end hasItBeenTwoTurnsSincePoisonBeak(obj)



	//prevent selecting same person twice
	doesPoisonBeakArrayIncludeName(name) {

		for (var i = 0; i < this.poisonBeakArray.length; i++) {

			if (this.poisonBeakArray[i].name == name) {
				return true;
			};

		};

		return false;
	};


	poisonBeak(name, obj) {
		
		var poisonInd = obj.pT[name];

		if (poisonInd == undefined) { return 0; };
		if (this.doesPoisonBeakArrayIncludeName(name)) { return 0; };
		if (!this.hasItBeenTwoTurnsSincePoisonBeak(obj)) { return 0; };
		if (obj.pA[poisonInd].role == "Saintess") { return 0; };

		
		this.poisonBeakArray.push(
			{
				name: name, 
				nextMissionItCanBeUsed: (obj.rD.missionNo + 2),
			}
		);

		obj.pA[poisonInd].poisonCount = 3;

		this.messageHandler("Notify Everyone of Poison Beak", name, obj);

	}; //end poisonBeak



	_67PercentChanceTrue() {

		var ranNum = (Math.floor(Math.random() * 3) + 1);

		if (ranNum === 3) {
			return false;
		};

		return true;

	};


	glare(name, obj) {

		if (this._67PercentChanceTrue()) {
			
			this.powersHistoryGlare[obj.rD.missionNo] = name;

			return "glare succeeded";
		};

		
		return "glare failed";

	};


	poisonedMissionVotePower(poisonCount) {

		switch (poisonCount) {

			case 3:
				return -5;

			case 2:
				return -3;

			case 1:
				return -1;

			default:
				return 1;

		};

	}; //end poisonedMissionVotePower(poisonCount)



	adjustMissionVotesPoisoned(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].poisonCount > 0) {
				
				//console.log(obj.pA[i].name + ", poison Count" + obj.pA[i].poisonCount);
				obj.pA[i].missionVote = 
				this.poisonedMissionVotePower(obj.pA[i].poisonCount);

			}; //end if

		}; //end for

	}; //end adjustMissionVotesPoisoned(obj)




	//need to separate out set/remove paralysis because 
	//Noah's thunderwave also causes paralysis, so need to 
	//group them together, to prevent the two powers from 
	//affecting each other
	adjustGlareSetParalysis(obj) {

		if (!this.inGame) { return 0; };

	    var glareTarget = this.powersHistoryGlare[obj.rD.missionNo];

	    if (glareTarget !== "nobody chosen") {

	      var gInd = obj.pT[glareTarget];
	      if (gInd !== 0 && !gInd) { return 0; };

	      obj.pA[gInd].paralyzed = true;

	    }; //end if


	}; //end adjustGlare


	adjustGlareRemoveParalysis(obj) {

		if (!this.inGame) { return 0; };

	    //need to do !== otherwise accesss powerHistory[-1] that does not exist
	    if (obj.rD.missionNo !== 1) {

	      var glareTargetPrev = this.powersHistoryGlare[(obj.rD.missionNo - 1)];

	      if (glareTargetPrev !== "nobody chosen") {

	        var gInd = obj.pT[glareTargetPrev];
	        if (gInd !== 0 && !gInd) { return 0; };

	        obj.pA[gInd].paralyzed = false;

	      };

	    }; //end if missionNo !== 1

	}; //end adjustGlareRemoveParalysis




	messageHandler(power, data, obj) {

		if (power == "Notify Everyone of Poison Beak") {

			var sysMess = {
							type: "urgent",
							message: ("Toxiturtle: Turtles are reptiles, not amphibians! Ignorant fool! Well, whatever. With the power of my Poison Beak, " + data + " was inflicted with a Poison Count of 3! KEKEKE! Just try putting him/her on a Mission Team! My toxins are unbeatable!")
						  };

			var stackObj = {
							type: "SME Music",
							data: {messageObj: sysMess, song: "Poison Beak"}
						   };

			obj.stack.push(stackObj);


		}; //end if power == "Notify Everyone of Poison Beak"


	}; //end messageHandler




}; //end class Toxiturtle

module.exports = {
    Toxiturtle
};