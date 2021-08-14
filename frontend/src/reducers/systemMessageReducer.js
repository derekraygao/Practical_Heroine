
const systemMessageReducer = (systemMessage = [], action) => {

	switch (action.type) {

		case 'SYSTEM_MESSAGE':
			return [...systemMessage, action.payload];

		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return systemMessage;

	}; //switch

};

export default systemMessageReducer;

