
const showRoomControlBoolReducer = (RCBool = false, action) => {

	switch (action.type) {

		case "ROOM_CONTROL_BOOL":
			return action.payload;

		default:
			return RCBool;


	}; //end switch


};


export default showRoomControlBoolReducer;