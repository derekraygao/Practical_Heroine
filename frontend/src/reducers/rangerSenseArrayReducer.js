
//senseArray = [{name: "John", status: either "status" or "no status"}];
const rangerSenseArrayReducer = (senseArr = [], action) => {

	switch (action.type) {

		case "RANGER_SENSE_ARRAY":
			return action.payload;

		default:
			return senseArr;

	}; //end switch


};


export default rangerSenseArrayReducer;