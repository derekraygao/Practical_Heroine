
const missionResultsHistoryReducer = (missionRH = [], action) => {

	switch (action.type) {

		case "ADD_TO_MISSION_RESULTS_HISTORY":

			var clonedArr = JSON.parse(JSON.stringify(missionRH));

			clonedArr[action.payload.missionNumber] = action.payload.missionRH;

			
			return clonedArr;


		case "COMPLETELY_REPLACE_MISSION_RESULTS_HISTORY":
			return action.payload;


		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return missionRH;


	}; //end switch


};


export default missionResultsHistoryReducer;