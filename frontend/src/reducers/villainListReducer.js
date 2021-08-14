
const villainListReducer = (villainsArray = [], action) => {

	switch (action.type) {

		case "VILLAINS_ARRAY":
			return action.payload;

		case "RESET_FOR_NEW_GAME":
			return [];

		default:
			return villainsArray;


	}; //end switch


};


export default villainListReducer;