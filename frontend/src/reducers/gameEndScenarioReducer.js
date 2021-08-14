
//{winners: "heroes" or "villains", scenario: "3xs", "4/7", "dark destiny", etc.}
const gameEndScenarioReducer = (gameEndScenario = {winners: "heroes", scenario: "correct guess"}, action) => {

	switch (action.type) {

		case "GAME_END_SCENARIO":
			return action.payload;

		default:
			return gameEndScenario;


	}; //end switch


};


export default gameEndScenarioReducer;