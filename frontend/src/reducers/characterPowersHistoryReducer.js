
//false means not used, true means used
var defaultPH = {

	"Umbra Lord": {
					corruption: "Nobody Selected",
					absoluteTeamVoteYesUsed: "No",
					absoluteTeamVoteNoUsed: "No"
				  },

	"Princess": {
				  eoSenseArray: [{name: "Myself", statusArray: ["This table will be updated after Power Phase 1 ends."]}],
				  transformed: 0,
				},

	"Marcus": {
				berserkMissionNo: 0,
			  },


	"Saintess": {
				  senseArray: [{name: "nothing yet", isStatusNormal: "none"}],
				},

	"Ichigo": {
				shield: false,
				strike: false,
				naviSenseInfo: {name: "Myself", statusArray: ["This table will be updated after Power Phase 1 ends."]}
			  },


	"Oracle": {
				"1 and 1": false,
				"At Least 1 Good": false,
				"At Least 1 Evil and Good": false,
				"Princess": false,
				"Roles": false,
				"LightAndDarkUsedArray": [],
			  },


	"Detective Chat": {
						"Cross Examination Target": "nobody chosen"
					  },

	"Ranger": {
				senseArray: [{name: "nothing yet", status: "none"}],
			  },


	"Noah": {
				hurricane: 0 //missionNo it was used during
			},

	"Hecate": {
				exchangeOfSpirits: false,
				exchangeArray: []
			  },

	"Delayer": {
	        	 1: {"slowTarget": "nobody chosen"},
	        	 2: {"slowTarget": "nobody chosen"},
	        	 3: {"slowTarget": "nobody chosen"},
	        	 4: {"slowTarget": "nobody chosen"},
	        	 5: {"slowTarget": "nobody chosen"},
	        	 6: {"slowTarget": "nobody chosen"},
	        	 7: {"slowTarget": "nobody chosen"},
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

			localStorage.setItem("Character Power History", JSON.stringify(updatedPH));

			return updatedPH;


		case "RESET_FOR_NEW_GAME":
			return defaultPH; 

		default:
			return powersHistory;


	}; //end switch


};


export default characterPowersHistoryReducer;