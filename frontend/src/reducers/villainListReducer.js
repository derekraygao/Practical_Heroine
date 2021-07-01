
const villainListReducer = (villainsArray = [], action) => {

	switch (action.type) {

		case "VILLAINS_ARRAY":
			return action.payload;

		default:
			return villainsArray;


	}; //end switch


};


export default villainListReducer;