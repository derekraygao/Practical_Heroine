
//bool is true/false
//for showing RoomControl.js component
export const showRoomControlBool = bool => {

	return (
		{
			type: "ROOM_CONTROL_BOOL",
			payload: bool

		}
	);

};