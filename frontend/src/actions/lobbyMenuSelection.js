
//this refers to Lobby Page's left menu bar buttons like Lobby, Game Rules, Contact, etc.
export const lobbyMenuSelection = menu => {

	return (
		{
			type: "LOBBY_MENU_SELECTION",
			payload: menu

		}
	);

};