
const powersMenuSelectionReducer = (selection = "none", action) => {

	switch (action.type) {

		case "POWER_BAR_MENU_SELECTION":
			return action.payload;

		default:
			return selection;


	}; //end switch


};


export default powersMenuSelectionReducer;