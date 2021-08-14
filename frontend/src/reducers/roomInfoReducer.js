
var defaultRoomInfo = {

	roomName: "No Room Name!",
	roomStatus: "Open",
	jitsiRoomName: "No Jitsi Room Name!",
	roomMaster: "Nobody !",
	playerList: [], /*playerList individual elements:{name: , ready: , connection: }*/

}; //end defaultCharStatus




const roomInfoReducer = (roomInfo = defaultRoomInfo, action) => {

	switch (action.type) {

		case "ALL_ROOM_INFO":
			return action.payload;


		case "UPDATE_ROOM_PLAYER_LIST":

			var updatedRoomInfoObj = JSON.parse(JSON.stringify(roomInfo));
			var newPlayerList = action.payload;

			updatedRoomInfoObj["playerList"] = newPlayerList;

			return updatedRoomInfoObj;


		case "UPDATE_ROOM_MASTER":

			var updatedRoomInfoObj = JSON.parse(JSON.stringify(roomInfo));

			updatedRoomInfoObj["roomMaster"] = action.payload;

			return updatedRoomInfoObj;


		case "UPDATE_ROOM_STATUS":

			var updatedRoomInfoObj = JSON.parse(JSON.stringify(roomInfo));

			updatedRoomInfoObj["roomStatus"] = action.payload;

			return updatedRoomInfoObj;



		case "UPDATE_JITSI_ROOM":

			var updatedRoomInfoObj = JSON.parse(JSON.stringify(roomInfo));

			updatedRoomInfoObj["jitsiRoomName"] = action.payload;

			return updatedRoomInfoObj;


		default:
			return roomInfo;


	}; //end switch


};


export default roomInfoReducer;