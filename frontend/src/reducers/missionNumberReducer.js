
const missionNumberReducer = (missionNumber = 1, action) => {

	switch (action.type) {

		case "CURRENT_MISSION_NUMBER":
			return action.payload;

		default:
			return missionNumber;


	}; //end switch


};


export default missionNumberReducer;