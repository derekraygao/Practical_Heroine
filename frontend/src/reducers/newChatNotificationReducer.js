
const newChatNotificationReducer = (chatBool = false, action) => {

	switch (action.type) {

		case "NEW_CHAT_BOOL":
			return action.payload;

		default:
			return chatBool;


	}; //end switch


};


export default newChatNotificationReducer;