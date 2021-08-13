
/*socket.on("disconnect") in Home.js, and renders the 
disconnect component in App.js */

export const disconnectMessage = bool => {

	return (
		{
			type: "DISCONNECT_MESSAGE",
			payload: bool

		}
	);

};