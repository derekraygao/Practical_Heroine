
const disconnectMessageReducer = (disconnectBool = false, action) => {

	switch (action.type) {

		case "DISCONNECT_MESSAGE":
			return action.payload;

		default:
			return disconnectBool;


	}; //end switch


};


export default disconnectMessageReducer;