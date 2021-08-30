
const lobbyMenuSelectionReducer = (lobbyMenuSelection = "Lobby", action) => {

	switch (action.type) {

		case "LOBBY_MENU_SELECTION":
			return action.payload;

		default:
			return lobbyMenuSelection;


	}; //end switch


};


export default lobbyMenuSelectionReducer;