
const jailerChatMessageReducer = (jailerChatMessagesArray = [], action) => {

	switch (action.type) {

		case "JAILER_MESSAGE":
			return [...jailerChatMessagesArray, action.payload];

		default:
			return jailerChatMessagesArray;


	}; //end switch


};


export default jailerChatMessageReducer;