
var defaultPH = {

	"Umbra Lord": {
					corruption: "Nobody Selected",
					absoluteYes: "No",
					absoluteNo: "No"
				  },
	"Marcus": {

			  },

	"Oracle": {
				"1 and 1": false,
				"At Least 1 Good": false,
				"At Least 1 Evil and Good": false,
				"Princess": false,
				"Roles": false
			  },


}; //end defaultPH

/*
updated object format is: 
{role: "Umbra Lord", power: "corruption", newValue: ""}
*/

const characterPowersHistoryReducer = (powersHistory = defaultPH, action) => {

	switch (action.type) {

		case "POWERS_HISTORY":
			return action.payload;

		case "UPDATE_POWERS_HISTORY_FOR_A_CHARACTER":

			var updatedPH = JSON.parse(JSON.stringify(powersHistory));
			var obj = action.payload;

			updatedPH[obj.role][obj.power] = obj.newValue;

			return updatedPH; 

		default:
			return powersHistory;


	}; //end switch


};


export default characterPowersHistoryReducer;