
//false means not used, true means used
var defaultPH = {

	"Umbra Lord": {
					corruption: "Nobody Selected",
					absoluteYes: "No",
					absoluteNo: "No"
				  },

	"Marcus": {
				berserkMissionNo: 0,
			  },


	"Saintess": {
				  senseArray: [],
				},

	"Ichigo": {
				shield: false,
				strike: false,
			  },


	"Oracle": {
				"1 and 1": false,
				"At Least 1 Good": false,
				"At Least 1 Evil and Good": false,
				"Princess": false,
				"Roles": false
			  },

	"Noah": {
				hurricane: 0 //missionNo it was used during
			},

	"Hecate": {
				exchangeOfSpirits: false,
				exchangeArray: []
			  },

	"Reverser": {
				 mirrorWorldNormal: false,
				 mirrorWorldReverse: false,
				},

	"Backstabber": {
					originalBackstabber: "nobody",
				   },

	"Baby Doll": { //this is for previousSingTargets
				   //since you cannot choose same player twice in a row
					
					1: "nobody chosen",
					2: "nobody chosen",
					3: "nobody chosen",
					4: "nobody chosen",
					5: "nobody chosen",
					6: "nobody chosen",
					7: "nobody chosen",		
				 },

	"Toxiturtle": {
					poisonBeak: [],
				  },

	"Psychologist": {
					 pistan: false,
					 did: false,
					},

	"Kaguya": {
				darkDestiny: "nobody chosen"
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