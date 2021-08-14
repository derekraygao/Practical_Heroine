
const listOfPlayersReducer = (playersArr = [], action) => {

	switch (action.type) {

		case "AVAILABLE_LIST_OF_PLAYERS":
			return action.payload;

		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return playersArr;


	}; //end switch


};


export default listOfPlayersReducer;