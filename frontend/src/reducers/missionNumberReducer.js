
const missionNumberReducer = (missionNumber = 1, action) => {

	switch (action.type) {

		case "CURRENT_MISSION_NUMBER":
			return action.payload;

		case "RESET_FOR_NEW_GAME":
			return 1;

		default:
			return missionNumber;


	}; //end switch


};


export default missionNumberReducer;