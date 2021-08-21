var {RolesMasterClass} = require("./RolesMasterClass.js");



class Pharaoh extends RolesMasterClass {


	constructor() {
      	
		super();

        this.role = "Pharaoh";
        this.alignment = "good";
        this.team = "heroes";

        this.ritualCount = 0;
        this.obliterateActivated = false;

        this.friendshipTarget = "nobody chosen";
        this.friendshipEffect = "none";

        this.darkMagicAttackTarget = "nobody chosen";

        this.destinyDrawEffectsArray = 
        ["Multiplier", "Boost", "Injury", "Slow", "Safeguard", 
        "Bless", "Heartache Defense", "Therapy", "Group Hug"];

	}; //end constructor



	increaseRitualCount() {

		this.ritualCount += 1;

	};


	activateObliterate() {

		if (this.ritualCount >= 3) {
			this.obliterateActivated = true;
		};

	}; //end activateObliterate



	setDarkMagicAttackTarget(target, obj) {

		if (["Saintess", "Umbra Lord"].includes(obj.pA[obj.pT[target]].role)) { return 0; };

		this.darkMagicAttackTarget = target;

	};


	/*no need to check curagaboosttarget since this occurs before
	curage can be cast */
	useDarkMagicAttack(obj) {

		if (this.darkMagicAttackTarget == "nobody chosen") { return 0; };

	    var pObj = obj.pA[obj.pT[this.darkMagicAttackTarget]];
	    this.darkMagicAttackTarget = "nobody chosen";

	    pObj.energyPool -= 3;

	    pObj.corrupted = false;
	    pObj.soulMark = false;
	    pObj.poisonCount = 0;
	    pObj.zombie = "human";

	    pObj.bomb = false;
	    pObj.burnCount = 0;
	    pObj.paralyzed = false; 
	    pObj.confused = false;
	    pObj.entranced = false;

	    pObj.injuredCount = 0;
	    pObj.markedMan = false;

	    pObj.boost = 0;
	    pObj.multiplier = 1;
	    pObj.shrinkCount = 0;
	    pObj.slow = false;
	    pObj.slowCharge = 0;
	    
	    

	    pObj.safeguard = false;
	    pObj.bless = false;
	    pObj.heartacheDefense = false;
	    pObj.therapy = false;
	    pObj.groupHug = false;


	    if (pObj.frozen) {

			pObj.frozen = false;

			this.messageHandler("Unfreeze", {socketID: pObj.socketID}, obj);

		};


		this.messageHandler("Dark Magic Attack", pObj.socketID, obj);


  	}; //end useDarkMagicAttack()




	destinyDraw(target, obj) {

		var rndInt = (Math.floor(Math.random() * 9));

		var rndFactor = (Math.floor(Math.random() * 4) + 1);

		var statusObj = {
						 "caster": this.name,
						 "target": target,
						 "effect": this.destinyDrawEffectsArray[rndInt],
						 "factor": rndFactor
						};

		if (!["Saintess", "Umbra Lord"].includes(obj.pA[obj.pT[target]].role)) {
			obj.sE.push(statusObj);
		};
		console.log(statusObj);

		this.messageHandler("Destiny Draw", statusObj, obj);

	}; //end destinyDraw()



	getTargetsPreviousMissionVote(name, obj) {

		var prevMissionNo = (obj.rD.missionNo - 1);

		//form is: [{name: , vote: }]
		var prevMVoteArr = obj.rI.missionInfo[prevMissionNo].votingArray;

		for (var i = 0; i < prevMVoteArr.length; i++) {

			if (prevMVoteArr[i].name == name) {
				return prevMVoteArr[i].vote;
			};

		}; //end for

		return 0;

	}; //end getTargetsPreviousMisisonVote



	addFriendTargetAndEffect(name, obj) {

		this.friendshipTarget = name;

		var prevMV = this.getTargetsPreviousMissionVote(name, obj);


		if (prevMV > 0) {

			this.friendshipEffect = "Subtract 2.5";

		} else {

			this.friendshipEffect = "Guarantee Positive";

		};


		this.messageHandler("Symbol of Friendship", name, obj);


	}; //end addFriendTargetAndEffect


	//this.index refers to Pharaoh
	//targetInd refers to friendshipTarget
	areBothPharaohAndTargetOnTheMissionTeamTogether(targetInd, obj) {

		if (obj.pA[targetInd].selectedForMission &&
			obj.pA[this.index].selectedForMission) {

			return true;
		};

		return false;

	}; //end areBothPharaohAndTargetOnTheMissionTeamTogether(obj)



	adjustMissionVotesFriendship(obj) {

		if (this.friendshipEffect !== "Guarantee Positive") { return 0; };


		var targetInd = obj.pT[this.friendshipTarget];

		if (!this.areBothPharaohAndTargetOnTheMissionTeamTogether(targetInd, obj)) { return 0; };


		if (obj.pA[this.index].missionVote < 0) {
			obj.pA[this.index].missionVote *= -1;
		};


		if (obj.pA[targetInd].role == "Umbra Lord") { return 0; };

		if (obj.pA[targetInd].missionVote < 0) {
			obj.pA[targetInd].missionVote *= -1;
		};


	}; //end adjustMissionVotesFriendship



	adjustVoteSumFriendship(voteSum, obj) {

		if (this.friendshipEffect !== "Subtract 2.5") { return voteSum; };
	
		var targetInd = obj.pT[this.friendshipTarget];	
		if (!this.areBothPharaohAndTargetOnTheMissionTeamTogether(targetInd, obj)) { return voteSum; };

		return (voteSum - 2.5);

	}; //end adjustVoteSumFriendship(voteSum)



	/*at end of round: after mission vote, before night phase */
	resetData() {

		this.friendshipEffect = "none";
		this.friendshipTarget = "nobody chosen";

	};




	friendshipMessageForPharaoh() {

		if (this.friendshipEffect == "Guarantee Positive") {

			return (this.friendshipTarget + "'s final voting power on the last mission was <= 0! For this mission round only, if both you and " + this.friendshipTarget + " are on the Mission Team together, both of your F.V.P. will be guaranteed positive!");

		} else {

			return ("Whoops! " + this.friendshipTarget + "'s final voting power on the last mission was > 0! For this mission round only, if both you and " + this.friendshipTarget + " are on the Mission Team together, the Mission Team's vote sum will be decrease by 2.5!");

		};

	}; //end friendshipMessageForPharaoh()



	friendshipMessageForTarget() {

		if (this.friendshipEffect == "Guarantee Positive") {

			return ("Pharaoh: Because your final voting power on the last mission was <= 0, we will use the power of our friendship for this round! If both you and I, the Pharaoh, are on the Mission Team together this round, both of our F.V.P. will be guaranteed positive!");

		} else {

			return ("Pharaoh: True, friends are people to rely on, to help us in our darkest moments. But sometimes, you must draw strength from within yourself and stand on your own two feet. Because your F.V.P. on the last Mission was > 0, if you and I, the Pharaoh, are on the Mission Team together this round, then the Mission Team's vote sum will be decreased by 2.5!");

		};

	}; //end friendshipMessageForTarget()



	messageHandler(power, data, obj) {
		
		if (power == "Symbol of Friendship") {

			/*Message for Pharaoh */
			var sysMess = {
							type: "power",
							message: this.friendshipMessageForPharaoh()
						  };

			var stackObj = {
							type: "SMI",
							socketID: this.socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj);	
		

			/*Message For Friend */
			sysMess = {
						type: "power",
						message: this.friendshipMessageForTarget()
					  };


			stackObj = {
						type: "SMI",
						socketID: obj.pA[obj.pT[data]].socketID,
						data: sysMess
					   };

			obj.stack.push(stackObj);



		} else if (power == "Destiny Draw") {


			var powerString = "";

			if (["Multiplier", "Boost"].includes(data.effect)) {
				powerString = " (" + data.factor + ")";
			};


			var sysMess = {
							type: "power",
							message: ("Destiny lies at the end of all paths. Destiny Draw imbues you with the Effect of: " + data.effect + powerString + ".")
						  };

			var stackObj1 = {
							type: "SMI",
							socketID: obj.pA[obj.pT[data.target]].socketID,
							data: sysMess
						   };

			obj.stack.push(stackObj1);


			if (data.target !== this.name) {

				sysMess = {
							type: "power",
							message: ("The power of 'Destiny Draw' imbues " + data.target + " with the Effect of: " + data.effect + powerString + ".")
						  };

				var stackObj2 = {
								 type: "SMI",
								 socketID: this.socketID, 
								 data: sysMess
							    };

				obj.stack.push(stackObj2);

			}; //end if data.target !== this.name



		} else if (power == "Unfreeze") {


			var stackObj = {

							type: "Individual",
							socketID: data.socketID,
							destination: "Update Character Status",
							data: {status: "frozen", newValue: false}

						   };

			obj.stack.push(stackObj);


		} else if (power == "Dark Magic Attack") {


			var sysMess = {
							type: "urgent",
							message: ("The Pharaoh's faithful protector blasts you with a wave of shadow energy. ALL status conditions (good, bad, neutral) affecting you have been neutralized. However, the leftover shadow energy adds a charge of -3 to your current Energy Pool.")
						  };

			var stackObj = {
							 type: "SMI",
							 socketID: data, //data == target's socketID 
							 data: sysMess
						   };

			obj.stack.push(stackObj);


		}; //end if power == "Dark Magic Attack"




	}; //end messageHandler(power, data, obj)




}; //end class


module.exports = {
    Pharaoh
};