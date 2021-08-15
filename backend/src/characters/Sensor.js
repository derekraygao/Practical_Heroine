var {RolesMasterClass} = require("./RolesMasterClass.js");
var {formatArrayIntoString} = require ("./functions/formatArrayIntoString.js");
var {returnStackMessageObject} = require ("./functions/returnStackMessageObject.js");

class Sensor extends RolesMasterClass {

	constructor() {
      	
		super();

        this.role = "Sensor";
        this.alignment = "good";
        this.team = "heroes";

        this.diagnosisStatus = "Not Activated";

        //scanType is "Scan All" or "Scan Individual"
        this.powersHistory = {
        						1: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        						2: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        						3: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        						4: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        						5: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        						6: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        						7: {"scanType": "none", "target": "nobody chosen", "condition": "none"},
        					 };

	}; //end constructor


	setScan(scanObj, obj) {

		this.powersHistory[obj.rD.missionNo] = scanObj;

	};



	scanBomb(obj) {

		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {
			if (obj.pA[i].bomb) {
				statusArr.push(obj.pA[i].name);
			};
		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanBurn(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].burnCount > 0) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanSoulSea(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].soulMark) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanPoison(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].poisonCount > 0) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};







	scanShrink(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].shrinkCount > 0) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};



	scanMultiplier(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].multiplier > 1) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanBoost(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].boost > 0) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};



	scanInjury(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].injuredCount > 0) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};



	scanEntrancement(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].entranced) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};



	/*for now, confusion not necessary since only Lan inflicts
	it during PP1, and it only lasts that turn, and frozen also
	only lasts one turn (though it can be detected since it 
	is placed prior to the current turn)*/
	scanConfusion(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].confused) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanParalysis(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].paralyzed) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};



	scanMarkedMan(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].markedMan) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanSlow(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].slow) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	scanSlowCharge(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].slowCharge != 0) {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};



	scanZombie(obj) {
		
		var statusArr = [];

		for (var i = 0; i < obj.pA.length; i++) {

			if (obj.pA[i].zombie == "zombie") {
				statusArr.push(obj.pA[i].name);
			};

		};


		if (statusArr.length == 0) { statusArr = "Nobody"};

		return statusArr;

	};


	//Ability Manager After Power Phase 1
	sendScanResultsToSensor(obj) {

		if (!this.inGame) { return 0; };

		var scanObj = this.powersHistory[obj.rD.missionNo];

		if (scanObj["scanType"] == "none")
			{ return 0; };


		if (scanObj["scanType"] == "Scan Individual") {

			this.scanOne(scanObj["target"], obj);

		} else if (scanObj["scanType"] == "Scan All") {

			this.scanAll(scanObj["condition"], obj);
		};


	}; //end sendScanResultsToSensor(obj)


	scanAll(condition, obj) {

		var statusArr;

		switch(condition) {

			case "FS Bomb":
				statusArr = this.scanBomb(obj);
				break;

			case "Burn":
				statusArr = this.scanBurn(obj);
				break;

			case "Soul Mark":
				statusArr = this.scanSoulSea(obj);
				break;

			case "Poison":
				statusArr = this.scanPoison(obj);
				break;

			case "Shrink":
				statusArr = this.scanShrink(obj);
				break;

			case "Multiplier":
				statusArr = this.scanMultiplier(obj);
				break;

			case "Boost":
				statusArr = this.scanBoost(obj);
				break;

			case "Injury":
				statusArr = this.scanInjury(obj);
				break;

			case "Entrancement":
				statusArr = this.scanEntrancement(obj);
				break;

			case "Marked Man":
				statusArr = this.scanMarkedMan(obj);
				break;

			case "Slow":
				statusArr = this.scanSlow(obj);
				break;

			case "Slow Charge":
				statusArr = this.scanSlowCharge(obj);
				break;

			case "Zombie":
				statusArr = this.scanZombie(obj);
				break;

			default:
				statusArr = [];
				break;

		}; //end switch


		//console.log(formatArrayIntoString(statusArr));

		var sysMess = {
						type: "power",
						message: ("The following players are "
							+ "afflicted with " + "'"
							+ condition + "': "
							+ formatArrayIntoString(statusArr))
							+ "."
					  };

		var stackObj = {
						type: "Individual",
						socketID: this.socketID,
						destination: "Add System Message",
						data: sysMess
					   };

		obj.stack.push(stackObj);		


	}; //end scanAll



	getScanResultsForOnePerson(name, obj) {

		var ind = obj.pT[name];

		var individualStatusArr = [];

		if (obj.pA[ind].corrupted) { individualStatusArr.push("Corruption"); };
		if (obj.pA[ind].soulMark) { individualStatusArr.push("Soul Mark"); };
		if (obj.pA[ind].zombie == "zombie") { individualStatusArr.push("Zombie"); };
		if (obj.pA[ind].poisonCount > 0) { individualStatusArr.push("Poison"); };

		if (obj.pA[ind].bomb) { individualStatusArr.push("Flame Seal Bomb"); };
		if (obj.pA[ind].burnCount > 0) { individualStatusArr.push("Burn"); };
		if (obj.pA[ind].paralyzed) { individualStatusArr.push("Paralysis"); };
		if (obj.pA[ind].frozen) { individualStatusArr.push("Freeze"); };
		if (obj.pA[ind].confused) { individualStatusArr.push("Confusion"); };
		if (obj.pA[ind].entranced) { individualStatusArr.push("Entrancement"); };

		if (obj.pA[ind].injuredCount > 0) { individualStatusArr.push("Injury"); };
		if (obj.pA[ind].markedMan) { individualStatusArr.push("Marked Man"); };

		if (obj.pA[ind].boost > 0) { individualStatusArr.push("Boost"); };
		if (obj.pA[ind].multiplier > 1) { individualStatusArr.push("Multiplier"); };
		if (obj.pA[ind].shrinkCount > 0) { individualStatusArr.push("Shrink"); };
		if (obj.pA[ind].slow) { individualStatusArr.push("Slow"); };
		if (obj.pA[ind].slowCharge != 0) { individualStatusArr.push("Slow Charge"); };
		

		if (individualStatusArr.length == 0) { individualStatusArr.push("Nothing"); };

		return individualStatusArr;

	};


	scanOne(name, obj) {

		var statusString = formatArrayIntoString(this.getScanResultsForOnePerson(name, obj));

		//console.log(statusString);

		var sysMess = {
						type: "power",
						message: (name + " has the following "
							+ "status conditions: "
							+ statusString + ".")
					  };

		var stackObj = {
						type: "Individual",
						socketID: this.socketID,
						destination: "Add System Message",
						data: sysMess
					   };

		obj.stack.push(stackObj);

	}; //end scanOne


	//voting power of -1.5 is handled in Controller.setPlayerMissionVote()
	testResults(name, obj) {

		var testResultsString = formatArrayIntoString(this.getScanResultsForOnePerson(name, obj));

		//console.log(testResultsString);

		var sysMess = {
						type: "power",
						message: ("Sensor " 
							+ obj.pA[this.index].name 
							+ " has your test results! "
							+ "You suffer from the following "
							+ "status conditions: " 
							+ testResultsString)
					  };

		var stackObj = {
						type: "Individual",
						socketID: obj.pA[obj.pT[name]].socketID,
						destination: "Add System Message",
						data: sysMess
					   };


		obj.stack.push(stackObj);

	};



	isStatusNormal(playerObj) {

		if (playerObj.corrupted) { return false; };
		if (playerObj.soulMark) { return false; };
		if (playerObj.zombie == "zombie") { return false; };
		if (playerObj.poisonCount > 0) { return false; };

		if (playerObj.bomb) { return false; };
		if (playerObj.burnCount > 0) { return false; };
		if (playerObj.entranced) { return false; };

		if (playerObj.injuredCount > 0) { return false; };
		if (playerObj.markedMan) { return false; }

		if (playerObj.boost > 0) { return false; };
		if (playerObj.multiplier > 1) { return false; };
		if (playerObj.shrinkCount > 0) { return false; };
		if (playerObj.slow) { return false; }
		if (playerObj.slowCharge != 0) { return false; }

		return true;
		
	}; //end isStatusNormal


	numberOfMissionTeamSufferingAStatusCondition(obj) {

		var numSuffering = 0;
		var forLength = obj.pA.length;
		var i = 0;

		for (i; i < forLength; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			if (!this.isStatusNormal(obj.pA[i])) {
				numSuffering += 1;
			};

		}; //end for


		return numSuffering;

	}; //end numberOfMissionTeamSufferingAStatusCondition()



	activateDiagnosis(guess, obj) {

		var trueNumber = this.numberOfMissionTeamSufferingAStatusCondition(obj);

		if (guess == trueNumber) {

			var mess = ("Diagnosis: You guessed correctly! " + guess + " people on the Mission Team are suffering from a status condition. +2 to the Mission Team's vote sum!");

			this.messageHandler("Diagnosis", mess, obj);			

			this.diagnosisStatus = "Correct";


		} else {

			var mess = ("Diagnosis: Wrong! " + trueNumber + " people, not " + guess + " people, on the Mission Team are suffering from a status condition. -2 to the Mission Team's vote sum!");

			this.messageHandler("Diagnosis", mess, obj);

			this.diagnosisStatus = "Wrong";	

		}; //end else


	}; //end activateDiagnosis


	adjustVoteSumDiagnosis(voteSum) {

		if (this.diagnosisStatus == "Not Activated") { return voteSum; };


		if (this.diagnosisStatus == "Correct") {

			voteSum += 2;

		} else {

			voteSum -= 2;

		};


		this.diagnosisStatus = "Not Activated";


		return voteSum;


	}; //end diagnosis


	messageHandler(power, data, obj) {


		if (power == "Diagnosis") {

			var sysMess = {
							type: "power",
							message: data
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	

		}; //end if power == Diagnosis


	}; //end messageHandler





}; //end class


module.exports = {
    Sensor
};