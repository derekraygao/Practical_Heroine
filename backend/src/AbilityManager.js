

class AbilityManager {

  constructor() {



  }; //end constructor


  updateStatusConditions(obj) {

    for (var i = 0; i < obj.pA.length; i++) {

      this.handleFrozenStatusTrue(obj.pA[i], obj);
      obj.pA[i].frozen = false;

      obj.pA[i].confused = false;

      obj.pA[i].paralyzed = false;

      obj.pA[i].slow = false;


      obj.pA[i].bless = false;
      obj.pA[i].safeguard = false;


      if (obj.pA[i].burnCount > 0) {
        obj.pA[i].burnCount += 1;
      };


      if (obj.pA[i].shrinkCount > 0) {
        obj.pA[i].shrinkCount -= 1;
      };


      if (obj.pA[i].injuredCount > 0) {
        obj.pA[i].injuredCount -= 1;
      };


    }; //end for 

  }; //end resetCertainStatuses



  //obj.sE = [{target: "Derek", effect: "Freeze", factor: 2}]
  handleStatusEffectsArray(obj) {

    var forLength = obj.sE.length;

    for (var i = 0; i < forLength; i++) {

      switch (obj.sE[i].effect) {


        case "Soul Mark":
          this.applySoulMark(obj.sE[i].target, obj);
          break;

        case "Poison":
          this.applyPoison(obj.sE[i].target, obj.sE[i].factor, obj);
          break;

        case "Zombie":
          this.applyZombie(obj.sE[i].target, obj);
          break;



        case "Burn":
          this.applyBurn(obj.sE[i].target, obj);
          break;

        case "F.S. Bomb":
          this.applyFSBomb(obj.sE[i].target, obj);
          break;

        case "Freeze":
          this.applyFreeze(obj.sE[i].target, obj);
          break;

        case "Paralysis":
          this.applyParalysis(obj.sE[i].target, obj);
          break;

        case "Confusion":
          this.applyConfusion(obj.sE[i].target, obj);
          break;

        case "Entrancement":
          this.applyEntrancement(obj.sE[i].target, obj);
          break;



        case "Injury":
          this.applyInjury(obj.sE[i].target, obj);
          break;

        case "Bounty":
          this.applyBounty(obj.sE[i].target, obj);
          break;



        case "Slow":
          this.applySlow(obj.sE[i].target, obj);
          break;

        case "Shrink":
          this.applyShrink(obj.sE[i].target, obj);
          break;

        case "Multiplier":
          this.applyMultiplier(obj.sE[i].target, obj.sE[i].factor, obj);
          break;

        case "Boost":
          this.applyBoost(obj.sE[i].target, obj.sE[i].factor, obj);
          break;



        case "Safeguard":
          this.applySafeguard(obj.sE[i].target, obj);
          break;

        case "Bless":
          this.applyBless(obj.sE[i].target, obj);
          break;

        case "Heartache Defense": 
          this.applyHeartacheDefense(obj.sE[i].target, obj);
          break;

        case "Therapy":
          this.applyTherapy(obj.sE[i].target, obj);
          break;

        case "Group Hug":
          this.applyGroupHug(obj.sE[i].target, obj);
          break;



        default:
          break;

      }; //end switch

    }; //end for

    /*array is cleared inside 
    Controller.resetDataAtEndOfMission*/

  }; //end applyStatusEffects



  applySoulMark(target, obj) {

    obj.pA[obj.pT[target]].soulMark = true;

  };


  applyPoison(target, factor, obj) {

    obj.pA[obj.pT[target]].poisonCount += factor;

  };


  applyZombie(target, obj) {

    obj.pA[obj.pT[target]].zombie = "zombie";

  };




  applyFSBomb(target, obj) {

    obj.pA[obj.pT[target]].bomb = true;

  };


  applyBurn(target, obj) {

    obj.pA[obj.pT[target]].burnCount += 1;

  };


  applyFreeze(target, obj) {

    var targetPObj = obj.pA[obj.pT[target]];

    targetPObj.frozen = true;

      var stackObj1 = {
              type: "Individual",
              socketID: targetPObj.socketID,
              destination: "Update Character Status",
              data: {status: "frozen", newValue: true}
               };

      var stackObj2 = {
              type: "SMI",
              socketID: targetPObj.socketID,
              data: {
                  type: "urgent",
                  message: ("You were frozen! For "
                  + "Mission " + (obj.rD.missionNo + 1)
                  + ", you won't be able to use any "
                  + "of your powers!")
                  }
               };

      obj.stack.push(stackObj1);
      obj.stack.push(stackObj2);

  };


  applyParalysis(target, obj) {

    obj.pA[obj.pT[target]].paralyzed = true;

  };


  applyConfusion(target, obj) {

    obj.pA[obj.pT[target]].confused = true;

  };


  applyEntrancement(target, obj) {

    obj.pA[obj.pT[target]].entranced = true;

  };




  applyInjury(target, obj) {

    obj.pA[obj.pT[target]].injuredCount += 2;

  };


  applyBounty(target, obj) {

    obj.pA[obj.pT[target]].markedMan = true;

  };




  applySlow(target, obj) {

    obj.pA[obj.pT[target]].slow = true;

  };


  applyShrink(target, obj) {

    obj.pA[obj.pT[target]].shrinkCount += 2;

  };


  applyMultiplier(target, factor, obj) {

    obj.pA[obj.pT[target]].multiplier *= factor;

  };


  applyBoost(target, factor, obj) {
    
    obj.pA[obj.pT[target]].boost += factor;

  };





  applySafeguard(target, obj) {

    obj.pA[obj.pT[target]].safeguard = true;

  };


  applyBless(target, obj) {

    obj.pA[obj.pT[target]].bless = true;

  };


  applyHeartacheDefense(target, obj) {

    obj.pA[obj.pT[target]].heartacheDefense = true;

  };


  applyTherapy(target, obj) {

    obj.pA[obj.pT[target]].therapy = true;

  };


  applyGroupHug(target, obj) {

    obj.pA[obj.pT[target]].groupHug = true;

  };



  //need to be careful WHEN mission no is updated
  updateNoahAbilities(obj) {

    if (!obj.rO.roles["Noah"].inGame) { return 0; };

    obj.rO.roles["Noah"].adjustIcePunch(obj);

    obj.rO.roles["Noah"].adjustZombieStatus(obj);

  }; //end updateNoahAbilities


  updateToxiturtleAbilities(obj) {

    var toxiturtle = obj.rO.roles["Toxiturtle"];
    if (!toxiturtle.inGame) { return 0; };

    toxiturtle.reducePoisonCounter(obj);
  

  }; //end updateToxiturtleAbilities(obj)


  updateParalysisAbilitiesEffect(obj) {

    obj.rO.roles["Noah"].addThunderWaveEffect(obj);
    obj.rO.roles["Toxiturtle"].adjustGlareSetParalysis(obj);

  }; //end updateParalysisAbilitiesEffect(obj)


  //needs to be before you reset frozen to false
  handleFrozenStatusTrue(playerObj, obj) {

    if (!playerObj.frozen) { return 0; };
      
      var stackObj = {

        type: "Individual",
        socketID: playerObj.socketID,
        destination: "Update Character Status",
        data: {status: "frozen", newValue: false}
  
      };

      obj.stack.push(stackObj);

  }; //end handleFrozenStatusTrue()






  updateHecateStatuses(obj) {

    if (!obj.rO.roles["Hecate"].inGame) { return 0; };

    obj.rO.roles["Hecate"].multiplication(obj);
    obj.rO.roles["Hecate"].addSpellBoost(obj);

  }; //end updateHecateStatuses


  updateBombermanStatuses(obj) {

    if (!obj.rO.roles["Bomberman"].inGame) { return 0; };

    //increaseBurnCounter needs to go before firePunch, otherwise
    //the person gets double burned

    obj.rO.roles["Bomberman"].plantBomb(obj);
    obj.rO.roles["Bomberman"].firePunch(obj);


  }; //end updateBombermanStatuses


  updateDelayerStatuses(obj) {

    if (!obj.rO.roles["Delayer"].inGame) { return 0; };

    obj.rO.roles["Delayer"].increaseDelayerCountByOne(obj);

  };



  updateLieutenantBlitzStatuses(obj) {

    obj.rO.roles["Lieutenant Blitz"].updateInjuredStatus(obj);

  };


  updateBabyDollPowers(obj) {

    obj.rO.roles["Baby Doll"].setPerishSongArray(obj);

  };


  updateSpiritualistStatuses(obj) {

    if (!obj.rO.roles["Spiritualist"].inGame) { return 0; };

    obj.rO.roles["Spiritualist"].plantSoulMark(obj);

  }; //end updateSpiritualistStatuses

  /* Not needed due to hurricane + backstabber + persequor?
  updatePersequorPowers(obj) {

    if (!obj.rO.roles["Persequor"].inGame) { return 0; };

    obj.rO.roles["Persequor"].switchBackIdentities(obj);
    obj.rO.roles["Persequor"].identityTheft(obj);

  }; */


  updateKaguyaPowers(obj) {

    obj.rO.roles["Kaguya"].addEntrancedStatus(obj);

  };


  updateBackstabberPowers(obj) {

    if (!obj.rO.roles["Backstabber"].inGame) { return 0; };

    obj.rO.roles["Backstabber"].betray(obj);

  };


  //backstabber can be before or after hurricane - doesn't matter since
  //it's a permanent switch
  handleBackstabberPersequorAndHurricane(obj) {

  	var hurricaneActivated = (obj.rO.roles["Noah"].hurricane == "activated");

  	var persequorSwapActivated = (obj.rO.roles["Persequor"].
  		powersHistory[obj.rD.missionNo].switchedName != "nobody chosen");

  	var persequorSwapBackActivated = (obj.rO.roles["Persequor"].
  		powersHistory[(obj.rD.missionNo -1)].switchedName != "nobody chosen");


  	if (hurricaneActivated) {

  		if (persequorSwapActivated) {

  			obj.rO.roles["Noah"].useHurricane(obj);
  			//inside backstabber function, it checks if backstab has been activated
  			this.updateBackstabberPowers(obj);
  			obj.rO.roles["Persequor"].identityTheft(obj);

  			return 0;

  		} else if (persequorSwapBackActivated) {

  			obj.rO.roles["Persequor"].switchBackIdentities(obj);
  			this.updateBackstabberPowers(obj);
  			obj.rO.roles["Noah"].useHurricane(obj);

  			return 0;

  		} else {

  			this.updateBackstabberPowers(obj);
  			obj.rO.roles["Noah"].useHurricane(obj);

  			return 0;

  		}; //end else

  	}; //end if (hurricaneActivated)


  	/*hurricane not activated */


  	if (persequorSwapActivated) {
      
		//inside backstabber function, it checks if backstab has been activated
		this.updateBackstabberPowers(obj);
		obj.rO.roles["Persequor"].identityTheft(obj);

  	} else if (persequorSwapBackActivated) {

		obj.rO.roles["Persequor"].switchBackIdentities(obj);
		this.updateBackstabberPowers(obj);

  	} else {

  		this.updateBackstabberPowers(obj);

  	};



  }; //end handleBackstabberPersequorAndHurricane



  updateJailerAbilities(obj) {

    if (!obj.rO.roles["Jailer"].inGame) { return 0; };

    obj.rO.roles["Jailer"].resetJailedPlayerAtEndOfNight();

  };


  updateScientistAbilities(obj) {

    if (!obj.rO.roles["Scientist"].inGame) { return 0; };
      
      obj.rO.roles["Scientist"].sendVotesToScientist(obj);
      obj.rO.roles["Scientist"].exposeVotesToEveryone(obj);

  };




  updatePearAbilities(obj) {

    if (!obj.rO.roles["Pear"].inGame) { return 0; };

    obj.rO.roles["Pear"].resetVanishVoteTarget();
    obj.rO.roles["Pear"].expose(obj);

  };




  updateLottieAbilities(obj) {

    var lottie = obj.rO.roles["Lottie"];

    lottie.removeGroupHugAndTherapyAtEndOfRound(obj);
    //setTherapy & GroupHug MUST come AFTER removeGroupHug&Therapy
    lottie.setTherapyStatus(obj);
    lottie.setGroupHugStatus(obj);

  };


  updateSaintessStatuses(obj) {
   
    obj.rO.roles["Saintess"].removeSaintessBuffsAtEndOfRound(obj);

  }; //end updateSaintessStatuses(obj)







  /*Actual Functions to Put In Server.js */

  updateInfoStartOfGame(obj) {

    obj.rO.getVillainsIdentitiesForPrincess(obj);
    obj.rO.getPrincessIdentityArrayForMarcus(obj);

    obj.rO.roles["Esper"].assignPlayersTheirPseudonyms(obj);
    obj.rO.roles["Delayer"].notifyPrincessDelayerIsInTheGame(obj);
    obj.rO.roles["Lottie"].notifyJohnOfLottiesIdentity(obj);

  };


  /*activateHolyPower should be before updateEoSenseArray
  so Princess has the most up to date info */
  updateStatusesAfterGamePhase1(obj) {

    obj.rO.roles["Saintess"].activateHolyPower(obj);
    obj.rO.roles["Hecate"].exchangeOfTheSpirits(obj);

    obj.rO.roles["Sensor"].sendScanResultsToSensor(obj);

    obj.rO.roles["Detective Chat"].sendCrossExaminationRequest(obj);

    obj.rO.roles["Princess"].updateEoSenseArray(obj);

    obj.rO.roles["Ichigo"].updateNaviSenseInfo(obj);

  };



  updateStatusesAfterGamePhase4(obj) {

    obj.rO.roles["Saintess"].
    notifyMissionTeamThatSaintessIsOnTheTeam(obj);

  };


  updateStatusesAfterGamePhase5(obj) {

    obj.rO.roles["Ranger"].antiManaRay(obj);

  };


  //before mission number changes
  updateStatusesBeforeNightPhase(obj) {
    
    //needs to be first thing
    this.updateStatusConditions(obj);

    //this applies status effects
    this.handleStatusEffectsArray(obj);

    this.updateSaintessStatuses(obj);
    this.updateLottieAbilities(obj);

    this.updatePearAbilities(obj);
    this.updateScientistAbilities(obj);

    obj.rO.roles["Marcus"].counterEspionage(obj);
    obj.rO.roles["Aura Knight"].addAuraBoost(obj);
    obj.rO.roles["Detective Chat"].sendInterrogationResults(obj);
    
    this.updateNoahAbilities(obj);
    this.updateToxiturtleAbilities(obj)
    this.updateLieutenantBlitzStatuses(obj);
    this.updateDelayerStatuses(obj);
    this.updateHecateStatuses(obj);
    this.updateBabyDollPowers(obj);
    this.updateBombermanStatuses(obj);
    this.updateSpiritualistStatuses(obj);
    this.updateKaguyaPowers(obj);
    this.updateParalysisAbilitiesEffect(obj);
    
    obj.rO.roles["Princess"].updateHeartacheDefense(obj);


    obj.rO.roles["Princess"].updateEoSenseArray(obj);
    obj.rO.roles["Ichigo"].updateNaviSenseInfo(obj);
    
  
  };


  //this is right before mission number is updated +1
  updateStatusesAfterNightPhase(obj) {

    this.updateJailerAbilities(obj);

    obj.rO.roles["Esper"].resetTelepathyArrayAtEndOfRound();


    /*put switch BEFORE update status arrays because 
    Persequor/Backstabber might steal Ranger/Princess role
    */
    this.handleBackstabberPersequorAndHurricane(obj);


    obj.rO.roles["Princess"].updateTransformationCount(obj);

    obj.rO.roles["Ranger"].updateRangerSenseArray(obj);

    obj.rO.roles["Saintess"].updateSaintessSenseArray(obj);
    
  };




}; //end class AbilityManager


module.exports = {
    AbilityManager
};