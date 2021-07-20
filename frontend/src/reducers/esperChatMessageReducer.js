
const esperChatMessageReducer = (esperChatMessagesArray = [], action) => {

	switch (action.type) {

		case "ESPER_MESSAGE":
			return [...esperChatMessagesArray, action.payload];

		default:
			return esperChatMessagesArray;


	}; //end switch


};


export default esperChatMessageReducer;