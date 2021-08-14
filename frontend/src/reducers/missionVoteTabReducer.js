
const missionVoteTabReducer = (tab = "mission", action) => {

	switch (action.type) {

		case "CURRENT_MISSION_VOTE_TAB":
			return action.payload;

		default:
			return tab;


	}; //end switch


};


export default missionVoteTabReducer;