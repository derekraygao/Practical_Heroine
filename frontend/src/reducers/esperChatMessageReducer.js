
const esperChatMessageReducer = (esperChatMessagesArray = [], action) => {

	switch (action.type) {

		case "ESPER_MESSAGE":
			return [...esperChatMessagesArray, action.payload];

		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return esperChatMessagesArray;


	}; //end switch


};


export default esperChatMessageReducer;