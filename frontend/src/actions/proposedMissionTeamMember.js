

export const proposedMissionTeamMember = (proposedMember, maxTeamSize) => {

	return (
		{
			type: "PROPOSED_MISSION_TEAM_MEMBER",
			payload: {
				name: proposedMember, 
				maxTeamSize: maxTeamSize
			}

		}
	);

};