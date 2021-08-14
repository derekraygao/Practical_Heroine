
//{winners: "heroes" or "villains", scenario: "3xs", "4/7", etc.}
export const gameEndScenario = scenario => {

	return (
		{
			type: "GAME_END_SCENARIO",
			payload: scenario

		}
	);

};