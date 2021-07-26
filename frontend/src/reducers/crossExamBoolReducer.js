
const crossExamBoolReducer = (XXNBool = false, action) => {

	switch (action.type) {

		case "CROSS_EXAM_BOOL":
			return action.payload;

		default:
			return XXNBool;


	}; //end switch


};


export default crossExamBoolReducer;