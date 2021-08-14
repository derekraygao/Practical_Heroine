
const timerReducer = (timeInSeconds = 1000, action) => {

	switch (action.type) {

		case "TIMER_IN_SECONDS":
			return action.payload;

		case "RESET_FOR_NEW_GAME":
			return 4;

		default:
			return timeInSeconds;


	}; //end switch


};


export default timerReducer;