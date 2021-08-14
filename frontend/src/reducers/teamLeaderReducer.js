
const teamLeaderReducer = (teamLeaderName = "No Team Leader Yet", action) => {

	switch (action.type) {

		case "CURRENT_TEAM_LEADER":
			return action.payload;

		case "RESET_FOR_NEW_GAME":
			return "No Team Leader Yet";

		default:
			return teamLeaderName;


	}; //end switch


};


export default teamLeaderReducer;