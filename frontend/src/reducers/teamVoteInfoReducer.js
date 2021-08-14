
const teamVoteInfoReducer = (teamVoteInfo = {}, action) => {

	switch (action.type) {

		case "TEAM_VOTE_INFO_Object":

			return action.payload;

		case "RESET_FOR_NEW_GAME":
			return {};

		default:
			return teamVoteInfo;


	}; //end switch


};


export default teamVoteInfoReducer;