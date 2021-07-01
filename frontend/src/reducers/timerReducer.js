
const timerReducer = (timeInSeconds = 1, action) => {

	switch (action.type) {

		case "TIMER_IN_SECONDS":
			return action.payload;

		default:
			return timeInSeconds;


	}; //end switch


};


export default timerReducer;