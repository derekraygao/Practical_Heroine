
/*
unlike missionResultsHistory.js which is just latest Mission Results 
Info, this is the ENTIRE missionResultsHistory object from server
-used for rejoining room
*/
export const replaceMissionResultsHistory = (missionRHObjectAll) => {

	return (
		{
			type: "COMPLETELY_REPLACE_MISSION_RESULTS_HISTORY",
			payload: missionRHObjectAll

		}
	);

};