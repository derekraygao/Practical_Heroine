
const jailerChatMessageReducer = (jailerChatMessagesArray = [], action) => {

	switch (action.type) {

		case "JAILER_MESSAGE":
			return [...jailerChatMessagesArray, action.payload];

		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return jailerChatMessagesArray;


	}; //end switch


};


export default jailerChatMessageReducer;