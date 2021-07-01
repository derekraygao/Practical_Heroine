
const teamVoteInfoReducer = (teamVoteInfo = {}, action) => {

	switch (action.type) {

		case "TEAM_VOTE_INFO_Object":
			return action.payload;

		default:
			return teamVoteInfo;


	}; //end switch


};


export default teamVoteInfoReducer;