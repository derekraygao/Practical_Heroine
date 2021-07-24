

class AbilityManager {

  constructor() {

  
  }; //end constructor



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

    obj.rO.roles["Noah"].removeThunderWaveEffect(obj);
    obj.rO.roles["Toxiturtle"].adjustGlareRemoveParalysis(obj);

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


  resetCertainStatuses(obj) {

    for (var i = 0; i < obj.pA.length; i++) {

      this.handleFrozenStatusTrue(obj.pA[i], obj);
      obj.pA[i].frozen = false;

    };

  }; //end resetCertainStatuses



  updateHecateStatuses(obj) {

    if (!obj.rO.roles["Hecate"].inGame) { return 0; };

    obj.rO.roles["Hecate"].multiplication(obj);

  }; //end updateHecateStatuses


  updateBombermanStatuses(obj) {

    if (!obj.rO.roles["Bomberman"].inGame) { return 0; };

    //increaseBurnCounter needs to go before firePunch, otherwise
    //the person gets double burned
    obj.rO.roles["Bomberman"].increaseBurnCounter(obj);

    obj.rO.roles["Bomberman"].plantBomb(obj);
    obj.rO.roles["Bomberman"].firePunch(obj);


  }; //end updateBombermanStatuses


  updateDelayerStatuses(obj) {

    if (!obj.rO.roles["Delayer"].inGame) { return 0; };

    obj.rO.roles["Delayer"].removeSlowEffect(obj);
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


  updatePersequorPowers(obj) {

    if (!obj.rO.roles["Persequor"].inGame) { return 0; };

    obj.rO.roles["Persequor"].switchBackIdentities(obj);
    obj.rO.roles["Persequor"].identityTheft(obj);

  };


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


  updateDetectiveChatAbilities(obj) {

    obj.rO.roles["Detective Chat"].interrogate(obj);

  };


  updatePearAbilities(obj) {

    if (!obj.rO.roles["Pear"].inGame) { return 0; };

    obj.rO.roles["Pear"].resetVanishVoteTarget();
    obj.rO.roles["Pear"].expose(obj);

  };


  updateLanAbilities(obj) {

    obj.rO.roles["Lan"].removeConfusedStatusAtEndOfRound(obj);

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
    obj.rO.roles["Saintess"].adjustSomeDataWhenSaintessOnTheMissionTeam(obj);

  }; //end updateSaintessStatuses(obj)




  /*Actual Functions to Put In Server.js */

  updateInfoStartOfGame(obj) {

    obj.rO.roles["Esper"].assignPlayersTheirPseudonyms(obj);
    obj.rO.roles["Delayer"].notifyPrincessDelayerIsInTheGame(obj);
    obj.rO.roles["Lottie"].notifyJohnOfLottiesIdentity(obj);

  };


  /*activateHolyPower should be before updateEoSenseArray
  so Princess has the most up to date info */
  updateStatusesAfterGamePhase1(obj) {

    obj.rO.roles["Saintess"].activateHolyPower(obj);
    obj.rO.roles["Princess"].updateEoSenseArray(obj);

  };


  //before mission number changes
  updateStatusesBeforeNightPhase(obj) {

    this.resetCertainStatuses(obj);

    obj.rO.roles["Princess"].updateEoSenseArray(obj);
    obj.rO.roles["Princess"].updateHeartacheDefense(obj);

    this.updateSaintessStatuses(obj);
    this.updateLottieAbilities(obj);
    this.updateLanAbilities(obj);
    this.updatePearAbilities(obj);
    this.updateDetectiveChatAbilities(obj);
    this.updateScientistAbilities(obj);
    
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
    
	  

    
  };



  updateStatusesAfterNightPhase(obj) {

    this.updateJailerAbilities(obj);

    obj.rO.roles["Esper"].resetTelepathyArrayAtEndOfRound();

    obj.rO.roles["Princess"].updateTransformationCount(obj);


    this.handleBackstabberPersequorAndHurricane(obj);

    
  };




}; //end class AbilityManager


module.exports = {
    AbilityManager
};