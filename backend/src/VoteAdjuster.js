

class VoteAdjuster {

	constructor() {

	
	}; //end constructor



	adjustMissionVotes(obj) {

		if (obj.rO.roles["Saintess"].inGame 
			&& obj.pA[obj.rO.roles["Saintess"].index].selectedForMission) {

			this.adjustVotesSaintessOnTeam(obj);

		} else {

			this.adjustVotesSaintessNotOnTeam(obj);

		};

	}; //end adjustMissionVotes(obj);


	adjustVotesSaintessNotOnTeam(obj) {

		obj.rO.roles["Toxiturtle"].adjustMissionVotesPoisoned(obj);

		obj.rO.roles["Umbra Lord"].adjustMissionVotesCorrupted(obj);

		obj.rO.roles["Reverser"].adjustReverseVote(obj);
		obj.rO.roles["Reverser"].adjustVotesMirrorWorld(obj);

		obj.rO.roles["Lan"].adjustMissionVotesConfused(obj);

		obj.rO.roles["Esper"].adjustMissionVotePsybomb(obj);
		obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
		obj.rO.roles["Delayer"].adjustDelayerMissionVote(obj);
		obj.rO.roles["Backstabber"].adjustVoteVengeance(obj);
		obj.rO.roles["Spiritualist"].adjustSpiritualistMissionVote(obj);

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			obj.rO.roles["Bomberman"].adjustMissionVotesBurn(obj.pA[i]);
			obj.rO.roles["Bomberman"].adjustMissionVotesBomb(obj.pA[i]);

			obj.rO.roles["Lottie"].adjustMissionVotesLottie(obj.pA[i]);

			obj.rO.roles["Saintess"].adjustMissionVotesBless(obj.pA[i]); 

			obj.rO.roles["Ranger"].adjustMissionVotesShrink(obj.pA[i]);

			obj.rO.roles["Hecate"].adjustMissionVotesMultiplication(obj.pA[i]);


		};

		obj.rO.roles["Marcus"].adjustVoteBerserk(obj);
		obj.rO.roles["Marcus"].adjustVoteTranscendence(obj);

		obj.rO.roles["Ichigo"].adjustVotesHolyStrike(obj);

		obj.rO.roles["Lottie"].adjustMissionVotesPrincessAndLottie(obj);

		obj.rO.roles["Pear"].adjustMissionVoteVanish(obj);

		obj.rO.roles["Baby Doll"].adjustMissionVotesPerishSong(obj);


		obj.rO.roles["Persequor"].adjustMissionVoteCopyCat(obj);

		//safeguard needs to be near the end
		obj.rO.roles["Saintess"].adjustMissionVotesSafeguard(obj);


		//should be very last thing
		obj.rO.roles["Baby Doll"].adjustMissionVotesLullaby(obj);


	}; //end adjustMissionVotesSaintessNotOnTeam()


	/* need to think this through....can saintess, lottie, marcus,
	and ichigo be on the same team? */
	/*Saintess & Ichigo can never be in same game, 
	so no need to do Ichigo powers */
	adjustVotesSaintessOnTeam(obj) {

		obj.rO.roles["Lieutenant Blitz"].adjustVotesBlitz(obj);
		obj.rO.roles["Delayer"].adjustDelayerMissionVote(obj);
		obj.rO.roles["Backstabber"].adjustVoteVengeance(obj);

		for (var i = 0; i < obj.pA.length; i++) {

			if (!obj.pA[i].selectedForMission) { continue; };

			obj.rO.roles["Ranger"].adjustMissionVotesShrink(obj.pA[i]);

			obj.rO.roles["Saintess"].adjustMissionVotesBless(obj.pA[i]); 

		}; //end for

		obj.rO.roles["Marcus"].adjustVoteBerserk(obj);
		obj.rO.roles["Marcus"].adjustVoteTranscendence(obj);

		obj.rO.roles["Pear"].adjustMissionVoteVanish(obj);
		obj.rO.roles["Persequor"].adjustMissionVoteCopyCat(obj);

		//safeguard needs to be at the very end
		obj.rO.roles["Saintess"].adjustMissionVotesSafeguard(obj);

	};



	adjustTeamVotes(obj) {

		obj.rO.roles["Delayer"].adjustDelayerTeamVote(obj);

		obj.rO.roles["Ranger"].adjustTeamVotesShrink(obj);
		obj.rO.roles["Saintess"].adjustTeamVotesBless(obj);

	}; //end adjustTeamVotes





}; //end class VoteAdjuster




module.exports = {
    VoteAdjuster
};
