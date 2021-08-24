

class VoteAdjuster {

	constructor() {

	
	}; //end constructor



	_75PercentChanceTrue() {

		var ranNum = (Math.floor(Math.random() * 4) + 1);

		if (ranNum === 4) {
			return false;
		};

		return true;

	};


	adjustMissionVotesConfusion(obj) {

		var forLength = obj.pA.length;

		for (var i = 0; i < forLength; i++) {

			if (!obj.pA[i].confused) { continue; };

			if (this._75PercentChanceTrue()) {
				obj.pA[i].missionVote *= -1;
			};


		}; //end for

	}; //end adjustMissionVotesWithStatuses


	//for Hecate + Aura Knight
	adjustMissionVotesBoost(obj) {

		var forLength = obj.pA.length;

		for (var i = 0; i < forLength; i++) {

			if (obj.pA[i].boost == 0) { continue; };

			if (obj.pA[i].missionVote >= 0) {

				obj.pA[i].missionVote += obj.pA[i].boost;
				obj.pA[i].boost = 0;

			} else {

				obj.pA[i].missionVote -= obj.pA[i].boost;
				obj.pA[i].boost = 0;

			}; //end else

		}; //end for

	}; //adjustMissionVotesBoost



	adjustMissionVotesEnergyPool(playerObj) {

		if (playerObj.energyPool == 0) { return 0; };

		playerObj.missionVote += playerObj.energyPool;
		playerObj.energyPool = 0;

	}; //end adjustMissionVotesEnergyPool(playerObj)



	adjustMissionVotes(obj) {

		if (obj.rO.roles["Saintess"].inGame 
			&& obj.pA[obj.rO.roles["Saintess"].index].selectedForMission) {

			this.adjustVotesSaintessOnTeam(obj);

		} else {

			this.adjustVotesSaintessNotOnTeam(obj);

		};

	}; //end adjustMissionVotes(obj);


	adjustVotesSaintessNotOnTeam(obj) {

		/*base voting powers adjustment
		 Remember some powers like Final Heaven, Blitz, etc. must be multiply, because they rely on 
		 normal voting to tell whether vote power should be + or -
		*/
		obj.rO.roles["Lan"].adjustMissionVotesLanFinalHeaven(obj);
		obj.rO.roles["Kaguya"].adjustMissionVotesMoonblast(obj);
		obj.rO.roles["Umbra Lord"].adjustMissionVotesBideMeteor(obj);
		obj.rO.roles["Esper"].adjustMissionVotePsybomb(obj);
		obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
		obj.rO.roles["Delayer"].adjustDelayerMissionVote(obj);
		obj.rO.roles["Backstabber"].adjustVoteVengeance(obj);
		obj.rO.roles["Spiritualist"].adjustSpiritualistMissionVote(obj);


		this.adjustMissionVotesBoost(obj);


		//reverse powers/abilities
		obj.rO.roles["Umbra Lord"].adjustMissionVotesCorrupted(obj);
		obj.rO.roles["Reverser"].adjustVotesMirrorWorld(obj);
		obj.rO.roles["Noah"].adjustMissionVotesNightmareSyndromeZombie(obj);
		this.adjustMissionVotesConfusion(obj);

		
		//Toxiturtle needs to be 2nd to last thing
		obj.rO.roles["Toxiturtle"].adjustMissionVotesPoisoned(obj);

		/*jailed needs to be the last thing since it changes
		base vote power to 0! */
		obj.rO.roles["Jailer"].adjustMissionVotesJailed(obj);

		/* First +/- power adjustment, then multiplication * */
		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			//injured sets base vote power to 0, needs to be first here
			obj.rO.roles["Lieutenant Blitz"].adjustMissionVotesInjured(obj.pA[i]);

			obj.rO.roles["Bomberman"].adjustMissionVotesBurn(obj.pA[i]);
			obj.rO.roles["Bomberman"].adjustMissionVotesBomb(obj.pA[i], obj);

			this.adjustMissionVotesEnergyPool(obj.pA[i]);
			
			obj.rO.roles["Noah"].adjustMissionVotesZombieRecovered(obj.pA[i]);


			obj.rO.roles["Lottie"].adjustMissionVotesLottie(obj.pA[i]);

			obj.rO.roles["Princess"].adjustMissionVotesHeartacheDefense(obj.pA[i]);

			obj.rO.roles["Saintess"].adjustMissionVotesCuraga(obj.pA[i]); // +

			//below are multiplication powers 
			obj.rO.roles["Saintess"].adjustMissionVotesBless(obj.pA[i]); // *

			obj.rO.roles["Ranger"].adjustMissionVotesShrink(obj.pA[i]);

			obj.rO.roles["Hecate"].adjustMissionVotesMultiplication(obj.pA[i]);


		}; //end for


		obj.rO.roles["Persequor"].adjustMissionVoteCopyCat(obj);

		obj.rO.roles["Marcus"].adjustVoteBerserk(obj);

		/*reversing powers need to be after berserk but 
		before transcendence*/
		obj.rO.roles["Reverser"].adjustReverseVote(obj);
		obj.rO.roles["Kaguya"].adjustMissionVotesEntranced(obj);

		obj.rO.roles["Marcus"].adjustVoteTranscendence(obj);

		obj.rO.roles["Ichigo"].adjustVotesHolyStrike(obj);

		obj.rO.roles["Lottie"].adjustMissionVotesPrincessAndLottie(obj);

		obj.rO.roles["Pear"].adjustMissionVoteVanish(obj);

		obj.rO.roles["Baby Doll"].adjustMissionVotesPerishSong(obj);

		/*convert to positive (need to be near the end)*/
		obj.rO.roles["Saintess"].adjustMissionVotesSafeguard(obj);
		obj.rO.roles["Pharaoh"].adjustMissionVotesFriendship(obj);

		//should be 2nd to last
		obj.rO.roles["Baby Doll"].adjustMissionVotesLullaby(obj);

		//very last thing
		obj.rO.roles["Delayer"].adjustMissionVotesSlow(obj);

	}; //end adjustMissionVotesSaintessNotOnTeam()


	/* need to think this through....can saintess, lottie, marcus,
	and ichigo be on the same team? */
	/*Saintess & Ichigo can never be in same game, 
	so no need to do Ichigo powers */
	adjustVotesSaintessOnTeam(obj) {

		console.log("VoteAdjuster.js: Saintess on the Mission Team");

		obj.rO.roles["Saintess"].adjustSomeDataWhenSaintessOnTheMissionTeam(obj);

		/*base voting powers adjustment
		 Remember some powers like Final Heaven, Blitz, etc. must be multiply, because they rely on 
		 normal voting to tell whether vote power should be + or -
		*/
		obj.rO.roles["Lan"].adjustMissionVotesLanFinalHeaven(obj);
		obj.rO.roles["Kaguya"].adjustMissionVotesMoonblast(obj);
		obj.rO.roles["Umbra Lord"].adjustMissionVotesBideMeteor(obj);
		obj.rO.roles["Esper"].adjustMissionVotePsybomb(obj);
		obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
		obj.rO.roles["Delayer"].adjustDelayerMissionVote(obj);
		obj.rO.roles["Backstabber"].adjustVoteVengeance(obj);
		obj.rO.roles["Spiritualist"].adjustSpiritualistMissionVote(obj);

		this.adjustMissionVotesBoost(obj);

		/*jailed needs to be the last thing since it changes
		base vote power to 0! */
		obj.rO.roles["Jailer"].adjustMissionVotesJailed(obj);

		/* First +/- power adjustment, then multiplication * */

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };


			obj.rO.roles["Lottie"].adjustMissionVotesLottie(obj.pA[i]);

			obj.rO.roles["Princess"].adjustMissionVotesHeartacheDefense(obj.pA[i]);

			obj.rO.roles["Saintess"].adjustMissionVotesCuraga(obj.pA[i]); // +

			//below are multiplication powers 
			obj.rO.roles["Saintess"].adjustMissionVotesBless(obj.pA[i]); // *

			obj.rO.roles["Hecate"].adjustMissionVotesMultiplication(obj.pA[i]);

		}; //end for

		obj.rO.roles["Marcus"].adjustVoteBerserk(obj);
		obj.rO.roles["Marcus"].adjustVoteTranscendence(obj);

		obj.rO.roles["Ichigo"].adjustVotesHolyStrike(obj);

		obj.rO.roles["Lottie"].adjustMissionVotesPrincessAndLottie(obj);

		obj.rO.roles["Pear"].adjustMissionVoteVanish(obj);

		/*Convert to positive needs to be near the end*/
		obj.rO.roles["Saintess"].adjustMissionVotesSafeguard(obj);
		obj.rO.roles["Pharaoh"].adjustMissionVotesFriendship(obj);

	};



	adjustTeamVotes(obj) {

		obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);

		obj.rO.roles["Ranger"].adjustTeamVotesShrink(obj);
		obj.rO.roles["Saintess"].adjustTeamVotesBless(obj);

		obj.rO.roles["Princess"].adjustTeamVotesStarPractical(obj);

	}; //end adjustTeamVotes





}; //end class VoteAdjuster




module.exports = {
    VoteAdjuster
};
