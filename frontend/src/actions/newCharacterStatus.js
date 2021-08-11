
/*
var charStatusObj = {

	selectedForTelepathy: false,
	jailed: false,
	frozen: false,

}; //end defaultCharStatus
*/

export const newCharacterStatus = (newStatusObj) => {

	return (
		{
			type: "NEW_CHARACTER_STATUS",
			payload: newStatusObj
		}
	);

};