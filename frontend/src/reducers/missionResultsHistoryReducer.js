
const missionResultsHistoryReducer = (missionRH = [], action) => {

	switch (action.type) {

		case "ADD_TO_MISSION_RESULTS_HISTORY":

			var clonedArr = JSON.parse(JSON.stringify(missionRH));

			clonedArr[action.payload.missionNumber] = action.payload.missionRH;

			return clonedArr;

		default:
			return missionRH;


	}; //end switch


};


export default missionResultsHistoryReducer;