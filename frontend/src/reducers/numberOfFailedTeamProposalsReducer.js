
const numberOfFailedTeamProposalsReducer = (numberFailed = 0, action) => {

	switch (action.type) {

		case "NUMBER_OF_FAILED_TEAM_PROPOSALS":
			return action.payload;

		default:
			return numberFailed;


	}; //end switch


};


export default numberOfFailedTeamProposalsReducer;