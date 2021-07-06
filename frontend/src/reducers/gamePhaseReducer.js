
const gamePhaseReducer = (gamePhase = 1, action) => {

	switch (action.type) {

		case "GAME_PHASE":
			return action.payload;

		default:
			return gamePhase;


	}; //end switch


};


export default gamePhaseReducer;