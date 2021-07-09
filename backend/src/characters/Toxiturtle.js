var {RolesMasterClass} = require("./RolesMasterClass.js");


class Toxiturtle extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Baby Doll";
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



	poisonBeak(name, obj) {

		var poisonInd = obj.pT[name];

		if (poisonInd !== 0 && !poisonInd) { return 0; };

		if (this.poisonBeakArray.includes(name)) { return 0; };

		if (this.poisonBeakArray.length > 2) { return 0; };

		this.poisonBeakArray.push(name);

		obj.pA[poisonInd].poisonCount = 3;

	};


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


	//inside AbilityManager
	reducePoisonCounter(obj) {

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].poisonCount > 0) {

				obj.pA[i].poisonCount -= 1;

			};

		}; //end for

	}; //end reducePoisonCounter()


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



}; //end class Toxiturtle

module.exports = {
    Toxiturtle
};