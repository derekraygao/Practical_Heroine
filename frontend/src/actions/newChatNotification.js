
/*This is for the menu-bar, so it turns red when new chat 
arrives, but the chatbox is not active/focus/shown */

export const newChatNotification = bool => {

	return (
		{
			type: "NEW_CHAT_BOOL",
			payload: bool

		}
	);

};