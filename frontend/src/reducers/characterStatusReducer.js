
//false means not used, true means used
var defaultCharStatus = {

	selectedForTelepathy: false,
	jailed: false,
	frozen: false

}; //end defaultCharStatus

/*
updated object format is: 
{"status": "jailed", newValue: ""}
*/

const characterStatusReducer = (charStatus = defaultCharStatus, action) => {

	switch (action.type) {

		case "NEW_CHARACTER_STATUS":
			return action.payload;

		case "UPDATE_CHARACTER_STATUS":

			var updatedCS = JSON.parse(JSON.stringify(charStatus));
			var obj = action.payload;

			updatedCS[obj.status] = obj.newValue;

			return updatedCS;

		default:
			return charStatus;


	}; //end switch


};


export default characterStatusReducer;