
/*false means not used, true means used
The charStatus is automatically reset to default/all false
whenever client gets gamePhase 1 start message, AFTER the very
first time 
*/
var defaultCharStatus = {

	selectedForTelepathy: false,
	jailed: false,
	frozen: false,

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

		case "RESET_FOR_NEW_GAME":
			return defaultCharStatus;

		default:
			return charStatus;


	}; //end switch


};


export default characterStatusReducer;