
const villainChatMessageReducer = (villainChatMessagesArray = [], action) => {

	switch (action.type) {

		case "VILLAIN_MESSAGE":
			return [...villainChatMessagesArray, action.payload];

		default:
			return villainChatMessagesArray;


	}; //end switch


};


export default villainChatMessageReducer;