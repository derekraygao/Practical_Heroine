/*
RoomInfo = {

	roomMaster: "Nobody !",
	playerList: [],

};
*/


export const roomInfo = (roomInfo, type) => {

	switch (type) {

		case "All":
			return (
				{
					type: "ALL_ROOM_INFO",
					payload: roomInfo
				}
			);



		case "Room Player List":
			return (
				{	
					type: "UPDATE_ROOM_PLAYER_LIST",
					payload: roomInfo
				}
			);



		case "Room Master":
			return (
				{	
					type: "UPDATE_ROOM_MASTER",
					payload: roomInfo
				}
			);



		case "Room Status":
			return (
				{	
					type: "UPDATE_ROOM_STATUS",
					payload: roomInfo
				}
			);



		case "Jitsi":
			return (
				{
					type: "UPDATE_JITSI_ROOM",
					payload: roomInfo
				}
			); 


		default:
			return ({type: "Default"});

	}; //end switch


}; //end roomInfo