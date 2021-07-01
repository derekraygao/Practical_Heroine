
const playerRoleReducer = (playerRole = "none", action) => {

	switch (action.type) {

		case "PLAYER_ROLE":
			return action.payload;

		default:
			return playerRole;


	}; //end switch


};


export default playerRoleReducer;