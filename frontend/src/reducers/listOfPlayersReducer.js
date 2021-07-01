
const listOfPlayersReducer = (playersArr = [], action) => {

	switch (action.type) {

		case "AVAILABLE_LIST_OF_PLAYERS":
			return action.payload;

		default:
			return playersArr;


	}; //end switch


};


export default listOfPlayersReducer;