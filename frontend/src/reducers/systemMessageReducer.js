
export default (systemMessage = [], action) => {

	switch (action.type) {

		case 'SYSTEM_MESSAGE':
			return [...systemMessage, action.payload];

		default:
			return systemMessage;

	}; //switch

};

