
const villainChatMessageReducer = (villainChatMessagesArray = [], action) => {

	switch (action.type) {

		case "VILLAIN_MESSAGE":
			return [...villainChatMessagesArray, action.payload];

		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return villainChatMessagesArray;


	}; //end switch


};


export default villainChatMessageReducer;