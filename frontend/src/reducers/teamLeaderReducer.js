
const teamLeaderReducer = (teamLeaderName = "No Team Leader Yet", action) => {

	switch (action.type) {

		case "CURRENT_TEAM_LEADER":
			return action.payload;

		default:
			return teamLeaderName;


	}; //end switch


};


export default teamLeaderReducer;