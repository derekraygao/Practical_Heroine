
const playerNameReducer = (playerName = "Anonymous", action) => {

	switch (action.type) {

		case "PLAYER_NAME":
			return action.payload;

		default:
			return playerName;


	}; //end switch


};


export default playerNameReducer;