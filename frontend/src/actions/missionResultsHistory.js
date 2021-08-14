
/*missionRHObject is latest mission results, in form of object, as well as
current mission number
that object is pushed into an array at correct index
e.g. array[1] = mission1objectinfo
*/
export const missionResultsHistory = (missionRHObject, missionNo) => {

	return (
		{
			type: "ADD_TO_MISSION_RESULTS_HISTORY",
			payload: {missionRH: missionRHObject, missionNumber: missionNo}

		}
	);

};