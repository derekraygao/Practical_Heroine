
const gamePhaseReducer = (gamePhase = 0, action) => {

	switch (action.type) {

		case "GAME_PHASE":
			return action.payload;

		default:
			return gamePhase;


	}; //end switch


};


export default gamePhaseReducer;