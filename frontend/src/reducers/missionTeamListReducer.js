//import {calculateNumberofTeamMembers} from './calculateNumberofTeamMembers.js';

const missionTeamListReducer = (missionTeamList = [], action) => {

	switch (action.type) {

		case "CURRENT_MISSION_TEAM_ARRAY":
			return action.payload;


		case "PROPOSED_MISSION_TEAM_MEMBER":

			var q = missionTeamList.indexOf(action.payload.name);


			if (q > -1) {
				return (missionTeamList.filter(element => element !== action.payload.name));
			};


			if (missionTeamList.length >= action.payload.maxTeamSize) {

				//creates clone of array WITHOUT reference to original
				var clonedArr = JSON.parse(JSON.stringify(missionTeamList));

				clonedArr.shift(); //removes 0 index element and shifts array

				clonedArr.push(action.payload.name);

				return clonedArr;

			};


			return [...missionTeamList, action.payload.name];


		case "RESET_FOR_NEW_GAME":
			return [];	


		default:
			return missionTeamList;


	}; //end switch


};


export default missionTeamListReducer;