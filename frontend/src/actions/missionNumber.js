
//missionNumber is just an integer number
export const missionNumber = currentMissionNumber => {

	return (
		{
			type: "CURRENT_MISSION_NUMBER",
			payload: currentMissionNumber

		}
	);

};